# Portafolio de Andrés Morales — v2

Segunda versión de mi portafolio, reescrita en **React 19 + TypeScript + Vite**.
La [v1](https://github.com/AndrewsMorales/Portafolio_AndresMorales) estaba hecha
en HTML, CSS y jQuery puro.

🔗 https://portafolio-andres-morales.vercel.app

## Qué tiene

- **Selector de perfil (Full Stack / Backend / Frontend).** Cambia el titular, el
  texto de presentación, el orden de las categorías de habilidades y el filtro de
  proyectos, para que un reclutador vea primero lo que le interesa.
- **Bilingüe es/en de verdad.** Todo el texto pasa por el sistema de i18n. Las
  claves del diccionario están tipadas contra el español, así que si falta una
  traducción **la compilación falla**.
- **Tema claro / oscuro** que arranca siguiendo al sistema y recuerda la elección.
- **Accesibilidad:** navegación por teclado, `aria-*` en pestañas y filtros, salto
  al contenido, foco visible y respeto por `prefers-reduced-motion`.
- **Sin dependencias de UI.** Los iconos son SVG propios y el CSS está escrito a
  mano; el único paquete en producción es React.

- **Niveles de habilidad honestos.** Nada de porcentajes inventados: cada tecnología
  está en el tramo que se puede sostener en una entrevista (uso diario / he
  entregado / conocimiento de apoyo).
- **Cifras comprobables por proyecto.** Salen del repositorio (commits, tablas,
  módulos), no de una estimación.
- **CV en español e inglés** generado desde `public/cv/*.html` con Chromium
  headless; el botón de descarga sirve el PDF del idioma activo.

## Regenerar el CV

```bash
cd public && python3 -m http.server 8912 &
CHROME=".../chrome-headless-shell"      # o Chrome/Brave instalado
"$CHROME" --headless --no-pdf-header-footer \
  --print-to-pdf=public/docs/CV-Andres-Morales-ES.pdf \
  http://127.0.0.1:8912/cv/es.html
```

## Estructura

```
src/
  i18n/         es.ts · en.ts · types.ts   ← diccionarios y tipos
  state/        contexto de idioma, tema y perfil
  data/         perfil, experiencia, educación, habilidades y proyectos
  hooks/        useReveal · useActiveSection
  components/   una carpeta por sección, cada una con su .tsx y su .css
```

### Reglas que sigue el código

- **CSS y JS separados del marcado.** Ningún `<style>`, ninguna hoja de estilos
  embebida y ningún `style="..."` estático: cada componente tiene su archivo
  `.css` al lado. Los únicos estilos en línea son variables CSS que dependen de
  datos en tiempo de ejecución (el ancho de una barra de nivel, el retardo de una
  animación, el matiz de una portada).
- **Todo texto visible existe en español e inglés.** Las cadenas de interfaz viven
  en `src/i18n`; las de contenido, junto al dato, como `{ es, en }`.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # typecheck + build de producción
npm run lint     # eslint
npm run preview  # sirve el build
```
