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
    <section className="py-20 md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10"
      >
        {/* Header Block */}
        <div className="reveal-item max-w-[62ch] mb-12">
          <Eyebrow className="mb-6">É PARA VOCÊ SE</Eyebrow>
          <h2 className="font-sans text-display-l text-ink font-light leading-tight">
            <T>Esse trabalho é para um tipo de Dra.</T> <em className="font-serif text-olive not-italic italic font-normal"><T>específica</T></em>
          </h2>
        </div>

        {/* 2 Stylized Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: É para você se */}
          <div className="reveal-item bg-olive/[0.06] border border-cream rounded-[16px] p-8 hover:-translate-y-0.5 hover:border-olive/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-mono-eyebrow text-olive-d uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive"></span>
                <T>É para você se:</T>
              </h3>
              <ul className="space-y-6">
                {forYouList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-olive text-paper flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <p className="font-sans text-body text-ink-2 leading-relaxed">
                      <T>{item}</T>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel 2: Não é para você se */}
          <div className="reveal-item bg-panel border border-cream rounded-[16px] p-8 hover:-translate-y-0.5 hover:border-terra/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-mono-eyebrow text-terra uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terra"></span>
                <T>Não é para você se:</T>
              </h3>
              <ul className="space-y-6">
                {notForYouList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-terra text-paper flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <p className="font-sans text-body text-ink-2 leading-relaxed">
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
