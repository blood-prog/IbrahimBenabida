import React, { useState } from 'react';
import { X, Copy, Check, Send, Mail } from 'lucide-react';
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
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="bg-soft-linen dark:bg-terracotta text-graphite dark:text-soft-linen w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-grid shadow-2xl relative flex flex-col">
        {/* Top Bar */}
        <div className="sticky top-0 bg-soft-linen dark:bg-terracotta z-10 flex items-center justify-between p-6 border-b border-grid">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-terracotta dark:text-soft-linen uppercase font-semibold">
              TRANSMISSION // DIRECT REACH
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-graphite dark:text-soft-linen">
              Initiate Dialogue.
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Quick Copy Box */}
          <div className="p-4 border border-grid bg-white/60 dark:bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-terracotta dark:text-soft-linen" size={20} />
              <div>
                <span className="text-[10px] font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase block">
                  PRIMARY EMAIL
                </span>
                <span className="font-mono text-sm font-semibold text-graphite dark:text-soft-linen">
                  {personalInfo.email}
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 border border-graphite dark:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors flex items-center gap-2 text-xs font-mono tracking-wider uppercase shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600 dark:text-green-300" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {formSubmitted ? (
            <div className="p-8 border border-terracotta dark:border-soft-linen bg-terracotta/10 dark:bg-soft-linen/10 text-center space-y-3">
              <Check className="mx-auto text-terracotta dark:text-soft-linen" size={32} />
              <h4 className="font-display font-bold text-xl text-graphite dark:text-soft-linen">Message Registered</h4>
              <p className="text-xs font-mono text-graphite/70 dark:text-soft-linen/70">
                Thank you. Ibrahim will review your dispatch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/80 uppercase">
                    YOUR NAME
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full p-3 bg-white/50 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-sm font-sans text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/80 uppercase">
                    YOUR EMAIL
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@studio.com"
                    className="w-full p-3 bg-white/50 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-sm font-sans text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/80 uppercase">
                  DISCIPLINE OF INTEREST
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-3 bg-white/50 dark:bg-black/30 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-sm font-sans text-graphite dark:text-soft-linen"
                >
                  <option className="text-graphite bg-soft-linen">Data Science & Mathematical Modeling</option>
                  <option className="text-graphite bg-soft-linen">Brand Identity & Design System</option>
                  <option className="text-graphite bg-soft-linen">Modern Frontend & Motion Development</option>
                  <option className="text-graphite bg-soft-linen">Full Disciplinary Consultation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-graphite/70 dark:text-soft-linen/80 uppercase">
                  PROJECT BRIEF / MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your timeline, goals, or data challenges..."
                  className="w-full p-3 bg-white/50 dark:bg-black/20 border border-grid focus:border-terracotta dark:focus:border-soft-linen focus:outline-none text-sm font-sans resize-none text-graphite dark:text-soft-linen placeholder:text-graphite/40 dark:placeholder:text-soft-linen/40"
                />
              </div>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-[10px] font-mono text-graphite/60 dark:text-soft-linen/60">
                  ALGIERS TIMEZONE (CET / UTC+1)
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-terracotta text-soft-linen dark:bg-soft-linen dark:text-terracotta font-mono text-xs tracking-widest uppercase hover:bg-graphite dark:hover:bg-soft-linen/90 transition-colors flex items-center gap-2 cursor-pointer font-bold"
                >
                  <span>SEND TRANSMISSION</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
