import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const readme = readFileSync(join(root, 'README.md'), 'utf8');
const reviewDir = join(root, 'paper-reviews');

const curatedFrontier = [
  ['china-qijizhifeng/agentic-Harness-engineering', 'https://github.com/china-qijizhifeng/agentic-Harness-engineering', 'Harness evolution / 进化闭环', ['harness-evolution', 'evaluation', 'workflow-evolution']],
  ['openclaw/openclaw', 'https://github.com/openclaw/openclaw', 'Runtime / 生态入口', ['runtime', 'ecosystem', 'personal-agent']],
  ['obra/superpowers', 'https://github.com/obra/superpowers', 'Skill methodology', ['skill', 'methodology', 'subagent-workflow']],
  ['NousResearch/hermes-agent', 'https://github.com/NousResearch/hermes-agent', 'Personal agent runtime', ['personal-agent', 'runtime', 'memory']],
  ['rohitg00/agentmemory', 'https://github.com/rohitg00/agentmemory', 'Memory layer', ['memory', 'persistent-memory']],
  ['pinchbench/skill', 'https://github.com/pinchbench/skill', 'Benchmark / Eval', ['benchmark', 'evaluation']],
  ['tinyhumansai/openhuman', 'https://github.com/tinyhumansai/openhuman', 'Product/application signal', ['product', 'ux', 'personal-agent']]
];

const keywordConcepts = [
  ['memory', /memory|记忆|mem|memento|a-mem/i],
  ['evaluation', /eval|benchmark|bench|judge|评估|评测|基准|score/i],
  ['reflection', /reflect|reflexion|self-refine|反思|反馈|精炼/i],
  ['self-play', /self-play|自博弈|zero data|absolute zero/i],
  ['code-evolution', /code|coding|program|software|代码|程序|修复|debug/i],
  ['prompt-optimization', /prompt|context|提示|上下文|opro|gepa/i],
  ['multi-agent', /multi-agent|agent society|societies|多智能体|编排/i],
  ['agent-runtime', /runtime|agentos|openclaw|hermes|personal agent|运行时/i],
  ['skill', /skill|tool|工具|技能/i],
  ['workflow-evolution', /workflow|harness|trajectory|工作流|轨迹/i],
  ['safety', /safety|poison|jailbreak|risk|安全|攻击|风险/i],
  ['rl-training', /reinforcement|rl|reward|强化|奖励/i],
  ['knowledge-graph', /graph|knowledge graph|图谱/i],
  ['curriculum', /curriculum|课程/i]
];

const nodes = new Map();
const edges = new Map();

const slug = (value) => encodeURIComponent(value.toLowerCase().trim().replace(/\s+/g, '-'));
const nodeId = (type, value) => `${type}:${slug(value)}`;
const titleCaseRepo = (repo) => repo.split('/').at(-1) || repo;

function addNode(node) {
  const existing = nodes.get(node.id);
  if (!existing || (node.weight || 1) > (existing.weight || 1)) nodes.set(node.id, node);
}

function addEdge(edge) {
  if (edge.source === edge.target) return;
  edges.set(`${edge.source}->${edge.target}:${edge.type}`, edge);
}

function addConceptEdges(sourceId, text) {
  for (const [concept, pattern] of keywordConcepts) {
    if (!pattern.test(text)) continue;
    const conceptId = nodeId('concept', concept);
    addNode({ id: conceptId, label: concept, type: 'concept', weight: 5, summary: 'Generated mechanism concept' });
    addEdge({ source: sourceId, target: conceptId, type: 'uses', label: 'generated concept match' });
  }
}

