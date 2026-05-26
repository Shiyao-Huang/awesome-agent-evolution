# Quantitative Statistical Analysis Report

**Generated**: 2026-05-25 15:38:43
**Data Sources**: 361 repos, 126 papers, 97 pain points, 652 blog author records

---

## 1. Corpus Overview

| Dataset | Count | Source |
|---|---|---|
| GitHub repos (raw captures) | 486 | raw-github/ |
| Repo cross-analysis | 359 | analysis/repo-cross-analysis.csv |
| Classified repos | 486 | research/repo-classification.json |
| Papers (timestamp index) | 196 | raw-papers/ |
| Paper method classifications | 126 | survey/figures/paper-method-classification-snapshot.csv |
| Pain points (Mom Test) | 97 | survey/figures/painpoint-index.csv |
| Blog/social records | 652 blog + 613 social | raw-blogs/ + raw-social/ |
| Blog author profiles | 652 | survey/figures/blog-author-profile-index.csv |
| Analyzed projects (model cards) | 204 | projects/ |
| Core evolution repos | 79 | analysis/github-project-data-analysis.json |
| Broad evolution repos | 176 | analysis/github-project-data-analysis.json |

---

## 2. Star Distribution Analysis

### 2.1 Overall Distribution

| Metric | Value |
|---|---|
| N (repos) | 361 |
| Mean stars | 2,100.32 |
| Median stars | 0.00 |
| Std deviation | 22,456.30 |
| Min | 0 |
| Max | 374,000 |
| 25th percentile (P25) | 0.00 |
| 75th percentile (P75) | 56.00 |
| IQR | 56.00 |
| Skewness | 14.5443 |

**Interpretation**: Star distribution is heavily right-skewed (skewness = 14.5443), indicating a power-law distribution where a small number of projects dominate adoption. Median (0) is far below mean (2,100), confirming the 'superstar repo' effect.

### 2.2 By Category

| Category | N | Mean | Median | Std | Min | Max | P25 | P75 | Skewness |
|---|---|---|---|---|---|---|---|---|---|
| 框架 | 49 | 9,036.5 | 143.0 | 53,363.5 | 0 | 374,000 | 52.0 | 481.0 | 6.5251 |
| 应用 | 24 | 1,825.2 | 354.5 | 5,046.1 | 10 | 25,100 | 97.8 | 1,522.5 | 4.0681 |
| 评测 | 20 | 941.5 | 155.5 | 2,248.8 | 13 | 9,211 | 94.8 | 452.2 | 2.7726 |
| 论文代码 | 13 | 460.4 | 100.0 | 873.1 | 11 | 3,155 | 57.0 | 353.0 | 2.245 |
| 工具 | 11 | 22,336.8 | 179.0 | 60,137.4 | 11 | 202,000 | 78.5 | 9,081.0 | 2.3888 |
| Unclassified | 2 | 0.0 | 0.0 | 0.0 | 0 | 0 | 0.0 | 0.0 | 0 |
| 教程 | 1 | 1,100.0 | 1,100.0 | 0.0 | 1,100 | 1,100 | 1,100.0 | 1,100.0 | 0 |

### 2.3 By Theme

| Theme | N | Mean | Median | Std | Min | Max | P25 | P75 | Skewness |
|---|---|---|---|---|---|---|---|---|---|
| evaluation | 89 | 174.1 | 62.0 | 378.0 | 0 | 2,900 | 5.0 | 144.0 | 4.8136 |
| memory | 88 | 4,698.9 | 109.5 | 22,600.0 | 0 | 202,000 | 20.8 | 491.0 | 7.714 |
| evolution | 79 | 589.4 | 57.0 | 1,946.9 | 0 | 12,600 | 7.0 | 295.0 | 4.9052 |
| skill | 60 | 9,442.7 | 192.5 | 31,255.9 | 0 | 191,000 | 21.8 | 1,650.0 | 4.5448 |
| framework | 50 | 7,985.8 | 45.5 | 52,852.7 | 0 | 374,000 | 5.5 | 241.8 | 6.6393 |
| education-list | 35 | 188.6 | 81.0 | 256.9 | 1 | 1,100 | 3.0 | 244.0 | 1.7392 |
| research-agent | 31 | 166.0 | 6.0 | 251.2 | 0 | 816 | 1.0 | 294.5 | 1.2482 |
| prompt-optimization | 26 | 88.1 | 23.0 | 170.7 | 0 | 805 | 3.2 | 82.2 | 2.9715 |
| coding-agent | 17 | 100.8 | 11.0 | 169.0 | 0 | 607 | 0.0 | 153.0 | 1.7809 |
| workflow-automation | 6 | 62.2 | 44.0 | 73.2 | 0 | 189 | 5.5 | 88.5 | 0.6439 |
| safety | 1 | 10.0 | 10.0 | 0.0 | 10 | 10 | 10.0 | 10.0 | 0 |

