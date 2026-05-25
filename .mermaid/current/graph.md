# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T15:22:43+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.
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

- Web-observed repos: agentreplay/agentreplay, yyyujintang/Awesome-Agent-Memory-Papers, memvid/memvid, tfatykhov/awesome-agent-memory.
- New raw files: raw-github/agentreplay_agentreplay.md, raw-github/yyyujintang_awesome-agent-memory-papers.md, raw-github/memvid_memvid.md, raw-github/tfatykhov_awesome-agent-memory.md.
- New public model cards and site reports: projects/site reports 196-199 for Agent Replay, Awesome Agent Memory Papers, Memvid, and Awesome Agent Memory.
- Shell GitHub API freshness is checked separately; current metadata is not API-verified.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
