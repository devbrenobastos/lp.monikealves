import React, { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Play } from 'lucide-react';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const Resultados: React.FC = () => {
  const revealRef = useReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100');
  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cases = [
    {
      id: "case-1",
      number: "R$ 7.000 → R$ 50.000",
      suffix: "/mês",
      title: "Caso 1",
      desc: "Saiu de um faturamento de sete mil para cinquenta mil mensais depois de reorganizar oferta, anúncio e atendimento.",
      quote: "\"Minha agenda mudou completamente...\"",
      videoSrc: "placeholder-video-1", /* CONFIRMAR vídeo do caso 1 */
    },
    {
      id: "case-2",
      number: "Faturamento 3×",
      suffix: "",
      title: "Caso 2",
      desc: "Triplicou o faturamento no primeiro mês de trabalho conjunto.",
      quote: "\"Fomos do zero ao lotado em semanas...\"",
      videoSrc: "placeholder-video-2", /* CONFIRMAR vídeo do caso 2 */
    },
    {
      id: "case-3",
      number: "R$ 4.500 → R$ 49.730",
      suffix: "",
      title: "Caso 3",
      desc: "Dra. [nome] em 2025: quase 50 mil em um período que antes fechava em quatro mil e meio.",
      quote: "\"Nunca imaginei que o retorno seria tão rápido...\"",
      videoSrc: "placeholder-video-3", /* CONFIRMAR vídeo do caso 3 */
    }
  ];

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFadeState('opacity-0');
    setTimeout(() => {
      setActiveTab(index);
      setFadeState('opacity-100');
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = (index + 1) % cases.length;
      e.preventDefault();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + cases.length) % cases.length;
      e.preventDefault();
    } else if (e.key === 'Home') {
      nextIndex = 0;
      e.preventDefault();
    } else if (e.key === 'End') {
      nextIndex = cases.length - 1;
      e.preventDefault();
    }

    if (nextIndex !== index) {
      handleTabChange(nextIndex);
      tabsRef.current[nextIndex]?.focus();
    }
  };

  return (
    <section id="resultados" className="py-20 md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10"
      >
        {/* 2: block de cabeçalho centralizado (text-center, margin-inline: auto, max-width: 60ch no lede) */}
        <div className="reveal-item max-w-[60ch] mx-auto text-center mb-[40px]">
          <Eyebrow className="mb-[12px]">RESULTADOS REAIS</Eyebrow>
          <h2 className="font-sans text-display-l text-ink font-light leading-tight mb-[20px]">
            <T>O que muda quando a estratégia</T> <em className="font-serif text-olive not-italic italic font-normal"><T>entra</T></em>
          </h2>
          <p className="font-sans text-body-l text-ink-2 leading-relaxed">
            <T>Resultados de Dras. que pararam de impulsionar no escuro.</T>
          </p>
        </div>

        {/* Highlight Grid (1 big layout + video case next to it) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Cases Column */}
          <div 
            className="lg:col-span-7 flex flex-col gap-4"
            role="tablist"
            aria-label="Resultados por caso"
            aria-orientation="vertical"
          >
            {cases.map((c, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={c.id} 
                  ref={el => { tabsRef.current[idx] = el; }}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-controls={`panel-${c.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabChange(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`reveal-item cursor-pointer text-left bg-panel border border-cream p-6 md:p-8 rounded-[16px] transition-all duration-300 flex-1 outline-none focus-visible:ring-2 focus-visible:ring-olive
                    ${isActive ? 'border-l-[4px] border-l-olive bg-olive/[0.03] opacity-100' : 'opacity-70 hover:opacity-100'}
                  `}
                >
                  <span className={`font-mono text-[28px] md:text-[36px] block mb-2 font-semibold tracking-tight transition-colors ${isActive ? 'text-amber' : 'text-ink'}`}>
                    <span className="nowrap">{c.number}</span> {c.suffix && <span className="text-xs md:text-sm font-sans text-ink-3 font-normal">{c.suffix}</span>}
                  </span>
                  <h3 className="font-serif text-body text-ink font-normal mb-2 leading-tight">
                    <Balance>{c.title}</Balance>
                  </h3>
                  <p className="font-sans text-body-s text-ink-2 leading-relaxed">
                    <T>{c.desc}</T>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Video Testimony / Case study player */}
          <div 
            className="reveal-item lg:col-span-5 bg-panel border border-cream rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[350px] relative group"
            role="tabpanel"
            id={`panel-${cases[activeTab].id}`}
            aria-labelledby={`tab-${cases[activeTab].id}`}
          >
            <div className={`absolute inset-0 flex flex-col justify-between w-full h-full p-8 text-center transition-opacity duration-200 ${fadeState}`}>
              <div className="absolute inset-0 bg-ink-2/30 flex items-center justify-center z-10">
                <button 
                  type="button" 
                  aria-label={`Tocar depoimento do ${cases[activeTab].title}`} 
                  className="w-16 h-16 rounded-full bg-olive text-paper flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-olive-h shadow-xl"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>
              
              <div className="w-full h-full bg-panel flex flex-col items-center justify-center p-8 text-center mt-auto">
                <span className="font-mono text-mono-eyebrow text-ink-3 mb-2 uppercase"><T>Depoimento em Vídeo (9:16)</T></span>
                <span className="font-serif text-body text-ink italic mb-2"><T>{cases[activeTab].quote}</T></span>
                <span className="text-[10px] font-mono text-ink-3"><T>{`Thumbnail otimizada • ${cases[activeTab].videoSrc}`}</T></span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary strip at the bottom */}
        <div className="reveal-item border-t border-cream pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="font-mono text-mono-data text-amber font-semibold block">+5MM</span>
            <span className="font-sans text-body-s text-ink-2"><T>em vendas geradas</T></span>
          </div>
          <div>
            <span className="font-mono text-mono-data text-ink font-semibold block">+200</span>
            <span className="font-sans text-body-s text-ink-2"><T>Dras. atendidas</T></span>
          </div>
          <div>
            <span className="font-mono text-mono-data text-ink font-semibold block">[X] anos</span>
            <span className="font-sans text-body-s text-ink-2"><T>de mercado</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
