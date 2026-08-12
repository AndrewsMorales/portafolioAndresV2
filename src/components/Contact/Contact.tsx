import { useState, type FormEvent } from 'react';
import { cvFor, profile } from '../../data/profile';
import { useApp } from '../../state/useApp';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import './Contact.css';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormValues = { name: '', email: '', subject: '', message: '' };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const { t, lang } = useApp();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    (Object.keys(EMPTY) as (keyof FormValues)[]).forEach((field) => {
      if (!values[field].trim()) next[field] = t('contact.form.required');
    });
    if (!next.email && !EMAIL_PATTERN.test(values.email.trim())) {
      next.email = t('contact.form.invalidEmail');
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Sin backend: se compone un mailto con el mensaje ya redactado.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const body = `${values.message}\n\n—\n${values.name}\n${values.email}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section contact" id="contacto">
      <div className="shell">
        <SectionHeading
          kicker={t('contact.kicker')}
          title={t('contact.title')}
          lead={t('contact.lead')}
        />

        <div className="contact__grid">
          <form className="contact__form card reveal" onSubmit={onSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name">{t('contact.form.name')}</label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder={t('contact.form.namePh')}
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  onChange={(event) => update('name', event.target.value)}
                />
                {errors.name && <p className="contact__error">{errors.name}</p>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">{t('contact.form.email')}</label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('contact.form.emailPh')}
                  value={values.email}
                  aria-invalid={Boolean(errors.email)}
                  onChange={(event) => update('email', event.target.value)}
                />
                {errors.email && <p className="contact__error">{errors.email}</p>}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">{t('contact.form.subject')}</label>
              <input
                id="contact-subject"
                type="text"
                placeholder={t('contact.form.subjectPh')}
                value={values.subject}
                aria-invalid={Boolean(errors.subject)}
                onChange={(event) => update('subject', event.target.value)}
              />
              {errors.subject && <p className="contact__error">{errors.subject}</p>}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">{t('contact.form.message')}</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder={t('contact.form.messagePh')}
                value={values.message}
                aria-invalid={Boolean(errors.message)}
                onChange={(event) => update('message', event.target.value)}
              />
              {errors.message && <p className="contact__error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              <Icon name="send" size={17} />
              {t('contact.form.send')}
            </button>

            <p className="contact__status" role="status">
              {sent ? t('contact.form.opened') : ''}
            </p>
          </form>

          <aside className="contact__aside reveal">
            <div className="contact__card card">
              <h3 className="contact__cardTitle">{t('contact.direct')}</h3>

              <button type="button" className="contact__item" onClick={copyEmail}>
                <span className="contact__itemIcon" aria-hidden="true">
                  <Icon name="mail" size={17} />
                </span>
                <span className="contact__itemBody">
                  <span className="contact__itemLabel">{t('about.data.email')}</span>
                  <span className="contact__itemValue">{profile.email}</span>
                </span>
                <span className="contact__copy" aria-hidden="true">
                  <Icon name={copied ? 'check' : 'copy'} size={15} />
                </span>
                <span className="sr-only">
                  {copied ? t('common.copied') : t('common.copy')}
                </span>
              </button>

              <a
                className="contact__item"
                href={`https://wa.me/${profile.phoneRaw}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact__itemIcon" aria-hidden="true">
                  <Icon name="phone" size={17} />
                </span>
                <span className="contact__itemBody">
                  <span className="contact__itemLabel">{t('about.data.phone')}</span>
                  <span className="contact__itemValue">{profile.phone}</span>
                </span>
                <span className="contact__copy" aria-hidden="true">
                  <Icon name="external" size={15} />
                </span>
              </a>

              <div className="contact__item contact__item--static">
                <span className="contact__itemIcon" aria-hidden="true">
                  <Icon name="pin" size={17} />
                </span>
                <span className="contact__itemBody">
                  <span className="contact__itemLabel">{t('about.data.location')}</span>
                  <span className="contact__itemValue">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="contact__card card">
              <h3 className="contact__cardTitle">{t('contact.social')}</h3>
              <div className="contact__social">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact__socialLink"
                >
                  <Icon name="linkedin" size={18} />
                  LinkedIn
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact__socialLink"
                >
                  <Icon name="github" size={18} />
                  GitHub
                </a>
              </div>
              <a className="btn btn--ghost contact__cv" href={cvFor(lang)} download>
                <Icon name="download" size={17} />
                {t('hero.cta.cv')}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
