# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-01T01:50:26+08:00

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

- Web-observed repos: longmans/self-evolve, MCKRUZ/openclaw-langfuse, hyperspell/hyperspell-openclaw, composio-community/awesome-openclaw-plugins, mvanhorn/last30days-skill, EESIZ/clawdreamer, ThisIsJeron/awesome-openclaw-plugins, BlockRunAI/awesome-OpenClaw-Money-Maker.
- New raw files: raw-github/longmans_self-evolve.md, raw-github/mckruz_openclaw-langfuse.md, raw-github/hyperspell_hyperspell-openclaw.md, raw-github/composio-community_awesome-openclaw-plugins.md, raw-github/mvanhorn_last30days-skill.md, raw-github/eesiz_clawdreamer.md, raw-github/thisisjeron_awesome-openclaw-plugins.md, raw-github/blockrunai_awesome-openclaw-money-maker.md.
- New public model cards and site reports: project/report ids 355, 356, 357, 358, 359, 360, 361, 362.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus status/list worked but analyze failed due LadybugDB lock (`.gitnexus/lbug`) and blocked FTS extension download in fallback HOME mode.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
