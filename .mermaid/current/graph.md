# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T02:39:02+08:00

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

- Web-observed repos: NirDiamant/Agent_Memory_Techniques, shareAI-lab/kbench, paradigmxyz/evmbench.
- New raw files: raw-github/nirdiamant_agent_memory_techniques.md, raw-github/shareai-lab_kbench.md, raw-github/paradigmxyz_evmbench.md.
- New public model cards and site reports: project/report ids 220, 221, 222.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus analyze attempted an incremental refresh and failed at the HOME registry write with EPERM; a follow-up status check reported the committed head up-to-date.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
