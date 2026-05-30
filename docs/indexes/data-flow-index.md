# Data Flow Index

> Generated: 2026-05-31

## L1

原始素材只进 `raw-*`，加工分析进 `analysis/research/projects/paper-reviews`，论文和网站工作进 `paper-drafts/site/scripts`，最终发布进 `reports/output/site/public/reports/main.pdf`。

## L2

1. Raw is evidence: keep source shape, timestamp, URL, and collection metadata.
2. Processed is interpretation: add classification, cross-analysis, model-card style teaching notes, and paper review structure.
3. Work is buildable: paper, site, scripts, figures, and validation commands must be runnable.
4. Results are publishable: public reports, static site assets, generated PDF, and delivery summaries.

## Pipeline

| Stage | Canonical Paths | Required Evidence | Refresh Command |
|---|---|---|---|
| Raw collection | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` | URL, timestamp, source file | `python3 scripts/enforce_raw_timestamps.py` |
| GitHub analysis | `analysis/github-project-data-analysis.*` | raw record id, repo URL, timestamp/fallback note | `node scripts/analyze_github_project_data.mjs` |
| Project deep analysis | `projects/`, `research/projects/`, `site/public/reports/projects/` | model-card sections, source links | manual review + `npm run build` in `site/` |
| Paper writing | `paper-drafts/`, `analysis/*.tex`, `paper/sections/` | citation key, source table, limitation note | `cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex` |
| Website/SEO | `site/src/`, `site/public/reports/`, `site/dist/` | route, title, description, sitemap | `cd site && npm run build` |
| Public delivery | `reports/`, `output/`, `paper-drafts/main.pdf`, `docs/indexes/` | source path, generated date, validation command | `node scripts/generate_project_indexes.mjs` |

## Migration Rule

Root-level historical markdown files should not accumulate. Raw compatibility files move under `raw-*`, processed compatibility files move under `analysis/` or `reports/`, paper working files move under `paper-drafts/`, and new long-form management material goes under `docs/`.
