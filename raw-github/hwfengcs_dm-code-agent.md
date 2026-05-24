---
repo: hwfengcs/dm-code-agent
url: https://github.com/hwfengcs/dm-code-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - hwfengcs/DM-Code-Agent: Lightweight, auditable Python code agent (~1500 LOC) — ReAct + Planner + Reflexion + Hybrid RAG, with SWE-bench Lite   eval and trace replay. · GitHub

**Source**: https://github.com/hwfengcs/dm-code-agent

---

[Skip to content](https://github.com/hwfengcs/dm-code-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[hwfengcs](https://github.com/hwfengcs)

/
**[DM-Code-Agent](https://github.com/hwfengcs/DM-Code-Agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fhwfengcs%2FDM-Code-Agent)You must be signed in to change notification settings
- [Fork
    11](https://github.com/login?return_to=%2Fhwfengcs%2FDM-Code-Agent)
- 
[Star
          135](https://github.com/login?return_to=%2Fhwfengcs%2FDM-Code-Agent)

[https://github.com/hwfengcs/DM-Code-Agent](https://github.com/hwfengcs/DM-Code-Agent)

[Branches](https://github.com/hwfengcs/DM-Code-Agent/branches)[Tags](https://github.com/hwfengcs/DM-Code-Agent/tags)

[https://github.com/hwfengcs/DM-Code-Agent/branches](https://github.com/hwfengcs/DM-Code-Agent/branches)[https://github.com/hwfengcs/DM-Code-Agent/tags](https://github.com/hwfengcs/DM-Code-Agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History66 Commits66 Commits |  |  |  |
| .github | .github |  |  |
| bench_reports | bench_reports |  |  |
| benchmarks | benchmarks |  |  |
| dm_agent | dm_agent |  |  |
| docs | docs |  |  |
| evals | evals |  |  |
| tests | tests |  |  |
| .clinerules | .clinerules |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| MCP_GUIDE.md | MCP_GUIDE.md |  |  |
| README.md | README.md |  |  |
| README_EN.md | README_EN.md |  |  |
| README_FR.md | README_FR.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| SKILL_GUIDE.md | SKILL_GUIDE.md |  |  |
| check_mcp_env.py | check_mcp_env.py |  |  |
| config.json.example | config.json.example |  |  |
| main.py | main.py |  |  |
| mcp_config.json.example | mcp_config.json.example |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# DM-Code-Agent

[https://github.com/hwfengcs/dm-code-agent#dm-code-agent](https://github.com/hwfengcs/dm-code-agent#dm-code-agent)

**本地优先、可审计、有算法骨架的 Python Code Agent**

[https://github.com/hwfengcs/DM-Code-Agent/actions/workflows/ci.yml](https://github.com/hwfengcs/DM-Code-Agent/actions/workflows/ci.yml)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://github.com/hwfengcs/DM-Code-Agent/blob/main/LICENSE](https://github.com/hwfengcs/DM-Code-Agent/blob/main/LICENSE)[https://github.com/hwfengcs/DM-Code-Agent/blob/main/MCP_GUIDE.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/MCP_GUIDE.md)[https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/tracing.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/tracing.md)[https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/01-swebench-baseline.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/01-swebench-baseline.md)[https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log)

**中文** | [English](https://github.com/hwfengcs/DM-Code-Agent/blob/main/README_EN.md) | [Français](https://github.com/hwfengcs/DM-Code-Agent/blob/main/README_FR.md)

> **一句话**：DM-Code-Agent 是一个把 ReAct + Planner + Replan + Trace 写在 ~1500 行可读 Python 里的代码维护 Agent；v2 已落地默认关闭的 Reflexion / Hybrid RAG / Critic / Self-Consistency / Adaptive Replan 模块，并接入 SWE-bench Lite Tier-1 评测链路。
> 
> 
> 
> 它不是要做又一个聊天黑盒，而是要做一个开发者能看懂、能复现、能扩展、能拿来对比研究的 Code Agent baseline。

## Why this project

[https://github.com/hwfengcs/dm-code-agent#why-this-project](https://github.com/hwfengcs/dm-code-agent#why-this-project)

- **可审计 (Auditable)**：每一步的计划、工具调用、观察结果都写入 JSONL trace，trace 自带 dry replay、显式 tool replay 和离线 diff，调试不靠"再问一次模型"。
- **可对标 (Benchmarked)**：项目自带 coding 与 maintenance 两套 hidden-test benchmark，并已发布 SWE-bench Lite DeepSeek Tier-1 baseline：0.0% resolved / 72.0% patch-applied on the fixed 50-instance subset。这个 Tier-1 数字受 host verifier 环境噪声影响，不能和官方 leaderboard 直接比较；真实 ablation 仍在冻结，现有离线报告都附 raw JSON。
- **有算法 (Algorithmic, v2)**：不是"调用 GPT-4 并写个 ReAct"。Reflexion、Hybrid RAG、Critic、Self-Consistency、Adaptive Replanning 都是默认关闭的模块化能力，并有 keyless 测试与 research log。真实 SWE-bench ablation 等允许的 live run 后再补。
- **可扩展 (Extensible)**：内置 Skill 系统 + MCP 集成，任务激活领域 prompt 与专用工具；4 家主流 LLM 适配（DeepSeek/OpenAI/Claude/Gemini），可加自定义 `base_url`。

## v.s. 同类项目（当前公开口径）

[https://github.com/hwfengcs/dm-code-agent#vs-%E5%90%8C%E7%B1%BB%E9%A1%B9%E7%9B%AE%E5%BD%93%E5%89%8D%E5%85%AC%E5%BC%80%E5%8F%A3%E5%BE%84](https://github.com/hwfengcs/dm-code-agent#vs-%E5%90%8C%E7%B1%BB%E9%A1%B9%E7%9B%AE%E5%BD%93%E5%89%8D%E5%85%AC%E5%BC%80%E5%8F%A3%E5%BE%84)

| 维度 | DM-Code-Agent | Aider | OpenHands | SWE-agent | smolagents |
|---|---|---|---|---|---|
| 本地优先（无沙箱依赖） | ✅ | ✅ | docker | docker | ✅ |
| Trace + Replay | ✅ JSONL + dry/tool replay + diff | git diff | server log | trajectory | 弱 |
| Reflexion / Critic / Self-Consistency | ✅ v2 | ❌ | partial | ❌ | ❌ |
| Hybrid BM25+Embedding RAG | ✅ v2（opt-in） | repo-map | partial | retrieval | ❌ |
| MCP 集成 | ✅ | ❌ | ✅ | ❌ | ❌ |
| 自带 maintenance benchmark | ✅ 6+ tasks | ❌ | ❌ | SWE-bench | ❌ |
| 公开 SWE-bench Lite 分数 | ⚠️ Tier-1：0.0%（50/300 子集，非官方口径） | ❌ | ✅ | ✅ | ❌ |
| 代码体积（核心 LOC） | ~1500 | ~10k | ~50k | ~5k | ~3k |
| License | MIT | Apache-2.0 | MIT | MIT | Apache-2.0 |

> 表中的 SWE-bench Tier-1 baseline 已在 P1 落地；leaderboard-comparable 分数需要 Tier-2 Docker verifier。当前冻结真实 SWE-bench / Docker / cross-model 跑分，因此 v2 算法模块只声明代码、测试和离线报告能力，不声明真实分数提升。 进度见 [docs/research-log/](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log) 与 [CHANGELOG.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/CHANGELOG.md)。

## Algorithm Highlights（v2 status）

[https://github.com/hwfengcs/dm-code-agent#algorithm-highlightsv2-status](https://github.com/hwfengcs/dm-code-agent#algorithm-highlightsv2-status)

| 模块 | 状态 | 说明 | Devlog |
|---|---|---|---|
| ReAct + Planner + Replan | ✅ v1.5 | 基础 ReAct 循环 + 3-8 步全局计划 + 失败 replan | 00 |
| SWE-bench Lite suite | ✅ P1 | 50 题子集，DeepSeek Tier-1 baseline：0.0% resolved / 72.0% patch-applied；含失败模式分析并已说明 host verifier 噪声 | 01 |
| Reflexion (episodic memory) | ✅ P2 impl | 失败 trial 反思 → lesson → 注入下一次 prompt；ablation 待 Tier-1 子集清理后发布 | 02 |
| Hybrid RAG (BM25 + embeddings + RRF) | ✅ P3 impl | BM25 默认轻量可用；embedding 走 [rag] optional extra；enable_rag=True 时才把 Top-K 注入 prompt | 03 |
| Critic + Self-Consistency | ✅ P4 impl | 完成前加 peer-review 门卫 + N 路独立试跑选优（majority vote / critic score / test pass），并记录候选分歧与置信度 | 04 |
| Adaptive Replanning + Token economics | ✅ P5 impl | 默认关闭；错误信号映射到 replan 策略，离线统计 token / cost-per-success；真实跨模型跑分冻结 | 05 |
| Final write-up + release checklist | ✅ P6 docs | 发布叙事、社区分发清单和面试 bullet；不包含未运行的真实评测声明 | 06 |

## Research Log

[https://github.com/hwfengcs/dm-code-agent#research-log](https://github.com/hwfengcs/dm-code-agent#research-log)

DM-Code-Agent 的每个非平凡设计决策都会留下 devlog：动机、实验、ablation、踩坑、下一步。 入口：[docs/research-log/](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log)。已发布：

- [00 — Kickoff: Why a v2 algorithm-track upgrade?](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/00-kickoff.md)
- [01 — SWE-bench Lite baseline: harness, sampling, and the road to numbers](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/01-swebench-baseline.md)
- [02 — Reflexion: episodic memory across trials](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/02-reflexion.md)
- [03 — RAG-based context retrieval: BM25 first, embeddings optional](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/03-rag.md)
- [04 — Critic and self-consistency: peer review before acceptance](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/04-critic-and-consistency.md)
- [05 — Adaptive replanning and token economics](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/05-adaptive-and-economics.md)
- [06 — Final write-up: v2 algorithm stack](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/06-final-writeup.md)
- [Distribution checklist](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/DISTRIBUTION_CHECKLIST.md)
- [Interview talking points](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/research-log/INTERVIEW_TALKING_POINTS.md)

---

DM-Code-Agent 是一个面向真实代码维护任务的轻量 Code Agent。它在本地工作区中运行，能够调用文件、搜索、测试、lint、代码分析和 MCP 工具，并把每一步计划、工具调用、观测结果和最终报告记录为可审计 trace。

它的目标不是做一个黑盒聊天机器人，而是做一个开发者可以检查、复现、评测和扩展的代码维护助手。

## 适合做什么

[https://github.com/hwfengcs/dm-code-agent#%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88](https://github.com/hwfengcs/dm-code-agent#%E9%80%82%E5%90%88%E5%81%9A%E4%BB%80%E4%B9%88)

- 修复小到中等规模的 bug，并运行测试验证。
- 补充回归测试，避免只修 visible case。
- 分析项目结构、函数签名、依赖和代码指标。
- 执行小型重构或文档一致性修复。
- 生成 trace 和 benchmark 报告，用于审计 agent 的行为质量。

## 核心能力

[https://github.com/hwfengcs/dm-code-agent#%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B](https://github.com/hwfengcs/dm-code-agent#%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B)

| 能力 | 说明 |
|---|---|
| ReAct Agent | 模型输出 thought/action/action_input，Agent 执行工具并把 observation 写回上下文 |
| Task Planner | 执行前生成 3-8 步计划，失败后可触发 replan |
| Adaptive Replanning | 默认关闭；把 tool/parse/test/critic/max-steps 错误映射到恢复策略，并记录重复失败信号 |
| Reflexion | 默认关闭；失败 trial 可生成 lesson 并注入下一轮 prompt |
| RAG Retrieval | 默认关闭；BM25 + 可选 embedding + RRF，按步骤注入 <retrieved_context> |
| Tool System | 文件读写、搜索、Python/Shell 执行、测试、lint、AST、代码指标 |
| Code Index | 扫描 Python 仓库，生成符号索引、符号搜索和本地依赖图 |
| Trace / Replay | JSONL trace 记录 run、plan、LLM 调用摘要、tool call、step、replan 和结果；支持离线 trace diff |
| Multi-LLM | 支持 DeepSeek、OpenAI、Claude、Gemini 和自定义 base_url |
| MCP Integration | 通过配置接入 Playwright、Context7、Filesystem、SQLite 等 MCP server |
| Skill System | 根据任务激活 Python、数据库、前端等领域技能和专用工具 |
| Evals | 无 API key 的确定性 eval，覆盖 JSON 修复、工具恢复、replan 等行为 |
| Maintenance Benchmarks | 更贴近日常维护任务的 hidden-test benchmark，记录改动文件约束和 agent 指标 |

## 快速开始

[https://github.com/hwfengcs/dm-code-agent#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B](https://github.com/hwfengcs/dm-code-agent#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

```
git clone https://github.com/hwfengcs/DM-Code-Agent.git
cd DM-Code-Agent

python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"

copy .env.example .env
dm-agent --help
```

Linux/macOS:

```
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
cp .env.example .env
dm-agent --help
```

在 `.env` 中填入至少一个模型 API key 后运行：

```
dm-agent "分析当前项目结构，列出最适合优先测试的模块" --provider deepseek --show-steps
```

## Trace 与 Replay

[https://github.com/hwfengcs/dm-code-agent#trace-%E4%B8%8E-replay](https://github.com/hwfengcs/dm-code-agent#trace-%E4%B8%8E-replay)

默认 trace 不保存完整 prompt 和 raw response，只记录可审计摘要、工具输入输出和执行结果：

```
dm-agent "修复 retry.py 的重试边界，并运行测试" \
  --provider deepseek \
  --trace traces/retry-fix.jsonl \
  --report reports/retry-fix.md

dm-agent-trace view traces/retry-fix.jsonl
dm-agent-trace analyze traces/retry-fix.jsonl
dm-agent-trace analyze-dir bench_reports/traces
dm-agent-trace replay traces/retry-fix.jsonl
```

`analyze` 会离线标记首个失败阶段、恢复链路、验证缺口和 trace health，不调用模型也不执行工具。

比较两次 run 的计划、工具调用和最终结果，不调用模型也不执行工具：

```
dm-agent-trace diff traces/baseline.jsonl traces/rag-enabled.jsonl
```

如果需要私有调试，可以显式记录完整 LLM I/O：

```
dm-agent "解释这个模块" --trace traces/debug.jsonl --trace-llm-io
```

`--trace-llm-io` 可能包含源码、路径、命令输出或模型上下文，只建议在本地私有环境使用。详见 [docs/tracing.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/tracing.md)。

## Benchmark

[https://github.com/hwfengcs/dm-code-agent#benchmark](https://github.com/hwfengcs/dm-code-agent#benchmark)

查看 coding benchmark：

```
dm-agent-bench --list
```

查看更真实的 maintenance benchmark：

```
dm-agent-bench --suite maintenance --list
```

运行一次真实模型维护任务：

```
dm-agent-bench --suite maintenance \
  --provider deepseek \
  --task config_precedence \
  --output bench_reports/maintenance.json \
  --markdown bench_reports/maintenance.md \
  --trace-dir bench_reports/traces
```

报告会包含 hidden-test pass rate、95% 置信区间、agent completion rate、平均步骤、工具调用、token 估算、改动文件列表、文件约束违规、任务 manifest 指纹；启用 `--trace-dir` 时还会附带离线 trace analysis。详见 [docs/benchmarks.md](https://github.com/hwfengcs/DM-Code-Agent/blob/main/docs/benchmarks.md)。

离线生成 token 经济学报告（不调用模型、不联网）：

```
dm-agent-economics bench_reports/swebench_lite_baseline.json \
  --label swebench-tier1-baseline \
  --cost-per-1k-tokens 0.00027 \
  --output-json bench_reports/economics.json \
  --output-md bench_reports/economics.md
```

`--cost-per-1k-tokens` 是显式输入的本地会计参数，不是实时价格查询。

默认关闭的算法模块也可以接入 coding / maintenance benchmark plumbing，用于本地 smoke 或后续真实实验：

```
dm-agent-bench --suite maintenance \
  --enable-rag \
  --rag-top-k 5 \
  --enable-critic \
  --self-consistency-runs 3 \
  --self-consistency-strategy test_pass
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

