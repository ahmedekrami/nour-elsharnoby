import { Header } from './Header';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { About } from './About';
import { Contact } from './Contact';

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
};