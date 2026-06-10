import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const QuemSouEu: React.FC = () => {
  const revealRef = useReveal();

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ctaSection = document.getElementById('aplicar');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        {/* Left: Text & Bio in First Person */}
        <div className="reveal-item md:col-span-7">
          <Eyebrow className="mb-[12px]">QUEM TE ATENDE</Eyebrow>
          {/* A3: Moment full-serif in DM Serif Display italic leve, size contido ~32px (font-serif text-display-m) */}
          <h2 className="font-serif text-display-m text-ink font-light italic leading-[1.25] tracking-[0.01em] mb-[20px]">
            <T>Oi, eu sou a</T> <span className="text-olive not-italic italic font-light"><T>Monike.</T></span>
          </h2>
          
          <div className="font-sans text-body text-ink-2 space-y-4 max-w-[62ch] mb-[40px] leading-relaxed">
            <p>
              <T>Sou gestora de tráfego e estrategista de vendas, e escolhi um caminho só: fazer a Dra. de harmonização virar a referência da sua cidade.</T>
            </p>
            <p>
              <T>Aprendi na prática que o talento na cadeira não basta — quem aparece e sabe vender é quem lota a agenda. Hoje meu trabalho é juntar as duas coisas: te colocar na frente das pacientes certas e te dar a estrutura para transformar atenção em faturamento.</T>
            </p>
            <p className="italic text-ink-3">
              {/* Espaço para frases pessoais reais da Monike */}
            </p>
          </div>

          <div>
            <a 
              href="#aplicar" 
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center border border-olive text-olive hover:bg-olive hover:text-paper px-6 py-3 rounded-full font-sans font-semibold text-body-s transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 min-h-[44px]"
            >
              <T>Aplique-se</T>
            </a>
          </div>
        </div>

        {/* Right: Picture/Portrait (Split editorial) */}
        <div className="reveal-item md:col-span-5 relative flex justify-center">
          <div className="w-full max-w-[340px] aspect-[4/5] bg-panel rounded-[20px] border border-cream overflow-hidden flex flex-col items-center justify-center p-8 text-center group transition-all duration-300 hover:border-olive/35">
            <span className="font-mono text-mono-eyebrow text-ink-3 mb-2 uppercase"><T>FOTO DE PERFIL</T></span>
            <span className="font-serif text-body italic text-ink-2">Foto da <span className="nowrap">Monike</span> Alves</span>
            <span className="text-[10px] font-mono text-ink-3 mt-4 opacity-65"><T>Recomendado: AVIF/WebP, Foco médio, Luz suave</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
