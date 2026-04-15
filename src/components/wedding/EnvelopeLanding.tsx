import React, { useRef, useState } from 'react';

const EnvelopeLanding = ({ onOpen }: { onOpen: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleSealClick = () => {
    if (isPlaying) return;
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(true);
    video.play().catch(() => { });
  };

  const handleVideoEnd = () => {
    triggerFade();
  };

  const triggerFade = () => {
    if (isFading) return;
    setIsFading(true);
    const video = videoRef.current;
    if (video && !video.paused) video.pause();
    setTimeout(onOpen, 800);
  };

  if (isFading) {
    return (
      <div className="fixed inset-0 z-50 bg-background animate-fade-in" />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Video — cropped top 10% to remove watermark */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-[111%] top-[-11%] left-0 object-cover"
          src="/videos/envelope-opening.mp4"
          playsInline
          muted
          preload="auto"
          onEnded={handleVideoEnd}
        />
      </div>

      {/* Invisible clickable area over the seal in the video — no visible button */}
      {!isPlaying && (
        <button
          onClick={handleSealClick}
          className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full cursor-pointer"
          style={{ background: 'transparent' }}
          aria-label="Open invitation"
        />
      )}

      {/* Tap hint */}
      {!isPlaying && (
        <p className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-primary font-body text-lg tracking-widest animate-pulse">
          Tap to Open
        </p>
      )}

      {/* Skip button */}
      {isPlaying && (
        <button
          onClick={triggerFade}
          className="absolute bottom-8 right-8 z-10 px-5 py-2 rounded-full bg-black/40 backdrop-blur text-primary-foreground text-sm font-body tracking-wider hover:bg-black/60 transition-colors"
        >
          Skip →
        </button>
      )}
    </div>
  );
};

export default EnvelopeLanding;
