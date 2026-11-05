import React, { useState, useEffect } from 'react';
import { citiesConfig, personalInfo } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  isThemeTransitioning?: boolean;
  onOpenMenu: () => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleTheme,
  isThemeTransitioning = false,
  onOpenMenu,
  onNavigateHome,
}) => {
  const [times, setTimes] = useState<{ [city: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const newTimes: { [city: string]: string } = {};

      citiesConfig.forEach((c) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: c.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          });
          newTimes[c.city] = formatter.format(now);
        } catch {
          newTimes[c.city] = now.toTimeString().split(' ')[0];
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--page-bg)] border-b border-grid flex items-stretch h-14 md:h-16 text-[var(--page-text)] transition-colors duration-0 select-none min-w-0 w-full">
      {/* Brand Mark (Left Column) */}
      <div className="flex items-center px-3 sm:px-5 md:px-8 border-r border-grid shrink-0">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
          }}
          className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-graphite dark:text-soft-linen hover:opacity-80 active:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen flex items-baseline cursor-pointer min-h-[48px] flex items-center"
        >
          {personalInfo.shortName}
        </a>
      </div>

      {/* World Timezone Marquee Ticker (Center Column) */}
      <div className="flex-1 min-w-0 overflow-hidden relative flex items-center border-r border-grid">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 text-[10px] sm:text-[11px] md:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 py-2">
          {/* Double map for seamless infinite scrolling */}
          {[...citiesConfig, ...citiesConfig].map((item, idx) => (
            <div key={`${item.city}-${idx}`} className="inline-flex items-center gap-2">
              <span className="text-graphite/40 dark:text-soft-linen/40">/</span>
              {item.isBase ? (
                <span className="bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta font-bold px-1.5 sm:px-2 py-0.5 rounded-[1px] tracking-widest shadow-sm">
                  {item.city} {times[item.city] || '--:--:--'} {item.code}
                </span>
              ) : (
                <span className="hover:text-terracotta dark:hover:text-soft-linen transition-colors">
                  {item.city} <span className="font-semibold">{times[item.city] || '--:--:--'}</span> {item.code}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls: Theme Switch & Menu Button (Right Column) */}
      <div className="flex items-stretch shrink-0">
        {/* Light / Dark Mode Toggle */}
        <button
          type="button"
          disabled={isThemeTransitioning}
          onClick={onToggleTheme}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          className="group/roll flex h-full min-h-[48px] min-w-[48px] cursor-pointer items-center gap-2 px-3 sm:px-4 md:px-6 transition-colors border-r border-grid hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen disabled:cursor-not-allowed disabled:opacity-50"
          title="Toggle color theme"
        >
          <span className="relative block shrink-0 overflow-hidden leading-[1.4] text-[10px] sm:text-xs font-mono tracking-[0.16em] uppercase">
            <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
              {darkMode ? 'DARK' : 'LIGHT'}
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
            >
              {darkMode ? 'DARK' : 'LIGHT'}
            </span>
          </span>
          <span
            className="relative block h-3 w-3 overflow-hidden border border-current transition-colors shrink-0"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 bg-current transition-transform duration-300 ${
                darkMode ? 'translate-y-0' : 'translate-y-full'
              }`}
            />
          </span>
        </button>

        {/* Hamburger Menu Trigger */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
          className="w-12 sm:w-14 md:w-16 h-full min-h-[48px] min-w-[48px] flex flex-col items-center justify-center gap-1.5 hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta group transition-colors active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen cursor-pointer"
        >
          <span className="w-5 h-[1.5px] bg-graphite dark:bg-soft-linen group-hover:bg-soft-linen dark:group-hover:bg-terracotta transition-colors" />
          <span className="w-5 h-[1.5px] bg-graphite dark:bg-soft-linen group-hover:bg-soft-linen dark:group-hover:bg-terracotta transition-colors" />
          <span className="w-5 h-[1.5px] bg-graphite dark:bg-soft-linen group-hover:bg-soft-linen dark:group-hover:bg-terracotta transition-colors" />
        </button>
      </div>
    </header>
  );
};
