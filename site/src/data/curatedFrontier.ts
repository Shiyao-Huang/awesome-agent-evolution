export type CuratedFrontierProject = {
  rank: number;
  repo: string;
  name: string;
  url: string;
  quality: string;
  role: string;
  tags: string[];
  caution?: string;
};

export const curatedFrontierProjects: CuratedFrontierProject[] = [
  {
    rank: 1,
    repo: 'china-qijizhifeng/agentic-Harness-engineering',
    name: 'Agentic Harness Engineering',
    url: 'https://github.com/china-qijizhifeng/agentic-Harness-engineering',
    quality: '最贴主题：固定 base model，进化 harness，并给出 Terminal-Bench 2 指标。',
    role: 'Harness evolution / 进化闭环',
    tags: ['harness', 'benchmark', 'coding-agent']
  },
  {
    rank: 2,
    repo: 'openclaw/openclaw',
    name: 'OpenClaw',
    url: 'https://github.com/openclaw/openclaw',
    quality: 'runtime/product 形态完整，适合作为实践入口和生态锚点。',
    role: 'Runtime / 生态入口',
    tags: ['runtime', 'skills', 'memory'],
    caution: 'star/fork 异常高，进入 hype audit。'
  },
  {
    rank: 3,
    repo: 'obra/superpowers',
    name: 'Superpowers',
    url: 'https://github.com/obra/superpowers',
    quality: '方法论质量高，可沉淀 Skill、TDD、debug、review、subagent 操作手册。',
    role: 'Skill methodology',
    tags: ['skills', 'workflow', 'subagent']
  },
  {
    rank: 4,
    repo: 'NousResearch/hermes-agent',
    name: 'Hermes Agent',
    url: 'https://github.com/NousResearch/hermes-agent',
    quality: '贴近会成长的个人 Agent，覆盖记忆、技能、消息与轨迹生成。',
    role: 'Personal agent runtime',
    tags: ['personal-agent', 'memory', 'runtime']
  },
  {
    rank: 5,
    repo: 'rohitg00/agentmemory',
    name: 'agentmemory',
    url: 'https://github.com/rohitg00/agentmemory',
    quality: '持久记忆层不是完整 Agent，但对 Evolver 的 memory substrate 很关键。',
    role: 'Memory layer',
    tags: ['memory', 'substrate', 'coding-agent']
  },
  {
    rank: 6,
    repo: 'pinchbench/skill',
    name: 'PinchBench Skill',
    url: 'https://github.com/pinchbench/skill',
    quality: '评测价值高，但范围偏 OpenClaw 生态，独立性和成熟度需要继续观察。',
    role: 'Benchmark / Eval',
    tags: ['benchmark', 'eval', 'openclaw']
  },
  {
    rank: 7,
    repo: 'tinyhumansai/openhuman',
    name: 'OpenHuman',
    url: 'https://github.com/tinyhumansai/openhuman',
    quality: '产品化和 UX 信号不错，更像应用入口和采用信号。',
    role: 'Product/application signal',
    tags: ['product', 'personal-agent', 'ux']
  },
  {
    rank: 8,
    repo: 'vectorize-io/agent-memory-benchmark',
    name: 'Agent Memory Benchmark',
    url: 'https://github.com/vectorize-io/agent-memory-benchmark',
    quality: 'memory 评测问题定义清楚，把 accuracy、speed、token cost 放到同一张表上。',
    role: 'Memory benchmark',
    tags: ['memory', 'benchmark', 'evaluation']
  },
  {
    rank: 9,
    repo: 'EvoMap/awesome-agent-evolution',
    name: 'EvoMap Awesome Agent Evolution',
    url: 'https://github.com/EvoMap/awesome-agent-evolution',
    quality: '适合作为外部 taxonomy comparator，检查我们公开叙事是否比普通 awesome list 更有证据密度。',
    role: 'Awesome list mirror',
    tags: ['taxonomy', 'awesome-list', 'agent-swarm']
  }
];
