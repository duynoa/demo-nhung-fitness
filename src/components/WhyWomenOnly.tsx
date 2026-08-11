import React from 'react';
import { ShieldCheck, UserCheck, Dumbbell, Sparkles, HeartPulse, Users, ArrowRight } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/gymData';

interface WhyWomenOnlyProps {
  onOpenTrialModal: () => void;
}

export const WhyWomenOnly: React.FC<WhyWomenOnlyProps> = ({ onOpenTrialModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    UserCheck: <UserCheck className="w-6 h-6 text-amber-400" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-amber-400" />,
    Users: <Users className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="why-us" className="py-20 bg-neutral-900/60 relative border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span>TẠI SAO CHỌN NHUNG FIT?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TẠI SAO NÊN CHỌN PHÒNG GYM <span className="text-amber-400">CHỈ DÀNH CHO NỮ?</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Nhung Fitness hiểu rằng phụ nữ cần một không gian tập luyện văn minh, riêng tư tuyệt đối để tự tin diện những bộ trang phục đẹp nhất và thỏa sức theo đuổi vóc dáng ước mơ.
          </p>
        </div>

        {/* Comparison Box: Gym Hỗn Hợp vs NHUNG FIT */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Co-Ed Gym Problems */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-lg">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <h3>Bất Tiện Tại Phòng Gym Hỗn Hợp Nam Nữ</h3>
            </div>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span>Cảm giác ngượng ngùng, e ngại ánh nhìn của nam giới xung quanh.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span>Máy tập kích thước quá to, thiết kế cho thể trạng nam giới dễ gây thô cơ đùi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span>Phải xếp hàng chờ đợi tạ nặng, không gian đông đúc và thiếu sự tinh tế.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold mt-0.5">✕</span>
                <span>HLV nam thường thiếu sự thấu hiểu về chu kỳ sinh lý, đau lưng võng & sau sinh.</span>
              </li>
            </ul>
          </div>

          {/* NHUNG FIT Advantages */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/40 shadow-xl space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <h3>Sự Khác Biệt Tuyệt Vời Tại NHUNG FIT</h3>
            </div>
            <ul className="space-y-3 text-sm text-neutral-200">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span><strong>100% Khép kín & Riêng tư:</strong> Tự do thả dáng, không áp lực, chỉ có chị em phụ nữ.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span><strong>Thiết bị tối ưu cho nữ:</strong> Tập trung siết eo thon, nâng cơ mông đào mà không lo thô bắp chân hay vai.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span><strong>HLV Nữ Đồng Hành:</strong> Giáo án cá nhân hóa theo từng chu kỳ và thể trạng riêng biệt.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span><strong>Dịch vụ chăm sóc 5 sao:</strong> Tủ đồ Locker riêng, phòng trang điểm Dyson, xông hơi thảo dược.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 6 Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-amber-500/20 via-neutral-900 to-amber-500/10 border border-amber-500/30 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white">Chị em đã sẵn sàng trải nghiệm sự khác biệt tại NHUNG FIT?</h3>
            <p className="text-neutral-300 text-sm">Nhận ngay thẻ tập thử 3 ngày Miễn Phí cùng 1 buổi đo InBody 3D tư vấn vóc dáng.</p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 transition-all text-sm flex items-center gap-2"
          >
            <span>Nhận Thẻ Tập Thử 0đ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
