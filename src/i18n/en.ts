import type { Dict } from './types';

/**
 * English dictionary. Typed as `Dict`, so the build fails if any key
 * defined in `es.ts` is missing here.
 */
export const en: Dict = {
  // --- Document ---
  'doc.title': 'Andrés Morales · Full Stack Developer',
  'doc.description':
    'Portfolio of Andrés David Morales Castro, a full stack developer with 4 years of experience in PHP, Laravel, Symfony, JavaScript, React, Flutter and Go.',

  // --- Accessibility / generic ---
  'a11y.skip': 'Skip to content',
  'a11y.menu': 'Open menu',
  'a11y.menuClose': 'Close menu',
  'a11y.theme': 'Toggle theme',
  'a11y.lang': 'Switch language',
  'a11y.top': 'Back to top',
  'common.and': 'and',
  'common.more': 'Show more',
  'common.less': 'Show less',
  'common.present': 'Present',
  'common.copy': 'Copy',
  'common.copied': 'Copied!',

  // --- Navigation ---
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.experience': 'Background',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',

  // --- Profile switch ---
  'focus.label': 'View profile as',
  'focus.full': 'Full Stack',
  'focus.backend': 'Backend',
  'focus.frontend': 'Frontend',
  'focus.hint': 'Reorders skills and projects for the role you care about.',

  // --- Hero ---
  'hero.badge': 'Open to new projects',
  'hero.greeting': "Hi, I'm",
  'hero.role.full': 'Full Stack Developer',
  'hero.role.backend': 'Backend Developer',
  'hero.role.frontend': 'Frontend Developer',
  'hero.pitch.full':
    'I build web and mobile applications end to end: from the data model and the API to the interface the customer actually uses. PHP, Laravel, Go, JavaScript and Flutter.',
  'hero.pitch.backend':
    'I design REST APIs, data models and business logic that hold up in production: Laravel 12, Symfony, Go, Java with Spring Boot, multi-tenant, RBAC and third-party integrations.',
  'hero.pitch.frontend':
    'I build fast, responsive, accessible interfaces: Blade, Alpine, jQuery and React, with Tailwind or Bootstrap, i18n and offline support. Four years writing the markup others only consume.',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv': 'Download CV',
  'hero.cta.contact': "Let's talk",
  'hero.scroll': 'Scroll',
  'hero.card.title': 'Right now',
  'hero.card.role': 'Looking for new opportunities · Full Stack Developer',
  'hero.card.stack': 'Laravel 12 · Go · Flutter · Alpine',

  // --- Stats ---
  'stats.years': 'Years of experience',
  'stats.projects': 'Projects in production',
  'stats.commits': 'Commits in 2026',
  'stats.stack': 'Technologies in use',

  // --- About ---
  'about.kicker': 'About me',
  'about.title': 'From the data model to the interface',
  'about.p1':
    'I am Andrés David Morales Castro, a web developer with 4 years of experience building custom applications: intranets and CRMs for retail and commerce companies, invoicing platforms, catalogs and operational management systems.',
  'about.p2':
    'My base is PHP and JavaScript: Laravel and Symfony on the server, and Blade, Alpine, jQuery and React on the client. From there I moved to whatever the product needed — REST endpoints in Go, offline-first Flutter apps — while staying the person who answers for the code in production.',
  'about.p3':
    'Having worked on both sides lets me understand a system end to end: business logic, persistence, synchronization and the final interaction with the user. I turn functional requirements into maintainable technical solutions.',
  'about.dataTitle': 'Quick facts',
  'about.data.location': 'Location',
  'about.data.role': 'Current role',
  'about.data.modality': 'Setup',
  'about.data.modalityValue': 'Remote · Hybrid',
  'about.data.email': 'Email',
  'about.data.phone': 'WhatsApp',
  'about.data.languages': 'Languages',
  'about.data.languagesValue': 'Spanish (native) · English (intermediate)',
  'about.strengthsTitle': 'How I work',
  'about.strength1.title': 'Product, not just tickets',
  'about.strength1.text':
    'I ask what a request is for before writing it. Many of the features I have shipped came from spotting the rework the user was actually doing.',
  'about.strength2.title': 'Code that can be maintained',
  'about.strength2.text':
    'Layer separation, clear names, reusable components and CSS/JS kept out of the templates. Whoever reads it next has to get it fast.',
  'about.strength3.title': 'Bilingual by default',
  'about.strength3.text':
    "Everything I build ships in Spanish and English from the first commit, through the project's i18n system. Never hardcoded text in a single language.",
  'about.strength4.title': 'I ship and deploy',
  'about.strength4.text':
    'Git, GitHub Actions, cron, queues and Linux servers. A feature is not done when it compiles: it is done when it runs in production.',

  // --- Skills ---
  'skills.kicker': 'Skills',
  'skills.title': 'The tools I build with',
  'skills.lead':
    'Sorted by the profile you picked above. Every technology sits in the tier I can defend in an interview — no made-up percentages.',
  'skills.level.daily': 'Daily in production',
  'skills.level.shipped': 'Shipped work with it',
  'skills.level.working': 'Working knowledge',
  'skills.cat.backend': 'Backend & data',
  'skills.cat.frontend': 'Frontend & UI',
  'skills.cat.mobile': 'Mobile & cross-platform',
  'skills.cat.integrations': 'Integrations & services',
  'skills.cat.tools': 'Tooling & practices',

  // --- Background ---
  'exp.kicker': 'Background',
  'exp.title': 'Experience and education',
  'exp.lead':
    'Four years split between payroll and project contracts. The short stints are freelance engagements with a closed scope, not early exits: each one was delivered and shipped to production.',
  'exp.tab.work': 'Experience',
  'exp.tab.education': 'Education',
  'exp.tab.certs': 'Certifications',
  'exp.current': 'Current',
  'exp.showEarly': 'Show earlier support & IT experience',
  'exp.hideEarly': 'Hide earlier experience',
  'exp.highlights': 'What I did',
  'exp.stack': 'Stack',
  'exp.credential': 'Credential',
  'exp.issued': 'Issued',

  // --- Projects ---
  'projects.kicker': 'Projects',
  'projects.title': 'Selected work',
  'projects.lead':
    'Real products in production plus personal projects. Internal client systems are described without screenshots or code, under a confidentiality agreement.',
  'projects.filter.all': 'All',
  'projects.filter.fullstack': 'Full Stack',
  'projects.filter.backend': 'Backend',
  'projects.filter.frontend': 'Frontend',
  'projects.filter.mobile': 'Mobile',
  'projects.role': 'My role',
  'projects.repo': 'Source',
  'projects.live': 'Live site',
  'projects.private': 'Private (NDA)',
  'projects.empty': 'No projects match that filter.',
  'projects.count': 'projects',

  // --- Contact ---
  'contact.kicker': 'Contact',
  'contact.title': 'Shall we build something?',
  'contact.lead':
    'I am open to full stack, backend or frontend roles, as well as contract work. I reply within 24 hours.',
  'contact.form.name': 'Name',
  'contact.form.namePh': "What's your name?",
  'contact.form.email': 'Email',
  'contact.form.emailPh': 'you@company.com',
  'contact.form.subject': 'Subject',
  'contact.form.subjectPh': 'What is it about?',
  'contact.form.message': 'Message',
  'contact.form.messagePh': 'Tell me about the project or the role…',
  'contact.form.send': 'Send message',
  'contact.form.required': 'Please fill in this field',
  'contact.form.invalidEmail': 'Enter a valid email address',
  'contact.form.opened':
    'Your mail client opened with the message ready. If it did not, write to me directly at my address.',
  'contact.direct': 'Or reach me directly',
  'contact.social': 'Find me on',

  // --- Footer ---
  'footer.built': 'Built with React, TypeScript and Vite',
  'footer.rights': 'All rights reserved',
  'footer.source': 'Source of this site',
};
