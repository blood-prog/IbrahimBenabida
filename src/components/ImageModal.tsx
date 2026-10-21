import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

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
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex flex-col justify-center items-center z-[70] p-4 sm:p-6 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="w-full max-w-5xl flex items-center justify-between pb-3 text-white border-b border-white/20 mb-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2">
          <ZoomIn size={16} className="text-terracotta" />
          <span className="text-xs font-mono tracking-widest uppercase">
            {title || 'INSPECT RESOLUTION'}
          </span>
        </div>
        <button
          className="p-1.5 border border-white/30 hover:border-white text-white hover:bg-white hover:text-black transition-colors rounded-[2px] cursor-pointer"
          onClick={onClose}
          aria-label="Close enlarged view"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image View */}
      <div
        className="relative max-w-[92vw] max-h-[82vh] overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl bg-black/40 rounded-[2px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-[2px] select-none"
        />
      </div>

      {/* Caption bar */}
      {caption && (
        <div
          className="mt-3 text-center max-w-2xl px-4 py-1.5 bg-black/60 border border-white/10 text-xs font-mono tracking-wider text-white/80"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
