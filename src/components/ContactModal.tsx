import React, { useState } from 'react';
import { X, Send, CheckCircle2, TreePine, Mail } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { BRAND_INFO } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.contactModal;

  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    parentEmail: '',
    childAge: '7-8',
    familyContext: 'homeschool',
    interests: ['reading-club', 'online-classes'],
    childPassions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-container"
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] text-[#1D1B1B] border border-[#E5E2DC] rounded-[40px] shadow-2xl p-6 sm:p-10 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-contact-modal"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:text-[#E86A33] transition-colors cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation state */
          <div id="contact-success-state" className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FFC947]/30 text-[#E86A33] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#E86A33]" />
            </div>

            <div className="mb-2">
              <span className="pill text-xs py-1 px-3">
                {language === 'es' ? '¡Mensaje Recibido!' : 'Message Received!'}
              </span>
            </div>

            <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] mb-2">
              {language === 'es'
                ? `¡Muchas gracias, ${formData.parentName || 'familia'}!`
                : `Thank you so much, ${formData.parentName || 'family'}!`}
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed max-w-md mx-auto mb-6">
              {language === 'es' ? (
                <>
                  He recibido tus notas con mucho cariño. Reyes Portas te responderá personalmente a{' '}
                  <strong className="text-[#1D1B1B] underline">{formData.parentEmail || 'tu email'}</strong> para conocer más sobre tu hijo/a y valorar juntos una propuesta a su medida.
                </>
              ) : (
                <>
                  We received your note with warmth. Reyes Portas will personally write back to{' '}
                  <strong className="text-[#1D1B1B] underline">{formData.parentEmail || 'your email'}</strong> to learn more about your child and suggest a tailored roadmap.
                </>
              )}
            </p>

            <div className="p-5 rounded-[24px] bg-white border border-[#E5E2DC] text-left text-xs font-sans text-[#555] max-w-md mx-auto mb-8">
              <span className="font-bold text-[#E86A33] block mb-1 uppercase tracking-wider">
                {language === 'es' ? '¿Qué pasará ahora?' : 'What happens next?'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#666]">
                <li>
                  {language === 'es'
                    ? '1. Reyes lee con atención los intereses de tu hijo/a.'
                    : '1. Reyes attentively reviews your child’s creative passions.'}
                </li>
                <li>
                  {language === 'es'
                    ? '2. Recibirás respuesta directa en 24-48 horas.'
                    : '2. You will receive a direct reply within 24-48 hours.'}
                </li>
                <li>
                  {language === 'es'
                    ? '3. Sin presión: solo escucha y orientación pedagógica honesta.'
                    : '3. No sales pressure: just attentive pedagogical guidance.'}
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="btn-accent text-xl py-3 px-8 rounded-full"
            >
              {language === 'es' ? 'Volver a la página' : 'Back to website'}
            </button>
          </div>
        ) : (
          /* Form state */
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#E86A33] text-white flex items-center justify-center">
                <TreePine className="w-4 h-4 text-white" />
              </div>
              <span className="pill text-xs py-0.5 px-2.5">
                {t.badge[language]}
              </span>
            </div>

            <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] leading-none mb-2">
              {t.title[language]}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-6">
              {t.subtitle[language]}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    {t.nameLabel[language]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder={language === 'es' ? 'Ej. Carmen Álvarez' : 'e.g. Sarah Miller'}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    {t.emailLabel[language]} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder={language === 'es' ? 'ejemplo@correo.com' : 'example@email.com'}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>
              </div>

              {/* Child Age & Family Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    {t.ageLabel[language]}
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] focus:outline-hidden focus:border-[#E86A33] cursor-pointer"
                  >
                    <option value="6">{language === 'es' ? '6 años' : '6 years old'}</option>
                    <option value="7-8">{language === 'es' ? '7 - 8 años' : '7 - 8 years old'}</option>
                    <option value="9-10">{language === 'es' ? '9 - 10 años' : '9 - 10 years old'}</option>
                    <option value="11-12">{language === 'es' ? '11 - 12 años' : '11 - 12 years old'}</option>
                    <option value="otra">{language === 'es' ? 'Otra edad' : 'Other age'}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    {t.contextLabel[language]}
                  </label>
                  <select
                    value={formData.familyContext}
                    onChange={(e) => setFormData({ ...formData, familyContext: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] focus:outline-hidden focus:border-[#E86A33] cursor-pointer"
                  >
                    <option value="homeschool">
                      {language === 'es' ? 'Familia Homeschool / Educar en casa' : 'Homeschool Family'}
                    </option>
                    <option value="bilingual">
                      {language === 'es' ? 'Hogar bilingüe en el extranjero' : 'Bilingual home abroad'}
                    </option>
                    <option value="support">
                      {language === 'es' ? 'Refuerzo creativo extracurricular' : 'Creative after-school enrichment'}
                    </option>
                    <option value="other">
                      {language === 'es' ? 'Otro contexto' : 'Other context'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Child Passions */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                  {t.passionsLabel[language]}
                </label>
                <input
                  type="text"
                  value={formData.childPassions}
                  onChange={(e) => setFormData({ ...formData, childPassions: e.target.value })}
                  placeholder={language === 'es' ? 'Ej. Cómics, dinosaurios, inventos, animales del bosque, dibujar manga...' : 'e.g. Comic books, dinosaurs, inventions, forest animals, sketching manga...'}
                  className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                  {t.messageLabel[language]}
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'es' ? 'Cuéntame qué buscas para el aprendizaje de tu hijo/a...' : 'Share what you hope for your child’s learning journey...'}
                  className="w-full px-4 py-2.5 rounded-[20px] bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-accent w-full text-2xl py-3 px-6 rounded-full"
                >
                  {submitting ? (
                    <span>{language === 'es' ? 'Enviando mensaje...' : 'Sending message...'}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn[language]}</span>
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>
                <p className="font-sans text-[11px] text-[#777] text-center mt-2">
                  {language === 'es' ? '✦ Respetamos tu privacidad. Reyes responderá personalmente.' : '✦ We respect your family’s privacy. Reyes will reply directly.'}
                </p>

                <p className="font-sans text-xs text-[#666] text-center mt-3 pt-3 border-t border-[#E5E2DC]">
                  {language === 'es' ? '¿Prefieres escribir por email?' : 'Prefer to write directly?'}{' '}
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="font-bold text-[#E86A33] hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{BRAND_INFO.email}</span>
                  </a>
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
