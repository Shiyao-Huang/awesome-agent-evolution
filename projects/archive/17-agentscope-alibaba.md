# AgentScope - 阿里巴巴多Agent平台
- **仓库**: modelscope/agentscope
- **GitHub**: https://github.com/modelscope/agentscope
- **Stars**: ~5,000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
AgentScope 是阿里巴巴达摩院开源的多Agent平台，以高可用性和易用性为核心设计目标。它提供了灵活的Agent编排机制、丰富的预置Agent模板，以及面向分布式场景的Agent通信基础设施，旨在降低多Agent应用的开发门槛。

## 核心特性
- 三层架构设计：Agent层、编排层和基础设施层分离，各层独立可扩展
- 分布式Agent支持：内置基于消息传递的分布式Agent通信机制，支持跨机器部署
- 丰富的预置Agent：提供ReAct、ReWOO、LLM Compiler等多种预置Agent模板
- 可视化拖拽编排：提供Web界面的可视化Agent编排工具，降低使用门槛
- 与ModelScope生态集成：可直接使用ModelScope上的模型和数据资源

## 技术栈
- Python 3.8+
- ModelScope（模型生态）
- Flask / FastAPI（服务端）
- Distributed Computing（分布式支持）
- Gradio（Web界面）

## 与 Self Evolve 的关联
AgentScope 的分布式Agent架构为大规模自我进化系统提供了可扩展的基础设施，其三层设计模式将Agent能力、编排逻辑和底层资源解耦，有利于构建模块化的自我改进系统。

## 分类
- **类别**: 多Agent平台
- **标签**: agentscope, alibaba, distributed, multi-agent, platform, modelscope, orchestration
