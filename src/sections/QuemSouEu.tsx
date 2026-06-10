import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import Sobre360Webp from '../assets/Sobre Monike-360.webp';
import Sobre360Avif from '../assets/Sobre Monike-360.avif';
import Sobre480Webp from '../assets/Sobre Monike-480.webp';
import Sobre480Avif from '../assets/Sobre Monike-480.avif';
import Sobre768Webp from '../assets/Sobre Monike-768.webp';
import Sobre768Avif from '../assets/Sobre Monike-768.avif';
import Sobre1100Webp from '../assets/Sobre Monike-1100.webp';
import Sobre1100Avif from '../assets/Sobre Monike-1100.avif';
import SobreImgFallback from '../assets/Sobre Monike-480.webp';

export const QuemSouEu: React.FC = () => {
  const revealRef = useReveal();
  const containerRef = React.useRef<HTMLHeadingElement>(null);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced || !isVisible) return;
    if (index < 26) {
      const timer = setTimeout(() => {
        setIndex((prev: number) => prev + 1);
      }, 45);
      return () => clearTimeout(timer);
    }
  }, [index, isVisible, prefersReduced]);

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ctaSection = document.getElementById('aplicar');
    if (ctaSection) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      ctaSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const renderHeading = () => {
    const baseText = "Oi, eu sou a";
    const nameText = "Monike Alves.";
    const isTypingFinished = index >= baseText.length + nameText.length;

    return (
      <h2 ref={containerRef} className="font-serif text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight mb-[20px] min-h-[48px] select-none text-wrap-balance">
        <span><T>{baseText}</T></span>{" "}
        {isVisible && (
          <span className="text-olive not-italic italic font-normal">
            <T>{nameText.slice(0, Math.max(0, index - baseText.length))}</T>
          </span>
        )}
        {!isTypingFinished && (
          <span className="inline-block w-[2px] h-[0.8em] bg-olive ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
        )}
      </h2>
    );
  };

  return (
    <section id="quem-sou-eu" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 flex flex-col md:grid md:grid-cols-12 gap-12 items-start"
      >
        {/* Left: Bio Info */}
        <div className="reveal-item md:col-span-7 flex flex-col justify-center h-full text-left items-start">
          <div className="flex flex-col items-start">
            <Eyebrow className="mb-[12px]">QUEM TE ATENDE</Eyebrow>
            {renderHeading()}
            
            <p className="font-sans text-[16px] text-ink-2 mb-[16px] leading-relaxed max-w-[54ch]">
              <T>Publicitária por formação com mais de 7 anos de experiência em marketing digital focado em negócios locais e serviços de saúde.</T>
            </p>
            <p className="font-sans text-[16px] text-ink-2 mb-[24px] leading-relaxed max-w-[54ch]">
              <T>Desenvolvi o método de aceleração Monike Alves depois de perceber que o tráfego pago tradicional falha para médicos e dentistas porque ignora o funil de vendas. Anúncios só funcionam se houver conversão no comercial e clareza no posicionamento. É esse ecossistema completo que eu implemento na sua clínica.</T>
            </p>
          </div>

          <div>
            <a 
              href="#aplicar" 
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center border border-olive text-olive hover:bg-olive hover:text-paper px-6 py-3 rounded-full font-sans font-semibold text-body-s transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 min-h-[44px] w-full md:w-auto text-center"
            >
              <T>Aplique-se</T>
            </a>
          </div>
        </div>

        {/* Right: Picture/Portrait (Split editorial) */}
        <div className="reveal-item md:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] bg-panel rounded-[20px] border border-cream overflow-hidden group transition-all duration-300 hover:border-olive/35">
            <picture className="absolute inset-0 w-full h-full">
              <source 
                type="image/avif" 
                srcSet={`${Sobre360Avif} 360w, ${Sobre480Avif} 480w, ${Sobre768Avif} 768w, ${Sobre1100Avif} 1100w`}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <source 
                type="image/webp" 
                srcSet={`${Sobre360Webp} 360w, ${Sobre480Webp} 480w, ${Sobre768Webp} 768w, ${Sobre1100Webp} 1100w`}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <img 
                src={SobreImgFallback} 
                alt="Monike Alves - Quem te atende" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                width="340"
                height="425"
                loading="lazy"
                decoding="async"
              />
            </picture>
            
            {/* Instagram Glassmorphism Badge */}
            <a 
              href="https://www.instagram.com/monikeaalvestrafego/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 px-5 py-2.5 rounded-full border shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] select-none whitespace-nowrap hover:shadow-md hover:bg-paper/80"
              style={{ 
                background: 'rgba(244, 241, 238, 0.65)', 
                backdropFilter: 'blur(12px)', 
                WebkitBackdropFilter: 'blur(12px)', 
                borderColor: 'rgba(221, 216, 212, 0.6)' 
              }}
            >
              {/* Instagram icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] text-olive">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-sans text-[12px] md:text-[13px] text-ink-2 font-medium tracking-wide">
                @monikeaalvestrafego
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
