# RISE: Recursive Introspection for Self-Improvement

> arXiv: 2407.18219 | NeurIPS 2024 + ICML 2024 | CMU
> 作者: Yuxiao Qu, Jiecao Zhang (Carnegie Mellon University)
> 引用: 183+

---

## Summary

RISE (Recursive IntroSpEction) 教 LLM 在多轮交互中递归自省和修正推理。将自我改进建模为多轮 MDP，通过 RL 微调使自我修正成为**学习到的行为**而非提示技巧。证明 LLM 可以被教会自我改进——即使没有外部反馈。

---

## Core Method

### Multi-Turn MDP Formulation

每个"回合"：
- **状态**: $s_t = (\text{problem}, \text{trajectory}_{1:t})$ — 当前推理轨迹 + 问题
- **动作**: $a_t \in \{\text{continue}, \text{revise}, \text{terminate}\}$
- **奖励**: $r = \mathbb{1}[\text{final answer correct}]$

### Recursive Introspection Loop

$$\pi_\theta(a_t | s_t) = \text{LLM}_\theta(\text{problem}, \text{trajectory}_{1:t}, a_t)$$

```
For turn t = 1, 2, ..., T:
  1. Model generates reasoning step s_t
  2. Model evaluates s_t for correctness
  3. If error detected:
     Model revises → s_t' (corrected step)
  4. Continue with revised trajectory
  5. Final answer scored for reward
```

### 与 Self-Refine 的关键区别

| 方面 | Self-Refine | RISE |
|------|------------|------|
| 训练方式 | 纯 prompting | RL 微调 |
| 自我修正 | 提示驱动 | 学习到的行为 |
| 理论基础 | 启发式 | 在线模仿学习 + RL |

---

## Key Formulas

| 组件 | 公式 |
|------|------|
| MDP | $(S, A, P, R, \gamma)$ |
| 策略 | $\pi_\theta(a_t \| s_t)$ |
| 状态转移 | $s_{t+1} = f(s_t, a_t)$ |
| 奖励 | $R = \sum_{t=1}^T \gamma^t r_t$ |
| 训练目标 | $\max_\theta \mathbb{E}_{\pi_\theta}[R] - \beta \text{KL}(\pi_\theta \| \pi_\text{ref})$ |
| 数据收集 | 多轮轨迹采样 + 在线模仿学习 |

---

## Benchmarks & Results

### 数学推理基准

| 基准 | 模型 | 基线 (单轮) | RISE (多轮自省) | 提升 |
|------|------|-----------|----------------|------|
| GSM8K | Llama2-7B | ~14% | **~24%** | +10pp |
| GSM8K | Mistral-7B | ~38% | **~46%** | +8pp |
| MATH | Llama2-7B | — | 显著提升 | — |
| MATH | Mistral-7B | — | 显著提升 | — |

### 关键发现

1. **多轮 > 单轮**：更多自省回合持续提升准确率
2. **RL 微调 > 纯 prompting**：Self-Refine 无法达到 RISE 的效果
3. **难度自适应**：模型学会在更难的问题上分配更多"自省预算"
4. **超越其他自修正方法**：优于单轮基线和 prompting 式自我修正

---

## Authors & Affiliations

| 作者 | 机构 | 备注 |
|------|------|------|
| **Yuxiao Qu** | CMU | 一作，项目页: cohenqu.github.io/rise.github.io |
| **Jiecao Zhang** | CMU | |

### 资源
- 项目页: https://cohenqu.github.io/rise.github.io/
- OpenReview: https://openreview.net/forum?id=DRC9pZwBwR

---

## Citation Context

- 建立在 Self-Refine 之上，添加 RL 微调使自我修正可学习
- 与 RAGEN (StarPO) 共享轨迹级 RL 框架
- ReVeal 将 RISE 扩展到代码生成+验证 RL
- 受在线模仿学习 (DAGGER) 启发的数据收集策略
- Constitutional AI 的自我批评机制的 RL 版本