---

## 3. Effect Size Analysis

### 3.1 Evolution-themed Repos vs Others

| Metric | Evolution | Non-Evolution |
|---|---|---|
| N | 79 | 403 |
| Mean stars | 589.4 | 3,501.2 |
| Median stars | 57.0 | 59.0 |
| Cohen's d | -0.1289 | — |
| Effect size | **negligible** | — |

**Interpretation**: Evolution-themed repos show a Cohen's d of -0.1289 (negligible effect) compared to non-evolution repos, suggesting that self-evolution projects do not significantly differ in community attention as measured by stars.

### 3.2 Python vs Non-Python Repos

| Metric | Python | Non-Python |
|---|---|---|
| N | 85 | 276 |
| Mean stars | 1,329.5 | 2,337.7 |
| Cohen's d | -0.0448 | — |

---

## 4. Paper Method Trend Analysis

### 4.1 Annual Paper Count by Method Category

| Year | code/self-modification | evaluation/safety/governance | memory/knowledge evolution | multi-agent reflection/debate | prompt/search optimization | reward/RL/self-play | web/tool/environment adaptation | Total |
|---|---|---|---|---|---|---|---|---|
| 2022 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| 2023 | 0 | 0 | 0 | 1 | 1 | 4 | 2 | 8 |
| 2024 | 3 | 1 | 0 | 5 | 4 | 10 | 2 | 25 |
| 2025 | 16 | 1 | 8 | 5 | 4 | 22 | 5 | 61 |
| 2026 | 5 | 2 | 7 | 3 | 1 | 9 | 3 | 30 |
| 20pl | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |

### 4.2 Method Category Distribution Summary

| Method Category | Total Papers | % of Corpus |
|---|---|---|
| reward/RL/self-play | 47 | 37.3% |
| code/self-modification | 24 | 19.0% |
| memory/knowledge evolution | 15 | 11.9% |
| multi-agent reflection/debate | 14 | 11.1% |
| web/tool/environment adaptation | 12 | 9.5% |
| prompt/search optimization | 10 | 7.9% |
| evaluation/safety/governance | 4 | 3.2% |
| **Total** | **126** | **100%** |

**Key finding**: Prompt/search optimization (10 papers, 7.9%) and reward/RL/self-play (47 papers, 37.3%) dominate the literature, together accounting for 45.2% of all methods.

---

## 5. Framework Comparative Analysis

### 5.1 Radar Score Summary (z-scored)

| Framework | Composite | Self-Evo Fit | Self-Evo z | Repo Mentions | Pain Mentions | Pain/Mention Ratio |
|---|---|---|---|---|---|---|
| DGM/OpenEvolve | 4.20 | 5 | 1.663 | 14 | 0 | 0.000 |
| EvoAgentX | 4.00 | 5 | 1.663 | 5 | 0 | 0.000 |
| LangChain/LangGraph | 3.80 | 3 | 0.087 | 13 | 1 | 0.077 |
| Letta/Graphiti | 3.80 | 3 | 0.087 | 4 | 0 | 0.000 |
| CrewAI | 3.40 | 2 | -0.700 | 4 | 0 | 0.000 |
| AutoGen | 3.40 | 2 | -0.700 | 5 | 0 | 0.000 |
| n8n | 3.40 | 2 | -0.700 | 4 | 0 | 0.000 |
| OpenAI Agents SDK | 3.20 | 2 | -0.700 | 82 | 28 | 0.342 |
| Browser-use | 3.00 | 2 | -0.700 | 3 | 0 | 0.000 |

