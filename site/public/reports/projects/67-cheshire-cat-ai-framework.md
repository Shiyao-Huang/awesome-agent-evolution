# Cheshire Cat: 模块化 AI 聊天机器人微服务框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/cheshire-cat-ai/core |
| Star | 3,500+ |
| 技术栈 | Python, FastAPI, LangChain, Qdrant, WebSocket, Docker, Pydantic |
| 许可证 | GPL-3.0 |
| 开发者 | Piero Savastano 及 Cheshire Cat AI 社区 |

## 项目简介

Cheshire Cat 是一个生产就绪的 AI Agent 微服务框架，以 API-First 的设计理念为现有应用添加可对话的 AI 助手层。项目的核心定位是"AI agent as a microservice"——通过 REST API 和 WebSocket 提供标准化的对话接口，开发者可以将 AI 助手能力嵌入到任何应用中，而无需关心 LLM 调用、记忆管理、工具集成等底层复杂性。框架内置了基于 Qdrant 的 RAG（检索增强生成）系统，支持多用户和细粒度权限控制，通过插件机制实现高度可扩展性。

项目的技术架构围绕"疯帽子"（Mad Hatter）插件系统展开。所有 AI 助手的能力——包括对话策略、工具定义、记忆钩子、提示词模板——都可以通过插件扩展。每个插件可以注册 Hook（事件回调）来拦截和修改 Agent 行为的各个阶段，注册 Tool（函数调用工具）让 Agent 能够执行外部操作，注册 Form（对话式表单）实现目标导向的结构化对话。框架还提供了"兔子洞"（Rabbit Hole）机制，用于将文档和网页内容摄入到 RAG 知识库中。

Cheshire Cat 的 Agent 系统采用了分层架构：`MainAgent` 是默认的对话 Agent，`MemoryAgent` 处理记忆检索和注入，`FormAgent` 管理结构化表单对话，`ProceduresAgent` 负责工具调度。`StrayCat` 是每用户会话的上下文对象，封装了用户信息、工作记忆、对话历史和 Agent 访问接口。整个系统 100% Docker 化，一条 `docker run` 命令即可启动完整服务，包含管理面板和 API 文档。

## 目录结构

