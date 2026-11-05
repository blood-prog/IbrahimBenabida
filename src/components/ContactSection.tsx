import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ContactPlaceholder } from './Placeholders';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenContactModal?: () => void;
  onNavigateToContact?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContactModal,
  onNavigateToContact,
}) => {
  const handleContactClick = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else if (onNavigateToContact) {
      onNavigateToContact();
    }
  };

  return (
    <section id="contact" className="border-b border-grid scroll-mt-16 w-full overflow-hidden">
      {/* Section Header: editorial headline with personal portrait avatar & harmonic status shape */}
      <div className="p-5 sm:p-8 md:p-10 lg:p-14 border-b border-grid flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-terracotta dark:border-soft-linen shrink-0 shadow-sm">
            <img
              src="/profile/ibrahim-cherry-portrait.jpg"
              alt="Ibrahim Benabida"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
          <div>
            <h2 className="text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.88] font-display font-bold tracking-tight text-terracotta dark:text-soft-linen">
              let's talk.
            </h2>
          </div>
        </div>

        {/* Architectural Status Badge with Ripple Wave Harmonic Shape */}
        <div className="hidden sm:flex items-center gap-3 px-3.5 py-2 border border-grid rounded-[2px] bg-soft-linen/50 dark:bg-black/20 select-none">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-grid shrink-0">
            <img
              src="/patterns/web-hero-1920x1080/svg/ripple_linen-cherry.svg"
              alt=""
              className="w-full h-full object-cover block dark:hidden"
              aria-hidden="true"
            />
            <img
              src="/patterns/web-hero-1920x1080/svg/ripple_cherry-linen.svg"
              alt=""
              className="w-full h-full object-cover hidden dark:block"
              aria-hidden="true"
            />
          </div>
          <div className="text-[10px] font-mono leading-tight">
            <div className="text-terracotta dark:text-soft-linen font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE STATUS</span>
            </div>
            <span className="text-graphite/60 dark:text-soft-linen/60">REPLY &lt; 24H</span>
          </div>
        </div>
      </div>

      {/* 2-Column Split: Left Action, Right Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-w-0">
        <div className="md:col-span-6 lg:col-span-7 p-5 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-between gap-6 border-b md:border-b-0 md:border-r border-grid min-w-0">
          <p className="text-lg sm:text-xl md:text-2xl font-sans text-graphite dark:text-soft-linen leading-relaxed max-w-xl">
            Have a project in mind, need a frontend developer, or looking to collaborate? Send me a message or write to me directly—I typically reply within a few hours.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleContactClick}
              aria-label="Send a direct message"
              className="min-h-[48px] px-6 sm:px-8 py-3.5 border border-terracotta dark:border-soft-linen bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta text-xs sm:text-sm font-mono tracking-widest uppercase hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer font-bold"
            >
              SEND A MESSAGE
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email directly"
              className="inline-flex items-center gap-2 min-h-[48px] px-5 sm:px-6 py-3.5 border border-grid text-xs sm:text-sm font-mono tracking-widest uppercase hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen text-graphite dark:text-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer font-semibold"
            >
              <span>EMAIL DIRECTLY</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 min-w-0">
          <ContactPlaceholder />
        </div>
      </div>
    </section>
  );
};
