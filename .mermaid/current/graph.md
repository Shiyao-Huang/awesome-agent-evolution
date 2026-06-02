# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-02T19:52:08+08:00

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

- Web-observed repos: pinchbench/skill, vectorize-io/agent-memory-benchmark, EvoMap/awesome-agent-evolution.
- Refreshed raw captures: raw-github/pinchbench_skill.md, raw-github/vectorize-io_agent-memory-benchmark.md, raw-github/evomap_awesome-agent-evolution.md.
- Repaired public model cards and site reports: projects/51-pinchbench-skill.md, projects/77-agent-memory-benchmark.md, projects/394-evomap-awesome-agent-evolution.md and mirrored public reports.
- Shell GitHub API freshness is still blocked by DNS; local `gh` token remains invalid.
- GitNexus status worked and reported the local index is up to date at commit `73a3e96`.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
