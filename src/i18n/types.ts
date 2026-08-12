import type { es } from './es';

/** Idiomas soportados por el sitio. */
export const LANGS = ['es', 'en'] as const;

export type Lang = (typeof LANGS)[number];

/** Claves válidas del diccionario (derivadas del español, que es la base). */
export type DictKey = keyof typeof es;

/** Un diccionario completo: toda clave debe existir. */
export type Dict = Record<DictKey, string>;

/**
 * Texto de contenido que vive junto al dato (experiencias, proyectos…).
 * Al ser obligatorias ambas propiedades, es imposible dejar una cadena
 * sin traducir sin romper la compilación.
 */
export interface Localized {
  es: string;
  en: string;
}

/** Lista de textos bilingües, p. ej. los logros de un puesto. */
export type LocalizedList = Localized[];
