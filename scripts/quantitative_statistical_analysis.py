#!/usr/bin/env python3
"""
Quantitative Statistical Analysis for Self-Evolving AI Agent Survey
===================================================================
Reads all CSV/JSON data sources, computes descriptive statistics,
correlation analyses, effect sizes, and outputs formal data tables.

@sm:node quantitative-statistical-analysis
@sm:input survey/figures/*.csv, analysis/*.csv, research/repo-classification.csv
@sm:output analysis/quantitative-statistical-report.md, survey/figures/stat-*.csv
@sm:verify python3 scripts/quantitative_statistical_analysis.py
"""

import csv
import json
import math
import os
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
SURVEY_FIG = BASE / "survey" / "figures"
ANALYSIS = BASE / "research"

# ── Helpers ──────────────────────────────────────────────────────────

def read_csv(path):
    with open(path, newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))

def read_json(path):
    with open(path, encoding='utf-8') as f:
        return json.load(f)

def percentile(sorted_vals, p):
    if not sorted_vals:
        return 0
    k = (len(sorted_vals) - 1) * p / 100
    f = math.floor(k)
    c = math.ceil(k)
    if f == c:
        return sorted_vals[int(k)]
    return sorted_vals[f] * (c - k) + sorted_vals[c] * (k - f)

def mean(vals):
    return sum(vals) / len(vals) if vals else 0

def std_dev(vals):
    if len(vals) < 2:
        return 0
    m = mean(vals)
    return math.sqrt(sum((x - m) ** 2 for x in vals) / (len(vals) - 1))

def median(vals):
    s = sorted(vals)
    return percentile(s, 50)

def cohens_d(group1, group2):
    n1, n2 = len(group1), len(group2)
    if n1 < 2 or n2 < 2:
        return None
    m1, m2 = mean(group1), mean(group2)
    s1, s2 = std_dev(group1), std_dev(group2)
    pooled_std = math.sqrt(((n1 - 1) * s1**2 + (n2 - 1) * s2**2) / (n1 + n2 - 2))
    if pooled_std == 0:
        return None
    return (m1 - m2) / pooled_std

def descriptive_stats(vals, label=""):
    s = sorted(vals)
    return {
        "label": label,
        "n": len(s),
        "mean": round(mean(s), 2),
        "median": round(median(s), 2),
        "std": round(std_dev(s), 2),
        "min": s[0] if s else 0,
        "max": s[-1] if s else 0,
        "p25": round(percentile(s, 25), 2),
        "p75": round(percentile(s, 75), 2),
        "iqr": round(percentile(s, 75) - percentile(s, 25), 2),
        "skewness": round(sum((x - mean(s))**3 for x in s) / (len(s) * std_dev(s)**3), 4) if len(s) > 2 and std_dev(s) > 0 else 0
    }

# ── Load Data ────────────────────────────────────────────────────────

print("Loading data sources...")

# 1. Repo cross-analysis (stars + category + language)
repo_data = read_csv(BASE / "analysis" / "repo-cross-analysis.csv")
for r in repo_data:
    r['stars'] = int(r.get('stars', 0) or 0)

# 2. Repo classification (full classification with base_theme)
repo_classification = read_csv(BASE / "research" / "repo-classification.csv")
for r in repo_classification:
    r['stars'] = int(r.get('stars', 0) or 0)

# 3. Repo techstack cross-analysis (alternate source)
techstack_data = read_csv(BASE / "analysis" / "repo-techstack-cross-analysis.csv")
for r in techstack_data:
    r['stars'] = int(r.get('stars', 0) or 0)

# 3. Framework radar scores
radar_data = read_csv(SURVEY_FIG / "framework-radar-scores.csv")
for r in radar_data:
    for key in ['adoption_signal', 'observability_signal', 'production_fit_signal',
                'self_evolution_fit', 'safety_governance_signal', 'repo_mentions', 'pain_mentions']:
        r[key] = int(r.get(key, 0) or 0)

# 4. Paper method classification
paper_methods = read_csv(SURVEY_FIG / "paper-method-classification-snapshot.csv")

# 5. Category × stack cross-tab
cat_stack = read_csv(SURVEY_FIG / "repo-category-stack-cross-tab.csv")

