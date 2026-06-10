import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ProportionLine } from '../components/ProportionLine';
import { Balance } from '../components/Balance';
import { T } from '../components/T';
import { Eyebrow } from '../components/Eyebrow';

export const CTAFinal: React.FC = () => {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    formacao: 'dentista',
    faturamento: '',
    trava: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ nome: '', whatsapp: '', cidade: '', formacao: 'dentista', faturamento: '', trava: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (err) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to WhatsApp
      const text = `Olá Monike, gostaria de me candidatar para a análise da minha clínica:\n\n` +
        `• Nome: ${formData.nome}\n` +
        `• WhatsApp: ${formData.whatsapp}\n` +
        `• Cidade: ${formData.cidade}\n` +
        `• Formação: ${formData.formacao}\n` +
        `• Faturamento: ${formData.faturamento}\n` +
        `• O que trava: ${formData.trava}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5581999999999?text=${encodedText}`; // Replace with actual WhatsApp number
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setSubmitStatus('success');
    }
  };

  return (
    <section id="aplicar" className="py-[clamp(56px,9vw,80px)] md:py-32 bg-panel border-b border-cream content-visibility-auto">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative"
      >
        {/* Visual Line Backdrop decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square opacity-5 pointer-events-none z-0">
          <ProportionLine strokeColor="var(--olive-d)" dotColor="var(--olive)" amberColor="var(--amber)" className="w-full h-full" />
        </div>

        {/* Left: Headline and secondary Whatsapp path (Left-aligned on mobile and desktop) */}
        <div className="reveal-item lg:col-span-6 relative z-10 text-left flex flex-col items-start">
          <Eyebrow className="mb-[12px]">PRÓXIMO PASSO</Eyebrow>
          <h2 className="font-serif text-[clamp(24px,5.8vw,36px)] md:text-[40px] text-ink font-normal leading-tight mb-[20px] text-wrap-balance">
            <T>Pronta para ser a referência da</T> <span className="inline-block"><T>sua cidade?</T></span>
          </h2>
          <p className="font-sans text-[16px] md:text-body-l text-ink-2 max-w-[62ch] mb-[40px] leading-relaxed text-wrap-balance text-left">
            <T>Se você chegou até aqui, já entendeu que talento sozinho não enche agenda. Candidate-se para uma análise da sua clínica. Eu olho sua operação e te mostro, sem compromisso, onde está o caminho para você atrair as pacientes certas e cobrar o que o seu trabalho vale.</T>
          </p>
 
          <div className="space-y-4 flex flex-col items-start w-full">
            <span className="block font-sans text-body-s text-ink-3 text-wrap-balance text-left">
              <T>Atendo poucas clínicas por vez para acompanhar cada uma de perto.</T>
            </span>
            <div className="flex flex-wrap items-center justify-start gap-4 w-full">
              <a 
                href="https://wa.me/5581999999999" // Replace with actual number
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-olive text-olive hover:bg-olive hover:text-paper px-6 py-3 rounded-full font-sans font-semibold text-body-s transition-all duration-300 min-h-[48px] w-full md:max-w-[280px]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current mr-2 flex-shrink-0">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.057 5.277 5.335 0 11.81 0c3.14 0 6.091 1.222 8.313 3.444 2.222 2.222 3.444 5.173 3.444 8.314-.004 6.533-5.28 11.81-11.755 11.81-2.006 0-3.978-.512-5.722-1.488L0 24zm6.49-5.114l.388.23c1.455.864 3.125 1.32 4.832 1.325 5.378 0 9.752-4.37 9.755-9.749a9.697 9.697 0 0 0-2.843-6.883 9.7 9.7 0 0 0-6.882-2.843c-5.385 0-9.758 4.371-9.762 9.75-.001 1.83.486 3.618 1.411 5.187l.254.43-1.002 3.662 3.754-.984zm9.85-5.263c-.27-.135-1.597-.788-1.845-.878-.248-.09-.429-.135-.61.135-.18.27-.697.878-.854 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.341-.803-.715-1.345-1.6-1.502-1.87-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.023-.472-.068-.135-.61-1.467-.835-2.007-.22-.527-.44-.455-.61-.464-.158-.008-.338-.009-.517-.009-.18 0-.473.067-.72.337-.248.27-.945.923-.945 2.25s.968 2.61 1.103 2.79c.135.18 1.903 2.905 4.61 4.07.644.278 1.148.444 1.54.568.647.206 1.237.177 1.703.107.519-.078 1.597-.653 1.822-1.283.226-.63.226-1.17.158-1.283-.068-.112-.248-.18-.518-.315z"/>
                </svg>
                <T>Falar no WhatsApp</T>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="reveal-item lg:col-span-6 relative z-10 w-full">
          <form 
            onSubmit={handleSubmit}
            className="bg-paper border border-cream p-6 md:p-8 rounded-[20px] shadow-sm space-y-5"
          >
            <h3 className="font-serif text-display-m text-ink font-normal mb-2 leading-tight text-left text-wrap-balance">
              <Balance>Formulário de aplicação</Balance>
            </h3>
            <p className="font-sans text-body-s text-ink-2 mb-6 text-left text-wrap-balance">
              <T>Preencha os dados abaixo para analisarmos a sua clínica.</T>
            </p>

            <div>
              <label htmlFor="nome" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                required 
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all text-left"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">WhatsApp</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp"
                  required 
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all text-left"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="cidade" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">Cidade / UF</label>
                <input 
                  type="text" 
                  id="cidade" 
                  name="cidade"
                  required 
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all text-left"
                  placeholder="Sua cidade"
                />
              </div>
            </div>

            <div>
              <label htmlFor="formacao" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">Sua formação</label>
              <select 
                id="formacao" 
                name="formacao"
                value={formData.formacao}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all text-left"
              >
                <option value="medica">Médica</option>
                <option value="dentista">Dentista</option>
                <option value="biomedica">Biomédica</option>
                <option value="outra">Outra formação</option>
              </select>
            </div>

            <div>
              <label htmlFor="faturamento" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">Faturamento médio atual</label>
              <input 
                type="text" 
                id="faturamento" 
                name="faturamento"
                required 
                value={formData.faturamento}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all text-left"
                placeholder="Ex: R$ 10.000 a R$ 30.000"
              />
            </div>

            <div>
              <label htmlFor="trava" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2 text-left">O que mais te trava hoje?</label>
              <textarea 
                id="trava" 
                name="trava"
                required 
                rows={3}
                value={formData.trava}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-[16px] text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all resize-none text-left"
                placeholder="Descreva seu maior desafio no comercial ou marketing"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-olive text-paper hover:bg-olive-h font-sans font-semibold py-4 rounded-full transition-all duration-300 shadow-sm disabled:opacity-50 min-h-[44px]"
            >
              {isSubmitting ? 'Enviando aplicação...' : 'Enviar Aplicação'}
            </button>

            {submitStatus === 'success' && (
              <p className="font-sans text-body-s text-olive-d font-semibold text-left mt-2">
                Aplicação enviada com sucesso! Analisaremos em breve.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="font-sans text-body-s text-terra font-semibold text-left mt-2">
                Ocorreu um erro ao enviar. Tente novamente ou fale no WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
