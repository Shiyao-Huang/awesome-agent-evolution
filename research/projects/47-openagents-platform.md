# OpenAgents: 面向真实世界的开放语言 Agent 平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/xlang-ai/OpenAgents |
| Star | 4500+ |
| 技术栈 | Python (Flask), Next.js, TypeScript, React, Tailwind CSS, LangChain, Chrome Extension |
| 许可证 | Apache 2.0 |
| 开发者 | XLang NLP Lab (香港大学, Tianbao Xie, Tao Yu 等) / Google Research / Salesforce Research |

## 项目简介

OpenAgents 是一个面向真实世界应用场景的开放语言 Agent 平台，由香港大学 XLang NLP 实验室主导开发。与大多数聚焦于概念验证（Proof-of-Concept）的语言 Agent 框架不同，OpenAgents 重点关注非专家用户的 Agent 访问体验和应用层面的设计实现。平台内置了三类真实场景 Agent：数据 Agent（Data Agent）通过 Python/SQL 和数据工具进行数据分析；插件 Agent（Plugins Agent）集成 200+ 日常工具插件；Web Agent 通过 Chrome 扩展实现自主网页浏览。

该平台的架构设计遵循"一个 Agent 一个文件夹"的模块化原则，后端基于 Flask、前端基于 Next.js 构建，支持本地部署和 Docker 容器化部署。其核心创新在于将语言 Agent 的概念层实现（real_agents/）与后端服务层（backend/）和前端展示层（frontend/）清晰解耦，通过 adapters/ 模块桥接 Agent 与后端之间的差距，包含流式解析、数据模型、记忆、回调等共享组件。

从自我进化的角度看，OpenAgents 的核心贡献在于其 Plugin Agent 的自动选择机制（Auto Plugin Selection）——Agent 能够根据用户意图自动搜索和推荐最合适的插件组合。Web Agent 展示了 Agent 在真实 Web 环境中的自主导航和操作能力。Data Agent 通过代码生成和执行实现了数据操作的闭环。这些能力虽然不是传统意义上的"自我进化"，但为研究 Agent 在真实环境中的自主学习和工具使用提供了完整的实验平台。

## 目录结构
```
openagents/
├── backend/                    ★ Flask 后端
│   ├── api/                    ★ RESTful API 接口
│   │   ├── chat_data_agent.py  Data Agent 聊天接口
│   │   ├── chat_plugins_agent.py Plugins Agent 聊天接口
│   │   ├── chat_web_agent.py   Web Agent 聊天接口
│   │   └── language_model.py   ★ LLM 注册与管理
│   ├── app.py                  Flask 主应用
│   ├── display_streaming.py    ★ 流式响应渲染
│   ├── kernel_publisher.py     代码执行队列
│   ├── memory.py               ★ 记忆存储
│   ├── schemas.py              常量定义
│   └── utils/                  工具函数
├── frontend/                   ★ Next.js 前端
│   ├── components/             React 组件
│   ├── pages/                  页面路由
│   ├── hooks/                  自定义 Hooks
│   ├── types/                  TypeScript 类型定义
│   ├── utils/                  工具函数
│   └── webot_extension.zip     ★ Web Agent Chrome 扩展
├── real_agents/                ★ 语言 Agent 实现
│   ├── adapters/               ★ 共享适配器组件（流解析、数据模型、记忆、回调）
│   ├── data_agent/             ★ 数据 Agent 实现
│   ├── plugins_agent/          ★ 插件 Agent 实现
│   │   └── plugins/            200+ 插件定义
│   └── web_agent/              ★ Web Agent 实现
└── docker-compose.yml          Docker 部署配置
```

## 核心模块分析

### 1. Data Agent — 数据分析 Agent
Data Agent 是一个综合性的数据分析工具包，提供搜索（Search）、处理（Handle）、操作（Manipulate）和可视化（Visualize）四大能力。它通过编写和执行 Python/SQL 代码来完成数据相关任务，支持 CSV 上传、Kaggle 数据集接入和自定义数据处理。代码通过 kernel_publisher.py 管理的 Jupyter Kernel 队列执行，支持流式输出和中间结果展示。该 Agent 展示了 LLM 在代码生成和工具编排方面的实际应用。

### 2. Plugins Agent — 插件集成 Agent
Plugins Agent 无缝集成了 200+ 第三方插件，涵盖购物（Klarna）、天气（XWeather）、科学探索（Wolfram Alpha）等日常场景。其关键特性包括：并发多插件使用（如同时调用 Klook、Currency Converter、WeatherViz 规划旅行）和自动插件选择（Auto Plugin Selection）——Agent 能够根据用户意图自动搜索和推荐最佳插件组合。插件以 OpenAI Plugin 标准定义（ai-plugin.json + openapi.yaml），支持通过 LLM 自动生成插件配置。

