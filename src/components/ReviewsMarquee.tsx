import React from 'react';
import { reviewsData } from '../data/reviewsData.ts';
import type { Review } from '../data/reviewsData.ts';
import { Marquee } from './ui/Marquee.tsx';
import { Star, CheckCircle, MessageSquareQuote, ThumbsUp } from 'lucide-react';

export const ReviewsMarquee: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <MessageSquareQuote className="w-4 h-4 text-teal-600" />
            <span>Соціальний доказ та довіра</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight mb-4">
            Що кажуть пацієнти про{' '}
            <span className="text-teal-700">«Смайл Дент»</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Реальні враження людей, які подолали страх перед стоматологом та отримали здорову красиву посмішку в нашій клініці.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 mb-12 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold font-display text-teal-700">5.0</span>
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                Бездоганна репутація у Полтаві
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                100% позитивних відгуків на Google Maps, Top20 та в соціальних мережах
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200/60 shrink-0">
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
            <span>120+ задоволених родин</span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee (Magic UI) */}
      <div className="w-full">
        <Marquee pauseOnHover={true} repeat={3} className="py-4">
          {reviewsData.map((review: Review) => (
            <div
              key={review.id}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between mx-2"
            >
              <div>
                {/* Header: Author & Source */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {review.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">
                        {review.author}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <span>{review.source}</span>
                        <span>•</span>
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Treatment Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-100/80">
                  <CheckCircle className="w-3 h-3 text-teal-600 shrink-0" />
                  <span className="truncate">{review.treatment}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </div>

              {/* Verified footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  {review.badge}
                </span>
                <span>м. Полтава</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
