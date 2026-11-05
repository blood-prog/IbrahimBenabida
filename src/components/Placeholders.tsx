import React, { useEffect, useRef } from 'react';

// Generative Canvas representing Mathematical & Data Waves (Clean visual rest)
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
      ctx.strokeStyle = isDark ? 'rgba(232, 227, 217, 0.08)' : 'rgba(51, 45, 43, 0.06)';
      ctx.lineWidth = 1;
      const step = 36;
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
            { freq: 0.02, amp: 28, speed: -1.3, color: 'rgba(232, 227, 217, 0.65)', width: 1.5 },
            { freq: 0.008, amp: 55, speed: 0.7, color: 'rgba(232, 227, 217, 0.35)', width: 1.2 },
          ]
        : [
            { freq: 0.012, amp: 45, speed: 1.0, color: '#5a1212', width: 2.2 },
            { freq: 0.02, amp: 28, speed: -1.3, color: 'rgba(51, 45, 43, 0.6)', width: 1.5 },
            { freq: 0.008, amp: 55, speed: 0.7, color: 'rgba(90, 18, 18, 0.35)', width: 1.2 },
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
      const numPoints = 12;
      for (let i = 0; i < numPoints; i++) {
        const px = (canvas.width / (numPoints + 1)) * (i + 1);
        const py = canvas.height * 0.52 + Math.sin(px * 0.012 + t * 1.0) * 45 + Math.cos(px * 0.005 + t * 0.5) * 15;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = isDark ? 'rgba(232, 227, 217, 0.25)' : 'rgba(90, 18, 18, 0.2)';
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
    <div className="relative w-full h-full min-h-[260px] bg-soft-linen/50 dark:bg-black/15 overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

// Hero Portrait (Lake Twilight study - clean visual rest without text stickers)
export const HeroPortraitPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] lg:min-h-[460px] overflow-hidden border-l border-grid select-none">
      <img loading="lazy" decoding="async"
        src="/profile/lake-twilight.webp"
        alt="Twilight Waters and Horizon at Dusk in Algiers"
        className="w-full h-full object-cover object-[center_60%] transition-transform duration-700 ease-out"
      />
    </div>
  );
};

// Monogram SVG Contour (Hero right insignia)
export const IbrahimMonogram: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
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
      <circle cx="78" cy="74" r="3.5" className="fill-terracotta dark:fill-soft-linen" />
    </svg>
  );
};

// About Section Geometric Frame
export const AboutSectionPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[320px] bg-soft-linen dark:bg-terracotta p-6 md:p-10 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-16 h-16 border border-graphite/40 dark:border-soft-linen/40 flex items-center justify-center">
        <svg viewBox="0 0 32 32" className="w-8 h-8 stroke-terracotta dark:stroke-soft-linen fill-none" strokeWidth="1.6">
          <rect x="4" y="6" width="24" height="20" rx="1" />
          <circle cx="16" cy="16" r="5" />
          <line x1="4" y1="11" x2="28" y2="11" />
        </svg>
      </div>
    </div>
  );
};

// Works Vertical (USTHB brutalist arches - clean visual rest without text stickers)
export const WorksVerticalPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px] overflow-hidden border-t lg:border-t-0 lg:border-l border-grid select-none">
      <img loading="lazy" decoding="async"
        src="/profile/usthb-facade.webp"
        alt="USTHB Monumental Concrete Arches under Sunset Clouds"
        className="w-full h-full object-cover object-[center_50%] transition-transform duration-700 ease-out"
      />
    </div>
  );
};

// Contact Placeholder (Algiers park sunset - clean visual rest without pattern overlay)
export const ContactPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] overflow-hidden border-t md:border-t-0 md:border-l border-grid select-none group">
      <img loading="lazy" decoding="async"
        src="/profile/park-sunset.webp"
        alt="Algiers Park Meadow and Bench at Sunset"
        className="w-full h-full object-cover object-[center_60%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
};

// Works Hero (Golden Forest - clean visual rest without HUD overlays)
export const WorksHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[480px] overflow-hidden select-none">
      <img loading="lazy" decoding="async"
        src="/profile/golden-forest.webp"
        alt="Golden Pine Forest Canopy"
        className="w-full h-full object-cover object-[center_50%] transition-transform duration-700 ease-out"
      />
    </div>
  );
};

// Featured Work Showcase (Clean framed project image without camera HUD)
export const FeaturedWorkPlaceholder: React.FC<{
  image?: string;
  title?: string;
  subtitle?: string;
}> = ({ image, title }) => {
  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[420px] flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-soft-linen/40 dark:bg-black/20">
      <div className="relative w-full max-w-lg aspect-[4/3] group">
        <div
          className="absolute inset-0 border border-terracotta/40 dark:border-soft-linen/30 transform rotate-[-1.5deg] scale-[1.02] transition-transform duration-500 pointer-events-none"
        />
        <div className="relative w-full h-full border border-grid bg-soft-linen dark:bg-terracotta shadow-md overflow-hidden flex flex-col justify-center">
          {image ? (
            <img loading="lazy" decoding="async"
              src={image}
              alt={title || "Featured Work"}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="p-6 text-center text-xs font-mono opacity-60">
              {title || "Featured Project"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Contact Hero (USTHB Campus architecture - clean visual rest without HUD glass tags)
export const ContactHeroPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] lg:min-h-[460px] overflow-hidden select-none border-t lg:border-t-0 lg:border-l border-grid">
      <img loading="lazy" decoding="async"
        src="/profile/usthb-campus.webp"
        alt="USTHB Campus View with Architecture and Palm Trees"
        className="w-full h-full object-cover object-[center_60%] transition-transform duration-700 ease-out"
      />
    </div>
  );
};
