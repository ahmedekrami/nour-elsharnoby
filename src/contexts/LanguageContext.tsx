import { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  en: {
    name: string;
    nav: {
      home: string;
      skills: string;
      about: string;
      contact: string;
    };
    hero: {
      title: string;
      description: string;
      subtitle: string;
    };
    skills: {
      title: string;
      frontend: string;
      backend: string;
      tools: string;
      languages: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      whatsapp: string;
    };
  };
  ar: {
    name: string;
    nav: {
      home: string;
      skills: string;
      about: string;
      contact: string;
    };
    hero: {
      title: string;
      description: string;
      subtitle: string;
    };
    skills: {
      title: string;
      frontend: string;
      backend: string;
      tools: string;
      languages: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      whatsapp: string;
    };
  };
}

const translations: Translations = {
  en: {
    name: "Nour Elsharnoby",
    nav: {
      home: "Home",
      skills: "Skills",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Nour Elsharnoby",
      subtitle: "Security analyst",
      description: "I am a motivated IT professional with hands-on experience in networking and a strong passion for cybersecurity. Skilled in monitoring, incident response, and vulnerability management, with practical training in CCNA and ongoing studies in information security with Digital Egypt Pioneers. I enjoy working with SOC environments, analyzing threats, and implementing effective security measures to protect digital assets."
    },
    skills: {
      title: "Skills & Expertise",
      frontend: "Frontend Development",
      backend: "Backend Development", 
      tools: "Tools & Technologies",
      languages: "Programming Languages"
    },
    about: {
      title: "About Me",
      description: "I'm Nour Elsharnoby, a dedicated Computer Engineer with a passion for creating innovative software solutions. My expertise spans across full-stack development, with a strong foundation in modern programming languages and frameworks. I enjoy tackling complex problems and turning ideas into reality through clean, efficient code. When I'm not coding, I'm exploring new technologies and continuously learning to stay at the forefront of the tech industry."
    },
    contact: {
      title: "Let's Connect",
      description: "Ready to bring your next project to life? Let's collaborate and create something amazing together.",
      whatsapp: "Chat on WhatsApp"
    }
  },
  ar: {
    name: "نور الشرنوبي",
    nav: {
      home: "الرئيسية",
      skills: "المهارات",
      about: "نبذة عني",
      contact: "التواصل"
    },
    hero: {
      title: "نور الشرنوبي",
      subtitle: "محلل أمني",
      description: "أنا متخصص متحمس في تكنولوجيا المعلومات، ولديّ خبرة عملية في الشبكات وشغف كبير بالأمن السيبراني. أتمتع بخبرة في المراقبة والاستجابة للحوادث وإدارة الثغرات، ولديّ تدريب عملي في CCNA ودراسات مستمرة في أمن المعلومات مع رواد مصر الرقمية. أستمتع بالعمل مع بيئات مراكز العمليات الأمنية (SOC)، وتحليل التهديدات، وتطبيق تدابير أمنية فعّالة لحماية الأصول الرقمية."
    },
    skills: {
      title: "المهارات والخبرات",
      frontend: "تطوير الواجهات الأمامية",
      backend: "تطوير الواجهات الخلفية",
      tools: "الأدوات والتقنيات",
      languages: "لغات البرمجة"
    },
    about: {
      title: "نبذة عني",
      description: "أنا نور الشرنوبي، مهندس حاسوب متفاني لديه شغف لإنشاء حلول برمجية مبتكرة. تمتد خبرتي عبر تطوير التطبيقات الشاملة، مع أساس قوي في لغات البرمجة والأطر الحديثة. أستمتع بمعالجة المشكلات المعقدة وتحويل الأفكار إلى واقع من خلال كود نظيف وفعال. عندما لا أكون أبرمج، أستكشف التقنيات الجديدة وأتعلم باستمرار للبقاء في المقدمة في صناعة التكنولوجيا."
    },
    contact: {
      title: "لنتواصل",
      description: "مستعد لإحياء مشروعك القادم؟ دعنا نتعاون ونصنع شيئاً مذهلاً معاً.",
      whatsapp: "تحدث على الواتساب"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations['en'] | Translations['ar'];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};