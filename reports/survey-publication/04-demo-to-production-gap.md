# Slice 04 — Why Self-Evolving Agents Break After the Demo

## One-Sentence Thesis

The gap between a convincing demo and a production self-evolving agent is mostly about observability, state, cost, rollback, and governance, not about one more clever prompt.

## Reader Value

This slice converts the survey's user pain points into a production checklist for teams considering agent self-improvement.

## Three-Sentence Summary

Many agent systems look impressive when the environment is small, the objective is hand-picked, and the failure is manually filtered. Production introduces long horizons, tool side effects, changing context, cost constraints, security boundaries, and humans who need to debug what happened. A valuable survey slice should therefore show what breaks, how to instrument it, and what evidence is needed before trusting self-modification.

## Evidence Chain

| Claim | Evidence |
|---|---|
| The survey includes an industry chapter and a pain-points chapter. | `survey/latex/chapters/ch6-industry.tex`, `survey/latex/chapters/ch7-painpoints.tex` |
| The English pain-points chapter maps reliability, debugging, production deployment, cost, latency, monitoring, and governance. | `paper-drafts/ch7-painpoints.tex` |
| Social/blog mechanism analysis extracts real pain points from HN, Reddit, Chinese communities, and blogs. | `work/wiki/sources/raw-social-blogs-mechanism-analysis.md` |

## Production Checklist

| Area | Question |
|---|---|
| Observability | Can we replay the trace that caused a self-update? |
| State | Where are memory, skills, prompts, and code changes stored? |
| Evaluation | What prevents the agent from optimizing the wrong metric? |
| Rollback | Can a bad self-change be reverted automatically? |
| Cost | Does improvement pay for its own search/evaluation budget? |
| Security | Can generated tools or code cross unsafe boundaries? |
| Governance | Who approves persistent changes and under what policy? |

## Public Report Shape

1. Open with "the demo is not the product; the loop is the product."
2. Give a production failure taxonomy.
3. Map each failure to required instrumentation.
4. Provide a minimal deployment readiness checklist.
5. Link to project model cards that do or do not address these requirements.

## HN Submission Candidate

Title: `Why self-evolving agents break after the demo`

This is likely useful for engineering communities and practical AI builders.

## Counterexamples And Limits

Some research systems are intentionally not production systems. This slice should avoid judging pure research by enterprise deployment standards unless the project claims practical use.

