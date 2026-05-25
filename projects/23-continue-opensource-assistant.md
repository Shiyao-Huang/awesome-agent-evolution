# Continue — 开源 AI 代码助手

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/continuedev/continue |
| Stars | 20,000+ |
| 主要语言 | TypeScript |
| 许可证 | Apache License 2.0 |

## 项目简介

Continue 是一款领先的开源 AI 代码助手，以 VS Code 和 JetBrains 扩展的形式运行，支持"源代码控制的 AI 检查"（Source-controlled AI Checks）。它的核心理念是将 AI 代码审查和辅助以 Markdown 文件的形式存储在代码仓库中（`.continue/checks/`），使 AI 辅助规则可以像代码一样被版本管理和团队共享。Continue 支持连接多种 LLM 提供商（OpenAI、Anthropic、本地模型等），提供代码补全、内联聊天、代码编辑和自动化 PR 检查等功能。

## 目录结构

```
continue/
├── core/                    # TypeScript 核心引擎
│   ├── index.d.ts           # 核心 TypeScript 类型定义
│   ├── context/             # 上下文提供者
│   ├── commands/            # 命令处理
│   └── config/              # 配置管理
├── extensions/              # IDE 扩展
│   ├── vscode/              # VS Code 扩展
│   └── intellij/            # JetBrains 插件
├── gui/                     # 前端 UI（React）
│   ├── src/                 # UI 组件
│   └── public/              # 静态资源
├── packages/                # 共享包
│   ├── server/              # 后端服务
│   └── utils/               # 工具函数
├── binaries/                # 二进制文件
├── docs/                    # 文档
└── package.json
```

## 核心模块分析

### 1. 核心引擎 (`core/`)
Continue 的核心 TypeScript 引擎，定义了完整的 AI 代码助手抽象层。包括上下文提供者（context providers）系统——负责从代码库、文档、网络等来源收集上下文信息；命令处理系统——支持内联聊天、代码编辑、解释代码等多种交互模式；以及配置管理——通过 `config.yaml` 定义 AI 行为规则。

### 2. IDE 扩展层 (`extensions/`)
实现了 VS Code 和 JetBrains 两个主流 IDE 的深度集成。VS Code 扩展利用 Language Server Protocol 和 Webview API 构建流畅的 AI 交互界面；JetBrains 扩展通过 IntelliJ Platform SDK 实现类似功能。两个扩展共享核心引擎，确保跨 IDE 的体验一致性。

### 3. 源代码控制的 AI 检查系统
Continue 的差异化特性——支持在代码仓库中定义 AI 检查规则（`.continue/checks/` 目录下的 Markdown 文件）。这些检查规则作为 GitHub Status Checks 在每个 PR 上自动运行，实现了 AI 辅助代码审查的标准化和可复现性，使团队可以共同维护和改进 AI 审查策略。

## 技术亮点

- **源代码控制的 AI 规则**：将 AI 代码审查和辅助规则以 Markdown 文件形式存储在代码仓库中，支持 Git 版本管理和团队协作，使 AI 辅助规则可以像代码一样被 review、迭代和共享
- **多 LLM 提供商支持**：不绑定任何特定模型提供商，支持 OpenAI、Anthropic、Google、本地 Ollama 模型等 20+ 种 LLM 后端，用户可自由配置和切换，避免厂商锁定
- **上下文感知架构**：通过可插拔的上下文提供者系统，AI 能够自动获取相关代码文件、文档、终端输出、网页内容等多维度上下文，显著提升了建议的准确性
- **双 IDE 深度集成**：同时支持 VS Code 和 JetBrains 两大 IDE 平台，通过共享核心引擎确保跨平台体验一致性，覆盖主流开发者工具链

## 与 Self-Evolve 关联

Continue 的"源代码控制 AI 规则"模式展示了如何将 AI 辅助能力本身纳入版本控制和持续迭代的框架中，这种"AI 规则即代码"的理念与 Self-Evolution 中"AI 系统持续自我优化其行为策略"的思想高度契合。

## 参考资料

- Continue 官方网站 (https://www.continue.dev/)
- Continue VS Code Marketplace (https://marketplace.visualstudio.com/items?itemName=Continue.continue)
- Continue 开源宣言 (https://github.com/continuedev/continue/discussions/7019)
- Continue 使用指南 (https://betterstack.com/community/guides/ai/continue-dev-ai/)
