# LLM Self-Align - LLM 自对齐方法

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | SailCSharp/LLM-Self-Align |
| GitHub URL | https://github.com/SailCSharp/LLM-Self-Align |
| Stars | ~100 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 反馈-精炼 |

## 概述
LLM-Self-Align 是一个自对齐方法论项目，探索了大语言模型在最少人类干预下实现自我对齐的技术路线。项目整合了多种自对齐技术，包括自我指令生成 (Self-Instruct)、自我评估、自我精炼等方法，形成了一套完整的自对齐流程。核心思路是利用 LLM 自身的能力来生成对齐数据、评估输出质量，并通过迭代精炼逐步提升模型的对齐水平。

## 核心特性
- **Self-Instruct**: 模型自主生成多样化的指令数据
- **自我评估**: 模型评估自身输出的质量
- **自我精炼**: 基于自评估反馈迭代改进输出
- **最少人类干预**: 仅需极少量种子数据启动自对齐
- **多阶段流程**: 数据生成 -> 质量过滤 -> 微调训练 -> 迭代改进
- **可扩展**: 方法可应用于不同规模和架构的 LLM

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- OpenAI API / 开源 LLM
- Alpaca 数据格式

## 与 Self Evolve 的关联
LLM-Self-Align 为 Self Evolve 系统提供了"反馈-精炼"模式的完整方法论参考。它展示了从"最少人类输入"到"完全自主对齐"的技术路线，这正是自我进化系统的核心目标。Self-Instruct 的数据生成方法为自我进化系统的训练数据扩充提供了工具。

## 分类
- **类别**: LLM 自对齐
- **标签**: self-alignment, self-instruct, self-evaluation, iterative-refinement, llm
