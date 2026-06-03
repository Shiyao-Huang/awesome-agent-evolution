# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-03T19:56:18+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and public-facing metadata for evolution, memory, skill, harness, and benchmark anchors.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: algorithmicsuperintelligence/openevolve, EverMind-AI/EverOS, microsoft/SkillOpt, RyanAlberts/best-of-Agent-Harnesses, pinchbench/skill.
- Refreshed raw files: raw-github/algorithmicsuperintelligence_openevolve.md, raw-github/evermind-ai_everos.md, raw-github/microsoft_skillopt.md, raw-github/ryanalberts_best-of-agent-harnesses.md, raw-github/pinchbench_skill.md.
- Refreshed public reports: site/public/reports/projects/algorithmicsuperintelligence__openevolve.md, site/public/reports/projects/79-everos-self-evolving-memory-os.md, site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md, site/public/reports/projects/271-best-of-agent-harnesses-ranked-index.md, site/public/reports/projects/51-pinchbench-skill.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available but stale against commit `e585ce2`, so this run used it only as degraded evidence and kept the current metadata proof chain web-backed.
