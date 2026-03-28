import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import designImg from '@/assets/images/design.png';

const BlessingSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center bg-transparent py-12 px-6">
      {/* Mandala divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-20 bg-white/40" />
        <svg viewBox="0 0 60 60" className="w-12 h-12 text-white/40">
          {Array.from({ length: 6 }).map((_, i) => (
            <ellipse
              key={i}
              cx="30"
              cy="30"
              rx="25"
              ry="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              transform={`rotate(${i * 30} 30 30)`}
            />
          ))}
        </svg>
        <div className="h-px w-20 bg-wedding-gold/40" />
      </div>

      <div className="max-w-2xl text-center">
        <p className={`font-body text-2xl sm:text-3xl text-white leading-relaxed mb-10 tracking-wide ${lang === 'ne' ? 'font-nepali' : ''}`}
          style={{
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            letterSpacing: lang === 'ne' ? 'normal' : '0.01em'
          }}>
          {t(
            'Thank you for joining us on our special day. Your presence is the greatest gift we could ask for.',
            'हाम्रो विशेष दिनमा सामेल हुनुभएकोमा धन्यवाद। तपाईंको उपस्थिति नै हाम्रो लागि सबैभन्दा ठूलो उपहार हो।'
          )}
        </p>

        {/* Decorative Design Image */}
        <div className="w-full max-w-[16rem] mx-auto mb-12 mt-2">
          <img
            src={designImg}
            alt="Decorative Element"
            className="w-full h-auto object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        <p className="font-accent text-xl sm:text-2xl text-white/90 tracking-wider" style={{ letterSpacing: '0.1em' }}>
          — Sugal & Anshu
        </p>
      </div>
    </section>
  );
};

export default BlessingSection;
