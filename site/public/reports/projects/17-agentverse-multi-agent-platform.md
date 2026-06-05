# AgentVerse: 多智能体仿真与任务求解平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/OpenBMB/AgentVerse |
| Star | 5k+ |
| 技术栈 | Python, Pydantic, OpenAI API, React (前端) |
| 许可证 | Apache 2.0 |
| 开发者 | OpenBMB（清华大学 THUNLP） |
| 论文 | AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors (ACL 2024) |

## 项目简介

AgentVerse 是清华大学 OpenBMB 团队开发的**多智能体仿真与任务求解平台**。提供两种核心模式：
1. **Simulation（仿真）**：多 Agent 在环境中交互（如NLP教室、囚徒困境）
2. **TaskSolving（任务求解）**：多 Agent 协作解决复杂任务

核心理念：**涌现行为（Emergent Behavior）** — 通过多 Agent 交互发现单 Agent 无法展现的能力。

## 目录结构

```
agentverse/
├── agentverse/
│   ├── __init__.py
│   ├── agentverse.py           # ★ 主入口
│   ├── simulation.py           # 仿真模式
│   ├── tasksolving.py          # 任务求解模式
│   ├── initialization.py       # Agent/环境初始化
│   ├── message.py              # 消息系统
│   ├── registry.py             # 注册表（Agent/环境/LLM）
│   ├── logging.py              # 日志
│   ├── demo.py                 # 演示
│   ├── gui.py                  # GUI
│   ├── utils.py                # 工具函数
│   ├── agents/                 # ★ Agent 定义
│   │   ├── base.py             # BaseAgent 基类
│   │   └── __init__.py
│   ├── environments/           # ★ 环境定义
│   │   ├── base.py             # BaseEnvironment 基类
│   │   └── __init__.py
│   ├── llms/                   # LLM 抽象
│   │   ├── base.py             # BaseLLM
│   │   └── openai.py           # OpenAI 实现
│   ├── memory/                 # ★ 记忆系统
│   │   ├── base.py             # BaseMemory
│   │   ├── chat_history.py     # 聊天历史记忆
│   │   ├── summary.py          # 摘要记忆
│   │   ├── vectorstore.py      # 向量存储记忆
│   │   └── sde_team.py         # SDE 团队记忆
│   ├── memory_manipulator/     # ★ 记忆操作器
│   │   ├── base.py             # BaseMemoryManipulator
│   │   ├── basic.py            # 基础操作
│   │   ├── plan.py             # 计划操作
│   │   └── reflection.py       # 反思操作
│   ├── output_parser/          # 输出解析
│   │   └── output_parser.py
│   ├── tasks/                  # 任务定义
│   └── utils/prompts.py        # Prompt 模板
├── agentverse_command/         # 命令行入口
│   ├── main_simulation_gui.py  # 仿真 GUI 模式
│   ├── main_simulation_cli.py  # 仿真 CLI 模式
│   ├── main_tasksolving_cli.py # 任务求解 CLI 模式
│   └── benchmark.py            # 基准测试
├── dataloader/                 # 数据加载器
│   ├── gsm8k.py                # GSM8K 数学
│   ├── mgsm.py                 # 多语言数学
│   ├── humaneval.py            # HumanEval 代码
│   ├── logic_grid.py           # 逻辑推理
│   ├── commongen.py            # 常识生成
│   └── responsegen.py          # 响应生成
├── scripts/                    # 评估脚本
│   ├── evaluate_math.py
│   ├── evaluate_logic.py
│   ├── evaluate_commongen.py
│   └── evaluate_responsegen.py
└── ui/                         # Web 前端（React）
```

## 核心模块分析

### 1. 双模式架构

**Simulation（仿真模式）**：
- Agent 在共享环境中交互
- 支持多种场景（NLP教室、囚徒困境、Pokemon 等）
- 观察涌现行为

**TaskSolving（任务求解模式）**：
- 多 Agent 协作解决具体任务
- 支持 GSM8K、HumanEval 等基准测试
- 对比不同 Agent 组合的效果

