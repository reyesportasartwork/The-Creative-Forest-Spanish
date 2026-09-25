import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, Pause, Play, Heart, Palette, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assets';

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
      id: 'reyes-felpa',
      tabLabel: language === 'es' ? '✦ El Alma del Taller: Reyes & Felpa 🐾' : '✦ The Heart: Reyes & Felpa 🐾',
      tag: language === 'es' ? 'El Alma del Taller' : 'The Heart of the Studio',
      title: language === 'es' ? 'Reyes y Felpa en el Taller' : 'Reyes & Felpa in the Studio',
      subtitle: language === 'es' ? 'Acompañamiento cercano, afectivo y lleno de juego' : 'Warm, joyful guidance & playful companionship',
      desc:
        language === 'es'
          ? 'Reyes guía cada sesión con sensibilidad artística y calidez, mientras Felpa, nuestra querida copilota en las clases, anima a los peques a expresarse con total confianza, reír y hablar en español sin miedo a equivocarse.'
          : 'Reyes mentors each session with artistic sensibility and warmth, while Felpa, our beloved classroom co-pilot, encourages children to speak freely, laugh, and practice Spanish without hesitation.',
      badgeHighlight: language === 'es' ? 'Vínculo afectivo con el idioma' : 'Emotional bond with Spanish',
    },
    {
      id: 'creaciones',
      tabLabel: language === 'es' ? '✦ Trabajos de Alumnos (Lo Creado)' : '✦ Student Works (Creations)',
      tag: language === 'es' ? 'Lo Creado en el Taller' : 'Created in the Studio',
      title: language === 'es' ? 'Trabajos de Alumnos de The Creative Forest' : 'Student Works in The Creative Forest',
      subtitle: language === 'es' ? 'Obras reales creadas por los niños en directo' : 'Real student art and story projects',
      desc:
        language === 'es'
          ? 'Acuarelas marinas, los cuatro elementos, girasoles botánicos, máscaras, cómic y maquetas: cada obra nace de la creatividad en vivo de los niños en directo usando el español con naturalidad y orgullo.'
          : 'Seascapes, the four natural elements, botanical sunflowers, superhero masks, comics, and papercraft: each piece crafted live by students expressing themselves naturally in Spanish.',
      badgeHighlight: language === 'es' ? '37 Obras y Momentos Reales' : '37 Real Student Works',
    },
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
                className={`font-sans text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
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
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#555] hover:text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente diapositiva"
              className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:bg-[#F5F2EA] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          {/* SLIDE 0: REYES Y FELPA (EL ALMA DEL TALLER) */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-reyes-felpa"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[220px] w-full"
            >
              {/* Visual: Reyes & Felpa dual photo display with proper spacing */}
              <div className="w-full lg:col-span-5 flex items-center justify-center gap-3 sm:gap-4 py-2 shrink-0">
                {/* Reyes Card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
                  className="flex flex-col items-center group shrink-0"
                >
                  <div className="relative w-28 h-36 sm:w-32 sm:h-42 lg:w-32 lg:h-42 xl:w-36 xl:h-46 rounded-2xl overflow-hidden border-2 border-[#E5E2DC] shadow-md bg-white hover:scale-105 transition-all duration-300">
                    <img
                      src={getAssetUrl(assets.almaDelTallerPhoto || assets.reyesPhoto)}
                      alt="Reyes Portas - Directora y profe"
                      onError={(e) => {
                        e.currentTarget.src = getAssetUrl('alma_del_taller.png');
                      }}
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-[#2D4030]/90 backdrop-blur-xs text-[#FFC947] text-[10px] font-sans font-bold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                      {language === 'es' ? 'Directora y profe' : 'Director & Teacher'}
                    </div>
                  </div>
                  <span className="mt-2 font-gaegu text-xl sm:text-2xl font-bold text-[#1D1B1B]">
                    Reyes Portas
                  </span>
                  <span className="text-[11px] font-sans text-[#E86A33] font-bold">
                    {language === 'es' ? 'Directora y profe' : 'Director & Teacher'}
                  </span>
                </motion.div>

                {/* Friendly Heart & Connector */}
                <div className="flex flex-col items-center gap-1 shrink-0 px-0.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFC947]/40 border border-[#E86A33]/20 flex items-center justify-center shadow-xs">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#E86A33] fill-[#E86A33]" />
                  </div>
                  <span className="text-[10px] font-sans font-bold text-[#888] uppercase tracking-wider">
                    {language === 'es' ? 'Dúo' : 'Duo'}
                  </span>
                </div>

                {/* Felpa Card */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.16 }}
                  className="flex flex-col items-center group shrink-0"
                >
                  <div className="relative w-28 h-36 sm:w-32 sm:h-42 lg:w-32 lg:h-42 xl:w-36 xl:h-46 rounded-2xl overflow-hidden border-2 border-[#E5E2DC] shadow-md bg-white hover:scale-105 transition-all duration-300">
                    <img
                      src={getAssetUrl(assets.felpaPhoto)}
                      alt="Felpa - Copilota en las clases"
                      onError={(e) => {
                        e.currentTarget.src = getAssetUrl('felpa_foto.png');
                      }}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-[#E86A33]/95 backdrop-blur-xs text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs whitespace-nowrap">
                      <span>🐾</span>
                      <span>{language === 'es' ? 'Copilota' : 'Co-pilot'}</span>
                    </div>
                  </div>
                  <span className="mt-2 font-gaegu text-xl sm:text-2xl font-bold text-[#1D1B1B]">
                    Felpa 🐾
                  </span>
                  <span className="text-[11px] font-sans text-[#2D4030] font-bold">
                    {language === 'es' ? 'Copilota en las clases' : 'Classroom Co-pilot'}
                  </span>
                </motion.div>
              </div>

              {/* Text Information - Spatially separate, zero overlap */}
              <div className="w-full lg:col-span-7 text-center lg:text-left min-w-0">
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
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFC947]/30 text-[#1D1B1B] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <span>✦</span>
                    <span>{slides[0].badgeHighlight}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2D4030]/10 text-[#2D4030] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <BookOpen className="w-3.5 h-3.5 text-[#2D4030]" />
                    <span>{language === 'es' ? 'Cuentacuentos & Diálogo vivo' : 'Storytelling & Natural Dialogue'}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 1: TRABAJOS DE ALUMNOS (LO CREADO EN EL TALLER) */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-creaciones"
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
                  src={getAssetUrl(assets.creationsBanner)}
                  alt="Trabajos de alumnos de The Creative Forest por Reyes"
                  onError={(e) => {
                    e.currentTarget.src = getAssetUrl('student_creations_banner.png');
                  }}
                  className="w-full h-auto max-h-[230px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E5E2DC] shadow-xs flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#E86A33]" />
                  <span className="font-sans text-[11px] font-bold text-[#1D1B1B]">
                    {language === 'es' ? 'Lo Creado: Obras Reales de Alumnos' : 'Real Student Artworks Showcase'}
                  </span>
                </div>
              </motion.div>

              {/* Banner Caption & Description */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div>
                  <h4 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-none mb-1 text-center sm:text-left">
                    {slides[1].title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#555] max-w-xl text-center sm:text-left">
                    {slides[1].desc}
                  </p>
                </div>
                {onOpenContact && (
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="shrink-0 btn-accent text-sm py-2 px-5 shadow-xs font-sans font-bold cursor-pointer"
                  >
                    <span>{language === 'es' ? 'Crear en Español' : 'Create in Spanish'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: THE CREATIVE FOREST (LOGO) */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-brand-logo"
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
                  <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full bg-white border-2 border-[#E5E2DC] p-2 sm:p-2.5 shadow-md flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
                    <img
                      src={getAssetUrl(assets.logo)}
                      alt="The Creative Forest Logo - Art, Nature, Science"
                      onError={(e) => {
                        e.currentTarget.src = getAssetUrl('creative_forest_logo.jpeg');
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
                    {slides[2].tag}
                  </span>
                </div>
                <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-none mb-1">
                  {slides[2].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#E86A33] mb-3">
                  {slides[2].subtitle}
                </p>
                <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                  {slides[2].desc}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#2D4030]/10 text-[#2D4030] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <span>✦</span>
                    <span>{slides[2].badgeHighlight}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#FFC947]/30 text-[#1D1B1B] text-xs font-bold font-sans px-3 py-1 rounded-full">
                    <Palette className="w-3.5 h-3.5 text-[#E86A33]" />
                    <span>{language === 'es' ? 'Cuentos, Arte & Ciencias' : 'Stories, Art & Science'}</span>
                  </span>
                </div>
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
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#E86A33]' : 'w-2 bg-[#D0CCC3] hover:bg-[#B0ACA3]'
              }`}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

