import React from 'react';
import { REYES_BIO, BRAND_INFO } from '../data/content';
import { CheckCircle2, Heart, Sparkles, Mail, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import reyesPhoto from '../assets/images/reyes_photo.jpg';

interface AboutReyesSectionProps {
  reyesPhoto?: string;
  felpaPhoto?: string;
}

export const AboutReyesSection: React.FC<AboutReyesSectionProps> = ({
  reyesPhoto = '/Captura de pantalla 2026-09-22 195717.png',
  felpaPhoto = '/Captura de pantalla 2024-08-09 170647.png',
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.aboutReyes;

  const disciplines = [
    language === 'es' ? 'Educación artística y sensorial' : 'Artistic & sensory education',
    language === 'es' ? 'Acompañamiento respetuoso a la infancia' : 'Respectful childhood mentoring',
    language === 'es' ? 'Español vivo sin memorización mecánica' : 'Living Spanish without rote memorization',
    language === 'es' ? 'Animación a la lectura y narración oral' : 'Storytelling & picture book appreciation',
  ];

  return (
    <section
      id="sobre-reyes"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Studio Portrait Area from Variation 4 */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            <div className="w-full max-w-sm bg-[#F8F7F4] border border-[#E5E2DC] rounded-[40px] p-6 sm:p-8 shadow-xs flex flex-col items-center text-center">
              
              {/* Photo of Reyes and Felpa with Warm Border & Subtle Floating Tag */}
              <div className="relative w-full aspect-square max-w-[280px] rounded-[32px] overflow-hidden border-2 border-[#E5E2DC] shadow-sm mb-5 bg-[#FAF8F5] flex items-center justify-center group">
                <img
                  src={encodeURI(reyesPhoto)}
                  alt="Reyes Portas y Felpa - The Creative Forest"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/Captura de pantalla 2026-09-22 195717.png';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#E5E2DC] shadow-xs flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E86A33]" />
                  <span className="font-sans text-[11px] font-bold text-[#1D1B1B] tracking-wide">
                    {language === 'es' ? 'The Creative Forest • Reyes & Felpa' : 'The Creative Forest • Reyes & Felpa'}
                  </span>
                </div>
              </div>

              <span className="pill text-xs py-1 px-3 mb-2">
                {language === 'es' ? 'La Profe & Artista' : 'Teacher & Visual Artist'}
              </span>

              <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] leading-none mb-1">
                {REYES_BIO.name}
              </h3>
              
              <p className="font-sans text-xs text-[#E86A33] font-bold uppercase tracking-wider mb-4">
                {language === 'es' ? 'Artista Visual & Educadora Infantil' : 'Visual Artist & Child Educator'}
              </p>

              <p className="font-sans text-xs text-[#666] leading-relaxed mb-5 text-center px-1">
                {language === 'es'
                  ? 'Acompañando a familias de todo el mundo a conectar a sus hijos con el español a través del arte, las historias y la imaginación.'
                  : 'Guiding families worldwide to connect their children with Spanish through art, stories, and joyful imagination.'}
              </p>

              <div className="text-xs font-sans text-[#777] flex items-center justify-center gap-1.5 pt-4 border-t border-[#E5E2DC] w-full">
                <Heart className="w-4 h-4 text-[#E86A33] shrink-0" />
                <span>
                  {language === 'es' ? 'Pedagogía respetuosa y no directiva' : 'Respectful & non-directive pedagogy'}
                </span>
              </div>

            </div>

            {/* Felpa Studio Companion Card */}
            <div className="w-full max-w-sm bg-[#FCFBF7] border border-[#E5E2DC] rounded-[28px] p-4 shadow-2xs flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#E5E2DC] shrink-0 bg-white p-1">
                <img
                  src={encodeURI(felpaPhoto)}
                  alt="Felpa - Amigo del taller"
                  onError={(e) => {
                    e.currentTarget.src = '/felpa_foto.png';
                  }}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-gaegu text-xl font-bold text-[#1D1B1B]">Felpa</span>
                  <span className="text-[10px] bg-[#2D4030]/10 text-[#2D4030] font-bold px-2 py-0.5 rounded-full font-sans">
                    {language === 'es' ? 'Títere del Taller' : 'Studio Puppet'}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#666] leading-tight mt-0.5">
                  {language === 'es'
                    ? 'El cómplice favorito de los peques para charlar, reír y hablar en español con ternura.'
                    : 'The children’s favorite companion to chat, laugh, and speak Spanish with warmth.'}
                </p>
              </div>
            </div>

          </div>

          {/* Bio Content Column */}
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="pill shadow-xs">
                {t.badge[language]}
              </span>
            </div>

            <h2 className="section-title text-left text-[#1D1B1B]">
              {t.title[language]}
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#333] leading-relaxed mb-6 font-medium">
              {t.philosophy[language]}
            </p>

            <div className="space-y-3 mb-8 font-sans text-base text-[#555] leading-relaxed">
              <p>{t.bio1[language]}</p>
              <p>{t.bio2[language]}</p>
            </div>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#E5E2DC]">
              {disciplines.map((disc, i) => (
                <div key={i} className="flex items-start gap-2.5 font-sans text-sm text-[#333]">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33] shrink-0 mt-0.5" />
                  <span>{disc}</span>
                </div>
              ))}
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 mt-6 border-t border-[#E5E2DC]/80">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E2DC] hover:border-[#E86A33] text-xs font-sans font-semibold text-[#1D1B1B] hover:text-[#E86A33] transition-colors shadow-2xs"
                title={`Enviar correo a ${BRAND_INFO.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#E86A33]" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E2DC] hover:border-[#E1306C] text-xs font-sans font-semibold text-[#1D1B1B] hover:text-[#C13584] transition-colors shadow-2xs"
                title="Instagram @the.creative_forest"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>

              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E2DC] hover:border-[#FF0000] text-xs font-sans font-semibold text-[#1D1B1B] hover:text-[#CC0000] transition-colors shadow-2xs"
                title="Canal de YouTube"
              >
                <Youtube className="w-3.5 h-3.5 text-[#CC0000]" />
                <span>{BRAND_INFO.youtubeHandle}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
