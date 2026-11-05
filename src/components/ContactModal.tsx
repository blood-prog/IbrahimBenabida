import React, { useState } from 'react';
import { X, Copy, Check, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Data Science & Analysis',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const subject = `[Portfolio Inquiry - ${formData.projectType}] ${formData.name || 'New Message'}`;
    const body = `Hello Ibrahim,

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}

---
Sent via ibrahimbenabida.online contact modal`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Contact Form"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-2xl max-h-[90dvh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col rounded-[2px]">
        {/* Top Bar with Subtle Dot Matrix */}
        <div className="sticky top-0 bg-soft-linen/95 dark:bg-terracotta/95 backdrop-blur-md z-10 flex items-center justify-between p-4 sm:p-6 border-b border-grid shrink-0 pattern-dots-subtle">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-terracotta dark:border-soft-linen shrink-0 shadow-sm">
              <img
                src="/profile/ibrahim-cherry-portrait.webp"
                alt="Ibrahim Benabida"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-bold block">
                DIRECT INQUIRY
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-graphite dark:text-soft-linen">
                Send a message.
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact modal"
            className="min-h-[48px] min-w-[48px] p-2.5 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-colors flex items-center justify-center cursor-pointer"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 flex-1">
          {/* Quick Copy Box */}
          <div className="p-4 border border-grid bg-white/50 dark:bg-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-terracotta dark:text-soft-linen shrink-0" size={20} aria-hidden="true" />
              <div>
                <span className="text-[10px] font-mono tracking-widest opacity-60 uppercase block">
                  PRIMARY EMAIL
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-graphite dark:text-soft-linen">
                  {personalInfo.email}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
              className="min-h-[48px] px-4 py-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-colors flex items-center gap-2 text-xs font-mono tracking-wider uppercase shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600 dark:text-green-300" aria-hidden="true" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {formSubmitted ? (
            <div className="p-8 border border-terracotta dark:border-soft-linen bg-terracotta/10 dark:bg-soft-linen/10 text-center space-y-3">
              <Check className="mx-auto text-terracotta dark:text-soft-linen" size={32} aria-hidden="true" />
              <h4 className="font-display font-bold text-xl text-graphite dark:text-soft-linen">Message Dispatched</h4>
              <p className="text-xs sm:text-sm font-sans text-graphite/80 dark:text-soft-linen/80">
                Opening your email client addressed to <strong className="font-mono text-terracotta dark:text-soft-linen">{personalInfo.email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-name" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold block">
                    Name *
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full min-h-[48px] p-3 bg-white/60 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-base font-sans text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="modal-email" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold block">
                    Email *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full min-h-[48px] p-3 bg-white/60 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-base font-sans text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-discipline" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold block">
                  Project Type
                </label>
                <select
                  id="modal-discipline"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full min-h-[48px] p-3 bg-white/60 dark:bg-black/30 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-base font-sans text-graphite dark:text-soft-linen"
                >
                  <option className="text-graphite bg-soft-linen">Data Science &amp; Analysis</option>
                  <option className="text-graphite bg-soft-linen">Brand &amp; UI Design</option>
                  <option className="text-graphite bg-soft-linen">Frontend Web Engineering</option>
                  <option className="text-graphite bg-soft-linen">General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-message" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold block">
                  Message *
                </label>
                <textarea
                  id="modal-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or questions..."
                  className="w-full p-3 bg-white/60 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-base font-sans resize-none text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[10px] font-mono opacity-60">
                  ALGIERS TIME (CET / UTC+1)
                </span>
                <button
                  type="submit"
                  className="min-h-[48px] px-8 py-3 bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta font-mono text-xs tracking-widest uppercase hover:bg-graphite dark:hover:bg-soft-linen/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer font-bold"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
