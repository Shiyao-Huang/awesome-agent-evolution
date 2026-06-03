# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-04T01:56:13+08:00

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

- Refreshed repos: anthropics/skills, ai-boost/awesome-harness-engineering, benchflow-ai/skillsbench, browser-use/browser-harness, cxxz/awesome-agent-memory.
- Refreshed raw files: raw-github/anthropics_skills.md, raw-github/ai-boost_awesome-harness-engineering.md, raw-github/benchflow-ai_skillsbench.md, raw-github/browser-use_browser-harness.md, raw-github/cxxz_awesome-agent-memory.md.
- Refreshed public reports: site/public/reports/projects/64-anthropic-skills.md, site/public/reports/projects/57-awesome-harness-engineering.md, site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md, site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md, site/public/reports/projects/209-cxxz-awesome-agent-memory.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is based on cached public GitHub search results rather than live API responses.
- GitNexus CLI is available but stale against commit `d46319e`, so this run used it only as degraded evidence and kept the current metadata proof chain web-backed.
