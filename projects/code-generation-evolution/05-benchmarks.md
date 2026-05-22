# 评测基准项目

> 核心方向：代码生成评测数据集和工具

---

## 1. CodeContests (AlphaCode 训练数据集)

| 字段 | 值 |
|------|---|
| **仓库** | google-deepmind/code_contests |
| **状态** | 已归档 (2024-12-06) |
| **论文** | Science — "Competition-level code generation with AlphaCode" |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- 竞赛编程数据集：来自 Aizu, AtCoder, CodeChef, Codeforces, HackerEarth
- 包含测试用例、正确/错误的人类解答
- **训练集 ~13K 道题目**
- AlphaCode 训练数据（发表于 Science）

### AlphaCode 关键成果
- **AlphaCode 1**：Codeforces 竞赛前 54.3%
- **AlphaCode 2**（Gemini 驱动）：解决 43% 竞赛题目（vs AlphaCode 1 的 25%）

### 技术栈
C++, Python, Bazel, Protocol Buffers, Riegeli 格式

### 与 Self Evolve 的关系
AlphaCode 的训练数据集。AlphaCode 开创了"生成百万候选解→执行过滤→选择最优"的范式。这个生成-测试-选择范式是使用执行作为适应度信号的自我进化代码系统的基础。

---

## 2. Tabby

| 字段 | 值 |
|------|---|
| **仓库** | tabbyml/tabby |
| **定位** | 自托管 AI 编程助手，GitHub Copilot 的开源替代 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 自包含，无需外部 DBMS 或云服务
- OpenAPI 接口
- **RAG 代码补全**：仓库级上下文
- Answer Engine：团队知识管理
- VS Code / JetBrains / Vim 扩展

### 技术栈
Rust, Python, Docker, 支持 StarCoder, CodeGemma, CodeQwen, Codestral

### 与 Self Evolve 的关系
主要是 AI 辅助代码补全和聊天工具。帮助开发者更快编写代码但不自主进化或优化代码。作为代码生成基础设施，进化系统可能在其上构建。

---

## 3. EvoCodeBench

| 字段 | 值 |
|------|---|
| **仓库** | seketeam/EvoCodeBench |
| **会议** | NeurIPS 2024 |
| **定位** | 自进化的代码生成评测基准 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- **随时间进化**：首版 EvoCodeBench-2403 (2023.12-2024.2)
- 275 样本来自 25 个真实世界仓库
- 评测 Pass@k（功能正确性）和 Recall@k（依赖召回）
- **仓库级代码生成**评测
- 10 个流行 LLM 评测排行榜

### 技术栈
Python, OpenAI API, vLLM, Conda

### 与 Self Evolve 的关系
评测基准而非自我进化系统。"进化"体现在基准版本随时间更新以反映真实代码演化。仓库级代码生成评测与衡量自我进化代码质量相关。
