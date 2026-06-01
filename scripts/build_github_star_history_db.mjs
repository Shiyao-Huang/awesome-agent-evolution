#!/usr/bin/env node
// @sm:node github-star-history-db-builder
// @sm:feature github-star-growth.current-momentum-ranking
// @sm:prev github-project-data-analysis
// @sm:next huggingface-dataset-publish
// @sm:deps analysis/github-project-data-analysis.json,research/repo-classification.json
// @sm:evidence node scripts/build_github_star_history_db.mjs --no-fetch --limit 5

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const defaultOutDir = path.join(root, 'data-engine/github-star-history');
const defaultAnalysisPath = path.join(root, 'analysis/github-project-data-analysis.json');
const defaultRankingJson = path.join(root, 'analysis/github-star-growth-ranking.json');
const defaultRankingMd = path.join(root, 'analysis/github-star-growth-ranking.md');

const NOW = new Date();
const DEFAULT_YEAR = NOW.getUTCFullYear();

const usage = () => `Usage:
  node scripts/build_github_star_history_db.mjs [options]

Options:
  --repo owner/name             Restrict to one repo; may be repeated.
  --limit N                     Limit seed repositories after filtering.
  --year YYYY                   Ranking year for new-star counts. Default: current UTC year (${DEFAULT_YEAR}).
  --since YYYY-MM-DD            Recent-window lower bound for aggregation. Default: YYYY-01-01.
  --out-dir PATH                Dataset work directory. Default: data-engine/github-star-history.
  --analysis PATH               GitHub corpus analysis JSON. Default: analysis/github-project-data-analysis.json.
  --max-pages-per-repo N        Maximum stargazer pages per repo. Default: 3. Use 0 with --no-fetch.
  --per-page N                  GitHub stargazers page size. Default/max: 100.
  --token-env NAME              Environment variable holding GitHub token. Default: GITHUB_TOKEN.
  --no-fetch                    Do not call GitHub; only build seed/aggregate from existing JSONL database.
  --dry-run                     Print the selected seed repos and exit without writing.
  --help                        Show this help.

Notes:
  - GitHub's stargazers endpoint only includes star creation time when requested with
    Accept: application/vnd.github.star+json.
  - Full history for very large repositories needs many pages. Partial fetches are marked
    as partial and must not be used as complete rankings.
`;

