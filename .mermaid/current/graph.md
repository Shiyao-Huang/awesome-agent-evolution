# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-05-25T09:19:32+08:00

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

- Web-observed repos: yf-he/EvoTest, codejunkie99/agentic-stack, revfactory/harness, akillness/oh-my-skills, guixiang123124/openclaw-harness, regenrek/codex-1up, managedcode/dotnet-skills
- New raw files: raw-github/yf-he_evotest.md, raw-github/codejunkie99_agentic-stack.md, raw-github/revfactory_harness.md, raw-github/akillness_oh-my-skills.md, raw-github/guixiang123124_openclaw-harness.md, raw-github/regenrek_codex-1up.md, raw-github/managedcode_dotnet-skills.md
- Shell GitHub API remains DNS-blocked: curl -I --max-time 10 https://api.github.com failed with Could not resolve host; gh api rate_limit could not connect.
- jq empty research/repo-classification.json .mermaid/current/graph.json passed; node --check site/src/data/projects.ts and the 0919 generator passed.
- node scripts/generate_project_indexes.mjs passed after data and analysis refresh.
- python3 scripts/enforce_raw_timestamps.py passed with raw-github md=463, md_ok=463, missing_count=0.
- node scripts/analyze_github_project_data.mjs passed with raw=463, classified=463, analyzed_projects=181, strict_evolution=78, broad_evolution=173.
- node scripts/generate_visual_assets.mjs regenerated four SVG assets.
- command -v codeflow returned no command; CodeFlow is unavailable on PATH in this environment.
- HOME=/private/tmp/gitnexus-home gitnexus doctor passed; analyze passed with changed=14, added=16, deleted=0, 10,690 nodes, 11,498 edges, 36 clusters, 16 flows; FTS degraded because LadybugDB extension download could not connect.
- (cd site && npm run build) passed with 262 pages built and existing Astro z deprecation hints.
- (cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex) passed; main.pdf remains 213 pages with existing font/overfull/underfull warnings.
- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.
