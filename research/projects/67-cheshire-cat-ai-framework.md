# Cheshire Cat AI: 模块化可插件扩展的 AI 聊天机器人框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/cheshire-cat-ai/core |
| Star | 3k+ |
| 技术栈 | Python, FastAPI, LangChain, Qdrant, Docker, WebSocket |
| 许可证 | GPL-3.0 License |
| 开发者 | Piero Savastano (创始人) 及 Cheshire Cat AI 社区 |

## 项目简介

Cheshire Cat AI 是一个以 API 为核心的模块化 AI 聊天机器人框架，定位为"AI Agent 即微服务"。它为开发者提供了一整套构建自定义 AI 助手所需的工具：内置 RAG（检索增强生成）管道、基于 Qdrant 的向量存储、灵活的插件系统、事件回调机制、工具调用（Function Calling）支持，以及会话式表单（Conversational Forms）。整个框架 100% Docker 化，一条命令即可启动完整的 AI 后端服务。

框架的核心设计理念是"可插件化扩展"。通过 Mad Hatter 插件系统，开发者可以用简单的 Python 装饰器注册 Hook（事件回调）、Tool（工具函数）和 Form（会话表单），无需修改核心代码即可深度定制 Agent 的行为。框架支持通过 LangChain 接入任意 LLM（OpenAI、Ollama、HuggingFace 等），同时提供 WebSocket 实时通信和完整的 REST API，方便嵌入到 Web 应用、移动端和物联网设备中。

Cheshire Cat AI 还注重企业级特性，包括多用户支持、细粒度权限控制、与任意身份提供商（IdP）的兼容性。项目拥有活跃的 Discord 社区和完善的官方文档，在意大利和欧洲的 AI 开发者社区中具有较高影响力，是一个将学术研究与工程实践良好结合的开源项目。

## 目录结构

```
cheshire_cat_ai__core/
├── core/                     # ★ 核心框架包
│   ├── cat/                  # ★ 主模块（Cheshire Cat 核心）
│   │   ├── agents/           # ★ Agent 实现
│   │   │   ├── base_agent.py       # Agent 基类
│   │   │   ├── main_agent.py       # 主 Agent 逻辑
│   │   │   ├── memory_agent.py     # 记忆管理 Agent
│   │   │   ├── form_agent.py       # 表单 Agent
│   │   │   └── procedures_agent.py # 流程 Agent
│   │   ├── mad_hatter/       # ★ 插件系统（Mad Hatter）
│   │   │   ├── decorators.py       # Hook/Tool/Form 装饰器
│   │   │   ├── plugin.py           # 插件加载与管理
│   │   │   ├── registry.py         # 插件注册表
│   │   │   ├── core_plugin/        # 内置核心插件
│   │   │   └── plugin_extractor.py # 插件提取器
│   │   ├── routes/           # ★ REST API 路由
│   │   │   ├── websocket/          # WebSocket 端点
│   │   │   ├── llm.py             # LLM 配置 API
│   │   │   ├── embedder.py        # Embedding 配置 API
│   │   │   ├── memory/            # 记忆管理 API
│   │   │   ├── plugins.py         # 插件管理 API
│   │   │   ├── auth.py            # 认证授权 API
│   │   │   └── users.py           # 用户管理 API
│   │   ├── memory/           # ★ 记忆系统
│   │   │   ├── working_memory.py       # 工作记忆（短期）
│   │   │   ├── long_term_memory.py     # 长期记忆
│   │   │   ├── vector_memory.py        # 向量记忆
│   │   │   └── vector_memory_collection.py # 向量集合
│   │   ├── looking_glass/    # ★ 推理引擎
│   │   │   ├── cheshire_cat.py   # Cat 核心实例
│   │   │   ├── stray_cat.py      # 用户会话 Cat
│   │   │   ├── prompts.py        # Prompt 模板
│   │   │   ├── output_parser.py  # 输出解析器
│   │   │   └── white_rabbit.py   # 调度器
│   │   ├── experimental/     # 实验性功能
│   │   │   └── form/              # Conversational Forms
│   │   ├── rabbit_hole.py    # ★ RAG 文档摄入管道
│   │   ├── db/               # 数据库层
│   │   ├── auth/             # 认证模块
│   │   ├── convo/            # 对话管理
│   │   ├── cache/            # 缓存层
│   │   ├── main.py           # 应用入口
│   │   └── startup.py        # 启动初始化
│   ├── tests/                # 测试套件
│   └── pyproject.toml        # Python 项目配置
├── compose.yml               # ★ Docker Compose 编排
├── ROADMAP.md                # 开发路线图
├── CODE-OF-ETHICS.md         # 伦理准则
└── CONTRIBUTING.md           # 贡献指南
```

## 核心模块分析

### 1. Mad Hatter 插件系统（mad_hatter/）

