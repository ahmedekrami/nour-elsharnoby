import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImage from '@/assets/nour-profile-linkedin.jpg';

export const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden coding-bg">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt={t.name}
                className="w-48 h-48 md:w-64 md:h-64 mx-auto object-cover profile-glow float-animation"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className={`mb-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glow-text-intense">
              <span className="gradient-text">{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 glow-text">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className={`${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Floating Code Elements */}
          <div className="absolute top-20 left-10 opacity-30 animate-float">
            <div className="text-primary font-mono text-sm glow-text">
              {'{ code: "beautiful" }'}
            </div>
          </div>
          <div className="absolute top-1/3 right-10 opacity-30 animate-float delay-300">
            <div className="text-primary font-mono text-sm glow-text">
              {'function create() {}'}
            </div>
          </div>
          <div className="absolute bottom-32 left-1/4 opacity-30 animate-float delay-500">
            <div className="text-primary font-mono text-sm glow-text">
              {'<Component />'}
            </div>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-glow-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-glow-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary/35 rounded-full animate-glow-pulse delay-500"></div>
      </div>
    </section>
  );
};