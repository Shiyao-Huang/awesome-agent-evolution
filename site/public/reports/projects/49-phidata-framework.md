# Agno (PhiData): 生产级 Agent 平台 SDK 与自改进循环

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/agno-agi/agno (原名 phidata) |
| Star | 18000+ |
| 技术栈 | Python 3.10+, AsyncIO, PostgreSQL/SQLite, 20+ Vector DB, 100+ Tool Integrations, Docker |
| 许可证 | MIT |
| 开发者 | Agno (Ashpreet Bedi / phidata 团队) |

## 项目简介

Agno（前身为 PhiData）是一个用于构建、运行和管理 Agent 平台的生产级 SDK。其核心理念是让开发者完全掌控自己的 Agent 技术栈——包括数据、上下文、工具、权限、记忆和人机审查循环。Agno 允许开发者使用任何 Agent 框架构建 Agent，将其作为生产服务运行（内置追踪、调度和 RBAC），并通过统一的控制平面进行管理。

Agno 的 Agent 基础模型为：Agent = Memory + Knowledge + Tools + LLM。在这个模型中，Memory 提供短期和长期记忆能力，Knowledge 通过 RAG 管道注入领域知识，Tools 连接外部系统和 API，LLM 提供推理和生成能力。该框架支持 100+ 预构建工具集成、20+ 向量数据库后端、多种 LLM 提供商，以及 Slack、Telegram、WhatsApp、Discord、AG-UI、A2A 等多种接口暴露方式。

从自我进化的角度看，Agno 最值得关注的是其 Auto Improving Agent Platform 教程——该教程展示了如何构建一个由 Claude Code 完全管理的、具有自动改进循环的 Agent 平台。结合其 Storage（会话、记忆、知识、追踪的持久化存储）、Observability（OpenTelemetry 追踪、运行历史、审计日志）和 Context Providers（从 Slack、Drive、Wiki、MCP 等源获取实时数据）能力，Agno 为构建自我改进的 Agent 系统提供了完整的基础设施。

## 目录结构
```
agno/
├── libs/agno/agno/            ★ 核心框架代码
│   ├── agent/                 ★ Agent 核心（同步+异步）
│   ├── team/                  ★ 多 Agent 团队协作
│   ├── workflow/              ★ 工作流编排
│   ├── tools/                 ★ 100+ 预构建工具
│   ├── models/                ★ 多 LLM 提供商集成
│   ├── knowledge/             ★ RAG 管道与知识管理
│   ├── memory/                ★ 记忆系统（短期/长期）
│   ├── learn/                 ★ 学习模块
│   ├── db/                    ★ 数据库适配器（PostgreSQL/SQLite）
│   ├── vectordb/              ★ 20+ 向量数据库后端
│   ├── storage/               会话与运行存储
│   ├── embeddings/            Embedding 提供商
│   ├── document/              文档处理管道
│   ├── utils/                 工具函数
│   └── ...
├── cookbook/                  ★ 丰富的示例和模式
│   ├── 08_learning/           ★ 学习相关示例（黄金标准）
│   └── ...
├── scripts/                   开发和构建脚本
├── tests/                     测试套件
└── .cursorrules               编码模式和约定
```

## 核心模块分析

### 1. Agent 核心 — Memory + Knowledge + Tools + LLM
Agno 的 Agent 是一个整合了四大核心组件的统一实体。Memory 管理对话历史和长期记忆（支持 PostgreSQL/SQLite 持久化），Knowledge 通过 RAG 管道从文档、URL、PDF 等源注入领域知识，Tools 提供 100+ 预构建工具（Web 搜索、代码执行、Shell、数据库查询等）以及自定义工具注册，LLM 支持多提供商（OpenAI、Anthropic、Gemini、Mistral 等）。所有公共方法同时提供同步和异步变体。

### 2. Team — 多 Agent 团队协作
Team 模块支持多个 Agent 组成协作团队。每个 Agent 拥有独立的角色定义、工具集和记忆空间。Team 支持多种协作模式，包括顺序执行、并行执行和条件路由。团队成员可以共享 Knowledge Base，同时保持独立的 Memory 上下文。该模块遵循"从单个 Agent 开始，只在需要时才扩展"的设计原则。

### 3. Workflow — 工作流编排
Workflow 模块提供声明式的工作流定义能力，支持条件分支、循环、并行执行和子工作流嵌套。工作流通过 Session 管理状态，支持持久化和恢复。该模块的设计目标是让复杂的多步骤任务编排变得简洁和可维护。

