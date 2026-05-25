import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const paperReviewDir = path.join(root, 'paper-reviews');
const rawPaperDir = path.join(root, 'raw-papers');
const outFile = path.join(root, 'site/src/data/generatedKnowledgeGraph.ts');
const coverageFile = path.join(root, 'site/src/data/researchCoverage.ts');

const encodeId = (prefix, value) =>
  `${prefix}:${encodeURIComponent(String(value).toLowerCase().trim().replace(/\s+/g, '-'))}`;

const readFiles = (dir, predicate) =>
  readdirSync(dir)
    .filter(predicate)
    .sort()
    .map((name) => ({ name, file: path.join(dir, name), text: readFileSync(path.join(dir, name), 'utf8') }));

const reviewFiles = readFiles(paperReviewDir, (name) => name.endsWith('.md') && name.startsWith('review-'));
const rawFiles = readFiles(rawPaperDir, (name) => name.endsWith('.md') && name !== 'index.md');

const cleanTitle = (value) =>
  value
    .replace(/^#+\s*/, '')
    .replace(/^["']|["']$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const extractFirst = (text, patterns, fallback = '') => {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return cleanTitle(match[1]);
  }
  return fallback;
};

const inferTags = (text) => {
  const lower = text.toLowerCase();
  const tags = [];
  const checks = [
    ['Self-refinement', ['self-refine', 'self refine', 'self-feedback', 'self feedback', 'self-correction', 'self correction']],
    ['Reflection memory', ['reflexion', 'reflection', 'reflective memory', 'episodic memory']],
    ['Agent learning', ['agent', 'trajectory', 'experience', 'lifelong']],
    ['Code evolution', ['code', 'coding', 'swe-bench', 'debug', 'program']],
    ['Benchmark/eval', ['benchmark', 'evaluation', 'webarena', 'terminal-bench', 'swe-bench']],
    ['Open-ended evolution', ['open-ended', 'archive', 'quality-diversity', 'novelty']],
    ['Reward/safety', ['reward hacking', 'misalignment', 'safety', 'governance']],
    ['Memory substrate', ['memory', 'retrieval', 'procedural']],
    ['Multi-agent', ['multi-agent', 'debate', 'collaboration']],
    ['Training-time update', ['fine-tuning', 'reinforcement learning', 'rl ', 'train']]
  ];

  for (const [tag, needles] of checks) {
    if (needles.some((needle) => lower.includes(needle))) tags.push(tag);
  }
  return tags.slice(0, 5);
};

const nodes = new Map();
const edges = [];
const addNode = (node) => {
  const existing = nodes.get(node.id);
  if (!existing || node.weight > existing.weight) nodes.set(node.id, node);
};
const addEdge = (edge) => {
  if (edge.source === edge.target) return;
  if (edges.some((item) => item.source === edge.source && item.target === edge.target && item.type === edge.type)) return;
  edges.push(edge);
};

const coverageGaps = [
  {
    title: 'A Survey on Self-Evolution of Large Language Models',
    year: '2024',
    url: 'https://arxiv.org/abs/2404.14387',
    status: 'frontier-gap',
    reason: 'LLM self-evolution survey; needed as the top-down taxonomy anchor.'
  },
  {
    title: 'A Survey of Self-Evolving Agents',
    year: '2025',
    url: 'https://arxiv.org/abs/2507.21046',
    status: 'frontier-gap',
    reason: 'Agent-specific survey; needed to benchmark our scope against an external taxonomy.'
  },
  {
    title: 'A Comprehensive Survey of Self-Evolving AI Agents',
    year: '2025',
    url: 'https://arxiv.org/abs/2508.07407',
    status: 'frontier-gap',
    reason: 'Independent survey candidate; useful for cross-checking missed branches.'
  },
  {
    title: 'Large Language Models Can Self-Improve At Web Agent Tasks',
    year: '2024',
    url: 'https://arxiv.org/abs/2405.20309',
    status: 'frontier-gap',
    reason: 'WebArena self-improvement benchmark signal; important for agent eval coverage.'
  },
  {
    title: 'OPT-BENCH: Evaluating the Iterative Self-Optimization of LLM Agents in Large-Scale Search Spaces',
    year: '2026',
    url: 'https://arxiv.org/abs/2605.08904',
    status: 'frontier-gap',
    reason: 'Benchmark for iterative self-optimization; should become an eval anchor.'
  },
  {
    title: 'Experiential Reflective Learning for Self-Improving LLM Agents',
    year: '2026',
    url: 'https://arxiv.org/abs/2603.24639',
    status: 'frontier-gap',
    reason: 'Experience-to-heuristic learning; fills memory/reflection transfer branch.'
  },
  {
    title: 'Specification Self-Correction',
    year: '2025',
    url: 'https://arxiv.org/abs/2507.18742',
    status: 'frontier-gap',
    reason: 'Turns reward hacking into a diagnostic signal for correcting the objective.'
  },
  {
    title: 'Inference-Time Reward Hacking in Large Language Models',
    year: '2025',
    url: 'https://arxiv.org/abs/2506.19248',
    status: 'frontier-gap',
    reason: 'Safety baseline for proxy reward over-optimization in inference-time improvement.'
  },
  {
    title: 'Safety is Essential for Responsible Open-Ended Systems',
    year: '2025',
    url: 'https://arxiv.org/abs/2502.04512',
    status: 'frontier-gap',
    reason: 'Open-ended evolution risk framing; needed for governance layer.'
  }
];

const clusterForTag = (tag) => {
  if (tag.includes('Code')) return 'Code and harness evolution';
  if (tag.includes('Benchmark')) return 'Evaluation and benchmarks';
  if (tag.includes('Reward') || tag.includes('safety')) return 'Safety and governance';
  if (tag.includes('Memory') || tag.includes('Reflection')) return 'Memory and reflection';
  if (tag.includes('Multi')) return 'Multi-agent evolution';
  if (tag.includes('Training')) return 'Training-time self-improvement';
  return 'Self-evolution loops';
};

const papers = [];

for (const { name, text } of reviewFiles) {
  const arxiv = extractFirst(text, [/\*\*arXiv(?: ID)?\*\*:\s*([^\n]+)/i, /-\s+\*\*arXiv ID\*\*:\s*([^\n]+)/i], '');
  const title = extractFirst(text, [/\*\*Paper\*\*:\s*([^\n]+)/i, /^#\s+Deep Review(?:\s+#\d+)?:\s*([^\n]+)/m, /^#\s+(.+)$/m], name.replace(/^review-/, '').replace(/\.md$/, ''));
  const published = extractFirst(text, [/\*\*Published\*\*:\s*([^\n]+)/i], '');
  const yearMatch = `${published} ${name}`.match(/(20\d{2})/);
  const year = yearMatch ? yearMatch[1] : 'unknown';
  const summary = extractFirst(text, [/## Summary\s+([\s\S]{0,360}?)(?:\n##|\n###|$)/i, /## 1\. Executive Summary[^\n]*\s+([\s\S]{0,360}?)(?:\n##|\n###|$)/i], '');
  const tags = inferTags(text);
  const idValue = arxiv || title;
  const paperId = encodeId('review', idValue);
  papers.push({ id: paperId, title, year, arxiv, file: `paper-reviews/${name}`, tags });
  addNode({
    id: paperId,
    label: title,
    type: 'paper',
    url: arxiv && arxiv !== 'placeholder-no-arxiv' ? `https://arxiv.org/abs/${arxiv.replace(/^arXiv:/i, '').replace(/v\d+$/, '')}` : undefined,
    summary: summary || `Review file: paper-reviews/${name}`,
    weight: arxiv === 'placeholder-no-arxiv' ? 3 : 4
  });

  for (const tag of tags) {
    const conceptId = encodeId('concept', tag);
    const clusterId = encodeId('cluster', clusterForTag(tag));
    addNode({ id: conceptId, label: tag, type: 'concept', summary: `Inferred from ${name}`, weight: 4 });
    addNode({ id: clusterId, label: clusterForTag(tag), type: 'cluster', summary: 'Generated full-corpus research cluster.', weight: 8 });
    addEdge({ source: paperId, target: conceptId, type: 'uses', label: 'inferred mechanism' });
    addEdge({ source: conceptId, target: clusterId, type: 'belongs_to', label: 'belongs to generated cluster' });
  }
}

for (const gap of coverageGaps) {
  const paperId = encodeId('paper-gap', gap.title);
  addNode({
    id: paperId,
    label: gap.title,
    type: 'paper',
    url: gap.url,
    summary: gap.reason,
    weight: 6
  });
  const conceptId = encodeId('concept', 'Coverage gap');
  const clusterId = encodeId('cluster', 'Coverage debt');
  addNode({ id: conceptId, label: 'Coverage gap', type: 'concept', summary: 'Important external paper not yet promoted to a full local review.', weight: 6 });
  addNode({ id: clusterId, label: 'Coverage debt', type: 'cluster', summary: 'Missing or under-reviewed mainstream research that should be added next.', weight: 9 });
  addEdge({ source: paperId, target: conceptId, type: 'belongs_to', label: 'needs review' });
  addEdge({ source: conceptId, target: clusterId, type: 'belongs_to', label: 'belongs to coverage debt' });
}

const rawUniqueIds = new Set(
  rawFiles.map(({ name, text }) => {
    const id = extractFirst(text, [/arXiv:\s*"?([0-9.\-]+)"?/i, /\*\*arXiv ID\*\*:\s*([^\n]+)/i], name.replace(/\.md$/, ''));
    return id.replace('-', '.').replace(/v\d+$/, '');
  })
);

const reviewedUniqueIds = new Set(
  papers
    .map((paper) => paper.arxiv.replace(/^arXiv:/i, '').replace(/v\d+$/, '').replace('-', '.'))
    .filter(Boolean)
);

const coverage = {
  rawPaperFiles: rawFiles.length,
  rawUniqueIds: rawUniqueIds.size,
  reviewFiles: reviewFiles.length,
  reviewedUniqueIds: reviewedUniqueIds.size,
  frontstageFeaturedPapers: 19,
  identifiedCoverageGaps: coverageGaps.length,
  coverageWarning:
    'Paper collection is useful but not enough: the public site must expose full-corpus reviews and track mainstream survey, benchmark, safety, and experience-learning gaps explicitly.',
  coverageGaps
};

writeFileSync(
  outFile,
  `import type { KnowledgeEdge, KnowledgeNode } from './knowledgeGraph';\n\nexport const generatedKnowledgeNodes = ${JSON.stringify([...nodes.values()], null, 2)} satisfies KnowledgeNode[];\n\nexport const generatedKnowledgeEdges = ${JSON.stringify(edges, null, 2)} satisfies KnowledgeEdge[];\n`,
  'utf8'
);

writeFileSync(
  coverageFile,
  `export const researchCoverage = ${JSON.stringify(coverage, null, 2)};\n`,
  'utf8'
);

console.log(`generated ${nodes.size} nodes and ${edges.length} edges`);
console.log(`coverage: ${reviewFiles.length} reviews, ${rawUniqueIds.size} raw unique IDs, ${coverageGaps.length} gaps`);
