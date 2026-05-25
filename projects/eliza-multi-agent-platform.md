# Eliza (elizaOS): Multi-Agent Platform

## 基本信息

| 字段 | 内容 |
|---|---|
| GitHub | https://github.com/elizaOS/eliza |
| 类型 | Multi-Agent Framework / Platform |
| 星数 | High-star (top-tier) |
| 语言 | TypeScript |
| 许可证 | MIT |
| 自进化关联 | Indirect: plugin system + multi-agent orchestration enable evolutionary patterns |

## 1. 任务定义

ElizaOS 是一个全功能、可扩展的多 Agent AI 平台，支持从聊天机器人到自主业务流程自动化的各种应用。它解决了多 Agent 系统的开发、部署和管理问题，提供插件系统、模型无关性和现代 Web UI。

## 2. 方法核心

### 2.1 改进对象
- Agent 配置和插件组合（通过 plugin system 可扩展）
- 多 Agent 协作拓扑（通过 groups 和 runtime 管理）

### 2.2 与自进化的关系
ElizaOS 本身不包含内建的自进化机制（无自动变异/选择/保留循环）。但它提供了自进化系统的运行时基础设施：
- 插件系统可作为 L4 级变异的目标对象
- 多 Agent 架构支持 EvoMAC 式的协作拓扑进化
- RAG 文档摄入支持 L2 级记忆积累

### 2.3 适用场景
- 多 Agent 应用开发和部署
- 需要快速原型验证的 Agent 系统
- 作为自进化研究的实验平台（在 ElizaOS 上实现进化循环）

## 3. 定量证据

作为框架而非方法论文，ElizaOS 无 benchmark 分数。其社区指标（star 数、贡献者数、插件生态规模）反映工程成熟度而非自进化能力。

## 4. 定性判断

### 4.1 限制
- 不包含自进化机制：需要外部实现变异/选择循环
- 偏向工程实用性而非研究创新
- 加密货币/AI agent 市场热度可能导致评估偏差

### 4.2 教学价值
- 展示了生产级多 Agent 系统的架构设计
- 插件系统作为可扩展变异目标的范例
- 工程成熟的自进化实验平台

## 5. 与自进化的关系

ElizaOS 在 L1-L5 分类中不直接对应任何层级，因为它是运行时框架而非进化方法。但它为自进化系统提供了重要的基础设施层：
- **L2 基础**: RAG 文档摄入支持记忆积累
- **L4 目标**: 插件系统可作为架构搜索的变异空间
- **Multi-Agent 基础**: 协作拓扑支持 EvoMAC 式进化
