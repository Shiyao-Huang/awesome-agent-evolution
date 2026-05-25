# Dify: 开源 LLM 应用开发平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/langgenius/dify |
| Star | 100k+ |
| 技术栈 | Python (Flask), TypeScript (Next.js), React, PostgreSQL, Redis, Celery, Docker, Weaviate/Qdrant |
| 许可证 | Dify Open Source License (基于 Apache 2.0 附加条件) |
| 开发者 | LangGenius, Inc. |

## 项目简介

Dify 是一个功能完备的开源 LLM 应用开发平台,通过直观的可视化界面将 AI Workflow 编排、RAG 管线、智能体能力、模型管理和可观测性功能整合为一体。它让开发者能够从原型快速走向生产,已成为 LLM 应用开发领域 Star 数最高的开源项目之一 (GitHub 100k+ Star),形成了庞大的全球社区和生态。平台提供 Cloud 托管服务和自部署方案,支持 Docker Compose 一键启动。

平台的核心能力包括:可视化 AI Workflow 编排画布、对数百种主流 LLM 的无缝集成 (GPT、Mistral、Llama3 等以及任何 OpenAI API 兼容模型)、内置 Prompt IDE、完整的 RAG 管线 (覆盖从文档摄取到检索的全流程)、基于 Function Calling 和 ReAct 的智能体框架 (内置 50+ 工具如 Google Search、DALL-E、WolframAlpha),以及全面的 LLMOps 监控分析能力。

项目采用前后端分离架构,后端基于 Python Flask 遵循领域驱动设计 (DDD) 原则,前端基于 Next.js + TypeScript + React,通过 Docker Compose 编排 PostgreSQL、Redis、Celery、Nginx 等中间件。Dify 还提供了独立的 dify-agent 后端服务用于管理和执行智能体,以及完善的插件系统支持自定义扩展。后端支持通过 `uv run --project api <command>` 执行 CLI 命令,前端使用 pnpm workspace 管理 monorepo 结构。

## 目录结构

```
langgenius__dify/
├── api/                      # 后端 API 服务 (Python Flask)
│   ├── core/                 # 核心业务逻辑 (DDD)
│   │   ├── app/              # 应用管理引擎
│   │   │   ├── apps/         # 应用类型实现
│   │   │   ├── app_config/   # 应用配置管理
│   │   │   └── workflow/     # 应用内工作流
│   │   ├── workflow/         # Workflow 编排引擎
│   │   │   ├── nodes/        # 工作流节点类型
│   │   │   │   ├── agent/         # Agent 节点
│   │   │   │   ├── knowledge_retrieval/ # 知识检索节点
│   │   │   │   ├── datasource/    # 数据源节点
│   │   │   │   ├── trigger_webhook/   # Webhook 触发器
│   │   │   │   └── trigger_schedule/  # 定时触发器
│   │   │   ├── workflow_entry.py    # 工作流入口
│   │   │   ├── node_factory.py      # 节点工厂
│   │   │   └── node_runtime.py      # 节点运行时
│   │   ├── rag/              # RAG 管线
│   │   │   ├── retrieval/    # 检索模块
│   │   │   ├── splitter/     # 文档分片策略
│   │   │   ├── embedding/    # 向量嵌入
│   │   │   ├── rerank/       # 重排序
│   │   │   ├── extractor/    # 文档抽取 (PDF/PPT 等)
│   │   │   ├── pipeline/     # RAG 处理流水线
│   │   │   └── models/       # RAG 数据模型
│   │   ├── agent/            # 智能体引擎 (FC + CoT)
│   │   │   ├── base_agent_runner.py      # 基类
│   │   │   ├── fc_agent_runner.py        # Function Calling
│   │   │   ├── cot_agent_runner.py       # Chain-of-Thought
│   │   │   ├── cot_chat_agent_runner.py  # CoT 聊天模式
│   │   │   └── strategy/                 # 策略扩展
│   │   ├── tools/            # 工具系统
│   │   │   ├── builtin_tool/     # 50+ 内置工具
│   │   │   ├── custom_tool/      # 自定义工具 (OpenAPI)
│   │   │   ├── mcp_tool/         # MCP 协议工具
│   │   │   ├── plugin_tool/      # 插件工具
│   │   │   ├── workflow_as_tool/  # Workflow 封装为工具
│   │   │   └── tool_engine.py    # 工具执行引擎
│   │   ├── plugin/           # 插件框架
│   │   ├── llm/              # LLM 调用抽象层
│   │   ├── model_manager.py  # 模型管理器
│   │   └── prompt/           # Prompt 模板管理
│   ├── controllers/          # API 控制器
│   │   ├── console/          # 控制台管理 API
│   │   ├── service_api/      # 服务端 API
│   │   ├── web/              # Web 端 API
│   │   └── mcp/              # MCP 协议端点
│   ├── models/               # SQLAlchemy 数据模型
│   ├── services/             # 业务服务层
│   ├── migrations/           # Alembic 数据库迁移
│   ├── tasks/                # Celery 异步任务
│   └── configs/              # 配置管理
├── web/                      # 前端 (Next.js + TypeScript)
│   ├── app/                  # 页面路由 (App Router)
│   │   ├── components/       # UI 组件库
│   │   │   ├── workflow/     # Workflow 可视化编辑器
│   │   │   ├── tools/        # 工具配置组件
│   │   │   ├── datasets/     # 数据集管理
│   │   │   ├── apps/         # 应用配置组件
│   │   │   └── plugins/      # 插件管理组件
│   │   └── (commonLayout)/   # 通用布局
│   ├── i18n/                 # 国际化 (15+ 语言)
│   ├── hooks/                # React Hooks
│   ├── service/              # API 调用服务层
│   ├── context/              # React Context
│   └── models/               # 前端数据模型
├── dify-agent/               # 独立 Agent 后端服务
│   ├── src/                  # Agent 执行引擎源码
│   └── tests/                # Agent 测试套件
├── docker/                   # Docker 部署配置
│   ├── docker-compose.yaml   # 主编排文件
│   ├── nginx/                # Nginx 反向代理配置
│   ├── envs/                 # 环境变量模板 (按主题分目录)
│   └── volumes/              # 持久化存储挂载
├── sdks/                     # 客户端 SDK
├── packages/                 # 共享包 (pnpm workspace)
├── e2e/                      # 端到端测试
├── dev/                      # 开发辅助工具
└── docs/                     # 文档 (多语言 README)
```

