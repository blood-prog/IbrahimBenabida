import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section id="services" className="border-b border-grid scroll-mt-16">
      {/* Section Header: MY services. */}
      <div className="p-6 md:p-10 lg:p-14 border-b border-grid">
        <span className="block text-xs md:text-sm font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase mb-2">
          MY
        </span>
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen">
          services.
        </h2>
      </div>

      {/* Numbered Architectural Rows (01, 02, 03) */}
      <div className="divide-y divide-grid">
        {servicesData.map((service, index) => {
          const isHovered = activeRow === index;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              className={`grid grid-cols-1 md:grid-cols-12 items-stretch transition-colors ${
                isHovered
                  ? 'bg-terracotta/[0.04] dark:bg-soft-linen/[0.08]'
                  : 'hover:bg-graphite/[0.02] dark:hover:bg-soft-linen/[0.04]'
              }`}
            >
              {/* Column 1: Number index (01, 02, 03) */}
              <div className="md:col-span-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid flex items-start">
                <span className="text-sm md:text-base font-mono font-semibold text-graphite/60 dark:text-soft-linen/60">
                  {service.number}
                </span>
              </div>

              {/* Column 2: Service Title */}
              <div className="md:col-span-5 p-6 md:p-10 border-b md:border-b-0 md:border-r border-grid flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-terracotta dark:text-soft-linen">
                  {service.title}
                </h3>
                <p className="text-sm font-sans text-graphite/80 dark:text-soft-linen/80 mt-3 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.details.map((detail, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono text-graphite/70 dark:text-soft-linen/80 bg-soft-linen dark:bg-terracotta/70 border border-grid px-2 py-0.5"
                    >
                      • {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 3: Sub-skills List */}
              <div className="md:col-span-3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid flex flex-col justify-center space-y-2">
                {service.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="text-[11px] md:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 hover:text-terracotta dark:hover:text-soft-linen transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-terracotta dark:bg-soft-linen rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Column 4: Interactive Visual / Mockup Preview */}
              <div className="md:col-span-3 p-6 md:p-8 flex items-center justify-center bg-soft-linen/50 dark:bg-black/10 overflow-hidden">
                {index === 0 && (
                  /* Data Science & Analysis Visual */
                  <div className="w-full h-full min-h-[160px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-4 flex flex-col justify-between">
                    <div className="flex justify-between text-[9px] font-mono text-graphite/60 dark:text-soft-linen/60">
                      <span>DATA // MANIFOLD</span>
                      <span>USTHB</span>
                    </div>
                    {/* Simulated SVG Graph */}
                    <svg viewBox="0 0 100 40" className="w-full stroke-terracotta dark:stroke-soft-linen fill-none" strokeWidth="1.5">
                      <path d="M0,35 Q25,5 50,25 T100,10" />
                      <circle cx="50" cy="25" r="2.5" className="fill-terracotta dark:fill-soft-linen" />
                      <circle cx="25" cy="18" r="2" className="fill-graphite dark:fill-soft-linen/70" />
                      <circle cx="75" cy="15" r="2" className="fill-graphite dark:fill-soft-linen/70" />
                    </svg>
                    <div className="text-[9px] font-mono text-terracotta dark:text-soft-linen font-semibold">
                      SIMPLIFIED DIGESTIBLE MODEL
                    </div>
                  </div>
                )}

                {index === 1 && (
                  /* Design & Aesthetics Visual */
                  <div className="w-full h-full min-h-[160px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-4 flex flex-col justify-between">
                    <div className="flex justify-between text-[9px] font-mono text-graphite/60 dark:text-soft-linen/60">
                      <span>IDENTITY // MOTION</span>
                      <span>KINETIC</span>
                    </div>
                    {/* Simulated Typography Layout */}
                    <div className="my-auto text-center space-y-1">
                      <div className="text-xl font-display font-extrabold text-terracotta dark:text-soft-linen tracking-tighter">
                        Aa Bb Cc 01
                      </div>
                      <div className="text-[9px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70">
                        GOLDEN RATIO PROPORTIONS
                      </div>
                    </div>
                    <div className="text-[9px] font-mono text-terracotta dark:text-soft-linen font-semibold">
                      MODERN & COMFORTING AESTHETICS
                    </div>
                  </div>
                )}

                {index === 2 && (
                  /* Tech & Vibe Coding Visual */
                  <div className="w-full h-full min-h-[160px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-4 flex flex-col justify-between font-mono text-[10px]">
                    <div className="flex justify-between text-[9px] text-graphite/60 dark:text-soft-linen/60">
                      <span>VIBE CODING // STACK</span>
                      <span>100% TS</span>
                    </div>
                    <div className="my-auto space-y-1 text-graphite/80 dark:text-soft-linen/80 text-[10px]">
                      <div><span className="text-terracotta dark:text-soft-linen font-bold">const</span> stack = [</div>
                      <div className="pl-3">'React 19', 'Next.js',</div>
                      <div className="pl-3">'Tailwind CSS', 'AI Vibe'</div>
                      <div>];</div>
                    </div>
                    <div className="text-[9px] text-terracotta dark:text-soft-linen font-semibold">
                      RAPID FLUID EXECUTION
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
