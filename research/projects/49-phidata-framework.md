# Agno（原 Phidata）: Agent 平台 SDK 与自动改进循环

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/agno-agi/agno（原 phidata/phidata） |
| Star | 20,000+ |
| 技术栈 | Python, FastAPI, PostgreSQL, Docker, OpenTelemetry |
| 许可证 | MPL-2.0（核心）/ 商业许可 |
| 开发者 | Agno（原 Phidata 团队） |

## 项目简介

Agno（原名 Phidata）是一个用于构建、运行和管理 Agent 平台的 SDK。它允许开发者使用任何 Agent 框架构建 Agent，以生产服务的形式运行（集成追踪、调度和 RBAC），并通过单一控制平面进行管理。其独特之处在于内置了自动改进循环（Auto-Improvement Loop），让 Agent 平台能够持续优化自身性能。Agno 提供了 50+ 端点的生产 API、100+ 工具集成、OpenTelemetry 可观测性以及 JWT 认证和 RBAC 权限控制。

## 目录结构

```
phidata__phidata/
├── libs/agno/agno/            # 核心框架库
│   ├── agent/                 # Agent 核心实现
│   ├── team/                  # 多 Agent 团队协作
│   ├── workflow/              # 工作流引擎
│   ├── tools/                 # 工具系统（100+ 集成）
│   ├── models/                # LLM 模型适配层
│   ├── knowledge/             # 知识库与 RAG
│   ├── memory/                # 记忆管理
│   ├── learn/                 # 学习与自改进模块
│   ├── db/                    # 数据库适配器
│   └── vectordb/              # 向量数据库集成
├── cookbook/                  # 示例与模式集合
├── scripts/                   # 开发与构建脚本
├── docs/                      # 文档（符号链接）
└── specs/                     # 设计文档（符号链接）
```

## 核心模块分析

### 1. Agent 核心引擎

Agno 的 Agent 实现遵循"单 Agent 优先"的设计哲学：从单个 Agent 开始，仅在需要时扩展为多 Agent 模式。每个 Agent 支持：
- 同步和异步双模式 API
- 结构化输出（output_schema）
- 工具调用和函数执行
- 上下文管理和历史记录
- 可观测性集成

### 2. 学习与自改进模块（Learn Module）

`learn/` 模块是 Agno 区别于其他 Agent 框架的关键特性，实现了 Agent 的学习与自改进能力：
- 从执行轨迹中提取模式
- 将成功经验编码为可复用知识
- 通过反馈循环持续优化 Agent 行为
- cookbook/08_learning/ 是该模块的金标准实现参考

### 3. 团队协作系统（Team）

`team/` 模块提供多 Agent 团队协作能力，支持：
- Agent 角色分工与协调
- 任务分发与结果聚合
- 团队级别的上下文共享
- 多种协作拓扑模式

### 4. 工作流引擎（Workflow）

`workflow/` 模块实现了结构化的 Agent 工作流，支持：
- 串行和并行步骤定义
- 条件分支与循环
- 错误处理与重试
- 工作流序列化与版本管理

### 5. 生产运行时

Agno 提供完整的生产运行时能力：
- 50+ 端点的 REST API（支持 SSE 和 WebSocket）
- JWT 认证与 RBAC 权限控制
- OpenTelemetry 追踪
- Cron 调度和后台任务
- 多租户隔离

## 技术亮点

1. **自动改进循环**：内置的 Auto-Improving Agent Platform 功能让 Agent 平台能够根据运行数据持续优化自身，是"构建自我改进系统的系统"的直接实现。
2. **多接口暴露**：Agent 可通过 Slack、Telegram、WhatsApp、Discord、AG-UI、A2A 等多种接口对外服务，极大扩展了 Agent 的触达范围。
3. **PostgreSQL 生产级存储**：生产环境使用 PostgreSQL 存储会话、记忆、知识和追踪数据，SQLite 仅用于开发环境。
4. **100+ 工具集成**：预构建的工具集（Toolkit）覆盖了搜索、代码执行、数据库操作、文件管理等常见需求，降低集成成本。
5. **MCP 文档集成**：支持将文档作为 MCP Server 集成到 Cursor、VSCode 等编码工具中，实现开发体验的无缝融合。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自改进循环 | 内置的自动改进循环为 Self-Evolve 提供了"系统自我优化"的直接实现参考 |
| 学习模块 | learn/ 模块的模式提取和经验编码机制对应 Self-Evolve 的知识积累需求 |
| 多 Agent 团队 | Team 模块的多 Agent 协作为 Self-Evolve 的多 Agent 自评估提供了架构参考 |
| 可观测性 | OTel 追踪和运行历史为 Self-Evolve 的自诊断提供了基础设施 |
| 生产部署 | JWT/RBAC/多租户等生产特性为 Self-Evolve 的安全自改进提供了工程参考 |
| 工具生态 | 100+ 工具集成为 Self-Evolve 的工具扩展提供了丰富的工具库参考 |
