import { doctorsData } from '../data/teamData.ts';
import type { Doctor } from '../data/teamData.ts';
import { Award, Calendar, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctor }) => {
  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <UserCheck className="w-4 h-4 text-teal-600" />
            <span>Експертиза E-E-A-T</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Команда досвідчених лікарів{' '}
            <span className="text-teal-700">«Смайл Дент»</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Кожен лікар нашої клініки має вищу медичну освіту, регулярно підвищує кваліфікацію на міжнародних семінарах та використовує сучасні доказові протоколи лікування.
          </p>
        </div>

        {/* Doctors Grid (4 doctors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor: Doctor) => (
            <div
              key={doctor.id}
              className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Doctor Photo Container */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-200">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-teal-800 text-xs font-bold shadow-xs">
                  <Award className="w-3.5 h-3.5 text-teal-600" />
                  Вища кваліфікація
                </span>
              </div>

              {/* Doctor Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold text-teal-700 uppercase tracking-wider mb-1.5">
                    {doctor.role}
                  </span>
                  <h3 className="text-lg font-bold font-display text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {doctor.specialization}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 mb-6">
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-4">
                      {doctor.highlights}
                    </p>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onSelectDoctor(doctor.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-teal-600/30 text-teal-700 font-semibold text-sm hover:bg-teal-600 hover:text-white hover:border-teal-600 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Записатися до лікаря</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-teal-50/70 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                Індивідуальний консиліум у складних клінічних випадках
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Хірург-імплантолог та ортодонт спільно розробляють комплексну схему лікування для максимальної надійності.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-teal-800 text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-teal-600" />
            <span>Безпека та прогнозований результат</span>
          </div>
        </div>
      </div>
    </section>
  );
};
