# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-04T16:00:00+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for memory, harness, evolution, and benchmark anchors.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: agentmemoryworld/awesome-agent-memory, letta-ai/learning-sdk, yennning/awesome-code-as-agent-harness-papers, clawland-ai/geneclaw, openclaw/clawbench.
- Refreshed raw files: raw-github/agentmemoryworld_awesome-agent-memory.md, raw-github/letta-ai_agentic-learning-sdk.md, raw-github/yennning_awesome-code-as-agent-harness-papers.md, raw-github/clawland-ai_geneclaw.md, raw-github/openclaw_clawbench.md.
- Refreshed public reports: site/public/reports/projects/398-agentmemoryworld-awesome-agent-memory-resource-index.md, site/public/reports/projects/399-letta-learning-sdk-continual-memory-sdk.md, site/public/reports/projects/400-yennning-code-as-agent-harness-papers.md, site/public/reports/projects/401-geneclaw-safe-self-evolving-agent-framework.md, site/public/reports/projects/402-openclaw-clawbench-full-stack-agent-benchmark.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available but stale against the current root commit, so it was not used as freshness evidence in this run.
