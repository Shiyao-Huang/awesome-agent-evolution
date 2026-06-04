# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-04T21:38:16+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for benchmark, harness, and memory anchors.
- **results.public-site** (results, updated): Push the metadata refresh into site project data and public reports.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: pinchbench/skill, howdymary/hermes-agent-metaharness, AutoJunjie/awesome-agent-harness, mem0ai/memory-benchmarks, neo4j-labs/agent-memory.
- Refreshed raw files: raw-github/pinchbench_skill.md, raw-github/howdymary_hermes-agent-metaharness.md, raw-github/autojunjie_awesome-agent-harness.md, raw-github/mem0ai_memory-benchmarks.md, raw-github/neo4j-labs_agent-memory.md.
- Refreshed public reports: site/public/reports/projects/51-pinchbench-skill.md, site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md, site/public/reports/projects/265-awesome-agent-harness-autojunjie-curation.md, site/public/reports/projects/87-mem0-memory-benchmarks.md, site/public/reports/projects/130-neo4j-agent-memory.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI can describe the metadata flow only after explicit `--repo awesome-evolution-workspace-cleanup`; the current index remains stale against HEAD.
