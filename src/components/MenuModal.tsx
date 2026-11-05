import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: 'home' | 'works' | 'contact', targetSectionId?: string) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const navItems = [
    { num: '01', label: 'HOME', page: 'home' as const, section: undefined },
    { num: '02', label: 'WORKS', page: 'works' as const, section: undefined },
    { num: '03', label: 'ABOUT', page: 'home' as const, section: '#about' },
    { num: '04', label: 'SERVICES', page: 'home' as const, section: '#services' },
    { num: '05', label: 'CONTACT', page: 'contact' as const, section: undefined },
  ];

  const handleLinkClick = (page: 'home' | 'works' | 'contact', section?: string) => {
    onClose();
    if (onNavigate) {
      onNavigate(page, section);
    } else if (section) {
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300"
    >
      <div className="w-full max-w-xl bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen h-[100dvh] max-h-[100dvh] flex flex-col justify-between border-l border-grid shadow-2xl overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-grid shrink-0">
          <span className="font-mono text-xs tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
            MENU
          </span>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[48px] min-w-[48px] p-2.5 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Links List */}
        <div className="p-6 sm:p-8 md:p-12 space-y-6 flex-1 flex flex-col justify-center">
          <nav className="space-y-3" aria-label="Main menu">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.num}
                onClick={() => handleLinkClick(item.page, item.section)}
                className="w-full min-h-[52px] text-left group flex items-baseline justify-between border-b border-grid pb-3 pt-1 transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs sm:text-sm text-terracotta dark:text-soft-linen font-bold">
                    {item.num}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-graphite dark:text-soft-linen group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="opacity-60 group-hover:opacity-100 text-terracotta dark:text-soft-linen transition-opacity" size={20} aria-hidden="true" />
              </button>
            ))}
          </nav>

          {/* Quick Context Summary */}
          <div className="pt-6 border-t border-grid space-y-1.5">
            <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase block font-bold">
              DATA SCIENCE &amp; DIGITAL DESIGN
            </span>
            <p className="text-xs text-graphite/80 dark:text-soft-linen/80 leading-relaxed font-sans max-w-md">
              Analytical precision, brand identity, and frontend engineering based in Algiers.
            </p>
          </div>
        </div>

        {/* Footer Socials */}
        <div className="p-5 sm:p-6 md:p-8 border-t border-grid bg-soft-linen/50 dark:bg-black/15 shrink-0">
          <div className="text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase mb-3">
            DIRECT CHANNELS
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs font-mono">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] flex items-center justify-between p-2.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] flex items-center justify-between p-2.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="min-h-[44px] flex items-center justify-between p-2.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all"
            >
              <span>EMAIL</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
