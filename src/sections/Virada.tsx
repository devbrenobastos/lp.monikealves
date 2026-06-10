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
          <h2 className="font-sans text-display-m text-ink font-light leading-[1.25] tracking-[0.01em]">
            <T>Tráfego sem estratégia é só</T> <em className="font-serif text-olive not-italic italic font-normal"><T>despesa.</T></em>
          </h2>
        </div>

        <div className="reveal-item max-w-[62ch] mx-auto text-left md:text-center mb-24">
          <p className="font-sans text-body-l text-ink-2 leading-relaxed">
            <T>Anúncio não é uma máquina de pacientes que você liga e esquece. Ele só funciona quando existe um posicionamento que faz você ser desejada antes do primeiro real investido, uma oferta que a paciente entende na hora, e alguém preparado para conduzir a conversa até o agendamento. Quando essas três peças não conversam, o dinheiro do anúncio escorre pelo ralo — e a culpa cai injustamente no "tráfego".</T>
          </p>
        </div>

        <div className="reveal-item max-w-[760px] mx-auto flex flex-col items-start text-left border-l-2 border-l-olive pl-6 relative">
          <span className="absolute -top-8 -left-4 font-serif text-[80px] text-olive opacity-25 leading-none select-none">“</span>
          
          <blockquote className="font-serif text-[28px] text-ink italic leading-[1.35] tracking-[0.01em] whitespace-pre-line">
            <Typewriter text={"O problema quase nunca é o quanto você investe.\nÉ o que está montado por trás do botão 'promover'."} />
          </blockquote>

          <cite className="not-italic font-mono text-[11px] tracking-[0.18em] text-ink-3 uppercase mt-4 block">
            <T>— A VERDADE QUE NINGUÉM TE CONTA</T>
          </cite>
        </div>
      </div>
    </section>
  );
};
