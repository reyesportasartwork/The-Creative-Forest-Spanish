import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TrustSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.trust;

  const trustCards = [
    {
      title: language === 'es' ? 'Acompañamiento Personalizado' : 'Tailored Mentorship',
      desc: language === 'es'
        ? 'Cada niño y cada familia son únicos. Diseñamos dinámicas y materiales adaptados a sus propios intereses.'
        : 'Every child and family is unique. We design dynamics and materials adapted to their natural interests.',
    },
    {
      title: language === 'es' ? 'Entornos Seguros y Calmos' : 'Safe & Calm Environments',
      desc: language === 'es'
        ? 'Sesiones digitales protegidas, sin juicios ni exámenes. Un espacio acogedor para expresarse con libertad.'
        : 'Protected digital sessions, free of tests or rigid pressure. A welcoming space to speak freely.',
    },
    {
      title: language === 'es' ? 'Vínculo Directo con la Educadora' : 'Direct Educator Relationship',
      desc: language === 'es'
        ? 'Sin intermediarios ni academias impersonales. Comunicación constante y cercana con Reyes Portas.'
        : 'No intermediaries or impersonal academies. Ongoing, warm communication with Reyes Portas.',
    },
  ];

  return (
    <section
      id="confianza"
      className="py-16 md:py-20 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="mb-3">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            {t.title[language]}
          </h2>
          <p className="text-body text-center text-lg text-[#555]">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Trust Cards Grid in Variation 4 Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E2DC] rounded-[32px] p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#E86A33]" />
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer / Child safety guarantee */}
        <div className="bg-[#EFECE6] border border-[#E5E2DC] rounded-[28px] p-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2 font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold">
            <Heart className="w-4 h-4 text-[#E86A33]" />
            <span>{t.commitment[language]}</span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#666] leading-relaxed">
            {t.ethicalNote[language]}
          </p>
        </div>

      </div>
    </section>
  );
};
