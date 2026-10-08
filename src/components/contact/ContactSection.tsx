import React, { useLayoutEffect, useRef } from 'react';
import { PROFILE } from '../../data/profile';
import './ContactSection.css';

// SVG imports from /src/assets
import instagramSvg from '../../assets/instagram.svg';
import linkedinSvg from '../../assets/Linkedin.svg';
import githubSvg from '../../assets/github.svg';

type Orientation = 'up' | 'down' | 'flat';

interface Greeting {
  area: string;      // grid-area name in ContactSection.css
  text: string;
  lang: string;
  orientation?: Orientation;
  latin?: boolean;   // tighter tracking (never applied to cursive scripts like Arabic)
}

const GREETINGS: Greeting[] = [
  { area: 'hello', text: 'hello', lang: 'en', orientation: 'up', latin: true },
  { area: 'nam', text: 'नमस्ते', lang: 'hi', orientation: 'down' },
  { area: 'zdr', text: 'Здравствуйте', lang: 'ru', orientation: 'down', latin: true },
  { area: 'bonj', text: 'Bonjour', lang: 'fr', latin: true },
  { area: 'hola', text: 'Hola', lang: 'es', latin: true },
  { area: 'ola', text: 'Olá', lang: 'pt', latin: true },
  { area: 'jp', text: 'こんにちは', lang: 'ja' },
  { area: 'ciao', text: 'Ciao', lang: 'it', latin: true },
  { area: 'zh', text: '你好', lang: 'zh' },
  { area: 'greek', text: 'Γεια σου', lang: 'el', latin: true },
  { area: 'tamil', text: 'வணக்கம்', lang: 'ta' },
  { area: 'kan', text: 'ನಮಸ್ಕಾರ', lang: 'kn' },
  { area: 'ar', text: 'مرحبا', lang: 'ar' },
  { area: 'tel', text: 'నమస్కారం', lang: 'te' },
  { area: 'mal', text: 'നമസ്കാരം', lang: 'ml' },
];

/** Breathing room left inside each cell after fitting (1 = edge to edge). */
const FIT_RATIO = 0.9;
const MEASURE_SIZE = 100;

/** Scales every `.greeting-text` so it fills its own grid cell as fully as possible. */
const useFitGreetings = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    const fit = () => {
      const cells = container.querySelectorAll<HTMLElement>('.greeting-cell');
      cells.forEach((cell) => {
        const word = cell.firstElementChild as HTMLElement | null;
        if (!word) return;

        // Measure at a fixed reference size (offset* ignores hover transforms)
        word.style.fontSize = `${MEASURE_SIZE}px`;
        const w = word.offsetWidth;
        const h = word.offsetHeight;
        if (!w || !h) return;

        const scale = Math.min(cell.clientWidth / w, cell.clientHeight / h) * FIT_RATIO;
        word.style.fontSize = `${Math.max(8, MEASURE_SIZE * scale)}px`;
      });
      container.classList.add('is-fitted');
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    fit();
    // Re-fit once web fonts arrive — glyph widths change after the swap
    document.fonts?.ready.then(schedule);

    const observer = new ResizeObserver(schedule);
    observer.observe(container);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [containerRef]);
};

export const ContactSection: React.FC = () => {
  const greetingsRef = useRef<HTMLDivElement>(null);
  useFitGreetings(greetingsRef);

  return (
    <section id="contact" className="contact-wrapper" aria-label="Contact and Communications">
      <div className="contact-card">

        {/* Left Section - Greetings */}
        <div className="contact-left" ref={greetingsRef} aria-hidden="true">
          {GREETINGS.map(({ area, text, lang, orientation = 'flat', latin }) => (
            <div
              key={area}
              className={`greeting-cell is-${orientation}`}
              style={{ gridArea: area }}
            >
              <span className={`greeting-text${latin ? ' is-latin' : ''}`} lang={lang}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Right Section - Content */}
        <div className="contact-right">
          <div className="contact-right-inner">
            <h2 className="contact-title">Lets Be in Touch</h2>

            {/* Email Row */}
            <div className="contact-group">
              <span className="contact-label">Drop me a line</span>
              <div className="email-display-pill">
                <span className="email-text">{PROFILE.email}</span>
                <button
                  type="button"
                  className="send-mail-pill"
                  onClick={() => {
                    window.location.href = `mailto:${PROFILE.email}`;
                  }}
                >
                  Send Me Mail
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-group">
              <span className="contact-label">Find me on</span>
              <div className="social-links-stack">
                <a
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link instagram"
                  aria-label="Instagram"
                >
                  <img src={instagramSvg} alt="" className="social-icon-img" />
                </a>

                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link github"
                  aria-label="GitHub"
                >
                  <img src={githubSvg} alt="" className="social-icon-img" />
                </a>

                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link linkedin"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinSvg} alt="" className="social-icon-img" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
