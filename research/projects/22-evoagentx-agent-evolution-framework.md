# EvoAgentX: 构建、评估与进化 LLM Agent 的开源生态系统

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/EvoAgentX/EvoAgentX |
| Star | 1.0k+ |
| 技术栈 | Python 3.11+, OpenAI/Qwen/Claude/Deepseek, FastAPI, MongoDB/PostgreSQL/FAISS |
| 许可证 | MIT |
| 安装 | `pip install evoagentx` |

## 项目简介

EvoAgentX 是一个面向 LLM Agent 的**构建、评估与自动进化**的开源框架，致力于打造自进化的 Agent 生态系统。与静态的 prompt chaining 或手动 workflow 编排不同，EvoAgentX 引入了自进化引擎 (Self-Evolution Engine)，使 Agent 能够通过迭代反馈循环持续改进自身的 workflow 结构、提示词和行为策略。

框架的核心设计理念是将 Agent 系统的进化过程标准化和自动化。用户只需用自然语言描述目标，EvoAgentX 即可自动构建结构化的多 Agent workflow，集成任务特定的评估器对 Agent 行为打分，然后利用 TextGrad、MIPRO、AFlow、EvoPrompt 等多种进化算法优化 workflow 的提示和结构。该框架还提供了丰富的内置工具集（代码解释器、搜索引擎、文件系统、数据库、浏览器等）、短期与长期记忆模块、以及 Human-in-the-Loop 交互支持。

EvoAgentX 团队同时发布了关于自进化 AI Agent 的综合综述论文，系统性地梳理了该领域的理论基础和技术前沿。框架已在 GAIA 基准上成功优化了 Open Deep Research 和 OWL 等主流多 Agent 系统。

## 目录结构

```
evoagentx/
├── evoagentx/                     # 核心库
│   ├── agents/                    # Agent 管理
│   ├── workflow/                  # Workflow 图与执行引擎
│   ├── models/                    # LLM 封装 (OpenAI, Qwen, LiteLLM, SiliconFlow, OpenRouter)
│   ├── optimizers/                # 进化/优化算法
│   ├── evaluators/                # 评估器
│   ├── prompts/                   # 提示模板
│   ├── tools/                     # 内置工具集
│   │   ├── interpreter_python.py  # Python 解释器
│   │   ├── interpreter_docker.py  # Docker 解释器
│   │   ├── search_*.py            # 搜索工具 (Google, Wiki, arXiv, ...)
│   │   ├── database_*.py          # 数据库工具 (MongoDB, PostgreSQL, FAISS)
│   │   ├── browser_tool.py        # 浏览器自动化
│   │   └── ...
│   ├── memory/                    # 记忆模块
│   ├── hitl/                      # Human-in-the-Loop 支持
│   ├── actions/                   # Agent 动作定义
│   ├── rag/                       # RAG 检索增强
│   ├── storages/                  # 存储后端
│   ├── benchmark/                 # 基准测试
│   ├── config.py                  # 配置管理
│   └── core/                      # 核心工具
├── examples/                      # 示例代码
│   ├── workflow_demo.py           # Workflow 生成演示
│   ├── optimization/              # 优化算法示例
│   └── tools/                     # 工具使用示例
└── docs/                          # 文档与教程
```

## 核心模块分析

### 1. 自动 Workflow 生成

从自然语言目标自动构建多 Agent workflow：

```python
from evoagentx.workflow import WorkFlowGenerator, WorkFlowGraph, WorkFlow
from evoagentx.agents import AgentManager

goal = "Generate html code for the Tetris game"
workflow_graph = WorkFlowGenerator(llm=llm).generate_workflow(goal)

agent_manager = AgentManager()
agent_manager.add_agents_from_workflow(workflow_graph, llm_config=openai_config)

workflow = WorkFlow(graph=workflow_graph, agent_manager=agent_manager, llm=llm)
output = workflow.execute()
```

### 2. 集成进化/优化算法

EvoAgentX 内置了四种主流的 Agent 优化算法：

| 算法 | 来源 | 优化目标 |
|------|------|---------|
| TextGrad | Nature 2025 | 提示词和推理链的梯度式优化 |
| MIPRO | arXiv 2024 | 基于黑盒评估的模型无关迭代提示优化 |
| AFlow | arXiv 2024 | 基于 MCTS 的 workflow 结构与提示联合优化 |
| EvoPrompt | ICLR 2024 | 基于进化算法的提示优化 |

