import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CountdownSection = () => {
  const { t, lang } = useLanguage();
  const target = new Date('2026-04-20T00:00:00').getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const units = [
    { value: days, label: t('Days', 'दिन') },
    { value: hours, label: t('Hours', 'घण्टा') },
    { value: minutes, label: t('Minutes', 'मिनेट') },
    { value: seconds, label: t('Seconds', 'सेकेन्ड') },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-wedding-cream py-12 px-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-12 bg-wedding-gold/40" />
        <span className="text-wedding-gold">✦</span>
        <div className="h-px w-12 bg-wedding-gold/40" />
      </div>

      <h2 className={`font-display text-3xl sm:text-4xl text-white mb-2 text-center ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('Counting Down', 'उल्टी गिन्ती')}
      </h2>

      <p className={`text-center text-white/80 font-body text-lg mb-8 ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('To our special day', 'हाम्रो विशेष दिनको')}
      </p>

      <div className="flex gap-4 sm:gap-6 justify-center">
        {units.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-2 shadow-sm">
              <span className="font-display text-2xl sm:text-3xl text-white font-bold">{value}</span>
            </div>
            <span className="text-xs sm:text-sm text-white/90 font-body">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;
