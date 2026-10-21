import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { WorksVerticalPlaceholder } from './Placeholders';

interface WorksSectionProps {
  onSelectProject: (p: Project) => void;
  onViewAllWorks?: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({
  onSelectProject,
  onViewAllWorks,
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="works" className="border-b border-grid scroll-mt-16">
      {/* Section Header */}
      <div className="p-6 md:p-10 lg:p-14 border-b border-grid flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="block text-xs md:text-sm font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase mb-2">
            SELECTED
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen">
            works.
          </h2>
        </div>

        {onViewAllWorks && (
          <button
            onClick={onViewAllWorks}
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors text-xs font-mono tracking-widest uppercase cursor-pointer"
          >
            <span>VIEW ALL WORKS (14+)</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      {/* Main Works Grid: Left Selector, Center Showcase Card, Right Editorial Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Project Selector Stack */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-grid flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
          {projectsData.map((project, index) => {
            const isSelected = index === activeProjectIndex;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectIndex(index)}
                className={`p-4 md:p-6 text-left border-r lg:border-r-0 border-b border-grid transition-all flex-1 lg:flex-none flex flex-col justify-between min-w-[160px] lg:min-w-0 ${
                  isSelected
                    ? 'bg-terracotta/10 dark:bg-soft-linen/15 border-l-4 border-l-terracotta dark:border-l-soft-linen'
                    : 'hover:bg-graphite/5 dark:hover:bg-soft-linen/5'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-graphite/60 dark:text-soft-linen/60">
                  <span>0{index + 1}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta dark:bg-soft-linen" />
                  )}
                </div>
                <div className="mt-4">
                  <div
                    className={`font-display font-bold text-sm md:text-base leading-snug ${
                      isSelected
                        ? 'text-terracotta dark:text-soft-linen'
                        : 'text-graphite dark:text-soft-linen/75'
                    }`}
                  >
                    {project.title}
                  </div>
                  <div className="text-[10px] font-mono tracking-wider text-graphite/60 dark:text-soft-linen/60 mt-1 uppercase">
                    {project.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Center Column: Featured Showcase Card (Inverted in Dark Mode) */}
        <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid bg-[var(--page-bg)]">
          {/* Card Top Banner: Terracotta in Light Mode, Soft Linen in Dark Mode */}
          <div className="bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta p-6 md:p-10 border-b border-grid transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-[10px] font-mono tracking-widest opacity-80 uppercase">
              <span>FEATURED WORK // {activeProject.category}</span>
              <span>INDEX: 0{activeProjectIndex + 1} OF 0{projectsData.length}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tight text-soft-linen dark:text-terracotta">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono tracking-widest text-soft-linen/80 dark:text-terracotta/80 mt-1 uppercase">
                  {activeProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => onSelectProject(activeProject)}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest uppercase hover:underline self-start md:self-auto group text-soft-linen dark:text-terracotta"
              >
                <span>{activeProject.linkText || 'LEARN MORE'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Tags Pills with Crisp Borders */}
            <div className="flex flex-wrap gap-2 mt-6">
              {activeProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 border border-soft-linen/40 dark:border-terracotta/40 text-[9px] md:text-[10px] font-mono tracking-wider uppercase bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Screen / Device Mockup Preview */}
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-center items-center bg-soft-linen/30 dark:bg-black/20">
            <div className="w-full max-w-xl border-2 border-graphite dark:border-soft-linen/40 bg-soft-linen shadow-xl overflow-hidden rounded-[2px]">
              {/* Mockup Window Titlebar */}
              <div className="bg-graphite text-soft-linen px-3 py-1.5 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-terracotta inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-soft-linen/40 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-soft-linen/20 inline-block" />
                </div>
                <span className="tracking-widest opacity-70">
                  {activeProject.id}.ibrahim.portfolio
                </span>
                <span className="text-[9px] text-terracotta font-bold">ONLINE</span>
              </div>

              {/* Mockup Canvas Screen */}
              <div className="bg-[#f5f1ea] flex flex-col justify-between text-graphite overflow-hidden">
                {activeProject.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-grid bg-graphite/10">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-terracotta tracking-wider mb-2">
                      {activeProjectIndex === 0 && <Terminal size={14} />}
                      {activeProjectIndex === 1 && <Layers size={14} />}
                      {activeProjectIndex === 2 && <Sparkles size={14} />}
                      <span className="uppercase font-semibold">{activeProject.subtitle}</span>
                    </div>
                    <p className="text-sm md:text-base font-sans text-graphite leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-grid flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-terracotta font-semibold">
                      ✓ {activeProject.metrics}
                    </span>
                    <button
                      onClick={() => onSelectProject(activeProject)}
                      className="px-3 py-1 bg-graphite text-soft-linen hover:bg-terracotta transition-colors text-[10px] tracking-wider uppercase cursor-pointer"
                    >
                      INSPECT DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Vertical Placeholder */}
        <div className="lg:col-span-3">
          <WorksVerticalPlaceholder />
        </div>
      </div>
    </section>
  );
};
