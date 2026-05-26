# Open Interpreter - 自然语言代码解释器
- **仓库**: OpenInterpreter/open-interpreter
- **GitHub**: https://github.com/OpenInterpreter/open-interpreter
- **Stars**: ~57,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 反馈-精炼

## 概述
Open Interpreter 是一个让大语言模型在本地运行代码的开源工具，支持Python、JavaScript、Shell等多种语言。它将自然语言指令转化为可执行代码，在本地环境中运行并返回结果，为LLM提供了一个灵活的代码执行沙盒。

## 核心特性
- 多语言代码执行：支持Python、JavaScript、Ruby、Shell等多种编程语言
- 本地执行环境：直接在用户机器上运行代码，无需云端依赖
- 自然语言交互：用户用自然语言描述需求，系统自动生成并执行对应代码
- 文件与系统操作：支持文件读写、系统管理、数据处理等广泛的操作能力
- 安全确认机制：在执行敏感操作前要求用户确认，保障系统安全

## 技术栈
- Python 3.10+
- OpenAI API / Anthropic API / 开源模型
- LiteLLM（多模型统一接口）
- Terminal / Jupyter（执行环境）
- Docker（可选沙盒）

## 与 Self Evolve 的关联
Open Interpreter 的代码执行-反馈循环是自我进化系统的基础执行层——Agent能够将改进想法转化为代码并立即验证效果，通过执行结果的反馈持续调整策略，这种即时的"想法-执行-反馈"循环是自我进化不可或缺的能力。

## 分类
- **类别**: 自然语言代码解释器
- **标签**: open-interpreter, code-execution, natural-language, local-runtime, multi-language
