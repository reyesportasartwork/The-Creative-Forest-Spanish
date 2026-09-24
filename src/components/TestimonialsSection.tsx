import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showReply, setShowReply] = useState(true);
  const timerRef = useRef<number | null>(null);

  const testimonials = TESTIMONIALS_DATA;
  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, testimonials.length]);

  return (
    <section
      id="testimonios"
      aria-label={t.title[language]}
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>

          <h2 className="section-title text-center text-[#1D1B1B]">
            {t.title[language]}
          </h2>

          <p className="text-body text-center text-lg text-[#555] max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>

          {/* Social Proof Header Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-sans">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#39734D]" />
              <span className="font-semibold">{t.verifiedBadge[language]}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC947]/30 border border-[#FFC947]/60 text-[#1D1B1B] shadow-2xs">
              <div className="flex text-[#FFC947]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current text-[#E86A33]" />
                ))}
              </div>
              <span className="font-bold text-xs">{t.ratingBadge[language]}</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Main Testimonial Card */}
          <div
            id="testimonial-card"
            className="bg-white border border-[#E5E2DC] rounded-[36px] p-6 sm:p-10 shadow-md relative transition-all duration-300"
          >
            {/* Top Row: Stars + Date + Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-1 text-[#FFC947]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC947] text-[#FFC947]" />
                  ))}
                </div>
                <span className="font-gaegu text-xl font-bold text-[#E86A33] ml-1">
                  5.0
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-[#777] bg-[#F8F7F4] px-3 py-1 rounded-full border border-[#E5E2DC]">
                  {current.date}
                </span>
              </div>
            </div>

            {/* Course Title Badge */}
            <div className="mb-4">
              <span className="inline-block text-xs font-sans font-bold uppercase tracking-wider text-[#39734D] bg-[#39734D]/10 px-3 py-1 rounded-full">
                {current.courseTitle[language]}
              </span>
            </div>

            {/* Review Quote Body */}
            <div className="relative mb-6">
              <MessageSquareQuote className="w-8 h-8 text-[#FFC947]/60 absolute -top-3 -left-3 pointer-events-none opacity-50" />
              <blockquote className="font-sans text-base sm:text-lg text-[#2D2A2A] leading-relaxed italic pl-3 border-l-2 border-[#E86A33]/40">
                "{current.reviewText[language]}"
              </blockquote>
            </div>

            {/* Highlighted Quote Pill if available */}
            {current.highlightQuote && (
              <div className="p-3.5 rounded-[20px] bg-[#F8F7F4] border border-[#E5E2DC] mb-6 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-[#E86A33] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-[#444] font-medium">
                  {current.highlightQuote[language]}
                </p>
              </div>
            )}

            {/* Author Profile */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#E5E2DC]">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-gaegu text-2xl font-bold shadow-xs"
                  style={{ backgroundColor: current.colorBg }}
                >
                  {current.initials}
                </div>
                <div>
                  <div className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight">
                    {current.parentName}
                  </div>
                  <div className="text-xs font-sans text-[#666]">
                    {current.tags[language].join(' · ')}
                  </div>
                </div>
              </div>

              {/* Toggle reply button if available */}
              {current.teacherReply && (
                <button
                  type="button"
                  onClick={() => setShowReply(!showReply)}
                  className="text-xs font-sans font-bold text-[#E86A33] hover:text-[#1D1B1B] transition-colors cursor-pointer py-1 px-3 rounded-full bg-[#E86A33]/10 hover:bg-[#E86A33]/20"
                >
                  {showReply ? (language === 'es' ? 'Ocultar respuesta de Reyes' : 'Hide Reyes’ reply') : (language === 'es' ? 'Ver respuesta de Reyes 🦊' : 'View Reyes’ reply 🦊')}
                </button>
              )}
            </div>

            {/* Teacher Reyes Personal Reply */}
            {current.teacherReply && showReply && (
              <div className="mt-6 pt-5 border-t border-dashed border-[#E5E2DC] animate-in fade-in duration-200">
                <div className="flex items-start gap-3 bg-[#EFECE6]/70 p-4 rounded-[24px] border border-[#E5E2DC]">
                  <div className="w-8 h-8 rounded-full bg-[#E86A33] text-white flex items-center justify-center shrink-0 text-sm font-bold shadow-xs">
                    R
                  </div>
                  <div className="flex-1 text-xs sm:text-sm font-sans text-[#444] leading-relaxed">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#1D1B1B]">
                        {t.replyLabel[language]}
                      </span>
                      {current.teacherReply.date && (
                        <span className="text-[11px] text-[#777]">
                          {current.teacherReply.date}
                        </span>
                      )}
                    </div>
                    <p className="italic">
                      "{current.teacherReply[language]}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Left Button */}
            <button
              type="button"
              id="prev-testimonial-btn"
              onClick={handlePrev}
              aria-label={t.prevBtn[language]}
              className="p-3 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:text-[#E86A33] hover:border-[#E86A33] shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Testimonio ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#E86A33]'
                      : 'w-2.5 bg-[#E5E2DC] hover:bg-[#bbb]'
                  }`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              type="button"
              id="next-testimonial-btn"
              onClick={handleNext}
              aria-label={t.nextBtn[language]}
              className="p-3 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:text-[#E86A33] hover:border-[#E86A33] shadow-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Count and indicator */}
          <div className="text-center mt-3 text-xs font-sans text-[#777]">
            <span>
              {currentIndex + 1} / {testimonials.length} {language === 'es' ? 'testimonios de familias' : 'family testimonials'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
