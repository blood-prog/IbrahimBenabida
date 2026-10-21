import React, { useEffect, useRef } from 'react';

// Interactive Generative Canvas representing Data Science & Frontend Animation
export const HeroGenerativeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');

      // Subtle background grid
      ctx.strokeStyle = isDark ? 'rgba(232, 227, 217, 0.1)' : 'rgba(51, 45, 43, 0.08)';
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw multi-frequency data waves
      const waves = isDark
        ? [
            { freq: 0.012, amp: 45, speed: 1.0, color: '#e8e3d9', width: 2.2 },
            { freq: 0.02, amp: 28, speed: -1.3, color: 'rgba(232, 227, 217, 0.7)', width: 1.6 },
            { freq: 0.008, amp: 55, speed: 0.7, color: 'rgba(232, 227, 217, 0.4)', width: 1.2 },
          ]
        : [
            { freq: 0.012, amp: 45, speed: 1.0, color: '#5a1212', width: 2.2 },
            { freq: 0.02, amp: 28, speed: -1.3, color: 'rgba(51, 45, 43, 0.65)', width: 1.6 },
            { freq: 0.008, amp: 55, speed: 0.7, color: 'rgba(90, 18, 18, 0.45)', width: 1.2 },
          ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.width;

        const centerY = canvas.height * 0.52;
        for (let x = 0; x <= canvas.width; x += 4) {
          const y = centerY + Math.sin(x * w.freq + t * w.speed) * w.amp + Math.cos(x * 0.005 + t * 0.5) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // Scatter data points on the main wave
      ctx.fillStyle = isDark ? '#e8e3d9' : '#5a1212';
      const numPoints = 14;
      for (let i = 0; i < numPoints; i++) {
        const px = (canvas.width / (numPoints + 1)) * (i + 1);
        const py = canvas.height * 0.52 + Math.sin(px * 0.012 + t * 1.0) * 45 + Math.cos(px * 0.005 + t * 0.5) * 15;
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Little vertical projection line to baseline
        ctx.beginPath();
        ctx.strokeStyle = isDark ? 'rgba(232, 227, 217, 0.3)' : 'rgba(90, 18, 18, 0.25)';
        ctx.setLineDash([2, 3]);
        ctx.moveTo(px, py);
        ctx.lineTo(px, canvas.height - 20);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[260px] bg-soft-linen/50 dark:bg-black/15 flex flex-col justify-between p-4 overflow-hidden select-none">
      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/70 z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta dark:bg-soft-linen animate-pulse" />
          GENERATIVE MANIFOLD // USTHB ALGIERS
        </span>
        <span>f(x, t) = sin(kx - ωt)</span>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="flex justify-between items-end text-[9px] font-mono tracking-widest text-graphite/50 dark:text-soft-linen/50 z-10">
        <span>DATA PIPELINE: ACTIVE</span>
        <span>FPS: 60 • CANVAS 2D</span>
      </div>
    </div>
  );
};

// Hero Portrait (featuring Lake Twilight photograph)
export const HeroPortraitPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] lg:min-h-[460px] overflow-hidden border-l border-grid group select-none">
      <img
        src="/profile/lake-twilight.jpg"
        alt="Twilight Waters and Horizon at Dusk in Algiers"
        className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* Header technical coordinates */}
      <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">TWILIGHT WATERS // 36°45'N</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">FIG. 01: VISUAL ESSAY</span>
      </div>

      {/* Center aesthetic badge */}
      <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
        <div className="inline-block p-4 border border-white/30 bg-black/60 backdrop-blur-md shadow-lg text-center transform group-hover:scale-105 transition-transform duration-300">
          <p className="text-xs md:text-sm font-mono font-bold tracking-wider text-soft-linen uppercase">
            IBRAHIM BENABIDA
          </p>
          <p className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen/90 mt-1 uppercase font-semibold">
            DATA SCIENCE UNDERGRADUATE &amp; DIGITAL DESIGNER
          </p>
          <p className="text-[9px] font-mono tracking-wider text-soft-linen/70 mt-1">
            USTHB (FACULTY OF COMPUTER SCIENCE)
          </p>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[9px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2 py-1 border border-white/20">ALGIERS WATERFRONT // 35MM</span>
        <span className="bg-terracotta/90 text-soft-linen px-2 py-1 uppercase tracking-wider font-semibold">
          ROOTED INNOVATION
        </span>
      </div>
    </div>
  );
};

