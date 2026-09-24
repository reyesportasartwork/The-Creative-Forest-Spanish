import React, { useState } from 'react';
import {
  TreePine,
  Sparkles,
  BookOpen,
  Palette,
  Compass,
  ArrowRight,
  CheckCircle2,
  Youtube,
  ExternalLink,
  Heart,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';
import { BRAND_INFO, PROPOSAL_PILLARS, METHOD_CREAR_STEPS, CLASSROOM_CASES } from '../data/content';
import { InteractiveSketchArea } from './InteractiveSketchArea';

interface PlayfulStudioCanvasProps {
  onOpenContact: () => void;
  onExploreMore: (sectionId: string) => void;
}

export const PlayfulStudioCanvas: React.FC<PlayfulStudioCanvasProps> = ({
  onOpenContact,
  onExploreMore,
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [methodTab, setMethodTab] = useState<'crear' | 'cases'>('crear');

  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden p-3 sm:p-5 lg:p-6 bg-[#FAFAF5] text-[#2B463C] font-gaegu flex flex-col justify-between">
      
      {/* Studio Top Info Bar / Quick Badge */}
      <div className="flex items-center justify-between pb-3 px-1 border-b-2 border-[#2B463C]/15 text-xs sm:text-sm font-mono-code mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4A8C60] animate-pulse"></span>
          <span className="font-bold text-[#2B463C] tracking-wide">
            THE CREATIVE FOREST · STUDIO 2026
          </span>
          <span className="hidden sm:inline text-[#2B463C]/50">|</span>
          <span className="hidden sm:inline text-[#2B463C]/80 font-gaegu text-base">
            Español creativo para niños (6 a 12 años)
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onExploreMore('como-funciona')}
            className="hidden md:flex items-center gap-1.5 text-xs font-mono-code text-[#2B463C] bg-[#D4E2D4] hover:bg-[#c2d6c2] px-2.5 py-1 rounded-md border border-[#2B463C] transition-colors cursor-pointer"
          >
            <span>Ver Casos de Clase</span>
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="flex items-center gap-1.5 text-xs font-mono-code font-bold bg-[#FFB37B] hover:bg-[#ffa361] text-[#2B463C] px-3 py-1 rounded-md border-2 border-[#2B463C] shadow-[2px_2px_0_#2B463C] transition-all cursor-pointer"
          >
            <span>¡Quiero Conoceros!</span>
          </button>
        </div>
      </div>

      {/* Variation 9 12x12 Bento Studio Canvas */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 gap-3 sm:gap-4 lg:gap-5 overflow-y-auto lg:overflow-hidden">
        
        {/* MODULE 1: HEADER & STUDIO BRAND (Cols 1-3, Rows 1-5) */}
        <div
          id="studio-header"
          className="lg:col-span-3 lg:row-span-5 bg-[#D4E2D4] border-2 border-[#2B463C] rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col justify-between overflow-y-auto"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#2B463C] text-white flex items-center justify-center shadow-xs">
                <TreePine className="w-5 h-5 text-[#FFB37B]" />
              </div>
              <span className="font-mono-code text-[11px] uppercase tracking-wider font-bold bg-white/70 text-[#2B463C] px-2 py-0.5 rounded border border-[#2B463C]/20">
                {BRAND_INFO.subBrand}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-[0.88] tracking-tight text-[#2B463C] mb-3">
              The<br />Creative<br />Forest
            </h1>

            <p className="text-lg leading-tight text-[#2B463C]/85 mb-4">
              Spanish through stories, art & imagination.
            </p>

            {/* Quick in-studio navigation */}
            <nav className="space-y-1.5 pt-2 border-t border-[#2B463C]/20">
              <button
                type="button"
                onClick={() => onExploreMore('propuesta')}
                className="w-full text-left text-xl text-[#2B463C] hover:text-[#AB5932] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>✦ La Propuesta</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                type="button"
                onClick={() => onExploreMore('metodo')}
                className="w-full text-left text-xl text-[#2B463C] hover:text-[#AB5932] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>✦ Método CREAR</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                type="button"
                onClick={() => onExploreMore('club-lectura')}
                className="w-full text-left text-xl text-[#2B463C] hover:text-[#AB5932] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>✦ Club YouTube</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                type="button"
                onClick={() => onExploreMore('sobre-reyes')}
                className="w-full text-left text-xl text-[#2B463C] hover:text-[#AB5932] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>✦ Reyes Portas</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </nav>
          </div>

          <div className="pt-3 mt-3 border-t border-[#2B463C]/20 font-mono-code text-[11px] text-[#2B463C]/80 flex items-center justify-between">
            <span>[ EST. 2026 ]</span>
            <span>Creative Spanish Studio</span>
          </div>
        </div>

        {/* MODULE 2: HERO & INTERACTIVE SKETCH PAD (Cols 4-9, Rows 1-7) */}
        <div
          id="studio-hero"
          className="lg:col-span-6 lg:row-span-7 bg-white border-2 border-[#2B463C] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col justify-between overflow-y-auto"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="font-mono-code text-[11px] uppercase tracking-wider bg-[#2B463C] text-white px-2.5 py-0.5 rounded-md font-bold">
                Estudiantes 6-12 Años
              </span>
              <span className="text-xs font-mono-code text-[#2B463C]/70">
                Homeschool & Familias Bilingües
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[0.92] text-[#2B463C] mb-3">
              Spanish through <span className="italic text-[#AB5932] underline decoration-wavy decoration-[#FFB37B]">stories</span>, art & imagination.
            </h2>

            <p className="text-xl sm:text-2xl leading-tight text-[#2B463C]/90 max-w-xl mb-4">
              Ayudo a niños a aprender y practicar español de forma viva mientras imaginan, crean y se expresan.
            </p>
          </div>

          {/* Real Interactive Variation 9 Sketch Area */}
          <div className="my-2 bg-[#FCFAF6] p-3 rounded-2xl border-2 border-[#2B463C]/15">
            <InteractiveSketchArea compact={true} />
          </div>

          {/* CTA Row with peaceful reassurance */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-[#FFB37B] hover:bg-[#ffa361] border-2 border-[#2B463C] text-[#2B463C] text-2xl font-bold px-7 py-2.5 rounded-xl shadow-[4px_4px_0_#2B463C] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#2B463C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#2B463C] transition-all cursor-pointer text-center"
            >
              ¡Quiero Conoceros!
            </button>

            <span className="text-xs font-mono-code text-[#2B463C]/70 text-center sm:text-right">
              ✦ Primer contacto directo con Reyes · Sin compromiso
            </span>
          </div>
        </div>

        {/* MODULE 3: STATS / CREATIVITY BADGE (Cols 10-12, Rows 1-3) */}
        <div
          id="studio-stats"
          className="lg:col-span-3 lg:row-span-3 bg-[#FFB37B] border-2 border-[#2B463C] rounded-2xl p-5 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute top-2 right-2 text-[#2B463C]/20">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <div className="text-5xl lg:text-6xl font-bold leading-none text-[#2B463C] tracking-tight mb-1">
            100%
          </div>
          <div className="font-mono-code text-xs uppercase tracking-widest font-bold text-[#2B463C] mb-1">
            Creatividad & Oralidad
          </div>
          <p className="text-sm font-gaegu text-[#2B463C]/80 leading-tight">
            "El niño no solo aprende español. Utiliza el español para crear."
          </p>
        </div>

        {/* MODULE 4: PILLARS & VISION (Cols 1-5, Rows 6-12) */}
        <div
          id="studio-pillars"
          className="lg:col-span-5 lg:row-span-7 bg-white border-2 border-[#2B463C] rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col justify-between overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-code text-[11px] uppercase tracking-wider bg-[#2B463C] text-white px-2.5 py-0.5 rounded-md font-bold">
                Nuestra Visión
              </span>
              <span className="text-xs font-mono-code text-[#4A8C60] font-bold">
                5 Pilares Vivos
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#2B463C] leading-none mb-3">
              Un espacio para familias homeschool y bilingües
            </h3>

            {/* Variation 9 Pillar Items with interactive highlight */}
            <div className="space-y-3">
              <div
                onClick={() => setActivePillarIndex(0)}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  activePillarIndex === 0
                    ? 'border-[#2B463C] bg-[#FAF7F2] shadow-[3px_3px_0_#2B463C]'
                    : 'border-transparent hover:border-[#2B463C]/20 bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-[#2B463C] leading-tight">
                    01. Cuentos & Lectura (Read)
                  </h4>
                  <span className="font-mono-code text-xs text-[#AB5932] font-bold">Historias</span>
                </div>
                <p className="text-base text-[#2B463C]/85 leading-tight mt-1">
                  Historias ilustradas que despiertan la curiosidad innata por las palabras y estructuran el lenguaje con emoción.
                </p>
              </div>

              <div
                onClick={() => setActivePillarIndex(1)}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  activePillarIndex === 1
                    ? 'border-[#2B463C] bg-[#FAF7F2] shadow-[3px_3px_0_#2B463C]'
                    : 'border-transparent hover:border-[#2B463C]/20 bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-[#2B463C] leading-tight">
                    02. Arte & Dibujo (Create & Imagine)
                  </h4>
                  <span className="font-mono-code text-xs text-[#AB5932] font-bold">Expresión</span>
                </div>
                <p className="text-base text-[#2B463C]/85 leading-tight mt-1">
                  Pintura, cómic e ilustración como puentes orgánicos de comprensión para retener nuevo vocabulario sin memorización forzada.
                </p>
              </div>

              <div
                onClick={() => setActivePillarIndex(2)}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  activePillarIndex === 2
                    ? 'border-[#2B463C] bg-[#FAF7F2] shadow-[3px_3px_0_#2B463C]'
                    : 'border-transparent hover:border-[#2B463C]/20 bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-[#2B463C] leading-tight">
                    03. Ciencia & Naturaleza (Explore & Speak)
                  </h4>
                  <span className="font-mono-code text-xs text-[#4A8C60] font-bold">Mundo Real</span>
                </div>
                <p className="text-base text-[#2B463C]/85 leading-tight mt-1">
                  Investigar el entorno real, observar botánica y animales para ampliar el registro lingüístico con sentido práctico y lúdico.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#2B463C]/15 flex items-center justify-between">
            <span className="text-xs font-mono-code text-[#2B463C]/70">
              Alternativa a las clases mecánicas
            </span>
            <button
              type="button"
              onClick={() => onExploreMore('propuesta')}
              className="text-sm font-mono-code font-bold text-[#2B463C] hover:text-[#AB5932] flex items-center gap-1 cursor-pointer"
            >
              <span>Ver los 5 Pilares</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* MODULE 5: METHOD CREAR & REAL CASES (Cols 6-9, Rows 8-12) */}
        <div
          id="studio-method"
          className="lg:col-span-4 lg:row-span-5 bg-[#FAFAF5] border-2 border-[#2B463C] rounded-2xl p-5 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col justify-between overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-code text-[11px] uppercase tracking-wider bg-[#FFB37B] text-[#2B463C] border border-[#2B463C] px-2.5 py-0.5 rounded-md font-bold">
                Acompañamiento
              </span>
              <div className="flex items-center gap-1 font-mono-code text-[11px]">
                <button
                  type="button"
                  onClick={() => setMethodTab('crear')}
                  className={`px-2 py-0.5 rounded cursor-pointer border ${
                    methodTab === 'crear' ? 'bg-[#2B463C] text-white border-[#2B463C]' : 'bg-white text-[#2B463C] border-[#2B463C]/20'
                  }`}
                >
                  CREAR
                </button>
                <button
                  type="button"
                  onClick={() => setMethodTab('cases')}
                  className={`px-2 py-0.5 rounded cursor-pointer border ${
                    methodTab === 'cases' ? 'bg-[#2B463C] text-white border-[#2B463C]' : 'bg-white text-[#2B463C] border-[#2B463C]/20'
                  }`}
                >
                  Casos
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#2B463C] leading-none mb-2">
              {methodTab === 'crear' ? 'Método CREAR' : 'Casos Reales de Clase'}
            </h3>

            {methodTab === 'crear' ? (
              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFB37B] border border-[#2B463C] shrink-0 mt-1"></span>
                  <p className="text-base leading-tight text-[#2B463C]">
                    <b>Conversación & Oralidad:</b> Diálogo vivo a partir del asombro del niño.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D4E2D4] border border-[#2B463C] shrink-0 mt-1"></span>
                  <p className="text-base leading-tight text-[#2B463C]">
                    <b>Relatos & Cuentos:</b> Conexión emocional para fijar estructuras narrativas.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#AB5932] border border-[#2B463C] shrink-0 mt-1"></span>
                  <p className="text-base leading-tight text-[#2B463C]">
                    <b>Expresión Artística:</b> Dibujo y creación plástica como motor del español.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#4A8C60] border border-[#2B463C] shrink-0 mt-1"></span>
                  <p className="text-base leading-tight text-[#2B463C]">
                    <b>Aprendizaje en Contexto:</b> Ciencia, animales e inventos sin fichas mecánicas.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2 mt-1">
                <div className="p-2.5 rounded-lg bg-white border border-[#2B463C]/30 text-xs">
                  <span className="font-mono-code font-bold text-[#AB5932] block">
                    Caso 1: El cómic de Spider-Man
                  </span>
                  <p className="font-gaegu text-sm text-[#2B463C] leading-tight mt-0.5">
                    Un niño apasionado por Spider-Man aprendió pasado, adjetivos y viñetas creando su propio cómic en español.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#2B463C]/30 text-xs">
                  <span className="font-mono-code font-bold text-[#4A8C60] block">
                    Caso 2: El mapa de Winnie the Pooh
                  </span>
                  <p className="font-gaegu text-sm text-[#2B463C] leading-tight mt-0.5">
                    Dibujando árboles y senderos para practicar preposiciones de lugar, botánica y relatos de animales.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#2B463C]/15 flex items-center justify-between">
            <span className="text-[11px] font-mono-code text-[#2B463C]/70">
              Enfoque pedagógico propio
            </span>
            <button
              type="button"
              onClick={() => onExploreMore('metodo')}
              className="text-xs font-mono-code font-bold text-[#2B463C] hover:text-[#AB5932] flex items-center gap-1 cursor-pointer"
            >
              <span>Detalles</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* MODULE 6: ABOUT REYES & ACTION (Cols 10-12, Rows 4-12) */}
        <div
          id="studio-about"
          className="lg:col-span-3 lg:row-span-9 bg-white border-2 border-[#2B463C] rounded-2xl p-5 shadow-[5px_5px_0_rgba(43,70,60,0.12)] flex flex-col justify-between overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-code text-[11px] uppercase tracking-wider bg-[#2B463C] text-white px-2.5 py-0.5 rounded-md font-bold">
                La Profe
              </span>
              <span className="font-mono-code text-xs text-[#AB5932] font-bold">
                Reyes Portas
              </span>
            </div>

            <h3 className="text-3xl font-bold text-[#2B463C] leading-none mb-2">
              Reyes Portas
            </h3>

            {/* Illustrated Portrait area from Variation 9 */}
            <div className="sketch-area h-[130px] border-2 border-solid border-[#2B463C]/20 flex flex-col items-center justify-center p-3 text-center my-2 bg-[#FCFAF6] rounded-xl relative overflow-hidden group">
              <div className="w-14 h-14 rounded-full bg-[#D4E2D4] border-2 border-[#2B463C] flex items-center justify-center mb-1 text-[#2B463C] shadow-xs">
                <Palette className="w-7 h-7 text-[#2B463C]" />
              </div>
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#2B463C]/60">
                [ FOTOGRAFÍA REAL / RETRATO ]
              </span>
              <span className="text-xs font-gaegu text-[#2B463C]/75">
                Artista visual & Educadora
              </span>
            </div>

            <p className="text-base text-[#2B463C]/90 leading-tight mb-2">
              Artista visual & Educadora. Especialista en Arteterapia, Gestalt Infantil y Educación Artística.
            </p>

            <div className="space-y-1 text-xs font-mono-code text-[#2B463C]/80 pt-2 border-t border-[#2B463C]/15">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A8C60]" />
                <span>Educación Infantil & Arte</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A8C60]" />
                <span>Gestalt & Arteterapia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A8C60]" />
                <span>Gestión Cultural</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#2B463C]/15 text-center">
            <h4 className="text-2xl font-bold text-[#2B463C] mb-1">¿Listos?</h4>
            <p className="text-xs font-gaegu text-[#2B463C]/75 mb-3">
              Cuéntame qué temas le apasionan a tu hijo/a.
            </p>
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full bg-[#FFB37B] hover:bg-[#ffa361] border-2 border-[#2B463C] text-[#2B463C] font-bold text-xl py-2 px-4 rounded-xl shadow-[3px_3px_0_#2B463C] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_#2B463C] transition-all cursor-pointer"
            >
              Saber más
            </button>
          </div>
        </div>

      </div>

      {/* Subtle Studio Footer Bar */}
      <div className="mt-3 pt-2.5 border-t border-[#2B463C]/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-[#2B463C]/70">
        <div className="flex items-center gap-2">
          <span>Temas:</span>
          <span className="text-[#2B463C]">Spanish through stories</span>
          <span>•</span>
          <span className="text-[#2B463C]">Spanish through art</span>
          <span>•</span>
          <span className="text-[#2B463C]">Spanish homeschool</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onExploreMore('newsletter-section')}
            className="text-[#2B463C] hover:text-[#AB5932] font-bold underline flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFB37B]" />
            <span>Tips para padres (Newsletter)</span>
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => onExploreMore('club-lectura')}
            className="text-[#2B463C] hover:text-[#AB5932] underline flex items-center gap-1 cursor-pointer"
          >
            <Youtube className="w-3.5 h-3.5 text-[#AB5932]" />
            <span>Club de Lectura en YouTube</span>
          </button>
          <span>·</span>
          <span>© {new Date().getFullYear()} The Creative Forest · Reyes Portas</span>
        </div>
      </div>

    </div>
  );
};