const parseArgs = (argv) => {
  const args = {
    repos: [],
    limit: null,
    year: DEFAULT_YEAR,
    since: null,
    outDir: defaultOutDir,
    analysisPath: defaultAnalysisPath,
    maxPagesPerRepo: 3,
    perPage: 100,
    tokenEnv: 'GITHUB_TOKEN',
    noFetch: false,
    dryRun: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => argv[++i];
    if (arg === '--repo') args.repos.push(normalizeRepo(next()));
    else if (arg === '--limit') args.limit = Number(next());
    else if (arg === '--year') args.year = Number(next());
    else if (arg === '--since') args.since = next();
    else if (arg === '--out-dir') args.outDir = path.resolve(root, next());
    else if (arg === '--analysis') args.analysisPath = path.resolve(root, next());
    else if (arg === '--max-pages-per-repo') args.maxPagesPerRepo = Number(next());
    else if (arg === '--per-page') args.perPage = Math.min(100, Number(next()) || 100);
    else if (arg === '--token-env') args.tokenEnv = next();
    else if (arg === '--no-fetch') args.noFetch = true;
    else if (arg === '--dry-run') args.dryRun = true;
    else if (arg === '--help' || arg === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }

  if (!Number.isFinite(args.year) || args.year < 2008) throw new Error(`Invalid --year: ${args.year}`);
  if (!args.since) args.since = `${args.year}-01-01`;
  if (!Number.isFinite(args.maxPagesPerRepo) || args.maxPagesPerRepo < 0) throw new Error('Invalid --max-pages-per-repo');
  if (!Number.isFinite(args.perPage) || args.perPage <= 0) throw new Error('Invalid --per-page');
  return args;
};

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeJson = (filePath, value) => fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
const writeText = (filePath, value) => fs.writeFileSync(filePath, value.endsWith('\n') ? value : `${value}\n`);

function normalizeRepo(repo) {
  return String(repo || '')
    .replace(/^https:\/\/github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/\?.*$/, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();
}

const parseDate = (value) => {
  if (!value || value === 'unknown') return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
};

const monthKey = (date) => `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
const yearKey = (date) => String(date.getUTCFullYear());
const isoNow = () => new Date().toISOString();
const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

const starNumber = (value) => {
  if (value === null || value === undefined || value === '' || value === 'unknown') return null;
  if (typeof value === 'number') return value;
  const text = String(value).trim().toLowerCase().replace(/,/g, '');
  const match = text.match(/^([0-9]+(?:\.[0-9]+)?)(k|m)?$/);
  if (!match) return Number(text) || null;
  const base = Number(match[1]);
  const suffix = match[2];
  if (suffix === 'm') return Math.round(base * 1_000_000);
  if (suffix === 'k') return Math.round(base * 1_000);
  return Math.round(base);
};

const repoParts = (repo) => {
  const [owner, name] = normalizeRepo(repo).split('/');
  return { owner, name };
};

const stargazerHash = (repo, user) =>
  crypto
    .createHash('sha256')
    .update(`${normalizeRepo(repo)}:${user?.id ?? user?.login ?? 'unknown'}`)
    .digest('hex')
    .slice(0, 24);

const buildSeeds = (analysisPath) => {
  const analysis = readJson(analysisPath);
  const byRepo = new Map();
  const upsert = (repo, patch) => {
    const normalized = normalizeRepo(repo);
    if (!normalized || !normalized.includes('/')) return;
    const current = byRepo.get(normalized) || { repo: normalized, url: `https://github.com/${normalized}` };
    byRepo.set(normalized, { ...current, ...patch, repo: normalized, url: patch.url || current.url });
  };

  for (const row of analysis.raw_classified_repositories || []) {
    upsert(row.repo, {
      source_layers: ['raw_classified'],
      current_stars_hint: starNumber(row.stars),
      raw_time_slice: row.time_slice || null,
      base_theme: row.base_theme || null,
      function_tag: row.function_tag || null,
      category: row.final_category || null,
      description: row.description || null,
      evidence: row.evidence || null,
      url: row.url || null
    });
  }

  for (const row of analysis.analyzed_projects || []) {
    const normalized = normalizeRepo(row.repo || row.url);
    const prev = byRepo.get(normalized);
    upsert(normalized, {
      source_layers: [...new Set([...(prev?.source_layers || []), 'analyzed_project'])],
      name: row.name || null,
      current_stars_hint: starNumber(row.github_api_stars ?? row.site_stars ?? prev?.current_stars_hint),
      created_at: row.created_at || null,
      pushed_at: row.github_pushed_at || row.lastPushed || null,
      raw_file: row.raw_file || null,
      public_report: row.public_report || null,
      report: row.report || null,
      evolution_focused: Boolean(row.evolution_focused),
      category: row.category || prev?.category || null,
      pattern: row.pattern || null,
      tags: row.tags || [],
      url: row.url || null
    });
  }

  return [...byRepo.values()].sort((a, b) => a.repo.localeCompare(b.repo));
};

const readJsonl = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
};

const writeJsonl = (filePath, rows) => {
  const body = rows.map((row) => JSON.stringify(row)).join('\n');
  fs.writeFileSync(filePath, body ? `${body}\n` : '');
};

const appendJsonl = (filePath, rows) => {
  if (!rows.length) return;
  fs.appendFileSync(filePath, rows.map((row) => JSON.stringify(row)).join('\n') + '\n');
};

