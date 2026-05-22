# Self-Refine: Iterative Refinement with Self-Feedback

> arXiv: 2303.17651 | NeurIPS 2023 | AI2 + Google + CMU + others
> Authors: Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, Peter Clark

---

## Summary

Single model iteratively generates, critiques, and refines its own output. No external training data, no reinforcement learning, no weight updates. Achieves ~20% improvement across 7 diverse tasks using only self-feedback.

---

## Core Method

### Three-Step Loop

1. **GENERATE**: Model produces initial output given input
2. **CRITIQUE**: Model analyzes its own output, identifying specific issues
3. **REFINE**: Model improves output based on critique

```
Input x → GENERATE → output_0
output_0 → CRITIQUE → feedback_0
(output_0, feedback_0) → REFINE → output_1
output_1 → CRITIQUE → feedback_1
(output_1, feedback_1) → REFINE → output_2
... repeat until no further improvements or max iterations
```

### Key Design Decisions
- **Same model** for all three steps (generate, critique, refine)
- **No external feedback** required
- **No training** — works with any capable LLM
- **Task-agnostic** — same framework across 7 different tasks

---

## Key Formulas

| Component | Description |
|---|---|
| Generate | y_0 = LLM(x, instruction) |
| Critique | fb_t = LLM(y_t, rubric) |
| Refine | y_{t+1} = LLM(y_t, fb_t, instruction) |
| Convergence | Stop when fb_t = "no improvements needed" or max_t reached |

---

## Benchmarks & Results

### 7 Tasks Evaluated

| Task | Metric | Base | Self-Refine | Improvement |
|---|---|---|---|---|
| Code Optimization | Performance | Baseline | **+28%** | Significant |
| Math Reasoning | Accuracy | 56% | **67%** | +11pp |
| Sentiment Reversal | Accuracy | 74% | **86%** | +12pp |
| Dialogue Response | Win rate | 52% | **68%** | +16pp |
| Acrostic Poetry | Quality | 3.2 | **3.8** | +0.6 |
| Code Readability | Score | 3.5 | **4.1** | +0.6 |
| Constrained Gen | Compliance | 65% | **78%** | +13pp |

### Average: ~20% improvement across all tasks

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Aman Madaan** | CMU / Google | Primary author, also works on code generation |
| **Niket Tandon** | AI2 | Knowledge-intensive tasks |
| **Prakhar Gupta** | CMU | |
| **Skyler Hallinan** | CMU | |
| **Luyu Gao** | Google | Retrieval-augmented generation |
| **Sarah Wiegreffe** | AI2 | |
| **Uri Alon** | CMU | Code generation |
| **Nouha Dziri** | AI2 | |
| **Shrimai Prabhumoye** | CMU | |
| **Yiming Yang** | CMU | |
| **Shashank Gupta** | CMU | |
| **Bodhisattwa P. Majumder** | Google | |
| **Katherine Hermann** | Google | |
| **Sean Welleck** | CMU | Mathematical reasoning |
| **Amir Yazdanbakhsh** | Google | |
| **Peter Clark** | AI2 | Leader in reasoning/NLP |

### Lab Context
- **AI2 (Allen Institute for AI)**: Major center for reasoning and NLP research
- **Google Research**: Multiple authors contribute to Gemini-related work
- **CMU (Carnegie Mellon)**: Strong NLP and ML groups

---

## Limitations

1. Refinement quality bounded by initial generation quality
2. Can get stuck in local optima (self-critique may not identify fundamental flaws)
3. No guarantee of convergence to correct answer
4. Iterations increase compute cost linearly
5. May "refine away" creative or diverse outputs

---

## Citation Context

- Contemporary with Reflexion but uses single model instead of three
- Precedes RISE (recursive introspection) which adds RL fine-tuning
- Foundation for iterative refinement in later frameworks (Agent Symbolic Learning)
- Establishes "self-feedback" as viable alternative to external feedback
