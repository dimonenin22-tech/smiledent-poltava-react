import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  doctor: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const casesData: ClinicalCase[] = [
  {
    id: 'case_01',
    title: 'Дентальна імплантація MegaGen та цирконієві коронки',
    category: 'Хірургія та імплантація',
    doctor: 'Хірург-імплантолог Скрипник В.М.',
    description: 'Відновлення відсутніх зубів жувальної групи. Встановлено імпланти MegaGen AnyRidge з негайним навантаженням та високоточними коронками з діоксиду цирконію.',
    beforeImg: 'assets/before_after/01_implant_megagen_before.jpg',
    afterImg: 'assets/before_after/01_implant_megagen_after.jpg',
  },
  {
    id: 'case_02',
    title: 'Виправлення прикусу та вирівнювання зубного ряду',
    category: 'Ортодонтія',
    doctor: 'Стоматолог-ортодонт Скрипник Є.В.',
    description: 'Корекція скупченості зубів та глибокого прикусу керамічною брекет-системою. Досягнуто правильної оклюзії та гармонійної форми посмішки.',
    beforeImg: 'assets/before_after/02_braces_ortho_before.jpg',
    afterImg: 'assets/before_after/02_braces_ortho_after.jpg',
  },
  {
    id: 'case_03',
    title: 'Естетичні керамічні вініри E.max',
    category: 'Ортопедія та естетика',
    doctor: 'Лікар-стоматолог Васильєва І.І.',
    description: 'Малоінвазивна підготовка та фіксація тонкостінних керамічних вінірів у зоні посмішки. Закриття діастеми, вирівнювання кольору та створення сяючої білизни.',
    beforeImg: 'assets/before_after/03_ceramic_veneers_before.jpg',
    afterImg: 'assets/before_after/03_ceramic_veneers_after.jpg',
  },
  {
    id: 'case_04',
    title: 'Художня композитна реставрація фронтальних зубів',
    category: 'Терапія та реставрація',
    doctor: 'Лікар-стоматолог Семененко В.І.',
    description: 'Відновлення анатомічної форми та прозорості ріжучого краю після сколу. Використано наногібридний композит з ідеальною інтеграцією у природну емаль.',
    beforeImg: 'assets/before_after/04_aesthetic_restoration_before.jpg',
    afterImg: 'assets/before_after/04_aesthetic_restoration_after.jpg',
  },
  {
    id: 'case_05',
    title: 'Комплексна гігієна Air-Flow та зняття зубного каменю',
    category: 'Профілактика та гігієна',
    doctor: 'Клінічний терапевт клініки',
    description: "Ультразвукове зняття над'ясенних і під'ясенних відкладень, порошкоструминна обробка Air-Flow дрібнодисперсним гліцином та глибоке полірування емалі.",
    beforeImg: 'assets/before_after/05_hygiene_airflow_before.jpg',
    afterImg: 'assets/before_after/05_hygiene_airflow_after.jpg',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = casesData[activeCaseIndex];

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="cases" className="py-20 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Реальні клінічні результати</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Кейси пацієнтів <span className="text-teal-700">«До та Після»</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Потягніть інтерактивний повзунок вліво або вправо, щоб наочно оцінити точність та естетику лікування в нашій клініці.
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {casesData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200/80'
              }`}
            >
              Кейс {idx + 1}: {item.category.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Main Interactive Slider Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200/80">
          {/* Active Case Info Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                {activeCase.category} • {activeCase.doctor}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                {activeCase.title}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
              <ArrowLeftRight className="w-3.5 h-3.5 text-teal-600" />
              <span>Потягніть повзунок</span>
            </div>
          </div>

          {/* STRICT ANTI-STRETCH SLIDER CONTAINER: CSS clip-path & object-fit: cover */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden select-none touch-none cursor-ew-resize bg-slate-900 ring-1 ring-slate-200 shadow-inner"
          >
            {/* UNDER LAYER: AFTER (ПІСЛЯ) - 100% width/height, object-fit: cover */}
            <img
              src={activeCase.afterImg}
              alt={`${activeCase.title} - Після лікування`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              loading="eager"
            />
            <div className="absolute bottom-4 right-4 z-10 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-white/20 pointer-events-none">
              ПІСЛЯ
            </div>

            {/* TOP LAYER: BEFORE (ДО) - masked EXCLUSIVELY with CSS clip-path to prevent image stretching */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              style={{
                clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
                WebkitClipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)`,
              }}
            >
              <img
                src={activeCase.beforeImg}
                alt={`${activeCase.title} - До лікування`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 z-10 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-white/20 pointer-events-none">
                ДО
              </div>
            </div>

            {/* DIVIDER LINE & DRAGGABLE HANDLE */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Vertical divider line */}
              <div className="absolute top-0 bottom-0 -left-0.5 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

              {/* Circular Handle */}
              <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-teal-700 shadow-xl border-2 border-teal-600 flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Accessible Range Input for Keyboard & Screen Readers */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Порівняння фото До та Після"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
            />
          </div>

          {/* Case Clinical Notes */}
          <div className="mt-6 p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold text-slate-900">Протокол виконання: </span>
              {activeCase.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
