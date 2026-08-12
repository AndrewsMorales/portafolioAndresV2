import { describe, expect, it } from 'vitest';
import { en } from './en';
import { es } from './es';
import { LANGS } from './types';

const esKeys = Object.keys(es).sort();
const enKeys = Object.keys(en).sort();

describe('diccionarios', () => {
  it('define exactamente los dos idiomas soportados', () => {
    expect([...LANGS]).toEqual(['es', 'en']);
  });

  it('tiene el mismo conjunto de claves en español e inglés', () => {
    expect(enKeys).toEqual(esKeys);
  });

  it('no deja ninguna cadena vacía', () => {
    const empty = [...Object.entries(es), ...Object.entries(en)]
      .filter(([, value]) => value.trim() === '')
      .map(([key]) => key);
    expect(empty).toEqual([]);
  });

  it('no deja el texto en inglés igual al español salvo nombres propios', () => {
    // Las claves cuyo valor es un nombre propio o una sigla no se traducen.
    const allowed = new Set([
      'focus.full',
      'focus.backend',
      'focus.frontend',
      'projects.filter.fullstack',
      'projects.filter.backend',
      'projects.filter.frontend',
      'nav.projects',
      'exp.stack',
      // Nombres propios y listas de tecnologías: iguales en los dos idiomas a propósito.
      'about.data.phone',
      'hero.card.stack',
    ]);

    const identical = esKeys.filter(
      (key) =>
        !allowed.has(key) &&
        es[key as keyof typeof es] === en[key as keyof typeof en] &&
        es[key as keyof typeof es].length > 3,
    );

    expect(identical).toEqual([]);
  });

  it('no contiene marcadores de traducción pendiente', () => {
    const pending = [...Object.entries(es), ...Object.entries(en)].filter(([, value]) =>
      /\b(TODO|FIXME|XXX|TRANSLATE_ME)\b/.test(value),
    );
    expect(pending).toEqual([]);
  });
});