// Monogram SVG Contour (Hero right insignia)
export const IbrahimMonogram: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer subtle geometric circle */}
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
      {/* Intertwined 'I' and 'B' artistic linear glyph */}
      <path
        d="M38 30 V90 M38 30 H56 M38 90 H56"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
      />
      <path
        d="M56 30 H75 C84 30, 90 36, 90 45 C90 54, 82 58, 68 58 H56"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
      />
      <path
        d="M56 58 H78 C88 58, 94 65, 94 75 C94 85, 86 90, 74 90 H38"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
      />
      {/* Precision accent dot in Terracotta (Soft Linen in dark mode) */}
      <circle cx="78" cy="74" r="3.5" className="fill-terracotta dark:fill-soft-linen" />
    </svg>
  );
};

// About Section Placeholder (replacing the large developer photo in 16:9 ratio)
export const AboutSectionPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[360px] bg-gradient-to-br from-[#dfd8cb] via-[#d6cec0] to-[#c9c0b0] dark:from-[#5a1212] dark:via-[#4a0f0f] dark:to-[#380b0b] p-6 md:p-10 flex flex-col justify-between overflow-hidden">
      {/* Background Architectural Coordinate Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-16-9" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-16-9)" />
        {/* Rule of Thirds Guides */}
        <line x1="33.33%" y1="0" x2="33.33%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" className="text-terracotta dark:text-soft-linen" />
        <line x1="66.66%" y1="0" x2="66.66%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" className="text-terracotta dark:text-soft-linen" />
        <line x1="0" y1="33.33%" x2="100%" y2="33.33%" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 4" className="text-graphite dark:text-soft-linen" />
        <line x1="0" y1="66.66%" x2="100%" y2="66.66%" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 4" className="text-graphite dark:text-soft-linen" />
        {/* Golden Ratio Circles */}
        <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="text-terracotta dark:text-soft-linen" />
        <circle cx="50%" cy="50%" r="80" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
      </svg>

      {/* Corner Registration Marks */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-graphite/60 dark:border-soft-linen/60 z-10" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-graphite/60 dark:border-soft-linen/60 z-10" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-graphite/60 dark:border-soft-linen/60 z-10" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-graphite/60 dark:border-soft-linen/60 z-10" />

      {/* Top Spec Bar */}
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 z-10 border-b border-graphite/20 dark:border-soft-linen/20 pb-2">
        <span>[IMAGE PLACEHOLDER // 02]</span>
        <span className="hidden sm:inline">SUBJECT: IBRAHIM BENABIDA</span>
        <span>REF: USTHB • DATA SCIENCE & DESIGN</span>
      </div>

      {/* Center Framing Element */}
      <div className="my-auto text-center z-10 py-6 flex flex-col items-center">
        <div className="p-6 md:p-8 border border-terracotta/50 dark:border-soft-linen/50 bg-soft-linen/90 dark:bg-terracotta/90 backdrop-blur-sm max-w-md shadow-md">
          <div className="w-16 h-16 mx-auto mb-4 border border-graphite/40 dark:border-soft-linen/40 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-8 h-8 stroke-terracotta dark:stroke-soft-linen fill-none" strokeWidth="1.6">
              <rect x="4" y="6" width="24" height="20" rx="1" />
              <circle cx="16" cy="16" r="5" />
              <line x1="4" y1="11" x2="28" y2="11" />
            </svg>
          </div>
          <p className="text-xs md:text-sm font-mono font-bold tracking-wider text-graphite dark:text-soft-linen uppercase">
            EDITORIAL PORTRAIT PLACEHOLDER
          </p>
          <p className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen mt-1 uppercase font-semibold">
            19 Y/O • DATA SCIENCE UNDERGRADUATE & DIGITAL DESIGNER
          </p>
          <p className="text-[9px] font-mono tracking-wider text-graphite/60 dark:text-soft-linen/70 mt-2">
            36°45'N 3°03'E • USTHB ALGIERS
          </p>
        </div>
      </div>

      {/* Bottom Technical Grid */}
      <div className="flex justify-between text-[9px] md:text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 z-10 border-t border-graphite/20 dark:border-soft-linen/20 pt-2">
        <span>RATIO: 16:9 • DUAL FIELD</span>
        <span>ROOTED INNOVATION</span>
        <span>STATUS: VERIFIED</span>
      </div>
    </div>
  );
};

// Works Vertical (featuring USTHB brutalist arches in 9:16 vertical ratio)
export const WorksVerticalPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px] overflow-hidden border-t lg:border-t-0 lg:border-l border-grid group select-none">
      <img
        src="/profile/usthb-facade.jpg"
        alt="USTHB Monumental Concrete Arches under Sunset Clouds"
        className="w-full h-full object-cover object-[center_50%] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">USTHB ALGIERS // ARCHES</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">STUDY // 02</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end">
        <div className="bg-graphite/85 backdrop-blur-sm p-3.5 border border-white/20">
          <span className="block text-xs font-mono font-bold text-soft-linen uppercase tracking-wider">
            MONUMENTAL ARCHES
          </span>
          <span className="block text-[9px] font-mono text-terracotta dark:text-soft-linen/90 tracking-widest mt-1">
            NATURAL RATIO 9:16 • ARCHITECTURE
          </span>
        </div>
        <span className="bg-terracotta/90 text-soft-linen text-[9px] font-mono px-2 py-1 uppercase tracking-wider font-semibold">
          SELECTED
        </span>
      </div>
    </div>
  );
};

