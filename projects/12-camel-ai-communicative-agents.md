# CAMEL-AI: 交流式多智能体框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/camel-ai/camel |
| Star | 12k+ |
| 技术栈 | Python 3.10+, OpenAI/Anthropic/Google LLM API, Pydantic |
| 许可证 | Apache 2.0 |
| 安装 | `pip install camel-ai` |
| 组织 | CAMEL-AI.org |

## 项目简介

CAMEL（Communicative Agents for "Mind" Exploration of Large Language Language Models）是最早探索**多 Agent 角色扮演对话**的框架之一。核心理念：通过赋予 LLM 不同角色，让它们通过**结构化对话**协作完成复杂任务。

从最初的"AI Society"角色扮演研究，发展为完整的 Agent 框架，涵盖记忆、工具、检索器、解释器、环境等多个子系统。

## 目录结构

```
camel/
├── camel/
│   ├── agents/                  # ★ Agent 系统
│   │   ├── base.py              # BaseAgent 基类
│   │   ├── chat_agent.py        # ChatAgent（核心 Agent）
│   │   ├── critic_agent.py      # CriticAgent（批评家）
│   │   ├── task_agent.py        # TaskAgent（任务规划）
│   │   ├── search_agent.py      # SearchAgent
│   │   ├── knowledge_graph_agent.py  # 知识图谱 Agent
│   │   ├── embodied_agent.py    # 具身 Agent
│   │   ├── deductive_reasoner_agent.py  # 演绎推理 Agent
│   │   ├── repo_agent.py        # 代码仓库 Agent
│   │   ├── role_assignment_agent.py     # 角色分配 Agent
│   │   ├── mcp_agent.py         # MCP 协议 Agent
│   │   └── tool_agents/         # 工具 Agent 子类型
│   ├── societies/               # ★ 多 Agent 社会
│   │   ├── role_playing.py      # RolePlaying（角色扮演核心）
│   │   ├── babyagi_playing.py   # BabyAGI 模式
│   │   └── workforce/           # 劳动力编排
│   │       ├── workforce.py     # Workforce（多 Agent 协作）
│   │       └── workflow_memory.py
│   ├── messages/                # 消息系统
│   │   └── BaseMessage          # 统一消息格式
│   ├── memories/                # 记忆系统
│   │   ├── ChatHistoryMemory    # 聊天历史记忆
│   │   ├── ScoreBasedContextCreator  # 分数上下文
│   │   └── MemoryRecord         # 记忆记录
│   ├── retrievers/              # 检索器
│   │   ├── vector_retriever.py  # 向量检索
│   │   ├── bm25_retriever.py    # BM25 检索
│   │   └── hybrid_retriever.py  # 混合检索
│   ├── interpreters/            # 代码解释器
│   │   ├── subprocess_interpreter.py
│   │   ├── docker_interpreter.py
│   │   ├── jupyter_interpreter.py
│   │   └── microsandbox_interpreter.py
│   ├── toolkits/                # 工具集
│   │   ├── open_api_specs/      # OpenAPI 工具
│   │   ├── terminal_toolkit/    # 终端工具
│   │   └── hybrid_browser_toolkit/  # 浏览器工具
│   ├── models/                  # 模型抽象
│   ├── storages/                # 存储后端
│   │   ├── vectordb_storages/   # 向量数据库
│   │   ├── graph_storages/      # 图数据库
│   │   ├── key_value_storages/  # KV 存储
│   │   └── object_storages/     # 对象存储
│   ├── environments/            # 环境系统
│   │   ├── single_step_env.py
│   │   ├── multi_step_env.py
│   │   └── tictactoe_env.py
│   ├── tasks/                   # 任务系统
│   ├── datasets/                # 数据集
│   │   └── self_instruct_generator.py  # Self-Instruct 数据生成
│   ├── verifiers/               # 验证器
│   │   ├── math_verifier.py
│   │   └── python_verifier.py
│   ├── runtimes/                # 运行时
│   │   ├── docker_runtime.py
│   │   └── remote_http_runtime.py
│   ├── datahubs/                # 数据枢纽（HuggingFace 等）
│   ├── bots/                    # 平台集成（Discord/Slack/Telegram）
│   └── terminators/             # 对话终止器
└── test/                        # 测试
```

## 核心模块分析

### 1. RolePlaying 多 Agent 协作

CAMEL 的核心创新 — **角色扮演对话**：

