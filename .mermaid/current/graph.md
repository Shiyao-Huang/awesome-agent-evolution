# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-05T15:43:00+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh or add classification rows and model cards for production swarms, SDK-based orchestrators, continual skill-memory paper code, and lightweight memory-skill runtimes.
- **results.public-site** (results, updated): Push the metadata refresh into site project data, public reports, and reader-facing entry surfaces.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: desplega-ai/agent-swarm, VRSEN/agency-swarm, XSkill-Agent/XSkill, wanxingai/LightAgent.
- Raw files touched: raw-github/desplega-ai_agent-swarm.md, raw-github/vrsen_agency-swarm.md, raw-github/xskill-agent_xskill.md, raw-github/wanxingai_lightagent.md.
- Public reports touched: site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md, site/public/reports/projects/27-agency-swarm.md, site/public/reports/projects/404-xskill-continual-experience-skill-learning.md, site/public/reports/projects/139-lightagent-memory-mcp-skills.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI can describe the metadata flow, but command surface diverges from repo docs and the local index remains stale against HEAD.
