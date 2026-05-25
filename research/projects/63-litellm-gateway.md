# LiteLLM: 统一 100+ LLM 提供商的 AI 网关

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/BerriAI/litellm |
| Star | 20,000+ |
| 技术栈 | Python (FastAPI + uvicorn), TypeScript/Next.js (管理面板), PostgreSQL/SQLite (Prisma ORM), Redis (缓存/会话) |
| 许可证 | MIT (核心) + 商业许可 (企业功能) |
| 开发者 | BerriAI (Ishaan, Krrish), Y Combinator W23 |

## 项目简介

LiteLLM 是一个开源的 AI 网关（AI Gateway），提供统一的接口来调用 100+ 个 LLM 提供商，包括 OpenAI、Anthropic、Gemini、Bedrock、Azure 等，所有调用统一使用 OpenAI 格式。它既是 Python SDK（直接库集成），也可部署为 AI 网关代理服务器，作为团队或组织的集中式 LLM 访问服务。

LiteLLM 解决的核心痛点是 LLM 调用的碎片化管理问题：不同提供商有不同的 SDK、认证模式、请求格式和错误类型。LiteLLM 通过统一的抽象层消除了这些差异，提供了虚拟密钥管理、支出追踪、负载均衡、Guardrails 安全护栏、缓存和 Admin Dashboard 等生产级功能。其 AI Gateway 在 1k RPS 下 P95 延迟仅 8ms，已被 Stripe、Netflix、Google ADK、OpenHands 等知名项目采用。

项目架构分为核心库（litellm/）和代理服务器（litellm/proxy/）两大组件。核心库提供 Router 系统（支持重试、回退、负载均衡）和 Provider 抽象层；代理服务器基于 FastAPI 构建，提供认证、密钥管理、数据库持久化和 Admin UI。LiteLLM 还集成了 A2A 协议（Agent-to-Agent）和 MCP 工具网关，进一步扩展了其在 AI Agent 生态中的定位。

## 目录结构
```
litellm/
├── litellm/                 ★ 核心 Python SDK
│   ├── main.py              ★ 核心入口 completion() 函数
│   ├── llms/                ★ 100+ Provider 实现（每个子目录一个）
│   ├── router.py            ★ Router 系统（负载均衡/回退/重试）
│   ├── types/               Pydantic 类型定义
│   ├── integrations/        第三方集成（Langfuse、MLflow 等）
│   ├── caching/             多后端缓存（Redis/S3/内存）
│   ├── proxy/               ★ AI Gateway 代理服务器
│   │   ├── proxy_server.py  FastAPI 主应用
│   │   ├── auth/            认证与密钥管理
│   │   ├── db/              Prisma ORM 数据访问
│   │   ├── management_endpoints/  管理员 API
│   │   ├── guardrails/      安全护栏
│   │   └── litellm_pre_call_utils/  请求预处理
│   └── _logging.py          日志系统
├── ui/                      ★ Next.js Admin Dashboard
├── tests/                   测试套件（单元/集成/负载/Provider）
├── enterprise/              企业版功能
├── litellm-proxy-extras/    代理扩展包
├── docker/                  Docker 构建文件
├── deploy/                  部署配置
├── schema.prisma            Prisma 数据库 Schema
├── docker-compose.yml       Docker 编排
├── Makefile                 构建与开发命令
└── pyproject.toml           Python 项目配置
```

## 核心模块分析

### 1. Provider 抽象层 (litellm/llms/)
为 100+ 个 LLM 提供商提供统一的调用接口。每个 Provider 有独立的子目录，包含输入/输出格式转换函数，支持同步和异步操作。Provider 实现继承自 litellm/llms/base.py 中定义的基类，处理流式响应和函数调用。所有 Provider 特定异常统一映射为 OpenAI 兼容的错误格式。

### 2. Router 系统 (litellm/router.py)
提供应用级的负载均衡和容错机制。支持多部署间的重试和回退逻辑（如 Azure 回退到 OpenAI）、基于成本或延迟的路由策略、每用户/每项目的成本追踪。Router 同时管理 HTTP 客户端的生命周期和连接池。

