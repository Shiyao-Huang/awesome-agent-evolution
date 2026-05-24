# Self Evolve / Awesome Evolution

[English](README.md) | [中文](README-ZH.md)

Self Evolve is a public research engineering repository for AI agent self-evolution, agent improvement, code self-improvement, and evolutionary workflows. It maintains one traceable delivery chain: raw evidence, processed analysis, paper drafts, an SEO-ready website, model-card project reports, and publishable outputs.

## Core Thesis

One sentence: this repository is governed as a `raw -> processed -> work -> results` pipeline, and every important artifact should be indexed, traceable, buildable, and publishable.

Three sentences: `raw-*` folders preserve original collection evidence. `analysis/`, `research/`, `projects/`, and `paper-reviews/` contain processed classification, cross-analysis, model cards, and paper reviews. `paper-drafts/`, `site/`, `scripts/`, and `survey/` are working artifacts, while `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf`, and `site/dist/` are publishable results.

Five sentences: this is not only an awesome list; it is a material corpus, paper project, website, and teaching-oriented model-card system. GitHub repositories are tracked through raw collection, classification, evolution-related subsets, and timeline analysis. Each deep project entry should help readers understand whether the project is usable, research-only, benchmark-oriented, infrastructure-like, or product-shaped. The paper should cite structured data instead of unsupported impressions. New agents should start from this README, [README-ZH.md](README-ZH.md), [AGENTS.md](AGENTS.md), [CONTENT_INDEX.md](CONTENT_INDEX.md), and [docs/indexes/master-index.md](docs/indexes/master-index.md).

## Repository Layers

| Layer | Canonical paths | Purpose | Avoid |
|---|---|---|---|
| Raw evidence | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` | URLs, timestamps, captured text, original public evidence | Subjective analysis, paper prose, second-hand summaries |
| Processed analysis | `analysis/`, `research/`, `projects/`, `paper-reviews/`, `papers/`, `cc-materials/` | Classification, cross-analysis, project model cards, paper reviews | Raw dumps without provenance |
| Work artifacts | `paper-drafts/`, `paper/`, `latex/`, `site/`, `survey/`, `scripts/`, `data-engine/` | Paper drafts, site source, generators, charts, intermediate working material | Final-only delivery notes or untraceable evidence |
| Results | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf`, `site/dist/` | Publishable reports, PDFs, static site output, downloadable resources | The only source of truth |
| Mirrors | `repos/`, `projects/repos/`, `*__/` | External repository clones and read-only verification mirrors | Project governance files |
| Ops | `docs/`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md`, `CONTENT_INDEX.md` | Rules, indexes, release checks, collaboration manuals | Large raw datasets |

Older README material and legacy delivery indexes are preserved under [docs/legacy/](docs/legacy/). The root README is now the public control surface.

## Current Corpus Metrics

| Metric | Current value | Entry |
|---|---:|---|
| GitHub raw captures | 416 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| Classified GitHub repositories | 416 | [analysis/github-project-data-analysis.json](analysis/github-project-data-analysis.json) |
| Deep project / model-card reports | 129 | [projects/INDEX.md](projects/INDEX.md) |
| Strict evolution-related repositories | 71 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| Broad evolution-related repositories | 166 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| Paper PDF | 213 pages | [paper-drafts/main.pdf](paper-drafts/main.pdf) |
| Astro site | 210 pages build | [site/](site/) |

## Required Validation

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

## Main Entrypoints

- Full content index: [CONTENT_INDEX.md](CONTENT_INDEX.md)
- Chinese README: [README-ZH.md](README-ZH.md)
- Direct user input reference: [docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)
- Non-canonical cleanup policy: [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md)
- Generated master index: [docs/indexes/master-index.md](docs/indexes/master-index.md)
- Data-flow index: [docs/indexes/data-flow-index.md](docs/indexes/data-flow-index.md)
- Project structure: [docs/project-management/project-structure.md](docs/project-management/project-structure.md)
- Operating model: [docs/project-management/operating-model.md](docs/project-management/operating-model.md)
- Publishing readiness: [docs/publishing-readiness-check.md](docs/publishing-readiness-check.md)
- Agent manual: [AGENTS.md](AGENTS.md)
- Claude manual: [CLAUDE.md](CLAUDE.md)
- Cloud/deployment manual: [CLOUD.md](CLOUD.md)
