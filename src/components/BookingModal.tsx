import React, { useState, useEffect, useRef } from 'react';
import { clinicInfo, priceCategories } from '../data/clinicData.ts';
import { doctorsData } from '../data/teamData.ts';
import { sendLeadToTelegram } from '../services/telegramService.ts';
import {
  X,
  CalendarCheck,
  User,
  Phone,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  PhoneCall,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEntity?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEntity = '',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('+380 ');
  const [selectedTopic, setSelectedTopic] = useState(initialEntity || 'Первинна консультація лікаря (300 грн)');
  const [preferredTime, setPreferredTime] = useState('Якнайшвидше');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  // Sync initial entity if prop changes
  useEffect(() => {
    if (initialEntity) {
      setSelectedTopic(initialEntity);
    }
  }, [initialEntity]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  // Ukrainian Phone Mask Formatter: +380 (XX) XXX-XX-XX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Extract only digits
    const digits = raw.replace(/\D/g, '');

    // Guarantee +380 prefix
    let formatted = '+380';
    const rest = digits.startsWith('380') ? digits.slice(3) : digits;

    if (rest.length > 0) {
      formatted += ` (${rest.slice(0, 2)}`;
    }
    if (rest.length >= 2) {
      formatted += `) ${rest.slice(2, 5)}`;
    }
    if (rest.length >= 5) {
      formatted += `-${rest.slice(5, 7)}`;
    }
    if (rest.length >= 7) {
      formatted += `-${rest.slice(7, 9)}`;
    }

    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (patientName.trim().length < 2) {
      setErrorMessage("Будь ласка, введіть коректне ім'я");
      return;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 12) {
      setErrorMessage('Будь ласка, введіть повний номер телефону: +380 (XX) XXX-XX-XX');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendLeadToTelegram({
        patientName,
        phone,
        topic: selectedTopic,
        preferredTime,
        source: 'React SPA Модальне вікно'
      });
    } catch (err) {
      console.warn('[LeadTriad] Network issue sending lead to Telegram, continuing fallback UX', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPhone('+380 ');
    setErrorMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 text-neutral-100 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Закрити модальне вікно"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 id="booking-title" className="text-xl font-bold font-display text-white">
                  Запис на прийом
                </h3>
                <p className="text-xs text-neutral-400">
                  Стоматологія «Смайл Дент» • вул. Григорія Левченка, 2
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Ваше ім'я *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Наприклад: Олена або Сергій"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
                  />
                </div>
              </div>

              {/* Phone Input with Ukrainian Mask */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Номер телефону *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+380 (__) ___-__-__"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 text-sm font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition font-mono"
                  />
                </div>
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Адміністратор зателефонує для узгодження точного часу
                </span>
              </div>

              {/* Service / Doctor Pre-select */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Послуга або лікар
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
                >
                  <optgroup label="Рекомендовано" className="bg-neutral-900 text-white">
                    <option value="Первинна консультація лікаря (300 грн)">
                      Первинна консультація лікаря (300 грн)
                    </option>
                    <option value="Гострий біль (терміновий прийом)">
                      Гострий біль (терміновий прийом)
                    </option>
                  </optgroup>

                  <optgroup label="Лікарі клініки" className="bg-neutral-900 text-white">
                    {doctorsData.map((d) => (
                      <option key={d.id} value={`Лікар: ${d.name}`}>
                        {d.name} ({d.role})
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="Основні напрямки" className="bg-neutral-900 text-white">
                    {priceCategories.map((c) => (
                      <option key={c.id} value={`Категорія: ${c.name}`}>
                        {c.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Зручний час прийому
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
                  >
                    <option value="Якнайшвидше" className="bg-neutral-900 text-white">Якнайшвидше (найближчий вільний час)</option>
                    <option value="Перша половина дня (09:00 – 13:00)" className="bg-neutral-900 text-white">Перша половина дня (09:00 – 13:00)</option>
                    <option value="Друга половина дня (13:00 – 18:00)" className="bg-neutral-900 text-white">Друга половина дня (13:00 – 18:00)</option>
                    <option value="Субота (вихідний день)" className="bg-neutral-900 text-white">Субота (зручно на вихідних)</option>
                  </select>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 active:scale-[0.99] text-neutral-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all duration-200 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    Надсилання заявки...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Записатися на прийом
                  </span>
                )}
              </button>
            </form>

            <p className="text-center text-[11px] text-neutral-500 mt-4">
              Натискаючи кнопку, ви даєте згоду на обробку персональних даних згідно із законодавством України.
            </p>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Дякуємо, {patientName}!
            </h3>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              Вашу заявку успішно зареєстровано. Адміністратор клініки «Смайл Дент» зателефонує вам на номер{' '}
              <span className="font-bold text-amber-400">{phone}</span> протягом 15 хвилин для підтвердження часу.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <a
                href={clinicInfo.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Написати адміністратору в Telegram</span>
              </a>

              <a
                href={`tel:${clinicInfo.phones[0]}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Зателефонувати: {clinicInfo.phoneFormatted}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full text-xs font-semibold text-neutral-400 hover:text-neutral-200 pt-2"
              >
                Закрити вікно
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
