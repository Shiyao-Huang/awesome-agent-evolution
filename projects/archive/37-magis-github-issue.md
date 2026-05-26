# MAGIS - 多Agent GitHub Issue修复
- **仓库**: 学术项目
- **GitHub**: 学术论文项目
- **Stars**: 学术项目
- **语言**: Python
- **许可**: 学术许可
- **最近活跃**: 2024
- **模式**: 智能体编排

## 概述
MAGIS（Multi-Agent Framework for GitHub Issue Resolution）是一个面向GitHub issue自动修复的多Agent系统。它将issue修复过程分解为问题理解、代码定位、修复生成和验证确认四个阶段，每个阶段由专门的Agent负责，通过多Agent协作实现端到端的issue自动解决。

## 核心特性
- 四阶段修复流程：Issue理解 -> 代码定位 -> 修复生成 -> 验证确认
- 专业化Agent分工：Manager Agent、Localization Agent、Edit Agent、Review Agent各司其职
- 代码仓库感知：通过代码结构分析和依赖关系理解，精确定位需要修改的代码位置
- 迭代修复机制：支持基于验证结果的多轮修复尝试，逐步逼近正确的修复方案
- 上下文管理：有效管理长代码文件的上下文，确保LLM获得关键信息

## 技术栈
- Python
- OpenAI API / Anthropic API
- Git（代码仓库操作）
- AST 解析（代码结构分析）

## 与 Self Evolve 的关联
MAGIS 的四阶段修复流程是自我进化系统在代码维护领域的具体实现——通过专门的Agent分别负责理解、定位、修复和验证，形成了完整的自我诊断和自我修复闭环，其多Agent协作模式为构建自动化代码进化系统提供了架构参考。

## 分类
- **类别**: 多Agent代码修复系统
- **标签**: magis, github-issue, bug-fix, multi-agent, code-localization, academic
