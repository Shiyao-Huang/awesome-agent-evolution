# Hourly Public Metadata Update - 2026-05-29 04:05 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `Alienfader/continuity-benchmarks`, `sachinsharma9780/memweave`, `qpiai/Proced_mem_bench`, `Modelcode-ai/mcode-benchmark`, `sourcegraph/CodeScaleBench`, `mlcommons/modelbench` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `Alienfader/continuity-benchmarks` | Execution-Intent Memory Benchmark Harness | `raw-github/alienfader_continuity-benchmarks.md` | `site/public/reports/projects/287-continuity-benchmarks-execution-intent-memory.md` |
| `sachinsharma9780/memweave` | Persistent Agent Memory Substrate | `raw-github/sachinsharma9780_memweave.md` | `site/public/reports/projects/288-memweave-markdown-agent-memory.md` |
| `qpiai/Proced_mem_bench` | Procedural Memory Retrieval Benchmark | `raw-github/qpiai_proced_mem_bench.md` | `site/public/reports/projects/289-proced-mem-benchmark-procedural-retrieval.md` |
| `Modelcode-ai/mcode-benchmark` | Repository-Scale Agent Translation Benchmark | `raw-github/modelcode-ai_mcode-benchmark.md` | `site/public/reports/projects/290-repomod-bench-repo-translation-eval.md` |
| `sourcegraph/CodeScaleBench` | Enterprise-Scale Coding Agent Benchmark Harness | `raw-github/sourcegraph_codescalebench.md` | `site/public/reports/projects/291-codescalebench-enterprise-agent-benchmark.md` |
| `mlcommons/modelbench` | Model Safety Benchmark and Reporting Framework | `raw-github/mlcommons_modelbench.md` | `site/public/reports/projects/292-mlcommons-modelbench-safety-eval.md` |

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
