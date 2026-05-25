# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T03:41:36+08:00

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

- Web-observed repo this run: mgechev/skills-best-practices; no clone, skill install, benchmark, or authenticated GitHub API freshness was claimed.
- New raw file: raw-github/mgechev_skills-best-practices.md.
- New public model card and site report: project/report id 223 for Skills Best Practices.
- GitHub API blocker: curl api.github.com failed DNS resolution and gh auth status reported an invalid token for Shiyao-Huang.
- GitNexus evidence: status was up-to-date at indexed commit d98b10f before this iteration; analyze will be rerun after commit if available.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> project report -> site data -> README/i18n/site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
