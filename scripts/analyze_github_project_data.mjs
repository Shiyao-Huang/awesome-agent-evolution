import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const outDir = path.join(root, 'analysis');
const githubCachePath = path.join(outDir, 'github-created-at-cache.json');
const jsonOut = path.join(outDir, 'github-project-data-analysis.json');
const mdOut = path.join(outDir, 'github-project-data-analysis.md');
const texOut = path.join(outDir, 'github-project-data-analysis.tex');

const normalizeRepo = (repo) =>
  String(repo || '')
    .replace(/^https:\/\/github\.com\//, '')
    .replace(/\?tab=.*$/, '')
    .toLowerCase();

const monthOf = (iso) => {
  if (!iso || iso === 'unknown') return 'unknown';
  const text = String(iso);
  const match = text.match(/^(\d{4})-(\d{2})/);
  return match ? `${match[1]}-${match[2]}` : text;
};

const parseProjects = () => {
  const source = fs.readFileSync(path.join(root, 'site/src/data/projects.ts'), 'utf8');
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array in site/src/data/projects.ts');
  return vm.runInNewContext(match[1]);
};

const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));

const loadCreatedAtCache = () => {
  if (!fs.existsSync(githubCachePath)) return {};
  return JSON.parse(fs.readFileSync(githubCachePath, 'utf8'));
};

const saveCreatedAtCache = (cache) => {
  fs.writeFileSync(githubCachePath, `${JSON.stringify(cache, null, 2)}\n`);
};

