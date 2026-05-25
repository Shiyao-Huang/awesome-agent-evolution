# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T04:41:30+08:00

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

- Web-observed repositories this run: MaximeRobeyns/self_improving_coding_agent, agent0ai/agent-zero, elizaOS/eliza, paradigmxyz/centaur, and TransformerOptimus/SuperAGI.
- New raw files: raw-github/maximerobeyns_self_improving_coding_agent.md, raw-github/agent0ai_agent-zero.md, raw-github/elizaos_eliza.md, raw-github/paradigmxyz_centaur.md, raw-github/transformeroptimus_superagi.md.
- New public model cards/site reports: project/report ids 224-227 for SICA, Agent Zero, elizaOS, and Centaur; SuperAGI was a raw/classification backfill for an existing site project.
- GitNexus evidence: npx gitnexus status reported repository indexed at current commit 2f939fd before this iteration edits.
- GitHub API freshness caveat: shell API freshness is not claimed; web-observed public pages/search results were used and repository analysis preserves API/cache source labels where available.
- Follow-up blocker: chenyn66/learning-to-self-evolve was not confirmed as a GitHub repository URL in this run, so no raw capture was fabricated.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> site data/report -> README/i18n/site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
