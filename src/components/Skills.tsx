import React from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

const Skills: React.FC<{ t: Content }> = ({ t }) => (
  <section id="skills" className="section skills">
    <Reveal><Eyebrow index="03" label={t.ui.skills} /></Reveal>
    <Reveal><h2 className="section__title">{t.skills.title}</h2></Reveal>
    <div className="cards-grid">
      {t.skills.items.map((cat) => (
        // Reveal wraps the card so the entrance transform doesn't block the hover lift.
        <Reveal key={cat.name}>
          <div className="skill-card">
            <h3 className="skill-card__title">{cat.name}</h3>
            <p className="skill-card__desc">{cat.desc}</p>
            <div className="skill-card__chips">
              {cat.chips.map((ch) => (
                <span key={ch} className="chip chip--body">{ch}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
