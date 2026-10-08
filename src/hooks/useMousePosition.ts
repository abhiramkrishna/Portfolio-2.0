import { useEffect, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  isInside: boolean;
}

export function useMousePosition() {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isInside: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const normX = width > 0 ? (clientX / width) * 2 - 1 : 0;
      const normY = height > 0 ? -(clientY / height) * 2 + 1 : 0;

      setMousePos({
        x: clientX,
        y: clientY,
        normalizedX: normX,
        normalizedY: normY,
        isInside: true
      });
    };

    const handleMouseLeave = () => {
      setMousePos(prev => ({ ...prev, isInside: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return mousePos;
}
