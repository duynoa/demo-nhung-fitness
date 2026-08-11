import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Shield, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/gymData';

export const ContactFooter: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setIsSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Contact Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800/80 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Logo size="lg" variant="dark-bg" showTagline />
            <h3 className="text-2xl font-bold text-white">
              Sẵn Sàng Thay Đổi Vóc Dáng Cùng <span className="text-amber-400">NHUNG FIT</span>?
            </h3>
            <p className="text-sm text-neutral-400 max-w-lg">
              Ghé thăm studio của chúng tôi để được tư vấn phân tích chỉ số cơ mỡ 3D miễn phí và trải nghiệm không gian tập luyện nữ quyền đẳng cấp.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: <strong className="text-white">{CONTACT_INFO.hotline}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Giờ mở cửa: <strong className="text-white">{CONTACT_INFO.workingHours}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: {CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Newsletter / Zalo Consultation */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>ĐĂNG KÝ NHẬN CẨM NANG DINH DƯỠNG & ƯU ĐÃI</span>
            </div>
            <p className="text-xs text-neutral-300">
              Nhận bộ tài liệu "10 Mẹo Siết Eo Thon Tại Nhà & Thực Đơn Eat Clean" qua Email hoàn toàn miễn phí.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="flex-1 px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-bold text-xs text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>Gửi Cho Tôi</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Đã gửi bộ tài liệu thành công qua email của bạn!</span>
              </div>
            )}

            <div className="flex items-center gap-4 pt-2 text-xs text-neutral-400">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                Facebook Page
              </a>
              <span>•</span>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <span>•</span>
              <a href={`https://zalo.me/${CONTACT_INFO.zalo}`} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                Zalo Official
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 NHUNG FIT (Nhung Fitness). All rights reserved. Phòng tập Gym & Pilates dành riêng cho Nữ.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Chính sách bảo mật</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Điều khoản sử dụng</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
