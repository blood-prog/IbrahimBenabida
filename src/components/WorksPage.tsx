import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, Film, Layers, AlertCircle } from 'lucide-react';
import {
  WORK_CATEGORIES,
  WorkCategory,
  featuredWork,
  allWorksData,
  WorkItem,
} from '../data/worksData';
import {
  WorksHeroPlaceholder,
  FeaturedWorkPlaceholder,
} from './Placeholders';
import { Project } from '../types';

interface WorksPageProps {
  onSelectProject?: (project: Project) => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Adapter to convert WorkItem to Project for modal preview with CardDeckCarousel
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
        `Client/Origin: ${item.client || 'Studio Production'}`,
        `Curated Categories: ${item.categories.join(', ')}`,
      ],
      metrics:
        item.metric ||
        (item.status === 'IN_PROGRESS'
          ? 'Active Development'
          : item.status === 'COMING_SOON'
          ? 'Space Reserved // Coming Soon'
          : item.status === 'PRIVATE'
          ? 'Confidential Lab'
          : 'Archived in portfolio catalog'),
      linkText: 'VIEW CASE DETAILS',
      image: item.image,
      gallery: item.gallery,
      status: item.status,
      span: item.span,
    };
    onSelectProject(projectAdapter);
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--page-bg)] text-[var(--page-text)] transition-colors">
      {/* 1. HERO SECTION: "works." + Creator Portrait / Vinyl Badge */}
      <section className="border-b border-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] lg:min-h-[540px]">
          {/* Left Column: Massive Lowercase Title */}
          <div className="lg:col-span-7 xl:col-span-8 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-grid">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-display font-black tracking-tight leading-[0.82] text-terracotta dark:text-soft-linen select-none">
              works.
            </h1>
          </div>

          {/* Right Column: Circular "BY ME" Badge + Camera Silhouette Placeholder */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-stretch">
            <WorksHeroPlaceholder />
          </div>
        </div>
      </section>

      {/* 2. FEATURED SECTION: "featured." with continuous left tracing grid line */}
      <section className="border-b border-grid flex items-stretch">
        {/* Left Architectural Tracing Grid Line */}
        <div className="w-10 sm:w-16 md:w-20 lg:w-24 border-r border-grid shrink-0 bg-transparent" />

        {/* Center Main Content Container */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Section Title Header */}
          <div className="p-6 sm:p-10 md:p-12 lg:p-14 border-b border-grid">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen">
              featured.
            </h2>
          </div>

          {/* 2-Column Split: Left Offset Framing Card, Right Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch flex-1">
            {/* Left: Tilted Layered Frame with Image Showcase */}
            <div className="md:col-span-6 lg:col-span-6 border-b md:border-b-0 md:border-r border-grid flex items-center justify-center">
              <FeaturedWorkPlaceholder
                image={featuredWork.image}
                title={featuredWork.title}
                subtitle={featuredWork.subtitle}
              />
            </div>

            {/* Right: Project Title, Description, and Tags */}
            <div className="md:col-span-6 lg:col-span-6 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-terracotta dark:text-soft-linen/90 uppercase mb-3">
                  <Film size={14} />
                  <span>INDEX: 01 // SELECTED SPOTLIGHT</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-terracotta dark:text-soft-linen leading-tight">
                  {featuredWork.title}
                </h3>

                <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-sans text-graphite/85 dark:text-soft-linen/85 leading-relaxed">
                  {featuredWork.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-grid flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
                  {featuredWork.tags.map((tag, idx) => (
                    <span key={idx} className="hover:text-terracotta dark:hover:text-soft-linen transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenProject(featuredWork)}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-terracotta dark:border-soft-linen text-xs font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors self-start sm:self-auto group cursor-pointer"
                >
                  <Layers size={13} />
                  <span>EXPLORE PHOTO DECK</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Architectural Tracing Grid Line */}
        <div className="hidden lg:block w-10 sm:w-16 md:w-20 lg:w-24 border-l border-grid shrink-0 bg-transparent" />
      </section>

      {/* 3. THE REST SECTION: Organized Gallery with Grid Lines & Card Deck Carousel Trigger */}
      <section className="border-b border-grid flex items-stretch">
        {/* Left Architectural Tracing Grid Line */}
        <div className="w-10 sm:w-16 md:w-20 lg:w-24 border-r border-grid shrink-0 bg-transparent" />

        {/* Center Main Content Container */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Section Title Header */}
          <div className="p-6 sm:p-10 md:p-12 lg:p-14 border-b border-grid">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen">
              the rest.
            </h2>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-grid">
            {/* Left: Search Input Field */}
            <div className="lg:col-span-4 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-grid flex items-center gap-3">
              <Search size={18} className="text-graphite/60 dark:text-soft-linen/60 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH WORKS"
                className="w-full bg-transparent text-xs sm:text-sm font-mono tracking-widest uppercase text-graphite dark:text-soft-linen placeholder:text-graphite/50 dark:placeholder:text-soft-linen/50 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[10px] font-mono px-2 py-0.5 border border-grid text-graphite/60 dark:text-soft-linen/60 hover:text-terracotta dark:hover:text-soft-linen"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Right: Filter Buttons Grid */}
            <div className="lg:col-span-8 p-3 sm:p-4 flex flex-wrap gap-1.5 sm:gap-2 items-center">
              {WORK_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-terracotta text-soft-linen border-terracotta dark:bg-soft-linen dark:text-terracotta dark:border-soft-linen font-bold shadow-sm'
                        : 'border-grid hover:border-terracotta dark:hover:border-soft-linen text-graphite dark:text-soft-linen/90 hover:bg-terracotta/5 dark:hover:bg-soft-linen/5'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Works Gallery Grid: Organized with Bento Spans, Grid Lines, and Hover Transitions */}
          <div className="p-0">
            {filteredWorks.length === 0 ? (
              <div className="p-16 text-center space-y-4">
                <p className="text-lg font-mono text-graphite/60 dark:text-soft-linen/60 uppercase">
                  NO WORKS FOUND MATCHING "{searchQuery}" UNDER "{selectedCategory}"
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2 border border-terracotta dark:border-soft-linen text-xs font-mono tracking-widest uppercase text-terracotta dark:text-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b border-grid">
                {filteredWorks.map((work, idx) => {
                  const isReserved = !work.image || work.status === 'IN_PROGRESS' || work.status === 'COMING_SOON' || work.status === 'PRIVATE';
                  const spanClass = work.span || 'col-span-1';

                  return (
                    <div
                      key={work.id}
                      onClick={() => handleOpenProject(work)}
                      className={`group cursor-pointer relative overflow-hidden flex flex-col justify-between border-b border-r border-grid bg-[var(--page-bg)] hover:bg-terracotta/[0.02] dark:hover:bg-soft-linen/[0.02] transition-colors ${spanClass}`}
                    >
                      {/* Top Architectural Metadata Strip */}
                      <div className="px-4 py-2 border-b border-grid bg-soft-linen/40 dark:bg-black/20 flex items-center justify-between text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-terracotta dark:text-soft-linen">
                            INDEX: 0{idx + 1}
                          </span>
                          <span>//</span>
                          <span>{work.categories[0] || 'WORK'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {work.gallery && work.gallery.length > 1 && (
                            <span className="px-1.5 py-0.2 bg-black/10 dark:bg-white/10 text-[9px] font-bold">
                              {work.gallery.length} SHOTS
                            </span>
                          )}
                          <span>{work.year}</span>
                        </div>
                      </div>

                      {/* Visual Canvas Area */}
                      <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[260px] md:min-h-[290px] w-full overflow-hidden bg-black/5 dark:bg-black/30 flex items-center justify-center">
                        {isReserved ? (
                          /* Architectural Reserved Blueprint Slot */
                          <div className="w-full h-full p-6 flex flex-col justify-between border-2 border-dashed border-grid/70 bg-graphite/[0.03] dark:bg-white/[0.02] text-graphite dark:text-soft-linen">
                            <div className="flex items-center justify-between">
                              <span className="px-2 py-0.5 bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta text-[9px] font-mono tracking-widest uppercase font-bold">
                                {work.status ? work.status.replace('_', ' ') : 'RESERVED'}
                              </span>
                              <span className="text-[9px] font-mono text-graphite/50 dark:text-soft-linen/50">
                                PIPELINE: QUEUED
                              </span>
                            </div>

                            <div className="my-auto text-center space-y-2">
                              <AlertCircle size={22} className="mx-auto text-terracotta dark:text-soft-linen opacity-80" />
                              <div className="text-sm font-display font-bold tracking-tight">
                                {work.title}
                              </div>
                              <p className="text-[11px] font-mono text-graphite/70 dark:text-soft-linen/70 max-w-xs mx-auto">
                                {work.metric || 'Files & blueprints in development. Dedicated space allocated.'}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-grid text-[9px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60">
                              <span>SPACE ALLOCATED</span>
                              <span>STATUS // ACTIVE</span>
                            </div>
                          </div>
                        ) : (
                          /* High-Resolution Project Showcase Image */
                          <>
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                            />

                            {/* Measured Outcome Floating Pill if present */}
                            {work.metric && (
                              <div className="absolute top-2.5 right-2.5 px-2 py-1 bg-black/75 backdrop-blur-sm text-white border border-white/20 text-[9px] font-mono tracking-wider uppercase font-semibold pointer-events-none">
                                ★ {work.metric}
                              </div>
                            )}

                            {/* Hover Overlay with Gradient & Translating Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
                              {/* Top Bar inside Overlay */}
                              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-white/90 uppercase">
                                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/20">
                                  {work.categories.slice(0, 2).join(' • ')}
                                </span>
                                {work.gallery && work.gallery.length > 1 && (
                                  <span className="px-2 py-0.5 bg-terracotta text-soft-linen font-bold flex items-center gap-1 shadow-sm">
                                    <Layers size={11} />
                                    <span>{work.gallery.length} PHOTOS // DECK</span>
                                  </span>
                                )}
                              </div>

                              {/* Bottom Content Translates Up On Hover */}
                              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                <h4 className="text-white text-lg sm:text-xl md:text-2xl font-display font-black leading-tight drop-shadow-md">
                                  {work.title}
                                </h4>
                                <p className="text-white/80 text-xs font-sans mt-1 line-clamp-2 leading-relaxed">
                                  {work.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20 text-[10px] font-mono tracking-widest text-white/90">
                                  <span className="font-semibold text-soft-linen">
                                    {work.gallery && work.gallery.length > 1 ? 'OPEN PHOTO DECK' : 'EXPLORE CASE STUDY'}
                                  </span>
                                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bottom Caption Bar */}
                      <div className="p-4 sm:p-5 flex flex-col justify-between border-t border-grid space-y-3 bg-[var(--page-bg)]">
                        <div>
                          <h4 className="text-lg sm:text-xl font-display font-bold text-graphite dark:text-soft-linen group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors leading-snug">
                            {work.title}
                          </h4>
                          <p className="text-xs font-sans text-graphite/70 dark:text-soft-linen/70 mt-1 line-clamp-2 leading-relaxed">
                            {work.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-grid flex items-center justify-between text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen font-semibold uppercase">
                          <span>
                            {work.gallery && work.gallery.length > 1 ? `PHOTO DECK (${work.gallery.length})` : 'VIEW DETAILS'}
                          </span>
                          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Architectural Tracing Grid Line */}
        <div className="hidden lg:block w-10 sm:w-16 md:w-20 lg:w-24 border-l border-grid shrink-0 bg-transparent" />
      </section>
    </div>
  );
};
