import React from 'react';
import { T } from './T';

interface VideoPlayerProps {
  title: string;
  quote: string;
  videoSrc: string;
  fadeState: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, quote, videoSrc, fadeState }) => {
  return (
    <div className={`absolute inset-0 flex flex-col justify-between w-full h-full p-8 text-left transition-opacity duration-200 ${fadeState}`}>
      <div className="absolute inset-0 bg-ink-2/10 flex items-center justify-center z-10">
        <button 
          type="button" 
          aria-label={`Tocar depoimento do ${title}`} 
          className="w-16 h-16 rounded-full border border-olive/80 bg-paper/20 backdrop-blur-sm text-olive flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-olive hover:text-paper shadow-lg"
        >
          <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      
      <div className="w-full h-full bg-panel flex flex-col items-start justify-center p-8 text-left mt-auto">
        <span className="font-mono text-mono-eyebrow text-ink-3 mb-2 uppercase"><T>Depoimento em Vídeo (9:16)</T></span>
        <span className="font-serif text-[16px] md:text-body text-ink italic mb-2 text-wrap-balance"><T>{quote}</T></span>
        <span className="text-[10px] font-mono text-ink-3"><T>{`Thumbnail otimizada • ${videoSrc}`}</T></span>
      </div>
    </div>
  );
};

export default VideoPlayer;
