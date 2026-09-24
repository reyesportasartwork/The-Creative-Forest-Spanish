import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FinalCtaSectionProps {
  onOpenContact: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.finalCta;

  return (
    <section
      id="contacto-final"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Variation 4 CTA Card: padding: 4rem; background: #EEE; border-radius: 40px; text-align: center; */}
        <div className="p-8 sm:p-16 bg-[#EFECE6] border border-[#E5E2DC] rounded-[40px] text-center shadow-xs">
          
          <div className="mb-3">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>

          <h3 className="section-title text-center text-4xl sm:text-5xl md:text-6xl mb-4">
            {t.title[language]}
          </h3>

          <p className="text-body max-w-xl mx-auto mb-8 text-lg sm:text-xl text-[#444444]">
            {t.description[language]}
          </p>

          <button
            type="button"
            onClick={onOpenContact}
            className="btn-ink text-2xl py-3.5 px-8 rounded-full inline-flex items-center gap-2 shadow-md"
          >
            <span>{t.button[language]}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#777]">
            <span>{language === 'es' ? '✓ Sin compromiso' : '✓ No obligation'}</span>
            <span>·</span>
            <span>{language === 'es' ? '✓ Conversación directa con Reyes' : '✓ Direct talk with Reyes'}</span>
            <span>·</span>
            <span>{language === 'es' ? '✓ Propuesta adaptada a su edad' : '✓ Tailored to child’s pace'}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
