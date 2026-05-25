# n8n: 面向技术团队的工作流自动化与 AI Agent 平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/n8n-io/n8n |
| Star | 80,000+ |
| 技术栈 | TypeScript, Node.js, Vue 3, Express, TypeORM, Pinia, LangChain |
| 许可证 | Sustainable Use License (Fair-code) |
| 开发者 | n8n GmbH (Jan Oberhauser 创立) |

## 项目简介

n8n 是一款面向技术团队的工作流自动化平台，以"nodemation"（节点自动化）为核心理念，提供了兼具代码灵活性和无代码速度的自动化解决方案。项目集成了 400+ 第三方服务连接器，支持 JavaScript/Python 代码嵌入，并原生支持基于 LangChain 的 AI Agent 工作流构建，是目前工作流自动化领域最活跃的开源项目之一。

n8n 的技术架构采用 monorepo 组织方式，通过 pnpm workspaces 和 Turbo 构建编排管理数十个内部包。前端使用 Vue 3 + TypeScript + Vite + Pinia 构建，提供可视化的节点式工作流编辑器；后端基于 Node.js + Express + TypeORM，支持 SQLite 和 PostgreSQL 双数据库方案。项目遵循 Controller-Service-Repository 架构模式，通过依赖注入（@n8n/di）实现模块解耦，事件总线（Event Bus）驱动内部通信。

在 AI 能力方面，n8n 通过 `@n8n/nodes-langchain` 包深度集成了 LangChain 生态，提供 AI Agent 节点、工具调用节点、记忆管理节点等组件，允许用户在可视化工作流中构建复杂的 AI Agent 编排。配合内置的 Instance AI 助手和 MCP 浏览器扩展，n8n 正在从传统工作流引擎向 AI 原生自动化平台转型。

## 目录结构

```
n8n__n8n/
├── packages/
│   ├── cli/                  # CLI 入口、Express 服务、REST API
│   ├── core/                 # 工作流执行引擎
│   │   └── src/
│   │       ├── WorkflowExecute.ts   # 工作流执行器
│   │       └── NodeExecuteFunctions.ts
│   ├── workflow/             # 工作流接口与类型定义
│   ├── editor-ui/            # Vue 3 前端应用
│   │   └── src/
│   │       ├── components/         # UI 组件
│   │       ├── views/              # 页面视图
│   │       └── stores/             # Pinia 状态管理
│   ├── nodes-base/           # 400+ 内置集成节点
│   ├── frontend/             # 前端共享模块
│   ├── extensions/           # 扩展机制
│   ├── node-dev/             # 节点开发工具
│   ├── testing/              # Playwright E2E 测试
│   └── @n8n/                 # 作用域包
│       ├── nodes-langchain/       # AI/LangChain 节点
│       ├── instance-ai/           # AI 助手后端
│       ├── ai-utilities/          # AI 工具函数
│       ├── ai-node-sdk/           # AI 节点 SDK
│       ├── mcp-browser/           # MCP 浏览器集成
│       ├── mcp-browser-extension/ # MCP 浏览器扩展
│       ├── api-types/             # 前后端共享接口
│       ├── config/                # 配置管理
│       ├── di/                    # 依赖注入容器
│       ├── design-system/         # Vue 组件库
│       ├── task-runner/           # 任务执行器
│       ├── task-runner-python/    # Python 任务执行器
│       ├── permissions/           # 权限系统
│       └── i18n/                  # 国际化
├── scripts/                  # 构建与部署脚本
├── docker/                   # Docker 部署配置
├── assets/                   # 静态资源
└── .github/                  # CI/CD 配置
```

## 核心模块分析

### 1. 工作流执行引擎 (`packages/core/`)

核心执行引擎是 n8n 的心脏，负责工作流的解析、调度和执行。它采用基于节点（Node）的执行模型，每个节点接收输入数据、执行处理后输出结果，节点之间通过连接（Connection）传递数据。引擎支持多种执行模式：手动触发、Webhook 触发、定时触发和错误触发，并内置了错误处理和重试机制。Context-Based Execution 模式为不同节点类型（常规节点、Trigger 节点、Webhook 节点）提供差异化的执行上下文。

### 2. AI/LangChain 集成 (`@n8n/nodes-langchain/`)

这是 n8n 在 Self-Evolve 研究中最具参考价值的模块。该包将 LangChain 的核心概念（Agent、Chain、Memory、Tool、Output Parser）封装为可视化节点，用户可以在画布上拖拽组装 AI Agent 工作流。支持多种 LLM 提供商（OpenAI、Anthropic、Google 等），内置向量存储集成用于 RAG 场景，提供对话记忆管理节点支持多轮对话 Agent。这种"低代码 AI Agent 编排"模式极大地降低了 AI Agent 的构建门槛。

### 3. 可视化编辑器 (`packages/editor-ui/`)

