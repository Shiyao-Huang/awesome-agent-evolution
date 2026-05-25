# Skillgrade Agent Skill Evaluation Model Card

| Field | Value |
|---|---|
| Repository | [mgechev/skillgrade](https://github.com/mgechev/skillgrade) |
| Category | Agent Skill Evaluation Harness |
| Stars / forks snapshot | 490 / 35 |
| Language | TypeScript |
| License | MIT |
| Raw capture | raw-github/mgechev_skillgrade.md |
| Updated by | hourly public metadata update, 2026-05-26 00:36 +0800 |

## 1. Role in Self Evolve

Skillgrade turns Agent Skills into testable assets: the agent must discover and use a skill correctly under repeatable smoke, reliability or regression trials.

## 2. Working Principle

SKILL.md package -> eval.yaml tasks and graders -> sandboxed agent trials -> deterministic / LLM-rubric score -> pass-rate gate for skill promotion

## 3. Evidence Path

Web-observed GitHub page showed 490 stars, 35 forks, MIT license, TypeScript/Node.js project structure and README instructions for initializing evals, running smoke/reliable/regression presets, using deterministic and LLM rubric graders, and targeting Gemini, Claude, Codex, ACP or OpenCode agents. Shell GitHub API access was not used for this snapshot, so this card treats counts and claims as public-page observed rather than API-verified.

## 4. Teaching Use

Use this card to explain why skill evolution needs a validation harness: without repeatable task definitions and pass thresholds, a skill registry cannot distinguish reusable know-how from prompt-file accumulation.

## 5. Limits

The repository was not cloned in this iteration; no Skillgrade run, Docker trial, agent execution, CI gate or evaluator calibration was performed. Counts and claims are visible public-page signals unless independently revalidated later.
