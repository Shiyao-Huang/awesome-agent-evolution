# CrewAI: 快速灵活的多智能体自动化框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/crewAIInc/crewAI |
| Star | 30k+ |
| 技术栈 | Python, **完全独立实现（不依赖 LangChain 或其他框架）** |
| 许可证 | MIT |
| 安装 | `pip install crewai` |
| 产品 | [CrewAI Cloud](https://app.crewai.com), [Crew Control Plane](https://crewai.com) |

## 项目简介

CrewAI 是一个从零构建的**轻量级、高性能**多 Agent 自动化框架。与 LangChain 等框架完全独立，提供高层简洁性和底层精确控制的双层 API。

核心理念：**Crew + Flow** 双架构
- **Crews**: 自主协作的 Agent 团队
- **Flows**: 企业级生产架构，事件驱动的精确编排

100,000+ 开发者通过官方课程认证。

## 目录结构

```
crewAI/
├── src/crew/                # 核心源码
│   ├── crew.py              # Crew 类（Agent 团队编排）
│   ├── agent.py             # Agent 类
│   ├── task.py              # Task 类
│   ├── process/             # 流程编排
│   │   ├── process.py       # 流程基类
│   │   ├── sequential.py    # 顺序执行
│   │   └── hierarchical.py  # 层级管理
│   ├── tools/               # 工具系统
│   ├── memory/              # 记忆系统
│   │   ├── short_term/      # 短期记忆
│   │   ├── long_term/       # 长期记忆
│   │   └── entity/          # 实体记忆
│   ├── knowledge/           # 知识管理
│   ├── cli/                 # CLI 工具
│   └── utilities/           # 工具函数
├── tests/                   # 测试
├── docs/                    # 文档
└── pyproject.toml           # Python 包配置
```

## 核心模块分析

### 1. Agent-Crew-Task 三层架构

```python
from crewai import Agent, Task, Crew

# 定义 Agent
researcher = Agent(
    role="研究分析员",
    goal="发现关于 {topic} 的新技术和趋势",
    backstory="你是一位经验丰富的技术研究员",
    tools=[search_tool, web_scraper],
    memory=True,  # 启用记忆
)

# 定义 Task
research_task = Task(
    description="研究 {topic} 的最新发展",
    expected_output="包含5个关键发现的报告",
    agent=researcher,
)

# 组建 Crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,  # 或 hierarchical
)

result = crew.kickoff(inputs={"topic": "Self-Evolving AI"})
```

### 2. 双架构模式

**Crews（协作模式）**：
- 顺序执行（Sequential）
- 层级管理（Hierarchical）— 一个 "Manager" Agent 分配任务
- Agent 间自动委托和协作
- 支持记忆（短期/长期/实体）

**Flows（编排模式）**：
- 事件驱动
- 精确的 LLM 调用控制
- 原生支持 Crews 嵌入
- 企业级生产架构

```python
from crewai import Flow, listen, start

class ResearchFlow(Flow):
    @start()
    def generate_topic(self):
        return {"topic": "AI Self-Evolution"}

    @listen(generate_topic)
    def research(self, inputs):
        crew = ResearchCrew()
        return crew.kickoff(inputs)

flow = ResearchFlow()
result = flow.kickoff()
```

### 3. 记忆系统

CrewAI 的三层记忆：

| 记忆类型 | 用途 | 实现 |
|---------|------|------|
| 短期记忆 | 当前任务上下文 | 内存 |
| 长期记忆 | 跨任务经验积累 | 向量数据库 |
| 实体记忆 | 记住特定实体信息 | 知识图谱 |

### 4. 工具系统

- 内置工具：搜索、文件读写、代码执行等
- 自定义工具：通过装饰器定义
- 工具可以分配给特定 Agent

## 技术亮点

1. **零依赖**: 完全从零构建，不依赖 LangChain 等第三方 Agent 框架
2. **双架构**: Crews（自主协作）+ Flows（精确编排）满足不同场景
3. **三层记忆**: 短期/长期/实体记忆支持经验积累
4. **企业就绪**: Crew Control Plane 提供可观测性、安全、扩展
5. **100k+ 认证开发者**: 社区活跃，教程完善
6. **轻量高性能**: 专注核心功能，启动快

## 与 Self-Evolve 关联

| 维度 | CrewAI 贡献 |
|------|------------|
| 多 Agent | Agent-Crew-Task 三层抽象，可参考 Self-Evolve 的 Agent 组织 |
| 记忆 | 三层记忆系统（短期/长期/实体）是 Agent 经验积累的参考 |
| Flow | 事件驱动的 Flow 编排可用于设计自我进化工作流 |
| 启示 | "零依赖 + 轻量高性能" 的设计理念可借鉴 |

## 参考资料

- [CrewAI GitHub](https://github.com/crewAIInc/crewAI)
- [CrewAI 文档](https://docs.crewai.com)
- [CrewAI 学习平台](https://learn.crewai.com)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/crewai_inc__crewai`（指向 `repos/crewai_inc__crewai` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/crewai_inc__crewai --index-only --skip-git --name crewAI`。
- **知识图谱规模**：55773 symbols / 86393 edges / 713 clusters / 300 flows。
- **查询语句**：`crew flow agent task process memory tool execution`。
- **核心执行流程候选**：
  - Reset_memories_command → _get_memory_systems
  - Reset_memories_command → Log
  - _operation → _is_telemetry_disabled
  - Aexecute_task → _is_any_available_memory
- **关键符号/文件**：
  - `_prepare_tools`（`lib/crewai/src/crewai/crew.py`）
  - `Crew`（`lib/crewai/src/crewai/crew.py`）
  - `crew.py`（`lib/crewai/src/crewai/crew.py`）
  - `test_crew_with_delegating_agents_should_not_override_task_tools`（`lib/crewai/tests/test_crew.py`）
  - `test_crew_with_delegating_agents_should_not_override_agent_tools`（`lib/crewai/tests/test_crew.py`）
  - `test_hierarchical_crew_creation_tasks_with_agents`（`lib/crewai/tests/test_crew.py`）
- **调用关系上下文**：
  - 符号 `_prepare_tools` 位于 `lib/crewai/src/crewai/crew.py` 第 1594–1665 行
  - 入边/被依赖关系：has_method: 1，calls: 1
  - 出边/调用或包含关系：calls: 11
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
