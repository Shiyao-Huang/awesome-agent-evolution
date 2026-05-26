# Hourly Public Metadata Update - 2026-05-26 21:54 +0800

## One Sentence

Added 4 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `benchflow-ai/skillsbench`, `stanford-iris-lab/meta-harness`, `howdymary/hermes-agent-metaharness`, `zjunlp/SkillX` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `benchflow-ai/skillsbench` | Agent Skills Benchmark Harness | `raw-github/benchflow-ai_skillsbench.md` | `site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md` |
| `stanford-iris-lab/meta-harness` | Meta-Harness Framework and Reference Experiments | `raw-github/stanford-iris-lab_meta-harness.md` | `site/public/reports/projects/249-stanford-meta-harness-framework.md` |
| `howdymary/hermes-agent-metaharness` | Hermes Benchmark Outer-Loop Harness | `raw-github/howdymary_hermes-agent-metaharness.md` | `site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md` |
| `zjunlp/SkillX` | Automated Agent Skill KB Construction | `raw-github/zjunlp_skillx.md` | `site/public/reports/projects/251-skillx-agent-skill-kb-construction.md` |

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
