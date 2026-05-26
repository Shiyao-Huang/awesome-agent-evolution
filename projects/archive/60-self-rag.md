# Self-RAG - 自反思检索增强生成
- **仓库**: AkariAsai/self-rag
- **GitHub**: https://github.com/AkariAsai/self-rag
- **Stars**: 2000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-03
- **模式**: 反思记忆 → 反馈-精炼

## 概述
Self-RAG（Self-Reflective Retrieval-Augmented Generation）让 LLM 学会自我反思是否需要检索、检索结果是否有用、生成是否一致，实现按需检索和自我验证。

## 核心特性
- 自我反思 tokens 控制检索行为
- 按需检索（非固定检索）
- 生成结果自我验证
- 检索+生成+批评三位一体

## 技术栈
- Python, PyTorch, Transformers, vLLM

## 与 Self Evolve 的关联
Self-RAG 的自我反思机制是自我进化系统中"元认知"能力的体现：模型学会判断自己何时需要外部信息、如何验证自己的输出。

## 分类
- **类别**: 自反思检索增强
- **标签**: self-rag, reflection, retrieval, self-verification
