import type { DisciplineNode } from '../types';

export const DISCIPLINE_NODES: DisciplineNode[] = [
  {
    id: 'economics',
    title: 'ECONOMICS',
    tagline: 'The Science of Incentives & System Constraints',
    description: 'Trained to analyze macro feedback loops, equilibrium dynamics, resource allocation, and game-theoretic incentives. Economics provides the mathematical and conceptual lens to understand why complex human and digital systems thrive or collapse.',
    skills: [
      'Mechanism Design',
      'Incentive Structures',
      'Macro & Micro Dynamics',
      'Network Effects',
      'Empirical Econometrics',
      'Resource Optimization'
    ],
    keyInquiries: [
      'How do token/credit incentives govern user retention?',
      'What are the friction points in multi-sided digital marketplaces?',
      'How does information asymmetry degrade system trust?'
    ],
    connectionToNext: 'Economic analysis uncovers user motivations and system bottlenecks, which directly informs how interfaces and information architectures must be designed.',
    metric: {
      label: 'Core Paradigm',
      value: 'Incentives & Constraints'
    }
  },
  {
    id: 'design',
    title: 'DESIGN',
    tagline: 'Cognitive Ergonomics & Visual Architecture',
    description: 'Transforming dense abstractions into lucid, high-order interfaces. Rooted in Swiss typography, industrial instrument ergonomics, and multi-state design systems. Not decorative styling, but cognitive clarity under high information density.',
    skills: [
      'UI/UX & Cognitive Flow',
      'Design Systems & Tokens',
      'Spatial & Instrument Ergonomics',
      'Typography & Hierarchy',
      'Interactive Prototyping',
      'Micro-Animations & Physics'
    ],
    keyInquiries: [
      'How quickly can an operator absorb critical telemetry under stress?',
      'What spatial metaphors minimize cognitive load?',
      'How do responsive tokens maintain mathematical harmony across screens?'
    ],
    connectionToNext: 'Designs are hypotheses; code is the empirical test. Translating modular design systems directly into reusable, type-safe software primitives.',
    metric: {
      label: 'Design Language',
      value: 'Aerospace & Swiss Minimal'
    }
  },
  {
    id: 'code',
    title: 'CODE',
    tagline: 'Deterministic Logic & Scalable Implementations',
    description: 'Building robust, reactive frontends and cross-platform applications in TypeScript, React, and React Native. Focusing on predictable state management, render pipelines, frame budgets, and modular software abstractions.',
    skills: [
      'TypeScript & Strict Typing',
      'React & Modern Patterns',
      'React Native (New Architecture)',
      'State & Event Architectures',
      'Performance & Frame Budgets',
      'Async Streams & WebSockets'
    ],
    keyInquiries: [
      'How do we eliminate main-thread bottlenecks during heavy gesture interactions?',
      'What data contracts ensure atomic updates across complex dashboards?',
      'How to structure codebases for multi-year extensibility?'
    ],
    connectionToNext: 'Screen space is no longer two-dimensional. WebGL and spatial computing expand code into dynamic geometries, GLSL shaders, and 3D simulation.',
    metric: {
      label: 'Runtime Target',
      value: 'TypeScript / 60+ FPS'
    }
  },
  {
    id: '3d',
    title: '3D ART & SHADERS',
    tagline: 'Spatial Geometry & Digital Matter',
    description: 'Constructing procedural geometries, custom GLSL vertex/fragment shaders, and lighting environments in Three.js and Blender. Elevating digital products from flat surfaces into tactile, dimensional instruments.',
    skills: [
      'Three.js & WebGL',
      'GLSL Fragment & Vertex Shaders',
      'Blender Hard Surface & Sculpting',
      'PBR Materials & Lighting',
      'Procedural Generation',
      'Kinetic Physics & Orbit Controls'
    ],
    keyInquiries: [
      'How can procedural shaders communicate live system states without static textures?',
      'What geometry decimation techniques maintain 60 FPS on mobile silicon?',
      'How does physical light transport enhance human spatial intuition?'
    ],
    connectionToNext: '3D spatial mechanics integrate with economic and algorithmic logic to model planetary networks, autonomous vehicles, and complex infrastructure.',
    metric: {
      label: 'Spatial Medium',
      value: 'Three.js / GLSL / Blender'
    }
  },
  {
    id: 'systems',
    title: 'SYSTEMS THINKING',
    tagline: 'The Convergence of Whole-Earth Thinking',
    description: 'The synthesizing layer that links economic incentives, user intent, code throughput, and spatial interfaces. Seeing products not as isolated screens, but as living technological organisms with inputs, feedback loops, and emergent properties.',
    skills: [
      'Cybernetic Feedback Loops',
      'Complex Adaptive Systems',
      'Distributed Architectures',
      'System Telemetry & Monitoring',
      'Resilience & Fault Tolerance',
      'Cross-Disciplinary Synthesis'
    ],
    keyInquiries: [
      'Where are the unseen second-order effects of an algorithmic change?',
      'How does latency across physical systems influence human decision-making?',
      'What keeps a complex technological ecosystem in dynamic equilibrium?'
    ],
    connectionToNext: 'Manifests in real-world frontiers: aerospace mission control, autonomous mobility, smart urban grids, and next-generation human-machine interfaces.',
    metric: {
      label: 'Synthesis Scope',
      value: 'Macro to Micro'
    }
  }
];
