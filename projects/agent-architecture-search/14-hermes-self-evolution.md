# Hermes Agent Self-Evolution: 进化式提示优化

> GitHub: https://github.com/NousResearch/hermes-agent-self-evolution
> Stars: 7,400+ (24 小时内达成) | 语言: Python | License: MIT
> 引擎: DSPy + GEPA (ICLR 2026 Oral) + Darwinian Evolver

---

## 核心定位

使用 **DSPy + GEPA (Genetic-Pareto Prompt Evolution)** 自动进化 Hermes Agent 的技能、工具描述和系统提示。通过反思式进化搜索产出可度量的改进版本。**无需 GPU 训练**，纯 API 调用，每次优化 ~$2-10。

## 技术栈

- **优化引擎**: DSPy (Stanford) + GEPA (ICLR 2026 Oral)
- **代码进化**: Darwinian Evolver (Git-based organisms)
- **语言**: Python
- **目标**: Hermes Agent (NousResearch)

## 核心机制

### GEPA 优化流程

```
读取当前 Skill/Prompt/Tool
        ↓
生成评估数据集
        ↓
GEPA 优化器 ← 执行追踪
        ↓
候选变体 → 评估
        ↓
约束门控 (测试/大小/Benchmark)
        ↓
最优变体 → PR 到 hermes-agent
```

### 关键创新

- **读取执行追踪**: 不仅知道失败了，还理解*为什么*失败
- **针对性改进**: 基于失败原因提出定向优化
- **约束门控**: 每个进化变体必须通过完整测试套件

### 优化目标

| 阶段 | 目标 | 状态 |
|------|------|------|
| Phase 1 | Skill 文件 (SKILL.md) | ✅ 已实现 |
| Phase 2 | 工具描述 | 🔲 计划中 |
| Phase 3 | 系统提示 | 🔲 计划中 |
| Phase 4 | 工具实现代码 | 🔲 计划中 |
| Phase 5 | 持续改进循环 | 🔲 计划中 |

### 安全护栏

1. **全量测试**: `pytest tests/ -q` 必须 100% 通过
2. **大小限制**: Skills ≤15KB, 工具描述 ≤500 字符
3. **缓存兼容**: 不允许会话中修改
4. **语义保持**: 不得偏离原始目的
5. **PR 审查**: 所有变更通过人类审查

## Self Evolve 关联

- **提示级自进化**: 将自进化应用于 Agent 的"软件"（提示/技能）
- **GEPA 算法**: ICLR 2026 Oral 级别的进化算法
- **低成本**: $2-10/次，无 GPU，纯 API 调用
- **工业实践**: NousResearch 旗舰 Agent 的官方自进化管线

## 本地路径

`repos/nousresearch__hermes_self_evolution/`
