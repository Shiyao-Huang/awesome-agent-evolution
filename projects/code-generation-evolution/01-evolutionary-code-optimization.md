# 进化代码优化项目

> 核心方向：LLM + 进化算法自动发现和优化代码

---

## 1. OpenEvolve

| 字段 | 值 |
|------|---|
| **仓库** | algorithmicsuperintelligence/openevolve |
| **定位** | 最先进的开源进化编程 Agent，将 LLM 变为自主代码优化器 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **MAP-Elites 品质多样性进化** + 岛屿架构
- **LLM 集成**：智能回退策略，支持 OpenAI/Gemini/本地模型
- **Artifact 侧通道**：错误反馈改进后续迭代
- **元进化**：能进化自身 prompt 以获得更好表现
- **多语言支持**：Python, Rust, R, Metal shaders

### 关键成果
- 2-3x 硬件加速优化
- SOTA 圆填充算法发现
- GPU kernel 自动发现

### 技术栈
Python 3.10+, OpenAI 兼容 API, Docker, YAML 配置

### 与 Self Evolve 的关系
代码本身是进化实体。LLM 生成变异，品质多样性算法选择和归档解决方案，系统迭代发现新算法。元进化特性（进化自身 prompt）增加了一层自我指涉改进。

---

## 2. CodeEvolve

| 字段 | 值 |
|------|---|
| **仓库** | inter-co/science-codeevolve |
| **定位** | LLM + 进化算法框架，发现和优化高性能代码方案 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **岛屿遗传算法**：分布式种群 + 迁移拓扑
- **模块化进化算子**：灵感交叉、元 prompt 探索、深度挖掘
- **MAP-Elites 集成**：品质多样性优化（Grid + CVT 变体）
- **SEARCH/REPLACE diff 变异**：不是全文件重生成
- **Prompt 共进化**：prompt 和解决方案共同进化

### 技术栈
Python, Conda, OpenAI 兼容 API, 支持开源模型 (Qwen, LLaMA)

### 与 Self Evolve 的关系
代码是基因型，经历选择、交叉、变异、迁移。prompt 与解决方案的共进化机制，以及元 prompt（LLM 重写自身指令）是自我指涉改进的核心范例。

---

## 3. ReEvo (Reflective Evolution)

| 字段 | 值 |
|------|---|
| **仓库** | ai4co/reevo |
| **会议** | NeurIPS 2024 |
| **定位** | LLM 作为超启发式 (Hyper-Heuristics) 的反射进化框架 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **Language Hyper-Heuristics (LHHs)** 概念
- **反射进化**：模拟人类专家设计方法并大规模扩展
- 改进多种算法：神经组合优化、GA、ACO、GLS
- 求解 TSP, CVRP, OP, MKP, BPP, DPP

### 技术栈
Python 3.12+, Hydra YAML 配置, uv 依赖管理

### 与 Self Evolve 的关系
直接进化代码（启发式函数）。LLM 生成、评估、迭代改进启发式代码——教科书级别的自我进化代码生成。

---

## 4. LLaMEA

| 字段 | 值 |
|------|---|
| **仓库** | XAI-liacs/LLaMEA |
| **定位** | 大语言模型进化算法，自动发现优化算法 |
| **奖项** | GECCO 2025 Silver Humies Award |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **(1+1) 进化循环**：LLM 生成 → 评测 → 反馈 → 变异
- **LLaMEA-HPO**：集成 SMAC 做超参优化，减少 LLM 数值调参负担
- **小生境策略**：适应度共享、清除机制维持多样性
- **统一 diff 模式**：高效的补丁式代码编辑
- 发表于 IEEE TEVC

### 技术栈
Python 3.11+, OpenAI API, Gemini API, Ollama, SMAC, IOHexperimenter

### 与 Self Evolve 的关系
算法代码是进化实体。(1+1) 循环中 LLM 生成算法、基准评测、反馈驱动下次变异，完全自主发现新方案。

---

## 5. FunSearch

| 字段 | 值 |
|------|---|
| **仓库** | google-deepmind/funsearch |
| **发表** | Nature 2023 |
| **定位** | LLM + 进化算法在程序搜索中发现数学新知 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- 发现新的 cap set、admissible set、bin packing 启发式
- 进化算法 + LLM 程序操作
- **里程碑**：首次 LLM 系统做出发表在 Nature 的科学发现
- Jupyter notebooks 可在 Google Colab 运行

### 技术栈
Python, Jupyter, Google Colab

### 与 Self Evolve 的关系
里程碑式工作。进化整个程序（函数），LLM 作为变异/交叉算子。直接证明代码可被进化用于解决开放数学问题。

---

## 6. EvoPrompt

| 字段 | 值 |
|------|---|
| **仓库** | beeevita/EvoPrompt |
| **会议** | ICLR 2024 |
| **定位** | 进化算法驱动的 Prompt 优化器 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- 实现遗传算法 (GA) 和差分进化 (DE) 用于 prompt 进化
- **无梯度、无参数**方法，LLM 作为进化算子
- 31 个数据集测试，BBH 上超越人工 prompt 达 25%
- 支持 GPT-3.5, GPT-4, Alpaca

### 技术栈
Python, OpenAI API

### 与 Self Evolve 的关系
在 prompt 空间中自我进化的经典案例。使用 LLM 驱动的进化算子（变异、交叉）迭代改进 prompt，是自我进化系统的基础工作。