// Contact Placeholder (featuring Algiers park sunset photograph)
export const ContactPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] overflow-hidden border-t md:border-t-0 md:border-l border-grid group select-none">
      <img
        src="/profile/park-sunset.jpg"
        alt="Algiers Park Meadow and Bench at Sunset"
        className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

      <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">ALGIERS // PARK SUNSET</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">STUDY // 03</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end">
        <div className="bg-graphite/85 backdrop-blur-sm p-3.5 border border-white/20">
          <span className="block text-xs font-mono font-bold text-soft-linen tracking-wider uppercase">
            OPEN FOR COLLABORATION
          </span>
          <span className="block text-[9px] font-mono text-terracotta dark:text-soft-linen/90 tracking-widest mt-1">
            CET (UTC+1) • ALGIERS
          </span>
        </div>
        <span className="bg-terracotta/90 text-soft-linen text-[9px] font-mono px-2 py-1 uppercase tracking-wider font-semibold">
          AVAILABLE
        </span>
      </div>
    </div>
  );
};

// Works Hero Placeholder: Circular "BY ME" Badge + Creator with Camera Silhouette (Screenshot 1)
// Works Hero (featuring Golden Forest photograph in 35mm composition with spinning vinyl badge)
export const WorksHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[520px] overflow-hidden select-none group">
      <img
        src="/profile/golden-forest.jpg"
        alt="Golden Pine Forest Canopy"
        className="w-full h-full object-cover object-[center_50%] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

      {/* Top Spec Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">GOLDEN FOREST // 35MM</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">STUDY // 04</span>
      </div>

      {/* Centerpiece: Spinning Vinyl Badge and Viewfinder */}
      <div className="relative my-auto flex items-center justify-center py-6 z-10">
        {/* Circular Vinyl Badge */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 -top-6 -right-6 md:right-4 opacity-90 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_35s_linear_infinite]">
            <defs>
              <path
                id="badgeCircle"
                d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
              />
            </defs>
            <circle cx="100" cy="100" r="92" fill="rgba(30, 27, 26, 0.85)" stroke="#e8e3d9" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="82" fill="none" stroke="#e8e3d9" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#e8e3d9" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="100" r="28" fill="#5a1212" stroke="#e8e3d9" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="6" fill="#e8e3d9" />
            <text className="font-mono text-[9px] tracking-[0.24em] font-bold fill-soft-linen uppercase">
              <textPath href="#badgeCircle" startOffset="0%">
                • BY IBRAHIM • PORTFOLIO • BY IBRAHIM • PORTFOLIO
              </textPath>
            </text>
          </svg>
        </div>

        {/* Framing Glass Tag */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-48 h-60 md:w-56 md:h-72 border border-white/30 bg-black/55 backdrop-blur-md p-4 flex flex-col justify-between shadow-2xl">
            {/* Viewfinder Target Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/70" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/70" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/70" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/70" />

            <div className="flex justify-between text-[8px] font-mono text-soft-linen/80 uppercase">
              <span>AF-LOCK</span>
              <span className="text-red-400 font-bold">● LIVE</span>
            </div>

            <div className="my-auto flex flex-col items-center text-center">
              <div className="text-[11px] font-mono tracking-widest text-soft-linen uppercase font-bold">
                FOREST CANOPY
              </div>
              <div className="text-[8px] font-mono tracking-wider text-terracotta dark:text-soft-linen/90 mt-1 uppercase">
                ALGIERS NATURAL HABITAT
              </div>
            </div>

            <div className="flex justify-between text-[8px] font-mono text-soft-linen/70 border-t border-white/20 pt-1.5">
              <span>f/2.8 • 1/500s</span>
              <span>ISO 200</span>
              <span>35mm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Grid */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[9px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2 py-1 border border-white/20">ASPECT: 1:1 RATIO</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2 py-1 border border-white/20">LOCATION: ALGIERS</span>
        <span className="bg-terracotta/90 text-soft-linen px-2 py-1 uppercase tracking-wider font-semibold">VERIFIED</span>
      </div>
    </div>
  );
};

// Featured Work Placeholder: Angled layered frame with cinematic landscape (Screenshot 2)
// Featured Work Showcase (Angled layered frame with actual project screenshot or film aesthetic)
export const FeaturedWorkPlaceholder: React.FC<{
  image?: string;
  title?: string;
  subtitle?: string;
}> = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] flex items-center justify-center p-6 md:p-12 overflow-hidden bg-soft-linen/40 dark:bg-black/20">
      {/* Background layered outline frame (offset angle like Screenshot 2) */}
      <div className="relative w-full max-w-lg aspect-[4/3] group cursor-pointer">
        {/* Layer 1: Outermost offset wireframe */}
        <div
          className="absolute inset-0 border-2 border-terracotta/40 dark:border-soft-linen/30 transform rotate-[-2.2deg] scale-[1.03] transition-transform duration-500 pointer-events-none"
        />

        {/* Layer 2: Middle offset wireframe */}
        <div
          className="absolute inset-0 border border-graphite/40 dark:border-soft-linen/40 transform rotate-[1.5deg] scale-[1.01] transition-transform duration-500 pointer-events-none"
        />

        {/* Layer 3: Main photo content container */}
        <div className="relative w-full h-full border-2 border-terracotta dark:border-soft-linen bg-gradient-to-br from-[#d9d2c5] via-[#cec6b7] to-[#beb4a3] dark:from-[#4d1010] dark:via-[#3d0b0b] dark:to-[#2b0707] shadow-xl overflow-hidden flex flex-col justify-between">
          {image ? (
            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden group/feat">
              <img
                src={image}
                alt={title || "Featured Work"}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover/feat:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35 pointer-events-none" />
              
              {/* Top Viewfinder Metadata */}
              <div className="relative z-10 flex justify-between items-center text-[9px] md:text-[10px] font-mono tracking-widest text-soft-linen bg-black/60 backdrop-blur-md px-3.5 py-2 border-b border-soft-linen/20">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>SPOTLIGHT // PRODUCTION</span>
                </span>
                <span>TEKTOFLOW AGENCY</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative z-10 flex justify-between items-end text-[10px] font-mono text-soft-linen bg-black/70 px-4 py-3 backdrop-blur-md border-t border-soft-linen/20">
                <div>
                  <span className="font-bold text-sm md:text-base block tracking-tight text-soft-linen">
                    {title || "TektoFlow Platform"}
                  </span>
                  <span className="text-[9px] text-amber-300 dark:text-amber-200 tracking-wider uppercase font-semibold">
                    {subtitle || "WEB & IDENTITY SYSTEM"}
                  </span>
                </div>
                <span className="text-[9px] tracking-widest text-soft-linen/75 uppercase">
                  2024 DEPLOYMENT
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 md:p-6 flex flex-col justify-between h-full">
              {/* Film Viewfinder Top Metadata */}
              <div className="flex justify-between items-center text-[9px] md:text-[10px] font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 z-10 border-b border-graphite/20 dark:border-soft-linen/20 pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>4K CINEMA // 24 FPS</span>
                </span>
                <span>FRAME: 4:3 // EXHIBITION</span>
              </div>

              {/* Center Graphic */}
              <div className="relative my-auto flex flex-col items-center justify-center py-4 z-10">
                <div className="mt-3 px-3 py-1 bg-soft-linen/80 dark:bg-black/60 border border-graphite/30 dark:border-soft-linen/30 backdrop-blur-sm text-center">
                  <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-graphite dark:text-soft-linen uppercase block">
                    {title || "[FEATURED WORK PHOTO]"}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-mono text-terracotta dark:text-soft-linen/80 tracking-widest uppercase">
                    MULTIDISCIPLINARY PROJECT STUDY
                  </span>
                </div>
              </div>

              {/* Film Viewfinder Bottom Bar */}
              <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 z-10 border-t border-graphite/20 dark:border-soft-linen/20 pt-2">
                <span>TIMECODE: 00:04:12:08</span>
                <span>COLOR: LOG3G10</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Work Grid Card Component (Renders real screenshots, reserved space cards, or architectural fallbacks)
export const WorkGridPlaceholder: React.FC<{
  title: string;
  category: string;
  index: number;
  image?: string;
  status?: 'COMPLETED' | 'IN_PROGRESS' | 'COMING_SOON' | 'PRIVATE';
  metric?: string;
}> = ({ title, category, index, image, status, metric }) => {
  // Case A: Real project preview image
  if (image) {
    return (
      <div className="relative w-full aspect-[16/10] bg-soft-linen/60 dark:bg-black/30 overflow-hidden border-b border-grid group/card">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none opacity-60 group-hover/card:opacity-30 transition-opacity" />

        {/* Top registration badge */}
        <div className="absolute top-2 inset-x-2.5 flex justify-between items-center text-[9px] font-mono tracking-widest text-soft-linen bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-[1px]">
          <span>INDEX: 0{index + 1}</span>
          <span className="font-bold text-amber-300 dark:text-amber-200 uppercase">{category}</span>
        </div>

        {/* Bottom metric badge if available */}
        {metric && (
          <div className="absolute bottom-2 right-2 bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta text-[8px] font-mono font-bold tracking-wider px-2 py-0.5 shadow-sm">
            {metric}
          </div>
        )}
      </div>
    );
  }

  // Case B: Reserved space for upcoming / in-progress projects
  if (status && status !== 'COMPLETED') {
    const isProgress = status === 'IN_PROGRESS';
    const isPrivate = status === 'PRIVATE';
    const label = isProgress
      ? 'ACTIVE DEVELOPMENT // LAB WORK'
      : isPrivate
      ? 'PRIVATE REPOSITORY // CONFIDENTIAL'
      : 'SPACE RESERVED // DETAILS COMING SOON';

    return (
      <div className="relative w-full aspect-[16/10] bg-soft-linen/40 dark:bg-black/25 p-4 flex flex-col justify-between overflow-hidden border-b border-grid border-dashed border-terracotta/40 dark:border-soft-linen/30 group-hover:bg-terracotta/5 dark:group-hover:bg-soft-linen/5 transition-colors">
        {/* Top status */}
        <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 z-10">
          <span className="flex items-center gap-1.5 font-bold text-terracotta dark:text-soft-linen">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isProgress
                  ? 'bg-amber-500 animate-pulse'
                  : isPrivate
                  ? 'bg-purple-500'
                  : 'bg-terracotta dark:bg-soft-linen'
              }`}
            />
            <span>{isProgress ? 'IN PROGRESS' : isPrivate ? 'PRIVATE LAB' : 'RESERVED'}</span>
          </span>
          <span className="uppercase text-[8px] opacity-80">{category}</span>
        </div>

        {/* Center message banner */}
        <div className="my-auto text-center z-10 py-3 px-3 border border-dashed border-grid bg-soft-linen/85 dark:bg-black/50 backdrop-blur-sm shadow-sm">
          <span className="block text-[11px] font-mono font-bold tracking-wider text-terracotta dark:text-soft-linen uppercase mb-1">
            {title}
          </span>
          <span className="text-[8px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase block">
            {label}
          </span>
        </div>

        {/* Bottom technical info */}
        <div className="flex justify-between text-[8px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 z-10 border-t border-grid pt-1.5">
          <span>PIPELINE: QUEUED</span>
          <span className="font-semibold text-terracotta dark:text-soft-linen">SPACE ALLOCATED</span>
        </div>
      </div>
    );
  }

  // Case C: Standard architectural placeholder fallback
  return (
    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-[#dfd9ce] via-[#d5cebf] to-[#c7bfae] dark:from-[#471010] dark:via-[#360909] dark:to-[#240505] p-4 flex flex-col justify-between overflow-hidden border-b border-grid group-hover:scale-[1.01] transition-transform duration-300">
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-graphite/50 dark:border-soft-linen/50" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-graphite/50 dark:border-soft-linen/50" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-graphite/50 dark:border-soft-linen/50" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-graphite/50 dark:border-soft-linen/50" />

      <div className="flex justify-between text-[9px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 z-10">
        <span>[IMG-0{index + 1}]</span>
        <span className="font-semibold uppercase text-terracotta dark:text-soft-linen">{category}</span>
      </div>

      <div className="my-auto text-center z-10 py-2">
        <span className="block text-[10px] font-mono font-bold tracking-wider text-graphite dark:text-soft-linen uppercase truncate px-2">
          {title}
        </span>
        <span className="text-[8px] font-mono tracking-widest text-graphite/50 dark:text-soft-linen/50 uppercase">
          PROJECT ARCHIVE
        </span>
      </div>

      <div className="flex justify-between text-[8px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 z-10 border-t border-graphite/20 dark:border-soft-linen/20 pt-1.5">
        <span>RATIO: 16:10</span>
        <span className="text-terracotta dark:text-soft-linen font-semibold">PORTFOLIO // 2024</span>
      </div>
    </div>
  );
};

// Contact Hero Placeholder: Colorful Street Mural Graphic (Screenshot 4)
// Contact Hero (featuring USTHB Campus architecture and palm trees)
export const ContactHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[500px] overflow-hidden select-none border-t lg:border-t-0 lg:border-l border-grid group">
      <img
        src="/profile/usthb-campus.jpg"
        alt="USTHB Campus View with Architecture and Palm Trees"
        className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* Top Spec Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono tracking-widest text-soft-linen z-10">
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">USTHB CAMPUS // ALGIERS</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2.5 py-1 border border-white/20">STUDY // 05</span>
      </div>

      {/* Center: Clean Glass Tag */}
      <div className="relative my-auto flex flex-col items-center justify-center py-6 z-10">
        <div className="border border-white/30 bg-black/60 backdrop-blur-md p-6 max-w-sm text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-soft-linen uppercase">
            CAMPUS &amp; RESEARCH ENVIRONMENT
          </p>
          <p className="text-[10px] font-mono tracking-wider text-terracotta dark:text-soft-linen/90 mt-1 uppercase">
            FACULTY OF COMPUTER SCIENCE &amp; DATA SCIENCE
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end text-[10px] font-mono tracking-widest text-soft-linen">
        <span className="bg-graphite/80 backdrop-blur-sm px-2 py-1 border border-white/20">TIMEZONE: CET (UTC+1)</span>
        <span className="bg-graphite/80 backdrop-blur-sm px-2 py-1 border border-white/20">ALGIERS, DZ</span>
      </div>
    </div>
  );
};
