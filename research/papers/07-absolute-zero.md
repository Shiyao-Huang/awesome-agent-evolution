# Absolute Zero: Reinforced Self-Play Reasoning with Zero Data

> arXiv: 2505.03335 | NeurIPS 2025 (获奖) | Tsinghua University / LeapLabTHU
> 作者: Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Matthieu Lin, Sam Wang, Qiran Wu, Zang Zheng 等 (11 位作者)

---

## Summary

Introduces the Absolute Zero paradigm: a single model simultaneously proposes tasks and solves them, using only self-generated data. A code executor provides verification. Eliminates the dependency on human-curated training data entirely.

---

## Core Method

### Self-Play RLVR

1. **Task Proposal**: Model generates new reasoning tasks (code, math, logic)
2. **Task Solving**: Model attempts to solve its own proposed tasks
3. **Code Executor Verification**: Automated evaluation via code execution
4. **RL Training**: Reward signal from verification drives both proposal and solving improvement

### Dual-Role Architecture

```
┌─────────────┐
│  Task Proposer │ → Generates task t
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Task Solver  │ → Produces solution s
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Code Executor │ → Verifies s against t
└──────┬──────┘
       │
       ▼
   Reward signal → RL update for both proposer and solver
```

### Key Innovation

The model is **both** the curriculum designer AND the student. It must propose tasks that are:
- Solvable (not trivially impossible)
- Challenging (not trivially easy)
- Diverse (covering different reasoning skills)

---

## Key Formulas

| Component | Description |
|---|---|
| Task proposal | t = LLM_proposer(curriculum_state) |
| Solution | s = LLM_solver(t) |
| Verification | r = Execute(s, t) ∈ {0, 1} |
| RL update | Both proposer and solver updated via PPO/GRPO |
| Curriculum reward | R_proposer ∝ difficulty(t) × solvability(t) |

---

## Benchmarks & Results

### 编程基准（AZR-Coder-7B）

| 基准 | AZR (零数据) | 对比方法 (有数据) |
|------|-------------|-----------------|
| HumanEval+ | **SOTA (7B 级别)** | 超越多数有监督方法 |
| MBPP+ | SOTA (7B 级别) | — |
| LiveCodeBench | 竞争性 | — |
| **7B 总平均** | **SOTA** | — |
| **编码平均** | **SOTA** | — |

### 数学推理

| 基准 | 结果 |
|------|------|
| GSM8K | 竞争性（零数学训练数据） |
| MATH | 竞争性（仅代码自博弈训练） |
| 数学推理 | 超越部分专门微调的数学模型 |

### 关键发现
1. **AZR-Coder-7B** 在 7B 模型中达到 SOTA（编码+总平均）
2. **零外部数据**训练，完全自博弈生成课程
3. **pass@1 和 pass@128** 随训练持续提升
4. **更强基础模型 → 更好自我改进**："stronger models are better at making themselves stronger"
5. 仅用代码自博弈训练即可获得数学推理能力（跨域迁移）

---

## 作者与机构

| 作者 | 机构 | 备注 |
|------|------|------|
| **Andrew Zhao** | 清华大学 / LeapLabTHU | 一作，联系方式: zqc21@mails.tsinghua.edu.cn |
| **Yiran Wu** | LeapLabTHU | |
| **Yang Yue** | LeapLabTHU | |
| 其他共 11 人 | LeapLabTHU | |

### 资源
- 项目页: https://andrewzh112.github.io/absolute-zero-reasoner/
- GitHub: https://github.com/LeapLabTHU/Absolute-Zero-Reasoner
- 引用: 202+ 篇
- 基础模型: Qwen 模型家族

---

## Limitations

1. Task quality depends on proposer's current capability (bootstrapping challenge)
2. Code executor limits task types to verifiable programming tasks
3. Early training may propose trivial or unsolvable tasks
4. Risk of mode collapse (proposer and solver converging to trivial agreements)
5. Computational cost of dual-role RL training

---

## Citation Context

- Extends RLVR (Reinforcement Learning with Verifiable Rewards) to zero-data setting
- Related to self-play in game AI (AlphaGo Zero paradigm)
- Inspired by curriculum learning but with self-generated curricula
- Preceded by and influences Agent0 (similar self-play agent concept)
- Connects to FunSearch (program search via LLM + evaluator)
