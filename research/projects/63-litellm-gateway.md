# LiteLLM: 统一 100+ LLM 的 AI 网关与 Python SDK

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/BerriAI/litellm |
| Star | 22,000+ |
| 技术栈 | Python, FastAPI, Pydantic, Prisma ORM, PostgreSQL/SQLite, Docker, Next.js |
| 许可证 | MIT (核心) / 商业许可 (企业功能) |
| 开发者 | BerriAI (Ishaan Jaffe, Krrish Dholakia), Y Combinator W23 |

## 项目简介

LiteLLM 是一个开源的 AI 网关（AI Gateway），为 100+ LLM 提供商提供统一的调用接口。无论是 OpenAI、Anthropic、Gemini、Bedrock 还是 Azure，LiteLLM 都将其统一为 OpenAI 兼容的 API 格式，用户只需更换模型名称即可在不同提供商之间切换，无需修改任何代码。LiteLLM 可作为 Python SDK 直接集成到项目中，也可部署为独立的代理服务器（Proxy Server），作为团队或组织的集中式 LLM 网关。

作为 Y Combinator W23 孵化项目，LiteLLM 已被 Stripe、Netflix、Google ADK、OpenHands 等知名项目采用。代理服务器模式提供了虚拟密钥管理、多租户成本追踪、负载均衡、Guardrails 安全护栏、缓存、可观测性集成等生产级功能，P95 延迟仅 8ms（1k RPS 下）。企业版增加了 SSO、RBAC、专业支持等企业级特性。

LiteLLM 2.0 时代的架构已从单纯的 LLM 转发层演进为完整的 AI 平台网关：支持 A2A（Agent-to-Agent）协议实现 Agent 间通信、MCP（Model Context Protocol）工具网关实现 LLM 与外部工具的桥接、RAG 管道、图像生成、语音合成/识别、向量存储等能力。100+ 提供商适配器覆盖了几乎所有主流 LLM 服务。

## 目录结构
```
berriai__litellm/
├── litellm/                    ★ 核心代码包
│   ├── llms/                   ★ 100+ 提供商适配器
│   │   ├── openai/             OpenAI 适配
│   │   ├── anthropic/          Anthropic 适配
│   │   ├── bedrock/            AWS Bedrock 适配
│   │   ├── azure/              Azure 适配
│   │   ├── gemini/             Google Gemini 适配
│   │   ├── vertex_ai/          Vertex AI 适配
│   │   └── ... (100+)          其他提供商
│   ├── proxy/                  ★ AI 网关服务
│   │   ├── auth/               认证与密钥管理
│   │   ├── db/                 Prisma 数据库层
│   │   ├── guardrails/         安全护栏
│   │   ├── management_endpoints/ 管理接口
│   │   ├── spend_tracking/     成本追踪
│   │   ├── routes/             API 路由
│   │   └── proxy_server.py     FastAPI 主服务
│   ├── router.py               ★ 负载均衡路由
│   ├── router_strategy/        ★ 路由策略
│   │   ├── adaptive_router/    自适应路由
│   │   ├── auto_router/        自动路由
│   │   └── complexity_router/  复杂度路由
│   ├── caching/                缓存系统
│   ├── integrations/           第三方集成
│   ├── types/                  类型定义
│   ├── responses/              Response API
│   ├── a2a_protocol/           A2A Agent 协议
│   ├── experimental_mcp_client/ MCP 客户端
│   └── main.py                 ★ SDK 入口
├── enterprise/                 企业版功能
├── ui/                         Next.js 管理面板
├── cookbook/                   使用示例
├── tests/                      测试套件
├── docker/                     Docker 配置
├── deploy/                     部署方案
└── Dockerfile                  容器构建
```

## 核心模块分析

### 1. 统一 LLM 接口（litellm/main.py + litellm/llms/）
核心 `completion()` 函数是 LiteLLM 的入口点。通过模型名称前缀（如 `openai/gpt-4o`、`anthropic/claude-sonnet-4-20250514`、`bedrock/claude-3`）自动路由到对应的提供商适配器。每个适配器负责将统一的输入格式转换为目标 API 的请求格式，并将响应转换回 OpenAI 兼容格式。支持同步/异步调用、流式输出、Function Calling 等。

```python
from litellm import completion

# 无缝切换提供商，接口完全一致
response = completion(model="openai/gpt-4o", messages=[...])
response = completion(model="anthropic/claude-sonnet-4-20250514", messages=[...])
response = completion(model="bedrock/anthropic.claude-3", messages=[...])
```

### 2. 代理服务器（litellm/proxy/）
基于 FastAPI 构建的 AI 网关服务，提供完整的 LLM API 代理能力。`proxy_server.py` 是主入口，注册了所有 API 路由。关键子系统包括：`auth/` 实现虚拟密钥和 JWT 认证；`db/` 通过 Prisma ORM 管理密钥、用户、团队数据（支持 PostgreSQL 和 SQLite）；`spend_tracking/` 实现多租户成本追踪；`guardrails/` 提供 content safety 检查。

```bash
# 一行启动代理
litellm --model gpt-4o
# 通过 OpenAI SDK 调用
client = openai.OpenAI(api_key="anything", base_url="http://0.0.0.0:4000")
```

