# EvoAgentX: 自进化 AI Agent 生态系统的自动化构建框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/EvoAgentX/EvoAgentX |
| Star | 1k+ |
| 技术栈 | Python 3.11+, OpenAI API, LiteLLM, FAISS, Docker, MongoDB, PostgreSQL |
| 许可证 | MIT |
| 开发者 | EvoAgentX 团队（Yingxu Wang, Siwei Liu 等） |
| 论文 | EvoAgentX: An Automated Framework for Evolving Agentic Workflows (arXiv 2025) |

## 项目简介

EvoAgentX 是一个开源框架，旨在以自动化、模块化和目标驱动的方式构建、评估和进化基于 LLM 的 Agent 及 Agent 工作流。其核心理念是将 AI Agent 系统从静态的提示词链接或手动工作流编排，推进到**自进化的 Agent 生态系统**——Agent 可以被自动构建、评估和优化，如同软件的持续测试和改进。EvoAgentX 集成了多种前沿进化算法（TextGrad、MIPRO、AFlow、EvoPrompt），并支持工作流自动生成、内置评估、人机协作、长短期记忆等完整功能链。

## 目录结构

```
evoagentx/
├── evoagentx/                        # ★ 核心库
│   ├── models/                       # LLM 模型封装
│   │   ├── openai_model.py           # OpenAI 模型
│   │   ├── aliyun_model.py           # 通义千问模型
│   │   ├── litellm_model.py          # LiteLLM 统一接口
│   │   └── ...
│   ├── agents/                       # ★ Agent 管理
│   │   └── agent_manager.py          # Agent 管理器
│   ├── workflow/                     # ★ 工作流引擎
│   │   ├── workflow_generator.py     # 工作流自动生成
│   │   ├── workflow_graph.py         # 工作流图结构
│   │   └── workflow.py               # 工作流执行引擎
│   ├── optimization/                 # ★ 进化优化算法
│   │   ├── textgrad/                 # TextGrad 优化器
│   │   ├── mipro/                    # MIPRO 优化器
│   │   ├── aflow/                    # AFlow 优化器
│   │   └── evoprompt/                # EvoPrompt 优化器
│   ├── tools/                        # ★ 内置工具集
│   │   ├── interpreter_python.py     # Python 解释器
│   │   ├── interpreter_docker.py     # Docker 解释器
│   │   ├── search_wiki.py            # Wikipedia 搜索
│   │   ├── search_google.py          # Google 搜索
│   │   ├── browser_tool.py           # 浏览器自动化
│   │   ├── database_faiss.py         # FAISS 向量库
│   │   └── ...
│   ├── hitl/                         # 人机协作模块
│   │   ├── hitl_manager.py           # HITL 管理器
│   │   └── ...
│   └── memory/                       # 记忆模块
├── examples/                         # 示例代码
│   ├── optimization/                 # 优化示例
│   ├── workflow_demo.py              # 工作流演示
│   └── tools/                        # 工具使用示例
├── tests/                            # 测试
└── docs/                             # 文档与教程
```

## 核心模块分析

### 1. 工作流自动生成（workflow/）

EvoAgentX 可从自然语言目标自动构建多 Agent 工作流：

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

工作流图（WorkFlowGraph）支持可视化、序列化保存与加载，具备完整的 DAG 执行语义。

### 2. 进化优化算法（optimization/）

EvoAgentX 集成了四种先进的优化算法：

| 算法 | 优化目标 | 来源 |
|------|----------|------|
| TextGrad | 基于"梯度"的提示词与推理链优化 | Nature 2025 |
| MIPRO | 黑盒评估驱动的自适应提示词优化 | arXiv 2024 |
| AFlow | 蒙特卡洛树搜索驱动的工作流结构进化 | arXiv 2024 |
| EvoPrompt | 反馈驱动的进化式提示词精炼 | arXiv 2023 |

在 HotPotQA、MBPP、MATH 三个基准上的评估结果：

| 方法 | HotPotQA (F1%) | MBPP (Pass@1%) | MATH (Solve%) |
|------|-----------------|-----------------|----------------|
| 原始 | 63.58 | 69.00 | 66.00 |
| TextGrad | 71.02 | 71.00 | 76.00 |
| AFlow | 65.09 | 79.00 | 71.00 |
| MIPRO | 69.16 | 68.00 | 72.30 |

### 3. 内置工具生态（tools/）

提供六大类共 20+ 内置工具：
- **代码解释器**：Python（沙箱执行）和 Docker（隔离执行）
- **搜索引擎**：Google、Wikipedia、arXiv、DDGS、SerpAPI 等
- **文件系统**：读写、Shell 命令执行
- **数据库**：MongoDB、PostgreSQL、FAISS 向量库
- **图像工具**：分析、生成（DALL-E、Flux）
- **浏览器自动化**：底层控制和 LLM 驱动的高级操作

### 4. 人机协作（HITL）

支持在工作流关键节点插入人工审核：

```python
from evoagentx.hitl import HITLManager, HITLInterceptorAgent
hitl_manager = HITLManager()
interceptor = HITLInterceptorAgent(
    target_agent_name="DataSendingAgent",
    interaction_type=HITLInteractionType.APPROVE_REJECT,
    mode=HITLMode.PRE_EXECUTION
)
```

### 5. GAIA 基准应用

将 EvoAgentX 应用于 GAIA 排行榜上的 Open Deep Research 和 OWL 系统，仅优化提示词即显著提升性能，展示了框架在真实多 Agent 系统上的实用价值。

## 技术亮点

1. **端到端自动化**：从自然语言目标到工作流自动构建、Agent 自动实例化、自动评估和自动优化的完整流水线
2. **多算法融合**：集成 TextGrad、MIPRO、AFlow、EvoPrompt 四种优化算法，覆盖从提示词级到工作流结构级的多层次优化
3. **丰富的工具生态**：20+ 内置工具覆盖代码执行、搜索、数据库、浏览器等场景，支持 MCP 协议扩展
4. **人机协作框架**：完整的 HITL 支持包括审批拦截、用户输入收集和字段映射
5. **实际系统验证**：在 GAIA 基准上的真实多 Agent 系统（Open Deep Research、OWL）优化中证明了实用价值

## 与 Self-Evolve 关联

| 维度 | EvoAgentX 贡献 |
|------|---------------|
| 自进化 Agent 系统 | EvoAgentX 构建了从工作流生成到进化优化的完整 Agent 自进化框架，是 Self-Evolve 理念的直接工程实现 |
| 多层次进化优化 | 提供了提示词级（TextGrad/EvoPrompt）到结构级（AFlow）的多层次优化路径，为 Self-Evolve 系统的进化策略选择提供了参考 |
| 自动化评估闭环 | 内置评估器和基准测试集成的设计，实现了"生成-评估-进化"的完整闭环 |
| 工具使用进化 | Agent 工具集的自动分配和优化，启发了 Self-Evolve 系统中工具使用策略的自我改进 |
| 自进化 Agent 综述 | 配套发布的 Self-Evolving AI Agents 综述论文为领域提供了系统性知识梳理 |

## 参考资料

- [EvoAgentX 论文](https://arxiv.org/abs/2507.03616)
- [Self-Evolving AI Agents 综述](https://arxiv.org/abs/2508.07407)
- [EvoAgentX 文档](https://EvoAgentX.github.io/EvoAgentX/)
- [EvoAgentX 网站](https://evoagentx.org/)
