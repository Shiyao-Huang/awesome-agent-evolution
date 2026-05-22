# Devika: AI 软件工程师

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/stitionai/devika |
| Star | 22k+ |
| 技术栈 | Python, Flask, Socket.IO, Playwright, BERT, Ollama |
| 许可证 | MIT |
| 开发者 | Stition AI |
| 特点 | 多 LLM 支持（OpenAI/Claude/Gemini/Ollama 等） |

## 项目简介

Devika 是一个开源的**AI 软件工程师**，能够理解人类需求、规划方案、编写代码并修复 Bug。与 Devin 类似但完全开源。

核心理念：**多 Agent 流水线 + 专业模块化** — 将软件开发分解为规划、研究、编码、修复等专业 Agent 的协作。

## 目录结构

```
devika/
├── src/
│   ├── agents/                  # ★ 多 Agent 系统
│   │   ├── agent.py             # Agent 基类
│   │   ├── planner/             # 计划 Agent（任务分解）
│   │   ├── researcher/          # 研究 Agent（信息搜集）
│   │   ├── coder/               # 编码 Agent（代码生成）
│   │   ├── action/              # 动作 Agent
│   │   ├── answer/              # 回答 Agent
│   │   ├── decision/            # 决策 Agent
│   │   ├── feature/             # 特性 Agent
│   │   ├── formatter/           # 格式化 Agent
│   │   ├── internal_monologue/  # 内心独白 Agent
│   │   ├── patcher/             # 补丁 Agent（代码修复）
│   │   ├── reporter/            # 报告 Agent
│   │   └── runner/              # 运行 Agent（代码执行）
│   ├── llm/                     # ★ 多 LLM 支持
│   │   ├── llm.py               # LLM 统一接口
│   │   ├── openai_client.py     # OpenAI
│   │   ├── claude_client.py     # Anthropic Claude
│   │   ├── gemini_client.py     # Google Gemini
│   │   ├── ollama_client.py     # Ollama（本地模型）
│   │   ├── mistral_client.py    # Mistral
│   │   ├── groq_client.py       # Groq
│   │   └── lm_studio_client.py  # LM Studio
│   ├── memory/                  # 记忆系统
│   ├── browser/                 # 浏览器自动化（Playwright）
│   ├── sandbox/                 # 沙箱环境
│   ├── documenter/              # 文档生成
│   ├── experts/                 # 专家系统
│   ├── filesystem/              # 文件系统操作
│   ├── bert/                    # BERT 模型（意图识别）
│   ├── apis/                    # API 接口
│   ├── services/                # 服务层
│   ├── project.py               # 项目管理
│   ├── state.py                 # 状态管理
│   └── config.py                # 配置
├── ui/                          # 前端 UI
├── benchmarks/                  # 基准测试
└── docs/                        # 文档
```

## 核心模块分析

### 1. 多 Agent 流水线

Devika 将软件开发分解为专业 Agent 的流水线：

```
用户输入
    ↓
[Planner Agent] ──任务分解──> 开发计划
    ↓
[Researcher Agent] ──信息搜集──> 技术资料
    ↓
[Decision Agent] ──技术决策──> 架构方案
    ↓
[Coder Agent] ──代码生成──> 源代码
    ↓
[Runner Agent] ──执行测试──> 测试结果
    ↓
[Patcher Agent] ──修复 Bug──> 修复后代码
    ↓
[Reporter Agent] ──生成报告──> 项目报告
```

### 2. 多 LLM 统一接口

`llm/llm.py` 提供统一的 LLM 接口，支持 8+ 种后端：
- OpenAI GPT 系列
- Anthropic Claude
- Google Gemini
- Ollama（本地模型）
- Mistral、Groq、LM Studio

### 3. BERT 意图识别

`bert/` 模块使用 BERT 模型进行用户意图识别，辅助 Agent 决策。

### 4. 浏览器自动化

`browser/` 使用 Playwright 进行网页浏览和信息搜集。

### 5. 项目管理

`project.py` 管理项目状态、文件结构和开发进度。

## 技术亮点

1. **多 Agent 流水线**：规划→研究→决策→编码→测试→修复→报告
2. **多 LLM 支持**：8+ 种 LLM 后端统一接口
3. **完全开源**：Devin 的开源替代
4. **BERT 增强**：意图识别辅助决策
5. **浏览器集成**：Playwright 网页自动化

## 与 Self-Evolve 关联

| 维度 | Devika 贡献 |
|------|------------|
| 多 Agent | 专业 Agent 流水线协作模式 |
| 代码生成 | 规划→编码→测试→修复的完整循环 |
| 多 LLM | 统一接口支持多种 LLM 后端 |
| 沙箱 | 安全的代码执行环境 |
| 启示 | 流水线式 Agent 协作可参考于自我进化的迭代改进流程 |

## 参考资料

- [Devika GitHub](https://github.com/stitionai/devika)
- [Devika 文档](https://devika.stition.ai/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/stitionai__devika`（指向 `repos/stitionai__devika` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/stitionai__devika --index-only --skip-git --name Devika`。
- **知识图谱规模**：1246 symbols / 2240 edges / 58 clusters / 53 flows。
- **查询语句**：`agent planner coder researcher patcher llm browser sandbox`。
- **核心执行流程候选**：
  - Planner → Researcher → Coder → Runner → Patcher
  - Agent → LLM → Response → Parser
- **关键符号/文件**：
  - `agent.py`（`src/agents/agent.py`）
  - `planner/`（`src/agents/planner/`）
  - `coder/`（`src/agents/coder/`）
  - `llm.py`（`src/llm/llm.py`）
  - `browser/`（`src/browser/`）
- **调用关系上下文**：
  - 多 Agent 通过流水线模式串联执行。
  - `llm.py` 提供统一的 LLM 接口，支持 8+ 后端切换。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
