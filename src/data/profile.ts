import type { IconName } from '../components/ui/Icon';
import type { DictKey, Lang } from '../i18n/types';
import { projects } from './projects';
import { skillCount } from './skills';

/** Mes en que empezó la experiencia profesional remunerada (Inversiones Azulado). */
const CAREER_START = new Date(2022, 7, 1);

/** Años de experiencia calculados, para que la cifra no se quede vieja. */
export function yearsOfExperience(now: Date = new Date()): number {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  return Math.max(1, Math.floor(months / 12));
}

export const profile = {
  firstName: 'Andrés',
  lastName: 'Morales',
  fullName: 'Andrés David Morales Castro',
  initials: 'AM',
  location: 'Bogotá D.C., Colombia',
  email: 'andresdavidmoralescastro0@gmail.com',
  phone: '+57 301 649 0791',
  phoneRaw: '573016490791',
  photo: '/images/andres-morales.webp',
  cv: {
    es: '/docs/CV-Andres-Morales-ES.pdf',
    en: '/docs/CV-Andres-Morales-EN.pdf',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/andres-david-morales-castro-54b12715a/',
    github: 'https://github.com/AndrewsMorales',
    repo: 'https://github.com/AndrewsMorales/portafolioAndresV2',
  },
} as const;

/** Ruta del CV en el idioma activo. */
export function cvFor(lang: Lang): string {
  return profile.cv[lang];
}

export interface Stat {
  id: string;
  value: string;
  labelKey: 'stats.years' | 'stats.projects' | 'stats.commits' | 'stats.stack';
}

/** Redondea hacia abajo a la decena para presentar la cifra como "N+". */
const roundDown = (value: number, step = 5) => Math.floor(value / step) * step;

export const stats: Stat[] = [
  { id: 'years', value: `${yearsOfExperience()}+`, labelKey: 'stats.years' },
  { id: 'projects', value: `${roundDown(projects.length)}+`, labelKey: 'stats.projects' },
  { id: 'commits', value: '620+', labelKey: 'stats.commits' },
  { id: 'stack', value: `${roundDown(skillCount, 10)}+`, labelKey: 'stats.stack' },
];

/** Rasgos de la sección "Cómo trabajo". Los textos viven en el diccionario. */
export interface Strength {
  id: string;
  icon: IconName;
  titleKey: DictKey;
  textKey: DictKey;
}

export const strengths: Strength[] = [
  {
    id: 'product',
    icon: 'sparkles',
    titleKey: 'about.strength1.title',
    textKey: 'about.strength1.text',
  },
  {
    id: 'maintainable',
    icon: 'code',
    titleKey: 'about.strength2.title',
    textKey: 'about.strength2.text',
  },
  {
    id: 'bilingual',
    icon: 'globe',
    titleKey: 'about.strength3.title',
    textKey: 'about.strength3.text',
  },
  {
    id: 'ship',
    icon: 'server',
    titleKey: 'about.strength4.title',
    textKey: 'about.strength4.text',
  },
];
