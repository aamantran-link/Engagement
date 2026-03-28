import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const HeroSection = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 flex flex-col items-center justify-center bg-transparent overflow-hidden">
      {/* Language toggle */}
      <button
        onClick={toggleLang}
        className="fixed top-4 right-4 z-40 flex items-center gap-1.5 px-3 py-2 rounded-full bg-wedding-maroon/80 backdrop-blur text-wedding-gold text-sm font-body hover:bg-wedding-maroon transition-colors"
        aria-label="Toggle language"
      >
        <Globe size={16} />
        <span>{lang === 'en' ? 'नेपाली' : 'English'}</span>
      </button>

      {/* No background patterns as requested */}

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-[1.5s] ease-out ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
      >

        <p className={`text-wedding-gold/80 text-sm tracking-[0.2em] uppercase mb-6 font-body max-w-lg mx-auto leading-relaxed ${lang === 'ne' ? 'font-nepali tracking-normal' : ''}`}>
          {t('You are heartily invited to join us in celebrating the engagement of Sugal & Anshu.', 'हामी सुगल र अंशुको इन्गेजमेन्ट समारोहमा तपाईंलाई हार्दिक निमन्त्रणा गर्दछौं।')}
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary-foreground mb-2 leading-tight">
          Sugal
        </h1>
        <span className="font-display text-3xl sm:text-5xl text-wedding-gold italic">&</span>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary-foreground mt-2 leading-tight">
          Anshu
        </h1>

        <div className="mt-10 max-w-md mx-auto">
          <p className={`text-primary-foreground/80 text-lg sm:text-xl font-body leading-relaxed ${lang === 'ne' ? 'font-nepali text-base' : ''}`}>
            {t(
              'We would like to invite you to celebrate with us the most special day of our lives. It would be an honor to have you present at this important moment.',
              'हामी तपाईंलाई हाम्रो जीवनको सबैभन्दा विशेष दिन हामीसँग मनाउन निमन्त्रणा गर्न चाहन्छौं। यो महत्त्वपूर्ण क्षणमा तपाईंको उपस्थिति हाम्रो लागि सम्मानको कुरा हुनेछ।'
            )}
          </p>
        </div>



        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-wedding-gold/40 mx-auto flex justify-center pt-2">
            <div className="w-1 h-2 bg-wedding-gold/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
