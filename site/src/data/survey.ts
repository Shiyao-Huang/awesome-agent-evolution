/**
 * @sm:node site-survey-data
 * Survey findings data layer for website display.
 * Showcases the VALUE of survey research, not just its structure.
 */

export interface EvolutionLoop {
  id: string;
  name: string;
  nameZh: string;
  icon: string;
  description: string;
  descriptionZh: string;
  examples: string[];
  keyInsight: string;
}

export interface MethodFamily {
  name: string;
  nameZh: string;
  papers: number;
  share: string;
  color: string;
  keyMethods: string[];
  oneLineInsight: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  fullName: string;
  category: string;
  icon: string;
  whatItDoes: string;
  howItEvolves: string;
  evidence: { metric: string; before: string; after: string }[];
  keyTakeaway: string;
  relatedProject?: string;
  paper?: string;
}

export interface PainPoint {
  category: string;
  categoryZh: string;
  icon: string;
  count: number;
  coreFinding: string;
  surveyEvidence: string;
}

export const surveyStats = {
  papers: 196,
  repos: 348,
  painPoints: 97,
  blogArtifacts: 1306,
  evolutionLoops: 5,
  methodFamilies: 7,
  caseStudies: 6,
  frameworksCompared: 9,
};

export const evolutionLoops: EvolutionLoop[] = [
  {
    id: 'spec-exec',
    name: 'Specification-to-Execution Loop',
    nameZh: '规范到执行环',
    icon: '📋→⚡',
    description: 'Translates natural-language goals into runnable ML/agent pipelines automatically.',
    descriptionZh: '将自然语言目标自动转化为可运行的 ML/智能体管线。',
    examples: ['AutoML-GPT', 'AutoML-Agent'],
    keyInsight: 'The gap between "what you want" and "what runs" is the first evolution bottleneck.',
  },
  {
    id: 'search',
    name: 'Search Loop',
    nameZh: '搜索环',
    icon: '🔍',
    description: 'Explores architecture, prompt, code, agent, and hyperparameter spaces to find better designs.',
    descriptionZh: '探索架构、提示词、代码、智能体和超参数空间，寻找更优设计。',
    examples: ['OPRO', 'EvoPrompting', 'ADAS', 'OpenEvolve'],
    keyInsight: 'LLMs as search operators unlock combinatorial spaces that gradient methods cannot reach.',
  },
  {
    id: 'evaluator',
    name: 'Evaluator Loop',
    nameZh: '评估环',
    icon: '✅',
    description: 'Tests, benchmarks, and verifies whether a candidate change is a genuine improvement.',
    descriptionZh: '测试、基准验证候选改动是否为真正的改进。',
    examples: ['FunSearch', 'Self-Debug', 'CodeEvolve'],
    keyInsight: 'Without a reliable evaluator, self-improvement is indistinguishable from random walk.',
  },
  {
    id: 'reflection',
    name: 'Reflection Loop',
    nameZh: '反思环',
    icon: '🪞',
    description: 'Converts failures into memory, generates revision candidates from feedback signals.',
    descriptionZh: '将失败转化为记忆，从反馈信号生成修正候选。',
    examples: ['Reflexion', 'Self-Refine', 'STaR', 'ExPeL'],
    keyInsight: 'The reflection loop is where experience becomes reusable knowledge.',
  },
  {
    id: 'population',
    name: 'Population Loop',
    nameZh: '种群环',
    icon: '👥',
    description: 'Maintains multiple candidates, selects, mutates, and recombines across generations.',
    descriptionZh: '维护多个候选方案，跨代选择、变异和重组。',
    examples: ['AlphaEvolve/MAP-Elites', 'LLaMEA', 'AgentEvolver'],
    keyInsight: 'Population-level evolution discovers solutions no single trajectory can reach.',
  },
];

