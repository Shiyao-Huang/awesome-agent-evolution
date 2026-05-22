# ReVeal: Self-Evolving Code Agents via Reliable Self-Verification

> arXiv: 2506.11442 | ICLR 2026 Poster | Microsoft Research
> Authors: Yiyang Jin, Kunzhao Xu, Hang Li, Xueting Han, Yanmin Zhou, Cheng Li, Jing Bai

---

## Summary

Multi-turn RL framework that explicitly optimizes self-verification alongside code generation. Uses TAPO (Turn-level Adaptive Policy Optimization) for per-turn credit assignment. Co-evolves code generation and test generation. Code evolves for 20+ turns on LiveCodeBench at inference despite training on only 3 turns.

---

## Core Method

### Architecture

1. **Verification-Generation Asymmetry**: Treats verification as a first-class optimization target, not a byproduct
2. **Iterative Generation-Verification Turns**: Structured multi-turn reasoning
3. **TAPO**: Turn-level Adaptive Policy Optimization for fine-grained credit assignment

### Algorithm

```
For each training episode:
  For each turn t = 1, 2, ..., T:
    1. Generate code c_t
    2. Self-verify: generate test cases, run tools
    3. Receive turn-level reward r_t
    4. TAPO assigns credit per turn
  5. RL update with trajectory-level + turn-level rewards
```

---

## Key Formulas

| Component | Description |
|---|---|
| Trajectory | τ = {(c_1, v_1, r_1), ..., (c_T, v_T, r_T)} |
| TAPO credit | Per-turn advantage estimation |
| Co-evolution loss | L = L_generation + λ × L_verification |

---

## Benchmarks & Results

### LiveCodeBench（主要评估基准）

| 方法 | Pass@k | 备注 |
|------|--------|------|
| DeepSeek-R1-Zero-Qwen-32B | 基线 | 32B 参数 |
| **ReVeal** | **超越基线** | 训练仅用 3 轮推理 |

### 关键数字
- **推理时 20+ 轮**自进化（训练仅 3 轮）
- 自主生成测试用例 + 调用外部工具验证
- 基于 RLVR（可验证奖励 RL）定制训练算法

---

## Authors & Affiliations

| 作者 | 机构 | 备注 |
|------|------|------|
| **Yiyang Jin** | Microsoft Research | 一作 |
| **Kunzhao Xu** | Microsoft Research | |
| **Hang Li** | Microsoft Research | |
| **Xueting Han** | Microsoft Research | |
| **Yanmin Zhou** | Microsoft Research | |
| **Cheng Li** | Microsoft Research | |
| **Jing Bai** | Microsoft Research | |

### 资源
- arXiv: 2506.11442
- GitHub: https://github.com/Shimly-2/ReVeal.github.io
- OpenReview: https://openreview.net/forum?id=q56ZI1Co43

---

## Citation Context

- 扩展 RISE 的多轮自省 + 显式验证优化
- 采用 RAGEN (StarPO) 轨迹级 Agent RL 框架
- 与 Absolute Zero 共享自博弈验证思想
- RLVR 范式在代码生成领域的深化应用
