# Semantic Kernel - 企业级AI编排
- **仓库**: microsoft/semantic-kernel
- **GitHub**: https://github.com/microsoft/semantic-kernel
- **Stars**: ~22,000
- **语言**: C# / Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
Semantic Kernel 是微软开发的企业级AI编排SDK，提供将大语言模型能力集成到现有应用中的标准化方法。它采用函数调用和管道（Pipeline）的组合模式，支持跨C#、Python、Java多语言的统一开发体验，是企业构建生产级AI应用的重要基础设施。

## 核心特性
- 多语言SDK：提供C#、Python、Java三种语言的统一SDK，保持API一致性
- 插件（Plugin）架构：将AI能力封装为可复用的插件，支持自定义和预置插件
- 规划器（Planner）：自动将用户目标分解为可执行的函数调用序列
- 向量存储抽象：提供统一的向量存储接口，支持多种向量数据库后端
- 企业级特性：内置可观测性、安全过滤、遥测和生产部署最佳实践

## 技术栈
- C# (.NET 6+) / Python 3.8+ / Java 11+
- OpenAI / Azure OpenAI（LLM后端）
- 多种向量数据库（Qdrant、Pinecone、Weaviate等）
- Azure AI Services（企业集成）
- Telemetry / OpenTelemetry（可观测性）

## 与 Self Evolve 的关联
Semantic Kernel 的规划器（Planner）能力为自我进化系统提供了任务自动分解和执行的基础设施，其插件化架构使得新习得的能力可以即时注册和复用，为构建模块化的自我进化系统提供了企业级的设计参考。

## 分类
- **类别**: 企业级AI编排SDK
- **标签**: semantic-kernel, microsoft, enterprise, plugin, planner, multi-language, orchestration
