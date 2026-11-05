import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="border-b border-grid overflow-hidden w-full">
      {/* ======================================================== */}
      {/* MOBILE HERO (< md): Dennis Snellenberg Editorial Portrait */}
      {/* ======================================================== */}
      <div className="md:hidden relative w-full h-[calc(100dvh-3.5rem)] flex flex-col justify-end overflow-hidden bg-[#5A1212] select-none">
        {/* Full-bleed Portrait Image (User's custom portrait with integrated pattern) */}
        <img
          src="/profile/ibrahim-cherry-portrait-mobile.webp"
          srcSet="/profile/ibrahim-cherry-portrait-mobile.webp 450w, /profile/ibrahim-cherry-portrait.webp 686w"
          sizes="(max-width: 640px) 100vw, 550px"
          alt="Ibrahim Benabida"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width={450}
          height={671}
          className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
        />

        {/* Cinematic Bottom Gradient for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A1212] via-[#5A1212]/60 via-35% to-transparent pointer-events-none z-[2]" />

        {/* Lower Editorial Overlay */}
        <div className="relative z-10 px-5 pb-6 sm:px-6 sm:pb-8 flex flex-col gap-4 text-soft-linen">
          {/* Wordmark + Logo on the Right */}
          <div className="flex items-end justify-between gap-2 border-b border-soft-linen/25 pb-3">
            <h1 className="text-[clamp(3.8rem,17vw,5.5rem)] leading-[0.8] font-bold tracking-[-0.09em] text-soft-linen">
              {personalInfo.shortName}
            </h1>
            <div className="w-14 h-14 shrink-0 mb-1 flex items-center justify-center p-1.5 rounded-full bg-soft-linen/10 backdrop-blur-sm border border-soft-linen/30">
              <img
                src="/brand/golden-angle-symbol-linen.svg"
                alt="Golden Angle Brand Symbol"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom Metas: Disciplines + Directional Arrow */}
          <div className="flex items-end justify-between text-xs sm:text-sm font-medium tracking-tight text-soft-linen/90">
            <div className="space-y-0.5">
              <p>Data Science Undergraduate</p>
              <p className="text-soft-linen/70">Digital Designer &amp; Frontend</p>
            </div>
            <span className="text-xl sm:text-2xl text-soft-linen/80 pb-0.5 font-light" aria-hidden="true">
              ↘
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP HERO (md+): Architectural Split & Folding Banner */}
      {/* ======================================================== */}
      <div className="hidden md:flex md:h-[calc(100dvh-4rem)] flex-col justify-between">
        {/* Top Visual Media Grid: 2 photographs with distinct unusual ratios */}
        <div className="grid grid-cols-12 border-b border-grid flex-1 min-h-0">
          {/* Left Visual: Wide Architectural Rectangle (USTHB Arches & Grounds) */}
          <div className="col-span-8 relative h-full overflow-hidden border-r border-grid min-w-0 group">
            <img
              src="/profile/usthb-arches-lawn.webp"
              alt="USTHB Architectural Arches and Campus Grounds"
              loading="eager"
              decoding="async"
              width={843}
              height={576}
              className="w-full h-full object-cover object-[center_62%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Visual: Smaller Compact Frame with Unusual Ratio (Lake Twilight) */}
          <div className="col-span-4 relative h-full overflow-hidden min-w-0 group bg-soft-linen/40 dark:bg-black/20">
            <img
              src="/profile/lake-twilight.webp"
              alt="Twilight Lake Study in Algiers"
              loading="eager"
              decoding="async"
              width={420}
              height={576}
              className="w-full h-full object-cover object-[center_60%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Hero Identity Banner */}
        <div className="grid grid-cols-12 items-stretch min-w-0 shrink-0">
          {/* Left Column: Monumental Brand Title (ibrahim.) - Pure Typographic Clarity */}
          <div className="col-span-7 flex items-end px-6 py-6 lg:px-8 lg:py-8 border-r border-grid min-w-0">
            <h1 className="text-[clamp(4.5rem,13vw,10.5rem)] leading-[0.8] font-bold tracking-[-0.1em] text-terracotta dark:text-soft-linen select-none break-normal">
              {personalInfo.shortName}
            </h1>
          </div>

          {/* Middle Column: Disciplines Stack */}
          <ul className="col-span-3 p-6 lg:p-8 flex flex-col justify-end gap-1.5 text-sm lg:text-base leading-tight font-medium tracking-tight text-terracotta dark:text-soft-linen border-r border-grid min-w-0">
            <li>Data Science Undergraduate</li>
            <li>Digital Designer &amp; Frontend</li>
          </ul>

          {/* Right Column: Golden Angle Logo Symbol framed by Concentric Rings Pattern (Medium Scale) */}
          <div className="col-span-2 p-6 lg:p-8 flex items-center justify-center bg-soft-linen/60 dark:bg-terracotta/60 group overflow-hidden min-w-0 relative">
            <div className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-30 flex items-center justify-center">
              <img
                src="/patterns/web-hero-1920x1080/svg/rings_linen-cherry.svg"
                alt=""
                className="w-full h-full object-cover block dark:hidden scale-125"
                aria-hidden="true"
              />
              <img
                src="/patterns/web-hero-1920x1080/svg/rings_cherry-linen.svg"
                alt=""
                className="w-full h-full object-cover hidden dark:block scale-125"
                aria-hidden="true"
              />
            </div>
            <div className="w-24 h-24 lg:w-32 lg:h-32 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center relative z-10">
              <img
                src="/brand/golden-angle-symbol-cherry.svg"
                alt="Golden Angle Brand Symbol"
                className="w-full h-full object-contain block dark:hidden"
              />
              <img
                src="/brand/golden-angle-symbol-linen.svg"
                alt="Golden Angle Brand Symbol"
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
