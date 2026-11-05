import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface WorksSectionProps {
  onSelectProject: (p: Project) => void;
  onViewAllWorks?: () => void;
}

const CATEGORIES = ['ALL', 'BRANDING', 'DATA SCIENCE', 'FRONT-END', 'PRODUCT DESIGN'] as const;

export const WorksSection: React.FC<WorksSectionProps> = ({
  onSelectProject,
  onViewAllWorks,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const filteredProjects = selectedCategory === 'ALL'
    ? projectsData
    : projectsData.filter((project) =>
        project.category.toUpperCase().includes(selectedCategory)
      );

  // Safe active project on mobile
  const safeMobileIndex = currentMobileIndex >= filteredProjects.length ? 0 : currentMobileIndex;
  const currentMobileProject = filteredProjects[safeMobileIndex] || filteredProjects[0];

  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) =>
      prev > 0 ? prev - 1 : filteredProjects.length - 1
    );
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) =>
      prev < filteredProjects.length - 1 ? prev + 1 : 0
    );
  };

  // Helper to ensure each project frame and scale-down ratio looks optimal with 100% detail visibility
  const renderProjectVisual = (project: Project) => {
    if (project.id === 'ibrahim-brand-identity') {
      return (
        <div className="w-full h-full flex items-center justify-center p-3 sm:p-5 bg-[#E8E3D9] dark:bg-[#2A2422] pattern-dots-subtle">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={600}
            height={400}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      );
    }

    if (project.id === 'product-design-transformation') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 bg-[#E5DFD5] dark:bg-[#221C1A]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={600}
            height={400}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      );
    }

    return (
      <div className="w-full h-full flex items-center justify-center p-1.5 sm:p-2 bg-soft-linen/50 dark:bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width={600}
          height={400}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    );
  };

  return (
    <section id="works" className="border-b border-grid scroll-mt-16 w-full overflow-hidden">
      {/* Section Header: Pure Typographic Scale & Category Filters */}
      <div className="p-5 sm:p-8 md:p-10 lg:p-14 border-b border-grid flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-[clamp(3rem,10vw,7.5rem)] leading-[0.88] font-display font-bold tracking-tight text-terracotta dark:text-soft-linen">
            works.
          </h2>
        </div>

        {/* Minimal Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentMobileIndex(0);
                }}
                className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all rounded-[2px] cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta font-bold'
                    : 'border border-grid text-graphite/70 dark:text-soft-linen/70 hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen'
                }`}
              >
                {isActive && <span className="mr-1.5 opacity-80">◆</span>}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-8 md:p-10 lg:p-14">
        {/* ========================================================== */}
        {/* MOBILE VIEW (< md): Interactive Slide with Arrow Controls  */}
        {/* ========================================================== */}
        <div className="md:hidden flex flex-col gap-4">
          {currentMobileProject && (
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectProject(currentMobileProject)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(currentMobileProject);
                }
              }}
              aria-label={`Open details for ${currentMobileProject.title}`}
              className="group cursor-pointer flex flex-col focus-visible:outline-none"
            >
              {/* Scaled & Framed Visual */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-grid rounded-[2px] bg-soft-linen/40 dark:bg-black/20">
                {renderProjectVisual(currentMobileProject)}

                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-soft-linen text-[10px] font-mono tracking-wider uppercase rounded-[2px]">
                  TAP TO VIEW
                </div>
              </div>

              {/* Minimal Label Under Picture */}
              <div className="pt-3 pb-1 flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-xs font-mono tracking-wider text-terracotta dark:text-soft-linen font-bold shrink-0">
                    ( 0{safeMobileIndex + 1} )
                  </span>
                  <h3 className="font-display font-bold text-lg tracking-tight text-graphite dark:text-soft-linen truncate">
                    {currentMobileProject.title}
                  </h3>
                </div>

                <span className="text-[10px] font-mono tracking-wider uppercase opacity-60 shrink-0">
                  {currentMobileProject.category.split('&')[0].trim()}
                </span>
              </div>
            </div>
          )}

          {/* Slide Arrow Navigation */}
          <div className="flex items-center justify-between pt-3 border-t border-grid">
            <span className="text-xs font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 font-semibold">
              PROJECT 0{safeMobileIndex + 1} / 0{filteredProjects.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevMobile}
                aria-label="Previous work project"
                className="min-h-[48px] min-w-[48px] border border-grid flex items-center justify-center text-graphite dark:text-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNextMobile}
                aria-label="Next work project"
                className="min-h-[48px] min-w-[48px] border border-grid flex items-center justify-center text-graphite dark:text-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-95 transition-all cursor-pointer"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* DESKTOP VIEW (md+): 3-Column Clean Visual Gallery Grid     */}
        {/* ========================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              aria-label={`Open details for ${project.title}`}
              className="group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen"
            >
              {/* Scaled & Framed Visual */}
              <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden border border-grid bg-soft-linen/40 dark:bg-black/20 rounded-[2px]">
                {renderProjectVisual(project)}

                {/* Subtle Hover Indicator */}
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/10 transition-colors flex items-end justify-end p-3 sm:p-4 pointer-events-none">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-soft-linen text-terracotta dark:bg-terracotta dark:text-soft-linen flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Minimal Label Under Picture: ( 01 ) Project Name */}
              <div className="pt-3 pb-1 flex items-baseline justify-between gap-3 border-b border-transparent group-hover:border-grid/50 transition-colors">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-[11px] font-mono tracking-wider text-terracotta dark:text-soft-linen font-bold shrink-0">
                    ( 0{index + 1} )
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg tracking-tight text-graphite dark:text-soft-linen group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors truncate">
                    {project.title}
                  </h3>
                </div>

                <span className="text-[10px] font-mono tracking-wider uppercase opacity-50 shrink-0">
                  {project.category.split('&')[0].trim()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalog Action */}
        {onViewAllWorks && (
          <div className="mt-10 sm:mt-14 pt-8 border-t border-grid flex justify-center">
            <button
              type="button"
              onClick={onViewAllWorks}
              aria-label="View complete archive of all works"
              className="inline-flex items-center gap-3 min-h-[48px] px-8 py-3.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all text-xs font-mono tracking-widest uppercase cursor-pointer font-bold"
            >
              <span>VIEW ALL WORKS (14+)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
