# Self-RAG - 自反思检索增强生成

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | AkariAsai/self-rag |
| GitHub URL | https://github.com/AkariAsai/self-rag |
| Stars | ~1,800 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 |
| 模式 | 反思记忆 |

## 概述
Self-RAG (Self-Reflective Retrieval-Augmented Generation) 是华盛顿大学提出的自反思检索增强生成框架。与传统的 RAG 方法不同，Self-RAG 让模型学会在生成过程中自我反思，自主决定何时检索、检索什么内容、以及检索结果是否有用。模型通过特殊的 reflection tokens 实现这一能力：[Retrieve] 决定是否检索，[IsRel] 判断检索结果相关性，[IsSup] 判断是否支持生成内容，[IsUse] 评估生成内容的有用性。Self-RAG 在多个基准上超越了标准 RAG 和非检索方法。

## 核心特性
- **自适应检索**: 模型自主决定何时需要检索外部知识
- **Reflection Tokens**: 四种反思标记实现精细化的检索和评估控制
- **自评估机制**: 模型自我评估检索结果的质量和相关性
- **任务感知**: 根据任务需求动态调整检索策略
- **训练框架**: 提供从数据生成到模型训练的完整流程
- **推理灵活**: 支持树搜索等高级推理策略

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- vLLM (推理), FastChat
- BM25, Contriever (检索器)

## 与 Self Evolve 的关联
Self-RAG 体现了 Self Evolve 系统中"反思记忆"模式的核心思想。模型的自我反思能力——判断自己是否需要外部知识、评估自己的回答质量——正是自我进化系统所需的元认知能力。Reflection Tokens 的设计为自我进化系统提供了一种结构化的自我评估语言，使得进化信号可以被精确捕获和优化。

## 分类
- **类别**: 自反思 RAG
- **标签**: self-rag, reflection, retrieval-augmented, self-evaluation, adaptive-retrieval
