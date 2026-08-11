import React, { useState } from 'react';
import { Calculator, Flame, Scale, Activity, Sparkles, ArrowRight, Heart } from 'lucide-react';

interface FitnessCalculatorProps {
  onOpenTrialModal: (recommendedProgram?: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onOpenTrialModal }) => {
  const [age, setAge] = useState<number>(26);
  const [height, setHeight] = useState<number>(162);
  const [weight, setWeight] = useState<number>(54);
  const [goal, setGoal] = useState<string>('giam_mo_eo_thon');
  const [activityLevel, setActivityLevel] = useState<number>(1.375); // Light activity default

  // Formula calculations for females (Mifflin-St Jeor formula for women):
  // BMR = 10 * weight + 6.25 * height - 5 * age - 161
  const bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  const tdee = Math.round(bmr * activityLevel);

  // Target calories based on goal
  let targetCalories = tdee;
  let recommendedProgram = 'Personal Training 1:1 Dành Cho Nữ';

  if (goal === 'giam_mo_eo_thon') {
    targetCalories = Math.round(tdee - 400);
    recommendedProgram = 'Personal Training 1:1 + Gym Booty & Core';
  } else if (goal === 'do_mong_dao') {
    targetCalories = Math.round(tdee + 200);
    recommendedProgram = 'Gói Gym Nữ Booty S-Line + Pilates Reformer';
  } else if (goal === 'sua_tu_the') {
    targetCalories = tdee;
    recommendedProgram = 'Pilates Reformer + Yoga Nội Tiết';
  } else if (goal === 'phuc_hoi_sau_sinh') {
    targetCalories = Math.round(tdee + 100);
    recommendedProgram = 'Khóa Phục Hồi Vóc Dáng Sau Sinh 1:1';
  }

  // BMI Calculation: weight (kg) / (height (m))^2
  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let bmiCategory = 'Cân đối';
  let bmiColor = 'text-emerald-400';

  if (bmi < 18.5) {
    bmiCategory = 'Gầy / Thiếu cơ';
    bmiColor = 'text-amber-400';
  } else if (bmi >= 18.5 && bmi < 23) {
    bmiCategory = 'Thân hình Cân Đối';
    bmiColor = 'text-emerald-400';
  } else if (bmi >= 23 && bmi < 25) {
    bmiCategory = 'Thừa mỡ nhẹ / Cần siết cơ';
    bmiColor = 'text-amber-400';
  } else {
    bmiCategory = 'Thừa mỡ / Cần giảm cân';
    bmiColor = 'text-rose-400';
  }

  const waterIntake = (weight * 0.035).toFixed(1);

  return (
    <section id="calculator" className="py-20 bg-neutral-900 relative border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>CÔNG CỤ TÍNH VÓC DÁNG NỮ GIỚI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TÍNH BMI, TDEE & <span className="text-amber-400">LỘ TRÌNH VÓC DÁNG LÝ TƯỞNG</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Nhập chỉ số cá nhân để khám phá nhu cầu Calo tiêu thụ hàng ngày và gợi ý lộ trình tập luyện thiết kế riêng cho phái đẹp.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Activity className="w-5 h-5 text-amber-400" />
              <span>Nhập Thông Số Cá Nhân Của Bạn</span>
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Tuổi của bạn
                </label>
                <input
                  type="number"
                  min="16"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white font-bold text-center focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Chiều cao (cm)
                </label>
                <input
                  type="number"
                  min="140"
                  max="200"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white font-bold text-center focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Cân nặng (kg)
                </label>
                <input
                  type="number"
                  min="35"
                  max="120"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white font-bold text-center focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Goal Select */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-2">
                Mục tiêu vóc dáng mong muốn
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'giam_mo_eo_thon', label: '🔥 Giảm mỡ & Eo thon' },
                  { id: 'do_mong_dao', label: '🍑 Nâng cơ mông đào' },
                  { id: 'sua_tu_the', label: '🧘 Sửa gù lưng & Thon đùi' },
                  { id: 'phuc_hoi_sau_sinh', label: '🌸 Phục hồi vóc dáng sau sinh' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                      goal === g.id
                        ? 'bg-amber-500/15 border-amber-400 text-amber-300'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Mức độ vận động hàng ngày
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white text-xs focus:border-amber-400 focus:outline-none"
              >
                <option value={1.2}>Ít vận động (Dân văn phòng ngồi nhiều)</option>
                <option value={1.375}>Vận động nhẹ (Tập 1 - 3 buổi / tuần)</option>
                <option value={1.55}>Vận động vừa (Tập 3 - 5 buổi / tuần)</option>
                <option value={1.725}>Vận động cao (Tập 6 - 7 buổi / tuần)</option>
              </select>
            </div>
          </div>

          {/* Results & Recommendation Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/30 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Kết Quả Chỉ Số Của Bạn</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
                Dành cho Nữ
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center">
                <span className="text-[11px] text-neutral-400 block mb-1">Chỉ số BMI</span>
                <span className={`text-2xl font-black ${bmiColor}`}>{bmi}</span>
                <span className="text-[10px] font-semibold text-neutral-300 block mt-1">{bmiCategory}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center">
                <span className="text-[11px] text-neutral-400 block mb-1">Calo TDEE (Duy trì)</span>
                <span className="text-2xl font-black text-amber-400">{tdee}</span>
                <span className="text-[10px] text-neutral-400 block mt-1">kcal / ngày</span>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center col-span-2 sm:col-span-1">
                <span className="text-[11px] text-neutral-400 block mb-1">Calo Mục Tiêu</span>
                <span className="text-2xl font-black text-amber-300">{targetCalories}</span>
                <span className="text-[10px] text-neutral-400 block mt-1">kcal / ngày</span>
              </div>
            </div>

            {/* Water Recommendation */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Heart className="w-4 h-4 text-amber-400" />
                <span>Nhu cầu nước uống tối thiểu:</span>
              </div>
              <span className="font-bold text-amber-300 text-sm">{waterIntake} Lít / ngày</span>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-amber-500/30 space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Gợi ý lộ trình tập luyện phù hợp:
              </span>
              <h4 className="text-base font-bold text-white">
                {recommendedProgram}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Giáo án cá nhân hóa thiết kế riêng cho phái đẹp giúp chị em nhanh chóng đạt mục tiêu <strong className="text-amber-300">{targetCalories} kcal/ngày</strong> mà không lo kiệt sức hay mất cơ.
              </p>
            </div>

            <button
              onClick={() => onOpenTrialModal(recommendedProgram)}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Nhận Tư Vấn Chi Tiết & Tập Thử 0đ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
