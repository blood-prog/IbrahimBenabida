import { HeroGenerativeCanvas, HeroPortraitPlaceholder } from './Placeholders';
import { personalInfo } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="border-b border-grid overflow-hidden">
      {/* Top Visual Media Grid (7-col canvas + 5-col portrait to align with identity banner below) */}
      <div className="grid grid-cols-4 md:grid-cols-12 border-b border-grid">
        {/* Left Visual Box: Data Science Waveform Canvas */}
        <div className="col-span-4 md:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[380px] lg:min-h-[460px] overflow-hidden border-b md:border-b-0 md:border-r border-grid">
          <HeroGenerativeCanvas />
        </div>

        {/* Right Visual Box: Abstract Editorial Portrait / Lake Twilight Study */}
        <div className="col-span-4 md:col-span-5 relative aspect-[4/3] md:aspect-auto md:min-h-[380px] lg:min-h-[460px] overflow-hidden">
          <HeroPortraitPlaceholder />
        </div>
      </div>

      {/* Hero Identity Banner (3-Column Architectural Split) */}
      <div className="grid grid-cols-4 md:grid-cols-12 items-stretch">
        {/* Left Column: Monumental Brand Title (bello. -> ibrahim.) */}
        <div className="col-span-4 flex items-end px-3 py-4 md:col-span-7 md:px-6 md:py-6 border-b md:border-b-0 border-grid">
          <h1 className="text-[clamp(3.5rem,14vw,11.5rem)] leading-[0.8] font-bold tracking-[-0.13em] text-terracotta dark:text-soft-linen select-none">
            {personalInfo.shortName}
          </h1>
        </div>

        {/* Middle Column: Disciplines Stack */}
        <ul className="col-span-3 md:col-span-3 md:border-l border-grid p-4 md:p-6 flex flex-col justify-end gap-1.5 text-base leading-[1.15] font-medium tracking-[-0.02em] md:text-xl lg:text-2xl text-terracotta dark:text-soft-linen border-b md:border-b-0">
          <li>Data Science Undergraduate</li>
          <li>Digital Designer</li>
          <li>The Analytical Mind</li>
        </ul>

        {/* Right Column: Ibrahim Hand-drawn Signature Logo */}
        <div className="col-span-1 md:col-span-2 md:border-l border-grid p-2 md:p-4 flex items-center justify-center bg-soft-linen/60 dark:bg-terracotta/60 group overflow-hidden">
          <div
            className="w-28 h-28 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-terracotta dark:bg-soft-linen group-hover:scale-105 transition-all duration-300"
            style={{
              maskImage: 'url(/logo-ibrahim-transparent.png)',
              WebkitMaskImage: 'url(/logo-ibrahim-transparent.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
            role="img"
            aria-label="Ibrahim Signature Logo"
          />
        </div>
      </div>
    </section>
  );
};
