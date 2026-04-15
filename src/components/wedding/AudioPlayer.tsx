import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import audioFile from '@/assets/audio/romantic.mp3';

interface AudioPlayerProps {
    shouldPlay: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsMuted(true);
            });
        }
    }, [shouldPlay]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const toggleMute = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play().catch(console.error);
                setIsMuted(false);
            } else {
                setIsMuted(!isMuted);
            }
        }
    };

    if (!shouldPlay) return null;

    return (
        <>
            <audio
                ref={audioRef}
                src={audioFile}
                loop
                preload="auto"
            />
            <button
                onClick={toggleMute}
                className="fixed bottom-6 right-6 z-50 p-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all hover:bg-primary/30 text-primary cursor-pointer"
                aria-label="Toggle background music"
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </>
    );
};

export default AudioPlayer;
