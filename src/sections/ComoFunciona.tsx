import React, { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const ComoFunciona: React.FC = () => {
  const revealRef = useReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const [fillProgress, setFillProgress] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Diagnóstico",
      desc: "A gente olha sua operação de hoje: números, oferta, atendimento e como você aparece. Antes de mudar qualquer coisa, eu entendo onde está o vazamento."
    },
    {
      num: "02",
      title: "Estratégia sob medida",
      desc: "Monto o plano para a sua clínica e a sua cidade — não um modelo genérico. Posicionamento, oferta, anúncio e roteiro de atendimento alinhados."
    },
    {
      num: "03",
      title: "Implementação junto com você",
      desc: "Coloco no ar e treino seu time. Você não fica sozinha tentando executar — eu acompanho cada passo."
    },
    {
      num: "04",
      title: "Ajuste contínuo",
      desc: "Acompanho os números de perto e refino o que precisa. O que funciona, a gente escala; o que não, a gente corta."
    }
  ];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      
      let progress = currentDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      
      const startThreshold = 0.25;
      const endThreshold = 0.75;
      
      let fill = (progress - startThreshold) / (endThreshold - startThreshold);
      fill = Math.max(0, Math.min(1, fill));
      
      setFillProgress(fill);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 3: clamp(80px, 10vw, 140px) vertical padding for dark section
    <section ref={sectionRef} className="py-[clamp(80px,10vw,140px)] bg-d-bg text-paper relative overflow-hidden">
      {/* Editorial dark line accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-d-surface to-d-bg pointer-events-none opacity-40 z-0"></div>

      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10 relative z-10"
      >
        {/* Header Block */}
        <div className="reveal-item max-w-[62ch] mb-[64px]"> {/* 3: 64px cabeçalho -> timeline */}
          <Eyebrow dark className="mb-[12px]">O CAMINHO</Eyebrow>
          <h2 className="font-sans text-display-l text-paper font-light leading-tight mb-[20px]">
            <T>Como a gente</T> <em className="font-serif text-olive-h not-italic italic font-normal"><T>transforma</T></em> <T>sua clínica em referência</T>
          </h2>
          <p className="font-sans text-body-l text-cream/80 leading-relaxed">
            <T>Sem fórmula mágica e sem promessa solta. Um processo em quatro etapas, adaptado à realidade da sua clínica.</T>
          </p>
        </div>

        {/* Timeline representation connected by a custom hairline line */}
        <div className="relative">
          {/* Vertical connecting line (for desktop and mobile) */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[1px] bg-d-line pointer-events-none">
            {/* Olive active indicator scroll-driven timeline fill */}
            <div 
              className="absolute top-0 left-0 w-full bg-olive-h rounded origin-top"
              style={{ 
                height: '100%',
                transform: `scaleY(${prefersReduced ? 1 : fillProgress})`,
                transition: prefersReduced ? 'none' : 'transform 75ms linear'
              }}
            ></div>
          </div>

          {/* 3: gap vertical clamp(32px, 4vw, 56px) between items */}
          <div className="space-y-[clamp(32px,4vw,56px)] md:space-y-0 md:grid md:grid-cols-1 md:gap-y-[clamp(32px,4vw,56px)] pt-6">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num}
                  className={`reveal-item relative flex flex-col md:flex-row md:items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline indicator node - topo do card = centro do nó */}
                  <div className="absolute left-4 md:left-[50%] top-0 -translate-x-[50%] -translate-y-[50%] z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-d-surface border border-olive-h/50 flex items-center justify-center font-mono text-[13px] text-amber font-semibold shadow-lg">
                      {step.num}
                    </div>
                  </div>

                  {/* Left Side Content (Desktop) / Main Content (Mobile) */}
                  <div className={`pl-14 md:pl-0 md:w-[44%] ${isEven ? 'md:text-left' : 'md:text-right md:pr-10'}`}>
                    {/* 3: padding interno dos cards 32px */}
                    <div className="bg-d-surface border border-d-line p-8 rounded-[16px] transition-all duration-300 hover:border-olive-h/30 group">
                      {/* 3: eyebrow -> titulo: 10px */}
                      <Eyebrow dark className="mb-[10px]">{`ETAPA ${step.num}`}</Eyebrow>
                      {/* 3: titulo -> corpo: 16px */}
                      <h3 className="font-serif text-display-m text-paper font-normal mb-[16px] group-hover:text-olive-h transition-colors duration-300 leading-tight">
                        <Balance>{step.title}</Balance>
                      </h3>
                      <p className="font-sans text-body-s text-cream/70 leading-relaxed max-w-[62ch] md:ml-auto">
                        <T>{step.desc}</T>
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer side for alternate grid alignment */}
                  <div className="hidden md:block md:w-[12%]" />
                  <div className="hidden md:block md:w-[44%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
