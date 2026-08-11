import React from 'react';
import { Star, MessageCircle, Heart, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-900 relative border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ĐÁNH GIÁ TỪ HỘI VIÊN NỮ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CẢM NHẬN CHÂN THỰC TỪ <span className="text-amber-400">CHỊ EM TẠI NHUNG FIT</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Hàng trăm phản hồi tích cực và nụ cười rạng rỡ của chị em mỗi ngày chính là động lực lớn nhất của đội ngũ Nhung Fitness.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold">
                    Đã Xác Nhận Tập Thật
                  </span>
                </div>

                <p className="text-sm text-neutral-200 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400"
                />
                <div>
                  <h3 className="text-sm font-bold text-white">{t.name}</h3>
                  <p className="text-xs text-neutral-400">{t.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
