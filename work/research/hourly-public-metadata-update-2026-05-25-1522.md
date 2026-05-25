# Hourly Public Metadata Update - 2026-05-25 15:22 +0800

## One Sentence

Added four web-observed memory/evals/research-index repositories while keeping API freshness caveats explicit.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop. This iteration adds Agent Replay, Awesome Agent Memory Papers, Memvid, and Awesome Agent Memory to raw captures, classification, model-card reports, site data and graph views. GitHub API metadata is not fabricated; accessible public page/search evidence is marked web-observed until shell DNS/auth allows API verification.

## Added Repositories

- agentreplay/agentreplay: Local Agent Evals and Memory Observability; raw=raw-github/agentreplay_agentreplay.md; report=projects/196-agentreplay-local-agent-observability-memory.md.
- yyyujintang/Awesome-Agent-Memory-Papers: Agent Memory Paper and Benchmark Index; raw=raw-github/yyyujintang_awesome-agent-memory-papers.md; report=projects/197-awesome-agent-memory-papers.md.
- memvid/memvid: Single-File Agent Memory Layer; raw=raw-github/memvid_memvid.md; report=projects/198-memvid-single-file-agent-memory.md.
- tfatykhov/awesome-agent-memory: Agent Memory Research Index; raw=raw-github/tfatykhov_awesome-agent-memory.md; report=projects/199-tfatykhov-awesome-agent-memory.md.

## Working Principle

Browser/search-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/` + `site/public/reports/projects/` -> `site/src/data/projects.ts` -> README/i18n/site build.

## Evidence Quality

- Shell GitHub API and `gh auth status` must be checked during validation; if blocked, this run remains web-observed rather than API-verified.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source: `.mermaid/current/graph.json`.