Mad Hatter 是 Cheshire Cat 的灵魂模块，实现了一个零侵入的插件架构。开发者只需使用 `@hook`、`@tool`、`@form` 三个装饰器即可扩展 Agent 能力：Hook 装饰器注册事件回调，拦截和修改 Agent 的 Prompt、回复、记忆检索等环节；Tool 装饰器注册 LLM 可调用的工具函数（Function Calling）；Form 装饰器创建会话式表单，引导用户逐步填写结构化数据。插件系统自动发现和加载插件目录下的 Python 模块，支持插件的动态安装、卸载和热更新。

### 2. Agent 架构（agents/）

Cheshire Cat 采用分层 Agent 架构。`base_agent.py` 定义了 Agent 的抽象基类，包含 Prompt 构建、LLM 调用和回复生成的标准流程。`main_agent.py` 实现了主对话 Agent，负责处理用户输入并生成回复。`memory_agent.py` 专注于记忆的召回和管理，`form_agent.py` 处理会话式表单的状态流转，`procedures_agent.py` 管理预定义的流程执行。这种分层设计使每个 Agent 职责清晰，便于通过 Hook 在不同阶段注入自定义逻辑。

### 3. 记忆系统（memory/ + looking_glass/）

框架实现了完整的多层记忆架构：`working_memory.py` 维护当前对话的短期上下文，`long_term_memory.py` 通过向量数据库存储跨会话的长期记忆，`vector_memory.py` 基于 Qdrant 实现语义检索。`stray_cat.py` 为每个用户会话创建独立的 Cat 实例，隔离不同用户的记忆和状态。`cheshire_cat.py` 作为全局核心实例管理共享资源。White Rabbit 调度器负责协调各模块的执行顺序。

### 4. Rabbit Hole RAG 管道（rabbit_hole.py）

Rabbit Hole 是 Cheshire Cat 的内置 RAG 管道，负责将外部文档摄入到向量数据库中。它支持 PDF、DOCX、TXT、CSV、网页等多种文档格式的自动解析和分块，通过配置的 Embedding 模型将文档块向量化后存入 Qdrant。在对话过程中，Agent 会自动检索相关的文档片段作为上下文补充。管道的每个环节（文档解析、分块策略、Embedding 模型、检索参数）都可通过 Hook 进行定制。

### 5. API 层与多用户支持（routes/）

API 层基于 FastAPI 构建，提供完整的 REST API 和 WebSocket 端点。REST API 覆盖了 LLM 配置、Embedding 设置、插件管理、用户管理、记忆操作等所有管理功能。WebSocket 端点支持实时流式对话。认证模块实现了 JWT Token 认证和细粒度的权限控制，支持与外部身份提供商（LDAP、OAuth2 等）集成。多用户隔离确保不同用户的对话、记忆和配置相互独立。

## 技术亮点

1. **声明式插件扩展**：通过 `@hook`、`@tool`、`@form` 三个 Python 装饰器实现零侵入扩展，开发者无需理解核心架构即可深度定制 Agent 行为
2. **内置完整 RAG 管道**：开箱即用的 Rabbit Hole 管道支持多格式文档摄入、自动分块、Qdrant 向量存储和语义检索，大幅降低 RAG 应用开发门槛
3. **Conversational Forms 创新**：通过 `@form` 装饰器创建会话式表单，引导 LLM 以自然对话方式逐步收集结构化数据，将表单填写转化为愉快的聊天体验
4. **Agent 即微服务**：以 API-First 设计构建，100% Docker 化部署，通过 REST/WebSocket 接口轻松嵌入到任何应用中作为 AI 后端
5. **多层记忆架构**：短期工作记忆 + 向量长期记忆的双层设计，结合 Qdrant 的语义检索能力，实现跨会话的智能记忆召回
6. **多用户与权限控制**：内置用户隔离、JWT 认证和细粒度权限管理，支持外部 IdP 集成，满足企业级部署需求

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 插件化架构 | Mad Hatter 的装饰器驱动插件系统为自演化系统的能力扩展提供了模块化范式 |
| Hook 事件系统 | 基于事件回调的 Hook 机制可用于自演化系统中的行为注入和流程控制 |
| 记忆系统设计 | 多层记忆架构（短期 + 向量长期）为自演化 Agent 的经验积累和知识管理提供参考 |
| RAG 管道设计 | Rabbit Hole 的可定制 RAG 管道为自演化系统获取外部知识提供了完整方案 |
| Agent 即微服务 | API-First + Docker 化的部署模式，适合作为自演化系统的可组合 AI 服务组件 |
| 会话式表单 | Conversational Forms 的设计理念可用于自演化系统与用户的交互式配置和引导 |

## 参考资料

- Cheshire Cat AI 官网：https://cheshirecat.ai
- 官方文档：https://cheshire-cat-ai.github.io/docs/
- 插件开发教程：https://cheshirecat.ai/write-your-first-plugin/
- GitHub 仓库：https://github.com/cheshire-cat-ai/core
- Discord 社区：https://discord.gg/bHX5sNFCYU

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/cheshire_cat_ai__core`
- **分析命令**：`gitnexus analyze repos/cheshire_cat_ai__core --index-only --skip-git --name CheshireCat`
