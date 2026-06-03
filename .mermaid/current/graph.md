# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-03T13:55:19+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for code-repair, optimization, self-rewarding, and graph-runtime repos.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: sola-st/repairagent, zhang677/accelopt, hwfengcs/dm-code-agent, rucbm/laser, arthurmgraf/graphmind.
- Refreshed raw files: raw-github/sola-st_repairagent.md, raw-github/zhang677_accelopt.md, raw-github/hwfengcs_dm-code-agent.md, raw-github/rucbm_laser.md, raw-github/arthurmgraf_graphmind.md.
- Refreshed public reports: site/public/reports/projects/393-repairagent-java-autonomous-bug-repair.md, site/public/reports/projects/394-accelopt-self-improving-kernel-optimizer.md, site/public/reports/projects/395-dm-code-agent-auditable-code-baseline.md, site/public/reports/projects/396-laser-last-token-self-rewarding-rl.md, site/public/reports/projects/397-graphmind-knowledge-agent-rag-runtime.md.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available, but impact resolution for generator helper symbols remained blocked in this run.
