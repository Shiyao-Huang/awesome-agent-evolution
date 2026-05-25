# LangGraph: 状态化 Agent 工作流框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/langchain-ai/langgraph |
| Star | 20k+ |
| 技术栈 | Python, TypeScript, LangChain Core, Pydantic |
| 许可证 | MIT |
| 安装 | `pip install langgraph` |
| 开发者 | LangChain 团队 |
| 产品 | [LangGraph Studio](https://langchain-ai.github.io/langgraph/), [LangGraph Cloud](https://langchain-ai.github.io/langgraph/cloud/) |

## 项目简介

LangGraph 是 LangChain 团队开发的**状态化多 Agent 工作流框架**。它将 Agent 工作流建模为**有向图（Directed Graph）**，节点是 Agent 或函数，边是控制流或条件分支。

核心理念：**图即程序（Graph as Program）** — 用图结构表达复杂的 Agent 编排逻辑，支持循环、分支、并行和状态持久化。

## 目录结构

```
langgraph/
├── libs/
│   ├── langgraph/               # ★ 核心框架
│   │   └── langgraph/
│   │       ├── graph/           # 图构建 API
│   │       │   ├── state.py     # StateGraph（状态图）
│   │       │   ├── message.py   # 消息图
│   │       │   ├── _node.py     # 节点定义
│   │       │   └── _branch.py   # 条件分支
│   │       ├── pregel/          # ★ Pregel 执行引擎
│   │       │   ├── main.py      # 主循环
│   │       │   ├── _algo.py     # 图算法
│   │       │   ├── _executor.py # 执行器
│   │       │   ├── _runner.py   # 运行器
│   │       │   ├── _loop.py     # 循环控制
│   │       │   ├── _checkpoint.py # 检查点
│   │       │   ├── _retry.py    # 重试机制
│   │       │   ├── _tools.py    # 工具集成
│   │       │   ├── _io.py       # 输入输出
│   │       │   ├── _read.py     # 读取通道
│   │       │   ├── _write.py    # 写入通道
│   │       │   ├── _call.py     # 调用逻辑
│   │       │   └── _validate.py # 验证
│   │       ├── channels/        # 状态通道
│   │       │   ├── base.py      # BaseChannel
│   │       │   ├── last_value.py # LastValue
│   │       │   ├── binop.py     # BinaryOperator
│   │       │   └── ephemeral_value.py
│   │       ├── managed/         # 管理式状态
│   │       ├── _internal/       # 内部工具
│   │       ├── func/            # 函数式 API
│   │       ├── stream/          # 流式输出
│   │       └── utils/           # 工具函数
│   ├── checkpoint/              # 检查点基类
│   ├── checkpoint-postgres/     # PostgreSQL 持久化
│   ├── checkpoint-sqlite/       # SQLite 持久化
│   ├── prebuilt/                # 预构建 Agent
│   ├── cli/                     # CLI 工具
│   ├── sdk-py/                  # Python SDK
│   └── sdk-js/                  # JavaScript SDK
└── docs/
```

## 核心模块分析

### 1. StateGraph — 状态图

LangGraph 的核心抽象是 **StateGraph**：

```python
from langgraph.graph import StateGraph, START, END
from typing import TypedDict

class State(TypedDict):
    messages: list
    next_agent: str

graph = StateGraph(State)

# 添加节点（Agent 或函数）
graph.add_node("researcher", researcher_fn)
graph.add_node("coder", coder_fn)
graph.add_node("reviewer", reviewer_fn)

# 添加边（控制流）
graph.add_edge(START, "researcher")
graph.add_conditional_edges("researcher", route_fn)
graph.add_edge("coder", "reviewer")
graph.add_edge("reviewer", END)

app = graph.compile()
result = app.invoke({"messages": ["实现进化算法"]})
```

**图构建 API**：
- `add_node(name, fn)`：添加节点
- `add_edge(from, to)`：添加固定边
- `add_conditional_edges(from, fn)`：添加条件分支
- `compile()`：编译为可执行图

### 2. Pregel 执行引擎

LangGraph 使用 **Pregel 模型**（源自 Google Pregel 图计算框架）执行图：

- **Superstep**：每轮所有节点并行执行
- **Channel**：节点间通过通道（Channel）传递状态
- **Checkpoint**：支持状态持久化（PostgreSQL/SQLite）
- **中断/恢复**：`interrupt()` 暂停执行，`invoke()` 从检查点恢复

### 3. 状态通道（Channel）系统

| 通道类型 | 行为 |
|---------|------|
| `LastValue` | 保留最后一个值 |
| `BinaryOperatorAggregate` | 使用二元操作聚合（如列表追加） |
| `EphemeralValue` | 临时值，不持久化 |
| `DeltaChannel` | 增量更新 |

### 4. 预构建 Agent

```python
from langgraph.prebuilt import create_react_agent

agent = create_react_agent(model, tools=[search_tool, code_tool])
result = agent.invoke({"messages": [("user", "搜索并分析")]})
```

### 5. 人机协作

```python
# 在图中插入人工审核节点
graph.add_node("human_review", interrupt=True)
# 执行到此处暂停，等待人工输入后恢复
```

## 技术亮点

1. **图即程序**：用有向图表达 Agent 编排，直观且灵活
2. **Pregel 引擎**：基于图计算的执行模型，支持并行和增量
3. **状态持久化**：Checkpoint 系统（PostgreSQL/SQLite），支持中断/恢复
4. **人机协作**：内置 `interrupt` 机制
5. **LangChain 生态**：与 LangChain 工具和模型无缝集成
6. **Studio/Cloud**：可视化调试和生产部署

## 与 Self-Evolve 关联

| 维度 | LangGraph 贡献 |
|------|---------------|
| 编排 | **有向图编排模型**，支持循环/分支/并行 |
| 状态 | Channel 系统 + Checkpoint 持久化 |
| 人机 | interrupt 机制的人工审核 |
| 工具 | LangChain 工具生态 |
| 启示 | 图模型编排可用于设计自我进化的工作流图 |

## 参考资料

- [LangGraph GitHub](https://github.com/langchain-ai/langgraph)
- [LangGraph 文档](https://langchain-ai.github.io/langgraph/)
- [LangGraph Studio](https://langchain-ai.github.io/langgraph/concepts/langgraph_studio/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/langchain_ai__langgraph`（指向 `repos/langchain_ai__langgraph` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/langchain_ai__langgraph --index-only --skip-git --name LangGraph`。
- **知识图谱规模**：17172 symbols / 34071 edges / 828 clusters / 300 flows。
- **查询语句**：`graph state node channel checkpoint pregel execute`。
- **核心执行流程候选**：
  - StateGraph → add_node / add_edge / compile
  - Pregel loop → Superstep → Channel → Checkpoint
- **关键符号/文件**：
  - `StateGraph`（`libs/langgraph/langgraph/graph/state.py`）
  - `Pregel`（`libs/langgraph/langgraph/pregel/main.py`）
  - `BaseChannel`（`libs/langgraph/langgraph/channels/base.py`）
  - `LastValue`（`libs/langgraph/langgraph/channels/last_value.py`）
- **调用关系上下文**：
  - `StateGraph` 通过 `compile()` 生成 `Pregel` 可执行图。
  - `Pregel` 执行引擎使用 Channel 系统在节点间传递状态。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
