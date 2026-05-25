# Self-Evolving Codegen：测试 Agent 的自主进化

> **2025-2026 新项目** | 2026 年 3 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/tathadn/self-evolving-codegen |
| Stars | 0 |
| 主要语言 | Python |
| 许可证 | MIT License |
| 创建时间 | 2026-03-17 |

## 项目简介

Self-Evolving Codegen 是一个多 Agent 代码生成管线（LangGraph + Claude），其核心创新在于 Tester Agent 能够在连续迭代中自主改进自身的测试生成策略。在五 Agent 流水线（Orchestrator -> Planner -> Coder -> Reviewer -> Tester）基础上，增加了一个自我进化引擎，通过自我评估、失败分析和提示词进化来持续优化 Tester 的能力。

这是"多 Agent 代码生成三部曲"的第三部，前两部分别探索了基础架构和并行/成本优化。本项目聚焦于"自主性 + 元学习"维度，展示了 Agent 如何在没有人类编辑提示词的情况下，通过自反思机制改进自身表现。实验结果显示，仅一代进化即将综合评分从 0.506 提升至 0.921。

## 目录结构

```
self-evolving-codegen/
├── app.py               # Streamlit UI 入口
├── run_evolution.py     # 进化循环入口
├── config.py            # 配置
├── agents/              # 五个 Agent 定义
├── graph/               # LangGraph 状态图
├── models/              # 数据模型
├── evolution/           # 自我进化引擎
├── experiments/         # 实验结果
├── prompts/             # 提示词模板（按代际演化）
├── sandbox/             # Docker 沙箱
└── tests/               # 测试套件
```

## 核心模块分析

### 1. 五 Agent 代码生成管线（agents/ + graph/）
基于 LangGraph 的 StateGraph 实现五个 Agent 的协作流程：Orchestrator 解释需求、Planner 生成结构化计划、Coder 生成代码、Reviewer 评分并标记问题、Tester 生成 pytest 并在 Docker 沙箱中运行。测试失败或评分低于阈值时自动回退到 Coder 进行修订。

### 2. 自我进化引擎（evolution/）
四阶段进化循环：**Evaluator**（Haiku 作为 LLM-as-Judge 评分每条测试）、**Analyzer**（Sonnet 诊断前三大失败模式）、**Evolver**（Sonnet 对 Tester 提示词进行精准修改）、**Tracker**（JSON 持久化 + 成本估算 + 回滚逻辑）。每个阶段的职责清晰分离。

### 3. 智能回滚与缓存
进化引擎内置 15% 回退阈值——若新提示词导致综合评分下降超过 15%，自动回退到上一代。配合 MD5 去重的管线缓存机制，重跑进化循环时命中缓存的结果零成本，仅新的任务/代际组合才会调用 API。

## 技术亮点

1. **LLM-as-Judge 评估框架**：使用 Haiku 模型对测试质量进行多维度评分（Bug 检测率、误报率、覆盖质量、边界情况覆盖、冗余率），提供细粒度的进化信号。

2. **单代显著改进**：从 Gen 0 到 Gen 1，综合评分从 0.506 跃升至 0.921。关键发现是 Gen 0 的瓶颈不在测试内容而在输出格式（JSON 解析错误），进化器自动发现并修复了这一格式问题。

3. **元学习闭环**：Tester 是唯一可以通过外部验证（pytest 通过/失败）获得学习信号的 Agent，这使得自进化循环可以在无需人类判断的情况下可靠收敛。

4. **成本控制体系**：多模型分层（Haiku 评估 + Sonnet 分析/进化）、MD5 缓存和预算追踪，将进化成本控制在可预测范围内。

## 与 Self-Evolve 关联

Self-Evolving Codegen 是 Self-Evolve 在**代码生成领域**的聚焦实验。它提供了一个重要的洞见：Self-Evolve 的有效性取决于进化信号的可靠性。项目选择 Tester 作为唯一进化目标，正是因为 pytest 的二值输出（通过/失败）提供了可靠的 Ground Truth。这暗示了一个通用原则：Self-Evolve 应优先应用于具有客观评估标准的子系统。项目还展示了一个关键的 Self-Evolve 机制——提示词即基因。Tester 的系统提示词在代际间被重写和优化，这与生物进化中基因变异和自然选择的机制高度类似。回滚机制则对应了进化中的"有害突变淘汰"。

## 参考资料

- [GitHub 仓库](https://github.com/tathadn/self-evolving-codegen)
- [multi-agent-codegen 基础版](https://github.com/tathadn/multi-agent-codegen)
- [parallel-multi-agent-codegen 并行版](https://github.com/tathadn/parallel-multi-agent-codegen)
