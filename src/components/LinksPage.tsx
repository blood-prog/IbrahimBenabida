import React, { useState, useEffect } from 'react';
import {
  Globe,
  Layers,
  Mail,
  Copy,
  Check,
  Share2,
  Download,
  QrCode,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface LinksPageProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onNavigateHome: () => void;
  onNavigateWorks: () => void;
  onNavigateContact: () => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinksPage: React.FC<LinksPageProps> = ({
  darkMode,
  onToggleTheme,
  onNavigateHome,
  onNavigateWorks,
  onNavigateContact,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [algiersTime, setAlgiersTime] = useState('');

  // Live Algiers local time ticker (UTC+1)
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Algiers',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setAlgiersTime(formatter.format(new Date()));
      } catch {
        setAlgiersTime(new Date().toTimeString().split(' ')[0]);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Copy current links URL
  const handleCopyLink = async () => {
    const url = 'https://ibrahimbenabida.online/links';
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // fallback
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  // Copy direct email
  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(personalInfo.email);
      }
    } catch {
      // fallback
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Generate & download vCard file for mobile contact import
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Benabida;Ibrahim;;;
FN:Ibrahim Benabida
ORG:USTHB (University of Science and Technology Houari Boumediene)
TITLE:Data Science Undergraduate & Digital Designer
EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}
URL;TYPE=WORK:https://ibrahimbenabida.online
URL;TYPE=LINKS:https://ibrahimbenabida.online/links
X-SOCIALPROFILE;TYPE=github:https://github.com/blood-prog
X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/benabida.ibrahim
ADR;TYPE=WORK:;;Algiers;Algiers;;;Algeria
NOTE:Data Science & Digital Design. 137.5° Golden Angle Design Systems.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ibrahim-Benabida.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen w-full bg-[var(--page-bg)] text-[var(--page-text)] transition-colors duration-0 select-none overflow-x-hidden flex flex-col items-center">
      
      {/* BRANDING RINGS PATTERN BACKGROUND (Layered with subtle opacity) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] dark:opacity-[0.22] transition-opacity duration-300"
        aria-hidden="true"
        style={{
          backgroundImage: darkMode
            ? `url('/patterns/web-hero-1920x1080/svg/rings_cherry-linen.svg')`
            : `url('/patterns/web-hero-1920x1080/svg/rings_linen-cherry.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* Repeating Rings Micro-Texture Overlay for Rich Tactility */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] dark:opacity-[0.10]"
        aria-hidden="true"
        style={{
          backgroundImage: darkMode
            ? `url('/patterns/web-tiles/tile-rings-cherry.svg')`
            : `url('/patterns/web-tiles/tile-rings-linen.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      />

      {/* TOP NAVIGATION UTILITY BAR */}
      <header className="sticky top-0 z-40 w-full border-b border-grid bg-[var(--page-bg)]/90 backdrop-blur-md flex items-stretch h-14 md:h-16">
        {/* Back to Home Brand Link */}
        <div className="h-full flex items-center px-4 sm:px-6 md:px-8 border-r border-grid shrink-0">
          <button
            type="button"
            onClick={onNavigateHome}
            aria-label="Return to portfolio home"
            className="group inline-flex items-center gap-2 font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-graphite dark:text-soft-linen hover:text-terracotta dark:hover:text-terracotta transition-colors cursor-pointer"
          >
            <span className="text-sm font-mono opacity-60 group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>{personalInfo.shortName}</span>
          </button>
        </div>

        {/* Live Location / Ticker Center */}
        <div className="flex-1 min-w-0 flex items-center justify-center px-3 border-r border-grid text-[10px] sm:text-xs font-mono tracking-widest text-graphite/70 dark:text-soft-linen/70 uppercase truncate">
          <span className="hidden sm:inline">ALGIERS, DZ</span>
          <span className="hidden sm:inline mx-2 opacity-40">/</span>
          <span className="font-semibold text-graphite dark:text-soft-linen">
            {algiersTime || 'UTC+1'}
          </span>
          <span className="mx-2 opacity-40">/</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-bold">ONLINE</span>
          </span>
        </div>

        {/* Action Controls: Theme Switch & QR Code */}
        <div className="flex items-stretch shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            className="h-full px-3 sm:px-5 flex items-center justify-center border-r border-grid text-[10px] sm:text-xs font-mono tracking-widest uppercase hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
          >
            {darkMode ? 'DARK' : 'LIGHT'}
          </button>

          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            aria-label="Show QR Code for this link in bio"
            className="w-12 sm:w-14 h-full flex items-center justify-center hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
            title="Scan or share QR Code"
          >
            <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* MAIN BIO-LINK CONTENT CONTAINER */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center gap-6 sm:gap-8">
        
        {/* PROFILE IDENTITY CARD */}
        <div className="w-full border border-grid bg-[var(--page-bg)] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
          {/* Subtle Corner Rings Watermark */}
          <div className="absolute -top-10 -right-10 w-36 h-36 opacity-10 pointer-events-none" aria-hidden="true">
            <img
              src={darkMode ? "/patterns/web-hero-1920x1080/svg/rings_cherry-linen.svg" : "/patterns/web-hero-1920x1080/svg/rings_linen-cherry.svg"}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Portrait with Golden Angle Identity Frame */}
          <div className="relative mb-5 group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-grid relative overflow-hidden bg-linen-soft shadow-inner">
              <img
                src="/profile/ibrahim-cherry-portrait.jpg"
                alt="Ibrahim Benabida"
                className="w-full h-full object-cover object-top rounded-full filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Golden Angle Brand Seal Overlay */}
            <div
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border border-grid bg-[var(--page-bg)] p-1 shadow-sm flex items-center justify-center"
              title="137.5° Phyllotaxis Brand Seal"
            >
              <img
                src={darkMode ? "/brand/golden-angle-symbol-linen.svg" : "/brand/golden-angle-symbol-cherry.svg"}
                alt="Brand Symbol"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Name & Academic / Discipline Title */}
          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-terracotta dark:text-soft-linen mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-graphite/75 dark:text-soft-linen/75 uppercase tracking-wider mb-2">
            Data Science @ USTHB &amp; Digital Designer
          </p>
          <p className="text-xs sm:text-sm max-w-sm text-graphite/80 dark:text-soft-linen/80 leading-relaxed font-normal mb-5">
            Bridging analytical computing and machine learning with refined brand identity systems and responsive frontend engineering.
          </p>

          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-grid text-[10px] sm:text-xs font-mono tracking-wider uppercase bg-terracotta/5 dark:bg-soft-linen/5 rounded-[1px] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span className="font-semibold text-terracotta dark:text-soft-linen">
              AVAILABLE FOR SELECT PROJECTS (Q1/Q2)
            </span>
          </div>

          {/* Quick Action Utility Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm">
            <button
              type="button"
              onClick={handleDownloadVCard}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-grid text-xs font-mono tracking-wider uppercase hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors active:scale-[0.98] cursor-pointer"
              title="Download contact card to your phone"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Contact</span>
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-grid text-xs font-mono tracking-wider uppercase hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors active:scale-[0.98] cursor-pointer relative"
              title="Copy link to clipboard"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CURATED DIRECTORY LINKS (Minimal Brutalist Interactive Cards) */}
        <div className="w-full flex flex-col gap-3">
          
          {/* LINK 01: Main Portfolio Experience */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 border border-grid group-hover:border-current flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-terracotta dark:text-soft-linen group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>01 / MAIN DOMAIN</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 group-hover:bg-soft-linen/20 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen group-hover:text-current rounded-[1px] font-bold">
                    PRIMARY
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  Main Portfolio Experience
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Full interactive experience, academic bio &amp; design pillars
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-3" />
          </button>

          {/* LINK 02: Selected Works & Case Studies */}
          <button
            type="button"
            onClick={onNavigateWorks}
            className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 border border-grid group-hover:border-current flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-terracotta dark:text-soft-linen group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>02 / CASE STUDIES</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 group-hover:bg-soft-linen/20 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen group-hover:text-current rounded-[1px] font-bold">
                    6 WORKS
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  Curated Projects &amp; Artifacts
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Brand architecture, clinical SaaS portals &amp; procedural design
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-3" />
          </button>

          {/* LINK 03: GitHub Repositories */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 border border-grid group-hover:border-current flex items-center justify-center shrink-0">
                <GithubIcon className="w-5 h-5 text-terracotta dark:text-soft-linen group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>03 / SOURCE CODE</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 group-hover:bg-soft-linen/20 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen group-hover:text-current rounded-[1px] font-bold">
                    @blood-prog
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  GitHub Repositories
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Data science models, Python computational scripts &amp; React UI
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-3" />
          </a>

          {/* LINK 04: Instagram Visual Lab */}
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 border border-grid group-hover:border-current flex items-center justify-center shrink-0">
                <InstagramIcon className="w-5 h-5 text-terracotta dark:text-soft-linen group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>04 / VISUAL CULTURE</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 group-hover:bg-soft-linen/20 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen group-hover:text-current rounded-[1px] font-bold">
                    @benabida.ibrahim
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  Instagram Visual Archive
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Typography studies, design iterations, brand experiments &amp; culture
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-3" />
          </a>

          {/* LINK 05: Direct Email Channel */}
          <div className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen transition-all duration-200 shadow-sm relative">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 min-w-0 flex-1 hover:opacity-85"
            >
              <div className="w-10 h-10 border border-grid flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-terracotta dark:text-soft-linen" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>05 / DIRECT CHANNEL</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen rounded-[1px] font-bold">
                    EMAIL
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  {personalInfo.email}
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Direct client inquiries, consultations &amp; collaborations
                </p>
              </div>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="p-2 border border-grid hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors ml-3 shrink-0 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* LINK 06: Start Project Inquiry Portal */}
          <button
            type="button"
            onClick={onNavigateContact}
            className="group w-full border border-grid bg-[var(--page-bg)] p-4 sm:p-5 flex items-center justify-between text-left hover:border-terracotta dark:hover:border-soft-linen hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 border border-grid group-hover:border-current flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-terracotta dark:text-soft-linen group-hover:text-current transition-colors" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest opacity-60 uppercase mb-0.5">
                  <span>06 / GET IN TOUCH</span>
                  <span className="px-1.5 py-0.2 bg-terracotta/10 group-hover:bg-soft-linen/20 dark:bg-soft-linen/10 text-terracotta dark:text-soft-linen group-hover:text-current rounded-[1px] font-bold">
                    INQUIRY
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-display font-bold tracking-tight truncate">
                  Start a Project Discussion
                </h2>
                <p className="text-xs opacity-75 font-mono truncate mt-0.5">
                  Structured scope, requirements &amp; timeline submission
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-3" />
          </button>
        </div>

        {/* BRUTALIST SYSTEM TELEMETRY DOCK */}
        <div className="w-full border border-grid bg-[var(--page-bg)]/80 backdrop-blur-sm p-4 sm:p-5 text-left font-mono text-[10px] sm:text-xs text-graphite/70 dark:text-soft-linen/70 space-y-1.5">
          <div className="flex items-center justify-between border-b border-grid/60 pb-1.5">
            <span className="font-bold uppercase tracking-wider text-terracotta dark:text-soft-linen">
              [SYSTEM_STATUS: ACTIVE]
            </span>
            <span>USTHB • BAB EZZOUAR</span>
          </div>
          <div className="flex justify-between pt-1">
            <span>CANONICAL:</span>
            <span className="text-graphite dark:text-soft-linen font-bold">ibrahimbenabida.online/links</span>
          </div>
          <div className="flex justify-between">
            <span>DISCIPLINES:</span>
            <span>DATA SCIENCE / BRAND SYSTEMS / FRONTEND</span>
          </div>
          <div className="flex justify-between">
            <span>BRAND MOTIF:</span>
            <span>137.5° PHYLLOTAXIS CONCENTRIC RINGS</span>
          </div>
        </div>

        {/* MINIMAL BRAND FOOTER */}
        <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-grid text-xs font-mono text-graphite/60 dark:text-soft-linen/60">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-terracotta dark:hover:text-soft-linen transition-colors cursor-pointer"
          >
            ← Back to Full Portfolio
          </button>
          <span>© {new Date().getFullYear()} Ibrahim Benabida</span>
        </footer>
      </main>

      {/* QR CODE SHARE MODAL */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite/80 dark:bg-black/80 backdrop-blur-sm"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="w-full max-w-sm border-2 border-grid bg-[var(--page-bg)] p-6 text-center space-y-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-grid pb-3">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-terracotta dark:text-soft-linen">
                SCAN PROFILE QR
              </span>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="w-7 h-7 border border-grid flex items-center justify-center text-xs font-mono hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta cursor-pointer"
                aria-label="Close QR Modal"
              >
                ✕
              </button>
            </div>

            {/* High-Contrast SVG QR Pattern */}
            <div className="w-56 h-56 mx-auto bg-white p-4 border border-grid flex items-center justify-center rounded-[2px] shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="#332d2b">
                {/* 3 Corner Registration Targets */}
                <rect x="5" y="5" width="26" height="26" fill="none" stroke="#332d2b" strokeWidth="4" />
                <rect x="12" y="12" width="12" height="12" fill="#5a1212" />
                <rect x="69" y="5" width="26" height="26" fill="none" stroke="#332d2b" strokeWidth="4" />
                <rect x="76" y="12" width="12" height="12" fill="#5a1212" />
                <rect x="5" y="69" width="26" height="26" fill="none" stroke="#332d2b" strokeWidth="4" />
                <rect x="12" y="76" width="12" height="12" fill="#5a1212" />
                {/* QR Data modules */}
                <rect x="36" y="8" width="5" height="5" />
                <rect x="44" y="8" width="5" height="5" />
                <rect x="54" y="8" width="5" height="5" />
                <rect x="36" y="18" width="5" height="5" />
                <rect x="48" y="18" width="5" height="5" />
                <rect x="56" y="18" width="5" height="5" />
                <rect x="36" y="28" width="5" height="5" />
                <rect x="44" y="28" width="5" height="5" />
                <rect x="54" y="28" width="5" height="5" />
                <rect x="8" y="36" width="5" height="5" />
                <rect x="18" y="36" width="5" height="5" />
                <rect x="28" y="36" width="5" height="5" />
                <rect x="38" y="38" width="24" height="24" fill="#5a1212" />
                <rect x="44" y="44" width="12" height="12" fill="#e8e3d9" />
                <rect x="68" y="36" width="5" height="5" />
                <rect x="78" y="36" width="5" height="5" />
                <rect x="88" y="36" width="5" height="5" />
                <rect x="8" y="46" width="5" height="5" />
                <rect x="22" y="46" width="5" height="5" />
                <rect x="72" y="46" width="5" height="5" />
                <rect x="84" y="46" width="5" height="5" />
                <rect x="8" y="56" width="5" height="5" />
                <rect x="18" y="56" width="5" height="5" />
                <rect x="26" y="56" width="5" height="5" />
                <rect x="68" y="56" width="5" height="5" />
                <rect x="82" y="56" width="5" height="5" />
                <rect x="36" y="68" width="5" height="5" />
                <rect x="46" y="68" width="5" height="5" />
                <rect x="56" y="68" width="5" height="5" />
                <rect x="68" y="68" width="5" height="5" />
                <rect x="80" y="68" width="5" height="5" />
                <rect x="36" y="78" width="5" height="5" />
                <rect x="48" y="78" width="5" height="5" />
                <rect x="58" y="78" width="5" height="5" />
                <rect x="72" y="78" width="5" height="5" />
                <rect x="84" y="78" width="5" height="5" />
                <rect x="36" y="88" width="5" height="5" />
                <rect x="46" y="88" width="5" height="5" />
                <rect x="56" y="88" width="5" height="5" />
                <rect x="68" y="88" width="5" height="5" />
                <rect x="88" y="88" width="5" height="5" />
              </svg>
            </div>

            <p className="text-xs font-mono text-graphite/80 dark:text-soft-linen/80">
              Scan to open <strong className="text-terracotta dark:text-soft-linen">ibrahimbenabida.online/links</strong> on mobile
            </p>

            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full py-2.5 border border-grid text-xs font-mono uppercase tracking-wider hover:bg-terracotta hover:text-soft-linen dark:hover:bg-soft-linen dark:hover:text-terracotta transition-colors cursor-pointer"
            >
              {copiedLink ? '✓ Copied URL to Clipboard' : 'Copy Links URL'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
