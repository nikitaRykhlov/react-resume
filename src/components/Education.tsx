import React from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Icon from './Icon';

const Education: React.FC<{ t: Content }> = ({ t }) => (
  <section id="education" className="section">
    <Reveal><Eyebrow index="05" label={t.ui.education} /></Reveal>
    <div className="edu__grid">
      <Reveal>
        <p className="edu__col-label">{t.ui.education}</p>
        <div className="edu-card">
          <h3 className="edu-card__degree">{t.education.degree}</h3>
          <div className="edu-card__school">{t.education.school}</div>
          <div className="edu-card__period">{t.education.period}</div>
          <div className="edu-card__chips">
            {t.education.skills.map((sk) => (
              <span key={sk} className="chip">{sk}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <p className="edu__col-label">{t.ui.certifications}</p>
        <div className="cert-list">
          {t.education.certs.map((cert) => (
            <a
              key={cert.title}
              className="cert"
              href={cert.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="cert__main">
                <h4 className="cert__title">{cert.title}</h4>
                <div className="cert__meta">{cert.issuer} · {cert.date}</div>
              </div>
              <span className="cert__icon">
                <Icon id="external" size={18} />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Education;
