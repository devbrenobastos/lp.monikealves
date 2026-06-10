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
      // Fallback fallback to WhatsApp
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
    <section id="aplicar" className="py-20 md:py-32 bg-panel border-b border-cream">
      <div 
        ref={revealRef}
        className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative"
      >
        {/* Visual Line Signature Framed Backdrop decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square opacity-5 pointer-events-none z-0">
          <ProportionLine strokeColor="var(--olive-d)" dotColor="var(--olive)" amberColor="var(--amber)" className="w-full h-full" />
        </div>

        {/* Left: Headline and secondary Whatsapp path */}
        <div className="reveal-item lg:col-span-6 relative z-10">
          <Eyebrow className="mb-[12px]">PRÓXIMO PASSO</Eyebrow>
          <h2 className="font-serif text-display-l text-ink font-normal leading-tight mb-[20px]">
            <T>Pronta para ser a referência da sua cidade?</T>
          </h2>
          <p className="font-sans text-body-l text-ink-2 max-w-[62ch] mb-[40px] leading-relaxed">
            <T>Se você chegou até aqui, já entendeu que talento sozinho não enche agenda. Candidate-se para uma análise da sua clínica. Eu olho sua operação e te mostro, sem compromisso, onde está o caminho para você atrair as pacientes certas e cobrar o que o seu trabalho vale.</T>
          </p>

          <div className="space-y-4">
            <span className="block font-sans text-body-s text-ink-3">
              <T>Atendo poucas clínicas por vez para acompanhar cada uma de perto.</T>
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://wa.me/5581999999999" // Replace with actual number
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-olive text-olive hover:bg-olive hover:text-paper px-6 py-3 rounded-full font-sans font-semibold text-body-s transition-all duration-300 min-h-[44px]"
              >
                <T>Falar no WhatsApp</T>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="reveal-item lg:col-span-6 relative z-10">
          <form 
            onSubmit={handleSubmit}
            className="bg-paper border border-cream p-8 rounded-[20px] shadow-sm space-y-5"
          >
            <h3 className="font-serif text-display-m text-ink font-normal mb-2 leading-tight">
              <Balance>Formulário de aplicação</Balance>
            </h3>
            <p className="font-sans text-body-s text-ink-2 mb-6">
              <T>Preencha os dados abaixo para analisarmos a sua clínica.</T>
            </p>

            <div>
              <label htmlFor="nome" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                required 
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="whatsapp" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp"
                  required 
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="cidade" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">Cidade / UF</label>
                <input 
                  type="text" 
                  id="cidade" 
                  name="cidade"
                  required 
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all"
                  placeholder="Sua cidade"
                />
              </div>
            </div>

            <div>
              <label htmlFor="formacao" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">Sua formação</label>
              <select 
                id="formacao" 
                name="formacao"
                value={formData.formacao}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all"
              >
                <option value="medica">Médica</option>
                <option value="dentista">Dentista</option>
                <option value="biomedica">Biomédica</option>
                <option value="outra">Outra formação</option>
              </select>
            </div>

            <div>
              <label htmlFor="faturamento" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">Faturamento médio atual</label>
              <input 
                type="text" 
                id="faturamento" 
                name="faturamento"
                required 
                value={formData.faturamento}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all"
                placeholder="Ex: R$ 10.000 a R$ 30.000"
              />
            </div>

            <div>
              <label htmlFor="trava" className="block font-mono text-[11px] text-ink-2 uppercase tracking-wider mb-2">O que mais te trava hoje?</label>
              <textarea 
                id="trava" 
                name="trava"
                required 
                rows={3}
                value={formData.trava}
                onChange={handleInputChange}
                className="w-full bg-panel border border-cream rounded-[8px] px-4 py-3 font-sans text-body text-ink focus:outline-none focus:ring-1 focus:ring-olive focus:border-olive transition-all resize-none"
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
              <p className="font-sans text-body-s text-olive-d font-semibold text-center mt-2">
                Aplicação enviada com sucesso! Analisaremos em breve.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="font-sans text-body-s text-terra font-semibold text-center mt-2">
                Ocorreu um erro ao enviar. Tente novamente ou fale no WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
