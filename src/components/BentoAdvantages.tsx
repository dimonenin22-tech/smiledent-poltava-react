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
    <section id="advantages" className="py-20 bg-neutral-950 relative overflow-hidden text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Переваги клініки «Смайл Дент»</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Сучасні стандарти стоматології{' '}
            <span className="text-amber-400">без болю та стресу</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Ми поєднали делікатний підхід, ультразвукові технології п'єзохірургії та провідні матеріали для бездоганного результату.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: П'єзохірургія (Spans 2 cols on lg) */}
          <SpotlightCard
            className="lg:col-span-2 bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/20 border border-neutral-800"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Флагманська технологія
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              Ультразвукова п'єзохірургія замість щипців та молотка
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Атипові та складні видалення зубів мудрості виконуються спеціальним п'єзотомом. Ультразвукові мікровібрації розсікають тільки кісткову тканину, абсолютно не травмуючи м'які ясна, судини та нервові закінчення. Це гарантує швидке загоєння та відсутність післяопераційного набряку.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Збереження цілісності кістки</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Загоєння в 2 рази швидше</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Дентальна імплантація MegaGen */}
          <SpotlightCard
            className="bg-neutral-900/90 border border-neutral-800"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-sm">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              Імплантація MegaGen (Корея)
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Встановлення преміальних імплантів із приживлюваністю 98.7%. Тотальні реабілітації при повній втраті зубів за протоколами All-on-4 та All-on-6.
            </p>
            <div className="text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-500/30 px-3 py-1.5 rounded-xl inline-block">
              Офіційний прайс: від 15 000 грн
            </div>
          </SpotlightCard>

          {/* Card 3: Ортодонтія та брекети */}
          <SpotlightCard
            className="bg-neutral-900/90 border border-neutral-800"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-sm">
              <Smile className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              Ортодонтія та виправлення прикусу
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Металеві та непомітні керамічні брекет-системи, самолігуючі апарати та ретенційні капи під керівництвом досвідченого лікаря-ортодонта.
            </p>
            <div className="text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-500/30 px-3 py-1.5 rounded-xl inline-block">
              Брекети від 13 000 грн
            </div>
          </SpotlightCard>

          {/* Card 4: Безболісність та комфорт */}
          <SpotlightCard
            className="bg-neutral-900/90 border border-neutral-800"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              100% Безболісна карпульна анестезія
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Використовуємо очищені європейські знеболювальні препарати та надтонкі голки. Ви не відчуєте навіть уколу — лікування проходить спокійно та впевнено.
            </p>
          </SpotlightCard>

          {/* Card 5: Прозорі фіксовані ціни */}
          <SpotlightCard
            className="bg-neutral-900/90 border border-neutral-800"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-sm">
              <BadgePercent className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-3">
              Прозорий прайс без прихованих доплат
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Вартість узгоджується на первинній консультації та фіксується у плані лікування. Жодних несподіванок під час розрахунку.
            </p>
            <div className="text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-500/30 px-3 py-1.5 rounded-xl inline-block">
              Консультація лікаря — 300 грн
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
