# Hourly Public Metadata Update - 2026-05-29 22:15 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `openclaw/clownfish`, `openclaw/crabpot`, `openclaw/gitcrawl`, `openclaw/crawlkit`, `openclaw/discrawl`, `MemTensor/MemOS-Cloud-OpenClaw-Plugin` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `openclaw/clownfish` | Maintainer Codex Harness for Issue Clusters | `raw-github/openclaw_clownfish.md` | `site/public/reports/projects/305-openclaw-clownfish-maintainer-harness.md` |
| `openclaw/crabpot` | OpenClaw Plugin Compatibility Testbed | `raw-github/openclaw_crabpot.md` | `site/public/reports/projects/306-openclaw-crabpot-plugin-compatibility-testbed.md` |
| `openclaw/gitcrawl` | Local-First GitHub Crawl and Archive Harness | `raw-github/openclaw_gitcrawl.md` | `site/public/reports/projects/307-openclaw-gitcrawl-repo-memory-ingest.md` |
| `openclaw/crawlkit` | Shared Crawl Infrastructure Toolkit | `raw-github/openclaw_crawlkit.md` | `site/public/reports/projects/308-openclaw-crawlkit-shared-crawl-infra.md` |
| `openclaw/discrawl` | Discord Archive and Memory Ingest Harness | `raw-github/openclaw_discrawl.md` | `site/public/reports/projects/309-openclaw-discrawl-discord-archive-memory.md` |
| `MemTensor/MemOS-Cloud-OpenClaw-Plugin` | Hosted Agent Memory Runtime Plugin | `raw-github/memtensor_memos-cloud-openclaw-plugin.md` | `site/public/reports/projects/310-memos-cloud-openclaw-plugin-memory-runtime.md` |

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
