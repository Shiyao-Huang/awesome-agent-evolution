# AgentGPT: 浏览器内自主AI智能体平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/reworkd/AgentGPT |
| Star | 32k+ |
| 技术栈 | Next.js 13, TypeScript, FastAPI, Prisma, MySQL, LangChain, TailwindCSS |
| 许可证 | MIT (前端) / 自定义 (部分模块) |
| 开发者 | Reworkd AI |

## 项目简介

AgentGPT 是一个允许用户在浏览器中配置和部署自主 AI 智能体的开源平台。用户可以自定义 AI 智能体的名称和目标,智能体会通过"思考任务 -> 执行任务 -> 从结果中学习"的循环来尝试达成目标。该项目集成了 LangChain 作为 LLM 工具层,采用 Next.js + FastAPI 的全栈架构,提供了完整的 Web UI 交互体验。

## 目录结构

```
reworkd__agentgpt/
├── next/                    # Next.js 前端应用
│   └── src/
│       ├── components/      # React UI 组件
│       ├── env/             # 环境变量配置
│       ├── hooks/           # React 自定义钩子
│       ├── layout/          # 布局组件
│       ├── lib/             # 工具库
│       ├── pages/           # 页面路由
│       ├── server/          # 服务端逻辑
│       ├── services/        # API 调用服务
│       ├── stores/          # 状态管理
│       ├── styles/          # 样式文件
│       ├── types/           # TypeScript 类型定义
│       └── ui/              # 通用 UI 组件
├── platform/                # FastAPI 后端平台
│   └── reworkd_platform/
│       ├── web/             # Web API 路由
│       ├── services/        # 业务逻辑服务
│       ├── schemas/         # Pydantic 数据模型
│       ├── db/              # 数据库操作
│       ├── models/          # ORM 模型
│       └── tests/           # 后端测试
├── db/                      # 数据库迁移脚本 (MySQL)
├── cli/                     # 自动化设置 CLI 工具
├── docs/                    # 项目文档
└── scripts/                 # 辅助脚本
```

## 核心模块分析

### 1. 智能体执行引擎 (platform/reworkd_platform/services/)

AgentGPT 的核心是自主任务执行循环。智能体接收用户设定的目标后,通过 LLM 生成任务列表,逐个执行任务并从执行结果中提取信息来指导下一步行动。该模块使用 LangChain 作为编排层,支持将任务拆分为多个子步骤,并支持网络搜索、代码执行等工具调用。

### 2. 前端交互界面 (next/src/)

前端基于 Next.js 13 构建,提供实时可视化界面展示智能体的思考过程和任务执行状态。采用 TailwindCSS + HeadlessUI 构建响应式 UI,使用 Next-Auth.js 处理用户认证,通过 WebSocket 实现实时流式输出,让用户能够看到智能体的每一步推理过程。

### 3. 数据持久化层 (db/ + platform/)

使用 Prisma (前端) 和 SQLModel (后端) 双 ORM 方案,配合 MySQL/PlanetScale 数据库。存储智能体的配置、执行历史和任务结果,支持用户级别的智能体管理和历史回溯。

### 4. 自动化部署 CLI (cli/)

提供 setup.sh / setup.bat 一键部署脚本,自动配置环境变量、API 密钥、数据库和前后端服务,降低本地开发的启动门槛。

## 技术亮点

1. **自主任务循环**: 实现了"目标分解 -> 任务执行 -> 结果学习 -> 继续迭代"的完整自主智能体循环,是早期 AutoGPT 模式的 Web 端实现代表
2. **全栈 TypeScript + Python 架构**: 前端 Next.js 与后端 FastAPI 分离部署,兼顾开发效率和性能,前后端通过 REST API 通信
3. **实时流式输出**: 通过 WebSocket 将 LLM 推理过程实时推送到前端,用户可以观察智能体的"思考链路"
4. **LangChain 集成**: 利用 LangChain 的工具调用能力,支持网络搜索 (Serper)、代码执行 (Replicate) 等外部工具扩展
5. **双 ORM 数据层**: 前端 Prisma + 后端 SQLModel,配合 PlanetScale 无服务器 MySQL,实现灵活的数据管理
6. **Zod + Pydantic 双端验证**: 前后端分别使用 Zod 和 Pydantic 进行 Schema 验证,确保数据一致性

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自主执行架构 | 提供了"目标驱动 -> 任务分解 -> 执行反馈"的自主智能体循环模式,可作为 Self-Evolve 任务调度器的参考实现 |
| LLM 编排模式 | 基于 LangChain 的工具调用和链式编排,展示了如何将 LLM 能力与外部工具集成的工程实践 |
| 全栈部署经验 | Next.js + FastAPI 的全栈架构和 Docker 部署方案,为 Self-Evolve 平台的工程化提供参考 |
| 实时交互设计 | WebSocket 流式输出的前端展示模式,适用于 Self-Evolve 的进化过程可视化 |
| 学习反馈机制 | 智能体从执行结果中学习并调整策略的机制,与 Self-Evolve 的自我改进核心理念高度一致 |
