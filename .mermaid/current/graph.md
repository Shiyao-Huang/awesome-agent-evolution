# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-04T15:36:30+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use direct user inputs as the only goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Refresh raw GitHub captures before downstream analysis.
- **processed.github-classification** (processed, updated): Update classification rows and project cards for skills, memory, harness, benchmark, and swarm runtime surfaces.
- **results.public-site** (results, updated): Push the refresh into README/i18n, site data, and public project reports.
- **work.learning-note** (work, updated): Record blockers, data flow, and current repo packet evidence.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: voltagent/awesome-agent-skills, vectorize-io/agent-memory-benchmark, benchflow-ai/skillsbench, evalops/agent-harness, browser-use/browser-harness, swarmclawai/swarmclaw.
- Refreshed raw files: raw-github/voltagent_awesome-agent-skills.md, raw-github/vectorize-io_agent-memory-benchmark.md, raw-github/benchflow-ai_skillsbench.md, raw-github/evalops_agent-harness.md, raw-github/browser-use_browser-harness.md, raw-github/swarmclawai_swarmclaw.md.
- Refreshed public reports: site/public/reports/projects/403-voltagent-awesome-agent-skills-resource-index.md, site/public/reports/projects/77-agent-memory-benchmark.md, site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md, site/public/reports/projects/259-evalops-agent-harness-provider-adapter.md, site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md, site/public/reports/projects/93-swarmclaw-agent-runtime.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- `uid4oe/insight-swarm` could not be refreshed through the current web path and stays on prior local evidence for now.
- GitNexus CLI is available but stale against the current root commit until a re-analysis pass is completed.