```python
from camel.societies import RolePlaying
from camel.types import TaskType

role_play = RolePlaying(
    assistant_role_name="Python 程序员",
    user_role_name="产品经理",
    task_prompt="开发一个自我进化的 AI 系统",
    with_task_specify=True,    # 任务细化
    with_task_planner=True,    # 任务规划
    with_critic_in_the_loop=True,  # 批评家在环
)

chat_turns = role_play.run_chat_turns(max_turns=10)
```

**协作流程**：
```
TaskSpecifyAgent（细化任务）
       ↓
TaskPlannerAgent（规划步骤）
       ↓
Assistant ↔ User 对话循环
       ↓（可选）
CriticAgent（批评和改进建议）
```

### 2. ChatAgent 核心

```python
from camel.agents import ChatAgent

agent = ChatAgent(
    system_message="你是一个 AI 研究员",
    model=OpenAIModel(model_type=ModelType.GPT_4O),
    memory=ChatHistoryMemory(),
    tools=[search_tool, code_tool],
)

response = agent.step("分析这个项目的架构")
```

ChatAgent 支持：
- 记忆管理（`AgentMemory`）
- 工具调用（Function Calling）
- 流式输出
- Token 限制管理
- 对话摘要（上下文压缩）

### 3. Workforce 多 Agent 编排

```python
from camel.societies.workforce import Workforce

workforce = Workforce("研究团队")
workforce.add_agent(researcher)
workforce.add_agent(coder)
workforce.add_agent(reviewer)

result = workforce.run_task("研究并实现进化算法")
```

### 4. 记忆系统

- `ChatHistoryMemory`：基于聊天历史的记忆
- `ScoreBasedContextCreator`：按分数选择上下文
- `MemoryRecord`：带元数据的记忆记录

### 5. 环境系统

CAMEL 定义了 Agent 运行环境：
- `SingleStepEnv`：单步交互
- `MultiStepEnv`：多步交互
- 支持 TicTacToe 等游戏环境

### 6. Self-Instruct 数据生成

`datasets/self_instruct_generator.py`：自动生成训练数据，是自我改进的一种形式。

## 技术亮点

1. **角色扮演先驱**：最早提出"AI Society"角色扮演对话的框架
2. **Critic 在环**：内置批评家 Agent，自动评估和改进
3. **丰富工具集**：终端、浏览器、代码解释器、MCP 协议
4. **多存储后端**：向量/图/KV/对象四种存储
5. **平台集成**：Discord/Slack/Telegram 机器人
6. **Self-Instruct**：自动生成训练数据的能力

## 与 Self-Evolve 关联

| 维度 | CAMEL-AI 贡献 |
|------|-------------|
| 多 Agent | **角色扮演对话**是 Agent 协作的基础模式 |
| 自我改进 | Critic 在环 + Self-Instruct 数据生成 |
| 记忆 | ChatHistoryMemory + ScoreBasedContextCreator |
| 环境 | Agent 环境抽象（Single/Multi Step） |
| 启示 | "角色扮演 + 批评家" 的协作模式可扩展到 Agent 系统的自我改进 |

## 参考资料

- [CAMEL-AI GitHub](https://github.com/camel-ai/camel)
- [CAMEL 论文](https://arxiv.org/abs/2303.17760)（"CAMEL: Communicative Agents for Mind Exploration")
- [CAMEL 文档](https://docs.camel-ai.org/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/camel_ai__camel`（指向 `repos/camel_ai__camel` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/camel_ai__camel --index-only --skip-git --name CamelAI`。
- **知识图谱规模**：35625 symbols / 59978 edges / 1072 clusters / 300 flows。
- **查询语句**：`role playing agent society workforce memory`。
- **核心执行流程候选**：
  - Main → Update_memory
  - Summarize_text → Update_memory
  - Compose → Update_memory
  - Main_with_context_manager → Update_memory
  - Run → Update_memory
- **关键符号/文件**：
  - `RolePlaying`（`camel/societies/role_playing.py`）
  - `ChatAgent`（`camel/agents/chat_agent.py`）
  - `CriticAgent`（`camel/agents/critic_agent.py`）
  - `Workforce`（`camel/societies/workforce/`）
- **调用关系上下文**：
  - `RolePlaying` 组合了 TaskSpecifyAgent + TaskPlannerAgent + CriticAgent 的完整流水线。
  - `ChatAgent` 管理 Memory + Tool + Stream 的完整生命周期。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
