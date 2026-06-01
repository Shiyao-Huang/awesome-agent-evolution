#!/usr/bin/env node
// @sm:node frontier-value-queue-generator
// @sm:feature value-screening.dual-chain
// @sm:prev github-project-data-analysis
// @sm:next frontier-project-code-issue-scan
// @sm:deps analysis/github-project-data-analysis.json,analysis/github-star-growth-ranking.json,output/raw-github-timestamp-index.json,site/src/data/projects.ts
// @sm:evidence node scripts/generate_frontier_value_queue.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const analysisPath = path.join(root, 'analysis/github-project-data-analysis.json');
const rawTimestampPath = path.join(root, 'output/raw-github-timestamp-index.json');
const starGrowthPath = path.join(root, 'analysis/github-star-growth-ranking.json');
const jsonOut = path.join(root, 'analysis/frontier-value-queue.json');
const mdOut = path.join(root, 'analysis/frontier-value-queue.md');
const W = {
  recency: 0.40,
  continuity: 0.20,
  self_evolution_gap_fit: 0.15,
  implementation_evidence: 0.10,
  discourse_and_resource_signal: 0.10,
  benchmark_or_product_usefulness: 0.05
};

const normalizeRepo = (repo) =>
  String(repo || '')
    .replace(/^https:\/\/github\.com\//, '')
    .replace(/\?tab=.*$/, '')
    .toLowerCase();

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, Number(value) || 0));
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const fmt = (value) => Number(value || 0).toFixed(2);
const esc = (value) => String(value ?? '').replace(/\|/g, '/');
const link = (label, target) => (target ? `[${label}](${target})` : label);

const parseDate = (value) => {
  if (!value || value === 'unknown') return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
};

