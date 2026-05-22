# AutoGen/AG2 - 多Agent对话框架
- **仓库**: microsoft/autogen
- **GitHub**: https://github.com/microsoft/autogen
- **Stars**: ~52,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
AutoGen（现名 AG2）是微软研究院开发的多Agent对话框架，支持构建基于大语言模型的多Agent对话系统。它以对话为核心交互范式，允许多个Agent通过结构化的消息传递协同解决复杂问题，并支持人类参与对话循环。

## 核心特性
- 多Agent对话编排：支持两方及多方Agent对话，可灵活定义对话拓扑和轮次逻辑
- 可定制的Agent行为：支持Assistant Agent、UserProxy Agent、GroupChat Agent等多种角色
- 代码执行与调试：内置沙盒代码执行环境，支持自动代码生成、执行和错误修复
- 人类参与循环：支持在对话中引入人类反馈，实现人机混合决策
- AG2 下一代架构：提供更灵活的Agent组合、事件驱动机制和分布式Agent支持

## 技术栈
- Python 3.8+
- OpenAI API / Azure OpenAI / 本地模型
- Docker（沙盒代码执行）
- LangChain（可选集成）
- .NET（部分扩展）

## 与 Self Evolve 的关联
AutoGen 的多Agent对话机制为自我进化系统提供了自然语言驱动的协作范式，其代码执行-反馈循环是实现Agent自我修正和迭代改进的关键模式，对构建能够自主调试和优化的系统具有重要参考价值。

## 分类
- **类别**: 多Agent对话框架
- **标签**: multi-agent, conversation, microsoft, code-execution, human-in-the-loop, ag2
