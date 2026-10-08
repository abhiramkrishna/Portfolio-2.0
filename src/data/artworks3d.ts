import type { Artwork3D } from '../types';

export const ARTWORKS_3D: Artwork3D[] = [
  {
    id: 'inertial-gyro',
    title: 'INERTIAL GYROCORE // 01',
    classification: 'Aerospace Guidance Mechanism',
    year: '2025',
    software: ['Three.js', 'GLSL', 'Blender'],
    technique: 'Multi-Axis Gimbal Kinematics & Procedural Titanium Shading',
    description: 'An interactive simulation of a spacecraft 3-axis inertial measurement unit. Features concentric gimbal rings rotating with differential angular velocity, housing a high-coherence laser core.',
    geometryType: 'gyroscope',
    polygonCount: '48,200',
    vertexCount: '24,110',
    renderPass: 'PBR Specular / Emissive Core / Micro-Glow',
    accentColor: '#00f0ff'
  },
  {
    id: 'geodesic-lattice',
    title: 'GEODESIC DATA SPHERE // 02',
    classification: 'Planetary Sensor Grid',
    year: '2024',
    software: ['Three.js', 'Procedural Math', 'Blender'],
    technique: 'Subdivided Icosahedral Topology with Dynamic Normal Displacement',
    description: 'A mathematical representation of planetary orbital telemetry nodes. Each facet acts as a synchronized data receiver, computing harmonic pulses based on pointer distance and rotational momentum.',
    geometryType: 'geodesic',
    polygonCount: '32,600',
    vertexCount: '16,302',
    renderPass: 'Frosted Borosilicate Glass & Wireframe Overlay',
    accentColor: '#10b981'
  },
  {
    id: 'aero-surface',
    title: 'PARAMETRIC AEROFOIL // 03',
    classification: 'Automotive Fluid Dynamic Surface',
    year: '2025',
    software: ['Three.js', 'GLSL Vertex Shaders'],
    technique: 'Parametric NURBS Curvature & Wind-Tunnel Streamline Vectorization',
    description: 'Derived from computational fluid dynamics (CFD) modeling of high-efficiency electric vehicles. Surface normals dynamically distort to illustrate laminar airflow and boundary layer separation.',
    geometryType: 'aerodynamic',
    polygonCount: '54,400',
    vertexCount: '27,204',
    renderPass: 'Anisotropic Carbon Composite & Vector Streamlines',
    accentColor: '#f59e0b'
  },
  {
    id: 'topological-knot',
    title: 'TORUS TOPOLOGY // 04',
    classification: 'High-Dimensional Mathematical Sculpture',
    year: '2024',
    software: ['Three.js', 'Custom Shader Pipelines'],
    technique: 'Non-Euclidean Knot Inversion & Chromatic Dispersion',
    description: 'A continuous (p=3, q=7) mathematical torus knot representing the feedback loops between economics, software, and physical reality. Features real-time Fresnel rim lighting and chromatic dispersion.',
    geometryType: 'torusknot',
    polygonCount: '62,800',
    vertexCount: '31,400',
    renderPass: 'Liquid Mercury Shader with Dynamic Environmental Reflection',
    accentColor: '#a855f7'
  }
];
