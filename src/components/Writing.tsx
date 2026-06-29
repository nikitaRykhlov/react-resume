import React from 'react';
import type { Content } from '../i18n/content';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import Icon from './Icon';

const Writing: React.FC<{ t: Content }> = ({ t }) => (
  <section id="writing" className="section">
    <Reveal><Eyebrow index="06" label={t.ui.writing} /></Reveal>
    <Reveal className="writing__grid">
      <h2 className="writing__title">{t.writing.title}</h2>
      <div>
        <p className="writing__text">{t.writing.text}</p>
        <div className="writing__links">
          {t.writing.links.map((bl) => (
            <a
              key={bl.label}
              className="blog-link"
              href={bl.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon id={bl.icon} size={18} />
              {bl.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default Writing;
