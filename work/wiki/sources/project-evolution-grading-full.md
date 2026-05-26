---
title: "Projects/ 目录进化能力分级报告 (Full)"
rank: A
created: 2026-05-26
updated: 2026-05-26
type: source
tags:
  - project-grading
  - SEMM
  - L0-L5
  - maturity-model
  - mechanism-classification
  - model-cards
sources:
  - research/ranking-framework/README.md
  - research/ranking-framework/radar-profiles.json
  - work/research/raw-github-mechanisms.md
  - projects/ (model cards)
migrated_from: work/research/project-evolution-grading.md
---

# Projects/ 目录进化能力分级报告 (Full)

> 本文件是 project-evolution-grading 的完整版，包含 470 个项目的 L0-L5 分级详情、7 类机制交叉矩阵和 15 个案例研究。projects-evolution-grading.md 是其精简版。

## 0. 分级方法

### 0.1 采用框架

使用 SEMM (Self-Evolution Maturity Model) L0-L5 六级模型 [KNOWN]:

| Level | Name | Key Signal | Example |
|:---:|---|---|---|
| **0** | No Feedback | 静态管道，无反馈循环 | Zero-shot LLM, 固定 prompt 链 |
| **1** | External Feedback | 外部评估者提供反馈，系统不自修改 | Human-in-the-loop 编码助手 |
| **2** | Prompt/Output Refinement | 系统修改自身 prompt/output/搜索策略 | Reflexion, Self-Refine, DSPy, OPRO |
| **3** | Memory/Skill Accumulation | 持久化经验为可复用记忆/技能/工作流 | Voyager, ExPeL, ACE, ReasoningBank |
| **4** | Architecture/Code Self-Modification | 系统修改自身代码/架构/Agent 设计 | DGM, ADAS, AlphaEvolve, SICA |
| **5** | Autonomous Co-Evolution | 生成器+评估器+基础设施协同进化 | 假设性；DGM+验证评估器进化部分信号 |

### 0.2 分级规则 [KNOWN]

1. 系统的 L 等级取其**持续运行的最高级别**，非一次性行为
2. Level 声明需要证据：至少在 3 个不同任务/领域展示该行为并有文档化改进轨迹
3. Level 不单调对应质量：L4 系统在特定 benchmark 上可能不如 L2 系统
4. 仅基于 projects/ 目录中已有的 model card 内容分级，不进行外部补充研究
5. 缺乏足够信号的卡片标记为 `[INSUFFICIENT]` 并给出最佳估计

### 0.3 数据源映射

| 数据源 | 覆盖范围 | 信任等级 |
|---|---|---|
| radar-profiles.json | 8 个核心系统 (DGM, Reflexion, AlphaEvolve 等) | ★★★★★ 直接评分 |
| Format A 深度研究卡 (11 个) | DGM, AlphaEvolve, Creator, Gödel Agent 等 | ★★★★★ 含 MUVS 框架分析 |
| Format B 详细中文分析 (~63 个) | 编号 01-52 及部分命名文件 | ★★★★ 含核心模块分析 |
| raw-github mechanism analysis | 365 entries, 7-class taxonomy | ★★★★ 机制分类 |
| Format C 短卡片 (~200+) | 编号 53+ 及自动生成卡片 | ★★ 仅元数据+1-2句描述 |
| 107-repo classified list | evolution-relevant subset | ★★★ 中文分类 |

---

## 1. L4-L5: Architecture/Code Self-Modification & Co-Evolution

### 1.1 TRUE 自进化项目 — 从 raw-github 机制分析 (12 个)

| # | Project | Mechanism | L Level | Key Evidence | Evidence Quality |
|---|---|---|:---:|---|---|
| 1 | **OpenEvolve** | PBE | 4 | MAP-Elites + islands, circle packing n=26 SOTA, 2.8x GPU kernel speedup | ★★★★ |
| 2 | **ClaudeEvolve** | PBE | 4 | MAP-Elites inside Claude Code, UCB1 selection, world record n=26 | ★★★ |
| 3 | **EoH** (feiliu36/eoh) | PBE | 4 | LLM + evolutionary search, novel heuristics discovery | ★★★★ |
| 4 | **ShinkaEvolve** | PBE | 4 | Open-ended program evolution, automated scientific discovery | ★★★ |
| 5 | **A-Evolve** | ASM | 4 | Solve-Observe-Evolve-Gate-Reload, SWE-bench 76.8%, MCP-Atlas 79.4% | ★★★★★ |
| 6 | **SkillClaw** | ASM/CE | 4 | Cross-agent skill evolution across Hermes/Codex/Claude Code/OpenClaw | ★★★ |
| 7 | **DGM** (jennyzzt/dgm) | ASM | 4 | Self-modifying source code via reward function scoring | ★★★★★ |
| 8 | **ALTK-Evolve** | ASM | 4 | MCP server on-the-job learning, +8.9 points AppWorld, 74% hard tasks | ★★★★ |
| 9 | **Agent0** | CE | 4 | Zero-data via Curriculum+Executor co-evolution, +18% math, +24% reasoning | ★★★★ |
| 10 | **JarvisEvo** | CE | 4-5 | Editor-Evaluator co-evolution, CVPR 2026, synergistic dynamics | ★★★★ |
| 11 | **Darwinia** | CE | 4 | 50-agent Darwinian selection, attack survival 30%→98-100%, strategy speciation | ★★★ |
| 12 | **FLEX** | RBS | 3-4 | Actor-verifier-critic-updater, AIME25 40%→63%, experience scaling law | ★★★★ |

