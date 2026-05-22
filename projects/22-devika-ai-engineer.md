# Devika - AI软件工程师
- **仓库**: stitionai/devika
- **GitHub**: https://github.com/stitionai/devika
- **Stars**: ~18,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-10
- **模式**: 反馈-精炼

## 概述
Devika 是一个开源的AI软件工程师Agent，能够理解自然语言描述的需求，自主规划项目结构，编写代码并进行调试。它采用多步骤的规划-执行-验证流程，模拟人类开发者的工作方式，支持从需求到可运行代码的端到端自动化。

## 核心特性
- 需求理解与项目规划：自动将自然语言需求分解为开发步骤和技术决策
- 多模型支持：支持Claude、GPT-4、Local LLM等多种后端模型
- 浏览器辅助研究：Agent可自主搜索和浏览技术文档以获取所需信息
- 代码编写与调试：在沙盒环境中编写、执行和调试代码，根据错误反馈迭代修正
- 项目级代码生成：生成包含多个文件和依赖关系的完整项目，而非孤立代码片段

## 技术栈
- Python 3.10+
- FastAPI（后端）
- React（前端界面）
- Playwright（浏览器自动化）
- OpenAI / Anthropic / Ollama（多模型后端）

## 与 Self Evolve 的关联
Devika 的规划-执行-验证流程体现了自我进化系统中的反馈精炼模式——Agent通过执行代码获得错误信息，再基于反馈修正代码，这种迭代改进循环是AI自我进化在软件开发领域的直接应用。

## 分类
- **类别**: AI软件工程师
- **标签**: devika, ai-engineer, code-generation, project-planning, autonomous, software-development
