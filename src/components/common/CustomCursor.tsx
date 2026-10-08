import React, { useEffect, useRef, useState } from 'react';

export type CursorMode = 'default' | 'hover' | 'project' | 'rotate' | 'drag';

// Exact pixel-art paths extracted directly from the classic Windows pointer specification
const HAND_BORDER_PATH = "M5 0h2v1h-2zM4 1h1v1h-1zM7 1h1v1h-1zM4 2h1v1h-1zM7 2h1v1h-1zM4 3h1v1h-1zM7 3h1v1h-1zM4 4h1v1h-1zM7 4h1v1h-1zM4 5h1v1h-1zM7 5h3v1h-3zM4 6h1v1h-1zM7 6h1v1h-1zM10 6h3v1h-3zM4 7h1v1h-1zM7 7h1v1h-1zM10 7h1v1h-1zM13 7h2v1h-2zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM13 8h1v1h-1zM15 8h1v1h-1zM0 9h3v1h-3zM4 9h1v1h-1zM7 9h1v1h-1zM10 9h1v1h-1zM13 9h1v1h-1zM16 9h1v1h-1zM0 10h1v1h-1zM3 10h2v1h-2zM13 10h1v1h-1zM16 10h1v1h-1zM0 11h1v1h-1zM4 11h1v1h-1zM16 11h1v1h-1zM1 12h1v1h-1zM4 12h1v1h-1zM16 12h1v1h-1zM2 13h1v1h-1zM4 13h1v1h-1zM16 13h1v1h-1zM2 14h1v1h-1zM16 14h1v1h-1zM3 15h1v1h-1zM16 15h1v1h-1zM3 16h1v1h-1zM15 16h1v1h-1zM4 17h1v1h-1zM15 17h1v1h-1zM4 18h1v1h-1zM15 18h1v1h-1zM5 19h1v1h-1zM14 19h1v1h-1zM5 20h1v1h-1zM14 20h1v1h-1zM5 21h10v1h-10z";
const HAND_FILL_PATH = "M5 1h2v1h-2zM5 2h2v1h-2zM5 3h2v1h-2zM5 4h2v1h-2zM5 5h2v1h-2zM5 6h2v1h-2zM8 6h2v1h-2zM5 7h2v1h-2zM8 7h2v1h-2zM11 7h2v1h-2zM5 8h2v1h-2zM8 8h2v1h-2zM11 8h2v1h-2zM14 8h1v1h-1zM5 9h2v1h-2zM8 9h2v1h-2zM11 9h2v1h-2zM14 9h2v1h-2zM1 10h2v1h-2zM5 10h8v1h-8zM14 10h2v1h-2zM1 11h3v1h-3zM5 11h11v1h-11zM2 12h2v1h-2zM5 12h11v1h-11zM3 13h1v1h-1zM5 13h11v1h-11zM3 14h13v1h-13zM4 15h12v1h-12zM4 16h11v1h-11zM5 17h10v1h-10zM5 18h10v1h-10zM6 19h8v1h-8zM6 20h8v1h-8z";

