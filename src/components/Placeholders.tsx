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

// Hero Portrait Placeholder (replacing photo with architectural vector study)
export const HeroPortraitPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[260px] bg-gradient-to-br from-soft-linen via-[#dfd9ce] to-[#d6cfc3] dark:from-[#5a1212] dark:via-[#4a0f0f] dark:to-[#380b0b] p-6 flex flex-col justify-between overflow-hidden border-l border-grid">
      {/* Background Architectural Markings */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pat" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pat)" />
        {/* Fibonacci / Geometric Contour */}
        <circle cx="70%" cy="50%" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-terracotta dark:text-soft-linen" />
        <circle cx="70%" cy="50%" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-graphite dark:text-soft-linen" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-graphite dark:text-soft-linen" />
        <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-terracotta dark:text-soft-linen" />
      </svg>

      {/* Header technical coordinates */}
      <div className="flex justify-between text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/70 z-10">
        <span>[IMAGE PLACEHOLDER // 01]</span>
        <span>FIG. A: PROFILE CONTOUR</span>
      </div>

      {/* Center aesthetic abstract representation */}
      <div className="my-auto text-center z-10 py-6">
        <div className="inline-block p-4 border border-terracotta/40 dark:border-soft-linen/40 bg-soft-linen/70 dark:bg-terracotta/80 backdrop-blur-sm shadow-sm">
          <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center border border-graphite/30 dark:border-soft-linen/30">
            <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-terracotta dark:stroke-soft-linen fill-none" strokeWidth="1.5">
              <circle cx="20" cy="15" r="7" />
              <path d="M8 34 C8 24, 32 24, 32 34" />
              <line x1="20" y1="2" x2="20" y2="6" className="stroke-graphite dark:stroke-soft-linen" />
              <line x1="20" y1="34" x2="20" y2="38" className="stroke-graphite dark:stroke-soft-linen" />
            </svg>
          </div>
          <p className="text-[11px] font-mono font-semibold tracking-wider text-graphite dark:text-soft-linen uppercase">
            IBRAHIM BENABIDA
          </p>
          <p className="text-[9px] font-mono tracking-widest text-terracotta dark:text-soft-linen/80 mt-0.5 uppercase font-medium">
            DATA SCIENCE & DIGITAL DESIGN
          </p>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="flex justify-between text-[9px] font-mono tracking-widest text-graphite/50 dark:text-soft-linen/50 z-10 border-t border-grid pt-2">
        <span>36°45'N 3°03'E (ALGIERS)</span>
        <span>RATIO: 16:9 • VECTOR</span>
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

// Works Vertical Placeholder (replacing the photographer photo on the right of Selected Works)
export const WorksVerticalPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px] bg-gradient-to-b from-[#e5e0d6] via-[#ded7cb] to-[#d3ccbe] dark:from-[#5a1212] dark:via-[#4a0f0f] dark:to-[#380b0b] p-6 flex flex-col justify-between overflow-hidden border-t lg:border-t-0 lg:border-l border-grid">
      <div className="flex justify-between text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 border-b border-grid pb-2">
        <span>[IMAGE PLACEHOLDER // 03]</span>
        <span>SELECTED EXHIBITION</span>
      </div>

      <div className="my-auto py-8 flex flex-col items-center">
        {/* Abstract 3D Cube / Perspective Diagram */}
        <svg viewBox="0 0 160 160" className="w-36 h-36 stroke-graphite dark:stroke-soft-linen fill-none" strokeWidth="1.2">
          {/* Isometric Cube */}
          <polygon points="80,20 140,55 80,90 20,55" className="stroke-terracotta dark:stroke-soft-linen fill-terracotta/10 dark:fill-soft-linen/10" />
          <polygon points="20,55 80,90 80,145 20,110" />
          <polygon points="80,90 140,55 140,110 80,145" className="fill-graphite/5 dark:fill-soft-linen/5" />
          {/* Interior guidelines */}
          <line x1="80" y1="20" x2="80" y2="145" className="stroke-terracotta dark:stroke-soft-linen" strokeDasharray="3 3" />
        </svg>

        <span className="mt-6 text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen font-semibold uppercase">
          DISCIPLINARY CONVERGENCE
        </span>
        <span className="text-[9px] font-mono tracking-wider text-graphite/60 dark:text-soft-linen/70 mt-1 text-center max-w-[200px]">
          DATA SCIENCE × BRAND IDENTITY × FRONTEND
        </span>
      </div>

      <div className="text-[9px] font-mono text-graphite/50 dark:text-soft-linen/50 border-t border-grid pt-2 flex justify-between">
        <span>RATIO: 9:16 VERTICAL</span>
        <span>INDEX: 01 — 03</span>
      </div>
    </div>
  );
};

// Contact Placeholder (replacing photo in 'chat?' section)
export const ContactPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] bg-gradient-to-tr from-[#ded7ca] via-[#e5dfd4] to-[#ece7dc] dark:from-[#5a1212] dark:via-[#4a0f0f] dark:to-[#380b0b] p-6 flex flex-col justify-between overflow-hidden border-t md:border-t-0 md:border-l border-grid">
      <div className="flex justify-between text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 border-b border-grid pb-2">
        <span>[IMAGE PLACEHOLDER // 04]</span>
        <span>DIRECT ENGAGEMENT</span>
      </div>

      <div className="my-auto text-center py-6">
        <div className="inline-block p-5 border border-dashed border-graphite/40 dark:border-soft-linen/40 bg-soft-linen/90 dark:bg-terracotta/90">
          <svg className="w-12 h-12 mx-auto stroke-terracotta dark:stroke-soft-linen fill-none mb-3" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0017.25 4.5h-10.5A2.25 2.25 0 004.5 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span className="block text-xs font-mono font-bold text-graphite dark:text-soft-linen tracking-wider uppercase">
            OPEN FOR COLLABORATION
          </span>
          <span className="block text-[9px] font-mono text-terracotta dark:text-soft-linen/80 tracking-widest mt-1">
            CLIENT PROJECTS & RESEARCH
          </span>
        </div>
      </div>

      <div className="flex justify-between text-[9px] font-mono tracking-widest text-graphite/50 dark:text-soft-linen/50 border-t border-grid pt-2">
        <span>TIMEZONE: CET (UTC+1)</span>
        <span>STATUS: AVAILABLE</span>
      </div>
    </div>
  );
};

// Works Hero Placeholder: Circular "BY ME" Badge + Creator with Camera Silhouette (Screenshot 1)
export const WorksHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[520px] bg-[#161413] dark:bg-[#120e0e] text-soft-linen p-6 md:p-8 flex flex-col justify-between overflow-hidden select-none">
      {/* Background Subtle Technical Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="works-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#e8e3d9" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#works-grid)" />
      </svg>

      {/* Top Spec Header */}
      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-soft-linen/70 z-10 border-b border-white/10 pb-2">
        <span>[IMAGE PLACEHOLDER // WORKS HERO]</span>
        <span>REF: 01 // 35MM FRAMING</span>
      </div>

      {/* Centerpiece: Spinning Vinyl Badge and Camera Silhouette */}
      <div className="relative my-auto flex items-center justify-center py-6 z-10">
        {/* Circular "• BY ME • BY ME • BY ME •" Vinyl Badge */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 -top-6 -right-6 md:right-4 opacity-90 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_35s_linear_infinite]">
            <defs>
              <path
                id="badgeCircle"
                d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
              />
            </defs>
            {/* Record Grooves */}
            <circle cx="100" cy="100" r="92" fill="#c2cfb8" stroke="#5a1212" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="82" fill="none" stroke="#5a1212" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#5a1212" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="#5a1212" strokeWidth="0.8" opacity="0.4" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#5a1212" strokeWidth="1" opacity="0.7" />
            <circle cx="100" cy="100" r="16" fill="#5a1212" />
            {/* Circular Typography */}
            <text className="font-mono text-[9.5px] tracking-[0.24em] font-bold fill-[#5a1212] uppercase">
              <textPath href="#badgeCircle" startOffset="0%">
                • BY ME • BY ME • BY ME • BY ME • BY ME • BY ME
              </textPath>
            </text>
          </svg>
        </div>

        {/* Creator with Camera Graphic Contour */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-48 h-60 md:w-56 md:h-72 border border-white/20 bg-black/40 backdrop-blur-sm p-4 flex flex-col justify-between shadow-2xl">
            {/* Viewfinder Target Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/70" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/70" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/70" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/70" />

            <div className="flex justify-between text-[8px] font-mono text-soft-linen/60 uppercase">
              <span>AF-LOCK</span>
              <span className="text-red-400 font-bold">● REC</span>
            </div>

            {/* Stylized Silhouette & Camera Vector */}
            <div className="my-auto flex flex-col items-center">
              <svg viewBox="0 0 100 120" className="w-28 h-32 stroke-soft-linen fill-none" strokeWidth="1.6">
                {/* Person Head & Cap Silhouette */}
                <path d="M35 32 C35 20, 65 20, 65 32 C65 42, 35 42, 35 32 Z" fill="#2d2825" />
                <path d="M30 28 Q50 18 70 28" strokeWidth="2.2" strokeLinecap="round" />
                {/* Shoulders */}
                <path d="M20 75 C20 45, 80 45, 80 75 L84 110 L16 110 Z" fill="#1f1b19" stroke="#e8e3d9" strokeWidth="1.2" />
                {/* Camera Body & Lens */}
                <rect x="36" y="52" width="42" height="28" rx="2" fill="#38322e" stroke="#e8e3d9" strokeWidth="1.8" />
                <circle cx="57" cy="66" r="10" stroke="#e8e3d9" strokeWidth="2" fill="#1a1816" />
                <circle cx="57" cy="66" r="4" fill="#ad4a3e" />
                <rect x="42" y="47" width="10" height="5" fill="#e8e3d9" />
                {/* Hands holding camera */}
                <path d="M30 68 Q34 60 40 64" strokeWidth="2" strokeLinecap="round" />
                <path d="M78 64 Q82 60 84 72" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="text-[10px] font-mono tracking-widest text-soft-linen uppercase mt-2 font-semibold">
                CREATOR PORTRAIT
              </div>
              <div className="text-[8px] font-mono tracking-wider text-soft-linen/50">
                PHOTO PLACEHOLDER
              </div>
            </div>

            {/* Camera Viewfinder Overlay Metrics */}
            <div className="flex justify-between text-[8px] font-mono text-soft-linen/70 border-t border-white/10 pt-1.5">
              <span>f/2.8 • 1/250s</span>
              <span>ISO 400</span>
              <span>35mm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Grid */}
      <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-soft-linen/60 z-10 border-t border-white/10 pt-2">
        <span>ASPECT: 1:1 RATIO</span>
        <span>LOCATION: ALGIERS / GLOBAL</span>
        <span>STATUS: PLACEHOLDER</span>
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
export const ContactHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[500px] bg-gradient-to-br from-[#d0c6b3] via-[#b8ac95] to-[#9e9178] dark:from-[#450e0e] dark:via-[#360808] dark:to-[#220404] p-6 md:p-8 flex flex-col justify-between overflow-hidden select-none border-t lg:border-t-0 lg:border-l border-grid">
      {/* Background Brick & Street Mural Guidelines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="brick-pat" width="60" height="30" patternUnits="userSpaceOnUse">
            <rect width="60" height="30" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
            <line x1="30" y1="0" x2="30" y2="15" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
            <line x1="0" y1="15" x2="60" y2="15" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
            <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.8" className="text-graphite dark:text-soft-linen" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#brick-pat)" />
      </svg>

      {/* Top Spec Bar */}
      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 z-10 border-b border-graphite/20 dark:border-soft-linen/20 pb-2">
        <span>[IMAGE PLACEHOLDER // URBAN MURAL]</span>
        <span>FIG. C: STREET ART & CANVASES</span>
      </div>

      {/* Center: Vibrant Artistic Street Mural Representation */}
      <div className="relative my-auto flex flex-col items-center justify-center py-6 z-10">
        <div className="w-full max-w-md border-2 border-graphite dark:border-soft-linen bg-white/70 dark:bg-black/50 backdrop-blur-sm p-4 md:p-6 shadow-xl">
          {/* Mural Graphic Composition */}
          <div className="relative w-full h-44 md:h-52 bg-[#337a8b] rounded-[2px] overflow-hidden border border-graphite/30 dark:border-soft-linen/30 flex items-center justify-center p-4">
            {/* Colorful Graffiti / Mural Elements */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,#e05d44_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#f1c40f_0%,transparent_60%)]" />

            {/* Stylized whimsical characters reminiscent of Seoul mural (Hippo, child, cartoon pizza) */}
            <svg viewBox="0 0 240 120" className="w-full h-full" fill="none">
              {/* Whimsical Hippo Silhouette */}
              <ellipse cx="90" cy="70" rx="45" ry="30" fill="#e88294" stroke="#5a1212" strokeWidth="2" />
              <circle cx="65" cy="55" r="7" fill="#5a1212" />
              <path d="M45 70 C45 85, 110 85, 110 70" stroke="#5a1212" strokeWidth="2" fill="#fff" />
              {/* Pizza slice in mouth */}
              <polygon points="105,65 140,55 135,80" fill="#f4d03f" stroke="#5a1212" strokeWidth="1.5" />
              {/* Cartoon character / friend */}
              <circle cx="160" cy="50" r="18" fill="#f5b041" stroke="#5a1212" strokeWidth="2" />
              <path d="M150 48 Q155 42 160 48" stroke="#5a1212" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M165 48 Q170 42 175 48" stroke="#5a1212" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M155 60 Q160 64 165 60" stroke="#5a1212" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="145" y="68" width="30" height="35" rx="3" fill="#2980b9" stroke="#5a1212" strokeWidth="2" />
              {/* Street sign typography */}
              <text x="25" y="105" className="font-mono text-[7px] font-bold fill-[#fff]">
                URBAN VISUAL STUDY // ARCHIVE 2024
              </text>
            </svg>
          </div>

          <div className="mt-3 flex justify-between items-center text-graphite dark:text-soft-linen">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider">
                STREET MURAL PHOTOGRAPHY
              </p>
              <p className="text-[9px] font-mono text-terracotta dark:text-soft-linen/80 uppercase">
                URBAN ART & CONTEMPORARY ENVIRONMENT
              </p>
            </div>
            <span className="text-[9px] font-mono px-2 py-1 border border-graphite/40 dark:border-soft-linen/40 uppercase">
              16:9 35MM
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Grid */}
      <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 z-10 border-t border-graphite/20 dark:border-soft-linen/20 pt-2">
        <span>STREET ARCHIVE // 2024</span>
        <span>EXPOSURE: NATURAL LIGHT</span>
        <span>STATUS: VERIFIED</span>
      </div>
    </div>
  );
};
