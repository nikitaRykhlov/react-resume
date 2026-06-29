import React from 'react';
import type { Content, Lang, Social } from '../i18n/content';
import { cvFiles } from '../i18n/content';
import type { Theme } from '../hooks/usePrefs';
import Icon from './Icon';
import { useHeroCanvas } from '../hooks/useHeroCanvas';
import { scrollToId } from '../lib/scroll';

interface HeroProps {
  t: Content;
  lang: Lang;
  theme: Theme;
  socials: Social[];
}

const Hero: React.FC<HeroProps> = ({ t, lang, theme, socials }) => {
  const { heroRef, canvasRef, spotRef } = useHeroCanvas(theme);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <canvas className="hero__canvas" ref={canvasRef} />
      <div className="hero__spot" ref={spotRef} />
      <div className="hero__vignette" />

      <div className="hero__grid">
        <div className="hero__content">
          <div className="status">
            <span className="status__dot" />
            <span style={{ whiteSpace: 'nowrap' }}>{t.hero.status}</span>
          </div>
          <p className="hero__role">{t.hero.role}</p>
          <h1 className="hero__name">
            <span>{t.hero.first}</span>
            <span className="hero__name-last">{t.hero.last}</span>
          </h1>
          <p className="hero__tagline">{t.hero.tagline}</p>

          <div className="chips hero__chips">
            {t.hero.mainSkills.map((chip) => (
              <span key={chip} className="chip chip--hero">{chip}</span>
            ))}
          </div>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollToId('contact')}>
              {t.hero.ctaPrimary}
              <Icon id="arrow" size={17} />
            </button>
            <button className="btn-secondary" onClick={() => scrollToId('experience')}>
              {t.hero.ctaSecondary}
            </button>
            <a className="btn-secondary btn-cv" href={cvFiles[lang]} download>
              {t.ui.downloadCv}
              <Icon id="download" size={17} />
            </a>
            <div className="social-row">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <Icon id={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__photo">
          <div className="photo">
            <div className="photo__glow" />
            <div className="photo__ring" />
            <div className="photo__frame">
              <img src="/photo.png" alt="Nikita Rykhlov" />
            </div>
            <div className="photo__badge">
              <span className="photo__badge-num">{t.hero.years}</span>
              <span className="photo__badge-label">{t.hero.yearsLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        {t.hero.location}
        <Icon id="down" size={16} />
      </div>
    </header>
  );
};

export default Hero;
