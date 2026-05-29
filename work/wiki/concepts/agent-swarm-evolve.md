---
title: "Agent-Swarm Evolve Part"
type: concept
rank: B
tags: [mechanism, multi-agent, swarm, organization, topology, harness, self-evolution]
sources:
  - analysis/agent-swarm-evolve.md
  - raw-github/human-agent-society_coral.md
  - raw-github/metauto-ai_gptswarm.md
  - raw-github/dsifry_metaswarm.md
  - raw-github/swarmclawai_swarmclaw.md
  - raw-github/richchen-maker_openclaw-multi-agent-team.md
  - raw-github/uid4oe_insight-swarm.md
updated: 2026-05-30
---

# Agent-Swarm Evolve Part

> Agent-Swarm Evolve 是 multi-agent / harness 下面新增的一部分：关注 agent 团队组织结构如何随反馈更新，而不是新增独立分类。

## Definition

[CLAIM] Agent-Swarm Evolve 是多智能体协作进化中的一个内容部分：系统不只让多个 agent 协作，而是在反馈后改变 swarm 的组织结构或运行协议。— Source: `analysis/agent-swarm-evolve.md`

[CLAIM] 最小闭环是 `swarm state -> task execution -> independent evaluation -> organization update -> retained lineage`。— Source: `analysis/agent-swarm-evolve.md`

## Boundary

| Must have | Why it matters | Source |
|---|---|---|
| Mutable swarm object | 角色、通信边、共享状态、review gate 或 skill/handoff 必须能被改变。 | `analysis/agent-swarm-evolve.md` |
| Independent feedback | 没有 grader、hidden test、verifier、review team 或环境反馈，就只是并行协作。 | `survey/ch8-future-cn.md`, `analysis/agent-swarm-evolve.md` |
| Retained lineage | 接受/拒绝的组织变化、失败候选和经验要能回放。 | `raw-github/human-agent-society_coral.md`, `raw-github/dsifry_metaswarm.md` |
| Anti-groupthink guard | 异质模型、独立工具、dissent rule 或 contradiction metric 防止多 agent 互相确认错误。 | `raw-github/uid4oe_insight-swarm.md`, `survey/ch8-future-cn.md` |

## Evidence

| System | Claim | Trust |
|---|---|---|
| CORAL | [CLAIM] CORAL 使用隔离 worktrees、共享 public state、grader daemon 和 heartbeat prompts 来支持 autonomous agent organizations。— Source: `raw-github/human-agent-society_coral.md` | A |
| GPTSwarm | [CLAIM] GPTSwarm 用 graph-based agent/swarm 表示，并声明可优化 inter-agent connections 以提升 swarm efficiency。— Source: `raw-github/metauto-ai_gptswarm.md` | B |
| metaswarm | [CLAIM] metaswarm 提供 recursive orchestration、parallel review gates、cross-model review 和 knowledge extraction。— Source: `raw-github/dsifry_metaswarm.md` | B |
| swarmclaw | [CLAIM] swarmclaw 是 self-hosted agent runtime，覆盖 agent memory、MCP tools、schedules、delegation 和 autonomous agent swarms。— Source: `raw-github/swarmclawai_swarmclaw.md` | B |
| OpenClaw Multi-Agent Team | [CLAIM] OpenClaw Multi-Agent Team 使用 dynamic team assembly、parallel waves、independent verifier、quality gates 和 self-evolution gears。— Source: `raw-github/richchen-maker_openclaw-multi-agent-team.md` | B |
| Insight Swarm | [CLAIM] Insight Swarm 用 shared knowledge graph 替代中心 orchestrator，并用 mandatory challenge votes、tension detection 和 multi-agent evidence 约束综合。— Source: `raw-github/uid4oe_insight-swarm.md` | B |

## Cross-references

- [[multi-agent-coevolution]] — 上位机制：多 agent 的竞争、协作、批判、分工和知识共享。
- [[architecture-search]] — 当 swarm topology 或 role graph 被搜索时，属于架构搜索的一部分。
- [[self-evaluation]] — grader、verifier 和 review team 是 swarm 选择压力。
- [[llm-agent-knowledge-delivery]] — 共享知识图谱和 wiki 是 swarm 记忆的工程载体。
