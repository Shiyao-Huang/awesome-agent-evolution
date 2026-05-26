# OpenHands - AI软件工程师Agent平台
- **仓库**: All-Hands-AI/OpenHands
- **GitHub**: https://github.com/All-Hands-AI/OpenHands
- **Stars**: ~40,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 反馈-精炼

## 概述
OpenHands（原名 OpenDevin）是一个面向AI软件工程师的Agent平台，支持Agent在安全的沙盒环境中执行代码、浏览网页、编辑文件等操作。它提供了完整的开发环境模拟，使AI Agent能够像人类开发者一样完成端到端的软件工程任务。

## 核心特性
- 完整沙盒开发环境：提供包含终端、浏览器、文件编辑器的隔离沙盒，Agent可自主操作
- 多种Agent策略：支持 CodeAct、Monologue、Planner 等多种Agent决策模式
- SWE-bench 集成评估：在真实GitHub issue修复任务上进行系统化评估
- Web GUI 交互界面：提供可视化界面，支持人类观察和介入Agent的执行过程
- 可扩展架构：支持自定义Agent、工具和评估基准的插件式扩展

## 技术栈
- Python 3.10+
- React（前端界面）
- Docker（沙盒环境）
- OpenAI / Anthropic / 开源模型
- FastAPI（后端服务）

## 与 Self Evolve 的关联
OpenHands 的沙盒执行和反馈循环机制是自我进化系统的理想实验平台——Agent可以在隔离环境中自主编写、执行、调试代码，通过错误反馈不断迭代改进，这正是代码层面自我进化的完整闭环。

## 分类
- **类别**: AI软件工程师平台
- **标签**: openhands, opendevin, software-engineering, sandbox, code-generation, agent-platform
