import React, { useState } from 'react';
import { X, Check, Layers, Maximize2, Sparkles } from 'lucide-react';
import { Project } from '../types';
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

  // Detect portrait / social media designs to adapt the card deck aspect ratio
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
  const carouselHeight = isSocialOrPortrait ? '560px' : '440px';
  const cardWidth = isSocialOrPortrait ? 'min(84vw, 420px)' : 'min(86vw, 560px)';

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn">
        <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col rounded-[2px]">
          {/* Top Bar */}
          <div className="sticky top-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md z-30 flex items-center justify-between p-5 md:p-6 border-b border-grid">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-semibold">
                  CASE STUDY // {project.category}
                </span>
                {project.status && (
                  <span className="px-2 py-0.5 border border-grid text-[9px] font-mono tracking-wider uppercase">
                    {project.status.replace('_', ' ')}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-graphite dark:text-soft-linen mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer rounded-[2px]"
              aria-label="Close case study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 md:p-8 space-y-6">
            {/* Visual Showcase: Card Deck Carousel or Architectural Reserved State */}
            {slides.length > 0 ? (
              <div className="border border-grid bg-black/5 dark:bg-black/30 p-2 sm:p-4 rounded-[2px] relative">
                {/* Header info bar */}
                <div className="flex items-center justify-between mb-3 px-2 text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase">
                  <div className="flex items-center gap-2">
                    <Layers size={13} className="text-terracotta dark:text-soft-linen" />
                    <span>PHOTO DECK // {slides.length} {slides.length === 1 ? 'SHOT' : 'SHOTS'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-[9px] opacity-75">
                      DRAG TO THROW • CLICK CARD FOR FULL VIEW
                    </span>
                    {currentSlide?.image && (
                      <button
                        onClick={() => setEnlargedImage(currentSlide.image!)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-grid hover:border-terracotta dark:hover:border-soft-linen text-[9px] font-mono tracking-wider transition-colors cursor-pointer bg-black/5 dark:bg-white/10 hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta"
                        title="View whole uncropped picture"
                      >
                        <Maximize2 size={11} />
                        <span>VIEW WHOLE PICTURE</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Deck Carousel with throw physics & adaptive aspect ratio */}
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
              <div className="p-8 border-2 border-dashed border-grid bg-graphite/5 dark:bg-black/20 flex flex-col items-center justify-center text-center space-y-3 rounded-[2px]">
                <div className="px-3 py-1 border border-terracotta dark:border-soft-linen text-[10px] font-mono tracking-widest uppercase font-bold text-terracotta dark:text-soft-linen bg-soft-linen/50 dark:bg-black/40">
                  {project.status ? `[SPACE RESERVED // ${project.status.replace('_', ' ')}]` : '[SPACE RESERVED // IN PROGRESS]'}
                </div>
                <p className="text-xs md:text-sm font-mono text-graphite/80 dark:text-soft-linen/80 max-w-md">
                  Active engineering & design files are being structured. Full visual artifacts, interactive live link, and case study will be published upon release.
                </p>
              </div>
            )}

            {/* Objective & Impact Callout */}
            <div className="p-4 sm:p-5 bg-terracotta dark:bg-soft-linen text-soft-linen dark:text-terracotta border border-grid rounded-[2px]">
              <span className="text-xs font-mono tracking-widest uppercase block mb-1 font-bold">
                OBJECTIVE & ARCHITECTURE
              </span>
              <p className="text-sm font-sans font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Core Highlights & Architecture */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono tracking-widest text-graphite dark:text-soft-linen font-bold uppercase flex items-center gap-2">
                <Sparkles size={14} className="text-terracotta dark:text-soft-linen" />
                <span>CORE HIGHLIGHTS & ARCHITECTURE</span>
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 border border-grid text-xs font-sans rounded-[2px]"
                  >
                    <Check size={16} className="text-terracotta dark:text-soft-linen shrink-0 mt-0.5" />
                    <span className="text-graphite/90 dark:text-soft-linen/90 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measured Outcome */}
            {project.metrics && (
              <div className="p-4 border border-terracotta/40 dark:border-soft-linen/40 bg-soft-linen/80 dark:bg-black/20 rounded-[2px]">
                <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen font-bold uppercase block mb-1">
                  MEASURED OUTCOME
                </span>
                <p className="text-sm font-mono font-semibold text-graphite dark:text-soft-linen">
                  {project.metrics}
                </p>
              </div>
            )}

            {/* Applied Methodologies */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase block mb-2">
                APPLIED METHODOLOGIES & STACK
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
          <div className="sticky bottom-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md p-5 border-t border-grid flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase">
              PORTFOLIO // IBRAHIM BENABIDA
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-graphite text-soft-linen dark:bg-soft-linen dark:text-terracotta text-xs font-mono tracking-widest uppercase hover:bg-terracotta dark:hover:bg-soft-linen/90 transition-colors cursor-pointer rounded-[2px]"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Resolution Image Inspection */}
      <ImageModal
        src={enlargedImage}
        title={currentSlide?.title || project.title}
        caption={currentSlide?.caption || project.subtitle}
        onClose={() => setEnlargedImage(null)}
      />
    </>
  );
};
