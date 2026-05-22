# Mom Test Findings — Agent Evolution / Self-Evolving Agents

> Methodology: The Mom Test — extract real user pain points from actual discussions, not opinions.
> Sources: 131 posts analyzed (Reddit 62, HN 46, X/Twitter 23)
> Date: 2026-05-21

## Summary

**97 distinct pain points** extracted across 3 platforms, grouped into **15 categories**.

### Top Pain Points by Frequency

| # | Category | Count | Severity |
|---|----------|-------|----------|
| 1 | Agent Reliability in Production | 12 | Critical |
| 2 | Self-Improvement Feasibility | 12 | Critical |
| 3 | Framework/Tooling Gaps | 11 | High |
| 4 | Evaluation & Benchmarking | 9 | High |
| 5 | Knowledge & Memory Persistence | 10 | High |
| 6 | Safety, Security & Cost | 7 | Critical |
| 7 | Human-Agent Collaboration | 5 | Medium |
| 8 | Real-World Deployment Gap | 5 | High |
| 9 | Misevolution / Unintended Evolution | 3 | Critical |
| 10 | Definitions & Standards Gap | 3 | Medium |
| 11 | Practitioner Accessibility | 2 | Medium |
| 12 | Production Proof Gap | 2 | Critical |
| 13 | Enterprise Governance | 1 | High |
| 14 | Interaction Model Mismatch | 3 | Medium |
| 15 | Modest Absolute Gains | 1 | Medium |

### Cross-Platform Themes

#### Theme 1: "It works in demo, fails in production"
- Reddit: "80% reliability ceiling" — agents pass benchmarks but fail in real workflows
- HN: "Nobody can demonstrate real production success with self-improving agents"
- X: Improvement percentages are modest despite huge complexity (DGM: 20%→50% on SWE-bench)

#### Theme 2: "Self-improvement is a myth (for now)"
- Reddit: "Feedback loops require human labor, drift, plateau without verifiers"
- HN: "LLMs are bad at prompting other LLMs, the prompt search space is too large"
- X: "Agents cannot reliably identify their own weaknesses"

#### Theme 3: "Frameworks get abandoned"
- Reddit: "Zero prompt visibility, 1GB dependency bloat, state management nightmares"
- HN: "LangChain abstractions hide debugging, frameworks fail in production"
- X: "Incompatible, monolithic approaches with no modularity"

#### Theme 4: "Benchmarks are gamed"
- Reddit: "No session-level evals, benchmarks ignore 92% of labor"
- HN: "SWE-Bench is contaminated/saturated/gameable, Goodhart's Law applies to every metric"
- X: "Research optimizes for benchmarks, not real-world value"

#### Theme 5: "Self-modification is dangerous"
- Reddit: "RCE vulnerabilities in open platforms, agents burning $2K overnight"
- HN: "Self-modification is a prompt injection attack vector"
- X: "Agents evolve in harmful, unintended directions"

---

## Detailed Findings

- [Reddit Findings (47 pain points)](mom-test-findings-reddit.md)
- [HN Findings (36 pain points)](mom-test-findings-hn.md)
- [X/Twitter Findings (14 pain points)](mom-test-findings-x.md)

## Methodology Notes

All findings follow The Mom Test principles:
1. Extract from actual user experiences, not theoretical opinions
2. Focus on what users DID, not what they SAY they want
3. Identify workarounds as evidence of unmet needs
4. Quote exact user language for authenticity

## Implications for Awesome-Evolution List

Based on these findings, the most valuable resources for users would be:
1. **Production-ready frameworks** with proven deployment track records
2. **Evaluation toolkits** that go beyond benchmarks
3. **Safety/governance patterns** for self-modifying agents
4. **Memory architectures** that don't bloat context
5. **Practical self-improvement** patterns that work without human-in-the-loop verification
