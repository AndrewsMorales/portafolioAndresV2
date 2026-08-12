import { createContext } from 'react';
import type { DictKey, Lang, Localized } from '../i18n/types';

/** Tema visual del sitio. `system` sigue la preferencia del sistema operativo. */
export type Theme = 'system' | 'light' | 'dark';

/** Perfil profesional con el que se quiere leer el portafolio. */
export type Focus = 'full' | 'backend' | 'frontend';

export interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;

  theme: Theme;
  /** Tema realmente aplicado una vez resuelto `system`. */
  resolvedTheme: Exclude<Theme, 'system'>;
  toggleTheme: () => void;

  focus: Focus;
  setFocus: (focus: Focus) => void;

  /** Traduce una clave del diccionario al idioma activo. */
  t: (key: DictKey) => string;
  /** Devuelve la variante del idioma activo de un texto bilingüe. */
  tl: (value: Localized) => string;
}

export const AppContext = createContext<AppState | null>(null);
