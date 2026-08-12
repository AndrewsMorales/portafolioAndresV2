import { profile } from '../../data/profile';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import './Footer.css';

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner shell">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <div>
            <p className="footer__name">{profile.fullName}</p>
            <p className="footer__built">{t('footer.built')}</p>
          </div>
        </div>

        <div className="footer__links">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={17} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <Icon name="github" size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label={profile.email}>
            <Icon name="mail" size={17} />
          </a>
          <a
            className="footer__source"
            href={profile.links.repo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="code" size={15} />
            {t('footer.source')}
          </a>
        </div>

        <p className="footer__legal">
          © {year} {profile.fullName}. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
}
