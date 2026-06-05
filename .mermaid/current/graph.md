# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-05T19:00:31+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **raw.github.topic-indexing-evidence** (raw, updated): Preserve GitHub API/search/topic evidence for the repository's `agent-evolution` indexing state.
- **ops.github-linguist-signals** (ops, updated): Keep README topic status and GitHub Linguist language rules aligned with the public repository identity.
- **processed.github-classification** (processed, updated): Refresh or add classification rows and model cards for production swarms, SDK-based orchestrators, continual skill-memory paper code, and lightweight memory-skill runtimes.
- **results.public-site** (results, updated): Push the metadata refresh into site project data, public reports, and reader-facing entry surfaces.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- raw.github.topic-indexing-evidence --explains--> ops.github-linguist-signals
- ops.github-linguist-signals --improves-discovery--> results.public-site
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web/API-observed repos: Shiyao-Huang/awesome-agent-evolution, desplega-ai/agent-swarm, VRSEN/agency-swarm, XSkill-Agent/XSkill, wanxingai/LightAgent.
- Raw files touched: raw-github/shiyao-huang_awesome-agent-evolution.md, raw-github/desplega-ai_agent-swarm.md, raw-github/vrsen_agency-swarm.md, raw-github/xskill-agent_xskill.md, raw-github/wanxingai_lightagent.md.
- Public reports touched: site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md, site/public/reports/projects/27-agency-swarm.md, site/public/reports/projects/404-xskill-continual-experience-skill-learning.md, site/public/reports/projects/139-lightagent-memory-mcp-skills.md.
- GitHub API/search already returns `Shiyao-Huang/awesome-agent-evolution` for `topic:agent-evolution`; the rendered topic page still showed the older `EvoMap/awesome-agent-evolution` identity during this check.
- GitHub API reported primary language as TeX before `.gitattributes`; Linguist rules now keep paper/raw/generated assets from dominating language classification.
- GitNexus was stale at session start and was refreshed successfully before commit.