export const methodFamilies: MethodFamily[] = [
  {
    name: 'Prompt/Search Optimization',
    nameZh: '提示词/搜索优化',
    papers: 68,
    share: '34.7%',
    color: '#9b59b6',
    keyMethods: ['OPRO', 'EvoPrompting', 'Self-Refine', 'ACE'],
    oneLineInsight: 'Largest family: LLMs rewriting their own instructions.',
  },
  {
    name: 'Reward/RL/Self-Play',
    nameZh: '奖励/强化学习/自博弈',
    papers: 51,
    share: '26.0%',
    color: '#e74c3c',
    keyMethods: ['STaR', 'Self-Rewarding LM', 'RISE', 'Absolute Zero'],
    oneLineInsight: 'Self-generated rewards eliminate human annotation bottlenecks.',
  },
  {
    name: 'Code/Self-Modification',
    nameZh: '代码/自我修改',
    papers: 28,
    share: '14.3%',
    color: '#3498db',
    keyMethods: ['ADAS', 'DGM', 'Godel Agent', 'AlphaEvolve'],
    oneLineInsight: 'Code as the mutable substrate — agents rewrite their own source.',
  },
  {
    name: 'Multi-Agent Reflection/Debate',
    nameZh: '多智能体反思/辩论',
    papers: 16,
    share: '8.2%',
    color: '#2ecc71',
    keyMethods: ['Multi-Agent Debate', 'MAE', 'SPIRAL'],
    oneLineInsight: 'Social pressure as selection mechanism.',
  },
  {
    name: 'Memory/Knowledge Evolution',
    nameZh: '记忆/知识进化',
    papers: 16,
    share: '8.2%',
    color: '#f39c12',
    keyMethods: ['Voyager', 'ExPeL', 'Memory-R1', 'ReasoningBank'],
    oneLineInsight: 'Accumulated experience becomes heritable skill libraries.',
  },
  {
    name: 'Web/Tool/Environment Adaptation',
    nameZh: 'Web/工具/环境适配',
    papers: 13,
    share: '6.6%',
    color: '#1abc9c',
    keyMethods: ['WebEvolver', 'RAGEN', 'SICA'],
    oneLineInsight: 'Real-world environments as the ultimate fitness function.',
  },
  {
    name: 'Evaluation/Safety/Governance',
    nameZh: '评估/安全/治理',
    papers: 4,
    share: '2.0%',
    color: '#8e8e93',
    keyMethods: ['IterAlign', 'Constitutional AI'],
    oneLineInsight: 'Smallest but most critical: guarding against misevolution.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'dgm',
    name: 'DGM',
    fullName: 'Darwin Godel Machine',
    category: 'Architecture Search',
    icon: '🧬',
    whatItDoes: 'An agent that rewrites its own Python source code to discover better agent architectures.',
    howItEvolves: 'Maintains an open-ended archive of agent designs. Each generation proposes code modifications, evaluates them on benchmarks, and keeps improvements in the archive for future generations to build on.',
    evidence: [
      { metric: 'SWE-bench Verified', before: '20.0%', after: '50.0%' },
      { metric: 'Polyglot Coding', before: '14.2%', after: '30.7%' },
    ],
    keyTakeaway: 'Code-level self-modification with archival inheritance outperforms fixed-architecture approaches on real-world tasks.',
    relatedProject: 'darwin-godel-machine',
    paper: 'DGM: Darwin Godel Machine',
  },
  {
    id: 'adas',
    name: 'ADAS',
    fullName: 'Automated Design of Agentic Systems',
    category: 'Architecture Search',
    icon: '🏗️',
    whatItDoes: 'A meta-agent that writes complete Python-coded agents, searching the space of agent designs automatically.',
    howItEvolves: 'Uses a "meta-agent" that proposes new agent architectures as Python code, evaluates them on tasks, and iterates. Discovered designs transfer across tasks and base models.',
    evidence: [
      { metric: 'Transfer across tasks', before: 'Single-task', after: 'Cross-task generalization confirmed' },
      { metric: 'Design complexity', before: 'Manual prompt engineering', after: 'Automated code search' },
    ],
    keyTakeaway: 'Agent design space is searchable — meta-agents can discover non-obvious architectures that human designers miss.',
    relatedProject: 'automated-design-of-agentic-systems',
    paper: 'ADAS: Automated Design of Agentic Systems',
  },
  {
    id: 'alphaevolve',
    name: 'AlphaEvolve',
    fullName: 'AlphaEvolve (DeepMind)',
    category: 'Algorithm Discovery',
    icon: '💎',
    whatItDoes: 'Combines LLMs with evolutionary computation to discover novel algorithms for math, scheduling, and hardware design.',
    howItEvolves: 'LLM proposes code mutations → automated evaluators score → MAP-Elites maintains diverse population → best solutions survive. Discovered a new matrix multiplication algorithm beating 50-year records.',
    evidence: [
      { metric: '4×4 matrix multiplication', before: '49 steps (Strassen)', after: '47 steps (new record)' },
      { metric: 'Data center scheduling', before: 'Standard heuristic', after: 'Recovery of ~0.7% compute' },
    ],
    keyTakeaway: 'LLM + evolution + strong evaluator = algorithm discovery that exceeds human intuition.',
    paper: 'AlphaEvolve',
  },
  {
    id: 'voyager',
    name: 'Voyager',
    fullName: 'Voyager (Minecraft Lifelong Learning)',
    category: 'Skill Library',
    icon: '🎮',
    whatItDoes: 'An LLM-powered agent that plays Minecraft by building a reusable skill library through autonomous exploration.',
    howItEvolves: 'Three components: automatic curriculum (what to learn next), skill library (reusable code functions), and iterative prompting (fix failed skills). Skills compound — early discoveries enable later ones.',
    evidence: [
      { metric: 'Unique items obtained', before: '~50 (baseline)', after: '~250 (3.6x)' },
      { metric: 'Tech tree mastery', before: 'Partial', after: 'Full diamond-tier progression' },
    ],
    keyTakeaway: 'Skill libraries create compound returns — each acquired skill widens the frontier of what the agent can learn next.',
    relatedProject: 'voyager',
    paper: 'Voyager',
  },
  {
    id: 'reflexion',
    name: 'Reflexion',
    fullName: 'Reflexion: Language Agents with Verbal Reinforcement Learning',
    category: 'Reflection',
    icon: '🪞',
    whatItDoes: 'Agents that learn from failures by generating verbal reflections stored in episodic memory.',
    howItEvolves: 'After each failed attempt, the agent generates a textual "reflection" about what went wrong. Future attempts retrieve relevant reflections as additional context, avoiding repeated mistakes.',
    evidence: [
      { metric: 'HumanEval pass@1', before: '80% (GPT-4 baseline)', after: '91%' },
      { metric: 'AlfWorld success', before: '77%', after: '97%' },
    ],
    keyTakeaway: 'Language as the medium of self-improvement — verbal reflection is surprisingly effective for complex reasoning tasks.',
    relatedProject: 'reflexion',
    paper: 'Reflexion',
  },
  {
    id: 'self-rewarding',
    name: 'Self-Rewarding LM',
    fullName: 'Self-Rewarding Language Models',
    category: 'Self-Play',
    icon: '🏆',
    whatItDoes: 'Language models that generate their own training rewards, creating a self-improvement loop without external annotation.',
    howItEvolves: 'The model generates candidate responses → judges them using its own reward model → trains on self-judged best responses via DPO → the improved model becomes a better judge → repeat.',
    evidence: [
      { metric: 'Reward model quality', before: 'Iteration 1', after: 'Improves with each iteration (self-reinforcing)' },
      { metric: 'Training data cost', before: 'Human annotation required', after: 'Fully automated' },
    ],
    keyTakeaway: 'The evaluator and the evaluated can be the same system — but only with careful design to prevent reward hacking.',
    paper: 'Self-Rewarding Language Models',
  },
];

