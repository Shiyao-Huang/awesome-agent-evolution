# 综述与资源库项目

> 核心方向：论文索引、综述、工具集合

---

## 1. Self-Evolving-Agents 综述

| 字段 | 值 |
|------|---|
| **仓库** | CharlesQ9/Self-Evolving-Agents |
| **论文** | "A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence" |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **结构化分类学**：
  - **进化什么**：模型、上下文、工具、架构
  - **何时进化**：测试时内/间
  - **如何进化**：基于奖励、模仿、种群
- 涵盖单 Agent 和多 Agent 系统优化
- 评测基准：SWE-bench, OSWorld, WebArena, AgentBench
- 未来方向：个性化 Agent、泛化、安全、多 Agent 生态

### 关键引用系统
AlphaEvolve, Darwin Gödel Machine, EvoAgentX, SEW, AgentCoder, EvoFlow, AFlow, ScoreFlow

### 与 Self Evolve 的关系
**最直接相关的综述**。提供自我进化 Agent 系统的完整分类学，涵盖代码级进化（AlphaEvolve, SEW, AgentCoder）、Agent 架构进化（EvoFlow, AFlow）和多 Agent 共进化。

---

## 2. LLM4EC

| 字段 | 值 |
|------|---|
| **仓库** | wuxingyu-ai/LLM4EC |
| **综述** | IEEE TEVC |
| **定位** | LLM + 进化计算的跨学科研究资源 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **双向分类**：LLM 增强的 EA + EA 增强的 LLM
- 涵盖：黑箱优化、算法生成、prompt 工程、架构搜索、模型合并/剪枝
- 应用领域：代码生成、软件工程、神经架构搜索、自然科学
- 附带代码链接以支持复现

### 与 Self Evolve 的关系
核心论题是 LLM 与进化算法的协同。LLM 辅助优化算法生成、EA 基础代码生成、进化 prompt 优化都直接与自我进化代码系统相关。

---

## 3. LLM4Opt (LLM4AlgorithmDesign)

| 字段 | 值 |
|------|---|
| **仓库** | FeiLiu36/LLM4Opt |
| **综述** | ACM Computing Surveys 2025 |
| **定位** | LLM 用于算法设计/优化的论文和资源集合 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- 组织为 **4 个范式**：LLM as Optimizer, Predictor, Extractor, Designer
- 综合论文列表跨越 2022-2025，覆盖 Nature, NeurIPS, ICML, ICLR 等
- 跟踪平台、课程、教程、竞赛、特刊

### 与 Self Evolve 的关系
直接涵盖 LLM 驱动的算法进化、启发式搜索、算法代码生成和自动化算法设计。"LLM as Designer" 范式是自我进化代码的核心。

---

## 4. LLM_EA

| 字段 | 值 |
|------|---|
| **仓库** | xiaofangxd/LLM_EA |
| **定位** | "When LLMs Meet Evolutionary Algorithms" 论文集 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- **双向分类**：LLM for EA vs. EA for LLM
- 涵盖：Prompt 进化 (PromptBreeder, EvoPrompting)、神经架构搜索、知识融合、模型合并
- 包括 LLM 引导进化和品质多样性优化的最新论文

### 与 Self Evolve 的关系
主要是参考文献列表而非活跃框架。涵盖相关主题（EvoPrompting、进化 prompt 搜索、代码级 NAS），但为信息性而非实现自我进化。

---

## 5. Awesome-Code-LLM

| 字段 | 值 |
|------|---|
| **仓库** | codefuse-ai/Awesome-Code-LLM |
| **综述** | TMLR — "Unifying the Perspectives of NLP and Software Engineering" |
| **定位** | 代码 LLM 研究的综合索引 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 涵盖：代码生成、修复、翻译、测试、搜索、漏洞检测
- 按下游任务组织：生成、RAG、排序、修复、测试、模糊测试、反编译
- 包括综述、模型（基座/微调/RL）、数据集、基准
- 由 CodeFuse/蚂蚁集团维护，持续更新至 2026

### 与 Self Evolve 的关系
主要是代码 LLM 能力的目录。涵盖代码生成、程序修复、代码 Agent 等作为自我进化代码系统的构建块的相关主题。
