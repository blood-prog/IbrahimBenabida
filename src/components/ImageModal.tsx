import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string | null;
  alt?: string;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt = 'Enlarged project view',
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      id="imageModal"
      role="dialog"
      aria-modal="true"
      aria-label="Image resolution inspection"
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex flex-col justify-center items-center z-[70] p-3 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="w-full max-w-5xl flex items-center justify-between pb-3 text-white border-b border-white/20 mb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-90">
          {title || 'INSPECT RESOLUTION'}
        </span>
        <button
          type="button"
          className="min-h-[48px] min-w-[48px] p-2.5 border border-white/30 hover:border-white text-white hover:bg-white hover:text-black active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all rounded-[2px] cursor-pointer flex items-center justify-center"
          onClick={onClose}
          aria-label="Close enlarged view"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Main Image View */}
      <div
        className="relative max-w-[94vw] max-h-[82dvh] overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl bg-black/40 rounded-[2px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[92vw] max-h-[80dvh] object-contain rounded-[2px] select-none"
        />
      </div>

      {/* Caption bar */}
      {caption && (
        <div
          className="mt-3 text-center max-w-2xl px-4 py-2 bg-black/60 border border-white/10 text-xs font-mono tracking-wider text-white/80"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
