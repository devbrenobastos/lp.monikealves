import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';

export const Hero: React.FC = () => {
  const revealRef = useReveal();

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ctaSection = document.getElementById('aplicar');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-paper border-b border-cream flex flex-col justify-between"
      style={{ minHeight: '80vh' }}
    >
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center w-full flex-grow py-8 md:py-12"
      >
        {/* Left Column: Headline and CTA - Width ~52% (md:col-span-7) */}
        <div className="reveal-item md:col-span-7 flex flex-col justify-center h-full">
          <div>
            <Eyebrow className="mb-[12px]">MARKETING E VENDAS PARA HOF</Eyebrow>
            
            {/* 1: Serifada fluida (DM Serif Display), teto 40px, acento itálico oliva inline */}
            <h1 className="font-serif text-[clamp(1.75rem,1.1rem+2vw,2.5rem)] text-ink font-normal leading-[1.15] tracking-[-0.01em] mb-[24px] select-none text-wrap-balance">
              <T>Sua agenda não está vazia por falta de tráfego. Está por falta de</T>{' '}
              <em className="text-olive not-italic italic font-normal inline-block"><T>estratégia.</T></em>
            </h1>

            {/* 2: Subhead 16px, max-width 46ch, 3 lines max */}
            <p className="font-sans text-[16px] text-ink-2 max-w-[46ch] mb-[32px] leading-relaxed">
              <T>Cuido do que faz a paciente chegar e fechar: anúncios que atraem o público certo, um time comercial que sabe vender e conteúdo que posiciona você como referência. Tudo pensado só para clínicas de harmonização.</T>
            </p>
          </div>

          {/* 3: CTA mais substancial - padding 16px 28px, border-radius 10px, 300px min-width */}
          <div className="flex flex-col items-start">
            <a 
              href="#aplicar" 
              onClick={handleApplyClick}
              className="inline-flex items-center justify-between bg-olive text-paper hover:bg-olive-d px-[28px] py-[16px] rounded-[10px] font-sans font-semibold text-[16px] transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 min-h-[44px] w-full max-w-[340px] group"
            >
              <span><T>Aplique-se</T></span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="font-sans text-[13px] text-ink-3 mt-[12px] block">
              <T>Vagas limitadas — atendo poucas clínicas por vez.</T>
            </span>
          </div>

          {/* 4: Prova social com avatares (estilo WonderClub) */}
          <div className="mt-[24px] flex items-center gap-3">
            {/* Cluster of 4 overlapping avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
              <div className="inline-block h-[28px] w-[28px] rounded-full ring-2 ring-paper bg-panel flex items-center justify-center font-mono text-[8px] text-ink-3">Dr</div>
            </div>
            <span className="font-sans text-[14px] text-ink-2">
              <span className="font-serif italic text-olive font-normal mr-1"><T>+200</T></span> {/* CONFIRMAR */}
              <T>Dras. já aplicaram a estratégia</T>
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Portrait - Width ~48% (md:col-span-5) */}
        {/* 5: Photo preenchendo toda a altura no desktop, 3:4 aspect, clean panel rectangle placeholder */}
        <div className="reveal-item md:col-span-5 relative self-stretch h-full min-h-[350px] md:min-h-[500px] flex items-stretch md:justify-end overflow-hidden">
          {/* Portrait Placeholder with editorial look and full bleed height */}
          {/* Photo editorial vertical da Monike, luz natural, proporção 3:4 */}
          <div className="relative w-full md:w-[95%] aspect-[3/4] md:aspect-auto bg-panel rounded-[16px] md:rounded-[20px] overflow-hidden border border-cream h-full flex items-center justify-center">
            {/* Editorial Background Graphics */}
            <div className="absolute inset-0 bg-gradient-to-t from-panel/30 via-transparent to-transparent opacity-80 z-0"></div>
            
            {/* Monogram circular badge (Selo circular girando na emenda) */}
            <div className="absolute -left-12 bottom-12 z-20 w-[100px] h-[100px] rounded-full bg-paper border border-cream shadow-md hidden lg:flex items-center justify-center animate-[spin_20s_linear_infinite] motion-reduce:animate-none">
              <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                <path id="textPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="font-mono text-[7px] fill-olive-d uppercase font-semibold letter-spacing-1">
                  <textPath href="#textPath" startOffset="0%">
                    MARKETING E VENDAS PARA HOF • MA • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-serif text-[14px] text-ink font-light italic">
                MA
              </div>
            </div>
            
            <div className="text-center p-6 z-10 select-none">
              <span className="font-serif text-[18px] text-ink italic block mb-2"><T>Monike Alves</T></span>
              <span className="font-mono text-[9px] text-ink-3 uppercase tracking-widest"><T>Retrato Editorial (3:4)</T></span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee with padding-block: 16px and border-top/bottom */}
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

      {/* Social Proof Stats Bar */}
      <div className="bg-paper border-b border-cream py-[32px] mt-0">
        <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left pt-2">
          <div className="flex flex-col sm:border-r sm:border-cream sm:pr-6">
            <span className="font-mono text-mono-data text-amber font-medium">
              <T>R$ 5 MILHÕES</T>
            </span>
            <span className="font-sans text-body-s text-ink-2"><T>em vendas geradas</T></span>
          </div>
          <div className="flex flex-col sm:border-r sm:border-cream sm:pr-6 sm:pl-6">
            <span className="font-mono text-mono-data text-ink font-medium">
              <T>10,4 MIL</T>
            </span>
            <span className="font-sans text-body-s text-ink-2"><T>acompanham no Instagram</T></span>
          </div>
          <div className="flex flex-col sm:pl-6">
            <span className="font-mono text-mono-data text-ink font-medium">
              +200</span> {/* CONFIRMAR */}
            <span className="font-sans text-body-s text-ink-2"><T>Dras. atendidas</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
