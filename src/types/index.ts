export type DisciplineType = 'economics' | 'design' | 'code' | '3d' | 'systems' | 'technology';

export interface DisciplineNode {
  id: DisciplineType;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  keyInquiries: string[];
  connectionToNext: string;
  metric: {
    label: string;
    value: string;
  };
}

export type ProjectCategory = 
  | 'Aerospace & Telemetry' 
  | 'Automotive & Spatial UX' 
  | 'Computational Systems' 
  | 'Creative 3D & Shaders' 
  | 'Mobile Architecture' 
  | 'Data & Economics';

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  id: string;
  title: string;
  codename: string;
  category: ProjectCategory;
  categoryGroup: 'SYSTEMS & CODE' | 'AEROSPACE & AUTO' | '3D & CREATIVE TECH' | 'ECONOMICS & DATA';
  year: string;
  role: string[];
  technologies: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  architectureDetails: string[];
  metrics: ProjectMetric[];
  thumbnail: string;
  heroMedia?: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor?: string;
  badge?: string;
}

export interface Artwork3D {
  id: string;
  title: string;
  classification: string;
  year: string;
  software: string[];
  technique: string;
  description: string;
  geometryType: 'gyroscope' | 'geodesic' | 'aerodynamic' | 'torusknot';
  polygonCount: string;
  vertexCount: string;
  renderPass: string;
  accentColor: string;
}

export type TechCategory = 'Development' | 'Creative Technology' | 'Design Systems' | '3D & Spatial' | 'Systems & Economics';

export interface TechnologyItem {
  id: string;
  name: string;
  category: TechCategory;
  level: 'Core Mastery' | 'Advanced' | 'Architectural';
  experience: string;
  roleInWorkflow: string;
  tags: string[];
}

export interface InterestFrontier {
  id: string;
  title: string;
  iconTag: string;
  thesis: string;
  perspective: string;
  systemicImpact: string;
  domains: string[];
  coordinates: string;
}

export interface PhilosophyStage {
  step: string;
  domain: string;
  statement: string;
  reflection: string;
}

export interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: 'NAVIGATION' | 'SYSTEM' | 'ACTIONS' | 'EASTER EGGS';
  shortcut?: string;
  action: () => void;
}
