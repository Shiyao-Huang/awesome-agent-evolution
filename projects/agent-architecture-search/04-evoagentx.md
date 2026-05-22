# EvoAgentX: 自进化 Agent 生态系统

> GitHub: https://github.com/EvoAgentX/EvoAgentX
> Stars: 2,000+ | 语言: Python | License: MIT
> 论文: arXiv:2507.03616
> 文档: https://evoagentx.github.io/EvoAgentX/

---

## 核心定位

开源框架，用于**构建、评估和进化** LLM 驱动的 Agent 或工作流。核心是从单一 prompt 自动构建多 Agent 工作流，并通过迭代反馈循环持续优化。

## 核心特性

| 特性 | 描述 |
|------|------|
| 工作流自动构建 | 从 prompt 自动生成多 Agent 工作流 |
| 内置评估 | 自动评分 Agent 行为 |
| 自进化引擎 | 通过进化算法优化工作流 |
| 即插即用 | 支持 OpenAI/Qwen/Claude/DeepSeek 等 |
| 内置工具集 | 丰富的真实环境交互工具 |
| 记忆模块 | 短期 + 长期记忆系统 |
| HITL | 人工干预和指导 |

## 自进化引擎

```
初始工作流 → 自动评估 → 进化算法优化 → 新一代工作流 → 迭代
```

- 支持 SOTA 自进化算法
- 数据集驱动的目标导向优化
- 评估 → 反馈 → 改进的闭环

## Self Evolve 关联

- **生态级进化**: 不仅进化单个 Agent，而是整个工作流
- **与 ADAS 互补**: ADAS 搜索架构，EvoAgentX 优化工作流
- **开源标杆**: MIT 协议，完整的文档和社区
- **Awesome-Self-Evolving-Agents**: 同组织维护的自进化论文索引

## 本地路径

`repos/evoagentx__evoagentx/`