在 HotPotQA、MBPP、MATH 三个基准上的优化效果：

| 方法 | HotPotQA (F1%) | MBPP (Pass@1%) | MATH (Solve%) |
|------|-----------------|-----------------|----------------|
| Original | 63.58 | 69.00 | 66.00 |
| TextGrad | 71.02 | 71.00 | 76.00 |
| AFlow | 65.09 | 79.00 | 71.00 |
| MIPRO | 69.16 | 68.00 | 72.30 |

### 3. 工具生态

EvoAgentX 提供了六大类内置工具：

- **代码解释器**：PythonInterpreterToolkit (沙箱执行), DockerInterpreterToolkit (容器隔离)
- **搜索工具**：Google, Wikipedia, arXiv, RSS, SerpAPI, SerperAPI, DDGS
- **文件系统**：StorageToolkit, CMDToolkit, FileToolkit
- **数据库**：MongoDB, PostgreSQL, FAISS 向量数据库
- **图像工具**：ImageAnalysisToolkit, OpenAIImageGenerationToolkit, FluxImageGenerationToolkit
- **浏览器**：BrowserToolkit (细粒度自动化), BrowserUseToolkit (LLM 驱动)

```python
from evoagentx.tools import ArxivToolkit
arxiv_toolkit = ArxivToolkit()
wf_generator = WorkFlowGenerator(llm=llm, tools=[arxiv_toolkit])
workflow_graph = wf_generator.generate_workflow(
    goal="Find and summarize the latest research on AI in finance on arXiv"
)
```

### 4. Human-in-the-Loop 支持

通过 HITLManager 实现 Agent 执行中的人工审批和数据收集：

```python
from evoagentx.hitl import HITLManager, HITLInterceptorAgent, HITLInteractionType, HITLMode

hitl_manager = HITLManager()
hitl_manager.activate()

interceptor = HITLInterceptorAgent(
    target_agent_name="DataSendingAgent",
    target_action_name="DummyEmailSendAction",
    interaction_type=HITLInteractionType.APPROVE_REJECT,
    mode=HITLMode.PRE_EXECUTION
)
```

### 5. 记忆模块

支持短期 (ephemeral) 和长期 (persistent) 两种记忆系统，使 Agent 能够跨交互保留和检索上下文。

## 技术亮点

1. **端到端自进化流水线**：从自然语言目标到优化后 Agent workflow 的全自动化流程，涵盖构建、评估、进化三个核心阶段，是当前最完整的 Self-Evolving Agent 工程化框架之一。
2. **多算法优化引擎**：集成 TextGrad、MIPRO、AFlow、EvoPrompt 四种互补的优化算法，支持提示优化和 workflow 结构优化的联合搜索。
3. **丰富的工具生态**：六大类 30+ 内置工具覆盖代码执行、搜索、文件系统、数据库、图像和浏览器，并支持 MCP 工具扩展。
4. **模块化可扩展架构**：Agent、Workflow、Tool、Memory、Optimizer 各模块高度解耦，用户可灵活替换或扩展任何组件。
5. **真实场景验证**：在 GAIA 基准上成功优化了 Open Deep Research 和 OWL 等主流多 Agent 系统，证明了框架的实用性。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| Self-Evolving Agent 标准化 | EvoAgentX 首次将自进化 Agent 的完整流程（构建-评估-进化）标准化为可复用的工程框架，为 Self-Evolve 系统的实现提供了参考架构 |
| 多维度优化 | 同时支持 prompt 优化、workflow 结构优化和工具选择优化，展示了 Self-Evolve 系统需要在多个维度进行协同进化的设计理念 |
| 评估驱动的进化 | 通过内置评估器驱动 Agent 系统的进化方向，构建了"评估-反馈-优化"的闭环，是 Self-Evolve 系统质量保障的关键机制 |
| 生态与社区 | 发表的自进化 Agent 综述论文和活跃的社区生态，为 Self-Evolve 领域的知识传播和标准化做出了重要贡献 |

## 参考资料

- [EvoAgentX: An Automated Framework for Evolving Agentic Workflows (arXiv 2025)](https://arxiv.org/abs/2507.03616)
- [A Comprehensive Survey of Self-Evolving AI Agents (arXiv 2025)](https://arxiv.org/abs/2508.07407)
- [EvoAgentX Documentation](https://EvoAgentX.github.io/EvoAgentX/)
- [EvoAgentX Homepage](https://evoagentx.org/)
