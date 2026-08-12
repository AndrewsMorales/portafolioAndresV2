import { describe, expect, it } from 'vitest';
import { certifications, studies } from './education';
import { jobs } from './experience';
import { cvFor, profile, stats, strengths, yearsOfExperience } from './profile';
import { projects } from './projects';
import { SKILL_LEVELS, byLevel, orderedCategories, skillCategories, skillCount } from './skills';
import type { Localized } from '../i18n/types';

/** Recorre un objeto y devuelve todos los textos bilingües que encuentre. */
function collectLocalized(value: unknown, found: Localized[] = []): Localized[] {
  if (Array.isArray(value)) {
    value.forEach((item) => collectLocalized(item, found));
    return found;
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    if (typeof record.es === 'string' && typeof record.en === 'string') {
      found.push(record as unknown as Localized);
      return found;
    }
    Object.values(record).forEach((item) => collectLocalized(item, found));
  }
  return found;
}

describe('perfil', () => {
  it('calcula los años de experiencia desde agosto de 2022', () => {
    expect(yearsOfExperience(new Date(2026, 7, 12))).toBe(4);
    expect(yearsOfExperience(new Date(2023, 6, 1))).toBe(1);
    expect(yearsOfExperience(new Date(2030, 0, 1))).toBe(7);
  });

  it('nunca devuelve menos de un año', () => {
    expect(yearsOfExperience(new Date(2022, 8, 1))).toBe(1);
  });

  it('sirve un CV distinto por idioma y los dos son PDF', () => {
    expect(cvFor('es')).not.toBe(cvFor('en'));
    expect(cvFor('es')).toMatch(/\.pdf$/);
    expect(cvFor('en')).toMatch(/\.pdf$/);
  });

  it('expone enlaces absolutos y un correo válido', () => {
    Object.values(profile.links).forEach((link) => expect(link).toMatch(/^https:\/\//));
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('publica cuatro cifras de cabecera coherentes con los datos', () => {
    expect(stats).toHaveLength(4);
    const projectStat = stats.find((stat) => stat.id === 'projects');
    expect(Number(projectStat?.value.replace('+', ''))).toBeLessThanOrEqual(projects.length);
    const stackStat = stats.find((stat) => stat.id === 'stack');
    expect(Number(stackStat?.value.replace('+', ''))).toBeLessThanOrEqual(skillCount);
  });

  it('describe cuatro formas de trabajar con icono propio', () => {
    expect(strengths).toHaveLength(4);
    expect(new Set(strengths.map((s) => s.icon)).size).toBe(4);
  });
});

describe('experiencia', () => {
  it('va de la más reciente a la más antigua', () => {
    const starts = jobs.map((job) => job.start);
    expect([...starts].sort().reverse()).toEqual(starts);
  });

  it('usa el formato YYYY-MM y no termina antes de empezar', () => {
    jobs.forEach((job) => {
      expect(job.start).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
      if (job.end !== null) {
        expect(job.end).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
        expect(job.end >= job.start).toBe(true);
      }
    });
  });

  it('deja un único puesto vigente', () => {
    expect(jobs.filter((job) => job.end === null)).toHaveLength(1);
  });

  it('separa la experiencia de desarrollo de la de soporte', () => {
    expect(jobs.some((job) => job.kind === 'dev')).toBe(true);
    expect(jobs.some((job) => job.kind === 'support')).toBe(true);
  });

  it('describe cada puesto de desarrollo con logros concretos', () => {
    jobs
      .filter((job) => job.kind === 'dev')
      .forEach((job) => {
        expect(job.highlights.length).toBeGreaterThan(0);
        expect(job.stack.length).toBeGreaterThan(0);
      });
  });
});

describe('proyectos', () => {
  it('no repite identificadores', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('etiqueta cada proyecto con al menos un área', () => {
    projects.forEach((project) => expect(project.tags.length).toBeGreaterThan(0));
  });

  it('no expone repositorio ni capturas de lo que está bajo acuerdo de confidencialidad', () => {
    projects
      .filter((project) => project.confidential)
      .forEach((project) => {
        expect(project.repo).toBeUndefined();
        expect(project.image).toBeUndefined();
      });
  });

  it('apunta las imágenes a la carpeta pública y con extensión conocida', () => {
    projects
      .filter((project) => project.image)
      .forEach((project) => expect(project.image).toMatch(/^\/images\/.+\.(jpg|png|webp)$/));
  });

  it('usa enlaces https en repositorio y demo', () => {
    projects.forEach((project) => {
      if (project.repo) expect(project.repo).toMatch(/^https:\/\//);
      if (project.live) expect(project.live).toMatch(/^https:\/\//);
    });
  });

  it('mantiene el matiz de la portada dentro de la rueda de color', () => {
    projects.forEach((project) => {
      expect(project.hue).toBeGreaterThanOrEqual(0);
      expect(project.hue).toBeLessThan(360);
    });
  });

  it('acompaña las cifras con su etiqueta en los dos idiomas', () => {
    projects
      .filter((project) => project.metrics)
      .forEach((project) => {
        project.metrics!.forEach((metric) => {
          expect(metric.value.trim()).not.toBe('');
          expect(metric.label.es.trim()).not.toBe('');
          expect(metric.label.en.trim()).not.toBe('');
        });
      });
  });

  it('destaca solo proyectos del trabajo actual', () => {
    projects
      .filter((project) => project.featured)
      .forEach((project) => expect(project.year).toBe('2026'));
  });
});

describe('habilidades', () => {
  it('no repite una tecnología dentro de su categoría', () => {
    skillCategories.forEach((category) => {
      const names = category.skills.map((skill) => skill.name);
      expect(new Set(names).size).toBe(names.length);
    });
  });

  it('asigna a cada tecnología un nivel válido', () => {
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(SKILL_LEVELS).toContain(skill.level);
      });
    });
  });

  it('agrupa por nivel sin perder ni duplicar tecnologías', () => {
    skillCategories.forEach((category) => {
      const grouped = byLevel(category).flatMap((group) => group.skills);
      expect(grouped).toHaveLength(category.skills.length);
      expect(new Set(grouped.map((s) => s.name))).toEqual(
        new Set(category.skills.map((s) => s.name)),
      );
    });
  });

  it('no deja tramos vacíos al agrupar', () => {
    skillCategories.forEach((category) => {
      byLevel(category).forEach((group) => expect(group.skills.length).toBeGreaterThan(0));
    });
  });

  it('pone backend primero en el perfil backend y frontend en el frontend', () => {
    expect(orderedCategories('backend')[0].id).toBe('backend');
    expect(orderedCategories('frontend')[0].id).toBe('frontend');
    expect(orderedCategories('full')[0].id).toBe('backend');
  });

  it('reordena sin añadir ni quitar categorías', () => {
    (['full', 'backend', 'frontend'] as const).forEach((focus) => {
      const ordered = orderedCategories(focus);
      expect(ordered).toHaveLength(skillCategories.length);
      expect(new Set(ordered.map((c) => c.id))).toEqual(
        new Set(skillCategories.map((c) => c.id)),
      );
    });
  });

  it('no muta el arreglo original al reordenar', () => {
    const before = skillCategories.map((category) => category.id);
    orderedCategories('frontend');
    expect(skillCategories.map((category) => category.id)).toEqual(before);
  });
});

describe('formación', () => {
  it('lista estudios y certificaciones con emisor', () => {
    expect(studies.length).toBeGreaterThan(0);
    certifications.forEach((cert) => expect(cert.issuer.trim()).not.toBe(''));
  });
});

describe('regla bilingüe', () => {
  it('no deja ningún texto de contenido sin traducir', () => {
    const all = collectLocalized([jobs, projects, studies, certifications]);
    expect(all.length).toBeGreaterThan(50);

    const broken = all.filter(
      (value) => value.es.trim() === '' || value.en.trim() === '',
    );
    expect(broken).toEqual([]);
  });
});