### 3. AI Gateway 代理服务器 (litellm/proxy/)
基于 FastAPI 构建的生产级 AI 网关，提供：虚拟 API 密钥管理（创建、撤销、权限控制）、按项目/用户的细粒度成本追踪、请求级 Guardrails（安全护栏）、Admin Dashboard UI（模型管理、密钥管理、使用监控）。支持 SQLite（开发）和 PostgreSQL（生产）两种数据库后端。

### 4. 缓存系统 (litellm/caching/)
支持多种缓存后端：Redis、内存、S3、Redis Pipeline。缓存键支持精确匹配和语义匹配，可在 Prompt 级别或响应级别进行缓存控制。缓存命中时直接返回结果，大幅降低延迟和成本。

### 5. A2A 与 MCP 集成
支持 Agent-to-Agent (A2A) 协议，可调用 LangGraph、Vertex AI Agent Engine、Azure AI Foundry 等 Agent 平台。支持 MCP（Model Context Protocol）工具网关，可连接 MCP 服务器并通过标准 API 调用工具。MCP 网关支持 Cursor IDE 集成和 OAuth 认证。

## 技术亮点
1. **100+ Provider 统一接口**：一个 `completion()` 函数调用所有 LLM，所有 Provider 特定逻辑封装在转换层
2. **8ms P95 延迟**：在 1k RPS 负载下实现极低延迟，适合生产环境
3. **Router 容错系统**：多部署重试/回退、成本/延迟感知路由、连接池管理
4. **虚拟密钥管理**：完整的 API 密钥生命周期管理，支持按项目/用户的预算控制和权限管理
5. **A2A + MCP 双协议**：同时支持 Agent-to-Agent 和 Model Context Protocol，覆盖 AI Agent 生态的主要通信模式

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 进化循环 | LiteLLM 的多 Provider 路由和回退机制为 Self-Evolve 的模型进化提供了基础设施：可在多个 LLM 间自动切换以优化性能 |
| Agent 编排 | A2A 协议支持和 MCP 工具网关使 LiteLLM 可作为 Self-Evolve Agent 编排的通信中枢 |
| 评估框架 | 虚拟密钥和成本追踪功能支持 Self-Evolve 对不同 LLM 的评估进行精细化的成本/性能分析 |
| Prompt 工程 | 统一的 OpenAI 格式接口消除了 Prompt 跨模型迁移的格式差异，支持 Prompt 在不同模型间的无缝迁移 |
| 可观测性 | 内置的 Langfuse/MLflow 等集成和 OpenTelemetry 支持为 Self-Evolve 的执行监控提供了可观测性层 |

## 参考资料
- [LiteLLM GitHub](https://github.com/BerriAI/litellm)
- [LiteLLM 官方文档](https://docs.litellm.ai)
- [LiteLLM 官网](https://litellm.ai)
- [LiteLLM AI Gateway](https://www.litellm.ai/ai-gateway)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/berriai__litellm`
- **分析命令**：`gitnexus analyze repos/berriai__litellm --index-only --skip-git --name LiteLLM`
- **知识图谱规模**：待分析
- **查询语句**：`completion function, provider transformation, router fallback, virtual key, guardrails, A2A protocol, MCP gateway`
- **核心执行流程候选**：Request -> Authentication -> Router Select Provider -> Transform Input -> Call LLM -> Transform Output -> Log & Cache -> Response
- **关键符号/文件**：`litellm/main.py` (核心入口), `litellm/llms/` (Provider 实现), `litellm/router.py` (路由系统), `litellm/proxy/proxy_server.py` (网关服务), `schema.prisma` (数据模型)
- **调用关系上下文**：AI Gateway 的 FastAPI 接收请求，通过 Auth 模块验证虚拟密钥，Router 选择最优 Provider 部署，Provider 转换层将 OpenAI 格式请求转换为目标格式，调用 LLM API 后将响应转回 OpenAI 格式，同时记录日志和更新缓存
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
