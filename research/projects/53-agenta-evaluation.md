# Agenta: 开源 LLMOps 全栈平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Agenta-AI/agenta |
| Star | 1.5k+ |
| 技术栈 | Python, FastAPI, React, TypeScript, PostgreSQL, Jotai, TanStack Query, Ant Design |
| 许可证 | MIT |
| 开发者 | Agenta AI |

## 项目简介

Agenta 是一个面向生产环境的开源 LLMOps 平台,帮助工程和产品团队通过集成的 Prompt 管理、系统化评估和可观测性来构建可靠的 LLM 应用。平台提供交互式 Playground、50+ 模型支持、20+ 预置评估器以及完善的可观测性追踪,覆盖了 LLM 应用从开发到生产的全生命周期。

## 目录结构

```
agenta_ai__agenta/
├── api/                     # 后端 API 服务
│   ├── oss/src/             # 开源版本
│   │   ├── apis/fastapi/    # FastAPI 路由层
│   │   │   └── <domain>/    # 按领域划分 (workflows, testsets, evaluators...)
│   │   ├── core/            # 核心业务逻辑层
│   │   │   └── <domain>/    # DTO, 接口, 服务
│   │   └── dbs/postgres/    # 数据库层
│   │       └── <domain>/    # DAO, DBE, 映射
│   ├── ee/src/              # 企业版扩展
│   │   ├── core/            # 计费、组织、订阅
│   │   └── main.py          # EE 扩展入口
│   └── entrypoints/         # 依赖注入与路由挂载
├── web/                     # 前端应用
│   ├── oss/src/             # OSS 前端
│   │   ├── components/      # 模块化组件
│   │   ├── state/           # Jotai 状态管理
│   │   └── pages/           # 页面路由
│   ├── ee/src/              # EE 前端
│   └── packages/            # 共享包
│       ├── agenta-ui/       # UI 组件库
│       ├── agenta-entities/ # 实体状态管理 (Molecule 模式)
│       └── agenta-entity-ui/ # 实体选择 UI
├── sdks/                    # Python/TypeScript SDK
├── clients/                 # API 客户端 (Fern 生成)
├── services/                # 基础设施服务
├── docs/                    # 文档
└── examples/                # 使用示例
```

## 核心模块分析

### 1. Prompt 管理与 Playground (web/oss/src/components/Playground/)

提供交互式 LLM Playground,支持多模型并排对比、版本控制和复杂配置 Schema 协作。采用 Git 风格的 Artifact/Variant/Revision 模式管理 Prompt 版本,支持分支和环境的版本控制,使领域专家与工程师可以协作优化 Prompt。

### 2. LLM 评估框架 (api/oss/src/core/evaluators/)

系统化的 LLM 应用评估框架,支持灵活的测试集管理 (从生产数据、Playground 实验或 CSV 导入)、20+ 预置评估器 (含 LLM-as-Judge)、自定义评估器以及人工反馈集成。可通过 UI (面向领域专家) 或 API (面向工程师) 两种方式运行评估。

### 3. 可观测性追踪 (api/oss/src/core/tracing/)

提供 LLM 应用的生产环境可观测性,支持请求追踪、延迟分析、Token 用量统计和成本监控。帮助团队定位 LLM 应用中的性能瓶颈和质量问题。

### 4. 实体状态管理 - Molecule 模式 (web/packages/agenta-entities/)

创新的 Molecule 模式用于实体状态管理,提供统一的 CRUD 操作接口,集成草稿状态、加载指示器和缓存管理。支持 Loadable Bridge (数据源桥接) 和 Runnable Bridge (可执行实体桥接) 两种模式,实现复杂实体层级管理。

## 技术亮点

1. **Git 风格版本管理**: 使用 Artifact/Variant/Revision 三层模型管理 Prompt 和工作流版本,支持提交、回滚、分支等操作,为 LLM 应用的版本控制提供了工程化方案
2. **Molecule 状态模式**: 创新的实体状态管理模式,将原子 (atoms)、减速器 (reducers)、命令式读写统一为单一 API,支持细粒度订阅和内存管理
3. **严格分层架构**: Router -> Service -> DAO Interface -> DAO Implementation 四层架构,核心服务依赖接口而非实现,通过依赖注入实现松耦合
4. **OSS/EE 双轨架构**: 开源版与企业版代码分离但架构统一,EE 通过 `extend_main()` 增量扩展 OSS,不引入独立架构
5. **领域异常体系**: 每个领域定义独立的异常层级,在路由边界捕获并转换为 HTTP 响应,避免核心层对 HTTP 的耦合
6. **Jotai + TanStack Query**: 使用 `atomWithQuery` 将 Jotai 响应式状态与 TanStack Query 的缓存同步结合,实现高效的数据获取和状态管理

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 评估框架设计 | 20+ 评估器和灵活测试集管理系统,为 Self-Evolve 的自我评估模块提供完整参考,尤其是 LLM-as-Judge 的实现模式 |
| 版本管理架构 | Git 风格的 Artifact/Variant/Revision 模型,可直接应用于 Self-Evolve 的代码/配置版本进化管理 |
| 可观测性实践 | 请求追踪和性能监控的工程实现,为 Self-Evolve 的进化过程可观测性提供技术方案 |
| 分层架构参考 | 严格的四层架构和领域异常体系,为 Self-Evolve 的模块化设计提供架构范本 |
| 状态管理模式 | Molecule 模式的实体状态管理方案,适用于 Self-Evolve 中复杂实体 (如进化任务、评估结果) 的状态管理 |
