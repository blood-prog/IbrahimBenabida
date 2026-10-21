import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MenuModal } from './components/MenuModal';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorksSection } from './components/WorksSection';
import { Marquee } from './components/Marquee';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ThemeTransition } from './components/ThemeTransition';
import { WorksPage } from './components/WorksPage';
import { ContactPage } from './components/ContactPage';
import { Project } from './types';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTheme, setTargetTheme] = useState<'dark' | 'light'>('light');

  // Multi-page routing state: 'home' | 'works' | 'contact'
  const [currentPage, setCurrentPage] = useState<'home' | 'works' | 'contact'>('home');

  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync route on mount and browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('works') || hash.includes('works')) {
        setCurrentPage('works');
      } else if (path.includes('contact') || hash.includes('contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: 'home' | 'works' | 'contact', targetSectionId?: string) => {
    setCurrentPage(page);

    const targetUrl =
      page === 'home'
        ? targetSectionId
          ? `/${targetSectionId}`
          : '/'
        : `/${page}`;

    try {
      window.history.pushState(null, '', targetUrl);
    } catch {
      // Fallback for isolated contexts
    }

    if (page === 'home' && targetSectionId) {
      setTimeout(() => {
        const el = document.querySelector(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleTheme = () => {
    if (isTransitioning) return;
    const next = darkMode ? 'light' : 'dark';
    setTargetTheme(next);
    setIsTransitioning(true);

    // Midpoint (500ms): curtain covers viewport
    setTimeout(() => {
      setDarkMode(next === 'dark');
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, 500);

    // End (1000ms): sweep exits screen
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)] flex flex-col font-sans transition-colors duration-0">
      {/* Sweeping Parallelogram Transition Overlay */}
      <ThemeTransition isTransitioning={isTransitioning} targetTheme={targetTheme} />

      {/* Fixed Sticky Header */}
      <Header
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        isThemeTransitioning={isTransitioning}
        onOpenMenu={() => setMenuOpen(true)}
        onNavigateHome={() => navigateTo('home')}
      />

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'works' && (
          <WorksPage onSelectProject={(p) => setSelectedProject(p)} />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'home' && (
          <>
            {/* 1. Hero Visual Media & Giant Brand Identity */}
            <HeroSection />

            {/* 2. THE designer. (Bio & Academic Foundation) */}
            <AboutSection onOpenAboutModal={() => setAboutModalOpen(true)} />

            {/* 3. SELECTED works. (Interactive Projects Showcase) */}
            <WorksSection
              onSelectProject={(p) => setSelectedProject(p)}
              onViewAllWorks={() => navigateTo('works')}
            />

            {/* 4. Infinite Running Separator Marquee */}
            <Marquee />

            {/* 5. MY services. (Numbered 01-03 Pillars Grid) */}
            <ServicesSection />

            {/* 6. WANT TO chat? (Contact Callout) */}
            <ContactSection
              onOpenContactModal={() => setContactModalOpen(true)}
              onNavigateToContact={() => navigateTo('contact')}
            />
          </>
        )}
      </main>

      {/* 7. High-Impact Inverted Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={navigateTo}
      />
      <AboutModal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default App;
