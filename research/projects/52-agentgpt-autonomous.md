# AgentGPT: 浏览器内自主 AI Agent 平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/reworkd/AgentGPT |
| Star | 33k+ |
| 技术栈 | TypeScript, Next.js, Python, FastAPI, MySQL, Docker |
| 许可证 | MIT |
| 开发者 | Reworkd AI |
| 产品 | [AgentGPT Online](https://agentgpt.reworkd.ai) |

## 项目简介

AgentGPT 是一个开源的**自主 AI Agent 平台**，允许用户在浏览器中配置和部署自主 AI Agent。用户为 Agent 设定目标，Agent 会自动分解任务、执行并从结果中学习。

核心理念：**自主思考→执行→学习循环** — Agent 通过持续的任务分解、执行和反思来达成用户设定的目标。

## 目录结构

```
agentgpt/
├── next/                       # ★ Next.js 前端
│   ├── src/
│   │   ├── components/         # UI 组件
│   │   ├── pages/              # 页面
│   │   ├── styles/             # 样式
│   │   ├── types/              # 类型定义
│   │   └── utils/              # 工具函数
│   ├── public/                 # 静态资源
│   └── package.json
├── platform/                   # ★ FastAPI 后端
│   ├── reworkd/                # 核心平台代码
│   │   ├── agents/             # ★ Agent 实现
│   │   ├── llm/                # LLM 集成
│   │   ├── schemas/            # 数据模型
│   │   ├── services/           # 服务层
│   │   └── utils/              # 工具函数
│   └── main.py                 # 入口
├── db/                         # 数据库
└── scripts/                    # 脚本
```

## 核心模块分析

### 1. 自主 Agent 循环

AgentGPT 的核心是自主循环：

```
用户目标
    ↓
[Task Agent] ──分解任务──> 子任务列表
    ↓
[Execution Agent] ──执行任务──> 执行结果
    ↓
[Learning Agent] ──分析结果──> 新的洞察
    ↓
[Task Agent] ──生成新任务──> 继续迭代...
```

### 2. 前端界面

Next.js 前端提供：
- Agent 创建和配置界面
- 实时执行状态显示
- 任务分解可视化
- 对话历史记录

### 3. 后端 API

FastAPI 后端：
- Agent 生命周期管理
- LLM 调用接口
- 任务执行引擎
- 数据持久化（MySQL）

### 4. 多 LLM 支持

支持多种 LLM 后端：
- OpenAI GPT 系列
- 其他 OpenAI 兼容 API

### 5. Docker 部署

一键 Docker 部署：
- 前端 + 后端 + 数据库完整栈
- 自动配置环境变量

## 技术亮点

1. **浏览器内运行**：完整的 Web UI，无需本地环境
2. **自主循环**：思考→执行→学习的自动迭代
3. **33k+ Stars**：最受欢迎的自主 Agent 项目之一
4. **全栈架构**：Next.js + FastAPI + MySQL 完整技术栈
5. **Docker 一键部署**：简单易用的部署方案

## 与 Self-Evolve 关联

| 维度 | AgentGPT 贡献 |
|------|--------------|
| 自主循环 | 思考→执行→学习的自主迭代模式 |
| 任务分解 | 自动目标分解为可执行子任务 |
| Web UI | Agent 操作的可视化界面参考 |
| 全栈 | Next.js + FastAPI 全栈架构参考 |
| 启示 | "自主 Agent 循环"模式可扩展到 Agent 自我改进场景 |

## 参考资料

- [AgentGPT GitHub](https://github.com/reworkd/AgentGPT)
- [AgentGPT Online](https://agentgpt.reworkd.ai)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/reworkd__agentgpt`（指向 `repos/reworkd__agentgpt` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/reworkd__agentgpt --index-only --skip-git --name AgentGPT`。
- **知识图谱规模**：待分析。
- **查询语句**：`agent task execution learning loop goal decomposition`。
- **核心执行流程候选**：
  - Goal → Task Agent → Execution Agent → Learning Agent → Loop
- **关键符号/文件**：
  - `agents/`（`platform/reworkd/agents/`）
  - `llm/`（`platform/reworkd/llm/`）
  - `main.py`（`platform/main.py`）
- **调用关系上下文**：
  - 前端通过 API 调用后端 Agent 服务。
  - Agent 循环通过 LLM 生成任务、执行、学习。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
