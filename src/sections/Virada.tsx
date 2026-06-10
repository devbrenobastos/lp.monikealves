import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import { Typewriter } from '../components/Typewriter';

export const Virada: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section className="py-[clamp(56px,9vw,80px)] md:py-[clamp(80px,9vw,130px)] bg-panel border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 text-center flex flex-col items-center"
      >
        <Eyebrow className="reveal-item mb-[32px]">A REAL</Eyebrow>
        
        <div className="reveal-item max-w-[62ch] mx-auto mb-8 text-wrap-balance">
          <h2 className="font-sans text-[clamp(22px,5vw,32px)] text-ink font-light leading-[1.25] tracking-[0.01em]">
            <T>Tráfego sem estratégia é</T> <span className="inline-block"><T>só</T> <em className="font-serif text-olive not-italic italic font-normal ml-1.5"><T>despesa.</T></em></span>
          </h2>
        </div>

        <div className="reveal-item max-w-[62ch] mx-auto text-center mb-16 md:mb-32">
          <p className="font-sans text-[16px] md:text-body-l text-ink-2 leading-relaxed text-center mx-auto">
            <T>Anúncio não é uma máquina de pacientes que você liga e esquece. Ele só funciona quando existe um posicionamento que faz você ser desejada antes do primeiro real investido, uma oferta que a paciente entende na hora, e alguém preparado para conduzir a conversa até o agendamento. Quando essas três peças não conversam, o dinheiro do anúncio escorre pelo ralo — e a culpa cai injustamente no "tráfego".</T>
          </p>
        </div>

        <div className="reveal-item max-w-[760px] mx-auto flex flex-col items-center text-center relative mt-28 md:mt-32">
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-serif text-[60px] md:text-[80px] text-olive opacity-25 leading-none select-none">“</span>
          
          <blockquote className="font-serif text-[20px] md:text-[28px] text-ink italic leading-[1.35] tracking-[0.01em] whitespace-pre-line text-center min-h-[72px] md:min-h-[96px] flex items-center justify-center">
            <Typewriter text={"O problema quase nunca é o quanto você investe.\nÉ o que está montado por trás do botão 'promover'."} />
          </blockquote>

          <cite className="not-italic font-mono text-[10px] md:text-[11px] tracking-[0.18em] text-ink-3 uppercase mt-4 block">
            <T>— A VERDADE QUE NINGUÉM TE CONTA</T>
          </cite>
        </div>
      </div>
    </section>
  );
};
