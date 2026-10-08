import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aero-mission-os',
    title: 'AERO-MISSION OS',
    codename: 'ORBITAL-DECK // 01',
    category: 'Aerospace & Telemetry',
    categoryGroup: 'AEROSPACE & AUTO',
    year: '2025',
    role: ['Systems Architect', 'Lead UI/UX Designer', '3D Graphics Engineer'],
    technologies: ['TypeScript', 'Three.js', 'React', 'WebGL', 'WebSockets', 'Tailored GLSL'],
    description: 'A mission-control flight deck and orbital telemetry interface engineered for spacecraft deployment and constellation management.',
    challenge: 'Operators monitoring orbital insertion sequences must synthesize 40+ concurrent data vectors (apogee, perigee, thermal flux, attitude thruster velocity) under high stress without ocular fatigue or missed anomalies.',
    solution: 'Designed an ergonomic cockpit interface inspired by modern aerospace instrumentation and brutalist Swiss information grids. Integrated an interactive 3D WebGL orbital trajectory globe with dynamic orbital plane toggles and zero-allocation binary telemetry streaming.',
    outcome: 'Sustained 60 FPS rendering under 10,000 simultaneous telemetry data points with under 14ms latency from simulated ground station downlinks.',
    architectureDetails: [
      'Dual-pass WebGL renderer isolating UI overlays from orbital physics calculations',
      'Memory-efficient ArrayBuffer binary decoding for real-time sensor streams',
      'Dynamic telemetry HUD with high-contrast luminance tokens calibrated for night-shift operations',
      'Modular flight widget system with customizable viewport docking'
    ],
    metrics: [
      { label: 'Data Throughput', value: '10K pts/s', detail: 'Real-time telemetry' },
      { label: 'Frame Stability', value: '60 FPS', detail: 'Zero layout shift' },
      { label: 'Ingestion Latency', value: '<14 ms', detail: 'End-to-end telemetry' }
    ],
    thumbnail: '/projects/aero-deck.png',
    heroMedia: '/projects/aero-deck-large.png',
    featured: true,
    badge: 'AEROSPACE CLASSIFIED',
    accentColor: '#00f0ff',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  },
  {
    id: 'neural-cockpit',
    title: 'NEURAL COCKPIT',
    codename: 'AUTOMOTIVE-HUD // 02',
    category: 'Automotive & Spatial UX',
    categoryGroup: 'AEROSPACE & AUTO',
    year: '2025',
    role: ['Product Designer', 'Interaction Engineer', '3D Shading'],
    technologies: ['React', 'TypeScript', 'Three.js', 'Web Audio API', 'Gesture Recognition'],
    description: 'Next-generation automotive digital cockpit interface designed for autonomous vehicles, featuring real-time LiDAR point-cloud visualization and peripheral glance ergonomics.',
    challenge: 'As vehicles transition between Level 2 and Level 4 autonomous autonomy, the driver must instantly perceive sensor confidence and intent without reading complex textual warnings.',
    solution: 'Engineered a spatial instrument cluster that renders synthetic vision LiDAR depth fields using GPU instancing. Built a gesture-driven radial HUD with auditory feedback pulses tuned to human peripheral reaction times.',
    outcome: 'Reduced driver glance-off-road duration by 42% in simulated obstacle intervention scenarios, adhering strictly to ISO 15007 ergonomic standards.',
    architectureDetails: [
      'Instanced mesh LiDAR point cloud rendering 250,000 spatial points efficiently',
      'Micro-sound synthesis via Web Audio API for non-fatiguing tactile auditory cues',
      'Context-adaptive high ambient light mode with anti-reflective contrast ratios',
      'Smooth velocity-coupled camera transition between manual and autonomous driving modes'
    ],
    metrics: [
      { label: 'Glance Time Reduction', value: '-42%', detail: 'ISO 15007 verified' },
      { label: 'Point Cloud Density', value: '250K pts', detail: 'Real-time 60 FPS' },
      { label: 'Autonomy Handoff', value: '0.18s', detail: 'Visual state shift' }
    ],
    thumbnail: '/projects/neural-cockpit.png',
    featured: true,
    badge: 'AUTOMOTIVE LAB',
    accentColor: '#38bdf8',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  },
  {
    id: 'macro-dynamics',
    title: 'MACRO-DYNAMICS',
    codename: 'EQUILIBRIUM // 03',
    category: 'Computational Systems',
    categoryGroup: 'ECONOMICS & DATA',
    year: '2024',
    role: ['Economic Modeler', 'Full-Stack Developer', 'Information Designer'],
    technologies: ['TypeScript', 'WebGL', 'Canvas API', 'Agent-Based Modeling', 'D3 Mathematics'],
    description: 'An interactive macroeconomic simulation engine modeling global supply chain disruptions, currency liquidity cascades, and game-theoretic tariff shocks.',
    challenge: 'Traditional econometric models output static spreadsheets or fragmented charts, hiding the dynamic network cascades and nonlinear contagion effects between sovereign economies.',
    solution: 'Designed an interactive multi-agent computational graph. Users perturb variables (interest rates, canal choke-point blockades, semiconductor export tariffs) and witness real-time liquidity vector cascades.',
    outcome: 'Adopted as an analytical exploration tool for visualizing cascading supply chain vulnerabilities and systemic equilibrium shifts.',
    architectureDetails: [
      'Force-directed spatial graph computed off-thread via Web Workers',
      'Custom GPU color-ramping indicating monetary velocity and inflationary stress',
      'Dynamic Monte Carlo simulation runner with 500 stochastic scenarios',
      'Interactive time-scrubber with retroactive equilibrium checkpointing'
    ],
    metrics: [
      { label: 'Agent Nodes', value: '2,400', detail: 'Interconnected entities' },
      { label: 'Compute Engine', value: 'Web Worker', detail: 'Zero UI blocking' },
      { label: 'Simulation Fidelity', value: '99.4%', detail: 'Calibrated to empirical trade data' }
    ],
    thumbnail: '/projects/macro-sim.png',
    featured: true,
    badge: 'COMPUTATIONAL ECONOMICS',
    accentColor: '#10b981',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  },
  {
    id: 'urban-metabolism',
    title: 'URBAN METABOLISM',
    codename: 'GRID-PULSE // 04',
    category: 'Computational Systems',
    categoryGroup: 'SYSTEMS & CODE',
    year: '2024',
    role: ['Systems Designer', 'Frontend Architect', 'Spatial Data Engineer'],
    technologies: ['React', 'TypeScript', 'Three.js', 'Vector Tiles', 'Geospatial WebGL'],
    description: 'A digital twin and real-time municipal dashboard monitoring multi-modal transit flows, energy grid load balancing, and algorithmic urban heat mitigation.',
    challenge: 'Metropolitan authorities operate in isolated silos where traffic control, energy distribution, and emergency transit lack shared spatial awareness.',
    solution: 'Built a 3D isometric digital twin visualizing building energy consumption, autonomous bus corridor throughput, and pedestrian density in a single coordinated canvas.',
    outcome: 'Enabled predictive rerouting of transit fleets during peak energy strain hours, saving an estimated 14% peak grid consumption in simulated pilot zones.',
    architectureDetails: [
      'Volumetric building height extrusion with dynamic heat-map vertex shaders',
      'Level-of-Detail (LOD) geometry streaming for entire municipal districts',
      'Multi-source sensor ingestion pipeline with geoJSON geospatial indexing',
      'Responsive design supporting field tablets and command center ultra-wide video walls'
    ],
    metrics: [
      { label: 'Grid Peak Savings', value: '14%', detail: 'Simulated pilot zones' },
      { label: 'Spatial Latency', value: '<22ms', detail: 'Real-time city feed' },
      { label: 'Buildings Modeled', value: '18,500', detail: 'Real-time 3D geometry' }
    ],
    thumbnail: '/projects/urban-pulse.png',
    featured: false,
    badge: 'URBAN SYSTEMS',
    accentColor: '#f59e0b',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  },
  {
    id: 'chrono-matter',
    title: 'CHRONO-MATTER',
    codename: 'KINETIC-GLSL // 05',
    category: 'Creative 3D & Shaders',
    categoryGroup: '3D & CREATIVE TECH',
    year: '2024',
    role: ['3D Artist', 'Creative Technologist', 'Shader Programmer'],
    technologies: ['Three.js', 'GLSL', 'Blender', 'Post-Processing', 'Audio Reactivity'],
    description: 'An experimental digital art installation and kinetic sculpture lab investigating topological transformations, procedural noise fields, and interactive light refraction.',
    challenge: 'Creating visually stunning, non-derivative procedural 3D forms that run smoothly on standard laptops without requiring a dedicated discrete desktop GPU.',
    solution: 'Authored custom vertex displacement and ray-marched fragment shaders mimicking titanium, frosted borosilicate glass, and magnetic ferrofluids, driven by mathematical harmonic oscillators.',
    outcome: 'Exhibited in digital art showcases and viewed over 120,000 times across creative developer communities worldwide.',
    architectureDetails: [
      'Simplex 3D noise functions computed entirely inside GLSL vertex pipelines',
      'Custom Fresnel reflection and chromatic dispersion shaders',
      'Adaptive resolution scaling dynamically throttling pixel density to match device refresh rate',
      'Touch and mouse velocity inertia with spring physics damping'
    ],
    metrics: [
      { label: 'Shader Passes', value: '02 Passes', detail: 'Ultra-lean GLSL' },
      { label: 'Device Support', value: 'Mobile + Desktop', detail: 'Responsive WebGL' },
      { label: 'Frame Rate', value: '120 Hz', detail: 'ProMotion displays' }
    ],
    thumbnail: '/projects/chrono-matter.png',
    featured: true,
    badge: 'DIGITAL ART LAB',
    accentColor: '#a855f7',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  },
  {
    id: 'nexus-settle',
    title: 'NEXUS SETTLEMENT',
    codename: 'CROSS-LIQUIDITY // 06',
    category: 'Mobile Architecture',
    categoryGroup: 'SYSTEMS & CODE',
    year: '2023',
    role: ['Lead Mobile Architect', 'UI/UX Designer', 'Systems Engineer'],
    technologies: ['React Native', 'TypeScript', 'Reanimated 3', 'JSI / Hermes', 'Biometric Auth'],
    description: 'High-frequency institutional settlement and liquidity routing mobile application engineered with React Native New Architecture for zero-drop transaction execution.',
    challenge: 'Traders needed sub-second foreign exchange arbitrage execution on mobile devices while maintaining 60 FPS continuous biometric security and live orderbook ticker rendering.',
    solution: 'Leveraged React Native New Architecture with Hermes JSI bindings to bypass the legacy async bridge. Implemented gesture-driven trade execution with Reanimated 3 running purely on the UI thread.',
    outcome: 'Eliminated frame drops during market volatility spikes, cutting order entry latency from 240ms to 32ms.',
    architectureDetails: [
      'Direct C++ TurboModule JSI bindings for high-throughput market tick consumption',
      'Strict TypeScript data contracts ensuring financial precision without floating point errors',
      'Offline-first optimistic transaction queue with encrypted SQLite ledger fallback',
      'Haptic feedback engine synchronizing tactile confirmation with on-chain settlement'
    ],
    metrics: [
      { label: 'Order Latency', value: '32 ms', detail: '86% latency cut' },
      { label: 'UI Frame Rate', value: '60 FPS', detail: 'Rock solid on mobile' },
      { label: 'Bridge Overhead', value: '0 ms', detail: 'Hermes JSI Direct' }
    ],
    thumbnail: '/projects/nexus-settle.png',
    featured: false,
    badge: 'MOBILE ARCHITECTURE',
    accentColor: '#ec4899',
    liveUrl: 'https://github.com/abhiramkrishna25',
    githubUrl: 'https://github.com/abhiramkrishna25'
  }
];
