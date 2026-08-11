import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/gymData';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  const phoneClean = CONTACT_INFO.hotline.split('/')[0].replace(/\./g, '').trim();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 animate-fadeIn">
      {/* Quick Zalo Chat Button */}
      <a
        href={`https://zalo.me/${CONTACT_INFO.zalo}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl hover:scale-105 transition-all text-xs font-bold border border-blue-400/40 group"
        title="Tư vấn Zalo ngay"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">Chat Zalo Tư Vấn</span>
      </a>

      {/* Call Hotline Button */}
      <a
        href={`tel:${phoneClean}`}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:scale-105 transition-all text-xs font-bold border border-emerald-400/40 group"
        title="Gọi hotline ngay"
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="hidden sm:inline">Gọi {phoneClean}</span>
      </a>

      {/* Main Tập Thử 0đ Glowing Button */}
      <button
        onClick={onOpenTrialModal}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-neutral-950 shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all text-xs font-extrabold uppercase tracking-wider border-2 border-amber-300 ring-4 ring-amber-400/20"
      >
        <Sparkles className="w-4 h-4 text-neutral-950 animate-spin-slow" />
        <span>Tập Thử 0đ</span>
      </button>
    </div>
  );
};
