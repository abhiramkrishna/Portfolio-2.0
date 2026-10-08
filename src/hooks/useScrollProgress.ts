import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentY = window.scrollY;
          const progress = totalHeight > 0 ? (currentY / totalHeight) * 100 : 0;
          
          setScrollY(currentY);
          setScrollProgress(Math.min(100, Math.max(0, progress)));

          // Detect active section
          const sections = ['hero', 'philosophy', 'disciplines', 'projects', 'technology', 'interests', 'economics', 'contact'];
          const viewportMid = currentY + window.innerHeight * 0.35;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= viewportMid) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, scrollY, activeSection };
}
