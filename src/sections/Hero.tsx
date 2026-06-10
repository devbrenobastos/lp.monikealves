import React from 'react';
import { T } from '../components/T';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import HeroImg from '../assets/Hero.jpg';

export const Hero: React.FC = () => {
  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ctaSection = document.getElementById('aplicar');
    if (ctaSection) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      ctaSection.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-paper border-b border-cream flex flex-col justify-between"
      style={{ minHeight: '80vh' }}
    >
      <div 
        className="max-w-content mx-auto px-5 md:px-10 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-6 items-start w-full flex-grow py-8 md:py-12"
      >
        {/* Headline and CTA - Left-aligned on mobile and desktop */}
        <div className="order-1 md:order-1 w-full md:col-span-7 flex flex-col justify-center h-full text-left items-start">
          <div className="flex flex-col items-start">
            <div className="opacity-0 animate-fade-up flex justify-start">
              <Eyebrow className="mb-[12px]">MARKETING E VENDAS PARA HOF</Eyebrow>
            </div>
            
            <h1 className="font-serif text-[clamp(28px,6vw,40px)] text-ink font-normal leading-[1.15] tracking-[-0.01em] mb-[24px] select-none text-wrap-balance opacity-0 animate-fade-up [animation-delay:80ms]">
              <T>Sua agenda não está vazia por falta de tráfego. Está por falta de</T>{' '}
              <em className="text-olive not-italic italic font-normal inline-block"><T>estratégia.</T></em>
            </h1>

            <p className="font-sans text-[16px] text-ink-2 max-w-[46ch] mb-[32px] leading-relaxed opacity-0 animate-fade-up [animation-delay:160ms] text-wrap-balance">
              <T>Cuido do que faz a paciente chegar e fechar: anúncios que atraem o público certo, um time comercial que sabe vender e conteúdo que posiciona você como referência. Tudo pensado só para clínicas de harmonização.</T>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-start w-full opacity-0 animate-fade-up [animation-delay:240ms]">
            <a 
              href="#aplicar" 
              onClick={handleApplyClick}
              className="inline-flex items-center justify-between bg-olive text-paper hover:bg-olive-d px-[28px] py-[16px] rounded-[10px] font-sans font-semibold text-[16px] transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 min-h-[48px] w-full md:max-w-[340px] group"
            >
              <span><T>Aplique-se</T></span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="font-sans text-[13px] text-ink-3 mt-[12px] block px-1 text-left text-wrap-balance">
              <T>Vagas limitadas — atendo poucas clínicas por vez.</T>
            </span>
          </div>

          {/* Social Proof */}
          <div className="mt-[24px] flex items-center justify-start gap-3 opacity-0 animate-fade-up [animation-delay:320ms]">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
            </div>
            <span className="font-sans text-[14px] text-ink-2">
              <span className="font-serif italic text-olive font-normal mr-1"><T>+200</T></span>
              <T>Dras. já aplicaram a estratégia</T>
            </span>
          </div>
        </div>

        {/* Editorial Portrait - Second on mobile (order-2), right on desktop (md:order-2) */}
        <div className="order-2 md:order-2 w-full md:col-span-5 relative self-stretch md:h-full min-h-[300px] md:min-h-[500px] flex items-center justify-start animate-photo-reveal">
          <div className="relative w-full md:w-[95%] aspect-[4/5] md:aspect-auto bg-panel rounded-[16px] md:rounded-[20px] overflow-hidden border border-cream h-full flex items-center justify-center">
            <img 
              src={HeroImg} 
              alt="Monike Alves - Marketing e Vendas para HOF" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
          
          {/* Monogram circular badge (smaller on mobile) */}
          <div className="absolute -left-4 bottom-4 md:-left-8 md:bottom-12 z-20 w-[76px] h-[76px] md:w-[100px] md:h-[100px] opacity-0 animate-fade-up [animation-delay:480ms]">
            <div 
              className="w-full h-full rounded-full border shadow-lg flex items-center justify-center animate-spin-slow"
              style={{ 
                background: 'rgba(244, 241, 238, 0.45)', 
                backdropFilter: 'blur(8px)', 
                WebkitBackdropFilter: 'blur(8px)', 
                borderColor: 'rgba(221, 216, 212, 0.6)' 
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                <path id="textPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="font-mono text-[7px] fill-olive-d uppercase font-semibold">
                  <textPath href="#textPath" startOffset="0%" textLength="230" lengthAdjust="spacing">
                    MARKETING E VENDAS PARA HOF  •  MONIKE ALVES  •  
                  </textPath>
                </text>
                {/* Perfectly centered mathematical asterisk */}
                <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-olive">
                  <line x1="50" y1="40" x2="50" y2="60" />
                  <line x1="40" y1="50" x2="60" y2="50" />
                  <line x1="43" y1="43" x2="57" y2="57" />
                  <line x1="43" y1="57" x2="57" y2="43" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-cream py-[16px] bg-panel overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex font-mono text-mono-eyebrow text-olive-d uppercase">
          {Array(8).fill(null).map((_, idx) => {
            const baseIndex = idx * 3;
            return (
              <span key={idx} className="mx-8 flex items-center gap-2">
                <span className={(baseIndex + 0) % 2 === 0 ? "font-bold" : "font-normal"}><T>Marketing e Vendas para HOF</T></span>
                <span className="text-olive">•</span>
                <span className={(baseIndex + 1) % 2 === 0 ? "font-bold" : "font-normal"}><T>Lotando agendas</T></span>
                <span className="text-olive">•</span>
                <span className={(baseIndex + 2) % 2 === 0 ? "font-bold" : "font-normal"}><T>Posicionamento Premium</T></span>
                <span className="text-olive">•</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Social Proof Stats Bar - Centered on mobile with subtle dividers, 3 columns on desktop */}
      <div className="bg-paper border-b border-cream py-[24px] sm:py-[32px] mt-0">
        <div className="max-w-content mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-6 text-center sm:text-left divide-y divide-cream/45 sm:divide-y-0 pt-2">
          <div className="flex flex-col items-center sm:items-start sm:border-r sm:border-cream sm:pr-6 py-4 sm:py-0">
            <span className="font-mono text-mono-data text-amber font-medium">
              <T>+5MM</T>
            </span>
            <span className="font-sans text-body-s text-ink-2"><T>em vendas geradas</T></span>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:border-r sm:border-cream sm:pr-6 sm:pl-6 py-4 sm:py-0">
            <span className="font-mono text-mono-data text-ink font-medium">
              <T>10,4k</T>
            </span>
            <span className="font-sans text-body-s text-ink-2"><T>acompanham no Instagram</T></span>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:pl-6 py-4 sm:py-0">
            <span className="font-mono text-mono-data text-ink font-medium">
              +200
            </span>
            <span className="font-sans text-body-s text-ink-2"><T>Dras. atendidas</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
