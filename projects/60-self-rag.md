# Self-RAG - 自反思检索增强生成
- **仓库**: AkariAsai/self-rag
- **GitHub**: https://github.com/AkariAsai/self-rag
- **Stars**: ~2K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-01
- **模式**: 反思记忆

## 概述
Self-RAG是一种自反思的检索增强生成方法，通过让模型学习自我反思token来决定何时检索、如何使用检索结果以及是否需要重新生成。该方法显著提升了模型的事实准确性和生成质量，无需在推理时依赖外部评估器。

## 核心特性
- 模型自主决定检索时机和检索内容的使用方式
- 通过反思token实现生成质量的自我评估
- 在多个基准上超越传统RAG方法和ChatGPT

## 技术栈
- Python, PyTorch, Hugging Face Transformers, vLLM

## 与 Self Evolve 的关联
Self-RAG的自我反思机制是AI自我进化中元认知能力的体现，模型能够评判自身输出的质量并决定改进策略，这种内省式自我改进能力是构建高级自我进化系统的关键组件。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-rag, retrieval-augmented, self-reflection, factuality, generation
