import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard.tsx';
import {
  Zap,
  Activity,
  Smile,
  ShieldCheck,
  BadgePercent,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const BentoAdvantages: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Переваги клініки «Смайл Дент»</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Сучасні стандарти стоматології{' '}
            <span className="text-teal-700">без болю та стресу</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ми поєднали делікатний підхід, ультразвукові технології п'єзохірургії та провідні матеріали для бездоганного результату.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: П'єзохірургія (Spans 2 cols on lg) */}
          <SpotlightCard
            className="lg:col-span-2 bg-gradient-to-br from-white via-white to-teal-50/30"
            spotlightColor="rgba(13, 148, 136, 0.15)"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100/80 flex items-center justify-center text-teal-700 shadow-xs">
                <Zap className="w-7 h-7" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                Флагманська технологія
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-3">
              Ультразвукова п'єзохірургія замість щипців та молотка
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Атипові та складні видалення зубів мудрості виконуються спеціальним п'єзотомом. Ультразвукові мікровібрації розсікають тільки кісткову тканину, абсолютно не травмуючи м'які ясна, судини та нервові закінчення. Це гарантує швидке загоєння та відсутність післяопераційного набряку.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Збереження цілісності кістки</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Загоєння в 2 рази швидше</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Дентальна імплантація MegaGen */}
          <SpotlightCard
            className="bg-white"
            spotlightColor="rgba(2, 132, 199, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-100/80 flex items-center justify-center text-sky-700 mb-6 shadow-xs">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
              Імплантація MegaGen (Корея)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Встановлення преміальних імплантів із приживлюваністю 98.7%. Тотальні реабілітації при повній втраті зубів за протоколами All-on-4 та All-on-6.
            </p>
            <div className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-xl inline-block">
              Офіційний прайс: від 15 000 грн
            </div>
          </SpotlightCard>

          {/* Card 3: Ортодонтія та брекети */}
          <SpotlightCard
            className="bg-white"
            spotlightColor="rgba(13, 148, 136, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-100/80 flex items-center justify-center text-teal-700 mb-6 shadow-xs">
              <Smile className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
              Ортодонтія та виправлення прикусу
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Металеві та непомітні керамічні брекет-системи, самолігуючі апарати та ретенційні капи під керівництвом досвідченого лікаря-ортодонта.
            </p>
            <div className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl inline-block">
              Брекети від 13 000 грн
            </div>
          </SpotlightCard>

          {/* Card 4: Безболісність та комфорт */}
          <SpotlightCard
            className="bg-white"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 flex items-center justify-center text-emerald-700 mb-6 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
              100% Безболісна карпульна анестезія
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Використовуємо очищені європейські знеболювальні препарати та надтонкі голки. Ви не відчуєте навіть уколу — лікування проходить спокійно та впевнено.
            </p>
          </SpotlightCard>

          {/* Card 5: Прозорі фіксовані ціни */}
          <SpotlightCard
            className="bg-white"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100/80 flex items-center justify-center text-amber-700 mb-6 shadow-xs">
              <BadgePercent className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
              Прозорий прайс без прихованих доплат
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Вартість узгоджується на первинній консультації та фіксується у плані лікування. Жодних несподіванок під час розрахунку.
            </p>
            <div className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl inline-block">
              Консультація лікаря — 300 грн
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
