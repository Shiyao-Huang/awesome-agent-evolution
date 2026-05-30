# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-31T01:21:52+08:00

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

- Web-observed repos: EvoMap/evolver, NousResearch/hermes-agent-self-evolution, knowall-ai/mcp-neo4j-agent-memory, LearnPrompt/cc-harness-skills, aiming-lab/ClawArena, kodustech/awesome-agent-skills.
- New raw files: raw-github/evomap_evolver.md, raw-github/nousresearch_hermes-agent-self-evolution.md, raw-github/knowall-ai_mcp-neo4j-agent-memory.md, raw-github/learnprompt_cc-harness-skills.md, raw-github/aiming-lab_clawarena.md, raw-github/kodustech_awesome-agent-skills.md.
- New public model cards and site reports: project/report ids 336, 337, 338, 339, 340, 341.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus status is available but stale before this iteration commit; a post-commit refresh may be needed for symbol-level freshness.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