基于 Vue 3 + Pinia 构建的前端编辑器提供了直观的节点式工作流设计体验。编辑器支持拖拽式节点布局、实时数据预览、表达式编辑器（支持 JavaScript 表达式）、参数自动补全等功能。设计系统（@n8n/design-system）确保了 UI 组件的一致性和可复用性。前端通过 HTTP/WebSocket 与后端通信，实现了实时执行状态更新和日志流式输出。

### 4. 集成节点生态 (`packages/nodes-base/`)

n8n 内置了 400+ 集成节点，覆盖数据库、消息队列、云服务、社交媒体等各个领域。每个节点遵循统一的接口规范（INodeType），定义了属性描述、凭据管理和执行逻辑。节点开发工具（node-dev）和扩展 SDK 降低了自定义节点的开发门槛。这种插件化架构使 n8n 能够快速扩展集成能力，形成了强大的网络效应。

### 5. Instance AI 助手 (`@n8n/instance-ai/`)

Instance AI 是 n8n 内置的 AI 助手功能，在代码中称为"Instance AI"，为用户提供智能辅助。它可以在工作流编辑过程中提供上下文感知的建议，帮助用户选择合适的节点、配置参数和调试工作流。该模块有独立的架构文档和开发工作流（`pnpm dev:ai`），体现了 n8n 对 AI 能力的重视程度。

### 6. 企业级基础设施 (`@n8n/`)

n8n 提供了完善的企业级支持：配置管理（@n8n/config）实现了集中化的环境变量和配置项管理；权限系统（@n8n/permissions）支持细粒度的访问控制；依赖注入（@n8n/di）实现了 IoC 容器，确保模块间的松耦合；Task Runner 机制将节点执行隔离在独立进程中，Python Task Runner 更是扩展了 Python 代码节点的执行能力。

## 技术亮点

1. **AI 原生工作流引擎**：通过 LangChain 节点将 AI Agent 能力深度嵌入工作流引擎，实现了"低代码 AI Agent 编排"的新范式，用户无需编写代码即可构建复杂的 Agent 工作流
2. **Monorepo + Turbo 构建体系**：使用 pnpm workspaces 管理 50+ 内部包，Turbo 实现增量构建和任务编排，每个包可独立开发和测试，保证了大型项目的构建效率
3. **Controller-Service-Repository 架构**：后端严格遵循分层架构，配合依赖注入容器实现模块解耦，API 类型定义在 @n8n/api-types 中前后端共享，确保类型安全
4. **Fair-code 许可证模式**：采用 Sustainable Use License 平衡开源生态与商业利益，源码可见、可自部署、可扩展，但限制了商业竞争使用，为开源项目的可持续发展提供了参考
5. **全面的测试体系**：单元测试（Jest/Vitest）、E2E 测试（Playwright）和架构守护测试（Janitor）三层测试策略，Janitor 工具通过静态分析强制执行分层架构规则，防止测试代码腐化
6. **MCP 浏览器集成**：通过 @n8n/mcp-browser 和 MCP 浏览器扩展，将工作流暴露为 MCP 工具，实现了与其他 AI 工具的互联互通

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| Agent 编排 | LangChain 节点系统提供了可视化 Agent 编排的完整实现，展示了"低代码 Agent 构建"范式的可行性 |
| 工作流引擎 | 基于节点的执行引擎和 Context-Based Execution 模式为 Self-Evolve 的任务编排提供了架构参考 |
| 插件生态 | 400+ 集成节点的插件化架构展示了如何构建可扩展的工具生态 |
| 自我改进 | Instance AI 助手展示了工作流平台如何集成 AI 能力实现自我优化和智能辅助 |
| 测试体系 | Janitor 架构守护工具和 TCR（Test-Commit-Revert）工作流为大规模项目的质量保障提供了方法论 |
| MCP 集成 | MCP 浏览器扩展展示了如何将工作流平台融入 AI 工具生态，为 Self-Evolve 的外部集成提供了模式参考 |
| 安全设计 | 安全修复规范（不在公开仓库暴露漏洞细节）为 Self-Evolve 的安全开发生命周期提供了实践指南 |

## 参考资料

- [n8n 官方文档](https://docs.n8n.io)
- [n8n GitHub 仓库](https://github.com/n8n-io/n8n)
- [n8n AI & LangChain 指南](https://docs.n8n.io/advanced-ai/)
- [n8n 社区模板](https://n8n.io/workflows)
- [n8n 集成列表](https://n8n.io/integrations)
- [n8n 可持续使用许可证说明](https://docs.n8n.io/sustainable-use-license/)
- [n8n 社区论坛](https://community.n8n.io)

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/n8n__n8n`
- **分析命令**：`gitnexus analyze repos/n8n__n8n --index-only --skip-git --name n8n`
