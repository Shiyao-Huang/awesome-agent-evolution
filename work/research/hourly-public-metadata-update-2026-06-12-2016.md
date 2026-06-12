# Hourly Public Metadata Update - 2026-06-12 20:16 +0800

## One Sentence

Refreshed the hourly public metadata packet on 2026-06-12, replaced rounded GitHub HTML counts with exact visible totals for eight core repos, and propagated the corrected snapshot through raw, processed, Mermaid, README, and site surfaces.

## Three Sentences

This run continues the same direct-user loop: keep GitHub raw evidence current, classify it honestly, and surface the delta on public README/site pages instead of leaving it trapped in local notes. The concrete delta is not new repository discovery but count precision and freshness: Agent Swarm moved from the 2026-06-09 packet to a same-day 2026-06-12 snapshot, while AHE, Hermes Agent, OpenClaw, Superpowers, agentmemory, and PinchBench replaced earlier rounded star/fork totals with exact visible HTML counts. Freshness remains honest: unauthenticated GitHub API access was already rate-limited, `gh` auth is invalid, and GitNexus MCP tools are not callable in this session even though `npx gitnexus status` works.

## GitHub Evidence Packet

| Repo | Stars | Forks | Commits | Issues | PRs | Source boundary |
|---|---:|---:|---:|---:|---:|---|
| `china-qijizhifeng/agentic-Harness-engineering` | 545 | 62 | 45 | 0 | 0 | public GitHub HTML, 2026-06-12 |
| `NousResearch/hermes-agent` | 191591 | 33323 | 11472 | 5000+ | 5000+ | public GitHub HTML, 2026-06-12 |
| `openclaw/openclaw` | 378330 | 79122 | 58599 | 4206 | 3753 | public GitHub HTML, 2026-06-12 |
| `obra/superpowers` | 225591 | 20050 | 441 | 123 | 155 | public GitHub HTML, 2026-06-12 |
| `rohitg00/agentmemory` | 22479 | 1851 | 462 | 138 | 150 | public GitHub HTML, 2026-06-12 |
| `pinchbench/skill` | 1227 | 138 | 383 | 18 | 0 | public GitHub HTML, 2026-06-12 |
| `EvoMap/awesome-agent-evolution` | 137 | 20 | 60 | 6 | 1 | public GitHub HTML, 2026-06-12 |
| `desplega-ai/agent-swarm` | 520 | 57 | 1619 | 1 | 2 | public GitHub HTML, 2026-06-12 |

## Working Principle

GitHub public repo pages -> `raw-github/*.md` -> `research/repo-classification.json` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> processed project cards + `site/src/data/projects.ts` + `site/public/reports/projects/` -> indexes and Astro build.

## GitNexus / Blockers

- `npx gitnexus status` works and reports the local index is stale against commit `c61bad5`.
- Direct GitNexus MCP tools are not exposed in this Codex session: `tool_search` returned no callable GitNexus tools.
- `npx gitnexus analyze` was intentionally not run because the repo already has unrelated user edits in `AGENTS.md` and `CLAUDE.md`, and the GitNexus CLI may rewrite those context files.
- `https://api.github.com/rate_limit` returned `200`, but repository API calls already returned `403 rate limit exceeded`; this run therefore uses public HTML rather than API JSON.
- `gh auth status` still reports the default github.com token for `Shiyao-Huang` is invalid.

## Public Surface Sync

- Updated README evidence section date from 2026-06-09 to 2026-06-12 in ZH/EN/main.
- Refreshed project cards and public reports for AHE, Hermes Agent, OpenClaw, Superpowers, agentmemory, PinchBench, EvoMap, and Agent Swarm.
- Updated Mermaid truth source and rendered views so the blocker narrative matches this run instead of the older DNS-only story.

## Validation Commands

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
