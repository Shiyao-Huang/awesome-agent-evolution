const defaultSiteUrl = 'https://agent-evolution.com';
const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl;

export const site = {
  name: 'Self Evolve',
  url: configuredSiteUrl.replace(/\/$/, ''),
  title: 'Self Evolve AI — Self-Evolving Agents Survey / AI 自进化证据地图',
  description:
    'Self Evolve is a bilingual evidence map for self-evolving AI agents: definitions, papers, projects, benchmarks, star growth, value classification, and audit boundaries. 中文默认入口保留同一证据链。',
  keywords: [
    'Self Evolve AI',
    'AI Self Evolution',
    '自进化智能体',
    'AI 自我进化',
    '代码自我改进',
    'LLM 迭代优化',
    'AI 自进化资料库',
    'Self-Evolving Agents Resource Library',
    'AI 自进化主题地图',
    'Self-Evolving Agents Topic Map',
    'Value LSH',
    'AI Agent Value Classification',
    'Anthropic Claude Code',
    'Claude Code Dynamic Workflows',
    'Agent-Swarm Evolve',
    'AgentOps'
  ],
  github: 'https://github.com/Shiyao-Huang/awesome-agent-evolution',
  discord: 'https://github.com/Shiyao-Huang/awesome-agent-evolution/discussions',
  x: 'https://github.com/Shiyao-Huang/awesome-agent-evolution'
};

export const nav = [
  { href: '/#about', label: '关于' },
  { href: '/topics/', label: 'Start' },
  { href: '/projects/', label: '项目' },
  { href: '/research/', label: 'Research' },
  { href: '/survey/', label: 'Survey' },
  { href: '/paper/', label: 'Paper' },
  { href: '/graph/', label: 'Graph' },
  { href: '/blog/', label: '博客' },
  { href: '/search/', label: '搜索' },
  { href: '/star-growth/', label: 'Growth' },
  { href: '/value-lsh/', label: 'Value LSH' }
];
