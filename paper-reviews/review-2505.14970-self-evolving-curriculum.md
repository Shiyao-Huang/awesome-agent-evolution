# Deep Review: Self-Evolving Curriculum for LLM Reasoning

- **Paper**: Self-Evolving Curriculum for LLM Reasoning
- **arXiv**: 2505.14970
- **Authors**: Xiaoyin Chen et al.
- **Published**: 2025-05-20; revised 2025-10-30
- **Source file**: `raw-papers/2505.14970.md`
- **Review date**: 2026-05-21
- **Evolver tags**: curriculum learning, reinforcement learning, multi-armed bandit, reasoning generalization

## 1. Executive summary / 摘要

This paper proposes Self-Evolving Curriculum (SEC), an automatic curriculum learning method for RL fine-tuning LLMs. It formulates curriculum selection as a non-stationary Multi-Armed Bandit problem over problem categories such as difficulty or type. The reward signal is absolute advantage from policy-gradient training, used as a proxy for immediate learning gain. Experiments across planning, inductive reasoning, and mathematics report improved reasoning, harder OOD generalization, and better skill balance across domains.

中文结论：SEC 是 agent evolution 中“训练数据顺序也需要进化”的代表。它不直接改造 agent 架构，而是让训练 curriculum 与模型能力同步变化，适合纳入 Evolver 的“自动课程/训练基础设施”类别。

## 2. Method analysis / 方法分析

The strongest design choice is modeling curriculum as non-stationary. As a model learns, the most useful data category changes; a fixed random or hand-designed curriculum becomes stale. By treating categories as bandit arms and updating with TD(0), SEC adapts without exhaustive online filtering.

The use of absolute advantage is pragmatic. It estimates where the model is currently learning most, rather than simply where it performs worst or best. This resembles a zone-of-proximal-development principle for RL fine-tuning.

## 3. Evidence and evaluation / 证据与评估

The raw file reports three reasoning domains: planning, inductive reasoning, and mathematics. This is broader than many math-only RL papers. The most important claimed outcome is OOD generalization to harder problems, because self-evolution systems often overfit their training/evaluation loop.

However, the paper remains within training-time RL; it does not show autonomous deployed agents discovering new tasks in the wild.

## 4. Claim vs Mom Test cross-validation / 论文声称 vs 社区体验交叉验证

| Paper claim | Mom Test/community counter-signal | Cross-validation judgement |
|---|---|---|
| Adaptive curriculum improves reasoning and OOD generalization. | Reddit Pain Point 40 warns self-improvement loops cause regression hell. | Compatible if skill balance/regression metrics are tracked continuously. |
| Bandit selection reduces manual curriculum design. | Reddit Pain Point 16 says maintaining optimization systems can exceed agent cost. | SEC may reduce manual effort but adds algorithmic infrastructure. |
| Absolute advantage estimates learning gain. | HN Pain Point 28 says Goodhart applies to every self-improvement metric. | Needs external validation that advantage gain maps to true task utility. |
| Multi-domain training improves skill balance. | Reddit Pain Point 8 says benchmarks cover too narrow a labor set. | Better than single-domain, but still not full production coverage. |

## 5. Limitations / 局限性

1. **Category design remains human-specified**: The bandit chooses among arms; it does not invent the taxonomy.
2. **Proxy reward risk**: Advantage may not equal durable real-world capability.
3. **Training-only scope**: Does not cover online deployed agents or tool-use environments.
4. **Compute cost**: RL fine-tuning plus curriculum updates are expensive.
5. **Hidden regression**: Improving harder tasks can degrade easier or unrelated skills without explicit monitoring.

## 6. Reproducibility / 可复现性

Reproducibility is **medium**. The raw paper gives enough high-level algorithmic structure, but exact reproduction needs domain datasets, arm definitions, RL hyperparameters, model checkpoints, and evaluation splits.

## 7. Evolver relevance / 平台价值

SEC is important for Evolver's infrastructure story. Demo submitters claiming training-time evolution should report curriculum policy, arm taxonomy, learning-gain metric, OOD test split, and per-domain regression table. It also suggests a future Evolver leaderboard for curriculum generators, not just agents.
