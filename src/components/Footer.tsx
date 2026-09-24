import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Youtube, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import creativeForestLogo from '../assets/images/creative_forest_logo.jpeg';

interface FooterProps {
  onOpenContact: () => void;
  logo?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  logo = '/the_creative_forest_logo.jpeg',
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.footer;
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#F0EFEA] text-[#1D1B1B] pt-14 pb-10 border-t border-[#E5E2DC]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Newsletter Sign-up Box (Creative Spanish Tips for Parents) */}
        <div
          id="newsletter-section"
          className="mb-14 bg-white border border-[#E5E2DC] rounded-[40px] p-6 sm:p-10 shadow-xs relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Value Proposition */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="pill text-xs py-1 px-3">
                  {t.newsletterBadge[language]}
                </span>
                <span className="font-sans text-xs text-[#666]">
                  {language === 'es' ? 'Boletín gratuito de The Creative Forest' : 'Free newsletter by The Creative Forest'}
                </span>
              </div>

              <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-tight mb-3">
                {t.newsletterTitle[language]}
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-4">
                {t.newsletterDesc[language]}
              </p>

              <div className="flex flex-wrap items-center gap-3 font-sans text-xs text-[#666]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>{language === 'es' ? 'Ideas de 5-10 minutos' : '5-10 minute ideas'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>{language === 'es' ? 'Homeschool & Bilingües' : 'Homeschool & Bilingual'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>{language === 'es' ? 'Sin fichas aburridas' : 'Zero dull worksheets'}</span>
                </span>
              </div>
            </div>

