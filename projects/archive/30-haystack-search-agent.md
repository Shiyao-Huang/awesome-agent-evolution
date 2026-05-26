# Haystack - NLP搜索与Agent框架
- **仓库**: deepset-ai/haystack
- **GitHub**: https://github.com/deepset-ai/haystack
- **Stars**: ~18,000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
Haystack 是一个开源的NLP框架，专注于构建搜索问答和Agent应用。它采用Pipeline（管道）架构，将文档处理、检索、生成等步骤串联为可定制的处理流水线，支持从传统搜索到RAG再到自主Agent的多种应用场景。

## 核心特性
- Pipeline 架构：将NLP处理步骤定义为可组合的管道节点，支持分支和循环
- 多种检索器：支持稀疏检索、稠密检索、混合检索等多种检索策略
- RAG 生产流水线：提供从文档处理到答案生成的端到端RAG解决方案
- Agent 模式：内置WebQA Agent和Function Calling Agent，支持工具调用和多步推理
- 企业级部署：支持REST API、Hayhooks服务和Kubernetes部署

## 技术栈
- Python 3.8+
- Elasticsearch / OpenSearch / Weaviate（检索后端）
- Hugging Face Transformers（模型集成）
- OpenAI / Anthropic / Cohere（LLM后端）
- FastAPI（API服务）

## 与 Self Evolve 的关联
Haystack 的Pipeline架构为自我进化系统提供了可组合的处理流水线模式——进化过程中的各个阶段（生成、评估、选择、变异）可以封装为Pipeline节点，通过灵活组合不同的进化策略来构建定制化的自我改进流程。

## 分类
- **类别**: NLP搜索与Agent框架
- **标签**: haystack, nlp, search, rag, pipeline, agent, deepset
