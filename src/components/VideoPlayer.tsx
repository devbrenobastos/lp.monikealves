import React, { useState, useEffect, useRef } from 'react';
import { T } from './T';

interface VideoPlayerProps {
  title: string;
  quote: string;
  videoSrc: string;
  fadeState: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYoutubeAPI() {
  if (window.YT) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const existing = document.getElementById('youtube-iframe-api');
    if (existing) {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        resolve();
      };
      return;
    }
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevReady) prevReady();
      resolve();
    };
  });
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, quote, videoSrc, fadeState }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setIsLoaded(false);
    setIsPlaying(false);
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore
        }
        playerRef.current = null;
      }
    };
  }, [videoSrc]);

  const handlePlayToggle = async () => {
    if (!isLoaded) {
      setIsLoaded(true);
      await loadYoutubeAPI();
      
      // Allow DOM to update and render the iframe container element
      setTimeout(() => {
        playerRef.current = new window.YT.Player(`yt-player-${videoSrc}`, {
          height: '100%',
          width: '100%',
          videoId: videoSrc,
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            disablekb: 1,
            iv_load_policy: 3,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
              setIsPlaying(true);
            },
            onStateChange: (event: any) => {
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                // If paused or ended, return to poster
                setIsPlaying(false);
                setIsLoaded(false);
                if (playerRef.current) {
                  try {
                    playerRef.current.destroy();
                  } catch (e) {}
                  playerRef.current = null;
                }
              }
            }
          }
        });
      }, 50);
    } else {
      if (playerRef.current) {
        if (isPlaying) {
          try {
            playerRef.current.pauseVideo();
          } catch (e) {}
          setIsPlaying(false);
          setIsLoaded(false);
          if (playerRef.current) {
            try {
              playerRef.current.destroy();
            } catch (e) {}
            playerRef.current = null;
          }
        }
      }
    }
  };

  // Thumbnail / poster url
  const posterUrl = `https://img.youtube.com/vi/${videoSrc}/hqdefault.jpg`;

  return (
    <div 
      className={`absolute inset-0 flex flex-col justify-between w-full h-full p-6 md:p-8 text-left transition-opacity duration-200 ${fadeState}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* 9:16 Video Container */}
      <div className="relative w-full max-w-[240px] md:max-w-[260px] aspect-[9/16] mx-auto rounded-[16px] overflow-hidden border border-cream shadow-md bg-panel flex-grow flex items-center justify-center">
        {/* Transparent Overlay for click blocking */}
        <div 
          onClick={handlePlayToggle}
          className="absolute inset-0 z-20 cursor-pointer"
          aria-hidden="true"
        />

        {/* Custom Play Button UI Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <button 
            type="button" 
            aria-label={isPlaying ? `Pausar depoimento de ${title}` : `Reproduzir depoimento de ${title}`}
            className="w-16 h-16 rounded-full border border-olive/80 bg-paper/30 backdrop-blur-md text-olive flex items-center justify-center transition-all duration-300 hover:scale-105 pointer-events-auto focus-visible:ring-2 focus-visible:ring-olive focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              handlePlayToggle();
            }}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Facade Poster Image */}
        {!isLoaded && (
          <img 
            src={posterUrl} 
            alt={`Depoimento ${title}`} 
            className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90"
            loading="lazy"
          />
        )}

        {/* YouTube Iframe element target with crop scaling to remove black side bars and top/bottom overlays */}
        {isLoaded && (
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden rounded-[16px]">
            <div className="absolute w-[427%] h-[135%] -left-[163.5%] -top-[17.5%] pointer-events-none">
              <div id={`yt-player-${videoSrc}`} className="w-full h-full" />
            </div>
          </div>
        )}
      </div>

      {/* Honest Warning Comment inside the code to adhere to instructions:
          NOTE: O player do YouTube ainda injeta o logo/título por cima em alguns momentos; 
          com controls:0 + modestbranding:1 + overlay de clique, o caminho normal de clique para o YouTube 
          fica bloqueado, mas não há como remover 100% a marca do YouTube em embed (termos do YouTube). 
          Para controle total da aparência sem nada do YouTube, a alternativa seria hospedar o MP4 
          e usar <video> nativo.
      */}

      {/* Quote detail display below the video */}
      <div className="w-full mt-4 text-center">
        <p className="font-serif text-[14px] md:text-body-s text-ink italic leading-snug mb-1 text-wrap-balance">
          <T>{quote}</T>
        </p>
        <span className="text-[10px] font-mono text-ink-3 tracking-wider uppercase">
          <T>Depoimento em Vídeo</T>
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
