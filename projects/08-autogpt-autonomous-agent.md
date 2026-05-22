# AutoGPT: 自主智能体平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Significant-Gravitas/AutoGPT |
| Star | 175k+（GitHub 历史最高星标之一） |
| 技术栈 | Python, Docker, Node.js, React, TypeScript |
| 许可证 | MIT (平台) / Polyform (商业) |
| 产品 | [AutoGPT Platform](https://agpt.co) |

## 项目简介

AutoGPT 是最早引爆 AI Agent 浪潮的项目，从一个简单的自主 Agent 概念验证发展为完整的 **Agent 构建与部署平台**。它允许用户创建、部署和管理持续运行的 AI Agent 来自动化复杂工作流。

当前架构已演化为三层：
1. **autogpt_platform/**: 新一代平台（Docker + React + Python 后端）
2. **classic/original_autogpt/**: 经典版自主 Agent
3. **classic/forge/**: Agent 构建框架（SDK）

## 目录结构

```
AutoGPT/
├── autogpt_platform/        # 新一代平台
│   ├── autogpt_libs/        # 共享库
│   ├── backend/             # Python 后端（FastAPI）
│   ├── frontend/            # React 前端
│   ├── market/              # Agent 市场
│   ├── analytics/           # 分析模块
│   └── monitor/             # 监控
├── classic/
│   ├── original_autogpt/    # 经典版 AutoGPT
│   │   ├── autogpt/         # 核心 Agent 逻辑
│   │   │   ├── agent/       # Agent 基类
│   │   │   ├── commands/    # 命令系统（文件、Web、代码执行等）
│   │   │   ├── config/      # 配置
│   │   │   ├── llm/         # LLM 交互
│   │   │   ├── memory/      # 记忆系统
│   │   │   │   └── local_cache.py  # 本地缓存
│   │   │   ├── processing/  # 思维处理
│   │   │   ├── speech/      # 语音
│   │   │   └── workspace/   # 工作空间
│   │   └── data/            # 数据
│   └── forge/               # Agent 构建框架
│       └── forge/
│           ├── agent/       # Agent 协议与实现
│           ├── llm/         # LLM 抽象
│           └── components/  # 可组合组件
├── docs/                    # 文档
└── .agents/                 # Agent 定义
```

## 核心模块分析

### 1. 经典 Agent 循环

AutoGPT 的经典 Agent 循环：

```
目标设定 → 思考(Thought) → 行动(Action) → 观察(Observation) → 循环
```

**Thought-Action-Observation 循环**：
1. **Thought**: LLM 分析当前状态，决定下一步
2. **Action**: 执行一个命令（搜索、文件操作、代码执行等）
3. **Observation**: 获取命令结果
4. **循环**: 将观察结果加入上下文，回到步骤 1

### 2. Agent Forge 框架

Forge 是 AutoGPT 的 Agent 开发 SDK：

- **Agent Protocol**: 标准化的 Agent 接口
- **组件化**: 可组合的 Agent 能力模块
- **LLM 抽象**: 统一的多模型支持
- **Benchmark 集成**: 自动化评估

### 3. AutoGPT 平台（新一代）

平台架构：
```
Frontend (React) → Backend (FastAPI) → Agent Runtime (Docker)
                                           ├── Agent 1 (Block-based)
                                           ├── Agent 2 (Code-based)
                                           └── ...
```

- **Block 架构**: 可视化的 Block 编排系统
- **持续运行**: Agent 可以长期在后台运行
- **Market**: Agent 市场，分享和复用

### 4. 记忆系统

经典版 AutoGPT 的记忆：
- **短期记忆**: 当前对话上下文
- **本地缓存**: 持久化的记忆存储
- **嵌入搜索**: 基于向量相似性的记忆检索

## 技术亮点

1. **Agent 鼻祖**: 定义了自主 Agent 的基本范式（TAO 循环）
2. **平台化演进**: 从 CLI 工具到完整的 Agent 平台
3. **Block 编排**: 可视化构建 Agent 工作流
4. **Agent 市场**: 复用和分享 Agent
5. **175k+ Stars**: 社区影响力巨大

## 与 Self-Evolve 关联

| 维度 | AutoGPT 贡献 |
|------|-------------|
| Agent 范式 | TAO 循环（Thought-Action-Observation）是 Agent 的基础模式 |
| 记忆 | 本地缓存 + 嵌入搜索的记忆架构 |
| 平台 | Agent 构建与部署的平台化思路 |
| 启示 | 从单 Agent → 平台的演进路径可参考；Block 编排可扩展到自我进化工作流 |

## 参考资料

- [AutoGPT GitHub](https://github.com/Significant-Gravitas/AutoGPT)
- [AutoGPT Platform](https://agpt.co)
- [Agent Protocol](https://agentprotocol.ai/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/significant_gravitas__autogpt`（指向 `repos/significant_gravitas__autogpt` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/significant_gravitas__autogpt --index-only --skip-git --name AutoGPT`。
- **知识图谱规模**：75477 symbols / 135916 edges / 1499 clusters / 300 flows。
- **查询语句**：`agent block workflow platform executor memory planner`。
- **核心执行流程候选**：GitNexus 未返回高置信流程，保留原报告源码结构分析。
- **关键符号/文件**：
  - `test_orchestrator_zero_stays_zero`（`autogpt_platform/backend/backend/executor/simulator_test.py`）
  - `test_orchestrator_falls_back_without_key`（`autogpt_platform/backend/backend/executor/simulator_test.py`）
  - `test_agent_executor_block_passthrough`（`autogpt_platform/backend/backend/executor/simulator_test.py`）
  - `test_version_mismatch_with_library_agent`（`autogpt_platform/backend/backend/copilot/tools/agent_generator/validator_test.py`）
  - `TestValidateAgentExecutorBlockSchemas`（`autogpt_platform/backend/backend/copilot/tools/agent_generator/validator_test.py`）
  - `TestValidateAgentExecutorBlocks`（`autogpt_platform/backend/backend/copilot/tools/agent_generator/validator_test.py`）
- **调用关系上下文**：
  - 符号 `test_orchestrator_zero_stays_zero` 位于 `autogpt_platform/backend/backend/executor/simulator_test.py` 第 298–310 行
  - 入边/被依赖关系：has_method: 1
  - 出边/调用或包含关系：calls: 1
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
