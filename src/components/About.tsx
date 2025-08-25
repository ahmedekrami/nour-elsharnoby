import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Code2, Lightbulb } from 'lucide-react';

export const About = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative coding-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 glow-text-intense transition-all duration-700 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
            }`}>
              <span className="glow-underline gradient-text">{t.about.title}</span>
            </h2>
          </div>

          {/* Content */}
          <div className={`glow-card bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl transition-all duration-700 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '200ms' }}>
            
            {/* Main Description */}
            <div className="mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {t.about.description}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className={`text-center p-6 rounded-lg bg-primary/5 border border-primary/20 transition-all duration-500 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`} style={{ animationDelay: '400ms' }}>
                <User className="w-8 h-8 text-primary mx-auto mb-3 glow-text" />
                <h3 className="font-semibold text-primary glow-text">Problem Solver</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {isRTL ? 'أحب حل المشاكل المعقدة' : 'Love tackling complex challenges'}
                </p>
              </div>

              <div className={`text-center p-6 rounded-lg bg-primary/5 border border-primary/20 transition-all duration-500 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`} style={{ animationDelay: '600ms' }}>
                <Code2 className="w-8 h-8 text-primary mx-auto mb-3 glow-text" />
                <h3 className="font-semibold text-primary glow-text">Clean Code</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {isRTL ? 'أكتب كوداً نظيفاً وفعالاً' : 'Write efficient, maintainable code'}
                </p>
              </div>

              <div className={`text-center p-6 rounded-lg bg-primary/5 border border-primary/20 transition-all duration-500 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`} style={{ animationDelay: '800ms' }}>
                <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3 glow-text" />
                <h3 className="font-semibold text-primary glow-text">Innovation</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {isRTL ? 'أسعى للابتكار والتطوير' : 'Always exploring new technologies'}
                </p>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
            <div className="text-2xl font-mono text-primary glow-text animate-float">
              {isRTL ? 'مهندس{}' : 'engineer()'}
            </div>
          </div>
          <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
            <div className="text-xl font-mono text-primary glow-text animate-float delay-300">
              {'const passion = true;'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};