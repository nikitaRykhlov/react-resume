import React from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

const About: React.FC<{ t: Content }> = ({ t }) => (
  <section id="about" className="section section--about">
    <Reveal><Eyebrow index="01" label={t.ui.about} /></Reveal>
    <div className="about__grid">
      <Reveal>
        <h2 className="about__title">{t.about.title}</h2>
      </Reveal>
      <Reveal>
        {t.about.paras.map((para, i) => (
          <p key={i} className="about__para">{para}</p>
        ))}
      </Reveal>
    </div>
    <Reveal className="metrics">
      {t.metrics.map((m) => (
        <div key={m.label} className="metric">
          <div className="metric__value">{m.value}</div>
          <div className="metric__label">{m.label}</div>
        </div>
      ))}
    </Reveal>
  </section>
);

export default About;
