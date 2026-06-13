import { Hero } from './sections/Hero';
import { Dor } from './sections/Dor';
import { Virada } from './sections/Virada';
import { Solucao } from './sections/Solucao';
import { ComoFunciona } from './sections/ComoFunciona';
import { PorQueMonike } from './sections/PorQueMonike';
import { Resultados } from './sections/Resultados';
import { QuemSouEu } from './sections/QuemSouEu';
import { ParaQuemE } from './sections/ParaQuemE';
import { FAQ } from './sections/FAQ';
import { CTAFinal } from './sections/CTAFinal';

import { Navigation } from './components/Navigation';

function App() {
  return (
    <main className="min-h-screen bg-paper antialiased select-none selection:bg-olive/20 selection:text-ink pt-[72px]">
      <Navigation />
      <Hero />
      <Dor />
      <Virada />
      <Solucao />
      <ComoFunciona />
      <PorQueMonike />
      <Resultados />
      <QuemSouEu />
      <ParaQuemE />
      <FAQ />
      <CTAFinal />
      <footer className="py-6 border-t border-cream bg-paper text-ink-3 font-sans text-[12px] opacity-75 select-text">
        <div className="max-w-content mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Monike Alves. Todos os direitos reservados.</span>
          <span>
            Feito por{' '}
            <a 
              href="https://www.instagram.com/brenobastos.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-olive hover:text-olive-d font-semibold transition-colors"
            >
              Breno Bastos
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