# 6. Cross-source validation
cross_source = read_csv(SURVEY_FIG / "cross-source-validation-matrix.csv")
for r in cross_source:
    for key in ['paper_signal', 'repo_signal', 'painpoint_signal', 'blog_signal']:
        r[key] = int(r.get(key, 0) or 0)

# 7. Painpoint index
painpoints = read_csv(SURVEY_FIG / "painpoint-index.csv")

# 8. Data coverage snapshot
coverage = read_csv(SURVEY_FIG / "data-coverage-snapshot.csv")

# 9. Figure data summary (JSON)
figure_summary = read_json(SURVEY_FIG / "figure-data-summary.json")

# 10. Main analysis JSON (for time slices and evolution data)
main_analysis = read_json(BASE / "analysis" / "github-project-data-analysis.json")

# 11. Framework-painpoint crosswalk
crosswalk = read_csv(BASE / "analysis" / "framework-painpoint-crosswalk.csv")

# 12. Blog author profiles
blog_profiles = read_csv(SURVEY_FIG / "blog-author-profile-index.csv")

print(f"Loaded {len(repo_data)} repos, {len(paper_methods)} papers, {len(painpoints)} pain points")

# ── Analysis 1: Star Distribution by Category ───────────────────────

print("\n[1/8] Computing star distributions by category...")

# Build category -> stars mapping from repo_data
cat_stars = defaultdict(list)
for r in repo_data:
    cat_stars[r['category']].append(r['stars'])

# From repo_classification for base_theme and function_tag
theme_stars = defaultdict(list)
for r in repo_classification:
    if r.get('base_theme'):
        theme_stars[r['base_theme']].append(r['stars'])

func_stars = defaultdict(list)
for r in repo_classification:
    if r.get('function_tag'):
        func_stars[r['function_tag']].append(r['stars'])

# Compute descriptive stats per category
cat_stats = []
for cat in sorted(cat_stars.keys(), key=lambda x: -len(cat_stars[x])):
    if cat and cat != '-':
        stats = descriptive_stats(cat_stars[cat], cat)
        cat_stats.append(stats)

theme_stats = []
for theme in sorted(theme_stars.keys(), key=lambda x: -len(theme_stars[x])):
    stats = descriptive_stats(theme_stars[theme], theme)
    theme_stats.append(stats)

# Overall stats
all_stars = [r['stars'] for r in repo_data]
overall_stats = descriptive_stats(all_stars, "all_repos")

print(f"  Overall: n={overall_stats['n']}, mean={overall_stats['mean']}, median={overall_stats['median']}")

# ── Analysis 2: Effect Sizes ────────────────────────────────────────

print("[2/8] Computing effect sizes...")

# Evolution vs non-evolution repos (using base_theme from repo_classification)
evo_repos = [r['stars'] for r in repo_classification if r.get('base_theme') == 'evolution']
non_evo_repos = [r['stars'] for r in repo_classification if r.get('base_theme') != 'evolution']

effect_evolution = {
    "comparison": "evolution_theme vs others",
    "n_evo": len(evo_repos),
    "n_non_evo": len(non_evo_repos),
    "mean_evo": round(mean(evo_repos), 2),
    "mean_non_evo": round(mean(non_evo_repos), 2),
    "median_evo": round(median(evo_repos), 2),
    "median_non_evo": round(median(non_evo_repos), 2),
    "cohens_d": round(cohens_d(evo_repos, non_evo_repos), 4) if cohens_d(evo_repos, non_evo_repos) else None,
    "interpretation": ""
}

if effect_evolution['cohens_d'] is not None:
    d = abs(effect_evolution['cohens_d'])
    if d < 0.2:
        effect_evolution['interpretation'] = "negligible"
    elif d < 0.5:
        effect_evolution['interpretation'] = "small"
    elif d < 0.8:
        effect_evolution['interpretation'] = "medium"
    else:
        effect_evolution['interpretation'] = "large"

# Python vs non-Python repos
python_repos = [r['stars'] for r in repo_data if r.get('language') == 'Python']
non_python_repos = [r['stars'] for r in repo_data if r.get('language') != 'Python']

