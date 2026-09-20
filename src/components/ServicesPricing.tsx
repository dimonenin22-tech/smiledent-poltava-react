import React, { useState, useMemo } from 'react';
import { priceCategories } from '../data/clinicData.ts';
import type { PriceCategory, PriceItem } from '../data/clinicData.ts';
import { Search, Tag, Calendar, Sparkles, Check, FileText } from 'lucide-react';

interface ServicesPricingProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items based on active category and live search query
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return priceCategories
      .map((cat: PriceCategory) => {
        // If category is filtered out
        if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) {
          return null;
        }

        // If searching
        if (!query) {
          return cat;
        }

        const matchedItems = cat.items.filter((item: PriceItem) =>
          item.title.toLowerCase().includes(query)
        );

        if (matchedItems.length === 0) {
          return null;
        }

        return {
          ...cat,
          items: matchedItems,
        };
      })
      .filter((cat): cat is PriceCategory => cat !== null);
  }, [selectedCategoryId, searchQuery]);

  const totalMatchesCount = filteredData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="prices" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Tag className="w-4 h-4 text-teal-600" />
            <span>Прозоре ціноутворення</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Офіційний прайс-лист <span className="text-teal-700">послуг клініки</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Повна цифрова база 9 напрямків стоматології. Вартість лікування фіксується у плані до початку процедур — без прихованих платежів.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук послуги (наприклад: консультація, брекети, імплант, пломба)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-800 text-sm sm:text-base focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Очистити
              </button>
            )}
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategoryId === 'all'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Всі категорії ({priceCategories.length})
          </button>
          {priceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategoryId === cat.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pricing Lists */}
        {filteredData.length > 0 ? (
          <div className="space-y-10">
            {filteredData.map((category: PriceCategory) => (
              <div
                key={category.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs"
              >
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                    {category.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200">
                    {category.items.length} позицій
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item: PriceItem, idx: number) => (
                    <div
                      key={idx}
                      className="group bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/70 hover:border-teal-500/40 hover:shadow-md transition-all flex items-center justify-between gap-4"
                    >
                      <div className="flex-grow">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-display font-bold text-sm sm:text-base text-teal-800 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100/80 whitespace-nowrap">
                          {item.price}
                        </span>

                        <button
                          onClick={() => onSelectService(item.title)}
                          title={`Записатися на «${item.title}»`}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-teal-600 text-slate-600 hover:text-white transition-all cursor-pointer"
                        >
                          <Calendar className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-700">
              Послуг за запитом «{searchQuery}» не знайдено
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Спробуйте інше ключове слово або перегляньте всі категорії.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryId('all');
              }}
              className="mt-4 text-xs font-semibold text-teal-700 underline"
            >
              Скинути фільтри
            </button>
          </div>
        )}

        {/* Footnote Guarantee */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              Усі ціни вказані у національній валюті (UAH) згідно з офіційним прейскурантом клініки «Смайл Дент».
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-teal-800 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Знайдено {totalMatchesCount} послуг</span>
          </div>
        </div>
      </div>
    </section>
  );
};
