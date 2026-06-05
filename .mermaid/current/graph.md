# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-05T22:00:00+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **raw.github.topic-indexing-evidence** (processed, verified): Preserve the repository topic-indexing audit so topic-page lag is not misread as missing metadata.
- **results.live-publication-readiness** (results, blocked): Track the separate custom-domain HTTPS blocker for Google-style strict crawling.
- **results.text-asset-indexability** (results, incomplete): Measure whether repository text assets have public Google-indexable routes or remain processed-but-unrouted.
- **processed.github-classification** (processed, updated): Refresh classification rows and teaching cards for the new coding-agent swarm harness and healthcare memory benchmark.
- **results.public-site** (results, updated): Push the metadata refresh into site project data, public reports, README/i18n surfaces, and index-facing entry points.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- raw.github.topic-indexing-evidence --clarifies-discovery--> results.public-site
- results.live-publication-readiness --blocks-google-crawl-readiness--> results.public-site
- results.text-asset-indexability --measures-text-coverage--> results.public-site
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- New web-observed repos: `ComposioHQ/agent-orchestrator`, `AQ-MedAI/MedMemoryBench`.
- New raw files: `raw-github/composiohq_agent-orchestrator.md`, `raw-github/aq-medai_medmemorybench.md`.
- New project cards: `projects/406-composio-agent-orchestrator-coding-swarm.md`, `projects/407-medmemorybench-agent-memory-benchmark.md`.
- New public reports: `site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md`, `site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md`.
- GitHub topic indexing audit passed: remote topics include `agent-evolution`, GitHub Search returns `Shiyao-Huang/awesome-agent-evolution`, and the rendered topic page includes the repository at zero-based rank `1`.
- Live publication readiness remains blocked for strict Google-style HTTPS crawling until GitHub Pages issues a certificate covering `agent-evolution.com`.
- Text asset coverage is now explicitly measured: route-level SEO can pass while processed analyses, project cards, paper reviews, drafts, and reports remain unpublished as public HTML assets.
