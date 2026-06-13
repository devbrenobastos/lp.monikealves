import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

const VideoPlayer = lazy(() => import('../components/VideoPlayer'));

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
      number: "Faturamento 3×",
      suffix: "",
      title: "Caso 1 — Dra. Amanda Zanata",
      desc: "Buscava escalar seus resultados na Harmonização Facial. Com menos de um mês de parceria e tráfego pago estratégico, triplicou o faturamento do seu consultório e alcançou um novo patamar de faturamento através de um suporte ativo pós-expediente e processos alinhados.",
      quote: "\"Com menos de um mês de parceria, triplicou o faturamento do seu consultório...\"",
      videoSrc: "Dc5ZgYqVV9w",
      isTextLabel: false
    },
    {
      id: "case-2",
      number: "Construção de Autoridade & Expansão",
      suffix: "",
      title: "Caso 2 — Dra. Daniele Gaiotte",
      desc: "Parceria de longo prazo focada em branding e posicionamento digital premium. Traduziu a excelência do consultório para o digital, gerando autoridade para palestrar em grandes congressos e uma verdadeira explosão de crescimento com a fundação da Gaiotte Clinic.",
      quote: "\"Traduziu a excelência do consultório para o digital, gerando autoridade...\"",
      videoSrc: "Fn1S74E1DiM",
      isTextLabel: true
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
                    
                    <span className={`font-serif italic text-olive text-[20px] lg:text-[28px] block mb-1 lg:mb-2 font-normal tracking-normal transition-colors`}>
                      {c.number}
                    </span>
                    <h3 className="font-serif text-[16px] lg:text-body text-ink font-normal leading-tight text-wrap-balance">
                      <Balance>{c.title}</Balance>
                    </h3>
                    
                    {/* Collapsible details */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[160px] opacity-100 mt-2' : 'max-h-0 opacity-0 lg:max-h-0'}`}>
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
              <Suspense fallback={
                <div className="absolute inset-0 bg-panel flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-olive border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <VideoPlayer 
                  title={cases[activeTab].title}
                  quote={cases[activeTab].quote}
                  videoSrc={cases[activeTab].videoSrc}
                  fadeState={fadeState}
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Stats Summary strip - Centered on mobile and desktop with subtle dividers, 3 columns */}
        <div className="reveal-item border-t-0 sm:border-t border-cream pt-0 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-24 text-center divide-y divide-cream/45 sm:divide-y-0">
          <div className="py-24 sm:py-0 flex flex-col items-center">
            <span className="font-mono text-mono-data text-amber font-semibold block mb-1">
              <CountUp end={8} prefix="+" suffix="MM" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>em vendas geradas</T></span>
          </div>
          <div className="py-24 sm:py-0 flex flex-col items-center sm:border-x border-cream sm:px-6">
            <span className="font-mono text-mono-data text-ink font-semibold block mb-1">
              <CountUp end={2} prefix="+" suffix="MM" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>gerenciados em anúncios</T></span>
          </div>
          <div className="py-24 sm:py-0 flex flex-col items-center sm:px-6">
            <span className="font-mono text-mono-data text-ink font-semibold block mb-1">
              <CountUp end={6} prefix="+" suffix=" anos" />
            </span>
            <span className="font-sans text-[16px] md:text-body-s text-ink-2 text-wrap-balance"><T>posicionando Doutoras de HOF</T></span>
          </div>
        </div>
      </div>
    </section>
  );
};
