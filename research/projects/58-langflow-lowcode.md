# Langflow: AI 驱动的可视化智能体与工作流构建平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/langflow-ai/langflow |
| Star | 60k+ |
| 技术栈 | Python, FastAPI, React 19, TypeScript, Vite, Zustand, @xyflow/react |
| 许可证 | MIT |
| 开发者 | Langflow AI (langflow.org) |

## 项目简介

Langflow 是一个强大的 AI 智能体和工作流构建与部署平台,提供可视化创作体验和内置的 API/MCP 服务器。开发者可以通过拖拽组件在画布上构建 AI 工作流,将其部署为 API 或 MCP 服务器供其他应用调用。Langflow 开箱即用,支持所有主流 LLM、向量数据库和丰富的 AI 工具库,是低代码 AI 应用开发领域的标杆项目。

## 目录结构

```
langflow__langflow/
├── src/
│   ├── backend/             # Python 后端
│   │   └── base/langflow/
│   │       ├── main.py      # FastAPI 入口
│   │       ├── routers/     # API 路由
│   │       ├── services/    # 业务逻辑
│   │       ├── models/      # 数据模型
│   │       ├── auth/        # 认证模块
│   │       ├── alembic/     # 数据库迁移
│   │       └── utils/       # 工具函数
│   ├── frontend/            # React 前端
│   │   └── src/
│   │       ├── components/  # React 组件
│   │       ├── pages/       # 页面
│   │       ├── stores/      # Zustand 状态管理
│   │       └── types/       # TypeScript 类型
│   ├── lfx/                 # 执行器核心 (独立包)
│   │   └── src/lfx/
│   │       ├── components/  # 组件基类与内置组件
│   │       ├── graph/       # 图执行引擎
│   │       ├── io/          # 输入输出管理
│   │       ├── events/      # 事件系统
│   │       ├── load/        # 动态加载
│   │       └── custom/      # 自定义组件支持
│   └── sdk/                 # Python SDK
├── docs/                    # Docusaurus 文档站
└── Makefile                 # 构建与开发命令
```

## 核心模块分析

### 1. 可视化流程构建器 (src/frontend/)

基于 React 19 + `@xyflow/react` 构建的可视化画布编辑器,支持拖拽组件到画布、连线定义数据流、实时预览和逐步调试。采用 Zustand 进行轻量级状态管理,Vite 提供快速的开发体验。前端通过 HTTP/WebSocket 与后端通信,支持工作流的实时执行监控。

### 2. 执行引擎 (src/lfx/)

Langflow 的核心执行引擎,负责解析流程 JSON、构建执行图、管理组件实例和数据流传递。支持条件分支、循环、并行执行等复杂控制流。组件是执行的基本单元,每个组件有明确定义的输入和输出端口,数据通过端口之间的连接流动。引擎支持动态加载组件模块,允许运行时扩展。

### 3. 组件系统 (src/lfx/components/)

提供丰富的内置组件库,涵盖 LLM 调用、向量存储、文档加载、文本分割、工具使用等各类 AI 功能。每个组件遵循"单一职责"原则,支持通过 Python 代码自定义。组件的类名、名称、输入输出端口一旦发布即冻结 (向后兼容),旧组件通过 `legacy=True` 标记逐步淘汰。

### 4. 部署系统 (src/backend/)

支持多种部署模式:作为 REST API 部署 (每个工作流自动生成 API 端点)、作为 MCP 服务器部署 (将工作流转化为 MCP 工具供 MCP 客户端调用)、导出为 JSON 供 Python 应用使用。集成 LangSmith、LangFuse 等可观测性工具,提供企业级安全性和可扩展性。

## 技术亮点

1. **三层包架构**: `lfx` (执行器核心) -> `langflow-base` (平台层) -> `langflow` (完整发行版),依赖方向单向流动,确保核心引擎的独立性
2. **组件向后兼容保证**: 组件的公共接口一旦发布即冻结,通过 `legacy=True` 标记逐步淘汰旧组件,而非直接修改,保证用户保存的工作流 JSON 始终可执行
3. **双模式部署**: 每个工作流既可部署为 REST API,也可部署为 MCP 服务器,实现一次构建、多种消费模式
4. **交互式 Playground**: 提供逐步执行控制,开发者可以在 Playground 中逐步调试工作流,检查每个节点的输入输出
5. **多智能体编排**: 支持会话管理和检索增强的多智能体编排,可以构建复杂的多智能体协作系统
6. **Langflow Desktop**: 提供桌面应用版本,所有依赖内置,无需管理 Python 环境

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 可视化工作流编排 | 拖拽式 AI 工作流构建器的完整实现,Self-Evolve 可借鉴其画布编辑器架构来可视化展示进化流程 |
| 组件系统设计 | "单一职责 + 端口连接"的组件架构和向后兼容策略,适用于 Self-Evolve 的进化算子模块化设计 |
| MCP 服务器部署 | 将工作流转化为 MCP 工具的部署模式,Self-Evolve 可利用该模式将进化能力暴露为标准化工具接口 |
| 图执行引擎 | 基于图的执行引擎实现,支持条件分支和并行执行,为 Self-Evolve 的进化任务编排提供技术方案 |
| 三层包架构 | `lfx` -> `langflow-base` -> `langflow` 的分层架构,为 Self-Evolve 的核心/平台/发行版分层提供参考 |
