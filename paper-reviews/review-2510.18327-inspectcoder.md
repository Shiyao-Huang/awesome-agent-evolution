# Deep Review: InspectCoder — Dynamic Analysis-Enabled Self Repair

- **Paper**: InspectCoder: Dynamic Analysis-Enabled Self Repair through Interactive LLM-Debugger Collaboration
- **arXiv**: 2510.18327
- **Authors**: Yunkun Wang et al.
- **Published**: 2025-10-21
- **Source file**: `raw-papers/2510.18327.md`
- **Review date**: 2026-05-21
- **Evolver tags**: code repair, debugger agent, dynamic analysis, process reward, tool-use evolution

## 1. Executive summary / 摘要

InspectCoder argues that LLM code repair fails because most systems rely on static semantic inspection or shallow execution logs. The paper introduces an agentic repair system where LLMs interact with a debugger: placing breakpoints, inspecting runtime state, and performing incremental experiments in stateful sessions. A dual-agent framework and InspectWare middleware enable dynamic analysis. Reported results show 5.10%–60.37% relative repair-accuracy gains over the strongest baseline on BigCodeBench-R and LiveCodeBench-R, with 1.67x–2.24x better bug-fix efficiency.

中文结论：InspectCoder is highly aligned with Mom Test complaints that tooling/harness quality matters more than raw model capability. It moves code-agent evolution from “ask the model to reason harder” to “give the agent a real debugger loop.”

## 2. Method analysis / 方法分析

The paper's key architectural move is to expose debugger actions as agent tools. Instead of one-shot repair or repeated test-log prompting, the agent can actively choose what internal state to inspect. This makes debugging closer to human practice: form a hypothesis, place a breakpoint, run, observe variables, revise the hypothesis, and patch.

The dual-agent framing separates strategic debugging from code modification. Process rewards from debugger feedback guide multi-step reasoning and reduce blind trial-and-error. InspectWare is important as infrastructure: it converts debugger state into a stable interface suitable for LLM control.

## 3. Evidence and evaluation / 证据与评估

BigCodeBench-R and LiveCodeBench-R are relevant because they evaluate repair, not just generation. Efficiency claims are especially important: many agent systems improve accuracy only by spending more calls. If InspectCoder both improves repair rate and reduces attempts, it is stronger than reflection-only repair.

However, benchmark repair tasks are still narrower than production repos with flaky tests, hidden dependencies, long setup time, and business constraints.

## 4. Claim vs Mom Test cross-validation / 论文声称 vs 社区体验交叉验证

| Paper claim | Mom Test/community counter-signal | Cross-validation judgement |
|---|---|---|
| Interactive dynamic analysis improves repair. | HN Pain Point 14 says edit/harness format matters more than model; Reddit Pain Point 26 says tooling layer is the bottleneck. | Strongly validated: the method directly invests in harness/tooling. |
| Runtime state inspection beats superficial logs. | HN Pain Point 10 says agents see only a fraction of the codebase. | Compatible: debugger state expands the observable context with precise runtime evidence. |
| Process rewards improve multi-step reasoning. | Reddit Pain Point 7 says agent evaluation is broken. | Useful but must be exposed as audit logs in Evolver demos. |
| Better repair efficiency. | HN Pain Point 23 and Reddit Pain Point 20 flag cost/speed constraints. | Practical if measured end-to-end including debugger overhead. |

## 5. Limitations / 局限性

1. **Environment dependency**: Requires runnable code, debugger support, and stable reproduction of failing cases.
2. **Language/runtime coverage**: The abstract implies debugger-centric repair; support may be strongest for Python-like environments.
3. **State overload**: Debuggers can expose too much state, requiring good context selection.
4. **Security**: Granting agents interactive debugging/control over programs creates sandbox and data-leak risks.
5. **Production complexity**: Real systems include distributed services where local debugger sessions may be insufficient.

## 6. Reproducibility / 可复现性

Reproducibility is **medium-high** if InspectWare is open-source as the raw file states. Evolver should capture supported languages, benchmark setup scripts, model versions, timeout policy, and whether repairs are validated on hidden tests.

## 7. Evolver relevance / 平台价值

InspectCoder should be a flagship paper in Evolver's **tool-grounded code evolution** category. For leaderboards, include repair success, average debugger actions, wall-clock time, token cost, hidden-test pass rate, and security isolation level.
