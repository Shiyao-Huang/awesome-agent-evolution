# SelfEvolve: A Code Evolution Framework via Large Language Models

> arXiv: 2306.02907 | June 2023 | Shanghai Jiao Tong University + Shanghai AI Laboratory
> Authors: Shuyang Jiang, Yuhao Wang, Yu Wang

---

## Summary

Two-step pipeline where LLMs act as both knowledge providers and self-reflective programmers. Stage 1: LLM generates its own API documentation. Stage 2: Code is executed in sandbox; error messages feed back for iterative self-debugging. No external retrieval or special test cases required.

---

## Core Method

### Stage 1: Self-Generated Knowledge

Instead of retrieving documentation from external knowledge bases (which suffer from domain mismatch), SelfEvolve prompts the LLM to generate necessary API documentation or algorithm descriptions from its own parameters.

### Stage 2: Iterative Self-Refinement

1. Generated code wrapped with test cases from problem description
2. Executed in Python interpreter sandbox
3. If errors: error message (traceback) fed back to LLM
4. LLM revises code based on error
5. Repeats until code passes or max iterations reached

---

## Key Formulas

| Component | Formula |
|---|---|
| Standard generation | P(Y) = ∏ p_θ(Y_i \| Y_{<i}, X) |
| Knowledge-conditioned | P(Y\|K) = ∏ p_θ(Y_i \| Y_{<i}, X, K) |
| Self-generated knowledge | p(K) = ∏ p_θ(K_i \| X, K_{<i}) |
| Decomposed extraction | p(K) = ∏ p_θ(K_i \| c, K_{<i}) × p_θ(c \| X), c = trial solution |
| Revision | P(Y'\|X,Y,K,e) = p_θ(Y'\|X,Y,e) × p_θ(Y\|X,K), e = error message |

---

## Benchmarks & Results

### DS-1000 (data science code, pass@1)
| Method | Score |
|---|---|
| ChatGPT baseline | 49.4 |
| SelfEvolve (no refine) | 52.9 |
| **SelfEvolve (full)** | **57.2** (+15.8% relative) |

### HumanEval (pass@1 / pass@10)
| Method | pass@1 | pass@10 |
|---|---|---|
| ChatGPT | 74.39 | 81.10 |
| **SelfEvolve** | **85.98** | **87.81** |
| GPT-4 baseline | 89.95 | — |

### TransCoder (C++ to Python)
| Method | Accuracy | pass@1 |
|---|---|---|
| ChatGPT | 88.3 | 88.5 |
| **SelfEvolve** | **90.4** | **90.9** |

---

## Authors & Affiliations

| Author | Affiliation |
|---|---|
| **Shuyang Jiang** | Shanghai Jiao Tong University |
| **Yuhao Wang** | Shanghai AI Laboratory |
| **Yu Wang** | Shanghai Jiao Tong University / Shanghai AI Laboratory |

---

## Limitations

1. Prompting words are hand-written — may not generalize across tasks
2. Self-generated knowledge may be inaccurate for niche APIs
3. Only corrects API errors and assertion errors

---

## Citation Context

- Precedes and influences Self-Refine (similar iterative refinement concept)
- Precedes Reflexion (adds memory-based reflection on top of self-debugging)
- Foundation for later code self-evolution frameworks (DGM, AlphaEvolve)
