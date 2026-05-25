# 2025-2026 新增项目补充

> 更新日期: 2026-05-22 | 来源: GitHub Search, arXiv, Twitter/X, HackerNews, 知乎

---

## 新增项目列表

### N1. Self-Improving Coding Agent

> GitHub: https://github.com/MaximeRobeyns/self_improving_coding_agent
> 语言: Python | 类型: 研究项目

极简自改进代码 Agent。面向**元改进任务**——Agent 改进自身代码。当前缺乏高级工具（tree-sitter, LSP），但核心概念清晰。

**Self Evolve 关联**: 直接实现"Agent 改进 Agent 代码"的理念，是 DGM/Gödel Agent 的极简版本。

### N2. Claw Code

> GitHub: https://github.com/ultraworkers/claw-code
> Stars: 48,000+ | 语言: Rust + Python

Claude Code 的**开源 Rust+Python 重写**。GitHub 历史上增长最快的仓库之一。支持基于经验的进化，AI Agent 可通过假设驱动的代码变更迭代改进自身。

**Self Evolve 关联**: 编码 Agent 的自进化基础设施，支持 Claude Code 和 Kiro CLI 集成。

### N3. SEW (Self-Evolving Agentic Workflows)

> 论文: arXiv:2505.18646 (2025年5月)
> 代码: 集成在 EvoAgentX 框架中

LLM 联合进化**工作流结构**（Agent 如何连接）和**Agent 提示**（每个 Agent 做什么），自动设计最优代码生成管线。

**Self Evolve 关联**: 工作流级自进化——不仅进化单个 Agent，而是进化整个多 Agent 工作流。

### N4. Agent S2 (Simular AI)

> GitHub: https://github.com/simular-ai/Agent-S
> 论文: arXiv:2504.00906 | 会议: COLM 2025 | 引用: 101+

组合式**通才-专家框架**，在3个计算机使用基准上超越 OpenAI CUA/Operator。使用 Mixture-of-Grounding 和主动式层级规划。

**Self Evolve 关联**: 通才-专家组合架构，Agent 可以根据任务动态选择专家模块。

### N5. Hermes Agent (完整版)

> GitHub: https://github.com/NousResearch/hermes-agent
> Stars: 64,000+ (2026年2月开源后3个月)
> 类型: 生产级 Agent 框架

**自 Curator 功能**: AI Agent 在后台自动运行，对自身 Skills 和 Memory 进行评级、裁剪与整合，完全无需人类介入。2026年 GitHub Trending 冠军。

**Self Evolve 关联**: 生产级自进化的标杆——64K stars 证明自进化 Agent 的商业化可行性。

### N6. AG2 (原 AutoGen) 自改进路线图

> GitHub: https://github.com/ag2ai/ag2 (Issue #2321)
> 类型: 路线图/规划

AG2 (原微软 AutoGen) 制定了内置自改进机制路线图：定义了 what to evolve, when to evolve, how to evolve, where to evolve 的策略框架。

**Self Evolve 关联**: 主流多 Agent 框架正式规划自进化能力，标志自进化从学术走向工业标准。

### N7. XMUDeepLIT 自进化 Agent 综述

> GitHub: https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents
> 类型: Survey 列表

厦门大学团队维护的自进化 Agent 资源列表，包含论文、基准和开源项目。与 EvoAgentX 的列表互补。

### N8. IBM Agentic Workflow Optimization 列表

> GitHub: https://github.com/IBM/awesome-agentic-workflow-optimization
> 类型: Survey 列表

IBM 维护的 Agent 工作流优化论文列表，涵盖 SEW、进化式多 Agent 系统等方向。

### N9. Awesome AI Agents 2026

> GitHub: https://github.com/caramaschiHG/awesome-ai-agents-2026
> Stars: 300+ 资源 | 类型: 综合列表

2026年最全面的 AI Agent 资源列表，20+ 分类，每月更新。

### N10. Datawhale hello-agents 自进化章节

> GitHub: https://github.com/datawhalechina/hello-agents
> 类型: 中文教程

Datawhale 维护的 Agent 教程，Extra10 章节专门讲解 Agent 自进化：上下文、记忆、技能、工具、工作流、代码或模型参数的持续更新。

### N11. Controlled Self-Evolution

> 论文: arXiv:2601.07348 (2026年1月)

迭代式"生成-验证-精炼"循环，用于算法代码优化。

### N12. Software Self-Extension with SelfEvolve

> 论文: arXiv:2604.16314 (2026年4月)

Agent 架构实现软件自扩展——自动化代码生成加速开发时间。

---

## 2025-2026 关键趋势

### 1. 自进化从学术走向生产

| 阶段 | 时间 | 代表 |
|------|------|------|
| 学术概念 | 2023-2024 | Self-Refine, Reflexion |
| 框架实现 | 2024-2025 | ADAS, DGM, EvoAgentX |
| **生产部署** | **2025-2026** | **Hermes (64K★), Claw Code (48K★), EvoMap (7.3K★)** |

### 2. 编码 Agent 是自进化的主战场

- Claw Code (48K★): 自进化编码 Agent CLI
- Hermes (64K★): 自 Curating Skills + Memory
- AutoResearchClaw: 自进化科研管线
- SE-Agent (80% SWE-bench): 轨迹级自进化

### 3. 中国团队活跃度显著上升

- EvoAgentX: 自进化生态框架 (2K★)
- AgentEvolver (阿里): 工业化自进化训练
- XMUDeepLIT (厦大): 自进化综述
- Datawhale: 自进化教程
- WebRL (清华): Web Agent 自进化

### 4. 2026 新关键词

| 2024 关键词 | 2026 新关键词 |
|-------------|--------------|
| self-refine | self-curate (Hermes) |
| self-reflection | self-challenge (SCA) |
| self-debug | self-extension (SelfEvolve) |
| evolution | gene-based evolution (EvoMap GEP) |
| prompt optimization | workflow co-evolution (SEW) |

---

## 本地新增 repos

```
maximerobeyns__self_improving_agent    — Self-Improving Coding Agent
xmudeeplit__awesome_self_evolving      — 厦大自进化 Agent 综述
rucaibox__awesome_agent_harness        — Agent Harness 综述
ibm__awesome_agentic_workflow          — IBM 工作流优化列表
```
