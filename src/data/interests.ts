import type { InterestFrontier } from '../types';

export const INTEREST_FRONTIERS: InterestFrontier[] = [
  {
    id: 'space-tech',
    title: 'SPACE TECHNOLOGY & ORBITAL LOGISTICS',
    iconTag: 'ORBITAL',
    coordinates: 'GEO-SYNC // 35,786 KM',
    thesis: 'Orbital infrastructure is not a frontier of romance; it is the ultimate stress test of economics, materials science, and autonomous telemetry.',
    perspective: 'How technology, economics, and geopolitics shape humanity’s expansion beyond Earth. Moving from bespoke government spacecraft to commoditized launch vehicles transforms orbit into an economic zone. The key bottleneck is no longer propulsion alone, but autonomous in-orbit rendezvous, radiation-tolerant distributed compute, and orbital debris remediation markets.',
    systemicImpact: 'Decreasing cost-per-kilogram unlocks orbital manufacturing, high-density space-based sensor constellations, and planetary observation networks that feed real-time climate and macroeconomic models on Earth.',
    domains: ['Constellation Telemetry', 'Launch Economics', 'In-Situ Resource Utilization', 'Radiation-Tolerant Compute']
  },
  {
    id: 'automotive',
    title: 'AUTOMOTIVE & SPATIAL MOBILITY',
    iconTag: 'MOBILITY',
    coordinates: 'COCKPIT // LEVEL 4 AUTONOMY',
    thesis: 'The automobile is transforming from an internal combustion appliance into a high-performance spatial supercomputer on wheels.',
    perspective: 'The intersection of mobility, industrial design, real-time operating systems, and autonomous spatial perception. As drive-by-wire and software-defined vehicle architectures mature, human-vehicle interaction shifts from mechanical controls to cognitive telemetry. Cockpits must communicate machine certainty, sensor health, and road intent at highway velocities with zero cognitive friction.',
    systemicImpact: 'Autonomous fleets alter municipal land use: parking lots convert into green civic space, charging grids demand dynamic algorithmic balancing, and vehicle-to-everything (V2X) communication turns roads into continuous real-time data networks.',
    domains: ['LiDAR & Computer Vision', 'Spatial HUD Ergonomics', 'Software-Defined Vehicles', 'V2X Mesh Networks']
  },
  {
    id: 'international-relations',
    title: 'INTERNATIONAL RELATIONS & GEOPOLITICS',
    iconTag: 'GEOPOLITICS',
    coordinates: 'GLOBAL // CHOKEPOINTS',
    thesis: 'Global stability is mediated by physical bottlenecks, subsea cables, semiconductor lithography, and sovereign currency rails.',
    perspective: 'How sovereign competition and international treaties govern technological adoption. No technology exists in a vacuum. A high-bandwidth fiber cable, a rare-earth refining supply chain, or an export control policy determines which nations develop cutting-edge compute. Understanding global trade architecture enables resilient, non-fragile software and infrastructural systems.',
    systemicImpact: 'Geopolitical realignment drives technological decoupling, creating demand for sovereign compute clouds, multi-currency trade clearing systems, and redundant communication paths immune to single points of failure.',
    domains: ['Semiconductor Supply Chains', 'Critical Chokepoints', 'Sovereign Compute', 'Multi-Polar Trade Rails']
  },
  {
    id: 'urban-dev',
    title: 'URBAN DEVELOPMENT & METRIC METABOLISM',
    iconTag: 'URBAN GRID',
    coordinates: 'METROPOLIS // HIGH DENSITY',
    thesis: 'Cities behave not as static buildings, but as high-dimensional, thermodynamic systems of mass, energy, and information.',
    perspective: 'How metropolitan centers function as complex economic, social, and technological systems. Urban density produces super-linear innovation scaling, but also exponential infrastructure strain. By treating urban infrastructure as a reactive cybernetic organism—synchronizing power grids, multi-modal public transit, and algorithmic zoning—cities can support millions with reduced ecological footprints.',
    systemicImpact: 'Dynamic digital twins enable municipal operators to predict energy grid peaks, route transit fleets responsively to real-time foot traffic, and combat the urban heat island effect through algorithmic planning.',
    domains: ['Municipal Digital Twins', 'Smart Energy Grids', 'Multi-Modal Transit', 'Thermodynamic City Design']
  },
  {
    id: 'robotics',
    title: 'ROBOTICS & EMBODIED COGNITION',
    iconTag: 'ROBOTICS',
    coordinates: 'EMBODIED // KINEMATICS',
    thesis: 'The boundary between digital code and physical reality dissolves when software gains actuators, mass, and torque.',
    perspective: 'Where physical machines meet intelligence, safety verification, and human collaboration. The grand challenge of robotics is not purely compute power; it is actuator dexterity, energy density, sensor fusion, and reliable real-time control loops with hard real-time latency guarantees. When robots step onto factory floors and into homes, human-robot interaction design becomes a life-critical discipline.',
    systemicImpact: 'Embodied automation reshapes global labor economics, re-shores manufacturing capabilities, and creates unprecedented demand for intuitive, deterministic spatial interfaces that human operators can trust instinctively.',
    domains: ['Actuator Kinematics', 'Real-Time Control Systems', 'Sensor Fusion', 'Safety-Critical Ergonomics']
  },
  {
    id: 'ai-hci',
    title: 'ARTIFICIAL INTELLIGENCE & HUMAN COGNITION',
    iconTag: 'AI / HCI',
    coordinates: 'SYNAPSE // SYMBIOSIS',
    thesis: 'AI should not replace human agency; it should act as high-bandwidth cognitive amplification for creative and analytical minds.',
    perspective: 'How computation changes creativity, work, decision-making, and society. We are moving past chat boxes and prompt text fields into generative interactive interfaces where software dynamically synthesizes custom tools on the fly based on user intent. The future of AI is human-computer symbiosis: transparent cognitive artifacts that explain their reasoning and augment human judgment.',
    systemicImpact: 'Generative models accelerate scientific discovery and creative synthesis, shifting the primary human skill from rote memorization to taste, intent framing, and systemic verification.',
    domains: ['Cognitive Amplification', 'Generative User Interfaces', 'Model Interpretability', 'Human-in-the-Loop Systems']
  }
];
