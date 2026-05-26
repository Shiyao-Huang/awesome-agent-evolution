# Slice 02 — Which AI Agents Actually Self-Improve?

## One-Sentence Thesis

The useful question is not whether a repository says "evolution"; it is whether the system has a closed loop that changes its own behavior, preserves the change, and improves under an external or reproducible evaluator.

## Reader Value

This slice gives developers a triage rubric for GitHub repos: what is genuine self-evolution, what is guided optimization, and what is mostly branding.

## Three-Sentence Summary

The project corpus shows that names and README claims are weak evidence. Stronger evidence comes from loop structure: generate or act, evaluate, select or update, preserve, and re-test on held-out tasks. The release should teach readers how to inspect a repo in five minutes before trusting stars, demos, or screenshots.

## Evidence Chain

| Claim | Evidence |
|---|---|
| The wiki digest records 531 GitHub projects, a seven-class taxonomy, five structural factors, and an estimate that only a minority are genuine self-evolution systems. | `work/wiki/sources/github-digest.md` |
| The full project grading page covers hundreds of projects and distinguishes TRUE/GUIDED/PSEUDO patterns. | `work/wiki/sources/project-evolution-grading-full.md`, `work/wiki/sources/raw-github-mechanisms-full.md` |
| Published model cards and project reports provide individual evidence trails. | `projects/`, `site/public/reports/projects/` |

## Rubric

| Rank | What Changes? | Evidence Required | Example Pattern |
|---|---|---|---|
| L0 | Nothing persistent | Static agent framework or prompt wrapper | Tool orchestration |
| L1 | Prompt/context | Logs showing iterative prompt or trace updates | Reflection loop |
| L2 | Memory/skills | Saved memory, skill library, retrieval updates | Voyager-like skill accumulation |
| L3 | Architecture/code | Generated modules, tests, archive, rollback | ADAS/DGM-like search |
| L4 | Training distribution | Reward/evaluation data changes future model behavior | Self-rewarding or RL-style loop |
| L5 | Open-ended self-directed evolution | Novel objectives, safety gates, durable archive, independent validation | Rare/aspirational |

## Public Report Shape

1. Start with a concrete repo-inspection story.
2. Show the L0-L5 rubric.
3. Explain five structural factors: evaluator, update target, persistence, diversity/archive, rollback/safety.
4. Give examples of true, guided, and pseudo evolution.
5. Link to the project search and model cards.

## HN Submission Candidate

Title: `Which AI agents actually self-improve?`

This is likely the strongest HN regular submission because it gives developers an immediate diagnostic tool.

## Counterexamples And Limits

Some useful projects are not self-evolving and should not be penalized for that. The goal is accurate labeling, not dismissing frameworks that are valuable as infrastructure.

