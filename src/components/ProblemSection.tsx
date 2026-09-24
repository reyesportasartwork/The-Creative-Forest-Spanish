import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ProblemSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.problem;

  return (
    <section
      id="el-problema"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Pill */}
        <div className="text-center mb-4">
          <span className="pill shadow-xs">
            {t.badge[language]}
          </span>
        </div>

        {/* Question heading in Gaegu */}
        <h2
          id="problem-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-gaegu text-[#1D1B1B] text-center max-w-3xl mx-auto leading-tight mb-4 font-bold"
        >
          {t.title[language]}
        </h2>

        {/* Empathetic explanation in Plus Jakarta Sans */}
        <p className="text-base sm:text-lg text-[#555555] text-center max-w-2xl mx-auto leading-relaxed mb-12 font-sans">
          {t.description[language]}
        </p>

        {/* Comparison card grid in Variation 4 Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional friction */}
          <div
            id="traditional-approach-card"
            className="p-8 rounded-[36px] bg-white border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B]">
                  {t.conventionalTitle[language]}
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
                {t.conventionalItems[language].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Creative Spanish approach */}
          <div
            id="creative-spanish-card"
            className="p-8 rounded-[36px] bg-[#EFECE6] border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#FFC947]/40 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                </div>
                <h3 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B]">
                  {t.creativeTitle[language]}
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#333333] leading-relaxed">
                {t.creativeItems[language].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#E86A33] font-bold select-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
