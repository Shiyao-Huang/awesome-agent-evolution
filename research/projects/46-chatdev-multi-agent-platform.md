# ChatDev: 零代码多智能体协作平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/OpenBMB/ChatDev |
| Star | 26k+ |
| 技术栈 | Python, LLM API, React (前端) |
| 许可证 | Apache 2.0 |
| 开发者 | OpenBMB（清华大学 THUNLP） |
| 论文 | Communicative Agents for Software Development (ACL 2024), Multi-Agent Collaboration via Evolving Orchestration (NeurIPS 2025) |

## 项目简介

ChatDev 是清华大学 OpenBMB 团队开发的**多智能体协作平台**。从最初专注于软件开发的"虚拟软件公司"演变为零代码多 Agent 编排平台。

**ChatDev 2.0 (DevAll)** 是零代码多 Agent 编排平台，用户通过简单配置即可构建和执行自定义多 Agent 系统，支持数据可视化、3D 生成、深度研究等场景。

**ChatDev 1.0 (Legacy)** 模拟虚拟软件公司，通过 CEO、CTO、程序员等角色 Agent 参与专业化研讨会，自动化整个软件开发生命周期。

核心理念：**Communicative Agent Collaboration** — 通过角色扮演和语言交互实现多 Agent 高效协作。

## 目录结构

```
chatdev/
├── chatdev/                    # ★ 核心框架
│   ├── agents/                 # Agent 定义
│   ├── chat_chain/             # ★ 对话链（研讨会模式）
│   ├── environment/            # 环境定义
│   ├── model/                  # LLM 接口
│   ├── phases/                 # ★ 开发阶段
│   │   ├── code_generation.py  # 代码生成阶段
│   │   ├── code_testing.py     # 代码测试阶段
│   │   ├── code_review.py      # 代码审查阶段
│   │   └── environment.py      # 环境配置阶段
│   ├── statistics/             # 统计模块
│   └── utils/                  # 工具函数
├── frontend/                   # ★ Web 前端（ChatDev 2.0）
├── MultiAgentEbook/            # 多 Agent 论文集
├── assets/                     # 资源文件
├── macnet/                     # ★ MacNet 分支（多 Agent 协作网络）
├── puppeteer/                  # ★ Puppeteer 分支（可学习编排器）
└── wiki.md                     # 文档
```

## 核心模块分析

### 1. 虚拟软件公司模式

ChatDev 1.0 模拟虚拟软件公司的角色分工：

```
用户需求
    ↓
[CEO Agent] ──产品决策──> 需求分析
    ↓
[CTO Agent] ──技术决策──> 架构设计
    ↓
[Programmer Agent] ──编码──> 源代码
    ↓
[Art Designer] ──界面──> GUI 设计
    ↓
[QA Engineer] ──测试──> 测试报告
    ↓
[CTO Review] ──审查──> 代码审查
    ↓
[CEO Finalize] ──确认──> 最终交付
```

### 2. 对话链（Chat Chain）

`chat_chain/` 实现 Agent 间的多轮对话协作：
- 每个阶段（Phase）由两个角色 Agent 进行对话
- 对话直到达成共识或达到最大轮次
- 支持"自我反思"和"角色反转"机制

### 3. MacNet — 多 Agent 协作网络

**MacNet** (Multi-Agent Collaboration Networks) 分支使用**有向无环图（DAG）**组织 Agent 协作：
- 支持多种拓扑结构（链式、树状、网状）
- 可扩展到 1000+ Agent 而不超出上下文限制
- 适用于逻辑推理、数据分析、故事生成等多种场景

### 4. Puppeteer — 可学习编排器

**Puppeteer** 分支（NeurIPS 2025 论文）引入**强化学习驱动的中央编排器**：
- 使用 RL 优化 Agent 的激活和排序
- 动态构建高效的上下文感知推理路径
- 在提高推理质量的同时降低计算成本

### 5. 迭代经验精炼（IER）

**Iterative Experience Refinement** 机制：
- Instructor 和 Assistant Agent 从历史任务中积累快捷经验
- 经验的获取、利用、传播和消除
- 减少重复错误，提升新任务效率

## 技术亮点

1. **虚拟公司范式**：用角色扮演实现软件开发生命周期自动化
2. **NeurIPS 2025**：Puppeteer 可学习编排器论文获 NeurIPS 接收
3. **零代码平台**：ChatDev 2.0 支持可视化配置多 Agent 系统
4. **DAG 协作**：MacNet 支持多种拓扑结构的 1000+ Agent 协作
5. **经验积累**：IER 机制让 Agent 从历史中学习
6. **学术影响力**：ACL 2024 + NeurIPS 2025，清华大学出品

## 与 Self-Evolve 关联

| 维度 | ChatDev 贡献 |
|------|-------------|
| 多 Agent | **虚拟公司 + MacNet + Puppeteer** 三代多 Agent 协作演进 |
| 自我改进 | Puppeteer 的 RL 驱动编排器 — 自动学习最优 Agent 序列 |
| 经验学习 | IER 迭代经验精炼 — 从历史任务中积累和传播经验 |
| 编排 | 从链式→DAG→可学习编排器的编排架构演进 |
| 启示 | "通过多 Agent 协作产生涌现能力"的模式可启发 Self-Evolve 的 Agent 编排设计 |

## 参考资料

- [ChatDev GitHub](https://github.com/OpenBMB/ChatDev)
- [Communicative Agents for Software Development](https://arxiv.org/abs/2307.07924) (ACL 2024)
- [Multi-Agent Collaboration via Evolving Orchestration](https://arxiv.org/abs/2505.19591) (NeurIPS 2025)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/openbmb__chatdev`（指向 `repos/openbmb__chatdev` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/openbmb__chatdev --index-only --skip-git --name ChatDev`。
- **知识图谱规模**：待分析。
- **查询语句**：`chat chain phase agent role collaboration orchestration puppeteer`。
- **核心执行流程候选**：
  - ChatChain → Phase → Role Dialog → Consensus
  - Puppeteer Orchestrator → RL Select Agents → Execute
- **关键符号/文件**：
  - `chat_chain/`（`chatdev/chat_chain/`）
  - `phases/`（`chatdev/phases/`）
  - `agents/`（`chatdev/agents/`）
- **调用关系上下文**：
  - ChatChain 按 Phase 顺序驱动角色对话。
  - Puppeteer 分支使用 RL 训练的编排器动态选择和排序 Agent。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
