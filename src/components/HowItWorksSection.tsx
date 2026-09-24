import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const HowItWorksSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.howItWorks;

  const steps = [
    {
      num: '01',
      title: language === 'es' ? 'La Chispa' : 'The Spark',
      desc: language === 'es'
        ? 'Un cuento intrigante, una ilustración botánica o un misterio que enciende la curiosidad.'
        : 'An intriguing story, botanical sketch, or mystery that awakens curiosity.',
    },
    {
      num: '02',
      title: language === 'es' ? 'La Exploración' : 'Exploration',
      desc: language === 'es'
        ? 'Conversación distendida. El niño formula preguntas y nombra detalles en español.'
        : 'Relaxed dialogue. The child asks questions and names details in Spanish.',
    },
    {
      num: '03',
      title: language === 'es' ? 'La Creación' : 'Creation',
      desc: language === 'es'
        ? 'Dibujo, pintura, cómic o modelado para fijar conceptos de forma física y visual.'
        : 'Drawing, painting, comics, or sculpting to anchor concepts physically and visually.',
    },
    {
      num: '04',
      title: language === 'es' ? 'La Expresión' : 'Expression',
      desc: language === 'es'
        ? 'El niño comparte su creación, narra lo que ha imaginado y consolida su confianza oral.'
        : 'The child shares their creation, narrates what they imagined, and builds oral confidence.',
    },
    {
      num: '05',
      title: language === 'es' ? 'La Conexión' : 'Connection',
      desc: language === 'es'
        ? 'El español deja de ser una tarea y pasa a ser un lenguaje afectivo de expresión libre.'
        : 'Spanish ceases to be a chore and becomes an affectionate language of self-expression.',
    },
  ];

  const classroomCases = [
    {
      profile: language === 'es' ? 'Mateo (7 años) · Homeschool' : 'Mateo (age 7) · Homeschool',
      title: language === 'es' ? 'Del bloqueo inicial al entusiasmo' : 'From initial silence to enthusiasm',
      challenge: language === 'es'
        ? 'Se resistía a hablar español porque temía equivocarse en la pronunciación. Su gran pasión: los dinosaurios.'
        : 'Reluctant to speak Spanish for fear of mispronouncing words. His deep passion: dinosaurs.',
      outcome: language === 'es'
        ? 'Creamos un "Diario de Fósiles" ilustrado. En pocas semanas ya describía hábitats prehistóricos con naturalidad.'
        : 'We crafted an illustrated "Fossil Diary". Within weeks he was describing prehistoric habitats with natural fluency.',
    },
    {
      profile: language === 'es' ? 'Sofía (10 años) · Familia Bilingüe' : 'Sofia (age 10) · Bilingual Family',
      title: language === 'es' ? 'Escribir historias con voz propia' : 'Writing stories with her own voice',
      challenge: language === 'es'
        ? 'Entendía bien el español en casa, pero siempre respondía en inglés. Le apasionaba el dibujo manga.'
        : 'Understood Spanish at home well, but always answered in English. Passionate about drawing manga.',
      outcome: language === 'es'
        ? 'Diseñó su propio cómic en español con viñetas y diálogos. Ahora inventa capítulos enteros de forma autónoma.'
        : 'Designed her own Spanish comic book with panels and dialogue. Now she autonomously scripts entire adventures.',
    },
  ];

  return (
    <section
      id="como-funciona"
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
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* 5 Organic Steps in Variation 4 Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[28px] p-6 flex flex-col justify-between transition-all hover:shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFC947] text-[#1D1B1B] font-bold font-gaegu text-xl flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Classroom Cases Box */}
        <div className="bg-[#EFECE6] rounded-[40px] p-8 sm:p-12 border border-[#E5E2DC]">
          <div className="flex items-center gap-2 mb-3">
            <span className="pill text-xs py-1 px-3">
              {t.casesTitle[language]}
            </span>
            <span className="font-sans text-xs text-[#666] font-medium">
              {language === 'es' ? 'Flexibilidad Pedagógica' : 'Pedagogical Flexibility'}
            </span>
          </div>

          <h3 className="font-gaegu text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1B1B] leading-tight mb-3">
            {language === 'es'
              ? 'El método se adapta al niño, nunca el niño al temario'
              : 'The method adapts to the child, never the child to a rigid curriculum'}
          </h3>

          <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-8 max-w-3xl">
            {t.casesSubtitle[language]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classroomCases.map((caso, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-xs font-bold text-[#E86A33] uppercase tracking-wider">
                      {caso.profile}
                    </span>
                    <span className="font-sans text-xs bg-[#F8F7F4] text-[#666] px-2.5 py-1 rounded-full border border-[#E5E2DC]">
                      {language === 'es' ? 'Caso real' : 'Real case'}
                    </span>
                  </div>
                  <h4 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B] leading-tight mb-2">
                    {caso.title}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                    {caso.challenge}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFEA] font-sans text-sm text-[#333]">
                  <strong className="text-[#E86A33]">
                    {language === 'es' ? 'Resultado:' : 'Outcome:'}
                  </strong>{' '}
                  {caso.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
