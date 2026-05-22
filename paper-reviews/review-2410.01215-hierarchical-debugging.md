# Deep Review: From Code to Correctness with Hierarchical Debugging

- **Paper**: From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging
- **arXiv**: 2410.01215
- **Category**: Code Self-Correction / Hierarchical debugging
- **Authors**: Yuling Shi, Songsong Wang, Chengcheng Wan, Min Wang, Xiaodong Gu
- **Published**: 2024-10-02; revised 2025-11-22
- **Primary Evidence Source**: `raw-papers/2410.01215.md`
- **Review Date**: 2026-05-21

## Bilingual Executive Summary / 双语摘要

**EN**: MGDebugger argues that LLM-generated programs fail at multiple granularities, so debugging should not treat code as one monolithic block. It decomposes code into a hierarchical tree of subfunctions, diagnoses errors bottom-up, and uses an LLM-simulated executor to trace variable states. The reported 18.9% HumanEval improvement and 97.6% HumanEvalFix repair success make it a strong code-self-correction paper.

**ZH**：MGDebugger 的核心观点是：代码错误存在不同粒度，不能把整段程序当成一个黑盒来修。它将程序拆成层次化子函数树，自底向上定位和修复错误，并用 LLM 模拟执行器追踪变量状态。其 HumanEval 与 HumanEvalFix 结果显示，分层调试是提升代码 agent 可靠性的关键方向。

## Structured Metadata for Evolver Index

| Field | Value |
|---|---|
| Evolution object | Generated program structure and repair plan |
| Feedback source | Hierarchical decomposition + simulated execution traces |
| Evaluator | HumanEval / HumanEvalFix |
| Autonomy level | Medium in code repair tasks |
| Deployment readiness | Promising for coding benchmarks; needs real repo validation |
| Key risk | Simulated executor may diverge from real execution |

## Method Analysis

MGDebugger introduces multi-granularity debugging. Instead of asking an LLM to explain and repair the whole program at once, it decomposes the code into subfunctions and constructs a hierarchy of possible error locations. The debugging process proceeds bottom-up, fixing local components before higher-level algorithmic behavior.

The LLM-simulated Python executor is designed to trace execution and variable states. This is useful when real tests are absent, but it also creates a trust boundary: simulated execution must be checked against real interpreters when possible.

## Contributions

1. **Hierarchical error localization** for generated code.
2. **Bottom-up repair strategy** matching software engineering practice.
3. **LLM-simulated execution traces** for intermediate state reasoning.
4. **Strong reported results**: 18.9% accuracy improvement over seed generations and 97.6% repair success on HumanEvalFix.
5. **Robustness across error categories**, according to raw metadata.

## Evaluation and Claims

HumanEval and HumanEvalFix are standard but limited. They test compact programming tasks rather than large codebases with dependencies, style constraints, or hidden integration behavior. The accepted-to-ICSE metadata suggests the work has strong software-engineering relevance, but Evolver should still distinguish benchmark repair from production repository repair.

## Cross-Validation Against Mom Test Community Evidence

Practitioners complain that agents rewrite code from memory, introduce subtle exact-value errors, and cannot see full codebase context. MGDebugger addresses part of the problem by making repair more structured and localized. However, it does not fully solve the “preserve exact data” or “understand repository conventions” issues. Its hierarchy must be paired with surgical editing and real test execution for production reliability.

**Verdict**: Strong benchmark-level repair method; production readiness depends on coupling with real execution, diff constraints, and repository context discovery.

## Limitations

- Simulated execution may hallucinate runtime behavior.
- Benchmarks are smaller than real-world codebases.
- Hierarchical decomposition quality determines repair quality.
- Does not directly address multi-file systems or dependency/API hallucination.

## Impact Assessment

- **Relevance to self-evolution**: ★★★★☆
- **Practical applicability**: ★★★★☆
- **Novelty**: ★★★★☆
- **Rigor**: ★★★★☆

## Key Takeaways for Evolver

MGDebugger should be categorized as structured self-repair. Evolver's benchmark pages should record whether a system debugs monolithically, hierarchically, or with real dynamic instrumentation.
