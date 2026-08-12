import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Nav } from './components/Nav/Nav';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { BackToTop } from './components/ui/BackToTop';
import { useReveal } from './hooks/useReveal';
import { useApp } from './state/useApp';

export function App() {
  const { t, lang } = useApp();

  // Al cambiar de idioma no se remonta nada, pero sí en el primer render.
  useReveal([lang]);

  return (
    <div className="app">
      <a className="skip-link" href="#contenido">
        {t('a11y.skip')}
      </a>

      <Nav />

      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
