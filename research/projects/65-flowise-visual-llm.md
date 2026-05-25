# Flowise: 可视化拖拽式 LLM 应用构建平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/FlowiseAI/Flowise |
| Star | 36,000+ |
| 技术栈 | TypeScript, Node.js, React, LangChain, Express, pnpm Monorepo, Turborepo |
| 许可证 | Apache 2.0 (社区版) / 商业许可 (企业版) |
| 开发者 | FlowiseAI 团队 |

## 项目简介

Flowise 是一个面向开发者和非技术用户的可视化 LLM 应用构建平台，采用拖拽式界面让用户无需编写代码即可创建复杂的 AI Agent、聊天机器人和工作流。项目基于 LangChain 生态构建，将 LangChain 的各种组件（LLM、Chain、Tool、Memory、向量存储等）封装为可视化节点，用户通过在画布上连接这些节点来定义数据流向和处理逻辑。Flowise 的核心理念是"Build AI Agents, Visually"——让 AI Agent 的构建从代码密集型工作转变为直观的可视化编排。

项目采用 pnpm Monorepo + Turborepo 的架构，包含四个核心模块：`packages/server` 是基于 Express/Node.js 的后端服务，提供 API 逻辑、数据库持久化和聊天流执行引擎；`packages/ui` 是 React 前端，实现可视化画布编辑器；`packages/components` 是第三方集成节点库，包含 300+ 可用组件；`packages/agentflow` 是 Agent 工作流执行引擎。此外还有 `packages/observe`（可观测性）和 `packages/api-documentation`（自动生成的 Swagger API 文档）。

Flowise 支持多种部署方式：本地安装（`npm install -g flowise`）、Docker 容器化部署、以及 Flowise Cloud 云服务。企业版提供了身份管理、RBAC 权限、SSO 集成等企业级功能。项目的组件生态极为丰富，覆盖了几乎所有主流 LLM 提供商（OpenAI、Anthropic、Google、AWS Bedrock 等）、向量数据库（Pinecone、Chroma、Qdrant 等）、文档加载器、工具集成和多 Agent 编排模式。

## 目录结构

```
flowiseai__flowise/
├── packages/
│   ├── server/                 # ★ 后端服务
│   │   ├── src/
│   │   │   ├── controllers/         # API 控制器
│   │   │   ├── database/            # 数据库层
│   │   │   ├── commands/            # 命令处理
│   │   │   ├── enterprise/          # ★ 企业版功能
│   │   │   ├── metrics/             # 指标收集
│   │   │   ├── NodesPool.ts         # ★ 节点池管理
│   │   │   ├── CachePool.ts         # 缓存池
│   │   │   ├── DataSource.ts        # 数据源管理
│   │   │   ├── IdentityManager.ts   # 身份管理
│   │   │   └── index.ts             # 服务入口
│   │   ├── bin/                     # CLI 入口
│   │   └── cypress/                 # E2E 测试
│   ├── ui/                     # ★ React 前端
│   │   └── src/
│   │       ├── components/          # UI 组件
│   │       ├── pages/               # 页面
│   │       └── stores/              # 状态管理
│   ├── components/             # ★ 第三方集成节点
│   │   └── nodes/
│   │       ├── agentflow/           # Agent Flow 节点
│   │       ├── chatmodels/          # ★ 聊天模型集成
│   │       │   ├── ChatAnthropic/
│   │       │   ├── ChatOpenAI/
│   │       │   ├── AWSBedrock/
│   │       │   └── ...              # 30+ 模型提供商
│   │       ├── llms/                # LLM 集成
│   │       ├── chains/              # Chain 组件
│   │       ├── tools/               # ★ 工具集成
│   │       ├── memory/              # 记忆组件
│   │       ├── embeddings/          # 嵌入模型
│   │       ├── vectorstores/        # 向量存储
│   │       ├── documentloaders/     # 文档加载器
│   │       ├── textsplitters/       # 文本分割器
│   │       ├── retrievers/          # 检索器
│   │       ├── graphs/              # 图结构
│   │       ├── multiagents/         # ★ 多 Agent 编排
│   │       ├── sequentialagents/    # 顺序 Agent
│   │       ├── outputparsers/       # 输出解析器
│   │       ├── moderation/          # 内容审核
│   │       ├── speechtotext/        # 语音转文本
│   │       ├── analytic/            # 分析工具
│   │       └── engine/              # 引擎组件
│   ├── agentflow/              # ★ Agent 工作流引擎
│   │   └── src/
│   │       ├── core/                # 核心引擎
│   │       ├── features/            # 功能模块
│   │       ├── atoms/               # 原子状态
│   │       └── infrastructure/      # 基础设施
│   ├── observe/                # 可观测性模块
│   │   └── src/
│   │       ├── core/
│   │       ├── features/
│   │       └── atoms/
│   └── api-documentation/      # Swagger API 文档
├── docker/                     # Docker 部署配置
│   └── worker/
├── metrics/                    # 监控配置
│   ├── grafana/
│   ├── prometheus/
│   └── otel/
├── i18n/                       # 国际化
├── images/                     # 静态图片资源
├── package.json                # 根 package.json
├── pnpm-workspace.yaml         # pnpm 工作区配置
└── turbo.json                  # Turborepo 配置
```

