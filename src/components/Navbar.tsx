import React, { useState, useEffect } from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { Phone, Clock, MapPin, Menu, X, CalendarCheck, Send } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
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
    { name: 'Переваги', href: '#advantages' },
    { name: 'Лікарі', href: '#team' },
    { name: 'До/Після', href: '#cases' },
    { name: 'Прайс', href: '#prices' },
    { name: 'Відгуки', href: '#reviews' },
    { name: 'Контакти', href: '#contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar - Contacts & Hours */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{clinicInfo.address}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Пн–Сб: {clinicInfo.workingHours.weekdays} (Нд вихідний)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={clinicInfo.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-sky-400 transition flex items-center gap-1"
                title="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Telegram</span>
              </a>
              <a
                href={clinicInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-pink-400 transition flex items-center gap-1"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="hidden md:inline">{clinicInfo.instagramHandle}</span>
              </a>
            </div>
            <div className="h-3 w-px bg-slate-700 hidden sm:block" />
            <a
              href={`tel:${clinicInfo.phones[0]}`}
              className="font-medium text-teal-400 hover:text-teal-300 transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{clinicInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="./assets/avatar.jpg"
                alt={clinicInfo.shortName}
                className="w-12 h-12 rounded-2xl object-cover ring-2 ring-teal-500/20 group-hover:ring-teal-500 transition-all shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white"></span>
              </span>
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 block leading-tight">
                Смайл <span className="text-teal-600">Дент</span>
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Стоматологія щасливих посмішок
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-white rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call-To-Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.phones[1]}`}
              className="text-xs text-slate-600 hover:text-teal-700 font-medium transition hidden xl:block"
            >
              {clinicInfo.phoneSecondaryFormatted}
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Записатись</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Запис</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-600 focus:outline-none rounded-xl hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50/50 rounded-xl transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-xl shadow"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Записатися на прийом</span>
                </button>
                <div className="flex justify-around pt-2 text-xs text-slate-600">
                  <a href={`tel:${clinicInfo.phones[0]}`} className="flex items-center gap-1 text-teal-700 font-semibold">
                    <Phone className="w-3.5 h-3.5" /> {clinicInfo.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
