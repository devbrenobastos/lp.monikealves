import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import { Check, X } from 'lucide-react';

export const ParaQuemE: React.FC = () => {
  const revealRef = useReveal();

  const forYouList = [
    "Você já atende bem, mas a agenda tem buracos que te incomodam.",
    "Você quer parar de competir por preço e cobrar pelo seu valor.",
    "Você está disposta a tratar a clínica como negócio, não só como consultório.",
    "Você quer aparecer como referência, não como mais uma na cidade."
  ];

  const notForYouList = [
    "Você procura resultado da noite para o dia sem mudar nada na operação.",
    "Você não quer envolver seu time no processo."
  ];

  return (
    <section className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10"
      >
        {/* Header Block */}
        <div className="reveal-item max-w-[62ch] mb-12 text-left flex flex-col items-start">
          <Eyebrow className="mb-[12px]">É PARA VOCÊ SE</Eyebrow>
          <h2 className="font-sans text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight">
            <T>Esse trabalho é para um tipo de Dra.</T> <span className="inline-block"><em className="font-serif text-olive not-italic italic font-normal ml-1.5"><T>específica.</T></em></span>
          </h2>
        </div>

        {/* 2 Stylized Panels: stack on mobile with 20px gap, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {/* Panel 1: É para você se */}
          <div className="reveal-item bg-olive/[0.07] border border-cream rounded-[16px] p-6 md:p-[36px] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(28,26,22,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="border-b border-cream pb-4 mb-6">
                <Eyebrow className="mb-0 bg-transparent border-none p-0">É para você se</Eyebrow>
              </div>
              <ul className="space-y-6">
                {forYouList.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-4 pb-6 ${idx !== forYouList.length - 1 ? 'border-b border-cream/50' : ''}`}>
                    <div className="w-[20px] h-[20px] rounded-full border border-olive flex items-center justify-center text-olive flex-shrink-0 mt-0.5" aria-hidden="true">
                      <Check className="w-[12px] h-[12px] stroke-[2.5]" />
                    </div>
                    <p className="font-sans text-[16px] text-ink-2 leading-relaxed">
                      <T>{item}</T>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel 2: Não é para você se */}
          <div className="reveal-item bg-panel border border-cream rounded-[16px] p-6 md:p-[36px] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(28,26,22,0.06)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="border-b border-cream pb-4 mb-6">
                <Eyebrow className="mb-0 bg-transparent border-none p-0">Não é para você se</Eyebrow>
              </div>
              <ul className="space-y-6">
                {notForYouList.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-4 pb-6 ${idx !== notForYouList.length - 1 ? 'border-b border-cream/50' : ''}`}>
                    <div className="w-[20px] h-[20px] rounded-full border border-terra flex items-center justify-center text-terra flex-shrink-0 mt-0.5" aria-hidden="true">
                      <X className="w-[12px] h-[12px] stroke-[2.5]" />
                    </div>
                    <p className="font-sans text-[16px] text-ink-2 leading-relaxed">
                      <T>{item}</T>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
