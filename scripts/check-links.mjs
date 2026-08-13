#!/usr/bin/env node
/**
 * Comprueba que los enlaces externos del portafolio y del CV sigan vivos.
 *
 * Un dominio caducado o un despliegue caído no rompen la compilación, así que
 * se quedan ahí durante meses: justo en el sitio donde más caro salen, que es
 * la hoja de vida que ya mandaste. Ejecuta `npm run check:links` antes de
 * publicar.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const TIMEOUT_MS = 12_000;

/** Dominios que responden con un código raro a los bots pero funcionan. */
const TOLERATED = new Map([
  ['www.linkedin.com', [999, 403]],
  ['linkedin.com', [999, 403]],
]);

async function collectUrls() {
  const files = ['src/data/projects.ts', 'src/data/profile.ts', 'index.html'];

  for (const name of await readdir('public/cv')) {
    if (name.endsWith('.html')) files.push(join('public/cv', name));
  }

  const found = new Map();

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/https?:\/\/[^\s"'<>)]+/g)) {
      const url = match[0].replace(/[.,;]$/, '');
      if (url.includes('fonts.googleapis') || url.includes('fonts.gstatic')) continue;
      if (!found.has(url)) found.set(url, new Set());
      found.get(url).add(file);
    }
  }

  return found;
}

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    // Algunos servidores no responden a HEAD; se cae a GET si hace falta.
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
    });
    if (response.status === 405 || response.status === 501) {
      response = await fetch(url, { redirect: 'follow', signal: controller.signal });
    }
    return { status: response.status };
  } catch (error) {
    return { status: 0, error: error instanceof Error ? error.message : String(error) };
  } finally {
    clearTimeout(timer);
  }
}

function isAcceptable(url, status) {
  if (status >= 200 && status < 400) return true;
  const host = new URL(url).hostname;
  return (TOLERATED.get(host) ?? []).includes(status);
}

const urls = await collectUrls();
const results = await Promise.all(
  [...urls.keys()].map(async (url) => ({ url, ...(await check(url)) })),
);

const broken = [];

for (const { url, status, error } of results.sort((a, b) => a.url.localeCompare(b.url))) {
  const ok = isAcceptable(url, status);
  const label = status === 0 ? `sin respuesta (${error})` : `HTTP ${status}`;
  console.log(`${ok ? '  ok  ' : ' ROTO '} ${url}  →  ${label}`);
  if (!ok) broken.push({ url, label, files: [...urls.get(url)] });
}

console.log(`\n${results.length} enlaces comprobados, ${broken.length} rotos.`);

if (broken.length > 0) {
  console.log('\nDónde arreglarlos:');
  for (const { url, label, files } of broken) {
    console.log(`  ${url} (${label})`);
    files.forEach((file) => console.log(`      ${file}`));
  }
  process.exit(1);
}
