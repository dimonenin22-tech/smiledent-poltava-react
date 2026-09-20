import React from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { doctorsData } from '../data/teamData.ts';
import { ShimmerButton } from './ui/ShimmerButton.tsx';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  PhoneCall,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-sky-200/25 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge with Live Pulse */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600"></span>
              </span>
              <span>Стоматологія щасливих посмішок • Полтава</span>
              <span className="hidden sm:inline text-teal-400">|</span>
              <span className="hidden sm:inline font-normal text-teal-700">Прийом у день звернення</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.15] mb-6">
              Турботлива стоматологія, де лікування стає{' '}
              <span className="relative text-teal-700 inline-block">
                комфортним
                <svg
                  className="absolute -bottom-2 left-0 w-full text-teal-400/40 -z-10"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6C50 0 150 12 200 6" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Лікування без болю та страху для дорослих і дітей у Полтаві. Ультразвукова п'єзохірургія,
              преміум імплантація MegaGen, виправлення прикусу та художня реставрація зубів на вул. Григорія Левченка, 2.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <ShimmerButton onClick={onOpenBooking} className="w-full sm:w-auto">
                <span>Записатися на прийом</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </ShimmerButton>

              <a
                href="#prices"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-slate-200 hover:border-teal-500/50 bg-white/80 text-slate-700 hover:text-teal-700 font-semibold text-base shadow-xs hover:shadow-md transition-all duration-200"
              >
                <span>Ознайомитися з прайсом</span>
              </a>
            </div>

            {/* Trust Bullet Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Безболісна анестезія</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Офіційний прайс від 300 грн</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>П'єзотом без щипців</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card & Doctor Social Proof */}
          <div className="lg:col-span-5 relative">
            {/* Main Interactive Card */}
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-xl shadow-teal-900/5 border border-slate-200/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-0" />

              {/* Clinic Header Info inside card */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img
                  src="./assets/avatar.jpg"
                  alt="Smile Dent"
                  className="w-16 h-16 rounded-2xl object-cover ring-4 ring-teal-100 shadow-md"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">
                    Стоматологія «Смайл Дент»
                  </h3>
                  <p className="text-xs text-slate-500">Полтава, вул. Григорія Левченка, 2</p>
                  <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                    <span className="text-slate-400 font-normal">(120+ відгуків пацієнтів)</span>
                  </div>
                </div>
              </div>

              {/* Verified Doctors Stack */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Провідні лікарі клініки:
                  </span>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    {doctorsData.length} спеціалісти
                  </span>
                </div>
                <div className="flex items-center -space-x-2 overflow-hidden mb-2">
                  {doctorsData.map((doc) => (
                    <img
                      key={doc.id}
                      src={doc.photo}
                      alt={doc.name}
                      title={`${doc.name} — ${doc.role}`}
                      className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  Хірурги-імплантологи, ортодонти та терапевти з вищою медичною освітою.
                </p>
              </div>

              {/* Quick Clinic Badges */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-teal-50/70 text-teal-900 border border-teal-100 font-medium">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Гострий зубний біль?</span>
                  </div>
                  <a
                    href={`tel:${clinicInfo.phones[0]}`}
                    className="font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Терміновий прийом
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50 text-slate-700 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Графік: Пн–Сб 09:00 – 18:00</span>
                  </div>
                  <span className="text-emerald-600 font-semibold">● Працюємо</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 items-center gap-3 animate-float max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">100% Стерильність</p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Автоклавування B-класу та одноразові набори
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Trust Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200/80">
          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/60 shadow-2xs text-center sm:text-left">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-700">
              4 800+
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Задоволених пацієнтів
            </span>
          </div>
          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/60 shadow-2xs text-center sm:text-left">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-700">
              від 300 ₴
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Доступна первинна консультація
            </span>
          </div>
          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/60 shadow-2xs text-center sm:text-left">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-700">
              4 фахівці
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Хірурги, ортодонти, терапевти
            </span>
          </div>
          <div className="bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/60 shadow-2xs text-center sm:text-left">
            <span className="block text-2xl sm:text-3xl font-extrabold font-display text-teal-700 flex items-center justify-center sm:justify-start gap-1">
              5.0 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Рейтинг у Google Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
