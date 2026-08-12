import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { projects } from '../../data/projects';
import { renderWithApp } from '../../test/render';
import { Projects } from './Projects';

describe('<Projects>', () => {
  it('lista todos los proyectos y anuncia cuántos son', () => {
    const { container } = renderWithApp(<Projects />);
    expect(container.querySelectorAll('.projects__card')).toHaveLength(projects.length);
    expect(screen.getByText(`${projects.length} proyectos`)).toBeDefined();
  });

  it('filtra por área y vuelve a la lista completa', async () => {
    const user = userEvent.setup();
    const { container } = renderWithApp(<Projects />);

    await user.click(screen.getByRole('button', { name: 'Móvil' }));
    const mobile = projects.filter((project) => project.tags.includes('mobile'));
    expect(container.querySelectorAll('.projects__card')).toHaveLength(mobile.length);

    await user.click(screen.getByRole('button', { name: 'Todos' }));
    expect(container.querySelectorAll('.projects__card')).toHaveLength(projects.length);
  });

  it('marca el filtro activo para lectores de pantalla', async () => {
    const user = userEvent.setup();
    renderWithApp(<Projects />);

    const backend = screen.getByRole('button', { name: 'Backend' });
    await user.click(backend);

    expect(backend.getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('button', { name: 'Todos' }).getAttribute('aria-pressed')).toBe(
      'false',
    );
  });

  it('etiqueta como privado lo que está bajo acuerdo de confidencialidad', () => {
    renderWithApp(<Projects />);
    const confidential = projects.filter((project) => project.confidential);
    expect(screen.getAllByText('Privado (NDA)')).toHaveLength(confidential.length);
  });

  it('no ofrece enlace a código de los proyectos privados', () => {
    const { container } = renderWithApp(<Projects />);
    const fayette = [...container.querySelectorAll<HTMLElement>('.projects__card')].find(
      (card) => card.textContent?.includes('Fayette CRM'),
    );
    expect(fayette).toBeDefined();
    expect(fayette!.querySelector('.projects__links')).toBeNull();
  });

  it('enseña las cifras comprobables del proyecto destacado', () => {
    renderWithApp(<Projects />);
    expect(screen.getByText('384 / 452')).toBeDefined();
    // La etiqueta se repite en varios proyectos, por eso se consulta en plural.
    expect(screen.getAllByText('commits del repositorio').length).toBeGreaterThan(0);
  });

  it('genera dos iniciales para la portada cuando no hay captura', () => {
    const { container } = renderWithApp(<Projects />);
    container.querySelectorAll('.projects__coverMark').forEach((mark) => {
      expect(mark.textContent).toMatch(/^[A-ZÁÉÍÓÚÑ]{2}$/);
    });
  });

  it('abre los enlaces externos de forma segura', () => {
    const { container } = renderWithApp(<Projects />);
    container.querySelectorAll<HTMLAnchorElement>('.projects__link').forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    });
  });

  it('traduce las tarjetas al cambiar a inglés', () => {
    renderWithApp(<Projects />, { lang: 'en' });
    expect(screen.getAllByText('Private (NDA)').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'All' })).toBeDefined();
  });
});
