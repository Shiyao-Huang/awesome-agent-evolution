# AutoGen: 微软多智能体对话框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/microsoft/autogen |
| Star | 50k+ |
| 技术栈 | Python, .NET (支持跨语言), gRPC, FastAPI, React |
| 许可证 | MIT |
| 安装 | `pip install autogen-agentchat` |
| 产品 | [AutoGen Studio](https://autogen.studio/) |
| 开发者 | Microsoft Research |

## 项目简介

AutoGen 是微软研究院开发的**多智能体对话框架**，专注于通过 Agent 间对话解决复杂任务。最新架构（v0.4+）采用分层包设计，从核心运行时到高层 Agent Chat，提供灵活的多层 API。

核心理念：**Agent 作为参与者（Actor），通过消息传递进行协作**。支持事件驱动、Round-Robin、Group Chat 等多种编排模式。

## 目录结构

```
autogen/
├── python/packages/
│   ├── autogen-core/            # ★ 核心运行时
│   │   └── src/autogen_core/
│   │       ├── _base_agent.py   # BaseAgent（消息驱动的 Actor 基类）
│   │       ├── _agent_id.py     # AgentId（Agent 唯一标识）
│   │       ├── _agent_runtime.py # AgentRuntime（消息路由）
│   │       ├── _closure_agent.py # ClosureAgent（函数式 Agent）
│   │       ├── _subscription.py # 消息订阅
│   │       ├── _topic.py        # Topic 发布/订阅
│   │       ├── memory/          # 记忆系统
│   │       │   ├── _base_memory.py  # Memory 基类
│   │       │   └── _list_memory.py  # 列表记忆
│   │       ├── tools/           # 工具系统
│   │       │   ├── _function_tool.py
│   │       │   ├── _workbench.py
│   │       │   └── _static_workbench.py
│   │       ├── model_context/   # 模型上下文管理
│   │       ├── tool_agent/      # 工具 Agent
│   │       └── _telemetry/      # 遥测与追踪
│   ├── autogen-agentchat/       # ★ 高层 Agent Chat API
│   │   └── src/autogen_agentchat/
│   │       ├── agents/
│   │       │   ├── _assistant_agent.py  # AssistantAgent
│   │       │   ├── _user_proxy_agent.py # UserProxyAgent
│   │       │   ├── _code_executor_agent.py
│   │       │   ├── _society_of_mind_agent.py
│   │       │   └── _message_filter_agent.py
│   │       ├── teams/           # 团队编排
│   │       ├── conditions/      # 终止条件
│   │       ├── messages.py      # 消息类型定义
│   │       ├── base/            # 基础抽象
│   │       │   ├── _chat_agent.py
│   │       │   ├── _team.py
│   │       │   ├── _termination.py
│   │       │   └── _handoff.py  # Agent 交接
│   │       ├── state/           # 状态管理
│   │       ├── tools/           # 高层工具
│   │       └── ui/              # UI 组件
│   ├── autogen-ext/             # 扩展包
│   ├── autogen-studio/          # AutoGen Studio（可视化 IDE）
│   ├── autogen-magentic-one/    # Magentic-One 通用 Agent
│   ├── agbench/                 # Agent 评估基准
│   └── pyautogen/               # 旧版兼容包（v0.2）
├── protos/                      # gRPC 协议定义
└── python/samples/              # 示例集合
```

## 核心模块分析

### 1. 分层架构：Core → AgentChat → Extensions

```
autogen-core（Actor 模型运行时）
     ↑
autogen-agentchat（高层 Agent/Team API）
     ↑
autogen-ext（具体 LLM/工具实现）
```

**autogen-core**：基于 Actor 模型的消息传递运行时
- `BaseAgent`：抽象基类，通过 `on_message` 处理消息
- `AgentRuntime`：消息路由和 Agent 生命周期管理
- `Topic/Subscription`：发布/订阅消息模式

**autogen-agentchat**：高层对话 API
- `AssistantAgent`：LLM 驱动的助手 Agent
- `UserProxyAgent`：人类代理
- `CodeExecutorAgent`：代码执行 Agent
- `SocietyOfMindAgent`：嵌套多 Agent

### 2. 多种编排模式

**Round-Robin Team**：
```python
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.teams import RoundRobinGroupChat

agent1 = AssistantAgent("writer", model_client=client)
agent2 = AssistantAgent("reviewer", model_client=client)

team = RoundRobinGroupChat([agent1, agent2])
result = await team.run(task="写一篇关于 AI 自我进化的文章")
```

**Group Chat**：Manager Agent 负责选择下一个发言者

**Society of Mind**：嵌套 Agent 团队

### 3. 工具系统

- `FunctionTool`：将 Python 函数包装为工具
- `Workbench`：工具集合管理
- `ToolAgent`：独立运行的工具调用 Agent

### 4. 记忆与上下文

```python
# 列表记忆
from autogen_core.memory import ListMemory
memory = ListMemory()
await memory.add(Message(content="记住这个信息"))

# 模型上下文
from autogen_core.model_context import UnboundedChatCompletionContext
```

### 5. Agent 交接（Handoff）

Agent 可以将对话控制权交接给其他 Agent：
```python
agent = AssistantAgent(
    "router",
    model_client=client,
    handoffs=["specialist_agent", "general_agent"]
)
```

## 技术亮点

1. **Actor 模型**：基于消息传递的 Agent 运行时，天然支持分布式
2. **分层设计**：Core/AgentChat/Ext 三层，灵活度与易用性兼顾
3. **跨语言支持**：gRPC 协议，Python/.NET 互操作
4. **Magentic-One**：通用多模态 Agent（网页浏览+代码执行+文件操作）
5. **AutoGen Studio**：可视化构建 Agent 工作流
6. **微软背书**：工业级质量，活跃开发

## 与 Self-Evolve 关联

| 维度 | AutoGen 贡献 |
|------|-------------|
| 多 Agent | **Actor 模型的 Agent 运行时**，消息驱动的协作方式 |
| 编排 | Round-Robin / Group Chat / Society of Mind 多种模式 |
| 工具 | FunctionTool + Workbench + ToolAgent 的完整工具体系 |
| 记忆 | Memory + ModelContext 的上下文管理 |
| 启示 | 分层架构（Core → AgentChat → Ext）可参考于自我进化系统设计 |

## 参考资料

- [AutoGen GitHub](https://github.com/microsoft/autogen)
- [AutoGen 文档](https://microsoft.github.io/autogen/)
- [AutoGen Studio](https://autogen.studio/)
- [Magentic-One 论文](https://arxiv.org/abs/2411.04468)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/microsoft__autogen`（指向 `repos/microsoft__autogen` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/microsoft__autogen --index-only --skip-git --name AutoGen`。
- **知识图谱规模**：26523 symbols / 52605 edges / 1499 clusters / 300 flows。
- **查询语句**：`agent team memory handoff message runtime`。
- **核心执行流程候选**：GitNexus 返回的 Agent/Team 相关流程覆盖 autogen-agentchat 和 autogen-core 两个包。
- **关键符号/文件**：
  - `AssistantAgent`（`autogen-agentchat/src/autogen_agentchat/agents/_assistant_agent.py`）
  - `BaseAgent`（`autogen-core/src/autogen_core/_base_agent.py`）
  - `BaseChatAgent`（`autogen-agentchat/src/autogen_agentchat/base/_chat_agent.py`）
  - `RoundRobinGroupChat`（`autogen-agentchat/src/autogen_agentchat/teams/`）
- **调用关系上下文**：
  - `AssistantAgent` 继承 `BaseChatAgent`，组合了 Memory、Tool、Handoff 能力。
  - `BaseAgent`（Core）定义了 Actor 模型的消息处理接口。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
