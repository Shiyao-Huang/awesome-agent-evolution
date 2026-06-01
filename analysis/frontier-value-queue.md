# Frontier Value Queue

> Generated: 2026-06-01T08:39:06.784Z. Source: `analysis/github-project-data-analysis.json` generated 2026-06-01T07:26:26.411Z.

## One Sentence

The frontier queue turns the dual-chain protocol into a repeatable project triage table: current projects are separated into code-ready, clone-needed, metadata-refresh, baseline, and parked lanes before humans or agents spend deep-reading time.

## Three Sentences

The queue scores 239 analyzed projects with 40% recency, 20% continuity, 15% self-evolution gap fit, 10% implementation evidence, 10% discourse/resource signal, and 5% usefulness. It preserves the existing current-value ranking as one input, then adds local clone readiness, raw timestamp evidence, project reports, and Self Mirror style rank decisions. Because this run is offline, remote issues/PRs/releases are not silently assumed; projects needing that step are marked with explicit next actions.

## Lane Counts

| lane | count |
| --- | --- |
| metadata-refresh | 100 |
| watch-current-raw | 60 |
| park-for-later | 43 |
| historical-baseline | 17 |
| frontier-clone-needed | 14 |
| frontier-code-ready | 5 |

## Top Frontier Queue

| rank | project | score | lane | created | raw time | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- |
| 1 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | 76.93 | frontier-code-ready | 2025-11-13 | 2026-05 | yes | fresh time signal; active continuity signal; strong OIMVR gap fit; local clone ready | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 2 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 68.48 | frontier-clone-needed | 2026-04-18 | unknown | no | fresh time signal; strong OIMVR gap fit | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 3 | [MemTensor/skills-vote](https://github.com/MemTensor/skills-vote) | 60.85 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 4 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 60.50 | frontier-code-ready | 2025-07-11 | 2026-05 | yes | local clone ready; raw 2026-05 | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 5 | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | 60.45 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 6 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 60.39 | frontier-code-ready | 2025-10-14 | unknown | yes | fresh time signal; local clone ready; gap-fit weak | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 7 | [longmans/self-evolve](https://github.com/longmans/self-evolve) | 60.10 | frontier-clone-needed | unknown | 2026-06 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 8 | [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 60.10 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 9 | [ai-agents-2030/darwin-mobile-agent](https://github.com/ai-agents-2030/darwin-mobile-agent) | 60.10 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 10 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 59.81 | frontier-code-ready | 2025-05-15 | unknown | yes | local clone ready; gap-fit weak | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 11 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 59.22 | frontier-clone-needed | 2026-03-12 | unknown | no | fresh time signal | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 12 | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 59.15 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 13 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 58.95 | frontier-code-ready | unknown | 2026-05 | yes | active continuity signal; local clone ready; created_at missing; raw 2026-05 | refresh GitHub API metadata -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 14 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 58.90 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 15 | [aiming-lab/ClawArena](https://github.com/aiming-lab/ClawArena) | 58.60 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 16 | [zikuicai/aegisllm](https://github.com/zikuicai/aegisllm) | 58.30 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 17 | [BerriAI/self-improving-agent](https://github.com/BerriAI/self-improving-agent) | 58.30 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 18 | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) | 56.65 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 19 | [pegasi-ai/reins](https://github.com/pegasi-ai/reins) | 56.60 | metadata-refresh | unknown | 2026-06 | no | active continuity signal; created_at missing; raw 2026-06 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 20 | [RyanAlberts/best-of-Agent-Harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) | 55.65 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 21 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 55.40 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 22 | [AutoJunjie/awesome-agent-harness](https://github.com/AutoJunjie/awesome-agent-harness) | 55.25 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 23 | [Da1yuqin/SEAD](https://github.com/Da1yuqin/SEAD) | 55.15 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 24 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 54.72 | metadata-refresh | unknown | 2026-05 | yes | active continuity signal; strong OIMVR gap fit; local clone ready; created_at missing | refresh GitHub API metadata -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 25 | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 26 | [InternScience/InternAgent](https://github.com/InternScience/InternAgent) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 27 | [nomic-ai/aec-bench](https://github.com/nomic-ai/aec-bench) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 28 | [sachinsharma9780/memweave](https://github.com/sachinsharma9780/memweave) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 29 | [zjunlp/SkillX](https://github.com/zjunlp/SkillX) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 30 | [InternScience/Awesome-Scientific-Skills](https://github.com/InternScience/Awesome-Scientific-Skills) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |

## Code-Ready Frontier

| rank | project | score | lane | created | raw time | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- |
| 1 | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | 76.93 | frontier-code-ready | 2025-11-13 | 2026-05 | yes | fresh time signal; active continuity signal; strong OIMVR gap fit; local clone ready | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 4 | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 60.50 | frontier-code-ready | 2025-07-11 | 2026-05 | yes | local clone ready; raw 2026-05 | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 6 | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 60.39 | frontier-code-ready | 2025-10-14 | unknown | yes | fresh time signal; local clone ready; gap-fit weak | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 10 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 59.81 | frontier-code-ready | 2025-05-15 | unknown | yes | local clone ready; gap-fit weak | scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 13 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 58.95 | frontier-code-ready | unknown | 2026-05 | yes | active continuity signal; local clone ready; created_at missing; raw 2026-05 | refresh GitHub API metadata -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |

## Clone-Needed Frontier

| rank | project | score | lane | created | raw time | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- |
| 2 | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 68.48 | frontier-clone-needed | 2026-04-18 | unknown | no | fresh time signal; strong OIMVR gap fit | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 3 | [MemTensor/skills-vote](https://github.com/MemTensor/skills-vote) | 60.85 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 5 | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | 60.45 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 7 | [longmans/self-evolve](https://github.com/longmans/self-evolve) | 60.10 | frontier-clone-needed | unknown | 2026-06 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-06 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 8 | [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 60.10 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 9 | [ai-agents-2030/darwin-mobile-agent](https://github.com/ai-agents-2030/darwin-mobile-agent) | 60.10 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 11 | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 59.22 | frontier-clone-needed | 2026-03-12 | unknown | no | fresh time signal | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 12 | [NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) | 59.15 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 14 | [EvoMap/evolver](https://github.com/EvoMap/evolver) | 58.90 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 15 | [aiming-lab/ClawArena](https://github.com/aiming-lab/ClawArena) | 58.60 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 16 | [zikuicai/aegisllm](https://github.com/zikuicai/aegisllm) | 58.30 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 17 | [BerriAI/self-improving-agent](https://github.com/BerriAI/self-improving-agent) | 58.30 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 40 | [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) | 52.70 | frontier-clone-needed | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05; gap-fit weak | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 56 | [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | 51.66 | frontier-clone-needed | 2025-12-18 | unknown | no | fresh time signal; gap-fit weak | clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |

## Metadata Refresh Queue

| rank | project | score | lane | created | raw time | clone | why | next action |
| ---: | --- | ---: | --- | --- | --- | --- | --- | --- |
| 18 | [howdymary/hermes-agent-metaharness](https://github.com/howdymary/hermes-agent-metaharness) | 56.65 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 19 | [pegasi-ai/reins](https://github.com/pegasi-ai/reins) | 56.60 | metadata-refresh | unknown | 2026-06 | no | active continuity signal; created_at missing; raw 2026-06 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 20 | [RyanAlberts/best-of-Agent-Harnesses](https://github.com/RyanAlberts/best-of-Agent-Harnesses) | 55.65 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 21 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 55.40 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 22 | [AutoJunjie/awesome-agent-harness](https://github.com/AutoJunjie/awesome-agent-harness) | 55.25 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; strong OIMVR gap fit; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 23 | [Da1yuqin/SEAD](https://github.com/Da1yuqin/SEAD) | 55.15 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 24 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 54.72 | metadata-refresh | unknown | 2026-05 | yes | active continuity signal; strong OIMVR gap fit; local clone ready; created_at missing | refresh GitHub API metadata -> scan local code for mutable artifact, verifier, retention, rollback -> read issues/PRs/releases/resources for continuity evidence |
| 25 | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 26 | [InternScience/InternAgent](https://github.com/InternScience/InternAgent) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 27 | [nomic-ai/aec-bench](https://github.com/nomic-ai/aec-bench) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 28 | [sachinsharma9780/memweave](https://github.com/sachinsharma9780/memweave) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 29 | [zjunlp/SkillX](https://github.com/zjunlp/SkillX) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 30 | [InternScience/Awesome-Scientific-Skills](https://github.com/InternScience/Awesome-Scientific-Skills) | 54.70 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 31 | [inngest/utah](https://github.com/inngest/utah) | 54.20 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |
| 32 | [Olshansk/agent-skills](https://github.com/Olshansk/agent-skills) | 54.20 | metadata-refresh | unknown | 2026-05 | no | active continuity signal; created_at missing; raw 2026-05 | refresh GitHub API metadata -> clone repository for code/architecture scan -> read issues/PRs/releases/resources for continuity evidence |

## Dual-Chain Packet Shape

```yaml
- repo: modelscope/AgentEvolver
  frontier_rank: 1
  lane: frontier-code-ready
  evidence_chain:
    raw_capture: raw-github/modelscope_agentevolver.md
    local_mirror: repos/modelscope__agentevolver
    public_report: site/public/reports/projects/modelscope__agentevolver.md
  mirror_chain:
    node: project.modelscope.agentevolver
    value_gap: [observe, interpret, modify, verify]
    rank_decision: promote-code-scan
    caveats: []
- repo: ZJU-LLM-Safety/DARWIN
  frontier_rank: 2
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: null
    local_mirror: null
    public_report: site/public/reports/projects/zju_llm_safety__darwin.md
  mirror_chain:
    node: project.zju.llm.safety.darwin
    value_gap: [interpret, modify, verify, retain, rollback]
    rank_decision: promote-clone-then-scan
    caveats: [local_clone_missing]
- repo: MemTensor/skills-vote
  frontier_rank: 3
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: raw-github/memtensor_skills-vote.md
    local_mirror: null
    public_report: site/public/reports/projects/350-skills-vote-evolution-benchmark.md
  mirror_chain:
    node: project.memtensor.skills.vote
    value_gap: [observe, interpret, modify, verify, retain]
    rank_decision: promote-clone-then-scan
    caveats: [created_at_unverified, local_clone_missing]
- repo: JARVIS-Xs/SE-Agent
  frontier_rank: 4
  lane: frontier-code-ready
  evidence_chain:
    raw_capture: raw-github/jarvis-xs_se-agent.md
    local_mirror: repos/jarvis_xs__se_agent
    public_report: site/public/reports/projects/jarvis_xs__se_agent.md
  mirror_chain:
    node: project.jarvis.xs.se.agent
    value_gap: [observe, interpret, modify, verify]
    rank_decision: promote-code-scan
    caveats: [remote_issue_scan_missing]
- repo: SuperagenticAI/metaharness
  frontier_rank: 5
  lane: frontier-clone-needed
  evidence_chain:
    raw_capture: raw-github/superagenticai_metaharness.md
    local_mirror: null
    public_report: site/public/reports/projects/244-metaharness-benchmark-driven-harness-evolution.md
  mirror_chain:
    node: project.superagenticai.metaharness
    value_gap: [observe, interpret, modify, verify, retain]
    rank_decision: promote-clone-then-scan
    caveats: [created_at_unverified, local_clone_missing]
```

## Trust Chain

- [KNOWN] Source corpus counts, public reports, local git metadata, and current-value ranking come from `analysis/github-project-data-analysis.json`.
- [KNOWN] Raw capture paths and raw time slices are joined from `output/raw-github-timestamp-index.json` when present.
- [KNOWN] Local code scan is an offline filesystem scan of existing `repos/*` mirrors and does not execute project code.
- [INFERRED] Frontier score is a triage heuristic derived from the dual-chain protocol, not a final scientific ranking.
- [UNVERIFIED] Remote issues, PRs, releases, and discussions still require network-backed review for promoted projects.
