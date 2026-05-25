# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T01:38:44+08:00

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.
- **work.learning-notes** (work, updated): Record blockers, evidence quality, and working principle for the next agent.
- **results.public-site** (results, updated): Expose the metadata delta to the SEO/project site instead of leaving it internal.
- **results.public-visualizations** (results, updated): Make the raw-to-public evidence flow visible on the website and paper status page.

## Edges

- intent.direct-user-input --undefined--> raw.github.hourly-captures
- raw.github.hourly-captures --undefined--> processed.github-classification
- processed.github-classification --undefined--> results.public-site
- processed.github-classification --undefined--> work.learning-notes
- work.learning-notes --undefined--> intent.direct-user-input
- processed.github-classification --undefined--> results.public-visualizations

## Current Run Evidence

- Web-observed repos this run: microsoft/waza, wazionapps/nexo, razroo/state-trace; no clone, benchmark, or authenticated GitHub API freshness was claimed.
- New raw files: raw-github/microsoft_waza.md, raw-github/wazionapps_nexo.md, raw-github/razroo_state-trace.md.
- New public model cards and site reports: projects/site reports 217-219 for Waza, NEXO Brain and state-trace.
- Generated target counts after this scripted update: raw=501, classified=501, site projects=92, strict evolution=79, broad evolution=180, theme heat memory=102/evaluation=91/evolution=79/skill=62.
- GitHub API blocker: curl api.github.com failed DNS resolution and gh auth status reported an invalid token for Shiyao-Huang.
- GitNexus evidence: status is stale at indexed commit 85247b7 before this iteration; analyze is degraded because global HOME registry writes are blocked and temp-HOME LadybugDB FTS extension download cannot connect.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> project report -> site data -> README/i18n/site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
