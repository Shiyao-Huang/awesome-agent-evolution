# OrcaReplay Model Card

| Field | Value |
|---|---|
| Repository | [Continuum-AI-Corp/OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay) |
| Category | Record–replay infrastructure for agent trajectory evaluation |
| Stars snapshot | 252 |
| Language | TypeScript |
| License | Apache-2.0 |
| Content timestamp | 2026-09-17 |
| Evidence source | Public GitHub API metadata, 2026-09-17 |
| Tags | record-replay, trajectory-capture, offline-evaluation, regression-diff, model-swap, coding-agents, reliability, evaluation-infrastructure |

## 1. Role in Self Evolve

OrcaReplay is not a self-evolving agent, and this card does not claim it is. It is measurement infrastructure for the class of systems this index surveys. It interposes an HTTP proxy/shim between an agent (or coding agent) and its model provider, writes the resulting traffic — prompts, tool calls, responses, raw bytes — to a local trace, and can then replay that recorded run offline without contacting the provider, or fork the same recording onto a different model. Its relevance to agent evolution is as a controlled-experiment harness: an evolution loop needs a fixed reference trajectory and a repeatable re-run, and record–replay supplies both at the model-API layer.

## 2. Working Principle

intercept provider traffic (HTTP proxy / shim) -> persist complete run trace locally (prompts, tool calls, responses, raw bytes) -> replay offline with no provider contact -> fork the trace onto another model -> diff two traces to expose behavioural deltas

## 3. Review-Standard Answers

- **What evolves:** nothing inside OrcaReplay. It is the substrate against which something else evolves — the agent, its prompt policy, its skill library, or the model it is routed to. The trace is the fixed baseline that makes a before/after claim possible at all.
- **What feedback signal drives it:** the recorded provider traffic itself. Capture happens at the wire boundary rather than inside the agent's own logging, so the signal includes raw request/response bytes and is not filtered or reshaped by the agent's instrumentation.
- **How improvement is verified without hiding regressions:** by replaying a frozen trace against the modified system offline and diffing the resulting trajectories. Deterministic replay removes provider nondeterminism and network variance as confounds, so a behavioural change surfaces as a concrete trace diff rather than being averaged into an aggregate score. A regression is therefore visible as a diff and cannot be traded away silently; the same mechanism supports counterfactual comparison (same trajectory, different model) and regression gating (same trajectory, new agent version).

## 4. Evidence Path

Repository metadata snapshot from the public GitHub API on 2026-09-17: 252 stars, TypeScript, Apache-2.0, repository created 2026-08-29, actively pushed. The project's README documents CI-backed support for a range of agent frameworks (OpenAI Agents SDK, OpenHands, LangGraph, Aider, Vercel AI SDK / Mastra, goose, CrewAI, LlamaIndex, Agno, smolagents, AutoGen, Strands, CAMEL, DSPy, Haystack) and an MCP server exposing the local trace library. No independent benchmark rerun, source audit, or replication of the claimed replay fidelity was performed for this card.

## 5. Limits

Submitted by a contributor affiliated with the project. Records public metadata and the project's documented mechanism only. Claims about replay determinism and coverage are the project's own and are not independently verified here; no benchmark evidence, no transfer experiment and no regression study is included. The card makes no claim that OrcaReplay performs or improves agent self-evolution — it is listed as evaluation infrastructure supporting work that does, and as such its evidence strength is low: mechanism-level documentation and public repository metadata, nothing stronger.
