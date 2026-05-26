# Dify: 开源 LLM 应用开发平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/langgenius/dify |
| Star | 100,000+ |
| 技术栈 | Python (Flask), TypeScript (Next.js), PostgreSQL, Redis, Celery, Docker |
| 许可证 | Apache 2.0（核心）/ 商业许可 |
| 开发者 | LangGenius（langgenius） |

## 项目简介

Dify 是一个开源的 LLM 应用开发平台，通过直观的可视化界面将 AI 工作流、RAG 管道、Agent 能力、模型管理和可观测性功能整合在一起，帮助开发者从原型快速迭代到生产环境。Dify 支持数百种专有和开源 LLM，提供可视化工作流编排、智能 Agent 构建、RAG 引擎、模型管理以及企业级部署能力。作为 GitHub 上 Star 数最高的 AI 应用开发平台之一，Dify 已成为 LLM 应用开发的事实标准基础设施。

## 目录结构

```
langgenius__dify/
├── api/                       # 后端 API（Python Flask）
│   ├── app_factory.py         # Flask 应用工厂
│   ├── app.py                 # 应用入口
│   ├── accounts/              # 账户与认证
│   ├── agent_playground/      # Agent 试验场
│   ├── agentcc/               # Agent 核心组件
│   ├── agentic_eval/          # Agent 评估
│   ├── ai_tools/              # AI 工具集
│   ├── analytics/             # 数据分析
│   ├── commands/              # CLI 命令
│   ├── configs/               # 配置管理
│   ├── controllers/           # API 控制器
│   ├── core/                  # 核心引擎
│   ├── datasets/              # 数据集管理
│   ├── events/                # 事件处理
│   ├── extensions/            # 扩展模块
│   ├── features/              # 功能模块
│   ├── libs/                  # 基础库
│   ├── models/                # 数据模型
│   ├── scheduler/             # 任务调度
│   ├── services/              # 业务服务层
│   └── tests/                 # 测试套件
├── web/                       # 前端（Next.js + TypeScript）
├── dify-agent/                # Agent 后端服务
├── docker/                    # Docker 部署配置
├── sdks/                      # 客户端 SDK
├── packages/                  # 共享包
├── api/                       # 后端 API
├── e2e/                       # 端到端测试
└── docs/                      # 文档
```

## 核心模块分析

### 1. 可视化工作流引擎

Dify 的核心是可视化工作流编排引擎，允许在画布上构建和测试复杂的 AI 工作流。工作流支持：
- 节点拖拽式编排（LLM 调用、条件判断、代码执行、工具调用等）
- 实时调试和预览
- 变量传递和上下文管理
- 分支、循环和并行执行
- 工作流版本管理和回滚

### 2. Agent 构建系统

Dify 的 Agent 系统支持多种 Agent 模式：
- **ReAct Agent**：基于推理-行动循环的通用 Agent
- **Function Calling Agent**：利用 LLM 的函数调用能力
- **自定义工具 Agent**：用户可定义专属工具集
- Agent 可嵌入工作流节点中，实现"工作流中的 Agent"模式

### 3. RAG 引擎

内置的 RAG（检索增强生成）引擎提供：
- 多格式文档解析（PDF、Word、网页等）
- 多种分块策略
- 向量化和索引管理
- 混合检索（向量 + 关键词）
- 重排序（Reranking）
- 引用溯源

### 4. 模型管理中心

统一的模型管理界面支持：
- 数十家推理提供商（OpenAI、Anthropic、Google、自托管等）
- 模型性能监控与对比
- API Key 管理和用量追踪
- 模型参数调优
- 负载均衡和故障转移

### 5. Agent 评估系统（Agentic Eval）

`agentic_eval/` 模块提供 Agent 行为评估能力：
- 预定义评估指标
- A/B 测试支持
- 回归测试
- 与 Opik、Langfuse、Arize Phoenix 等可观测性工具集成

## 技术亮点

1. **全栈可视化开发**：从 Agent 构建、工作流编排到 RAG 配置，全部通过可视化界面完成，大幅降低了 LLM 应用的开发门槛。
2. **DDD 架构**：后端采用领域驱动设计（Domain-Driven Design），清晰的分层架构（controllers/services/models/core）确保了代码的可维护性和可扩展性。
3. **Celery 异步任务**：通过 Redis + Celery 实现异步任务处理，支持长时间运行的工作流和批量操作。
4. **多租户架构**：内置多租户隔离，支持企业级的多团队协作场景。
5. **丰富生态集成**：与 Opik、Langfuse、Arize Phoenix 等可观测性工具深度集成，支持 Docker 一键部署。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 可视化编排 | 工作流画布为 Self-Evolve 的自改进流程可视化提供了 UI 范式 |
| Agent 评估 | agentic_eval 模块为 Self-Evolve 提供了 Agent 行为评估的基础设施参考 |
| RAG 引擎 | 内置 RAG 能力为 Self-Evolve 的知识积累和检索增强提供了即用组件 |
| 多模型管理 | 统一的模型管理界面为 Self-Evolve 的模型选择和优化提供了管理参考 |
| 工作流版本化 | 工作流版本管理和回滚为 Self-Evolve 的安全迭代提供了工程机制 |
| 可观测性 | 与 Opik/Langfuse 的集成为 Self-Evolve 的自诊断提供了可观测性基础 |
| DDD 架构 | 领域驱动的架构设计为 Self-Evolve 的大规模工程化提供了架构参考 |
