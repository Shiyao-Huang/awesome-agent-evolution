# MedMemoryBench Model Card

| Field | Value |
|---|---|
| Repository | [AQ-MedAI/MedMemoryBench](https://github.com/AQ-MedAI/MedMemoryBench) |
| Category | Personalized Healthcare Agent Memory Benchmark |
| Stars / forks snapshot | 95 / 8 |
| Commits / issues / PRs snapshot | 44 / 0 / 1 |
| Language | Python |
| License | MIT |
| Latest visible dated signal | 2026-05 |
| Raw capture | raw-github/aq-medai_medmemorybench.md |
| Updated by | hourly public metadata update, 2026-06-05 21:15 +0800 |

## 1. Role in Self Evolve

MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately. It matters because memory claims only become meaningful when a benchmark checks whether retained context improves decisions under domain-specific risk and temporal drift.

## 2. Working Principle

construct longitudinal healthcare episodes -> require agents to recall and apply patient-specific context -> score temporal memory quality and downstream task success -> expose where memory retrieval helps or harms clinical reasoning

## 3. Evidence Path

web-observed GitHub repo pages showed 95 stars, 8 forks, 44 commits, MIT license, 0 issues, and 1 pull request, plus README framing around personalized healthcare memory evaluation. The public page carried a visible `[2026.05]` update marker, and this run keeps freshness honest because shell GitHub API access remained blocked and no local benchmark execution was performed.

## 4. Teaching Use

Use this card to explain Personalized Healthcare Agent Memory Benchmark: it shows why memory evaluation needs longitudinal, safety-sensitive tasks instead of only generic retrieval or one-turn recall tests.

## 5. Limits

The repository was not cloned or executed in this iteration; no dataset, patient simulation, or benchmark pipeline was run locally. Counts and claims are visible public-page signals unless independently revalidated later.