const csvCell = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const parseNextLink = (linkHeader) => {
  if (!linkHeader) return null;
  for (const part of linkHeader.split(',')) {
    const match = part.match(/<([^>]+)>;\s*rel="next"/);
    if (match) return match[1];
  }
  return null;
};

const githubFetch = async (url, token) => {
  const headers = {
    Accept: 'application/vnd.github.star+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'awesome-agent-evolution-star-history-db'
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(url, { headers });
  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  return {
    ok: response.ok,
    status: response.status,
    headers: response.headers,
    body,
    url
  };
};

const fetchRepoSnapshot = async (repo, token) => {
  const response = await githubFetch(`https://api.github.com/repos/${repo}`, token);
  const data = response.body || {};
  return {
    repo,
    fetched_at: isoNow(),
    source: 'github_rest_repo',
    status: response.status,
    ok: response.ok,
    created_at: data.created_at || null,
    pushed_at: data.pushed_at || null,
    updated_at: data.updated_at || null,
    stargazers_count: data.stargazers_count ?? null,
    forks_count: data.forks_count ?? null,
    watchers_count: data.watchers_count ?? null,
    open_issues_count: data.open_issues_count ?? null,
    default_branch: data.default_branch || null,
    license: data.license?.spdx_id || data.license?.key || null,
    topics: Array.isArray(data.topics) ? data.topics : [],
    rate_limit_remaining: response.headers.get('x-ratelimit-remaining'),
    error: response.ok ? null : data.message || String(data).slice(0, 200)
  };
};

const fetchStargazers = async (repo, { token, perPage, maxPagesPerRepo }) => {
  const events = [];
  let url = `https://api.github.com/repos/${repo}/stargazers?per_page=${perPage}&page=1`;
  let page = 0;
  let lastStatus = null;
  let lastError = null;
  while (url && page < maxPagesPerRepo) {
    page += 1;
    const response = await githubFetch(url, token);
    lastStatus = response.status;
    if (!response.ok) {
      lastError = response.body?.message || String(response.body).slice(0, 200);
      break;
    }
    const rows = Array.isArray(response.body) ? response.body : [];
    const fetchedAt = isoNow();
    for (const item of rows) {
      const user = item.user || item;
      const starredAt = item.starred_at || null;
      const date = parseDate(starredAt);
      events.push({
        event_key: `${repo}:${stargazerHash(repo, user)}:${starredAt ?? 'unknown'}`,
        repo,
        ...repoParts(repo),
        starred_at: starredAt,
        starred_year: date ? yearKey(date) : null,
        starred_month: date ? monthKey(date) : null,
        stargazer_hash: stargazerHash(repo, user),
        stargazer_type: user?.type || null,
        source: 'github_rest_stargazers_star_json',
        fetched_at: fetchedAt,
        page
      });
    }
    url = parseNextLink(response.headers.get('link'));
  }
  return {
    repo,
    pages_fetched: page,
    max_pages_per_repo: maxPagesPerRepo,
    events_fetched: events.length,
    last_status: lastStatus,
    last_error: lastError,
    partial_due_to_page_budget: Boolean(maxPagesPerRepo && page >= maxPagesPerRepo),
    events
  };
};

const latestByRepo = (rows) => {
  const map = new Map();
  for (const row of rows) {
    const repo = normalizeRepo(row.repo);
    const prev = map.get(repo);
    if (!prev || String(row.fetched_at || '') > String(prev.fetched_at || '')) map.set(repo, row);
  }
  return map;
};

const aggregate = ({ seeds, eventPath, snapshotPath, year, since }) => {
  const eventRows = readJsonl(eventPath);
  const snapshots = readJsonl(snapshotPath);
  const snapshotMap = latestByRepo(snapshots);
  const seedMap = new Map(seeds.map((seed) => [seed.repo, seed]));
  const eventMap = new Map();
  for (const event of eventRows) {
    const repo = normalizeRepo(event.repo);
    const key = event.event_key || `${repo}:${event.stargazer_id ?? event.stargazer_login}:${event.starred_at}`;
    eventMap.set(key, { ...event, repo });
    if (!seedMap.has(repo)) seedMap.set(repo, { repo, url: `https://github.com/${repo}`, source_layers: ['event_database_only'] });
  }

  const byRepo = new Map();
  for (const event of eventMap.values()) {
    const list = byRepo.get(event.repo) || [];
    list.push(event);
    byRepo.set(event.repo, list);
  }

  const sinceDate = parseDate(since);
  const recent90 = daysAgo(90);
  const repos = [...seedMap.values()].sort((a, b) => a.repo.localeCompare(b.repo));
  const monthlyRows = [];
  const rankingRows = repos.map((seed) => {
    const repo = seed.repo;
    const events = byRepo.get(repo) || [];
    const snapshot = snapshotMap.get(repo);
    const currentTotal = Number(snapshot?.stargazers_count ?? seed.current_stars_hint ?? 0) || 0;
    const byMonth = new Map();
    let newStarsYear = 0;
    let newStarsSince = 0;
    let newStarsRecent90 = 0;
    let firstStarredAt = null;
    let lastStarredAt = null;
    for (const event of events) {
      const date = parseDate(event.starred_at);
      if (!date) continue;
      const month = monthKey(date);
      byMonth.set(month, (byMonth.get(month) || 0) + 1);
      if (String(date.getUTCFullYear()) === String(year)) newStarsYear += 1;
      if (sinceDate && date >= sinceDate) newStarsSince += 1;
      if (date >= recent90) newStarsRecent90 += 1;
      if (!firstStarredAt || event.starred_at < firstStarredAt) firstStarredAt = event.starred_at;
      if (!lastStarredAt || event.starred_at > lastStarredAt) lastStarredAt = event.starred_at;
    }
    for (const [month, count] of [...byMonth.entries()].sort()) {
      monthlyRows.push({ repo, month, new_stars: count });
    }
    const eventCount = events.length;
    const coverageStatus = eventCount === 0
      ? 'not_fetched'
      : currentTotal > 0 && eventCount >= currentTotal * 0.98
        ? 'complete_or_near_complete'
        : 'partial';
    return {
      repo,
      url: seed.url || `https://github.com/${repo}`,
      source_layers: seed.source_layers || [],
      category: seed.category || null,
      base_theme: seed.base_theme || null,
      raw_time_slice: seed.raw_time_slice || null,
      evolution_focused: Boolean(seed.evolution_focused),
      current_total_stars: currentTotal,
      fetched_star_events: eventCount,
      coverage_status: coverageStatus,
      missing_star_events_estimate: Math.max(0, currentTotal - eventCount),
      new_stars_year: newStarsYear,
      new_stars_since: newStarsSince,
      new_stars_recent_90d: newStarsRecent90,
      first_starred_at: firstStarredAt,
      last_starred_at: lastStarredAt,
      snapshot_fetched_at: snapshot?.fetched_at || null,
      snapshot_status: snapshot?.status || null,
      created_at: snapshot?.created_at || seed.created_at || null,
      pushed_at: snapshot?.pushed_at || seed.pushed_at || null,
      raw_file: seed.raw_file || null,
      public_report: seed.public_report || null
    };
  });

  const maxYear = Math.max(...rankingRows.map((row) => row.new_stars_year), 0);
  const maxRecent = Math.max(...rankingRows.map((row) => row.new_stars_recent_90d), 0);
  const rankedBase = rankingRows
    .map((row) => {
      const yearScore = maxYear > 0 ? (Math.log1p(row.new_stars_year) / Math.log1p(maxYear)) * 70 : 0;
      const recentScore = maxRecent > 0 ? (Math.log1p(row.new_stars_recent_90d) / Math.log1p(maxRecent)) * 20 : 0;
      const coverageScore = row.coverage_status === 'complete_or_near_complete' ? 10 : row.coverage_status === 'partial' ? 4 : 0;
      return {
        ...row,
        growth_quality_score: Number((yearScore + recentScore + coverageScore).toFixed(2))
      };
    })
    .sort((a, b) =>
      b.growth_quality_score - a.growth_quality_score ||
      b.new_stars_year - a.new_stars_year ||
      b.new_stars_recent_90d - a.new_stars_recent_90d ||
      b.current_total_stars - a.current_total_stars ||
      a.repo.localeCompare(b.repo)
    )
    .map((row, index) => ({ rank: index + 1, ...row }));

  const coverageQualified = rankedBase
    .filter((row) => row.coverage_status !== 'not_fetched')
    .map((row, index) => ({ ...row, coverage_qualified_rank: index + 1, fetch_priority_rank: null }));

  const fetchBacklog = rankedBase
    .filter((row) => row.coverage_status === 'not_fetched')
    .sort((a, b) =>
      b.current_total_stars - a.current_total_stars ||
      Number(b.evolution_focused) - Number(a.evolution_focused) ||
      a.repo.localeCompare(b.repo)
    )
    .map((row, index) => ({ ...row, coverage_qualified_rank: null, fetch_priority_rank: index + 1 }));

  const rankMetadata = new Map([
    ...coverageQualified.map((row) => [row.repo, row]),
    ...fetchBacklog.map((row) => [row.repo, row])
  ]);
  const ranked = rankedBase.map((row) => ({
    ...row,
    coverage_qualified_rank: rankMetadata.get(row.repo)?.coverage_qualified_rank ?? null,
    fetch_priority_rank: rankMetadata.get(row.repo)?.fetch_priority_rank ?? null
  }));

  monthlyRows.sort((a, b) => a.repo.localeCompare(b.repo) || a.month.localeCompare(b.month));
  return {
    generated_at: isoNow(),
    ranking_year: year,
    since,
    source_event_path: path.relative(root, eventPath),
    source_snapshot_path: path.relative(root, snapshotPath),
    counts: {
      seed_repositories: seeds.length,
      repositories_in_database: repos.length,
      star_events_deduped: eventMap.size,
      snapshots: snapshots.length,
      repos_with_any_star_events: [...byRepo.keys()].length,
      repos_complete_or_near_complete: ranked.filter((row) => row.coverage_status === 'complete_or_near_complete').length,
      repos_partial: ranked.filter((row) => row.coverage_status === 'partial').length,
      repos_not_fetched: ranked.filter((row) => row.coverage_status === 'not_fetched').length,
      coverage_qualified_rows: coverageQualified.length,
      fetch_backlog_rows: fetchBacklog.length
    },
    ranking: ranked,
    coverage_qualified_ranking: coverageQualified,
    fetch_priority_backlog: fetchBacklog,
    monthly_rows: monthlyRows
  };
};

const writeMonthlyCsv = (filePath, monthlyRows) => {
  const header = ['repo', 'month', 'new_stars'];
  const lines = [header.join(',')];
  for (const row of monthlyRows) lines.push(header.map((key) => csvCell(row[key])).join(','));
  writeText(filePath, lines.join('\n'));
};

const renderMarkdown = (result) => {
  const covered = result.coverage_qualified_ranking.slice(0, 40);
  const backlog = result.fetch_priority_backlog.slice(0, 25);
  const lines = [];
  lines.push('# GitHub Star Growth Ranking');
  lines.push('');
  lines.push(`> Generated: ${result.generated_at}. Ranking year: ${result.ranking_year}.`);
  lines.push('');
  lines.push('## One Sentence');
  lines.push('');
  lines.push('Total GitHub stars are treated as historical adoption, not current value; this ranking is designed around year-specific new stars and growth-quality coverage so 2026 frontier projects can outrank old incumbents when the evidence supports it.');
  lines.push('');
  lines.push('## Source Boundary');
  lines.push('');
  lines.push('- Seed repositories come from `analysis/github-project-data-analysis.json`.');
  lines.push('- Star events come from the GitHub REST `List stargazers` endpoint using `Accept: application/vnd.github.star+json`, which includes `starred_at`.');
  lines.push('- Full rankings require complete stargazer pagination; rows marked `partial` or `not_fetched` are not final evidence.');
  lines.push('- Dataset-ready files live under `data-engine/github-star-history/` and can be exported to Hugging Face as JSONL/CSV/Parquet.');
  lines.push('');
  lines.push('## Coverage');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|---|---:|');
  for (const [key, value] of Object.entries(result.counts)) lines.push(`| ${key} | ${value} |`);
  lines.push('');
  lines.push('## Coverage-Qualified Growth Ranking');
  lines.push('');
  lines.push('Only rows with fetched star-event coverage appear here. This is the table to use for 2026 growth claims.');
  lines.push('');
  lines.push('| Rank | Repo | Growth score | New stars year | Recent 90d | Total stars | Coverage | Star events |');
  lines.push('|---:|---|---:|---:|---:|---:|---|---:|');
  if (!covered.length) {
    lines.push('| - | No coverage-qualified rows yet | - | - | - | - | - | - |');
  } else {
    for (const row of covered) {
      lines.push(`| ${row.coverage_qualified_rank} | [${row.repo}](${row.url}) | ${row.growth_quality_score} | ${row.new_stars_year} | ${row.new_stars_recent_90d} | ${row.current_total_stars} | ${row.coverage_status} | ${row.fetched_star_events} |`);
    }
  }
  lines.push('');
  lines.push('## Fetch Priority Backlog');
  lines.push('');
  lines.push('These rows are not growth evidence. They are unfetched repositories sorted by adoption prior so the next data run can spend API budget deliberately.');
  lines.push('');
  lines.push('| Fetch priority | Repo | Total stars hint | Evolution focused | Raw time slice | Coverage |');
  lines.push('|---:|---|---:|---|---|---|');
  if (!backlog.length) {
    lines.push('| - | No unfetched backlog rows | - | - | - | - |');
  } else {
    for (const row of backlog) {
      lines.push(`| ${row.fetch_priority_rank} | [${row.repo}](${row.url}) | ${row.current_total_stars} | ${row.evolution_focused ? 'yes' : 'no'} | ${row.raw_time_slice || '-'} | ${row.coverage_status} |`);
    }
  }
  lines.push('');
  lines.push('## Interpretation Rules');
  lines.push('');
  lines.push('1. `not_fetched` means the project has not entered the star-event database yet; do not infer zero demand.');
  lines.push('2. `partial` means page budget or rate limits prevented full history; use it only for pipeline validation.');
  lines.push('3. `complete_or_near_complete` is required before publishing a definitive 2026 new-star rank.');
  lines.push('4. Current total stars only order the fetch backlog; they do not create growth rank for unfetched rows.');
  lines.push('5. Current total stars should be used as an adoption prior only after new-star momentum, continuity, and evidence quality.');
  lines.push('');
  return lines.join('\n');
};

const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    return;
  }

  const outDir = args.outDir;
  const seedPath = path.join(outDir, 'repos.seed.jsonl');
  const eventPath = path.join(outDir, 'star-events.jsonl');
  const snapshotPath = path.join(outDir, 'repo-star-snapshots.jsonl');
  const fetchRunPath = path.join(outDir, 'fetch-runs.jsonl');
  const monthlyCsvPath = path.join(outDir, 'monthly-repo-star-growth.csv');
  const manifestPath = path.join(outDir, 'manifest.json');

  let seeds = buildSeeds(args.analysisPath);
  if (args.repos.length) {
    const repoSet = new Set(args.repos);
    seeds = seeds.filter((seed) => repoSet.has(seed.repo));
  }
  if (args.limit !== null) seeds = seeds.slice(0, args.limit);

  if (args.dryRun) {
    console.log(JSON.stringify({ selected_repositories: seeds.map((seed) => seed.repo), count: seeds.length }, null, 2));
    return;
  }

  ensureDir(outDir);
  writeJsonl(seedPath, seeds);

  const token = process.env[args.tokenEnv] || '';
  const fetchRuns = [];
  if (!args.noFetch && args.maxPagesPerRepo > 0) {
    for (const seed of seeds) {
      const snapshot = await fetchRepoSnapshot(seed.repo, token);
      appendJsonl(snapshotPath, [snapshot]);
      const fetchResult = await fetchStargazers(seed.repo, {
        token,
        perPage: args.perPage,
        maxPagesPerRepo: args.maxPagesPerRepo
      });
      appendJsonl(eventPath, fetchResult.events);
      const runRow = {
        repo: seed.repo,
        fetched_at: isoNow(),
        pages_fetched: fetchResult.pages_fetched,
        events_fetched: fetchResult.events_fetched,
        max_pages_per_repo: args.maxPagesPerRepo,
        last_status: fetchResult.last_status,
        last_error: fetchResult.last_error,
        partial_due_to_page_budget: fetchResult.partial_due_to_page_budget
      };
      fetchRuns.push(runRow);
      appendJsonl(fetchRunPath, [runRow]);
    }
  }

  const result = aggregate({
    seeds,
    eventPath,
    snapshotPath,
    year: args.year,
    since: args.since
  });

  writeJson(defaultRankingJson, {
    generated_at: result.generated_at,
    ranking_year: result.ranking_year,
    since: result.since,
    counts: result.counts,
    ranking: result.ranking,
    coverage_qualified_ranking: result.coverage_qualified_ranking,
    fetch_priority_backlog: result.fetch_priority_backlog
  });
  writeText(defaultRankingMd, renderMarkdown(result));
  writeMonthlyCsv(monthlyCsvPath, result.monthly_rows);
  writeJson(manifestPath, {
    generated_at: result.generated_at,
    dataset_name: 'awesome-agent-evolution/github-star-history',
    local_paths: {
      seeds: path.relative(root, seedPath),
      star_events: path.relative(root, eventPath),
      repo_snapshots: path.relative(root, snapshotPath),
      fetch_runs: path.relative(root, fetchRunPath),
      monthly_repo_star_growth: path.relative(root, monthlyCsvPath),
      ranking_json: path.relative(root, defaultRankingJson),
      ranking_markdown: path.relative(root, defaultRankingMd)
    },
    intended_huggingface_tables: [
      'repos.seed.jsonl',
      'star-events.jsonl',
      'repo-star-snapshots.jsonl',
      'monthly-repo-star-growth.csv',
      'github-star-growth-ranking.json'
    ],
    coverage: result.counts,
    source_docs: [
      'https://docs.github.com/en/rest/activity/starring#list-stargazers'
    ]
  });

  console.log(JSON.stringify({
    generated_at: result.generated_at,
    selected_repositories: seeds.length,
    fetched_repositories: fetchRuns.length,
    out_dir: path.relative(root, outDir),
    ranking: path.relative(root, defaultRankingJson),
    coverage_qualified_top: result.coverage_qualified_ranking.slice(0, 5).map((row) => ({
      rank: row.coverage_qualified_rank,
      repo: row.repo,
      growth_quality_score: row.growth_quality_score,
      new_stars_year: row.new_stars_year,
      coverage_status: row.coverage_status
    })),
    fetch_backlog_top: result.fetch_priority_backlog.slice(0, 5).map((row) => ({
      fetch_priority_rank: row.fetch_priority_rank,
      repo: row.repo,
      current_total_stars: row.current_total_stars,
      coverage_status: row.coverage_status
    }))
  }, null, 2));
};

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exit(1);
});
