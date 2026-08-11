import React, { useState } from 'react';
import { Flame, Clock, Zap, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PROGRAMS, Program } from '../data/gymData';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất Cả Khóa Học' },
    { id: 'gym', label: 'Gym & PT 1:1' },
    { id: 'pilates', label: 'Pilates Reformer' },
    { id: 'yoga', label: 'Yoga Nội Tiết' },
    { id: 'dance', label: 'Zumba & Dance' },
    { id: 'kickboxing', label: 'Kickboxing Nữ' },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHƯƠNG TRÌNH TẬP LUYỆN CHUYÊN SÂU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            KHÓA HỌC THIẾT KẾ DÀNH RIÊNG CHO <span className="text-amber-400">HÌNH THỂ PHÁI ĐẸP</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Mỗi chương trình tập luyện tại Nhung Fitness đều hướng tới mục tiêu tối đa hóa việc siết eo, nở mông, thon gọn bắp tay & duy trì sự dẻo dai tươi trẻ.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Program Card Header Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {program.popular && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs shadow-md">
                    HOT / Được yêu thích
                  </span>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                    {program.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {program.name}
                  </h3>
                </div>
              </div>

              {/* Program Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {program.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-neutral-800/80 text-xs">
                  <div className="flex flex-col items-center text-center p-1.5 rounded-lg bg-neutral-950/60">
                    <Clock className="w-4 h-4 text-amber-400 mb-1" />
                    <span className="text-neutral-400 text-[10px]">Thời gian</span>
                    <span className="font-semibold text-white">{program.duration}</span>
                  </div>

                  <div className="flex flex-col items-center text-center p-1.5 rounded-lg bg-neutral-950/60">
                    <Flame className="w-4 h-4 text-amber-400 mb-1" />
                    <span className="text-neutral-400 text-[10px]">Tiêu hao</span>
                    <span className="font-semibold text-white">{program.caloriesBurned}</span>
                  </div>

                  <div className="flex flex-col items-center text-center p-1.5 rounded-lg bg-neutral-950/60">
                    <Zap className="w-4 h-4 text-amber-400 mb-1" />
                    <span className="text-neutral-400 text-[10px]">Cường độ</span>
                    <span className="font-semibold text-white">{program.intensity}</span>
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Lợi ích nổi bật:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {program.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectProgram(program.name)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Đăng Ký Tư Vấn Khóa Học</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