```
cheshire_cat_ai__core/
├── core/                       # ★ 核心框架
│   ├── cat/                        # ★ 核心逻辑
│   │   ├── main.py                     # ★ 框架入口
│   │   ├── startup.py                  # 启动初始化
│   │   ├── env.py                      # 环境配置
│   │   ├── log.py                      # 日志
│   │   ├── utils.py                    # 工具函数
│   │   ├── rabbit_hole.py              # ★ 文档摄入（Rabbit Hole）
│   │   ├── welcome.txt                 # 欢迎消息
│   │   ├── agents/                     # ★ Agent 系统
│   │   │   ├── base_agent.py               # Agent 基类
│   │   │   ├── main_agent.py               # ★ 主对话 Agent
│   │   │   ├── memory_agent.py             # 记忆 Agent
│   │   │   ├── form_agent.py               # 表单 Agent
│   │   │   └── procedures_agent.py         # 工具调度 Agent
│   │   ├── mad_hatter/                # ★ 插件系统（Mad Hatter）
│   │   │   ├── mad_hatter.py              # ★ 插件管理器
│   │   │   ├── decorators.py              # ★ Hook/Tool/Form 装饰器
│   │   │   ├── plugin.py                  # 插件定义
│   │   │   ├── registry.py                # 插件注册表
│   │   │   ├── plugin_extractor.py        # 插件包解压
│   │   │   └── core_plugin/               # ★ 核心内置插件
│   │   ├── looking_glass/             # ★ Agent 编排核心
│   │   │   ├── cheshire_cat.py            # ★ Cheshire Cat 主类
│   │   │   ├── stray_cat.py              # ★ 用户会话上下文
│   │   │   ├── white_rabbit.py            # 白兔（定时任务）
│   │   │   ├── callbacks.py               # 回调处理
│   │   │   ├── output_parser.py           # 输出解析
│   │   │   └── prompts.py                 # 提示词模板
│   │   ├── memory/                    # ★ 记忆系统
│   │   │   ├── working_memory.py          # ★ 工作记忆
│   │   │   ├── long_term_memory.py        # ★ 长期记忆
│   │   │   ├── vector_memory.py           # ★ 向量记忆（Qdrant）
│   │   │   └── vector_memory_collection.py # 向量记忆集合
│   │   ├── routes/                    # ★ API 路由
│   │   │   ├── base.py                    # 基础路由
│   │   │   ├── websocket/                 # ★ WebSocket 对话接口
│   │   │   ├── embedder.py                # 嵌入模型配置
│   │   │   ├── llm.py                     # LLM 配置
│   │   │   ├── memory/                    # 记忆管理 API
│   │   │   ├── plugins.py                 # 插件管理 API
│   │   │   ├── settings.py                # 设置 API
│   │   │   ├── upload.py                  # 文件上传（Rabbit Hole）
│   │   │   ├── users.py                   # 用户管理
│   │   │   └── auth.py                    # 认证路由
│   │   ├── auth/                      # 认证系统
│   │   ├── cache/                     # 缓存
│   │   ├── convo/                     # 对话管理
│   │   ├── data/                      # 数据管理
│   │   ├── db/                        # 数据库
│   │   ├── factory/                   # 工厂模式（LLM/Embedder 实例化）
│   │   ├── experimental/              # 实验性功能
│   │   │   └── form/                      # 对话式表单
│   │   ├── plugins/                   # 运行时插件目录
│   │   └── static/                    # 静态文件（管理面板）
│   └── tests/                       # 测试套件
│       ├── agents/
│       ├── cache/
│       ├── looking_glass/
│       ├── mad_hatter/
│       ├── memory/
│       ├── mocks/
│       └── routes/
├── compose.yml                 # Docker Compose 配置
├── README.md
├── ROADMAP.md
├── CODE-OF-ETHICS.md
└── CONTRIBUTING.md
```

## 核心模块分析

### 1. Agent 分层系统 (`core/cat/agents/`)

Cheshire Cat 的 Agent 系统采用分层架构，每层负责对话的不同方面。`base_agent.py` 定义了 Agent 基类，包含 LangChain Agent 的创建和执行逻辑。`MainAgent` 是默认的对话 Agent，负责理解用户意图、选择工具、生成回复。`MemoryAgent` 专门处理记忆检索——它根据用户输入从长期记忆（Qdrant 向量数据库）中检索相关上下文，并将其注入到 Agent 的提示词中。`FormAgent` 管理结构化表单对话，用于引导用户提供特定格式的信息（如订单表单、预约表单）。`ProceduresAgent` 负责工具调度，执行 Agent 选择的工具（函数调用）。这种分层设计使得每个 Agent 的职责清晰，便于独立测试和扩展。

### 2. Mad Hatter 插件系统 (`core/cat/mad_hatter/`)

Mad Hatter 是 Cheshire Cat 的核心扩展机制，名称源自《爱丽丝漫游仙境》中的"疯帽子"。插件系统提供三种扩展原语：**Hook**（事件回调）允许插件在 Agent 行为的特定阶段（如提示词构建前、记忆检索后、回复生成后）插入自定义逻辑；**Tool**（工具函数）让 Agent 获得执行外部操作的能力（如搜索、API 调用、数据库查询）；**Form**（对话式表单）实现目标导向的结构化对话。`decorators.py` 提供了 `@hook`、`@tool`、`@form` 装饰器，开发者只需用装饰器标注函数即可将其注册到框架中。`mad_hatter.py` 管理插件的生命周期——发现、加载、初始化和卸载。

### 3. 记忆系统 (`core/cat/memory/`)