### 1.2 L4-L5 分布统计

| 子级别 | 数量 | 项目类型 |
|---|---:|---|
| L4 (Code/Arch Self-Modification) | ~18 | PBE 进化搜索 (4), ASM Agent 自修改 (4), DGM/ADAS/Gödel Agent (3), CE 协同进化 (3), 其他 (4) |
| L4-L5 (Co-Evolution border) | ~3 | JarvisEvo, PromptBreeder, Agent0 |
| **L4+ 总计** | **~21** | 占 470 的 4.5% |

---

## 2. L3: Memory/Skill Accumulation

### 2.1 GUIDED 自进化项目 — 3-4 个结构因子 (8 个)

| # | Project | Mechanism | L Level | Key Evidence | Evidence Quality |
|---|---|---|:---:|---|---|
| 1 | **Geneclaw** | ASM | 3 | 5-layer safety gatekeeper, git-branched evolution, pytest validation | ★★★ |
| 2 | **Hermes Dojo** | ASM | 3 | Closed-loop measure-evolve-report, per-skill success rates, human gates | ★★★ |
| 3 | **Interceptor** (sentrux) | ASM | 2-3 | 18-check scorecard, 47 iterations, 2x transport coverage, human-in-loop | ★★★ |
| 4 | **MUSE** | RBS | 3 | Hierarchical memory self-evolution, #1 Agent Company benchmark | ★★★★ |
| 5 | **Meta-Prompt** | RBS | 2-3 | Self-critique instructions, iteratively improved | ★★ |
| 6 | **UI-Genie** | CE | 3-4 | GUI Agent-Reward Model co-evolution, SOTA on AndroidControl/Lab/Arena | ★★★★ |
| 7 | **GenEnv** | CE | 3 | Agent-Environment co-training, auto-curriculum at capability boundary | ★★★ |
| 8 | **Mnemosyne** | MDE | 3 | 5-layer cognitive memory, 13000+ memories, fleet-level knowledge synthesis | ★★★ |

---

## 3. L2: Prompt/Output Refinement

### 3.1 PSEUDO 自进化 — 1-2 个结构因子 (25 个中约 15 个)

| # | Project | Mechanism | L Level | Evidence |
|---|---|---|:---:|---|
| 1 | **Reflexion** (noahshinn/reflexion) | RBS | 2 | Verbal RL, self-critique, 无持久化制品 |
| 2 | **Self-Refine** (madaan/self_refine) | RBS | 2 | Generate-Feedback-Refine loop, 无持久化 |
| 3 | **DSPy** (stanfordnlp/dspy) | PO | 2 | MIPROv2, BootstrapFewShot, prompt 空间搜索 |
| 4 | **EvoPrompt** | PO | 2 | GA + DE for prompts, 31 datasets, +25% |
| 5 | **TextGrad** | PO | 2 | Textual gradient descent on prompts |

---

## 4. L0-L1 & N/A: Infrastructure and Reference

| 子类别 | 数量 |
|---|---:|
| L1 External Feedback | ~25 |
| L0 Infrastructure | ~205 |
| N/A Reference | ~75 |
| [INSUFFICIENT] | ~107 |

### 4.1 Hall of Overpromising (声称自进化但实际 L0-L1)

| Project | Stars | 声称 | 实际 | L Level |
|---|---:|---|---|:---:|
| **AutoGPT** | 184K | "autonomous AI agent" | 固定 prompt 循环, 零自进化 | 0 |
| **Letta/MemGPT** | 12K+ | "self-improvement" | 记忆管理 | 1 |
| **LangChain/LangGraph** | 95K+ | — | 编排框架, 无进化原语 | 0 |
| **Genesis-Agent** | — | "self-aware cognitive AI" | Electron app 中的 LLM | 0 |
| **Cellium-Agent** | — | "Infinite Evolution Engine" | 重试循环 + 错误日志 | 0 |

