# Slice 01 — A Map of Self-Evolving AI Agents

## One-Sentence Thesis

Self-evolving AI is not one method; it is a stack of feedback loops that observe behavior, evaluate outcomes, change internal state or code, and preserve improvements across tasks.

## Reader Value

This slice gives readers a shared vocabulary so they can stop comparing unlike things: Reflexion-style memory, Self-Refine-style critique, ADAS-style architecture search, DGM-style code evolution, and AlphaEvolve-style evolutionary discovery are related, but they do not modify the same object.

## Three-Sentence Summary

The survey's first value is a map: what evolves, who evaluates it, where memory lives, and whether the update survives beyond one prompt. Many projects call themselves "self-improving" while only changing context, prompts, or task traces; stronger systems change skills, code, architecture, weights, or archives. The field should be read as a hierarchy of loops, not as a binary label.

## Evidence Chain

| Claim | Evidence |
|---|---|
| The survey frames agent self-evolution across theory, methods, systems, evaluation, industry, pain points, and future directions. | `survey/latex/main.tex` |
| The wiki has explicit mechanism concepts: self-observation, self-evaluation, self-improvement, multi-agent co-evolution, and emergent behavior. | `work/wiki/index.md`, `work/wiki/concepts/*.md` |
| The 5D framework separates method, effect, implementation, evolution order, and evidence grade. | `work/wiki/sources/essential-taxonomy-framework.md` |

## Public Report Shape

1. Start with the confusion: "self-evolving" can mean prompt rewriting, memory updates, policy training, architecture search, or code mutation.
2. Show the five-loop map in one diagram.
3. Give a comparison table: update target, evaluator, persistence, examples, risk.
4. End with a diagnostic checklist readers can apply to any new project.

## HN Submission Candidate

Title: `A map of self-evolving AI agents`

Submit as a regular link, not Show HN, unless the page foregrounds the interactive graph/search tool.

## Counterexamples And Limits

This slice should not claim that all systems are comparable by a single benchmark. It should explicitly say that language-agent reflection, evolutionary code search, and training-time self-improvement optimize different objects and require different evidence.