Cheshire Cat 实现了三层记忆架构。`WorkingMemory` 是短期工作记忆，存储当前对话的临时状态（用户信息、活跃表单、对话变量等）。`LongTermMemory` 是长期记忆接口，管理对话历史和用户偏好的持久化存储。`VectorMemory` 是向量记忆层，基于 Qdrant 向量数据库实现语义检索——所有对话消息和摄入的文档都被转换为向量嵌入并存储，Agent 在回复时可以检索相关的历史记忆和知识。`VectorMemoryCollection` 封装了 Qdrant 的集合操作，支持按用户、按类型筛选记忆。

### 4. Rabbit Hole 文档摄入 (`core/cat/rabbit_hole.py`)

Rabbit Hole（兔子洞）是 Cheshire Cat 的 RAG 文档摄入子系统，名称同样取自《爱丽丝漫游仙境》。它支持将 PDF、TXT、Markdown、网页等格式的文档摄入到知识库中。摄入流程包括：文件解析 -> 文本分块 -> 嵌入生成 -> 向量存储到 Qdrant。文档摄入过程深度集成了 Hook 系统，插件可以在文本分块、嵌入生成等阶段插入自定义逻辑（如自定义分块策略、元数据增强等）。用户可以通过 REST API 或管理面板上传文档，也可以通过 URL 直接摄入网页内容。

### 5. API 与 WebSocket 接口 (`core/cat/routes/`)

Cheshire Cat 提供了完整的 REST API 和 WebSocket 接口。WebSocket 路由（`routes/websocket/`）实现了实时双向对话，支持流式响应输出。REST API 覆盖了所有管理功能：LLM 和嵌入模型配置（`llm.py`、`embedder.py`）、记忆管理（`memory/`）、插件管理（`plugins.py`）、文件上传（`upload.py`）、用户管理（`users.py`）和设置（`settings.py`）。所有路由基于 FastAPI 构建，自动生成 OpenAPI 文档（`/docs`）。`StrayCat` 对象是 API 层的核心——每个 WebSocket 连接创建一个 StrayCat 实例，封装了用户会话的所有上下文。

### 6. Looking Glass 编排核心 (`core/cat/looking_glass/`)

Looking Glass（镜子屋）是 Cheshire Cat 的核心编排层。`cheshire_cat.py` 是框架的主类，初始化并协调所有子系统（Agent、记忆、插件、工厂）。`stray_cat.py` 定义了每用户会话上下文对象，提供了 Agent 交互的统一接口——包括发送消息、检索记忆、调用工具、管理对话状态等。`white_rabbit.py` 实现了定时任务调度（以《爱丽丝》中的白兔命名），支持定期执行维护任务。`prompts.py` 管理提示词模板，`callbacks.py` 处理 LangChain 的回调事件，`output_parser.py` 解析 Agent 的输出。

## 技术亮点