---

## 5. 全量分布

| L Level | 数量 | 占比 | 项目类型 |
|:---:|---:|---:|---|
| **L4+** | ~21 | 4.5% | 真正的代码/架构自修改 |
| **L3** | ~14 | 3.0% | 记忆/技能持久化 |
| **L2** | ~23 | 4.9% | Prompt/output 自精炼 |
| **L1** | ~25 | 5.3% | 外部反馈，无自修改 |
| **L0** | ~205 | 43.6% | 基础设施/工具/无进化 |
| **N/A** | ~75 | 16.0% | 参考材料/列表/复本 |
| **[INSUFFICIENT]** | ~107 | 22.8% | 短卡片，信号不足以可靠分级 |
| **总计** | **470** | **100%** | |

### 关键比例 [KNOWN]

| 指标 | 数值 |
|---|---|
| 具备自进化能力 (L2+) | **~58 个** (12.3%) |
| 真正自主进化 (L3+) | **~35 个** (7.4%) |
| 代码级自修改 (L4+) | **~21 个** (4.5%) |
| 仅声称但不具备 (overpromising) | **~25 个** (5.3%) |

---

## 6. 机制类别 x L 等级交叉矩阵

| Mechanism Class | L4+ | L3 | L2 | L1 | 总计 |
|---|---:|---:|---:|---:|---:|
| PBE (Population-Based Evolution) | 4 | — | — | — | 4 |
| ASM (Agent Self-Modification) | 7 | 3 | — | — | 10 |
| RBS (Reflection-Based Self-Improvement) | 2 | 2 | 5 | 2 | 11 |
| PO (Prompt Optimization) | — | — | 4 | — | 4 |
| WLS (Weight-Level Self-Improvement) | 1 | — | — | — | 1 |
| CE (Co-Evolution) | 5 | 3 | 1 | — | 9 |
| MDE (Memory-Driven Evolution) | 2 | 6 | 3 | 5 | 16 |
| **总计** | **21** | **14** | **13** | **7** | **55** |

---

## 7. 关键洞察

### 7.1 三个机制级发现

1. **ASM 和 PBE 的 L4 集中度最高** [KNOWN]。ASM 的 10 个项目中有 7 个达到 L4，PBE 的 4 个全部达到 L4。这表明"修改自身代码"和"种群进化搜索"是达到最高进化等级的两条主要路径。

2. **MDE 是分布最广但等级最低的机制** [INFERRED]。16 个 MDE 项目分布在 L1-L4，无集中趋势。记忆本身不足以实现高等级进化——需要与 ASM 或 CE 结合才能提升。

3. **PO 是 L2 的天花板** [KNOWN]。4 个 PO 项目全部卡在 L2，没有向 L3 突破。Prompt 空间搜索本身是封闭的——优化 prompt 不改变系统结构。

---

## 8. 分级置信度声明

### 已知 (直接证据)
- 8 个雷达评分系统的 L 等级和 9 维评分 [KNOWN — radar-profiles.json]
- 12 个 TRUE 自进化项目的 5 结构因子验证 [KNOWN — raw-github-mechanisms.md]
- 11 个 Format A 深度卡的 MUVS 框架分析 [KNOWN — projects/]

### 推断
- Format B 项目的 L 等级基于核心模块分析中的描述性信号 [INFERRED]
- L0 类别中的 205 个项目基于其 category 标签批量分配 [INFERRED]

### 未验证
- 107 个 Format C 短卡片的实际进化能力 (可能有被低估的情况) [UNVERIFIED]
- 部分 L0 framework/tool 项目中可能存在未识别的进化原语 [UNVERIFIED]
- L4+ 项目的跨领域迁移能力声明 [UNVERIFIED]

---

## 引用来源

- [SEMM Framework] research/ranking-framework/README.md
- [Radar Profiles] research/ranking-framework/radar-profiles.json
- [Raw-GitHub Mechanisms] work/research/raw-github-mechanisms.md
- [Raw-GitHub Wiki Source] work/wiki/sources/raw-github-mechanism-analysis.md
- [Format A Cards] projects/darwin-godel-machine-dgm.md, projects/alphaevolve-landmark.md, and 9 others
- [Format B Cards] projects/01-opro-llm-as-optimizer.md through projects/52-*.md
- [107-Repo List] analysis/github-agent-evolution-repos.md
