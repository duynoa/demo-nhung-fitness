import React from 'react';
import { Check, Sparkles, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>BẢNG GIÁ & ƯU ĐÃI THÁNG NÀY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CÁC GÓI TẬP LINH HOẠT <span className="text-amber-400">DÀNH CHO PHÁI ĐẸP</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Ưu đãi giảm tới 35% cho 50 hội viên nữ đầu tiên đăng ký hôm nay. Tặng kèm bình giữ nhiệt NHUNG FIT & buổi tập Pilates Reformer đẳng cấp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border-2 border-amber-400 shadow-2xl shadow-amber-500/15 md:-translate-y-2'
                  : 'bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                    plan.popular
                      ? 'bg-amber-400 text-neutral-950'
                      : 'bg-neutral-800 text-amber-300 border border-neutral-700'
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-center pt-2 pb-6 border-b border-neutral-800">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-amber-400 font-medium mb-4">{plan.duration}</p>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-neutral-500 line-through font-semibold">
                      {plan.originalPrice}
                    </span>
                    <span className="text-3xl font-black text-white">
                      {plan.salePrice}
                    </span>
                  </div>
                  <span className="text-xs text-amber-300 font-semibold block mt-1">
                    ({plan.pricePerMonth})
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="my-4 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center text-xs text-amber-300 font-medium">
                  ✨ {plan.highlight}
                </div>

                {/* Feature List */}
                <ul className="space-y-3 py-2 text-xs text-neutral-300">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-800 mt-6 space-y-2">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 shadow-lg shadow-amber-500/20'
                      : 'text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Đăng Ký Gói {plan.name.split(' ')[1] || 'Tập'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-neutral-500">
                  Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
