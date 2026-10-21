import React from 'react';
import { ContactPlaceholder } from './Placeholders';

interface ContactSectionProps {
  onOpenContactModal?: () => void;
  onNavigateToContact?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContactModal,
  onNavigateToContact,
}) => {
  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else if (onOpenContactModal) {
      onOpenContactModal();
    }
  };

  return (
    <section id="contact" className="border-b border-grid scroll-mt-16">
      {/* Section Header: WANT TO chat? */}
      <div className="p-6 md:p-10 lg:p-14 border-b border-grid">
        <span className="block text-xs md:text-sm font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase mb-2">
          WANT TO
        </span>
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen">
          chat?
        </h2>
      </div>

      {/* 2-Column Split: Left Action, Right Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-6 lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-between space-y-8 border-b md:border-b-0 md:border-r border-grid">
          <p className="text-xl md:text-2xl lg:text-3xl font-sans text-graphite dark:text-soft-linen leading-relaxed">
            Got a project in mind, a data problem to simplify, or an aesthetic design vision? I’d love to hear about it.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleContactClick}
              className="px-8 py-4 border border-graphite dark:border-soft-linen text-xs md:text-sm font-mono tracking-widest uppercase hover:bg-terracotta hover:text-soft-linen hover:border-terracotta dark:hover:bg-soft-linen dark:hover:text-terracotta dark:hover:border-soft-linen transition-all duration-200 cursor-pointer"
            >
              CONTACT PAGE
            </button>
            {onOpenContactModal && (
              <button
                onClick={onOpenContactModal}
                className="px-6 py-4 border border-grid text-xs font-mono tracking-widest uppercase hover:border-graphite text-graphite/80 dark:text-soft-linen/80 hover:text-graphite dark:hover:text-soft-linen transition-colors cursor-pointer"
              >
                QUICK TRANSMISSION
              </button>
            )}
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5">
          <ContactPlaceholder />
        </div>
      </div>
    </section>
  );
};
