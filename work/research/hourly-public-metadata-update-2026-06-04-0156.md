# Hourly Public Metadata Update - 2026-06-04 01:56 +0800

## One Sentence

Refreshed five public metadata anchors across skills, harness, benchmark, browser runtime, and memory index layers, while keeping freshness honest about cached-search evidence and blocked live GitHub API access.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results hourly public metadata loop for Self Evolve / awesome-agent-evolution. This iteration refreshed `anthropics/skills`, `ai-boost/awesome-harness-engineering`, `benchflow-ai/skillsbench`, `browser-use/browser-harness`, and `cxxz/awesome-agent-memory` across raw captures, classification, model cards, public reports, README/i18n packet, Mermaid truth source, and site-facing project data where applicable. Shell GitHub API access was still blocked by DNS and local `gh` auth remained invalid, so the run used cached GitHub search results observed on 2026-06-04 and explicitly preserved the crawl-recency boundary.

## Added Or Refreshed Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `anthropics/skills` | official skill standard and example pack | `raw-github/anthropics_skills.md` | `site/public/reports/projects/64-anthropic-skills.md` |
| `ai-boost/awesome-harness-engineering` | harness-engineering taxonomy and resource index | `raw-github/ai-boost_awesome-harness-engineering.md` | `site/public/reports/projects/57-awesome-harness-engineering.md` |
| `benchflow-ai/skillsbench` | skill benchmark harness | `raw-github/benchflow-ai_skillsbench.md` | `site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md` |
| `browser-use/browser-harness` | browser runtime + self-healing harness | `raw-github/browser-use_browser-harness.md` | `site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md` |
| `cxxz/awesome-agent-memory` | memory knowledge index | `raw-github/cxxz_awesome-agent-memory.md` | `site/public/reports/projects/209-cxxz-awesome-agent-memory.md` |

## Working Principle

Cached public GitHub result observed in this run -> `raw-github/*.md` refresh -> `research/repo-classification.*` row updates -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, paper-facing corpus snapshot, and site build.

## Evidence Quality

- `gh auth status` still showed the default GitHub token as invalid.
- `curl -I --max-time 10 https://api.github.com/rate_limit` still failed with DNS resolution error in this workspace.
- Web search results for GitHub pages were reachable, but some returned only crawl recency such as `last week` or `5 days ago`; those boundaries are preserved in raw captures and reports.
- `npx gitnexus status` worked and reported the local root-repo index is stale against commit `d46319e`.
- `.mermaid/current/graph.json` remains the truth source; `.md` and `.mmd` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
