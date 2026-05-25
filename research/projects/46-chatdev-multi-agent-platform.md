# ChatDev (DevAll): 零代码多 Agent 编排平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/OpenBMB/ChatDev |
| Star | 26000+ |
| 技术栈 | Python 3.12+, FastAPI, Vue 3 + Vite, Node.js 18+, uv 包管理, YAML 工作流 |
| 许可证 | Apache 2.0 |
| 开发者 | 清华大学自然语言处理实验室 THUNLP (Chen Qian 等) / OpenBMB |

## 项目简介

ChatDev 是清华大学 THUNLP 实验室推出的多 Agent 协作平台，经历了从 1.0 到 2.0（DevAll）的重大架构演进。ChatDev 1.0 以"虚拟软件公司"为核心理念，通过 CEO、CTO、程序员、测试员等角色扮演 Agent 的专业化研讨会（Chat Chain）自动化整个软件开发生命周期。ChatDev 2.0（DevAll）则升级为一个零代码多 Agent 编排平台，用户无需编程即可通过可视化拖拽配置 Agent、工作流和任务，实现数据可视化、3D 生成、深度研究等多种场景的多 Agent 协作。

该项目的学术贡献极为丰富。其核心论文（Communicative Agents for Software Development）提出了基于对话的 Agent 协作范式，后续又发表了经验协同学习（Experiential Co-Learning）、多 Agent 协作网络（MacNet）、信息不对称下的自主协作 Agent（iAgents）等系列工作。2025 年被 NeurIPS 接收的 Multi-Agent Collaboration via Evolving Orchestration（Puppeteer 范式）提出了可学习中央编排器，通过强化学习动态激活和排序 Agent，构建高效的上下文感知推理路径。这一工作直接将"进化"引入了多 Agent 系统的编排层。

从自我进化的角度看，ChatDev 的核心进化机制包括：经验协同学习（IER）让指导者和助手 Agent 通过经验获取、利用、传播和消除来缩短任务链路；MacNet 支持超过 1000 个 Agent 的有向无环图协作而不超出上下文限制；Puppeteer 通过 RL 优化中央编排器实现动态 Agent 选择。这些能力使其成为研究多 Agent 系统自我进化的重要实验平台。

## 目录结构
```
chatdev/
├── server/                    ★ FastAPI 后端服务
├── runtime/                   ★ Agent 抽象与工具执行运行时
│   └── sdk.py                 ★ Python SDK 入口 (run_workflow)
├── workflow/                  ★ 多 Agent 工作流逻辑
├── entity/                    ★ 实体与配置定义
├── frontend/                  ★ Vue 3 Web 控制台
│   ├── components/            React 组件
│   └── pages/                 页面路由
├── functions/                 ★ 自定义 Python 工具扩展目录
├── yaml_instance/             ★ 预置工作流 YAML 配置
│   ├── ChatDev_v1.yaml        经典软件开发工作流
│   ├── GameDev_v1.yaml        游戏开发工作流
│   ├── data_visualization_*.yaml  数据可视化工作流
│   ├── blender_*.yaml         3D 生成工作流
│   ├── deep_research_v1.yaml  深度研究工作流
│   └── demo_*.yaml            功能演示工作流
├── WareHouse/                 Agent 生成的产出物
├── docs/                      开发者文档
├── server_main.py             ★ 服务启动入口
└── Makefile                   构建/开发命令集
```

## 核心模块分析

### 1. 零代码工作流编排系统
ChatDev 2.0 的核心创新在于其零代码编排能力。用户通过 Web 控制台的可视化画布（Workflow）拖拽配置节点参数、定义上下文流和编排复杂 Agent 交互。工作流以 YAML 格式存储在 `yaml_instance/` 目录中，每个 YAML 文件定义了完整的 Agent 链路、角色分配、消息传递和终止条件。Python SDK 提供 `run_workflow()` 函数，支持编程式执行工作流，可传入附件和变量覆盖。

### 2. Chat Chain 对话链架构
ChatDev 1.0 的 Chat Chain 架构将软件开发过程分解为一系列顺序执行的功能研讨会（Phase），每个 Phase 由两个角色（如 CEO-CTO、CTO-Programmer）通过多轮对话完成任务。ChatChainConfig.json 定义了完整的链路配置，支持自定义 ChatChain、Phase 和 Role 设置。该架构支持增量开发模式（在现有代码基础上继续开发）和 Git 模式（自动版本控制）。

