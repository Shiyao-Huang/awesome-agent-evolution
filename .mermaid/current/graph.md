# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T14:23:21+08:00

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

- Web-observed repos: DSAIL-Memory/EvoMemBench, Signet-AI/signetai, MemPalace/mempalace, jcartu/rasputin-memory; arXiv 2605.18421 used for EvoMemBench paper/code linkage.
- New raw files: raw-github/dsail-memory_evomembench.md, raw-github/signet-ai_signetai.md, raw-github/mempalace_mempalace.md, raw-github/jcartu_rasputin-memory.md.
- New public model cards and site reports: projects/site reports 192-195 for EvoMemBench, Signet AI, MemPalace, and RASPUTIN Memory.
- Shell GitHub API remains DNS-blocked: curl api.github.com failed with Could not resolve host; gh auth status reports invalid token for Shiyao-Huang.
- GitNexus local binary 1.6.5 is available; fresh temp HOME analyze succeeded with 10,878 nodes, 12,530 edges, 31 clusters, 15 flows; FTS degraded because LadybugDB extension download could not connect.
- Post-analysis counts before final build: raw=486, classified=486, analyzed_projects=204, strict_evolution=79, broad_evolution=176, memory_theme=92, public_reports=229 expected after generated indexes.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
