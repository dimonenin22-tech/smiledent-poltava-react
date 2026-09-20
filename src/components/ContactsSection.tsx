import React from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { MapPin, Phone, Clock, Mail, Send, ExternalLink, Navigation } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>Локація та зв'язок</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Завітайте до клініки <span className="text-teal-700">«Смайл Дент»</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ми знаходимося у затишному та зручному районі Полтави з власним під'їздом і паркінгом для автомобілів пацієнтів.
          </p>
        </div>

        {/* 2-Column Layout: Contact Details & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                    Адреса клініки
                  </h3>
                  <p className="text-slate-700 text-sm font-medium mb-1">
                    {clinicInfo.address}
                  </p>
                  <p className="text-xs text-slate-500 mb-3">
                    {clinicInfo.district}, м. Полтава, Полтавська обл.
                  </p>
                  <a
                    href={clinicInfo.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Прокласти маршрут у Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Messengers Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                    Телефони для запису
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Консультація адміністратора та швидкий запис:
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${clinicInfo.phones[0]}`}
                      className="block text-sm font-bold text-teal-700 hover:text-teal-800 transition"
                    >
                      {clinicInfo.phoneFormatted} (Основний)
                    </a>
                    <a
                      href={`tel:${clinicInfo.phones[1]}`}
                      className="block text-sm font-bold text-slate-700 hover:text-teal-700 transition"
                    >
                      {clinicInfo.phoneSecondaryFormatted}
                    </a>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-3">
                    <a
                      href={clinicInfo.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition"
                    >
                      <Send className="w-3.5 h-3.5" /> Telegram
                    </a>
                    <a
                      href={clinicInfo.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 text-pink-700 text-xs font-semibold hover:bg-pink-100 transition"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours & Email */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-teal-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                    Години роботи
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <p className="flex items-center justify-between gap-6">
                      <span className="font-medium text-slate-800">Понеділок – Субота:</span>
                      <span className="font-semibold text-teal-700">{clinicInfo.workingHours.weekdays}</span>
                    </p>
                    <p className="flex items-center justify-between gap-6">
                      <span className="text-slate-500">Неділя:</span>
                      <span className="text-slate-400">{clinicInfo.workingHours.sunday}</span>
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-teal-600" />
                    <a href={`mailto:${clinicInfo.email}`} className="hover:text-teal-700">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <iframe
                title="Стоматологія Смайл Дент Полтава на карті"
                src={clinicInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-sm pointer-events-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Смайл Дент • Відкрито для вас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
