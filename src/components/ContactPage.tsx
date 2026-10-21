import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ContactHeroPlaceholder } from './Placeholders';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
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

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--page-bg)] text-[var(--page-text)] transition-colors">
      {/* 1. HERO SECTION: "DON'T BE SHY" + "contact me." + Mural Photo (Screenshot 4) */}
      <section className="border-b border-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] lg:min-h-[540px]">
          {/* Left Column: Heading & Kicker */}
          <div className="lg:col-span-7 xl:col-span-8 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid">
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold">
              DON’T BE SHY
            </span>

            <div className="my-auto py-8">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-display font-black tracking-tight leading-[0.82] text-terracotta dark:text-soft-linen select-none">
                contact
                <br />
                me.
              </h1>
            </div>

            <div className="flex items-center gap-4 text-[10px] sm:text-xs font-mono tracking-widest text-graphite/60 dark:text-soft-linen/60 uppercase">
              <span>AVAILABLE FOR WORLDWIDE DISPATCH & COMMISSIONS</span>
            </div>
          </div>

          {/* Right Column: Street Mural Image Placeholder */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-stretch">
            <ContactHeroPlaceholder />
          </div>
        </div>
      </section>

      {/* 2. LOWER SECTION: "say hello." & Architectural Contact Form (Screenshot 5) */}
      <section className="border-b border-grid flex items-stretch">
        {/* Left Architectural Tracing Grid Line (Screenshot 4 & 5) */}
        <div className="w-10 sm:w-16 md:w-20 lg:w-24 border-r border-grid shrink-0 bg-transparent" />

        {/* Center Main Content Grid */}
        <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: "say hello." + Email + Socials */}
          <div className="lg:col-span-5 xl:col-span-5 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid space-y-12">
            <div>
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-terracotta dark:text-soft-linen leading-[0.88]">
                say hello.
              </h2>
            </div>

            {/* Contact Email & Socials */}
            <div className="space-y-8">
              {/* Email Line matching Screenshot 5 */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-terracotta dark:text-soft-linen shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg md:text-xl font-mono text-terracotta dark:text-soft-linen hover:opacity-80 underline underline-offset-4 decoration-1 decoration-terracotta/50 dark:decoration-soft-linen/50 transition-opacity"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={() => handleCopyEmail(personalInfo.email)}
                    title="Copy Email"
                    className="p-1 border border-grid text-graphite/60 dark:text-soft-linen/60 hover:text-terracotta dark:hover:text-soft-linen hover:border-terracotta text-[10px] font-mono uppercase cursor-pointer"
                  >
                    {copiedEmail ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  </button>
                </div>
              </div>

              {/* Social Channels List with Icons (Screenshot 5) */}
              <div className="space-y-4 pt-4 border-t border-grid text-xs sm:text-sm font-mono tracking-widest uppercase">
                <div>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors group"
                  >
                    <InstagramIcon className="w-4 h-4 text-graphite/70 dark:text-soft-linen/70 group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors" />
                    <span>INSTAGRAM</span>
                  </a>
                </div>

                <div>
                  <a
                    href={personalInfo.youtube || "https://youtube.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors group"
                  >
                    <YoutubeIcon className="w-4 h-4 text-graphite/70 dark:text-soft-linen/70 group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors" />
                    <span>YOUTUBE</span>
                  </a>
                </div>

                <div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-soft-linen transition-colors group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-graphite/70 dark:text-soft-linen/70 group-hover:text-terracotta dark:group-hover:text-soft-linen transition-colors" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Grid Form (Screenshot 5) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between">
            {submitted ? (
              <div className="p-12 sm:p-16 flex flex-col items-center justify-center text-center space-y-4 my-auto">
                <div className="w-16 h-16 border-2 border-terracotta dark:border-soft-linen rounded-full flex items-center justify-center text-terracotta dark:text-soft-linen">
                  <Check size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-terracotta dark:text-soft-linen">
                  Message Dispatched.
                </h3>
                <p className="text-sm font-sans max-w-md text-graphite/80 dark:text-soft-linen/80 leading-relaxed">
                  Thank you for reaching out! Your message has been received. You will hear back very soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 border border-grid text-xs font-mono uppercase tracking-widest hover:border-terracotta hover:text-terracotta dark:hover:border-soft-linen dark:hover:text-soft-linen"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                {/* Row 1: Split 50/50 for NAME * and EMAIL * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-grid">
                  {/* NAME * */}
                  <div className="p-5 sm:p-8 border-b sm:border-b-0 sm:border-r border-grid flex flex-col justify-start">
                    <label className="text-[10px] sm:text-xs font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2">
                      NAME *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=""
                      className="w-full bg-transparent text-sm sm:text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30"
                    />
                  </div>

                  {/* EMAIL * */}
                  <div className="p-5 sm:p-8 flex flex-col justify-start">
                    <label className="text-[10px] sm:text-xs font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2">
                      EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=""
                      className="w-full bg-transparent text-sm sm:text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30"
                    />
                  </div>
                </div>

                {/* Row 2: Full Width PHONE * */}
                <div className="p-5 sm:p-8 border-b border-grid flex flex-col justify-start">
                  <label className="text-[10px] sm:text-xs font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2">
                    PHONE *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=""
                    className="w-full bg-transparent text-sm sm:text-base font-sans text-graphite dark:text-soft-linen focus:outline-none placeholder:text-graphite/30"
                  />
                </div>

                {/* Row 3: Full Width MESSAGE * */}
                <div className="p-5 sm:p-8 border-b border-grid flex flex-col justify-start flex-1 min-h-[160px] sm:min-h-[220px]">
                  <label className="text-[10px] sm:text-xs font-mono tracking-widest text-graphite/80 dark:text-soft-linen/80 uppercase font-semibold mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=""
                    className="w-full bg-transparent text-sm sm:text-base font-sans text-graphite dark:text-soft-linen focus:outline-none resize-none flex-1 placeholder:text-graphite/30"
                  />
                </div>

                {/* Row 4: Cloudflare Verification Box (Screenshot 5) */}
                <div className="p-6 sm:p-8 border-b border-grid bg-white/40 dark:bg-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Cloudflare Turnstile Box */}
                  <div
                    onClick={() => setIsCaptchaVerified(!isCaptchaVerified)}
                    className="inline-flex items-center gap-4 px-4 py-2.5 bg-white border border-[#d1d5db] shadow-sm rounded-[2px] cursor-pointer hover:border-graphite/50 transition-colors select-none"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-sans font-medium text-[#111827]">
                      Succès !
                    </span>
                    <div className="border-l border-gray-300 pl-3 flex items-center gap-2">
                      <svg viewBox="0 0 48 32" className="w-9 h-6" fill="none">
                        <path
                          d="M37.5 14.5 C36.8 9.5 32.5 5.7 27.3 5.7 C23.2 5.7 19.6 8 18 11.5 C16.8 10.5 15.2 9.9 13.5 9.9 C9.6 9.9 6.4 13 6.4 16.9 C6.4 17.5 6.5 18 6.7 18.5 C3.3 19.3 0.8 22.4 0.8 26 C0.8 30.2 4.2 33.6 8.4 33.6 L37.2 33.6 C41.1 33.6 44.2 30.5 44.2 26.6 C44.2 20.8 39.8 15.8 37.5 14.5 Z"
                          fill="#f38020"
                        />
                        <path
                          d="M35 15.5 C34.5 12 31.4 9.2 27.6 9.2 C24.5 9.2 21.8 10.9 20.5 13.5 C19.6 12.8 18.4 12.3 17 12.3 C14 12.3 11.5 14.7 11.5 17.8 C11.5 18.2 11.6 18.6 11.7 19 C9 19.6 7 22 7 24.8 C7 28.1 9.7 30.8 13 30.8 L34.8 30.8 C37.8 30.8 40.2 28.4 40.2 25.4 C40.2 20.8 36.8 16.6 35 15.5 Z"
                          fill="#faad3f"
                        />
                      </svg>
                      <div className="text-[9px] font-sans leading-tight text-gray-500">
                        <div className="font-semibold text-gray-800 tracking-wider">CLOUDFLARE</div>
                        <div className="text-[7.5px] text-gray-400">Confidentialité • Aide</div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-wider text-graphite/50 dark:text-soft-linen/50">
                    PROTECTED BY TURNSTILE // ENCRYPTED DISPATCH
                  </span>
                </div>

                {/* Row 5: Action Submit Button (Screenshot 5) */}
                <div className="p-6 sm:p-8 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3.5 border border-graphite/40 dark:border-soft-linen/40 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase hover:bg-terracotta hover:text-soft-linen hover:border-terracotta dark:hover:bg-soft-linen dark:hover:text-terracotta dark:hover:border-soft-linen transition-all duration-200 cursor-pointer font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span>TRANSMITTING...</span>
                      </span>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Architectural Tracing Grid Line (Screenshot 5) */}
        <div className="hidden lg:block w-10 sm:w-16 md:w-20 lg:w-24 border-l border-grid shrink-0 bg-transparent" />
      </section>
    </div>
  );
};
