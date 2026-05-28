# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-28T22:03:48+08:00

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

- Web-observed repos: redis/agent-memory-server, langchain-ai/memory-agent, iflytek/skillhub, mindfold-ai/trellis, memodb-io/Acontext, nemori-ai/nemori.
- New raw files: raw-github/redis_agent-memory-server.md, raw-github/langchain-ai_memory-agent.md, raw-github/iflytek_skillhub.md, raw-github/mindfold-ai_trellis.md, raw-github/memodb-io_acontext.md, raw-github/nemori-ai_nemori.md.
- New public model cards and site reports: project/report ids 281, 282, 283, 284, 285, 286.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus status/list are available, but `npx gitnexus analyze .` failed with `EPERM` on `/Users/copizzah/.gitnexus/registry.json`; graph-relationship evidence remains stale for this run.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
