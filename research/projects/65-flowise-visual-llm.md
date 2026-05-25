# Flowise: 拖拽式可视化 LLM 流程构建平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/FlowiseAI/Flowise |
| Star | 37k+ |
| 技术栈 | TypeScript, React, Node.js, LangChain, pnpm Monorepo |
| 许可证 | Apache License 2.0 |
| 开发者 | FlowiseAI Team (Henry Hung) |

## 项目简介

Flowise 是一个开源的低代码/无代码平台，允许用户通过拖拽方式构建 LLM 驱动的 AI 应用。它将复杂的 AI Agent 编排、RAG 管道、工具链集成等流程可视化，使非技术用户也能快速搭建从简单聊天机器人到多步骤 Agent 工作流的各类 AI 应用。平台基于 LangChain 生态构建，继承了后者丰富的模型连接器和工具集，同时通过图形化界面大幅降低了使用门槛。

Flowise 采用 Monorepo 架构，包含三个核心模块：基于 React 的可视化前端编辑器、Node.js 后端 API 服务，以及组件库（包含所有第三方节点集成）。用户可以在画布上自由组合 LLM Chain、Retrieval QA、Agent、Tool 等节点，通过连线定义数据流向，实时预览和调试整个流程。平台还内置了 API 文档生成、多种部署方案（Docker、云平台）和完整的开发者工具链。

作为一个面向 AI 应用开发的低代码平台，Flowise 在 LangFlow、Dify 等同类项目中以其直观的交互设计、活跃的社区和丰富的集成节点脱颖而出，特别适合快速原型验证和企业内部 AI 工具搭建。

## 目录结构

```
flowiseai__flowise/
├── packages/
│   ├── server/            # ★ Node.js 后端服务
│   │   ├── src/           # 服务端源码
│   │   ├── bin/           # CLI 入口
│   │   ├── marketplaces/  # 市场集成
│   │   └── cypress/       # E2E 测试
│   ├── ui/                # ★ React 前端 UI
│   │   ├── src/           # 前端源码
│   │   ├── public/        # 静态资源
│   │   └── vite.config.js # Vite 构建配置
│   ├── components/        # ★ 组件库（LangChain 节点集成）
│   │   ├── src/           # 节点实现源码
│   │   ├── nodes/         # 可视化节点定义
│   │   ├── credentials/   # 凭证管理模块
│   │   └── evaluation/    # 评估测试模块
│   ├── agentflow/         # ★ Agent Flow 编排引擎
│   │   └── src/           # Agent 工作流实现
│   ├── api-documentation/ # Swagger API 文档
│   └── observe/           # 可观测性模块
├── docker/                # ★ Docker 部署配置
├── images/                # 项目图片资源
├── metrics/               # 性能指标监控
├── i18n/                  # 国际化翻译文件
├── package.json           # 根包配置
├── pnpm-workspace.yaml    # ★ pnpm Monorepo 工作区配置
├── turbo.json             # Turborepo 构建配置
└── artillery-load-test.yml # 负载测试配置
```

## 核心模块分析

### 1. 可视化流程编辑器（packages/ui）

Flowise 的前端基于 React + Vite 构建，实现了一个完整的拖拽式流程编辑器。编辑器支持节点的自由拖放、连线、分组、注释等操作，提供实时预览和调试面板。每个节点对应 LangChain 中的一个组件（LLM、Vector Store、Tool 等），节点的参数通过表单化配置完成，无需编写代码。编辑器还支持流程的导入导出、版本管理和模板复用。

### 2. 组件库与节点系统（packages/components）

组件库是 Flowise 的核心资产，封装了 LangChain 生态中的各类组件为可视化节点。包括 LLM 节点（OpenAI、Anthropic、Ollama 等）、向量数据库节点（Pinecone、Chroma、Qdrant 等）、文档加载器（PDF、Web、数据库）、文本分割器、Embedding 模型、工具节点（搜索引擎、API 调用等）。每个节点定义了输入输出类型、参数配置和连接约束，确保流程图的类型安全。credentials 子模块管理各服务的 API Key 等敏感信息。

### 3. Agent Flow 编排引擎（packages/agentflow）

