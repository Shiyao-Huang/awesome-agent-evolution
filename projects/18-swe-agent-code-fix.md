# SWE-Agent - 自主代码修复Agent
- **仓库**: princeton-nlp/SWE-agent
- **GitHub**: https://github.com/princeton-nlp/SWE-agent
- **Stars**: ~14,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 反馈-精炼

## 概述
SWE-Agent 是普林斯顿NLP团队开发的自主代码修复Agent系统，能够自动接收GitHub issue描述，在代码仓库中定位问题并生成修复补丁。它在SWE-bench基准测试中表现优异，展示了LLM Agent在真实软件工程任务中的强大能力。

## 核心特性
- 自主代码修复流程：自动解析issue、搜索代码库、定位bug、生成并验证补丁
- Agent-Computer Interface（ACI）：设计了专门面向LLM的命令行界面，优化Agent与代码环境的交互效率
- SWE-bench 评估基准：配套的真实世界代码修复基准测试集，涵盖多个开源项目
- 多轮交互式修复：支持代码搜索、文件浏览、编辑执行和测试验证的多轮循环
- 可扩展的Agent配置：支持自定义搜索策略、编辑模式和验证流程

## 技术栈
- Python 3.10+
- OpenAI API / Anthropic API
- Git（版本控制操作）
- Docker（沙盒执行环境）
- SWE-bench（评估基准）

## 与 Self Evolve 的关联
SWE-Agent 直接体现了AI自我进化在软件工程领域的应用——Agent能够自主理解问题描述、定位代码缺陷并生成修复，这正是自我进化系统中代码自我修复和持续改进能力的核心实现。

## 分类
- **类别**: 自主代码修复Agent
- **标签**: swe-agent, code-fix, software-engineering, princeton, swebench, autonomous, patch-generation
