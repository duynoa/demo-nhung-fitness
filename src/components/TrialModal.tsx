import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, Clock, User, Phone, MapPin, Heart, Shield } from 'lucide-react';
import { Logo } from './Logo';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Gói Tập Thử 3 Ngày Miễn Phí (Gym + Yoga + Pilates)'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Giảm mỡ & Eo thon');
  const [timePreference, setTimePreference] = useState('Sáng (07:00 - 11:00)');
  const [selectedProgram, setSelectedProgram] = useState(initialProgram);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl overflow-hidden bg-neutral-900 border border-amber-500/30 rounded-2xl shadow-2xl">
        {/* Glow Header Background */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center mb-3">
                <Logo size="md" variant="dark-bg" showTagline />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                DÀNH RIÊNG CHO PHÁI ĐẸP
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                ĐĂNG KÝ TẬP THỬ 3 NGÀY MIỄN PHÍ
              </h3>
              <p className="text-sm text-neutral-300 mt-1">
                Trải nghiệm trọn vẹn phòng tập Gym, Yoga, Pilates & Đo chỉ số InBody 3D cùng HLV Nữ
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Họ và tên của bạn <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Phương Anh"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-800/80 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Số điện thoại Zalo <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0988 xxx xxx"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-800/80 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Mục tiêu vóc dáng
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-800/80 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-amber-400 text-sm"
                  >
                    <option value="Giảm mỡ & Eo thon">Giảm mỡ & Eo thon</option>
                    <option value="Độ mông đào S-Line">Độ mông đào S-Line</option>
                    <option value="Sửa tư thế & Đau vai gáy">Sửa tư thế & Đau vai gáy</option>
                    <option value="Phục hồi vóc dáng sau sinh">Phục hồi vóc dáng sau sinh</option>
                    <option value="Tập Pilates Reformer">Tập Pilates Reformer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Khung giờ tập mong muốn
                  </label>
                  <select
                    value={timePreference}
                    onChange={(e) => setTimePreference(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-800/80 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-amber-400 text-sm"
                  >
                    <option value="Sáng (07:00 - 11:00)">Sáng (07:00 - 11:00)</option>
                    <option value="Trưa (11:30 - 13:30)">Trưa (11:30 - 13:30)</option>
                    <option value="Chiều (16:30 - 19:30)">Chiều (16:30 - 19:30)</option>
                    <option value="Tối (19:30 - 21:30)">Tối (19:30 - 21:30)</option>
                  </select>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2 text-amber-300 font-medium">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Quyền lợi gói tập thử 0 đồng:</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-6 list-disc text-neutral-300">
                  <li>100% Không gian riêng tư chỉ có nữ</li>
                  <li>Tặng 01 buổi tập 1:1 cùng HLV Nữ</li>
                  <li>Đo InBody 3D phân tích mỡ thừa</li>
                  <li>Dùng thử Sauna xông hơi thảo dược</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-amber-500/20 text-base flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-neutral-900" />
                XÁC NHẬN ĐĂNG KÝ TẬP THỬ
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-amber-500/20 border-2 border-amber-400 text-amber-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">ĐĂNG KÝ THÀNH CÔNG!</h3>
            <p className="text-neutral-300 text-sm max-w-md mx-auto">
              Cảm ơn chị <strong className="text-amber-400">{fullName}</strong> đã quan tâm đến <strong className="text-white">NHUNG FIT</strong>.
              Bộ phận tư vấn nữ sẽ liên hệ với chị qua SĐT <strong className="text-amber-300">{phone}</strong> trong vòng 15 phút để sắp xếp HLV và lịch tập thử!
            </p>

            <div className="p-4 rounded-xl bg-neutral-800/80 text-left text-xs space-y-1.5 text-neutral-300 max-w-sm mx-auto border border-neutral-700">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>88 Nguyễn Thị Minh Khai, Q.3, TP.HCM</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Giờ mở cửa: 06:00 - 21:30 hàng ngày</span>
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-2 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Hoàn tất & Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
