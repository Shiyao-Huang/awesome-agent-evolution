# Hermes Agent Self-Evolution Model Card

## One Sentence

Hermes Agent Self-Evolution turns Hermes skills, prompts, tool descriptions, and code into explicit evolutionary search objects.

## Three Sentences

The repository uses DSPy and GEPA to generate candidate variants, evaluate them, and select better versions. It is valuable because it makes the improvement surface concrete: the agent does not vaguely "learn"; a skill or prompt changes under evaluator pressure. It also helps connect personal-agent products with benchmarkable self-improvement loops.

## Model Card

| Field | Value |
|---|---|
| Repository | `NousResearch/hermes-agent-self-evolution` |
| Source | `raw-github/nousresearch_hermes-agent-self-evolution.md` |
| Category | Skill and prompt evolution |
| Pattern | execution traces -> GEPA/DSPy variants -> evaluation -> selected improvement |
| Evidence | GitHub raw capture, 2026-05 |

## Teaching Use

Use this project to teach the difference between "agent has skills" and "agent evolves skills." The first is a library problem; the second is an evaluator and lineage problem. Hermes Self-Evolution is a clean example of a no-GPU, API-driven optimization loop over agent artifacts.

## Evidence And Limits

The raw capture reports roughly 3.4k stars, 370 forks, Python implementation, and a design focused on DSPy + GEPA. The main missing evidence is whether reported gains are reproducible across tasks and whether failed variants are archived for regression analysis.
