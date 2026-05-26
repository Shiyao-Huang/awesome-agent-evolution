# Agenta: 开源 LLMOps 评估与可观测性平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Agenta-AI/agenta |
| Star | 1,500+ |
| 技术栈 | Python (FastAPI 后端), TypeScript/React (Next.js 前端), PostgreSQL (数据库), Docker (部署) |
| 许可证 | MIT |
| 开发者 | Agenta AI (62+ 贡献者) |

## 项目简介

Agenta 是一个面向 LLM 应用全生命周期的开源 LLMOps 平台，集成了 Prompt 管理、系统化评估和生产可观测性三大核心能力。该平台帮助工程团队和产品团队更快地构建可靠的 LLM 应用，弥合了 Prompt 工程师（SME）与开发者之间的协作鸿沟。

平台的核心设计理念是将 LLM 应用开发中的关键环节标准化：通过交互式 Playground 支持多模型 Prompt 对比实验，通过灵活的测试集和 20+ 预置评估器实现自动化质量把关，通过 OpenTelemetry 原生的链路追踪实现生产环境监控。Agenta 支持 50+ 种 LLM 模型的集成实验，并提供 API 和 UI 双通道操作接口。

Agenta 采用清晰的分层架构设计，前端使用 React + Ant Design + Tailwind CSS + Jotai 状态管理，后端基于 FastAPI 并遵循 Router -> Service -> DAO Interface -> DAO Implementation 的严格依赖方向。项目通过 Monorepo 方式管理前端 Web（OSS + EE）、API、SDK 和多种客户端库。

## 目录结构
```
agenta/
├── api/                     ★ FastAPI 后端（OSS + EE 分层）
│   ├── oss/src/             ★ 开源版 API
│   │   ├── apis/fastapi/    路由注册与请求处理
│   │   ├── core/            领域服务层
│   │   └── dbs/postgres/    数据库访问层
│   └── ee/src/              ★ 企业版扩展（计费、组织、工作空间）
├── web/                     ★ 前端 Monorepo
│   ├── oss/src/             开源版前端页面与组件
│   ├── ee/src/              企业版前端扩展
│   └── packages/            共享包（entities, ui, shared 等）
├── sdks/                    SDK（Python / Node.js）
├── clients/                 API 客户端生成
├── services/                基础设施服务
├── hosting/                 Docker Compose 自托管部署
├── hooks/                   Git Hooks
├── docs/                    项目文档
└── examples/                示例代码
```

## 核心模块分析

### 1. Prompt 管理与 Playground
提供交互式 LLM Playground，支持 Prompt 的版本控制、分支管理和环境隔离。SME 可通过 UI 界面进行多模型（50+ LLM）的 Prompt 对比实验，支持复杂的配置 Schema 协作，超越简单的文本 Prompt 编辑。核心实体使用 Git 风格的 Artifact/Variant/Revision 模式管理版本历史。

### 2. LLM 评估框架
系统化的 LLM 应用评估模块，支持从生产数据、Playground 实验或 CSV 文件创建测试集。提供 20+ 预置评估器（包括 LLM-as-Judge）和自定义评估器扩展机制。评估可通过 UI（面向 SME）和 API（面向开发者）双通道执行，并集成了人类反馈标注功能。

### 3. LLM 可观测性
基于 OpenTelemetry 原生标准的链路追踪系统，兼容 OpenLLMetry 和 OpenInference 规范。提供成本追踪、延迟监控、使用模式分析等生产级可观测性能力，内置与主流模型和框架的集成适配器。

### 4. 领域驱动分层架构
后端遵循严格的分层架构：Router -> Service -> DAO Interface -> DAO Implementation。每个领域模块包含独立的路由、模型、DTO、服务和数据访问层。定义了领域级异常体系（而非直接抛出 HTTPException），Service 层返回类型化 DTO 而非原始字典。

### 5. 前端 Entity 状态管理
采用 Jotai + TanStack Query 的原子化状态管理方案。通过 Molecule 模式统一管理实体的 CRUD 操作、草稿状态和缓存，通过 Bridge 模式（Loadable Bridge、Runnable Bridge）管理可执行实体的数据流。使用 @agenta/ui、@agenta/entities 等工作区包实现跨 OSS/EE 的组件复用。

## 技术亮点
1. **Git 风格版本管理**：Prompt 和工作流配置采用 Artifact/Variant/Revision 模式，支持分支、提交日志和版本对比
2. **LLM-as-Judge 评估**：内置 20+ 预置评估器，支持自动化的 LLM 输出质量评判
3. **OpenTelemetry 原生**：可观测性完全基于 OTel 标准，可与现有监控基础设施无缝集成
4. **Monorepo + EE/OSS 分层**：前端和后端均采用 OSS 基线 + EE 扩展的渐进式架构
5. **Molecule 状态模式**：前端使用 Molecule 模式统一管理实体的查询、草稿、脏检测等状态

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 评估框架 | Agenta 的评估框架是 Self-Evolve 评估层的直接参考：20+ 评估器、LLM-as-Judge、人类反馈集成的组合模式 |
| Prompt 工程 | Playground 的版本控制、A/B 对比、环境隔离机制为 Self-Evolve 的 Prompt 进化提供了工程实践基础 |
| 可观测性 | OpenTelemetry 链路追踪为 Self-Evolve 的执行监控和调试提供了可复用的基础设施模式 |
| Agent 编排 | Agenta 的 Runnable Bridge 模式展示了如何管理可执行实体的输入/输出端口和数据流 |
| 进化循环 | Agenta 的"实验 -> 评估 -> 部署 -> 监控"工作流与 Self-Evolve 的进化循环高度对齐 |

## 参考资料
- [Agenta GitHub](https://github.com/Agenta-AI/agenta)
- [Agenta 官方文档](https://agenta.ai/docs)
- [Agenta Cloud](https://cloud.agenta.ai)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/agenta_ai__agenta`
- **分析命令**：`gitnexus analyze repos/agenta_ai__agenta --index-only --skip-git --name Agenta`
- **知识图谱规模**：待分析
- **查询语句**：`evaluation framework, LLM-as-Judge, prompt versioning, OpenTelemetry tracing, molecule pattern, DAO interface`
- **核心执行流程候选**：Create Testset -> Configure Evaluator -> Run Evaluation -> Collect Results -> Deploy to Production -> Monitor Traces
- **关键符号/文件**：`api/oss/src/core/evaluations/`, `api/oss/src/core/workflows/`, `web/packages/agenta-entities/`, `api/oss/src/dbs/postgres/`
- **调用关系上下文**：前端 Jotai atoms 通过 TanStack Query 调用后端 FastAPI 路由，路由层委托 Service 处理业务逻辑，Service 通过 DAO Interface 访问 PostgreSQL 数据库
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
