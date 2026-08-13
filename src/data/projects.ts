import type { Localized } from '../i18n/types';

export type ProjectTag = 'fullstack' | 'backend' | 'frontend' | 'mobile';

/** Cifra comprobable del proyecto: sale del repositorio, no de una estimación. */
export interface Metric {
  value: string;
  label: Localized;
}

export interface Project {
  id: string;
  title: string;
  kind: Localized;
  /** Empresa o contexto en que se construyó. */
  context: Localized;
  year: string;
  summary: Localized;
  role: Localized;
  tech: string[];
  tags: ProjectTag[];
  /** Dos o tres datos duros que un revisor puede contrastar. */
  metrics?: Metric[];
  /** Captura en `/public/images`. Sin imagen se genera una portada tipográfica. */
  image?: string;
  /** Matiz base de la portada generada, en grados. */
  hue: number;
  live?: string;
  repo?: string;
  /** Sistemas internos de cliente: se describen sin capturas ni código. */
  confidential?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'fayette-crm',
    title: 'Fayette CRM',
    kind: { es: 'CRM operativo', en: 'Operational CRM' },
    context: { es: 'Smart Tech Software', en: 'Smart Tech Software' },
    year: '2026',
    summary: {
      es: 'CRM completo para una empresa de instalaciones: leads, clientes, proyectos, tareas, instaladores, envíos y un tablero de producción por etapas. Incluye notificaciones y tareas en tiempo real sobre WebSockets, modo offline en móvil (PWA), migración de datos desde Airtable y QuickBooks, permisos jerárquicos por rol y despliegue automatizado a dev y producción.',
      en: 'A full CRM for an installations company: leads, clients, projects, tasks, installers, shipments and a stage-based production board. It ships real-time tasks and notifications over WebSockets, an offline mobile mode (PWA), data migration from Airtable and QuickBooks, hierarchical role permissions and automated deployment to dev and production.',
    },
    role: {
      es: 'Desarrollador principal — más de 380 de los 452 commits del repositorio, desde la arquitectura de los módulos hasta el pipeline de despliegue.',
      en: 'Lead developer — over 380 of the 452 commits in the repository, from module architecture to the deployment pipeline.',
    },
    tech: [
      'Laravel 12',
      'PHP 8.2',
      'Laravel Reverb',
      'Alpine.js',
      'Tailwind CSS',
      'jQuery',
      'Vite',
      'MySQL',
      'Spatie Permission',
      'GitHub Actions',
    ],
    metrics: [
      { value: '384 / 452', label: { es: 'commits del repositorio', en: 'commits in the repository' } },
      { value: '30', label: { es: 'tablas de dominio', en: 'domain tables' } },
      { value: '10', label: { es: 'módulos en producción', en: 'modules in production' } },
    ],
    tags: ['fullstack', 'backend', 'frontend'],
    hue: 258,
    confidential: true,
    featured: true,
  },
  {
    id: 'selbuk-ai',
    title: 'SelBuk AI',
    kind: { es: 'CRM/ERP de venta en ruta', en: 'Route-sales CRM/ERP' },
    context: { es: 'Smart Tech Software', en: 'Smart Tech Software' },
    year: '2026',
    summary: {
      es: 'Plataforma multi-tenant para distribuidoras y mayoristas cuyo vendedor trabaja en calle: rutas y visitas, cotizaciones, órdenes de venta, facturas, compras, devoluciones y cobros en sitio, funcionando sin conexión. Son tres proyectos coordinados: web Laravel, API en Go y app Flutter offline-first.',
      en: 'A multi-tenant platform for distributors and wholesalers whose sales reps work on the street: routes and visits, estimates, sales orders, invoices, purchases, returns and on-site payments, all working offline. It is three coordinated projects: a Laravel web app, a Go API and an offline-first Flutter app.',
    },
    role: {
      es: 'Módulos de Rutas y Visitas con mapa interactivo Leaflet + OpenStreetMap, Resurtido con IA, Devoluciones multi-orden, Reportes, Pagos recibidos y la matriz de permisos RBAC. En la API en Go añadí los endpoints y migraciones de esos módulos; en Flutter, Actividades y Tareas, Proveedores y Catálogo offline-first.',
      en: 'Routes and Visits modules with an interactive Leaflet + OpenStreetMap map, AI Reorder, multi-order Returns, Reports, Payments received and the RBAC permission matrix. On the Go API I added those modules’ endpoints and migrations; on Flutter, offline-first Activities and Tasks, Suppliers and Catalog.',
    },
    tech: [
      'Laravel 12',
      'Go',
      'Flutter',
      'Drift / SQLite',
      'Tailwind CSS',
      'Leaflet',
      'PostgreSQL',
      'Docker',
      'Vite',
    ],
    metrics: [
      { value: '187', label: { es: 'commits en 3 repositorios', en: 'commits across 3 repositories' } },
      { value: '3', label: { es: 'capas: web, API y móvil', en: 'layers: web, API and mobile' } },
      { value: '6', label: { es: 'módulos entregados', en: 'modules delivered' } },
    ],
    tags: ['fullstack', 'backend', 'frontend', 'mobile'],
    hue: 190,
    confidential: true,
    featured: true,
  },
  {
    id: 'flixwai-projects',
    title: 'Flixwai Projects',
    kind: { es: 'Administrador de proyectos', en: 'Project manager' },
    context: { es: 'Smart Tech Software', en: 'Smart Tech Software' },
    year: '2026',
    summary: {
      es: 'Herramienta interna para llevar el ciclo de vida de cada proyecto con el cliente: versiones y cambios, prototipos, documentos con comentarios, reuniones, línea de tiempo y aprobaciones visuales de diseño. Incluye sistema de progreso ponderado, plantillas de correo propias, restricciones de revisión para superadministradores y sesiones de 24 horas.',
      en: 'Internal tool to run each project lifecycle with the client: versions and changes, prototypes, documents with comments, meetings, timeline and visual design approvals. It includes a weighted progress system, custom email templates, super-admin review restrictions and 24-hour sessions.',
    },
    role: {
      es: 'Desarrollo de los módulos de aprobación visual, versiones, comentarios y notificaciones por correo, además de los flujos de despliegue a desarrollo y producción.',
      en: 'Built the visual approval, versions, comments and email notification modules, plus the deployment workflows to development and production.',
    },
    tech: ['Laravel 12', 'PHP 8.2', 'Tailwind CSS', 'Vite', 'MySQL', 'GitHub Actions'],
    metrics: [
      { value: '31 / 63', label: { es: 'commits del repositorio', en: 'commits in the repository' } },
      { value: '14', label: { es: 'entidades del modelo', en: 'model entities' } },
    ],
    tags: ['fullstack', 'backend'],
    hue: 285,
    confidential: true,
    featured: true,
  },
  {
    id: 'flixwai-site',
    title: 'flixwai.com',
    kind: { es: 'Sitio corporativo', en: 'Corporate website' },
    context: { es: 'Smart Tech Software', en: 'Smart Tech Software' },
    year: '2026',
    summary: {
      es: 'Sitio de presentación de la empresa: servicios, equipo, casos y formulario de contacto con envío por PHPMailer. Construido sin framework, con CSS y JavaScript propios, tipografía cuidada, animaciones ligeras y metadatos SEO/Open Graph completos.',
      en: 'Company presentation site: services, team, cases and a contact form delivered through PHPMailer. Built with no framework, using its own CSS and JavaScript, careful typography, light animations and complete SEO/Open Graph metadata.',
    },
    role: {
      es: 'Autor único: los 9 commits del repositorio son míos, del diseño a la puesta en producción.',
      en: 'Sole author: all 9 commits in the repository are mine, from design to production.',
    },
    tech: ['PHP', 'JavaScript', 'CSS3', 'PHPMailer', 'SEO / Open Graph'],
    metrics: [
      { value: '9 / 9', label: { es: 'commits: autor único', en: 'commits: sole author' } },
      { value: '0', label: { es: 'frameworks de frontend', en: 'frontend frameworks' } },
    ],
    tags: ['frontend'],
    hue: 22,
    live: 'https://flixwai.com',
    featured: true,
  },
  {
    id: 'comprobantes',
    title: 'Comprobantes Diarios',
    kind: { es: 'App móvil Android', en: 'Android mobile app' },
    context: { es: 'Proyecto propio', en: 'Personal project' },
    year: '2026',
    summary: {
      es: 'App Flutter que suma comprobantes por jornada y funciona 100 % sin conexión: ni siquiera declara permiso de internet. Lee el total con OCR en el dispositivo (ML Kit), comprime las fotos a WebP, arma el PDF del día en el teléfono y lo comparte con el selector nativo. Con hora de corte configurable, histórico por día, tema claro/oscuro e interfaz en español e inglés.',
      en: 'A Flutter app that totals receipts per work day and runs 100% offline — it does not even declare the internet permission. It reads the amount with on-device OCR (ML Kit), compresses photos to WebP, builds the daily PDF on the phone and shares it through the native sheet. Configurable cut-off time, daily history, light/dark theme and a Spanish/English interface.',
    },
    role: {
      es: 'Proyecto propio de principio a fin: arquitectura, OCR, base de datos local, generación de PDF, temas y localización.',
      en: 'Personal project end to end: architecture, OCR, local database, PDF generation, theming and localization.',
    },
    tech: ['Flutter', 'Dart', 'ML Kit OCR', 'SQLite', 'PDF', 'Material Design'],
    metrics: [
      { value: '12 / 12', label: { es: 'commits: autor único', en: 'commits: sole author' } },
      { value: '0', label: { es: 'permisos de red en el manifest', en: 'network permissions in the manifest' } },
      { value: '8', label: { es: 'pantallas', en: 'screens' } },
    ],
    tags: ['mobile'],
    hue: 350,
    repo: 'https://github.com/AndrewsMorales/Comprobantes_scanner',
  },
  {
    id: 'invoice-ai',
    title: 'Invoice AI',
    kind: { es: 'Facturación con IA', en: 'AI-powered invoicing' },
    context: { es: 'Smart Tech Software', en: 'Smart Tech Software' },
    year: '2026',
    summary: {
      es: 'Plataforma de facturación con asistente de IA, disponible como web app y como aplicación móvil nativa. Combina Angular con Ionic y Capacitor, base local SQLite, notificaciones push y un backend PHP con servicio de sockets para el chat.',
      en: 'Invoicing platform with an AI assistant, available both as a web app and as a native mobile application. It combines Angular with Ionic and Capacitor, a local SQLite database, push notifications and a PHP backend with a socket service for chat.',
    },
    role: {
      es: 'Ajustes y soporte sobre la aplicación Angular/Ionic dentro del equipo de producto.',
      en: 'Fixes and support on the Angular/Ionic application as part of the product team.',
    },
    tech: ['Angular 19', 'Ionic', 'Capacitor', 'TypeScript', 'SQLite', 'PHP', 'Firebase'],
    tags: ['frontend', 'mobile'],
    hue: 215,
    live: 'https://app.invoice-ai.cloud',
    confidential: true,
  },
  {
    id: 'cuentas',
    title: 'Cuentas',
    kind: { es: 'App de presupuesto familiar', en: 'Household budget app' },
    context: { es: 'Proyecto propio', en: 'Personal project' },
    year: '2026',
    summary: {
      es: 'Aplicación Laravel para administrar el presupuesto mensual de un hogar de dos personas: ingresos por quincena, categorías de gasto, gastos fijos que se materializan solos cada mes nuevo, registro rápido desde un único botón y resumen con balance global, por persona y por categoría. Responsive de verdad: botón flotante en móvil y barra superior en escritorio.',
      en: 'Laravel application to run a two-person household budget: income per fortnight, expense categories, fixed expenses that materialize on their own each new month, one-tap quick entry and a summary with global, per-person and per-category balances. Genuinely responsive: floating button on mobile, top bar on desktop.',
    },
    role: {
      es: 'Proyecto propio de principio a fin, en uso real todos los meses. Arquitectura MVC con capa de servicios (BudgetService, ExpenseService, IncomeService) para que los controladores solo validen y deleguen.',
      en: 'Personal project end to end, in real use every month. MVC architecture with a service layer (BudgetService, ExpenseService, IncomeService) so controllers only validate and delegate.',
    },
    tech: ['Laravel 13', 'PHP 8.3', 'Blade', 'Bootstrap 5', 'Tailwind CSS', 'SQLite', 'Vite'],
    tags: ['fullstack', 'backend'],
    metrics: [
      { value: '6', label: { es: 'entidades del modelo', en: 'model entities' } },
      { value: '3', label: { es: 'servicios de negocio', en: 'business services' } },
      { value: '13', label: { es: 'migraciones', en: 'migrations' } },
    ],
    hue: 96,
  },
  {
    id: 'activos-valores',
    title: 'Activos y Valores',
    kind: { es: 'Plataforma de suscripciones', en: 'Subscription platform' },
    context: { es: 'BismmaSoft', en: 'BismmaSoft' },
    year: '2023',
    summary: {
      es: 'Aplicativo para el avalúo de activos y la valoración empresarial, con carrito de compras dinámico para contratar suscripciones. Estuvo publicado en activosyvalores.com; el dominio ya no está activo. Gestión de usuarios y roles, operaciones transaccionales y pasarela de pago de Mercado Libre con validación de estados, callbacks e histórico de transacciones.',
      en: 'Application for asset appraisal and business valuation, with a dynamic shopping cart to purchase subscriptions. It was live at activosyvalores.com; the domain is no longer active. User and role management, transactional operations and a Mercado Libre payment gateway with status validation, callbacks and a transaction history.',
    },
    role: {
      es: 'Desarrollo full stack: arquitectura del backend, integración de pagos e interfaz interactiva con AJAX.',
      en: 'Full stack development: backend architecture, payment integration and an interactive AJAX interface.',
    },
    tech: ['PHP', 'JavaScript', 'AJAX', 'Mercado Libre API', 'MySQL', 'Bootstrap'],
    tags: ['fullstack', 'backend'],
    image: '/images/fotoActivosYValores.jpg',
    hue: 145,
  },
  {
    id: 'impresistem',
    title: 'Impresistem Partners',
    kind: { es: 'Plataforma e intranet', en: 'Platform and intranet' },
    context: { es: 'Waplicaciones S.A.S.', en: 'Waplicaciones S.A.S.' },
    year: '2024',
    summary: {
      es: 'Aplicativo para la selección y gestión de partners del mayorista de tecnología: integración de módulos, validaciones de interfaz y estructuras de datos pensadas para que el flujo de aprobación fuera claro y rápido.',
      en: 'Application for selecting and managing the technology wholesaler’s partners: module integration, interface validation and data structures designed to keep the approval flow clear and fast.',
    },
    role: {
      es: 'Desarrollo de módulos y validaciones sobre Symfony, con JavaScript y AJAX en la capa de interfaz.',
      en: 'Module and validation development on Symfony, with JavaScript and AJAX on the interface layer.',
    },
    tech: ['Symfony', 'PHP', 'JavaScript', 'AJAX', 'REST API', 'MySQL'],
    tags: ['fullstack'],
    image: '/images/fotoImpresistem.jpg',
    hue: 205,
  },
  {
    id: 'interdrogas',
    title: 'Interdrogas',
    kind: { es: 'Gestión de pedidos', en: 'Order management' },
    context: { es: 'Waplicaciones S.A.S.', en: 'Waplicaciones S.A.S.' },
    year: '2024',
    summary: {
      es: 'Sistema de solicitudes de pedidos integrado con Siesa mediante servicios API sincronizados, logrando un intercambio de datos confiable entre plataformas y una mejora clara en la cadena de abastecimiento.',
      en: 'Purchase-request system integrated with Siesa through synchronized API services, achieving reliable data exchange between platforms and a clear improvement in the supply chain.',
    },
    role: {
      es: 'Lideré la implementación del sistema y la integración con Siesa.',
      en: 'Led the implementation of the system and the Siesa integration.',
    },
    tech: ['Symfony', 'PHP', 'REST API', 'Siesa', 'JavaScript', 'MySQL'],
    tags: ['fullstack', 'backend'],
    image: '/images/fotoInterdrogas.jpg',
    hue: 168,
  },
  {
    id: 'coopicredito',
    title: 'Coopicrédito',
    kind: { es: 'Intranet', en: 'Intranet' },
    context: { es: 'Waplicaciones S.A.S.', en: 'Waplicaciones S.A.S.' },
    year: '2024',
    summary: {
      es: 'Calendario interactivo para la reserva de salas con validación de disponibilidad en tiempo real, más la gestión automatizada de la transacción de solicitudes de crédito para reducir reprocesos.',
      en: 'Interactive room-booking calendar with real-time availability validation, plus automated handling of credit request transactions to cut down on rework.',
    },
    role: {
      es: 'Desarrollo del calendario y de los procesos automatizados de solicitudes de crédito.',
      en: 'Built the calendar and the automated credit request processes.',
    },
    tech: ['Symfony', 'Drupal', 'PHP', 'JavaScript', 'AJAX', 'MySQL'],
    tags: ['fullstack', 'frontend'],
    image: '/images/fotoCoopicredito.jpg',
    hue: 232,
  },
  {
    id: 'modo-avion',
    title: 'Modo Avión CO',
    kind: { es: 'Landing page e intranet', en: 'Landing page and intranet' },
    context: { es: 'Inversiones Azulado S.A.S.', en: 'Inversiones Azulado S.A.S.' },
    year: '2023',
    summary: {
      es: 'Página de presentación del proyecto de simuladores de vuelo, con diseño responsivo, jerarquía visual cuidada y foco en la conversión, acompañada de la intranet de gestión del negocio.',
      en: 'Presentation page for the flight-simulator business, with responsive design, careful visual hierarchy and a conversion focus, alongside the management intranet.',
    },
    role: {
      es: 'Diseño y desarrollo del frontend aplicando principios de UI/UX.',
      en: 'Frontend design and development applying UI/UX principles.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress'],
    tags: ['frontend'],
    image: '/images/fotoModoAvionCO.jpg',
    hue: 26,
  },
  {
    id: 'intranet-skf',
    title: 'Intranet SKF',
    kind: { es: 'Intranet comercial', en: 'Commercial intranet' },
    context: { es: 'Inversiones Azulado S.A.S.', en: 'Inversiones Azulado S.A.S.' },
    year: '2023',
    summary: {
      es: 'Intranet a medida para la operación diaria de una cadena del sector comercio: paneles administrativos dinámicos, control de productos y sincronización de inventarios con ICG.',
      en: 'Custom intranet for the daily operation of a retail chain: dynamic admin panels, product control and inventory synchronization with ICG.',
    },
    role: {
      es: 'Desarrollo full stack e integración con el ecosistema de software del cliente.',
      en: 'Full stack development and integration with the client’s software ecosystem.',
    },
    tech: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL', 'ICG'],
    tags: ['fullstack'],
    image: '/images/fotoIntranetSKF.jpg',
    hue: 300,
  },
  {
    id: 'intranet-pf',
    title: 'Intranet PF',
    kind: { es: 'Intranet comercial', en: 'Commercial intranet' },
    context: { es: 'Inversiones Azulado S.A.S.', en: 'Inversiones Azulado S.A.S.' },
    year: '2023',
    summary: {
      es: 'Aplicación interna para supermercados y tiendas minoristas, orientada a optimizar procesos operativos y centralizar la información comercial del negocio.',
      en: 'Internal application for supermarkets and small retailers, aimed at streamlining operational processes and centralizing the business’s commercial data.',
    },
    role: {
      es: 'Levantamiento de requisitos, desarrollo y despliegue en el entorno productivo del cliente.',
      en: 'Requirements gathering, development and deployment to the client’s production environment.',
    },
    tech: ['PHP', 'WordPress', 'JavaScript', 'jQuery', 'CSS3', 'MySQL'],
    tags: ['fullstack'],
    image: '/images/fotoIntranetPF.jpg',
    hue: 12,
  },
  {
    id: 'crud-laravel',
    title: 'CRUD Laravel + Jetstream',
    kind: { es: 'Proyecto de aprendizaje', en: 'Learning project' },
    context: { es: 'Proyecto propio', en: 'Personal project' },
    year: '2023',
    summary: {
      es: 'CRUD completo sobre Laravel con Jetstream, incluyendo gestión de usuarios y control de acceso por roles y permisos. Sirve como base limpia para arrancar aplicaciones con autenticación ya resuelta.',
      en: 'A complete CRUD on Laravel with Jetstream, including user management and role- and permission-based access control. It works as a clean base to start applications with authentication already solved.',
    },
    role: {
      es: 'Proyecto propio publicado como referencia de estructura y buenas prácticas en Laravel.',
      en: 'Personal project published as a reference for Laravel structure and good practices.',
    },
    tech: ['Laravel', 'Jetstream', 'PHP', 'Blade', 'Tailwind CSS', 'MySQL'],
    tags: ['backend', 'fullstack'],
    image: '/images/fotoCrudLaravel.jpg',
    hue: 0,
    repo: 'https://github.com/AndrewsMorales/Crud_Laravel',
  },
  {
    id: 'blog-recetarios',
    title: 'Blog Recetarios',
    kind: { es: 'Blog en PHP puro', en: 'Plain PHP blog' },
    context: { es: 'Proyecto propio', en: 'Personal project' },
    year: '2023',
    summary: {
      es: 'Blog de recetas construido en PHP desde cero, sin framework: enrutamiento propio, capa de datos, sesiones y plantillas. Un ejercicio para dejar claro qué hace por debajo un framework.',
      en: 'A recipe blog built in plain PHP from scratch, with no framework: custom routing, data layer, sessions and templates. An exercise to make explicit what a framework does underneath.',
    },
    role: {
      es: 'Proyecto propio de principio a fin, publicado como código base reutilizable.',
      en: 'Personal project end to end, published as a reusable code base.',
    },
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    tags: ['backend'],
    image: '/images/fotoBlogResetas.jpg',
    hue: 40,
    repo: 'https://github.com/AndrewsMorales/Blog_Resetarios',
  },
  {
    id: 'prueba-tecnica',
    title: 'Laravel + REST API',
    kind: { es: 'Consumo de API', en: 'API consumption' },
    context: { es: 'Prueba técnica', en: 'Technical test' },
    year: '2023',
    summary: {
      es: 'Aplicación en Laravel que consume una API externa, normaliza la respuesta y la presenta en una interfaz filtrable. Resuelta como prueba técnica de frontend con backend propio.',
      en: 'A Laravel application that consumes an external API, normalizes the response and renders it in a filterable interface. Solved as a frontend technical test with its own backend.',
    },
    role: {
      es: 'Desarrollo completo dentro del tiempo de la prueba.',
      en: 'Complete development within the test time limit.',
    },
    tech: ['Laravel', 'PHP', 'REST API', 'Blade', 'Bootstrap', 'JavaScript'],
    tags: ['fullstack', 'backend'],
    image: '/images/fotoPruebaTecnica.jpg',
    hue: 178,
    repo: 'https://github.com/AndrewsMorales/Prueba-tecnica-FrontEnd',
  },
  {
    id: 'portafolio-v1',
    title: 'Portfolio v1',
    kind: { es: 'Sitio personal', en: 'Personal site' },
    context: { es: 'Proyecto propio', en: 'Personal project' },
    year: '2023',
    summary: {
      es: 'La primera versión de este portafolio, construida en HTML, CSS y jQuery puro, con animaciones al hacer scroll, galería de proyectos y video de fondo. La versión que estás viendo es su reescritura en React y TypeScript.',
      en: 'The first version of this portfolio, built in plain HTML, CSS and jQuery, with scroll animations, a project gallery and a background video. The version you are looking at is its rewrite in React and TypeScript.',
    },
    role: {
      es: 'Diseño y desarrollo completos.',
      en: 'Complete design and development.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    tags: ['frontend'],
    image: '/images/fotoPortafolioAndresMorales.jpg',
    hue: 262,
    repo: 'https://github.com/AndrewsMorales/Portafolio_AndresMorales',
  },
];

/** Orden de relevancia de los proyectos según el perfil elegido. */
export function orderedProjects(tag: ProjectTag | 'all'): Project[] {
  if (tag === 'all') return projects;
  return projects.filter((project) => project.tags.includes(tag));
}
