# AG2 (AutoGen): 开源多 Agent 协作操作系统

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ag2ai/ag2 |
| Star | 5000+ |
| 技术栈 | Python 3.10+, AsyncIO, Protocol-based Architecture, Fast-Depends (DI) |
| 许可证 | Apache 2.0 (新增代码) / MIT (原始 AutoGen 代码) |
| 开发者 | Chi Wang, Qingyun Wu 及 AG2 社区 (原 Microsoft AutoGen 团队) |

## 项目简介

AG2（前身为 Microsoft AutoGen）是一个开源的 AI Agent 操作系统级框架，专注于构建多 Agent 协作系统以解决复杂任务。该项目起源于 Microsoft Research，于 2024 年 11 月演进为独立组织 AG2AI，采用开放治理模式。AG2 的核心理念是通过多 Agent 对话模式（Multi-Agent Conversation Patterns）实现 Agent 间的灵活协作，支持自主工作流和人机协同工作流。

AG2 的架构以 ConversableAgent 为基础构建块，支持消息收发和基于 GenAI 模型/非 GenAI 工具/人类输入的回复生成。在编排层面，框架内置了 Swarm、Group Chat、Nested Chat、Sequential Chat 等多种对话模式，同时支持通过注册自定义回复方法实现定制化编排。值得关注的是 AG2 正在向 v1.0 演进，其 beta 框架（autogen.beta）采用协议驱动（Protocol-driven）的异步架构，引入了 Stream（事件流）、Middleware（中间件）、Tool 系统、子 Agent 委托等新概念。

从自我进化的角度看，AG2 提供了 AgentOptimizer 等超参数优化方法，支持通过函数作为可学习权重来离线训练语言模型 Agent。其 EcoOptiGen 框架专门针对 LLM 推理生成的超参数优化。此外，AG2 的 StateFlow 模块提供了基于状态驱动的工作流增强，使得 Agent 的行为模式可以根据任务进展动态调整。

## 目录结构
```
ag2/
├── autogen/
│   ├── agent/                   ★ Agent 核心实现
│   ├── agentchat/               ★ 多 Agent 对话编排
│   │   ├── group/
│   │   │   └── patterns/        ★ AutoPattern 等编排模式
│   │   └── ...
│   ├── beta/                    ★ Beta 框架（v1.0 候选）
│   │   ├── agent.py             ★ Beta Agent 核心
│   │   ├── context.py           ★ 运行时上下文
│   │   ├── stream.py            ★ 内存事件流
│   │   ├── events/              ★ 事件类型定义
│   │   ├── config/              ★ LLM 提供商客户端
│   │   ├── tools/               ★ 工具系统 + 子 Agent 委托
│   │   ├── middleware/           ★ 请求/响应拦截中间件
│   │   ├── response/            ★ 结构化输出验证
│   │   ├── history.py           ★ 对话历史存储
│   │   └── knowledge/           ★ 知识管理
│   ├── cache/                   缓存层
│   ├── coding/                  代码执行
│   ├── oai/                     OpenAI 兼容层
│   └── ...
├── notebook/                    Jupyter 示例
├── test/                        测试套件
├── MAINTAINERS.md               维护者列表
└── announcement.md              公告记录
```

## 核心模块分析

### 1. ConversableAgent — 对话式 Agent 基础类
ConversableAgent 是 AG2 的核心构建块，设计用于实现 AI 实体间的无缝通信。它处理消息交换和响应生成，是框架中所有 Agent 的基类。该类支持三种输入模式：GenAI 模型生成、非 GenAI 工具执行和人类输入。通过 `llm_config` 参数配置 LLM 连接，通过 `human_input_mode` 控制人类参与程度（NEVER/TERMINATE/ALWAYS）。

### 2. 多 Agent 编排模式
AG2 提供了丰富的内置编排模式。Group Chat 支持多个 Agent 在同一会话中协作，可通过 AutoPattern 自动选择下一个发言 Agent。Swarm 模式实现轻量级的 Agent 间协作，Agent 可自主决定将对话转移给哪个 Agent。Nested Chat 允许在对话中嵌套子对话，Sequential Chat 支持按序执行多轮对话。所有模式都支持 `max_turns` 控制和自定义终止条件。

### 3. Beta 框架 — 协议驱动异步架构
`autogen.beta` 是 AG2 v1.0 的候选架构，采用 Protocol over Inheritance 的设计原则。核心协议包括 LLMClient、ModelConfig、Stream、Storage、Tool 等。整个 Agent 循环基于事件驱动，所有通信通过 Stream 以类型化事件形式流转。该架构原生支持 Async，同步工具函数通过 `sync_to_thread` 异步执行。依赖注入通过 fast_depends 实现，使用 Context、Inject、Variable 注解。

