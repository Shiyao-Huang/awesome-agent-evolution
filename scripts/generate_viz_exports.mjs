#!/usr/bin/env node
// @sm:node viz-export-generator
// @sm:feature survey.visualization.data-exports
// @sm:prev survey/figures/*, analysis/*, output/*
// @sm:next site/public/visuals/data/*
// @sm:deps generate_survey_figures.py, analyze_github_project_data.mjs
// @sm:evidence node scripts/generate_viz_exports.mjs

/**
 * Data Pipeline: Generate visualization-ready JSON exports for the viz team.
 * Reads from survey/figures/, analysis/, output/ and produces structured JSON
 * in site/public/visuals/data/ for the Astro site and interactive charts.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const FIGURES_DIR = path.join(ROOT, 'survey', 'figures');
const ANALYSIS_DIR = path.join(ROOT, 'analysis');
const OUTPUT_DIR = path.join(ROOT, 'output');
const VIZ_DATA_DIR = path.join(ROOT, 'site', 'public', 'visuals', 'data');

fs.mkdirSync(VIZ_DATA_DIR, { recursive: true });

const readJson = (p) => {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch { return null; }
};

const readCsv = (p) => {
  try {
    const lines = fs.readFileSync(p, 'utf8').trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const vals = line.split(',');
      const obj = {};
      headers.forEach((h, i) => { obj[h.trim()] = (vals[i] || '').trim(); });
      return obj;
    });
  }
  catch { return []; }
};

const writeJson = (name, data) => {
  const outPath = path.join(VIZ_DATA_DIR, name);
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`  → ${name} (${JSON.stringify(data).length} bytes)`);
};

const generatedAt = new Date().toISOString();

console.log('Generating visualization data exports...\n');

// ========== 1. Overview Stats ==========
const summary = readJson(path.join(FIGURES_DIR, 'figure-data-summary.json')) || {};
const githubAnalysis = readJson(path.join(ANALYSIS_DIR, 'github-project-data-analysis.json')) || {};

const overview = {
  generated_at: generatedAt,
  pipeline_version: '2.0',
  data_counts: {
    raw_github_repos: githubAnalysis.counts?.raw_captures || 0,
    raw_papers: summary.counts?.raw_paper_md_files || 0,
    paper_reviews: summary.counts?.paper_reviews || 0,
    academic_reviews: summary.counts?.academic_reviews || 0,
    analyzed_projects: githubAnalysis.counts?.analyzed_projects || 0,
    evolution_focused: githubAnalysis.counts?.analyzed_evolution_focused || 0,
    raw_blog_records: summary.counts?.raw_blog_json_records || 0,
    raw_social_records: summary.counts?.raw_social_json_records || 0,
    pain_points: summary.counts?.pain_points_parsed || 0,
    repo_cross_analysis_rows: summary.counts?.repo_cross_analysis_rows || 0,
  },
};
writeJson('overview-stats.json', overview);

// ========== 2. Repo Category Distribution ==========
const repoCategories = (githubAnalysis.raw_category_counts || []).map(c => ({
  category: c.key,
  count: c.count,
  percentage: ((c.count / (githubAnalysis.counts?.raw_captures || 1)) * 100).toFixed(1),
}));
writeJson('repo-category-distribution.json', {
  generated_at: generatedAt,
  total_repos: githubAnalysis.counts?.raw_captures || 0,
  categories: repoCategories,
});

// ========== 3. Theme Distribution ==========
const themes = (githubAnalysis.raw_theme_counts || []).map(t => ({
  theme: t.key,
  count: t.count,
  percentage: ((t.count / (githubAnalysis.counts?.raw_captures || 1)) * 100).toFixed(1),
}));
writeJson('theme-distribution.json', {
  generated_at: generatedAt,
  themes,
});

// ========== 4. Tech Stack Distribution ==========
const techStacks = (githubAnalysis.raw_stack_counts || []).map(s => ({
  stack: s.key,
  count: s.count,
}));
writeJson('tech-stack-distribution.json', {
  generated_at: generatedAt,
  stacks: techStacks,
});

// ========== 5. Paper Method Taxonomy ==========
const methodClassification = readCsv(path.join(FIGURES_DIR, 'paper-method-classification-snapshot.csv'));
const methodGroups = {};
for (const row of methodClassification) {
  const cat = row.method_category || 'other/unclear';
  if (!methodGroups[cat]) methodGroups[cat] = [];
  methodGroups[cat].push({
    arxiv_id: row.arxiv_id,
    title: row.title,
    time_slice: row.time_slice,
  });
}
const methodTaxonomy = Object.entries(methodGroups).map(([category, papers]) => ({
  category,
  paper_count: papers.length,
  percentage: ((papers.length / Math.max(methodClassification.length, 1)) * 100).toFixed(1),
  papers: papers.slice(0, 10),
  total_in_category: papers.length,
}));
writeJson('paper-method-taxonomy.json', {
  generated_at: generatedAt,
  total_papers: methodClassification.length,
  taxonomy: methodTaxonomy,
});

// ========== 6. Framework Radar Data ==========
const radarRows = readCsv(path.join(FIGURES_DIR, 'framework-radar-scores.csv'));
const radarData = radarRows.map(r => ({
  framework: r.framework,
  dimensions: {
    adoption: parseInt(r.adoption_signal) || 0,
    observability: parseInt(r.observability_signal) || 0,
    production_fit: parseInt(r.production_fit_signal) || 0,
    self_evolution: parseInt(r.self_evolution_fit) || 0,
    governance: parseInt(r.safety_governance_signal) || 0,
  },
  signals: {
    repo_mentions: parseInt(r.repo_mentions) || 0,
    pain_mentions: parseInt(r.pain_mentions) || 0,
  },
}));
writeJson('framework-radar.json', {
  generated_at: generatedAt,
  axes: ['adoption', 'observability', 'production_fit', 'self_evolution', 'governance'],
  frameworks: radarData,
});

// ========== 7. Cross-Source Validation Matrix ==========
const crossRows = readCsv(path.join(FIGURES_DIR, 'cross-source-validation-matrix.csv'));
const crossMatrix = crossRows.map(r => ({
  topic: r.topic,
  signals: {
    papers: parseInt(r.paper_signal) || 0,
    repos: parseInt(r.repo_signal) || 0,
    pain_points: parseInt(r.painpoint_signal) || 0,
    blogs: parseInt(r.blog_signal) || 0,
  },
  interpretation: r.interpretation,
}));
writeJson('cross-source-matrix.json', {
  generated_at: generatedAt,
  sources: ['papers', 'repos', 'pain_points', 'blogs'],
  topics: crossMatrix,
});

// ========== 8. Data Coverage Snapshot ==========
const coverageRows = readCsv(path.join(FIGURES_DIR, 'data-coverage-snapshot.csv'));
const coverage = coverageRows.map(r => ({
  dataset: r.dataset,
  current: parseInt(r.current) || 0,
  target: r.target_or_claim,
  coverage_pct: r.coverage_or_note,
  status: r.status,
}));
writeJson('data-coverage.json', {
  generated_at: generatedAt,
  datasets: coverage,
});

// ========== 9. Repo Category × Tech Stack Cross Tab ==========
const crossTab = readCsv(path.join(FIGURES_DIR, 'repo-category-stack-cross-tab.csv'));
writeJson('repo-category-stack-crosstab.json', {
  generated_at: generatedAt,
  cross_tabulation: crossTab,
});

// ========== 10. Blog Author Profiles ==========
const blogProfiles = readCsv(path.join(FIGURES_DIR, 'blog-author-profile-index.csv'));
const platformCounts = {};
const influenceCounts = {};
for (const row of blogProfiles) {
  const p = row.platform || 'unknown';
  const inf = row.influence_rating || 'unknown';
  platformCounts[p] = (platformCounts[p] || 0) + 1;
  influenceCounts[inf] = (influenceCounts[inf] || 0) + 1;
}
writeJson('blog-author-summary.json', {
  generated_at: generatedAt,
  total_records: blogProfiles.length,
  platform_distribution: Object.entries(platformCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([platform, count]) => ({ platform, count })),
  influence_distribution: Object.entries(influenceCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([rating, count]) => ({ rating, count })),
  top_authors: blogProfiles.slice(0, 50),
});

// ========== 11. Pain Point Index ==========
const painRows = readCsv(path.join(FIGURES_DIR, 'painpoint-index.csv'));
const painByPlatform = {};
for (const row of painRows) {
  const p = row.platform || 'unknown';
  if (!painByPlatform[p]) painByPlatform[p] = [];
  painByPlatform[p].push({ id: row.pain_id, title: row.title });
}
writeJson('painpoint-index.json', {
  generated_at: generatedAt,
  total_pain_points: painRows.length,
  by_platform: Object.entries(painByPlatform).map(([platform, points]) => ({
    platform,
    count: points.length,
    points,
  })),
});

// ========== 12. Evolution Timeline ==========
// Build timeline from raw data
const papersIndex = readJson(path.join(OUTPUT_DIR, 'raw-papers-timestamp-index.json')) || {};
const paperRecords = papersIndex.records || [];
const timeSliceCounts = {};
for (const rec of paperRecords) {
  const ts = rec.time_slice || 'unknown';
  timeSliceCounts[ts] = (timeSliceCounts[ts] || 0) + 1;
}
const timeline = Object.entries(timeSliceCounts)
  .filter(([ts]) => ts !== 'unknown')
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([time_slice, count]) => ({ time_slice, count }));

writeJson('evolution-timeline.json', {
  generated_at: generatedAt,
  total_papers: paperRecords.length,
  unknown_time_slices: timeSliceCounts['unknown'] || 0,
  timeline,
});

// ========== 13. Project Analysis Index ==========
const githubMd = readJson(path.join(ANALYSIS_DIR, 'github-project-data-analysis.json')) || {};
const projectIndex = (githubMd.raw_category_counts || []).map(c => ({
  category: c.key,
  count: c.count,
}));
writeJson('project-analysis-index.json', {
  generated_at: generatedAt,
  total_projects_analyzed: githubMd.counts?.analyzed_projects || 0,
  evolution_focused: githubMd.counts?.analyzed_evolution_focused || 0,
  core_evolution: githubMd.counts?.raw_core_evolution || 0,
  broad_evolution: githubMd.counts?.raw_broad_evolution || 0,
  with_timestamps: githubMd.counts?.analyzed_with_created_at_or_fallback || 0,
  categories: projectIndex,
});

console.log('\nDone. All exports written to site/public/visuals/data/');
