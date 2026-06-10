import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

import trafegoWebp480 from '../assets/solucao-trafego-480.webp';
import trafegoWebp768 from '../assets/solucao-trafego-768.webp';
import trafegoWebp1100 from '../assets/solucao-trafego-1100.webp';
import trafegoAvif480 from '../assets/solucao-trafego-480.avif';
import trafegoAvif768 from '../assets/solucao-trafego-768.avif';
import trafegoAvif1100 from '../assets/solucao-trafego-1100.avif';

import timeWebp480 from '../assets/solucao-time-480.webp';
import timeWebp768 from '../assets/solucao-time-768.webp';
import timeWebp1100 from '../assets/solucao-time-1100.webp';
import timeAvif480 from '../assets/solucao-time-480.avif';
import timeAvif768 from '../assets/solucao-time-768.avif';
import timeAvif1100 from '../assets/solucao-time-1100.avif';

import conteudoWebp480 from '../assets/solucao-conteudo-480.webp';
import conteudoWebp768 from '../assets/solucao-conteudo-768.webp';
import conteudoWebp1100 from '../assets/solucao-conteudo-1100.webp';
import conteudoAvif480 from '../assets/solucao-conteudo-480.avif';
import conteudoAvif768 from '../assets/solucao-conteudo-768.avif';
import conteudoAvif1100 from '../assets/solucao-conteudo-1100.avif';

