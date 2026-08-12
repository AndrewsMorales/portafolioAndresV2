import { useEffect, useState } from 'react';
import type { DictKey } from '../../i18n/types';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import './Nav.css';

const LINKS: { id: string; labelKey: DictKey }[] = [
  { id: 'inicio', labelKey: 'nav.home' },
  { id: 'sobre-mi', labelKey: 'nav.about' },
  { id: 'habilidades', labelKey: 'nav.skills' },
  { id: 'trayectoria', labelKey: 'nav.experience' },
  { id: 'proyectos', labelKey: 'nav.projects' },
  { id: 'contacto', labelKey: 'nav.contact' },
];

const SECTION_IDS = LINKS.map((link) => link.id);

export function Nav() {
  const { t, lang, toggleLang, resolvedTheme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquea el desplazamiento del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.classList.toggle('has-menu-open', open);
    return () => document.body.classList.remove('has-menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner shell">
        <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="nav__brandText">
            <strong>{profile.firstName}</strong> {profile.lastName}
          </span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label={t('nav.home')}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__pill"
            onClick={toggleLang}
            aria-label={t('a11y.lang')}
            title={t('a11y.lang')}
          >
            <Icon name="globe" size={16} />
            <span className="nav__pillText">{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            className="nav__icon"
            onClick={toggleTheme}
            aria-label={t('a11y.theme')}
            title={t('a11y.theme')}
          >
            <Icon name={resolvedTheme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <button
            type="button"
            className="nav__icon nav__burger"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t('a11y.menuClose') : t('a11y.menu')}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {open && <button type="button" className="nav__scrim" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </header>
  );
}
