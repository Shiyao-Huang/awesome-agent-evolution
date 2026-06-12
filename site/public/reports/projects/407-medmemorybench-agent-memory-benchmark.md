# MedMemoryBench Model Card

| Field | Value |
|---|---|
| Repository | [AQ-MedAI/MedMemoryBench](https://github.com/AQ-MedAI/MedMemoryBench) |
| Category | Personalized Healthcare Agent Memory Benchmark |
| Stars / forks snapshot | 60 / 1 |
| Commits / issues / PRs snapshot | 14 / 0 / 0 |
| Language | Python |
| License | Apache-2.0 |
| Latest visible dated signal | 2026-05-13 GitHub API snapshot |
| Raw capture | raw-github/aq-medai_medmemorybench.md |
| Updated by | hourly public metadata update, 2026-06-13 02:15 +0800 |

## 1. Role in Self Evolve

MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately. It matters because memory claims only become meaningful when a benchmark checks whether retained context improves decisions under domain-specific risk and temporal drift.

## 2. Working Principle

construct longitudinal healthcare episodes -> require agents to recall and apply patient-specific context -> score temporal memory quality and downstream task success -> expose where memory retrieval helps or harms clinical reasoning

## 3. Evidence Path

GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 60 stars, 1 fork, 0 open issues, 0 open pull requests, 14 commits on `main`, latest push at 2026-05-13T13:26:05Z, Apache-2.0 license, and no GitHub releases. The snapshot also showed no GitHub releases visible in the API snapshot. This run keeps freshness honest because it uses authenticated GitHub API data rather than stale local summaries.

## 4. Teaching Use

Use this card to explain Personalized Healthcare Agent Memory Benchmark: it shows why memory evaluation needs longitudinal, safety-sensitive tasks instead of only generic retrieval or one-turn recall tests.

## 5. Limits

The repository was not cloned or executed in this iteration; no dataset, patient simulation, or benchmark pipeline was run locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.
