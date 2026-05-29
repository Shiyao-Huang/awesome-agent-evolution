# Hourly Public Metadata Update - 2026-05-29 16:12 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `itgoyo/awesome-agent-skills`, `back1ply/agent-skill-loader`, `Da1yuqin/SEAD`, `ai-agents-2030/darwin-mobile-agent`, `YuanchenBei/Mem-Gallery`, `InfiAgent/InfiAgent` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `itgoyo/awesome-agent-skills` | Cross-Platform Agent Skills Resource Index | `raw-github/itgoyo_awesome-agent-skills.md` | `site/public/reports/projects/299-itgoyo-awesome-agent-skills.md` |
| `back1ply/agent-skill-loader` | Runtime Agent Skill Loader | `raw-github/back1ply_agent-skill-loader.md` | `site/public/reports/projects/300-back1ply-agent-skill-loader.md` |
| `Da1yuqin/SEAD` | Self-Evolving Agent Design Benchmark | `raw-github/da1yuqin_sead.md` | `site/public/reports/projects/301-da1yuqin-sead-benchmark.md` |
| `ai-agents-2030/darwin-mobile-agent` | Mobile Agent Self-Evolution Framework | `raw-github/ai-agents-2030_darwin-mobile-agent.md` | `site/public/reports/projects/302-darwin-mobile-agent.md` |
| `YuanchenBei/Mem-Gallery` | Long-Term Memory Benchmark Suite | `raw-github/yuanchenbei_mem-gallery.md` | `site/public/reports/projects/303-mem-gallery-memory-benchmark.md` |
| `InfiAgent/InfiAgent` | Framework for Self-Improving Agent Loops | `raw-github/infiagent_infiagent.md` | `site/public/reports/projects/304-infiagent-framework.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
