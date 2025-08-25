import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Database, FileCode, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';

const skillsData = {
  frontend: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'MongoDB'],
  tools: ['Git', 'VS Code', 'Linux', 'Postman'],
  languages: ['JavaScript', 'Python', 'C++', 'SQL', 'PHP']
};

const SkillCard = ({ icon: Icon, title, skills, delay = 0 }: {
  icon: any;
  title: string;
  skills: string[];
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`glow-card bg-card p-6 rounded-lg transition-all duration-500 ${
      isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-primary mr-3 glow-text" />
        <h3 className="text-xl font-semibold glow-text">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const { t } = useLanguage();
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 glow-text-intense transition-all duration-700 ${
            titleVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            <span className="glow-underline gradient-text">{t.skills.title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCard
            icon={Code}
            title={t.skills.frontend}
            skills={skillsData.frontend}
            delay={200}
          />
          <SkillCard
            icon={Database}
            title={t.skills.backend}
            skills={skillsData.backend}
            delay={400}
          />
          <SkillCard
            icon={Wrench}
            title={t.skills.tools}
            skills={skillsData.tools}
            delay={600}
          />
          <SkillCard
            icon={FileCode}
            title={t.skills.languages}
            skills={skillsData.languages}
            delay={800}
          />
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-10 opacity-20 pointer-events-none">
          <div className="text-6xl font-mono text-primary glow-text animate-float">{'</>'}</div>
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-20 pointer-events-none">
          <div className="text-4xl font-mono text-primary glow-text animate-float delay-300">{'{ }'}</div>
        </div>
      </div>
    </section>
  );
};