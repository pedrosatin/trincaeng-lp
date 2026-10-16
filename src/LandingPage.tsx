import React, { useMemo } from 'react';
import { ContactSection } from './components/ContactSection';
import { EngineeringNotebookSection } from './components/EngineeringNotebookSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ModalitiesSection } from './components/ModalitiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessTimelineSection } from './components/ProcessTimelineSection';
import { SimulatorSection } from './components/SimulatorSection';
import { SiteHeader } from './components/SiteHeader';
import { buildStructuredData } from './lib/structuredData';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  const structuredDataJson = useMemo(() => JSON.stringify(buildStructuredData()), []);

  return (
    <div className="trinca-lp">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />

      <SiteHeader />

      <main id="conteudo-principal">
        <HeroSection />
        <SimulatorSection />
        <ModalitiesSection />
        <PortfolioSection />
        <EngineeringNotebookSection />
        <ProcessTimelineSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
