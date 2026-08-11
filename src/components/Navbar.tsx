import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Heart, Shield, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: (programName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Khóa Học', href: '#programs' },
    { name: 'HLV Nữ', href: '#trainers' },
    { name: 'Tính Calo', href: '#calculator' },
    { name: 'Lịch Tập', href: '#schedule' },
    { name: 'Bảng Giá', href: '#pricing' },
    { name: 'Không Gian', href: '#gallery' },
    { name: 'Đánh Giá', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-2.5 shadow-xl'
          : 'bg-gradient-to-b from-neutral-950/95 via-neutral-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Women-Only Badge */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <Logo size={isScrolled ? 'sm' : 'md'} variant="dark-bg" />
            </a>

            {/* Special Badge: Women Only Studio */}
            <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>100% PHÒNG TẬP NỮ</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-medium text-neutral-300 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.hotline.split('/')[0].trim()}`}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-xl border border-neutral-700 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.hotline.split('/')[0].trim()}</span>
            </a>

            <button
              onClick={() => onOpenTrialModal()}
              className="px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Tập Thử 0đ
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white bg-neutral-800/80 rounded-xl border border-neutral-700 shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Shield className="w-4 h-4" />
              PHÒNG GYM & PILATES DÀNH RIÊNG CHO NỮ
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <a
              href={`tel:${CONTACT_INFO.hotline.split('/')[0].trim()}`}
              className="w-full py-2.5 rounded-xl font-medium text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Hotline: {CONTACT_INFO.hotline.split('/')[0].trim()}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-neutral-900" />
              Đăng Ký Tập Thử 3 Ngày Miễn Phí
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
