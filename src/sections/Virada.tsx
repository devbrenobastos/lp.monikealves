import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import { Typewriter } from '../components/Typewriter';

export const Virada: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section className="py-[clamp(80px,9vw,130px)] bg-panel border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10 text-center flex flex-col items-center"
      >
        <Eyebrow className="reveal-item mb-[32px]">A REAL</Eyebrow>
        
        {/* A3: Virada pull-quote is full-serif italic DM Serif Display, size contido ~32px (font-serif text-display-m) */}
        <div className="reveal-item max-w-[62ch] mx-auto mb-8">
          <h2 className="font-serif text-display-m text-ink font-light italic leading-[1.25] tracking-[0.01em]">
            <T>Tráfego sem estratégia é só despesa.</T>
          </h2>
        </div>

        <div className="reveal-item max-w-[62ch] mx-auto text-left md:text-center mb-16">
          <p className="font-sans text-body-l text-ink-2 leading-relaxed">
            <T>Anúncio não é uma máquina de pacientes que você liga e esquece. Ele só funciona quando existe um posicionamento que faz você ser desejada antes do primeiro real investido, uma oferta que a paciente entende na hora, e alguém preparado para conduzir a conversa até o agendamento. Quando essas três peças não conversam, o dinheiro do anúncio escorre pelo ralo — e a culpa cai injustamente no "tráfego".</T>
          </p>
        </div>

        <div className="reveal-item max-w-[28ch] mx-auto flex flex-col items-center">
          <div className="w-12 h-[1px] bg-cream mb-8" />
          
          <div className="relative pt-6">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-[80px] text-olive opacity-25 leading-none select-none">“</span>
            
            <blockquote className="font-serif text-[26px] text-ink italic leading-[1.35] tracking-[0.01em] text-center max-w-[22ch] mx-auto">
              <Typewriter text="O problema quase nunca é o quanto você investe. É o que está montado por trás do botão 'promover'." />
            </blockquote>
          </div>

          <cite className="not-italic font-mono text-[11px] tracking-[0.18em] text-ink-3 uppercase mt-6 block">
            <T>— A VERDADE QUE NINGUÉM TE CONTA</T>
          </cite>
        </div>
      </div>
    </section>
  );
};
