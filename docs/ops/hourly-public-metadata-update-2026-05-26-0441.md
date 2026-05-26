# Hourly Public Metadata Update - 2026-05-26 04:41 +08:00

## One Sentence

Added five web-observed GitHub raw captures for SICA, Agent Zero, elizaOS, Centaur, and SuperAGI, then propagated the public-facing additions through classification, README/i18n, site project data, reports, indexes, and the Mermaid evidence graph.

## Three Sentences

The direct user requirement for this run is still the raw -> processed -> work -> results pipeline, with direct user inputs and `CURRENT_GOAL.md` as the goal source. Current public metadata came from web-observed GitHub pages/search results because shell GitHub API freshness is not claimed in this run; the repository analysis script still records the API/cache evidence quality it can verify. GitNexus was available locally: `npx gitnexus status` reported the index up to date at commit `2f939fd` before this iteration.

## Added / Backfilled Repositories

| Repo | Layer delta | Why it matters |
|---|---|---|
| `MaximeRobeyns/self_improving_coding_agent` | raw + classification + site report | Core SICA self-referential coding-agent artifact; the agent works on its own codebase. |
| `agent0ai/agent-zero` | raw + classification + site report | Production-facing runtime with Linux workspace, memory, tools, browser automation, skills, plugins, and subordinate agents. |
| `elizaOS/eliza` | raw + classification + site report | High-adoption autonomous-agent framework; important infrastructure surface for plugins, lifecycle, skills, and workflow loops. |
| `paradigmxyz/centaur` | raw + classification + site report | Team-agent runtime with Slack/API entry, Kubernetes sandbox, harness adapters, durable workflows, tool plugins, and credential boundaries. |
| `TransformerOptimus/SuperAGI` | raw + classification backfill | Existing site project now has raw/classification evidence joined to its framework/memory/workflow claims. |

## Evidence Limits

- `chenyn66/learning-to-self-evolve` was listed in the prior discovery report, but this run did not confirm a GitHub repository URL through web search; it should stay a follow-up, not a fabricated raw capture.
- No local clones, tests, benchmarks, or deployments were run for the five repositories.
- Metadata freshness is web-observed unless `analysis/github-created-at-cache.json` already contains API metadata.

## Validation Snapshot

- `node scripts/generate_project_indexes.mjs`: passed.
- `python3 scripts/enforce_raw_timestamps.py`: passed; `missing_count=0`, raw-github `md=510`, `md_ok=510`.
- `node scripts/analyze_github_project_data.mjs`: passed; raw=510, classified=510, site projects=100, strict evolution=80, broad evolution=181.
- `node --check site/src/data/projects.ts`: passed.
- `(cd site && npm run build)`: passed; Astro rendered 189 pages and emitted existing duplicate `/visualizations` route plus unused-variable/deprecation warnings.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`: passed; produced `main.pdf` with existing undefined-citation and layout warnings.

## Working Principle

This iteration treats the public metadata loop as a funnel: web-observed raw GitHub evidence enters `raw-github/`; structured rows in `research/repo-classification.*` turn it into processed evidence; `output/raw-github-timestamp-index.*` and `analysis/github-project-data-analysis.*` answer corpus questions; `site/src/data/projects.ts` and `site/public/reports/projects/` expose the result publicly; README/i18n and `CONTENT_INDEX.md` keep the reader-facing counts and complete list request areas synchronized.
