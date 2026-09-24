import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Globe, Youtube, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import creativeForestLogo from '../assets/images/creative_forest_logo.jpeg';

interface NavbarProps {
  onOpenContact: () => void;
  onSelectView?: (view: 'studio' | 'detailed') => void;
  currentView?: 'studio' | 'detailed';
  logo?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  logo = '/WhatsApp Image 2026-04-20 at 14.07.37 (1).jpeg',
}) => {
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS.nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home[language], href: '#hero-section' },
    { name: t.proposal[language], href: '#propuesta' },
    { name: t.howItWorks[language], href: '#como-funciona' },
    { name: t.method[language], href: '#metodo' },
    { name: t.testimonials[language], href: '#testimonios' },
    { name: t.youtubeClub[language], href: '#club-lectura' },
    { name: t.aboutReyes[language], href: '#sobre-reyes' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E5E2DC] py-2.5 shadow-xs'
          : 'bg-[#F8F7F4]/80 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand identity in Variation 4 Style */}
        <a
          href="#hero-section"
          id="brand-logo"
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-hidden transition-transform duration-300 ease-out hover:scale-105 active:scale-[0.98]"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#E5E2DC] p-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.14)] overflow-hidden transition-all duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center">
            <img
              src={encodeURI(logo)}
              alt="The Creative Forest Logo"
              onError={(e) => {
                e.currentTarget.src = creativeForestLogo;
              }}
              className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xl sm:text-3xl font-bold leading-tight text-[#1D1B1B] font-gaegu tracking-tight">
              {BRAND_INFO.subBrand}
            </span>
            <span className="text-xs font-sans text-[#666666] font-medium leading-none">
              {t.byEducator[language]} {BRAND_INFO.educator}
            </span>
          </div>
        </a>

        {/* Desktop Navigation in Variation 4 style */}
        <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-xl text-[#1D1B1B] hover:text-[#E86A33]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side controls: Socials + Language switcher + Primary Action Button */}
        <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
          
          {/* Social channels (YouTube & Instagram) */}
          <div className="hidden lg:flex items-center gap-1.5 mr-1">
            <a
              href={BRAND_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube The Creative Forest"
              className="w-8 h-8 rounded-full bg-white border border-[#E5E2DC] hover:border-[#FF0000] text-[#CC0000] flex items-center justify-center transition-all shadow-2xs hover:bg-[#FF0000]/10"
              title="YouTube: @ThecreativespanishforestTV"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram The Creative Forest"
              className="w-8 h-8 rounded-full bg-white border border-[#E5E2DC] hover:border-[#E1306C] text-[#C13584] flex items-center justify-center transition-all shadow-2xs hover:bg-[#E1306C]/10"
              title="Instagram: @the.creative_forest"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Language Switcher Button (ES / EN) */}
          <div
            id="language-switcher"
            className="flex items-center p-1 rounded-full bg-white border border-[#E5E2DC] shadow-2xs text-xs font-sans font-bold"
          >
            <button
              type="button"
              id="lang-btn-es"
              onClick={() => setLanguage('es')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-[#FFC947] text-[#1D1B1B] shadow-xs'
                  : 'text-[#666] hover:text-[#1D1B1B]'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              type="button"
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#FFC947] text-[#1D1B1B] shadow-xs'
                  : 'text-[#666] hover:text-[#1D1B1B]'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            id="nav-primary-cta"
            onClick={onOpenContact}
            className="btn-accent text-xl py-2 px-5 font-gaegu rounded-full flex items-center gap-1.5 shadow-sm"
          >
            <span>{t.cta[language]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle & quick lang toggle for small screens */}
        <div className="flex sm:hidden items-center gap-2">
          <div className="flex items-center p-0.5 rounded-full bg-white border border-[#E5E2DC] text-[11px] font-sans font-bold">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2 py-0.5 rounded-full ${language === 'es' ? 'bg-[#FFC947] text-[#1D1B1B]' : 'text-[#666]'}`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full ${language === 'en' ? 'bg-[#FFC947] text-[#1D1B1B]' : 'text-[#666]'}`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#1D1B1B] bg-white border border-[#E5E2DC] shadow-xs transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#F8F7F4] border-b border-[#E5E2DC] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E2DC]">
            <span className="font-sans text-xs uppercase tracking-wider text-[#666] font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#E86A33]" />
              <span>Idioma / Language</span>
            </span>
            <div className="flex items-center p-1 rounded-full bg-white border border-[#E5E2DC] text-xs font-sans font-bold">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full ${language === 'es' ? 'bg-[#FFC947] text-[#1D1B1B]' : 'text-[#666]'}`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-[#FFC947] text-[#1D1B1B]' : 'text-[#666]'}`}
              >
                English
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-gaegu text-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1D1B1B] hover:text-[#E86A33] py-1 border-b border-[#E5E2DC]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-accent w-full text-2xl py-3 rounded-full justify-center mb-3"
              >
                <span>{t.cta[language]}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Mobile Social & Direct Links */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-[#E5E2DC]/60">
                <a
                  href={BRAND_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E2DC] text-xs font-sans font-bold text-[#CC0000]"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E2DC] text-xs font-sans font-bold text-[#C13584]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

