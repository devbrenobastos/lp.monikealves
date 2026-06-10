import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';
import { Award, Filter, Users, UserCheck } from 'lucide-react';

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
    <section className="py-20 md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10"
      >
        {/* Intro block in 2 columns */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="reveal-item w-full md:w-[48%]">
            <Eyebrow className="mb-6">POR QUE A MONIKE</Eyebrow>
            <h2 className="font-sans text-display-l text-ink font-light leading-tight">
              <T>Genérico não funciona para harmonização.</T><br />
              <em className="font-serif text-olive not-italic italic font-normal"><T>Eu só trabalho com isso.</T></em>
            </h2>
          </div>
          <div className="reveal-item w-full md:w-[48%] md:pt-[72px]">
            <p className="font-sans text-body-l text-ink-2 leading-relaxed max-w-[50ch]">
              <T>Existe consultoria de marketing para tudo. O problema é que harmonização tem suas próprias regras: o que pode e o que não pode anunciar, o tipo de paciente que vale a pena, a forma de falar de procedimento sem assustar. Eu não atendo dez nichos diferentes — atendo Dras. de harmonização, e é por isso que entendo o seu mercado por dentro.</T>
            </p>
          </div>
        </div>

        {/* 4 columns inline hairline layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-cream">
          {reasons.map((reason, idx) => {
            const Icon = [Award, Filter, Users, UserCheck][idx];
            return (
              <div 
                key={idx} 
                className="reveal-item border-r border-b border-cream p-8 flex flex-col items-start transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-6">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-olive-d uppercase tracking-wider block mb-3 font-semibold">
                  <T>{reason.label}</T>
                </span>
                <h3 className="font-serif text-[20px] text-ink font-normal mb-3 leading-tight min-h-[3rem] flex items-end">
                  <Balance>{reason.title}</Balance>
                </h3>
                <p className="font-sans text-[15px] text-ink-2 leading-relaxed">
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