const monthKey = (date) => `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;

const monthsBetween = (older, newer) => {
  if (!older || !newer) return null;
  return (newer.getUTCFullYear() - older.getUTCFullYear()) * 12 + (newer.getUTCMonth() - older.getUTCMonth());
};

const chooseDate = (row, fields) => {
  for (const field of fields) {
    const date = parseDate(row[field]);
    if (date) return { field, value: row[field], date, month: monthKey(date) };
  }
  return null;
};

const runGit = (localPath, args) => {
  if (!localPath) return null;
  const repoPath = path.join(root, localPath);
  if (!fs.existsSync(path.join(repoPath, '.git'))) return null;
  try {
    return execFileSync('git', ['-C', repoPath, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim() || null;
  } catch {
    return null;
  }
};

const listTopLevel = (repoPath) => {
  try {
    return fs.readdirSync(repoPath, { withFileTypes: true })
      .filter((entry) => !entry.name.startsWith('.git') && entry.name !== 'node_modules')
      .map((entry) => entry.name)
      .slice(0, 24);
  } catch {
    return [];
  }
};

const scanRepoPaths = (repoPath, maxFiles = 3500) => {
  const skip = new Set(['.git', 'node_modules', 'dist', 'build', '.next', '.venv', 'venv', '__pycache__']);
  const results = [];
  const walk = (dir, depth) => {
    if (results.length >= maxFiles || depth > 4) return;
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (results.length >= maxFiles) return;
      if (skip.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      const rel = path.relative(repoPath, full);
      results.push(rel);
      if (entry.isDirectory()) walk(full, depth + 1);
    }
  };
  walk(repoPath, 0);
  return results;
};

const scanLocalRepo = (localPath) => {
  const repoPath = localPath ? path.join(root, localPath) : null;
  const exists = Boolean(repoPath && fs.existsSync(path.join(repoPath, '.git')));
  if (!exists) {
    return {
      exists: false,
      path: localPath || null,
      issue_scan_status: 'network_or_clone_required'
    };
  }

  const paths = scanRepoPaths(repoPath);
  const lower = paths.map((item) => item.toLowerCase());
  const has = (patterns) => lower.some((item) => patterns.some((pattern) => item.includes(pattern)));
  const topLevel = listTopLevel(repoPath);
  const flags = {
    docs: has(['readme', 'docs/', 'documentation']),
    tests: has(['test/', 'tests/', '__tests__', '.test.', 'pytest', 'unittest']),
    evals: has(['eval', 'benchmark', 'bench', 'grader', 'score']),
    examples: has(['example', 'demo', 'tutorial']),
    prompts_or_skills: has(['prompt', 'skill', 'skills/', 'playbook']),
    memory_or_state: has(['memory', 'state', 'checkpoint', 'archive']),
    agents_or_workflows: has(['agent', 'workflow', 'orchestr', 'harness']),
    safety_or_guards: has(['safety', 'guard', 'policy', 'rollback', 'regression']),
    issue_templates: has(['.github/issue_template'])
  };
  return {
    exists: true,
    path: localPath,
    head: runGit(localPath, ['rev-parse', '--short', 'HEAD']),
    branch: runGit(localPath, ['branch', '--show-current']),
    top_level: topLevel,
    sampled_paths: paths.length,
    flags,
    issue_scan_status: flags.issue_templates ? 'local_issue_templates_present' : 'remote_issue_scan_required'
  };
};

const gatePatterns = {
  observe: ['observe', 'trace', 'trajectory', 'interaction', 'episode', 'log', 'record', '轨迹', '日志', '观察'],
  interpret: ['reflect', 'judge', 'critique', 'score', 'evaluate', 'self-judge', 'analysis', '反思', '评判', '评分', '分析'],
  modify: ['evolve', 'mutat', 'optimiz', 'train', 'update', 'rewrite', 'refine', 'search', '进化', '演化', '优化', '训练', '搜索', '更新'],
  verify: ['benchmark', 'eval', 'test', 'verifier', 'grader', 'reward', 'safety', '评估', '测试', '验证', '奖励', '安全'],
  retain: ['retain', 'memory', 'skill', 'checkpoint', 'archive', 'persist', 'distill', 'map', '记忆', '技能', '保留', '持久', '蒸馏', '策略池'],
  rollback: ['rollback', 'guard', 'safety', 'regression', 'gate', 'policy', '回滚', '守卫', '安全', '回归', '门控', '策略']
};

const detectGates = (row) => {
  const text = [
    row.repo,
    row.name,
    row.category,
    row.pattern,
    row.description,
    ...(row.tags || []),
    row.classification_evidence
  ].join(' ').toLowerCase();
  return Object.fromEntries(
    Object.entries(gatePatterns).map(([gate, patterns]) => [gate, patterns.some((pattern) => text.includes(pattern))])
  );
};

const countTrue = (obj) => Object.values(obj).filter(Boolean).length;

const scoreContinuity = (row, referenceDate, localScan) => {
  let score = 0;
  const activity = chooseDate(row, [
    'github_pushed_at',
    'lastPushed',
    'raw_content_timestamp',
    'raw_collected_at',
    'first_observed_at',
    'created_at'
  ]);
  const months = activity ? monthsBetween(activity.date, referenceDate) : null;
  if (months !== null && months <= 1) score += 40;
  else if (months !== null && months <= 3) score += 34;
  else if (months !== null && months <= 6) score += 26;
  else if (months !== null && months <= 12) score += 18;
  else if (months !== null && months <= 24) score += 10;

  if (String(row.raw_time_slice || '').startsWith('2026')) score += 18;
  if (row.evolution_focused) score += 12;
  if (localScan.exists) score += 10;
  if ((row.local_git_history_24m?.commits_24m || 0) >= 3) score += 8;
  if ((row.local_git_history_24m?.tags_24m || 0) > 0) score += 5;
  if (String(row.classification_evidence || '').match(/\bfollow|roadmap|release|active|commits?\b/i)) score += 7;

  return {
    score: clamp(score),
    activity_source: activity?.field || 'unknown',
    activity_at: activity?.value || null,
    months_since_activity: months
  };
};

const scoreGapFit = (row, gates) => {
  let score = countTrue(gates) * 13;
  if (row.evolution_focused) score += 12;
  if (row.classified_theme === 'evolution') score += 8;
  if (gates.modify && gates.verify && gates.retain) score += 12;
  if (gates.observe && gates.modify && gates.verify) score += 8;
  return clamp(score);
};

const scoreImplementation = (row, localScan) => {
  let score = 0;
  if (localScan.exists) score += 34;
  if (row.public_report_exists) score += 18;
  if (row.status === 'verified') score += 14;
  if (row.raw_file) score += 10;
  if (row.local_git?.head || localScan.head) score += 8;
  if (localScan.flags?.tests) score += 8;
  if (localScan.flags?.evals) score += 8;
  if (localScan.flags?.examples) score += 4;
  if (localScan.flags?.prompts_or_skills || localScan.flags?.agents_or_workflows) score += 5;
  return clamp(score);
};

const scoreDiscourse = (row, localScan) => {
  let score = 0;
  const evidence = String(row.classification_evidence || '');
  if (evidence) score += 20;
  if (evidence.match(/\bstars?\b/i)) score += 8;
  if (evidence.match(/\bforks?\b/i)) score += 6;
  if (evidence.match(/\bcommits?\b/i)) score += 8;
  if (evidence.match(/\blicen[sc]e\b/i)) score += 4;
  if (row.github_source === 'github_api') score += 14;
  if (row.github_source && row.github_source !== 'github_api') score += 5;
  if (localScan.flags?.issue_templates) score += 10;
  if (row.raw_timestamp_source && row.raw_timestamp_source !== 'unknown_not_present_in_raw_capture') score += 10;
  return clamp(score);
};

const classifyLane = (row, score, localScan, currentRank) => {
  const created = parseDate(row.created_at);
  const hasCurrentRaw = String(row.raw_time_slice || '').match(/^2026-(05|06)/);
  if (currentRank && currentRank <= 10 && localScan.exists) return 'frontier-code-ready';
  if (currentRank && currentRank <= 10 && !localScan.exists) return 'frontier-clone-needed';
  if (score >= 58 && localScan.exists) return 'frontier-code-ready';
  if (score >= 58 && !localScan.exists) return 'frontier-clone-needed';
  if (!created && score >= 48) return 'metadata-refresh';
  if (created && created < new Date(Date.UTC(2025, 0, 1))) return 'historical-baseline';
  if (hasCurrentRaw) return 'watch-current-raw';
  return 'park-for-later';
};

const nextActionFor = (row, lane, localScan, starGrowthSignal) => {
  const actions = [];
  if (!row.created_at) actions.push('refresh GitHub API metadata');
  if (starGrowthSignal.coverage_status === 'missing_from_star_history') actions.push('rebuild star-history seed and fetch stargazer events');
  else if (starGrowthSignal.coverage_status !== 'complete_or_near_complete') actions.push('fetch stargazer history for 2026 growth coverage');
  if (!localScan.exists) actions.push('clone repository for code/architecture scan');
  else actions.push('scan local code for mutable artifact, verifier, retention, rollback');
  actions.push('read issues/PRs/releases/resources for continuity evidence');
  if (lane === 'historical-baseline') actions.push('compare as baseline rather than frontier candidate');
  return actions.join(' -> ');
};

const rankDecisionFor = (lane) => {
  if (lane === 'frontier-code-ready') return 'promote-code-scan';
  if (lane === 'frontier-clone-needed') return 'promote-clone-then-scan';
  if (lane === 'metadata-refresh') return 'refresh-before-ranking';
  if (lane === 'historical-baseline') return 'baseline-compare';
  if (lane === 'watch-current-raw') return 'watch-and-sample';
  return 'park';
};

const summarizeWhy = (row, scores, gates, localScan) => {
  const parts = [];
  if (scores.recency >= 70) parts.push('fresh time signal');
  if (scores.continuity >= 65) parts.push('active continuity signal');
  if (scores.self_evolution_gap_fit >= 75) parts.push('strong OIMVR gap fit');
  if (localScan.exists) parts.push('local clone ready');
  if (!row.created_at) parts.push('created_at missing');
  if (row.raw_time_slice?.startsWith('2026')) parts.push(`raw ${row.raw_time_slice}`);
  if (countTrue(gates) < 3) parts.push('gap-fit weak');
  return parts.slice(0, 4).join('; ') || 'mixed evidence';
};

const analysis = readJson(analysisPath);
const rawTimestamp = fs.existsSync(rawTimestampPath) ? readJson(rawTimestampPath) : { records: [] };
const referenceDate = parseDate(analysis.ranking_method?.reference_date) || parseDate(analysis.generated_at) || new Date();
const rankingByRepo = new Map((analysis.recency_weighted_project_ranking || []).map((row) => [normalizeRepo(row.repo), row]));
const rawByRepo = new Map((rawTimestamp.records || []).map((row) => [normalizeRepo(row.repo), row]));
const starGrowth = fs.existsSync(starGrowthPath) ? readJson(starGrowthPath) : null;
const starGrowthByRepo = new Map((starGrowth?.ranking || []).map((row) => [normalizeRepo(row.repo), row]));

const starGrowthSignalFor = (repo) => {
  const row = starGrowthByRepo.get(normalizeRepo(repo));
  if (!row) {
    return {
      coverage_status: 'missing_from_star_history',
      growth_quality_score: null,
      coverage_qualified_rank: null,
      fetch_priority_rank: null,
      current_total_stars: null,
      new_stars_year: null,
      new_stars_recent_90d: null,
      first_starred_at: null,
      last_starred_at: null,
      fetched_star_events: 0,
      score_bonus: 0,
      caveat: 'star_history_missing'
    };
  }

  const covered = row.coverage_status === 'complete_or_near_complete';
  const partial = row.coverage_status === 'partial';
  return {
    coverage_status: row.coverage_status,
    growth_quality_score: row.growth_quality_score,
    coverage_qualified_rank: row.coverage_qualified_rank ?? null,
    fetch_priority_rank: row.fetch_priority_rank ?? null,
    current_total_stars: row.current_total_stars ?? null,
    new_stars_year: row.new_stars_year ?? null,
    new_stars_recent_90d: row.new_stars_recent_90d ?? null,
    first_starred_at: row.first_starred_at ?? null,
    last_starred_at: row.last_starred_at ?? null,
    fetched_star_events: row.fetched_star_events ?? 0,
    score_bonus: covered ? Math.min(14, Math.max(4, Number(row.growth_quality_score || 0) * 0.14)) : partial ? 2 : 0,
    caveat: covered ? null : partial ? 'star_history_partial' : 'star_history_not_fetched'
  };
};

const rows = (analysis.analyzed_projects || []).map((row) => {
  const normalized = normalizeRepo(row.repo);
  const ranking = rankingByRepo.get(normalized);
  const raw = rawByRepo.get(normalized);
  const merged = { ...row, ...(raw ? { raw_index_file: raw.file } : {}) };
  const localScan = scanLocalRepo(row.localPath);
  const starGrowthSignal = starGrowthSignalFor(normalized);
  const gates = detectGates(merged);
  const continuity = scoreContinuity(merged, referenceDate, localScan);
  const scores = {
    recency: clamp(ranking?.scores?.time ?? 0),
    continuity: clamp(continuity.score + starGrowthSignal.score_bonus),
    self_evolution_gap_fit: scoreGapFit(merged, gates),
    implementation_evidence: scoreImplementation(merged, localScan),
    discourse_and_resource_signal: scoreDiscourse(merged, localScan),
    benchmark_or_product_usefulness: clamp(ranking?.scores?.usefulness ?? 50)
  };
  const frontierValue = Object.entries(W).reduce((sum, [key, weight]) => sum + scores[key] * weight, 0);
  const lane = classifyLane(merged, frontierValue, localScan, ranking?.rank);
  return {
    repo: row.repo,
    normalized_repo: normalized,
    name: row.name,
    url: row.url,
    category: row.category,
    pattern: row.pattern,
    description: row.description,
    tags: row.tags || [],
    status: row.status,
    lane,
    current_value_rank: ranking?.rank ?? null,
    current_value_score: ranking?.scores?.current_value ?? null,
    frontier_value: Number(frontierValue.toFixed(2)),
    frontier_scores: Object.fromEntries(Object.entries(scores).map(([key, value]) => [key, Number(value.toFixed(2))])),
    why: summarizeWhy(merged, scores, gates, localScan),
    next_action: nextActionFor(merged, lane, localScan, starGrowthSignal),
    evidence_chain: {
      raw_capture: row.raw_file || row.raw_index_file || raw?.file || null,
      raw_collected_at: row.raw_collected_at || raw?.collected_at || null,
      raw_time_slice: row.raw_time_slice || raw?.time_slice || 'unknown',
      github_source: row.github_source || row.created_at_source || 'unknown',
      created_at: row.created_at || null,
      github_pushed_at: row.github_pushed_at || null,
      site_last_pushed: row.lastPushed || null,
      local_mirror: localScan.exists ? localScan.path : null,
      local_scan: localScan,
      public_report: row.public_report || (row.report ? `site/public/reports/${row.report}` : null),
      report: row.report || null,
      classification: {
        theme: row.classified_theme || null,
        category: row.classification_category || null,
        function_tag: row.classification_function_tag || null,
        evidence: row.classification_evidence || null
      },
      continuity_signal: continuity,
      star_growth_signal: starGrowthSignal
    },
    mirror_chain: {
      node: `project.${normalized.replace(/[^a-z0-9]+/g, '.')}`,
      feature: 'frontier-value-screening',
      intent: `Determine whether ${row.repo} fills a current self-evolution pipeline gap.`,
      value_gap: Object.entries(gates).filter(([, ok]) => ok).map(([gate]) => gate),
      rank_decision: rankDecisionFor(lane),
      continuity: continuity.activity_at ? `${continuity.activity_source}:${continuity.activity_at}` : 'unknown',
      caveats: [
        !row.created_at ? 'created_at_unverified' : null,
        !localScan.exists ? 'local_clone_missing' : null,
        localScan.issue_scan_status === 'remote_issue_scan_required' ? 'remote_issue_scan_missing' : null,
        starGrowthSignal.caveat
      ].filter(Boolean)
    }
  };
});

rows.sort((a, b) => b.frontier_value - a.frontier_value || (a.current_value_rank ?? 9999) - (b.current_value_rank ?? 9999) || a.repo.localeCompare(b.repo));
rows.forEach((row, index) => {
  row.frontier_rank = index + 1;
});

const lanes = rows.reduce((acc, row) => {
  acc[row.lane] = (acc[row.lane] || 0) + 1;
  return acc;
}, {});

const queue = {
  generated_at: new Date().toISOString(),
  source_analysis: {
    path: 'analysis/github-project-data-analysis.json',
    generated_at: analysis.generated_at,
    counts: analysis.counts
  },
  method: {
    name: 'frontier_value_dual_chain_queue',
    reference_date: referenceDate.toISOString(),
    weights: W,
    note: 'Offline triage queue. Remote issues/PRs/releases are marked as next evidence unless already present in local/raw captures.'
  },
  summary: {
    total_analyzed_projects: rows.length,
    lanes,
    local_clone_ready: rows.filter((row) => row.evidence_chain.local_mirror).length,
    clone_needed_frontier: rows.filter((row) => row.lane === 'frontier-clone-needed').length,
    missing_created_at: rows.filter((row) => !row.evidence_chain.created_at).length,
    remote_issue_scan_missing: rows.filter((row) => row.mirror_chain.caveats.includes('remote_issue_scan_missing')).length,
    star_growth_covered: rows.filter((row) => row.evidence_chain.star_growth_signal.coverage_status === 'complete_or_near_complete').length,
    star_history_not_fetched: rows.filter((row) => row.mirror_chain.caveats.includes('star_history_not_fetched')).length,
    star_history_missing: rows.filter((row) => row.mirror_chain.caveats.includes('star_history_missing')).length
  },
  queues: {
    frontier_code_ready: rows.filter((row) => row.lane === 'frontier-code-ready').slice(0, 20),
    frontier_clone_needed: rows.filter((row) => row.lane === 'frontier-clone-needed').slice(0, 30),
    metadata_refresh: rows.filter((row) => row.lane === 'metadata-refresh').slice(0, 30),
    historical_baseline: rows.filter((row) => row.lane === 'historical-baseline').slice(0, 20)
  },
  items: rows
};

const tableRows = (items, limit = 20) =>
  items.slice(0, limit).map((row) => [
    row.frontier_rank,
    link(row.repo, row.url),
    fmt(row.frontier_value),
    row.lane,
    row.evidence_chain.created_at ? row.evidence_chain.created_at.slice(0, 10) : 'unknown',
    row.evidence_chain.raw_time_slice || 'unknown',
    row.evidence_chain.star_growth_signal.coverage_status === 'complete_or_near_complete'
      ? `${row.evidence_chain.star_growth_signal.new_stars_year || 0} new`
      : row.evidence_chain.star_growth_signal.fetch_priority_rank
        ? `fetch #${row.evidence_chain.star_growth_signal.fetch_priority_rank}`
        : row.evidence_chain.star_growth_signal.coverage_status,
    row.evidence_chain.local_mirror ? 'yes' : 'no',
    esc(row.why),
    esc(row.next_action)
  ]);

