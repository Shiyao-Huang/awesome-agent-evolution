# AgentGPT: 浏览器端自主 AI Agent 平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/reworkd/AgentGPT |
| Star | 33,000+ |
| 技术栈 | Next.js 13 + TypeScript (前端), FastAPI + Python (后端), Prisma + SQLModel (ORM), MySQL/PlanetScale (数据库), LangChain (LLM工具链) |
| 许可证 | MIT |
| 开发者 | Reworkd AI |

## 项目简介

AgentGPT 是一个开源的浏览器端自主 AI Agent 平台，允许用户在浏览器中组装、配置和部署自主 AI 代理。用户可以为自定义 AI 命名并设定任意目标，Agent 将通过"思考任务 -> 执行任务 -> 从结果中学习"的循环模式自主尝试达成目标。

该项目采用前后端分离架构，前端使用 Next.js 13 与 TypeScript 构建，后端基于 FastAPI 框架，通过 LangChain 集成 OpenAI 等大语言模型。AgentGPT 提供了完整的开发工具链，包括自动化的 CLI 安装脚本，可一键配置环境变量、数据库、后端和前端服务。

作为早期爆火的 AI Agent 项目之一，AgentGPT 为理解自主 Agent 的基本工作原理和交互模式提供了重要的参考实现，其"目标分解 -> 迭代执行 -> 反馈学习"的核心循环对后续 Agent 框架设计产生了深远影响。

## 目录结构
```
AgentGPT/
├── next/                    ★ Next.js 前端应用
│   └── public/
├── platform/                ★ FastAPI 后端平台
├── db/                      ★ 数据库相关（MySQL / PlanetScale）
├── docs/                    文档与多语言 README
├── scripts/                 辅助脚本
├── setup.sh                 Mac/Linux 一键安装脚本
├── setup.bat                Windows 一键安装脚本
├── docker-compose.yml       Docker 编排配置
├── .env.example             环境变量模板
└── README.md
```

## 核心模块分析

### 1. Agent 执行引擎
AgentGPT 的核心是自主 Agent 执行引擎，实现了"思考(Thought) -> 任务(Task) -> 执行(Execution) -> 反馈(Feedback)"的闭环循环。Agent 接收用户定义的目标后，会自动将其分解为可执行的子任务序列，逐步执行并根据中间结果调整后续计划。

### 2. 前端交互界面 (next/)
基于 Next.js 13 构建的现代 Web 界面，使用 TailwindCSS + HeadlessUI 实现响应式设计。支持实时展示 Agent 的思考过程、任务分解和执行结果，提供直观的 Agent 管理与监控体验。集成 Next-Auth.js 实现用户认证。

### 3. 后端 API 平台 (platform/)
FastAPI 驱动的后端服务，提供 Agent 生命周期管理的 RESTful API。使用 SQLModel 进行数据建模，通过 Pydantic 实现请求/响应的数据验证。后端负责协调 Agent 执行、管理会话状态和持久化存储。

### 4. LLM 集成层
通过 LangChain 框架集成 OpenAI GPT 系列模型，负责将用户目标转化为结构化的任务计划。支持调用外部工具（如 Serper 搜索 API、Replicate 模型）来扩展 Agent 的能力边界，使 Agent 能够获取实时信息。

### 5. 数据持久化 (db/)
使用 PlanetScale（兼容 MySQL 协议）作为主数据库，前端通过 Prisma ORM、后端通过 SQLModel ORM 进行数据访问。存储 Agent 配置、执行历史、任务状态等核心数据。

## 技术亮点
1. **全自动 CLI 安装**：提供跨平台 setup 脚本，一键配置 API Keys、数据库、后端和前端服务，极大降低了部署门槛
2. **前后端全栈架构**：Next.js + FastAPI 的双端架构，TypeScript + Python 双语言栈，兼顾前端体验与后端性能
3. **Agent 目标分解循环**：实现了经典的自主 Agent "Think -> Plan -> Execute -> Learn" 迭代循环
4. **可扩展工具集成**：通过 LangChain 工具链支持搜索（Serper）、图像生成（Replicate）等外部能力
5. **Docker 容器化部署**：提供完整的 docker-compose 配置，支持一键容器化部署

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 进化循环 | AgentGPT 的"目标->任务分解->执行->学习"循环是 Self-Evolve 进化循环的早期原型，展示了 Agent 如何通过迭代反馈不断优化行为 |
| Agent 编排 | 展示了最基本的 Agent 编排模式：单 Agent + 工具调用 + 反馈循环 |
| Prompt 工程 | 用户通过定义目标和约束来引导 Agent 行为，是 Prompt 驱动 Agent 的典型实践 |
| 评估框架 | AgentGPT 缺乏系统化的评估机制，这正是 Self-Evolve 需要补齐的能力 |
| 自主性层级 | 实现了 L2 级别的自主性（给定目标，自主规划执行），但缺乏自我纠错和持续进化能力 |

## 参考资料
- [AgentGPT GitHub](https://github.com/reworkd/AgentGPT)
- [AgentGPT 在线演示](https://agentgpt.reworkd.ai)
- [Reworkd AI 官方文档](https://reworkd.ai/docs)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/reworkd__agentgpt`
- **分析命令**：`gitnexus analyze repos/reworkd__agentgpt --index-only --skip-git --name AgentGPT`
- **知识图谱规模**：待分析
- **查询语句**：`agent execution loop, task decomposition, LangChain integration, FastAPI endpoint, Next.js agent UI`
- **核心执行流程候选**：Goal -> Task Decomposition -> Execution -> Result Evaluation -> Next Task
- **关键符号/文件**：`platform/` (后端Agent逻辑), `next/` (前端交互), `setup.sh` (部署脚本)
- **调用关系上下文**：前端 Next.js 通过 REST API 调用后端 FastAPI，后端通过 LangChain 调用 OpenAI API，Agent 执行循环在服务端维护状态
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
