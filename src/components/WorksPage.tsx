import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  WORK_CATEGORIES,
  WorkCategory,
  allWorksData,
  WorkItem,
} from '../data/worksData';
import { Project } from '../types';

interface WorksPageProps {
  onSelectProject?: (project: Project) => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Filter works based on selected category and search input
  const filteredWorks = useMemo(() => {
    return allWorksData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' ||
        item.categories.some(
          (c) => c.toUpperCase() === selectedCategory.toUpperCase()
        );

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categories.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Safe index for mobile slide
  const safeMobileIndex = currentMobileIndex >= filteredWorks.length ? 0 : currentMobileIndex;
  const currentMobileWork = filteredWorks[safeMobileIndex] || filteredWorks[0];

  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) =>
      prev > 0 ? prev - 1 : filteredWorks.length - 1
    );
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) =>
      prev < filteredWorks.length - 1 ? prev + 1 : 0
    );
  };

  // Adapter to convert WorkItem to Project for modal preview
  const handleOpenProject = (item: WorkItem) => {
    if (!onSelectProject) return;
    const projectAdapter: Project = {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle || item.categories.join(' • '),
      category: item.categories[0] || 'WORK',
      tags: item.tags,
      description: item.description,
      highlights: [
        `Production Year: ${item.year}`,
        `Client / Context: ${item.client || 'Engineering Production'}`,
        `Categories: ${item.categories.join(', ')}`,
      ],
      metrics:
        item.metric ||
        (item.status === 'IN_PROGRESS'
          ? 'Active Development'
          : item.status === 'COMING_SOON'
          ? 'Space Reserved'
          : item.status === 'PRIVATE'
          ? 'Confidential Lab'
          : 'Archived in catalog'),
      linkText: 'INSPECT PROJECT',
      image: item.image,
      gallery: item.gallery,
      status: item.status,
      span: item.span,
    };
    onSelectProject(projectAdapter);
  };

  // Helper to ensure each project frame and scale-down ratio looks optimal with 100% detail visibility
  const renderWorkVisual = (work: WorkItem) => {
    if (work.id === 'ibrahim-brand-identity') {
      return (
        <div className="w-full h-full flex items-center justify-center p-3 sm:p-5 bg-[#E8E3D9] dark:bg-[#2A2422] pattern-dots-subtle">
          <img loading="lazy" decoding="async"
            src={work.image}
            alt={work.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      );
    }

    if (work.id === 'product-design-transformation') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 bg-[#E5DFD5] dark:bg-[#221C1A]">
          <img loading="lazy" decoding="async"
            src={work.image || '/works/rudys-shampoo-after.webp'}
            alt={work.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      );
    }

    if (work.image) {
      return (
        <div className="w-full h-full flex items-center justify-center p-1.5 sm:p-2 bg-soft-linen/50 dark:bg-black/30">
          <img loading="lazy" decoding="async"
            src={work.image}
            alt={work.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      );
    }

    return (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-soft-linen/50 dark:bg-black/25 text-graphite dark:text-soft-linen">
        <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-bold">
          {work.status ? work.status.replace('_', ' ') : 'IN DEVELOPMENT'}
        </span>
        <div className="text-center font-display font-bold text-sm">
          {work.title}
        </div>
        <span className="text-[10px] font-mono opacity-50 text-center">
          {work.year}
        </span>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--page-bg)] text-[var(--page-text)] transition-colors w-full overflow-hidden">
      {/* 1. SECTION HEADER: "works." + Filter & Search */}
      <section className="border-b border-grid">
        <div className="p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-grid">
          <div>
            <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-display font-bold tracking-tight leading-[0.84] text-terracotta dark:text-soft-linen select-none">
              works.
            </h1>
          </div>

          {/* Search Input Field */}
          <div className="flex items-center gap-2 border border-grid px-3 py-2 bg-soft-linen/30 dark:bg-black/20 w-full md:w-80 rounded-[2px]">
            <Search size={16} className="text-graphite/60 dark:text-soft-linen/60 shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentMobileIndex(0);
              }}
              placeholder="SEARCH WORKS..."
              aria-label="Search works by title or category"
              className="w-full min-h-[36px] bg-transparent text-xs font-mono tracking-wider uppercase text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[10px] font-mono px-1.5 py-0.5 border border-grid text-graphite/60 dark:text-soft-linen/60 cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="p-4 sm:p-6 flex flex-wrap items-center gap-1.5 sm:gap-2 bg-soft-linen/30 dark:bg-black/10">
          {WORK_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                type="button"
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentMobileIndex(0);
                }}
                className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all rounded-[2px] cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta font-bold'
                    : 'border border-grid text-graphite/70 dark:text-soft-linen/70 hover:border-terracotta dark:hover:border-soft-linen hover:text-terracotta dark:hover:text-soft-linen'
                }`}
              >
                {isActive && <span className="mr-1.5 opacity-80">◆</span>}
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. GALLERY SECTION: Clean Image + ( 01 ) Project Name Underneath */}
      <section className="p-5 sm:p-8 md:p-12 lg:p-16 flex-1 min-w-0">
        {filteredWorks.length === 0 ? (
          <div className="p-12 sm:p-16 text-center space-y-4">
            <p className="text-base sm:text-lg font-mono text-graphite/60 dark:text-soft-linen/60 uppercase">
              NO WORKS FOUND MATCHING "{searchQuery}"
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="min-h-[48px] px-6 py-2.5 border border-terracotta dark:border-soft-linen text-xs font-mono tracking-widest uppercase text-terracotta dark:text-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.98] transition-all cursor-pointer font-bold"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <>
            {/* ========================================================== */}
            {/* MOBILE VIEW (< md): Interactive Slide with Arrow Controls  */}
            {/* ========================================================== */}
            <div className="md:hidden flex flex-col gap-4">
              {currentMobileWork && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProject(currentMobileWork)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenProject(currentMobileWork);
                    }
                  }}
                  aria-label={`Open details for ${currentMobileWork.title}`}
                  className="group cursor-pointer flex flex-col focus-visible:outline-none"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-grid rounded-[2px] bg-soft-linen/40 dark:bg-black/20">
                    {renderWorkVisual(currentMobileWork)}

                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-soft-linen text-[10px] font-mono tracking-wider uppercase rounded-[2px]">
                      TAP TO VIEW
                    </div>
                  </div>

                  <div className="pt-3 pb-1 flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="text-xs font-mono tracking-wider text-terracotta dark:text-soft-linen font-bold shrink-0">
                        ( 0{safeMobileIndex + 1} )
                      </span>
                      <h3 className="font-display font-bold text-lg tracking-tight text-graphite dark:text-soft-linen truncate">
                        {currentMobileWork.title}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono tracking-wider uppercase opacity-60 shrink-0">
                      {currentMobileWork.categories[0] || 'WORK'}
                    </span>
                  </div>
                </div>
              )}

              {/* Slide Navigation Bar */}
              <div className="flex items-center justify-between pt-3 border-t border-grid">
                <span className="text-xs font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 font-semibold">
                  PROJECT 0{safeMobileIndex + 1} / 0{filteredWorks.length}
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
              {filteredWorks.map((work, index) => (
                <div
                  key={work.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenProject(work)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenProject(work);
                    }
                  }}
                  aria-label={`Open details for ${work.title}`}
                  className="group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen"
                >
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden border border-grid bg-soft-linen/40 dark:bg-black/20 rounded-[2px]">
                    {renderWorkVisual(work)}

                    <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/10 transition-colors flex items-end justify-end p-3 sm:p-4 pointer-events-none">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-soft-linen text-terracotta dark:bg-terracotta dark:text-soft-linen flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 pb-1 flex items-baseline justify-between gap-3 border-b border-transparent group-hover:border-grid/50 transition-colors">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="text-[11px] font-mono tracking-wider text-terracotta dark:text-soft-linen font-bold shrink-0">
                        ( 0{index + 1} )
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg tracking-tight text-graphite dark:text-soft-linen group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors truncate">
                        {work.title}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono tracking-wider uppercase opacity-50 shrink-0">
                      {work.categories[0] || 'WORK'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};
