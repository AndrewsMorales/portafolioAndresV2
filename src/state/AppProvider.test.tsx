import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithApp } from '../test/render';
import { useApp } from './useApp';

/** Sonda mínima para observar el estado que expone el proveedor. */
function Probe() {
  const { lang, toggleLang, resolvedTheme, toggleTheme, focus, setFocus, t, tl } = useApp();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="theme">{resolvedTheme}</span>
      <span data-testid="focus">{focus}</span>
      <span data-testid="t">{t('nav.home')}</span>
      <span data-testid="tl">{tl({ es: 'hola', en: 'hi' })}</span>
      <button onClick={toggleLang}>lang</button>
      <button onClick={toggleTheme}>theme</button>
      <button onClick={() => setFocus('backend')}>focus</button>
    </div>
  );
}

describe('AppProvider', () => {
  it('arranca en el idioma guardado y traduce por clave', () => {
    renderWithApp(<Probe />, { lang: 'es' });
    expect(screen.getByTestId('lang').textContent).toBe('es');
    expect(screen.getByTestId('t').textContent).toBe('Inicio');
    expect(screen.getByTestId('tl').textContent).toBe('hola');
  });

  it('cambia de idioma y lo persiste', async () => {
    const user = userEvent.setup();
    renderWithApp(<Probe />);

    await user.click(screen.getByRole('button', { name: 'lang' }));

    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('t').textContent).toBe('Home');
    expect(localStorage.getItem('am.lang')).toBe('en');
  });

  it('refleja el idioma en el documento', async () => {
    const user = userEvent.setup();
    renderWithApp(<Probe />);

    expect(document.documentElement.lang).toBe('es');
    await user.click(screen.getByRole('button', { name: 'lang' }));
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toContain('Full Stack Developer');
  });

  it('alterna el tema y lo escribe en el elemento raíz', async () => {
    const user = userEvent.setup();
    renderWithApp(<Probe />);

    expect(screen.getByTestId('theme').textContent).toBe('light');

    await user.click(screen.getByRole('button', { name: 'theme' }));

    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('am.theme')).toBe('dark');
  });

  it('guarda el perfil elegido', async () => {
    const user = userEvent.setup();
    renderWithApp(<Probe />);

    expect(screen.getByTestId('focus').textContent).toBe('full');
    await user.click(screen.getByRole('button', { name: 'focus' }));
    expect(screen.getByTestId('focus').textContent).toBe('backend');
  });

  it('ignora un idioma inválido guardado en el navegador', () => {
    localStorage.setItem('am.lang', 'fr');
    renderWithApp(<Probe />, { lang: 'en' });
    expect(['es', 'en']).toContain(screen.getByTestId('lang').textContent);
  });
});
