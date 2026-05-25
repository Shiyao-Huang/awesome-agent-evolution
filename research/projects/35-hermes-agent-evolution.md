# Hermes Agent Self-Evolution：Agent 技能的进化优化

> **2025-2026 新项目** | 2026 年 3 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/NousResearch/hermes-agent-self-evolution |
| Stars | 3,465 |
| 主要语言 | Python |
| 许可证 | MIT |
| 创建时间 | 2026-03-09 |

## 项目简介

Hermes Agent Self-Evolution 是 NousResearch 开发的 Agent 自进化框架，使用 DSPy + GEPA（Genetic-Pareto Prompt Evolution）来自动进化优化 Hermes Agent 的技能文件、工具描述、系统提示词和代码。它通过反思式进化搜索生成可度量的更优版本，整个过程无需 GPU 训练，仅通过 API 调用即可完成（约 $2-10/次优化运行）。

GEPA 引擎读取执行轨迹来理解失败原因（而非仅知道失败了），然后提出针对性改进。该优化方法发表于 ICLR 2026 Oral。项目采用分阶段推进策略，当前已实现技能文件优化，计划逐步扩展到工具描述、系统提示词和工具实现代码。

## 目录结构

```
hermes-agent-self-evolution/
├── evolution/           # 进化引擎核心
│   └── skills/          # 技能进化模块
├── datasets/            # 评估数据集
├── tests/               # 测试套件
├── reports/             # 进化报告
├── generate_report.py   # 报告生成
├── PLAN.md              # 完整架构计划
└── pyproject.toml       # 项目配置
```

## 核心模块分析

### 1. GEPA 优化器（evolution/）
GEPA（Genetic-Pareto Prompt Evolution）是核心进化引擎，它读取 Agent 的执行轨迹来理解"为什么失败"而不仅是"是否失败"，然后提出针对性变异。结合 DSPy 的声明式编程框架，优化器自动生成评估数据集、创建候选变体、执行评估并选择最优版本。

### 2. 五阶段进化计划
项目规划了从技能文件到完整自主循环的五阶段进化路径：(1) 技能文件 SKILL.md 优化（已实现）；(2) 工具描述优化；(3) 系统提示词段优化；(4) 工具实现代码进化（使用 Darwinian Evolver）；(5) 持续改进自动化流水线。每一阶段都是前一阶段的自然扩展。

### 3. 评估与防护体系
每个进化变体必须通过完整测试套件、大小限制（技能 <=15KB、工具描述 <=500 字符）、缓存兼容性检查和语义保持验证。所有变更通过 PR 审查，从不直接提交。支持合成评估数据和真实会话历史两种评估来源。

## 技术亮点

1. **执行轨迹驱动的反思式进化**：不同于简单的输出评估，GEPA 深入分析执行轨迹来理解失败根因，实现"诊断-修复"式的精准进化，而非盲目变异。

2. **零 GPU 成本**：整个优化过程通过 API 调用完成，无需 GPU 训练或微调，每次运行成本仅 $2-10，大幅降低了 Self-Evolve 的实施门槛。

3. **ICLR 2026 Oral 级别的学术背书**：GEPA 方法被 ICLR 2026 接收为 Oral 报告，证明了反思式提示词进化在学术上的严谨性和有效性。

4. **双评估数据源**：支持合成评估数据和来自 Claude Code/Copilot/Hermes 的真实会话历史，兼顾覆盖率和真实场景验证。

## 与 Self-Evolve 关联

Hermes Agent Self-Evolution 是 Self-Evolve 在**提示词和技能层面**的精细实现。它回答了一个关键问题：Agent 的"能力"（技能文件、工具描述、系统提示词）能否通过进化自动优化？答案是肯定的，且成本极低。GEPA 的执行轨迹分析机制对应了 Self-Evolve 中"从失败中学习"的核心能力——不是简单地淘汰差的表现，而是深入理解失败原因并精准修复。五阶段进化路线图展示了一个完整的 Self-Evolve 演进路径：从文本优化到代码优化再到完全自主循环，这为 Self-Evolve 系统的阶段性建设提供了可参考的路线图。

## 参考资料

- [GitHub 仓库](https://github.com/NousResearch/hermes-agent-self-evolution)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [DSPy 框架](https://github.com/stanfordnlp/dspy)
- [GEPA 优化器](https://github.com/gepa-ai/gepa)
- [Darwinian Evolver](https://github.com/imbue-ai/darwinian_evolver)
