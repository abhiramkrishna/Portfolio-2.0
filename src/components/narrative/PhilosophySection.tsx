import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Briefcase, Palette, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import './PolymathSection.css';

interface ExperienceStage {
  id: string;
  num: string;
  watermark: string;
  title: string;
  organization: string;
  role: string;
  location: string;
  period: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  bullets: string[];
  pos: 'above' | 'below';
  colLeftPercent: number;
  badgeTopPercent: number;
}

const EXPERIENCES: ExperienceStage[] = [
  {
    id: 'pib',
    num: '01',
    watermark: '1',
    title: 'Press Information Bureau',
    organization: 'Government of India',
    role: 'Intern',
    location: 'India',
    period: '2023',
    icon: Landmark,
    bullets: [
      'Government communications, information research & media ecosystem',
      'Exposure to public information systems and institutional workflows'
    ],
    pos: 'above',
    colLeftPercent: 13.33,
    badgeTopPercent: 74
  },
  {
    id: 'nbfc',
    num: '02',
    watermark: '2',
    title: 'NBFC — Private Sector',
    organization: 'Financial Services',
    role: 'Junior Assistant',
    location: 'India',
    period: '2024',
    icon: Briefcase,
    bullets: [
      'Financial operations, documentation & administrative workflows',
      'Experience within the financial services ecosystem'
    ],
    pos: 'below',
    colLeftPercent: 38.33,
    badgeTopPercent: 28
  },
  {
    id: 'al-midmar',
    num: '03',
    watermark: '3',
    title: 'Al Midmar Advertising & Design',
    organization: 'Creative Studio',
    role: 'Designer',
    location: 'UAE',
    period: '2025 — Present',
    icon: Palette,
    bullets: [
      'Visual design, creative development & digital design',
      'Working across branding, advertising and multidisciplinary creative projects'
    ],
    pos: 'above',
    colLeftPercent: 63.33,
    badgeTopPercent: 74
  },
  {
    id: 'independent',
    num: '04',
    watermark: '4',
    title: 'Independent / Side Projects',
    organization: 'Self-Directed Lab',
    role: 'AI Researcher & Tester · Front-End Web Designer',
    location: 'Remote',
    period: 'Ongoing',
    icon: Cpu,
    bullets: [
      'Independent AI research, experimentation & model testing',
      'Front-end web design and interactive digital experiences',
      'Self-directed research beyond formal academic/industry pathways',
      'Exploring the intersection of AI × Design × Technology × Economics'
    ],
    pos: 'below',
    colLeftPercent: 86.67,
    badgeTopPercent: 28
  }
];

// Continuous cubic bezier path matching the 4 nodes
const WAVE_PATH_DATA = 'M 0,250 C 70,250 100,370 160,370 C 260,370 360,140 460,140 C 560,140 660,370 760,370 C 850,370 950,140 1040,140 C 1110,140 1150,250 1200,250';

