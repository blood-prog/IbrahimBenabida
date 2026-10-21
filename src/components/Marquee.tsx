import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'VIEW ALL WORKS',
    'THE ANALYTICAL MIND',
    'DIGITAL DESIGN',
    'USTHB ALGIERS',
    'DATA SCIENCE UNDERGRADUATE',
    'MODERN FRONTEND & REACT',
    'VIBE CODING & AI WORKFLOWS',
    'ROOTED INNOVATION',
  ];

  return (
    <div className="border-b border-grid bg-[var(--page-bg)] overflow-hidden py-3 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs md:text-sm font-mono tracking-widest text-graphite dark:text-soft-linen font-semibold">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="inline-flex items-center gap-6">
            <span className="text-terracotta dark:text-soft-linen/50">/</span>
            <span className="hover:text-terracotta dark:hover:text-soft-linen/80 transition-colors">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