const ARROW_BORDER_PATH = "M0 0h1v1h-1zM0 1h2v1h-2zM0 2h1v1h-1zM2 2h1v1h-1zM0 3h1v1h-1zM3 3h1v1h-1zM0 4h1v1h-1zM4 4h1v1h-1zM0 5h1v1h-1zM5 5h1v1h-1zM0 6h1v1h-1zM6 6h1v1h-1zM0 7h1v1h-1zM7 7h1v1h-1zM0 8h1v1h-1zM8 8h1v1h-1zM0 9h1v1h-1zM9 9h1v1h-1zM0 10h1v1h-1zM6 10h6v1h-6zM0 11h1v1h-1zM3 11h1v1h-1zM6 11h1v1h-1zM0 12h1v1h-1zM2 12h1v1h-1zM4 12h1v1h-1zM7 12h1v1h-1zM0 13h2v1h-2zM5 13h1v1h-1zM8 13h1v1h-1zM0 14h1v1h-1zM5 14h1v1h-1zM8 14h1v1h-1zM6 15h1v1h-1zM9 15h1v1h-1zM6 16h1v1h-1zM9 16h1v1h-1zM7 17h2v1h-2z";
const ARROW_FILL_PATH = "M1 2h1v1h-1zM1 3h2v1h-2zM1 4h3v1h-3zM1 5h4v1h-4zM1 6h5v1h-5zM1 7h6v1h-6zM1 8h7v1h-7zM1 9h8v1h-8zM1 10h5v1h-5zM1 11h2v1h-2zM4 11h2v1h-2zM1 12h1v1h-1zM5 12h2v1h-2zM6 13h2v1h-2zM6 14h2v1h-2zM7 15h2v1h-2zM7 16h2v1h-2z";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Only enable on devices that have fine pointer (mouse / trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const readCurrentTheme = () => {
      const current = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
      return current || 'dark';
    };

    setTheme(readCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(readCurrentTheme());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      if (target) {
        const mode = target.getAttribute('data-cursor') as CursorMode;
        setCursorMode(mode);
        if (mode === 'project') setCursorLabel('VIEW');
        else if (mode === 'rotate') setCursorLabel('ROTATE');
        else if (mode === 'drag') setCursorLabel('DRAG');
        else setCursorLabel('');
      } else {
        const isClickable = (e.target as HTMLElement).closest('a, button, [role="button"], input, select, textarea, [tabindex="0"]');
        if (isClickable) {
          setCursorMode('hover');
          setCursorLabel('');
        } else {
          setCursorMode('default');
          setCursorLabel('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      observer.disconnect();
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isLight = theme === 'light';

  // Specification:
  // "Black cursor for White theme and White Cursor for Dark theme"
  const fill = isLight ? '#000000' : '#FFFFFF';
  const border = isLight ? '#FFFFFF' : '#000000';
  const shadowFilter = isLight 
    ? 'drop-shadow(0px 1px 1.5px rgba(0, 0, 0, 0.5))' 
    : 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.85))';

  return (
    <div
      ref={cursorRef}
      className={`windows-cursor-container mode-${cursorMode} theme-${theme}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 'var(--z-cursor)',
        willChange: 'transform',
        opacity: isVisible ? 1 : 0
      }}
      aria-hidden="true"
    >
      {cursorMode === 'hover' ? (
        // Exact Classic Windows 95/98/XP Pixel Pointing Hand
        // Hotspot is top of index finger (x=6 in 17x22 grid) -> offset by -7px X, 0px Y
        <div style={{ transform: 'translate(-7px, 0px)', display: 'flex', alignItems: 'flex-start' }}>
          <svg 
            width="20" 
            height="26" 
            viewBox="0 0 17 22" 
            shapeRendering="crispEdges"
            style={{ filter: shadowFilter }}
          >
            {/* Interior Fill */}
            <path d={HAND_FILL_PATH} fill={fill} />
            {/* Exterior Pixel Border */}
            <path d={HAND_BORDER_PATH} fill={border} />
          </svg>
        </div>
      ) : cursorMode === 'rotate' ? (
        // Classic Windows 4-Way Precision/Rotate Move Cursor
        <div style={{ transform: 'translate(-12px, -12px)', display: 'flex', alignItems: 'center' }}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            style={{ filter: shadowFilter }}
          >
            <path
              d="M12 1L8.5 4.5H11V8.5H7V6L3.5 9.5L7 13V10.5H11V14.5H8.5L12 18L15.5 14.5H13V10.5H17V13L20.5 9.5L17 6V8.5H13V4.5H15.5L12 1Z"
              fill={fill}
              stroke={border}
              strokeWidth="1.4"
              strokeLinejoin="miter"
            />
          </svg>
          {cursorLabel && (
            <span className="windows-cursor-badge" style={{ marginLeft: '4px' }}>
              {cursorLabel}
            </span>
          )}
        </div>
      ) : (
        // Exact Classic Windows 95/98/XP Pixel Arrow Cursor
        // Hotspot is tip at x=0, y=0
        <div style={{ transform: 'translate(0px, 0px)', display: 'flex', alignItems: 'flex-start' }}>
          <svg 
            width="17" 
            height="25" 
            viewBox="0 0 12 18" 
            shapeRendering="crispEdges"
            style={{ filter: shadowFilter }}
          >
            {/* Arrow Interior Fill */}
            <path d={ARROW_FILL_PATH} fill={fill} />
            {/* Arrow Pixel Border */}
            <path d={ARROW_BORDER_PATH} fill={border} />
          </svg>
          {cursorLabel && (
            <span className="windows-cursor-badge">
              {cursorLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
