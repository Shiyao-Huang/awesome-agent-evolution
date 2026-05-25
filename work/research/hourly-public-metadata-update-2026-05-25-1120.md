# Hourly Public Metadata Update - 2026-05-25 11:20 +0800

## One Sentence

Added five browser-observed public GitHub signals to the raw -> processed -> site/report pipeline while explicitly marking that shell GitHub API freshness was blocked.

## Three-Sentence Compression

The direct user goal for this run is to keep raw evidence, processed analysis, work notes, and public site outputs synchronized for AI agent self-evolution research. Local shell access could not resolve api.github.com and the stored gh token is invalid, so GitHub API metadata is not claimed fresh. Browser-observed GitHub evidence was used for Honcho, Hindsight, Agentic Context Engine, TrustGraph, and HaluMem, then reflected through classification, project model cards, public reports, site project data, indexes, and Mermaid graph views.

## Added Repositories

- plastic-labs/honcho: Agent Memory Infrastructure; raw=raw-github/plastic-labs_honcho.md; report=projects/173-honcho-stateful-agent-memory.md; evidence=web GitHub page observed 527 commits, AGPL-3.0 license, Python/TypeScript stack, 4.2k stars and 488 forks; README describes memory infrastructure for stateful agents, peer/session/message primitives, MCP/OpenCode/OpenClaw/Hermes integrations and self-hosted FastAPI deployment
- vectorize-io/hindsight: Learning Agent Memory System; raw=raw-github/vectorize-io_hindsight.md; report=projects/174-hindsight-agent-memory-that-learns.md; evidence=web GitHub page observed 1,408 commits, MIT license, Python/TypeScript/Rust stack, 14.4k stars and 821 forks, v0.6.2 latest on 2026-05-14; README describes retain/recall/reflect, memory banks, semantic/keyword/graph/temporal retrieval, LongMemEval claims and coding-agent documentation skill support
- kayba-ai/agentic-context-engine: Agent Experience Learning Loop; raw=raw-github/kayba-ai_agentic-context-engine.md; report=projects/175-agentic-context-engine-experience-learning.md; evidence=web GitHub page observed 931 commits, 2.2k stars and 273 forks, v0.12.0 latest on 2026-05-07; README says ACE makes agents learn from experience, uses trace reflection, SkillManager and Skillbook updates, supports Claude Code/browser-use/LangChain runners, and reports Tau2 and Claude Code translation benchmark signals
- trustgraph-ai/trustgraph: Context Graph Agent Runtime; raw=raw-github/trustgraph-ai_trustgraph.md; report=projects/176-trustgraph-context-graph-agent-runtime.md; evidence=web GitHub page observed 1,379 commits, Apache-2.0 license, Python stack, 2.1k stars and 242 forks; README positions TrustGraph as an agent runtime platform powered by context graphs with memory, retrieval, orchestration and inference for grounded private deployments
- MemTensor/HaluMem: Agent Memory Hallucination Benchmark; raw=raw-github/memtensor_halumem.md; report=projects/177-halumem-agent-memory-hallucination-benchmark.md; evidence=web GitHub page observed 19 commits, Python stack, 138 stars and 14 forks; README describes HaluMem as a comprehensive operation-level hallucination benchmark for memory systems, evaluating extraction, updating and QA across Mem0, Memobase, MemOS, Supermemory and Zep

## Blockers

- Shell GitHub API: `curl -I -L --max-time 12 https://api.github.com/rate_limit` failed with `Could not resolve host: api.github.com`.
- GitHub CLI: `gh auth status` reports the token for `Shiyao-Huang` is invalid.
- GitNexus: local command is available and stale before validation; re-analysis is required after file updates.

## Working Principle

raw GitHub capture -> repo-classification row -> raw timestamp index -> GitHub data analysis -> project model card -> site/public report -> site project page -> Mermaid graph learning note.

## Final Validation

- GitNexus: default HOME blocked by EPERM on /Users/copizzah/.gitnexus/registry.json; HOME=/private/tmp/gitnexus-home analyze succeeded with 10,484 nodes, 11,245 edges, 31 clusters, 15 flows. FTS degraded because the LadybugDB extension could not download.
- Indexes: node scripts/generate_project_indexes.mjs passed; master index now reports 468 raw GitHub captures, 468 classified repositories, 186 model-card reports, 79 strict evolution repos and 174 broad evolution repos.
- Raw timestamps: python3 scripts/enforce_raw_timestamps.py passed with raw-github md=468, md_ok=468, missing_count=0.
- GitHub analysis: node scripts/analyze_github_project_data.mjs passed with raw=468, classified=468, analyzed_projects=186.
- Site: (cd site && npm run build) passed with 267 pages and existing Astro z deprecation hints.
- Paper: (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex) passed; main.pdf remains 213 pages with existing font/overfull/underfull warnings.
