import type { CSSProperties } from 'react';
import { cvFor, profile, strengths } from '../../data/profile';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import './About.css';

export function About() {
  const { t, lang } = useApp();

  const facts = [
    { id: 'location', icon: 'pin' as const, label: t('about.data.location'), value: profile.location },
    {
      id: 'role',
      icon: 'code' as const,
      label: t('about.data.role'),
      value: t('hero.role.full'),
    },
    {
      id: 'modality',
      icon: 'globe' as const,
      label: t('about.data.modality'),
      value: t('about.data.modalityValue'),
    },
    {
      id: 'languages',
      icon: 'layers' as const,
      label: t('about.data.languages'),
      value: t('about.data.languagesValue'),
    },
  ];

  return (
    <section className="section about" id="sobre-mi">
      <div className="shell">
        <SectionHeading kicker={t('about.kicker')} title={t('about.title')} />

        <div className="about__grid">
          <div className="about__prose reveal">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>

            <div className="about__links">
              <a className="btn btn--quiet" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={16} />
                {profile.email}
              </a>
              <a
                className="btn btn--quiet"
                href={`https://wa.me/${profile.phoneRaw}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="phone" size={16} />
                {profile.phone}
              </a>
            </div>
          </div>

          <aside className="about__facts card reveal">
            <h3 className="about__factsTitle">{t('about.dataTitle')}</h3>
            <ul className="about__factList">
              {facts.map((fact) => (
                <li key={fact.id} className="about__fact">
                  <span className="about__factIcon" aria-hidden="true">
                    <Icon name={fact.icon} size={16} />
                  </span>
                  <span className="about__factBody">
                    <span className="about__factLabel">{fact.label}</span>
                    <span className="about__factValue">{fact.value}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary about__cv" href={cvFor(lang)} download>
              <Icon name="download" size={17} />
              {t('hero.cta.cv')}
            </a>
          </aside>
        </div>

        <h3 className="about__strengthsTitle reveal">{t('about.strengthsTitle')}</h3>
        <ul className="about__strengths">
          {strengths.map((strength, index) => (
            <li
              key={strength.id}
              className="about__strength card reveal"
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <span className="about__strengthIcon" aria-hidden="true">
                <Icon name={strength.icon} size={20} />
              </span>
              <h4 className="about__strengthTitle">{t(strength.titleKey)}</h4>
              <p className="about__strengthText">{t(strength.textKey)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
