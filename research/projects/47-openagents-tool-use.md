# OpenAgents：面向真实场景的语言 Agent 开放平台与工具调用系统

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/xlang-ai/OpenAgents |
| Star | 4,200+ |
| 技术栈 | Python, Flask, Next.js, TypeScript, LangChain, Jupyter Kernel, Chrome Extension |
| 许可证 | Apache-2.0 |
| 开发者 | XLang NLP Lab (HKU) - Tianbao Xie, Fan Zhou, Zhoujun Cheng 等 |

## 项目简介

OpenAgents 是由香港大学 XLang NLP Lab 开发的开放语言 Agent 平台，旨在将语言 Agent 从实验室原型推向真实世界的日常应用场景。该项目于 2023 年 10 月正式发布，核心论文发表于 arXiv（2310.10634），提供了一套完整的全栈解决方案，包含后端服务、前端 UI 和三种不同类型的 Agent 实现。

平台实现了三种典型的 Agent：Data Agent 通过 Python/SQL 进行数据分析与可视化；Plugins Agent 集成 200+ 第三方工具插件；Web Agent 通过 Chrome 扩展实现自主网页浏览。与 ChatGPT Plus 类似，OpenAgents 能够分析数据、调用插件、控制浏览器，但其核心区别在于提供了完全开放的代码，支持本地部署、全栈架构、Chat Web UI 和可扩展的 Agent 方法。该平台特别关注非专业用户的使用体验，通过优化的 Web UI 处理快速响应和常见故障，同时为开发者和研究人员提供流畅的本地部署体验。

在工具调用方面，OpenAgents 的 Plugins Agent 是最具代表性的模块。它采用了基于 OpenAPI 规范的工具描述方式（`ai-plugin.json` + `openapi.yaml`），支持多插件并发使用和自动插件选择功能。工具注册与发现机制设计清晰，开发者可以通过创建标准化的工具描述文件快速接入新工具，LLM 端则通过 prompting 机制自动匹配用户意图与可用工具。

## 目录结构

```
xlang_ai__openagents/
├── backend/                    # Flask 后端服务
│   ├── api/                    # RESTful API 端点
│   ├── app.py                  # Flask 应用入口
│   ├── display_streaming.py    # 流式响应渲染
│   ├── kernel_publisher.py     # 代码执行队列
│   ├── memory.py               # 后端存储与记忆管理
│   ├── schemas.py              # 常量定义
│   └── utils/                  # 工具函数
├── frontend/                   # Next.js 前端
│   ├── components/             # React 组件
│   ├── hooks/                  # 自定义 React Hooks
│   ├── pages/                  # Next.js 页面路由
│   ├── types/                  # TypeScript 类型定义
│   ├── utils/                  # 前端工具函数
│   └── webot_extension.zip     # Chrome 扩展（Web Agent）
├── real_agents/                # 语言 Agent 核心实现
│   ├── adapters/               # Agent 适配层（共享组件）
│   │   ├── agent_helpers/      # Agent 辅助函数
│   │   ├── callbacks/          # 回调机制
│   │   ├── data_model/         # 数据模型定义
│   │   ├── executors/          # 执行器
│   │   ├── memory/             # 记忆模块
│   │   └── models/             # 模型接口
│   ├── data_agent/             # 数据分析 Agent
│   ├── plugins_agent/          # 插件工具 Agent
│   │   ├── plugins/            # 200+ 第三方插件
│   │   ├── plugin.py           # 插件核心逻辑
│   │   └── plugin_prompt.py    # 插件提示词模板
│   └── web_agent/              # 网页浏览 Agent
├── docker-compose.yml          # Docker 编排配置
└── Dockerfile                  # 容器构建文件
```

## 核心模块分析

### 1. Plugins Agent 工具调用引擎

Plugins Agent 是 OpenAgents 工具调用能力的核心实现。它通过 `plugin.py` 管理插件的生命周期，包括插件的发现、加载、匹配与执行。`plugin_prompt.py` 负责将工具描述转化为 LLM 可理解的 prompt 格式。工具调用采用两阶段策略：首先由 LLM 根据用户意图自动选择合适的插件（Auto Plugin Selection），然后构造 API 调用参数并执行。`plugins/` 目录下包含 200+ 个标准化插件，每个插件包含 `ai-plugin.json`（元数据）、`openapi.yaml`（API 规范）和 `paths/`（实际调用逻辑）。

