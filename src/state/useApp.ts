import { useContext } from 'react';
import { AppContext, type AppState } from './context';

/** Acceso al idioma, tema y perfil activos. Debe usarse dentro de `AppProvider`. */
export function useApp(): AppState {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp debe usarse dentro de <AppProvider>');
  return value;
}
