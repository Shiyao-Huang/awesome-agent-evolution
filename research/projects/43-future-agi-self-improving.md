# FutureAGI: 自我改进 AI Agent 全生命周期平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/future-agi/future-agi |
| Star | 4000+ |
| 技术栈 | Python (Django 4.2), Go (Gateway), React 18 + Vite, OpenTelemetry, PostgreSQL, ClickHouse, Redis, RabbitMQ, Temporal |
| 许可证 | Apache 2.0 |
| 开发者 | Future AGI Team |

## 项目简介

FutureAGI 是一个开源的 AI Agent 全生命周期管理平台，其核心理念是"AI Agents hallucinate. Fix it faster."——即通过一个统一的平台和一条闭环反馈链路，实现 Agent 从原型到生产部署的自我改进。该平台将传统上需要多个独立工具拼接的评估、可观测性、安全护栏等功能整合为一体，使得 Agent 不仅被监控，更能自主进化。

平台的六大核心支柱分别为：模拟（Simulate）、评估（Evaluate）、保护（Protect）、监控（Monitor）、Agent 指挥中心（Agent Command Center）和优化（Optimize）。每个支柱都可独立替换一个现有工具，数据在所有支柱间自动流转形成闭环。其 Go 语言实现的网关在高负载场景下可达约 29k req/s、P99 延迟不超过 21ms，充分满足生产环境需求。

从自我进化的角度看，FutureAGI 最关键的能力在于其"优化"模块：它内置了 6 种 Prompt 优化算法（GEPA、PromptWizard、ProTeGi、Bayesian、Meta-Prompt、Random），可将生产环境中的 Trace 数据自动回灌为训练信号，实现从部署到优化的自动化进化闭环。这使其成为当前为数不多在生产级别实现"自我改进"的 Agent 平台之一。

## 目录结构
```
future-agi/
├── agentcc-gateway/          ★ Go 实现的 LLM 网关（OpenAI 兼容代理）
├── futureagi/
│   ├── tracer/               ★ OTLP 追踪接入、Span 图构建
│   ├── agentic_eval/         ★ 50+ 评估指标、LLM-as-Judge
│   ├── simulate/             ★ Persona 驱动的场景生成
│   ├── model_hub/            ★ LLM 路由、Embedding、数据集
│   ├── accounts/             认证、组织、计量、连接器
│   ├── integrations/         外部集成
│   └── ...
├── frontend/                 React 18 + Vite 前端
├── deploy/                   部署脚本与配置
├── bin/                      安装脚本
└── docker-compose.yml        Docker Compose 编排
```

## 核心模块分析

### 1. traceAI — OpenTelemetry 自动埋点
traceAI 是 FutureAGI 的边缘采集层，支持 Python、TypeScript、Java、C# 四种语言，提供零配置的 OpenTelemetry 追踪能力。它内置了对 50+ AI 框架（LangChain、LlamaIndex、CrewAI、DSPy 等）的自动插桩，使得用户无需修改现有代码即可获得完整的 Span 图、延迟、Token 成本等可观测性数据。这些数据是后续评估和优化的基础输入。

### 2. Agentic Eval — 多维评估引擎
评估模块提供了 50+ 评估指标，涵盖 groundedness（事实性）、hallucination（幻觉）、tool-use correctness（工具调用正确性）、PII（隐私泄露）、tone（语调）以及自定义评分规则等维度。评估方法融合了 LLM-as-Judge、启发式规则和 ML 模型三种路径，单次 `evaluate()` 调用即可完成全部评估。该模块同时集成了 18 个内置安全扫描器（PII、越狱、注入攻击等）和 15 个第三方适配器（Lakera、Presidio、Llama Guard 等）。

### 3. Simulate — Persona 驱动的仿真系统
模拟模块支持生成数千条多轮对话，覆盖真实用户画像、对抗性输入和边缘场景。除了文本仿真外，还支持语音 Agent 的端到端仿真（通过 LiveKit + Silero VAD），这是目前同类平台中少有的能力。仿真结果可直接输入评估引擎进行批量评测。

### 4. Agent Command Center — 高性能 LLM 网关
该网关使用 Go 语言实现，兼容 OpenAI HTTP API，支持 100+ 模型提供商、15 种路由策略、语义缓存、虚拟密钥管理、MCP 和 A2A 协议。其基准测试结果显示：加权路由延迟约 9.9ns、吞吐量约 29k req/s（t3.xlarge 实例）、开启安全护栏后 P99 延迟不超过 21ms。网关可内联执行安全扫描，也可作为独立 SDK 使用。

