# Hourly Public Metadata Update - 2026-05-26 10:04 +0800

## One Sentence

Added three web-observed harness-oriented repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `sd0xdev/sd0x-dev-flow`, `inngest/utah`, and `SuperagenticAI/metaharness` as harness/process/benchmark evidence across skill orchestration, runtime workflow automation, and benchmark-driven harness evolution. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `sd0xdev/sd0x-dev-flow` | Claude Code Harness Safety Runtime | `raw-github/sd0xdev_sd0x-dev-flow.md` | `site/public/reports/projects/242-sd0x-dev-flow-claude-code-harness-safety-gates.md` |
| `inngest/utah` | Event-Driven Agent Harness Runtime | `raw-github/inngest_utah.md` | `site/public/reports/projects/243-utah-event-driven-agent-harness.md` |
| `SuperagenticAI/metaharness` | Benchmark-Driven Harness Evolution Toolkit | `raw-github/superagenticai_metaharness.md` | `site/public/reports/projects/244-metaharness-benchmark-driven-harness-evolution.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
