import type { DictKey } from '../../i18n/types';
import { cvFor, profile, stats } from '../../data/profile';
import type { Focus } from '../../state/context';
import { useApp } from '../../state/useApp';
import { FocusSwitch } from '../ui/FocusSwitch';
import { Icon } from '../ui/Icon';
import './Hero.css';

const ROLE_KEY: Record<Focus, DictKey> = {
  full: 'hero.role.full',
  backend: 'hero.role.backend',
  frontend: 'hero.role.frontend',
};

const PITCH_KEY: Record<Focus, DictKey> = {
  full: 'hero.pitch.full',
  backend: 'hero.pitch.backend',
  frontend: 'hero.pitch.frontend',
};

export function Hero() {
  const { t, focus, lang } = useApp();

  return (
    <section className="hero" id="inicio">
      <div className="hero__aura" aria-hidden="true" />
      <div className="hero__grid shell">
        <div className="hero__copy">
          <p className="hero__badge reveal">
            <span className="hero__pulse" aria-hidden="true" />
            {t('hero.badge')}
          </p>

          <h1 className="hero__title reveal">
            <span className="hero__greeting">{t('hero.greeting')}</span>
            <span className="hero__name grad-text">{profile.fullName}</span>
          </h1>

          {/* La clave del rol cambia con el perfil elegido y reinicia la animación. */}
          <p className="hero__role reveal" key={focus}>
            {t(ROLE_KEY[focus])}
          </p>

          <p className="hero__pitch reveal">{t(PITCH_KEY[focus])}</p>

          <div className="hero__focus reveal">
            <FocusSwitch />
            <p className="hero__focusHint">{t('focus.hint')}</p>
          </div>

          <div className="hero__actions reveal">
            <a className="btn btn--primary" href="#proyectos">
              {t('hero.cta.projects')}
              <Icon name="arrowRight" size={18} />
            </a>
            <a className="btn btn--ghost" href={cvFor(lang)} download>
              <Icon name="download" size={18} />
              {t('hero.cta.cv')}
            </a>
          </div>

          <ul className="hero__social reveal">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <Icon name="github" size={18} />
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={18} />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label={profile.email}>
                <Icon name="mail" size={18} />
              </a>
            </li>
            <li className="hero__socialText">
              <Icon name="pin" size={16} />
              {profile.location}
            </li>
          </ul>
        </div>

        <div className="hero__visual reveal">
          <figure className="hero__portrait">
            <img
              src={profile.photo}
              alt={profile.fullName}
              width={420}
              height={520}
              loading="eager"
            />
          </figure>

          <aside className="hero__now">
            <p className="hero__nowLabel">{t('hero.card.title')}</p>
            <p className="hero__nowRole">{t('hero.card.role')}</p>
            <p className="hero__nowStack mono">{t('hero.card.stack')}</p>
          </aside>
        </div>
      </div>

      <ul className="hero__stats shell reveal">
        {stats.map((stat) => (
          <li key={stat.id} className="hero__stat">
            <strong className="hero__statValue">{stat.value}</strong>
            <span className="hero__statLabel">{t(stat.labelKey)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
