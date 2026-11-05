import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { personalInfo } from '../data/portfolioData';
import CardDeckCarousel from './CardDeckCarousel';
import { ImageModal } from './ImageModal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  if (!project) return null;

  const slides = project.gallery && project.gallery.length > 0
    ? project.gallery
    : project.image
    ? [{ image: project.image, title: project.title, caption: project.subtitle }]
    : [];

  const currentSlide = slides[activeSlideIndex] || slides[0];

  const isSocialOrPortrait =
    project.id === 'smily-social-media' ||
    project.id === 'ascend-social-media' ||
    project.id === 'product-design-transformation' ||
    project.category?.toUpperCase().includes('SOCIAL') ||
    project.tags?.some((t) =>
      ['SOCIAL', 'CAROUSEL', 'POSTER', 'FLYER', 'PRODUCT DESIGN', 'PACKAGING', 'RETOUCHING'].some((kw) =>
        t.toUpperCase().includes(kw)
      )
    );

  const deckAspect = isSocialOrPortrait ? '4 / 5' : '16 / 10';
  const carouselHeight = isSocialOrPortrait ? '540px' : '420px';
  const cardWidth = isSocialOrPortrait ? 'min(84vw, 420px)' : 'min(86vw, 560px)';

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Details for ${project.title}`}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8"
      >
        <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-4xl max-h-[92dvh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col rounded-[2px]">
          {/* Top Bar */}
          <div className="sticky top-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md z-30 flex items-center justify-between p-4 sm:p-6 border-b border-grid shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-bold">
                  {project.category}
                </span>
                {project.status && (
                  <span className="px-2 py-0.5 border border-grid text-[9px] font-mono tracking-wider uppercase">
                    {project.status.replace('_', ' ')}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-graphite dark:text-soft-linen mt-1">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[48px] min-w-[48px] p-2.5 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-colors flex items-center justify-center cursor-pointer rounded-[2px]"
              aria-label="Close project modal"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 flex-1">
            {/* Visual Showcase with Subtle Dot Matrix Canvas */}
            {slides.length > 0 ? (
              <div className="border border-grid bg-black/5 dark:bg-black/30 p-2 sm:p-4 rounded-[2px] relative pattern-dots-subtle">
                {/* Header info bar */}
                <div className="flex items-center justify-between mb-3 px-2 text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
                  <span>{slides.length} {slides.length === 1 ? 'SLIDE' : 'SLIDES'}</span>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-[9px] opacity-75">
                      DRAG TO THROW • TAP CARD TO ENLARGE
                    </span>
                    {currentSlide?.image && (
                      <button
                        type="button"
                        onClick={() => setEnlargedImage(currentSlide.image!)}
                        className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 border border-grid hover:border-terracotta dark:hover:border-soft-linen text-[10px] font-mono tracking-wider transition-colors cursor-pointer bg-black/5 dark:bg-white/10 hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.98]"
                        title="View whole uncropped picture"
                      >
                        <Maximize2 size={12} aria-hidden="true" />
                        <span>FULL VIEW</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Deck Carousel */}
                <CardDeckCarousel
                  slides={slides}
                  height={carouselHeight}
                  cardWidth={cardWidth}
                  aspect={deckAspect}
                  scatter={8}
                  autoplay={0}
                  onChange={(idx) => setActiveSlideIndex(idx)}
                  onCardClick={() => currentSlide?.image && setEnlargedImage(currentSlide.image)}
                />
              </div>
            ) : (
              <div className="p-8 border border-grid bg-graphite/5 dark:bg-black/20 flex flex-col items-center justify-center text-center space-y-3 rounded-[2px]">
                <div className="px-3 py-1 border border-terracotta dark:border-soft-linen text-[10px] font-mono tracking-widest uppercase font-bold text-terracotta dark:text-soft-linen">
                  {project.status ? project.status.replace('_', ' ') : 'IN DEVELOPMENT'}
                </div>
                <p className="text-xs sm:text-sm font-mono text-graphite/80 dark:text-soft-linen/80 max-w-md">
                  Engineering and design files in active development. Interactive artifacts will be published upon deployment.
                </p>
              </div>
            )}

            {/* Scope & Description */}
            <div className="p-4 sm:p-5 bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta border border-grid rounded-[2px]">
              <span className="text-xs font-mono tracking-widest uppercase block mb-1 font-bold">
                OVERVIEW
              </span>
              <p className="text-sm font-sans font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Structured Deliverables List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-graphite dark:text-soft-linen font-bold uppercase">
                KEY DELIVERABLES
              </h4>
              <div className="divide-y divide-grid border border-grid rounded-[2px]">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-white/40 dark:bg-black/15 text-xs font-sans"
                  >
                    <span className="font-mono text-xs text-terracotta dark:text-soft-linen font-bold shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-graphite/90 dark:text-soft-linen/90 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measured Deliverable Outcome */}
            {project.metrics && (
              <div className="p-4 border border-grid bg-soft-linen/80 dark:bg-black/20 rounded-[2px]">
                <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen font-bold uppercase block mb-1">
                  OUTCOME
                </span>
                <p className="text-sm font-mono font-semibold text-graphite dark:text-soft-linen">
                  {project.metrics}
                </p>
              </div>
            )}

            {/* Specifications & Stack */}
            <div>
              <span className="text-[10px] font-mono tracking-widest opacity-60 uppercase block mb-2">
                TECHNOLOGIES
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 border border-graphite dark:border-soft-linen text-[10px] font-mono tracking-wider bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md p-4 sm:p-5 border-t border-grid flex items-center justify-between shrink-0">
            <span className="text-[10px] font-mono tracking-widest opacity-60 uppercase">
              {personalInfo.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[48px] px-6 py-2.5 bg-graphite text-soft-linen dark:bg-soft-linen dark:text-terracotta text-xs font-mono tracking-widest uppercase hover:bg-terracotta dark:hover:bg-soft-linen/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer rounded-[2px] font-bold"
            >
              CLOSE PROJECT
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        src={enlargedImage}
        title={currentSlide?.title || project.title}
        caption={currentSlide?.caption || project.subtitle}
        onClose={() => setEnlargedImage(null)}
      />
    </>
  );
};
