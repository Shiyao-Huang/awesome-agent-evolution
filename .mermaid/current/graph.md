# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-05T22:00:00+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **raw.github.topic-indexing-evidence** (raw, retained): Preserve the repository topic-indexing evidence so topic-page lag is not misread as missing metadata.
- **processed.github-classification** (processed, updated): Refresh classification rows and teaching cards for the new coding-agent swarm harness and healthcare memory benchmark.
- **results.public-site** (results, updated): Push the metadata refresh into site project data, public reports, README/i18n surfaces, and index-facing entry points.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- raw.github.topic-indexing-evidence --clarifies-discovery--> results.public-site
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- New web-observed repos: `ComposioHQ/agent-orchestrator`, `AQ-MedAI/MedMemoryBench`.
- New raw files: `raw-github/composiohq_agent-orchestrator.md`, `raw-github/aq-medai_medmemorybench.md`.
- New project cards: `projects/406-composio-agent-orchestrator-coding-swarm.md`, `projects/407-medmemorybench-agent-memory-benchmark.md`.
- New public reports: `site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md`, `site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md`.
- `gh search ...` failed against `api.github.com` in this workspace, so freshness for new captures is web-observed rather than API-verified.
- GitNexus was stale at session start and must be refreshed before final validation.
