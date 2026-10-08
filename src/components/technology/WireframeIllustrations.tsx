import React from 'react';

/**
 * 1. WireframeHelicalSpring
 * Directly mirrors the helical coil / spiral wireframe from Card 1 of the reference image.
 */
export const WireframeHelicalSpring: React.FC<{ className?: string }> = ({ className = '' }) => {
  const levels = [0, 18, 36, 54, 72, 90, 108, 126, 144, 162];
  return (
    <svg viewBox="0 0 200 240" fill="none" className={`wireframe-illustration wf-coil ${className}`}>
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.85">
        {levels.map((y, idx) => {
          const rx = 64 - Math.sin(idx * 0.35) * 6;
          const ry = 18;
          const cy = 35 + y;
          const op = 0.35 + (idx / levels.length) * 0.55;
          return (
            <ellipse
              key={idx}
              cx="100"
              cy={cy}
              rx={rx}
              ry={ry}
              strokeDasharray={idx % 2 === 0 ? 'none' : '3 1'}
              opacity={op}
            />
          );
        })}
        {/* Sinusoidal spiral thread weaving down the sides */}
        <path
          d="M 36,35 C 36,65 164,75 164,105 C 164,135 36,145 36,175 C 36,205 164,215 164,225"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M 164,35 C 164,65 36,75 36,105 C 36,135 164,145 164,175 C 164,205 36,215 36,225"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.45"
        />
      </g>
    </svg>
  );
};

/**
 * 2. WireframeSphereOnTorus
 * Directly mirrors the sphere resting on a torus / concentric dish from Card 2 of the reference image.
 */
export const WireframeSphereOnTorus: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 220 200" fill="none" className={`wireframe-illustration wf-sphere-torus ${className}`}>
      <g stroke="currentColor" strokeWidth="1.2">
        {/* Base Concentric Torus / Dish (Isometric Ellipses) */}
        <ellipse cx="140" cy="145" rx="70" ry="38" opacity="0.3" strokeDasharray="3 3" />
        <ellipse cx="140" cy="138" rx="64" ry="34" opacity="0.6" />
        <ellipse cx="140" cy="130" rx="55" ry="29" opacity="0.8" />
        <ellipse cx="140" cy="122" rx="46" ry="24" opacity="0.95" />
        
        {/* Collar cylindrical walls */}
        <line x1="76" y1="130" x2="76" y2="145" opacity="0.7" />
        <line x1="204" y1="130" x2="204" y2="145" opacity="0.7" />
        <line x1="94" y1="122" x2="94" y2="138" opacity="0.7" />
        <line x1="186" y1="122" x2="186" y2="138" opacity="0.7" />

        {/* 3D Wireframe Sphere nestled on top */}
        <g transform="translate(140, 82)">
          {/* Sphere perimeter */}
          <circle cx="0" cy="0" r="38" opacity="0.95" strokeWidth="1.4" />
          {/* Latitude rings */}
          <ellipse cx="0" cy="0" rx="38" ry="14" opacity="0.7" />
          <ellipse cx="0" cy="-16" rx="34" ry="11" opacity="0.5" strokeDasharray="2 2" />
          <ellipse cx="0" cy="16" rx="34" ry="11" opacity="0.5" />
          {/* Longitude meridian rings */}
          <ellipse cx="0" cy="0" rx="14" ry="38" opacity="0.7" />
          <ellipse cx="0" cy="0" rx="27" ry="38" opacity="0.5" strokeDasharray="3 2" />
          {/* Center pole coordinate */}
          <circle cx="0" cy="-38" r="1.5" fill="currentColor" />
          <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 3. WireframeFloatingCubes
 * Directly mirrors the detached floating isometric cube breaking away from Card 3 of the reference image.
 */
export const WireframeFloatingCubes: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 220 200" fill="none" className={`wireframe-illustration wf-floating-cubes ${className}`}>
      <g stroke="currentColor" strokeWidth="1.2">
        {/* Floating Detached Cube (Top-Left) */}
        <g transform="translate(42, 28)">
          {/* Top face */}
          <path d="M 28,0 L 52,14 L 28,28 L 4,14 Z" opacity="0.95" strokeWidth="1.4" />
          {/* Left face */}
          <path d="M 4,14 L 28,28 V 56 L 4,42 Z" opacity="0.85" />
          {/* Right face */}
          <path d="M 28,28 L 52,14 V 42 L 28,56 Z" opacity="0.9" />
          {/* Hidden back edges */}
          <path d="M 4,14 V 42 M 28,0 V 28" strokeDasharray="2 2" opacity="0.35" />
          {/* Motion projection trail lines to base block */}
          <line x1="28" y1="56" x2="68" y2="95" strokeDasharray="2 3" opacity="0.4" />
          <line x1="52" y1="42" x2="92" y2="81" strokeDasharray="2 3" opacity="0.3" />
        </g>

        {/* Base Interlocking Isometric Block Geometry */}
        <g transform="translate(90, 80)">
          {/* Recessed cavity step */}
          <path d="M 35,0 L 70,20 L 70,60 L 35,40 Z" opacity="0.7" />
          <path d="M 0,20 L 35,40 L 35,80 L 0,60 Z" opacity="0.85" />
          <path d="M 35,40 L 70,60 L 70,100 L 35,80 Z" opacity="0.9" />
          {/* Lower right base extensions */}
          <path d="M 70,60 L 105,40 L 105,80 L 70,100 Z" opacity="0.75" />
          <path d="M 70,20 L 105,40 L 70,60 L 35,40 Z" opacity="0.6" strokeDasharray="3 2" />
          {/* Floor grid anchor ticks */}
          <line x1="0" y1="60" x2="-20" y2="72" strokeDasharray="1 3" opacity="0.3" />
          <line x1="70" y1="100" x2="70" y2="116" strokeDasharray="1 3" opacity="0.3" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 4. WireframeInterlockingStructure
 * Faithfully mirrors the grand isometric interlocking puzzle structure in the Black Card of the reference image!
 */
