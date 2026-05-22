# RAGEN: Self-Evolution in LLM Agents via Multi-Turn Reinforcement Learning

> arXiv: 2504.20073 | 2025 | Various institutions
> Key contribution: StarPO framework for trajectory-level agent RL, identifies "Echo Trap"

---

## Summary

Proposes StarPO (State-Thinking-Actions-Reward Policy Optimization), a general RL framework for training LLM agents in multi-turn settings. Identifies the "Echo Trap" phenomenon where agents get stuck repeating their own outputs, and proposes StarPO-S with trajectory filtering to address it.

---

## Core Method

### StarPO Framework

Decomposes agent trajectories into:
- **State (S)**: Environment observation at each step
- **Thinking (T)**: Internal reasoning before action
- **Actions (A)**: Tool calls, responses, or other actions
- **Reward (R)**: Step-level and trajectory-level rewards

### Echo Trap Phenomenon

Key discovery: During multi-turn RL training, agents often learn to "echo" their previous outputs rather than genuinely reasoning. This creates a false sense of improvement (high reward on training distribution) that doesn't generalize.

### StarPO-S Solution

```
1. Train agent with StarPO on multi-turn trajectories
2. Apply trajectory filtering: remove "echo" trajectories
3. Gradient stabilization: prevent reward hacking
4. Result: agents that genuinely reason rather than repeat
```

---

## Key Formulas

| Component | Formula |
|---|---|
| Trajectory | τ = {(s_1, t_1, a_1, r_1), ..., (s_T, t_T, a_T, r_T)} |
| StarPO objective | max_θ E[Σ_t γ^t · r_t · log π_θ(a_t|s_t, t_t)] |
| Echo detection | cos_sim(t_t, t_{t-1}) > threshold → echo |
| Trajectory filter | Keep τ only if echo_ratio(τ) < threshold |

---

## Benchmarks & Results

### Agent 训练稳定性
- **StarPO-S** 在多轮 Agent 任务上超越标准 PPO
- **Echo Trap 检测**：识别并过滤推理崩塌（reasoning collapse）现象
- **SFT vs RL**：RL 方法在 Agent 训练中显著优于纯 SFT

### 关键发现
1. **推理崩塌**（Reasoning Collapse）：多轮 RL 训练中 Agent 推理退化的关键问题
2. **难度调度**：最优难度调度对训练效果至关重要
3. **RAGEN-2**：后续版本系统研究了推理崩塌并提出轻量干预方案

---

## Authors & Affiliations

| 作者 | 机构 | 备注 |
|------|------|------|
| **Wang et al.** | Northwestern University MLL Lab | 主要作者 |

### 资源
- GitHub: https://github.com/mll-lab-nu/RAGEN
- arXiv: 2504.20073
- 项目页: https://ragen-ai.github.io/

---

## Citation Context

- 扩展 PPO/GRPO 到多轮 Agent 设置
- 与 RISE 共享多轮 MDP 思想
- StarPO 框架被 ReVeal 采用
- 与 Absolute Zero 共同探索自博弈 Agent RL
