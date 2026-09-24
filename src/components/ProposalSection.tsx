import React, { useState } from 'react';
import { BookOpen, Palette, Compass, Sparkles, MessageCircle } from 'lucide-react';
import { PROPOSAL_PILLARS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ProposalSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.proposal;
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getIcon = (id: string) => {
    switch (id) {
      case 'read':
        return <BookOpen className="w-6 h-6 text-[#E86A33]" />;
      case 'speak':
        return <MessageCircle className="w-6 h-6 text-[#E86A33]" />;
      case 'create':
        return <Palette className="w-6 h-6 text-[#E86A33]" />;
      case 'imagine':
        return <Sparkles className="w-6 h-6 text-[#E86A33]" />;
      case 'explore':
        return <Compass className="w-6 h-6 text-[#E86A33]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#E86A33]" />;
    }
  };

  const getPillarTitle = (id: string) => {
    switch (id) {
      case 'read':
        return language === 'es' ? 'Cuentos y lectura' : 'Stories & Reading';
      case 'speak':
        return language === 'es' ? 'Conversación viva' : 'Living Conversation';
      case 'create':
        return language === 'es' ? 'Arte y dibujo' : 'Art & Drawing';
      case 'imagine':
        return language === 'es' ? 'Imaginación' : 'Imagination';
      case 'explore':
        return language === 'es' ? 'Ciencia y naturaleza' : 'Science & Nature';
      default:
        return '';
    }
  };

  const getPillarDesc = (id: string) => {
    switch (id) {
      case 'read':
        return language === 'es'
          ? 'Historias ilustradas y relatos que despiertan la curiosidad innata.'
          : 'Illustrated tales and stories that spark innate curiosity.';
      case 'speak':
        return language === 'es'
          ? 'Preguntas abiertas y diálogo natural adaptado al ritmo de cada niño.'
          : 'Open-ended questions and natural dialogue adapted to each child’s pace.';
      case 'create':
        return language === 'es'
          ? 'Pintura, ilustración y modelado como herramientas de comprensión.'
          : 'Painting, illustration, and sculpture as tools for deep comprehension.';
      case 'imagine':
        return language === 'es'
          ? 'Construcción de historias propias y nuevos desenlaces.'
          : 'Crafting original stories and imaginative new endings.';
      case 'explore':
        return language === 'es'
          ? 'Curiosidad por los seres vivos, los bosques y pequeños experimentos.'
          : 'Curiosity about living creatures, forests, and gentle experiments.';
      default:
        return '';
    }
  };

  const getPillarBenefit = (id: string) => {
    switch (id) {
      case 'read':
        return language === 'es'
          ? 'Partimos de un fragmento o cuento tradicional para descubrir palabras vivas, personajes y matices culturales.'
          : 'We start from an excerpt or rich picture book to uncover living vocabulary, characters, and cultural nuances.';
      case 'speak':
        return language === 'es'
          ? 'Sin presiones ni exámenes. El español se convierte en el puente para expresar opiniones, sensaciones y descubrimientos.'
          : 'No pressure or tests. Spanish becomes the bridge for expressing thoughts, feelings, and discoveries.';
      case 'create':
        return language === 'es'
          ? 'Dibujar una escena o dar vida a un personaje consolida el vocabulario de forma multisensorial y memorable.'
          : 'Drawing a scene or giving life to a character cements vocabulary multisensorially and memorably.';
      case 'imagine':
        return language === 'es'
          ? 'Los niños inventan qué sucede después, idean mundos fantásticos y toman decisiones narrativas usando el idioma.'
          : 'Children imagine what happens next, design fantasy worlds, and make storytelling choices in Spanish.';
      case 'explore':
        return language === 'es'
          ? 'Observar hojas, animales o fenómenos naturales mientras aprenden terminología científica y descriptiva en español.'
          : 'Observing leaves, animals, or natural phenomena while learning scientific and descriptive vocabulary.';
      default:
        return '';
    }
  };

  return (
    <section
      id="propuesta"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Variation 4 Headline and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>

          <h2 className="section-title text-center">
            {t.title[language]}
          </h2>

          <p className="text-body text-center text-lg sm:text-xl text-[#444444] max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* 3 Core Pillars in Variation 4 HTML Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              {t.threePillars.read.title[language]}
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              {t.threePillars.read.desc[language]}
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              {t.threePillars.create.title[language]}
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              {t.threePillars.create.desc[language]}
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              {t.threePillars.explore.title[language]}
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              {t.threePillars.explore.desc[language]}
            </p>
          </div>
        </div>

        {/* Extended 5-Pillar Tabs with Detailed Exploration */}
        <div className="bg-[#F8F7F4] rounded-[40px] p-6 sm:p-10 border border-[#E5E2DC]">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <h4 className="font-gaegu text-2xl sm:text-3xl text-[#1D1B1B] font-bold">
              {t.tabsTitle[language]}
            </h4>
            <span className="font-sans text-xs text-[#666] font-medium">
              {language === 'es' ? 'Haz clic para explorar cada dimensión' : 'Click to explore each dimension'}
            </span>
          </div>

          {/* Pill Selector */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {PROPOSAL_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedPillar(idx)}
                className={`px-4 py-2 rounded-full font-gaegu text-xl transition-all cursor-pointer ${
                  selectedPillar === idx
                    ? 'bg-[#E86A33] text-white shadow-sm scale-105'
                    : 'bg-white text-[#1D1B1B] border border-[#E5E2DC] hover:border-[#E86A33]'
                }`}
              >
                {getPillarTitle(pillar.id)}
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2DC] flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#FFC947]/20 flex items-center justify-center shrink-0">
              {getIcon(PROPOSAL_PILLARS[selectedPillar].id)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#E86A33]">
                  {PROPOSAL_PILLARS[selectedPillar].subtitle}
                </span>
                <span className="text-[#888]">·</span>
                <span className="font-sans text-xs text-[#666]">
                  {language === 'es'
                    ? `Pilar ${selectedPillar + 1} de 5`
                    : `Pillar ${selectedPillar + 1} of 5`}
                </span>
              </div>
              <h5 className="font-gaegu text-3xl text-[#1D1B1B] font-bold mb-2">
                {getPillarTitle(PROPOSAL_PILLARS[selectedPillar].id)}
              </h5>
              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-3">
                {getPillarDesc(PROPOSAL_PILLARS[selectedPillar].id)}
              </p>
              <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E2DC] font-sans text-sm text-[#444]">
                <strong className="text-[#E86A33]">
                  {language === 'es' ? 'En la práctica:' : 'In practice:'}
                </strong>{' '}
                {getPillarBenefit(PROPOSAL_PILLARS[selectedPillar].id)}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