const localGitFirstCommit = (localPath) => {
  if (!localPath) return null;
  const repoPath = path.join(root, localPath);
  if (!fs.existsSync(path.join(repoPath, '.git'))) return null;
  try {
    return execFileSync('git', ['-C', repoPath, 'log', '--reverse', '--format=%aI', '--max-count=1'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim() || null;
  } catch {
    return null;
  }
};

const localGitStats = (localPath) => {
  if (!localPath) return null;
  const repoPath = path.join(root, localPath);
  if (!fs.existsSync(path.join(repoPath, '.git'))) return null;
  const git = (...args) => {
    try {
      return execFileSync('git', ['-C', repoPath, ...args], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore']
      }).trim() || null;
    } catch {
      return null;
    }
  };
  return {
    path: localPath,
    first_commit_at: git('log', '--reverse', '--format=%aI', '--max-count=1'),
    last_commit_at: git('log', '-1', '--format=%aI'),
    commit_count: Number(git('rev-list', '--count', 'HEAD') || 0),
    branch: git('branch', '--show-current'),
    head: git('rev-parse', '--short', 'HEAD')
  };
};

const localGitHistoryLookback = (localPath, referenceDate, windowMonths = 24) => {
  if (!localPath) return null;
  const repoPath = path.join(root, localPath);
  if (!fs.existsSync(path.join(repoPath, '.git'))) return null;
  const sinceDate = new Date(Date.UTC(referenceDate.getUTCFullYear(), referenceDate.getUTCMonth() - (windowMonths - 1), 1));
  const sinceIso = sinceDate.toISOString().slice(0, 10);

  const runGit = (...args) => {
    try {
      return execFileSync('git', ['-C', repoPath, ...args], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore']
      }).trim();
    } catch {
      return null;
    }
  };

  const commitLines = (runGit('log', `--since=${sinceIso}`, '--date=format:%Y-%m', '--pretty=format:%ad') || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const commitMonthCounts = countBy(commitLines.map((month) => ({ month })), (row) => row.month)
    .map((row) => ({ month: row.key, count: row.count }));

  const tagLines = (runGit('for-each-ref', 'refs/tags', '--format=%(creatordate:short)|%(refname:short)', '--sort=creatordate') || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const tagEvents = tagLines
    .map((line) => {
      const [dateText, tag] = line.split('|');
      const date = parseDate(dateText);
      if (!date) return null;
      return { tag, date, month: monthKeyUTC(date), dateText };
    })
    .filter(Boolean);
  const tagMonthCounts = countBy(tagEvents.map((item) => ({ month: item.month })), (row) => row.month)
    .map((row) => ({ month: row.key, count: row.count }));
  const latestTag = tagEvents.length ? tagEvents[tagEvents.length - 1] : null;

  return {
    since: sinceIso,
    commits_24m: commitLines.length,
    commit_month_counts: commitMonthCounts,
    tags_total: tagEvents.length,
    tags_24m: tagEvents.filter((item) => item.date >= sinceDate).length,
    tag_month_counts: tagMonthCounts.filter((item) => item.month >= monthKeyUTC(sinceDate)),
    latest_tag: latestTag ? { name: latestTag.tag, date: latestTag.dateText, month: latestTag.month } : null
  };
};

const fetchRepoCreatedAt = async (repo, cache) => {
  const normalized = normalizeRepo(repo);
  if (cache[normalized]) return cache[normalized];
  let response;
  try {
    response = await fetch(`https://api.github.com/repos/${normalized}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'awesome-agent-evolution-data-analysis'
      }
    });
  } catch (error) {
    cache[normalized] = {
      created_at: null,
      pushed_at: null,
      stars: null,
      forks: null,
      source: 'github_api_fetch_error',
      error: error?.message ?? String(error)
    };
    return cache[normalized];
  }
  if (!response.ok) {
    cache[normalized] = {
      created_at: null,
      pushed_at: null,
      stars: null,
      forks: null,
      source: `github_api_${response.status}`
    };
    return cache[normalized];
  }
  const data = await response.json();
  cache[normalized] = {
    created_at: data.created_at ?? null,
    pushed_at: data.pushed_at ?? null,
    stars: data.stargazers_count ?? null,
    forks: data.forks_count ?? null,
    source: 'github_api'
  };
  return cache[normalized];
};

const countBy = (rows, keyFn) => {
  const counts = new Map();
  for (const row of rows) {
    const key = keyFn(row) || 'unknown';
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
};

const topRows = (rows, limit = 20) =>
  [...rows]
    .sort((a, b) => Number(b.stars || 0) - Number(a.stars || 0))
    .slice(0, limit);

const parseDate = (value) => {
  if (!value || value === 'unknown') return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
};

const monthKeyUTC = (date) => `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;

const buildMonthWindow = (referenceDate, months = 24) => {
  const end = new Date(Date.UTC(referenceDate.getUTCFullYear(), referenceDate.getUTCMonth(), 1));
  const keys = [];
  for (let i = months - 1; i >= 0; i -= 1) {
    const d = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - i, 1));
    keys.push(monthKeyUTC(d));
  }
  return keys;
};

const LOOKBACK_SIGNAL_ORDER = [
  ['github_created_at', 'created_at'],
  ['local_first_observed', 'first_observed_at'],
  ['github_pushed_at', 'github_pushed_at'],
  ['site_last_pushed', 'lastPushed'],
  ['raw_content_timestamp', 'raw_content_timestamp'],
  ['raw_collected_at', 'raw_collected_at']
];

const chooseTemporalSignal = (row) => {
  for (const [source, field] of LOOKBACK_SIGNAL_ORDER) {
    const value = row[field];
    const date = parseDate(value);
    if (date) {
      return {
        source,
        field,
        value,
        date,
        month: monthKeyUTC(date)
      };
    }
  }
  return null;
};

const buildTwoYearLookback = (rows, referenceDate = new Date(), windowMonths = 24) => {
  const months = buildMonthWindow(referenceDate, windowMonths);
  const startMonth = months[0];
  const endMonth = months[months.length - 1];
  const monthlyMap = new Map(
    months.map((month) => [
      month,
      {
        month,
        total: 0,
        source_counts: Object.fromEntries(LOOKBACK_SIGNAL_ORDER.map(([source]) => [source, 0]))
      }
    ])
  );
  const sourceCounts = Object.fromEntries(LOOKBACK_SIGNAL_ORDER.map(([source]) => [source, 0]));
  const coverage = {
    inside_window: 0,
    older_than_window: 0,
    future_window: 0,
    unknown: 0
  };

  for (const row of rows) {
    const signal = chooseTemporalSignal(row);
    if (!signal) {
      coverage.unknown += 1;
      continue;
    }
    sourceCounts[signal.source] += 1;
    if (signal.month < startMonth) {
      coverage.older_than_window += 1;
      continue;
    }
    if (signal.month > endMonth) {
      coverage.future_window += 1;
      continue;
    }
    coverage.inside_window += 1;
    const bucket = monthlyMap.get(signal.month);
    if (!bucket) continue;
    bucket.total += 1;
    bucket.source_counts[signal.source] += 1;
  }

  return {
    window: {
      months: windowMonths,
      start_month: startMonth,
      end_month: endMonth,
      reference_month: monthKeyUTC(referenceDate)
    },
    coverage,
    source_counts: LOOKBACK_SIGNAL_ORDER.map(([source]) => ({ source, count: sourceCounts[source] }))
      .sort((a, b) => b.count - a.count || a.source.localeCompare(b.source)),
    monthly_counts: months.map((month) => monthlyMap.get(month))
  };
};

const aggregateLocalGitLookback = (rows, referenceDate = new Date(), windowMonths = 24) => {
  const months = buildMonthWindow(referenceDate, windowMonths);
  const monthSet = new Set(months);
  const commitMap = new Map(months.map((month) => [month, 0]));
  const tagMap = new Map(months.map((month) => [month, 0]));
  let repositoriesWithLocalGit = 0;
  let repositoriesWithHistory = 0;
  let repositoriesWithCommits24m = 0;
  let repositoriesWithTags24m = 0;
  let totalCommits24m = 0;
  let totalTags24m = 0;
  const latestTags = [];

  for (const row of rows) {
    if (row.local_git) repositoriesWithLocalGit += 1;
    const history = row.local_git_history_24m;
    if (!history) continue;
    repositoriesWithHistory += 1;
    totalCommits24m += Number(history.commits_24m || 0);
    totalTags24m += Number(history.tags_24m || 0);
    if (Number(history.commits_24m || 0) > 0) repositoriesWithCommits24m += 1;
    if (Number(history.tags_24m || 0) > 0) repositoriesWithTags24m += 1;

    for (const item of history.commit_month_counts || []) {
      if (!monthSet.has(item.month)) continue;
      commitMap.set(item.month, (commitMap.get(item.month) || 0) + Number(item.count || 0));
    }
    for (const item of history.tag_month_counts || []) {
      if (!monthSet.has(item.month)) continue;
      tagMap.set(item.month, (tagMap.get(item.month) || 0) + Number(item.count || 0));
    }
    if (history.latest_tag) {
      latestTags.push({
        repo: row.repo,
        tag: history.latest_tag.name,
        date: history.latest_tag.date,
        month: history.latest_tag.month
      });
    }
  }

  latestTags.sort((a, b) => {
    const at = parseDate(a.date)?.valueOf() ?? 0;
    const bt = parseDate(b.date)?.valueOf() ?? 0;
    return bt - at || a.repo.localeCompare(b.repo);
  });

  return {
    window: {
      months: windowMonths,
      start_month: months[0],
      end_month: months[months.length - 1],
      reference_month: monthKeyUTC(referenceDate)
    },
    coverage: {
      repositories_with_local_git: repositoriesWithLocalGit,
      repositories_with_history: repositoriesWithHistory,
      repositories_with_commits_24m: repositoriesWithCommits24m,
      repositories_with_tags_24m: repositoriesWithTags24m
    },
    totals: {
      commits_24m: totalCommits24m,
      tags_24m: totalTags24m
    },
    monthly_commit_counts: months.map((month) => ({ month, count: commitMap.get(month) || 0 })),
    monthly_tag_counts: months.map((month) => ({ month, count: tagMap.get(month) || 0 })),
    latest_tags: latestTags.slice(0, 40)
  };
};

const monthsAgo = (value, referenceDate) => {
  const date = parseDate(value);
  if (!date) return null;
  return Math.max(0, (referenceDate.valueOf() - date.valueOf()) / (1000 * 60 * 60 * 24 * 30.4375));
};

const linearRecencyScore = (value, referenceDate, horizonMonths) => {
  const age = monthsAgo(value, referenceDate);
  if (age === null) return null;
  return Math.max(0, Math.min(1, 1 - age / horizonMonths));
};

const clampScore = (value) => Math.max(0, Math.min(100, value));

const scoreMechanism = (row) => {
  const haystack = [
    row.name,
    row.repo,
    row.description,
    row.category,
    row.pattern,
    row.classified_theme,
    ...(row.tags || [])
  ].join(' ').toLowerCase();
  let score = 10;
  if (row.evolution_focused) score += 25;
  if (row.classified_theme === 'evolution') score += 20;
  if (/自进化|self[- ]?evol|self[- ]?improv|recursive|darwin|godel|gödel/.test(haystack)) score += 18;
  if (/进化\/搜索|evol|search|optimization|optimisation|genetic|population|archive|mutation|crossover/.test(haystack)) score += 14;
  if (/评估器|打分器|benchmark|eval|verifier|judge|reward/.test(haystack)) score += 10;
  if (/memory|skill|记忆|技能|persistent|experience/.test(haystack)) score += 8;
  if (/训练|数据循环|rl|reinforcement|fine[- ]?tune|weight/.test(haystack)) score += 8;
  if (/文献综述|论文索引|awesome|resource index|cookbook/.test(haystack)) score -= 18;
  return clampScore(score);
};

const scoreEvidence = (row) => {
  let score = 0;
  if (row.status === 'verified') score += 18;
  if (row.public_report_exists) score += 24;
  if (row.in_classification) score += 18;
  if (row.in_raw_timestamp_index) score += 14;
  if (row.github_source === 'github_api') score += 16;
  else if (row.github_source === 'github_api_403') score += 6;
  if (row.local_git) score += 6;
  if (row.created_at) score += 4;
  return clampScore(score);
};

const scoreUsefulness = (row) => {
  const haystack = [
    row.category,
    row.pattern,
    ...(row.tags || [])
  ].join(' ').toLowerCase();
  let score = 45;
  if (/进化式代码|agent 进化|自进化|代码智能体|harness|benchmark|评测|memory|skill|框架|runtime|production/.test(haystack)) score += 25;
  if (/评估器|打分器|benchmark|eval/.test(haystack)) score += 10;
  if (/文献综述|论文索引|awesome|resource index/.test(haystack)) score -= 20;
  if (row.status === 'verified') score += 8;
  return clampScore(score);
};

const rankAnalyzedProjects = (rows, referenceDate) => {
  const maxStars = Math.max(...rows.map((row) => Number(row.github_api_stars ?? row.site_stars ?? 0)), 1);
  return rows
    .map((row) => {
      const createdRecency = linearRecencyScore(row.created_at, referenceDate, 24);
      const activityDate = row.github_pushed_at || row.lastPushed || row.raw_content_timestamp || row.raw_collected_at;
      const activityRecency = linearRecencyScore(activityDate, referenceDate, 12);
      const timeScore = createdRecency === null
        ? Math.min(45, (activityRecency ?? 0) * 50)
        : (createdRecency * 70) + ((activityRecency ?? 0) * 30);
      const mechanismScore = scoreMechanism(row);
      const evidenceScore = scoreEvidence(row);
      const stars = Number(row.github_api_stars ?? row.site_stars ?? 0);
      const adoptionScore = maxStars > 1 ? (Math.log1p(stars) / Math.log1p(maxStars)) * 100 : 0;
      const usefulnessScore = scoreUsefulness(row);
      const currentValueScore =
        timeScore * 0.50 +
        mechanismScore * 0.20 +
        evidenceScore * 0.15 +
        adoptionScore * 0.10 +
        usefulnessScore * 0.05;
      return {
        rank: 0,
        repo: row.repo,
        name: row.name,
        url: row.url,
        category: row.category,
        pattern: row.pattern,
        tags: row.tags,
        status: row.status,
        created_at: row.created_at,
        created_at_source: row.created_at_source,
        first_observed_at: row.first_observed_at,
        activity_at: activityDate,
        stars,
        report: row.report,
        scores: {
          current_value: Number(currentValueScore.toFixed(2)),
          time: Number(timeScore.toFixed(2)),
          mechanism: Number(mechanismScore.toFixed(2)),
          evidence: Number(evidenceScore.toFixed(2)),
          adoption: Number(adoptionScore.toFixed(2)),
          usefulness: Number(usefulnessScore.toFixed(2))
        },
        caveat: row.created_at ? '' : 'created_at unavailable; time score capped and based on activity/observation only'
      };
    })
    .sort((a, b) =>
      b.scores.current_value - a.scores.current_value ||
      b.scores.time - a.scores.time ||
      b.scores.mechanism - a.scores.mechanism ||
      b.stars - a.stars ||
      a.repo.localeCompare(b.repo)
    )
    .map((row, index) => ({ ...row, rank: index + 1 }));
};

const analysisRelativePath = (href) => {
  if (!href || /^https?:\/\//.test(href)) return href;
  return `../${href}`;
};

const formatLink = (label, href) => href ? `[${label}](${analysisRelativePath(href)})` : '-';

const isCoreEvolutionClassified = (row) => row.base_theme === 'evolution';

const isBroadEvolutionClassified = (row) => {
  const haystack = [
    row.repo,
    row.description,
    row.base_theme,
    row.function_tag,
    row.evidence
  ].join(' ').toLowerCase();
  return /evol|self-improv|self improv|self-evolv|reflexion|self-refine|darwin|godel|gödel|gepa|funsearch|alph[a]?evolve|recursive/.test(haystack);
};

const isProjectEvolutionFocused = (project) => {
  const haystack = [
    project.repo,
    project.description,
    project.category,
    project.pattern,
    ...(project.tags || [])
  ].join(' ').toLowerCase();
  return /进化|自进化|搜索|优化|反思|反馈|训练|evol|self-improv|self-refine|reflexion|godel|gödel|darwin|funsearch|opro|automl|genetic|population/.test(haystack);
};

const writeMarkdown = (analysis) => {
  const lines = [];
  lines.push('# GitHub Project Data Analysis');
  lines.push('');
  lines.push(`Generated: ${analysis.generated_at}`);
  lines.push('');
  lines.push('## One-Sentence Compression');
  lines.push('');
  lines.push(`The project corpus has ${analysis.counts.raw_captures} timestamp-indexed raw GitHub captures, ${analysis.counts.classified_repos} classified repositories, ${analysis.counts.analyzed_projects} site/paper model-card projects, ${analysis.counts.raw_core_evolution} strict evolution-theme repositories, and ${analysis.counts.raw_broad_evolution} broad evolution-related repositories.`);
  lines.push('');
  lines.push('## Corpus Funnel');
  lines.push('');
  lines.push('| Layer | Count | Definition |');
  lines.push('|---|---:|---|');
  lines.push(`| Raw GitHub captures | ${analysis.counts.raw_captures} | Records in \`output/raw-github-timestamp-index.json\`; each points to one \`raw-github/*.md\` capture. |`);
  lines.push(`| Classified repositories | ${analysis.counts.classified_repos} | Rows in \`research/repo-classification.json\` with category, theme, stack, and time slice. |`);
  lines.push(`| Analyzed model-card projects | ${analysis.counts.analyzed_projects} | Repositories in \`site/src/data/projects.ts\` that receive public project pages and reports. |`);
  lines.push(`| Strict evolution-theme repositories | ${analysis.counts.raw_core_evolution} | Classified rows whose \`base_theme\` is \`evolution\`. |`);
  lines.push(`| Broad evolution-related repositories | ${analysis.counts.raw_broad_evolution} | Rows matching evolution/self-improvement/reflection/search keywords in repo, description, or evidence fields. |`);
  lines.push('');
  lines.push('## Raw Collection Categories');
  lines.push('');
  lines.push('| Category | Count |');
  lines.push('|---|---:|');
  for (const row of analysis.raw_category_counts) lines.push(`| ${row.key} | ${row.count} |`);
  lines.push('');
  lines.push('## Raw Collection Themes');
  lines.push('');
  lines.push('| Theme | Count |');
  lines.push('|---|---:|');
  for (const row of analysis.raw_theme_counts) lines.push(`| ${row.key} | ${row.count} |`);
  lines.push('');
  lines.push('## Time Slices');
  lines.push('');
  lines.push('| Time slice | Raw classified repos |');
  lines.push('|---|---:|');
  for (const row of analysis.raw_time_slice_counts.slice(0, 20)) lines.push(`| ${row.key} | ${row.count} |`);
  lines.push('');
  lines.push('## Two-Year Timeline (24-Month Window)');
  lines.push('');
  lines.push('This section extends index coverage beyond recent raw-capture timestamps by combining project temporal signals and local git commit/tag history over a fixed 24-month window.');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|---|---:|');
  lines.push(`| Window start month | ${analysis.two_year_project_timeline.window.start_month} |`);
  lines.push(`| Window end month | ${analysis.two_year_project_timeline.window.end_month} |`);
  lines.push(`| Projects with temporal signal inside window | ${analysis.two_year_project_timeline.coverage.inside_window} |`);
  lines.push(`| Projects older than window | ${analysis.two_year_project_timeline.coverage.older_than_window} |`);
  lines.push(`| Projects with unknown temporal signal | ${analysis.two_year_project_timeline.coverage.unknown} |`);
  lines.push(`| Local-mirror repositories with 24m git history | ${analysis.local_git_history_24m.coverage.repositories_with_history} / ${analysis.local_git_history_24m.coverage.repositories_with_local_git} |`);
  lines.push(`| Total local git commits in 24m | ${analysis.local_git_history_24m.totals.commits_24m} |`);
  lines.push(`| Total local git tags in 24m | ${analysis.local_git_history_24m.totals.tags_24m} |`);
  lines.push('');
  lines.push('| Temporal signal source | Project count |');
  lines.push('|---|---:|');
  for (const row of analysis.two_year_project_timeline.source_counts) lines.push(`| ${row.source} | ${row.count} |`);
  lines.push('');
  lines.push('| Month | Project temporal signals | Local git commits | Local git tags |');
  lines.push('|---|---:|---:|---:|');
  const gitCommitByMonth = new Map(analysis.local_git_history_24m.monthly_commit_counts.map((row) => [row.month, row.count]));
  const gitTagByMonth = new Map(analysis.local_git_history_24m.monthly_tag_counts.map((row) => [row.month, row.count]));
  for (const row of analysis.two_year_project_timeline.monthly_counts) {
    lines.push(`| ${row.month} | ${row.total} | ${gitCommitByMonth.get(row.month) || 0} | ${gitTagByMonth.get(row.month) || 0} |`);
  }
  lines.push('');
  lines.push('| Repo | Latest observed tag | Month |');
  lines.push('|---|---|---|');
  for (const row of analysis.local_git_history_24m.latest_tags.slice(0, 20)) {
    lines.push(`| [${row.repo}](https://github.com/${row.repo}) | ${row.tag} | ${row.month} |`);
  }
  lines.push('');
  lines.push('## Analyzed Project Release Timeline');
  lines.push('');
  lines.push('Only GitHub API `created_at` is treated as repository creation time. Local mirror first commit is reported as `first_observed_at` only, because many mirrors are shallow or regenerated and would otherwise create false 2026 projects.');
  lines.push('');
  lines.push('| Created month | Repo | Category | Pattern | Source |');
  lines.push('|---|---|---|---|---|');
  for (const row of analysis.analyzed_timeline) {
    lines.push(`| ${monthOf(row.created_at)} | [${row.repo}](${row.url}) | ${row.category} | ${row.pattern} | ${row.created_at_source} |`);
  }
  lines.push('');
  lines.push('## Recency-Weighted Current Value Ranking');
  lines.push('');
  lines.push('This ranking fixes the old star-dominance problem. It is a current-value ranking for public release decisions, not a historical-impact ranking. Time/newness carries 50% of the score: verified repository creation recency is 70% of the time score and recent activity is 30%. When GitHub `created_at` is unavailable, the time score is capped at 45/100 and uses only activity/observation freshness, so unknown projects cannot win by looking artificially new.');
  lines.push('');
  lines.push('Formula: `current_value = 0.50*time + 0.20*mechanism + 0.15*evidence + 0.10*adoption + 0.05*usefulness`.');
  lines.push('');
  lines.push('| Rank | Repo | Score | Time | Mechanism | Evidence | Adoption | Created | Activity | Caveat |');
  lines.push('|---:|---|---:|---:|---:|---:|---:|---|---|---|');
  for (const row of analysis.recency_weighted_project_ranking.slice(0, 40)) {
    lines.push([
      row.rank,
      `[${row.repo}](${row.url})`,
      row.scores.current_value,
      row.scores.time,
      row.scores.mechanism,
      row.scores.evidence,
      row.scores.adoption,
      monthOf(row.created_at),
      monthOf(row.activity_at),
      row.caveat || '-'
    ].map((cell) => String(cell ?? '-').replace(/\|/g, '/')).join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
  }
  lines.push('');
  lines.push('## Git Evidence Join');
  lines.push('');
  lines.push('This table joins each public model-card project back to raw capture, classification, GitHub API/cache metadata, local mirror evidence when present, and public report output. `github_api_fetch_error` and `github_api_403` are preserved as evidence-quality signals rather than silently replaced.');
  lines.push('');
  lines.push('| Joined evidence channel | Count | Meaning |');
  lines.push('|---|---:|---|');
  lines.push(`| GitHub API/cache metadata | ${analysis.counts.analyzed_with_github_api_metadata} | Projects with verified \`github_api\` metadata in \`analysis/github-created-at-cache.json\`. |`);
  lines.push(`| Local git mirror evidence | ${analysis.counts.analyzed_with_local_git_mirror} | Projects whose \`localPath\` points to a local git clone and can report first/last commit, count, branch, and HEAD. |`);
  lines.push(`| Raw timestamp capture | ${analysis.counts.analyzed_in_raw_timestamp_index} | Public projects that also appear in \`output/raw-github-timestamp-index.json\`. |`);
  lines.push(`| Classification row | ${analysis.counts.analyzed_in_classification} | Public projects that also appear in \`research/repo-classification.json\`. |`);
  lines.push(`| Public model-card report | ${analysis.counts.analyzed_with_public_report} | Public projects with a generated report under \`site/public/reports/projects/\`. |`);
  lines.push('');
  lines.push('| Repo | Raw | Classification | Report | Git source | Created | Pushed | Stars/Forks | Local git mirror |');
  lines.push('|---|---|---|---|---|---|---|---:|---|');
  for (const row of analysis.analyzed_git_evidence) {
    const localGit = row.local_git
      ? `${row.local_git.commit_count} commits @ ${row.local_git.head || 'unknown'} (${monthOf(row.local_git.first_commit_at)} -> ${monthOf(row.local_git.last_commit_at)})`
      : '-';
    const stars = row.github_api_stars ?? row.site_stars ?? '-';
    const forks = row.github_api_forks ?? row.site_forks ?? '-';
    lines.push([
      `[${row.repo}](${row.url})`,
      formatLink('raw', row.raw_file),
      row.in_classification ? row.classified_theme : 'missing',
      formatLink('report', row.report),
      row.github_source || row.created_at_source || 'unknown',
      monthOf(row.created_at),
      monthOf(row.github_pushed_at || row.lastPushed),
      `${stars}/${forks}`,
      localGit
    ].map((cell) => String(cell ?? '-').replace(/\|/g, '/')).join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
  }
  lines.push('');
  lines.push('## Top Strict Evolution-Theme Raw Repositories');
  lines.push('');
  lines.push('| Repo | Stars | Category | Time slice | Description |');
  lines.push('|---|---:|---|---|---|');
  for (const row of analysis.raw_core_evolution_top) {
    lines.push(`| [${row.repo}](${row.url}) | ${row.stars} | ${row.final_category} | ${row.time_slice} | ${row.description.replace(/\|/g, '/')} |`);
  }
  lines.push('');
  lines.push('## Writing Implications');
  lines.push('');
  lines.push(`- The paper should describe a funnel, not a flat list: raw captures are the discovery layer, classified rows are the analysis layer, and the ${analysis.counts.analyzed_projects} model-card projects are the teaching/review layer.`);
  lines.push('- The strict evolution subset should drive the conceptual argument; the broader subset explains adjacent attention from memory, evaluation, coding agents, prompt optimization, and framework infrastructure.');
  lines.push('- The timeline must distinguish repository creation time from latest activity time. Raw `time_slice` is an activity/content timestamp; analyzed project `created_at` comes from GitHub API where available.');
  lines.push('- The current-value ranking uses 50% time weight. A 2023 project can still be historically important, but it should not rank first for current release attention unless it also has exceptional recent evidence and mechanism value.');
  lines.push('- The Git evidence join connects each public project back to raw capture, classification row, public report, GitHub API/cache source, and local mirror status. Missing API data should be treated as an evidence-quality caveat, not as absence of repository activity.');
  lines.push('- Unknown timestamps remain a bias source and should be reported rather than hidden.');
  fs.writeFileSync(mdOut, `${lines.join('\n')}\n`);
};

const escapeTex = (value) =>
  String(value ?? '')
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/{/g, '\\{')
    .replace(/}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');

const writeTex = (analysis) => {
  const topTimeline = analysis.analyzed_timeline.slice(0, 24);
  const lines = [];
  lines.push('% Auto-generated by scripts/analyze_github_project_data.mjs');
  lines.push('\\subsection{GitHub Project Corpus and Sampling Funnel}');
  lines.push('\\label{subsec:github-project-corpus-sampling}');
  lines.push(`The GitHub corpus is organized as a funnel rather than a flat awesome list. The raw discovery layer contains ${analysis.counts.raw_captures} timestamp-indexed GitHub captures. The classification layer contains ${analysis.counts.classified_repos} repositories with category, theme, stack, and time-slice annotations. The paper-facing analysis layer currently contains ${analysis.counts.analyzed_projects} repositories that receive public project reports and model-card pages. Within the classified corpus, ${analysis.counts.raw_core_evolution} repositories are strict evolution-theme repositories, while ${analysis.counts.raw_broad_evolution} match a broader evolution-related keyword set including self-improvement, reflection, recursive improvement, prompt evolution, and code evolution.`);
  lines.push('');
  lines.push('\\begin{table}[t]');
  lines.push('\\centering');
  lines.push('\\caption{GitHub project corpus funnel.}');
  lines.push('\\label{tab:github-project-corpus-funnel}');
  lines.push('\\begin{tabular}{lrp{0.55\\linewidth}}');
  lines.push('\\toprule');
  lines.push('Layer & Count & Meaning \\\\');
  lines.push('\\midrule');
  lines.push(`Raw captures & ${analysis.counts.raw_captures} & Timestamp-indexed records from \\texttt{raw-github/}. \\\\`);
  lines.push(`Classified repositories & ${analysis.counts.classified_repos} & Rows with category, theme, stack, evidence, and time-slice fields. \\\\`);
  lines.push(`Analyzed model-card projects & ${analysis.counts.analyzed_projects} & Repositories promoted into site and paper-facing project analysis. \\\\`);
  lines.push(`Strict evolution theme & ${analysis.counts.raw_core_evolution} & Classified rows whose base theme is \\texttt{evolution}. \\\\`);
  lines.push(`Broad evolution-related & ${analysis.counts.raw_broad_evolution} & Rows matching evolution, self-improvement, reflection, or recursive-improvement signals. \\\\`);
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table}');
  lines.push('');
  lines.push('\\begin{table}[t]');
  lines.push('\\centering');
  lines.push('\\caption{Raw GitHub category and theme distribution.}');
  lines.push('\\label{tab:github-category-theme-distribution}');
  lines.push('\\begin{tabular}{lrlr}');
  lines.push('\\toprule');
  lines.push('Category & Count & Theme & Count \\\\');
  lines.push('\\midrule');
  const maxRows = Math.max(analysis.raw_category_counts.length, analysis.raw_theme_counts.length);
  for (let i = 0; i < maxRows; i += 1) {
    const cat = analysis.raw_category_counts[i] || { key: '', count: '' };
    const theme = analysis.raw_theme_counts[i] || { key: '', count: '' };
    lines.push(`${escapeTex(cat.key)} & ${cat.count} & ${escapeTex(theme.key)} & ${theme.count} \\\\`);
  }
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table}');
  lines.push('');
  lines.push(`To avoid a misleading recent-weeks-only view, we add a fixed 24-month index window that mixes repository-level temporal signals with local git commit and tag timelines. Within ${analysis.two_year_project_timeline.window.start_month} to ${analysis.two_year_project_timeline.window.end_month}, ${analysis.two_year_project_timeline.coverage.inside_window} analyzed projects have at least one temporal signal inside the window, while ${analysis.two_year_project_timeline.coverage.older_than_window} projects are older and ${analysis.two_year_project_timeline.coverage.unknown} remain unknown. Across local mirrors, ${analysis.local_git_history_24m.totals.commits_24m} commits and ${analysis.local_git_history_24m.totals.tags_24m} tag events are observed in the same window.`);
  lines.push('');
  lines.push('\\begin{table}[t]');
  lines.push('\\centering');
  lines.push('\\caption{Two-year timeline summary (24-month window).}');
  lines.push('\\label{tab:two-year-git-timeline-summary}');
  lines.push('\\begin{tabular}{lr}');
  lines.push('\\toprule');
  lines.push('Metric & Value \\\\');
  lines.push('\\midrule');
  lines.push(`Window start month & ${escapeTex(analysis.two_year_project_timeline.window.start_month)} \\\\`);
  lines.push(`Window end month & ${escapeTex(analysis.two_year_project_timeline.window.end_month)} \\\\`);
  lines.push(`Projects inside window & ${analysis.two_year_project_timeline.coverage.inside_window} \\\\`);
  lines.push(`Older than window & ${analysis.two_year_project_timeline.coverage.older_than_window} \\\\`);
  lines.push(`Unknown temporal signal & ${analysis.two_year_project_timeline.coverage.unknown} \\\\`);
  lines.push(`Local git commits (24m) & ${analysis.local_git_history_24m.totals.commits_24m} \\\\`);
  lines.push(`Local git tag events (24m) & ${analysis.local_git_history_24m.totals.tags_24m} \\\\`);
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table}');
  lines.push('');
  lines.push(`The time analysis deliberately separates repository creation from activity timestamps. The raw corpus time-slice field is an activity/content timestamp extracted from GitHub captures, so it measures when the captured page exposed recent activity. The analyzed-project timeline uses GitHub API \\texttt{created\\_at} where available. Local mirror first commit is reported only as a first-observed timestamp, not as repository creation time, because many local mirrors are shallow or regenerated. In the current run, ${analysis.counts.analyzed_with_verified_created_at} of ${analysis.counts.analyzed_projects} analyzed projects have verified GitHub creation time, while ${analysis.counts.analyzed_with_first_observed_fallback} have only first-observed local fallback evidence.`);
  lines.push(` Git metadata is also joined at the project level: ${analysis.counts.analyzed_with_github_api_metadata} analyzed projects have GitHub API/cache metadata, ${analysis.counts.analyzed_with_local_git_mirror} have local git mirror evidence, and ${analysis.counts.analyzed_with_public_report} have a public report path.`);
  lines.push('');
  lines.push('\\begin{table*}[t]');
  lines.push('\\centering');
  lines.push('\\small');
  lines.push('\\caption{First 24 analyzed projects by verified creation month or local first-observed fallback.}');
  lines.push('\\label{tab:analyzed-project-release-timeline}');
  lines.push('\\begin{tabular}{lllp{0.21\\linewidth}p{0.30\\linewidth}}');
  lines.push('\\toprule');
  lines.push('Month & Source & Repository & Category & Evolution pattern \\\\');
  lines.push('\\midrule');
  for (const row of topTimeline) {
    lines.push(`${escapeTex(monthOf(row.created_at))} & ${escapeTex(row.created_at_source)} & \\texttt{${escapeTex(row.repo)}} & ${escapeTex(row.category)} & ${escapeTex(row.pattern)} \\\\`);
  }
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table*}');
  lines.push('');
  lines.push('\\begin{table*}[t]');
  lines.push('\\centering');
  lines.push('\\small');
  lines.push('\\caption{Top 20 current-value project ranking with 50\\% time weight.}');
  lines.push('\\label{tab:recency-weighted-project-ranking}');
  lines.push('\\begin{tabular}{rllrrrr}');
  lines.push('\\toprule');
  lines.push('Rank & Repository & Created & Score & Time & Mechanism & Evidence \\\\');
  lines.push('\\midrule');
  for (const row of analysis.recency_weighted_project_ranking.slice(0, 20)) {
    lines.push(`${row.rank} & \\texttt{${escapeTex(row.repo)}} & ${escapeTex(monthOf(row.created_at))} & ${row.scores.current_value} & ${row.scores.time} & ${row.scores.mechanism} & ${row.scores.evidence} \\\\`);
  }
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table*}');
  lines.push('');
  lines.push('\\begin{table}[t]');
  lines.push('\\centering');
  lines.push('\\caption{Top strict evolution-theme repositories by local star snapshot.}');
  lines.push('\\label{tab:top-evolution-theme-repos}');
  lines.push('\\begin{tabular}{lrrp{0.42\\linewidth}}');
  lines.push('\\toprule');
  lines.push('Repository & Stars & Time & Description \\\\');
  lines.push('\\midrule');
  for (const row of analysis.raw_core_evolution_top.slice(0, 12)) {
    lines.push(`\\texttt{${escapeTex(row.repo)}} & ${row.stars} & ${escapeTex(row.time_slice)} & ${escapeTex(row.description).slice(0, 180)} \\\\`);
  }
  lines.push('\\bottomrule');
  lines.push('\\end{tabular}');
  lines.push('\\end{table}');
  fs.writeFileSync(texOut, `${lines.join('\n')}\n`);
};

const main = async () => {
  const rawTimestampIndex = readJson('output/raw-github-timestamp-index.json');
  const classified = readJson('research/repo-classification.json').rows;
  const projects = parseProjects();
  const createdAtCache = loadCreatedAtCache();

  const classifiedByRepo = new Map(classified.map((row) => [normalizeRepo(row.repo), row]));
  const rawByRepo = new Map(rawTimestampIndex.records.map((row) => [normalizeRepo(row.repo), row]));

  const referenceDate = new Date();
  const enrichedProjects = [];
  for (const project of projects) {
    const normalized = normalizeRepo(project.repo);
    const apiMeta = await fetchRepoCreatedAt(project.repo, createdAtCache);
    const classifiedRow = classifiedByRepo.get(normalized);
    const rawRow = rawByRepo.get(normalized);
    const fallbackFirstCommit = apiMeta.created_at ? null : localGitFirstCommit(project.localPath);
    const localGit = localGitStats(project.localPath);
    const localGitHistory24m = localGitHistoryLookback(project.localPath, referenceDate, 24);
    const reportPath = project.report ?? null;
    const publicReportPath = reportPath ? path.join('site/public/reports', reportPath) : null;
    enrichedProjects.push({
      name: project.name,
      repo: project.repo,
      normalized_repo: normalized,
      url: project.url,
      category: project.category,
      pattern: project.pattern,
      tags: project.tags,
      site_stars: project.stars,
      site_forks: project.forks,
      license: project.license,
      lastPushed: project.lastPushed,
      localPath: project.localPath,
      local_git: localGit,
      local_git_history_24m: localGitHistory24m,
      report: reportPath,
      public_report: publicReportPath,
      public_report_exists: publicReportPath ? fs.existsSync(path.join(root, publicReportPath)) : false,
      status: project.status,
      description: project.description,
      created_at: apiMeta.created_at ?? null,
      created_at_source: apiMeta.created_at ? apiMeta.source : 'unknown',
      first_observed_at: fallbackFirstCommit,
      first_observed_source: fallbackFirstCommit ? 'local_git_first_commit' : null,
      github_source: apiMeta.source,
      github_api_stars: apiMeta.stars,
      github_api_forks: apiMeta.forks,
      github_pushed_at: apiMeta.pushed_at,
      github_error: apiMeta.error,
      in_raw_timestamp_index: Boolean(rawRow),
      raw_file: rawRow?.file ?? null,
      raw_collected_at: rawRow?.collected_at ?? null,
      raw_content_timestamp: rawRow?.content_timestamp ?? null,
      raw_timestamp_source: rawRow?.timestamp_source ?? null,
      in_classification: Boolean(classifiedRow),
      classification_category: classifiedRow?.final_category ?? null,
      classification_function_tag: classifiedRow?.function_tag ?? null,
      classification_evidence: classifiedRow?.evidence ?? null,
      raw_time_slice: rawRow?.time_slice ?? classifiedRow?.time_slice ?? 'unknown',
      classified_theme: classifiedRow?.base_theme ?? 'not-classified',
      evolution_focused: isProjectEvolutionFocused(project)
    });
  }
  saveCreatedAtCache(createdAtCache);

  const rawCoreEvolution = classified.filter(isCoreEvolutionClassified);
  const rawBroadEvolution = classified.filter(isBroadEvolutionClassified);
  const analyzedTimeline = enrichedProjects
    .slice()
    .sort((a, b) => {
      const at = a.created_at || '9999-99-99';
      const bt = b.created_at || '9999-99-99';
      return at.localeCompare(bt) || a.repo.localeCompare(b.repo);
    });

  const twoYearProjectTimeline = buildTwoYearLookback(enrichedProjects, referenceDate, 24);
  const localGitHistoryTimeline = aggregateLocalGitLookback(enrichedProjects, referenceDate, 24);

  const analysis = {
    generated_at: referenceDate.toISOString(),
    counts: {
      raw_captures: rawTimestampIndex.records.length,
      raw_files_on_disk: fs.readdirSync(path.join(root, 'raw-github')).filter((name) => name.endsWith('.md') && name !== 'INDEX.md').length,
      classified_repos: classified.length,
      analyzed_projects: projects.length,
      analyzed_in_raw_timestamp_index: enrichedProjects.filter((row) => row.in_raw_timestamp_index).length,
      analyzed_in_classification: enrichedProjects.filter((row) => row.in_classification).length,
      analyzed_evolution_focused: enrichedProjects.filter((row) => row.evolution_focused).length,
      analyzed_with_verified_created_at: enrichedProjects.filter((row) => row.created_at).length,
      analyzed_with_first_observed_fallback: enrichedProjects.filter((row) => row.first_observed_at).length,
      analyzed_with_github_api_metadata: enrichedProjects.filter((row) => row.github_source === 'github_api').length,
      analyzed_with_local_git_mirror: enrichedProjects.filter((row) => row.local_git).length,
      analyzed_with_local_git_history_24m: enrichedProjects.filter((row) => row.local_git_history_24m).length,
      analyzed_with_local_git_commits_24m: enrichedProjects.filter((row) => Number(row.local_git_history_24m?.commits_24m || 0) > 0).length,
      analyzed_with_local_git_tags_24m: enrichedProjects.filter((row) => Number(row.local_git_history_24m?.tags_24m || 0) > 0).length,
      analyzed_with_public_report: enrichedProjects.filter((row) => row.public_report_exists).length,
      raw_core_evolution: rawCoreEvolution.length,
      raw_broad_evolution: rawBroadEvolution.length,
      raw_unknown_time_slice: rawTimestampIndex.unknown_content_timestamp
    },
    raw_category_counts: countBy(classified, (row) => row.final_category),
    raw_theme_counts: countBy(classified, (row) => row.base_theme),
    raw_stack_counts: countBy(classified, (row) => row.stack),
    raw_time_slice_counts: countBy(classified, (row) => row.time_slice),
    analyzed_theme_counts: countBy(enrichedProjects, (row) => row.classified_theme),
    analyzed_created_month_counts: countBy(enrichedProjects, (row) => monthOf(row.created_at)),
    raw_core_evolution_top: topRows(rawCoreEvolution, 25),
    raw_broad_evolution_top: topRows(rawBroadEvolution, 50),
    raw_classified_repositories: classified,
    raw_core_evolution_repositories: rawCoreEvolution,
    raw_broad_evolution_repositories: rawBroadEvolution,
    analyzed_projects: enrichedProjects,
    analyzed_git_evidence: enrichedProjects
      .slice()
      .sort((a, b) => Number(b.github_api_stars ?? b.site_stars ?? 0) - Number(a.github_api_stars ?? a.site_stars ?? 0) || a.repo.localeCompare(b.repo)),
    analyzed_timeline: analyzedTimeline,
    two_year_project_timeline: twoYearProjectTimeline,
    local_git_history_24m: localGitHistoryTimeline,
    ranking_method: {
      name: 'recency_weighted_current_value',
      reference_date: referenceDate.toISOString(),
      weights: {
        time: 0.50,
        mechanism: 0.20,
        evidence: 0.15,
        adoption: 0.10,
        usefulness: 0.05
      },
      time_score: {
        creation_recency_weight: 0.70,
        activity_recency_weight: 0.30,
        creation_horizon_months: 24,
        activity_horizon_months: 12,
        missing_created_at_cap: 45
      },
      note: 'Historical influence and current release attention are intentionally separated; star-only ranking is not used.'
    },
    recency_weighted_project_ranking: rankAnalyzedProjects(enrichedProjects, referenceDate)
  };

  fs.writeFileSync(jsonOut, `${JSON.stringify(analysis, null, 2)}\n`);
  writeMarkdown(analysis);
  writeTex(analysis);
  console.log(JSON.stringify({
    jsonOut,
    mdOut,
    texOut,
    counts: analysis.counts
  }, null, 2));
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
