# WebArena: 真实 Web 环境下的自主 Agent 评估基准

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/web-arena-x/webarena |
| Star | 2,200+ |
| 技术栈 | Python, Playwright (浏览器自动化), Docker (环境托管), OpenAI Gym 接口 |
| 许可证 | MIT |
| 开发者 | Carnegie Mellon University (Shuyan Zhou, Frank F. Xu 等) |

## 项目简介

WebArena 是一个独立的、可自托管的 Web 环境基准测试框架，用于构建和评估自主 Web Agent。它创建了一个包含多个真实 Web 应用的完整在线环境，包括电子商务网站（OneStopShop）、内容管理系统（CMS）、论坛（Reddit）、代码托管（GitLab）、地图服务和百科全书（Wikipedia），Agent 需要通过浏览器交互完成各种复杂任务。

WebArena 的核心创新在于其真实性：不同于以往基于模拟或简化的 Web 环境，WebArena 托管了完整的、功能齐全的 Web 应用实例，Agent 需要在真实的 HTML/DOM 结构、复杂的页面布局和动态交互中完成任务。WebArena 包含 812 个精心设计的测试任务，涵盖信息检索、站点导航、内容管理和复杂推理等多种能力维度。

项目提供了类似 OpenAI Gym 的标准化接口（ScriptBrowserEnv），Agent 通过观察（HTML 或 Accessibility Tree）和动作（点击、输入、滚动等）与环境交互。AgentLab 框架进一步增强了 WebArena 的基础设施，支持并行实验、统一排行榜和改进的环境边缘情况处理。

## 目录结构
```
webarena/
├── browser_env/             ★ 浏览器环境（OpenAI Gym 风格）
│   └── auto_login.py        自动登录脚本
├── agent/                   ★ Agent 实现与 Prompt 模板
│   └── prompts/             ★ Prompt 构造器与示例
├── evaluation_harness/      评估工具
├── environment_docker/      ★ Web 应用 Docker 环境
│   └── README.md            环境部署指南
├── config_files/            任务配置文件
├── llms/                    LLM 调用封装
├── scripts/                 辅助脚本
├── resources/               轨迹记录与人类标注
├── tests/                   测试套件
├── run.py                   ★ 评估执行入口
├── minimal_example.py       最小化示例
├── setup.py                 安装配置
└── media/                   资源文件
```

## 核心模块分析

### 1. 浏览器环境 (browser_env/)
基于 Playwright 构建的浏览器环境，提供 ScriptBrowserEnv 类，实现了类似 OpenAI Gym 的 reset/step 接口。支持两种观察空间：原始 HTML 和 Accessibility Tree（更紧凑的结构化表示）。动作空间支持基于元素 ID 的点击、文本输入、页面导航等操作。环境管理包括 Cookie 注入、页面重置和视口控制。

### 2. Agent 框架 (agent/)
提供基于 Prompt 的 Agent 实现，支持 Chain-of-Thought (CoT) 推理风格。核心是 Prompt 构造器（PromptConstructor）类，负责将观察、历史动作和任务指令组装为 LLM 输入，并从 LLM 输出中提取动作。支持多种 Prompt 模板：直接动作、CoT 推理、Accessibility Tree 等。

### 3. Web 应用环境 (environment_docker/)
包含完整的 Docker Compose 配置，用于托管 6 个 Web 应用：OneStopShop（电商）、CMS（管理后台）、Reddit（论坛）、GitLab（代码托管）、OpenStreetMap（地图）和 Wikipedia（百科）。提供预构建的 Amazon Machine Image（AMI）以简化部署。

### 4. 任务配置系统 (config_files/)
每个任务由 JSON 配置文件定义，包含：任务指令、初始 URL、需要交互的站点列表和评估标准。支持自动生成测试配置文件，812 个任务覆盖了从简单信息查找到复杂多步操作的完整能力谱。

### 5. 评估框架 (evaluation_harness/)
提供基于规则的自动评估机制，通过检查最终页面状态、URL、元素内容等来判断任务是否成功完成。支持精确匹配、包含匹配和函数化评估等多种验证方式。评估结果包含详细的执行轨迹（截图、HTML 快照），便于错误分析。

## 技术亮点
1. **真实 Web 应用栈**：托管完整的电商、论坛、Git、CMS 等 Web 应用，而非模拟界面，确保评估真实性
2. **Gym 标准接口**：reset/step 接口兼容 OpenAI Gym 生态，降低了 Agent 开发和对比的门槛
3. **双观察空间**：同时支持 HTML 和 Accessibility Tree 两种观察模式，适配不同类型的 Agent
4. **CoT Prompt 系统**：结构化的 Prompt 构造器支持 Chain-of-Thought 推理，便于研究 Prompt 对 Agent 性能的影响
5. **AgentLab 增强**：通过 AgentLab 框架支持并行实验、VisualWebArena 集成和统一排行榜

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 评估框架 | WebArena 的 812 个真实 Web 任务为 Self-Evolve 提供了 Web Agent 能力的标准化评估基准 |
| Agent 编排 | Gym 风格的 observe/act 接口是 Self-Evolve Agent 编排层的重要参考设计 |
| Prompt 工程 | Prompt 构造器的设计（intro + examples + template + meta_data）为 Self-Evolve 的 Prompt 模板系统提供了参考 |
| 进化循环 | WebArena 的任务执行流程（观察 -> 推理 -> 行动 -> 评估）直接映射到 Self-Evolve 的进化循环 |
| 自主性度量 | WebArena 的任务成功率可作为 Self-Evolve 在 Web 环境中自主性的关键度量 |

## 参考资料
- [WebArena GitHub](https://github.com/web-arena-x/webarena)
- [WebArena 官方网站](https://webarena.dev)
- [WebArena 论文](https://arxiv.org/abs/2307.13854)
- [AgentLab 框架](https://github.com/ServiceNow/AgentLab)
- [TheAgentCompany](https://the-agent-company.com)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/web_arena_x__webarena`
- **分析命令**：`gitnexus analyze repos/web_arena_x__webarena --index-only --skip-git --name WebArena`
- **知识图谱规模**：待分析
- **查询语句**：`ScriptBrowserEnv, accessibility tree, prompt constructor, Playwright automation, evaluation harness, CoT reasoning`
- **核心执行流程候选**：env.reset(config) -> Agent.observe() -> LLM.reason() -> Agent.act() -> env.step(action) -> Check terminated
- **关键符号/文件**：`browser_env/` (环境), `agent/prompts/` (Prompt 模板), `environment_docker/` (Web 应用), `run.py` (评估入口)
- **调用关系上下文**：run.py 初始化 ScriptBrowserEnv，循环调用 Agent 的 observe-think-act 流程，通过 Playwright 执行浏览器操作，任务结束后通过 evaluation_harness 判断成功与否
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
