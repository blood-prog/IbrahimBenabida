import React from 'react';
import { X } from 'lucide-react';
import {
  personalInfo,
  analyticalMindPillars,
  designAestheticsPillars,
  developmentTechPillars,
} from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Profile and Dossier"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-4xl max-h-[92dvh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col rounded-[2px]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md z-10 flex items-center justify-between p-4 sm:p-6 border-b border-grid shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-bold">
              PROFILE &amp; QUALIFICATIONS
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-graphite dark:text-soft-linen">
              {personalInfo.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile modal"
            className="min-h-[48px] min-w-[48px] p-2.5 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-colors flex items-center justify-center cursor-pointer"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-10 space-y-8 flex-1">
          {/* Header Summary Box with Portrait Avatar and Brand Matrix Pattern */}
          <div className="bg-soft-linen/70 dark:bg-black/15 border border-grid p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pattern-matrix-subtle">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-terracotta dark:border-soft-linen shrink-0 shadow-sm">
              <img
                src="/profile/ibrahim-cherry-portrait.jpg"
                alt="Ibrahim Benabida"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-terracotta dark:text-soft-linen font-bold">
                <span>AGE: 19</span>
                <span className="opacity-40">/</span>
                <span>USTHB ALGIERS</span>
                <span className="opacity-40">/</span>
                <span>DATA SCIENCE UNDERGRADUATE</span>
              </div>
              <p className="text-sm sm:text-base font-sans leading-relaxed text-graphite/90 dark:text-soft-linen/90">
                {personalInfo.bioShort}
              </p>
            </div>
          </div>

          {/* Section 1: The Analytical Mind with Phyllotaxis Seal */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-grid pb-2">
              <h4 className="text-lg sm:text-xl font-display font-bold text-terracotta dark:text-soft-linen">
                Mathematical Analysis &amp; Data Logic
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-grid shrink-0 opacity-80">
                  <img
                    src="/patterns/web-hero-1920x1080/svg/bloom_linen-cherry.svg"
                    alt=""
                    className="w-full h-full object-cover block dark:hidden"
                    aria-hidden="true"
                  />
                  <img
                    src="/patterns/web-hero-1920x1080/svg/bloom_cherry-linen.svg"
                    alt=""
                    className="w-full h-full object-cover hidden dark:block"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta dark:text-soft-linen">
                  01
                </span>
              </div>
            </div>
            <div className="divide-y divide-grid border border-grid">
              {analyticalMindPillars.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white/30 dark:bg-black/15 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <span className="font-mono text-xs text-terracotta dark:text-soft-linen font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <span className="font-sans font-bold text-sm text-graphite dark:text-soft-linen block">
                      {item.title}
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Design & Brand Systems with Concentric Rings Seal */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-grid pb-2">
              <h4 className="text-lg sm:text-xl font-display font-bold text-terracotta dark:text-soft-linen">
                Brand Systems &amp; Visual Direction
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-grid shrink-0 opacity-80">
                  <img
                    src="/patterns/web-hero-1920x1080/svg/rings_linen-cherry.svg"
                    alt=""
                    className="w-full h-full object-cover block dark:hidden"
                    aria-hidden="true"
                  />
                  <img
                    src="/patterns/web-hero-1920x1080/svg/rings_cherry-linen.svg"
                    alt=""
                    className="w-full h-full object-cover hidden dark:block"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta dark:text-soft-linen">
                  02
                </span>
              </div>
            </div>
            <div className="divide-y divide-grid border border-grid">
              {designAestheticsPillars.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white/30 dark:bg-black/15 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <span className="font-mono text-xs text-terracotta dark:text-soft-linen font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <span className="font-sans font-bold text-sm text-graphite dark:text-soft-linen block">
                      {item.title}
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Frontend Engineering with Wave Harmonics Seal */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-grid pb-2">
              <h4 className="text-lg sm:text-xl font-display font-bold text-terracotta dark:text-soft-linen">
                Frontend Engineering &amp; Architecture
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-grid shrink-0 opacity-80">
                  <img
                    src="/patterns/web-hero-1920x1080/svg/ripple_linen-cherry.svg"
                    alt=""
                    className="w-full h-full object-cover block dark:hidden"
                    aria-hidden="true"
                  />
                  <img
                    src="/patterns/web-hero-1920x1080/svg/ripple_cherry-linen.svg"
                    alt=""
                    className="w-full h-full object-cover hidden dark:block"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta dark:text-soft-linen">
                  03
                </span>
              </div>
            </div>
            <div className="divide-y divide-grid border border-grid">
              {developmentTechPillars.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-white/30 dark:bg-black/15 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <span className="font-mono text-xs text-terracotta dark:text-soft-linen font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <span className="font-sans font-bold text-sm text-graphite dark:text-soft-linen block">
                      {item.title}
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md p-4 sm:p-6 border-t border-grid flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile modal"
            className="min-h-[48px] px-6 py-2.5 bg-graphite text-soft-linen dark:bg-soft-linen dark:text-terracotta text-xs font-mono tracking-widest uppercase hover:bg-terracotta dark:hover:bg-soft-linen/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer font-bold"
          >
            CLOSE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};
