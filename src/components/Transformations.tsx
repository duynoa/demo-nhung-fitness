import React from 'react';
import { Sparkles, Trophy, Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

interface TransformationsProps {
  onOpenTrialModal: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="py-20 bg-neutral-900/80 relative border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>KẾT QUẢ THAY ĐỔI VÓC DÁNG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            HÀNH TRÌNH TỎA SÁNG CỦA <span className="text-amber-400">HỘI VIÊN NHUNG FIT</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Hàng trăm chị em phụ nữ đã vượt qua sự e ngại ban đầu để sở hữu đường cong S-Line kiêu hãnh và thần thái tự tin rạng rỡ.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
            >
              <div className="space-y-3">
                {/* User info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/40"
                  />
                  <div>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <span>{item.name}</span>
                      <span className="text-xs font-normal text-neutral-400">({item.age} tuổi)</span>
                    </h3>
                    <p className="text-xs text-neutral-400">{item.profession}</p>
                  </div>
                </div>

                {/* Result Highlight Pill */}
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-between">
                  <span>Mục tiêu đạt được:</span>
                  <span className="text-amber-400 font-extrabold">{item.result}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Bottom Rating & Program */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-amber-400 font-medium">
                  Gói tập: {item.programUsed}
                </span>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 transition-all shadow-xl shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4 text-neutral-900" />
            <span>ĐĂNG KÝ ĐỂ BẮT ĐẦU HÀNH TRÌNH TỎA SÁNG CỦA BẠN</span>
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
