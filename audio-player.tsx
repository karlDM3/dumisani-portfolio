import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  isEnabled: boolean;
}

export default function AudioPlayer({ isEnabled }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Listen for user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      
      // Remove event listeners once user has interacted
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
    
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);
    
    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Initialize audio on component mount
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.src = "/audio/background-music.mp3"; 
      audio.loop = true;
      audio.volume = 0.2;
      audio.preload = "auto";
      
      // Handle audio loading
      audio.addEventListener("canplaythrough", () => {
        setAudioLoaded(true);
        console.log("Audio loaded and ready to play");
      });
      
      // Handle audio loading error
      audio.addEventListener("error", (e) => {
        console.error("Audio loading error:", e);
      });
      
      audioRef.current = audio;
    }
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause when isEnabled changes or when audio is loaded
  useEffect(() => {
    if (!audioRef.current || !audioLoaded) return;

    const playAudio = async () => {
      if (isEnabled && audioRef.current && userInteracted) {
        try {
          // Add user interaction detection for browsers that require it
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Audio playback failed:", error);
            });
          }
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    playAudio();
  }, [isEnabled, audioLoaded, userInteracted]);

  // Return audio element to be part of the DOM for better browser support
  return (
    <audio
      ref={(el) => {
        if (el && !audioRef.current) {
          el.src = "/audio/background-music.mp3";
          el.loop = true;
          el.volume = 0.2;
          audioRef.current = el;
        }
      }}
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}
