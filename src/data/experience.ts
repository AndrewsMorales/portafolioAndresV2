import type { Localized, LocalizedList } from '../i18n/types';

export interface Job {
  id: string;
  role: Localized;
  company: string;
  /** Modalidad y tipo de vínculo, p. ej. "Jornada completa · Híbrido". */
  arrangement: Localized;
  location: string;
  /** Formato `YYYY-MM`. */
  start: string;
  /** `null` cuando el puesto sigue vigente. */
  end: string | null;
  /** `dev` aparece siempre; `support` queda plegado tras un botón. */
  kind: 'dev' | 'support';
  summary: Localized;
  highlights: LocalizedList;
  stack: string[];
}

export const jobs: Job[] = [
  {
    id: 'smart-tech',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    company: 'Smart Tech Software, LLC',
    arrangement: {
      es: 'Prestación de servicios · Remoto (EE. UU.)',
      en: 'Contractor · Remote (USA)',
    },
    location: 'Bogotá D.C., Colombia',
    start: '2026-02',
    end: null,
    kind: 'dev',
    summary: {
      es: 'Desarrollo de plataformas de negocio y comercio electrónico para una empresa de software de Delaware, trabajando en remoto sobre cuatro productos en paralelo: un CRM operativo, un ERP de venta en ruta, el administrador de proyectos de la compañía y su sitio corporativo.',
      en: 'Building business and e-commerce platforms for a Delaware software company, working remotely across four products in parallel: an operational CRM, a route-sales ERP, the company project manager and its corporate site.',
    },
    highlights: [
      {
        es: 'Desarrollador principal de Fayette CRM (Laravel 12): módulos de leads, clientes, proyectos, tareas, instaladores y tablero de producción, con más de 380 commits sobre el repositorio.',
        en: 'Lead developer of Fayette CRM (Laravel 12): leads, clients, projects, tasks, installers and production board modules, with over 380 commits on the repository.',
      },
      {
        es: 'Notificaciones y tareas en tiempo real con Laravel Reverb y Laravel Echo, más una cola offline en PWA que permite crear tareas sin señal y subirlas al recuperar conexión.',
        en: 'Real-time tasks and notifications with Laravel Reverb and Laravel Echo, plus an offline PWA queue that lets users create tasks with no signal and upload them once back online.',
      },
      {
        es: 'Migración de datos desde Airtable y QuickBooks: parseo, revisión previa, importación reversible de líneas de tiempo, notas e imágenes, y panel de sincronización para Super Admin.',
        en: 'Data migration from Airtable and QuickBooks: parsing, preview review, reversible import of timelines, notes and images, and a Super Admin sync panel.',
      },
      {
        es: 'En SelBuk AI (CRM/ERP multi-tenant de venta en ruta) construí los módulos de Rutas y Visitas con mapa interactivo Leaflet + OpenStreetMap, Resurtido con IA, Devoluciones, Reportes y Pagos recibidos.',
        en: 'On SelBuk AI (multi-tenant route-sales CRM/ERP) I built the Routes and Visits modules with an interactive Leaflet + OpenStreetMap map, AI Reorder, Returns, Reports and Payments received.',
      },
      {
        es: 'Endpoints REST en Go para el mismo producto (pagos, devoluciones, preferencias de usuario, actividades y tareas, permisos por rol) junto con sus migraciones SQL y la sincronización offline.',
        en: 'REST endpoints in Go for the same product (payments, returns, user preferences, activities and tasks, role permissions) along with their SQL migrations and offline sync.',
      },
      {
        es: 'Módulos offline-first en la app Flutter de SelBuk AI: Actividades y Tareas, Proveedores y Catálogo, con Drift/SQLite, scroll infinito y RBAC aplicado al menú.',
        en: 'Offline-first modules in the SelBuk AI Flutter app: Activities and Tasks, Suppliers and Catalog, using Drift/SQLite, infinite scroll and RBAC applied to the menu.',
      },
      {
        es: 'Sitio corporativo flixwai.com de punta a punta (PHP, CSS y JavaScript sin framework, PHPMailer, SEO y Open Graph) y desarrollo del administrador de proyectos interno en Laravel 12: versiones, aprobaciones visuales, prototipos, comentarios y correos con plantilla propia.',
        en: 'The flixwai.com corporate site end to end (framework-free PHP, CSS and JavaScript, PHPMailer, SEO and Open Graph) and development of the internal project manager in Laravel 12: versions, visual approvals, prototypes, comments and custom email templates.',
      },
      {
        es: 'Nueva app móvil nativa de Invoice AI escrita desde cero en Flutter: offline-first con Drift/SQLite contra la misma API y la misma cuenta que la versión publicada, PDF de la factura generado en el dispositivo y aviso de facturas vencidas según el huso horario del usuario. Publicada en TestFlight.',
        en: 'A new native Invoice AI mobile app written from scratch in Flutter: offline-first on Drift/SQLite against the same API and account as the published version, invoice PDFs built on the device and overdue-invoice alerts based on the user\u2019s time zone. Shipped to TestFlight.',
      },
      {
        es: 'Despliegues automatizados con GitHub Actions hacia entornos de desarrollo y producción, incluyendo scheduler del sistema, symlinks de almacenamiento y variables por entorno.',
        en: 'Automated deployments with GitHub Actions to development and production environments, including the OS scheduler, storage symlinks and per-environment variables.',
      },
    ],
    stack: [
      'Laravel 12',
      'PHP 8.2',
      'Go',
      'Drift / SQLite',
      'Firebase',
      'Flutter',
      'Angular',
      'Alpine.js',
      'jQuery',
      'Tailwind CSS',
      'Laravel Reverb',
      'MySQL',
      'PostgreSQL',
      'GitHub Actions',
    ],
  },
  {
    id: 'naw',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    company: 'naw!',
    arrangement: {
      es: 'Profesional independiente · Remoto',
      en: 'Freelance · Remote',
    },
    location: 'Bogotá D.C., Colombia',
    start: '2025-09',
    end: '2026-01',
    kind: 'dev',
    summary: {
      es: 'Aplicativo de gestión de ventas y órdenes de instalación para servicios de hogar, cubriendo el flujo completo desde la solicitud comercial hasta la ejecución técnica en campo.',
      en: 'Sales and installation-order management app for home services, covering the full flow from the commercial request to the technical execution in the field.',
    },
    highlights: [
      {
        es: 'Interacción directa con equipos MikroTik mediante ejecución de comandos remotos: configuración de parámetros de red, activaciones y ajustes operativos de los servicios contratados.',
        en: 'Direct interaction with MikroTik devices through remote command execution: network parameter configuration, activations and operational adjustments for contracted services.',
      },
      {
        es: 'Integración con la API de Siigo para creación automatizada de clientes, emisión de facturas y generación de recibos de caja, manteniendo consistencia contable entre el sistema comercial y el administrativo.',
        en: 'Integration with the Siigo API for automated client creation, invoice issuing and cash receipt generation, keeping accounting consistent between the commercial and administrative systems.',
      },
      {
        es: 'Conexión con la pasarela Zona Pagos (BBVA) para procesar transacciones PSE de forma segura dentro del flujo comercial.',
        en: 'Connection with the Zona Pagos (BBVA) gateway to process PSE transactions securely inside the commercial flow.',
      },
      {
        es: 'El resultado combinó hardware de red, automatización administrativa y pagos, reduciendo al mínimo los procesos manuales en ventas, facturación y activación de servicios.',
        en: 'The result combined network hardware, administrative automation and payments, minimizing manual work across sales, invoicing and service activation.',
      },
    ],
    stack: ['PHP', 'JavaScript', 'MikroTik API', 'Siigo API', 'Zona Pagos (PSE)', 'MySQL'],
  },
  {
    id: 'psicoalianza',
    role: {
      es: 'Desarrollador Frontend (con apoyo en backend)',
      en: 'Frontend Developer (with backend support)',
    },
    company: 'PsicoAlianza',
    arrangement: { es: 'Jornada completa · Híbrido', en: 'Full-time · Hybrid' },
    location: 'Bogotá D.C., Colombia',
    start: '2025-01',
    end: '2026-01',
    kind: 'dev',
    summary: {
      es: 'ATS (Applicant Tracking System) para la gestión integral de procesos de selección y contratación: pruebas psicométricas, publicación y seguimiento de vacantes, evaluación de candidatos y solicitudes.',
      en: 'ATS (Applicant Tracking System) for end-to-end recruitment management: psychometric tests, job posting and tracking, candidate evaluation and requests.',
    },
    highlights: [
      {
        es: 'Interfaces dinámicas y componentes interactivos con manejo eficiente de estados, validaciones, eventos y comunicación asincrónica con el backend.',
        en: 'Dynamic interfaces and interactive components with efficient state handling, validation, events and asynchronous communication with the backend.',
      },
      {
        es: 'Creación y ajuste de endpoints, lógica transaccional y normalización de datos entre módulos para mantener la consistencia del flujo de reclutamiento.',
        en: 'Creation and tuning of endpoints, transactional logic and data normalization across modules to keep the recruitment flow consistent.',
      },
      {
        es: 'Trabajo bajo Scrum, con foco en mantener el sistema escalable y estable mientras se reducían los tiempos de respuesta del proceso de contratación.',
        en: 'Work under Scrum, focused on keeping the system scalable and stable while cutting response times in the hiring process.',
      },
    ],
    stack: ['Laravel', 'PHP', 'JavaScript', 'CSS', 'MySQL', 'Scrum'],
  },
  {
    id: 'waplicaciones',
    role: { es: 'Desarrollador Web', en: 'Web Developer' },
    company: 'Waplicaciones S.A.S.',
    arrangement: { es: 'Jornada completa · Híbrido', en: 'Full-time · Hybrid' },
    location: 'Bogotá D.C., Colombia',
    start: '2024-03',
    end: '2025-01',
    kind: 'dev',
    summary: {
      es: 'Desarrollo sobre Symfony y Drupal con dominio de JavaScript, AJAX y consumo/creación de APIs REST, en aplicaciones orientadas a procesos internos y automatización operativa de varios clientes.',
      en: 'Development on Symfony and Drupal with strong JavaScript, AJAX and REST API consumption/creation, on applications for internal processes and operational automation across several clients.',
    },
    highlights: [
      {
        es: 'Impresistem: aplicativo para la selección de partners, con integración de módulos, validaciones de interfaz y estructuras de datos que garantizaran un flujo lógico eficiente.',
        en: 'Impresistem: a partner-selection application, integrating modules, interface validation and data structures to guarantee an efficient logical flow.',
      },
      {
        es: 'Coopicrédito: calendario interactivo para reserva de salas con validación de disponibilidad, más la gestión automatizada de la transacción de solicitudes de crédito.',
        en: 'Coopicrédito: an interactive room-booking calendar with availability validation, plus automated handling of credit request transactions.',
      },
      {
        es: 'Interdrogas: sistema de solicitudes de pedidos integrado con Siesa mediante servicios API sincronizados, mejorando la eficiencia de la cadena de abastecimiento.',
        en: 'Interdrogas: a purchase-request system integrated with Siesa through synchronized API services, improving supply-chain efficiency.',
      },
    ],
    stack: ['Symfony', 'Drupal', 'PHP', 'JavaScript', 'AJAX', 'REST API', 'Siesa', 'MySQL'],
  },
  {
    id: 'bismmasoft',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    company: 'BismmaSoft',
    arrangement: {
      es: 'Profesional independiente · Remoto',
      en: 'Freelance · Remote',
    },
    location: 'Bogotá D.C., Colombia',
    start: '2023-09',
    end: '2023-10',
    kind: 'dev',
    summary: {
      es: 'Aplicativo web para avalúo de activos y valoración empresarial, con un flujo de suscripción basado en carrito de compras dinámico. ',
      en: 'Web application for asset appraisal and business valuation, with a subscription flow built on a dynamic shopping cart. ',
    },
    highlights: [
      {
        es: 'Arquitectura del backend para gestión de usuarios, roles, persistencia y operaciones transaccionales, cuidando integridad y trazabilidad de la información.',
        en: 'Backend architecture for user management, roles, persistence and transactional operations, with care for data integrity and traceability.',
      },
      {
        es: 'Integración de la pasarela de pago de Mercado Libre por API REST, con control de respuestas, validación de estados, callbacks y registro histórico de transacciones.',
        en: 'Mercado Libre payment gateway integration over REST APIs, with response handling, status validation, callbacks and a historical transaction log.',
      },
      {
        es: 'Frontend interactivo con JavaScript y AJAX para actualizar componentes sin recargar la página.',
        en: 'Interactive frontend with JavaScript and AJAX to update components without reloading the page.',
      },
    ],
    stack: ['PHP', 'JavaScript', 'AJAX', 'Mercado Libre API', 'MySQL', 'Bootstrap'],
  },
  {
    id: 'azulado',
    role: { es: 'Programador Web', en: 'Web Programmer' },
    company: 'Inversiones Azulado S.A.S.',
    arrangement: { es: 'Jornada completa · Híbrido', en: 'Full-time · Hybrid' },
    location: 'Bogotá D.C., Colombia',
    start: '2022-08',
    end: '2023-10',
    kind: 'dev',
    summary: {
      es: 'Aplicaciones web a medida e intranets para empresas del sector comercio (supermercados y tiendas minoristas), participando en todo el ciclo: levantamiento de requisitos, análisis, implementación, pruebas y despliegue.',
      en: 'Custom web applications and intranets for retail companies (supermarkets and small stores), taking part in the whole cycle: requirements gathering, analysis, implementation, testing and deployment.',
    },
    highlights: [
      {
        es: 'Interoperabilidad con ICG para sincronización de inventarios, gestión de ventas, control de productos y actualización de información comercial en tiempo real.',
        en: 'Interoperability with ICG for inventory synchronization, sales management, product control and real-time commercial data updates.',
      },
      {
        es: 'Paneles administrativos dinámicos y optimización de procesos internos con WordPress, JavaScript y jQuery.',
        en: 'Dynamic admin panels and internal process optimization with WordPress, JavaScript and jQuery.',
      },
      {
        es: 'Landing de presentación del proyecto de simuladores de vuelo "Modo Avión", aplicando diseño responsivo y principios de experiencia de usuario.',
        en: 'Presentation landing page for the "Modo Avión" flight-simulator project, applying responsive design and user-experience principles.',
      },
    ],
    stack: ['PHP', 'WordPress', 'JavaScript', 'jQuery', 'Bootstrap', 'CSS', 'MySQL', 'ICG'],
  },
  {
    id: 'teleperformance',
    role: { es: 'Especialista en soporte técnico', en: 'Technical Support Specialist' },
    company: 'Teleperformance',
    arrangement: { es: 'Jornada completa', en: 'Full-time' },
    location: 'Bogotá D.C., Colombia',
    start: '2022-05',
    end: '2022-07',
    kind: 'support',
    summary: {
      es: 'Campaña de soporte técnico para Vodafone España: diagnóstico y solución de incidencias de telecomunicaciones para clientes residenciales y empresariales.',
      en: 'Technical support campaign for Vodafone Spain: diagnosing and solving telecom incidents for residential and business customers.',
    },
    highlights: [
      {
        es: 'Clasificación de problemas técnicos, pruebas de conectividad, revisión de configuración de equipos y validación de acceso a red.',
        en: 'Technical issue triage, connectivity testing, device configuration review and network access validation.',
      },
      {
        es: 'Seguimiento de tickets, escalamiento a segundo nivel y coordinación con equipos técnicos de campo.',
        en: 'Ticket follow-up, second-level escalation and coordination with field technical teams.',
      },
    ],
    stack: [],
  },
  {
    id: 'disproel',
    role: { es: 'Especialista en soporte técnico', en: 'Technical Support Specialist' },
    company: 'Disproel S.A.',
    arrangement: { es: 'Contrato temporal · Presencial', en: 'Temporary contract · On-site' },
    location: 'Bogotá D.C., Colombia',
    start: '2022-02',
    end: '2022-03',
    kind: 'support',
    summary: {
      es: 'Soporte técnico durante el escrutinio de las elecciones al Congreso de 2022, asegurando la operación del sistema informático de recolección y verificación de datos electorales.',
      en: 'Technical support during the 2022 congressional election count, keeping the electoral data collection and verification system operational.',
    },
    highlights: [
      {
        es: 'Capacitación y guía a los usuarios del software de escrutinio, y soporte a los equipos de cómputo a nivel de software y hardware.',
        en: 'Training and guiding users of the vote-counting software, plus software and hardware support for the workstations.',
      },
    ],
    stack: [],
  },
  {
    id: 'telefonica',
    role: { es: 'Aprendiz SENA', en: 'SENA Apprentice' },
    company: 'Telefónica (Movistar)',
    arrangement: { es: 'Contrato de prácticas', en: 'Internship' },
    location: 'Colombia',
    start: '2021-01',
    end: '2021-07',
    kind: 'support',
    summary: {
      es: 'Análisis de casos de clientes reclamantes, gestión y depuración de bases de datos y aseguramiento masivo de información.',
      en: 'Analysis of customer complaint cases, database management and cleanup, and bulk data assurance.',
    },
    highlights: [
      {
        es: 'Automatización del proceso de cargue masivo mediante archivos de Excel, incorporando los datos al sistema interno sin intervención manual y reduciendo errores operativos.',
        en: 'Automation of the bulk-load process through Excel files, feeding data into the internal system with no manual intervention and cutting operational errors.',
      },
    ],
    stack: ['Excel', 'SQL'],
  },
];
