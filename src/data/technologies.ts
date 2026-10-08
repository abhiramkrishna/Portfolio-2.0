import type { TechnologyItem } from '../types';

export const TECHNOLOGIES: TechnologyItem[] = [
  // DEVELOPMENT
  {
    id: 'ts',
    name: 'TypeScript',
    category: 'Development',
    level: 'Core Mastery',
    experience: '5+ Yrs',
    roleInWorkflow: 'Strict mathematical type safety across cross-platform clients, telemetry schemas, and modular systems.',
    tags: ['Strict Typing', 'Generics', 'AST Analysis', 'Contracts']
  },
  {
    id: 'react',
    name: 'React 19 / Modern React',
    category: 'Development',
    level: 'Core Mastery',
    experience: '6+ Yrs',
    roleInWorkflow: 'High-order state machines, concurrent rendering, micro-frontends, and custom hook architectures.',
    tags: ['Concurrent Mode', 'Hooks', 'Context Architecture', 'Virtual DOM']
  },
  {
    id: 'rn',
    name: 'React Native (New Arch)',
    category: 'Development',
    level: 'Architectural',
    experience: '4+ Yrs',
    roleInWorkflow: 'Fabric rendering engine, TurboModules, JSI C++ bridges, and Reanimated 3 UI-thread gesture execution.',
    tags: ['Fabric', 'TurboModules', 'Hermes JSI', 'Reanimated 3']
  },
  {
    id: 'node',
    name: 'Node.js & WebSockets',
    category: 'Development',
    level: 'Advanced',
    experience: '5+ Yrs',
    roleInWorkflow: 'High-throughput event streaming, telemetry daemons, and microservices.',
    tags: ['Async I/O', 'Binary Streams', 'WebSockets', 'Telemetry']
  },

  // CREATIVE TECHNOLOGY
  {
    id: 'threejs',
    name: 'Three.js / WebGL',
    category: 'Creative Technology',
    level: 'Core Mastery',
    experience: '4+ Yrs',
    roleInWorkflow: 'Hardware-accelerated 3D graphics, procedural scene construction, instanced rendering, and camera kinematics.',
    tags: ['WebGL 2.0', 'BufferGeometry', 'InstancedMesh', 'PBR Shading']
  },
  {
    id: 'glsl',
    name: 'GLSL Custom Shaders',
    category: 'Creative Technology',
    level: 'Advanced',
    experience: '3+ Yrs',
    roleInWorkflow: 'Writing vertex displacement, ray-marched distance fields, Fresnel rim effects, and procedural noise on the GPU.',
    tags: ['Fragment Shaders', 'Vertex Displacement', 'Simplex Noise', 'Ray Marching']
  },
  {
    id: 'webaudio',
    name: 'Web Audio API',
    category: 'Creative Technology',
    level: 'Advanced',
    experience: '3+ Yrs',
    roleInWorkflow: 'Generative sonic feedback, telemetry frequency modulation, and spatial haptic audio cues.',
    tags: ['Oscillators', 'Biquad Filters', 'Spatial Panning', 'Sound Design']
  },
  {
    id: 'canvas-api',
    name: 'Hardware Canvas & D3',
    category: 'Creative Technology',
    level: 'Core Mastery',
    experience: '5+ Yrs',
    roleInWorkflow: 'High-density computational data graphing, particle vector fields, and HUD telemetry overlays.',
    tags: ['Vector Mathematics', 'Particle Systems', 'Projection Matrices']
  },

  // DESIGN SYSTEMS
  {
    id: 'figma',
    name: 'Figma & Design Tokens',
    category: 'Design Systems',
    level: 'Core Mastery',
    experience: '6+ Yrs',
    roleInWorkflow: 'Component architectures, mathematical spacing scales, token automation, and high-fidelity interactive prototyping.',
    tags: ['Design Tokens', 'Variables', 'Autolayout Systems', 'Interactive Prototyping']
  },
  {
    id: 'swiss-typo',
    name: 'Information Architecture & Swiss Typo',
    category: 'Design Systems',
    level: 'Architectural',
    experience: '5+ Yrs',
    roleInWorkflow: 'Structuring ultra-dense telemetry, cockpit ergonomics, clear cognitive hierarchies, and minimal brutalist layouts.',
    tags: ['Grid Systems', 'Cognitive Ergonomics', 'Multi-Scale Typo', 'Data Density']
  },
  {
    id: 'interaction',
    name: 'Motion Choreography & Physics',
    category: 'Design Systems',
    level: 'Core Mastery',
    experience: '5+ Yrs',
    roleInWorkflow: 'Spring dynamics, inertia damping, spatial navigation, and subtle micro-feedback.',
    tags: ['Spring Physics', 'FLIP Transitions', 'Spatial UX', 'Gestures']
  },

  // 3D & SPATIAL
  {
    id: 'blender',
    name: 'Blender 3D',
    category: '3D & Spatial',
    level: 'Advanced',
    experience: '4+ Yrs',
    roleInWorkflow: 'Hard-surface modeling, topology optimization, non-destructive modifiers, and UV lightmap baking for real-time engines.',
    tags: ['Hard Surface', 'Procedural Modifiers', 'Baking', 'Asset Decimation']
  },
  {
    id: 'spatial-ux',
    name: 'Spatial Computing & HUDs',
    category: '3D & Spatial',
    level: 'Architectural',
    experience: '3+ Yrs',
    roleInWorkflow: 'Cockpit synthetic vision, LiDAR visualization, automotive digital clusters, and aerospace telemetry displays.',
    tags: ['Synthetic Vision', 'LiDAR Clouds', 'Peripheral Ergonomics', 'HUD Design']
  },

  // SYSTEMS & ECONOMICS
  {
    id: 'systems-econ',
    name: 'Mechanism Design & Game Theory',
    category: 'Systems & Economics',
    level: 'Architectural',
    experience: 'Degree / 5+ Yrs',
    roleInWorkflow: 'Designing incentives, auction mechanisms, supply-demand equilibrium balancing, and anti-fragile network rules.',
    tags: ['Incentive Alignment', 'Nash Equilibrium', 'Auction Theory', 'Market Design']
  },
  {
    id: 'macro-analytics',
    name: 'Econometric Modeling & Systems Dynamics',
    category: 'Systems & Economics',
    level: 'Advanced',
    experience: 'Degree / 5+ Yrs',
    roleInWorkflow: 'Empirical data analysis, dynamic feedback loops, supply chain fragility modeling, and agent-based simulations.',
    tags: ['Agent-Based Sim', 'Feedback Loops', 'Time Series', 'System Dynamics']
  }
];