export const PhilosophySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);
  const beaconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wavePath = wavePathRef.current;
    if (!section || !wavePath) return;

    // Calculate total path length for GSAP stroke animation
    const pathLength = wavePath.getTotalLength();
    gsap.set(wavePath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    const ctx = gsap.context(() => {
      // 1. Draw wave path on section enter
      gsap.to(wavePath, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: 'power2.inOut',
        scrollTrigger: undefined
      });

      // 2. Entrance pop for badges
      gsap.fromTo(
        '.polymath-badge',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.16,
          duration: 0.8,
          ease: 'back.out(2)',
          delay: 0.3
        }
      );

      // 3. Slide in cards with slight offset
      gsap.fromTo(
        '.polymath-desktop-wrapper .polymath-card',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.5
        }
      );

      // 4. Watermarks soft fade in
      gsap.fromTo(
        '.polymath-watermark-num',
        { opacity: 0, scale: 0.85 },
        {
          opacity: 0.08,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          delay: 0.6
        }
      );

      // 5. Continuous traveling beacon along the wave curve
      if (beaconRef.current) {
        const beaconObj = { progress: 0 };
        gsap.to(beaconObj, {
          progress: 1,
          repeat: -1,
          duration: 7,
          ease: 'none',
          onUpdate: () => {
            if (!wavePath || !beaconRef.current) return;
            const currentPoint = wavePath.getPointAtLength(beaconObj.progress * pathLength);
            // Translate SVG point (1200 x 500) into container percent
            const leftPct = (currentPoint.x / 1200) * 100;
            const topPct = (currentPoint.y / 500) * 100;
            beaconRef.current.style.left = `${leftPct}%`;
            beaconRef.current.style.top = `${topPct}%`;
          }
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);

    // Subtle GSAP pulse on selected badge
    const badges = document.querySelectorAll('.polymath-badge');
    if (badges[idx]) {
      gsap.fromTo(
        badges[idx],
        { scale: 1.25 },
        { scale: 1.15, duration: 0.4, ease: 'elastic.out(1, 0.4)' }
      );
    }
  };

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="polymath-section"
      aria-label="Polymath Experience Trajectory"
    >
      <div className="polymath-bg-glow" />

      <div className="container">
        {/* Header matching the modern reference layout */}
        <div className="polymath-header">

          <h2 className="polymath-title">
            Experience<span className="polymath-title-dot">.</span>
          </h2>
        </div>

        {/* Desktop Sinusoidal Wave Timeline (>= 1024px) */}
        <div className="polymath-desktop-wrapper">
          {/* SVG Canvas with connecting wave curve */}
          <svg
            className="polymath-svg-canvas"
            viewBox="0 0 1200 500"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="waveLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.3" />
                <stop offset="40%" stopColor="var(--accent-cyan)" stopOpacity="1" />
                <stop offset="80%" stopColor="var(--accent-cyan)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Base subtle guide line */}
            <path
              d={WAVE_PATH_DATA}
              className="polymath-wave-base"
              strokeWidth="2"
              fill="none"
            />

            {/* Animated primary neon wave line */}
            <path
              ref={wavePathRef}
              d={WAVE_PATH_DATA}
              className="polymath-wave-active"
              stroke="url(#waveLineGradient)"
              strokeWidth="3.5"
              fill="none"
            />
          </svg>

          {/* Traveling illuminated beacon dot */}
          <div ref={beaconRef} className="polymath-beacon" aria-hidden="true" />

          {/* 4 Interactive Columns placed along the wave curve */}
          <div className="polymath-desktop-nodes">
            {EXPERIENCES.map((item, idx) => {
              const IconComponent = item.icon;
              const isActive = activeStage === idx;

              return (
                <div
                  key={item.id}
                  className={`polymath-node-col pos-${item.pos}`}
                  style={{ left: `${item.colLeftPercent}%` }}
                >
                  {/* Card positioned either above or below */}
                  <div
                    className={`polymath-card ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStageSelect(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') handleStageSelect(idx);
                    }}
                    aria-label={`${item.title} — ${item.role}`}
                  >
                    {/* Watermark numeral 1, 2, 3, 4 */}
                    <div className="polymath-watermark-num">{item.watermark}</div>

                    <div className="polymath-card-header">
                      <div className="polymath-meta-pill">
                        <span>{item.role}</span>
                        <span>·</span>
                        <span>{item.period}</span>
                      </div>
                      <h3 className="polymath-card-title">{item.title}</h3>
                      <div className="polymath-card-role">{item.organization}</div>
                    </div>


                  </div>

                  {/* Connecting stem between card and badge */}
                  <div className="polymath-stem" />

                  {/* Glowing Hexagonal Badge sitting directly on the wave curve */}
                  <div className="polymath-badge-anchor">
                    <button
                      type="button"
                      className={`polymath-badge ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleStageSelect(idx)}
                      aria-label={`Select stage ${item.num}: ${item.title}`}
                    >
                      <IconComponent size={22} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (< 1024px) */}
        <div className="polymath-mobile-wrapper">
          <div className="polymath-mobile-spine" />

          {EXPERIENCES.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeStage === idx;

            return (
              <div
                key={item.id}
                className="polymath-mobile-item"
                onClick={() => handleStageSelect(idx)}
              >
                <div className={`polymath-mobile-badge ${isActive ? 'is-active' : ''}`}>
                  <IconComponent size={20} />
                </div>

                <div className={`polymath-mobile-card ${isActive ? 'is-active' : ''}`}>
                  <div className="polymath-watermark-num">{item.watermark}</div>

                  <div className="polymath-card-header">
                    <div className="polymath-meta-pill">
                      <span>{item.role}</span>
                      <span>·</span>
                      <span>{item.period}</span>
                    </div>
                    <h3 className="polymath-card-title">{item.title}</h3>
                    <div className="polymath-card-role">{item.organization}</div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
