# ChatDev - 虚拟软件公司多Agent
- **仓库**: OpenBMB/ChatDev
- **GitHub**: https://github.com/OpenBMB/ChatDev
- **Stars**: ~25,000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-04
- **模式**: 智能体编排

## 概述
ChatDev 将软件开发流程建模为一个虚拟软件公司，通过多个扮演不同角色（CEO、CTO、程序员、测试员等）的AI Agent协作完成软件开发任务。它采用聊天链（Chat Chain）机制串联软件开发的各个阶段，从需求分析到代码生成再到测试，实现了全自动的软件开发流程。

## 核心特性
- 虚拟软件公司模型：将软件开发组织结构映射为多Agent系统，包括设计、编码、测试等完整团队
- 聊天链（Chat Chain）机制：将软件开发分解为多个子任务，通过Agent间对话逐步推进
- 角色翻转提示（Role Flipping）：Agent在对话中交替扮演不同角色，促进深度思考
- 自动代码生成与测试：从自然语言需求出发，自动生成完整可运行的软件项目
- 迭代精炼模式：支持代码审查和迭代改进，提升生成代码的质量

## 技术栈
- Python 3.8+
- OpenAI API（主要LLM后端）
- Docker（代码执行沙盒）
- Git（版本管理集成）

## 与 Self Evolve 的关联
ChatDev 展示了多Agent系统如何通过角色分工和流程化协作实现自动化软件开发，其迭代精炼模式直接体现了自我进化的核心思想——通过Agent间的代码审查和反馈持续改进输出质量。

## 分类
- **类别**: 虚拟软件公司 / 多Agent协作
- **标签**: chatdev, software-development, virtual-company, code-generation, multi-agent, chat-chain
