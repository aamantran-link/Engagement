import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import detailsImg from '@/assets/images/details.png';
import dressImg from '@/assets/images/dress.png';

const EventDetailsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative flex flex-col items-center bg-transparent py-12 px-4 sm:px-6">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-white/40" />
        <span className="text-white">✦</span>
        <div className="h-px w-12 bg-white/40" />
      </div>

      <h2 className={`font-display text-4xl sm:text-5xl text-white mb-2 text-center drop-shadow-sm ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('Event Details', 'कार्यक्रम विवरण')}
      </h2>

      <p className={`font-body text-xl sm:text-2xl text-white/90 mb-10 text-center tracking-wide ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('2:00 PM – 6:00 PM', 'दिउँसो २:०० – बेलुका ६:००')}
      </p>

      {/* Details Image */}
      <div className="w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl border border-white/20">
        <img
          src={detailsImg}
          alt="Event Details"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Dress Code Section */}
      <h3 className={`font-display text-3xl sm:text-4xl text-white mb-4 text-center drop-shadow-sm ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('Event Dress Code', 'कार्यक्रमको पहिरन')}
      </h3>
      <p className={`font-body text-xl sm:text-2xl text-white/90 mb-4 text-center tracking-wide ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('We invite you to dress elegant and formally to celebrate this special day with us.', 'हामी तपाईंलाई यस विशेष दिनलाई हामीसँग मनाउनका लागि आकर्षक र औपचारिक पोशाकमा उपस्थित हुन हार्दिक निमन्त्रणा गर्दछौं।')}
      </p>
      <p className={`font-body text-lg sm:text-xl text-white/70 mb-10 text-center uppercase tracking-[0.2em] ${lang === 'ne' ? 'font-nepali tracking-normal' : ''}`}>
        {t('Formal Attire', 'औपचारिक पोशाक')}
      </p>

      {/* Dress Code Image */}
      <div className="w-full max-w-md mx-auto py-8">
        <img
          src={dressImg}
          alt="Traditional Attire"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default EventDetailsSection;
