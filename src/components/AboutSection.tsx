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
    let cachedSectionTop = 0;
    let cachedTextHeight = 450;

    const measureLayout = () => {
      if (!containerRef.current || !textRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cachedSectionTop = rect.top + window.scrollY;
      cachedTextHeight = textRef.current.offsetHeight;
    };

    const render = () => {
      if (!imgRef.current) return;

      const diff = targetProgress - currentProgress;

      if (Math.abs(diff) > 0.0002) {
        // Silky smooth dampening factor for liquid, organic physics
        currentProgress += diff * 0.075;
        rafId = requestAnimationFrame(render);
        isRunning = true;
      } else {
        currentProgress = targetProgress;
        isRunning = false;
      }

      // Smoothstep curve for seamless acceleration and landing: 3p^2 - 2p^3
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
      // Paced scroll range for a relaxed, cinematic transition
      const startTrigger = 180;
      const scrollDistance = Math.max(cachedTextHeight * 1.1, 400);

      const currentScroll = window.scrollY;
      const scrolled = currentScroll - (cachedSectionTop - startTrigger);
      targetProgress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      measureLayout();
      updateTarget();
    };

    measureLayout();
    updateTarget();
    currentProgress = targetProgress;
    render();

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <section id="about" className="text-graphite dark:text-soft-linen scroll-mt-16">
      {/* 12-Column Grid with Gutters (1 col left, 10 cols center, 1 col right) */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-grid pt-16 md:pt-40 pb-0">
          
          {/* Header Title Box: 'the' kicker + 'designer.' */}
          <div className="grid grid-cols-4 md:grid-cols-10 border-b border-grid">
            <div className="col-span-4 md:col-span-10 p-3 md:p-4">
              <p className="mb-3 md:mb-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 text-graphite dark:text-soft-linen">
                the
              </p>
              <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl text-terracotta dark:text-soft-linen">
                designer.
              </h2>
            </div>
          </div>

          {/* Body Content Area */}
          <div ref={containerRef} className="relative">
            {/* Upper Grid: 4-cols Text + Button | 6-cols Empty Framed Cell */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-grid">
              <div
                ref={textRef}
                className="col-span-4 md:col-span-4 border-r border-grid p-3 md:p-4 flex flex-col items-start gap-8 py-14 md:py-20 relative z-0"
              >
                <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed text-graphite dark:text-soft-linen font-normal">
                  I’m a 19-year-old Data Science undergraduate based in Algiers, studying at USTHB, and a Digital Designer. Grounded in mathematical analysis, statistics, and logic, I bring rigorous analytical precision to visual storytelling. Instead of treating code, data, and design as isolated silos, I bridge them—turning complex data sets and mathematical principles into intuitive, aesthetically compelling digital realities.
                </p>
                <button
                  type="button"
                  onClick={onOpenAboutModal}
                  className="group/cta relative inline-block overflow-hidden border border-grid px-4 py-2 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-terracotta hover:text-soft-linen hover:border-terracotta dark:hover:bg-soft-linen dark:hover:text-terracotta dark:hover:border-soft-linen cursor-pointer"
                >
                  <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[200%]">
                    learn more
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
                  >
                    learn more
                  </span>
                </button>
              </div>

              {/* Upper Right 6-column Framed Cell (Space for initial image placement) */}
              <div className="col-span-4 md:col-span-6 min-h-[220px] md:min-h-[300px]"></div>
            </div>

            {/* Lower Grid: Full-Width 10-column Landing Frame for the expanded image */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-grid">
              <div className="col-span-4 md:col-span-10 h-[380px] md:h-[520px] lg:h-[600px] relative">
                {/* On mobile, image is displayed in natural document flow */}
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

            {/* Desktop Dynamic Scroll-Expanding Image (Layered in front of text and grid lines) */}
            {isDesktop && (
              <div
                ref={imgRef}
                className="absolute z-30 border-l border-r border-b border-grid overflow-hidden h-[380px] md:h-[520px] lg:h-[600px] shadow-md bg-[var(--page-bg)]"
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
