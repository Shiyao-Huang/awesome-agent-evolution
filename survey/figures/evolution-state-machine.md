# 自进化循环状态机

- generated_at: 2026-05-25
- source: `README.md` + `survey/ch3-methods-cn.md`
- model: State × Policy × Evaluator × Update

```mermaid
stateDiagram-v2
    [*] --> INIT: Deploy Agent

    INIT --> OBSERVE: Collect Trajectory
    OBSERVE --> EVALUATE: Run Evaluator

    state EVALUATE {
        [*] --> BENCHMARK: Task Score
        [*] --> HUMAN: Human Review
        [*] --> LLM_JUDGE: LLM-as-Judge
        [*] --> SELF_CHECK: Self-Critique
    }

    EVALUATE --> DECIDE: Score + Feedback

    state DECIDE {
        [*] --> IMPROVE: Score < Threshold
        [*] --> KEEP: Score ≥ Threshold
        KEEP --> ARCHIVE: Store Success
    }

    DECIDE --> UPDATE: Improve Selected

    state UPDATE {
        [*] --> PROMPT: Modify Prompt/Context
        [*] --> MEMORY: Update Memory/Experience
        [*] --> SKILL: Add/Refine Skill
        [*] --> CODE: Modify Agent Code
        [*] --> ARCH: Change Architecture
        [*] --> POLICY: Adjust RL Policy
    }

    UPDATE --> VERIFY: Regression Test

    state VERIFY {
        [*] --> PASS: All Tests Pass
        [*] --> FAIL: Regression Detected
        FAIL --> ROLLBACK: Revert Change
        ROLLBACK --> OBSERVE: Log Failure
    }

    PASS --> ARCHIVE_SUCCESS: Commit + Archive
    ARCHIVE_SUCCESS --> OBSERVE: Continue Evolution

    note right of UPDATE
        Mutable Objects:
        prompt · memory · skill
        code · architecture · policy
    end note

    note left of EVALUATE
        Selection Pressure:
        benchmark · human · LLM-judge
        self-critique · cost · safety
    end note
```

## State Machine Components

| Component | Role | Examples |
|-----------|------|----------|
| State | Current agent configuration | prompt, memory, code, architecture |
| Policy | Decision to update or keep | threshold, diversity, cost budget |
| Evaluator | Selection pressure | SWE-Bench, HumanEval, LLM-Judge |
| Update | What changes | prompt, memory, skill, code, arch, policy |
| Verify | Regression check | test suite, safety scan, cost check |
| Archive | Provenance | lineage, rollback point, evidence |
