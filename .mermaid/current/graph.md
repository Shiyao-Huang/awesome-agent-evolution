# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T13:21:00+08:00

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

- Web-observed repos: PaulRBerg/agent-skills, ComposioHQ/awesome-codex-skills, eigent-ai/agent-skills, MoizIbnYousaf/Ai-Agent-Skills, howells/arc, Gentleman-Programming/Gentleman-Skills, togethercomputer/skills
- New raw files: raw-github/paulrberg_agent-skills.md, raw-github/composiohq_awesome-codex-skills.md, raw-github/eigent-ai_agent-skills.md, raw-github/moizibnyousaf_ai-agent-skills.md, raw-github/howells_arc.md, raw-github/gentleman-programming_gentleman-skills.md, raw-github/togethercomputer_skills.md
- Shell GitHub API remains DNS-blocked: curl -I -L --max-time 12 https://api.github.com/rate_limit failed with Could not resolve host; gh auth status reports invalid token for Shiyao-Huang.
- GitNexus local binary 1.6.5 is available; fresh temp HOME analyze succeeded with 10,730 nodes, 11,678 edges, 31 clusters, 15 flows; FTS degraded because LadybugDB extension download could not connect.
- Validation passed: JSON checks, project indexes, raw timestamp enforcement, GitHub project analysis, visual asset generation, site build, and paper build. Direct tsc probe hit TS5107 deprecation, but Astro check/build passed.
- Final counts: raw=482, classified=482, analyzed_projects=200, strict_evolution=79, broad_evolution=175, skill_theme=60, framework_category=138, public_reports=225, site_pages=281.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
