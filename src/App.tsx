import React from 'react';
import { content, socials } from './i18n/content';
import { usePrefs } from './hooks/usePrefs';
import IconSprite from './components/IconSprite';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Education from './components/Education';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, lang, setLang, toggleTheme } = usePrefs();
  const t = content[lang];

  return (
    <div className="app">
      <IconSprite />
      <Nav t={t} lang={lang} theme={theme} setLang={setLang} toggleTheme={toggleTheme} />
      <Hero t={t} theme={theme} socials={socials} />
      <main>
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Awards t={t} />
        <Education t={t} />
        <Writing t={t} />
        <Contact t={t} socials={socials} />
        <Footer t={t} />
      </main>
    </div>
  );
}

export default App;
