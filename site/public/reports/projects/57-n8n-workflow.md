# n8n: 面向技术团队的安全工作流自动化平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/n8n-io/n8n |
| Star | 75k+ |
| 技术栈 | TypeScript, Node.js, Express, Vue 3, Pinia, TypeORM, PostgreSQL/SQLite |
| 许可证 | Sustainable Use License (Fair-code) + 企业许可 |
| 开发者 | n8n GmbH (Jan Oberhauser) |

## 项目简介

n8n 是一个面向技术团队的工作流自动化平台,兼顾代码的灵活性和低代码的速度。拥有 400+ 集成、原生 AI 能力 (基于 LangChain) 和公平源码许可,n8n 让用户在完全控制数据和部署的同时构建强大的自动化工作流。作为一个成熟的企业级平台,n8n 在工作流引擎、节点系统和 AI 集成方面提供了丰富的工程实践。

## 目录结构

```
n8n__n8n/
├── packages/                # Monorepo 包结构 (pnpm workspaces)
│   ├── workflow/            # 核心工作流接口与类型
│   ├── core/                # 工作流执行引擎
│   ├── cli/                 # Express 服务端 + REST API + CLI
│   ├── editor-ui/           # Vue 3 前端应用
│   ├── nodes-base/          # 400+ 内置集成节点
│   ├── @n8n/
│   │   ├── api-types/       # 前后端共享 TypeScript 接口
│   │   ├── config/          # 集中配置管理
│   │   ├── design-system/   # Vue 组件库
│   │   ├── i18n/            # 国际化
│   │   ├── nodes-langchain/ # AI/LangChain 节点
│   │   ├── instance-ai/     # AI 助手后端
│   │   └── di/              # 依赖注入容器
│   ├── frontend/            # 前端统一入口
│   ├── node-dev/            # 节点开发 CLI 工具
│   ├── extensions/          # 扩展机制
│   └── testing/             # 测试工具 (Playwright E2E)
├── .claude/plugins/n8n/     # Claude Code 插件
└── assets/                  # 静态资源
```

## 核心模块分析

### 1. 工作流执行引擎 (packages/core/ + packages/workflow/)

n8n 的核心是节点图执行引擎,支持条件分支、循环、错误处理、子工作流调用等复杂控制流。工作流以 JSON 格式存储和传输,节点之间通过连接 (connections) 定义数据流向。引擎支持同步和异步执行,内置重试机制和错误恢复策略,可处理长时间运行的工作流。

### 2. 节点系统 (packages/nodes-base/ + packages/@n8n/nodes-langchain/)

提供 400+ 内置集成节点,覆盖数据库、消息队列、云服务、API 调用等各类场景。AI 节点包 (`@n8n/nodes-langchain`) 集成 LangChain,支持构建 AI 智能体工作流,包括 LLM 调用、向量存储检索、工具使用和链式推理。每个节点遵循标准接口,社区可以开发和贡献自定义节点。

### 3. 前端编辑器 (packages/editor-ui/ + packages/@n8n/design-system/)

基于 Vue 3 + Pinia + TypeScript 构建的可视化工作流编辑器,使用 `@xyflow/react` 风格的节点画布。设计系统 (`@n8n/design-system`) 提供统一的 Vue 组件库,确保 UI 一致性。支持拖拽创建节点、连线定义数据流、实时调试和执行监控。

### 4. AI 助手 (packages/@n8n/instance-ai/)

内置 AI 助手功能,帮助用户在 UI 中构建和优化工作流。利用 LLM 理解用户意图,自动推荐节点组合、生成工作流配置,并提供工作流优化建议。

## 技术亮点

1. **公平源码许可模式**: 采用 Sustainable Use License,源码可见、可自托管、可扩展,同时保护商业利益,为开源商业化提供了参考模式
2. **依赖注入容器 (`@n8n/di`)**: 自研 IoC 容器实现依赖注入,支持装饰器元数据,在 TypeScript 生态中实现了类似 Spring 的依赖管理
3. **Controller-Service-Repository 分层**: 后端遵循 MVC 风格的分层架构,结合事件驱动内部事件总线实现解耦通信
4. **上下文执行模型**: 不同节点类型运行在不同的执行上下文中,支持隔离和安全控制
5. **Playwright E2E 测试体系**: 完善的 E2E 测试框架,包含 Janitor 静态分析工具用于测试架构治理,支持 TCR (Test-Commit-Revert) 工作流
6. **pnpm + Turbo Monorepo**: 使用 pnpm workspaces 配合 Turbo 构建编排,每个包可独立构建和开发,支持热重载

## 适用场景

- 企业内部系统集成的自动化工作流编排
- AI 智能体工作流的快速原型构建和可视化调试
- 需要兼顾低代码与代码灵活性的数据处理管道
- 跨团队协作的自动化运维和 DevOps 流程

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 工作流引擎设计 | 成熟的节点图执行引擎和 JSON 工作流表示,Self-Evolve 可借鉴其工作流编排模型来实现进化任务的流程化执行 |
| AI 节点集成 | LangChain 节点包的实现,展示了如何在工作流中集成 LLM、向量存储和工具调用,为 Self-Evolve 的 AI 能力集成提供参考 |
| 节点扩展机制 | 标准化的节点接口和社区贡献模式,可应用于 Self-Evolve 的进化算子注册和扩展 |
| 可视化编排 | Vue 3 前端编辑器的架构设计,为 Self-Evolve 的进化流程可视化提供 UI 技术方案 |
| 企业级工程实践 | 分层架构、依赖注入、事件驱动等工程实践,为 Self-Evolve 的企业级部署提供架构参考 |
