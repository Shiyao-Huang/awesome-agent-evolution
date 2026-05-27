# Hourly Public Metadata Update - 2026-05-28 04:00 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `langchain-ai/deepagents`, `coleam00/Archon`, `RyanAlberts/best-of-Agent-Harnesses`, `microsoft/SkillOpt`, `Tencent/TencentDB-Agent-Memory`, `QuantaAlpha/GitTaskBench` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `langchain-ai/deepagents` | Batteries-included Agent Harness Runtime | `raw-github/langchain-ai_deepagents.md` | `site/public/reports/projects/269-deepagents-batteries-included-harness.md` |
| `coleam00/Archon` | Deterministic AI Coding Harness Builder | `raw-github/coleam00_archon.md` | `site/public/reports/projects/270-archon-ai-coding-harness-builder.md` |
| `RyanAlberts/best-of-Agent-Harnesses` | Ranked Agent Harness Landscape Index | `raw-github/ryanalberts_best-of-agent-harnesses.md` | `site/public/reports/projects/271-best-of-agent-harnesses-ranked-index.md` |
| `microsoft/SkillOpt` | Self-Evolving Agent Skill Optimizer | `raw-github/microsoft_skillopt.md` | `site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md` |
| `Tencent/TencentDB-Agent-Memory` | Local Long-Term Agent Memory Substrate | `raw-github/tencent_tencentdb-agent-memory.md` | `site/public/reports/projects/273-tencentdb-agent-memory-local-memory-substrate.md` |
| `QuantaAlpha/GitTaskBench` | Repo-Level Code Agent Benchmark Harness | `raw-github/quantaalpha_gittaskbench.md` | `site/public/reports/projects/274-gittaskbench-repo-level-code-agent-benchmark.md` |

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
