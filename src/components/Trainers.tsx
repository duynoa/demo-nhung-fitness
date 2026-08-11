import React from 'react';
import { Award, HeartHandshake, Sparkles, Quote, ArrowRight } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

interface TrainersProps {
  onOpenTrialModal: (trainerName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="trainers" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>ĐỘI NGŨ HƯỚNG DẪN VIÊN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            100% HLV NỮ <span className="text-amber-400">AM HIỂU PHÁI ĐẸP</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Các Trainer tại Nhung Fitness đều sở hữu chứng chỉ quốc tế, tận tâm đồng hành, chia sẻ kiến thức dinh dưỡng và truyền động lực tích cực cho chị em.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Photo Header */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 border border-neutral-700 text-amber-400 font-bold text-xs">
                  {trainer.experience}
                </span>
              </div>

              {/* Bio Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {trainer.name}
                  </h3>
                  <span className="text-xs font-medium text-amber-400 block mb-2">
                    {trainer.role}
                  </span>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>
                </div>

                {/* Specialties list */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-800">
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    Chuyên môn thế mạnh:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-neutral-950 text-neutral-300 border border-neutral-800 text-[11px]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-[11px] text-neutral-300 italic flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>"{trainer.quote}"</span>
                </div>

                <button
                  onClick={() => onOpenTrialModal(`Tập 1:1 cùng HLV ${trainer.name}`)}
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Đặt Lịch HLV {trainer.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
