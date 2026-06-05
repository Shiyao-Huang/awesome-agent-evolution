const defaultSiteUrl = 'https://agent-evolution.com';
const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl;

export const site = {
  name: 'Self Evolve',
  url: configuredSiteUrl.replace(/\/$/, ''),
  title: 'Self Evolve AI — Self-Evolving Agents Survey / AI 自进化证据地图',
  description:
    'Self Evolve 是 AI Agent 自进化证据地图：先判断系统改了什么、谁验证、能否保留和回滚，再进入论文、项目、benchmark 与证据边界。English core summaries are available; full parity is still in progress.',
  keywords: [
    'Self Evolve AI',
    'awesome-agent-evolution',
    'agent-evolution',
    'self-evolving-agents',
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
  { href: '/topics/', label: '读者路径' },
  { href: '/projects/', label: '项目' },
  { href: '/research/', label: '研究' },
  { href: '/survey/', label: 'Survey' },
  { href: '/paper/', label: '论文' },
  { href: '/graph/', label: '图谱' },
  { href: '/blog/', label: '博客' },
  { href: '/search/', label: '搜索' },
  { href: '/star-growth/', label: '增长试点' },
  { href: '/value-lsh/', label: '证据分诊' }
];

export const navEn = [
  { href: '/en/', label: 'Start' },
  { href: '/en/topics/', label: 'Questions' },
  { href: '/en/topics/self-evolving-ai-agents/', label: 'Definition' },
  { href: '/en/topics/five-evolution-loops/', label: 'Five Loops' },
  { href: '/en/topics/code-evolution-benchmark/', label: 'Benchmark' },
  { href: '/en/paper/', label: 'Paper' },
  { href: '/resource-library/', label: 'Resources (ZH-first)' },
  { href: '/reports/', label: 'Reports (gated)' },
  { href: '/value-lsh/', label: 'Triage (ZH-first)' },
  { href: '/search/', label: 'Search' }
];

export const navByLang = {
  zh: nav,
  en: navEn
};

export const ctaByLang = {
  zh: { href: '/topics/', label: '开始阅读' },
  en: { href: '/en/topics/', label: 'Start' }
};

export const footerLinks = {
  zh: [
    { href: '/resource-library/', label: '资料库覆盖' },
    { href: '/topics/', label: '读者路径' },
    { href: '/github/', label: 'GitHub 证据链' },
    { href: site.github, label: '开源仓库' },
    { href: `${site.github}/tree/main/site/src/content/blog`, label: '博客源码' },
    { href: `${site.github}/tree/main/projects`, label: '项目分析' },
    { href: '/rss.xml', label: 'RSS' }
  ],
  en: [
    { href: '/en/topics/self-evolving-ai-agents/', label: 'Definition' },
    { href: '/en/topics/five-evolution-loops/', label: 'Five loops' },
    { href: '/en/topics/code-evolution-benchmark/', label: 'Benchmark matrix' },
    { href: '/en/paper/', label: 'Paper status' },
    { href: '/reports/', label: 'Review-gated reports' },
    { href: '/resource-library/', label: 'Resource coverage (ZH-first)' },
    { href: '/topics/', label: 'Chinese full topic map' },
    { href: site.github, label: 'GitHub repository' },
    { href: '/rss.xml', label: 'RSS' }
  ]
};
