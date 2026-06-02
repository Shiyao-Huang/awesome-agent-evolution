# pinchbench/skill Dual-Chain Deep Dive

> Date: 2026-06-02. Layer: `processed/analysis`. Source queue: `analysis/value-evidence-repair-queue.json`. Evidence quality: public GitHub page only; shell GitHub API remained unreachable.

## One Sentence

`pinchbench/skill` is a high-value benchmark harness for OpenClaw-style agents: it does not make agents self-evolve by itself, but it supplies the real-task evaluator, transcript retention, and leaderboard path that a self-improvement loop would need to avoid judging itself in the dark.

## Three Sentences

[KNOWN] The public GitHub page on 2026-06-02 shows `pinchbench/skill` at roughly 1.2k stars, 136 forks, 17 open issues, 383 commits, MIT license, 14 releases with latest `v2.0.0` on 2026-05-06, and a codebase spanning Python, Shell, TypeScript, and HTML. Source: `raw-github/pinchbench_skill.md`.

[KNOWN] The README makes the benchmark scope explicit: 53 real-world tasks across productivity, research, writing, coding, analysis, email, memory, and skill discovery, with automatic grading, LLM judging, and saved transcript archives. Source: `raw-github/pinchbench_skill.md`.

[INFERRED] The correct frontier role is `benchmark-harness / OpenClaw ecosystem evaluator`: PinchBench is not itself a self-evolving runtime, but it is the evaluation substrate that lets a runtime, skill pack, or harness mutation claim measurable progress on realistic tasks.

## Evidence Chain

| Link | Status | Evidence |
|---|---|---|
| Raw capture | [KNOWN] | `raw-github/pinchbench_skill.md` refreshed on 2026-06-02 with stars/forks/issues/commits/releases and README task scope. |
| Queue row | [KNOWN] | `analysis/value-evidence-repair-queue.json` lane `deep-read-needed`, `value_score: 76.43`, `repair_score: 134.43`. |
| Public model card | [KNOWN] | `projects/51-pinchbench-skill.md` and `site/public/reports/projects/51-pinchbench-skill.md`. |
| Site project data | [KNOWN] | `site/src/data/projects.ts` receives a project row in this iteration. |
| API blocker | [KNOWN] | `curl https://api.github.com/...` failed DNS resolution and `gh repo view` could not connect. |

## Mirror Chain

```json
{
  "node": "project.pinchbench.skill",
  "feature": "value-evidence-repair.deep-read",
  "intent": "Decide whether PinchBench is just an OpenClaw leaderboard accessory or a broader evaluation primitive for self-improving agents.",
  "rank_decision": "promote-to-benchmark-harness-anchor",
  "rank_confidence": "medium",
  "main_tension": "Strong benchmark/task realism vs narrow dependence on the OpenClaw execution stack.",
  "why_now": "The user keeps prioritizing skill, benchmark, and harness evidence over star totals; PinchBench is where those three threads meet.",
  "next_action": "Keep it in frontier comparison as the real-task evaluator for runtime and skill-loop projects, but do not score it as a self-evolving runtime."
}
```

## Working Principle

```mermaid
flowchart TD
  Task["53 real-world tasks"] --> Agent["OpenClaw agent run"]
  Agent --> Tools["tool calls + multistep execution"]
  Tools --> Judge["automatic grader and/or LLM judge"]
  Judge --> Result["score + result JSON"]
  Result --> Transcript["saved JSONL transcripts"]
  Result --> Leaderboard["optional upload to pinchbench.com"]
```

## Trust Chain

- [KNOWN] Public GitHub page metadata and README signals were re-read on 2026-06-02.
- [KNOWN] Shell GitHub API and `gh` remained blocked in this environment, so freshness is web-observed.
- [INFERRED] The benchmark-anchor decision comes from task scope, judging design, and transcript retention.
- [UNVERIFIED] No official leaderboard run, upload path, or local OpenClaw benchmark execution was reproduced in this pass.