### 5. Optimize — Prompt 优化引擎
优化模块是 FutureAGI 自我改进闭环的核心。它内置了 6 种 Prompt 优化算法：GEPA、PromptWizard、ProTeGi、Bayesian、Meta-Prompt 和 Random。生产环境的 Trace 数据自动回灌为优化训练数据，形成"部署 -> 监控 -> 评估 -> 优化 -> 再部署"的完整进化循环。用户可通过 UI 进行无代码的评估构建和 Prompt 迭代。

## 技术亮点

1. **统一闭环架构**：模拟、评估、保护、监控、优化六大模块共享同一数据管线，Trace 数据自动从监控流向评估和优化，形成闭环反馈
2. **高性能 Go 网关**：约 9.9ns 加权路由、约 29k req/s 吞吐量、P99 延迟不超过 21ms，所有基准测试均可通过仓库中的 harness 复现
3. **6 种 Prompt 优化算法**：GEPA、PromptWizard、ProTeGi、Bayesian、Meta-Prompt、Random，支持从生产 Trace 自动回灌训练信号
4. **50+ 评估指标融合三种评估方法**：LLM-as-Judge + 启发式 + ML 模型，单次调用完成全维度评估
5. **语音 Agent 端到端仿真**：通过 LiveKit + Silero VAD 实现语音场景的全链路测试，覆盖 VAPI、Retell、Pipecat 等平台
6. **OpenTelemetry 原生**：全链路 OTLP 追踪，零侵入插桩 50+ 框架，所有接口均为开放标准
7. **全栈自托管**：Apache 2.0 许可证，支持 Docker Compose 一键部署，所有组件均可独立替换

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | 完整闭环：Simulate -> Evaluate -> Protect -> Monitor -> Optimize -> 部署迭代，Trace 数据自动回灌 |
| Prompt 工程 | 6 种优化算法（GEPA、PromptWizard 等）自动迭代 Prompt，生产数据驱动 |
| 评估框架 | 50+ 评估指标、LLM-as-Judge + 启发式 + ML 融合评估、自定义评分规则 |
| Agent 编排 | Agent Command Center 提供 100+ 提供商的路由、MCP/A2A 协议支持 |
| 安全护栏 | 18 内置扫描器 + 15 第三方适配器，内联于网关或独立 SDK |
| 可观测性 | OpenTelemetry 原生追踪，50+ 框架自动插桩，Span 图 + 延迟 + Token 成本仪表盘 |
| 自我改进机制 | Optimize 模块将生产 Trace 转化为优化信号，实现 Agent 行为的持续自动改进 |

## 参考资料
- GitHub: https://github.com/future-agi/future-agi
- 官方文档: https://docs.futureagi.com
- 云平台: https://app.futureagi.com
- 博客: https://futureagi.com/blog
- PyPI (ai-evaluation): https://pypi.org/project/ai-evaluation/
- npm (@traceai/fi-core): https://www.npmjs.com/package/@traceai/fi-core

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/future_agi__future_agi`
- **分析命令**：`gitnexus analyze repos/future_agi__future_agi --index-only --skip-git --name FutureAGI`
- **知识图谱规模**：待分析
- **查询语句**：`simulate evaluate optimize guardrail gateway trace evaluator prompt_optimization`
- **核心执行流程候选**：`simulate -> evaluate -> protect -> monitor -> optimize` 闭环流程；`traceAI -> OTLP ingest -> span graph` 追踪流程；`prompt_optimization -> GEPA/PromptWizard -> feedback loop` 优化流程
- **关键符号/文件**：`agentic_eval/`, `simulate/`, `model_hub/`, `agentcc-gateway/`, `tracer/`, `evaluate()`, `register()`
- **调用关系上下文**：traceAI 自动插桩采集 Span 数据 -> tracer 模块构建 Span 图 -> agentic_eval 对 Span 执行 50+ 指标评估 -> simulate 生成仿真场景 -> optimize 模块基于评估结果执行 Prompt 优化 -> 优化后的 Prompt 通过网关部署 -> 新一轮 Trace 数据采集
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
