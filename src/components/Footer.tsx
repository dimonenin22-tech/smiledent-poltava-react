import React from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./assets/avatar.jpg"
                alt={clinicInfo.shortName}
                className="w-12 h-12 rounded-2xl object-cover ring-2 ring-teal-500/30"
              />
              <div>
                <span className="font-display font-bold text-xl text-white block">
                  Смайл <span className="text-teal-400">Дент</span>
                </span>
                <span className="text-xs text-slate-400 block">
                  Стоматологія щасливих посмішок
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Сучасна клініка безболісної стоматології у Полтаві. Ультразвукова хірургія, імплантація MegaGen, вирівнювання прикусу та естетичне протезування.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% стерильність за протоколами МОЗ</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Навігація
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-teal-400 transition">
                  Головна
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-teal-400 transition">
                  Переваги та технології
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-teal-400 transition">
                  Команда лікарів
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-teal-400 transition">
                  Кейси «До та Після»
                </a>
              </li>
              <li>
                <a href="#prices" className="hover:text-teal-400 transition">
                  Офіційний прайс-лист
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-400 transition">
                  Відгуки пацієнтів
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-teal-400 transition">
                  Контакти та локація
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Контакти
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicInfo.phones[0]}`} className="hover:text-teal-400">
                  {clinicInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicInfo.phones[1]}`} className="hover:text-teal-400">
                  {clinicInfo.phoneSecondaryFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-teal-400">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Working Schedule & Socials */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 uppercase tracking-wider text-xs">
              Графік прийому
            </h4>
            <div className="space-y-2 text-xs mb-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Пн–Сб: {clinicInfo.workingHours.weekdays}</span>
              </div>
              <p className="text-slate-500 pl-6">
                Неділя: {clinicInfo.workingHours.sunday}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-2">Ми в соцмережах:</span>
              <div className="flex items-center gap-2">
                <a
                  href={clinicInfo.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-sky-500 hover:text-white transition"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href={clinicInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white transition"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Стоматологія «Смайл Дент» (Полтава). Всі права захищено.</p>
          <div className="flex items-center gap-1">
            <span>Зроблено з</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>для красивих та здорових посмішок</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