Agent Flow 是 Flowise 的 Agent 编排核心，支持构建复杂的多步骤 Agent 工作流。不同于简单的线性 Chain，Agent Flow 允许定义条件分支、循环、并行执行等控制流，实现 ReAct、Plan-and-Execute 等 Agent 范式。引擎负责管理 Agent 的状态、工具调用、记忆维护和错误处理，提供从简单对话到复杂推理任务的端到端支持。

### 4. 后端 API 服务（packages/server）

后端服务基于 Node.js（Express）构建，提供完整的 REST API 用于流程的 CRUD、执行和监控。服务层负责管理聊天记录、凭证存储、文件上传、API Key 等持久化数据，同时集成了 Swagger 自动生成 API 文档。服务支持多种数据库后端（SQLite、PostgreSQL），可通过环境变量灵活配置。内置的身份认证和速率限制确保生产环境的安全性。

### 5. 可观测性与评估（packages/observe + packages/components/evaluation）

Flowise 内置了 LLM 应用的可观测性能力，通过 observe 模块跟踪每次 LLM 调用的输入输出、Token 消耗、延迟等指标。evaluation 模块提供了基于数据集的自动化评估框架，用户可以定义评估标准和测试数据，量化比较不同流程配置的效果。这些能力对于持续优化 LLM 应用的质量和成本至关重要。

## 技术亮点

1. **零代码 AI 应用搭建**：通过拖拽式可视化编辑器，将 LangChain 的复杂编排抽象为直观的流程图，使非开发者也能构建生产级 LLM 应用
2. **丰富的组件生态**：内置 100+ 可视化节点，覆盖主流 LLM 提供商、向量数据库、文档加载器、工具集成等，支持自定义节点扩展
3. **Agent Flow 多步编排**：支持条件分支、循环、工具调用等复杂控制流的 Agent 工作流引擎，可实现 ReAct、Multi-Agent 等高级范式
4. **全栈 Monorepo 架构**：采用 pnpm workspace + Turborepo 管理，前后端统一构建和发布，支持 Docker 一键部署和多种云平台托管
5. **内置可观测性**：跟踪 LLM 调用的 Token 消耗、延迟和质量指标，提供基于数据集的自动化评估框架
6. **API 优先设计**：所有流程均可通过 REST API 调用，支持嵌入到现有应用中作为 AI 后端服务

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 可视化编排范式 | 拖拽式流程编辑器的设计模式可用于 Self-Evolve 的演化过程可视化 |
| 组件化架构 | 节点系统的类型安全和可扩展设计，为自演化系统的模块化提供参考 |
| Agent 编排引擎 | Agent Flow 的条件分支和工具调用机制，可用于构建自演化的 Agent 工作流 |
| 低代码降低门槛 | 通过可视化降低 AI 应用开发门槛的理念，适用于自演化系统的用户交互设计 |
| 可观测性实践 | LLM 调用的追踪、指标收集和评估框架，为自演化系统的质量监控提供范例 |
| Monorepo 工程化 | pnpm + Turborepo 的全栈工程化实践，对多模块自演化项目的构建管理有借鉴意义 |

## 与同类项目对比

| 特性 | Flowise | LangFlow | Dify |
|------|---------|----------|------|
| 核心定位 | 可视化 LLM 编排 | 可视化 LLM 编排 | LLM 应用平台 |
| 技术栈 | React + Node.js | React + Python | React + Python |
| 后端框架 | Express/Node.js | FastAPI | Flask |
| Agent 支持 | Agent Flow | Agent 节点 | Agent 工作流 |
| RAG 支持 | 内置 | 内置 | 内置 |
| 部署方式 | Docker / npm | Docker / pip | Docker |
| 许可证 | Apache 2.0 | MIT | Apache 2.0 |

## 参考资料

- Flowise 官网：https://flowiseai.com
- 官方文档：https://docs.flowiseai.com
- GitHub 仓库：https://github.com/FlowiseAI/Flowise
- LangChain 项目：https://github.com/langchain-ai/langchain
- 部署指南：https://docs.flowiseai.com/configuration/deployment
- Flowise Cloud：https://flowiseai.com

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/flowiseai__flowise`
- **分析命令**：`gitnexus analyze repos/flowiseai__flowise --index-only --skip-git --name Flowise`
