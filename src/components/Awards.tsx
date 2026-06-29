import React from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

const Awards: React.FC<{ t: Content }> = ({ t }) => (
  <section id="awards" className="section">
    <Reveal><Eyebrow index="04" label={t.ui.awards} /></Reveal>
    <div className="cards-grid">
      {t.awards.items.map((aw) => (
        <Reveal key={aw.title} className="award-card">
          <div className="award-card__metric">{aw.metric}</div>
          <h3 className="award-card__title">{aw.title}</h3>
          <div className="award-card__org">{aw.org}</div>
          <p className="award-card__text">{aw.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Awards;
