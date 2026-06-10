import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import { Target, Layers, Users, HeartHandshake } from 'lucide-react';

export const PorQueMonike: React.FC = () => {
  const revealRef = useReveal();

  const reasons = [
    {
      label: "ESPECIALIZAÇÃO REAL",
      title: "Só HOF, não marketing pra todos",
      desc: "Conheço as regras específicas dos conselhos, a linguagem exata e os desejos das suas clientes."
    },
    {
      label: "FUNIL COMPLETO",
      title: "Tráfego, comercial e conteúdo",
      desc: "Trabalhamos as três frentes do funil em harmonia para que seu investimento dê retorno."
    },
    {
      label: "TREINAMENTO DE TIME",
      title: "Capacitação comercial ativa",
      desc: "Estruturo scripts e qualificação para a sua recepção converter leads frios em consultas agendadas."
    },
    {
      label: "ACOMPANHAMENTO PRÓXIMO",
      title: "Consultoria individualizada",
      desc: "Atendo poucas clínicas por vez para garantir foco, proximidade e análises precisas de métricas."
    }
  ];

  return (
    <section className="py-[clamp(56px,9vw,80px)] md:py-[160px] bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10"
      >
        {/* Intro block in 2 columns (stacks naturally on mobile, title then description) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-[clamp(40px,5vw,80px)] mb-12">
          <div className="reveal-item w-full md:w-[48%]">
            <Eyebrow className="mb-6">POR QUE A MONIKE</Eyebrow>
            <h2 className="font-sans text-[32px] md:text-[40px] text-ink font-light leading-tight">
              <T>Genérico não funciona para harmonização.</T><br />
              <em className="font-serif text-olive not-italic italic font-normal"><T>Eu só trabalho com isso.</T></em>
            </h2>
          </div>
          <div className="reveal-item w-full md:w-[44%] md:pt-8">
            <p className="font-sans text-[16px] text-ink-2 leading-[1.7] max-w-[46ch]">
              <T>Existe consultoria de marketing para tudo. O problema é que harmonização tem suas regras específicas: o que pode e o que não pode anunciar, o tipo de paciente que vale a pena, a forma de falar de procedimento sem assustar. Eu não atendo dez nichos diferentes — atendo Dras. de harmonização, e é por isso que entendo o seu mercado por dentro.</T>
            </p>
          </div>
        </div>

        {/* 4 columns layout: stacks into 1 column with divider on mobile, 4 columns with vertical lines on desktop */}
        <div className="flex flex-col lg:flex-row divide-y divide-cream lg:divide-y-0 lg:divide-x lg:divide-cream mt-[48px] lg:mt-[64px] border-t border-cream pt-4 lg:pt-12">
          {reasons.map((reason, idx) => {
            const Icon = [Target, Layers, Users, HeartHandshake][idx];
            return (
              <div 
                key={idx} 
                className="reveal-item flex flex-col items-start py-8 lg:py-0 lg:px-6 first:pt-4 lg:first:pt-0 last:pb-4 lg:last:pb-0 first:pl-0 last:pr-0"
              >
                <div className="text-olive mb-6">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="font-mono text-[10px] text-olive-d uppercase tracking-wider block mb-3 font-semibold">
                  <T>{reason.label}</T>
                </span>
                <h3 className="font-serif text-[20px] text-ink font-normal mb-3 leading-tight min-h-[2.5rem] flex items-end">
                  <Balance>{reason.title}</Balance>
                </h3>
                <p className="font-sans text-[16px] md:text-[15px] text-ink-2 leading-relaxed">
                  <T>{reason.desc}</T>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
