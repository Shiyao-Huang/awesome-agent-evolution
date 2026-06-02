# Frontier Value Queue

> Generated: 2026-06-02T17:22:27.273Z. Source: `analysis/github-project-data-analysis.json` generated 2026-06-02T17:22:15.277Z.

## One Sentence

The frontier queue turns the dual-chain protocol into a repeatable project triage table: current projects are separated into code-ready, clone-needed, metadata-refresh, baseline, and parked lanes before humans or agents spend deep-reading time.

## Three Sentences

The queue scores 273 analyzed projects with 40% recency, 20% continuity, 15% self-evolution gap fit, 10% implementation evidence, 10% discourse/resource signal, and 5% usefulness. It preserves the existing current-value ranking as one input, then adds local clone readiness, raw timestamp evidence, project reports, 2026 star-growth coverage, and Self Mirror style rank decisions. Because this run is offline, remote issues/PRs/releases are not silently assumed; projects needing that step are marked with explicit next actions.

## Lane Counts

| lane | count |
| --- | --- |
| metadata-refresh | 116 |
| watch-current-raw | 77 |
| park-for-later | 43 |
| historical-baseline | 17 |
| frontier-clone-needed | 15 |
| frontier-code-ready | 5 |

## Top Frontier Queue

| rank | project | score | lane | created | raw time | star growth | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | 76.83 | frontier-code-ready | 2025-11-13 | 2026-05 | fetch #122 | yes | fresh time signal; active continuity signal; strong OIMVR gap fit; local clone ready | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 2 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 71.18 | frontier-clone-needed | 2026-04-18 | unknown | 45 new | no | fresh time signal; active continuity signal; strong OIMVR gap fit | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 3 | [manthanguptaa/water](https://github.com/manthanguptaa/water) | 61.30 | frontier-clone-needed | unknown | 2026-06 | missing_from_star_history | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> rebuild star-history seed and fetch stargazer events -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 4 | [MemTensor/skills-vote](https://github.com/MemTensor/skills-vote) | 60.85 | frontier-clone-needed | unknown | 2026-05 | fetch #262 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 5 | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | 60.45 | frontier-clone-needed | unknown | 2026-05 | fetch #351 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 6 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 60.40 | frontier-code-ready | 2025-07-11 | 2026-05 | fetch #257 | yes | local clone ready; raw 2026-05 | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 7 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 60.29 | frontier-code-ready | 2025-10-14 | unknown | fetch #359 | yes | fresh time signal; local clone ready; gap-fit weak | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 8 | [longmans/self-evolve](https://github.com/longmans/self-evolve) | 60.10 | frontier-clone-needed | unknown | 2026-06 | fetch #361 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 9 | [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 60.10 | frontier-clone-needed | unknown | 2026-05 | fetch #149 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 10 | [ai-agents-2030/darwin-mobile-agent](https://github.com/ai-agents-2030/darwin-mobile-agent) | 60.10 | frontier-clone-needed | unknown | 2026-05 | fetch #535 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 11 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 59.71 | frontier-code-ready | 2025-05-15 | unknown | fetch #74 | yes | local clone ready; gap-fit weak | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 12 | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 59.15 | frontier-clone-needed | unknown | 2026-05 | fetch #91 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 13 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 59.12 | frontier-clone-needed | 2026-03-12 | unknown | fetch #428 | no | fresh time signal | fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 14 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 58.95 | frontier-code-ready | unknown | 2026-05 | fetch #8 | yes | active continuity signal; local clone ready; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 15 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 58.90 | frontier-clone-needed | unknown | 2026-05 | fetch #71 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 16 | [aiming-lab/ClawArena](https://github.com/aiming-lab/ClawArena) | 58.60 | frontier-clone-needed | unknown | 2026-05 | fetch #421 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 17 | [zikuicai/aegisllm](https://github.com/zikuicai/aegisllm) | 58.30 | frontier-clone-needed | unknown | 2026-05 | fetch #450 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 18 | [BerriAI/self-improving-agent](https://github.com/BerriAI/self-improving-agent) | 58.30 | frontier-clone-needed | unknown | 2026-05 | fetch #567 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 19 | [pinchbench/skill](https://github.com/pinchbench/skill) | 56.65 | metadata-refresh | unknown | 2026-06 | fetch #134 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 20 | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) | 56.65 | metadata-refresh | unknown | 2026-05 | fetch #374 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 21 | [Arc-Computer/CL-Bench](https://github.com/Arc-Computer/CL-Bench) | 56.65 | metadata-refresh | unknown | 2026-06 | missing_from_star_history | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> rebuild star-history seed and fetch stargazer events -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 22 | [pegasi-ai/reins](https://github.com/pegasi-ai/reins) | 56.60 | metadata-refresh | unknown | 2026-06 | fetch #378 | no | active continuity signal; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 23 | [RyanAlberts/best-of-Agent-Harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) | 55.65 | metadata-refresh | unknown | 2026-05 | fetch #426 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 24 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 55.40 | metadata-refresh | unknown | 2026-05 | fetch #136 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 25 | [AutoJunjie/awesome-agent-harness](https://github.com/AutoJunjie/awesome-agent-harness) | 55.25 | metadata-refresh | unknown | 2026-05 | fetch #216 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 26 | [Da1yuqin/SEAD](https://github.com/Da1yuqin/SEAD) | 55.15 | metadata-refresh | unknown | 2026-05 | fetch #494 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 27 | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #66 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 28 | [InternScience/InternAgent](https://github.com/InternScience/InternAgent) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #127 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 29 | [nomic-ai/aec-bench](https://github.com/nomic-ai/aec-bench) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #412 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 30 | [sachinsharma9780/memweave](https://github.com/sachinsharma9780/memweave) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #439 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |

