import React from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { Phone, CalendarCheck, Send } from 'lucide-react';

interface StickyContactBarProps {
  onOpenBooking: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Quick Call */}
        <a
          href={`tel:${clinicInfo.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition active:scale-95 min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-teal-600 mb-0.5" />
          <span>Дзвінок</span>
        </a>

        {/* Telegram Direct */}
        <a
          href={clinicInfo.telegram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition active:scale-95 min-h-[44px]"
        >
          <Send className="w-4 h-4 text-sky-600 mb-0.5" />
          <span>Telegram</span>
        </a>

        {/* Online Booking Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition active:scale-95 shadow-md shadow-teal-700/20 min-h-[44px]"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span>Запис</span>
        </button>
      </div>
    </div>
  );
};
