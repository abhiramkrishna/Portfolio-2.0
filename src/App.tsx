import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useAudioHum } from './hooks/useAudioHum';
import { CustomCursor } from './components/common/CustomCursor';
import { SystemStatusBar } from './components/common/SystemStatusBar';
import { Navbar } from './components/navigation/Navbar';
import { MobileMenu } from './components/navigation/MobileMenu';

import { HeroSection } from './components/hero/HeroSection';
import { PhilosophySection } from './components/narrative/PhilosophySection';
import { TechStackSection } from './components/technology/TechStackSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/contact/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { activeSection } = useScrollProgress();
  useAudioHum();


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Hardware-Accelerated Custom Cursor */}
      <CustomCursor />

      {/* Persistent System Status Bar */}
      <SystemStatusBar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Floating Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Fullscreen Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />



      {/* Main Experience Flow */}
      <main id="main-content">
        <HeroSection />
        <PhilosophySection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </>
  );
};

export default App;