let heading = '';
for (const line of readme.split('\n')) {
  const headingMatch = line.match(/^##+\s+(.+)/);
  if (headingMatch) heading = headingMatch[1].replace(/\s*\/.*$/, '').trim();

  const projectMatch = line.match(/^- \[([^\]]+)\]\(https:\/\/github\.com\/([^)]+)\)\s*-\s*(.*)$/);
  if (projectMatch) {
    const [, label, repo, tail] = projectMatch;
    const starMatch = tail.match(/🌟\s*([0-9,]+)/);
    const id = nodeId('project', repo);
    addNode({
      id,
      label,
      type: 'project',
      url: `https://github.com/${repo}`,
      summary: tail.replace(/🌟.*/, '').trim(),
      weight: starMatch ? Math.max(4, Math.min(10, Math.log10(Number(starMatch[1].replaceAll(',', ''))) * 2)) : 4,
      source: 'README.md',
      group: heading || 'README'
    });
    const groupId = nodeId('cluster', heading || 'README projects');
    addNode({ id: groupId, label: heading || 'README projects', type: 'cluster', weight: 7, summary: 'README section' });
    addEdge({ source: id, target: groupId, type: 'belongs_to', label: 'README section' });
    addConceptEdges(id, `${label} ${tail} ${heading}`);
  }

  const paperMatch = line.match(/^- \[([^\]]+)\]\((https:\/\/arxiv\.org\/(?:abs|html)\/[^)]+)\)(.*)$/);
  if (paperMatch) {
    const [, title, url, tail] = paperMatch;
    const arxiv = url.split('/').pop()?.replace(/v\d+$/, '') || title;
    const id = nodeId('paper', arxiv);
    addNode({
      id,
      label: title,
      type: 'paper',
      url,
      summary: tail.replace(/\[review\]\([^)]+\)/, '').replace(/^\s*-\s*/, '').trim().slice(0, 280),
      weight: 5,
      source: 'README.md',
      group: heading || 'Papers'
    });
    const yearId = nodeId('cluster', heading || 'Papers');
    addNode({ id: yearId, label: heading || 'Papers', type: 'cluster', weight: 7, summary: 'README paper section' });
    addEdge({ source: id, target: yearId, type: 'belongs_to', label: 'paper year/section' });
    addConceptEdges(id, `${title} ${tail} ${heading}`);
  }
}

for (const file of readdirSync(reviewDir).filter((name) => name.startsWith('review-') && name.endsWith('.md'))) {
  const path = join(reviewDir, file);
  const body = readFileSync(path, 'utf8');
  const firstHeading = body.match(/^#\s+(.+)$/m)?.[1];
  const arxiv = file.match(/review-([0-9]{4}\.[0-9]{4,5})/)?.[1] || file.replace(/^review-|\.md$/g, '');
  const title = firstHeading || file.replace(/^review-|\.md$/g, '').replaceAll('-', ' ');
  const id = nodeId('paper', arxiv);
  addNode({
    id,
    label: title.slice(0, 140),
    type: 'paper',
    url: arxiv.match(/^[0-9]{4}\./) ? `https://arxiv.org/abs/${arxiv}` : undefined,
    summary: body.replace(/\s+/g, ' ').slice(0, 320),
    weight: 6,
    source: `paper-reviews/${file}`,
    group: 'paper reviews'
  });
  const reviewId = nodeId('cluster', 'paper reviews');
  addNode({ id: reviewId, label: 'paper reviews', type: 'cluster', weight: 8, summary: 'Local reviewed paper corpus' });
  addEdge({ source: id, target: reviewId, type: 'belongs_to', label: 'reviewed paper' });
  addConceptEdges(id, `${title} ${body.slice(0, 2000)}`);
}

for (const [repo, url, role, tags] of curatedFrontier) {
  const id = nodeId('project', repo);
  addNode({
    id,
    label: titleCaseRepo(repo),
    type: 'project',
    url,
    summary: role,
    weight: 10,
    source: 'curated frontier',
    group: 'frontier projects'
  });
  const frontierId = nodeId('cluster', 'frontier projects');
  addNode({ id: frontierId, label: 'frontier projects', type: 'cluster', weight: 10, summary: 'Manually ranked high-signal projects' });
  addEdge({ source: id, target: frontierId, type: 'belongs_to', label: role });
  for (const tag of tags) {
    const conceptId = nodeId('concept', tag);
    addNode({ id: conceptId, label: tag, type: 'concept', weight: 7, summary: role });
    addEdge({ source: id, target: conceptId, type: 'uses', label: role });
  }
}

const generated = {
  nodes: [...nodes.values()].sort((a, b) => a.type.localeCompare(b.type) || a.label.localeCompare(b.label)),
  edges: [...edges.values()].sort((a, b) => a.source.localeCompare(b.source) || a.target.localeCompare(b.target))
};

const content = `export const generatedKnowledgeGraph = ${JSON.stringify(generated, null, 2)} as const;\n`;
writeFileSync(join(root, 'site/src/data/generatedKnowledgeGraph.ts'), content);
console.log(`generated ${generated.nodes.length} nodes and ${generated.edges.length} edges`);

