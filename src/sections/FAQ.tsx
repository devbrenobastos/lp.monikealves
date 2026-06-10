import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { T } from '../components/T';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Eyebrow } from '../components/Eyebrow';

export const FAQ: React.FC = () => {
  const revealRef = useReveal();

  const faqItems = [
    {
      id: "q1",
      q: "Já investi em tráfego antes e não deu certo. Por que agora seria diferente?",
      a: "Porque na maioria das vezes o problema não estava no anúncio, e sim no que vinha antes e depois dele: posicionamento e atendimento. Eu organizo o funil inteiro, não só a parte de mídia."
    },
    {
      id: "q2",
      q: "Quanto preciso investir em anúncios?",
      a: "Depende da sua cidade e do seu objetivo — definimos isso no diagnóstico, com base na sua realidade, sem te empurrar para um valor que não cabe."
    },
    {
      id: "q3",
      q: "Eu não tenho tempo para cuidar disso. Como funciona?",
      a: "Essa é a ideia. Eu cuido da estratégia e dos anúncios e treino seu time para a operação do dia a dia. Você foca em atender bem."
    },
    {
      id: "q4",
      q: "Atende clínica que está começando?",
      a: "Sim, desde que você esteja disposta a tratar como negócio. Definimos no diagnóstico se faz sentido começar agora."
    },
    {
      id: "q5",
      q: "Em quanto tempo vejo resultado?",
      a: "Os primeiros sinais costumam aparecer nas primeiras semanas, mas resultado consistente é construção. Eu trabalho com poucas clínicas justamente para acompanhar isso de perto."
    },
    {
      id: "q6",
      q: "O que está incluso?",
      a: "Gestão de tráfego, treinamento do time comercial e roteiro + edição dos criativos. O escopo exato a gente fecha depois do diagnóstico."
    },
    {
      id: "q7",
      q: "Como faço para começar?",
      a: "Você se candidata pelo botão, eu analiso sua clínica e, se fizer sentido para as duas, a gente conversa sobre os próximos passos."
    }
  ];

  return (
    <section id="faq" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-paper border-b border-cream content-visibility-auto">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 flex flex-col items-center gap-[40px] md:gap-[60px]"
      >
        {/* Centered header block */}
        <div className="reveal-item w-full max-w-[62ch] text-center flex flex-col items-center">
          <Eyebrow className="mb-[12px]">FAQ</Eyebrow>
          <h2 className="font-sans text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-light leading-tight">
            <T>Perguntas Frequentes</T>
          </h2>
        </div>

        {/* Accordions centered block */}
        <div className="reveal-item w-full max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="border-b border-cream py-1"
              >
                <AccordionTrigger className="font-sans font-medium text-[16px] md:text-[18px] text-ink hover:text-olive transition-colors py-[20px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-olive pr-4 text-left">
                  <T>{item.q}</T>
                </AccordionTrigger>
                <AccordionContent className="font-sans text-[16px] md:text-[15px] text-ink-2 leading-relaxed max-w-[62ch] pb-[20px]">
                  <T>{item.a}</T>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
