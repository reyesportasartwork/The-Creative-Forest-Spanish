import React, { useState } from 'react';
import {
  Sparkles,
  Palette,
  Compass,
  MessageSquare,
  BookOpen,
  PenTool,
  Lightbulb,
  Heart,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Brush,
  Layers,
  LayoutGrid,
  Maximize2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { STUDENT_WORKS, StudentWork } from '../data/studentWorks';
import { getAssetUrl } from '../utils/assets';

interface WhatKidsCanDoSectionProps {
  creationsBanner?: string;
}

export const WhatKidsCanDoSection: React.FC<WhatKidsCanDoSectionProps> = ({
  creationsBanner = '/student_creations_collage.png',
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.whatKidsCanDo;

  const [viewMode, setViewMode] = useState<'collage' | 'grid'>('collage');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedWork, setSelectedWork] = useState<StudentWork | null>(null);
  const [showAllWorks, setShowAllWorks] = useState<boolean>(false);

  const categories = [
    { id: 'all', labelEs: `Todas las obras (${STUDENT_WORKS.length})`, labelEn: `All Creations (${STUDENT_WORKS.length})` },
    { id: 'en_vivo', labelEs: 'Clases en Vivo 🎥', labelEn: 'Live Classes 🎥' },
    { id: 'pintura', labelEs: 'Acuarela & Pintura 🎨', labelEn: 'Watercolor & Painting 🎨' },
    { id: 'naturaleza', labelEs: 'Naturaleza & Botánica 🌿', labelEn: 'Nature & Botanicals 🌿' },
    { id: 'manualidades', labelEs: 'Manualidades & Volumen ✂️', labelEn: 'Crafts & Hands-on ✂️' },
    { id: 'personajes', labelEs: 'Personajes & Historias 🦊', labelEn: 'Characters & Stories 🦊' },
    { id: 'materiales', labelEs: 'Materiales & Repaso 📝', labelEn: 'Study Materials 📝' },
    { id: 'experiencias', labelEs: 'Familias & Testimonios 💬', labelEn: 'Family Reviews 💬' },
  ];

  const filteredWorks = STUDENT_WORKS.filter((work) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'personajes') {
      return work.category === 'personajes' || work.category === 'historias';
    }
    return work.category === activeCategory;
  });

  const visibleWorks = showAllWorks ? filteredWorks : filteredWorks.slice(0, 9);

  const handleOpenLightbox = (work: StudentWork) => {
    setSelectedWork(work);
  };

  const handleCloseLightbox = () => {
    setSelectedWork(null);
  };

  const handleNextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedWork) return;
    const currentIndex = STUDENT_WORKS.findIndex((w) => w.id === selectedWork.id);
    const nextIndex = (currentIndex + 1) % STUDENT_WORKS.length;
    setSelectedWork(STUDENT_WORKS[nextIndex]);
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedWork) return;
    const currentIndex = STUDENT_WORKS.findIndex((w) => w.id === selectedWork.id);
    const prevIndex = (currentIndex - 1 + STUDENT_WORKS.length) % STUDENT_WORKS.length;
    setSelectedWork(STUDENT_WORKS[prevIndex]);
  };

  const activities = [
    {
      id: 'personajes',
      icon: <Palette className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Crear Personajes' : 'Create Characters',
      desc:
        language === 'es'
          ? 'Dar forma a héroes, criaturas mágicas y amigos animales describiendo rasgos físicos y emociones.'
          : 'Give life to heroes, magical creatures, and animal companions by describing their features and quirks.',
      example:
        language === 'es'
          ? 'Un zorro astrónomo que busca constelaciones.'
          : 'An astronomer fox searching for constellations.',
    },
    {
      id: 'historias',
      icon: <BookOpen className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Inventar Historias' : 'Invent Stories',
      desc:
        language === 'es'
          ? 'Tejer tramas, conflictos divertidos y desenlaces inesperados usando conectores temporales.'
          : 'Weave plots, playful conflicts, and unexpected endings using storytelling connectors in Spanish.',
      example:
        language === 'es'
          ? 'El misterio de la llave escondida en el roble.'
          : 'The mystery of the key hidden inside the oak tree.',
    },
    {
      id: 'dibujar',
      icon: <PenTool className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Dibujar e Ilustrar' : 'Draw & Illustrate',
      desc:
        language === 'es'
          ? 'Lápices, acuarelas y rotuladores para plasmar escenas mientras nombran colores y texturas.'
          : 'Pencils, watercolors, and markers to sketch scenes while naming shades and textures in Spanish.',
      example:
        language === 'es'
          ? 'Un mapa del tesoro con anotaciones en español.'
          : 'A pirate treasure map with handwritten Spanish notes.',
    },
    {
      id: 'experimentos',
      icon: <Lightbulb className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Experimentos Ligeros' : 'Gentle Science',
      desc:
        language === 'es'
          ? 'Juegos con luz, agua, sombras o mezclas para aprender vocabulario de acción y causa-efecto.'
          : 'Play with light, water, shadows, and color mixtures to learn cause-and-effect vocabulary.',
      example:
        language === 'es'
          ? 'Pigmentos naturales con cúrcuma y remolacha.'
          : 'Natural paint pigments made from beets and turmeric.',
    },
    {
      id: 'naturaleza',
      icon: <Compass className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Explorar la Naturaleza' : 'Nature Journaling',
      desc:
        language === 'es'
          ? 'Observación botánica y animal: formas de hojas, huellas de aves y ciclos de estaciones.'
          : 'Botanical and wildlife observation: leaf shapes, bird tracks, and changing seasons.',
      example:
        language === 'es'
          ? 'Cuaderno de campo sobre insectos del jardín.'
          : 'A garden field journal about local insects.',
    },
    {
      id: 'conversar',
      icon: <MessageSquare className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Conversación Espontánea' : 'Natural Conversation',
      desc:
        language === 'es'
          ? 'Charlas amenas guiadas por Reyes sin juicios ni exámenes donde el niño habla con libertad.'
          : 'Warm, judgment-free conversations guided by Reyes where the child speaks with complete freedom.',
      example:
        language === 'es'
          ? 'Debatir qué poder tendría su animal favorito.'
          : 'Debating which superpower their favorite animal would have.',
    },
    {
      id: 'escribir',
      icon: <Sparkles className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Escritura Creativa' : 'Creative Writing',
      desc:
        language === 'es'
          ? 'Tiras de cómic, cartas ilustradas y pequeños versos con significado para ellos.'
          : 'Short comic strips, illustrated letters, and playful rhyming verses that matter to them.',
      example:
        language === 'es'
          ? 'Una carta secreta para un explorador del bosque.'
          : 'A secret letter addressed to a forest explorer.',
    },
    {
      id: 'proyectos',
      icon: <Heart className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Mini Proyectos' : 'Mini Projects',
      desc:
        language === 'es'
          ? 'Creaciones que se construyen a lo largo de varias sesiones generando orgullo y continuidad.'
          : 'Creations developed across multiple sessions, building authentic pride and continuity.',
      example:
        language === 'es'
          ? 'Un mini-libro encuadernado a mano.'
          : 'A hand-bound mini storybook.',
    },
  ];

  return (
    <section
      id="que-puede-hacer"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            {t.title[language]}
          </h2>
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Sección: Collage de Trabajos de Alumnos y Lo Creado en el Taller */}
        <div className="mb-14 bg-white border-2 border-[#E5E2DC] rounded-[36px] sm:rounded-[44px] p-5 sm:p-8 shadow-xs overflow-hidden">
          
          {/* Header de la Galería con Toggle de Vista */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#E86A33] text-xs font-bold font-sans uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>
                  {language === 'es'
                    ? 'Mural de Creaciones · The Creative Forest'
                    : 'Creations Board · The Creative Forest'}
                </span>
              </div>
              <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-tight">
                {language === 'es' ? 'Collage de Todos los Trabajos' : 'Collage of Student Works'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#666] mt-1 max-w-2xl">
                {language === 'es'
                  ? 'Cada obra nace en directo con Reyes: los niños se sumergen en acuarela botánica, máscaras, maquetas y cómics. El foco está 100% en su talento y en el disfrute del español.'
                  : 'Every piece is crafted live with Reyes: children dive into botanical watercolor, masks, paper models, and poetry. 100% focus on their creative works in Spanish.'}
              </p>
            </div>
            
            {/* Selector de Vista: Collage vs Fichas */}
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 bg-[#F4F1EA] p-1.5 rounded-full border border-[#E5E2DC]">
              <button
                type="button"
                onClick={() => setViewMode('collage')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
                  viewMode === 'collage'
                    ? 'bg-[#E86A33] text-white shadow-xs'
                    : 'text-[#666] hover:text-[#1D1B1B]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Mural Collage' : 'Collage Wall'}</span>
              </button>
              
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#E86A33] text-white shadow-xs'
                    : 'text-[#666] hover:text-[#1D1B1B]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{language === 'es' ? `Catálogo (${STUDENT_WORKS.length})` : `Gallery (${STUDENT_WORKS.length})`}</span>
              </button>
            </div>
          </div>

          {/* VISTA 1: MURAL COLLAGE ARTÍSTICO */}
          {viewMode === 'collage' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Collage Principal tipo Moodboard de Estudio */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E5E2DC] shadow-md group bg-[#FAF7F2]">
                <img
                  src={getAssetUrl('/student_creations_collage.png')}
                  alt="Collage de todos los trabajos de los alumnos de The Creative Forest"
                  onError={(e) => {
                    e.currentTarget.src = getAssetUrl(creationsBanner);
                  }}
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Badges Flotantes sobre el Collage */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E5E2DC] shadow-xs flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5 text-[#E86A33]" />
                  <span className="font-sans text-xs font-bold text-[#1D1B1B]">
                    {language === 'es' ? 'Lo Creado en el Taller · Obras Reales' : 'Real Student Works Collage'}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#2D4030]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC947]" />
                  <span className="font-sans text-xs font-semibold">
                    {language === 'es' ? '14 Proyectos del Taller' : '14 Studio Projects'}
                  </span>
                </div>
              </div>

              {/* Tira Interactiva con Acceso Rápido a las Obras del Collage */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-sans font-bold text-[#666] uppercase tracking-wider">
                    {language === 'es'
                      ? 'Explora las obras presentes en el collage (haz clic para ampliar):'
                      : 'Explore artworks featured in the collage (click to enlarge):'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className="text-xs font-sans text-[#E86A33] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'es' ? 'Ver catálogo completo' : 'View full catalog'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Miniaturas interactivas para abrir en Lightbox */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {STUDENT_WORKS.slice(0, 7).map((work) => (
                    <button
                      key={work.id}
                      type="button"
                      onClick={() => handleOpenLightbox(work)}
                      className="group text-left bg-[#FAF8F5] border border-[#E5E2DC] rounded-xl overflow-hidden hover:border-[#E86A33] hover:shadow-xs transition-all cursor-pointer p-1.5"
                    >
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#ECE8E0] mb-1.5">
                        <img
                          src={getAssetUrl(work.image)}
                          alt={work.title[language]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                      <span className="block font-sans text-[11px] font-bold text-[#1D1B1B] truncate leading-tight">
                        {work.title[language]}
                      </span>
                      <span className="block font-sans text-[10px] text-[#888] truncate">
                        {work.categoryLabel[language]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* VISTA 2: CUADRÍCULA DETALLADA POR TÉCNICA */}
          {viewMode === 'grid' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Filtros de Categorías */}
              <div className="flex flex-wrap items-center gap-2 mb-6 pt-2 border-t border-[#F0ECE1]">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setShowAllWorks(false);
                    }}
                    className={`text-xs font-sans font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#E86A33] text-white shadow-xs'
                        : 'bg-[#F4F1EA] text-[#555] hover:bg-[#EAE5DA] hover:text-[#1D1B1B]'
                    }`}
                  >
                    {language === 'es' ? cat.labelEs : cat.labelEn}
                  </button>
                ))}
              </div>

              {/* Grid de Trabajos con Formato Uniforme 16:10 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleWorks.map((work) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-[#FAF8F5] border border-[#E5E2DC] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#D5D0C6] transition-all flex flex-col"
                  >
                    <div
                      className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECE8E0] cursor-pointer"
                      onClick={() => handleOpenLightbox(work)}
                    >
                      <img
                        src={getAssetUrl(work.image)}
                        alt={work.title[language]}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      <div className="absolute inset-0 bg-[#2D4030]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white/95 text-[#1D1B1B] text-xs font-sans font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-[#E86A33]" />
                          <span>{language === 'es' ? 'Ver en detalle' : 'View artwork'}</span>
                        </span>
                      </div>

                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-white/90 backdrop-blur-xs text-[#2D4030] text-[11px] font-sans font-bold px-2.5 py-0.5 rounded-full border border-[#E5E2DC] shadow-2xs">
                          {work.categoryLabel[language]}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-gaegu text-xl font-bold text-[#1D1B1B] leading-snug">
                          {work.title[language]}
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleOpenLightbox(work)}
                          className="text-xs font-sans text-[#E86A33] hover:underline font-bold cursor-pointer shrink-0 flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{language === 'es' ? 'Ampliar' : 'Enlarge'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredWorks.length > 6 && (
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAllWorks(!showAllWorks)}
                    className="btn-primary text-xs py-2 px-5 cursor-pointer font-sans font-bold"
                  >
                    {showAllWorks
                      ? language === 'es'
                        ? 'Mostrar menos'
                        : 'Show fewer'
                      : language === 'es'
                      ? `Ver todos los trabajos (${filteredWorks.length})`
                      : `View all student works (${filteredWorks.length})`}
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Nota de Momentos Reales y Acompañamiento en el Taller */}
          <div className="mt-8 pt-4 border-t border-[#F0ECE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555] font-sans bg-[#FAF7F2] p-4 rounded-2xl border border-[#ECE7DC]">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-[#2D4030] shrink-0" />
              <span>
                {language === 'es'
                  ? 'Momentos y creaciones reales: Imágenes de sesiones en vivo y obras compartidas con el cariño y consentimiento de las familias. Clases llenas de risas, arte y aprendizaje vivo en español.'
                  : 'Real moments & creations: Authentic live session captures and student artworks shared with the warmth and consent of families. Joyful classes filled with art and living Spanish.'}
              </span>
            </div>
            <span className="text-[11px] text-[#888] shrink-0 font-medium">
              The Creative Forest © {new Date().getFullYear()}
            </span>
          </div>

        </div>

        {/* Modal Lightbox para visualización completa de los trabajos */}
        <AnimatePresence>
          {selectedWork && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
              onClick={handleCloseLightbox}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E5E2DC]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón Cerrar */}
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1D1B1B] flex items-center justify-center shadow-md cursor-pointer border border-[#E5E2DC]"
                  aria-label="Cerrar ventana"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Flecha Anterior */}
                <button
                  type="button"
                  onClick={handlePrevLightbox}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1D1B1B] flex items-center justify-center shadow-md cursor-pointer border border-[#E5E2DC]"
                  aria-label="Trabajo anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Flecha Siguiente */}
                <button
                  type="button"
                  onClick={handleNextLightbox}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1D1B1B] flex items-center justify-center shadow-md cursor-pointer border border-[#E5E2DC]"
                  aria-label="Trabajo siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Imagen en Grande */}
                <div className="bg-[#FAF7F2] max-h-[65vh] flex items-center justify-center overflow-hidden border-b border-[#E5E2DC]">
                  <img
                    src={getAssetUrl(selectedWork.image)}
                    alt={selectedWork.title[language]}
                    className="max-h-[65vh] w-auto object-contain mx-auto"
                  />
                </div>

                {/* Datos del Proyecto */}
                <div className="p-5 bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#E86A33]/10 text-[#E86A33] text-xs font-sans font-bold px-3 py-1 rounded-full">
                      {selectedWork.categoryLabel[language]}
                    </span>
                    <h3 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B]">
                      {selectedWork.title[language]}
                    </h3>
                  </div>
                  <span className="text-xs font-sans text-[#888] shrink-0 font-medium">
                    {language === 'es' ? 'Obra' : 'Artwork'} {selectedWork.id} / {STUDENT_WORKS.length}
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 8 Grid items in Variation 4 Style (Actividades del taller) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E2DC] rounded-[30px] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC947]/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-gaegu text-xl font-bold text-[#888]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EFEA] font-sans text-xs text-[#666]">
                <strong className="text-[#E86A33]">
                  {language === 'es' ? 'Ejemplo:' : 'Example:'}
                </strong>{' '}
                {item.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
