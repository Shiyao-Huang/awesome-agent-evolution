# Gemini CLI: Google 开源终端 AI 智能体

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/google-gemini/gemini-cli |
| Star | 40k+ |
| 技术栈 | TypeScript, Node.js, Google Gemini API, MCP Protocol |
| 许可证 | Apache 2.0 |
| 开发者 | Google (Google Gemini 团队) |

## 项目简介

Gemini CLI 是 Google 推出的开源终端 AI 智能体,将 Gemini 模型的能力直接带入命令行环境。它提供免费的 60 次/分钟、1000 次/天的调用额度,支持 Gemini 3 模型和 100 万 Token 上下文窗口,内置 Google 搜索、文件操作、Shell 命令等工具,并支持 MCP (Model Context Protocol) 协议进行自定义扩展。作为 2025-2026 年最具影响力的 AI 开发工具之一,Gemini CLI 重新定义了终端与 AI 的交互方式。

## 目录结构

```
google_gemini__gemini_cli/
├── packages/                # 核心包
│   ├── core/                # 核心 CLI 引擎
│   │   └── src/
│   │       ├── agent/       # 智能体核心逻辑
│   │       ├── agents/      # 多智能体实现
│   │       ├── commands/    # CLI 命令处理
│   │       ├── config/      # 配置管理
│   │       ├── context/     # 上下文管理
│   │       ├── core/        # 核心工具函数
│   │       ├── hooks/       # 生命周期钩子
│   │       ├── ide/         # IDE 集成
│   │       ├── tools/       # 内置工具集
│   │       ├── availability/ # 可用性管理
│   │       ├── billing/     # 计费模块
│   │       └── code_assist/ # 代码辅助
│   ├── cli/                 # CLI 入口
│   ├── sdk/                 # SDK 包
│   ├── devtools/            # 开发工具
│   ├── a2a-server/          # Agent-to-Agent 协议服务
│   ├── test-utils/          # 测试工具
│   └── vscode-ide-companion/ # VS Code 扩展
├── tools/                   # 外部工具集成
├── schemas/                 # JSON Schema 定义
├── scripts/                 # 构建与部署脚本
├── sea/                     # 单机可执行文件打包
├── docs/                    # 文档
├── evals/                   # 评估框架
├── integration-tests/       # 集成测试
├── memory-tests/            # 内存测试
└── perf-tests/              # 性能测试
```

## 核心模块分析

### 1. 智能体引擎 (packages/core/src/agent/)

Gemini CLI 的核心是智能体执行引擎,负责解析用户输入、调用 Gemini 模型、管理工具调用循环和上下文窗口。支持多智能体架构,不同智能体可处理不同类型的任务。智能体通过 ReAct (推理-行动) 循环完成复杂任务,自动选择合适的内置工具来执行文件操作、Shell 命令和网络搜索。

### 2. 工具系统 (packages/core/src/tools/ + tools/)

内置 Google 搜索定位、文件读写、Shell 命令执行和 Web 获取等核心工具。通过 MCP 协议支持第三方工具集成,用户可以添加自定义工具来扩展智能体能力。工具系统采用标准化接口设计,每个工具声明输入输出 Schema,由智能体根据任务需求自动选择调用。

### 3. IDE 集成 (packages/core/src/ide/ + packages/vscode-ide-companion/)

提供与 VS Code 等编辑器的深度集成,支持在终端中直接操作项目文件、运行代码和获取 AI 辅助。VS Code 扩展提供图形化界面,使终端 AI 和编辑器形成协同工作流。

### 4. Agent-to-Agent 协议 (packages/a2a-server/)

支持 Agent-to-Agent (A2A) 通信协议,允许多个 AI 智能体之间进行协作。这使得 Gemini CLI 可以作为更复杂的多智能体系统的节点,与其他 AI 服务进行任务委派和结果交换。

## 技术亮点

1. **免费额度慷慨**: 个人 Google 账户享有 60 次/分钟、1000 次/天的免费调用额度,极大降低了 AI 编程工具的使用门槛
2. **百万 Token 上下文**: 支持 Gemini 3 模型的 100 万 Token 上下文窗口,可以处理超大型代码库和长文档分析任务
3. **MCP 协议原生支持**: 作为首批原生支持 Model Context Protocol 的终端工具,可以轻松集成外部工具和数据源
4. **多渠道安装**: 支持 npx 直接运行、npm 全局安装、Homebrew、MacPorts 和 Anaconda 等多种安装方式
5. **完善的测试体系**: 包含集成测试、内存测试和性能测试三层测试体系,确保工具在生产环境中的稳定性
6. **SEA 单机可执行文件**: 通过 Node.js SEA (Single Executable Application) 技术打包为独立可执行文件,无需 Node.js 环境即可运行
7. **周级发布节奏**: 提供 Nightly、Preview 和 Stable 三个发布通道,每周二固定发布,平衡了新功能迭代与稳定性

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 终端智能体架构 | 展示了如何在终端环境中构建 AI 智能体的完整方案,包括工具调用循环和上下文管理,为 Self-Evolve 的 CLI 交互层提供参考 |
| MCP 工具集成 | 原生 MCP 协议支持的实现,Self-Evolve 可直接复用该模式集成代码执行、测试运行等工具 |
| 多智能体协作 | A2A 协议服务的实现,为 Self-Evolve 的多智能体进化系统提供通信协议参考 |
| 大上下文利用 | 百万 Token 上下文窗口的工程实践,适用于 Self-Evolve 处理大型代码库的全面分析和进化 |
| 工具标准化设计 | 工具 Schema 声明和自动选择的架构模式,可应用于 Self-Evolve 的工具注册和调度系统 |