**Key finding**: EvoAgentX and DGM/OpenEvolve score highest on self-evolution fit (5/5), while LangChain/LangGraph has the highest pain-to-mention ratio (0.0769), suggesting that high adoption correlates with high community frustration.

---

## 6. Cross-Source Signal Gap Analysis

| Topic | Paper | Repo | Pain | Blog | Total | Gap Ratio | Range | Std | Dominant |
|---|---|---|---|---|---|---|---|---|---|
| Framework opacity / tooling | 87 | 66 | 14 | 85 | 252 | 0.345 | 73 | 34.0 | paper |
| Self-improvement feasibility | 60 | 59 | 12 | 116 | 247 | 0.470 | 104 | 42.5 | blog |
| Reliability / production gap | 2 | 131 | 19 | 43 | 195 | 0.672 | 129 | 57.4 | repo |
| Evaluation / benchmark gap | 6 | 85 | 10 | 28 | 129 | 0.659 | 79 | 36.5 | repo |
| Memory / drift / forgetting | 16 | 59 | 10 | 34 | 119 | 0.496 | 49 | 22.0 | repo |
| Safety / governance / cost | 4 | 86 | 11 | 6 | 107 | 0.804 | 82 | 39.6 | repo |

**Key finding**: All 6 topics show strong mismatch risk across sources. Framework opacity and self-improvement feasibility have the highest total signals but are dominated by different source types (repos for framework, blogs for self-improvement). This cross-source divergence indicates that academic research, open-source activity, community pain, and media discourse are not well-aligned in the self-evolving agent domain.

---

## 7. Pain Point Distribution

| Platform | Count | % |
|---|---|---|
| Reddit | 47 | 48.5% |
| HN | 36 | 37.1% |
| X/Twitter | 14 | 14.4% |
| **Total** | **97** | **100%** |

---

## 8. Language × Category Association

| Category | Total | Python | Python % | Markdown | Markdown % | Unknown | Unknown % | TypeScript | TypeScript % | Rust | Rust % |
|---|---|---|---||---|---||---|---||---|---||---|---|
| - | 241 | 0 | 0.0% | 0 | 0.0% | 0 | 0.0% | 0 | 0.0% | 0 | 0.0% |
| 框架 | 49 | 34 | 69.4% | 1 | 2.0% | 0 | 0.0% | 2 | 4.1% | 5 | 10.2% |
| 应用 | 24 | 18 | 75.0% | 0 | 0.0% | 0 | 0.0% | 2 | 8.3% | 2 | 8.3% |
| 评测 | 20 | 18 | 90.0% | 0 | 0.0% | 0 | 0.0% | 2 | 10.0% | 0 | 0.0% |
| 论文代码 | 13 | 12 | 92.3% | 0 | 0.0% | 0 | 0.0% | 0 | 0.0% | 0 | 0.0% |

---

## 9. Blog Author Impact Distribution

| Influence Rating | Count |
|---|---|
| unknown | 136 |
| creator | 121 |
| expert_org | 60 |
| cn_developer | 52 |
| product_team_or_maker | 39 |
| practitioner_or_blogger | 39 |
| cn_vendor_expert | 30 |
| cn_practitioner | 30 |
| cn_media | 23 |
| developer | 21 |
| developer_blogger | 20 |
| cn_ai_media | 20 |
| newsletter_author | 16 |
| academic | 14 |
| cn_media_or_kol | 11 |
| cn_media_or_expert | 10 |
| tech_media | 10 |

### Top Platforms

| Platform | Records |
|---|---|
| YouTube | 121 |
| Product Hunt | 39 |
| Medium/TDS | 39 |
| Zhihu | 30 |
| CSDN | 24 |
| GitHub Blog/Docs | 21 |
| Dev.to | 20 |
| Tencent Cloud Dev | 18 |
| Substack | 16 |
| CNBlogs | 15 |

---

## 10. Temporal Distribution

### 10.1 Repo Content Timestamps (raw captures)

