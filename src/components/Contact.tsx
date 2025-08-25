import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/nourelsharnoby',
    color: 'hover:text-gray-400'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nour-elsharnoby/',
    color: 'hover:text-blue-500'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/nour__elsharnoby/',
    color: 'hover:text-pink-500'
  },
  {
    icon: Mail,
    name: 'Email',
    url: 'mailto:nour.elsharnoby@gmail.com',
    color: 'hover:text-red-500'
  }
];

export const Contact = () => {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const whatsappNumber = "+201063680826";
  const whatsappMessage = encodeURIComponent("Hello Nour! I'm interested in discussing a project with you.");

  return (
    <section id="contact" className="py-20 relative coding-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 glow-text-intense transition-all duration-700 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
            }`}>
              <span className="glow-underline gradient-text">{t.contact.title}</span>
            </h2>
            <p className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 ${
              isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '200ms' }}>
              {t.contact.description}
            </p>
          </div>

          {/* Contact Card */}
          <div className={`glow-card bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl mb-12 transition-all duration-700 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '400ms' }}>
            
            {/* WhatsApp CTA */}
            <div className="mb-8">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-card"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {t.contact.whatsapp}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon group transition-all duration-300 ${
                      isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                    title={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-muted-foreground">
                {isRTL ? 'أو راسلني مباشرة على' : 'Or reach me directly at'}: 
                <a 
                  href="mailto:nour.elsharnoby@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors ml-2 glow-text"
                >
                  nour.elsharnoby@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className={`text-center text-muted-foreground transition-all duration-700 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '1000ms' }}>
            <p>© 2024 {t.name}. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
            <p className="text-sm mt-2 opacity-75">
              {isRTL ? 'صُنع بـ ❤️ باستخدام React و TypeScript' : 'Made with ❤️ using React & TypeScript'}
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 animate-glow-pulse"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 opacity-20 pointer-events-none">
        <div className="text-3xl font-mono text-primary glow-text animate-float">{'@'}</div>
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 pointer-events-none">
        <div className="text-2xl font-mono text-primary glow-text animate-float delay-300">{'#connect'}</div>
      </div>
    </section>
  );
};