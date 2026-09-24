import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, Pause, Play, Heart, Palette, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface DynamicBannerAssets {
  logo: string;
  reyesPhoto: string;
  felpaPhoto: string;
  creationsBanner: string;
  almaDelTallerPhoto?: string;
}

interface DynamicHeroBannerProps {
  assets: DynamicBannerAssets;
  onOpenContact?: () => void;
}

export const DynamicHeroBanner: React.FC<DynamicHeroBannerProps> = ({ assets, onOpenContact }) => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 'brand-logo',
      tabLabel: language === 'es' ? '✦ The Creative Forest' : '✦ The Creative Forest',
      tag: language === 'es' ? 'Proyecto Oficial' : 'Official Project',
      title: 'The Creative Forest',
      subtitle: 'Art • Nature • Science',
      desc:
        language === 'es'
          ? 'Un santuario educativo donde el español florece a través del arte, las historias vivas y el descubrimiento de la naturaleza.'
          : 'A creative sanctuary where children learn and embrace Spanish through hands-on art, living stories, and the wonder of nature.',
      badgeHighlight: language === 'es' ? 'Español vivo y experiencial' : 'Living, experiential Spanish',
    },
    {
      id: 'reyes-felpa',
      tabLabel: language === 'es' ? '✦ Reyes & Felpa' : '✦ Reyes & Felpa',
      tag: language === 'es' ? 'El Alma del Taller' : 'The Heart of the Studio',
      title: language === 'es' ? 'Reyes y Felpa en el Taller' : 'Reyes & Felpa in the Studio',
      subtitle: language === 'es' ? 'Acompañamiento cercano y lúdico' : 'Warm, joyful guidance',
      desc:
        language === 'es'
          ? 'Reyes guía cada sesión con sensibilidad artística mientras Felpa, nuestro entrañable personaje, anima a los peques a expresarse con total confianza y sin miedo a equivocarse.'
          : 'Reyes mentors each session with artistic sensibility while Felpa, our beloved puppet friend, encourages children to speak freely without fear of making mistakes.',
      badgeHighlight: language === 'es' ? 'Vínculo afectivo con el idioma' : 'Emotional bond with Spanish',
    },
    {
      id: 'creaciones',
      tabLabel: language === 'es' ? '✦ Trabajos de Alumnos' : '✦ Student Works',
      tag: language === 'es' ? 'Trabajos de Alumnos del Taller' : 'Student Artwork Showcase',
      title: language === 'es' ? 'Lo Creado en The Creative Forest' : 'Created in The Creative Forest',
      subtitle: language === 'es' ? 'Obras reales creadas por los alumnos' : 'Real student art and story projects',
      desc:
        language === 'es'
          ? 'Acuarelas marinas, los cuatro elementos, máscaras de personajes y proyectos de volumen: cada obra nace de la creatividad del alumno usando el español como medio natural.'
          : 'Seascapes, the four natural elements, character masks, and papercraft: each piece crafted by students expressing themselves naturally in Spanish.',
      badgeHighlight: language === 'es' ? '14 Proyectos Reales' : '14 Real Projects',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.div
      id="dynamic-hero-banner"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-4xl mx-auto mb-10 w-full"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Outer Card with layered border & subtle glow */}
      <div className="relative bg-gradient-to-br from-white via-[#FCFBF7] to-[#F5F2EA] border-2 border-[#E5E2DC] rounded-[36px] sm:rounded-[44px] p-5 sm:p-7 shadow-md overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC947]/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E86A33]/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

        {/* Top Control Bar: Tabs & Play/Pause */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#EAE7E0] flex-wrap">
          {/* Slide Navigation Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`font-sans text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  currentSlide === idx
                    ? 'bg-[#1D1B1B] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-[#555] border border-[#E5E2DC]'
                }`}
              >
                <span>{s.tabLabel}</span>
              </button>
            ))}
          </div>

          {/* Controls: Prev / Play / Next */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Diapositiva anterior"
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#555] hover:text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente diapositiva"
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[220px]"
            >
              {/* Visual: Logo Emblem with subtle fade-in-up - Larger & perfectly centered */}
              <div className="md:col-span-5 flex flex-col items-center justify-center py-2">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  className="relative group flex items-center justify-center"
                >
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full bg-white border-2 border-[#E5E2DC] p-2 sm:p-2.5 shadow-md flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
                    <img
                      src={encodeURI(assets.logo)}
                      alt="The Creative Forest Logo - Art, Nature, Science"
                      onError={(e) => {
                        e.currentTarget.src = '/the_creative_forest_logo.jpeg';
                      }}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 bg-[#2D4030] text-[#FFC947] text-[11px] sm:text-xs font-bold font-sans uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    Art • Nature • Science
                  </div>
                </motion.div>
              </div>

              {/* Text Information */}
              <div className="md:col-span-7 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 mb-1.5 text-[#E86A33]">
                  <Sparkles className="w-4 h-4 text-[#E86A33]" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">
                    {slides[0].tag}
                  </span>
                </div>
                <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-none mb-1">
                  {slides[0].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#E86A33] mb-3">
                  {slides[0].subtitle}
                </p>
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                  {slides[0].desc}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#2D4030]/10 text-[#2D4030] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <span>✦</span>
                    <span>{slides[0].badgeHighlight}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#FFC947]/30 text-[#1D1B1B] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <Palette className="w-3.5 h-3.5 text-[#E86A33]" />
                    <span>{language === 'es' ? 'Cuentos, Arte & Ciencias' : 'Stories, Art & Science'}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[220px]"
            >
              {/* Visual: Reyes & Felpa dual photo display with the new photo */}
              <div className="md:col-span-5 flex items-center justify-center gap-3 sm:gap-4.5 py-1">
                {/* Reyes Card with subtle fade-in-up */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-28 h-36 sm:w-32 sm:h-42 md:w-36 md:h-46 rounded-2xl overflow-hidden border-2 border-[#E5E2DC] shadow-md bg-white group hover:scale-105 transition-transform flex items-center justify-center">
                    <img
                      src={encodeURI(assets.almaDelTallerPhoto || assets.reyesPhoto)}
                      alt="Reyes Portas"
                      onError={(e) => {
                        e.currentTarget.src = '/ChatGPT Image Sep 24, 2026, 11_31_56 AM.png';
                      }}
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-2 font-gaegu text-lg sm:text-xl font-bold text-[#1D1B1B]">
                    Reyes Portas
                  </span>
                  <span className="text-[11px] font-sans text-[#E86A33] font-bold">
                    {language === 'es' ? 'Artista & Profe' : 'Artist & Educator'}
                  </span>
                </motion.div>

                {/* Friendly Heart / Connector */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFC947]/40 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#E86A33]" />
                </div>

                {/* Felpa Card with subtle fade-in-up */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.16 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-28 h-36 sm:w-32 sm:h-42 md:w-36 md:h-46 rounded-2xl overflow-hidden border-2 border-[#E5E2DC] shadow-md bg-white group hover:scale-105 transition-transform flex items-center justify-center">
                    <img
                      src={encodeURI(assets.felpaPhoto)}
                      alt="Felpa - Amigo del taller"
                      onError={(e) => {
                        e.currentTarget.src = '/felpa_foto.png';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-2 font-gaegu text-lg sm:text-xl font-bold text-[#1D1B1B]">
                    Felpa 🐾
                  </span>
                  <span className="text-[11px] font-sans text-[#2D4030] font-bold">
                    {language === 'es' ? 'Compañero Fiel' : 'Studio Companion'}
                  </span>
                </motion.div>
              </div>

              {/* Text Information */}
              <div className="md:col-span-7 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 mb-1.5 text-[#E86A33]">
                  <Sparkles className="w-4 h-4 text-[#E86A33]" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">
                    {slides[1].tag}
                  </span>
                </div>
                <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-none mb-1">
                  {slides[1].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#E86A33] mb-3">
                  {slides[1].subtitle}
                </p>
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                  {slides[1].desc}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFC947]/30 text-[#1D1B1B] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <span>✦</span>
                    <span>{slides[1].badgeHighlight}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2D4030]/10 text-[#2D4030] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <BookOpen className="w-3.5 h-3.5 text-[#2D4030]" />
                    <span>{language === 'es' ? 'Cuentacuentos & Diálogo vivo' : 'Storytelling & Natural Dialogue'}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col gap-4 min-h-[220px]"
            >
              {/* Banner Showcase Area with Zoom effect & subtle fade-in-up */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
                className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E5E2DC] shadow-sm bg-white group"
              >
                <img
                  src={encodeURI(assets.creationsBanner)}
                  alt="Creaciones de The Creative Forest por Reyes"
                  onError={(e) => {
                    e.currentTarget.src = '/creaciones_banner.png';
                  }}
                  className="w-full h-auto max-h-[220px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E5E2DC] shadow-xs flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#E86A33]" />
                  <span className="font-sans text-[11px] font-bold text-[#1D1B1B]">
                    {language === 'es' ? 'Creaciones Reales del Taller' : 'Studio Creations Showcase'}
                  </span>
                </div>
              </motion.div>

              {/* Banner Caption & Description */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div>
                  <h4 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-none mb-1 text-center sm:text-left">
                    {slides[2].title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#555] max-w-xl text-center sm:text-left">
                    {slides[2].desc}
                  </p>
                </div>
                {onOpenContact && (
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="shrink-0 btn-accent text-sm py-2 px-5 shadow-xs font-sans font-bold"
                  >
                    <span>{language === 'es' ? 'Crear en Español' : 'Create in Spanish'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#EAE7E0]/60">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Ir a diapositiva ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? 'w-8 bg-[#E86A33]' : 'w-2 bg-[#D0CCC3] hover:bg-[#B0ACA3]'
              }`}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};