## 核心模块分析

### 1. 后端服务与执行引擎 (`packages/server/`)

Flowise 的后端基于 Express.js 构建，是整个平台的核心运行时。`NodesPool.ts` 是节点池管理器，负责动态加载和注册所有可用组件节点，构建组件元数据索引。`DataSource.ts` 管理多种数据源的连接和配置。执行引擎接收前端提交的 Flow JSON 定义，构建 LangChain 执行链并运行。后端还集成了聊天流（Chatflow）的持久化存储，将用户构建的每个工作流以 JSON 格式保存到数据库，支持版本管理和增量更新。`CachePool.ts` 管理模型实例和嵌入实例的缓存，避免重复初始化开销。

### 2. 组件节点生态 (`packages/components/nodes/`)

这是 Flowise 最核心的能力来源，包含了 300+ 可视化组件节点。每个节点本质上是一个 TypeScript 类，封装了 LangChain 对应组件的实例化逻辑和配置参数。组件分为 20+ 大类：`chatmodels` 覆盖 30+ 聊天模型提供商（OpenAI、Anthropic、Google Gemini、AWS Bedrock 等）；`tools` 提供 40+ 工具集成（搜索引擎、代码解释器、数据库操作等）；`vectorstores` 支持 20+ 向量数据库；`chains` 实现 LangChain 的各种 Chain 模式（LLM Chain、Retrieval QA Chain、Conversational Chain 等）。每个节点定义了输入/输出端口类型、配置参数和默认值，确保画布上的类型安全连接。

### 3. Agent Flow 工作流引擎 (`packages/agentflow/`)

AgentFlow 是 Flowise 的 Agent 编排引擎，提供了比传统 Chain 更灵活的工作流模式。它支持条件分支（Condition）、循环迭代（Iteration）、人工输入（HumanInput）、自定义函数（CustomFunction）、HTTP 调用、子流程调用（ExecuteFlow）等高级控制流。AgentFlow 的设计借鉴了低代码平台的流程编排理念，将 Agent 的行为逻辑分解为可组合的步骤，每个步骤可以是 LLM 调用、工具执行、条件判断或数据转换。这种设计使得复杂的多步骤 Agent 行为可以被可视化和调试。

### 4. 多 Agent 编排 (`packages/components/nodes/multiagents/`)

Flowise 提供了多 Agent 协作的原生支持。`multiagents/` 目录包含 Supervisor 和 Worker 两种角色节点，实现了 Supervisor 模式的多 Agent 编排——一个 Supervisor Agent 负责任务分配和协调，多个 Worker Agent 各自执行特定领域任务。`sequentialagents/` 提供了顺序执行模式，Agent 按预定义顺序依次处理任务。这些编排模式使得用户可以构建复杂的多 Agent 协作系统，如"研究 Agent 写草稿 -> 审核 Agent 检查质量 -> 翻译 Agent 输出结果"的流水线。

### 5. 前端画布编辑器 (`packages/ui/`)

Flowise 的前端基于 React 构建，提供了直观的拖拽式画布编辑器。画布支持组件拖拽放置、端口连线、实时预览、调试模式等功能。UI 还集成了聊天测试面板，用户可以在编辑画布的同时实时测试 Agent 的对话效果。状态管理采用轻量级方案，通过 API 调用与后端同步。前端还提供了模板库（Marketplace），包含预构建的常见 AI 应用模板（客服机器人、文档问答、代码助手等），用户可以一键导入并根据需要修改。

