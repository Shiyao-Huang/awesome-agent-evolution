# Hourly Public Metadata Update Learning Note

Generated: 2026-06-03T19:56:18+08:00

## One Sentence

This iteration repaired five high-visibility public metadata anchors so the repo stops mixing strong public projects with stale star counts, stale fork counts, and `unknown` raw timestamps.

## Three Sentences

1. The refresh bundle covers `algorithmicsuperintelligence/openevolve`, `EverMind-AI/EverOS`, `microsoft/SkillOpt`, `RyanAlberts/best-of-Agent-Harnesses`, and `pinchbench/skill`, which together span evolution, memory, skill, harness, and benchmark surfaces.
2. The proof chain stayed conservative: all freshness claims come from current public GitHub pages because shell GitHub API access is still blocked in this workspace.
3. The update path was raw capture -> repo classification -> site data / public report -> README packet -> generated indexes and analysis.

## Five Sentences

1. `openevolve` was the most severe metadata distortion: local processed data still carried `6 stars` and `unknown` timing despite the public repository showing a 6.5k-scale surface and 52 releases.
2. `EverOS` and `SkillOpt` matter because they anchor two different self-evolution layers: persistent memory substrate versus trainable skill documents.
3. `best-of-Agent-Harnesses` matters less as an implementation repo than as a public comparison surface, so the key evidence is its own explicit methodology note and update cadence.
4. `pinchbench/skill` matters because it supplies an external evaluator with transcript retention, which is exactly the boundary needed to separate believable agent improvement from demo-only claims.
5. GitNexus CLI stayed available only as a degraded lane in this run because `npx gitnexus status` reported the index stale against commit `e585ce2`; that was recorded, not hidden.

## Repo Bundle

| Repo | What changed | Evidence boundary |
|---|---|---|
| `algorithmicsuperintelligence/openevolve` | raw timestamp repaired, stars/forks corrected, classification upgraded to paper-code / evolution infra, site report refreshed | public GitHub page on 2026-06-03; latest visible release `v0.2.27` on 2026-03-18 |
| `EverMind-AI/EverOS` | raw/site/model-card stars-forks corrected and memory + MCP/skills surface restated | public GitHub page on 2026-06-03 |
| `microsoft/SkillOpt` | raw/site/model-card stars-forks corrected and 52/52 result-banner signal added | public GitHub page on 2026-06-03 |
| `RyanAlberts/best-of-Agent-Harnesses` | raw/site/model-card stars corrected and README methodology note recorded | public GitHub page on 2026-06-03 plus repo README note saying internal star tables were captured on 2026-05-31 |
| `pinchbench/skill` | raw/site/model-card fork/issue counts corrected and benchmark method note expanded | public GitHub page on 2026-06-03 |

## Blockers

- Shell GitHub API access remains blocked in this workspace, so no authenticated `created_at` / `pushed_at` refresh was claimed.
- GitNexus is installed but stale for the current commit; using it as authoritative relationship freshness would have overstated evidence quality.
