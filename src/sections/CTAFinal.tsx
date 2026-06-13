import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { ProportionLine } from '../components/ProportionLine';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const CTAFinal: React.FC = () => {
  const revealRef = useReveal();

  const whatsappUrl = "https://wa.me/556596679578?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais";

  return (
    <section id="aplicar" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-panel border-b border-cream relative overflow-hidden">
      {/* Visual Line Backdrop decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square opacity-5 pointer-events-none z-0">
        <ProportionLine strokeColor="var(--olive-d)" dotColor="var(--olive)" amberColor="var(--amber)" className="w-full h-full" />
      </div>

      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 relative z-10 text-center flex flex-col items-center"
      >
        <div className="reveal-item max-w-[700px] flex flex-col items-center">
          <Eyebrow className="mb-[16px]">PRÓXIMO PASSO</Eyebrow>
          <h2 className="font-serif text-[clamp(28px,6vw,44px)] text-ink font-normal leading-tight mb-[24px] text-wrap-balance">
            <T>Pronta para ser a referência da</T> <em className="text-olive not-italic italic font-normal"><T>sua cidade?</T></em>
          </h2>
          <p className="font-sans text-[16px] md:text-body-l text-ink-2 mb-[40px] leading-relaxed text-wrap-balance">
            <T>Se você chegou até aqui, já entendeu que talento sozinho não enche agenda. Fale comigo no WhatsApp para fazermos uma análise da sua clínica. Eu olho sua operação e te mostro, sem compromisso, onde está o caminho para você atrair as pacientes certas e cobrar o que o seu trabalho vale.</T>
          </p>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-olive text-paper hover:bg-olive-d px-8 py-4 rounded-[10px] font-sans font-semibold text-[16px] transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 shadow-md min-h-[48px] w-full sm:w-auto min-w-[280px]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-2 flex-shrink-0">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.057 5.277 5.335 0 11.81 0c3.14 0 6.091 1.222 8.313 3.444 2.222 2.222 3.444 5.173 3.444 8.314-.004 6.533-5.28 11.81-11.755 11.81-2.006 0-3.978-.512-5.722-1.488L0 24zm6.49-5.114l.388.23c1.455.864 3.125 1.32 4.832 1.325 5.378 0 9.752-4.37 9.755-9.749a9.697 9.697 0 0 0-2.843-6.883 9.7 9.7 0 0 0-6.882-2.843c-5.385 0-9.758 4.371-9.762 9.75-.001 1.83.486 3.618 1.411 5.187l.254.43-1.002 3.662 3.754-.984zm9.85-5.263c-.27-.135-1.597-.788-1.845-.878-.248-.09-.429-.135-.61.135-.18.27-.697.878-.854 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.341-.803-.715-1.345-1.6-1.502-1.87-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.61-1.467-.835-2.007-.22-.527-.44-.455-.61-.464-.158-.008-.338-.009-.517-.009-.18 0-.473.067-.72.337-.248.27-.945.923-.945 2.25s.968 2.61 1.103 2.79c.135.18 1.903 2.905 4.61 4.07.644.278 1.148.444 1.54.568.647.206 1.237.177 1.703.107.519-.078 1.597-.653 1.822-1.283.226-.63.226-1.17.158-1.283-.068-.112-.248-.18-.518-.315z"/>
              </svg>
              <span><T>Falar no WhatsApp</T></span>
            </a>
            <span className="block font-sans text-body-s text-ink-3">
              <T>Atendo poucas clínicas por vez para acompanhar cada uma de perto.</T>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
