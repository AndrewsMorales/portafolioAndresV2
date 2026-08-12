import type { Localized } from '../i18n/types';

export interface Study {
  id: string;
  degree: Localized;
  school: string;
  period: Localized;
  note: Localized;
}

export const studies: Study[] = [
  {
    id: 'iberoamericana',
    degree: {
      es: 'Ingeniería de Software',
      en: 'Software Engineering',
    },
    school: 'Corporación Universitaria Iberoamericana',
    period: { es: 'Oct 2021 – May 2024', en: 'Oct 2021 – May 2024' },
    note: {
      es: 'Programa enfocado en desarrollo, análisis, diseño y gestión de sistemas de software, con metodologías ágiles, bases de datos y un proyecto de software integrador. Homologada con el tecnólogo.',
      en: 'Program focused on software development, analysis, design and systems management, covering agile methodologies, databases and an integrative software project. Credited against the technologist degree.',
    },
  },
  {
    id: 'sena-adsi',
    degree: {
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI)',
      en: 'Technologist in Information Systems Analysis and Development (ADSI)',
    },
    school: 'Servicio Nacional de Aprendizaje (SENA)',
    period: { es: 'Ene 2020 – Jul 2021', en: 'Jan 2020 – Jul 2021' },
    note: {
      es: 'Diseño, desarrollo e implementación de sistemas de información: lenguajes de programación, bases de datos y metodologías ágiles, con práctica empresarial en Telefónica Movistar.',
      en: 'Design, development and implementation of information systems: programming languages, databases and agile methodologies, with a company internship at Telefónica Movistar.',
    },
  },
  {
    id: 'sena-tecnico',
    degree: {
      es: 'Técnico en Programación de Software',
      en: 'Software Programming Technician',
    },
    school: 'Servicio Nacional de Aprendizaje (SENA)',
    period: { es: '2018 – 2019', en: '2018 – 2019' },
    note: {
      es: 'Formación en codificación, depuración y mantenimiento de aplicaciones, bases de datos y metodologías de desarrollo.',
      en: 'Training in coding, debugging and maintaining applications, databases and development methodologies.',
    },
  },
  {
    id: 'colegio',
    degree: { es: 'Bachillerato', en: 'High School Diploma' },
    school: 'Colegio Gerardo Paredes',
    period: { es: '2010 – 2019', en: '2010 – 2019' },
    note: {
      es: 'Cursado en paralelo con el programa IBM P-TECH, que combina formación secundaria, técnica y universitaria con mentorías de la industria tecnológica.',
      en: 'Taken alongside the IBM P-TECH program, which combines secondary, technical and college education with mentoring from the tech industry.',
    },
  },
];

export interface Certification {
  id: string;
  name: Localized;
  issuer: string;
  issued: Localized;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: 'ciberseguridad',
    name: {
      es: 'Introducción a Ciberseguridad: Prevención de Ataques Informáticos',
      en: 'Introduction to Cybersecurity: Preventing Computer Attacks',
    },
    issuer: 'Platzi',
    issued: { es: 'Enero 2025', en: 'January 2025' },
    credentialId: 'd7b428cf-90d9-4df9-a972-0462eb31e8cb',
  },
  {
    id: 'trabajo-remoto',
    name: {
      es: 'Trabajo Remoto para Gestionar el Cambio Organizacional',
      en: 'Remote Work for Managing Organizational Change',
    },
    issuer: 'Platzi',
    issued: { es: 'Enero 2025', en: 'January 2025' },
    credentialId: '5dfce4df-18a5-4029-962e-3f1b4690f076',
  },
  {
    id: 'gestion-tiempo',
    name: {
      es: 'Gestión Efectiva del Tiempo',
      en: 'Effective Time Management',
    },
    issuer: 'Platzi',
    issued: { es: 'Febrero 2025', en: 'February 2025' },
    credentialId: '12d4709c-e591-4c4f-9f94-b98d1e1f8da7',
  },
  {
    id: 'ptech',
    name: {
      es: 'Programa IBM P-TECH (Pathways in Technology)',
      en: 'IBM P-TECH Program (Pathways in Technology)',
    },
    issuer: 'IBM',
    issued: { es: '2018 – 2019', en: '2018 – 2019' },
  },
];
