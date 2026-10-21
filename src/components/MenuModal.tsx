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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300">
      <div className="w-full max-w-xl bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen h-full flex flex-col justify-between border-l border-grid shadow-2xl overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-6 border-b border-grid">
          <span className="font-mono text-xs tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
            NAVIGATION INDEX // {personalInfo.shortName}
          </span>
          <button
            onClick={onClose}
            className="p-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links List */}
        <div className="p-8 md:p-12 space-y-6">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.num}
                onClick={() => handleLinkClick(item.page, item.section)}
                className="w-full text-left group flex items-baseline justify-between border-b border-grid pb-4 transition-all cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-terracotta dark:text-soft-linen font-semibold">
                    {item.num}
                  </span>
                  <span className="text-3xl md:text-5xl font-display font-extrabold text-graphite dark:text-soft-linen group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-terracotta dark:text-soft-linen transition-opacity" size={24} />
              </button>
            ))}
          </nav>

          {/* Quick Context Summary */}
          <div className="pt-6 border-t border-grid space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase block font-semibold">
              ACADEMIC & DESIGN PRACTICE
            </span>
            <p className="text-xs text-graphite/80 dark:text-soft-linen/80 leading-relaxed font-sans">
              19-year-old Data Science Undergraduate at USTHB & Digital Designer. Merging mathematical rigor, brand identity, and modern frontend execution.
            </p>
          </div>
        </div>

        {/* Footer Socials */}
        <div className="p-6 md:p-8 border-t border-grid bg-soft-linen/50 dark:bg-black/15">
          <div className="text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase mb-3">
            ELSEWHERE
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between p-2 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors"
            >
              <span>EMAIL DIRECT</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
