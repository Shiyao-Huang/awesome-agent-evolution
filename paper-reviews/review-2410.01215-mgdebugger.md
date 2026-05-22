# Deep Review: MGDebugger — Hierarchical Debugging for Code Generation

- **Paper**: From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging
- **arXiv**: 2410.01215
- **Authors**: Yuling Shi, Songsong Wang, Chengcheng Wan, Min Wang, Xiaodong Gu
- **Published**: 2024-10-02; revised 2025-11-22; ICSE 2026 metadata
- **Source file**: `raw-papers/2410.01215.md`
- **Review date**: 2026-05-21
- **Evolver tags**: hierarchical debugging, code repair, simulated executor, multi-granularity agent

## 1. Executive summary / 摘要

MGDebugger addresses the “last mile” of code generation: LLM-generated code often fails on subtle errors even when the overall structure is close. The paper argues that existing systems treat programs as monoliths, missing bugs at different granularities. MGDebugger decomposes code into a hierarchy of subfunctions, diagnoses errors bottom-up, and uses an LLM-simulated Python executor to trace variable states. The raw file reports an 18.9% accuracy improvement over seed generations on HumanEval and 97.6% repair success on HumanEvalFix.

中文结论：MGDebugger 的关键价值是把代码修复拆成可定位、可分层验证的过程。这与 Evolver 的平台目标一致：排行榜不能只看最终 pass/fail，还要看 agent 是否能定位错误粒度、保留上下文、避免盲改。

## 2. Method analysis / 方法分析

The hierarchical tree is the main abstraction. By isolating subfunctions, the debugger can reason at syntax, local logic, function, and algorithm levels. Bottom-up repair reduces the chance that a high-level patch masks a low-level bug. The LLM-simulated executor is a notable design: rather than always running code, it can trace execution and variable states in language, potentially enabling debugging when full execution is unavailable.

This design sits between pure static review and full debugger control. Compared with InspectCoder, MGDebugger emphasizes decomposition and simulated execution; InspectCoder emphasizes interactive real debugger sessions.

## 3. Evidence and evaluation / 证据与评估

HumanEval and HumanEvalFix provide a standard repair setting and the reported repair success is strong. The ICSE 2026 acceptance metadata indicates software-engineering relevance. Still, HumanEvalFix is small compared with real production repos, and simulated execution can hallucinate variable states unless checked against real execution.

## 4. Claim vs Mom Test cross-validation / 论文声称 vs 社区体验交叉验证

| Paper claim | Mom Test/community counter-signal | Cross-validation judgement |
|---|---|---|
| Multi-granularity debugging improves repair. | HN Pain Point 10 says agents only see a fraction of code; Reddit Pain Point 30 says agents collapse when inputs are unpredictable. | Strongly relevant: hierarchy gives agents a structured context window. |
| Simulated executor can trace states. | HN Pain Point 1 says agents fabricate APIs and cannot self-correct. | Risky unless simulation is verified; real execution should be preferred when possible. |
| High HumanEvalFix repair success. | HN Pain Point 15 says benchmarks are saturated/gameable. | Good benchmark result, but needs hidden and repo-scale tests. |
| Robust across bug categories. | HN Pain Point 29 says misleading variable names cause bad code. | Category coverage helps, but semantic naming pitfalls need explicit tests. |

## 5. Limitations / 局限性

1. **Simulated execution hallucination**: LLM-traced states can be wrong.
2. **Function decomposition assumptions**: Some bugs are cross-cutting, global, or architectural.
3. **Small benchmark risk**: HumanEval-style tasks are not production repos.
4. **Maintenance overhead**: Building hierarchical trees and analyzing subfunctions costs tokens and time.
5. **Bottom-up blind spots**: Algorithmic design errors may not appear at local subfunction levels.

## 6. Reproducibility / 可复现性

Reproducibility is **medium-high** if ICSE artifact materials are available. Evolver should capture benchmark split, seed generations, decomposition prompts, executor prompt, and whether real execution was used to verify simulated traces.

## 7. Evolver relevance / 平台价值

MGDebugger supports Evolver's future code-agent leaderboard. Recommended metrics: localization accuracy, repair success, hidden-test pass rate, number of modified lines, subfunction trace correctness, and regression rate after patching.
