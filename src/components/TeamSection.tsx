import { doctorsData } from '../data/teamData.ts';
import type { Doctor } from '../data/teamData.ts';
import { Award, Calendar, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctor }) => {
  return (
    <section id="team" className="py-20 bg-neutral-950 relative overflow-hidden text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Експертиза E-E-A-T</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Команда досвідчених лікарів{' '}
            <span className="text-amber-400">«Смайл Дент»</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Кожен лікар нашої клініки має вищу медичну освіту, регулярно підвищує кваліфікацію на міжнародних семінарах та використовує сучасні доказові протоколи лікування.
          </p>
        </div>

        {/* Doctors Grid (4 doctors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor: Doctor) => (
            <div
              key={doctor.id}
              className="group flex flex-col bg-neutral-900/90 rounded-3xl border border-neutral-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Doctor Photo Container */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-neutral-950">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/90 backdrop-blur-xs text-amber-300 border border-neutral-800 text-xs font-bold shadow-md">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Вища кваліфікація
                </span>
              </div>

              {/* Doctor Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                    {doctor.role}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-medium leading-relaxed mb-4">
                    {doctor.specialization}
                  </p>

                  <div className="pt-3 border-t border-neutral-800 mb-6">
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-4">
                      {doctor.highlights}
                    </p>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onSelectDoctor(doctor.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-semibold text-sm hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:text-neutral-950 hover:font-bold hover:border-amber-500 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Записатися до лікаря</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base sm:text-lg">
                Індивідуальний консиліум у складних клінічних випадках
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                Хірург-імплантолог та ортодонт спільно розробляють комплексну схему лікування для максимальної надійності.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-amber-300 text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
            <span>Безпека та прогнозований результат</span>
          </div>
        </div>
      </div>
    </section>
  );
};