export const Solucao: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section id="metodo" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream content-visibility-auto">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10"
      >
        {/* Header Block (Left-aligned) */}
        <div className="reveal-item max-w-[62ch] mb-[40px] text-left flex flex-col items-start">
          <Eyebrow className="mb-[12px]">O QUE EU FAÇO</Eyebrow>
          <h2 className="font-sans text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight mb-[20px] text-wrap-balance">
            <T>Eu cuido do funil inteiro — do anúncio à</T> <em className="font-serif text-olive not-italic italic font-normal"><T>cadeira.</T></em>
          </h2>
          <p className="font-sans text-[16px] md:text-body-l text-ink-2 leading-relaxed">
            <T>Não entrego só tráfego. Monto o sistema completo que leva a paciente certa do feed até o seu consultório, e treino quem vai recebê-la para vender sem parecer vendedora.</T>
          </p>
        </div>

        {/* Blocks Layout */}
        <div className="space-y-16 md:space-y-24">
          {/* Block 01 */}
          <div className="reveal-item grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-cream pt-12 text-left">
            <div className="md:col-span-1 align-self-start flex justify-start">
              <span className="font-mono text-[36px] md:text-[48px] text-mist font-medium leading-[1.1] pt-0">01</span>
            </div>
            <div className="md:col-span-6 flex flex-col items-start">
              <h3 className="font-serif text-[24px] text-ink font-normal mb-3 leading-[1.1] text-wrap-balance">
                <Balance>Tráfego pago que atrai a paciente certa</Balance>
              </h3>
              <p className="font-sans text-[16px] text-ink-2 leading-relaxed max-w-[46ch] mb-6 md:mb-0">
                <T>Anúncios desenhados para o público de harmonização, com segmentação, criativo e oferta pensados para atrair quem valoriza (e paga) o seu trabalho — não caçador de promoção.</T>
              </p>
            </div>
            <div className="md:col-span-5 border border-cream rounded-[16px] overflow-hidden w-full max-w-[420px] max-h-[260px] aspect-[4/3] mx-auto md:mr-0 md:ml-auto">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${conteudoAvif480} 480w, ${conteudoAvif768} 768w, ${conteudoAvif1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <source
                  type="image/webp"
                  srcSet={`${conteudoWebp480} 480w, ${conteudoWebp768} 768w, ${conteudoWebp1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <img
                  src={conteudoWebp768}
                  width="1100"
                  height="825"
                  loading="lazy"
                  decoding="async"
                  alt="Moodboard de conteúdo com fotos, feed no celular e cartões de cor verde-oliva"
                  className="w-full h-full object-cover object-center block"
                />
              </picture>
            </div>
          </div>

          {/* Block 02 - Reordered source code so text renders before image on mobile, with custom md:order tags for desktop alternate look */}
          <div className="reveal-item grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-cream pt-12 text-left">
            {/* Number: first in source, order-1 on desktop */}
            <div className="md:col-span-1 md:order-1 align-self-start flex justify-start">
              <span className="font-mono text-[36px] md:text-[48px] text-mist font-medium leading-[1.1] pt-0">02</span>
            </div>
            
            {/* Text & Content: second in source (renders 2nd on mobile), md:order-3 on desktop (renders 3rd/right on desktop) */}
            <div className="md:col-span-6 md:order-3 md:pl-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive/10 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-olive"></span>
                <span className="font-mono text-[10px] text-olive-d uppercase tracking-wider font-semibold"><T>o que ninguém faz</T></span>
              </div>
              <h3 className="font-serif text-[24px] text-ink font-normal mb-3 leading-[1.1] text-wrap-balance">
                <Balance>Time comercial que sabe conduzir</Balance>
              </h3>
              <p className="font-sans text-[16px] text-ink-2 leading-relaxed max-w-[46ch] mb-6 md:mb-0">
                <T>Treino a sua recepção e o seu comercial para atender, qualificar e agendar com naturalidade. É a peça que quase ninguém cuida — e a que mais derruba faturamento quando falta.</T>
              </p>
            </div>

            {/* Image: third in source (renders 3rd on mobile), md:order-2 on desktop (renders 2nd/middle on desktop) */}
            <div className="md:col-span-5 md:order-2 border border-cream rounded-[16px] overflow-hidden w-full max-w-[420px] max-h-[260px] aspect-[4/3] mx-auto md:ml-0 md:mr-auto">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${timeAvif480} 480w, ${timeAvif768} 768w, ${timeAvif1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <source
                  type="image/webp"
                  srcSet={`${timeWebp480} 480w, ${timeWebp768} 768w, ${timeWebp1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <img
                  src={timeWebp768}
                  width="1100"
                  height="825"
                  loading="lazy"
                  decoding="async"
                  alt="Mesa de atendimento com celular mostrando uma conversa e um headset"
                  className="w-full h-full object-cover object-center block"
                />
              </picture>
            </div>
          </div>

          {/* Block 03 */}
          <div className="reveal-item grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-cream pt-12 text-left">
            <div className="md:col-span-1 align-self-start flex justify-start">
              <span className="font-mono text-[36px] md:text-[48px] text-mist font-medium leading-[1.1] pt-0">03</span>
            </div>
            <div className="md:col-span-6 flex flex-col items-start">
              <h3 className="font-serif text-[24px] text-ink font-normal mb-3 leading-[1.1] text-wrap-balance">
                <Balance>Conteúdo e criativos que posicionam</Balance>
              </h3>
              <p className="font-sans text-[16px] text-ink-2 leading-relaxed max-w-[46ch] mb-6 md:mb-0">
                <T>Roteiro e edição dos criativos que te colocam como referência local. Conteúdo que vende sem gritar, no padrão editorial que combina com o seu trabalho.</T>
              </p>
            </div>
            <div className="md:col-span-5 border border-cream rounded-[16px] overflow-hidden w-full max-w-[420px] max-h-[260px] aspect-[4/3] mx-auto md:mr-0 md:ml-auto">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${trafegoAvif480} 480w, ${trafegoAvif768} 768w, ${trafegoAvif1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <source
                  type="image/webp"
                  srcSet={`${trafegoWebp480} 480w, ${trafegoWebp768} 768w, ${trafegoWebp1100} 1100w`}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <img
                  src={trafegoWebp768}
                  width="1100"
                  height="825"
                  loading="lazy"
                  decoding="async"
                  alt="Mão segurando um celular que exibe um anúncio editorial de estética"
                  className="w-full h-full object-cover object-center block"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Section conclusion text */}
        <div className="reveal-item mt-16 md:mt-24 border-t border-cream pt-8 text-left">
          <p className="font-sans text-[16px] md:text-body-l text-ink-3 text-wrap-balance">
            <T>Atrair, converter e aparecer — as três peças trabalhando juntas, não cada uma por conta.</T>
          </p>
        </div>
      </div>
    </section>
  );
};
