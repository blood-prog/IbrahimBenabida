import React, { useState } from 'react';
import {
  Globe,
  Layers,
  Mail,
  Share2,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface LinksPageProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onNavigateHome: () => void;
  onNavigateWorks: () => void;
  onNavigateContact: () => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.29c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c-.01 4.5-3.67 8.15-8.17 8.15zm4.47-6.1c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinksPage: React.FC<LinksPageProps> = ({
  darkMode,
  onToggleTheme,
  onNavigateHome,
  onNavigateWorks,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = async () => {
    const url = 'https://ibrahimbenabida.online/links';
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // fallback
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const links = [
    {
      title: 'Main Portfolio',
      icon: <Globe className="w-5 h-5 text-terracotta dark:text-soft-linen" />,
      onClick: onNavigateHome,
      badgeBg: 'bg-terracotta/10 dark:bg-soft-linen/10',
    },
    {
      title: 'Selected Works',
      icon: <Layers className="w-5 h-5 text-terracotta dark:text-soft-linen" />,
      onClick: onNavigateWorks,
      badgeBg: 'bg-terracotta/10 dark:bg-soft-linen/10',
    },
    {
      title: 'WhatsApp',
      href: 'https://wa.me/213561481082',
      icon: <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />,
      badgeBg: 'bg-[#25D366]/15',
    },
    {
      title: 'Instagram',
      href: personalInfo.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-[#E1306C]" />,
      badgeBg: 'bg-[#E1306C]/15',
    },
    {
      title: 'GitHub',
      href: personalInfo.github,
      icon: <GithubIcon className="w-5 h-5 text-graphite dark:text-soft-linen" />,
      badgeBg: 'bg-graphite/10 dark:bg-soft-linen/15',
    },
    {
      title: 'Email Me',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-5 h-5 text-terracotta dark:text-soft-linen" />,
      badgeBg: 'bg-terracotta/10 dark:bg-soft-linen/10',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)] transition-colors duration-200 select-none overflow-x-hidden flex flex-col justify-between items-center py-6 px-4 sm:px-6">
      
      {/* BRANDING RINGS PATTERN BACKGROUND (Matches Linktree aesthetic with user's brand pattern) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20 dark:opacity-25 transition-opacity duration-300"
        aria-hidden="true"
        style={{
          backgroundImage: darkMode
            ? `url('/patterns/social-1080x1350/png/rings_cherry-linen.webp')`
            : `url('/patterns/social-1080x1350/png/rings_linen-cherry.webp')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* TOP FLOATING UTILITY ROW */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-between mb-4">
        {/* Back to Home Pill */}
        <button
          type="button"
          onClick={onNavigateHome}
          aria-label="Return to portfolio home"
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-graphite/10 dark:border-soft-linen/20 text-xs font-mono tracking-wider hover:bg-white dark:hover:bg-black/60 transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <span className="opacity-60 group-hover:-translate-x-0.5 transition-transform">←</span>
          <span className="font-bold">{personalInfo.shortName}</span>
        </button>

        {/* Action Controls: Theme Switch & Share */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-graphite/10 dark:border-soft-linen/20 text-[11px] font-mono tracking-wider uppercase hover:bg-white dark:hover:bg-black/60 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            {darkMode ? 'DARK' : 'LIGHT'}
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy link to clipboard"
            className="w-8 h-8 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-graphite/10 dark:border-soft-linen/20 flex items-center justify-center hover:bg-white dark:hover:bg-black/60 transition-all cursor-pointer shadow-sm active:scale-95"
            title="Copy links URL"
          >
            {copiedLink ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Share2 className="w-3.5 h-3.5 opacity-80" />
            )}
          </button>
        </div>
      </div>

      {/* CENTER CARD CONTAINER */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* PROFILE HEADER (Clean, centered avatar + short title) */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          {/* User's Exact Portrait Photo */}
          <div className="relative mb-3.5">
            <img
              src="/profile/ibrahim-links.webp"
              alt="Ibrahim Benabida"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg border-[3px] border-white dark:border-soft-linen/30"
            />
          </div>

          <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-graphite dark:text-soft-linen mb-1">
            {personalInfo.name}
          </h1>

          {/* Minimal short description (clean, small amount of text) */}
          <p className="text-xs sm:text-sm font-mono text-graphite/75 dark:text-soft-linen/75">
            Data Science @ USTHB &amp; Digital Designer
          </p>
          <p className="text-[11px] font-mono text-graphite/50 dark:text-soft-linen/50 mt-0.5">
            Algiers, Algeria
          </p>
        </div>

        {/* LINK BUTTONS (Clean, rounded Linktree pills with icon badge & centered text) */}
        <div className="w-full flex flex-col gap-3 sm:gap-3.5">
          {links.map((link, idx) => {
            const content = (
              <>
                {/* Left Circular Icon Badge */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${link.badgeBg} transition-transform group-hover:scale-105`}
                >
                  {link.icon}
                </div>

                {/* Centered Button Title */}
                <span className="flex-1 text-center font-display font-medium text-sm sm:text-base text-graphite dark:text-soft-linen group-hover:text-terracotta dark:group-hover:text-white transition-colors pr-2">
                  {link.title}
                </span>

                {/* Subtle Right Arrow */}
                <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </>
            );

            if (link.onClick) {
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={link.onClick}
                  className="group w-full min-h-[56px] sm:min-h-[60px] px-3 sm:px-4 rounded-full bg-white/95 dark:bg-[#3d1919]/80 backdrop-blur-md border border-graphite/10 dark:border-soft-linen/15 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)] hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 cursor-pointer"
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                key={idx}
                href={link.href}
                target={link.href?.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group w-full min-h-[56px] sm:min-h-[60px] px-3 sm:px-4 rounded-full bg-white/95 dark:bg-[#3d1919]/80 backdrop-blur-md border border-graphite/10 dark:border-soft-linen/15 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.08)] hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 cursor-pointer"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>

      {/* MINIMAL FOOTER */}
      <footer className="relative z-10 mt-8 mb-2 flex items-center gap-1.5 text-[11px] font-mono text-graphite/60 dark:text-soft-linen/60">
        <span>© {new Date().getFullYear()}</span>
        <span className="font-semibold text-graphite dark:text-soft-linen">{personalInfo.shortName}</span>
      </footer>

      {/* COPY TOAST */}
      {copiedLink && (
        <div className="fixed bottom-6 z-50 px-4 py-2 rounded-full bg-graphite dark:bg-soft-linen text-soft-linen dark:text-graphite text-xs font-mono shadow-xl animate-fade-in">
          ✓ Link copied to clipboard
        </div>
      )}
    </div>
  );
};
