---
title: "架构搜索与自动化Agent设计 (Architecture Search)"
type: concept
rank: A
tags: [mechanism, M4, architecture-search, NAS, ADAS, DGM, Godel-Agent, AlphaEvolve]
sources:
  - survey/latex/chapters/ch3-methods.tex
  - survey/latex/chapters/ch4-systems.tex
  - paper-reviews/review-2408.08435-adas.md
  - paper-reviews/review-2505.22954-darwin-godel-machine.md
  - paper-reviews/review-2410.04444-godel-agent.md
  - paper-reviews/review-2506.13131-alphaevolve.md

updated: 2026-05-26
---

# 架构搜索与自动化Agent设计 (Architecture Search)

> 自动搜索Agent的架构——prompt策略、工具组合、控制流、代码乃至整个pipeline——的进化机制。从NAS继承搜索范式，从进化计算继承变异+选择。

## 定义

Agent Evolution 中架构搜索属于 M3/M4 层机制：不再由人类手动设计Agent组件，而是让搜索算法自动发现更优组合。搜索空间覆盖 prompt、tool-use策略、多Agent拓扑、可执行代码等。

## 搜索空间谱系

```
L1 Prompt组合搜索:   搜索system prompt与few-shot的最优搭配
L2 工具/控制流搜索:  搜索tool selection策略和推理pipeline拓扑
L3 代码级搜索:       直接搜索或生成Agent的可执行源代码
L4 开放式搜索:       不预设目标函数，持续发现新能力（open-ended evolution）
```

## 关键系统

### ADAS (Hu et al. 2024 / ICLR 2025)
- **方法**：定义Agent基础构建块（building blocks），用LLM作为搜索算子（search operator），在由这些块组成的搜索空间中迭代发现新架构。
- **核心贡献**：将NAS中的可微分搜索替换为LLM驱动的元搜索——LLM提议新架构，evaluator给出fitness，循环往复。
- **证据**：发现的Agent在多种任务上超越人工设计。 — Source: paper-reviews/review-2408.08435-adas.md

### DGM / Darwin-Godel Machine (Zhang et al. 2025)
- **方法**：Darwin进化 + Godel自指。维护一个多样化Agent变体Archive，每代从Archive采样父代，让Agent修改自身Python代码，Sandbox执行后按benchmark评估，结果写回Archive。
- **核心贡献**：开放式搜索——不只在单benchmark上优化，而是维护stepping stones。某些当前表现不强的变体可能是未来突破的关键祖先。
- **证据**：SWE-bench 20.0% -> 50.0%, Polyglot 14.2% -> 30.7%。 — Source: paper-reviews/review-2505.22954-darwin-godel-machine.md

### Godel Agent (Yin et al. 2025 / ACL)
- **方法**：自指框架——Agent直接读写和修改自身的执行代码，实现"能修改自己代码的代码"。
- **核心贡献**：搜索空间不再受限于一组预定义的building blocks，而是整个图灵完备的程序空间。
- **风险**：无约束代码自修改引入安全性和稳定性挑战。 — Source: paper-reviews/review-2410.04444-godel-agent.md

### AlphaEvolve (Novikov et al. 2025 / Google DeepMind)
- **方法**：基于Gemini的编码Agent，用于算法发现。LLM生成候选程序，自动化evaluator给出fitness，进化搜索持续改进。
- **核心贡献**：程序化evaluator使进化闭环可靠——只有可形式化验证的问题才能获得高质量进化信号。
- **证据**：发现更优矩阵乘法算法，改进数据中心调度。 — Source: paper-reviews/review-2506.13131-alphaevolve.md

## 核心洞察：Archive多样性 > 单一最优

传统NAS追求single-best架构。Agent架构搜索的关键教训是：**维护多样化Archive比保留单一个体更重要**。理由：

1. 当前"弱"变体可能是未来突破的stepping stone（DGM实验证实）
2. 不同任务/benchmark需要不同架构，单一最优解不存在
3. 开放式进化依赖多样性维持进化动力

## 局限性

1. **搜索成本爆炸**：代码级搜索需要大量LLM调用和Sandbox执行 — Source: survey/ch3-methods.tex
2. **评估瓶颈**：复杂Agent的评估可能比训练更困难 — Source: survey/ch4-systems.tex
3. **不可解释性**：自动发现的架构往往比人工设计的更难理解
4. **安全边界模糊**：代码自修改可能绕过预设安全约束

## Cross-references
- [[self-improvement]] — 架构搜索是深度最大的改进路径
- [[self-evaluation]] — 评估器定义搜索方向和选择压力
- [[multi-agent-coevolution]] — Archive生态是多Agent进化的特殊形态
- [[emergent-behavior]] — 自动发现架构可能产生不可预测行为
- [[mechanism-framework]] — 全景机制关系DAG
