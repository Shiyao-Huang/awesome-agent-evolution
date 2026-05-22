# Agent Symbolic Learning Enables Self-Evolving Agents

> arXiv: 2406.18532 | NeurIPS 2024 | AIWaves Inc. + Zhejiang University
> Source: Full HTML extraction from arxiv.org

---

## Summary

Treats agents as symbolic networks where learnable "weights" are prompts, tools, and pipeline composition. Mimics backpropagation and gradient descent in natural language space, enabling agents to self-evolve after deployment without weight updates.

---

## Core Method

### Agent as Symbolic Network

An agent is parameterized as:
- **Prompt nodes** (𝒫): System prompts, persona descriptions, task instructions
- **Tool nodes** (𝒯): Function definitions and tool descriptions
- **Pipeline nodes** (ℐ, 𝒪): Input/output connections between nodes

### Algorithm 1: Agent Symbolic Learning Framework

```
1. Forward Pass: Execute agent on task → trajectory τ
2. Language Loss: ℒ_lang = LLM(𝒫_loss(τ))
3. Language Gradient Backprop:
   For each layer n (from output to input):
     ∇_lang^n = LLM(𝒫_gradient(∇_lang^{n+1}, ℐ_n, 𝒪_n, 𝒫_n, 𝒯_n, ℒ_lang))
4. Weight Update:
   - PromptOptimizer: Δ𝒫 = LLM(𝒫_update(𝒫, ∇_lang))
   - ToolOptimizer: Δ𝒯 = LLM(𝒫_update(𝒯, ∇_lang))
   - PipelineOptimizer: Δℐ, Δ𝒪 = LLM(𝒫_update(ℐ, 𝒪, ∇_lang))
```

### Key Innovation

The "language gradient" ∇_lang is a natural language description of how to improve each component, propagated backward through the agent's computational graph — analogous to backpropagation but operating entirely in text space.

---

## Key Formulas

| Component | Formula |
|---|---|
| Language Loss | ℒ_lang = LLM(𝒫_loss(trajectory)) |
| Gradient (layer n) | ∇_lang^n = LLM(𝒫_gradient(∇_lang^{n+1}, node_info_n, ℒ_lang)) |
| Weight Update | θ_new = Optimizer(θ_old, ∇_lang, learning_rate) |
| Symbolic Optimizers | PromptOptimizer, ToolOptimizer, PipelineOptimizer |

---

## Benchmarks & Results

### HotPotQA (multi-hop QA)
| Method | F1 | EM |
|---|---|---|
| Agents (baseline) | 36.2 | 22.8 |
| DSPy | 37.4 | 24.1 |
| **Symbolic Learning** | **39.1** | **25.6** |

### MATH (mathematical reasoning, GPT-4 backbone)
| Method | Accuracy |
|---|---|
| Agents | 56.0% |
| DSPy | 48.4% |
| **Symbolic Learning** | **60.7%** |

### HumanEval (code generation)
| Method | Pass@1 |
|---|---|
| Agents | 68.3% |
| **Symbolic Learning** | **73.2%** |

### Software Development (1-4 executability score)
| Method | Avg Score |
|---|---|
| GPTs | 1.6 |
| Agents | 2.4 |
| **Symbolic Learning** | **3.8** |

### Creative Writing (GPT-4 judge, 1-10 scale)
| Method | Score |
|---|---|
| Tree of Thought | 6.8 |
| **Symbolic Learning** | **7.4** |

---

## Authors & Affiliations

| Author | Affiliation |
|---|---|
| **Wangchunshu Zhou** (1st) | AIWaves Inc. |
| Yixin Ou | AIWaves Inc. |
| Shengwei Ding | AIWaves Inc. |
| Long Li | AIWaves Inc. |
| Jialong Wu | AIWaves Inc. |
| Tiannan Wang | AIWaves Inc. |
| Jiamin Chen | AIWaves Inc. |
| Shuai Wang | AIWaves Inc. |
| Xiaohua Xu | Zhejiang University |
| **Ningyu Zhang** | Zhejiang University |
| **Huajun Chen** | Zhejiang University |
| **Yuchen Eleanor Jiang** | AIWaves Inc. |

- **Code**: https://github.com/aiwaves-cn/agents

---

## Limitations

1. Requires strong LLM backbone for gradient computation (GPT-4 level)
2. Optimization quality depends on prompt design for loss/gradient/update templates
3. No theoretical convergence guarantees for language-space optimization
4. Computational cost: multiple LLM calls per training step (forward + loss + backprop + update)

---

## Citation Context

- Extends DSPy's prompt optimization concept to full agent architecture
- Related to Reflexion (verbal RL) but uses structured backpropagation instead of episode-level reflection
- Precedes work on code-level self-modification (DGM, Gödel Agent)