## 核心模块分析

### 1. Workflow 编排引擎 (api/core/workflow/)

Dify 的 Workflow 引擎是平台的核心差异化能力,实现了基于有向无环图 (DAG) 的可视化工作流编排。`workflow_entry.py` 作为统一入口管理工作流的创建、执行和输出。`node_factory.py` 采用工厂模式动态创建不同类型的节点,`node_runtime.py` 管理节点的运行时生命周期。内置节点类型涵盖 LLM 调用、知识检索、代码执行、条件分支、迭代循环、变量聚合等,分布在 `nodes/` 下的 agent、knowledge_retrieval、datasource、trigger_webhook、trigger_schedule 等子目录中。`variable_pool_initializer.py` 管理节点间的变量传递,`template_rendering.py` 处理模板变量渲染。特别值得关注的是 `workflow_as_tool/` 能力,允许将任意 Workflow 封装为可被其他应用或 Agent 调用的工具,实现了工作流的组合与复用。

### 2. RAG 管线 (api/core/rag/)

RAG 模块提供了从文档摄入到语义检索的端到端管线。文档处理阶段通过 `extractor/` 支持 PDF、PPT 等常见格式的文本抽取,通过多种分片策略 (`splitter/`) 将长文档切分为语义单元。向量化阶段 (`embedding/`) 支持多种 Embedding 模型提供商,检索阶段 (`retrieval/`) 实现了多路由策略 (向量检索、全文检索、混合检索) 和多种检索方法。`rerank/` 模块集成 Rerank 模型对检索结果进行二次排序,`data_post_processor/` 进行结果清洗和增强。`pipeline/` 目录将上述组件编排为完整的处理流水线,支持多种向量数据库后端 (Weaviate、Qdrant、Milvus 等)。

### 3. 智能体引擎 (api/core/agent/)

智能体模块实现了两种主流的 Agent 策略。Function Calling 模式 (`fc_agent_runner.py`) 利用 LLM 的原生函数调用能力选择和执行工具,适合支持 Function Calling 的模型。Chain-of-Thought 模式 (`cot_agent_runner.py`) 通过推理链引导 LLM 逐步思考和行动,分为聊天 (`cot_chat_agent_runner.py`) 和补全 (`cot_completion_agent_runner.py`) 两种交互模式。基类 `base_agent_runner.py` 定义了统一的智能体执行接口,包括工具调用循环、上下文管理和输出解析。`strategy/` 子目录通过策略模式支持扩展新的 Agent 行为,`output_parser/` 负责解析 Agent 的输出格式。

