# 代码 Agent 工具项目

> 核心方向：AI 编程助手、自主代码 Agent

---

## 1. OpenCodeInterpreter

| 字段 | 值 |
|------|---|
| **仓库** | OpenCodeInterpreter/OpenCodeInterpreter |
| **定位** | 开源代码生成 + 执行 + 迭代优化系统 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **生成-执行-优化循环**：代码生成 → 执行 → 反馈 → 迭代优化
- 多模型：DeepSeek-Coder (1.3B-33B), CodeLlama (7B-70B), StarCoder2 (3B-15B)
- **33B 模型 BigCode 排行榜 #1**
- Code-Feedback 数据集：68K 多轮交互（执行反馈 + 人类反馈）

### 技术栈
Python, PyTorch, HuggingFace Transformers, Gradio

### 关键方法

```
生成-执行-优化循环:
1. LLM 生成初始代码
2. 在沙箱中执行代码
3. 收集执行结果（输出/错误/测试结果）
4. LLM 基于反馈迭代优化代码
5. 重复直到满足要求或达到迭代上限
```

### 与 Self Evolve 的关系
**最直接相关的项目之一**。核心循环：生成代码 → 执行 → 接收反馈 → 迭代优化。这个生成-执行-优化周期是自我进化代码系统的基本模式。

---

## 2. CodeAct

| 字段 | 值 |
|------|---|
| **仓库** | xingyaoww/code-act |
| **会议** | ICML 2024 |
| **定位** | 用可执行代码统一 LLM Agent 动作空间 |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **代码即动作**：用可执行 Python 代码替代文本/JSON Agent 动作
- 比 Text/JSON 动作格式在 M3ToolEval 上高 20% 成功率
- **CodeActInstruct 数据集**：7K 多轮代码动作交互
- **CodeActAgent** 模型 (Mistral-7b, Llama-7b) + 集成 Python 执行引擎
- 容器化执行：每会话 Docker Jupyter kernel

### 技术栈
Python, PyTorch, vLLM, Docker, Jupyter, MongoDB, Kubernetes

### 关键方法

```
CodeAct 循环:
1. Agent 以 Python 代码形式发出动作
2. 代码在容器化 Jupyter 中执行
3. Agent 观察执行结果
4. Agent 动态修正下一轮动作代码
5. 代码→执行→观察→修正的闭环
```

### 与 Self Evolve 的关系
**直接使能自我进化 Agent 行为**。Agent 写代码、执行、观察结果、动态修正后续动作。代码生成、执行和环境反馈迭代优化的紧密集成是自主自我进化代码系统的核心模式。

---

## 3. Aider

| 字段 | 值 |
|------|---|
| **仓库** | paul-gauthier/aider (aider_ai__aider) |
| **定位** | 终端 AI 结对编程工具 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- 支持 Claude 3.7 Sonnet, DeepSeek, OpenAI o1/o3-mini/GPT-4o 及本地模型
- 映射整个代码库用于上下文感知编辑
- **100+ 编程语言**支持
- 深度 Git 集成，自动提交
- **88% 新代码由 Aider 自身编写**（"Singularity" 指标）
- 6.8M+ 安装，15B token/周处理量

### 技术栈
Python, CLI, Git, 多 LLM API

### 关键数据
- Singularity 指标：88% 新代码由 Aider 自己编写
- 语音转代码、图像/Web 上下文、linting/测试集成

### 与 Self Evolve 的关系
88% "Singularity" 指标（Aider 编写自己的代码）是实践中自我进化代码的引人注目的例子。虽然 Aider 主要是人机协作工具，但修改自身代码库的能力展示了软件工程中实际的自我进化。

---

## 4. Sweep

| 字段 | 值 |
|------|---|
| **仓库** | sweepai/sweep |
| **定位** | 将 GitHub Issue 自动转为 Pull Request 的 AI 编程助手 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- 将 GitHub Issue 自动转为代码变更
- 自主 PR 生成（从自然语言 bug 报告/功能请求）
- JetBrains 插件集成

### 技术栈
Python

### 与 Self Evolve 的关系
自动化从 Issue 描述生成代码变更，代表自主代码修改的早期形式。没有实现正式的进化循环，但展示了 LLM 驱动代码生成应用于真实代码库。

---

## 5. GPT-Engineer

| 字段 | 值 |
|------|---|
| **仓库** | gpt-engineer-org/gpt-engineer |
| **定位** | 自然语言→代码的实验性代码生成平台 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- 用自然语言指定软件，AI 编写和执行代码
- 用自然语言指令**改进现有代码库**
- 视觉支持（图片输入 + prompt）
- 可定制的 AI Agent 身份
- 基准评测框架 (APPS, MBPP)

### 技术栈
Python 3.10-3.12, OpenAI/Anthropic API, 支持开源模型, Poetry

### 与 Self Evolve 的关系
代码生成平台，可迭代改进现有代码。"改进现有代码"循环和基准驱动的 Agent 评估是迈向自我进化代码系统的踏脚石。

---

## 6. Continue

| 字段 | 值 |
|------|---|
| **仓库** | continuedev/continue |
| **定位** | 源码控制的 AI 代码审查检查，在 CI 中强制执行 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- AI 驱动的代码审查检查，作为 GitHub Status Check 运行
- 检查定义为简单 markdown 文件
- CLI 工具本地运行
- VS Code 扩展
- 发现问题时建议 diff（不仅标记）

### 技术栈
TypeScript/Node.js, VS Code 扩展, GitHub Actions

### 与 Self Evolve 的关系
自动化代码审查和 diff 建议，是一种形式的自动代码改进。但是 CI 驱动而非进化式，改进是一次性建议而非迭代进化方案。
