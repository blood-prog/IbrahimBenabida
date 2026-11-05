import React, { useEffect, useRef, useState } from 'react';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let rafId: number;
    let targetProgress = 0;
    let currentProgress = 0;
    let isRunning = false;
    let cachedTextHeight = 400;

    const render = () => {
      if (!imgRef.current) return;

      const diff = targetProgress - currentProgress;

      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.1;
        rafId = requestAnimationFrame(render);
        isRunning = true;
      } else {
        currentProgress = targetProgress;
        isRunning = false;
      }

      const p = currentProgress;
      const eased = p * p * (3 - 2 * p);

      const left = 40 * (1 - eased);
      const width = 60 + 40 * eased;
      const top = eased * cachedTextHeight;

      imgRef.current.style.left = `${left}%`;
      imgRef.current.style.width = `${width}%`;
      imgRef.current.style.top = `${top}px`;
    };

    const updateTarget = () => {
      if (!containerRef.current || !textRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cachedTextHeight = textRef.current.offsetHeight;

      // Start animating when the about content area approaches reading focus (260px from top)
      // and complete smoothly as the user scrolls through the reading block
      const startThreshold = 260;
      const scrollRange = Math.max(cachedTextHeight * 1.1, 380);
      const scrolled = startThreshold - rect.top;
      const progress = scrolled / scrollRange;

      targetProgress = Math.min(Math.max(progress, 0), 1);

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const handleScrollOrResize = () => {
      updateTarget();
    };

    updateTarget();
    currentProgress = targetProgress;
    render();

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [isDesktop]);

  return (
    <section id="about" className="text-graphite dark:text-soft-linen scroll-mt-16 w-full overflow-hidden">
      {/* 12-Column Grid with Gutters */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-w-0">
        <div className="md:col-span-10 md:col-start-2 border-x border-grid py-10 md:py-20 min-w-0">
          
          {/* Header Title Box: pure typographic headline with visual rest */}
          <div className="border-b border-grid p-4 sm:p-6 md:p-8">
            <h2 className="text-[clamp(3rem,9vw,6.5rem)] leading-[0.9] font-bold tracking-tight text-terracotta dark:text-soft-linen">
              designer.
            </h2>
          </div>

          {/* Body Content Area */}
          <div ref={containerRef} className="relative min-w-0">
            {/* Upper Grid: Text + Action */}
            <div className="grid grid-cols-1 md:grid-cols-10 border-b border-grid">
              <div
                ref={textRef}
                className="md:col-span-4 border-b md:border-b-0 md:border-r border-grid p-5 sm:p-6 md:p-8 flex flex-col items-start gap-6 py-8 md:py-16 relative z-20 min-w-0"
              >
                <p className="max-w-[44ch] text-base sm:text-lg md:text-xl leading-relaxed text-graphite dark:text-soft-linen font-normal">
                  I’m Ibrahim, a data science student at USTHB and digital designer based in Algiers. I build clean web applications and brand systems, combining analytical rigor with thoughtful typography and layout.
                </p>
                <button
                  type="button"
                  onClick={onOpenAboutModal}
                  aria-label="Read bio and profile"
                  className="group/cta relative inline-flex items-center justify-center min-h-[48px] px-6 py-3 border border-grid text-sm sm:text-base tracking-wider uppercase transition-all duration-200 hover:bg-terracotta hover:text-soft-linen hover:border-terracotta dark:hover:bg-soft-linen dark:hover:text-terracotta dark:hover:border-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen cursor-pointer overflow-hidden"
                >
                  <span className="block transition-transform duration-[400ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[150%]">
                    read bio
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[400ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
                  >
                    read bio
                  </span>
                </button>

                {/* Dossier Coordinate Seal with Orbit Pattern Shape */}
                <div className="pt-2 flex items-center gap-3 text-[11px] font-mono tracking-wider text-graphite/60 dark:text-soft-linen/60 border-t border-grid/60 w-full select-none">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-grid shrink-0 opacity-75">
                    <img
                      src="/patterns/web-hero-1920x1080/svg/orbit_linen-cherry.svg"
                      alt=""
                      className="w-full h-full object-cover block dark:hidden"
                      aria-hidden="true"
                    />
                    <img
                      src="/patterns/web-hero-1920x1080/svg/orbit_cherry-linen.svg"
                      alt=""
                      className="w-full h-full object-cover hidden dark:block"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="truncate">USTHB • 36.7135° N, 3.1813° E</span>
                </div>
              </div>

              {/* Upper Right Spacer (Desktop reservation for initial image) */}
              <div className="hidden md:block md:col-span-6 min-h-[300px]"></div>
            </div>

            {/* Lower Grid: Landing Frame for image */}
            <div className="grid grid-cols-1 md:grid-cols-10 border-b border-grid">
              <div className="md:col-span-10 h-[280px] sm:h-[380px] md:h-[520px] lg:h-[600px] relative overflow-hidden">
                {/* On mobile, natural document flow */}
                {!isDesktop && (
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src="/profile/usthb-campus.jpg"
                      alt="USTHB Faculty & Campus Grounds"
                      className="w-full h-full object-cover object-[center_55%]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Dynamic Scroll-Expanding Image */}
            {isDesktop && (
              <div
                ref={imgRef}
                className="absolute z-30 border-l border-r border-b border-grid overflow-hidden h-[380px] md:h-[520px] lg:h-[600px] bg-[var(--page-bg)]"
                style={{
                  left: '40%',
                  width: '60%',
                  top: '0px',
                  transform: 'translateZ(0)',
                  willChange: 'left, width, top',
                }}
              >
                <img
                  src="/profile/usthb-campus.jpg"
                  alt="USTHB Faculty & Campus Grounds"
                  className="w-full h-full object-cover object-[center_55%]"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