### 4. 工具系统 (api/core/tools/)

工具系统提供了统一的工具集成框架,支持四种工具来源。`builtin_tool/` 包含 50+ 预置工具 (Google Search、DALL-E、Stable Diffusion、WolframAlpha 等),`custom_tool/` 允许用户通过 OpenAPI Schema 定义自定义工具,`mcp_tool/` 通过 Model Context Protocol 接入外部工具服务,`plugin_tool/` 通过插件框架扩展工具能力。`tool_engine.py` 负责工具的执行调度和错误处理,`tool_manager.py` 管理工具的生命周期、权限和凭证。`workflow_as_tool/` 将任意 Workflow 封装为可调用的工具,实现了工作流与工具系统的无缝集成。

### 5. 插件系统 (api/core/plugin/ + dify-agent/)

插件框架支持开发者通过标准化接口扩展 Dify 的核心能力。`endpoint/` 定义插件的 API 端点,`entities/` 包含插件实体模型,`impl/` 提供具体实现,`backwards_invocation/` 保证向后兼容。插件可以扩展模型提供者、工具、数据源类型等。独立的 `dify-agent/` 后端服务专门负责管理和执行智能体,包含自己的 src/ 源码和 tests/ 测试套件,与主 API 服务通过内部协议通信。

## 技术亮点

1. **可视化 Workflow DAG 编排**: 完整的拖拽式工作流编辑器,支持 LLM 节点、条件分支、迭代循环、变量聚合、Webhook/定时触发等多种节点类型,将复杂 AI 处理逻辑转化为直观的流程图
2. **数百种 LLM 统一集成**: 通过统一的模型运行时抽象层无缝集成 GPT、Mistral、Llama3 等数百种模型,覆盖主流推理服务商和自部署方案,用户可在不同模型间无缝切换而无需修改应用逻辑
3. **完整 RAG 管线**: 从文档抽取、智能分片、向量嵌入、混合检索到重排序的端到端 RAG 能力,开箱即用支持 PDF/PPT 等常见格式,无需额外集成即可构建知识库应用
4. **双策略 Agent 框架**: 同时支持 Function Calling 和 Chain-of-Thought 两种智能体范式,内置 50+ 工具,支持 MCP 协议和自定义工具扩展,实现灵活的智能体能力组合
5. **领域驱动后端架构**: 后端严格遵循 DDD 和 Clean Architecture 原则,Controller -> Service -> Repository 分层清晰,通过领域异常和依赖注入实现关注点分离,代码可维护性极高
6. **企业级可观测性**: 集成 Langfuse、Opik、Arize Phoenix 等可观测性平台,提供应用日志分析、性能监控、Prompt 迭代优化和标注数据管理等 LLMOps 能力,支持生产环境的持续改进

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| Workflow 编排引擎 | DAG 式工作流引擎的完整实现可作为 Self-Evolve 进化管线的编排基础,将代码生成、测试、评估、合并等步骤编排为可视化流程 |
| RAG 管线架构 | 从文档处理到语义检索的全链路实现,为 Self-Evolve 构建代码知识库和上下文检索系统提供了可直接复用的模块 |
| Agent 工具调用框架 | FC + CoT 双策略 Agent 和统一工具系统的设计,为 Self-Evolve 的智能体执行层提供了成熟的工具调用和策略选择范式 |
| 多模型适配层 | 统一抽象数百种 LLM 的模型管理方案,Self-Evolve 可直接集成以支持在多种模型间切换进行代码进化实验 |
| 插件扩展体系 | 标准化的插件注册和执行框架,使 Self-Evolve 能够通过插件机制扩展进化策略、评估指标和部署目标等核心能力 |
| LLMOps 可观测性 | 生产级的日志监控和性能分析基础设施,为 Self-Evolve 进化过程的可视化追踪和质量度量提供成熟方案 |

## 参考资料

- [Dify GitHub](https://github.com/langgenius/dify)
- [Dify 官方文档](https://docs.dify.ai)
- [Dify Cloud](https://dify.ai)
- [Dify 自部署指南](https://docs.dify.ai/getting-started/install-self-hosted)
- [Langfuse 可观测性集成](https://docs.langfuse.com)
- [Opik 可观测性集成](https://www.comet.com/docs/opik/integrations/dify)

## GitNexus 深度架构分析

- **源码位置**: `projects/repos/langgenius__dify`
- **分析命令**: `gitnexus analyze repos/langgenius__dify --index-only --skip-git --name "Dify"`
