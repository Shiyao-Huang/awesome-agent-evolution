# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-27T16:00:06+08:00

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

- Web-observed repos: OpenBMB/ClawXMemory, UnicomAI/hexagent, evalops/agent-harness, harness/harness-evals, browser-use/browser-harness, junminhong/awesome-agent-skills.
- New raw files: raw-github/openbmb_clawxmemory.md, raw-github/unicomai_hexagent.md, raw-github/evalops_agent-harness.md, raw-github/harness_harness-evals.md, raw-github/browser-use_browser-harness.md, raw-github/junminhong_awesome-agent-skills.md.
- New public model cards and site reports: project/report ids 257, 258, 259, 260, 261, 262.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus default analyze remained blocked by `EPERM` on `/Users/copizzah/.gitnexus/registry.json`, but temporary-HOME analyze succeeded (21,212 nodes / 24,066 edges) with FTS extension download blocked.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
