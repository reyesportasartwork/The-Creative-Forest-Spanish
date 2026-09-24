import React from 'react';
import { Youtube, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { BRAND_INFO } from '../data/content';

interface ReadingClubSectionProps {
  onOpenContact: () => void;
}

export const ReadingClubSection: React.FC<ReadingClubSectionProps> = ({ onOpenContact }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.readingClub;

  return (
    <section
      id="club-lectura"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-[#E5E2DC] rounded-[40px] p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          <div className="max-w-3xl">
            {/* Tag & Channel Handle */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="pill text-xs py-1 px-3">
                {t.badge[language]}
              </span>
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000]/15 text-[#CC0000] text-xs font-sans font-bold transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.youtubeHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1306C]/10 hover:bg-[#E1306C]/15 text-[#C13584] text-xs font-sans font-bold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            <h2 className="font-gaegu text-4xl sm:text-5xl md:text-6xl font-bold text-[#1D1B1B] leading-none mb-4">
              {t.title[language]}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-6">
              {t.subtitle[language]}
            </p>

            {/* The 4-Step Formula from Variation 4 */}
            <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[28px] p-5 sm:p-6 mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold block mb-3">
                {language === 'es' ? 'Nuestra fórmula en cada episodio:' : 'Our formula in each episode:'}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-gaegu text-xl sm:text-2xl font-bold text-[#1D1B1B]">
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E2DC]">
                  {language === 'es' ? '1. CUENTO' : '1. STORY'}
                </span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-[#FFC947]/30 border border-[#E5E2DC]">
                  {language === 'es' ? '2. PALABRAS' : '2. WORDS'}
                </span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E2DC]">
                  {language === 'es' ? '3. CONVERSACIÓN' : '3. DIALOGUE'}
                </span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-[#E86A33]/15 border border-[#E5E2DC]">
                  {language === 'es' ? '4. CREACIÓN' : '4. CREATION'}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#777] leading-relaxed mb-8">
              {language === 'es'
                ? '✦ En los vídeos se exploran ideas, vocabulario y propuestas prácticas para hacer en casa. No requiere la lectura mecánica de libros enteros y respeta escrupulosamente los derechos de autor.'
                : '✦ Video sessions explore ideas, vocabulary, and hands-on activities to enjoy at home. Designed to celebrate books without robotic reading, honoring copyright.'}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-xl py-3 px-6 rounded-full flex items-center gap-2.5 shadow-sm hover:scale-105 transition-transform"
              >
                <Youtube className="w-5 h-5 text-white" />
                <span>{language === 'es' ? 'Ver canal en YouTube' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xl py-3 px-6 rounded-full flex items-center gap-2.5 hover:bg-[#FAF8F5] transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#E1306C]" />
                <span>Instagram</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="btn-ink text-xl py-3 px-6 rounded-full flex items-center gap-2"
              >
                <span>{t.joinCta[language]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
