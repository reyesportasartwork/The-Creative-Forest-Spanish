import React, { useState } from 'react';
import logo from './assets/images/creative_forest_logo.jpeg';
import reyesPhoto from './assets/images/reyes_photo.jpg';
import reyesFelpaPhoto from './assets/images/Captura%20de%20pantalla%202026-09-22%20195735.png';
import felpaPhoto from './assets/images/felpa_foto.png';
import creationsBanner from './assets/images/creaciones_banner.png';
import almaDelTallerPhoto from './assets/images/alma_del_taller.png';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProposalSection } from './components/ProposalSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhatKidsCanDoSection } from './components/WhatKidsCanDoSection';
import { MethodCrearSection } from './components/MethodCrearSection';
import { ReadingClubSection } from './components/ReadingClubSection';
import { AboutReyesSection } from './components/AboutReyesSection';
import { TrustSection } from './components/TrustSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

// Rutas de imágenes alojadas en la carpeta /public extraídas de los archivos subidos
export const PUBLIC_ASSETS = {
 logo,
  reyesPhoto,
  reyesFelpaPhoto,
  felpaPhoto,
  creationsBanner,
  almaDelTallerPhoto,
};

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div id="landing-page-root" className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1D1B1B]">
        
        {/* Primary Navigation in Variation 4 Style with Logo */}
        <Navbar onOpenContact={handleOpenContact} logo={PUBLIC_ASSETS.logo} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          
          {/* Section 1: Hero con Banner Dinámico no estático con Logo, Reyes, Felpa y Creaciones */}
          <Hero onOpenContact={handleOpenContact} assets={PUBLIC_ASSETS} />

          {/* Section 2: El Problema (Addressing parents warmly) */}
          <ProblemSection />

          {/* Section 3: La Propuesta (Variation 4 "El niño no solo aprende; crea." + Cuentos, Arte, Exploración) */}
          <ProposalSection />

          {/* Section 4: Cómo Funciona (Process & Flexible Real Classroom Cases) */}
          <HowItWorksSection />

          {/* Section 5: Qué Puede Hacer el Niño & Banner de Lo Creado */}
          <WhatKidsCanDoSection creationsBanner={PUBLIC_ASSETS.creationsBanner} />

          {/* Section 6: Mi Enfoque (El Método CREAR) */}
          <MethodCrearSection />

          {/* Section 7: Club de Lectura en YouTube (Free Entryway) */}
          <ReadingClubSection onOpenContact={handleOpenContact} />

          {/* Section 8: Sobre Reyes y su compañero Felpa */}
          <AboutReyesSection
            reyesPhoto={PUBLIC_ASSETS.reyesFelpaPhoto}
            felpaPhoto={PUBLIC_ASSETS.felpaPhoto}
          />

          {/* Section 9: Confianza (Credentials & Child Safety Guarantee) */}
          <TrustSection />

          {/* Section 10: Testimonios de Familias (Parent Testimonials Carousel with Reviews & Replies) */}
          <TestimonialsSection />

          {/* Section 11: CTA Final (Variation 4 Card with 40px rounded corners & Contactar con Reyes) */}
          <FinalCtaSection onOpenContact={handleOpenContact} />

          {/* Footer with Newsletter for Parents & Variation 4 Copyright Signature */}
          <Footer onOpenContact={handleOpenContact} logo={PUBLIC_ASSETS.logo} />

        </main>

        {/* Interactive Contact Dialog */}
        <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
      </div>
    </LanguageProvider>
  );
}
