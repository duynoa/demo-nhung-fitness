import React, { useState } from 'react';
import { Camera, Sparkles, X, Expand } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/gymData';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>KHÔNG GIAN TẬP LUYỆN 5 SAO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            KHÁM PHÁ CƠ SỞ VẬT CHẤT <span className="text-amber-400">NHUNG FIT</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Thiết kế tinh tế, sang trọng, đảm bảo tiêu chuẩn vệ sinh khép kín cao nhất để chị em tận hưởng từng giây phút chăm sóc vóc dáng.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.url)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer group border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 text-amber-400 font-semibold text-xs border border-neutral-700">
                {item.category}
              </span>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-neutral-900/80 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-amber-400"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeImage}
              alt="Gallery preview"
              className="max-w-full max-h-[80vh] rounded-2xl object-contain border border-neutral-800 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