            {/* Sign-up Form or Confirmation */}
            <div className="lg:col-span-5 bg-[#F8F7F4] border border-[#E5E2DC] rounded-[32px] p-6 shadow-xs">
              {isSubmitted ? (
                <div id="newsletter-success-state" className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 text-[#E86A33] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7 text-[#E86A33]" />
                  </div>
                  <h4 className="font-gaegu text-2xl font-bold text-[#1D1B1B] mb-1">
                    {t.successTitle[language]}
                  </h4>
                  <p className="font-sans text-sm text-[#555] leading-relaxed mb-3">
                    {t.successDesc[language]} <strong>{email}</strong>.
                  </p>
                  <p className="font-sans text-xs text-[#E86A33] font-semibold">
                    {language === 'es' ? '✦ Revisa tu bandeja de entrada en unos instantes.' : '✦ Check your inbox shortly.'}
                  </p>
                </div>
              ) : (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="newsletter-parent-name"
                      className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider"
                    >
                      {t.nameLabel[language]}
                    </label>
                    <input
                      id="newsletter-parent-name"
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={language === 'es' ? 'Ej. María o Carlos' : 'e.g. Sarah or Michael'}
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider"
                    >
                      {t.emailLabel[language]} *
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === 'es' ? 'tu-email@ejemplo.com' : 'your-email@example.com'}
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    disabled={isSubmitting}
                    className="btn-accent w-full text-xl py-2.5 px-5 rounded-full mt-2"
                  >
                    {isSubmitting ? (
                      <span>{language === 'es' ? 'Suscribiendo...' : 'Subscribing...'}</span>
                    ) : (
                      <>
                        <span>{t.submitBtn[language]}</span>
                        <Send className="w-4 h-4 text-white ml-1" />
                      </>
                    )}
                  </button>

                  <p className="font-sans text-[11px] text-[#777] text-center leading-tight">
                    {t.privacy[language]}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Links and Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E2DC]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#E5E2DC] p-1 shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={encodeURI(logo)}
                  alt="The Creative Forest Logo"
                  onError={(e) => {
                    e.currentTarget.src = creativeForestLogo;
                  }}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-gaegu text-2xl font-bold leading-none text-[#1D1B1B]">
                  {BRAND_INFO.subBrand}
                </span>
                <span className="block font-sans text-xs text-[#666]">
                  {language === 'es' ? 'por' : 'by'} {BRAND_INFO.educator}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#555] leading-relaxed max-w-md mb-3">
              {t.bioShort[language]}
            </p>

            <div className="font-sans text-xs text-[#E86A33] font-semibold italic mb-4">
              {t.quote[language]}
            </div>

            {/* Social channels under brand */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E2DC] hover:border-[#FF0000]/40 text-xs font-sans text-[#444] hover:text-[#CC0000] transition-all shadow-2xs group"
                title="Canal de YouTube @ThecreativespanishforestTV"
              >
                <Youtube className="w-3.5 h-3.5 text-[#CC0000] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">YouTube</span>
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E2DC] hover:border-[#E1306C]/40 text-xs font-sans text-[#444] hover:text-[#C13584] transition-all shadow-2xs group"
                title="Instagram @the.creative_forest"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 font-sans text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#1D1B1B] mb-3">
              {t.explore[language]}
            </h4>
            <ul className="space-y-2 font-gaegu text-xl">
              <li>
                <a href="#newsletter-section" className="text-[#E86A33] hover:underline">
                  ✦ {language === 'es' ? 'Newsletter con Tips' : 'Newsletter Tips'}
                </a>
              </li>
              <li>
                <a href="#propuesta" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.proposal[language]}
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.howItWorks[language]}
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.method[language]}
                </a>
              </li>
              <li>
                <a href="#club-lectura" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.youtubeClub[language]}
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.testimonials[language]}
                </a>
              </li>
              <li>
                <a href="#sobre-reyes" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ {TRANSLATIONS.nav.aboutReyes[language]}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D1B1B] mb-3">
              {t.contact[language]}
            </h4>
            <p className="font-sans text-sm text-[#555] leading-relaxed mb-3">
              {t.contactDesc[language]}
            </p>

            {/* Direct Email with click-to-email */}
            <div className="mb-4 p-3 rounded-2xl bg-white border border-[#E5E2DC] shadow-2xs">
              <span className="block text-[11px] font-sans font-bold text-[#888] uppercase tracking-wider mb-1">
                {language === 'es' ? 'Email directo:' : 'Direct email:'}
              </span>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[#E86A33] hover:underline break-all"
                title={`Enviar correo a ${BRAND_INFO.email}`}
              >
                <Mail className="w-4 h-4 shrink-0 text-[#E86A33]" />
                <span>{BRAND_INFO.email}</span>
              </a>
            </div>

            {/* Social quick icons */}
            <div className="flex items-center gap-2 mb-4">
              <a
                href={BRAND_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E2DC] hover:border-[#FF0000] text-[#CC0000] flex items-center justify-center transition-colors shadow-2xs hover:bg-[#FF0000]/10"
                title="YouTube: @ThecreativespanishforestTV"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E2DC] hover:border-[#E1306C] text-[#C13584] flex items-center justify-center transition-colors shadow-2xs hover:bg-[#E1306C]/10"
                title="Instagram: @the.creative_forest"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                aria-label="Email Reyes Portas"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E2DC] hover:border-[#E86A33] text-[#E86A33] flex items-center justify-center transition-colors shadow-2xs hover:bg-[#E86A33]/10"
                title={`Escribir a ${BRAND_INFO.email}`}
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>

            <button
              type="button"
              id="footer-contact-reyes-btn"
              onClick={onOpenContact}
              className="btn-accent text-lg py-2 px-5 rounded-full inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.contactBtn[language]}</span>
            </button>
          </div>

        </div>

        {/* Natural SEO Keywords Row */}
        <div className="py-4 border-b border-[#E5E2DC] text-xs font-sans text-[#777] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          <span className="font-semibold text-[#1D1B1B]">
            {language === 'es' ? 'Temas clave:' : 'Key focuses:'}
          </span>
          <span>Spanish for kids</span>
          <span>•</span>
          <span>Spanish through art</span>
          <span>•</span>
          <span>Spanish homeschool</span>
          <span>•</span>
          <span>creative Spanish for children</span>
          <span>•</span>
          <span>learn Spanish through stories</span>
          <span>•</span>
          <span>Spanish reading for kids</span>
        </div>

        {/* Variation 4 Exact Copyright Signature */}
        <div className="text-center pt-8 font-sans text-sm text-[#666] opacity-80">
          <p>© 2026 The Creative Forest · Reyes Portas</p>
        </div>

      </div>
    </footer>
  );
};
