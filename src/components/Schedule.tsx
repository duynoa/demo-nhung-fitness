import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHEDULE_ITEMS, ScheduleItem } from '../data/gymData';

interface ScheduleProps {
  onBookClass: (className: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onBookClass }) => {
  const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'] as const;
  const [selectedDay, setSelectedDay] = useState<typeof days[number]>('Thứ 2');

  const filteredSchedule = SCHEDULE_ITEMS.filter((item) => item.dayOfWeek === selectedDay);

  return (
    <section id="schedule" className="py-20 bg-neutral-900 relative border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>LỊCH TẬP HÀNG TUẦN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            LỊCH HỌC NHÓM & <span className="text-amber-400">PILATES REFORMER</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Các lớp học nhóm số lượng giới hạn (6 - 15 hội viên) đảm bảo HLV nữ quan tâm chỉnh sửa động tác cẩn thận cho từng chị em.
          </p>
        </div>

        {/* Day Selector Bar */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                selectedDay === day
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((item) => {
              const seatsLeft = item.capacity - item.bookedCount;
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                >
                  {/* Left Time & Class Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.timeSlot}
                      </span>
                      <span className="text-xs font-semibold text-neutral-400 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors pt-1">
                      {item.className}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-neutral-400 pt-0.5">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-amber-400" />
                        HLV: <strong className="text-neutral-200">{item.trainer}</strong>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        {item.room}
                      </span>
                    </div>
                  </div>

                  {/* Right Availability & Booking Button */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800">
                    <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>Đã giữ chỗ: <strong className="text-amber-300">{item.bookedCount}/{item.capacity}</strong></span>
                      {seatsLeft <= 2 && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px]">
                          Chỉ còn {seatsLeft} chỗ
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onBookClass(`Đặt Chỗ Lớp ${item.className} (${item.dayOfWeek} - ${item.timeSlot})`)}
                      className="px-4 py-2 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 transition-all flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Giữ Chỗ Ngay</span>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-neutral-400 bg-neutral-950 rounded-2xl border border-neutral-800">
              Chưa có lịch học nhóm vào {selectedDay}. Vui lòng xem các ngày khác hoặc đăng ký tập tự do cùng HLV 1:1!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