## Code-Ready Frontier

| rank | project | score | lane | created | raw time | star growth | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | 76.83 | frontier-code-ready | 2025-11-13 | 2026-05 | fetch #122 | yes | fresh time signal; active continuity signal; strong OIMVR gap fit; local clone ready | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 6 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 60.40 | frontier-code-ready | 2025-07-11 | 2026-05 | fetch #257 | yes | local clone ready; raw 2026-05 | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 7 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 60.29 | frontier-code-ready | 2025-10-14 | unknown | fetch #359 | yes | fresh time signal; local clone ready; gap-fit weak | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 11 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 59.71 | frontier-code-ready | 2025-05-15 | unknown | fetch #74 | yes | local clone ready; gap-fit weak | fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 14 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 58.95 | frontier-code-ready | unknown | 2026-05 | fetch #8 | yes | active continuity signal; local clone ready; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |

## Clone-Needed Frontier

| rank | project | score | lane | created | raw time | star growth | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| 2 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 71.18 | frontier-clone-needed | 2026-04-18 | unknown | 45 new | no | fresh time signal; active continuity signal; strong OIMVR gap fit | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 3 | [manthanguptaa/water](https://github.com/manthanguptaa/water) | 61.30 | frontier-clone-needed | unknown | 2026-06 | missing_from_star_history | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> rebuild star-history seed and fetch stargazer events -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 4 | [MemTensor/skills-vote](https://github.com/MemTensor/skills-vote) | 60.85 | frontier-clone-needed | unknown | 2026-05 | fetch #262 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 5 | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | 60.45 | frontier-clone-needed | unknown | 2026-05 | fetch #351 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 8 | [longmans/self-evolve](https://github.com/longmans/self-evolve) | 60.10 | frontier-clone-needed | unknown | 2026-06 | fetch #361 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 9 | [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 60.10 | frontier-clone-needed | unknown | 2026-05 | fetch #149 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 10 | [ai-agents-2030/darwin-mobile-agent](https://github.com/ai-agents-2030/darwin-mobile-agent) | 60.10 | frontier-clone-needed | unknown | 2026-05 | fetch #535 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 12 | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 59.15 | frontier-clone-needed | unknown | 2026-05 | fetch #91 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 13 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 59.12 | frontier-clone-needed | 2026-03-12 | unknown | fetch #428 | no | fresh time signal | fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 15 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 58.90 | frontier-clone-needed | unknown | 2026-05 | fetch #71 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 16 | [aiming-lab/ClawArena](https://github.com/aiming-lab/ClawArena) | 58.60 | frontier-clone-needed | unknown | 2026-05 | fetch #421 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 17 | [zikuicai/aegisllm](https://github.com/zikuicai/aegisllm) | 58.30 | frontier-clone-needed | unknown | 2026-05 | fetch #450 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 18 | [BerriAI/self-improving-agent](https://github.com/BerriAI/self-improving-agent) | 58.30 | frontier-clone-needed | unknown | 2026-05 | fetch #567 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 44 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 52.70 | frontier-clone-needed | unknown | 2026-05 | fetch #47 | no | active continuity signal; created_at missing; raw 2026-05; gap-fit weak | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 62 | [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | 51.56 | frontier-clone-needed | 2025-12-18 | unknown | fetch #382 | no | fresh time signal; gap-fit weak | fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |

## Metadata Refresh Queue

| rank | project | score | lane | created | raw time | star growth | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| 19 | [pinchbench/skill](https://github.com/pinchbench/skill) | 56.65 | metadata-refresh | unknown | 2026-06 | fetch #134 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 20 | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) | 56.65 | metadata-refresh | unknown | 2026-05 | fetch #374 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 21 | [Arc-Computer/CL-Bench](https://github.com/Arc-Computer/CL-Bench) | 56.65 | metadata-refresh | unknown | 2026-06 | missing_from_star_history | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> rebuild star-history seed and fetch stargazer events -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 22 | [pegasi-ai/reins](https://github.com/pegasi-ai/reins) | 56.60 | metadata-refresh | unknown | 2026-06 | fetch #378 | no | active continuity signal; created_at missing; raw 2026-06 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 23 | [RyanAlberts/best-of-Agent-Harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) | 55.65 | metadata-refresh | unknown | 2026-05 | fetch #426 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 24 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 55.40 | metadata-refresh | unknown | 2026-05 | fetch #136 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 25 | [AutoJunjie/awesome-agent-harness](https://github.com/AutoJunjie/awesome-agent-harness) | 55.25 | metadata-refresh | unknown | 2026-05 | fetch #216 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 26 | [Da1yuqin/SEAD](https://github.com/Da1yuqin/SEAD) | 55.15 | metadata-refresh | unknown | 2026-05 | fetch #494 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 27 | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #66 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 28 | [InternScience/InternAgent](https://github.com/InternScience/InternAgent) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #127 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 29 | [nomic-ai/aec-bench](https://github.com/nomic-ai/aec-bench) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #412 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 30 | [sachinsharma9780/memweave](https://github.com/sachinsharma9780/memweave) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #439 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 31 | [zjunlp/SkillX](https://github.com/zjunlp/SkillX) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #300 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 32 | [InternScience/Awesome-Scientific-Skills](https://github.com/InternScience/Awesome-Scientific-Skills) | 54.70 | metadata-refresh | unknown | 2026-05 | fetch #227 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 33 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 54.64 | metadata-refresh | unknown | 2026-05 | fetch #142 | yes | active continuity signal; strong OIMVR gap fit; local clone ready; created_at missing | refresh GitHub API metadata -> fetch stargazer history for 2026 growth coverage -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |

## Dual-Chain Packet Shape

```yaml
- repo: modelscope/AgentEvolver
  frontier_rank: 1
  lane: frontier-code-ready
  evidence_chain:
    raw_capture: raw-github/modelscope_agentevolver.md
    local_mirror: repos/modelscope__agentevolver
    public_report: site/public/reports/projects/modelscope__agentevolver.md
    star_growth: not_fetched
  mirror_chain:
    node: project.modelscope.agentevolver
    value_gap: [observe, interpret, modify, verify]
    rank_decision: promote-code-scan
    caveats: [star_history_not_fetched]
- repo: ZJU-LLM-Safety/DARWIN
  frontier_rank: 2
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: null
    local_mirror: null
    public_report: site/public/reports/projects/zju_llm_safety__darwin.md
    star_growth: complete_or_near_complete
  mirror_chain:
    node: project.zju.llm.safety.darwin
    value_gap: [interpret, modify, verify, retain, rollback]
    rank_decision: promote-clone-then-scan
    caveats: [local_clone_missing]
- repo: manthanguptaa/water
  frontier_rank: 3
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: raw-github/manthanguptaa_water.md
    local_mirror: null
    public_report: site/public/reports/projects/375-water-self-improving-coding-agent.md
    star_growth: missing_from_star_history
  mirror_chain:
    node: project.manthanguptaa.water
    value_gap: [observe, modify, verify, retain, rollback]
    rank_decision: promote-clone-then-scan
    caveats: [created_at_unverified, local_clone_missing, star_history_missing]
- repo: MemTensor/skills-vote
  frontier_rank: 4
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: raw-github/memtensor_skills-vote.md
    local_mirror: null
    public_report: site/public/reports/projects/350-skills-vote-evolution-benchmark.md
    star_growth: not_fetched
  mirror_chain:
    node: project.memtensor.skills.vote
    value_gap: [observe, interpret, modify, verify, retain]
    rank_decision: promote-clone-then-scan
    caveats: [created_at_unverified, local_clone_missing, star_history_not_fetched]
- repo: SuperagenticAI/metaharness
  frontier_rank: 5
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: raw-github/superagenticai_metaharness.md
    local_mirror: null
    public_report: site/public/reports/projects/244-metaharness-benchmark-driven-harness-evolution.md
    star_growth: not_fetched
  mirror_chain:
    node: project.superagenticai.metaharness
    value_gap: [observe, interpret, modify, verify, retain]
    rank_decision: promote-clone-then-scan
    caveats: [created_at_unverified, local_clone_missing, star_history_not_fetched]
```

## Trust Chain

- [KNOWN] Source corpus counts, public reports, local git metadata, and current-value ranking come from `analysis/github-project-data-analysis.json`.
- [KNOWN] Raw capture paths and raw time slices are joined from `output/raw-github-timestamp-index.json` when present.
- [KNOWN] Star-growth coverage and fetch backlog ranks are joined from `analysis/github-star-growth-ranking.json`; `not_fetched` is a data-collection state, not negative demand evidence.
- [KNOWN] Local code scan is an offline filesystem scan of existing `repos/*` mirrors and does not execute project code.
- [INFERRED] Frontier score is a triage heuristic derived from the dual-chain protocol, not a final scientific ranking.
- [UNVERIFIED] Remote issues, PRs, releases, and discussions still require network-backed review for promoted projects.
