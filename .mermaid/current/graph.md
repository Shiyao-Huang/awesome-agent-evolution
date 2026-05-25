# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T23:35:00+08:00

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

- Web-observed repos: cxxz/awesome-agent-memory, zhangfengcdt/memoir, DEEP-PolyU/Awesome-GraphMemory, Kenotic-Labs/ATANT, open-gitagent/gitagent, google-gemini/gemini-cli.
- New raw files: raw-github/cxxz_awesome-agent-memory.md, raw-github/zhangfengcdt_memoir.md, raw-github/deep-polyu_awesome-graphmemory.md, raw-github/kenotic-labs_atant.md, raw-github/open-gitagent_gitagent.md, raw-github/google-gemini_gemini-cli.md.
- New public model cards and site reports: projects/site reports 209-214 for cxxz Awesome Agent Memory, Memoir, Awesome GraphMemory, ATANT, Gitagent, and Gemini CLI Auto Memory.
- Shell GitHub API freshness is blocked by DNS; local `gh` token is invalid.
- GitNexus status was stale before this iteration; `npx gitnexus analyze` is required after updates.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
