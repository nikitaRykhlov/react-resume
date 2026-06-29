import { useEffect, useState } from 'react';
import type { Lang } from '../i18n/content';

export type Theme = 'dark' | 'light';

function initialTheme(): Theme {
  try {
    const stored = localStorage.getItem('nr_theme');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  } catch { /* ignore */ }
  return 'dark';
}

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem('nr_lang');
    if (stored === 'en' || stored === 'ru') return stored;
    if ((navigator.language || '').toLowerCase().startsWith('ru')) return 'ru';
  } catch { /* ignore */ }
  return 'en';
}

/** Theme + language, persisted to localStorage and auto-detected on first load. */
export function usePrefs() {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Reflect the active theme on the document root so the token CSS keys off it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = (t: Theme) => {
    try { localStorage.setItem('nr_theme', t); } catch { /* ignore */ }
    setThemeState(t);
  };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const setLang = (l: Lang) => {
    try { localStorage.setItem('nr_lang', l); } catch { /* ignore */ }
    setLangState(l);
  };

  return { theme, lang, setTheme, toggleTheme, setLang };
}
