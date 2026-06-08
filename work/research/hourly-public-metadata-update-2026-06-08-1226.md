# Hourly Public Metadata Update - 2026-06-08 12:26 +0800

## One Sentence

Added the official OpenAI Agents SDK Python and JavaScript baselines as fresh raw captures and propagated them through classification, project cards, site reports, README/i18n, Mermaid graph, and downstream build surfaces.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `openai/openai-agents-python` and `openai/openai-agents-js` so third-party swarm, harness, memory, and skill systems can be compared against a canonical upstream orchestration baseline instead of only against one another. The run keeps freshness honest: GitHub evidence is web-observed, shell GitHub API access is blocked by DNS, and local `gh` authentication is invalid.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `openai/openai-agents-python` | Official OpenAI Agents SDK Runtime Baseline | `raw-github/openai_openai-agents-python.md` | `site/public/reports/408-openai-agents-python-official-sdk.md` |
| `openai/openai-agents-js` | Official OpenAI Agents SDK TypeScript Baseline | `raw-github/openai_openai-agents-js.md` | `site/public/reports/409-openai-agents-js-official-sdk.md` |

## Working Principle

Public GitHub repo pages -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> paper/site build.

## Evidence Quality

- GitHub page evidence is current-web-observed, not authenticated-API verified.
- `curl -I https://api.github.com/rate_limit` fails with DNS resolution in this workspace.
- `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- `gitnexus status` works via the direct binary and reports the repo index at commit `326b47d`; `npx gitnexus status` timed out after 20 seconds.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.md` and `.mmd` are rendered views.
- Public copy review gate remains incomplete because the required reader/editor and academic agent reviews were not actually executed in this session.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
- `(cd site && npm run build)`
