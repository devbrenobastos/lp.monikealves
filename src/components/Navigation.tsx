import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { T } from './T';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

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
    const sections = ['home', 'metodo', 'resultados', 'quem-sou-eu', 'faq', 'aplicar'];
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Focus trapping and Escape key closure for accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus close button inside menu when opened
    const timer = setTimeout(() => {
      const closeBtn = menuRef.current?.querySelector('[aria-label="Fechar menu"]') as HTMLElement;
      closeBtn?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'O método', href: '#metodo', id: 'metodo' },
    { label: 'Resultados', href: '#resultados', id: 'resultados' },
    { label: 'Quem sou eu', href: '#quem-sou-eu', id: 'quem-sou-eu' },
    { label: 'Perguntas', href: '#faq', id: 'faq' }
  ];

  const scrollSmoothTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/556596684611?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais";

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => scrollSmoothTo(id), 280); // Wait for transition to complete
    } else {
      scrollSmoothTo(id);
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

          {/* Links for Desktop */}
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
              href="https://wa.me/556596684611?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais"
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center bg-olive text-paper hover:bg-olive-h px-5 py-2 rounded-full font-sans font-semibold text-body-s transition-all duration-300 min-h-[40px] whitespace-nowrap ml-[16px]"
            >
              <T>Aplique-se</T>
            </a>
          </div>

          <button
            ref={toggleBtnRef}
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-ink hover:text-olive focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Redesigned from Scratch */}
      <div 
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-0 z-[100] bg-paper flex flex-col md:hidden transition-all duration-300 ease-out origin-top-right ${
          mobileMenuOpen 
            ? 'opacity-100 translate-x-0 pointer-events-auto' 
            : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!mobileMenuOpen}
      >
        {/* Header inside the panel overlay to match the nav height & keep layout consistent */}
        <div className="h-[72px] flex items-center justify-between px-6 border-b border-cream">
          <span className="font-serif text-[20px] font-normal tracking-tight text-ink">
            Monike <em className="text-olive not-italic italic font-normal">Alves</em>
          </span>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              toggleBtnRef.current?.focus();
            }}
            className="p-2 text-ink hover:text-olive focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable menu content starts below the header */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-sans text-[20px] font-medium py-4 border-b border-cream whitespace-nowrap min-h-[52px] flex items-center transition-colors ${
                  activeSection === link.id ? 'text-olive font-semibold' : 'text-ink-2 hover:text-ink'
                }`}
              >
                <T>{link.label}</T>
              </a>
            ))}
          </div>

          <div className="mt-8 pb-8">
            <a
              href="https://wa.me/556596684611?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais"
              onClick={handleApplyClick}
              className="w-full inline-flex items-center justify-center bg-olive text-paper hover:bg-olive-h py-4 rounded-[10px] font-sans font-semibold text-[16px] min-h-[48px] whitespace-nowrap transition-colors"
            >
              <T>Aplique-se</T>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