export const painPoints: PainPoint[] = [
  {
    category: 'Production Reliability',
    categoryZh: '生产可靠性',
    icon: '⚠️',
    count: 38,
    coreFinding: 'The "80% curse": agent task chains fail multiplicatively, making 95%+ reliability extremely hard.',
    surveyEvidence: '97 Mom Test interviews across Reddit, HN, X/Twitter confirm reliability ceiling as #1 blocker.',
  },
  {
    category: 'Self-Improvement Feasibility',
    categoryZh: '自我改进可行性',
    icon: '🔄',
    count: 22,
    coreFinding: 'Loop drift, plateau, and human dependency: self-improvement loops often stall or degrade.',
    surveyEvidence: 'Paper analysis shows most methods report single-iteration gains; multi-iteration stability is under-studied.',
  },
  {
    category: 'Framework Selection',
    categoryZh: '框架选择困境',
    icon: '🔀',
    count: 15,
    coreFinding: 'Abstraction overuse, deprecation risk, and false "team" metaphors plague agent frameworks.',
    surveyEvidence: '348 GitHub repos analyzed: no framework scores above 3/5 on self-evolution readiness.',
  },
  {
    category: 'Evaluation Crisis',
    categoryZh: '评估危机',
    icon: '📊',
    count: 12,
    coreFinding: 'Benchmark contamination + Goodhart\'s law = "benchmaxxing" that doesn\'t transfer to production.',
    surveyEvidence: 'Cross-source validation reveals gap between benchmark claims and real-world performance.',
  },
  {
    category: 'Security & Governance',
    categoryZh: '安全与治理',
    icon: '🔒',
    count: 10,
    coreFinding: 'Permission escalation, prompt injection, and misevolution risks are under-addressed in research.',
    surveyEvidence: 'Only 4/196 papers (2%) focus on evaluation/safety/governance as primary contribution.',
  },
];

export const surveyFigurePaths = {
  methodDistribution: '/visuals/method-distribution.svg',
  methodTrend: '/visuals/method-trend-timeseries.svg',
  frameworkRadar: '/visuals/framework-radar.svg',
  crossSourceGap: '/visuals/cross-source-gap.svg',
  painpointPlatform: '/visuals/painpoint-platform.svg',
  categoryTheme: '/visuals/category-theme-heatmap.svg',
  corpusFunnel: '/visuals/corpus-funnel.svg',
  strictVsBroad: '/visuals/strict-vs-broad.svg',
  starDistribution: '/visuals/star-distribution.svg',
  themeStar: '/visuals/theme-star-comparison.svg',
};
