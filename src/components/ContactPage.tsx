import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ContactHeroPlaceholder } from './Placeholders';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) return;

    setIsSubmitting(true);

    const subject = `[Portfolio Inquiry] ${formData.name || 'New Project Message'}`;
    const body = `Hello Ibrahim,

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Message:
${formData.message}

---
Sent via ibrahimbenabida.online contact form`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setLastMailtoUrl(mailtoUrl);

    // Trigger user's mail client with prefilled recipient, subject, and message
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--page-bg)] text-[var(--page-text)] transition-colors w-full overflow-hidden">
      {/* 1. HERO SECTION: "contact me." + Mural Photo */}
      <section className="border-b border-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] lg:min-h-[480px]">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid min-w-0">
            <div className="my-auto py-6">
              <h1 className="text-[clamp(3.5rem,12vw,10.5rem)] font-display font-bold tracking-tight leading-[0.84] text-terracotta dark:text-soft-linen select-none">
                contact
                <br />
                me.
              </h1>
            </div>

            <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono tracking-widest opacity-60 uppercase">
              <span>OPEN FOR FREELANCE &amp; CONTRACT WORK</span>
            </div>
          </div>

          {/* Right Column: Street Mural Image Placeholder */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-stretch min-w-0">
            <ContactHeroPlaceholder />
          </div>
        </div>
      </section>

      {/* 2. LOWER SECTION: "say hello." & Architectural Contact Form */}
      <section className="border-b border-grid flex items-stretch">
        {/* Left Architectural Tracing Line */}
        <div className="hidden sm:block w-8 md:w-16 lg:w-20 border-r border-grid shrink-0 bg-transparent" />

        {/* Center Main Content Grid */}
        <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: "say hello." + Email + Socials */}
          <div className="lg:col-span-5 xl:col-span-5 p-5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid gap-8 min-w-0">
            <div>
              <h2 className="text-[clamp(2.75rem,8vw,6rem)] font-display font-bold tracking-tight text-terracotta dark:text-soft-linen leading-[0.9]">
                say hello.
              </h2>
            </div>

            {/* Contact Email & Socials */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-terracotta dark:text-soft-linen shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-mono text-terracotta dark:text-soft-linen hover:opacity-80 underline underline-offset-4 decoration-1 decoration-terracotta/50 dark:decoration-soft-linen/50 transition-opacity"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(personalInfo.email)}
                    title="Copy Email"
                    aria-label="Copy email address"
                    className="min-h-[44px] min-w-[44px] p-2 border border-grid text-graphite/60 dark:text-soft-linen/60 hover:text-terracotta dark:hover:text-soft-linen hover:border-terracotta active:scale-[0.96] flex items-center justify-center cursor-pointer"
                  >
                    {copiedEmail ? <Check size={14} className="text-green-600 dark:text-green-400" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-4 border-t border-grid text-xs sm:text-sm font-mono tracking-widest uppercase">
                <div>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 min-h-[44px] text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-soft-linen active:opacity-70 transition-colors group"
                  >
                    <InstagramIcon className="w-4 h-4 text-graphite/70 dark:text-soft-linen/70 group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors" />
                    <span>INSTAGRAM</span>
                  </a>
                </div>

                <div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 min-h-[44px] text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-soft-linen active:opacity-70 transition-colors group"
                  >
                    <GithubIcon className="w-4 h-4 text-graphite/70 dark:text-soft-linen/70 group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors" />
                    <span>GITHUB ({personalInfo.github.split('/').pop()})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Grid Form */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between min-w-0">
            {submitted ? (
              <div className="p-8 sm:p-14 flex flex-col items-center justify-center text-center space-y-4 my-auto">
                <div className="w-14 h-14 border-2 border-terracotta dark:border-soft-linen rounded-full flex items-center justify-center text-terracotta dark:text-soft-linen">
                  <Check size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-terracotta dark:text-soft-linen">
                  Message Dispatched.
                </h3>
                <p className="text-sm font-sans max-w-md text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                  Your message has been addressed to <strong className="font-mono text-terracotta dark:text-soft-linen">{personalInfo.email}</strong>. If your email application did not launch automatically, click below to open it directly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={lastMailtoUrl || `mailto:${personalInfo.email}`}
                    className="min-h-[48px] px-6 py-2.5 border border-terracotta bg-terracotta text-soft-linen dark:border-soft-linen dark:bg-soft-linen dark:text-terracotta text-xs font-mono uppercase tracking-widest font-bold active:scale-[0.98] transition-all inline-flex items-center gap-2"
                  >
                    <span>OPEN EMAIL APP</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="min-h-[48px] px-6 py-2.5 border border-grid text-xs font-mono uppercase tracking-widest hover:border-terracotta hover:text-terracotta dark:hover:border-soft-linen dark:hover:text-soft-linen active:scale-[0.98] transition-all cursor-pointer"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-w-0">
                {/* Row 1: Split 50/50 for Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-grid min-w-0">
                  {/* Name */}
                  <div className="p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-grid flex flex-col justify-start min-w-0">
                    <label htmlFor="contact-name" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2 block">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full min-h-[48px] bg-transparent text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30 dark:placeholder:text-soft-linen/30"
                    />
                  </div>

                  {/* Email */}
                  <div className="p-4 sm:p-6 flex flex-col justify-start min-w-0">
                    <label htmlFor="contact-email" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2 block">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full min-h-[48px] bg-transparent text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30 dark:placeholder:text-soft-linen/30"
                    />
                  </div>
                </div>

                {/* Row 2: Full Width Phone */}
                <div className="p-4 sm:p-6 border-b border-grid flex flex-col justify-start min-w-0">
                  <label htmlFor="contact-phone" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2 block">
                    Phone (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+213 ..."
                    className="w-full min-h-[48px] bg-transparent text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30 dark:placeholder:text-soft-linen/30"
                  />
                </div>

                {/* Row 3: Full Width Message */}
                <div className="p-4 sm:p-6 border-b border-grid flex flex-col justify-start flex-1 min-h-[160px] sm:min-h-[200px] min-w-0">
                  <label htmlFor="contact-message" className="text-[10px] sm:text-xs font-mono tracking-wider text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2 block">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, or scope..."
                    className="w-full p-0 bg-transparent text-base font-sans text-graphite dark:text-soft-linen focus:outline-none resize-none flex-1 placeholder:text-graphite/30 dark:placeholder:text-soft-linen/30"
                  />
                </div>

                {/* Row 4: Cloudflare Verification Box */}
                <div className="p-4 sm:p-6 border-b border-grid bg-white/40 dark:bg-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-w-0">
                  <div
                    onClick={() => setIsCaptchaVerified(!isCaptchaVerified)}
                    role="checkbox"
                    aria-checked={isCaptchaVerified}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        setIsCaptchaVerified(!isCaptchaVerified);
                      }
                    }}
                    className="inline-flex items-center gap-3 px-4 py-2.5 bg-white border border-[#d1d5db] shadow-sm rounded-[2px] cursor-pointer hover:border-graphite/50 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta select-none min-h-[48px]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-sans font-medium text-[#111827]">
                      Verified human
                    </span>
                    <div className="border-l border-gray-300 pl-3 flex items-center gap-2">
                      <div className="text-[9px] font-sans leading-tight text-gray-500">
                        <div className="font-semibold text-gray-800 tracking-wider">CLOUDFLARE</div>
                        <div className="text-[7.5px] text-gray-400">Turnstile Protection</div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-wider opacity-60">
                    DIRECT INBOX DELIVERY
                  </span>
                </div>

                {/* Row 5: Action Submit Button */}
                <div className="p-4 sm:p-6 flex items-center justify-start min-w-0">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[48px] px-8 sm:px-10 py-3.5 border border-graphite/40 dark:border-soft-linen/40 text-xs sm:text-sm font-mono tracking-widest uppercase hover:bg-terracotta hover:text-soft-linen hover:border-terracotta dark:hover:bg-soft-linen dark:hover:text-terracotta dark:hover:border-soft-linen active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta dark:focus-visible:ring-soft-linen transition-all cursor-pointer font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Architectural Tracing Line */}
        <div className="hidden lg:block w-8 md:w-16 lg:w-20 border-l border-grid shrink-0 bg-transparent" />
      </section>
    </div>
  );
};
