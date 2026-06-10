import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { T } from './T';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rAFId: number;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = window.scrollY / totalScroll;
        setScrollProgress(progress);
      }
    };

    const onScroll = () => {
      rAFId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0px';
    sentinel.style.height = '1px';
    sentinel.style.width = '1px';
    sentinel.style.pointerEvents = 'none';
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    }, { threshold: 0 });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => {
    const sections = ['home', 'metodo', 'resultados', 'sobre', 'faq', 'aplicar'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sectionElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: 'O método', href: '#metodo', id: 'metodo' },
    { label: 'Resultados', href: '#resultados', id: 'resultados' },
    { label: 'Quem sou eu', href: '#sobre', id: 'sobre' },
    { label: 'Perguntas', href: '#faq', id: 'faq' }
  ];

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById('aplicar');
    if (target) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center ${
          isScrolled ? 'scrolled' : 'bg-transparent border-b border-transparent'
        }`}
        aria-label="principal"
      >
        <div className="w-full max-w-content mx-auto px-6 md:px-10 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-[20px] font-normal tracking-tight text-ink hover:text-olive transition-colors whitespace-nowrap"
          >
            Monike <em className="text-olive not-italic italic font-normal">Alves</em>
          </a>

          {/* Links with gap and extra margin before CTA button */}
          <div className="hidden md:flex items-center gap-[clamp(24px,2.4vw,40px)]">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`font-sans text-body-s font-medium transition-all relative py-2 whitespace-nowrap ${
                  activeSection === link.id ? 'text-olive' : 'text-ink-2 hover:text-ink'
                }`}
              >
                <T>{link.label}</T>
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-olive rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#aplicar"
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center bg-olive text-paper hover:bg-olive-h px-5 py-2 rounded-full font-sans font-semibold text-body-s transition-all duration-300 min-h-[40px] whitespace-nowrap ml-[16px]"
            >
              <T>Aplique-se</T>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:text-olive focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-md flex flex-col pt-24 px-6 gap-6 md:hidden animate-fade-in">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`font-sans text-[22px] font-medium py-3 border-b border-cream whitespace-nowrap ${
                activeSection === link.id ? 'text-olive' : 'text-ink-2'
              }`}
            >
              <T>{link.label}</T>
            </a>
          ))}
          <a
            href="#aplicar"
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center bg-olive text-paper hover:bg-olive-h py-4 rounded-full font-sans font-semibold text-body-s mt-6 min-h-[44px] whitespace-nowrap"
          >
            <T>Aplique-se</T>
          </a>
        </div>
      )}
    </>
  );
};
