# Hourly Public Metadata Update - 2026-06-01 20:27 +0800

## One Sentence

Added 7 API-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `opensquilla/opensquilla`, `GCWing/BitFun`, `oceanbase/powermem`, `mnemon-dev/mnemon`, `alibaizhanov/mengram`, `im4codes/imcodes`, `weaviate/query-agent-benchmarking` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: repository metadata was captured through public GitHub API responses, while authenticated `gh` access remained invalid.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `opensquilla/opensquilla` | Token-Efficient Agent Runtime with OpenClaw/MCP/Memory Integration | `raw-github/opensquilla_opensquilla.md` | `site/public/reports/projects/377-opensquilla-token-efficient-agent-runtime.md` |
| `GCWing/BitFun` | Desktop Agent Runtime and Multi-Mode Execution Environment | `raw-github/gcwing_bitfun.md` | `site/public/reports/projects/378-bitfun-desktop-agent-runtime-suite.md` |
| `oceanbase/powermem` | Agent Memory Plugin and Retrieval Augmentation Layer | `raw-github/oceanbase_powermem.md` | `site/public/reports/projects/379-powermem-agent-memory-plugin.md` |
| `mnemon-dev/mnemon` | Persistent Memory Substrate for Cross-Session Agent Recall | `raw-github/mnemon-dev_mnemon.md` | `site/public/reports/projects/380-mnemon-persistent-memory-substrate.md` |
| `alibaizhanov/mengram` | Semantic/Episodic/Procedural Memory Runtime for Agents | `raw-github/alibaizhanov_mengram.md` | `site/public/reports/projects/381-mengram-human-like-agent-memory.md` |
| `im4codes/imcodes` | Shared Agent Context, Memory, and Supervised Execution Layer | `raw-github/im4codes_imcodes.md` | `site/public/reports/projects/382-imcodes-shared-agent-context-layer.md` |
| `weaviate/query-agent-benchmarking` | Agent Benchmark Toolkit for Query/Retrieval Evaluation | `raw-github/weaviate_query-agent-benchmarking.md` | `site/public/reports/projects/383-weaviate-query-agent-benchmarking-toolkit.md` |

## Working Principle

Public GitHub API metadata -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub API repository metadata was reachable and used for this iteration; no authenticated API token path was used.
- API boundary: unauthenticated GitHub API may hit hourly rate limits for deeper endpoints.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