export const WireframeInterlockingStructure: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={`wireframe-illustration wf-interlocking ${className}`}>
      <g stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        {/* Central Vertical Pillar */}
        {/* Top Face */}
        <polygon points="160,25 195,45 160,65 125,45" fill="rgba(255,255,255,0.03)" />
        {/* Left Face */}
        <polygon points="125,45 160,65 160,165 125,145" fill="rgba(255,255,255,0.06)" />
        {/* Right Face */}
        <polygon points="160,65 195,45 195,145 160,165" fill="rgba(255,255,255,0.02)" />

        {/* Lower Left Transverse Cantilever Block */}
        {/* Top Face */}
        <polygon points="90,125 125,105 160,125 125,145" fill="rgba(255,255,255,0.04)" />
        {/* Front Left Face */}
        <polygon points="90,125 125,145 125,195 90,175" fill="rgba(255,255,255,0.07)" />
        {/* Front Right Face */}
        <polygon points="125,145 160,125 160,175 125,195" fill="rgba(255,255,255,0.03)" />

        {/* Lower Right Cantilever Block */}
        {/* Top Face */}
        <polygon points="160,145 205,119 240,139 195,165" fill="rgba(255,255,255,0.04)" />
        {/* Front Left Face */}
        <polygon points="160,145 195,165 195,215 160,195" fill="rgba(255,255,255,0.08)" />
        {/* Front Right Face */}
        <polygon points="195,165 240,139 240,189 195,215" fill="rgba(255,255,255,0.03)" />

        {/* Rear Interlocking Cross-Beam */}
        {/* Top Face */}
        <polygon points="195,85 235,62 255,73 215,96" opacity="0.8" fill="rgba(255,255,255,0.02)" />
        {/* Side Face */}
        <polygon points="215,96 255,73 255,123 215,146" opacity="0.8" fill="rgba(255,255,255,0.05)" />

        {/* Far Left Rear Wing */}
        <polygon points="70,95 105,75 125,86 90,106" opacity="0.75" />
        <polygon points="70,95 90,106 90,156 70,145" opacity="0.75" />

        {/* Key Coordinate Vertex Nodes for High-Tech Blueprint Polish */}
        <circle cx="160" cy="25" r="2.2" fill="#ffffff" />
        <circle cx="195" cy="45" r="1.8" fill="#ffffff" />
        <circle cx="125" cy="45" r="1.8" fill="#ffffff" />
        <circle cx="160" cy="65" r="2" fill="#ffffff" />
        <circle cx="125" cy="195" r="2" fill="#ffffff" />
        <circle cx="195" cy="215" r="2" fill="#ffffff" />
        <circle cx="90" cy="175" r="1.8" fill="#ffffff" />
        <circle cx="240" cy="189" r="1.8" fill="#ffffff" />

        {/* Coordinate Dimension Ticks */}
        <g opacity="0.4" strokeWidth="0.8" strokeDasharray="2 3">
          <line x1="90" y1="175" x2="60" y2="192" />
          <line x1="240" y1="189" x2="270" y2="206" />
          <line x1="160" y1="25" x2="160" y2="8" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 5. WireframeSteppedStaircase
 * Directly mirrors the stepped geometric block in Card 5 of the reference image.
 */
export const WireframeSteppedStaircase: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 160 140" fill="none" className={`wireframe-illustration wf-stepped ${className}`}>
      <g stroke="currentColor" strokeWidth="1.3">
        {/* Stepped 4-tier isometric staircase */}
        {/* Tier 1 (Lowest) */}
        <path d="M 20,110 L 45,95 L 65,107 L 40,122 Z" opacity="0.8" />
        <path d="M 20,110 L 40,122 V 132 L 20,120 Z" opacity="0.9" />
        <path d="M 40,122 L 65,107 V 117 L 40,132 Z" opacity="0.75" />

        {/* Tier 2 */}
        <path d="M 45,95 L 70,80 L 90,92 L 65,107 Z" opacity="0.85" />
        <path d="M 45,95 L 65,107 V 117 L 45,105 Z" opacity="0.9" />

        {/* Tier 3 */}
        <path d="M 70,80 L 95,65 L 115,77 L 90,92 Z" opacity="0.9" />
        <path d="M 70,80 L 90,92 V 102 L 70,90 Z" opacity="0.95" />

        {/* Tier 4 (Top Peak) */}
        <path d="M 95,65 L 120,50 L 140,62 L 115,77 Z" opacity="0.95" strokeWidth="1.5" />
        <path d="M 95,65 L 115,77 V 87 L 95,75 Z" opacity="0.95" />
        <path d="M 115,77 L 140,62 V 72 L 115,87 Z" opacity="0.85" />

        {/* Hidden back / isometric grid ticks */}
        <line x1="20" y1="120" x2="0" y2="132" strokeDasharray="1 3" opacity="0.4" />
        <line x1="140" y1="62" x2="155" y2="53" strokeDasharray="1 3" opacity="0.4" />
        <circle cx="120" cy="50" r="1.5" fill="currentColor" />
        <circle cx="20" cy="110" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
};
