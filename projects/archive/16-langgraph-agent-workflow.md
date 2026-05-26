# LangGraph - 图结构Agent编排
- **仓库**: langchain-ai/langgraph
- **GitHub**: https://github.com/langchain-ai/langgraph
- **Stars**: ~25,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
LangGraph 是 LangChain 生态中的图结构Agent编排框架，用于构建具有状态管理和循环逻辑的复杂Agent工作流。它将Agent的执行流程建模为有向图，支持条件分支、循环迭代和并行执行，是构建生产级Agent应用的关键基础设施。

## 核心特性
- 图结构工作流：将有状态的Agent执行流程建模为节点和边组成的有向图
- 循环与条件分支：支持Agent的迭代推理循环（如ReAct、Reflexion等模式）
- 持久化状态管理：内置检查点（Checkpoint）机制，支持长时间运行的工作流暂停与恢复
- 人机协作节点：可在工作流中插入人工审批节点，实现关键决策点的人类监督
- 多Agent编排：支持构建包含多个Agent的复杂编排系统，包括层次化和并行模式

## 技术栈
- Python 3.8+ / TypeScript
- LangChain / LangSmith（生态集成）
- Redis / PostgreSQL（持久化后端）
- Pydantic（状态类型定义）

## 与 Self Evolve 的关联
LangGraph 的图结构编排能力为自我进化系统提供了精确的工作流控制，其循环迭代和状态持久化机制是实现持续自我改进循环的基础设施，检查点功能使得进化过程可追溯和可回滚。

## 分类
- **类别**: Agent工作流编排框架
- **标签**: langgraph, graph, workflow, stateful, langchain, orchestration, checkpoint
