# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-05T11:00:00+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh or add classification rows and model cards for swarm, skill, benchmark, browser harness, and memory anchors.
- **results.public-site** (results, updated): Push the metadata refresh into site project data and public reports.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: kyegomez/swarms, microsoft/SkillOpt, benchflow-ai/skillsbench, browser-use/browser-harness, redis/agent-memory-server, openai/swarm.
- Raw files touched: raw-github/kyegomez_swarms.md, raw-github/microsoft_skillopt.md, raw-github/benchflow-ai_skillsbench.md, raw-github/browser-use_browser-harness.md, raw-github/redis_agent-memory-server.md, raw-github/openai_swarm.md.
- Public reports touched: site/public/reports/projects/371-swarms-enterprise-multi-agent-runtime.md, site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md, site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md, site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md, site/public/reports/projects/281-redis-agent-memory-server-runtime.md, site/public/reports/projects/311-openai-swarm-multi-agent-orchestration.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI can describe the metadata flow, but command surface diverges from repo docs and the local index remains stale against HEAD.
