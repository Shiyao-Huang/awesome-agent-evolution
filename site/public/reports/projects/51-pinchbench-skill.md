# PinchBench Skill Model Card

## One Sentence

PinchBench is the real-world task benchmark that connects OpenClaw-style products to measurable agent performance.

## Three Sentences

It measures agents on practical tasks such as scheduling meetings, writing code, triaging email, researching topics, managing files, recalling memory, and discovering skills. The benchmark saves session transcripts and uses automatic grading, LLM judging, or both. That makes it a crucial evaluator for the product-runtime branch of the graph.

## Model Card

| Field | Value |
|---|---|
| Repository | `pinchbench/skill` |
| Source | `raw-github/pinchbench_skill.md` |
| Category | Real-world agent task benchmark |
| Pattern | task suite -> automatic/LLM grading -> transcript analysis |
| Evidence | AnySearch GitHub extract, 2026-05-22 |

## Teaching Use

Use PinchBench to teach why product agents need realistic benchmarks. Unit tests and coding benchmarks are not enough when an agent is expected to manage email, files, meetings, memory, and research. PinchBench also shows why session transcripts should be part of evidence.

## Evidence And Limits

The raw capture reports 1.2k stars, 132 forks, MIT license, Python/TypeScript implementation, and a leaderboard at `pinchbench.com`. The next step is to extract benchmark tasks and scoring criteria into the paper's evaluation tables.