### 3. 路由与负载均衡（litellm/router.py + router_strategy/）
Router 模块实现了跨提供商的智能路由。支持 fallback 策略（主模型失败自动切换备用模型）、负载均衡（round-robin、least-busy）、cooldown 机制（失败节点冷却）。`router_strategy/` 提供了多种高级策略：`adaptive_router` 根据历史性能动态调整、`complexity_router` 根据请求复杂度分配模型、`auto_router` 自动优化路由决策。

### 4. A2A 与 MCP 协议支持（a2a_protocol/ + experimental_mcp_client/）
LiteLLM 2.0 引入了 Agent-to-Agent 协议支持，允许通过网关调用外部 Agent。MCP（Model Context Protocol）网关则允许将外部工具服务器桥接到任何 LLM。这使得 LiteLLM 从单纯的 LLM 网关升级为完整的 AI 平台网关。

```python
# MCP 工具桥接
from litellm import experimental_mcp_client
tools = await experimental_mcp_client.load_mcp_tools(session=session, format="openai")
response = await litellm.acompletion(model="gpt-4o", messages=[...], tools=tools)
```

### 5. 可观测性与集成（integrations/）
`integrations/` 目录集成了 30+ 可观测性和日志平台：Langfuse、Datadog、OpenTelemetry、MLflow、Prometheus、Arize 等。通过回调机制，每次 LLM 调用都可以自动记录到目标平台，支持追踪延迟、成本、token 使用量等指标。还提供了 Slack 告警、邮件通知等运维功能。

## 技术亮点

1. **100+ 提供商统一接口**：覆盖 OpenAI、Anthropic、Google、AWS、Azure、Cohere 等 100+ LLM 提供商，全部统一为 OpenAI 兼容格式，一行代码切换提供商。
2. **生产级网关特性**：虚拟密钥、多租户成本追踪、负载均衡、fallback、rate limiting、Guardrails 安全护栏、缓存（Redis/内存/S3）等开箱即用。
3. **8ms P95 延迟**：在 1k RPS 负载下保持极低延迟，适用于高吞吐生产环境。
4. **A2A + MCP 协议支持**：率先支持 Agent-to-Agent 通信和 MCP 工具网关，将 LLM 网关升级为 AI 平台网关。
5. **多路由策略**：内置 adaptive、complexity-aware、auto 等智能路由策略，根据模型能力、成本和延迟自动优化。
6. **企业级安全**：支持 SSO、RBAC、密钥轮换、Docker 镜像签名（cosign），通过 `docker-compose.hardened.yml` 提供加固部署方案。

## 与 Self-Evolve 关联
| 维度 | 贡献 |
|------|------|
| LLM 基础设施 | 为 Self-Evolve 系统提供统一的 LLM 调用层，屏蔽不同提供商的 API 差异 |
| 进化循环 | Router 的 fallback 和 adaptive 策略可作为模型进化的基础设施，自动选择最优模型 |
| Agent 编排 | A2A 协议和 MCP 网关为 Self-Evolve 的 Agent 编排提供通信基础设施 |
| 成本管理 | 多租户成本追踪为进化实验的模型调用费用提供精细化管控 |
| 可观测性 | 30+ 集成平台为 Self-Evolve 的训练过程提供全面的监控和日志能力 |
| 安全护栏 | Guardrails 模块为 Self-Evolve 系统的输出安全提供保障 |

## 参考资料
- [LiteLLM 官方文档](https://docs.litellm.ai/)
- [LiteLLM Proxy 快速开始](https://docs.litellm.ai/docs/proxy/docker_quick_start)
- [支持的提供商列表](https://docs.litellm.ai/docs/providers)
- [Benchmark 结果](https://docs.litellm.ai/docs/benchmarks)
- [A2A 协议文档](https://docs.litellm.ai/docs/a2a)
- [MCP 网关文档](https://docs.litellm.ai/docs/mcp)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/berriai__litellm`
- **分析命令**：`gitnexus analyze repos/berriai__litellm --index-only --skip-git --name LiteLLM`
- **知识图谱规模**：[placeholder]
- **查询语句**：`completion router proxy_server FastAPI provider adapter authentication guardrail cache spend tracking a2a mcp`
- **核心执行流程候选**：SDK 路径：completion() -> model 解析 -> provider 选择 -> 请求转换 -> API 调用 -> 响应标准化；Proxy 路径：FastAPI 路由 -> auth 认证 -> router 选择模型 -> provider 调用 -> spend 记录 -> guardrail 检查 -> 响应返回
- **关键符号/文件**：`litellm/main.py`, `litellm/router.py`, `litellm/proxy/proxy_server.py`, `litellm/llms/`, `litellm/proxy/auth/`, `litellm/proxy/guardrails/`, `litellm/router_strategy/`, `litellm/a2a_protocol/`, `litellm/experimental_mcp_client/`
- **调用关系上下文**：completion() 入口 -> model name 解析(provider prefix) -> 匹配 llms/{provider}/handler -> 转换请求格式 -> HTTP 调用 -> 响应解析为 OpenAI 格式；Proxy 在此基础上增加 auth -> rate limit -> routing -> spend tracking -> callback hooks 链
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
