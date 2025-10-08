"use client";
import { useEffect, useRef, useState } from "react";

type PlayableVideoProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  requireClick?: boolean;
  showControls?: boolean;
};

export default function PlayableVideo({ src, className, autoPlay = true, loop = true, muted = true, requireClick = false, showControls = false }: PlayableVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hadError, setHadError] = useState(false);
  const [userInitiated, setUserInitiated] = useState(false);

  useEffect(() => {
    const vid = ref.current;
    if (!vid) return;
    const tryAuto = async () => {
      try {
        if (autoPlay && !requireClick) {
          await vid.play();
          setIsPlaying(true);
        }
      } catch {
        setIsPlaying(false);
      }
    };
    tryAuto();
  }, [src, autoPlay, requireClick]);

  const onToggle = async () => {
    const vid = ref.current;
    if (!vid) return;
    setUserInitiated(true);
    try {
      if (vid.paused) {
        await vid.play();
        setIsPlaying(true);
      } else {
        vid.pause();
        setIsPlaying(false);
      }
    } catch {}
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        className={className}
        playsInline
        muted={muted}
        loop={loop}
        preload="metadata"
        controls={showControls}
        onError={() => setHadError(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      {hadError && (
        <div className="absolute inset-0 grid place-items-center bg-black/50 text-center text-sm">
          <div className="space-y-2">
            <p>Video failed to load. Tap to try again or download.</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => { setHadError(false); ref.current?.load(); }} className="rounded border border-white/70 px-3 py-1">Retry</button>
              <a href={src} download className="rounded border border-white/70 px-3 py-1">Download</a>
            </div>
          </div>
        </div>
      )}
      {(((requireClick && !userInitiated) || (!requireClick && !isPlaying))) && !hadError && (
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={onToggle}
          className="absolute inset-0 grid place-items-center bg-black/40 text-white hover:bg-black/50 transition"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/40">
            {/* Play/Pause icon */}
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </button>
      )}
    </div>
  );
}


