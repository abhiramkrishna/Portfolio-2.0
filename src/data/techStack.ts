export interface TechTool {
  id: string;
  name: string;
  category: 'core' | 'creative' | 'environment';
  groupName: string;
  role: string;
  specs: string;
  versionBadge?: string;
}

export const TECH_GROUPS = {
  core: {
    id: 'core',
    title: 'ENGINEERING & RUNTIMES',
    subtitle: 'Core web architecture, compilers & cross-platform mobile systems',
    count: '05'
  },
  creative: {
    id: 'creative',
    title: 'CREATIVE SUITE & 3D SPATIAL',
    subtitle: 'Vector engineering, procedural geometry, raster synthesis & typography',
    count: '06'
  },
  environment: {
    id: 'environment',
    title: 'DEV WORKSPACE & TOOLING',
    subtitle: 'Modular IDEs, compilers, notebooks & interactive canvas',
    count: '06'
  }
} as const;

export const ALL_TECH_TOOLS: TechTool[] = [
  // Group 1: Core Web & Mobile Development
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'core',
    groupName: 'Engineering & Runtimes',
    role: 'Dynamic Engine & ECMAScript Standards',
    specs: 'ES2024+ · V8 Engine · Asynchronous I/O Event Loop',
    versionBadge: 'ESNext'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'core',
    groupName: 'Engineering & Runtimes',
    role: 'Static Type Systems & Architecture',
    specs: 'Type Safety · Generics · Strict Sound Typing',
    versionBadge: 'v5.x'
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'core',
    groupName: 'Engineering & Runtimes',
    role: 'Cross-Platform Native Systems',
    specs: 'Fabric Renderer · Hermes Engine · JSI Bridge',
    versionBadge: 'v0.76+'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'core',
    groupName: 'Engineering & Runtimes',
    role: 'Semantic DOM & Document Architecture',
    specs: 'HTML5 Semantic Tree · ARIA Primitives · Microdata',
    versionBadge: 'W3C Standard'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'core',
    groupName: 'Engineering & Runtimes',
    role: 'Styling Engines, Geometry & Animation Math',
    specs: 'CSS Next · CSS Grid/Subgrid · Custom Properties · GPU Transforms',
    versionBadge: 'CSS3/4'
  },

  // Group 2: Creative & 3D Systems
  {
    id: 'figma',
    name: 'Figma',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: 'Design Systems & High-Fidelity UI/UX',
    specs: 'Token Architecture · Auto Layout · Interactive Components',
    versionBadge: 'Cloud Pro'
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: 'Precision Vector & Brand Identity',
    specs: 'Bézier Mathematics · SVG Path Optimization · Geometric Grid',
    versionBadge: 'Vector Suite'
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: 'Digital Imaging & Raster Synthesis',
    specs: 'Color Depth · Compositing · Textures & Masking',
    versionBadge: 'Imaging Lab'
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: 'Experience Design & User Flows',
    specs: 'Wireframe Prototyping · Transition Blueprints · Responsive Scaling',
    versionBadge: 'XD Architecture'
  },
  {
    id: 'indesign',
    name: 'Adobe InDesign',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: 'Editorial Layouts & Micro-Typography',
    specs: 'Baseline Grids · Multi-Page Systems · Typographic Hierarchy',
    versionBadge: 'Editorial Core'
  },
  {
    id: 'blender',
    name: 'Blender',
    category: 'creative',
    groupName: 'Creative Suite & 3D Spatial',
    role: '3D Spatial Modeling & Procedural Mesh',
    specs: 'Cycles/Eevee · Geometry Nodes · GLTF/USD Export for WebGL',
    versionBadge: '3D Studio'
  },

  // Group 3: Tools & IDEs
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Primary Modular Development Environment',
    specs: 'LSP Integration · Extension Matrix · Integrated Terminal',
    versionBadge: 'OSS Core'
  },
  {
    id: 'jupyter',
    name: 'Jupyter Lab',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Computational Data & Testing',
    specs: 'Kernel Protocols · Data Visualization · Scientific Prototyping',
    versionBadge: 'Lab 4.x'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Codebase Engineering',
    specs: 'Context Indexing · Multi-File Refactoring · Fast Syntax Parsing',
    versionBadge: 'Workspace Pro'
  },
  {
    id: 'codex',
    name: 'Codex',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Code Synthesis & Logic',
    specs: 'AST Parsing · Syntactic Analysis · Context Generation',
    versionBadge: 'Engine Core'
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Interactive Canvas & Motion Physics',
    specs: 'React Runtime · Spring Dynamics · Responsive Publishing',
    versionBadge: 'Motion Canvas'
  },
  {
    id: 'antigravity',
    name: 'Antigravity IDE',
    category: 'environment',
    groupName: 'Dev Workspace & Tooling',
    role: 'Advanced Workspace & Orchestration',
    specs: 'Multi-Task Execution · Command Integration · Workspace Management',
    versionBadge: 'v2.0 Core'
  }
];
