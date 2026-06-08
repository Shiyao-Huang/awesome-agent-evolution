# MedMemoryBench Model Card

| Field | Value |
|---|---|
| Repository | [AQ-MedAI/MedMemoryBench](https://github.com/AQ-MedAI/MedMemoryBench) |
| Category | Personalized Healthcare Agent Memory Benchmark |
| Stars / forks snapshot | 60 / 1 |
| Commits / issues / PRs snapshot | 14 / 0 / 0 |
| Language | Python |
| License | Apache-2.0 |
| Latest visible dated signal | 2026-06-06 |
| Raw capture | raw-github/aq-medai_medmemorybench.md |
| Updated by | hourly public metadata update, 2026-06-09 10:20 +0800 |

## 1. Role in Self Evolve

MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately. It matters because memory claims only become meaningful when a benchmark checks whether retained context improves decisions under domain-specific risk and temporal drift.

## 2. Working Principle

construct longitudinal healthcare episodes -> require agents to recall and apply patient-specific context -> score temporal memory quality and downstream task success -> expose where memory retrieval helps or harms clinical reasoning

## 3. Evidence Path

web-observed GitHub repo pages showed 60 stars, 1 fork, 14 commits, Apache-2.0 license, 0 issues, 0 pull requests, and one release with `v1.0` latest on 2026-06-06, plus README framing around personalized healthcare memory evaluation. This run keeps freshness honest because shell GitHub API access remained blocked and no local benchmark execution was performed.

## 4. Teaching Use

Use this card to explain Personalized Healthcare Agent Memory Benchmark: it shows why memory evaluation needs longitudinal, safety-sensitive tasks instead of only generic retrieval or one-turn recall tests.

## 5. Limits

The repository was not cloned or executed in this iteration; no dataset, patient simulation, or benchmark pipeline was run locally. Counts and claims are visible public-page signals unless independently revalidated later.