### 2. Adapters 适配层

`real_agents/adapters/` 是连接底层 Agent 逻辑与后端服务的关键桥梁。其中 `data_model/` 定义了跨 Agent 共享的数据结构，`callbacks/` 实现了流式输出、错误处理等回调机制，`memory/` 提供了对话历史和上下文管理能力，`executors/` 封装了代码执行和工具调用的执行引擎。这种适配层设计使得新 Agent 的接入成本大幅降低。

### 3. Data Agent 代码执行系统

Data Agent 通过 `copilot.py` 和 `copilot_prompt.py` 实现了基于 LLM 的数据分析 Copilot。它支持两种执行模式：Python 代码执行（`python/` 目录）和 SQL 查询执行（`sql/` 目录）。后端的 `kernel_publisher.py` 通过 Jupyter Kernel 管理代码执行队列，确保并发安全和资源隔离。Data Agent 还集成了 `evaluation/` 模块用于评估代码执行结果。

### 4. Web Agent 浏览器自动化

Web Agent 通过 Chrome 扩展实现了对网页的自主操控。`webot.py` 是核心控制模块，`web_browsing/` 目录封装了网页导航、元素定位、表单填写等浏览器操作。它利用 Chrome DevTools Protocol 与浏览器交互，能够完成 Google Maps 导航、Twitter 发布、Google Form 填写等复杂任务。

### 5. 后端流式响应与记忆系统

`backend/display_streaming.py` 实现了多种数据类型（文本、图片、表格、JSON）的流式渲染，确保用户在 Agent 执行过程中获得实时反馈。`backend/memory.py` 提供了对话历史持久化、上下文窗口管理和会话恢复能力，支持长时间的多轮对话交互。

## 技术亮点

1. **标准化工具描述规范**：采用 OpenAPI + ai-plugin.json 的双文件描述模式，使工具接入具有统一的接口契约，降低了工具开发者的接入门槛
2. **Auto Plugin Selection 自动工具选择**：LLM 可根据用户意图自动从 200+ 插件中检索和推荐最匹配的工具组合，无需用户手动指定
3. **多插件并发编排**：支持在单次对话中同时调用多个插件（如旅行规划同时调用 Klook、汇率转换和天气查询），实现工具组合的涌现能力
4. **"一个 Agent 一个文件夹"的扩展模式**：`real_agents/` 的模块化设计使新 Agent 的创建只需添加一个文件夹并实现标准接口
5. **全栈开源 + Docker 一键部署**：前后端完整开源，提供 docker-compose 编排，支持从源码和容器两种方式部署
6. **流式多模态响应渲染**：后端支持文本、图像、表格、JSON 四种数据类型的流式输出，前端实时渲染，提升交互体验

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 工具调用范式 | 提供了基于 OpenAPI 的标准化工具描述与调用框架，为 Self-Evolve 的工具集成提供参考 |
| Agent 架构设计 | "一个 Agent 一个文件夹"的模块化设计模式，适合自演化系统中的 Agent 快速迭代 |
| 自主执行能力 | Web Agent 的浏览器自动化展示了 Agent 在真实环境中的自主执行范式 |
| 代码执行沙箱 | Data Agent 的 Jupyter Kernel 沙箱执行机制为自演化系统的代码安全执行提供借鉴 |
| 工具自动发现 | Auto Plugin Selection 机制启发 Self-Evolve 中的工具自动注册与发现能力 |
| 全栈集成模式 | 前后端 + Agent 的三层架构为自演化系统的工程化落地提供了参考架构 |

## 参考资料

- [OpenAgents Paper (arXiv:2310.10634)](https://arxiv.org/abs/2310.10634)
- [OpenAgents Online Demo](https://chat.xlang.ai)
- [OpenAgents Documentation](https://docs.xlang.ai)
- [XLang NLP Lab](https://xlang.ai)
- [Lemur Foundation Models](https://github.com/OpenLemur/Lemur)

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/xlang_ai__openagents`
- **分析命令**：`gitnexus analyze repos/xlang_ai__openagents --index-only --skip-git --name OpenAgents`
