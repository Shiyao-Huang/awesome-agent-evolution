# Aider - AI结对编程
- **仓库**: paul-gauthier/aider
- **GitHub**: https://github.com/paul-gauthier/aider
- **Stars**: ~30,000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-05
- **模式**: 反馈-精炼

## 概述
Aider 是一个命令行AI结对编程工具，允许开发者在终端中与AI协作编辑代码。它能够直接读取和修改本地Git仓库中的代码文件，自动生成有意义的提交信息，并支持多文件编辑和上下文感知的代码修改。

## 核心特性
- 终端集成开发：直接在命令行中使用，与现有开发工作流无缝集成
- Git 原生集成：自动管理代码修改的提交、回滚和差异对比
- 多文件编辑：支持跨多个文件的协调修改，理解文件间的依赖关系
- 多模型支持：支持GPT-4、Claude、Llama等主流模型，可按任务选择最优模型
- 代码库地图（Repo Map）：自动构建代码库结构图，为LLM提供精确的代码上下文
- 测试驱动的修改流程：支持运行测试验证修改，基于测试结果迭代修正

## 技术栈
- Python 3.8+
- OpenAI API / Anthropic API / Ollama
- Git（版本控制集成）
- Tree-sitter（代码解析）
- Linter（代码质量检查）

## 与 Self Evolve 的关联
Aider 的测试驱动修改流程是自我进化系统中代码层面自我改进的典型范式——通过执行测试获取反馈，基于反馈自动修正代码，形成持续改进的闭环，其 Repo Map 机制为LLM提供了理解大型代码库的能力。

## 分类
- **类别**: AI结对编程工具
- **标签**: aider, pair-programming, git, terminal, code-editing, multi-file, repo-map
