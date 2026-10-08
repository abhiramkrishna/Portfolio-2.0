export interface EconomicPrinciple {
  id: string;
  theme: string;
  economicConcept: string;
  softwareParallel: string;
  designManifestation: string;
  deepDive: string;
}

export const ECONOMICS_STORY = {
  headline: "THE ECONOMICS OF SYSTEMS",
  subheadline: "Why an Economics degree is the most powerful foundation for software architecture and creative technology.",
  coreQuote: "My economics background influences how I understand systems, not just markets.",
  narrativeParagraphs: [
    "Most developers see software as syntax. Most designers see software as visual surfaces. Economics taught me to see software as mechanism design: an ecosystem governed by incentives, resource constraints, information asymmetry, and network feedback loops.",
    "When you design an interface, you are establishing the transaction costs of human attention. When you architect a distributed backend, you are solving the economic problem of scarce compute allocation. When you craft a 3D digital simulation, you are encoding dynamic equilibrium.",
    "This multidisciplinary foundation ensures that what I build isn't merely aesthetically seductive or technically functional—it is economically sound, user-aligned, and resilient against systemic stress."
  ],
  principles: [
    {
      id: 'incentives',
      theme: 'INCENTIVES & GAME THEORY',
      economicConcept: 'Mechanism Design & Nash Equilibrium',
      softwareParallel: 'State Machines, Tokenomics & Permission Systems',
      designManifestation: 'Frictionless default flows that naturally guide users toward mutually cooperative, high-value outcomes without coercion.',
      deepDive: 'In economics, if an outcome fails, you do not blame the participants; you examine the rules of the game. In product design, if users make errors or churn, the mechanism is flawed. Designing interfaces is designing incentive landscapes.'
    },
    {
      id: 'information-asymmetry',
      theme: 'INFORMATION ASYMMETRY',
      economicConcept: 'The Market for Lemons & Signalling',
      softwareParallel: 'Telemetry, Observability & Error Contracts',
      designManifestation: 'Transparent mission telemetry, instant latency indicators, and unambiguous system health cues that preserve operator trust.',
      deepDive: 'When one party possesses knowledge another lacks, systems collapse into distrust. Cockpit interfaces and financial dashboards must bridge this gap instantly through clean, verified visual telemetry.'
    },
    {
      id: 'network-externalities',
      theme: 'NETWORK DYNAMICS & FEEDBACK',
      economicConcept: 'Metcalfe’s Law & Increasing Returns to Scale',
      softwareParallel: 'Distributed Mesh Topologies & Event Buses',
      designManifestation: 'Modular UI components and collaborative multi-user canvases that gain compounding value with each new participant.',
      deepDive: 'Linear systems produce predictable results; networked systems produce emergent phase shifts. Software and urban ecosystems both behave as living networks where micro-interactions generate macro-order.'
    },
    {
      id: 'scarcity',
      theme: 'RESOURCE ALLOCATION & SCARCITY',
      economicConcept: 'Opportunity Cost & Pareto Efficiency',
      softwareParallel: 'Main-Thread Frame Budgets & Memory Pipelines',
      designManifestation: 'Zero layout shift, 16.6ms render deadlines, lazy-loaded geometry, and cognitive glance ergonomics.',
      deepDive: 'In economics, capital and labor are finite. In real-time 3D web engineering, CPU cycles, GPU fill rates, and human attention spans are finite. Every millisecond spent rendering must justify its opportunity cost.'
    }
  ]
};