### 2. Agent-Environment-Memory 三层架构

```python
# Agent 定义
class BaseAgent:
    name: str
    llm: BaseLLM
    memory: BaseMemory
    output_parser: OutputParser

    async def step(self, env_description, history):
        # 1. 从记忆检索上下文
        context = self.memory.retrieve(env_description)
        # 2. LLM 生成响应
        response = self.llm.generate(context)
        # 3. 解析输出
        parsed = self.output_parser.parse(response)
        # 4. 更新记忆
        self.memory.add(response)
        return parsed
```

### 3. 记忆系统

AgentVerse 的四层记忆：

| 记忆类型 | 实现 | 用途 |
|---------|------|------|
| 聊天历史 | `chat_history.py` | 存储完整对话历史 |
| 摘要 | `summary.py` | 压缩长对话为摘要 |
| 向量存储 | `vectorstore.py` | 基于相似性的检索 |
| SDE 团队 | `sde_team.py` | 软件工程团队协作记忆 |

### 4. 记忆操作器（Memory Manipulator）

这是 AgentVerse 的创新点 — **主动操作记忆**：

| 操作器 | 功能 |
|--------|------|
| `basic.py` | 基础读写操作 |
| `plan.py` | 从记忆中提取和维护计划 |
| `reflection.py` | **反思操作 — 从历史经验中提炼教训** |

**Reflection（反思）** 是自我改进的关键机制：Agent 回顾自身行为，总结经验教训，用于指导未来决策。

### 5. 评估框架

多域评估支持：
- **数学**：GSM8K / MGSM
- **代码**：HumanEval
- **逻辑**：Logic Grid
- **生成**：CommonGen / ResponseGen

## 技术亮点

1. **涌现行为**：研究多 Agent 交互的涌现能力
2. **双模式**：仿真 + 任务求解的统一框架
3. **反思操作**：Memory Manipulator 的反思机制是自我改进的原型
4. **多层记忆**：历史/摘要/向量/团队 四层记忆架构
5. **ACL 2024**：顶会论文认可
6. **清华大学**：学术背景深厚

## 与 Self-Evolve 关联

| 维度 | AgentVerse 贡献 |
|------|----------------|
| 多 Agent | **仿真 + 任务求解**的双模式多 Agent 平台 |
| 自我改进 | Reflection 记忆操作器 — 从历史经验中反思和提炼 |
| 记忆 | 四层记忆系统（历史/摘要/向量/团队） |
| 评估 | 多域评估框架（数学/代码/逻辑/生成） |
| 启示 | "涌现行为"概念可启发 Self-Evolve 中多 Agent 协作产生更可复查的进化线索 |

## 参考资料

- [AgentVerse GitHub](https://github.com/OpenBMB/AgentVerse)
- [AgentVerse 论文](https://arxiv.org/abs/2308.10848) (ACL 2024)
- [AgentVerse 文档](https://github.com/OpenBMB/AgentVerse/tree/main/documentation)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/openbmb__agentverse`（指向 `repos/openbmb__agentverse` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/openbmb__agentverse --index-only --skip-git --name AgentVerse`。
- **知识图谱规模**：35288 symbols / 69800 edges / 842 clusters / 270 flows。
- **查询语句**：`simulation task solving agent environment memory reflection`。
- **核心执行流程候选**：
  - Simulation → Agent step → Environment update → Memory
  - TaskSolving → Agent collaborate → Evaluate
- **关键符号/文件**：
  - `simulation.py`（`agentverse/simulation.py`）
  - `tasksolving.py`（`agentverse/tasksolving.py`）
  - `BaseAgent`（`agentverse/agents/base.py`）
  - `BaseEnvironment`（`agentverse/environments/base.py`）
  - `reflection.py`（`agentverse/memory_manipulator/reflection.py`）
- **调用关系上下文**：
  - `simulation.py` 和 `tasksolving.py` 分别驱动两种模式的主循环。
  - `reflection.py` 记忆操作器从历史记忆中提炼反思经验。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
