import React, { useEffect, useRef, useState } from 'react';
import type { Content, Social } from '../i18n/content';
import { COPY_EMAIL, COPY_PHONE } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Icon from './Icon';

interface ContactProps {
  t: Content;
  socials: Social[];
}

type Copied = 'email' | 'phone' | null;

const Contact: React.FC<ContactProps> = ({ t, socials }) => {
  const [copied, setCopied] = useState<Copied>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = (field: Exclude<Copied, null>, text: string) => {
    try { navigator.clipboard?.writeText(text); } catch { /* ignore */ }
    setCopied(field);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__wash" />
      <div className="contact__inner">
        <Reveal><Eyebrow index="07" label={t.ui.contact} line={false} /></Reveal>
        <Reveal><h2 className="contact__title">{t.contact.title}</h2></Reveal>
        <Reveal><p className="contact__subtitle">{t.contact.subtitle}</p></Reveal>

        <Reveal className="contact__tiles">
          <div className="tile">
            <span className="tile__icon tile__icon--soft">
              <Icon id="mail" size={20} />
            </span>
            <div className="tile__main">
              <div className="tile__label">{t.ui.email}</div>
              <a className="tile__value" href={`mailto:${COPY_EMAIL}`}>{t.contact.email}</a>
            </div>
            <button
              className="tile__copy"
              aria-label="Copy email"
              onClick={() => copy('email', t.contact.email)}
            >
              <Icon id={copied === 'email' ? 'check' : 'copy'} size={16} />
            </button>
          </div>

          <div className="tile">
            <span className="tile__icon tile__icon--soft">
              <Icon id="whatsapp" size={20} />
            </span>
            <div className="tile__main">
              <div className="tile__label">{t.ui.phone}</div>
              <a className="tile__value" href="https://wa.me/995599390961" target="_blank" rel="noreferrer">{t.contact.phone}</a>
            </div>
            <button
              className="tile__copy"
              aria-label="Copy phone"
              onClick={() => copy('phone', COPY_PHONE)}
            >
              <Icon id={copied === 'phone' ? 'check' : 'copy'} size={16} />
            </button>
          </div>

          <div className="tile">
            <span className="tile__icon tile__icon--gmt">GMT</span>
            <div className="tile__main">
              <div className="tile__label">{t.ui.timezone}</div>
              <div className="tile__value tile__value--mono">UTC+04:00</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="contact__social"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              <Icon id={s.icon} size={19} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
