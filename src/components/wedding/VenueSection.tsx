import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';
import hotelImg from '@/assets/images/hotel.png';

const VenueSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center bg-transparent py-12 px-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-white/40" />
        <span className="text-white">✦</span>
        <div className="h-px w-12 bg-white/40" />
      </div>

      <h2 className={`font-display text-3xl sm:text-4xl text-white mb-4 text-center drop-shadow-sm ${lang === 'ne' ? 'font-nepali' : ''}`}>
        {t('Venue', 'स्थान')}
      </h2>

      <div className="flex items-center gap-2 text-white mb-8 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
        <MapPin size={24} className="text-white drop-shadow-md" />
        <div className="flex flex-col items-center">
          <span className={`font-body text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md ${lang === 'ne' ? 'font-nepali' : ''}`}>
            {t('Hotel Barahi, Pokhara', 'होटल बाराही, पोखरा')}
          </span>
          <span className={`font-body text-sm text-white/70 mt-1 uppercase tracking-wider ${lang === 'ne' ? 'font-nepali tracking-normal' : ''}`}>
            {t('Lakeside, Ward No. 6, Pokhara', 'लेकसाइड, वडा नं. ६, पोखरा')}
          </span>
        </div>
      </div>

      {/* Main Venue Image */}
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-white/20 mb-8 relative">
        <img
          src={hotelImg}
          alt="Hotel Barahi, Pokhara"
          className="w-full aspect-[16/9] object-cover"
        />
      </div>


      {/* Map */}
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 mb-8 relative z-10 bg-white/5 backdrop-blur-sm p-1.5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.688846399434!2d83.95777717462445!3d28.216723202901308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951d3886cdab%3A0xe549cd88aeb78297!2sHotel%20Barahi%20Pokhara!5e0!3m2!1sen!2snp!4v1700000000000"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '0.75rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel Barahi Pokhara"
        />
      </div>

      <a
        href="https://maps.google.com/?q=Hotel+Barahi+Pokhara"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#565C30] font-body text-sm tracking-wider hover:bg-white/90 transition-colors shadow-lg"
      >
        <Navigation size={16} />
        {t('Get Directions', 'दिशा प्राप्त गर्नुहोस्')}
      </a>
    </section>
  );
};

export default VenueSection;
