import React from 'react';
import type { Content, Lang } from '../i18n/content';
import type { Theme } from '../hooks/usePrefs';
import Icon from './Icon';
import { scrollToId, scrollToTop } from '../lib/scroll';

interface NavProps {
  t: Content;
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
}

const Nav: React.FC<NavProps> = ({ t, lang, theme, setLang, toggleTheme }) => {
  const navKeys = Object.keys(t.nav) as (keyof Content['nav'])[];

  return (
    <nav className="nav">
      <a
        href="#top"
        className="nav__logo"
        onClick={(e) => { e.preventDefault(); scrollToTop(); }}
      >
        <span className="nav__mark">NR</span>
        <span className="nav__wordmark">nikita_rykhlov</span>
      </a>
      <div className="nav__right">
        <div className="nav__links">
          {navKeys.map((k) => (
            <button
              key={k}
              className="nav__link"
              onClick={(e) => { e.preventDefault(); scrollToId(k); }}
            >
              {t.nav[k]}
            </button>
          ))}
        </div>
        <div className="lang">
          <button
            className={`lang__btn${lang === 'en' ? ' lang__btn--active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            className={`lang__btn${lang === 'ru' ? ' lang__btn--active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
        </div>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          <Icon id={theme === 'dark' ? 'sun' : 'moon'} size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