### 3. Web Agent — 网页浏览 Agent
Web Agent 通过 Chrome 扩展（WeBot）实现自主网页浏览。它能够导航和探索网站、自动填写表单（Google Forms）、在社交媒体上发布内容（Twitter）以及使用地图服务（Google Maps）。WeBot 扩展通过浏览器 DOM 操作和视觉理解实现网页交互，展示了 Agent 在真实 Web 环境中的操作能力。

### 4. Adapters 共享适配层
adapters/ 模块是 OpenAgents 架构设计的关键。它填补了概念层语言 Agent 与后端服务之间的差距，包含：流式解析（Stream Parsing）处理 Agent 输出的多模态数据；数据模型（Data Model）定义文本、图像、表格、JSON 等数据类型；记忆（Memory）管理对话历史和上下文；回调（Callbacks）处理 Agent 生命周期事件。这一设计使得新增 Agent 只需创建一个新文件夹并复用 adapters 组件。

### 5. 流式渲染与多模态输出
display_streaming.py 负责将 Agent 的流式输出渲染为前端可展示的格式。它支持文本、图像、表格、JSON 四种基本数据类型，并提供了可扩展的解析逻辑以支持新数据类型。流式渲染确保了 Agent 响应的实时性，为用户提供了流畅的交互体验。

## 技术亮点

1. **三类真实场景 Agent**：数据分析、200+ 插件集成、自主 Web 浏览，覆盖真实世界的主要 Agent 应用场景
2. **自动插件选择**：Plugins Agent 能根据用户意图自动搜索和推荐最佳插件组合，降低用户选择成本
3. **Chrome 扩展 Web Agent**：通过 WeBot 扩展实现真实网页环境的自主导航和操作
4. **模块化 Agent 架构**："一个 Agent 一个文件夹"设计 + adapters 共享组件，扩展新 Agent 仅需四步
5. **全栈可部署**：Flask 后端 + Next.js 前端，支持源码部署和 Docker 容器化部署
6. **流式多模态输出**：支持文本、图像、表格、JSON 的实时流式渲染，可扩展新数据类型
7. **代码执行沙箱**：通过 Jupyter Kernel 队列安全执行 Data Agent 生成的代码

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | Auto Plugin Selection 实现了插件选择的自动优化；Web Agent 展示了真实环境中的自主行为 |
| Prompt 工程 | Agent 通过 LangChain 的 Prompt 模板和 chain 管理与 LLM 的交互 |
| 评估框架 | 真实用户使用数据和在线 Demo（chat.xlang.ai）提供了自然评估信号 |
| Agent 编排 | 每个 Agent 独立封装，通过 adapters 统一适配后端；支持工具链自动组合 |
| 工具系统 | 200+ 插件的 OpenAI Plugin 标准集成；Data Agent 的代码生成执行；Web Agent 的浏览器操控 |
| 多模态交互 | 支持文本、图像、表格、JSON 的多模态输入输出和流式渲染 |
| 真实环境 | 面向真实用户场景设计，3000+ 用户提供了真实使用反馈和评估数据 |

## 参考资料
- GitHub: https://github.com/xlang-ai/OpenAgents
- 论文: https://arxiv.org/abs/2310.10634
- 在线 Demo: https://chat.xlang.ai
- 文档: https://docs.xlang.ai
- XLang Lab: https://xlang.ai
- Lemur 模型: https://github.com/OpenLemur/Lemur

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/xlang_ai__openagents`
- **分析命令**：`gitnexus analyze repos/xlang_ai__openagents --index-only --skip-git --name OpenAgents`
- **知识图谱规模**：待分析
- **查询语句**：`data_agent plugins_agent web_agent adapter streaming plugin_selection code_execution`
- **核心执行流程候选**：`frontend chat -> backend API -> real_agents/agent -> LangChain chain -> LLM call -> tool/plugin execution -> streaming response -> display_streaming -> frontend render`；`Auto Plugin Selection -> plugin search -> recommendation -> parallel execution`
- **关键符号/文件**：`backend/api/`, `real_agents/adapters/`, `real_agents/data_agent/`, `real_agents/plugins_agent/`, `real_agents/web_agent/`, `backend/display_streaming.py`, `backend/memory.py`, `backend/kernel_publisher.py`, `schemas.py`
- **调用关系上下文**：前端发起聊天请求 -> Flask API 路由（chat_data_agent.py 等）分发给对应 Agent -> Agent 通过 adapters 层的流解析、记忆、回调组件处理后端交互 -> Data Agent 通过 kernel_publisher 执行代码 -> Plugins Agent 自动选择并调用插件 -> Web Agent 通过 Chrome 扩展操控浏览器 -> 流式结果通过 display_streaming 渲染返回前端
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