const renderTable = (headers, rowsToRender) => {
  const lines = [];
  lines.push(`| ${headers.join(' | ')} |`);
  lines.push(`| ${headers.map((header) => (header.match(/rank|score/i) ? '---:' : '---')).join(' | ')} |`);
  for (const row of rowsToRender) lines.push(`| ${row.join(' | ')} |`);
  return lines.join('\n');
};

const md = [];
md.push('# Frontier Value Queue');
md.push('');
md.push(`> Generated: ${queue.generated_at}. Source: \`analysis/github-project-data-analysis.json\` generated ${analysis.generated_at}.`);
md.push('');
md.push('## One Sentence');
md.push('');
md.push('The frontier queue turns the dual-chain protocol into a repeatable project triage table: current projects are separated into code-ready, clone-needed, metadata-refresh, baseline, and parked lanes before humans or agents spend deep-reading time.');
md.push('');
md.push('## Three Sentences');
md.push('');
md.push(`The queue scores ${rows.length} analyzed projects with 40% recency, 20% continuity, 15% self-evolution gap fit, 10% implementation evidence, 10% discourse/resource signal, and 5% usefulness. It preserves the existing current-value ranking as one input, then adds local clone readiness, raw timestamp evidence, project reports, 2026 star-growth coverage, and Self Mirror style rank decisions. Because this run is offline, remote issues/PRs/releases are not silently assumed; projects needing that step are marked with explicit next actions.`);
md.push('');
md.push('## Lane Counts');
md.push('');
md.push(renderTable(['lane', 'count'], Object.entries(lanes).sort((a, b) => b[1] - a[1]).map(([lane, count]) => [lane, count])));
md.push('');
md.push('## Top Frontier Queue');
md.push('');
md.push(renderTable(['rank', 'project', 'score', 'lane', 'created', 'raw time', 'star growth', 'clone', 'why', 'next action'], tableRows(rows, 30)));
md.push('');
md.push('## Code-Ready Frontier');
md.push('');
md.push(renderTable(['rank', 'project', 'score', 'lane', 'created', 'raw time', 'star growth', 'clone', 'why', 'next action'], tableRows(queue.queues.frontier_code_ready, 15)));
md.push('');
md.push('## Clone-Needed Frontier');
md.push('');
md.push(renderTable(['rank', 'project', 'score', 'lane', 'created', 'raw time', 'star growth', 'clone', 'why', 'next action'], tableRows(queue.queues.frontier_clone_needed, 15)));
md.push('');
md.push('## Metadata Refresh Queue');
md.push('');
md.push(renderTable(['rank', 'project', 'score', 'lane', 'created', 'raw time', 'star growth', 'clone', 'why', 'next action'], tableRows(queue.queues.metadata_refresh, 15)));
md.push('');
md.push('## Dual-Chain Packet Shape');
md.push('');
md.push('```yaml');
for (const row of rows.slice(0, 5)) {
  md.push(`- repo: ${row.repo}`);
  md.push(`  frontier_rank: ${row.frontier_rank}`);
  md.push(`  lane: ${row.lane}`);
  md.push(`  evidence_chain:`);
  md.push(`    raw_capture: ${row.evidence_chain.raw_capture || 'null'}`);
  md.push(`    local_mirror: ${row.evidence_chain.local_mirror || 'null'}`);
  md.push(`    public_report: ${row.evidence_chain.public_report || 'null'}`);
  md.push(`    star_growth: ${row.evidence_chain.star_growth_signal.coverage_status}`);
  md.push(`  mirror_chain:`);
  md.push(`    node: ${row.mirror_chain.node}`);
  md.push(`    value_gap: [${row.mirror_chain.value_gap.join(', ')}]`);
  md.push(`    rank_decision: ${row.mirror_chain.rank_decision}`);
  md.push(`    caveats: [${row.mirror_chain.caveats.join(', ')}]`);
}
md.push('```');
md.push('');
md.push('## Trust Chain');
md.push('');
md.push('- [KNOWN] Source corpus counts, public reports, local git metadata, and current-value ranking come from `analysis/github-project-data-analysis.json`.');
md.push('- [KNOWN] Raw capture paths and raw time slices are joined from `output/raw-github-timestamp-index.json` when present.');
md.push('- [KNOWN] Star-growth coverage and fetch backlog ranks are joined from `analysis/github-star-growth-ranking.json`; `not_fetched` is a data-collection state, not negative demand evidence.');
md.push('- [KNOWN] Local code scan is an offline filesystem scan of existing `repos/*` mirrors and does not execute project code.');
md.push('- [INFERRED] Frontier score is a triage heuristic derived from the dual-chain protocol, not a final scientific ranking.');
md.push('- [UNVERIFIED] Remote issues, PRs, releases, and discussions still require network-backed review for promoted projects.');
md.push('');

fs.writeFileSync(jsonOut, `${JSON.stringify(queue, null, 2)}\n`);
fs.writeFileSync(mdOut, `${md.join('\n').replace(/\n+$/u, '')}\n`);
console.log(`Generated ${path.relative(root, jsonOut)} and ${path.relative(root, mdOut)} (${rows.length} projects)`);
