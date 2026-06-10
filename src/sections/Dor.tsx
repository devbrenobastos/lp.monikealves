import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { TrendingDown, Users, DollarSign } from 'lucide-react';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const Dor: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section className="py-20 md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10"
      >
        {/* Header content */}
        <div className="reveal-item max-w-[62ch] mb-[40px]">
          <Eyebrow className="mb-[12px]">ONDE TRAVA</Eyebrow>
          <h2 className="font-sans text-display-l text-ink font-light leading-tight mb-[20px]">
            <span className="block mb-2">
              <Balance>Você domina o procedimento.</Balance>
            </span>
            <span className="block">
              <T>O que ninguém te ensinou foi a</T> <em className="font-serif text-olive not-italic italic font-normal"><T>vender</T></em> <T>ele.</T>
            </span>
          </h2>
          <p className="font-sans text-body-l text-ink-2 leading-relaxed">
            <T>A formação te preparou para a cadeira, não para o Instagram nem para o caixa. Então acontece o de sempre: você impulsiona um post, aparecem curiosos pedindo preço, sua secretária responde como dá, e a maioria some. Para preencher a agenda, você baixa o valor — e o seu trabalho premium vira commodity, concorrendo de igual para igual com quem cobra qualquer coisa.</T>
          </p>
        </div>

        {/* 3 cards with light asymmetry & vertical hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-cream">
          {/* Card 1 */}
          <div className="reveal-item py-8 md:py-10 md:pr-8 border-b md:border-b-0 border-cream flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="text-terra mb-6 inline-flex items-center justify-center p-3 bg-panel rounded-full">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-display-m text-ink font-normal mb-3 leading-tight">
                <Balance>Anúncio que queima caixa</Balance>
              </h3>
              <p className="font-sans text-body-s text-ink-2 leading-relaxed max-w-[62ch]">
                <T>Você investe em tráfego, mas sem posicionamento e sem oferta. O resultado é um monte de "quanto custa?" e quase nenhum agendamento.</T>
              </p>
            </div>
            <span className="font-mono text-[10px] text-ink-3 uppercase mt-8 block tracking-widest"><T>01 / QUEIMA CAIXA</T></span>
          </div>

          {/* Card 2 */}
          <div className="reveal-item py-8 md:py-10 md:px-8 border-b md:border-b-0 md:border-x border-cream flex flex-col justify-between md:translate-y-4 group transition-all duration-300">
            <div>
              <div className="text-terra mb-6 inline-flex items-center justify-center p-3 bg-panel rounded-full">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-display-m text-ink font-normal mb-3 leading-tight">
                <Balance>O lead chega e esfria</Balance>
              </h3>
              <p className="font-sans text-body-s text-ink-2 leading-relaxed max-w-[62ch]">
                <T>A paciente manda mensagem, ninguém qualifica, a conversa morre. Não falta procura — falta um comercial que conduz até a cadeira.</T>
              </p>
            </div>
            <span className="font-mono text-[10px] text-ink-3 uppercase mt-8 block tracking-widest"><T>02 / COMERCIAL FRACO</T></span>
          </div>

          {/* Card 3 */}
          <div className="reveal-item py-8 md:py-10 md:pl-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="text-terra mb-6 inline-flex items-center justify-center p-3 bg-panel rounded-full">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-display-m text-ink font-normal mb-3 leading-tight">
                <Balance>Guerra de preço</Balance>
              </h3>
              <p className="font-sans text-body-s text-ink-2 leading-relaxed max-w-[62ch]">
                <T>Sem diferencial claro, a única alavanca que sobra é o desconto. Você trabalha mais, fatura igual e atrai paciente que só quer barato.</T>
              </p>
            </div>
            <span className="font-mono text-[10px] text-ink-3 uppercase mt-8 block tracking-widest"><T>03 / MARGEM ERODIDA</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
