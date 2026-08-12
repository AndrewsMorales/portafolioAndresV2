import { useMemo, useState, type CSSProperties } from 'react';
import { certifications, studies } from '../../data/education';
import { jobs, type Job } from '../../data/experience';
import { useReveal } from '../../hooks/useReveal';
import type { DictKey, Lang } from '../../i18n/types';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import './Experience.css';

type Tab = 'work' | 'education' | 'certs';

const TABS: { id: Tab; labelKey: DictKey }[] = [
  { id: 'work', labelKey: 'exp.tab.work' },
  { id: 'education', labelKey: 'exp.tab.education' },
  { id: 'certs', labelKey: 'exp.tab.certs' },
];

/** Convierte `2026-02` en "feb 2026" / "Feb 2026" según el idioma. */
function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  const label = new Intl.DateTimeFormat(lang === 'es' ? 'es-CO' : 'en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(year, month - 1, 1));
  return label.replace('.', '');
}

/** Duración en años y meses, redactada en el idioma activo. */
function formatDuration(job: Job, lang: Lang): string {
  const [startYear, startMonth] = job.start.split('-').map(Number);
  const end = job.end ? job.end.split('-').map(Number) : null;
  const now = new Date();
  const endYear = end ? end[0] : now.getFullYear();
  const endMonth = end ? end[1] : now.getMonth() + 1;

  const total = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(lang === 'es' ? `${years} ${years === 1 ? 'año' : 'años'}` : `${years} yr${years === 1 ? '' : 's'}`);
  }
  if (months > 0) {
    parts.push(lang === 'es' ? `${months} ${months === 1 ? 'mes' : 'meses'}` : `${months} mo${months === 1 ? '' : 's'}`);
  }
  return parts.join(' ');
}

export function Experience() {
  const { t, tl, lang } = useApp();
  const [tab, setTab] = useState<Tab>('work');
  const [showEarly, setShowEarly] = useState(false);

  const devJobs = useMemo(() => jobs.filter((job) => job.kind === 'dev'), []);
  const earlyJobs = useMemo(() => jobs.filter((job) => job.kind === 'support'), []);
  const visibleJobs = showEarly ? [...devJobs, ...earlyJobs] : devJobs;

  useReveal([tab, showEarly, lang]);

  return (
    <section className="section experience" id="trayectoria">
      <div className="shell">
        <SectionHeading kicker={t('exp.kicker')} title={t('exp.title')} lead={t('exp.lead')}>
          <div className="exp__tabs" role="tablist" aria-label={t('exp.title')}>
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`exp__tab${tab === item.id ? ' is-active' : ''}`}
                onClick={() => setTab(item.id)}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>
        </SectionHeading>

        {tab === 'work' && (
          <>
            <ol className="exp__timeline">
              {visibleJobs.map((job, index) => (
                <li
                  key={job.id}
                  className={`exp__item reveal${job.end === null ? ' is-current' : ''}`}
                  style={{ '--reveal-delay': `${Math.min(index, 4) * 60}ms` } as CSSProperties}
                >
                  <span className="exp__marker" aria-hidden="true" />

                  <article className="exp__card card">
                    <header className="exp__head">
                      <div className="exp__headMain">
                        <h3 className="exp__role">{tl(job.role)}</h3>
                        <p className="exp__company">
                          {job.company}
                          <span className="exp__sep" aria-hidden="true">
                            ·
                          </span>
                          <span className="exp__arrangement">{tl(job.arrangement)}</span>
                        </p>
                      </div>

                      <div className="exp__dates">
                        {job.end === null && (
                          <span className="exp__now">{t('exp.current')}</span>
                        )}
                        <span className="exp__range mono">
                          {formatMonth(job.start, lang)} —{' '}
                          {job.end ? formatMonth(job.end, lang) : t('common.present')}
                        </span>
                        <span className="exp__duration">{formatDuration(job, lang)}</span>
                      </div>
                    </header>

                    <p className="exp__summary">{tl(job.summary)}</p>

                    {job.highlights.length > 0 && (
                      <>
                        <h4 className="exp__subhead">{t('exp.highlights')}</h4>
                        <ul className="exp__highlights">
                          {job.highlights.map((highlight) => (
                            <li key={highlight.en}>{tl(highlight)}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {job.stack.length > 0 && (
                      <div className="exp__stack chips">
                        {job.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              ))}
            </ol>

            <button
              type="button"
              className="btn btn--quiet exp__toggle"
              onClick={() => setShowEarly((value) => !value)}
            >
              <Icon name={showEarly ? 'arrowUp' : 'arrowDown'} size={16} />
              {showEarly ? t('exp.hideEarly') : t('exp.showEarly')}
            </button>
          </>
        )}

        {tab === 'education' && (
          <ol className="exp__timeline">
            {studies.map((study, index) => (
              <li
                key={study.id}
                className="exp__item reveal"
                style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}
              >
                <span className="exp__marker" aria-hidden="true" />
                <article className="exp__card card">
                  <header className="exp__head">
                    <div className="exp__headMain">
                      <h3 className="exp__role">{tl(study.degree)}</h3>
                      <p className="exp__company">{study.school}</p>
                    </div>
                    <div className="exp__dates">
                      <span className="exp__range mono">{tl(study.period)}</span>
                    </div>
                  </header>
                  <p className="exp__summary">{tl(study.note)}</p>
                </article>
              </li>
            ))}
          </ol>
        )}

        {tab === 'certs' && (
          <ul className="exp__certs">
            {certifications.map((cert, index) => (
              <li
                key={cert.id}
                className="exp__cert card reveal"
                style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}
              >
                <span className="exp__certIcon" aria-hidden="true">
                  <Icon name="sparkles" size={18} />
                </span>
                <h3 className="exp__certName">{tl(cert.name)}</h3>
                <p className="exp__certIssuer">
                  {cert.issuer}
                  <span className="exp__sep" aria-hidden="true">
                    ·
                  </span>
                  {t('exp.issued')}: {tl(cert.issued)}
                </p>
                {cert.credentialId && (
                  <p className="exp__certId mono">
                    {t('exp.credential')}: {cert.credentialId}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