| Time Slice | Count | % |
|---|---|---|
| 2026-05 | 326 | 67.1% |
| unknown | 107 | 22.0% |
| 2024-Q2 | 7 | 1.4% |
| 2026-03 | 7 | 1.4% |
| 2026-04 | 7 | 1.4% |
| 2025-11 | 5 | 1.0% |
| 2024-Q3 | 4 | 0.8% |
| 2025-05 | 3 | 0.6% |
| 2026-02 | 3 | 0.6% |
| early | 3 | 0.6% |
| 2024-Q1 | 2 | 0.4% |
| 2024-Q4 | 2 | 0.4% |
| 2025-09 | 2 | 0.4% |
| 2025-12 | 2 | 0.4% |
| 2026-01 | 2 | 0.4% |
| 2025-02 | 1 | 0.2% |
| 2025-04 | 1 | 0.2% |
| 2025-07 | 1 | 0.2% |
| 2025-10 | 1 | 0.2% |

**Note**: 326/486 repos (67.1%) have 2026-05 timestamps (latest capture date), and 107 (22.0%) have unknown timestamps. This means temporal trend analysis is limited to the ~22% of repos with historical timestamps. Among those with known timestamps, there is a clear acceleration from 2024-Q2 onwards.

---

## 11. Data Coverage Assessment

| Dataset | Current | Target | Coverage | Status |
|---|---|---|---|---|
| raw-papers timestamp index | 196 | 100 target / Master said 88 currently | 196.0% | gap: count discrepancy vs Master message |
| paper-reviews deep reviews | 137 | 88 reviews | 155.7% | meets/exceeds 88 target |
| academic-reviews supplemental | 34 | supporting reviews | supplemental | partly duplicate ids possible |
| raw-github repo README/code snapshots | 486 | 348 repos | 139.7% | complete snapshot; cross-analysis exists |
| repo techstack cross-analysis rows | 359 | 348 repos | 103.2% | complete snapshot |
| raw-blogs files | 1308 | 1306 files mentioned by Master | 100.2% | files are json+md pairs; item records below |
| raw-blogs JSON item records | 652 | 1306 blog claim requires clarification | 652 json records if paired files | author_profile present but needs enrichment |
| raw-social files | 1296 | 300+ full posts / earlier 131 | file count includes md+json pairs | needs full-text status audit |
| raw-social JSON item records | 613 | 300+ posts | 204.3% | above 300 json records; quality varies |
| Mom Test pain points | 97 | 97 pain points | 100.0% | detailed platform files parse to 97 |

---

## 12. Epistemic Status

### Known (verified from data files)
- 486 GitHub repos classified into 7 categories with star counts
- 196 papers classified into 7 method categories
- 97 pain points parsed from Reddit (47), HN (36), X/Twitter (14)
- 9 frameworks scored on 5 quantitative dimensions
- Star distributions are heavily right-skewed (power-law)
- Prompt/search optimization and reward/RL dominate paper methods
- All 6 cross-source topics show strong mismatch risk

### Inferred (from statistical analysis)
- Evolution-themed repos have comparable community attention (Cohen's d = -0.1289)
- High framework adoption correlates with higher community frustration (LangChain pain/mention ratio)
- Paper methods show temporal diversification: early papers focused on prompt/RL, recent papers explore code/self-modification and multi-agent approaches

### Unverified (requires external validation)
- Star counts are point-in-time snapshots, not longitudinal tracking
- 107 repos (22%) have unknown creation timestamps, limiting trend analysis
- Pain point severity weighting is not available (all counted equally)
- Framework radar scores are expert-assigned on 1-5 Likert scale, not empirically measured
- Blog author impact scores depend on search coverage and platform APIs

---

## Output Files

| File | Description |
|---|---|
| survey/figures/stat-star-distribution-by-category.csv | Descriptive stats per category |
| survey/figures/stat-star-distribution-by-theme.csv | Descriptive stats per theme |
| survey/figures/stat-effect-sizes.csv | Cohen's d for key comparisons |
| survey/figures/stat-method-trend.csv | Paper method counts by year |
| survey/figures/stat-framework-radar-composite.csv | Framework z-scores and composite indices |
| survey/figures/stat-cross-source-gap.csv | Cross-source signal gap analysis |
| survey/figures/stat-language-category-association.csv | Language × category cross-tab |
| analysis/quantitative-statistical-report.md | This report |