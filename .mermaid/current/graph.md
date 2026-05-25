# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-26T06:45:09+08:00

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

- Web-observed repositories this run: Orchestra-Research/AI-research-SKILLs and iliaal/ai-skills.
- New raw files: raw-github/orchestra-research_ai-research-skills.md and raw-github/iliaal_ai-skills.md.
- New public reports: site/public/reports/projects/233-ai-research-skills-agent-research-workflow.md and site/public/reports/projects/234-ai-skills-agent-process-discipline.md.
- Counts after propagation: 517 raw captures, 517 classified repositories, 107 site projects, 82 strict evolution-theme repositories, 185 broad evolution-related repositories, and 259 public project report markdown files including INDEX.md.
- GitNexus evidence: status/list/query are available for awesome-evolution; query surfaced scripts/analyze_github_project_data.mjs, scripts/generate_project_indexes.mjs and scripts/enforce_raw_timestamps.py as relevant data-flow nodes. gitnexus impact by path returned target not found, so impact analysis is blocked for that exact command.
- Data flow: raw capture -> repo-classification -> generated timestamp index -> GitHub analysis -> README/i18n -> site data/report -> Astro site build.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
