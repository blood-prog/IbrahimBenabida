import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (page: 'home' | 'works' | 'contact', targetSectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'works' | 'contact', section?: string) => {
    if (onNavigate) {
      onNavigate(page, section);
    } else if (section) {
      const el = document.querySelector(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta overflow-hidden relative border-t border-grid transition-colors">
      {/* Top Navigation Row (Divided by crisp 1px borders) */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-soft-linen/30 dark:border-terracotta/30 text-center">
        <button
          onClick={() => handleNav('home', '#about')}
          className="p-6 md:p-8 font-mono text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 transition-colors cursor-pointer"
        >
          ABOUT
        </button>
        <button
          onClick={() => handleNav('works')}
          className="p-6 md:p-8 font-mono text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 transition-colors cursor-pointer"
        >
          WORKS
        </button>
        <button
          onClick={() => handleNav('home', '#services')}
          className="p-6 md:p-8 font-mono text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 transition-colors cursor-pointer"
        >
          SERVICES
        </button>
        <button
          onClick={() => handleNav('contact')}
          className="p-6 md:p-8 font-mono text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen transition-colors cursor-pointer"
        >
          CONTACT
        </button>
      </div>

      {/* Middle Grid: ELSEWHERE & COLOPHON */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-soft-linen/30 dark:border-terracotta/30">
        {/* Left: ELSEWHERE Socials */}
        <div className="md:col-span-6 p-8 md:p-12 border-b md:border-b-0 md:border-r border-soft-linen/30 dark:border-terracotta/30 space-y-4">
          <span className="block text-[11px] font-mono tracking-widest opacity-75 uppercase">
            ELSEWHERE
          </span>
          <div className="space-y-3 font-mono text-sm md:text-base">
            <div>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:translate-x-1.5 transition-transform"
              >
                <span>INSTAGRAM</span>
                <span>→</span>
              </a>
            </div>
            <div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:translate-x-1.5 transition-transform"
              >
                <span>GITHUB</span>
                <span>→</span>
              </a>
            </div>
            <div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:translate-x-1.5 transition-transform"
              >
                <span>LINKEDIN</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: COLOPHON Copyright & Info */}
        <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-6">
          <div>
            <span className="block text-[11px] font-mono tracking-widest opacity-75 uppercase mb-3">
              COLOPHON
            </span>
            <p className="text-xs md:text-sm font-sans opacity-85 leading-relaxed max-w-md">
              Designed with the Soft Linen (#E8E3D9), Black Cherry (#5A1212), and Graphite (#332D2B) palette. Soft Linen represents academic trust and clarity; Black Cherry embodies bold depth and creative confidence; Graphite anchors structure and logic.
            </p>
          </div>

          <div className="text-[10px] md:text-xs font-mono opacity-80 pt-4 border-t border-soft-linen/20 dark:border-terracotta/20 flex flex-wrap justify-between gap-2">
            <span>© 2026 {personalInfo.name.toUpperCase()}.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>

      {/* Massive Cropped Brand Monogram / Watermark Bleeding Off Bottom */}
      <div className="relative pt-6 pb-0 select-none overflow-hidden pointer-events-none text-center">
        <div className="text-[18vw] leading-[0.72] font-display font-black tracking-tighter text-soft-linen dark:text-terracotta opacity-90 translate-y-[12%]">
          {personalInfo.shortName}
        </div>
      </div>
    </footer>
  );
};
