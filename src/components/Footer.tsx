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
    <footer className="bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta overflow-hidden relative border-t border-grid transition-colors w-full">
      {/* Top Navigation Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-soft-linen/30 dark:border-terracotta/30 text-center min-w-0">
        <button
          type="button"
          onClick={() => handleNav('home', '#about')}
          aria-label="Navigate to about section"
          className="min-h-[48px] p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-all cursor-pointer"
        >
          ABOUT
        </button>
        <button
          type="button"
          onClick={() => handleNav('works')}
          aria-label="Navigate to works page"
          className="min-h-[48px] p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-all cursor-pointer"
        >
          WORKS
        </button>
        <button
          type="button"
          onClick={() => handleNav('home', '#services')}
          aria-label="Navigate to services section"
          className="min-h-[48px] p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen border-r border-soft-linen/30 dark:border-terracotta/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-all cursor-pointer"
        >
          SERVICES
        </button>
        <button
          type="button"
          onClick={() => handleNav('contact')}
          aria-label="Navigate to contact page"
          className="min-h-[48px] p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase hover:bg-soft-linen hover:text-terracotta dark:hover:bg-terracotta dark:hover:text-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-all cursor-pointer"
        >
          CONTACT
        </button>
      </div>

      {/* Middle Grid: ELSEWHERE & COLOPHON */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-soft-linen/30 dark:border-terracotta/30 min-w-0">
        {/* Left: ELSEWHERE Socials */}
        <div className="md:col-span-6 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-soft-linen/30 dark:border-terracotta/30 space-y-4 min-w-0">
          <span className="block text-[11px] font-mono tracking-widest opacity-75 uppercase">
            CHANNELS
          </span>
          <div className="space-y-3 font-mono text-sm md:text-base">
            <div>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] hover:translate-x-1.5 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-transform"
              >
                <span>INSTAGRAM</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] hover:translate-x-1.5 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-transform"
              >
                <span>GITHUB</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 min-h-[44px] hover:translate-x-1.5 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soft-linen dark:focus-visible:ring-terracotta transition-transform"
              >
                <span>EMAIL</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: COLOPHON Specifications */}
        <div className="md:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-6 min-w-0">
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="block text-[11px] font-mono tracking-widest opacity-75 uppercase">
                ALGIERS, ALGERIA
              </span>
              {/* Circular Architectural Seal: 137.5° Phyllotaxis Spiral */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-soft-linen/30 dark:border-terracotta/30 shrink-0 opacity-80" title="Golden Angle 137.5° Phyllotaxis Seal">
                <img
                  src="/patterns/web-hero-1920x1080/svg/bloom_cherry-linen.svg"
                  alt="Phyllotaxis Spiral Seal"
                  className="w-full h-full object-cover block dark:hidden"
                  aria-hidden="true"
                />
                <img
                  src="/patterns/web-hero-1920x1080/svg/bloom_linen-cherry.svg"
                  alt="Phyllotaxis Spiral Seal"
                  className="w-full h-full object-cover hidden dark:block"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm font-sans opacity-85 leading-relaxed max-w-md">
              Designed and developed by Ibrahim Benabida. Open for data science, design systems, and frontend engineering collaborations worldwide.
            </p>
          </div>

          <div className="text-[10px] sm:text-xs font-mono opacity-80 pt-4 border-t border-soft-linen/20 dark:border-terracotta/20 flex flex-wrap justify-between gap-2">
            <span>© 2026 {personalInfo.name.toUpperCase()}.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>

      {/* Brand Monogram Watermark Bleeding Off Bottom with Halftone Density Shape */}
      <div className="relative pt-10 sm:pt-14 pb-0 select-none overflow-hidden pointer-events-none text-center min-h-[160px] sm:min-h-[220px] md:min-h-[260px] flex items-end justify-center">
        {/* Panoramic Halftone Density Field Shape */}
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25 flex items-center justify-center overflow-hidden">
          <img
            src="/patterns/web-hero-1920x1080/svg/halftone_cherry-linen.svg"
            alt=""
            className="w-full h-full object-cover object-bottom block dark:hidden"
            aria-hidden="true"
          />
          <img
            src="/patterns/web-hero-1920x1080/svg/halftone_linen-cherry.svg"
            alt=""
            className="w-full h-full object-cover object-bottom hidden dark:block"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 text-[clamp(4.5rem,19vw,15rem)] leading-[0.72] font-display font-black tracking-tighter text-soft-linen dark:text-terracotta opacity-90 translate-y-[12%]">
          {personalInfo.shortName}
        </div>
      </div>
    </footer>
  );
};
