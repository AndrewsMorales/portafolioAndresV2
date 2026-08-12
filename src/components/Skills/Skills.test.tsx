import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { skillCount } from '../../data/skills';
import { renderWithApp } from '../../test/render';
import { Skills } from './Skills';

describe('<Skills>', () => {
  it('muestra todas las tecnologías agrupadas en tarjetas por categoría', () => {
    renderWithApp(<Skills />);

    expect(screen.getByRole('heading', { name: 'Backend y datos' })).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Frontend y UI' })).toBeDefined();

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(skillCount);
  });

  it('no muestra ningún porcentaje: los niveles son cualitativos', () => {
    const { container } = renderWithApp(<Skills />);
    expect(container.textContent).not.toMatch(/\d+\s?%/);
    expect(screen.getAllByText('Uso a diario en producción').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Conocimiento de apoyo').length).toBeGreaterThan(0);
  });

  it('marca PHP como uso diario y Angular como conocimiento de apoyo', () => {
    renderWithApp(<Skills />);
    expect(screen.getByText('PHP 8').className).toContain('is-daily');
    expect(screen.getByText('Angular').className).toContain('is-working');
    expect(screen.getByText('Go').className).toContain('is-shipped');
  });

  it('pone frontend primero al elegir el perfil frontend', async () => {
    const user = userEvent.setup();
    const { container } = renderWithApp(<Skills />);

    const firstCategory = () =>
      container.querySelector('.skills__cardTitle')?.textContent;

    expect(firstCategory()).toBe('Backend y datos');

    await user.click(screen.getByRole('tab', { name: 'Frontend' }));

    expect(firstCategory()).toBe('Frontend y UI');
  });

  it('traduce los niveles al cambiar a inglés', () => {
    renderWithApp(<Skills />, { lang: 'en' });
    expect(screen.getAllByText('Daily in production').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'Backend & data' })).toBeDefined();
  });

  it('cuenta en la cabecera de cada tarjeta las tecnologías que contiene', () => {
    const { container } = renderWithApp(<Skills />);
    container.querySelectorAll<HTMLElement>('.skills__card').forEach((card) => {
      const declared = Number(card.querySelector('.skills__count')?.textContent);
      const listed = within(card).getAllByRole('listitem').length;
      expect(listed).toBe(declared);
    });
  });
});
