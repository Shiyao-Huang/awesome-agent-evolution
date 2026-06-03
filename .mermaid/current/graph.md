# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-03T07:52:50+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for harness, benchmark, skill, memory, and self-evolution repos.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: howdymary/hermes-agent-metaharness, Arc-Computer/CL-Bench, microsoft/SkillOpt, sachinsharma9780/memweave, longmans/self-evolve.
- Refreshed raw files: raw-github/howdymary_hermes-agent-metaharness.md, raw-github/arc-computer_cl-bench.md, raw-github/microsoft_skillopt.md, raw-github/sachinsharma9780_memweave.md, raw-github/longmans_self-evolve.md.
- Refreshed public reports: site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md, site/public/reports/projects/392-arc-continual-learning-benchmark.md, site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md, site/public/reports/projects/288-memweave-markdown-agent-memory.md, site/public/reports/projects/355-self-evolve-openclaw-playground.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available, but `npx gitnexus status` reported the local index is stale before this iteration commit.