## 技术亮点

1. **低代码 + 全代码双模态**：可视化拖拽构建 AI 应用，同时保留对底层 LangChain 代码的完全访问权限，平衡了易用性和灵活性
2. **300+ 组件节点**：覆盖几乎所有主流 LLM 提供商、向量数据库、文档加载器和工具集成，是 LangChain 生态最完整的可视化封装
3. **Monorepo + Turborepo 架构**：采用 pnpm workspace + Turborepo 管理多包依赖，确保了模块间的清晰边界和高效的构建缓存
4. **AgentFlow 高级编排**：支持条件分支、循环、人工干预、子流程调用等控制流，突破了传统 Chain 的线性执行限制
5. **多 Agent 原生支持**：内置 Supervisor-Worker 模式和顺序编排模式，为复杂任务的多 Agent 协作提供了可视化解决方案
6. **企业级部署**：Docker 容器化、Prometheus/Grafana 监控、OpenTelemetry 可观测性、RBAC 权限和 SSO 集成
7. **社区/企业双轨许可**：核心功能采用 Apache 2.0 开源，企业版提供身份管理、高级分析等增值功能

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 可视化 Agent 构建 | Flowise 的拖拽式 Agent 构建展示了如何将复杂的 LLM 编排逻辑可视化，为 Self-Evolve 的 Agent 设计器提供了 UI 参考 |
| 组件化设计 | 300+ 节点组件的封装模式展示了如何将 LangChain 能力标准化为可组合的原子单元，对 Self-Evolve 的工具注册机制有启发 |
| 多 Agent 编排 | Supervisor-Worker 模式为 Self-Evolve 的多 Agent 协作提供了经过验证的编排模式参考 |
| 工作流持久化 | Flow JSON 的序列化和版本管理展示了如何持久化和复用 Agent 工作流，对 Self-Evolve 的进化历史记录有参考价值 |
| 可观测性 | Prometheus/Grafana/OpenTelemetry 集成展示了如何监控 LLM 应用的运行指标，为 Self-Evolve 的自评估基础设施提供了模板 |
| 节点池管理 | NodesPool 的动态加载和注册机制展示了如何构建可插拔的组件系统，对 Self-Evolve 的能力扩展机制有指导意义 |

## 参考资料

- [Flowise 官方网站](https://flowiseai.com)
- [Flowise GitHub 仓库](https://github.com/FlowiseAI/Flowise)
- [Flowise 文档](https://docs.flowiseai.com)
- [Flowise Cloud](https://flowiseai.com/)
- [Flowise Docker 部署指南](https://docs.flowiseai.com/configuration/deployment)
- [LangChain 官方文档](https://python.langchain.com/)

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/flowiseai__flowise`
- **分析命令**：`gitnexus analyze repos/flowiseai__flowise --index-only --skip-git --name Flowise`
- **知识图谱规模**：待分析
- **查询语句**：`NodesPool component registration; chatflow execution engine; agentflow workflow; supervisor multiagent orchestration; DataSource connection management; CachePool model caching`
- **核心执行流程候选**：用户拖拽节点 -> Flow JSON 生成 -> API 提交 -> `server` 解析 -> `NodesPool` 实例化组件 -> LangChain 执行链构建 -> 流式响应返回前端
- **关键符号/文件**：`packages/server/src/NodesPool.ts`（节点池）、`packages/server/src/DataSource.ts`（数据源）、`packages/server/src/CachePool.ts`（缓存池）、`packages/components/nodes/`（组件节点库）、`packages/agentflow/src/core/`（AgentFlow 引擎）、`packages/ui/src/`（前端画布）
- **调用关系上下文**：前端画布 -> Express API -> NodesPool 动态加载组件 -> LangChain Chain/Agent 实例化 -> LLM 调用 -> 结果流式返回；AgentFlow 工作流 -> 条件/循环/工具节点 -> 多步骤执行
- **架构结论**：该图谱结果用于把报告中的"可视化编排 / 组件节点生态 / 多 Agent 协作 / AgentFlow 引擎 / 企业级部署"定位到具体符号、文件和流程