### 4. Knowledge/RAG 管道
Knowledge 模块实现了完整的 RAG 管道。它支持 20+ 向量数据库后端（Pinecone、Qdrant、Weaviate、Chroma、Milvus、pgvector 等），提供自动文档索引、分块、Embedding 和检索。文档源支持 PDF、CSV、文本、URL 等多种格式。Knowledge Base 可在多个 Agent 间共享，支持增量更新和语义搜索。

### 5. 自改进循环与可观测性
Agno 的自改进能力体现在三个层面。第一，Storage 层持久化所有会话、记忆、知识和追踪数据，为分析和优化提供数据基础。第二，Observability 通过 OpenTelemetry 追踪、运行历史和审计日志提供全链路可观测性。第三，Auto Improving Agent Platform 教程展示了如何将这些能力组合成一个自动改进循环——通过追踪分析 Agent 行为，自动调整 Prompt、工具配置和知识库。

## 技术亮点

1. **Agent = Memory + Knowledge + Tools + LLM**：统一的 Agent 模型，四大核心组件即插即用
2. **20+ 向量数据库后端**：Pinecone、Qdrant、Weaviate、Chroma、Milvus、pgvector 等，灵活选择
3. **100+ 预构建工具集成**：Web 搜索、代码执行、Shell、数据库查询等开箱即用
4. **全链路可观测性**：OpenTelemetry 追踪、运行历史、审计日志，支持 50+ 端点的 Production API
5. **多接口暴露**：Slack、Telegram、WhatsApp、Discord、AG-UI、A2A 等多种暴露方式
6. **自动改进循环**：Auto Improving Agent Platform 教程展示由 Claude Code 管理的自改进 Agent 平台
7. **Context Providers**：从 Slack、Google Drive、Wiki、MCP 等源实时获取上下文数据
8. **同步+异步双模式**：所有公共方法同时提供同步和异步变体
9. **Production Ready**：JWT RBAC、多用户/多租户隔离、Cron 调度、后台任务

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | Auto Improving Agent Platform 实现自动改进循环；Storage 持久化运行数据用于优化 |
| Prompt 工程 | Agent 通过 system_message 和 instructions 定义行为；支持结构化输出（output_schema） |
| 评估框架 | Observability 提供 OpenTelemetry 追踪和运行历史；审计日志记录 Agent 行为 |
| Agent 编排 | Workflow 声明式编排 + Team 多 Agent 协作 + 子工作流嵌套 |
| 知识管理 | 20+ 向量数据库的 RAG 管道，自动文档索引和语义检索 |
| 记忆系统 | 短期记忆（对话历史）+ 长期记忆（PostgreSQL/SQLite 持久化） |
| 工具系统 | 100+ 预构建工具 + 自定义工具注册 + MCP 协议支持 |
| 生产部署 | 50+ 端点 Production API、JWT RBAC、多租户隔离、Cron 调度、Docker 部署 |

## 参考资料
- GitHub: https://github.com/agno-agi/agno
- 官网: https://agno.com
- 文档: https://docs.agno.com
- 首个 Agent 教程: https://docs.agno.com/first-agent
- Auto Improving Agent Platform: https://docs.agno.com/tutorials/starter/overview
- MCP 服务器: https://docs.agno.com/mcp

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/phidata__phidata`
- **分析命令**：`gitnexus analyze repos/phidata__phidata --index-only --skip-git --name Agno`
- **知识图谱规模**：待分析
- **查询语句**：`agent memory knowledge tools workflow team RAG vector_db storage observability context_provider`
- **核心执行流程候选**：`Agent.run() -> Memory load -> Knowledge retrieve -> LLM call -> Tool execute -> Memory update -> Response`；`Workflow.execute() -> Session management -> Node execution -> Conditional routing -> Parallel execution`
- **关键符号/文件**：`libs/agno/agno/agent/`, `libs/agno/agno/team/`, `libs/agno/agno/workflow/`, `libs/agno/agno/tools/`, `libs/agno/agno/knowledge/`, `libs/agno/agno/memory/`, `libs/agno/agno/models/`, `libs/agno/agno/vectordb/`, `libs/agno/agno/db/`, `cookbook/`
- **调用关系上下文**：Agent 初始化时组合 Memory + Knowledge + Tools + LLM 四大组件 -> Agent.run() 触发执行循环 -> Memory 加载对话历史 -> Knowledge 通过 RAG 检索相关文档 -> LLM 根据上下文和工具定义生成回复 -> 如需工具调用则执行 Tools -> Memory 更新对话状态 -> Storage 持久化会话数据 -> Observability 通过 OpenTelemetry 记录追踪 -> Team 协调多 Agent 间的消息传递和任务分配
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
