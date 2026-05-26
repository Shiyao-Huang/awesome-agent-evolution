# Hourly Public Metadata Update - 2026-05-26 16:18 +0800

## One Sentence

Added benchmark/memory/skills GitHub captures and propagated them through raw, classification, analysis, README/i18n, project reports, site data, and build validation with explicit freshness limits.

## Three Sentences

This run follows direct user intent: keep the raw -> processed -> work -> results loop closed and traceable for Self Evolve public metadata. We added `InternLM/WildClawBench`, `supermemoryai/supermemory`, and `flagos-ai/skills`, then synchronized classification, timestamp index, GitHub analysis outputs, site project cards, and public model-card reports. Freshness remains honest: repository metadata is web-observed from public GitHub pages, while shell GitHub API/`gh` verification is still blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `InternLM/WildClawBench` | Authentic real-world agent benchmark | `raw-github/internlm_wildclawbench.md` | `site/public/reports/projects/245-wildclawbench-authentic-real-world-agent-benchmark.md` |
| `supermemoryai/supermemory` | Open AI memory infrastructure substrate | `raw-github/supermemoryai_supermemory.md` | `site/public/reports/projects/246-supermemory-open-memory-infrastructure.md` |
| `flagos-ai/skills` | Open skill registry and package format | `raw-github/flagos-ai_skills.md` | `site/public/reports/projects/247-flagos-skills-open-agent-skill-registry.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n + `site/src/data/projects.ts` -> `projects/*.md` + `site/public/reports/projects/*.md` -> Astro site build.

## Counts After Refresh

- Raw GitHub captures: 530
- Classified repositories: 530
- Site model-card projects: 119
- Strict evolution repos: 82
- Broad evolution-related repos: 186
- Public project report files: 271
- Theme heat (top): memory 105, evaluation 96, evolution 82, skill 70
- Function heat (top): benchmark-eval 125, framework-runtime 124

## Evidence Quality

- Public GitHub pages were observed through browser-accessible text and used as raw evidence.
- Shell GitHub API blocker remains explicit: `curl -I --max-time 10 https://api.github.com/rate_limit` cannot resolve `api.github.com` in this environment.
- Local `gh auth status` remains invalid for default token and is not treated as fresh metadata.
- GitNexus is available but stale for this commit; `npx gitnexus status` shows stale index and `gitnexus impact` path lookup still reports target-not-found.
- A fresh-home `gitnexus analyze --skip-git --index-only` attempt failed because FTS extension download is blocked, then COPY/index loading failed; blocker is recorded, not hidden.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs` (passed)
- `python3 scripts/enforce_raw_timestamps.py` (passed; raw-github md=530, missing=0)
- `node scripts/analyze_github_project_data.mjs` (passed; counts synced)
- `(cd site && npm run build)` (passed; existing `/visualizations` duplicate-route warning + Astro hints remain)

## Scope Notes

- Updated existing `InternLM/WildClawBench` site entry to a canonical `projects/...` report path and raw evidence path.
- Added `supermemory` and `flagos-ai/skills` to site project data and skills/memory/harness group.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.
