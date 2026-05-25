# Future AGI: 开源自改进 AI Agent 全生命周期平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/future-agi/future-agi |
| Star | 4,000+ |
| 技术栈 | Python, Go, TypeScript, Next.js, OpenTelemetry, Docker |
| 许可证 | Apache 2.0 |
| 开发者 | FutureAGI |

## 项目简介

Future AGI 是一个面向生产环境的开源 AI Agent 自改进平台，将评估（Evaluation）、追踪（Tracing）、模拟（Simulation）、护栏（Guardrails）、网关（Gateway）和优化（Optimization）整合到一个统一的反馈循环中。该平台旨在解决 AI Agent 在生产环境中频繁失败的问题，通过闭环数据流使 Agent 不仅能被监控，还能持续自我改进。其 Go 语言实现的网关具备极高吞吐性能（约 29k req/s，P99 延迟 <=21ms）。

## 目录结构

```
future_agi__future_agi/
├── futureagi/              # Python 核心包
│   ├── agent/              # Agent 核心逻辑与生命周期管理
│   ├── agents/             # 预置 Agent 实现
│   ├── api/                # REST API 接口层
│   ├── approval/           # 人工审批流程
│   ├── client/             # 客户端 SDK
│   ├── compression/        # 数据压缩与优化
│   ├── context/            # 上下文管理
│   ├── db/                 # 数据库适配层（多后端支持）
│   ├── eval/               # 评估引擎
│   ├── guardrails/         # 安全护栏模块
│   ├── simulate/           # 模拟测试环境
│   ├── tracer/             # OpenTelemetry 追踪
│   ├── integrations/       # 第三方集成（LangChain 等）
│   ├── model_hub/          # 模型管理
│   └── sdk/                # 开发者 SDK
├── frontend/               # Next.js 前端仪表盘
├── agentcc-gateway/        # Go 实现高性能 API 网关
├── deploy/                 # 部署配置
├── docker-compose.yml      # Docker 编排
└── docs/                   # 文档
```

## 核心模块分析

### 1. 评估引擎（Eval Engine）

评估引擎是平台的核心，支持 50+ 评估器（Evaluator），覆盖从准确性、相关性到安全性的多维度评估。每个评估器和提示词均可审查，不存在黑盒评分。支持离线批量评估和在线实时评估两种模式，评估结果直接反馈到优化循环中。

### 2. 追踪与可观测性（Tracer & Observability）

基于 OpenTelemetry 原生实现，提供 50+ 框架的自动插桩。追踪数据覆盖 Agent 的每次调用链路，包括输入输出、工具调用、LLM 交互等全生命周期事件。追踪数据不仅用于监控，更作为自改进的关键信号源。

### 3. 模拟环境（Simulation）

模拟模块允许在部署前对 Agent 进行边缘案例测试，通过构造各种边界条件和异常输入来验证 Agent 的鲁棒性。模拟结果会自动转化为评估数据，形成"模拟 -> 评估 -> 优化"的迭代闭环。

### 4. 安全护栏（Guardrails）

实时保护层，在生产环境中拦截不安全的 Agent 输出。支持规则引擎和语义护栏两种模式，可在网关层以极低延迟（纳秒级路由）执行拦截，确保用户安全。

### 5. 自改进反馈循环（Self-Improvement Loop）

平台的核心创新点：将评估、追踪、模拟和护栏产生的数据统一汇聚，形成闭环反馈信号。每条追踪记录都是下一版本优化的输入，实现 Agent 从"被动监控"到"主动进化"的转变。

## 技术亮点

1. **统一反馈循环架构**：将 Evals + Tracing + Simulation + Guardrails + Optimization 五个阶段整合为单一闭环，消除了传统方案中多工具拼接的复杂度。
2. **Go 高性能网关**：agentcc-gateway 采用 Go 实现，加权路由延迟约 9.9ns，在 t3.xlarge 实例上可达约 29k req/s 吞吐量，P99 延迟 <=21ms（含护栏开销）。
3. **OpenTelemetry 原生**：全链路追踪基于 OTel 标准，50+ 框架自动插桩，可复用现有可观测性基础设施。
4. **Apache 2.0 全开源**：核心评估器、提示词、追踪链路均透明可审查，支持完全私有化部署以保障数据主权。
5. **多语言 SDK**：提供 Python（PyPI: ai-evaluation）和 Node.js（npm: @traceai/fi-core）SDK，便于不同技术栈集成。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自评估机制 | 提供 50+ 评估器的完整评估框架，为 Self-Evolve 提供评估基础设施参考 |
| 反馈闭环 | "模拟 -> 评估 -> 保护 -> 监控 -> 优化"的全生命周期闭环是自改进的核心范式 |
| 追踪与诊断 | OTel 原生追踪提供了 Agent 行为的细粒度可观测性，支持精准定位需要改进的环节 |
| 护栏机制 | 生产级护栏系统为 Self-Evolve 的安全自改进提供了防御层设计参考 |
| 多框架集成 | 50+ 框架插桩展示了如何将自改进能力注入异构 Agent 系统 |
| 生产就绪 | Go 网关的高性能设计为 Self-Evolve 的生产部署提供了架构参考 |
