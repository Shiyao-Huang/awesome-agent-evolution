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

const fetchRepoCreatedAt = async (repo, cache) => {
  const normalized = normalizeRepo(repo);
  if (cache[normalized]) return cache[normalized];
  let response;
  try {
    response = await fetch(`https://api.github.com/repos/${normalized}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'awesome-evolution-data-analysis'
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
  lines.push('## Analyzed Project Release Timeline');
  lines.push('');
  lines.push('| Created month | Repo | Category | Pattern | Source |');
  lines.push('|---|---|---|---|---|');
  for (const row of analysis.analyzed_timeline) {
    lines.push(`| ${monthOf(row.created_at)} | [${row.repo}](${row.url}) | ${row.category} | ${row.pattern} | ${row.created_at_source} |`);
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
  lines.push(`The time analysis deliberately separates repository creation from activity timestamps. The raw corpus time-slice field is an activity/content timestamp extracted from GitHub captures, so it measures when the captured page exposed recent activity. The analyzed-project timeline uses GitHub API \\texttt{created\\_at} where available. When GitHub API creation time is unavailable, the table marks a weaker \\texttt{local\\_git\\_first\\_commit} fallback; this is a first-observed mirror timestamp, not a release-date claim. In the current run, ${analysis.counts.analyzed_with_created_at_or_fallback} of ${analysis.counts.analyzed_projects} analyzed projects have either verified creation time or a local fallback.`);
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

  const enrichedProjects = [];
  for (const project of projects) {
    const normalized = normalizeRepo(project.repo);
    const apiMeta = await fetchRepoCreatedAt(project.repo, createdAtCache);
    const classifiedRow = classifiedByRepo.get(normalized);
    const rawRow = rawByRepo.get(normalized);
    const fallbackFirstCommit = apiMeta.created_at ? null : localGitFirstCommit(project.localPath);
    enrichedProjects.push({
      name: project.name,
      repo: project.repo,
      normalized_repo: normalized,
      url: project.url,
      category: project.category,
      pattern: project.pattern,
      tags: project.tags,
      stars: project.stars,
      lastPushed: project.lastPushed,
      localPath: project.localPath,
      created_at: apiMeta.created_at ?? fallbackFirstCommit,
      created_at_source: apiMeta.created_at ? apiMeta.source : fallbackFirstCommit ? 'local_git_first_commit' : apiMeta.source,
      github_api_stars: apiMeta.stars,
      in_raw_timestamp_index: Boolean(rawRow),
      in_classification: Boolean(classifiedRow),
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

  const analysis = {
    generated_at: new Date().toISOString(),
    counts: {
      raw_captures: rawTimestampIndex.records.length,
      raw_files_on_disk: fs.readdirSync(path.join(root, 'raw-github')).filter((name) => name.endsWith('.md')).length,
      classified_repos: classified.length,
      analyzed_projects: projects.length,
      analyzed_in_raw_timestamp_index: enrichedProjects.filter((row) => row.in_raw_timestamp_index).length,
      analyzed_in_classification: enrichedProjects.filter((row) => row.in_classification).length,
      analyzed_evolution_focused: enrichedProjects.filter((row) => row.evolution_focused).length,
      analyzed_with_created_at_or_fallback: enrichedProjects.filter((row) => row.created_at).length,
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
    analyzed_timeline: analyzedTimeline
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
