# 代码生成模型项目

> 核心方向：开源代码 LLM 基础模型

---

## 1. CodeGen

| 字段 | 值 |
|------|---|
| **仓库** | salesforce/CodeGen |
| **会议** | ICLR 2023 |
| **定位** | 对话式多轮程序合成开放 LLM |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 多尺寸：350M, 1B, 3B, 7B, 16B 参数
- CodeGen2.5 以 7B 参数超越 16B 模型
- **多轮程序合成**：对话式跨轮次代码生成
- 强 infill 采样能力 (CodeGen2.0+)

### 技术栈
Python, JAX (Jaxformer), HuggingFace Transformers

### 与 Self Evolve 的关系
基础自回归代码生成模型。多轮合成能力使对话式迭代优化成为可能。

---

## 2. Magicoder

| 字段 | 值 |
|------|---|
| **仓库** | ise-uiuc/magicoder |
| **会议** | ICML 2024 |
| **定位** | OSS-Instruct 驱动的代码生成模型 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- **OSS-Instruct**：用真实开源代码片段作为种子生成低偏差、高质量指令数据
- Magicoder-S-DS-6.7B 在 HumanEval 达 76.8 pass@1，超越 GPT-3.5-turbo
- 两个数据集：Magicoder-OSS-Instruct-75K、Magicoder-Evol-Instruct-110K
- 启发了 Google CodeGemma、OpenCodeInterpreter 等

### 技术栈
Python, PyTorch, HuggingFace, DeepSeek-Coder (基座)

### 关键方法

```
OSS-Instruct 流程:
1. 采样真实开源代码片段作为种子
2. LLM 基于种子生成多样化编程指令
3. 生成低偏差、高质量的 (指令, 代码) 训练对
4. 微调基础代码模型
```

### 与 Self Evolve 的关系
Evol-Instruct 方法论（进化指令以创建更难训练数据）是一种进化式训练数据生成方法。用开源代码作为种子引导更丰富数据，与自我进化数据管道有平行之处。

---

## 3. WizardCoder

| 字段 | 值 |
|------|---|
| **仓库** | nlpxucan/WizardLM (WizardCoder 子目录) |
| **会议** | ICLR 2024 |
| **定位** | Evol-Instruct 驱动的代码 LLM |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **Code Evol-Instruct**：将 Evol-Instruct 方法专门适配编程任务
- WizardCoder-33B-V1.1 在 HumanEval 达 79.9 pass@1，超越 ChatGPT 3.5 和 Gemini Pro
- 多尺寸：1B, 3B, 7B, 13B, 15B, 33B, 34B
- 基于 StarCoder 和 CodeLLama 基座

### 技术栈
Python, PyTorch, HuggingFace Transformers, DeepSpeed, vLLM

### 关键方法

```
Code Evol-Instruct:
1. 从简单代码指令开始
2. 系统性进化为更复杂、多样、挑战性的变体
3. 进化操作：增加约束、深化学科知识、增加推理步骤等
4. 用进化后的高质量数据微调代码模型
```

### 与 Self Evolve 的关系
Evol-Instruct 技术是直接进化式的：从简单代码指令开始，系统性进化为更复杂变体。这种进化式数据生成过程是自我进化 AI 系统的核心概念。

---

## 4. DeepSeek-Coder

| 字段 | 值 |
|------|---|
| **仓库** | deepseek-ai/DeepSeek-Coder |
| **定位** | 从头训练的 SOTA 开源代码 LLM |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- 从头在 **2 万亿 token** 上训练（87% 代码 + 13% 自然语言）
- 多尺寸：1B, 5.7B, 6.7B, 33B
- 16K 上下文窗口 + fill-in-the-middle
- **仓库级代码补全**：理解跨文件依赖
- SOTA：DeepSeek-Coder-7B 匹配 CodeLlama-34B

### 技术栈
Python, PyTorch, HuggingFace, DeepSpeed, vLLM

### 与 Self Evolve 的关系
强大的基础代码生成模型，被 Magicoder、OpenCodeInterpreter、WizardCoder 等下游系统使用。仓库级理解和项目级补全能力对需要理解和修改整个代码库的自我进化系统至关重要。

---

## 5. StarCoder2

| 字段 | 值 |
|------|---|
| **仓库** | bigcode-project/starcoder2 |
| **定位** | 600+ 语言训练的开放代码生成模型 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 三尺寸：3B, 7B, 15B 参数
- 在 The Stack v2 数据集上训练，覆盖 **600+ 编程语言**
- 16,384 token 上下文窗口 + 4,096 滑动窗口注意力
- Grouped Query Attention 架构
- 面向代码补全（非指令跟随），需微调用于对话

### 技术栈
Python, PyTorch, HuggingFace, PEFT/LoRA, TRL

### 与 Self Evolve 的关系
基础代码模型，主要作为其他系统（如 OpenCodeInterpreter-SC2）的基座。LoRA 微调基础设施支持模型适应。

---

## 6. CodeGeeX

| 字段 | 值 |
|------|---|
| **仓库** | THUDM/CodeGeeX |
| **定位** | 清华 130 亿参数多语言代码生成模型 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 130 亿参数，在 850B+ token 上预训练
- 覆盖 **20+ 编程语言**
- 跨语言代码翻译
- HumanEval-X 评测基准（820 道人工题目，5 种语言）
- VS Code + JetBrains 插件

### 技术栈
Python, PyTorch, DeepSpeed, MindSpore, Megatron-LM

### 与 Self Evolve 的关系
基础代码生成模型，提供原始代码生成能力。本身不实现进化或自我改进机制。

---

## 7. CodeBERT

| 字段 | 值 |
|------|---|
| **仓库** | microsoft/CodeBERT |
| **定位** | 微软代码理解预训练模型家族 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- **CodeBERT**：6 种语言的 NL-PL 预训练模型
- **GraphCodeBERT**：引入代码数据流结构
- **UniXcoder**：统一跨模态预训练（理解+生成）
- **CodeReviewer**：自动化代码审查
- **CodeExecutor**：课程学习预测执行轨迹
- **LongCoder**：稀疏高效 Transformer 用于长程补全

### 技术栈
Python, PyTorch, HuggingFace, RoBERTa 架构

### 与 Self Evolve 的关系
基础模型家族。CodeReviewer 涉及自动代码改进，CodeExecutor 建模程序执行，但主要是预训练模型库而非自主进化系统。

---

## 8. SQLCoder

| 字段 | 值 |
|------|---|
| **仓库** | defog-ai/sqlcoder |
| **定位** | 自然语言→SQL 的领域专用代码生成模型 |
| **Self Evolve 关联** | ⭐ 基础 |

### 核心特性
- 在 text-to-SQL 任务上**超越 GPT-4**
- 多尺寸：7B, 34B, 70B
- 20,000+ 人工策展问题，10 种数据库 schema
- 支持 NVIDIA GPU 和 Apple Silicon 推理

### 技术栈
Python, PyTorch, Transformers, LLaMA 架构, llama.cpp

### 与 Self Evolve 的关系
领域专用的代码生成模型（text-to-SQL），自动生成 SQL 但不进化或自我改进。作为自动化代码生成的狭窄示例。