### 4. 工具系统与子 Agent 委托
工具系统支持内置工具（CodeExecutionTool、ShellTool、WebSearchTool 等）和用户自定义工具。通过 `register_function()` 注册工具到指定 caller 和 executor Agent。子 Agent 委托（Subagent Delegation）允许将一个 Agent 包装为另一个 Agent 的工具调用，支持 `persistent_stream()` 实现跨调用历史累积。`run_subtask` / `run_subtasks` 支持 Agent 自动创建子任务并行执行。

### 5. Middleware 中间件管道
中间件系统提供请求/响应拦截能力，内置了 LoggingMiddleware、RetryMiddleware、TokenLimiter、HistoryLimiter 等中间件。中间件按照管道模式串联，可以在 LLM 调用前后插入自定义逻辑，如重试策略、Token 限制、历史记录裁剪等。这为 Agent 行为的可观测性和可控制性提供了基础设施。

## 技术亮点

1. **多编排模式内置**：Swarm、Group Chat、Nested Chat、Sequential Chat 等模式开箱即用，支持自定义编排逻辑
2. **协议驱动架构**：Beta 框架采用 Protocol over Inheritance 设计，LLMClient、Stream、Tool 等均为 Protocol 类，实现结构化满足
3. **全链路异步**：所有主要操作（ask、工具执行、LLM 调用）均为 Async，同步函数通过 sync_to_thread 桥接
4. **子 Agent 委托**：Agent 可作为工具被其他 Agent 调用，支持 persistent_stream 跨调用历史累积和并行子任务执行
5. **多 LLM 提供商统一接口**：支持 Anthropic、OpenAI、Gemini 等多提供商，通过 Mapper 层统一转换
6. **人机协同**：UserProxyAgent 支持人类反馈注入，Human-in-the-Loop 模式贯穿整个编排链路
7. **AgentOptimizer**：通过 EcoOptiGen 框架优化 Agent 超参数，支持函数作为可学习权重的离线训练

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | AgentOptimizer 提供超参数优化闭环；StateFlow 支持基于状态驱动的行为模式动态调整 |
| Prompt 工程 | 通过 LLMConfig 和 system_message 管理 Prompt；支持自定义回复方法注册 |
| 评估框架 | 内置终止条件和 `is_termination_msg` 回调；AgentOptimizer 评估 Agent 性能 |
| Agent 编排 | 核心能力：Swarm、Group Chat、Nested Chat、Sequential Chat 等多编排模式 |
| 工具系统 | 丰富的内置工具 + 自定义工具注册 + 工具间 Secrets 管理 |
| 多 Agent 协作 | 完整的多 Agent 对话框架，支持自动选择发言人、嵌套对话、并行子任务 |
| 可扩展性 | Protocol 驱动设计，新增 LLM 提供商仅需实现 Config + Client + Mapper |

## 参考资料
- GitHub: https://github.com/ag2ai/ag2
- 文档: https://docs.ag2.ai
- 示例仓库: https://github.com/ag2ai/build-with-ag2
- 论文 (AutoGen): https://arxiv.org/abs/2308.08155
- 论文 (EcoOptiGen): https://arxiv.org/abs/2303.04673
- 论文 (AgentOptimizer): https://arxiv.org/abs/2402.11359
- 论文 (StateFlow): https://arxiv.org/abs/2403.11322

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/ag2ai__ag2`
- **分析命令**：`gitnexus analyze repos/ag2ai__ag2 --index-only --skip-git --name AG2`
- **知识图谱规模**：待分析
- **查询语句**：`ConversableAgent group_chat swarm pattern register_function middleware tool subagent delegation`
- **核心执行流程候选**：`Agent.ask() -> Stream events -> LLMClient.__call__() -> Tool execution -> Response`；`run_group_chat(pattern=AutoPattern) -> agent selection -> conversation loop`；`subagent_tool() -> run_task() -> child agent loop`
- **关键符号/文件**：`autogen/agent/`, `autogen/agentchat/group/patterns/`, `autogen/beta/agent.py`, `autogen/beta/tools/`, `autogen/beta/middleware/`, `ConversableAgent`, `UserProxyAgent`, `AssistantAgent`, `LLMConfig`, `AutoPattern`, `run_group_chat`
- **调用关系上下文**：ConversableAgent 作为基类派生出 AssistantAgent 和 UserProxyAgent -> 通过 run() 或 initiate_chat() 启动对话 -> 对话消息通过 Stream 事件流传递 -> GroupManager 使用 AutoPattern 选择下一个发言 Agent -> 工具调用通过 register_function() 绑定到 caller/executor -> Beta 框架中 Agent 循环完全事件驱动
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
