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

  const profileImages = [
    {
      src: '/profile/usthb-facade.jpg',
      title: 'USTHB Monumental Arches',
      location: 'USTHB Algiers',
      label: 'ARCHITECTURAL STUDY',
    },
    {
      src: '/profile/usthb-campus.jpg',
      title: 'Campus Lawn & Pavilions',
      location: 'Bab Ezzouar',
      label: 'CAMPUS LIFE',
    },
    {
      src: '/profile/park-sunset.jpg',
      title: 'Sunset Solitude',
      location: 'Algiers Park',
      label: 'GOLDEN HOUR',
    },
    {
      src: '/profile/lake-twilight.jpg',
      title: 'Twilight Reflections',
      location: 'Waterfront Algiers',
      label: 'NIGHT ESSAY',
    },
    {
      src: '/profile/golden-forest.jpg',
      title: 'Pine Forest Canopy',
      location: 'Algiers Heights',
      label: 'NATURAL ESSAY',
    },
  ];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const activeImage = profileImages[activeImageIdx];

  const renderImageContent = () => (
    <div className="relative w-full h-full overflow-hidden group select-none">
      <img
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.title}
        className="w-full h-full object-cover object-[center_45%] transition-all duration-700 ease-out group-hover:scale-105 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* Top Floating Control Bar: Photo Switcher [01] - [05] */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap justify-between items-center gap-2 z-20">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/20 text-soft-linen text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          <span>PROFILE ESSAYS</span>
        </div>
        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 border border-white/20">
          {profileImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx(i);
              }}
              className={`px-2 py-0.5 text-[10px] font-mono transition-all cursor-pointer ${
                activeImageIdx === i
                  ? 'bg-terracotta text-soft-linen font-bold shadow-sm'
                  : 'text-soft-linen/70 hover:text-soft-linen hover:bg-white/10'
              }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Metadata & Caption Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20 pointer-events-none">
        <div className="bg-graphite/85 backdrop-blur-md p-3 border border-white/20 max-w-sm">
          <p className="text-[11px] font-mono font-bold text-soft-linen tracking-wider uppercase">
            {activeImage.title}
          </p>
          <div className="flex items-center gap-2 text-[9px] font-mono text-terracotta dark:text-soft-linen/80 tracking-widest mt-0.5 uppercase">
            <span>{activeImage.location}</span>
            <span>•</span>
            <span>{activeImage.label}</span>
          </div>
        </div>
        <span className="hidden sm:inline-block bg-terracotta/90 text-soft-linen text-[9px] font-mono px-2 py-1 uppercase tracking-wider font-semibold">
          INDEX 0{activeImageIdx + 1} / 05
        </span>
      </div>
    </div>
  );

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
                    {renderImageContent()}
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
                {renderImageContent()}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
