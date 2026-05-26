# Self-Refine - 迭代自我精炼

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | madaan/self-refine (参考实现) |
| GitHub URL | https://github.com/madaan/self-refine |
| Stars | ~600 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 反馈-精炼 |

## 概述
Self-Refine 是卡内基梅隆大学提出的迭代自我精炼框架，让大语言模型通过自我反馈循环逐步改进自己的输出。核心流程为：模型首先生成初始输出 -> 模型自我评估输出质量并提供反馈 -> 模型根据反馈重新生成改进版本 -> 重复直到满意或达到最大迭代次数。Self-Refine 无需额外训练，仅通过 In-Context Learning 即可工作，在对话生成、代码编写、数学推理等多种任务上展示了显著的改进效果。

## 核心特性
- **无需训练**: 纯推理时优化，不需要额外训练或微调
- **三阶段循环**: GENERATE -> REFLECT -> REFINE 的迭代循环
- **自我反馈**: 模型为自己生成的输出提供结构化反馈
- **多任务适用**: 对话、代码、数学、学术写作等多种任务
- **自适应停止**: 模型自行判断何时达到满意结果
- **Few-shot 引导**: 通过 few-shot 示例教会模型反馈和精炼模式

## 技术栈
- Python, OpenAI API / 开源 LLM API
- In-Context Learning, Chain-of-Thought

## 与 Self Evolve 的关联
Self-Refine 是 Self Evolve 系统中"反馈-精炼"模式的经典实现。它展示了即使不进行模型训练，纯粹通过推理时的自我反馈循环也可以实现输出质量的持续改进。这种"推理时进化"范式是自我进化系统的重要组成部分。其 GENERATE-REFLECT-REFINE 循环为构建自我进化系统提供了最小化的基本框架。

## 分类
- **类别**: 迭代自我精炼
- **标签**: self-refine, iterative-refinement, self-feedback, inference-time, no-training
