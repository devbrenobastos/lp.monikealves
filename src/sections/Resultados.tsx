import React, { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

// Viewport-triggered count-up animation component
const CountUp: React.FC<{ end: number; decimals?: number; duration?: number; prefix?: string; suffix?: string }> = ({ 
  end, 
  decimals = 0,
  duration = 1500, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const MathProgress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(MathProgress * end);
          if (MathProgress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals).replace('.', ',') 
    : Math.floor(count).toString();

  return (
    <span ref={elementRef}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

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
      videoSrc: "placeholder-video-1",
    },
    {
      id: "case-2",
      number: "Faturamento 3×",
      suffix: "",
      title: "Caso 2",
      desc: "Triplicou o faturamento no primeiro mês de trabalho conjunto.",
      quote: "\"Fomos do zero ao lotado em semanas...\"",
      videoSrc: "placeholder-video-2",
    },
    {
      id: "case-3",
      number: "R$ 4.500 → R$ 49.730",
      suffix: "",
      title: "Caso 3",
      desc: "Dra. [nome] em 2025: quase 50 mil em um período que antes fechava em quatro mil e meio.",
      quote: "\"Nunca imaginei que o retorno seria tão rápido...\"",
      videoSrc: "placeholder-video-3",
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
    <section id="resultados" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10"
      >
        {/* Header Block (Left-aligned on mobile) */}
        <div className="reveal-item max-w-[60ch] mb-[40px] text-left flex flex-col items-start">
          <Eyebrow className="mb-[12px]">RESULTADOS REAIS</Eyebrow>
          <h2 className="font-sans text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight mb-[20px] text-wrap-balance">
            <T>O que muda quando a estratégia</T> <em className="font-serif text-olive not-italic italic font-normal"><T>entra</T></em>
          </h2>
          <p className="font-sans text-[16px] md:text-body-l text-ink-2 leading-relaxed text-wrap-balance">
            <T>Resultados de Dras. que pararam de impulsionar no escuro.</T>
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-48 lg:mb-64">
          {/* Cases Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Stacked vertically, left-aligned on mobile */}
            <div 
              className="flex flex-col gap-6 lg:gap-0 border-b-0 lg:border-b-0 border-cream pb-0 lg:pb-0"
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
                    className={`cursor-pointer text-left pb-4 lg:py-6 border-b border-cream lg:border-cream transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-olive relative pl-0 lg:pl-6 flex-shrink-0 lg:flex-shrink
                      ${isActive ? 'opacity-100 border-olive' : 'opacity-55 hover:opacity-80'}
                    `}
                  >
                    {/* Active vertical marker on desktop */}
                    {isActive && (
                      <div className="hidden lg:block absolute left-0 top-6 bottom-6 w-[2px] bg-olive rounded-full" />
                    )}
                    
                    <span className={`font-mono text-[20px] lg:text-[32px] block mb-1 lg:mb-2 font-semibold tracking-tight transition-colors ${isActive ? 'text-amber' : 'text-ink-3'}`}>
                      <span className="nowrap">{c.number}</span> {c.suffix && <span className="text-xs md:text-sm font-sans text-ink-3 font-normal">{c.suffix}</span>}
                    </span>
                    <h3 className="font-serif text-[16px] lg:text-body text-ink font-normal leading-tight text-wrap-balance">
                      <Balance>{c.title}</Balance>
                    </h3>
                    
                    {/* Collapsible details */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[120px] opacity-100 mt-2' : 'max-h-0 opacity-0 lg:max-h-0'}`}>
                      <p className="font-sans text-[16px] md:text-body-s text-ink-2 leading-relaxed text-wrap-balance">
                        <T>{c.desc}</T>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Testimony / Case study player - Appears below on mobile, full width */}
          <div className="reveal-item lg:col-span-5">
            <div 
              className="bg-panel border border-cream rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[320px] relative group w-full h-full"
              role="tabpanel"
              id={`panel-${cases[activeTab].id}`}
              aria-labelledby={`tab-${cases[activeTab].id}`}
            >
              <div className={`absolute inset-0 flex flex-col justify-between w-full h-full p-8 text-left transition-opacity duration-200 ${fadeState}`}>
                <div className="absolute inset-0 bg-ink-2/10 flex items-center justify-center z-10">
                  <button 
                    type="button" 
                    aria-label={`Tocar depoimento do ${cases[activeTab].title}`} 
                    className="w-16 h-16 rounded-full border border-olive/80 bg-paper/20 backdrop-blur-sm text-olive flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-olive hover:text-paper shadow-lg"
                  >
                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-full h-full bg-panel flex flex-col items-start justify-center p-8 text-left mt-auto">
                  <span className="font-mono text-mono-eyebrow text-ink-3 mb-2 uppercase"><T>Depoimento em Vídeo (9:16)</T></span>
                  <span className="font-serif text-[16px] md:text-body text-ink italic mb-2 text-wrap-balance"><T>{cases[activeTab].quote}</T></span>
                  <span className="text-[10px] font-mono text-ink-3"><T>{`Thumbnail otimizada • ${cases[activeTab].videoSrc}`}</T></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary strip - Centered on mobile with subtle dividers, 3 columns on desktop */}
        <div className="reveal-item border-t-0 sm:border-t border-cream pt-0 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-24 text-center sm:text-left divide-y divide-cream/45 sm:divide-y-0">
          <div className="py-24 sm:py-0 flex flex-col items-center sm:items-start">
            <span className="font-mono text-mono-data text-amber font-semibold block mb-1">
              <CountUp end={5} prefix="+" suffix="MM" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>em vendas geradas</T></span>
          </div>
          <div className="py-24 sm:py-0 flex flex-col items-center sm:items-start sm:border-x border-cream sm:px-6">
            <span className="font-mono text-mono-data text-ink font-semibold block mb-1">
              <CountUp end={10.4} decimals={1} suffix="k" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>acompanham no Instagram</T></span>
          </div>
          <div className="py-24 sm:py-0 flex flex-col items-center sm:items-start sm:px-6">
            <span className="font-mono text-mono-data text-ink font-semibold block mb-1">
              <CountUp end={200} prefix="+" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>Dras. atendidas</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
