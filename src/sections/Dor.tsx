import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { TrendingDown, Users, DollarSign } from 'lucide-react';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const Dor: React.FC = () => {
  const revealRef = useReveal();

  const cards = [
    {
      num: "01 / QUEIMA CAIXA",
      title: "Anúncio que queima caixa",
      desc: "Você investe em tráfego, mas sem posicionamento e sem oferta. O resultado é um monte de \"quanto custa?\" e quase nenhum agendamento."
    },
    {
      num: "02 / COMERCIAL FRACO",
      title: "O lead chega e esfria",
      desc: "A paciente manda mensagem, ninguém qualifica, a conversa morre. Não falta procura — falta um comercial que conduz até a cadeira."
    },
    {
      num: "03 / MARGEM ERODIDA",
      title: "Guerra de preço",
      desc: "Sem diferencial claro, a única alavanca que sobra é o desconto. Você trabalha mais, fatura igual e atrai paciente que só quer barato."
    }
  ];

  return (
    <section className="py-[clamp(56px,9vw,80px)] md:py-[160px] bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10"
      >
        {/* Header content - matches PorQueMonike.tsx two-column layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-[clamp(40px,5vw,80px)] mb-12">
          <div className="reveal-item w-full md:w-[48%]">
            <Eyebrow className="mb-6">ONDE TRAVA</Eyebrow>
            <h2 className="font-sans text-[clamp(28px,6vw,40px)] text-ink font-light leading-tight text-wrap-balance">
              <T>Você domina o procedimento.</T><br />
              <span className="block mt-2">
                <T>O que ninguém te ensinou foi a</T> <em className="font-serif text-olive not-italic italic font-normal"><T>vender</T></em> <T>ele.</T>
              </span>
            </h2>
          </div>
          <div className="reveal-item w-full md:w-[44%] md:pt-8">
            <p className="font-sans text-[16px] text-ink-2 leading-[1.7] max-w-[46ch] text-wrap-balance">
              <T>A formação te preparou para a cadeira, não para o Instagram nem para o caixa. Então acontece o de sempre: você impulsiona um post, aparecem curiosos pedindo preço, sua secretária responde como dá, e a maioria some. Para preencher a agenda, você baixa o valor — e o seu trabalho premium vira commodity, concorrendo de igual para igual com quem cobra qualquer coisa.</T>
            </p>
          </div>
        </div>

        {/* 3 cards with left-alignment and vertical/horizontal hairlines matching PorQueMonike.tsx */}
        <div className="flex flex-col lg:flex-row divide-y divide-cream lg:divide-y-0 lg:divide-x lg:divide-cream mt-[48px] lg:mt-[64px] border-t border-cream pt-4 lg:pt-12">
          {cards.map((card, idx) => {
            const Icon = [TrendingDown, Users, DollarSign][idx];
            return (
              <div 
                key={idx} 
                className="reveal-item flex flex-col items-start py-8 lg:py-0 lg:px-6 first:pt-4 lg:first:pt-0 last:pb-4 lg:last:pb-0 first:pl-0 last:pr-0"
              >
                <div className="text-terra mb-6">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="font-mono text-[10px] text-olive-d uppercase tracking-wider block mb-3 font-semibold">
                  <T>{card.num}</T>
                </span>
                <h3 className="font-serif text-[20px] text-ink font-normal mb-3 leading-tight min-h-[2.5rem] flex items-end text-wrap-balance">
                  <Balance>{card.title}</Balance>
                </h3>
                <p className="font-sans text-[16px] md:text-[15px] text-ink-2 leading-relaxed text-wrap-balance">
                  <T>{card.desc}</T>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
