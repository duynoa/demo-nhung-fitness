import React, { useState } from 'react';
import { Sparkles, Shield, ArrowRight, Play, CheckCircle, Heart, Star, Users, Dumbbell } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onOpenTrialModal: (program?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1920"
          alt="Nhung Fitness Women Studio"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        {/* Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>PHÒNG TẬP TỰ DO - 100% DÀNH RIÊNG CHO NỮ</span>
            </div>

            {/* Brand Title Display */}
            <div className="space-y-2">
              <div className="mb-2">
                <Logo size="xl" variant="dark-bg" showTagline />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                KHÔNG GIAN TẬP LUYỆN <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                  ĐẲNG CẤP DÀNH CHO PHÁI ĐẸP
                </span>
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Tự do diện đồ tập yêu thích, tự tin vận động trong không gian riêng tư. Đội ngũ <strong className="text-amber-400 font-semibold">HLV Nữ 1:1</strong> am hiểu sinh lý nữ, hỗ trợ chị em siết eo thon, nâng cơ mông đào & cải thiện vóc dáng S-Line quyến rũ.
            </p>

            {/* Value Highlights checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 py-2 text-sm text-neutral-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gym & Pilates Reformer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>HLV Nữ Đồng Hành 1:1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Máy Sấy Dyson & Sauna 5*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Đo InBody & Dinh Dưỡng</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenTrialModal()}
                className="py-4 px-8 rounded-xl font-extrabold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25 text-base flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-5 h-5 text-neutral-900 group-hover:rotate-12 transition-transform" />
                <span>ĐĂNG KÝ TẬP THỬ 0 ĐỒNG</span>
                <ArrowRight className="w-5 h-5 text-neutral-900 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="py-4 px-6 rounded-xl font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 transition-all text-sm flex items-center justify-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-amber-400" />
                </div>
                <span>Xem Video Không Gian Studio</span>
              </button>
            </div>

            {/* Social Proof Trust Bar */}
            <div className="pt-4 flex items-center gap-4 text-xs text-neutral-400 border-t border-neutral-800/80">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Member" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold text-white ml-1">4.9/5.0</span>
                </div>
                <span>Hơn 600+ chị em phụ nữ đã thay đổi vóc dáng tại NHUNG FIT</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            
            {/* Feature Card Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl p-2">
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800"
                alt="Pilates Reformer for Women"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
              />

              {/* Floating Overlay Badge 1 */}
              <div className="absolute top-6 left-6 p-3 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-700/80 shadow-lg text-xs space-y-0.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Heart className="w-4 h-4 fill-amber-400" />
                  <span>CÔNG NGHỆ PILATES REFORMER</span>
                </div>
                <p className="text-neutral-300">Siết eo thon & phẳng bụng rãnh 11</p>
              </div>

              {/* Floating Overlay Badge 2 */}
              <div className="absolute bottom-6 right-6 p-3.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-amber-500/30 shadow-xl max-w-xs space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Dumbbell className="w-4 h-4 text-amber-400" />
                  <span>HLV Nữ 1:1 Đồng Hành</span>
                </div>
                <p className="text-[11px] text-neutral-300">
                  "Không lo cơ bắp bị thô, bài tập thiết kế chuẩn khung xương nữ giới."
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                <span className="block text-xl font-black text-amber-400">100%</span>
                <span className="text-[11px] text-neutral-400">Chỉ Cho Nữ</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                <span className="block text-xl font-black text-amber-400">1:1</span>
                <span className="text-[11px] text-neutral-400">HLV Cá Nhân</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                <span className="block text-xl font-black text-amber-400">5 Star</span>
                <span className="text-[11px] text-neutral-400">Tiện Nghi Dịch Vụ</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
          <div className="relative w-full max-w-4xl aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-neutral-800 text-white text-xs rounded-lg hover:bg-neutral-700"
            >
              Đóng Video [X]
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-neutral-900 to-neutral-950">
              <Logo size="lg" variant="dark-bg" showTagline />
              <h3 className="text-xl font-bold text-white mt-4 mb-2">Video Giới Thiệu Không Gian Phòng Tập NHUNG FIT</h3>
              <p className="text-neutral-400 text-sm max-w-md">
                Hệ thống máy tập cao cấp nhập khẩu, studio Pilates Reformer, khu vực xông hơi thảo dược & Smoothie Bar phục vụ chị em.
              </p>
              <button
                onClick={() => {
                  setIsVideoOpen(false);
                  onOpenTrialModal();
                }}
                className="mt-6 px-6 py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 text-sm"
              >
                Đăng Ký Đến Xem Phòng Trực Tiếp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
