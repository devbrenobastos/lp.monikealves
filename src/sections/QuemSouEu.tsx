import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import SobreImg from '../assets/Sobre Monike.jpg';

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
    if (prefersReduced) {
      return (
        <h2 ref={containerRef} className="font-serif text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight mb-[20px]">
          <T>Oi, eu sou a</T> <em className="text-olive not-italic italic font-normal"><T>Monike Alves.</T></em>
        </h2>
      );
    }

    const baseText = "Oi, eu sou a ";
    const nameText = "Monike Alves.";

    let visibleBase = "";
    let invisibleBase = baseText;
    let visibleName = "";
    let invisibleName = nameText;

    if (index <= baseText.length) {
      visibleBase = baseText.slice(0, index);
      invisibleBase = baseText.slice(index);
    } else {
      visibleBase = baseText;
      invisibleBase = "";
      const nameIndex = index - baseText.length;
      visibleName = nameText.slice(0, nameIndex);
      invisibleName = nameText.slice(nameIndex);
    }

    const showCursor = index < 26;

    return (
      <h2 ref={containerRef} className="font-serif text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight mb-[20px] select-none" aria-label="Oi, eu sou a Monike Alves.">
        <span>{visibleBase}</span>
        {visibleName && <em className="text-olive not-italic italic font-normal">{visibleName}</em>}
        {showCursor && <span className="cursor-blink" aria-hidden="true">|</span>}
        <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
          {invisibleBase}
          <em className="text-olive not-italic italic font-normal">{invisibleName}</em>
        </span>
      </h2>
    );
  };

  return (
    <section id="sobre" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        {/* Left: Text & Bio in First Person */}
        <div className="reveal-item md:col-span-7">
          <Eyebrow className="mb-[12px]">QUEM TE ATENDE</Eyebrow>
          {renderHeading()}
          
          <div className="font-sans text-[16px] text-ink-2 space-y-4 max-w-[62ch] mb-[40px] leading-relaxed">
            <p>
              <T>Sou gestora de tráfego e estrategista de vendas, e escolhi um caminho só: fazer a Dra. de harmonização virar a referência da sua cidade.</T>
            </p>
            <p>
              <T>Aprendi na prática que o talento na cadeira não basta — quem aparece e sabe vender é quem lota a agenda. Hoje meu trabalho é juntar as duas coisas: te colocar na frente das pacientes certas e te dar a estrutura para transformar atenção em faturamento.</T>
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
            <img 
              src={SobreImg} 
              alt="Monike Alves - Quem te atende" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
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
