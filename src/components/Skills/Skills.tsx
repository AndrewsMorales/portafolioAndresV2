import type { CSSProperties } from 'react';
import { LEVEL_LABEL, byLevel, orderedCategories, skillName } from '../../data/skills';
import { useReveal } from '../../hooks/useReveal';
import { useApp } from '../../state/useApp';
import { FocusSwitch } from '../ui/FocusSwitch';
import { SectionHeading } from '../ui/SectionHeading';
import './Skills.css';

export function Skills() {
  const { t, focus, lang } = useApp();
  const categories = orderedCategories(focus);

  // El reordenar categorías monta nodos nuevos: hay que volver a observarlos.
  useReveal([focus]);

  return (
    <section className="section section--alt skills" id="habilidades">
      <div className="shell">
        <SectionHeading
          kicker={t('skills.kicker')}
          title={t('skills.title')}
          lead={t('skills.lead')}
        >
          <div className="skills__switch">
            <FocusSwitch variant="inline" />
          </div>
        </SectionHeading>

        <div className="skills__grid">
          {categories.map((category, index) => (
            <article
              key={category.id}
              className="skills__card card reveal"
              style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}
            >
              <header className="skills__cardHead">
                <h3 className="skills__cardTitle">{t(category.titleKey)}</h3>
                <span className="skills__count mono">{category.skills.length}</span>
              </header>

              {byLevel(category).map((group) => (
                <section key={group.level} className="skills__group">
                  <h4 className={`skills__level skills__level--${group.level}`}>
                    <span className="skills__levelDot" aria-hidden="true" />
                    {t(LEVEL_LABEL[group.level])}
                  </h4>
                  <ul className="skills__list">
                    {group.skills.map((skill) => (
                      <li
                        key={skillName(skill, 'es')}
                        className={`skills__skill is-${group.level}`}
                      >
                        {skillName(skill, lang)}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
