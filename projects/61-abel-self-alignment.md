# GAIR-NLP Abel - 自对齐数学推理

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | GAIR-NLP/abel |
| GitHub URL | https://github.com/GAIR-NLP/abel |
| Stars | ~300 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
Abel 是由 Global AI Research Lab (GAIR-NLP) 开发的数学推理模型系列，专注于通过自我对齐技术提升大语言模型的数学能力。Abel 模型通过精心设计的数据合成和训练策略，在无需人类标注的数学推理数据上取得了优异表现。项目名称致敬数学家 Niels Henrik Abel，展示了 LLM 在形式推理任务上通过自我对齐可以达到的极限。

## 核心特性
- **数据合成**: 自动化生成高质量的数学推理训练数据
- **思维链推理**: 鼓励模型展示完整的数学推理过程
- **多难度级别**: 从基础算术到竞赛数学的多层次数据
- **模型系列**: 发布多个规模和能力的 Abel 模型
- **自对齐训练**: 使用模型自身生成的推理数据进行迭代训练
- **GSM8K/MATH 基准**: 在标准数学推理基准上取得 SOTA 表现

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- vLLM (推理), DeepSpeed (训练)

## 与 Self Evolve 的关联
Abel 展示了 Self Evolve 系统中"训练/数据循环"模式在垂直领域 (数学推理) 的应用。通过自动化数据合成和自对齐训练，模型可以在特定领域实现深度进化。这种领域特定的自我进化范式为构建专业化自我进化系统提供了参考。数学推理的可验证性 (答案是否正确) 为自我进化提供了天然的评估信号。

## 分类
- **类别**: 数学推理自对齐
- **标签**: math-reasoning, self-alignment, data-synthesis, chain-of-thought, abel
