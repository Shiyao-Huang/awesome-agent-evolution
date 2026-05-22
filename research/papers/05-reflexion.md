# Reflexion: Language Agents with Verbal Reinforcement Learning

> arXiv: 2303.11366 | NeurIPS 2023 | Northeastern University + MIT
> Authors: Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao

---

## Summary

Introduces verbal reinforcement learning — agents learn from linguistic feedback stored in memory, without any weight updates. Uses three specialized models: Actor, Evaluator, Self-Reflection. Achieves 91% pass@1 on HumanEval, surpassing GPT-4's 80%.

---

## Core Method

### Three-Model Architecture

1. **Actor (Ma)**: Generates actions/outputs given task + memory context
2. **Evaluator (Me)**: Scores actor's output (binary reward or scalar)
3. **Self-Reflection (Mr)**: Generates verbal feedback explaining what went wrong

### Reflexion Loop

```
For episode e = 1, 2, ..., E:
  1. Actor Ma generates action a_e given (task, memory)
  2. Evaluator Me scores a_e → reward r_e
  3. If r_e indicates failure:
     Self-Reflection Mr generates feedback f_e
     Store f_e in memory buffer M
  4. Next episode: Ma sees M = {f_1, f_2, ..., f_e}
```

### Memory Buffer

The key innovation: instead of updating weights, Reflexion stores **linguistic feedback** in a growing memory buffer. Each entry describes:
- What the agent tried
- Why it failed
- What to do differently

This acts as a "verbal gradient" — natural language guidance for future attempts.

---

## Key Formulas

| Component | Formula |
|---|---|
| Actor action | a_e = Ma(task, M_{1:e-1}) |
| Evaluation | r_e = Me(a_e, task) |
| Self-reflection | f_e = Mr(a_e, r_e, task) |
| Memory update | M_e = M_{e-1} ∪ {f_e} |
| Verbal RL loop | Memory replaces gradient; feedback replaces loss signal |

---

## Benchmarks & Results

### HumanEval (code generation)
| Method | Pass@1 |
|---|---|
| GPT-4 (zero-shot) | 80.1% |
| Codex (fine-tuned) | 67.0% |
| **Reflexion (GPT-3.5)** | **91.0%** |

### Other Benchmarks
| Benchmark | Metric | Reflexion Result |
|---|---|---|
| MBPP | Pass@1 | Significant improvement over base |
| APPS | Accuracy | Improvement with self-reflection |
| AlfWorld (interactive) | Success | 97% vs 75% base |
| WebShop | Reward | Improvement over ReAct baseline |

### Scaling Behavior
- More reflection episodes → better performance (up to diminishing returns)
- Memory quality matters: specific feedback > generic feedback
- Cross-task transfer: feedback from similar tasks helps

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Noah Shinn** | Northeastern University | Primary author |
| **Federico Cassano** | Northeastern University | Code generation |
| **Edward Berman** | Northeastern University | |
| **Ashwin Gopinath** | MIT | |
| **Karthik Narasimhan** | Princeton University | NLP, RL, agent reasoning |
| **Shunyu Yao** | Princeton University | Also authored ReAct, Tree of Thoughts |

### Key Collaboration Link
- **Shunyu Yao** appears on both Reflexion AND Tree of Thoughts — key figure in agent reasoning
- **Karthik Narasimhan** (Princeton NLP) is Yao's advisor and co-author on multiple seminal agent papers

---

## Limitations

1. Requires scalar/binary evaluation signal (not always available)
2. Memory buffer grows unbounded — context window limits
3. Self-reflection quality depends on LLM capability
4. No theoretical framework for convergence
5. Not truly "self-improving" — no weight updates, only context enrichment

---

## Citation Context

- Extension of ReAct (Yao et al., 2023) — same group, adds reflection
- Precedes Self-Refine (similar iterative refinement but single model)
- Foundation for later work on verbal/textual backpropagation (Symbolic Learning, EvoMAC)
- Key paper establishing "verbal RL" as a paradigm
