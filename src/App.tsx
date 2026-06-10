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
    </main>
  );
}

export default App;
