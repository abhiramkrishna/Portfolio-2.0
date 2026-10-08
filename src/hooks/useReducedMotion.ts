import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('portfolio-reduced-motion');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
    localStorage.setItem('portfolio-reduced-motion', String(reducedMotion));
  }, [reducedMotion]);

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  return { reducedMotion, toggleReducedMotion };
}
