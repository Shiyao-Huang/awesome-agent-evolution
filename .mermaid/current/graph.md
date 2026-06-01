# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-01T20:27:31+08:00

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

- API-observed repos: opensquilla/opensquilla, GCWing/BitFun, oceanbase/powermem, mnemon-dev/mnemon, alibaizhanov/mengram, im4codes/imcodes, weaviate/query-agent-benchmarking.
- New raw files: raw-github/opensquilla_opensquilla.md, raw-github/gcwing_bitfun.md, raw-github/oceanbase_powermem.md, raw-github/mnemon-dev_mnemon.md, raw-github/alibaizhanov_mengram.md, raw-github/im4codes_imcodes.md, raw-github/weaviate_query-agent-benchmarking.md.
- New public model cards and site reports: project/report ids 377, 378, 379, 380, 381, 382, 383.
- Public GitHub API metadata was reachable; local `gh` token remains invalid for authenticated paths.
- GitNexus status is available but stale before this iteration commit; a post-commit refresh may be needed for symbol-level freshness.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
