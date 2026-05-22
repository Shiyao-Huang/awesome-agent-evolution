# BabyAGI - 任务驱动自主Agent
- **仓库**: yoheinakajima/babyagi
- **GitHub**: https://github.com/yoheinakajima/babyagi
- **Stars**: ~20,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-06
- **模式**: 进化/搜索循环

## 概述
BabyAGI 是一个轻量级的任务驱动自主Agent框架，通过持续的任务创建、优先级排序和执行循环来实现目标导向的自动化。它以极简的代码展示了自主Agent的核心运行机制——基于上一轮执行结果动态生成新任务，形成不断进化的任务链。

## 核心特性
- 任务生命周期管理：自动创建、优先级排序、执行和更新任务队列
- 三步循环架构：任务执行、结果评估与新任务生成形成持续运行循环
- 向量记忆系统：基于Pinecone等向量数据库存储执行上下文和任务历史
- 目标驱动的自我迭代：根据原始目标和已完成任务的结果，动态调整后续任务
- 极简实现：核心逻辑仅数百行代码，清晰展示了自主Agent的基本原理

## 技术栈
- Python 3.8+
- OpenAI API（LLM推理）
- Pinecone / Chroma / Weaviate（向量存储）
- LangChain（可选集成）

## 与 Self Evolve 的关联
BabyAGI 的任务自我生成循环是自我进化系统的基本模式之一——Agent通过执行任务获得反馈，基于反馈生成新的改进任务，这种持续循环的机制与进化搜索过程高度一致，为构建自我改进系统提供了最小可行的参考架构。

## 分类
- **类别**: 任务驱动自主Agent
- **标签**: babyagi, task-driven, autonomous, self-iteration, goal-oriented, minimal-agent
