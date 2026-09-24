import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const MethodCrearSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.methodCrear;
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      letter: 'C',
      word: language === 'es' ? 'Cuentos' : 'Tales',
      title: language === 'es' ? 'Cuentos & Narración' : 'Tales & Storytelling',
      desc: language === 'es'
        ? 'Relatos ilustrados que despiertan la curiosidad innata por las palabras y sumergen al niño en contextos orales vivos.'
        : 'Illustrated stories that spark natural curiosity for language and immerse children in living oral contexts.',
      goal: language === 'es'
        ? 'Escucha activa, asombro y comprensión sin traducción simultánea.'
        : 'Active listening, wonder, and comprehension without mental translation.',
    },
    {
      letter: 'R',
      word: language === 'es' ? 'Respuestas' : 'Dialogue',
      title: language === 'es' ? 'Respuestas & Preguntas' : 'Dialogue & Inquiry',
      desc: language === 'es'
        ? 'El niño indaga, formula hipótesis e interviene con libertad, guiado con ternura y paciencia.'
        : 'Children question, hypothesize, and contribute freely, mentored with tenderness and patience.',
      goal: language === 'es'
        ? 'Desarrollar el pensamiento crítico y la formulación de ideas en español.'
        : 'Cultivating critical thinking and expression in Spanish.',
    },
    {
      letter: 'E',
      word: language === 'es' ? 'Expresión' : 'Art',
      title: language === 'es' ? 'Expresión Plástica' : 'Visual Expression',
      desc: language === 'es'
        ? 'Acuarela, arcilla, collage o dibujo: las manos traducen lo que la mente ha comprendido.'
        : 'Watercolor, clay, collage, or sketching: hands materialize what the mind has grasped.',
      goal: language === 'es'
        ? 'Memoria multisensorial: las palabras se anclan a formas y colores reales.'
        : 'Multisensory memory: words anchor to concrete colors, textures, and forms.',
    },
    {
      letter: 'A',
      word: language === 'es' ? 'Autonomía' : 'Autonomy',
      title: language === 'es' ? 'Autonomía & Confianza' : 'Autonomy & Confidence',
      desc: language === 'es'
        ? 'El niño toma decisiones sobre su propia obra sin juicios ni imposiciones estéticas.'
        : 'Children make creative choices about their own art without judgment or rigid templates.',
      goal: language === 'es'
        ? 'Perder el miedo a equivocarse al hablar o crear.'
        : 'Eliminating fear of making mistakes in speech or artistic play.',
    },
    {
      letter: 'R',
      word: language === 'es' ? 'Revisión' : 'Reflection',
      title: language === 'es' ? 'Revisión & Celebración' : 'Reflection & Celebration',
      desc: language === 'es'
        ? 'Cierre afectivo donde el niño presenta su creación y celebra sus pequeños descubrimientos.'
        : 'Warm closing moment where the child presents their artwork and celebrates discoveries.',
      goal: language === 'es'
        ? 'Refuerzo positivo que genera ganas irresistibles de volver al taller.'
        : 'Positive reinforcement nurturing an eager desire to return to the studio.',
    },
  ];

  return (
    <section
      id="metodo"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
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
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-2">
            {t.subtitle[language]}
          </p>
          <span className="text-xs font-sans text-[#888] block">
            {language === 'es'
              ? '[ Enfoque pedagógico propio en continuo desarrollo y enriquecimiento ]'
              : '[ Proprietary pedagogical framework in ongoing artistic evolution ]'}
          </span>
        </div>

        {/* Areas Selector in Variation 4 Pill Style */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.letter + idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-gaegu text-xl sm:text-2xl transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E86A33] text-white shadow-sm scale-105'
                    : 'bg-[#F8F7F4] text-[#1D1B1B] border border-[#E5E2DC] hover:border-[#E86A33]'
                }`}
              >
                <span className={`w-6 h-6 rounded-full text-xs font-sans font-bold flex items-center justify-center ${
                  isSelected ? 'bg-white text-[#E86A33]' : 'bg-[#1D1B1B] text-white'
                }`}>
                  {step.letter}
                </span>
                <span>{step.word}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase in Variation 4 Card Style */}
        <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[40px] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-2 font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold">
                <span>
                  {language === 'es' ? `Fase 0${activeStep + 1} de ${steps.length}` : `Phase 0${activeStep + 1} of ${steps.length}`}
                </span>
                <span>•</span>
                <span>{language === 'es' ? 'Método CREAR' : 'CREAR Method'}</span>
              </div>
              <h3 className="font-gaegu text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1B1B] leading-tight mb-3">
                {steps[activeStep].letter} — {steps[activeStep].title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-4">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="md:col-span-4 bg-white border border-[#E5E2DC] rounded-[30px] p-6 shadow-xs">
              <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#1D1B1B] block mb-2">
                {language === 'es' ? 'Objetivo pedagógico:' : 'Pedagogical objective:'}
              </span>
              <p className="font-sans text-sm sm:text-base text-[#333] leading-relaxed font-semibold mb-4">
                {steps[activeStep].goal}
              </p>
              <div className="font-sans text-xs text-[#E86A33] flex items-center gap-2 pt-3 border-t border-[#F0EFEA]">
                <CheckCircle2 className="w-4 h-4 text-[#E86A33] shrink-0" />
                <span>
                  {language === 'es' ? 'Aplicado en cada encuentro con Reyes' : 'Applied in every session with Reyes'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
