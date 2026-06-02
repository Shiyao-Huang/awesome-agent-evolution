#!/usr/bin/env node
// @sm:node value-evidence-repair-queue
// @sm:feature value-comparison.evidence-repair
// @sm:prev value-lsh-index-builder
// @sm:next github-meta-completion,repo-clone-deep-read,issue-resource-scan
// @sm:deps data-engine/value-lsh-index/value-matrix.jsonl,analysis/value-lsh-index.json
// @sm:evidence node scripts/build_value_evidence_repair_queue.mjs

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const matrixPath = path.join(root, 'data-engine/value-lsh-index/value-matrix.jsonl');
const analysisJsonPath = path.join(root, 'analysis/value-lsh-index.json');
const outJsonPath = path.join(root, 'analysis/value-evidence-repair-queue.json');
const outMdPath = path.join(root, 'analysis/value-evidence-repair-queue.md');

const readJson = (filePath, fallback = null) => (fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : fallback);
const readJsonl = (filePath) => fs.readFileSync(filePath, 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const writeJson = (filePath, value) => fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
const writeText = (filePath, value) => fs.writeFileSync(filePath, value.endsWith('\n') ? value : `${value}\n`);
const round = (value, places = 2) => {
  const factor = 10 ** places;
  return Math.round((Number(value) || 0) * factor) / factor;
};
const safe = (value) => String(value ?? '').replace(/\|/g, '/').replace(/\n/g, ' ');
const link = (label, url) => (url ? `[${safe(label)}](${url})` : safe(label));

const gapDefs = [
  {
    id: 'raw_meta_missing',
    weight: 16,
    label: 'Raw/meta missing',
    test: (row) => !row.evidence_refs?.raw_file,
    action: 'create or repair raw-github capture with complete frontmatter and timestamps'
  },
  {
    id: 'deep_report_missing',
    weight: 14,
    label: 'Deep report missing',
    test: (row) => !row.evidence_refs?.public_report && !row.evidence_refs?.github_report && !row.evidence_refs?.analysis_report,
    action: 'clone/read code and create model-card style deep report'
  },
  {
    id: 'frontier_queue_missing',
    weight: 8,
    label: 'Frontier queue missing',
    test: (row) => !row.evidence_refs?.frontier_rank && !row.evidence_refs?.analysis_report,
    action: 'enqueue for frontier-value scan with evidence_chain and mirror_chain'
  },
  {
    id: 'star_growth_missing',
    weight: 6,
    label: 'Star growth missing',
    test: (row) => !row.evidence_refs?.star_growth_rank,
    action: 'fetch or rebuild 2026 stargazer history coverage'
  },
  {
    id: 'issue_resource_unclear',
    weight: 6,
    label: 'Issue/resource unclear',
    test: (row) => row.values?.issue_resource_signal !== 1 && !row.evidence_refs?.analysis_report,
    action: 'scan GitHub issues, releases, discussions, PRs, and linked resources'
  },
  {
    id: 'self_evolution_unclear',
    weight: 5,
    label: 'Self-evolution unclear',
    test: (row) => row.values?.self_evolution_loop_fit !== 1 && !row.evidence_refs?.analysis_report,
    action: 'verify mutable artifact, feedback, verifier, retention, and rollback loop'
  },
  {
    id: 'implementation_unclear',
    weight: 5,
    label: 'Implementation unclear',
    test: (row) => row.values?.implementation_runnable !== 1,
    action: 'inspect install path, tests/evals, examples, package layout, and runnable entrypoints'
  },
  {
    id: 'evidence_chain_incomplete',
    weight: 4,
    label: 'Evidence chain incomplete',
    test: (row) => row.values?.evidence_chain_complete !== 1,
    action: 'connect raw source, processed report, local code evidence, and generated index rows'
  }
];

const classBonus = {
  'high-value-candidate': 22,
  'needs-review': 10,
  'low-signal-or-risk': 4
};

const repairRow = (row) => {
  const gaps = gapDefs.filter((gap) => gap.test(row));
  const repairScore = round(
    (Number(row.value_score) || 0) +
    (classBonus[row.value_class] || 0) +
    gaps.reduce((sum, gap) => sum + gap.weight, 0)
  );
  const lane = gaps.some((gap) => gap.id === 'raw_meta_missing')
    ? 'raw-meta-repair'
    : gaps.some((gap) => gap.id === 'deep_report_missing')
      ? 'deep-read-needed'
      : gaps.some((gap) => gap.id === 'issue_resource_unclear')
        ? 'issue-resource-scan'
        : gaps.some((gap) => gap.id === 'star_growth_missing')
          ? 'star-growth-repair'
          : 'loop-verification';
  return {
    id: row.id,
    repo: row.id.replace(/^github:/, ''),
    title: row.title,
    url: row.url,
    value_score: row.value_score,
    value_class: row.value_class,
    repair_score: repairScore,
    lane,
    gaps: gaps.map(({ id, label, action }) => ({ id, label, action })),
    evidence_refs: row.evidence_refs
  };
};

const countBy = (rows, key) => rows.reduce((acc, row) => {
  acc[row[key]] = (acc[row[key]] || 0) + 1;
  return acc;
}, {});

const renderTable = (headers, rows) => [
  `| ${headers.join(' | ')} |`,
  `| ${headers.map((header) => (header.match(/score|count|rank|gaps/i) ? '---:' : '---')).join(' | ')} |`,
  ...rows.map((row) => `| ${row.map(safe).join(' | ')} |`)
].join('\n');

const renderMarkdown = ({ generatedAt, summary, queue }) => {
  const md = [];
  md.push('# Value Evidence Repair Queue');
  md.push('');
  md.push(`> Generated: ${generatedAt}. This queue converts value-LSH comparison into concrete evidence repair actions for GitHub projects.`);
  md.push('');
  md.push('## One Sentence');
  md.push('');
  md.push('The value map is now actionable: high-scoring or contradictory GitHub projects are ordered by which evidence gaps block trustworthy comparison.');
  md.push('');
  md.push('## Three Sentences');
  md.push('');
  md.push(`This run inspected ${summary.github_projects} GitHub rows from the value matrix and found ${summary.projects_with_gaps} projects with at least one repair gap. The top lanes are raw/meta repair, deep code/report reading, issue/resource scanning, star-growth repair, and loop verification. A high repair score does not mean the project is bad; it means the project is important enough, or contradictory enough, that missing evidence should be fixed before public claims.`);
  md.push('');
  md.push('## Lane Counts');
  md.push('');
  md.push(renderTable(['lane', 'count'], Object.entries(summary.lane_counts).sort((a, b) => b[1] - a[1])));
  md.push('');
  md.push('## Gap Counts');
  md.push('');
  md.push(renderTable(['gap', 'count'], Object.entries(summary.gap_counts).sort((a, b) => b[1] - a[1])));
  md.push('');
  md.push('## Top Repair Queue');
  md.push('');
  md.push(renderTable(
    ['rank', 'project', 'class', 'value score', 'repair score', 'lane', 'gaps', 'first action'],
    queue.slice(0, 40).map((row, index) => [
      index + 1,
      link(row.title || row.repo, row.url),
      row.value_class,
      row.value_score,
      row.repair_score,
      row.lane,
      row.gaps.map((gap) => gap.id).join(', '),
      row.gaps[0]?.action || ''
    ])
  ));
  md.push('');
  md.push('## Trust Chain');
  md.push('');
  md.push('- [KNOWN] Input rows come from `data-engine/value-lsh-index/value-matrix.jsonl` generated by `scripts/build_value_lsh_index.mjs`.');
  md.push('- [KNOWN] Repair gaps are derived from existing evidence refs and value tags; this script does not fetch remote GitHub data.');
  md.push('- [INFERRED] Repair score is an action-priority score, not a quality score.');
  md.push('- [UNVERIFIED] Live issue/release/code claims remain unverified until the listed repair action is executed.');
  md.push('');
  return md.join('\n');
};

const main = () => {
  const matrix = readJsonl(matrixPath);
  const lsh = readJson(analysisJsonPath, {});
  const githubRows = matrix.filter((row) => row.type === 'github');
  const queue = githubRows
    .map(repairRow)
    .filter((row) => row.gaps.length)
    .sort((a, b) =>
      b.repair_score - a.repair_score ||
      b.value_score - a.value_score ||
      a.repo.localeCompare(b.repo)
    );
  const gapCounts = {};
  for (const row of queue) {
    for (const gap of row.gaps) gapCounts[gap.id] = (gapCounts[gap.id] || 0) + 1;
  }
  const generatedAt = new Date().toISOString();
  const summary = {
    generated_at: generatedAt,
    source_lsh_generated_at: lsh.generated_at || null,
    github_projects: githubRows.length,
    projects_with_gaps: queue.length,
    lane_counts: countBy(queue, 'lane'),
    gap_counts: gapCounts,
    top_repair_score: queue[0]?.repair_score || 0
  };
  const output = {
    generated_at: generatedAt,
    method: {
      name: 'value_evidence_repair_queue_v0',
      source: 'data-engine/value-lsh-index/value-matrix.jsonl',
      note: 'Prioritizes evidence repair work after value-LSH comparison; repair score is not a quality score.'
    },
    summary,
    queue
  };
  writeJson(outJsonPath, output);
  writeText(outMdPath, renderMarkdown({ generatedAt, summary, queue }));
  console.log(`Generated analysis/value-evidence-repair-queue.{json,md}: ${queue.length} GitHub projects with repair gaps`);
};

main();
