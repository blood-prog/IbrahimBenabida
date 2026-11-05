import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <section id="services" className="border-b border-grid scroll-mt-16 w-full overflow-hidden">
      {/* Section Header: pure typographic headline without kicker */}
      <div className="p-5 sm:p-8 md:p-10 lg:p-14 border-b border-grid">
        <h2 className="text-[clamp(3rem,10vw,7.5rem)] leading-[0.88] font-display font-bold tracking-tight text-terracotta dark:text-soft-linen">
          services.
        </h2>
      </div>

      {/* Numbered Architectural Rows (01, 02, 03) with Hairline Dividers */}
      <div className="divide-y divide-grid">
        {servicesData.map((service, index) => {
          const isHovered = activeRow === index;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              className={`grid grid-cols-1 md:grid-cols-12 items-stretch transition-colors min-w-0 ${
                isHovered
                  ? 'bg-terracotta/[0.03] dark:bg-soft-linen/[0.06]'
                  : 'hover:bg-graphite/[0.02] dark:hover:bg-soft-linen/[0.03]'
              }`}
            >
              {/* Column 1: Number index (01, 02, 03) */}
              <div className="md:col-span-1 p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid flex items-start">
                <span className="text-xs sm:text-sm font-mono font-bold text-graphite/60 dark:text-soft-linen/60">
                  {service.number}
                </span>
              </div>

              {/* Column 2: Service Title & Crisp Summary */}
              <div className="md:col-span-6 p-5 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-grid flex flex-col justify-center min-w-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-terracotta dark:text-soft-linen">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base font-sans text-graphite/80 dark:text-soft-linen/80 mt-3 leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Column 3: Core Skills */}
              <div className="md:col-span-2 p-5 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-grid flex flex-col justify-center gap-2 min-w-0">
                {service.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Column 4: Quiet Structural Graphic with Authentic Brand Patterns */}
              <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex items-center justify-center bg-soft-linen/40 dark:bg-black/10 overflow-hidden min-w-0">
                {index === 0 && (
                  /* Data Science: Phyllotaxis Spiral Pattern (Golden Angle 137.5°) */
                  <div className="w-full h-full min-h-[150px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-3.5 flex flex-col justify-between relative overflow-hidden group/viz select-none">
                    <div className="flex items-center justify-between text-[10px] font-mono text-graphite/70 dark:text-soft-linen/70 tracking-wider">
                      <span>PHYLLOTAXIS SPIRAL</span>
                      <span className="font-bold text-terracotta dark:text-soft-linen">θ = 137.5°</span>
                    </div>
                    <div className="relative h-20 sm:h-24 my-2 overflow-hidden border border-grid/60 rounded-[1px] bg-terracotta/5 dark:bg-soft-linen/5">
                      <img
                        src="/patterns/web-hero-1920x1080/svg/bloom_linen-cherry.svg"
                        alt="Phyllotaxis Spiral Pattern Light"
                        className="w-full h-full object-cover object-center block dark:hidden group-hover/viz:scale-105 transition-transform duration-500"
                      />
                      <img
                        src="/patterns/web-hero-1920x1080/svg/bloom_cherry-linen.svg"
                        alt="Phyllotaxis Spiral Pattern Dark"
                        className="w-full h-full object-cover object-center hidden dark:block group-hover/viz:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-terracotta dark:text-soft-linen font-bold">
                      <span>ALGORITHMIC LOGIC</span>
                      <span className="text-graphite/50 dark:text-soft-linen/50 font-normal">DISTRIBUTION</span>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  /* Visual Systems: Orbital Geometric Trajectories Pattern */
                  <div className="w-full h-full min-h-[150px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-3.5 flex flex-col justify-between relative overflow-hidden group/viz select-none">
                    <div className="flex items-center justify-between text-[10px] font-mono text-graphite/70 dark:text-soft-linen/70 tracking-wider">
                      <span>ORBITAL TRAJECTORIES</span>
                      <span className="font-bold text-terracotta dark:text-soft-linen">φ = 1.618</span>
                    </div>
                    <div className="relative h-20 sm:h-24 my-2 overflow-hidden border border-grid/60 rounded-[1px] bg-terracotta/5 dark:bg-soft-linen/5">
                      <img
                        src="/patterns/web-hero-1920x1080/svg/orbit_linen-cherry.svg"
                        alt="Orbital Trajectories Pattern Light"
                        className="w-full h-full object-cover object-center block dark:hidden group-hover/viz:scale-105 transition-transform duration-500"
                      />
                      <img
                        src="/patterns/web-hero-1920x1080/svg/orbit_cherry-linen.svg"
                        alt="Orbital Trajectories Pattern Dark"
                        className="w-full h-full object-cover object-center hidden dark:block group-hover/viz:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-terracotta dark:text-soft-linen font-bold">
                      <span>SYSTEM ARCHITECTURE</span>
                      <span className="text-graphite/50 dark:text-soft-linen/50 font-normal">CADENCE</span>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  /* Frontend Engineering: Wave Harmonic Interference Pattern */
                  <div className="w-full h-full min-h-[150px] border border-grid bg-soft-linen dark:bg-terracotta/40 p-3.5 flex flex-col justify-between relative overflow-hidden group/viz select-none">
                    <div className="flex items-center justify-between text-[10px] font-mono text-graphite/70 dark:text-soft-linen/70 tracking-wider">
                      <span>WAVE HARMONICS</span>
                      <span className="font-bold text-terracotta dark:text-soft-linen">INTERFERENCE</span>
                    </div>
                    <div className="relative h-20 sm:h-24 my-2 overflow-hidden border border-grid/60 rounded-[1px] bg-terracotta/5 dark:bg-soft-linen/5">
                      <img
                        src="/patterns/web-hero-1920x1080/svg/ripple_linen-cherry.svg"
                        alt="Wave Harmonics Pattern Light"
                        className="w-full h-full object-cover object-center block dark:hidden group-hover/viz:scale-105 transition-transform duration-500"
                      />
                      <img
                        src="/patterns/web-hero-1920x1080/svg/ripple_cherry-linen.svg"
                        alt="Wave Harmonics Pattern Dark"
                        className="w-full h-full object-cover object-center hidden dark:block group-hover/viz:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-terracotta dark:text-soft-linen font-bold">
                      <span>PRODUCTION RUNTIME</span>
                      <span className="text-graphite/50 dark:text-soft-linen/50 font-normal">COMPOSITING</span>
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
