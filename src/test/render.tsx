import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';
import type { Lang } from '../i18n/types';
import { AppProvider } from '../state/AppProvider';

interface Options extends Omit<RenderOptions, 'wrapper'> {
  /** Idioma inicial; se siembra en localStorage antes de montar el proveedor. */
  lang?: Lang;
}

/** Monta un componente dentro del proveedor de idioma, tema y perfil. */
export function renderWithApp(ui: ReactElement, { lang = 'es', ...options }: Options = {}): RenderResult {
  localStorage.setItem('am.lang', lang);
  return render(<AppProvider>{ui}</AppProvider>, options);
}
