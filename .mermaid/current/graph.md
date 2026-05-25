# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T05:44:07+08:00

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
- processed.github-classification --visualizes--> results.public-visualizations

## Current Run Evidence

- Web-observed repositories this run: YunjueTech/Yunjue-Agent, RangeKing/self-evolving-agent, gofenix/nex-agent, swapedoc/hermes2anti, and vilmire/adhdev.
- New raw files: raw-github/yunjuetech_yunjue-agent.md, raw-github/rangeking_self-evolving-agent.md, raw-github/gofenix_nex-agent.md, raw-github/swapedoc_hermes2anti.md, raw-github/vilmire_adhdev.md.
- New public model cards/site reports: project/report ids 228-232 for Yunjue Agent, RangeKing self-evolving-agent, NexAgent, hermes2anti, and ADHDev.
- Counts after propagation: 515 raw captures, 515 classified repositories, 105 site projects, 82 strict evolution-theme repositories, 185 broad evolution-related repositories, and 257 public project report files.
- GitNexus evidence: npx gitnexus status was available but stale before commit; refresh is scheduled after commit so it indexes the committed iteration.
- GitHub API freshness caveat: shell DNS for api.github.com failed; web-observed public pages were used and GitHub analysis preserves github_api_fetch_error for the five new promoted projects.
- Legacy generator caveat: scripts/generate_repo_classification.py only covers a 364-row legacy path; current classification truth is the restored/appended 515-row research/repo-classification.json.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> README/i18n -> site data/report -> Astro site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
