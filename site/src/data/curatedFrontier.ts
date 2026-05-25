export type CuratedFrontierProject = {
  rank: number;
  repo: string;
  url: string;
  quality: string;
  readmeRole: string;
  tags: string[];
};

export const curatedFrontierProjects: CuratedFrontierProject[] = [
  {
    rank: 1,
    repo: 'china-qijizhifeng/agentic-Harness-engineering',
    url: 'https://github.com/china-qijizhifeng/agentic-Harness-engineering',
    quality: '最贴主题。明确讲固定 base model、进化 harness，并有 Terminal-Bench 2 指标。',
    readmeRole: 'Harness evolution / 进化闭环',
    tags: ['harness-evolution', 'evaluation', 'workflow-evolution', 'terminal-bench']
  },
  {
    rank: 2,
    repo: 'openclaw/openclaw',
    url: 'https://github.com/openclaw/openclaw',
    quality: '生态锚点最强，runtime/product 形态完整；star/fork 异常高，需要 hype audit。',
    readmeRole: 'Runtime / 生态入口',
    tags: ['runtime', 'ecosystem', 'personal-agent', 'hype-audit']
  },
  {
    rank: 3,
    repo: 'obra/superpowers',
    url: 'https://github.com/obra/superpowers',
    quality: '方法论质量高，Skill、TDD、debug、review、subagent 工作流可沉淀为操作手册。',
    readmeRole: 'Skill methodology',
    tags: ['skill', 'methodology', 'tdd', 'subagent-workflow']
  },
  {
    rank: 4,
    repo: 'NousResearch/hermes-agent',
    url: 'https://github.com/NousResearch/hermes-agent',
    quality: '贴合会成长的个人 Agent，适合作为 self-improving personal agent 案例。',
    readmeRole: 'Personal agent runtime',
    tags: ['personal-agent', 'runtime', 'memory', 'self-improvement']
  },
  {
    rank: 5,
    repo: 'rohitg00/agentmemory',
    url: 'https://github.com/rohitg00/agentmemory',
    quality: '主题很准：持久记忆层。不是完整 Agent，但可作为 Evolver memory substrate。',
    readmeRole: 'Memory layer',
    tags: ['memory', 'persistent-memory', 'substrate']
  },
  {
    rank: 6,
    repo: 'pinchbench/skill',
    url: 'https://github.com/pinchbench/skill',
    quality: '评测价值高，但范围偏 OpenClaw 生态，独立性和成熟度需要继续观察。',
    readmeRole: 'Benchmark / Eval',
    tags: ['benchmark', 'evaluation', 'openclaw-ecosystem']
  },
  {
    rank: 7,
    repo: 'tinyhumansai/openhuman',
    url: 'https://github.com/tinyhumansai/openhuman',
    quality: '产品化和 UX 信号不错，更像应用入口，适合作为 product/application signal。',
    readmeRole: 'Product/application signal',
    tags: ['product', 'ux', 'personal-agent']
  }
];

