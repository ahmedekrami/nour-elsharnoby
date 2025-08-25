import { Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold glow-text-intense cursor-pointer" 
                onClick={() => scrollToSection('hero')}>
              {t.name}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="glow-underline font-medium transition-colors hover:text-primary"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="glow-underline font-medium transition-colors hover:text-primary"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="glow-underline font-medium transition-colors hover:text-primary"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="glow-underline font-medium transition-colors hover:text-primary"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="glow-card border-primary/20 hover:border-primary/40"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="glow-card border-primary/20 hover:border-primary/40"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex justify-center space-x-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm glow-underline font-medium transition-colors hover:text-primary"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm glow-underline font-medium transition-colors hover:text-primary"
          >
            {t.nav.skills}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm glow-underline font-medium transition-colors hover:text-primary"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm glow-underline font-medium transition-colors hover:text-primary"
          >
            {t.nav.contact}
          </button>
        </nav>
      </div>
    </header>
  );
};