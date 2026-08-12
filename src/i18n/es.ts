/**
 * Diccionario base (español).
 * Este objeto define el conjunto de claves; `en.ts` está tipado contra él,
 * así TypeScript falla en compilación si una cadena queda sin traducir.
 */
export const es = {
  // --- Documento ---
  'doc.title': 'Andrés Morales · Desarrollador Full Stack',
  'doc.description':
    'Portafolio de Andrés David Morales Castro, desarrollador full stack con 4 años de experiencia en PHP, Laravel, Symfony, JavaScript, React, Flutter y Go.',

  // --- Accesibilidad / genéricos ---
  'a11y.skip': 'Saltar al contenido',
  'a11y.menu': 'Abrir menú',
  'a11y.menuClose': 'Cerrar menú',
  'a11y.theme': 'Cambiar tema',
  'a11y.lang': 'Cambiar idioma',
  'a11y.top': 'Volver arriba',
  'common.and': 'y',
  'common.more': 'Ver más',
  'common.less': 'Ver menos',
  'common.present': 'Actualidad',
  'common.copy': 'Copiar',
  'common.copied': '¡Copiado!',

  // --- Navegación ---
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.skills': 'Habilidades',
  'nav.experience': 'Trayectoria',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',

  // --- Selector de perfil ---
  'focus.label': 'Ver perfil como',
  'focus.full': 'Full Stack',
  'focus.backend': 'Backend',
  'focus.frontend': 'Frontend',
  'focus.hint': 'Reordena habilidades y proyectos según el rol que te interese.',

  // --- Hero ---
  'hero.badge': 'Disponible para nuevos proyectos',
  'hero.greeting': 'Hola, soy',
  'hero.role.full': 'Desarrollador Full Stack',
  'hero.role.backend': 'Desarrollador Backend',
  'hero.role.frontend': 'Desarrollador Frontend',
  'hero.pitch.full':
    'Construyo aplicaciones web y móviles de punta a punta: del modelo de datos y la API hasta la interfaz que usa el cliente. PHP, Laravel, Go, JavaScript y Flutter.',
  'hero.pitch.backend':
    'Diseño APIs REST, modelos de datos y lógica de negocio que aguantan producción: Laravel 12, Symfony, Go, multi-tenant, RBAC e integraciones con sistemas externos.',
  'hero.pitch.frontend':
    'Construyo interfaces rápidas, responsivas y accesibles: Blade, Alpine, jQuery y React, con Tailwind o Bootstrap, i18n y modo offline. Cuatro años maquetando lo que otros solo consumen.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.cv': 'Descargar CV',
  'hero.cta.contact': 'Hablemos',
  'hero.scroll': 'Desliza',
  'hero.card.title': 'Ahora mismo',
  'hero.card.role': 'Full Stack · Smart Tech Software (EE. UU.)',
  'hero.card.stack': 'Laravel 12 · Go · Flutter · Alpine',

  // --- Estadísticas ---
  'stats.years': 'Años de experiencia',
  'stats.projects': 'Proyectos en producción',
  'stats.commits': 'Commits en 2026',
  'stats.stack': 'Tecnologías en uso',

  // --- Sobre mí ---
  'about.kicker': 'Sobre mí',
  'about.title': 'Del modelo de datos a la interfaz',
  'about.p1':
    'Soy Andrés David Morales Castro, desarrollador web con 4 años de experiencia creando aplicaciones a medida: intranets y CRM para empresas del sector comercial, plataformas de facturación, catálogos y sistemas de gestión operativa.',
  'about.p2':
    'Mi base es PHP y JavaScript: Laravel y Symfony del lado del servidor, y Blade, Alpine, jQuery y React del lado del cliente. De ahí me he movido a lo que el producto pedía — endpoints REST en Go, apps offline-first en Flutter — sin dejar de ser el que responde por el código en producción.',
  'about.p3':
    'Haber trabajado en los dos lados me deja entender el flujo completo de un sistema: la lógica del negocio, la persistencia, la sincronización y la interacción final con el usuario. Convierto requerimientos funcionales en soluciones técnicas mantenibles.',
  'about.dataTitle': 'Datos rápidos',
  'about.data.location': 'Ubicación',
  'about.data.role': 'Rol actual',
  'about.data.modality': 'Modalidad',
  'about.data.modalityValue': 'Remoto · Híbrido',
  'about.data.email': 'Correo',
  'about.data.phone': 'WhatsApp',
  'about.data.languages': 'Idiomas',
  'about.data.languagesValue': 'Español (nativo) · Inglés (intermedio)',
  'about.strengthsTitle': 'Cómo trabajo',
  'about.strength1.title': 'Producto, no solo tickets',
  'about.strength1.text':
    'Pregunto para qué sirve lo que se está pidiendo antes de escribirlo. Muchas funciones que he construido salieron de detectar el reproceso real del usuario.',
  'about.strength2.title': 'Código que se puede mantener',
  'about.strength2.text':
    'Separación de capas, nombres claros, componentes reutilizables y CSS/JS fuera de las plantillas. El siguiente que lo lea tiene que entenderlo rápido.',
  'about.strength3.title': 'Bilingüe por defecto',
  'about.strength3.text':
    'Todo lo que construyo sale en español e inglés desde el primer commit, con el sistema de i18n del proyecto. Nunca texto quemado en un solo idioma.',
  'about.strength4.title': 'Entrego y despliego',
  'about.strength4.text':
    'Git, GitHub Actions, cron, colas y servidores Linux. La función no está lista cuando compila: está lista cuando corre en producción.',

  // --- Habilidades ---
  'skills.kicker': 'Habilidades',
  'skills.title': 'Herramientas con las que construyo',
  'skills.lead':
    'Ordenadas según el perfil que elijas arriba. Cada tecnología está en el tramo que puedo sostener en una entrevista: sin porcentajes inventados.',
  'skills.level.daily': 'Uso a diario en producción',
  'skills.level.shipped': 'He entregado con esto',
  'skills.level.working': 'Conocimiento de apoyo',
  'skills.cat.backend': 'Backend y datos',
  'skills.cat.frontend': 'Frontend y UI',
  'skills.cat.mobile': 'Móvil y multiplataforma',
  'skills.cat.integrations': 'Integraciones y servicios',
  'skills.cat.tools': 'Herramientas y prácticas',

  // --- Trayectoria ---
  'exp.kicker': 'Trayectoria',
  'exp.title': 'Experiencia y formación',
  'exp.lead':
    'Cuatro años repartidos entre nómina y contratos por proyecto. Los periodos cortos son trabajos freelance con alcance cerrado, no salidas anticipadas: cada uno se entregó y se puso en producción.',
  'exp.tab.work': 'Experiencia',
  'exp.tab.education': 'Educación',
  'exp.tab.certs': 'Certificaciones',
  'exp.current': 'Actual',
  'exp.showEarly': 'Ver experiencia previa en soporte y TI',
  'exp.hideEarly': 'Ocultar experiencia previa',
  'exp.highlights': 'Lo que hice',
  'exp.stack': 'Stack',
  'exp.credential': 'Credencial',
  'exp.issued': 'Expedido',

  // --- Proyectos ---
  'projects.kicker': 'Proyectos',
  'projects.title': 'Trabajo seleccionado',
  'projects.lead':
    'Productos reales en producción y proyectos propios. Los sistemas internos de clientes se describen sin capturas ni código por acuerdo de confidencialidad.',
  'projects.filter.all': 'Todos',
  'projects.filter.fullstack': 'Full Stack',
  'projects.filter.backend': 'Backend',
  'projects.filter.frontend': 'Frontend',
  'projects.filter.mobile': 'Móvil',
  'projects.role': 'Mi rol',
  'projects.repo': 'Código',
  'projects.live': 'Ver en vivo',
  'projects.private': 'Privado (NDA)',
  'projects.empty': 'No hay proyectos con ese filtro.',
  'projects.count': 'proyectos',

  // --- Contacto ---
  'contact.kicker': 'Contacto',
  'contact.title': '¿Construimos algo?',
  'contact.lead':
    'Estoy abierto a posiciones full stack, backend o frontend, y a proyectos por contrato. Respondo en menos de 24 horas.',
  'contact.form.name': 'Nombre',
  'contact.form.namePh': '¿Cómo te llamas?',
  'contact.form.email': 'Correo',
  'contact.form.emailPh': 'tucorreo@empresa.com',
  'contact.form.subject': 'Asunto',
  'contact.form.subjectPh': '¿De qué se trata?',
  'contact.form.message': 'Mensaje',
  'contact.form.messagePh': 'Cuéntame sobre el proyecto o la vacante…',
  'contact.form.send': 'Enviar mensaje',
  'contact.form.required': 'Completa este campo',
  'contact.form.invalidEmail': 'Escribe un correo válido',
  'contact.form.opened':
    'Se abrió tu cliente de correo con el mensaje listo. Si no ocurrió, escríbeme directo a mi correo.',
  'contact.direct': 'O escríbeme directo',
  'contact.social': 'Encuéntrame en',

  // --- Pie ---
  'footer.built': 'Hecho con React, TypeScript y Vite',
  'footer.rights': 'Todos los derechos reservados',
  'footer.source': 'Código de este sitio',
} satisfies Record<string, string>;