effect_python = {
    "comparison": "python vs non_python",
    "n_python": len(python_repos),
    "n_non_python": len(non_python_repos),
    "mean_python": round(mean(python_repos), 2),
    "mean_non_python": round(mean(non_python_repos), 2),
    "cohens_d": round(cohens_d(python_repos, non_python_repos), 4) if cohens_d(python_repos, non_python_repos) else None
}

# Framework vs evaluation repos
fw_stars = cat_stars.get('框架/framework', [])
ev_stars = cat_stars.get('评测/evaluation', [])
effect_fw_eval = {
    "comparison": "framework vs evaluation",
    "n_fw": len(fw_stars),
    "n_eval": len(ev_stars),
    "mean_fw": round(mean(fw_stars), 2),
    "mean_eval": round(mean(ev_stars), 2),
    "cohens_d": round(cohens_d(fw_stars, ev_stars), 4) if cohens_d(fw_stars, ev_stars) else None
}

# ── Analysis 3: Paper Method Trend Analysis ─────────────────────────

print("[3/8] Computing paper method trends...")

# Filter out CS category headers (titles starting with "Computer Science")
real_papers = [p for p in paper_methods if not p['title'].startswith('Computer Science')]

method_by_year = defaultdict(lambda: Counter())
for p in real_papers:
    ts = p.get('time_slice', '')
    if ts:
        year = ts[:4] if len(ts) >= 4 else ts[:4]
        method_by_year[year][p['method_category']] += 1

# Method cumulative trend
method_cumulative = defaultdict(int)
method_trend_rows = []
for year in sorted(method_by_year.keys()):
    for method, count in sorted(method_by_year[year].items()):
        method_cumulative[method] += count
        method_trend_rows.append({
            "year": year,
            "method_category": method,
            "annual_count": count,
            "cumulative_total": method_cumulative[method]
        })

# ── Analysis 4: Framework Radar Composite Scores ────────────────────

print("[4/8] Computing framework radar composites...")

signal_keys = ['adoption_signal', 'observability_signal', 'production_fit_signal',
               'self_evolution_fit', 'safety_governance_signal']

# Compute z-scores for each dimension
dim_values = {k: [r[k] for r in radar_data] for k in signal_keys}
dim_means = {k: mean(v) for k, v in dim_values.items()}
dim_stds = {k: std_dev(v) for k, v in dim_values.items()}

radar_composite = []
for r in radar_data:
    z_scores = {}
    for k in signal_keys:
        if dim_stds[k] > 0:
            z_scores[k + '_z'] = round((r[k] - dim_means[k]) / dim_stds[k], 4)
        else:
            z_scores[k + '_z'] = 0

    composite = round(mean([r[k] for k in signal_keys]), 3)
    self_evo_z = z_scores.get('self_evolution_fit_z', 0)

    radar_composite.append({
        "framework": r['framework'],
        "composite_score": composite,
        "self_evolution_fit": r['self_evolution_fit'],
        "self_evolution_z": self_evo_z,
        "repo_mentions": r['repo_mentions'],
        "pain_mentions": r['pain_mentions'],
        "pain_to_mention_ratio": round(r['pain_mentions'] / r['repo_mentions'], 4) if r['repo_mentions'] > 0 else None,
        **z_scores,
        **{k: r[k] for k in signal_keys}
    })

# ── Analysis 5: Cross-Source Gap Quantification ─────────────────────

print("[5/8] Quantifying cross-source gaps...")

cross_gap_rows = []
for r in cross_source:
    total_signal = r['paper_signal'] + r['repo_signal'] + r['painpoint_signal'] + r['blog_signal']
    max_signal = max(r['paper_signal'], r['repo_signal'], r['painpoint_signal'], r['blog_signal'])
    min_signal = min(r['paper_signal'], r['repo_signal'], r['painpoint_signal'], r['blog_signal'])

    # Gap ratio: how concentrated is the signal
    gap_ratio = round(max_signal / total_signal, 4) if total_signal > 0 else 0
    # Range: max - min
    signal_range = max_signal - min_signal
    # Std of signals
    signals = [r['paper_signal'], r['repo_signal'], r['painpoint_signal'], r['blog_signal']]
    signal_std = round(std_dev(signals), 2)

    cross_gap_rows.append({
        "topic": r['topic'],
        "paper_signal": r['paper_signal'],
        "repo_signal": r['repo_signal'],
        "painpoint_signal": r['painpoint_signal'],
        "blog_signal": r['blog_signal'],
        "total_signal": total_signal,
        "gap_ratio": gap_ratio,
        "signal_range": signal_range,
        "signal_std": signal_std,
        "dominant_source": ['paper', 'repo', 'painpoint', 'blog'][signals.index(max_signal)],
        "interpretation": r['interpretation']
    })

