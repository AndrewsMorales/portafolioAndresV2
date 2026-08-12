import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from '../i18n/en';
import { es } from '../i18n/es';
import type { Dict, DictKey, Lang, Localized } from '../i18n/types';
import { AppContext, type Focus, type Theme } from './context';

const DICTS: Record<Lang, Dict> = { es, en };

const LANG_KEY = 'am.lang';
const THEME_KEY = 'am.theme';

function readStoredLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'es' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'system';
}

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);
  const [theme, setTheme] = useState<Theme>(readStoredTheme);
  const [systemDark, setSystemDark] = useState<boolean>(systemPrefersDark);
  const [focus, setFocus] = useState<Focus>('full');

  const resolvedTheme: Exclude<Theme, 'system'> =
    theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  // Sigue los cambios de tema del sistema mientras se esté en modo `system`.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Refleja el tema en el documento y lo persiste.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Refleja el idioma en el documento (título, descripción y atributo lang).
  useEffect(() => {
    const dict = DICTS[lang];
    document.documentElement.lang = lang;
    document.title = dict['doc.title'];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dict['doc.description']);
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'es' ? 'en' : 'es')),
    [],
  );
  const toggleTheme = useCallback(
    () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [resolvedTheme],
  );

  const t = useCallback((key: DictKey) => DICTS[lang][key], [lang]);
  const tl = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      theme,
      resolvedTheme,
      toggleTheme,
      focus,
      setFocus,
      t,
      tl,
    }),
    [lang, setLang, toggleLang, theme, resolvedTheme, toggleTheme, focus, t, tl],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
