import type { DictKey } from '../i18n/types';
import type { Focus } from '../state/context';

/**
 * Nivel real de uso, no un porcentaje inventado. Cada tecnología cae en el
 * tramo que se puede sostener en una entrevista:
 *  - `daily`   → la uso todas las semanas en producción
 *  - `shipped` → he entregado trabajo real con ella
 *  - `working` → la he tocado y me defiendo, sin ser mi fuerte
 */
export type SkillLevel = 'daily' | 'shipped' | 'working';

export const SKILL_LEVELS: SkillLevel[] = ['daily', 'shipped', 'working'];

export const LEVEL_LABEL: Record<SkillLevel, DictKey> = {
  daily: 'skills.level.daily',
  shipped: 'skills.level.shipped',
  working: 'skills.level.working',
};

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: 'backend' | 'frontend' | 'mobile' | 'integrations' | 'tools';
  titleKey: DictKey;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    titleKey: 'skills.cat.backend',
    skills: [
      { name: 'PHP 8', level: 'daily' },
      { name: 'Laravel 12', level: 'daily' },
      { name: 'REST APIs', level: 'daily' },
      { name: 'MySQL / MariaDB', level: 'daily' },
      { name: 'Eloquent ORM', level: 'daily' },
      { name: 'Multi-tenant y RBAC', level: 'shipped' },
      { name: 'WebSockets (Reverb / Echo)', level: 'shipped' },
      { name: 'Colas, jobs y cron', level: 'shipped' },
      { name: 'Symfony', level: 'shipped' },
      { name: 'Go', level: 'shipped' },
      { name: 'PostgreSQL', level: 'shipped' },
      { name: 'SQLite', level: 'shipped' },
      { name: 'SQL Server', level: 'shipped' },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'skills.cat.frontend',
    skills: [
      { name: 'HTML5', level: 'daily' },
      { name: 'CSS3 / Sass', level: 'daily' },
      { name: 'JavaScript (ES6+)', level: 'daily' },
      { name: 'Blade', level: 'daily' },
      { name: 'Alpine.js', level: 'daily' },
      { name: 'jQuery', level: 'daily' },
      { name: 'Tailwind CSS', level: 'daily' },
      { name: 'Diseño responsivo y UI/UX', level: 'daily' },
      { name: 'Vite', level: 'daily' },
      { name: 'i18n (es / en)', level: 'daily' },
      { name: 'Bootstrap', level: 'shipped' },
      { name: 'PWA y modo offline', level: 'shipped' },
      { name: 'TypeScript', level: 'shipped' },
      { name: 'React', level: 'shipped' },
      { name: 'Leaflet / OpenStreetMap', level: 'shipped' },
      { name: 'Angular', level: 'working' },
    ],
  },
  {
    id: 'mobile',
    titleKey: 'skills.cat.mobile',
    skills: [
      { name: 'Flutter / Dart', level: 'shipped' },
      { name: 'Drift / SQLite offline-first', level: 'shipped' },
      { name: 'ML Kit (OCR en dispositivo)', level: 'shipped' },
      { name: 'Riverpod', level: 'working' },
      { name: 'Ionic + Capacitor', level: 'working' },
    ],
  },
  {
    id: 'integrations',
    titleKey: 'skills.cat.integrations',
    skills: [
      { name: 'Airtable API', level: 'shipped' },
      { name: 'Siigo API', level: 'shipped' },
      { name: 'Siesa', level: 'shipped' },
      { name: 'ICG', level: 'shipped' },
      { name: 'Mercado Libre (pagos)', level: 'shipped' },
      { name: 'Zona Pagos · PSE (BBVA)', level: 'shipped' },
      { name: 'MikroTik (comandos remotos)', level: 'shipped' },
      { name: 'PhpSpreadsheet / Excel', level: 'shipped' },
      { name: 'Firebase', level: 'working' },
    ],
  },
  {
    id: 'tools',
    titleKey: 'skills.cat.tools',
    skills: [
      { name: 'Git y GitHub', level: 'daily' },
      { name: 'Scrum', level: 'daily' },
      { name: 'GitHub Actions (CI/CD)', level: 'shipped' },
      { name: 'Linux y despliegues', level: 'shipped' },
      { name: 'Kanban', level: 'shipped' },
      { name: 'WordPress', level: 'shipped' },
      { name: 'Drupal', level: 'shipped' },
      { name: 'Docker', level: 'working' },
    ],
  },
];

/** Orden de las categorías según el perfil elegido en la cabecera. */
const ORDER: Record<Focus, SkillCategory['id'][]> = {
  full: ['backend', 'frontend', 'mobile', 'integrations', 'tools'],
  backend: ['backend', 'integrations', 'tools', 'frontend', 'mobile'],
  frontend: ['frontend', 'mobile', 'tools', 'backend', 'integrations'],
};

export function orderedCategories(focus: Focus): SkillCategory[] {
  const order = ORDER[focus];
  return [...skillCategories].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

/** Agrupa las tecnologías de una categoría por nivel, sin tramos vacíos. */
export function byLevel(category: SkillCategory): { level: SkillLevel; skills: Skill[] }[] {
  return SKILL_LEVELS.map((level) => ({
    level,
    skills: category.skills.filter((skill) => skill.level === level),
  })).filter((group) => group.skills.length > 0);
}

/** Total de tecnologías listadas, para la cifra de la cabecera. */
export const skillCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0,
);