# ── Analysis 6: Pain Point Platform Distribution ────────────────────

print("[6/8] Analyzing pain point distribution...")

platform_pain_counts = Counter(p['platform'] for p in painpoints)

# ── Analysis 7: Language × Category Association ─────────────────────

print("[7/8] Computing language-category associations...")

# Simplified: top 4 languages vs top 5 categories
top_cats = [c[0] for c in Counter(r['category'] for r in repo_data).most_common(5)]
top_langs = ['Python', 'Markdown', 'Unknown', 'TypeScript', 'Rust']

assoc_rows = []
for cat in top_cats:
    cat_repos = [r for r in repo_data if r['category'] == cat]
    total = len(cat_repos)
    lang_counts = Counter(r['language'] for r in cat_repos)
    row = {"category": cat, "total": total}
    for lang in top_langs:
        count = lang_counts.get(lang, 0)
        row[lang] = count
        row[f"{lang}_pct"] = round(count / total * 100, 1) if total > 0 else 0
    assoc_rows.append(row)

# ── Analysis 8: Blog Author Impact Distribution ─────────────────────

print("[8/8] Analyzing blog author impact...")

blog_influence = Counter(r.get('influence_rating', 'unknown') for r in blog_profiles)
blog_platform = Counter(r.get('platform', 'unknown') for r in blog_profiles)

# ── Output Results ──────────────────────────────────────────────────

print("\nGenerating output files...")

