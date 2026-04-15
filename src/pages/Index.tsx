import React, { useState, useEffect, useRef } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import HeroSection from '@/components/wedding/HeroSection';
import ScratchDateSection from '@/components/wedding/ScratchDateSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import EventDetailsSection from '@/components/wedding/EventDetailsSection';
import VenueSection from '@/components/wedding/VenueSection';
import BlessingSection from '@/components/wedding/BlessingSection';
import AudioPlayer from '@/components/wedding/AudioPlayer';

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(true);
  const [dateRevealed, setDateRevealed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!envelopeOpened) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = contentRef.current?.querySelectorAll('.fade-section');
    sections?.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, [envelopeOpened, dateRevealed]);

  return (
    <LanguageProvider>
      <AudioPlayer shouldPlay={envelopeOpened} />

      <div
        ref={contentRef}
        className={`transition-opacity duration-1000 ${envelopeOpened ? 'opacity-100' : 'opacity-0'}`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <HeroSection />

        <ScratchDateSection onAllRevealed={() => setDateRevealed(true)} />

        {/* Sections below only visible after scratch reveal */}
        {dateRevealed && (
          <>
            <div className="fade-section">
              <CountdownSection />
            </div>

            <div className="fade-section">
              <EventDetailsSection />
            </div>

            <div className="fade-section">
              <VenueSection />
            </div>

            <div className="fade-section">
              <BlessingSection />
            </div>
          </>
        )}
      </div>
    </LanguageProvider>
  );
};

export default Index;
