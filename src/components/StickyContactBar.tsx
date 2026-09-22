import React from 'react';
import { clinicInfo } from '../data/clinicData.ts';
import { Phone, CalendarCheck, Send } from 'lucide-react';

interface StickyContactBarProps {
  onOpenBooking: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 py-2.5 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Quick Call */}
        <a
          href={`tel:${clinicInfo.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:border-amber-500/30 text-xs font-semibold transition active:scale-95 min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Дзвінок</span>
        </a>

        {/* Telegram Direct */}
        <a
          href={clinicInfo.telegram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-950/40 hover:bg-sky-950/60 text-sky-300 border border-sky-800/40 text-xs font-semibold transition active:scale-95 min-h-[44px]"
        >
          <Send className="w-4 h-4 text-sky-400 mb-0.5" />
          <span>Telegram</span>
        </a>

        {/* Online Booking Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-neutral-950 text-xs font-bold transition active:scale-95 shadow-lg shadow-amber-500/20 min-h-[44px]"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span>Запис</span>
        </button>
      </div>
    </div>
  );
};
