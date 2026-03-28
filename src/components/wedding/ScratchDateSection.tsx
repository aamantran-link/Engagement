import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Hand } from 'lucide-react';

interface ScratchCircleProps {
  text: string;
  size: number;
  onRevealed: () => void;
}

const ScratchCircle = ({ text, size, onRevealed }: ScratchCircleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Radial white/pearl gradient for an elegant look
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, '#FFFFFF');
    grad.addColorStop(0.3, '#F8F9FA');
    grad.addColorStop(0.6, '#E9ECEF');
    grad.addColorStop(0.8, '#F8F9FA');
    grad.addColorStop(1, '#DEE2E6');

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Brushed-metal radial lines
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(size / 2, size / 2);
      ctx.lineTo(size / 2 + Math.cos(angle) * size / 2, size / 2 + Math.sin(angle) * size / 2);
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Subtle border highlight
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [size]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x * dpr, y * dpr, size * 0.14 * dpr, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percent = transparent / (imageData.data.length / 4);

    if (percent > 0.5) {
      setRevealed(true);
      onRevealed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [size, revealed, onRevealed]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDrawing.current = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleEnd = () => {
    isDrawing.current = false;
  };

  const displaySize = typeof window !== 'undefined' && window.innerWidth < 640 ? 100 : 180;

  return (
    <div className="relative flex items-center justify-center" style={{ width: displaySize, height: displaySize }}>
      {/* Revealed text underneath */}
      <div className={`absolute inset-0 rounded-full flex items-center justify-center bg-white shadow-inner transition-all duration-500 ${revealed ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}
        style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06), 0 0 0 4px rgba(255,255,255,0.2)' }}
      >
        <span className="font-display text-4xl sm:text-6xl text-[#2F381D] font-bold">{text}</span>
      </div>

      {/* Canvas overlay */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 rounded-full scratch-circle"
          style={{ width: displaySize, height: displaySize }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      )}
    </div>
  );
};

// Falling leaves component (now white flowers)
const FallingLeaves = () => {
  const leaves = Array.from({ length: 30 }).map((_, i) => {
    // Various shades of white/off-white for flowers/petals
    const colors = [
      'rgba(255, 255, 255, 0.95)',
      'rgba(248, 249, 250, 0.85)',
      'rgba(241, 243, 245, 0.9)',
      'rgba(233, 236, 239, 0.8)',
    ];
    return {
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 4,
      size: Math.random() * 10 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {leaves.map(l => (
        <div
          key={l.id}
          className="petal"
          style={{
            left: l.left + '%',
            animationDuration: l.duration + 's',
            animationDelay: l.delay + 's',
            width: l.size,
            height: l.size * 1.2,
            backgroundColor: l.color,
            borderRadius: '50% 0 50% 50%', // Flower petal shape
            transform: `rotate(${Math.random() * 360}deg)`,
            boxShadow: '0 0 6px rgba(255,255,255,0.4)',
          }}
        />
      ))}
    </div>
  );
};

interface ScratchDateSectionProps {
  onAllRevealed?: () => void;
}

const ScratchDateSection = ({ onAllRevealed }: ScratchDateSectionProps) => {
  const { t, lang } = useLanguage();
  const [revealedCount, setRevealedCount] = useState(0);
  const [showLeaves, setShowLeaves] = useState(false);
  const allRevealed = revealedCount >= 3;

  const handleReveal = useCallback(() => {
    setRevealedCount(prev => {
      const next = prev + 1;
      if (next >= 3 && !showLeaves) {
        setShowLeaves(true);
        onAllRevealed?.();
        setTimeout(() => setShowLeaves(false), 8000);
      }
      return next;
    });
  }, [showLeaves, onAllRevealed]);

  const circleSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 100 : 180;

  return (
    <>
      {showLeaves && <FallingLeaves />}
      <section className="relative flex flex-col items-center justify-center bg-transparent py-12 px-6">
        {/* Hand icon */}
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
          <Hand size={24} className="text-white/80" />
        </div>

        <p className={`text-white/80 text-sm font-body tracking-wide mb-8 ${lang === 'ne' ? 'font-nepali' : ''}`}>
          {t('Scratch all three circles to continue', 'तीनवटै सर्कल खुर्कनुहोस्')}
        </p>

        {/* "Reveal" heading */}
        <h2 className="font-display text-5xl sm:text-7xl text-white mb-3 italic transition-transform hover:scale-105 duration-300">
          {t('Reveal', 'खुलासा')}
        </h2>

        <p className={`text-white/90 text-sm sm:text-base tracking-[0.25em] uppercase font-body mb-12 ${lang === 'ne' ? 'font-nepali tracking-normal' : ''}`}>
          {t('Scratch to discover the date', 'मिति पत्ता लगाउन खुर्कनुहोस्')}
        </p>

        {/* Scratch circles */}
        <div className="flex gap-3 sm:gap-10 items-center justify-center">
          <ScratchCircle text="20" size={circleSize} onRevealed={handleReveal} />
          <ScratchCircle text="Apr" size={circleSize} onRevealed={handleReveal} />
          <ScratchCircle text="2026" size={circleSize} onRevealed={handleReveal} />
        </div>

        {/* Message after reveal */}
        <div className={`mt-12 flex flex-col items-center transition-all duration-700 ${allRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <p className={`font-body text-xl sm:text-2xl text-white/90 mb-3 tracking-wide ${lang === 'ne' ? 'font-nepali' : ''}`}>
            {t('Baisakh 7, 2083 BS', 'बैशाख ७, २०८३')}
          </p>
          <p className={`font-display text-3xl sm:text-4xl text-white italic text-center drop-shadow-sm ${lang === 'ne' ? 'font-nepali' : ''}`}>
            {t("The big day is finally here.", 'ठूलो दिन अन्ततः आइपुगेको छ।')}
          </p>
        </div>
      </section>
    </>
  );
};

export default ScratchDateSection;
