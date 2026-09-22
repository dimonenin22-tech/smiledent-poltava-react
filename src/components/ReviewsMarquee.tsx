import React from 'react';
import { reviewsData } from '../data/reviewsData.ts';
import type { Review } from '../data/reviewsData.ts';
import { Marquee } from './ui/Marquee.tsx';
import { Star, CheckCircle, MessageSquareQuote, ThumbsUp } from 'lucide-react';

export const ReviewsMarquee: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-neutral-950 relative overflow-hidden text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>Соціальний доказ та довіра</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Що кажуть пацієнти про{' '}
            <span className="text-amber-400">«Смайл Дент»</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Реальні враження людей, які подолали страх перед стоматологом та отримали здорову красиву посмішку в нашій клініці.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-2xl mx-auto bg-neutral-900/90 rounded-3xl p-6 mb-12 border border-neutral-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-extrabold font-display text-amber-400">5.0</span>
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Бездоганна репутація у Полтаві
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                100% позитивних відгуків на Google Maps, Top20 та в соціальних мережах
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-4 py-2 rounded-xl border border-emerald-500/30 shrink-0">
            <ThumbsUp className="w-4 h-4 text-emerald-400" />
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
              className="w-[320px] sm:w-[380px] shrink-0 bg-neutral-900/90 rounded-3xl p-6 border border-neutral-800 shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between mx-2 text-white"
            >
              <div>
                {/* Header: Author & Source */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-neutral-950 font-bold flex items-center justify-center text-sm shadow-md">
                      {review.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white leading-tight">
                        {review.author}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-neutral-400 mt-0.5">
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
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/50 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
                  <CheckCircle className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{review.treatment}</span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </div>

              {/* Verified footer */}
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="text-emerald-400 font-medium flex items-center gap-1">
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