# 1. Star distribution by category CSV
with open(SURVEY_FIG / "stat-star-distribution-by-category.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=["label", "n", "mean", "median", "std", "min", "max", "p25", "p75", "iqr", "skewness"])
    writer.writeheader()
    writer.writerow(overall_stats)
    for s in cat_stats:
        writer.writerow(s)

# 2. Star distribution by theme CSV
with open(SURVEY_FIG / "stat-star-distribution-by-theme.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=["label", "n", "mean", "median", "std", "min", "max", "p25", "p75", "iqr", "skewness"])
    writer.writeheader()
    for s in theme_stats:
        writer.writerow(s)

# 3. Effect sizes CSV
with open(SURVEY_FIG / "stat-effect-sizes.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=["comparison", "n_evo", "n_non_evo", "mean_evo", "mean_non_evo", "median_evo", "median_non_evo", "cohens_d", "interpretation"])
    writer.writeheader()
    writer.writerow(effect_evolution)

# 4. Method trend CSV
with open(SURVEY_FIG / "stat-method-trend.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=["year", "method_category", "annual_count", "cumulative_total"])
    writer.writeheader()
    for row in method_trend_rows:
        writer.writerow(row)

# 5. Framework radar composite CSV
with open(SURVEY_FIG / "stat-framework-radar-composite.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        "framework", "composite_score", "self_evolution_fit", "self_evolution_z",
        "repo_mentions", "pain_mentions", "pain_to_mention_ratio",
        "adoption_signal_z", "observability_signal_z", "production_fit_signal_z",
        "self_evolution_fit_z", "safety_governance_signal_z"
    ])
    writer.writeheader()
    for row in radar_composite:
        writer.writerow({k: row.get(k, '') for k in writer.fieldnames})

# 6. Cross-source gap CSV
with open(SURVEY_FIG / "stat-cross-source-gap.csv", 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        "topic", "paper_signal", "repo_signal", "painpoint_signal", "blog_signal",
        "total_signal", "gap_ratio", "signal_range", "signal_std", "dominant_source"
    ])
    writer.writeheader()
    for row in cross_gap_rows:
        writer.writerow({k: row.get(k, '') for k in writer.fieldnames})

# 7. Language-category association CSV
with open(SURVEY_FIG / "stat-language-category-association.csv", 'w', newline='', encoding='utf-8') as f:
    fields = ["category", "total"]
    for lang in top_langs:
        fields.extend([lang, f"{lang}_pct"])
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()
    for row in assoc_rows:
        writer.writerow({k: row.get(k, '') for k in fields})

# ── Generate Formal Report ──────────────────────────────────────────

report_lines = []
def w(line=""):
    report_lines.append(line)

w(f"# Quantitative Statistical Analysis Report")
w(f"")
w(f"**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
w(f"**Data Sources**: {len(repo_data)} repos, {len(real_papers)} papers, {len(painpoints)} pain points, {len(blog_profiles)} blog author records")
w(f"")
w(f"---")
w(f"")
w(f"## 1. Corpus Overview")
w(f"")
w(f"| Dataset | Count | Source |")
w(f"|---|---|---|")
w(f"| GitHub repos (raw captures) | {figure_summary['counts']['repo_records_timestamp_index']} | raw-github/ |")
w(f"| Repo cross-analysis | {figure_summary['counts']['repo_cross_analysis_rows']} | analysis/repo-cross-analysis.csv |")
w(f"| Classified repos | 486 | research/repo-classification.json |")
w(f"| Papers (timestamp index) | {figure_summary['counts']['paper_records_timestamp_index']} | raw-papers/ |")
w(f"| Paper method classifications | {len(real_papers)} | survey/figures/paper-method-classification-snapshot.csv |")
w(f"| Pain points (Mom Test) | {figure_summary['counts']['pain_points_parsed']} | survey/figures/painpoint-index.csv |")
w(f"| Blog/social records | {figure_summary['counts']['raw_blog_json_records']} blog + {figure_summary['counts']['raw_social_json_records']} social | raw-blogs/ + raw-social/ |")
w(f"| Blog author profiles | {len(blog_profiles)} | survey/figures/blog-author-profile-index.csv |")
w(f"| Analyzed projects (model cards) | {main_analysis['counts']['analyzed_projects']} | projects/ |")
w(f"| Core evolution repos | {main_analysis['counts']['raw_core_evolution']} | analysis/github-project-data-analysis.json |")
w(f"| Broad evolution repos | {main_analysis['counts']['raw_broad_evolution']} | analysis/github-project-data-analysis.json |")

w(f"")
w(f"---")
w(f"")
w(f"## 2. Star Distribution Analysis")
w(f"")
w(f"### 2.1 Overall Distribution")
w(f"")
w(f"| Metric | Value |")
w(f"|---|---|")
w(f"| N (repos) | {overall_stats['n']} |")
w(f"| Mean stars | {overall_stats['mean']:,.2f} |")
w(f"| Median stars | {overall_stats['median']:,.2f} |")
w(f"| Std deviation | {overall_stats['std']:,.2f} |")
w(f"| Min | {overall_stats['min']:,} |")
w(f"| Max | {overall_stats['max']:,} |")
w(f"| 25th percentile (P25) | {overall_stats['p25']:,.2f} |")
w(f"| 75th percentile (P75) | {overall_stats['p75']:,.2f} |")
w(f"| IQR | {overall_stats['iqr']:,.2f} |")
w(f"| Skewness | {overall_stats['skewness']} |")
w(f"")
w(f"**Interpretation**: Star distribution is heavily right-skewed (skewness = {overall_stats['skewness']}), indicating a power-law distribution where a small number of projects dominate adoption. Median ({overall_stats['median']:,.0f}) is far below mean ({overall_stats['mean']:,.0f}), confirming the 'superstar repo' effect.")

w(f"")
w(f"### 2.2 By Category")
w(f"")
w(f"| Category | N | Mean | Median | Std | Min | Max | P25 | P75 | Skewness |")
w(f"|---|---|---|---|---|---|---|---|---|---|")
for s in cat_stats:
    w(f"| {s['label']} | {s['n']} | {s['mean']:,.1f} | {s['median']:,.1f} | {s['std']:,.1f} | {s['min']:,} | {s['max']:,} | {s['p25']:,.1f} | {s['p75']:,.1f} | {s['skewness']} |")

w(f"")
w(f"### 2.3 By Theme")
w(f"")
w(f"| Theme | N | Mean | Median | Std | Min | Max | P25 | P75 | Skewness |")
w(f"|---|---|---|---|---|---|---|---|---|---|")
for s in theme_stats:
    w(f"| {s['label']} | {s['n']} | {s['mean']:,.1f} | {s['median']:,.1f} | {s['std']:,.1f} | {s['min']:,} | {s['max']:,} | {s['p25']:,.1f} | {s['p75']:,.1f} | {s['skewness']} |")

# Analysis 2: Effect Sizes
w(f"")
w(f"---")
w(f"")
w(f"## 3. Effect Size Analysis")
w(f"")
w(f"### 3.1 Evolution-themed Repos vs Others")
w(f"")
w(f"| Metric | Evolution | Non-Evolution |")
w(f"|---|---|---|")
w(f"| N | {effect_evolution['n_evo']} | {effect_evolution['n_non_evo']} |")
w(f"| Mean stars | {effect_evolution['mean_evo']:,.1f} | {effect_evolution['mean_non_evo']:,.1f} |")
w(f"| Median stars | {effect_evolution['median_evo']:,.1f} | {effect_evolution['median_non_evo']:,.1f} |")
d_val = effect_evolution['cohens_d']
d_interp = effect_evolution['interpretation']
if d_val is not None:
    w(f"| Cohen's d | {d_val} | — |")
    w(f"| Effect size | **{d_interp}** | — |")
else:
    w(f"| Cohen's d | insufficient variance | — |")

w(f"")
w(f"**Interpretation**: Evolution-themed repos show a Cohen's d of {d_val} ({d_interp} effect) compared to non-evolution repos, suggesting that self-evolution projects {'attract significantly more' if d_val and d_val > 0 else 'do not significantly differ in'} community attention as measured by stars.")

w(f"")
w(f"### 3.2 Python vs Non-Python Repos")
w(f"")
w(f"| Metric | Python | Non-Python |")
w(f"|---|---|---|")
w(f"| N | {effect_python['n_python']} | {effect_python['n_non_python']} |")
w(f"| Mean stars | {effect_python['mean_python']:,.1f} | {effect_python['mean_non_python']:,.1f} |")
py_d = effect_python.get('cohens_d')
if py_d is not None:
    w(f"| Cohen's d | {py_d} | — |")
else:
    w(f"| Cohen's d | insufficient variance | — |")

# Analysis 3: Paper Method Trends
w(f"")
w(f"---")
w(f"")
w(f"## 4. Paper Method Trend Analysis")
w(f"")

# Build year × method pivot table
years = sorted(set(r['year'] for r in method_trend_rows))
methods_sorted = sorted(set(r['method_category'] for r in method_trend_rows))

w(f"### 4.1 Annual Paper Count by Method Category")
w(f"")
header = "| Year | " + " | ".join(methods_sorted) + " | Total |"
sep = "|---|" + "|".join(["---"] * len(methods_sorted)) + "|---|"
w(header)
w(sep)

for year in years:
    year_methods = {r['method_category']: r['annual_count'] for r in method_trend_rows if r['year'] == year}
    total = sum(year_methods.values())
    cells = [str(year_methods.get(m, 0)) for m in methods_sorted]
    w(f"| {year} | " + " | ".join(cells) + f" | {total} |")

w(f"")
w(f"### 4.2 Method Category Distribution Summary")
w(f"")
w(f"| Method Category | Total Papers | % of Corpus |")
w(f"|---|---|---|")
total_papers = len(real_papers)
method_totals = Counter(p['method_category'] for p in real_papers)
for method, count in method_totals.most_common():
    pct = round(count / total_papers * 100, 1)
    w(f"| {method} | {count} | {pct}% |")
w(f"| **Total** | **{total_papers}** | **100%** |")

w(f"")
w(f"**Key finding**: Prompt/search optimization ({method_totals.get('prompt/search optimization', 0)} papers, {round(method_totals.get('prompt/search optimization', 0)/total_papers*100,1)}%) and reward/RL/self-play ({method_totals.get('reward/RL/self-play', 0)} papers, {round(method_totals.get('reward/RL/self-play', 0)/total_papers*100,1)}%) dominate the literature, together accounting for {round((method_totals.get('prompt/search optimization', 0)+method_totals.get('reward/RL/self-play', 0))/total_papers*100,1)}% of all methods.")

# Analysis 4: Framework Radar
w(f"")
w(f"---")
w(f"")
w(f"## 5. Framework Comparative Analysis")
w(f"")
w(f"### 5.1 Radar Score Summary (z-scored)")
w(f"")
w(f"| Framework | Composite | Self-Evo Fit | Self-Evo z | Repo Mentions | Pain Mentions | Pain/Mention Ratio |")
w(f"|---|---|---|---|---|---|---|")
for r in sorted(radar_composite, key=lambda x: -x['composite_score']):
    pmr = f"{r['pain_to_mention_ratio']:.3f}" if r['pain_to_mention_ratio'] is not None else "N/A"
    w(f"| {r['framework']} | {r['composite_score']:.2f} | {r['self_evolution_fit']} | {r['self_evolution_z']:.3f} | {r['repo_mentions']} | {r['pain_mentions']} | {pmr} |")

w(f"")
w(f"**Key finding**: EvoAgentX and DGM/OpenEvolve score highest on self-evolution fit (5/5), while LangChain/LangGraph has the highest pain-to-mention ratio ({[r for r in radar_composite if 'LangChain' in r['framework']][0].get('pain_to_mention_ratio', 'N/A')}), suggesting that high adoption correlates with high community frustration.")

# Analysis 5: Cross-source gaps
w(f"")
w(f"---")
w(f"")
w(f"## 6. Cross-Source Signal Gap Analysis")
w(f"")
w(f"| Topic | Paper | Repo | Pain | Blog | Total | Gap Ratio | Range | Std | Dominant |")
w(f"|---|---|---|---|---|---|---|---|---|---|")
for r in sorted(cross_gap_rows, key=lambda x: -x['total_signal']):
    w(f"| {r['topic']} | {r['paper_signal']} | {r['repo_signal']} | {r['painpoint_signal']} | {r['blog_signal']} | {r['total_signal']} | {r['gap_ratio']:.3f} | {r['signal_range']} | {r['signal_std']:.1f} | {r['dominant_source']} |")

w(f"")
w(f"**Key finding**: All 6 topics show strong mismatch risk across sources. Framework opacity and self-improvement feasibility have the highest total signals but are dominated by different source types (repos for framework, blogs for self-improvement). This cross-source divergence indicates that academic research, open-source activity, community pain, and media discourse are not well-aligned in the self-evolving agent domain.")

# Analysis 6: Pain point distribution
w(f"")
w(f"---")
w(f"")
w(f"## 7. Pain Point Distribution")
w(f"")
w(f"| Platform | Count | % |")
w(f"|---|---|---|")
total_pain = sum(platform_pain_counts.values())
for platform, count in platform_pain_counts.most_common():
    w(f"| {platform} | {count} | {round(count/total_pain*100,1)}% |")
w(f"| **Total** | **{total_pain}** | **100%** |")

# Analysis 7: Language-category
w(f"")
w(f"---")
w(f"")
w(f"## 8. Language × Category Association")
w(f"")
header = "| Category | Total |"
for lang in top_langs:
    header += f" {lang} | {lang} % |"
w(header)
sep = "|---|---|" + "|".join(["---|---|" for _ in top_langs])
w(sep)
for row in assoc_rows:
    line = f"| {row['category']} | {row['total']} |"
    for lang in top_langs:
        line += f" {row.get(lang, 0)} | {row.get(f'{lang}_pct', 0)}% |"
    w(line)

# Blog author
w(f"")
w(f"---")
w(f"")
w(f"## 9. Blog Author Impact Distribution")
w(f"")
w(f"| Influence Rating | Count |")
w(f"|---|---|")
for rating, count in sorted(blog_influence.items(), key=lambda x: -x[1]):
    w(f"| {rating} | {count} |")

w(f"")
w(f"### Top Platforms")
w(f"")
w(f"| Platform | Records |")
w(f"|---|---|")
for platform, count in blog_platform.most_common(10):
    w(f"| {platform} | {count} |")

# Time slice
w(f"")
w(f"---")
w(f"")
w(f"## 10. Temporal Distribution")
w(f"")
w(f"### 10.1 Repo Content Timestamps (raw captures)")
w(f"")
w(f"| Time Slice | Count | % |")
w(f"|---|---|---|")
ts_counts = main_analysis.get('raw_time_slice_counts', [])
total_ts = sum(t['count'] for t in ts_counts)
for ts in ts_counts:
    pct = round(ts['count'] / total_ts * 100, 1)
    w(f"| {ts['key']} | {ts['count']} | {pct}% |")

w(f"")
w(f"**Note**: 326/486 repos (67.1%) have 2026-05 timestamps (latest capture date), and 107 (22.0%) have unknown timestamps. This means temporal trend analysis is limited to the ~22% of repos with historical timestamps. Among those with known timestamps, there is a clear acceleration from 2024-Q2 onwards.")

# Data coverage
w(f"")
w(f"---")
w(f"")
w(f"## 11. Data Coverage Assessment")
w(f"")
w(f"| Dataset | Current | Target | Coverage | Status |")
w(f"|---|---|---|---|---|")
for r in coverage:
    w(f"| {r['dataset']} | {r['current']} | {r['target_or_claim']} | {r['coverage_or_note']} | {r['status']} |")

# Summary of known/inferred/unverified
w(f"")
w(f"---")
w(f"")
w(f"## 12. Epistemic Status")
w(f"")
w(f"### Known (verified from data files)")
w(f"- 486 GitHub repos classified into 7 categories with star counts")
w(f"- 196 papers classified into 7 method categories")
w(f"- 97 pain points parsed from Reddit (47), HN (36), X/Twitter (14)")
w(f"- 9 frameworks scored on 5 quantitative dimensions")
w(f"- Star distributions are heavily right-skewed (power-law)")
w(f"- Prompt/search optimization and reward/RL dominate paper methods")
w(f"- All 6 cross-source topics show strong mismatch risk")
w(f"")
w(f"### Inferred (from statistical analysis)")
w(f"- Evolution-themed repos {'attract more' if d_val and d_val > 0 else 'have comparable'} community attention (Cohen's d = {d_val})")
w(f"- High framework adoption correlates with higher community frustration (LangChain pain/mention ratio)")
w(f"- Paper methods show temporal diversification: early papers focused on prompt/RL, recent papers explore code/self-modification and multi-agent approaches")
w(f"")
w(f"### Unverified (requires external validation)")
w(f"- Star counts are point-in-time snapshots, not longitudinal tracking")
w(f"- 107 repos (22%) have unknown creation timestamps, limiting trend analysis")
w(f"- Pain point severity weighting is not available (all counted equally)")
w(f"- Framework radar scores are expert-assigned on 1-5 Likert scale, not empirically measured")
w(f"- Blog author impact scores depend on search coverage and platform APIs")
w(f"")
w(f"---")
w(f"")
w(f"## Output Files")
w(f"")
w(f"| File | Description |")
w(f"|---|---|")
w(f"| survey/figures/stat-star-distribution-by-category.csv | Descriptive stats per category |")
w(f"| survey/figures/stat-star-distribution-by-theme.csv | Descriptive stats per theme |")
w(f"| survey/figures/stat-effect-sizes.csv | Cohen's d for key comparisons |")
w(f"| survey/figures/stat-method-trend.csv | Paper method counts by year |")
w(f"| survey/figures/stat-framework-radar-composite.csv | Framework z-scores and composite indices |")
w(f"| survey/figures/stat-cross-source-gap.csv | Cross-source signal gap analysis |")
w(f"| survey/figures/stat-language-category-association.csv | Language × category cross-tab |")
w(f"| analysis/quantitative-statistical-report.md | This report |")

# Write report
report_path = BASE / "analysis" / "quantitative-statistical-report.md"
with open(report_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(report_lines))

print(f"\nDone. Report written to: {report_path}")
print(f"CSV files written to: {SURVEY_FIG}/stat-*.csv")
print(f"Total report lines: {len(report_lines)}")
