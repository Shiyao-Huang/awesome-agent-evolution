# Asset Processing + AnySearch Supplement — 2026-05-22

- content_timestamp: 2026-05-22
- collected_at: 2026-05-22T13:00:00+08:00
- time_slice: 2026-05
- source_tool: anysearch

## One-sentence compression

当前素材的结构化时间戳已经齐全，真正需要补的是 hot practitioner/project recall，因此本轮用 AnySearch 与用户补充信号补入 OpenHuman、agentmemory、Superpowers、Hermes Agent、OpenClaw、PinchBench、KiloClaw、Agentic Harness Engineering 等缺失信号。

## Three-sentence compression

全目录 raw 素材已有 `content_timestamp / collected_at / time_slice`，`scripts/enforce_raw_timestamps.py` 校验后 `missing_count=0`。缺口主要不是字段缺失，而是 `unknown` 时间/技术栈、社媒未完全补齐，以及 `research/missing-hot-projects-2026-05-22.md` 记录的实践热项目未入 raw 素材。AnySearch 本轮补出并落地 6 个 raw-github 条目、2 个 raw-blogs 条目，并补充 X 候选信号；随后用户补充 Agentic Harness Engineering，已进入主 README 的认知索引、热点索引与 Frameworks 列表。

## Five-sentence compression

本轮先盘点 `raw-github/`、`raw-papers/`、`raw-social/`、`raw-blogs/`、`paper-reviews/`、`research/`、`analysis/`、`output/`。审计显示 raw 时间元数据缺失数为 0，但存在大量 `unknown` 记录，尤其是 raw-social 和 raw-github。AnySearch 查询优先围绕本地缺失报告中的 hot projects，而不是泛搜。新增素材包括 `tinyhumansai/openhuman`、`rohitg00/agentmemory`、`obra/superpowers`、`nousresearch/hermes-agent`、`openclaw/openclaw`、`pinchbench/skill`、Product Hunt OpenHuman、KiloClaw/PinchBench/OpenClaw 趋势信号。用户继续补充 `china-qijizhifeng/agentic-harness-engineering` 后，已把它作为 harness evolution 入口合入主 README。

## Audit Snapshot

| Area | Files | Missing temporal metadata | Unknown-like records/files | Main issue |
|---|---:|---:|---:|---|
| raw-github | 354 | 0 | 179 | time/stack unknown and hot-project recall gaps |
| raw-papers | 187 | 0 | 1 | placeholder/audit artifact only |
| raw-social | 1307 | 0 | 762 | social timestamps and X coverage still partial |
| raw-blogs | 1308 | 0 | 4 | mostly template/README artifacts |
| paper-reviews | 137 | 0 | 17 | author/title gaps in some reviews |
| research | 34 | 0 | 4 | derived CSV/JSON still carries unknowns |
| analysis | 10 | 0 | 6 | analysis mirrors unknown raw fields |
| output | 7 | 0 | 2 | timestamp index mirrors unknown raw fields |

## AnySearch Queries Used

- `OpenHuman open source AI harness Product Hunt GitHub`
- `agentmemory open source multimodal AI agent stack GitHub`
- `obra superpowers agentic skills framework GitHub`
- `Hermes Agent self improving skills persistent memory GitHub Nous Research`
- `OpenClaw KiloClaw PinchBench GitHub self hosted personal agent`
- User-reported / 用户补充: `https://github.com/china-qijizhifeng/agentic-Harness-engineering`

## Added Raw Assets

| File | Role | Evidence |
|---|---|---|
| `raw-github/tinyhumansai_openhuman.md` | personal agent harness | GitHub extract + Product Hunt/search result |
| `raw-github/rohitg00_agentmemory.md` | persistent memory layer | GitHub extract + search result |
| `raw-github/obra_superpowers.md` | agentic skills methodology | GitHub extract + search result |
| `raw-github/nousresearch_hermes-agent.md` | self-improving agent runtime | GitHub extract + search result |
| `raw-github/openclaw_openclaw.md` | canonical OpenClaw runtime | GitHub extract + search result |
| `raw-github/pinchbench_skill.md` | OpenClaw real-world benchmark | GitHub extract + search result |
| `raw-blogs/0651-Product-Hunt-OpenHuman.md` | product discovery signal | Product Hunt search result |
| `raw-blogs/0652-KiloClaw-PinchBench-OpenClaw.md` | hosted OpenClaw + benchmark signal | Kilo blog / PinchBench / VentureBeat / Product Hunt search results |
| `raw-social/x-trending.md` | X/Twitter candidate supplement | AnySearch `site:x.com` candidate search |

## User-Reported Continuation Supplement

| Entry | Role | Evidence |
|---|---|---|
| [china-qijizhifeng/agentic-harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | harness evolution framework | GitHub README, arXiv paper, Terminal-Bench 2.0 leaderboard signal |

## Remaining Gaps

- X/Twitter target in `raw-social/x-trending.md` remains partial: 10 collected vs target 50.
- `README.md` and generated classification files still show `Unknown` where upstream raw records lack reliable timestamp or language evidence.
- The newly added hot projects should be deduped and classified before main README regeneration.

## Resolved in continuation pass

- Canonical OpenClaw repo resolved as `openclaw/openclaw`.
- PinchBench canonical benchmark task repo resolved as `pinchbench/skill`.
- Agentic Harness Engineering resolved as `china-qijizhifeng/agentic-harness-engineering` and classified as `framework-runtime` / harness evolution.

## Next Processing Step

Run a focused classification/regeneration pass after canonical repo resolution:

```bash
python3 scripts/enforce_raw_timestamps.py
python3 scripts/generate_repo_classification.py
```
