# AG2: 开源 AgentOS 多 Agent 协作框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ag2ai/ag2 |
| Star | 15,000+ |
| 技术栈 | Python, AsyncIO, Protocol-based Architecture, OpenAI API |
| 许可证 | Apache 2.0 |
| 开发者 | AG2.ai（前身为 Microsoft AutoGen 团队） |

## 项目简介

AG2（前身为 AutoGen）是一个开源的多 Agent 协作编程框架，旨在简化 AI Agent 的开发和研究。它提供了可互相交互的 Agent 构建、多种 LLM 支持、自主与人在环工作流、以及丰富的多 Agent 对话模式。当前框架正处于 v1.0 发布路线中，beta 版本（autogen.beta）引入了全新的协议驱动异步架构，采用事件流、依赖注入、中间件等现代设计模式，成为真正的 AgentOS。

## 目录结构

```
ag2ai__ag2/
├── autogen/                    # 核心框架包
│   ├── agentchat/              # 多 Agent 对话模式
│   ├── beta/                   # 新一代 Beta 框架
│   │   ├── agent.py            # 核心 Agent 循环与回复处理
│   │   ├── annotations.py      # 依赖注入类型注解
│   │   ├── context.py          # 运行时上下文管理
│   │   ├── stream.py           # 内存事件发布/订阅
│   │   ├── events/             # 事件类型定义
│   │   ├── config/             # LLM 提供商客户端
│   │   ├── tools/              # 工具系统（内置+用户定义）
│   │   │   ├── builtin/        # 内置工具（代码执行、Shell 等）
│   │   │   └── subagents/      # Agent-to-Agent 委派
│   │   ├── middleware/          # 请求/响应拦截器
│   │   ├── response/           # 结构化输出验证
│   │   ├── history.py          # 对话历史存储
│   │   └── knowledge/          # 知识管理
│   ├── cache/                  # 缓存系统
│   ├── coding/                 # 代码执行环境
│   ├── environments/           # 环境抽象
│   └── extensions/             # 扩展插件
├── test/                       # 测试套件
├── examples/                   # 示例应用
├── notebook/                   # Jupyter Notebook 教程
├── website/                    # 文档网站
└── templates/                  # Agent 模板
```

## 核心模块分析

### 1. Beta Agent 核心（autogen.beta）

Beta 框架是 AG2 的下一代架构，采用协议驱动（Protocol-driven）和全异步设计。核心 Agent 循环通过事件流（Stream）进行通信，所有主要操作（ask、工具执行、LLM 调用）均为异步实现。依赖注入通过 `Context`、`Inject`、`Variable` 注解实现，由 `fast_depends` 库解析。

### 2. 子 Agent 委派系统（Subagent Delegation）

子 Agent 工具系统允许将一个 Agent 包装为可调用工具，实现 Agent-to-Agent 委派。关键设计：
- `run_task()` 执行子任务，`subagent_tool()` 将 Agent 包装为工具
- `persistent_stream()` 支持跨调用复用流，实现上下文累积
- 子任务默认不继承委派能力，结构性地防止无限递归
- 支持并行子任务执行（`run_subtasks(parallel=True)`）

### 3. 中间件系统（Middleware）

请求/响应拦截器架构，提供横切关注点的统一处理：
- `LoggingMiddleware`：日志记录
- `RetryMiddleware`：自动重试
- `TokenLimiter`：Token 用量控制
- `HistoryLimiter`：历史记录长度限制
- 支持自定义中间件扩展

### 4. 多提供商 LLM 集成（Provider Clients）

为每个 LLM 提供商提供独立的三文件结构：config.py（配置）、client.py（客户端）、mappers.py（格式转换）。已支持 OpenAI、Anthropic、Gemini 等主流提供商，通过 `ModelConfig` 协议实现提供商无关的统一接口。

## 技术亮点

1. **协议优于继承**：`LLMClient`、`ModelConfig`、`Stream`、`Storage`、`Tool` 均为 Protocol 类，实现结构化子类型而非继承关系，极大提升了扩展灵活性。
2. **事件驱动架构**：所有 Agent 循环通信通过 Stream 以类型化事件流形式进行，支持 `ModelRequest`、`ModelResponse`、`ToolCallEvent`、`ToolResultEvent` 等精细事件类型。
3. **安全的子任务委派**：通过结构性地禁止子任务继承委派能力，优雅地解决了递归深度问题，无需额外深度限制器。
4. **函数式工具定义**：工具系统支持从普通 Python 函数自动注册，参数注解实现依赖注入，降低工具开发门槛。
5. **全链路异步**：从 Agent 循环到 LLM 调用、工具执行全部异步化，同步工具函数通过 `sync_to_thread` 自动适配。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 多 Agent 协作 | 提供成熟的多 Agent 对话与委派模式，为 Self-Evolve 的多 Agent 自改进提供协作框架参考 |
| 事件驱动设计 | 事件流架构为 Self-Evolve 的 Agent 行为观测和自诊断提供了解耦的设计模式 |
| 工具系统 | 灵活的工具注册与执行机制可扩展为 Self-Evolve 的自我修改能力载体 |
| 中间件模式 | 请求/响应拦截器为 Self-Evolve 的自我监控和自适应行为提供了架构模式 |
| 子任务隔离 | 子 Agent 的上下文隔离与委派机制为 Self-Evolve 的安全自改进提供了沙箱思路 |
| 提供商无关 | 协议驱动的 LLM 集成为 Self-Evolve 提供了模型无关的优化接口 |
