# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T00:36:53+08:00

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

- Web-observed repos this run: mgechev/skillgrade and webmaxru/Agent-Skills; no clone, benchmark, or authenticated GitHub API freshness was claimed.
- New raw files: raw-github/mgechev_skillgrade.md and raw-github/webmaxru_agent-skills.md.
- New public model cards and site reports: projects/site reports 215-216 for Skillgrade and Webmaxru Agent Skills.
- Generated counts after analysis: raw=498, classified=498, site projects=89, strict evolution=79, broad evolution=179, theme heat memory=100/evaluation=91/evolution=79/skill=61.
- GitHub API blocker: curl api.github.com failed DNS resolution and gh auth status reported an invalid token for Shiyao-Huang.
- GitNexus evidence: status reports up-to-date at commit 85247b7; analyze is degraded because global HOME registry writes are blocked and temp-HOME LadybugDB FTS extension download cannot connect.
- Validation passed: node --check, jq, generate_project_indexes, enforce_raw_timestamps, analyze_github_project_data, site build, and paper xelatex. Site and LaTeX retained pre-existing warnings.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> project report -> site data -> README/i18n/site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