1. **API-First 微服务架构**：以 REST API 和 WebSocket 为核心接口，任何应用都可通过 HTTP/WebSocket 接入 AI 助手能力，实现了"AI as a Service"的部署模式
2. **Hook/Tool/Form 三原语插件系统**：三种互补的扩展原语覆盖了 Agent 定制的所有场景——行为拦截（Hook）、能力扩展（Tool）、结构化对话（Form）
3. **三层记忆架构**：工作记忆 + 长期记忆 + 向量记忆的分层设计，既保证了对话的即时性，又实现了知识的持久化和语义检索
4. **Rabbit Hole RAG 子系统**：开箱即用的文档摄入和检索增强生成，支持多种文档格式，深度集成了插件 Hook 机制
5. **StrayCat 会话上下文**：每用户独立的会话对象，封装了完整的对话状态和 Agent 访问接口，天然支持多用户隔离
6. **Alice in Wonderland 命名体系**：所有核心组件以《爱丽丝漫游仙境》角色命名（Cheshire Cat、Mad Hatter、Rabbit Hole、White Rabbit、Stray Cat），既有趣味性又增强了代码的可记忆性
7. **100% Docker 化部署**：一条 `docker run` 命令启动完整服务，管理面板和 API 文档开箱即用

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| Agent 分层架构 | Cheshire Cat 的 MainAgent/MemoryAgent/FormAgent/ProceduresAgent 分层设计为 Self-Evolve 的 Agent 架构提供了经过验证的分层模式 |
| 插件扩展机制 | Hook/Tool/Form 三原语系统展示了如何通过简洁的装饰器接口实现高度可扩展的 Agent 框架，对 Self-Evolve 的能力注册机制有直接启发 |
| 记忆系统设计 | 三层记忆架构（工作/长期/向量）为 Self-Evolve 的进化历史存储和知识检索提供了成熟的设计模式 |
| RAG 知识管理 | Rabbit Hole 文档摄入系统展示了如何将外部知识整合到 Agent 的工作流中，对 Self-Evolve 的上下文注入机制有参考价值 |
| 微服务部署 | API-First 设计和 Docker 化部署为 Self-Evolve 作为微服务集成到现有系统提供了部署模式参考 |
| 对话式表单 | Form 机制展示了如何通过结构化对话引导用户提供特定信息，对 Self-Evolve 的交互式进化流程设计有启发 |

## 参考资料

- [Cheshire Cat AI 官方网站](https://cheshirecat.ai)
- [Cheshire Cat GitHub 仓库](https://github.com/cheshire-cat-ai/core)
- [Cheshire Cat 官方文档](https://cheshire-cat-ai.github.io/docs/)
- [Cheshire Cat 插件开发教程](https://cheshirecat.ai/write-your-first-plugin/)
- [Cheshire Cat Discord 社区](https://discord.gg/bHX5sNFCYU)
- [Qdrant 向量数据库](https://qdrant.tech)
- [LangChain 官方文档](https://python.langchain.com/)

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/cheshire_cat_ai__core`
- **分析命令**：`gitnexus analyze repos/cheshire_cat_ai__core --index-only --skip-git --name CheshireCat`
- **知识图谱规模**：待分析
- **查询语句**：`mad_hatter plugin hook tool; stray_cat session context; vector_memory qdrant RAG; rabbit_hole document ingestion; main_agent langchain agent; form_agent structured conversation; white_rabbit scheduler`
- **核心执行流程候选**：WebSocket 消息到达 -> `StrayCat` 会话上下文 -> `MainAgent` 执行 -> Hook 链触发（`mad_hatter`）-> `MemoryAgent` 检索 -> 提示词构建 -> LLM 调用 -> `ProceduresAgent` 工具执行 -> 响应流式返回；Rabbit Hole -> 文件上传 -> 解析分块 -> 嵌入生成 -> Qdrant 存储
- **关键符号/文件**：`core/cat/looking_glass/cheshire_cat.py`（主类）、`core/cat/looking_glass/stray_cat.py`（会话上下文）、`core/cat/mad_hatter/mad_hatter.py`（插件管理器）、`core/cat/mad_hatter/decorators.py`（装饰器）、`core/cat/agents/main_agent.py`（主 Agent）、`core/cat/memory/vector_memory.py`（向量记忆）、`core/cat/rabbit_hole.py`（文档摄入）、`core/cat/routes/websocket/`（WebSocket 接口）
- **调用关系上下文**：API/WebSocket 请求 -> StrayCat 上下文创建 -> Mad Hatter 加载插件 -> Agent 分层执行（MainAgent -> MemoryAgent -> ProceduresAgent）-> Hook 链拦截 -> LLM 调用 -> Tool 执行 -> 记忆更新 -> 响应返回；Rabbit Hole -> 文档解析 -> 分块 -> 嵌入 -> Qdrant 写入
- **架构结论**：该图谱结果用于把报告中的"Agent 编排 / 插件系统 / 记忆架构 / RAG 摄入 / 微服务部署"定位到具体符号、文件和流程
