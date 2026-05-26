# Flowise - 拖拽式LLM编排
- **仓库**: FlowiseAI/Flowise
- **GitHub**: https://github.com/FlowiseAI/Flowise
- **Stars**: ~35,000
- **语言**: TypeScript / JavaScript
- **许可**: Apache-2.0
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
Flowise 是一个基于拖拽界面的LLM编排工具，允许用户通过可视化方式构建LangChain应用。它将复杂的Agent工作流、RAG流水线和聊天机器人配置转化为直观的节点连线操作，极大地降低了LLM应用的开发门槛。

## 核心特性
- 可视化拖拽编辑器：通过拖拽和连线操作构建LLM工作流，无需编写代码
- LangChain 原生支持：内置LangChain的所有主要组件作为可视化节点
- 多种应用模板：预置聊天机器人、RAG问答、Agent工具调用等多种应用模板
- API 与嵌入集成：提供REST API和嵌入式聊天组件，便于集成到现有系统
- 多模型后端：支持OpenAI、Anthropic、HuggingFace、本地模型等多种LLM

## 技术栈
- TypeScript / Node.js（后端）
- React（前端）
- LangChain（核心编排引擎）
- Redis（缓存）
- Docker（部署）

## 与 Self Evolve 的关联
Flowise 的可视化编排界面为自我进化系统的设计提供了直观的建模工具——用户可以通过拖拽方式快速实验不同的进化策略组合，将生成器、评估器、选择器等进化组件可视化为可交互的流程图。

## 分类
- **类别**: 可视化LLM编排工具
- **标签**: flowise, visual-editor, drag-drop, langchain, llm-orchestration, no-code
