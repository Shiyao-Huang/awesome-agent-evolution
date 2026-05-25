# Self Evolve / Awesome Evolution

[English](README.md) | [中文](README-ZH.md)

![Self Evolve public research pipeline](site/public/visuals/self-evolve-readme-banner.png)

Self Evolve is a research map of AI agent self-evolution: projects, papers, benchmarks, memory systems, skill systems, harnesses, and code-improvement loops, organized into evidence-backed reports readers can actually use.

## What You Can Read Here

This repository is meant to answer the questions a serious reader has after hearing "self-evolving agents":

- Which projects are real systems, and which are only demos or concept signals?
- Which directions are growing: memory, skills, harnesses, benchmarks, reflection, code evolution, or multi-agent workflows?
- Which projects are worth studying first if I want to build, benchmark, invest in, or research self-improving agents?
- What evidence backs each claim?

## Current Results

| Result | Current value | Why it matters |
|---|---:|---|
| Raw GitHub captures | 463 | Broad discovery layer for agent evolution, skills, memory, harness, benchmark, and adjacent repositories |
| Classified GitHub repositories | 463 | Every captured repo is normalized into category, theme, stack, timestamp, and evidence fields |
| Deep project / model-card reports | 181 | Reports explain role, mechanism, evidence path, limits, and use cases instead of just listing links |
| Strict evolution-related repositories | 78 | Core projects directly about evolution, self-improvement, recursive refinement, or optimization loops |
| Broad evolution-related repositories | 173 | Wider ecosystem: memory, skill systems, evaluation, harness engineering, coding agents, and agent OS work |
| Paper PDF | 213 pages | Buildable survey draft grounded in structured project and paper evidence |
| Public site build | 262 pages | Static reader-facing pages for projects, research notes, graph views, reports, and paper status |

## Main Trend Signals

1. **The field is moving from prompts to agent state.** Memory systems, skill libraries, and harness configuration are becoming the mutable objects that agents improve over time.
2. **"Self-evolution" is often an evaluation problem in disguise.** The strongest systems do not merely mutate prompts; they define tasks, collect failures, gate regressions, and compare versions.
3. **Skills are becoming portable infrastructure.** Claude/Codex/OpenCode-style skill folders are turning local know-how into reusable agent capabilities.
4. **Memory is splitting into product memory and research memory.** Some repos optimize user-facing long-term context; others test retrieval, contradiction handling, state assertions, and benchmark performance.
5. **Many popular projects are not equally usable.** The model cards separate product-shaped tools, research prototypes, benchmark harnesses, resource indexes, and conceptual signals.

## Best Starting Points

| Read this | Use it for |
|---|---|
| [GitHub Project Data Analysis](analysis/github-project-data-analysis.md) | Corpus funnel, category counts, evolution subsets, timeline analysis |
| [Project Model Cards](projects/INDEX.md) | Deep project reports and public model-card coverage |
| [Public project reports](site/public/reports/projects/) | Reader-facing report copies used by the site |
| [Paper draft](paper-drafts/main.pdf) | Long-form survey argument and appendices |
| [Public knowledge site](https://shiyao-huang.github.io/awesome-evolution/) | Browse project pages, research notes, graph pages, and report pages |
| [Visual assets](site/public/visuals/) | Corpus funnel, theme distribution, group map, and evidence-flow visuals |

## Research Questions

The repository is organized around four practical questions:

1. What public projects, papers, benchmarks, and skill/memory systems actually belong to AI agent self-evolution?
2. Which repositories are raw discoveries, which have been analyzed, and which are strong enough for deep model-card treatment?
3. Which systems are usable products, research prototypes, benchmark harnesses, infrastructure layers, or conceptual signals?
4. How does the field evolve over time across memory, skills, harnesses, reflection loops, code improvement, and benchmark-driven agent iteration?

## Evidence Pipeline

The reports are built from a traceable chain: `raw evidence -> classification -> cross-analysis -> model cards -> paper/site outputs`. Raw captures preserve source text and timestamps. Processed analysis turns captures into categories, timelines, trend counts, and project roles. Model cards translate that structure into teaching material: what the project does, how it works, what evidence supports it, and where its limits are.

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

## Required Validation

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

## Public Knowledge Site

- GitHub repository: <https://github.com/Shiyao-Huang/awesome-evolution>
- GitHub Pages site: <https://shiyao-huang.github.io/awesome-evolution/>
- Public release boundary: publish original docs, normalized metadata, model cards, paper drafts, generated reports, and the site; keep raw capture dumps and local repository mirrors out of the default public commit until source terms are reviewed.

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
