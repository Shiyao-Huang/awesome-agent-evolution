# Sheared LLaMA - 数据剪枝与对齐

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | princeton-nlp/LLM-Shearing |
| GitHub URL | https://github.com/princeton-nlp/LLM-Shearing |
| Stars | ~400 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
Sheared LLaMA 是普林斯顿 NLP 团队提出的高效模型对齐方法，通过结构化剪枝和动态数据加载，从大型预训练模型中高效地"剪切"出小型对齐模型。该方法不需要从头训练小模型，而是通过 LLM 剪枝 + 领域自适应继续训练，在保持性能的同时大幅降低训练成本。项目展示了数据质量在模型对齐中的关键作用，以及如何通过智能数据选择来提升对齐效率。

## 核心特性
- **结构化剪枝**: 从大模型中移除注意力头和 FFN 中间维度
- **动态数据加载**: 根据模型当前能力动态调整训练数据分布
- **领域自适应**: 剪枝后通过继续训练恢复和增强特定领域能力
- **成本效率**: 比从头训练节省 50%+ 计算成本
- **质量保持**: 剪枝后模型在基准测试上保持接近原始模型的性能

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- FlashAttention, DeepSpeed

## 与 Self Evolve 的关联
Sheared LLaMA 展示了 Self Evolve 系统中"训练/数据循环"模式的模型架构进化维度。自我进化不仅可以通过数据和算法进行，还可以通过模型结构优化来实现。动态数据加载策略为自我进化系统提供了数据选择的参考方案——根据模型当前弱点自适应地调整训练数据。

## 分类
- **类别**: 高效模型对齐
- **标签**: pruning, model-compression, alignment, data-selection, efficient-training
