# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-27T22:00:12+08:00

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

- Web-observed repos: mindfold-ai/Trellis, Picrew/awesome-agent-harness, AutoJunjie/awesome-agent-harness, shareAI-lab/learn-claude-code, murataslan1/ai-agent-benchmark, holaboss-ai/holaOS.
- New raw files: raw-github/mindfold-ai_trellis.md, raw-github/picrew_awesome-agent-harness.md, raw-github/autojunjie_awesome-agent-harness.md, raw-github/shareai-lab_learn-claude-code.md, raw-github/murataslan1_ai-agent-benchmark.md, raw-github/holaboss-ai_holaos.md.
- New public model cards and site reports: project/report ids 263, 264, 265, 266, 267, 268.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus status is available but stale before this iteration commit; a post-commit refresh may be needed for symbol-level freshness.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
