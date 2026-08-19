import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { projects, type ProjectTag } from '../../data/projects';
import { useReveal } from '../../hooks/useReveal';
import type { DictKey } from '../../i18n/types';
import type { Focus } from '../../state/context';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import './Projects.css';

type Filter = ProjectTag | 'all';

const FILTERS: { id: Filter; labelKey: DictKey }[] = [
  { id: 'all', labelKey: 'projects.filter.all' },
  { id: 'fullstack', labelKey: 'projects.filter.fullstack' },
  { id: 'backend', labelKey: 'projects.filter.backend' },
  { id: 'frontend', labelKey: 'projects.filter.frontend' },
  { id: 'mobile', labelKey: 'projects.filter.mobile' },
];

/** El perfil elegido en la cabecera preselecciona el filtro de proyectos. */
const FILTER_FOR_FOCUS: Record<Focus, Filter> = {
  full: 'all',
  backend: 'backend',
  frontend: 'frontend',
};

/**
 * Dos letras para la portada generada: iniciales, o las dos primeras si es una
 * sola palabra. Se descartan los trozos que no empiezan por letra —el punto
 * medio de «Pedidos · Flujo de estados» es una palabra para `split`, pero no
 * una inicial.
 */
function initialsOf(title: string): string {
  const words = title.split(/\s+/).filter((word) => /^\p{L}/u.test(word));
  const letters =
    words.length > 1 ? words.slice(0, 2).map((word) => word[0]).join('') : (words[0] ?? title).slice(0, 2);
  return letters.toUpperCase();
}

export function Projects() {
  const { t, tl, focus, lang } = useApp();
  const [filter, setFilter] = useState<Filter>(FILTER_FOR_FOCUS[focus]);

  useEffect(() => {
    setFilter(FILTER_FOR_FOCUS[focus]);
  }, [focus]);

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.tags.includes(filter)),
    [filter],
  );

  useReveal([filter, lang]);

  return (
    <section className="section section--alt projects" id="proyectos">
      <div className="shell">
        <SectionHeading
          kicker={t('projects.kicker')}
          title={t('projects.title')}
          lead={t('projects.lead')}
        >
          <div className="projects__filters">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`projects__filter${filter === item.id ? ' is-active' : ''}`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {t(item.labelKey)}
              </button>
            ))}
            <span className="projects__tally mono">
              {visible.length} {t('projects.count')}
            </span>
          </div>
        </SectionHeading>

        {visible.length === 0 ? (
          <p className="projects__empty">{t('projects.empty')}</p>
        ) : (
          <div className="projects__grid">
            {visible.map((project, index) => (
              <article
                key={project.id}
                className={`projects__card card reveal${project.featured ? ' is-featured' : ''}`}
                style={
                  {
                    '--reveal-delay': `${Math.min(index, 5) * 60}ms`,
                    '--hue': project.hue,
                  } as CSSProperties
                }
              >
                <div className="projects__cover">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="projects__coverMark" aria-hidden="true">
                      {initialsOf(project.title)}
                    </span>
                  )}
                  <span className="projects__year mono">{project.year}</span>
                  {project.confidential && (
                    <span className="projects__nda" title={t('projects.private')}>
                      <Icon name="lock" size={13} />
                      {t('projects.private')}
                    </span>
                  )}
                </div>

                <div className="projects__body">
                  <p className="projects__kind">
                    {tl(project.kind)}
                    <span className="projects__dot" aria-hidden="true">
                      ·
                    </span>
                    {tl(project.context)}
                  </p>
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__summary">{tl(project.summary)}</p>

                  {project.metrics && (
                    <ul className="projects__metrics">
                      {project.metrics.map((metric) => (
                        <li key={metric.label.en} className="projects__metric">
                          <strong className="projects__metricValue">{metric.value}</strong>
                          <span className="projects__metricLabel">{tl(metric.label)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="projects__roleLabel">{t('projects.role')}</p>
                  <p className="projects__role">{tl(project.role)}</p>

                  <div className="projects__tech chips">
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.live || project.repo) && (
                    <div className="projects__links">
                      {project.live && (
                        <a
                          className="projects__link"
                          href={project.live}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Icon name="external" size={15} />
                          {t('projects.live')}
                        </a>
                      )}
                      {project.repo && (
                        <a
                          className="projects__link"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Icon name="github" size={15} />
                          {t('projects.repo')}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
