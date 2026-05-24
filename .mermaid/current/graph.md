# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T01:06:44+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, and resource-index roles.
- **work.learning-notes** (work, updated): Record blockers, evidence quality, and working principle for the next agent.
- **results.public-site** (results, updated): Expose the metadata delta to the SEO/project site instead of leaving it internal.
- **results.public-visualizations** (results, updated): Make the raw-to-public evidence flow visible on the website and paper status page.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-notes
- work.learning-notes --handoff--> intent.direct-user-input
- processed.github-classification --visualizes--> results.public-visualizations

## Current Run Evidence

- Web-observed repos: a-evo-lab/a-evolve, aiming-lab/AutoResearchClaw, memtensor/memos, cxcscmu/SkillLearnBench, ynulihao/AgentSkillOS, microsoft/STATE-Bench
- New raw captures: raw-github/aiming-lab_autoresearchclaw.md, raw-github/cxcscmu_skilllearnbench.md, raw-github/ynulihao_agentskillos.md, raw-github/microsoft_state-bench.md
- Promoted existing raw evidence: raw-github/a-evo-lab_a-evolve.md, raw-github/memtensor_memos.md
- Shell GitHub API remains DNS-blocked; gh token remains invalid.
- GitNexus indexed 9,477 nodes, 9,732 edges, 30 clusters, and 13 flows; FTS remains degraded because the LadybugDB extension download could not connect.
- Validation passed: indexes, raw timestamp enforcement, GitHub analysis, visual asset generation, site build (210 pages), and paper build (213 pages).
