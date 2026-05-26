# Slice 03 — The Evaluation Problem in Self-Evolving AI Agents

## One-Sentence Thesis

Self-evolving agents are bottlenecked less by generation and more by evaluation: if the evaluator is weak, stale, or gameable, the system can evolve toward artifacts rather than capability.

## Reader Value

This slice helps researchers and builders separate real improvement from benchmark overfitting, reward hacking, self-confirming critiques, and demo-only progress.

## Three-Sentence Summary

The survey should make evaluation the central argument because every self-improvement loop eventually asks: "better according to whom?" Program synthesis can use tests, math can use verifiers, and web or agent tasks often rely on noisier rubrics. The more autonomous the evolution loop becomes, the more the evaluator becomes the actual product.

## Evidence Chain

| Claim | Evidence |
|---|---|
| The Chinese survey has an evaluation chapter covering benchmark hierarchy, contamination, reproducibility, evaluator dilemma, and infrastructure. | `survey/latex/chapters/ch5-evaluation.tex` |
| The English survey has evaluation and benchmark analysis. | `paper-drafts/ch5-evaluation.tex` |
| Paper and review digests repeatedly identify evaluator quality as a cross-cutting bottleneck. | `work/wiki/sources/papers-digest.md`, `work/wiki/sources/review-mechanism-insights-expanded.md` |
| Social/blog analysis also points to evaluation signal quality as a dominant pain point. | `work/wiki/sources/raw-social-blogs-mechanism-analysis.md` |

## Evaluation Ladder

| Level | Evaluation Signal | Strength | Failure Mode |
|---|---|---|---|
| E1 | Self-critique | Cheap and universal | Self-confirming hallucination |
| E2 | LLM-as-judge | Flexible | Bias, drift, preference artifacts |
| E3 | Unit tests / verifiers | Reproducible | Narrow objective, test gaming |
| E4 | Benchmarks | Comparable | Contamination, benchmark chasing |
| E5 | Deployment feedback | Real-world value | Costly, delayed, hard to isolate |
| E6 | Independent replication | Highest trust | Slow and rare |

## Public Report Shape

1. Open with the failure case: a self-improving agent can get better at satisfying its judge while getting worse at the real task.
2. Explain the evaluation ladder.
3. Compare method families by evaluator type.
4. Provide a benchmark disclosure template.
5. End with "what evidence would convince us?"

## HN Submission Candidate

Title: `The evaluation problem in self-evolving AI agents`

This should invite a high-quality HN discussion because it critiques a technical bottleneck rather than advertising a project.

## Counterexamples And Limits

Evaluation is not the only bottleneck. For long-running systems, cost, latency, safety, and state management can dominate even if the evaluator is good.

