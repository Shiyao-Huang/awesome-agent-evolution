# Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement

> arXiv: 2410.04444 | ACL 2025 | Peking University + UCSB
> Authors: Xunjian Yin, Xinyi Wang, Liangming Pan, Xiaojun Wan, William Yang Wang

---

## Summary

First self-referential agent framework directly inspired by the Gödel machine. Uses LLM-driven monkey patching to dynamically modify its own logic and behavior at runtime, guided by high-level objectives. Achieves continuous self-improvement without manual intervention.

---

## Core Method

### Self-Referential Architecture

The key insight: an agent that can read and modify its own source code is "self-referential" in the Gödel sense.

### Monkey Patching Mechanism

1. **Runtime introspection**: Agent reads its own code and current state
2. **Modification proposal**: LLM proposes specific code changes (monkey patches)
3. **Safe application**: Changes applied at runtime via Python monkey patching
4. **Feedback loop**: Performance feedback guides next modification

### Algorithm

```
Initialize agent A with initial_code
For each task batch:
  1. Execute A on tasks → collect results + feedback
  2. A.self_analyze(code, results, feedback) → improvement_plan
  3. A.self_modify(improvement_plan) → modified_code
  4. Execute modified A on validation tasks
  5. If improved: accept modifications
     Else: rollback
```

### Safety Mechanisms
- Rollback capability for failed modifications
- Validation step before committing changes
- High-level objective constraints prevent drift

---

## Key Formulas

| Component | Description |
|---|---|
| Self-referential loop | A' = LLM(A.code, feedback, objective) |
| Monkey patch | exec(patch_code) modifying A's methods |
| Acceptance criterion | score(A') > score(A) on validation set |

---

## Benchmarks & Results

### 主要基准测试结果

| 基准 | 类型 | 手工设计 Agent | Gödel Agent | 提升 |
|------|------|--------------|-------------|------|
| HotPotQA | 多跳问答 | 基线 | **超越** | +8-15% |
| ALFWorld | 文本交互环境 | 基线 | **超越** | 显著 |
| 多领域任务 | 综合评估 | 固定 Agent | **全面超越** | 所有领域 |

### 关键特性
- **持续改进**：随任务经验增加性能持续提升
- **策略发现**：发现人类设计者未预见的新策略
- **无需预定义流程**：不依赖固定工作流，自我修改代码
- **跨任务泛化**：在一个任务上学习的改进可迁移到其他任务

### 后续工作
- **Polaris**（arXiv: 2603.23129）：将 Gödel Agent 扩展到小语言模型

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Xunjian Yin** | Peking University | Primary author |
| **Xinyi Wang** | UCSB | |
| **Liangming Pan** | UCSB | Multi-agent reasoning |
| **Xiaojun Wan** | Peking University | NLP, summarization |
| **William Yang Wang** | UCSB | NLP lab lead |

### Lab Context
- **Peking University NLP Group**: Strong in text generation, summarization
- **UCSB NLP Lab** (William Yang Wang): Broad NLP research, collaboration with PKU

---

## Limitations

1. Monkey patching is Python-specific; less portable than code-generation approaches
2. Runtime modification introduces non-determinism
3. Safety: self-modification could lead to unintended behaviors
4. Theoretical guarantees are weaker than formal Gödel machine proofs
5. Evaluation limited to text tasks; code/robotics domains untested

---

## Citation Context

- Directly inspired by Schmidhuber's Gödel Machine (2003)
- Contemporary with DGM (different mechanism: monkey patching vs. evolutionary archive)
- Less "open-ended" than DGM — focuses on incremental improvement
- Related to ADAS (code-level agent design) but adds runtime self-modification
