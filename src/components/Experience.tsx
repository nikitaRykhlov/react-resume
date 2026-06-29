import React, { useState } from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Icon from './Icon';

const Experience: React.FC<{ t: Content }> = ({ t }) => {
  // First card open by default; -1 = all closed.
  const [openExp, setOpenExp] = useState(0);

  const toggle = (i: number) => {
    setOpenExp((cur) => (cur === i ? -1 : i));
  };

  return (
    <section id="experience" className="section">
      <Reveal><Eyebrow index="02" label={t.ui.experience} /></Reveal>
      <div className="exp__list">
        {t.experience.items.map((item, i) => {
          const open = openExp === i;
          return (
            <Reveal key={item.company} className={`exp-card${open ? ' exp-card--open' : ''}`}>
              <button
                className="exp-card__header"
                aria-expanded={open}
                onClick={() => toggle(i)}
              >
                <span className="exp-card__num">{`0${i + 1}`}</span>
                <div className="exp-card__head-main">
                  <div className="exp-card__title-row">
                    <h3 className="exp-card__company">{item.company}</h3>
                    <span className="exp-card__role">{item.role}</span>
                  </div>
                  <div className="exp-card__meta">{item.period} · {item.location}</div>
                </div>
                <span className="exp-card__chev">
                  <Icon id="down" size={20} />
                </span>
              </button>

              <div className="exp-card__body-wrap" aria-hidden={!open}>
                <div className="exp-card__body-inner">
                  <div className="exp-card__body">
                    <div className="exp-hl-list">
                      {item.highlights.map((h) => (
                        <div key={h.value + h.text} className="exp-hl">
                          <span className="exp-hl__value">{h.value}</span>
                          <span className="exp-hl__text">{h.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="exp__resp-label">{t.ui.responsibilities}</p>
                    <ul className="exp__resp-list">
                      {item.details.map((d) => (
                        <li key={d} className="exp__resp-item">
                          <span className="exp__resp-dot" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="exp__skills">
                      {item.skills.map((sk) => (
                        <span key={sk} className="chip">{sk}</span>
                      ))}
                    </div>
                    <div className="exp__team">{t.ui.team}: {item.unit} · {item.team}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
