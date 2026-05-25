# OpenHands: AI 软件开发平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/All-Hands-AI/OpenHands |
| Star | 55k+ |
| 技术栈 | Python, React, Docker, FastAPI |
| 许可证 | MIT |
| 安装 | `pip install openhands` |
| 开发者 | All-Hands-AI（原 OpenDevin） |
| 产品 | [OpenHands App](https://app.all-hands.dev/) |

## 项目简介

OpenHands（原 OpenDevin）是一个**开源 AI 软件开发平台**，让 AI Agent 能够像人类开发者一样编写代码、修复 Bug、执行任务。它提供完整的开发环境（代码编辑、终端、浏览器），支持多种 LLM 后端。

核心理念：**AI Agent + 完整开发环境 = 自主软件工程**。Agent 在沙箱中操作真实的文件系统、终端和浏览器。

## 目录结构

```
openhands/
├── openhands/
│   ├── controller/              # ★ 控制器（Agent 编排）
│   ├── server/                  # Web 服务器（FastAPI）
│   ├── app_server/              # 应用服务器
│   │   ├── app.py               # FastAPI 应用
│   │   ├── v1_router.py         # API 路由
│   │   └── middleware.py        # 中间件
│   ├── analytics/               # 分析服务
│   └── version.py               # 版本信息
├── frontend/                    # React 前端
│   └── src/
├── tests/                       # 测试
├── enterprise/                  # 企业版功能
│   ├── server/                  # 企业服务器
│   ├── storage/                 # 存储
│   ├── integrations/            # 集成（GitHub/GitLab）
│   └── analytics/               # 企业分析
├── .agents/                     # Agent 配置
│   └── skills/                  # 技能定义
└── .openhands/                  # Microagents
    └── microagents/             # 微 Agent 定义
```

## 核心模块分析

### 1. Agent + 环境 架构

```
用户任务
    ↓
Controller（控制器）
    ├── Agent（LLM 决策）
    │     ├── 观察环境状态
    │     ├── 生成动作（代码编辑/终端/浏览）
    │     └── 解析结果
    └── Environment（沙箱环境）
          ├── 文件系统
          ├── 终端（Docker）
          └── 浏览器
```

### 2. Microagent 系统

OpenHands 引入 **Microagent** 概念：
- 预定义的技能模块（`.openhands/microagents/`）
- 每个 Microagent 负责一个特定任务
- 组合多个 Microagent 完成复杂工作流

### 3. 技能系统

`.agents/skills/`：定义 Agent 的能力
- 代码编辑
- 文件操作
- 终端命令
- 浏览器交互
- Git 操作

### 4. 企业级功能

- **存储集成**：S3/Azure/GCS
- **CI/CD 集成**：GitHub/GitLab
- **分析仪表盘**：使用统计和成本追踪
- **权限管理**：多租户支持

### 5. 前端 UI

React 前端提供：
- 实时代码编辑器
- 终端视图
- 浏览器视图
- Agent 对话界面
- 运行历史

## 技术亮点

1. **完整开发环境**：Docker 沙箱 + 终端 + 浏览器
2. **55k+ Stars**：最受欢迎的开源 AI 开发平台
3. **Microagent**：可组合的微型 Agent 技能模块
4. **企业就绪**：存储/CI/分析/权限完整支持
5. **可视化界面**：React 前端实时展示 Agent 操作
6. **多 LLM 支持**：OpenAI/Anthropic/本地模型

## 与 Self-Evolve 关联

| 维度 | OpenHands 贡献 |
|------|---------------|
| 开发环境 | 完整的 AI Agent 开发环境（编辑器/终端/浏览器） |
| 技能系统 | Microagent + Skills 的可组合技能架构 |
| 沙箱 | Docker 隔离的安全执行环境 |
| 企业级 | 生产级部署的参考架构 |
| 启示 | "AI Agent + 完整开发环境"的模式可扩展到 Agent 自我改进的开发场景 |

## 参考资料

- [OpenHands GitHub](https://github.com/All-Hands-AI/OpenHands)
- [OpenHands 文档](https://docs.all-hands.dev/)
- [OpenHands App](https://app.all-hands.dev/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/all_hands_ai__openhands`（指向 `repos/all_hands_ai__openhands` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/all_hands_ai__openhands --index-only --skip-git --name OpenHands`。
- **知识图谱规模**：30332 symbols / 57438 edges / 702 clusters / 300 flows。
- **查询语句**：`controller agent environment sandbox code execution browser`。
- **核心执行流程候选**：
  - Controller → Agent step → Environment execute
  - Microagent → Skill → Tool
- **关键符号/文件**：
  - `app.py`（`openhands/server/app.py`）
  - `v1_router.py`（`openhands/app_server/v1_router.py`）
  - `.openhands/microagents/` 目录
  - `.agents/skills/` 目录
- **调用关系上下文**：
  - FastAPI 应用通过 `v1_router.py` 路由请求到 Agent 执行管线。
  - Microagent 系统通过 YAML 配置组合技能。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