### 3. 经验协同学习 (Experiential Co-Learning)
IER（Iterative Experience Refinement）是 ChatDev 实现自我进化的关键机制。指导者（Instructor）和助手（Assistant）Agent 在一系列任务中积累快捷导向经验（Shortcut-oriented Experience），通过经验获取、利用、传播和消除四个阶段不断优化任务执行路径。这使得后续任务能够利用前序任务的经验缩短执行链路、减少重复错误。

### 4. MacNet 多 Agent 协作网络
MacNet（Multi-Agent Collaboration Networks）使用有向无环图（DAG）促进 Agent 间的任务导向协作。它支持多种拓扑结构（链式、树状、图状），能够在不超出上下文限制的情况下支持超过 1000 个 Agent 的协作。MacNet 超越了软件开发的范畴，还支持逻辑推理、数据分析、故事生成等多样化任务。

### 5. Puppeteer 进化编排
这是 ChatDev 最新的进化机制（NeurIPS 2025）。Puppeteer 范式引入了一个可学习的中央编排器，通过强化学习优化，动态激活和排序 Agent 以构建高效、上下文感知的推理路径。这不仅提高了推理质量，还降低了计算成本，实现了可扩展和可适应的多 Agent 协作。

## 技术亮点

1. **零代码可视化编排**：通过 Web 控制台拖拽配置 Agent、工作流和任务，YAML 工作流同时支持可视化编辑和编程式执行
2. **Chat Chain 对话链**：将复杂任务分解为角色扮演的多轮对话序列，支持自定义 Phase 和 Role
3. **经验协同学习 IER**：Agent 通过经验获取、利用、传播、消除四阶段实现跨任务的自我改进
4. **Puppeteer 进化编排**：RL 优化的中央编排器动态选择和排序 Agent，NeurIPS 2025 接收
5. **MacNet 千级 Agent 扩展**：有向无环图支持 1000+ Agent 协作不超出上下文限制
6. **丰富的预置工作流**：数据可视化、3D 生成（Blender MCP）、游戏开发、深度研究、教学视频等
7. **多模式交互**：支持 Human-Agent-Interaction（人类审阅者角色）、Art 模式（图像生成）、Git 版本控制模式

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | IER 经验协同学习实现跨任务经验积累与优化；Puppeteer 通过 RL 进化编排策略 |
| Prompt 工程 | 角色扮演通过 system_message 定义；Chat Chain 每个阶段的 Prompt 可独立配置 |
| 评估框架 | 内置终止条件和任务完成检测；MacNet 支持多拓扑结构下的任务质量评估 |
| Agent 编排 | 核心能力：Chat Chain 对话链、MacNet DAG 协作、Puppeteer RL 编排、YAML 工作流 |
| 经验积累 | IER 四阶段机制（获取、利用、传播、消除）实现 Agent 经验的跨任务迁移 |
| 多 Agent 协作 | 从双角色对话到千级 DAG 协作，再到 RL 动态编排，提供完整的多 Agent 协作光谱 |
| 领域扩展 | 从软件开发扩展到数据分析、3D 建模、深度研究、游戏开发等多领域 |

## 参考资料
- GitHub: https://github.com/OpenBMB/ChatDev
- 论文 (ChatDev): https://arxiv.org/abs/2307.07924
- 论文 (Co-Learning): https://arxiv.org/abs/2312.17025
- 论文 (MacNet): https://arxiv.org/abs/2406.07155
- 论文 (Puppeteer): https://arxiv.org/abs/2505.19591
- 论文 (iAgents): https://arxiv.org/abs/2406.14928
- 联系邮箱: qianc62@gmail.com

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/openbmb__chatdev`
- **分析命令**：`gitnexus analyze repos/openbmb__chatdev --index-only --skip-git --name ChatDev`
- **知识图谱规模**：待分析
- **查询语句**：`workflow agent chain phase role yaml run_workflow ChatChain IER MacNet puppeteer`
- **核心执行流程候选**：`YAML parse -> workflow build -> agent chain execution -> message passing -> termination`；`run_workflow(yaml_file) -> SDK -> runtime -> workflow engine -> agent nodes`
- **关键符号/文件**：`server/`, `runtime/`, `workflow/`, `entity/`, `yaml_instance/`, `functions/`, `server_main.py`, `run_workflow()`, `ChatChainConfig.json`
- **调用关系上下文**：server_main.py 启动 FastAPI 后端 -> 前端通过 API 触发工作流执行 -> runtime/sdk.py 的 run_workflow() 解析 YAML -> workflow 模块构建 Agent 链路 -> entity 定义角色和配置 -> 各 Agent 节点通过消息传递协作 -> 产出物存入 WareHouse/
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
