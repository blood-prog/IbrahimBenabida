import React from 'react';
import { X, CheckCircle, BookOpen, Sparkles, Code2 } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
      <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-soft-linen dark:bg-terracotta z-10 flex items-center justify-between p-6 border-b border-grid">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-semibold">
              DOSSIER // THE DESIGNER & ANALYTICAL MIND
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-graphite dark:text-soft-linen">
              {personalInfo.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Header Summary */}
          <div className="bg-soft-linen/70 dark:bg-black/15 border border-grid p-6 space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-terracotta dark:text-soft-linen font-semibold">
              <span>AGE: 19 YEARS OLD</span>
              <span>•</span>
              <span>USTHB ALGIERS</span>
              <span>•</span>
              <span>DATA SCIENCE UNDERGRADUATE</span>
            </div>
            <p className="text-base font-sans leading-relaxed text-graphite/90 dark:text-soft-linen/90">
              {personalInfo.bioShort}
            </p>
          </div>

          {/* Pillar 1: The Analytical Mind */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-grid pb-2">
              <BookOpen size={20} className="text-terracotta dark:text-soft-linen" />
              <h4 className="text-xl md:text-2xl font-display font-bold text-terracotta dark:text-soft-linen">
                The Analytical Mind
              </h4>
              <span className="text-xs font-mono text-graphite/60 dark:text-soft-linen/60 ml-auto">
                CORE STRENGTHS, TEACHING & COMMUNICATION
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analyticalMindPillars.map((item, idx) => (
                <div key={idx} className="p-4 border border-grid bg-white/40 dark:bg-black/20 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-terracotta dark:text-soft-linen shrink-0 mt-0.5" />
                    <span className="font-sans font-bold text-sm text-graphite dark:text-soft-linen">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Design & Aesthetics */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-grid pb-2">
              <Sparkles size={20} className="text-terracotta dark:text-soft-linen" />
              <h4 className="text-xl md:text-2xl font-display font-bold text-terracotta dark:text-soft-linen">
                Design & Aesthetics
              </h4>
              <span className="text-xs font-mono text-graphite/60 dark:text-soft-linen/60 ml-auto">
                THE CREATIVE EDGE
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {designAestheticsPillars.map((item, idx) => (
                <div key={idx} className="p-4 border border-grid bg-white/40 dark:bg-black/20 space-y-2">
                  <div className="font-sans font-bold text-sm text-graphite dark:text-soft-linen">
                    {item.title}
                  </div>
                  <p className="text-xs font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3: Development & Tech */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-grid pb-2">
              <Code2 size={20} className="text-terracotta dark:text-soft-linen" />
              <h4 className="text-xl md:text-2xl font-display font-bold text-terracotta dark:text-soft-linen">
                Development & Tech
              </h4>
              <span className="text-xs font-mono text-graphite/60 dark:text-soft-linen/60 ml-auto">
                THE EXECUTION & VIBE CODING
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {developmentTechPillars.map((item, idx) => (
                <div key={idx} className="p-4 border border-grid bg-white/40 dark:bg-black/20 space-y-2">
                  <div className="font-sans font-bold text-sm text-graphite dark:text-soft-linen">
                    {item.title}
                  </div>
                  <p className="text-xs font-sans text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-soft-linen dark:bg-terracotta p-6 border-t border-grid flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-graphite text-soft-linen dark:bg-soft-linen dark:text-terracotta text-xs font-mono tracking-widest uppercase hover:bg-terracotta dark:hover:bg-soft-linen/90 transition-colors cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
