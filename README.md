# Awesome Evolver — Agent Evolution Platform / 智能体进化资源库

> A bilingual awesome-list for Agent Evolution: self-evolving agents, agentic memory, workflow optimization, benchmarks, production frameworks, demos, and research papers. / 面向 Agent Evolution 的中英双语资源库：覆盖自进化智能体、智能体记忆、工作流优化、评测基准、生产框架、Demo 与论文。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

## Metadata / 元数据

- content_timestamp: 2026-05-22
- collected_at: 2026-05-22T00:00:00+08:00
- time_slice: 2026-05
- brand: **Evolver — Agent Evolution Platform**
- repo_records: 355 indexed public entries (348 core records + 6 AnySearch supplement records + 1 user-reported supplement)
- paper_raw_records: 185 markdown files from `raw-papers/`
- paper_unique_ids_listed: 115 local raw unique IDs (README keeps a smaller deduplicated awesome-list view for readability)
- review_sources: `paper-reviews/`, `research/repo-classification.*`, `research/asset-processing-anysearch-supplement-2026-05-22.*`, `analysis/*`, `output/raw-papers-timestamp-index.json`

## Why Evolver? / 为什么做 Evolver？

Evolver is designed as the future knowledge and leaderboard entry point for Agent Evolution — the Hugging Face/GitHub-style hub for evolving agents. Data collection is not the end goal; structured, searchable, bilingual, SEO-ready knowledge is the moat. / Evolver 的目标是成为进化智能体领域的知识库、榜单与 Demo 入口。数据收集不是目的，结构化、可检索、中英双语、SEO-ready 的知识基础设施才是护城河。

## Table of Contents / 目录

- [Cognitive Index / 认知索引](#cognitive-index--认知索引)
- [Frameworks / 框架](#frameworks--框架)
- [Tools & Benchmarks / 工具与评测](#tools--benchmarks--工具与评测)
- [Research Code / 研究代码](#research-code--研究代码)
- [Demos & Applications / 演示与应用](#demos--applications--演示与应用)
- [Community & Learning / 社区与学习](#community--learning--社区与学习)
- [Papers / 论文](#papers--论文)
- [深度分析产出 / Deep Analysis Outputs](#深度分析产出--deep-analysis-outputs)
- [Cross-validation themes / 交叉验证主题](#cross-validation-themes--交叉验证主题)
- [Contributing / 贡献](#contributing--贡献)

## Data Summary / 数据概览

### Repository categories / 仓库分类

| Category | Count | Share |
|---|---:|---:|
| Frameworks / 框架 | 104 | 29.3% |
| Tools & Benchmarks / 工具与评测 | 124 | 34.9% |
| Research Code / 研究代码 | 23 | 6.5% |
| Demos & Applications / 演示与应用 | 43 | 12.1% |
| Community & Learning / 社区与学习 | 61 | 17.2% |

### Repository stack distribution / 技术栈分布

| Stack | Count |
|---|---:|
| Markdown | 197 |
| Python | 123 |
| Unknown | 14 |
| TypeScript/JavaScript | 6 |
| Shell | 6 |
| TypeScript | 1 |
| Jupyter Notebook | 1 |

### Paper timeline / 论文时间线

| Year | Unique papers |
|---|---:|
| 2026 | 22 |
| 2025 | 59 |
| 2024 | 23 |
| 2023 | 8 |
| 2022 | 1 |

## Cognitive Index / 认知索引

This README is not only a long list. It is a map for building judgment about Agent Evolution: what evolves, where the feedback signal comes from, how memory persists, how safety gates work, and which projects are practical entry points. / 这个 README 不只是资源清单，而是帮助读者建立判断力的认知地图：到底进化什么、反馈信号从哪里来、记忆如何持久化、安全门怎么设计，以及哪些项目适合作为实践入口。

### Start by question / 按问题进入

| Question / 你要理解的问题 | Category / 认知分类 | Representative entries / 代表入口 | Why it matters / 认知价值 |
|---|---|---|---|
| How does an agent improve itself over time? / Agent 如何持续变强？ | Self-evolution loops / 自进化闭环 | [Darwin Godel Machine](#2025), [Agentic Harness Engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering), [FLEX](#2025), [Hermes Agent Self-Evolution](#demos--applications--演示与应用), [OpenClaw](https://github.com/openclaw/openclaw) | Separates real closed loops from one-shot prompting and marketing claims. / 区分真实闭环与一次性提示词包装。 |
| Where should long-term experience live? / 长期经验放在哪里？ | Memory and state / 记忆与状态 | [Memind](https://github.com/openmemind/memind), [agentmemory](https://github.com/rohitg00/agentmemory), [Memento II](#2025), [A-Mem](#2025) | Turns "agent remembers" into inspectable storage, retrieval, lifecycle, and rollback questions. / 把“会记住”拆成可检查的存储、检索、生命周期和回滚问题。 |
| How do agents acquire reusable capabilities? / 能力如何沉淀复用？ | Skills, tools, and workflow genes / Skill、工具与工作流基因 | [Superpowers](https://github.com/obra/superpowers), [SkillClaw](#demos--applications--演示与应用), [MemSkill](#frameworks--框架), [SkillWeaver](#frameworks--框架) | Skills are the bridge between raw trajectories and reusable operational knowledge. / Skill 是轨迹经验到可复用操作知识的桥。 |
| How do we know an evolved agent is actually better? / 怎么证明真的变好了？ | Evaluation and benchmarks / 评测与基准 | [Agentic Harness Engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering), [PinchBench](https://github.com/pinchbench/skill), [RAGEN](#2025), [WebRL](#2024), [Auto-harness](#frameworks--框架) | Prevents self-improvement from becoming reward hacking or uncontrolled drift. / 防止自进化变成奖励黑客或不可控漂移。 |
| What is usable in production today? / 今天能落地什么？ | Runtime, harness, and product systems / Runtime、Harness 与产品系统 | [OpenClaw](https://github.com/openclaw/openclaw), [Hermes Agent](https://github.com/NousResearch/hermes-agent), [OpenHuman](https://github.com/tinyhumansai/openhuman), [Prax Agent](#frameworks--框架) | Shows the practitioner surface: channels, local-first data, tool access, messaging, scheduling, and deployment. / 展示真实使用面：渠道、本地数据、工具权限、消息、定时任务与部署。 |
| What can go wrong when agents evolve? / 进化会出什么问题？ | Governance, safety, and failure modes / 治理、安全与失败模式 | [Misevolution](#2025), [OEP Poisoning](#2026), [Agent R](#2025), [cross-validation themes](#cross-validation-themes--交叉验证主题) | Makes risk part of the architecture, not a footnote. / 把风险放进架构，而不是放在脚注里。 |

### Capability layers / 能力分层

| Layer / 层级 | What changes / 变化对象 | Common evidence / 常见证据 | Example resources / 示例资源 |
|---|---|---|---|
| L1 Prompt / 提示层 | System prompts, policies, rubrics | before/after prompts, judge scores, traces | GEPA, Prompt Optimization RL, Superpowers |
| L2 Memory / 记忆层 | User profile, task lessons, case memory, vector/graph stores | retrieval quality, decay, dedupe, provenance | Memind, agentmemory, Memento, A-Mem |
| L3 Skill / 技能层 | `SKILL.md`, tools, scripts, workflow recipes | skill tests, invocation rules, versioned changes | SkillClaw, MemSkill, SkillWeaver, OpenClaw skills |
| L4 Workflow / 工作流层 | Agent graphs, routing, subagents, task decomposition | success rate, cost, latency, rollback | Agentic Harness Engineering, Auto-harness, SE-Agent, WebEvolver, OpenClaw |
| L5 Code / 代码层 | Agent source code or runtime behavior | PRs, tests, lineage, independent evaluator | Darwin Godel Machine, Hermes Agent Self-Evolution, OpenEvolve |
| L6 Ecosystem / 生态层 | Benchmarks, leaderboards, marketplaces, hosted runtimes | public tasks, reproducible runs, adoption signals | PinchBench, KiloClaw, Product Hunt signals, awesome lists |

### Hot supplement index / 热点补全索引

These records were added after the first raw index generation via AnySearch because they are important practitioner signals. Raw crawl folders are intentionally ignored for public Git release, so the README links to canonical external sources and the public supplement report. / 以下条目是初始 raw index 之后通过 AnySearch 补入的实践侧热点信号。raw 抓取目录会在公开 Git 发布时被忽略，因此主页链接到外部 canonical 来源和公开补充报告，而不是链接到本地 raw 全文。

| Entry / 条目 | Type / 类型 | Category hint / 分类提示 | Why indexed now / 为什么现在索引 |
|---|---|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | GitHub repo / 仓库 | Framework runtime / 框架运行时 | Canonical OpenClaw repo; central local-first personal agent and ecosystem anchor. / OpenClaw 主仓库，本地优先个人 Agent 与生态入口。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | GitHub repo / 仓库 | Framework runtime / 框架运行时 | Self-improving personal agent with memory, skills, messaging, and trajectory generation. / 带记忆、技能、消息网关和轨迹生成的自改进个人 Agent。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | GitHub repo / 仓库 | Application / 应用 | UI-first personal agent with local memory tree, integrations, and Obsidian-style knowledge base. / UI 优先的个人 Agent，强调本地记忆树、集成和 Obsidian 式知识库。 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | GitHub repo / 仓库 | Memory tool / 记忆工具 | Persistent memory layer for coding agents, Hermes, OpenClaw, Codex, Claude Code, Cursor, and MCP clients. / 面向多种编码 Agent 和 MCP client 的持久记忆层。 |
| [obra/superpowers](https://github.com/obra/superpowers) | GitHub repo / 仓库 | Skill/workflow methodology / 技能与工作流方法论 | Agentic skills framework that operationalizes planning, TDD, debugging, review, and subagent workflows. / 把计划、TDD、调试、评审和 subagent 工作流操作化的技能体系。 |
| [pinchbench/skill](https://github.com/pinchbench/skill) | GitHub repo / 仓库 | Benchmark / 评测 | OpenClaw-specific real-world agent benchmark for model selection and task success measurement. / 面向 OpenClaw 真实任务的模型选择与成功率评测。 |
| [china-qijizhifeng/agentic-harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | GitHub repo / 仓库 | Harness evolution / Harness 进化 | Observability-driven coding-agent harness evolution: prompts, tools, middleware, skills, sub-agents, and memory evolve while the base model stays fixed. / 以可观测性驱动编码 Agent 的 harness 进化：固定 base model，进化提示词、工具、中间件、技能、子 Agent 与记忆。 |
| [KiloClaw / PinchBench / OpenClaw trend signal](https://blog.kilo.ai/p/kiloclaw-hosted-openclaw) | Product/blog signal / 产品与博客信号 | Hosted runtime + benchmark / 托管运行时与评测 | Shows hosted OpenClaw, model routing, and benchmark-as-product trend. / 展示托管 OpenClaw、模型路由和评测产品化趋势。 |
| [OpenHuman Product Hunt signal](https://www.producthunt.com/products/openhuman) | Product discovery / 产品发现 | Product signal / 产品信号 | Captures Product Hunt traction and non-academic adoption signal. / 捕捉 Product Hunt 热度和非学术采用信号。 |

Public supplement record / 公开补充记录: [`research/asset-processing-anysearch-supplement-2026-05-22.md`](research/asset-processing-anysearch-supplement-2026-05-22.md)

### Paper coverage is not enough yet / 论文覆盖仍不够

One sentence / 一句话：**the paper layer is useful but still under-collected; the public site must expose coverage debt instead of pretending 19 front-page papers are enough.** / **论文层已有价值，但收集仍不够；公开站必须暴露覆盖债务，不能把 19 篇前台代表论文包装成完整图谱。**

Three sentences / 三句话：The repo currently has 184+ raw paper records and 135+ review files, but the landing site previously surfaced only a small featured subset. The next pass must prioritize mainstream survey, benchmark/evaluation, safety/governance, long-term memory, and experience-learning papers before adding more low-signal project cards. Coverage quality is tracked as a first-class artifact, not as a hidden TODO.

| Priority gap / 优先缺口 | Role in README / README 角色 | Source |
|---|---|---|
| A Survey on Self-Evolution of Large Language Models | Top-down LLM self-evolution taxonomy / LLM 自进化总纲 | https://arxiv.org/abs/2404.14387 |
| A Survey of Self-Evolving Agents | Agent-specific taxonomy anchor / Agent 自进化分类锚点 | https://arxiv.org/abs/2507.21046 |
| A Comprehensive Survey of Self-Evolving AI Agents | Independent survey cross-check / 独立综述交叉校验 | https://arxiv.org/abs/2508.07407 |
| Large Language Models Can Self-Improve At Web Agent Tasks | WebArena self-improvement benchmark / Web Agent 评测入口 | https://arxiv.org/abs/2405.20309 |
| OPT-BENCH | Iterative self-optimization benchmark / 迭代自优化评测 | https://arxiv.org/abs/2605.08904 |
| Experiential Reflective Learning for Self-Improving LLM Agents | Experience-to-heuristic learning / 经验反思学习 | https://arxiv.org/abs/2603.24639 |
| Specification Self-Correction | Reward hacking as diagnostic signal / 规格自修正与防钻空子 | https://arxiv.org/abs/2507.18742 |
| Inference-Time Reward Hacking in Large Language Models | Proxy reward over-optimization safety / 推理期奖励黑客安全基线 | https://arxiv.org/abs/2506.19248 |
| Safety is Essential for Responsible Open-Ended Systems | Open-ended evolution governance / 开放式进化治理 | https://arxiv.org/abs/2502.04512 |

### Quality-ranked frontier projects / 质量优先前沿项目

These entries are ranked by fit to Agent Evolution, evidence quality, and role clarity, not by GitHub stars. / 以下条目按主题贴合度、证据质量和角色清晰度排序，不按 GitHub star 排序。

| Rank | Repo | Quality judgment / 质量判断 | README role / 角色 |
|---:|---|---|---|
| 1 | [agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 最贴主题：固定 base model，进化 harness，并有 Terminal-Bench 2 指标。 | Harness evolution / 进化闭环 |
| 2 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 生态锚点最强，runtime/product 形态完整；star/fork 异常高，需 hype audit。 | Runtime / 生态入口 |
| 3 | [obra/superpowers](https://github.com/obra/superpowers) | 方法论质量高，Skill、TDD、debug、review、subagent 工作流可沉淀操作手册。 | Skill methodology |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 和“会成长的个人 Agent”贴合，适合作为 self-improving personal agent 案例。 | Personal agent runtime |
| 5 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 主题很准：持久记忆层，是 Evolver 的 memory substrate。 | Memory layer |
| 6 | [pinchbench/skill](https://github.com/pinchbench/skill) | 评测价值高，但偏 OpenClaw 生态，独立性和成熟度需继续观察。 | Benchmark / Eval |
| 7 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 产品化和 UX 信号不错，更像应用入口与采用信号。 | Product/application signal |

## Frameworks / 框架

Reusable SDKs, runtimes, AgentOS, orchestration layers, memory platforms, and workflow frameworks. / 可复用 SDK、runtime、AgentOS、编排层、记忆平台和工作流框架。

- [langchain-ai/langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk) - LangSmith Client SDK Implementations 🌟894
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-15`
- [aimagelab/mammoth](https://github.com/aimagelab/mammoth) - An Extendible (General) Continual Learning Framework based on Pytorch - official codebase of Dark Experience for General Continual Learning 🌟812
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [openmemind/memind](https://github.com/openmemind/memind) - Self-evolving cognitive memory and context engine for AI agents in Java. Empowering 24/7 proactive agents like OpenClaw with understanding and SOTA performance. 🌟787
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [wzdnzd/harvester](https://github.com/wzdnzd/harvester) - Intelligent data acquisition framework for GitHub and web sources 🌟546
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness) - Bring your own agent and build a self-improving agentic system. Automatically mine failures, optimize the agent harness, and gate against regressions. 🌟507
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [viktoraxelsen/memskill](https://github.com/viktoraxelsen/memskill) - MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents 🌟482
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [openautocoder/live-swe-agent](https://github.com/openautocoder/live-swe-agent) - Live-SWE-agent: live, runtime self-evolving software engineering agent 🌟392
  `stack:Markdown` `tag:framework-runtime` `time:2025-11` `content:2025-11-24`
- [china-qijizhifeng/agentic-harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) - Official AHE code: observability-driven automatic evolution of coding-agent harnesses; lifts Terminal-Bench 2 pass@1 from 69.7% to 77.0% over 10 iterations and evolves prompts, tools, middleware, skills, sub-agents, and memory while the base model stays fixed. 🌟391
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-14`
- [noahshinn/reflexion-draft](https://github.com/noahshinn/reflexion-draft) - Reflexion: an autonomous agent with dynamic memory and self-reflection 🌟388
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [codexstar69/bug-hunter](https://github.com/codexstar69/bug-hunter) - Adversarial AI bug hunter with auto-fix skill for Claude Code, Cursor, Codex CLI, GitHub Copilot CLI, Kiro CLI, Opencode, Pi Coding Agent, and more. Multi-agent pipeline finds security vu... 🌟380
  `stack:Markdown` `tag:framework-runtime` `time:2026-03` `content:2026-03-12`
- [bingreeky/memgen](https://github.com/bingreeky/memgen) - MemGen: Weaving Generative Latent Memory for Self-Evolving Agents 🌟378
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [agentic-in/elephant-agent](https://github.com/agentic-in/elephant-agent) - Personal-Model First Self Evolving AI Agent 🐘 🌟361
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [channinglua/prax-agent](https://github.com/channinglua/prax-agent) - Self-improving agent runtime that learns from experience — test-verify-fix loops, correction detection, cross-project memory, multi-model orchestration. 🌟294
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [dsifry/metaswarm](https://github.com/dsifry/metaswarm) - A self-improving multi-agent orchestration framework for Claude Code, Gemini CLI, and Codex CLI — 18 agents, 13 skills, 15 commands, TDD enforcement, quality gates, spec-driven development 🌟272
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [onevcat/argue](https://github.com/onevcat/argue) - Harness-agnostic orchestration package for multi-agent consensus workflows 🌟238
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [reflexioai/reflexio](https://github.com/reflexioai/reflexio) - Make your agents improve themselves. Reflexio is an AI agent self-improvement harness that enables your AI agents to continuously learn from real user interactions. 🌟220
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [deepelementlab/clawcode](https://github.com/deepelementlab/clawcode) - ClawCode is claude code inspired implementation in python and Rust focused on agents and experience-based evolution, and is an Open-source coding-agent CLI for Anthropic, OpenAI, Gemini,... 🌟199
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [memovai/memov](https://github.com/memovai/memov) - Give git-like & traceable memory to OpenClaw and any coding agents. By https://memov.ai/ aka Entire CLI for every coding agents by MCP. Self-evolution for skills. 🌟190
  `stack:Shell` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [spiral-rl/spiral](https://github.com/spiral-rl/spiral) - SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning 🌟190
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [n8n-io/n8n](https://github.com/n8n-io/n8n) - Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations. 🌟189
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-20`
- [significant-gravitas/autogpt](https://github.com/significant-gravitas/autogpt) - AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters. 🌟184
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) - Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement 🌟182
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [hao-cyber/skill-evolution](https://github.com/hao-cyber/skill-evolution) - Self-evolving AI skill framework — skills that learn from execution, reflect on failures, and autonomously improve themselves 🌟145
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [iii-experimental/agentos](https://github.com/iii-experimental/agentos) - The agent OS that evolves itself. 🌟144
  `stack:TypeScript/JavaScript` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) - The agent engineering platform. 🌟137
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-11`
- [osu-nlp-group/skillweaver](https://github.com/osu-nlp-group/skillweaver) - SkillWeaver is a framework to enable web agent self-improvement through environment exploration and skill synthesis. 🌟123
  `stack:Python` `tag:framework-runtime` `time:2024-Q3` `content:2024-08-06`
- [shintaro-sprech/agent-orchestrator-template](https://github.com/shintaro-sprech/agent-orchestrator-template) - A self-evolving subagent system for Claude Code 🌟120
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [01-ai/langcrew](https://github.com/01-ai/langcrew) - A high-level multi-agent development framework built on LangGraph, combining CrewAI’s intuitive concepts with enterprise-grade features, ready-to-use templates, and full-stack UI for rapi... 🌟114
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [longyunfeigu/learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent) - A 27-chapter hands-on tutorial for building an autonomous AI agent from zero in Python. Agent loop, tool system, memory, skills, MCP, multi-platform gateway, and self-evolution — inspired... 🌟113
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [yang1999code/controllable-agent](https://github.com/yang1999code/controllable-agent) - 20-interface AI agent framework with 3-layer architecture, multi-agent delegation, and self-evolution. 🌟105
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [0xsanei/darwinia](https://github.com/0xsanei/darwinia) - The Self-Evolving Agent Ecosystem — Trading agents that evolve through Darwinian selection and adversarial self-play 🌟102
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [browser-use/browser-use](https://github.com/browser-use/browser-use) - 🌐 Make websites accessible for AI agents. Automate tasks online with ease. 🌟94
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-19`
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) - Model Context Protocol Servers 🌟86
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [agenttoolkit/altk-evolve](https://github.com/agenttoolkit/altk-evolve) - Self improving agents through iterations 🌟85
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [richchen-maker/openclaw-multi-agent-team](https://github.com/richchen-maker/openclaw-multi-agent-team) - 🐊 Multi-Team Intelligent Orchestrator v5.3.1 — DNA-driven multi-agent collaboration with 9 genes, 11-step pipeline, 60+ roles, 6 self-evolution gears. Built for OpenClaw. 🌟80
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [flowersteam/teachmyagent](https://github.com/flowersteam/teachmyagent) - TeachMyAgent is a testbed platform for Automatic Curriculum Learning methods in Deep RL. 🌟77
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [mdalamin5/end-to-end-agentic-ai-automation-lab](https://github.com/mdalamin5/end-to-end-agentic-ai-automation-lab) - This repository contains hands-on projects, code examples, and deployment workflows. Explore multi-agent systems, LangChain, LangGraph, AutoGen, CrewAI, RAG, MCP, automation with n8n, and... 🌟72
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [lean-dojo/leanagent](https://github.com/lean-dojo/leanagent) - LeanAgent is a novel lifelong learning framework for formal theorem proving that continuously generalizes to and improves on ever-expanding mathematical knowledge without forgetting previ... 🌟68
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [omdivyatej/self-learning-agents](https://github.com/omdivyatej/self-learning-agents) - A lightweight Python library that allows any LLM agent to self-improve through feedback, without retraining models. 🌟63
  `stack:Python` `tag:framework-runtime` `time:2025-05` `content:2025-05-03`
- [eliasecchig/gemini-cli-git](https://github.com/eliasecchig/gemini-cli-git) - Turn your Git repository into a self-improving autonomous agent. Open issues to assign tasks, review PRs, merge to teach. Gemini is the brain, Git is the backend. 🌟56
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [evotai/evot](https://github.com/evotai/evot) - A self-evolving AI coding agent for long-running, complex software engineering. 🌟54
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-17`
- [emson/elfmem](https://github.com/emson/elfmem) - sELF improving agent memory system 🌟53
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [ilearn-lab/evoharness](https://github.com/ilearn-lab/evoharness) - EvoHarness delivers terminal-native agent infrastructure: tools, commands, skills, agents, plugins, MCP, memory, approvals, and controlled self-evolution 🌟52
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [crewaiinc/crewai](https://github.com/crewaiinc/crewai) - Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks. 🌟51
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [developzir/gepa-mcp](https://github.com/developzir/gepa-mcp) - MCP server integrating GEPA (Genetic-Evolutionary Prompt Architecture) for automatic prompt optimization with Claude Desktop 🌟48
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [pingcy/ace-langgraph](https://github.com/pingcy/ace-langgraph) - ACE LangGraph: ReAct Agent with Adaptive Learning - Integrating ACE framework with LangGraph for self-improving agents 🌟46
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [zoe-yyx/agentnet](https://github.com/zoe-yyx/agentnet) - [NIPS2025] A decentralized, RAG-enhanced multi-agent framework for LLMs with dynamic task routing and agent evolution. 🌟46
  `stack:Markdown` `tag:framework-runtime` `time:2025-04` `content:2025-04-22`
- [letta-ai/agentic-learning-sdk](https://github.com/letta-ai/agentic-learning-sdk) - Drop-in SDK for adding continual learning and long-term memory to any LLM agent. 🌟45
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [28naem-del/mnemosyne](https://github.com/28naem-del/mnemosyne) - Cognitive Memory OS for AI Agents — persistent, self-improving, multi-agent memory 🌟41
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [cellium-project/cellium-agent](https://github.com/cellium-project/cellium-agent) - Self-Evolving AI Agent Framework | Decision-Loop Driven Microkernel Architecture with Hot-Pluggable Components & Triple-Layer Memory | Agent Infinite Evolution Engine that Learns from Fai... 🌟41
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [hankbesser/recursive-agents](https://github.com/hankbesser/recursive-agents) - A meta-framework for self-improving LLMs with transparent reasoning 🌟39
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [zhangyiqun018/agent-for-debate](https://github.com/zhangyiqun018/agent-for-debate) - [ICASSP 2026] Agent4Debate is a dynamic multi-agent framework that leverages LLMs to achieve human-level performance in competitive debate by dynamically coordinating specialized agents t... 🌟38
  `stack:Python` `tag:framework-runtime` `time:2026-01` `content:2026-01-18`
- [clawland-ai/geneclaw](https://github.com/clawland-ai/geneclaw) - Self-evolving AI agent framework with 5-layer safety gatekeeper. Agents observe failures, propose fixes, and safely apply them. Built on HKUDS/nanobot. 🌟36
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [stanfordnlp/dsp](https://github.com/stanfordnlp/dsp) - DSPy: The framework for programming—not prompting—language models 🌟34
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-05`
- [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) - DSPy: The framework for programming—not prompting—language models 🌟34
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-05`
- [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) - Build resilient agents. 🌟32
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-12`
- [vercel-labs/ai](https://github.com/vercel-labs/ai) - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents 🌟24
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [vercel/ai](https://github.com/vercel/ai) - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents 🌟24
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [letta-ai/letta](https://github.com/letta-ai/letta) - Letta is the platform for building stateful agents: AI with advanced memory that can learn and self-improve over time. 🌟22
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-14`
- [siddharth-1001/agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness) - An open-source evaluation framework specifically for agentic systems — not just LLM outputs, but full agent behavior. 🌟20
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [camel-ai/owl](https://github.com/camel-ai/owl) - 🦉 OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation 🌟19
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [exoskeletonzj/mars](https://github.com/exoskeletonzj/mars) - A Multi-Agent Approach Integrating Socratic Guidance for Automated Prompt Optimization 🌟18
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [tsukushiai/self-organized-agent](https://github.com/tsukushiai/self-organized-agent) - A LLM Multi-Agent Framework toward Ultra Large-Scale Code Generation and Optimization 🌟18
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [browser-use/web-ui](https://github.com/browser-use/web-ui) - 🖥️ Run AI Agent in your browser. 🌟16
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver) - Meta-Harness: End-to-End Optimization of LLM Harnesses — OpenClaw Agent Evolution System 🌟14
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [gumbel-ai/agent-debate](https://github.com/gumbel-ai/agent-debate) - Structured protocol for AI coding agents to debate technical decisions via shared markdown 🌟12
  `stack:Markdown` `tag:framework-runtime` `time:2026-03` `content:2026-03-07`
- [lsdefine/genericagent](https://github.com/lsdefine/genericagent) - Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption 🌟11
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [privkeyio/evolve-mcp](https://github.com/privkeyio/evolve-mcp) - Universal MCP server for agent self-improvement via evolutionary algorithms. 🌟11
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [mettamazza/ernosagent](https://github.com/mettamazza/ernosagent) - Local-first, privacy-first AI agent with recursive self-improvement 🌟10
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [senweaver/senagentos](https://github.com/senweaver/senagentos) - High-performance Rust agent OS. Multi-agent orchestration, self-evolution, memory-first design, built-in security, and hardware-to-chat extensibility. 🌟10
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [n4m3z/forge-council](https://github.com/n4m3z/forge-council) - Multi-agent council orchestration via Claude Code agent teams 🌟9
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent) - Build effective agents using Model Context Protocol and simple workflow patterns 🌟8
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [autodrive-ecosystem/mrdt-marl](https://github.com/autodrive-ecosystem/mrdt-marl) - Multi-Agent Deep Reinforcement Learning for Cooperative and Competitive Autonomous Vehicles 🌟7
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [evomap/evolver](https://github.com/evomap/evolver) - The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai 🌟7
  `stack:Markdown` `tag:tool-module` `time:2026-02` `content:2026-02-01`
- [hkuds/openspace](https://github.com/hkuds/openspace) - "OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving" -- Community: https://open-space.cloud/ 🌟6
  `stack:Python` `tag:benchmark-eval` `time:2026-04` `content:2026-04-16`
- [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) - An Open-source Framework for Data-centric, Self-evolving Autonomous Language Agents 🌟5
  `stack:Python` `tag:framework-runtime` `time:2024-Q2` `content:2024-06-25`
- [argus-framework/argus-ai-debate](https://github.com/argus-framework/argus-ai-debate) - Multi-agent AI framework where LLMs debate each other to verify claims. Bayesian reasoning, adversarial evidence, calibrated verdicts & full audit trails. Works with GPT-4, Claude, Gemini... 🌟5
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [bazilicum/graphltm](https://github.com/bazilicum/graphltm) - Turn any LLM into a self-extending knowledge agent powered by a graph-structured memory - complete with PDF-to-graph ingestion, budget-aware optimisation, and dual-engine orchestration. 🌟4
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [xinhuagu/aceclaw](https://github.com/xinhuagu/aceclaw) - Java-native runtime for long-running AI agents with live execution control, human approvals, and audit trails. 🌟4
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [zazencodes/zazencodes-season-3](https://github.com/zazencodes/zazencodes-season-3) - YouTube video source code for Season 3 🌟4
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) - Claude SDK for Python 🌟3
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-19`
- [emartin59/text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver) - Code and Models for "Evolving LLMs Through Text-Based Self-Play: Achieving Emergent Performance", an AI research paper from Eric Martin 🌟3
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [evoagentx/evoagentx](https://github.com/evoagentx/evoagentx) - 🚀 EvoAgentX: Building a Self-Evolving Ecosystem of AI Agents 🌟3
  `stack:Markdown` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [ronit26mehta/argus-ai-debate](https://github.com/ronit26mehta/argus-ai-debate) - Debate-native multi-agent AI framework that eliminates LLM hallucination, overconfidence, and opacity. Structures knowledge evaluation as adversarial multi-round debates over a Conceptual... 🌟3
  `stack:Unknown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [sentrux/sentrux](https://github.com/sentrux/sentrux) - Real-time architectural sensor that helps AI agents close the feedback loop, enabling recursive self-improvement of code quality. Pure Rust. 🌟2
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [vercel/workflow](https://github.com/vercel/workflow) - Workflow SDK: Build durable, reliable, and observable apps and AI Agents in TypeScript 🌟2
  `stack:Markdown` `tag:framework-runtime` `time:2026-04` `content:2026-04-17`
- [arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind) - Autonomous Knowledge Agent Platform - Agentic RAG with Knowledge Graphs, hybrid retrieval, LangGraph agents, and MCP server 🌟1
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [asirwad/dspy-prompt-auto-optimizer](https://github.com/asirwad/dspy-prompt-auto-optimizer) - A learning-focused exploration of programmatic prompt optimization using the DSPy framework. 🌟1
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) - a recursive self-improving harness designed to help your agents (and future iterations of those agents) succeed on any task 🌟1
  `stack:Markdown` `tag:benchmark-eval` `time:2026-04` `content:2026-04-28`
- [internscience/internagent](https://github.com/internscience/internagent) - InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery 🌟1
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [os-copilot/os-copilot](https://github.com/os-copilot/os-copilot) - An self-improving embodied conversational agent seamlessly integrated into the operating system to automate our daily tasks. 🌟1
  `stack:Python` `tag:benchmark-eval` `time:2024-Q1` `content:2024-03-29`
- [rinadelph/agent-mcp](https://github.com/rinadelph/agent-mcp) - Agent-MCP is a framework for creating multi-agent systems that enables coordinated, efficient AI collaboration through the Model Context Protocol (MCP). The system is designed for develop... 🌟1
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [sunitj/colloquip](https://github.com/sunitj/colloquip) - Where AI agents deliberate, debate & discover 🌟1
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [ashish-kamboj/agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows) - AI-agent-driven workflow automation using n8n and CrewAI 🌟0
  `stack:Markdown` `tag:framework-runtime` `time:unknown` `content:unknown`
- [centaurioun/crewai](https://github.com/centaurioun/crewai) - Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks. 🌟0
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [haoxufd/openrlhf](https://github.com/haoxufd/openrlhf) - An Easy-to-use, Scalable and High-performance RLHF Framework (70B+ PPO Full Tuning & Iterative DPO & LoRA & RingAttention & RFT) 🌟0
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [large-model-rl-lib/openrlhf](https://github.com/large-model-rl-lib/openrlhf) - An Easy-to-use, Scalable and High-performance Agentic RL Framework based on Ray (PPO & DAPO & REINFORCE++ & TIS & vLLM & Ray & Async RL) 🌟0
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [mitchellgordon95/dspy](https://github.com/mitchellgordon95/dspy) - DSPy: The framework for programming—not prompting—foundation models 🌟0
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [sasleee/tencentdb-agent-memory](https://github.com/sasleee/tencentdb-agent-memory) - TencentDB Agent Memory delivers fully local long-term memory for AI Agents via a 4-tier progressive pipeline, with zero external API dependencies. 🌟0
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [shingo257/gitnexus](https://github.com/shingo257/gitnexus) - GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an in... 🌟0
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [square-mind/squaremind](https://github.com/square-mind/squaremind) - Squaremind 🌟0
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) - Emergent multi-agent intelligence — AI agents collaborate via a shared knowledge graph, discovering tensions and synthesizing theses without a central orchestrator. 🌟0
  `stack:TypeScript/JavaScript` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`

## Tools & Benchmarks / 工具与评测

Developer tools, harnesses, eval suites, benchmarks, judges, observability, and safety tools. / 开发工具、评测框架、benchmark、judge、可观测性与安全工具。

- [madaan/self-refine](https://github.com/madaan/self-refine) - LLMs can generate feedback on their work, use it to improve the output, and repeat this process iteratively. 🌟805
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [tiger-ai-lab/openresearcher](https://github.com/tiger-ai-lab/openresearcher) - OpenResearcher: A Fully Open Pipeline for Long-Horizon Deep Research Trajectory Synthesis 🌟756
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [polarseeker/openseeker](https://github.com/polarseeker/openseeker) - OpenSeeker: A search agent with open-source data and models 🌟711
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [human-agent-society/coral](https://github.com/human-agent-society/coral) - CORAL is a robust, lightweight infrastructure for multi-agent autonomous self-evolution, built for autoresearch. Works with Claude Code, Codex, Cursor, OpenCode, Kiro, and more. 🌟669
  `stack:Markdown` `tag:tool-module` `time:2026-04` `content:2026-04-24`
- [vision-intelligence-and-robots-group/best-incremental-learning](https://github.com/vision-intelligence-and-robots-group/best-incremental-learning) - An Incremental Learning, Continual Learning, and Life-Long Learning Repository 🌟607
  `stack:Unknown` `tag:tool-module` `time:unknown` `content:unknown`
- [graph-rag/graphrag](https://github.com/graph-rag/graphrag) - GraphRAG 🌟574
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [rlhflow/online-rlhf](https://github.com/rlhflow/online-rlhf) - A recipe for online RLHF and online iterative DPO. 🌟545
  `stack:Shell` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) - AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution 🌟424
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-09`
- [lyl1015/jarvisevo](https://github.com/lyl1015/jarvisevo) - [CVPR' 2026] JarvisEvo: Towards a Self-Evolving Photo Editing Agent with Synergistic Editor-Evaluator Optimization 🌟401
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [xizaoqu/worldmem](https://github.com/xizaoqu/worldmem) - [NeurIPS 2025] WorldMem: Long-term Consistent World Simulation with Memory 🌟359
  `stack:Python` `tag:benchmark-eval` `time:2025-11` `content:2025-11-30`
- [jarvis-xs/se-agent](https://github.com/jarvis-xs/se-agent) - SE-Agent is a self-evolution framework for LLM Code agents. It enables trajectory-level evolution to exchange information across reasoning paths via Revision, Recombination, and Refinemen... 🌟274
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [rmanluo/gfm-rag](https://github.com/rmanluo/gfm-rag) - [NeurIPS'25, ICLR'26] Graph Foundation Model for Retrieval Augmented Generation 🌟259
  `stack:Python` `tag:benchmark-eval` `time:2026-04` `content:2026-04-20`
- [thuml/rlvr-world](https://github.com/thuml/rlvr-world) - Official repository for "RLVR-World: Training World Models with Reinforcement Learning" (NeurIPS 2025), https://arxiv.org/abs/2505.13934 🌟251
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [sibyl-research-team/sibyl-research-system](https://github.com/sibyl-research-team/sibyl-research-system) - Fully Autonomous AI Research System with Self-Evolution, built natively on Claude Code 🌟245
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [beeevita/evoprompt](https://github.com/beeevita/evoprompt) - Official implementation of the paper Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers 🌟238
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) - Recipes to train the self-rewarding reasoning LLMs. 🌟232
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [modelscope/agentjet](https://github.com/modelscope/agentjet) - Cutting-edge platform for LLM agent tuning. Deliver RL tuning with flexibility, reliability, speed, multi-agent optimization and realtime community benchmarking. 🌟208
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) - A Survey of Self-Evolving Agents | A curated list of resources (surveys, papers, benchmarks, and opensource projects) on Self-Evolving Agents. 🌟181
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [internlm/polar](https://github.com/internlm/polar) - Pre-trained, Scalable, High-performance Reward Models via Policy Discriminative Learning. 🌟163
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) - MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions, MICCAI 2025 (oral and early accepted) 🌟163
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [chuacheowhuan/gym-continuousdoubleauction](https://github.com/chuacheowhuan/gym-continuousdoubleauction) - A custom MARL (multi-agent reinforcement learning) environment where multiple agents trade against one another (self-play) in a zero-sum continuous double auction. Ray [RLlib] is used for... 🌟153
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [archishmansengupta/autovoiceevals](https://github.com/archishmansengupta/autovoiceevals) - A self-improving loop for voice AI agents. Uses karpathy's autoresearch as foundation. 🌟149
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [linear95/spag](https://github.com/linear95/spag) - Self-playing Adversarial Language Game Enhances LLM Reasoning, NeurIPS 2024 🌟144
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [claire-labo/evotune](https://github.com/claire-labo/evotune) - Efficiently discovering algorithms via LLMs with evolutionary search and reinforcement learning. 🌟137
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) - Lightweight, auditable Python code agent (~1500 LOC) — ReAct + Planner + Reflexion + Hybrid RAG, with SWE-bench Lite eval and trace replay. 🌟135
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [oxen-ai/self-rewarding-language-models](https://github.com/oxen-ai/self-rewarding-language-models) - This is work done by the Oxen.ai Community, trying to reproduce the Self-Rewarding Language Model paper from MetaAI. 🌟134
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) - A curated list of AI Agent evolution, memory systems, multi-agent architectures, and self-improvement projects. | evomap.ai 🌟123
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [fusionbrainlab/gigaevo-core](https://github.com/fusionbrainlab/gigaevo-core) - Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection 🌟116
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [dongxiangjue/awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement) - A curated list of awesome LLM Inference-Time Self-Improvement (ITSI, pronounced "itsy") papers from our recent survey: A Survey on Large Language Model Inference-Time Self-Improvement. 🌟106
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [inclusionai/agenticlearning](https://github.com/inclusionai/agenticlearning) - Agentic Learning Powered by AWorld 🌟106
  `stack:Markdown` `tag:tool-module` `time:2024-Q4` `content:2024-11-20`
- [sethkarten/continual-harness](https://github.com/sethkarten/continual-harness) - Official repository of the paper: Continual Harness: Online Adaptation for Self-Improving Foundation Agents and PokeAgent Speedrun Track 2 🌟106
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [nikivanstein/llamea](https://github.com/nikivanstein/llamea) - Large Language Model Evolutionary Algorithm 🌟105
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [xai-liacs/llamea](https://github.com/xai-liacs/llamea) - Large Language Model Evolutionary Algorithm 🌟105
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [opentracy/opentracy](https://github.com/opentracy/opentracy) - Self-improving AI agent harness — propose, eval, approve, ship. AHE autonomous loop + MCP + BYOK + eval suite. 🌟101
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-18`
- [spillwavesolutions/agent-brain](https://github.com/spillwavesolutions/agent-brain) - Private RAG system with semantic context ingestion to improve source of truth of reliable sources 🌟101
  `stack:Markdown` `tag:benchmark-eval` `time:2026-03` `content:2026-03-16`
- [mycelium-io/mycelium](https://github.com/mycelium-io/mycelium) - Multi-agent coordination + persistent memory, semantic negotiation, async rooms, and a shared knowledge graph 🌟95
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [sola-st/repairagent](https://github.com/sola-st/repairagent) - RepairAgent is an autonomous LLM-based agent for software repair. 🌟95
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [bennettschwartz/membrane](https://github.com/bennettschwartz/membrane) - A selective learning and memory substrate for agentic systems — typed, revisable, decayable memory with competence learning and trust-aware retrieval. 🌟93
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [zjunlp/knowself](https://github.com/zjunlp/knowself) - [ACL 2025] Agentic Knowledgeable Self-awareness 🌟93
  `stack:Shell` `tag:benchmark-eval` `time:2024-Q3` `content:2024-08-06`
- [ngoodman/metaprompt](https://github.com/ngoodman/metaprompt) - Meta-prompt: a simple self-improving language agent 🌟88
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zed-industries/zed](https://github.com/zed-industries/zed) - Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. 🌟83
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-20`
- [shaoshuai0605/misevolution](https://github.com/shaoshuai0605/misevolution) - Official Repo of Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents 🌟76
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [imgeorgiev/pwm](https://github.com/imgeorgiev/pwm) - PWM: Policy Learning with Large World Models 🌟68
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [pgg3/evotoolkit](https://github.com/pgg3/evotoolkit) - LLM-driven solution evolutionary optimization toolkit 🌟68
  `stack:Python` `tag:benchmark-eval` `time:2026-03` `content:2026-03-23`
- [x1aox1a/word2world](https://github.com/x1aox1a/word2world) - [ACL 2026 Oral] From Word to World: Can Large Language Models be Implicit Text-based World Models? 🌟62
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [bruno686/visplay](https://github.com/bruno686/visplay) - [CVPR'26] VisPlay: Self-Evolving Vision-Language Models 🌟57
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [egmaminta/gepa-lite](https://github.com/egmaminta/gepa-lite) - A lightweight implementation of the GEPA (Genetic-Pareto) prompt optimization method for large language models. 🌟55
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [ibm/awesome-agentic-workflow-optimization](https://github.com/ibm/awesome-agentic-workflow-optimization) - Survey paper: From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents. 🌟51
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [thu-nics/mars](https://github.com/thu-nics/mars) - [ICLR'26] MARSHAL: Incentivizing Multi-Agent Reasoning via Self-Play with Strategic LLMs 🌟48
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [rucbm/laser](https://github.com/rucbm/laser) - [ICLR 2026] Official repository for the paper "LaSeR: Reinforcement Learning with Last-Token Self-Rewarding" 🌟36
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [shiqichen17/spa](https://github.com/shiqichen17/spa) - Github repository for "Internalizing World Models via Self-Play Finetuning for Agentic RL" 🌟35
  `stack:Shell` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [zjunlp/worldmind](https://github.com/zjunlp/worldmind) - Aligning Agentic World Models via Knowledgeable Experience Learning 🌟35
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zhentingwang/dump](https://github.com/zhentingwang/dump) - DUMP 🌟33
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [colab2/midca](https://github.com/colab2/midca) - The Metacognitive Integrated Dual-Cycle Architecture (MIDCA) 🌟27
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [huggingface/smolagents](https://github.com/huggingface/smolagents) - 🤗 smolagents: a barebones library for agents that think in code. 🌟27
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [labicon/curricullm](https://github.com/labicon/curricullm) - Official code repository for CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models 🌟27
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [feesuu/cluerag](https://github.com/feesuu/cluerag) - Clue-RAG: Towards Accurate and Cost-Efficient Graph-based RAG via Multi-Partite Graph and Query-Driven Iterative Retrieval 🌟26
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [garrus800-stack/genesis-agent](https://github.com/garrus800-stack/genesis-agent) - Self-aware cognitive AI agent that reads, modifies & verifies its own code. Autonomous planning, episodic memory, emotional state & MCP integration. Runs on Claude, GPT-4 or Ollama. Elect... 🌟24
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [skills-mcp/skills-mcp](https://github.com/skills-mcp/skills-mcp) - Bring Claude's Skills pattern to any MCP-compatible agent 🌟24
  `stack:TypeScript/JavaScript` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [volcengine/openviking](https://github.com/volcengine/openviking) - OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agen... 🌟24
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [matebenyovszky/healing-agent](https://github.com/matebenyovszky/healing-agent) - AI powered automatic software healing agent 🌟23
  `stack:Markdown` `tag:benchmark-eval` `time:2024-Q1` `content:2024-02-01`
- [ce0alex/skill-hunter](https://github.com/ce0alex/skill-hunter) - Agent skill to analyze a repo and recommend a best-fit skill stack with verified sources 🌟22
  `stack:Markdown` `tag:benchmark-eval` `time:2026-01` `content:2026-01-31`
- [faveos8758/reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts) - Self-improving LLM agent in TypeScript using Reflexion (verbal RL): custom evaluators, reflexion memory, HTTP API, CLI. Built with Vercel AI SDK. 🌟20
  `stack:TypeScript/JavaScript` `tag:framework-runtime` `time:unknown` `content:unknown`
- [agentskills/agentskills](https://github.com/agentskills/agentskills) - Specification and documentation for Agent Skills 🌟19
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [sebastianbrzustowicz/robot-sumo-rl](https://github.com/sebastianbrzustowicz/robot-sumo-rl) - Python + PyTorch. Advanced Reinforcement Learning (SAC/PPO/A2C) for ✨autonomous Robot Sumo combat featuring competitive self-play in continuous action spaces. 🌟18
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [yinbo0927/fate](https://github.com/yinbo0927/fate) - The official code of On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment 🌟16
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [opendatabox/workspace-bench](https://github.com/opendatabox/workspace-bench) - Benchmark self-evolving Agent upon realistic large-scale file workspaces 🌟14
  `stack:Markdown` `tag:benchmark-eval` `time:2025-05` `content:2025-05-07`
- [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) - The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery 🧑‍🔬 🌟13
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [pathway/alphaxos](https://github.com/pathway/alphaxos) - Deep Reinforcement Learning with Self-Play 🌟12
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [haotang1995/worldcoder](https://github.com/haotang1995/worldcoder) - WorldCoder, a Model-Based LLM Agent: Building World Models by Writing Code and Interacting with the Environment 🌟11
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare](https://github.com/zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare) - **Awesome-Self-Evolving-AI-for-Agentic-Healthcare** 🌟11
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) - An Open-Source Asynchronous Coding Agent 🌟9
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [memtensor/memos](https://github.com/memtensor/memos) - Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings 🌟9
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-09`
- [enajx/es](https://github.com/enajx/es) - Evolution Strategy (ES) implementation of https://arxiv.org/abs/1703.03864 🌟7
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [kargarisaac/reflexion](https://github.com/kargarisaac/reflexion) - Reflexion Agent implementation based on the smolagents library 🌟7
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [synaptent/aragora](https://github.com/synaptent/aragora) - Omnivorous Multi Agent Decision Making Engine - Ingest from any source, query from any channel, get multi-agent consensus 🌟7
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [angrysky56/reflective-agent-architecture](https://github.com/angrysky56/reflective-agent-architecture) - Metacognitive AI architecture combining Modern Hopfield Networks with entropy-based confusion detection for insight-like problem solving. Implements energy-based search, adaptive beta sca... 🌟5
  `stack:Markdown` `tag:benchmark-eval` `time:2025-12` `content:2025-12-10`
- [evermind-ai/everos](https://github.com/evermind-ai/everos) - Build, evaluate, and integrate long-term memory for self-evolving agents. 🌟5
  `stack:Markdown` `tag:benchmark-eval` `time:2025-02` `content:2025-02-01`
- [evermind-ai/everos?tab=readme-ov-file](https://github.com/evermind-ai/everos?tab=readme-ov-file) - Build, evaluate, and integrate long-term memory for self-evolving agents. 🌟5
  `stack:Markdown` `tag:benchmark-eval` `time:2025-02` `content:2025-02-01`
- [hkuds/ai-researcher](https://github.com/hkuds/ai-researcher) - [NeurIPS2025] "AI-Researcher: Autonomous Scientific Innovation" -- A production-ready version: https://novix.science/chat 🌟5
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [rllm-org/rllm](https://github.com/rllm-org/rllm) - Democratizing Reinforcement Learning for LLMs 🌟5
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [swe-bench/swe-bench](https://github.com/swe-bench/swe-bench) - SWE-bench: Can Language Models Resolve Real-world Github Issues? 🌟5
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [budecosystem/claudeevolve](https://github.com/budecosystem/claudeevolve) - Alpha Evolve plugin that can work with Claude Code 🌟4
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [gepa-ai/gepa](https://github.com/gepa-ai/gepa) - Optimize prompts, code, and more with AI-powered Reflective Text Evolution 🌟4
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [khykd/reflector](https://github.com/khykd/reflector) - Structured self-improvement system for OpenClaw agents. Transforms interactions into learning through a daily/weekly reflection loop that tracks outcomes, extracts patterns, and refines d... 🌟4
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [seetrex-ai/laimark](https://github.com/seetrex-ai/laimark) - LAIMARK 🌟4
  `stack:Markdown` `tag:benchmark-eval` `time:2026-04` `content:2026-04-18`
- [self-play-language-models/spin-peft](https://github.com/self-play-language-models/spin-peft) - Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models 🌟4
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [shehrum/grf-self-play](https://github.com/shehrum/grf-self-play) - Training agents with competitive self-play in Google Research Football environment 🌟4
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [circlemind-ai/fast-graphrag](https://github.com/circlemind-ai/fast-graphrag) - RAG that intelligently adapts to your use case, data, and queries 🌟3
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [memodb-io/acontext](https://github.com/memodb-io/acontext) - Agent Skills as a Memory Layer 🌟3
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [noahshinn024/reflexion-human-eval](https://github.com/noahshinn024/reflexion-human-eval) - [NeurIPS 2023] Reflexion: Language Agents with Verbal Reinforcement Learning 🌟3
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [studio-intrinsic/turbo-gepa](https://github.com/studio-intrinsic/turbo-gepa) - Optimize prompts, code, and more with AI-powered Reflective Text Evolution 🌟3
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zou-group/textgrad](https://github.com/zou-group/textgrad) - TextGrad: Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. Published in Nature. 🌟3
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [agent-on-the-fly/memento](https://github.com/agent-on-the-fly/memento) - Official Code of Memento: Fine-tuning LLM Agents without Fine-tuning LLMs 🌟2
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [caution724/github-explorer-skill](https://github.com/caution724/github-explorer-skill) - 🔍 Analyze GitHub projects deeply using multi-source data and AI to generate structured, actionable reports for informed decision-making. 🌟2
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [evoagentx/awesome-self-evolving-agents](https://github.com/evoagentx/awesome-self-evolving-agents) - [Survey] A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems 🌟2
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [mwasifanwar/meta-cognitive-learning-system](https://github.com/mwasifanwar/meta-cognitive-learning-system) - AI that monitors and improves its own learning process through self-reflection and meta-learning. 🌟2
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [pingcap/ossinsight](https://github.com/pingcap/ossinsight) - Analysis, Comparison, Trends, Rankings of Open Source Software, you can also get insight from more than 10 billion with natural language (powered by LLM). Follow us on Twitter: https://tw... 🌟2
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [stonks-git/intuitive-ai](https://github.com/stonks-git/intuitive-ai) - Cognitive architecture for emergent AI identity — blank slate to selfhood through lived experience 🌟2
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [vicsanity623/pyob](https://github.com/vicsanity623/pyob) - THIS IS A BEAST REPO DESIGNED JUST FOR ME! COPYRIGHT! NOT OPEN-SOURCE!! 🌟2
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [werner-duvaud/muzero-general](https://github.com/werner-duvaud/muzero-general) - MuZero 🌟2
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [alberto-codes/gepa-adk](https://github.com/alberto-codes/gepa-adk) - gepa-adk 🌟1
  `stack:Markdown` `tag:tool-module` `time:2026-03` `content:2026-03-11`
- [incidentfox/self-learning-ai-agent](https://github.com/incidentfox/self-learning-ai-agent) - Self-learning AI agents that get smarter from your Slack, docs, meetings, and code. RAPTOR trees + knowledge graph + multi-strategy RAG. Drop into any Slack channel — it starts learning a... 🌟1
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [inclusionai/aworld](https://github.com/inclusionai/aworld) - Search, understand, reproduce, and improve an idea with ease 🌟1
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [rishab-agrawal/humanoid-curriculum-rl](https://github.com/rishab-agrawal/humanoid-curriculum-rl) - MuJoCo-based reinforcement learning with Q-learning-driven curriculum for robust humanoid locomotion under perturbations. 🌟1
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [sakanaai/shinkaevolve](https://github.com/sakanaai/shinkaevolve) - ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution 🧬 🌟1
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [george-salafatinos/tictactoe-self-play](https://github.com/george-salafatinos/tictactoe-self-play) - Tic-Tac-Toe RL Project 🌟0
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [gepa-ai/optimize-anything-artifact](https://github.com/gepa-ai/optimize-anything-artifact) - ACM CAIS'26 Artifact — GEPA 🌟0
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [gustolychees/contribai](https://github.com/gustolychees/contribai) - Autonomous AI agent that contributes to open source — discovers repos, analyzes code, generates fixes, and submits PRs 🌟0
  `stack:Markdown` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [kadubon/audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist) - Benchmark for statistically valid AI scientist systems, using audit-closed protocols, transparency logs, and sequential inference to prevent false discoveries in autonomous research agents. 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-03` `content:2026-03-05`
- [legionio/lex-metacognition](https://github.com/legionio/lex-metacognition) - LegionIO agentic cognitive extension: lex-metacognition 🌟0
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [llmprogram/textgrad](https://github.com/llmprogram/textgrad) - TextGrad: Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [longman-max/selfthinker](https://github.com/longman-max/selfthinker) - A program that "thinks it's a program that can think more than a program." 🌟0
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [mfolsom/rlvr-world](https://github.com/mfolsom/rlvr-world) - Official repository for "RLVR-World: Training World Models with Reinforcement Learning" (NeurIPS 2025), https://arxiv.org/abs/2505.13934 🌟0
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [polya20/textgrad](https://github.com/polya20/textgrad) - Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [thesdes/textgrad](https://github.com/thesdes/textgrad) - TextGrad: Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [workofart/selfplay-tictactoe](https://github.com/workofart/selfplay-tictactoe) - benchmark/evaluation/harness signal 🌟0
  `stack:Python` `tag:benchmark-eval` `time:early` `content:2019-12-06`
- [xanther-ai/xce-benchmarks](https://github.com/xanther-ai/xce-benchmarks) - XCE SWE-bench Verified benchmark results — predictions, analysis, and trajectory download scripts 🌟0
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zanwenfu/auto-code-rover](https://github.com/zanwenfu/auto-code-rover) - A project structure aware autonomous software engineer aiming for autonomous program improvement. Resolved 37.3% tasks (pass@1) in SWE-bench lite and 51.6% tasks (pass@3) in SWE-bench ver... 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zbinxp/deer-flow](https://github.com/zbinxp/deer-flow) - An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different... 🌟0
  `stack:Markdown` `tag:benchmark-eval` `time:2026-02` `content:2026-02-28`
- [zixuanfeng-nyu/textgrad](https://github.com/zixuanfeng-nyu/textgrad) - TextGrad: Automatic ''Differentiation'' via Text -- using large language models to backpropagate textual gradients. 🌟0
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`

## Research Code / 研究代码

Paper artifacts and experimental repositories that implement agent evolution methods. / 论文 artifact 与实验复现代码。

- [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) - The official repository of "Position: Agentic Evolution is the Path to Evolving LLMs". 🌟549
  `stack:Markdown` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [vsonicv/es-fine-tuning-paper](https://github.com/vsonicv/es-fine-tuning-paper) - This repo contains the source code for the paper "Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning" 🌟356
  `stack:Python` `tag:research-artifact` `time:2025-10` `content:2025-10-27`
- [maitrix-org/promptagent](https://github.com/maitrix-org/promptagent) - This is the official repo for "PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization". PromptAgent is a novel automatic prompt optimization method... 🌟353
  `stack:Python` `tag:research-artifact` `time:2024-Q2` `content:2024-05-17`
- [sunzey/seagent](https://github.com/sunzey/seagent) - [ICML-2026] Official implementation of "SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience" 🌟246
  `stack:Shell` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [krzysztofdudek/researcherskill](https://github.com/krzysztofdudek/researcherskill) - One file. Your AI agent becomes a scientist. 30+ experiments while you sleep. 🌟223
  `stack:Markdown` `tag:research-artifact` `time:2026-05` `content:2026-05-03`
- [raghavc/llm-rlhf-tuning-with-ppo-and-dpo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo) - Comprehensive toolkit for Reinforcement Learning from Human Feedback (RLHF) training, featuring instruction fine-tuning, reward model training, and support for PPO and DPO algorithms with... 🌟190
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [machuangtao/llm-kg4qa](https://github.com/machuangtao/llm-kg4qa) - LLM-KG4QA: Large Language Models and Knowledge Graphs for Question Answering 🌟157
  `stack:Markdown` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [memtensor/memrl](https://github.com/memtensor/memrl) - Paper: “MEMRL: SELF-EVOLVING AGENTS VIA RUNTIME REINFORCEMENT LEARNING ON EPISODIC MEMORY” Open-Source Code 🌟118
  `stack:Python` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [tencent/selfevolvingagent](https://github.com/tencent/selfevolvingagent) - Research works from Tencent AI Lab regarding self-evolving agents 🌟100
  `stack:Markdown` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [gensi-thuair/flex](https://github.com/gensi-thuair/flex) - The official codebase for our paper, FLEX: Continuous Agent Evolution via Forward Learning from Experience. 🌟78
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [mbchang/meta-prompt](https://github.com/mbchang/meta-prompt) - A re-implementation of Meta-Prompt in LangChain for building self-improving agents. 🌟65
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [euphoria16/ui-genie](https://github.com/euphoria16/ui-genie) - [NeurIPS 2025] UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents 🌟57
  `stack:Markdown` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [zhang677/accelopt](https://github.com/zhang677/accelopt) - [MLSys 2026] AccelOpt: Self-improving Agents for AI Accelerator Kernel Optimization 🌟43
  `stack:Python` `tag:benchmark-eval` `time:unknown` `content:unknown`
- [swe-agent/swe-agent](https://github.com/swe-agent/swe-agent) - SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice. It can also be employed for offensive cybersecurity or competitive coding challenges. [NeurIPS 2... 🌟19
  `stack:Markdown` `tag:research-artifact` `time:2025-05` `content:2025-05-22`
- [ventr1c/memma](https://github.com/ventr1c/memma) - The official repository of "MemMA: Coordinating the Memory Cycle through Multi-Agent Reasoning and In-Situ Self-Evolution". 🌟17
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [ltzheng/curriculummarl](https://github.com/ltzheng/curriculummarl) - Code of "Towards Skilled Population Curriculum for MARL" + Implementation of Curriculum MARL algorithms based on Ray 🌟13
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [octobrist/cope](https://github.com/octobrist/cope) - A LLM-based agent optimization framework that assesses and incorporates planning-execution coordination into agent optimization. (ICML 2026) 🌟11
  `stack:Python` `tag:framework-runtime` `time:unknown` `content:unknown`
- [nickatomlin/lm-selfplay](https://github.com/nickatomlin/lm-selfplay) - Code for the paper "Efficacy of LM Self-Play in Non-Zero-Sum Games" 🌟9
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [noahshinn/reflexion](https://github.com/noahshinn/reflexion) - [NeurIPS 2023] Reflexion: Language Agents with Verbal Reinforcement Learning 🌟3
  `stack:Markdown` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [aiming-lab/agent0](https://github.com/aiming-lab/agent0) - Agent0 Series: Self-Evolving Agents from Zero Data 🌟1
  `stack:Markdown` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [allenai/swe-agent](https://github.com/allenai/swe-agent) - SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice. It can also be employed for offensive cybersecurity or competitive coding challenges. [NeurIPS 2... 🌟0
  `stack:Markdown` `tag:research-artifact` `time:unknown` `content:unknown`
- [paperwave/genenv](https://github.com/paperwave/genenv) - GenEnv: Difficulty-Aligned Co-Evolution Between LLM Agents and Environment Simulators 🌟0
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [star-bob/swe-agent](https://github.com/star-bob/swe-agent) - SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice. It can also be employed for offensive cybersecurity or competitive coding challenges. [NeurIPS 2... 🌟0
  `stack:Markdown` `tag:research-artifact` `time:2026-05` `content:2026-05-21`

## Demos & Applications / 演示与应用

Runnable products, demos, vertical agents, browser/coding/research applications. / 可运行产品、Demo、垂直智能体、浏览器/代码/研究应用。

- [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) - 🐝 The First Self-Improving agents with RL / Prompting Optimization 🌟998
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [lamm-mit/sciagentsdiscovery](https://github.com/lamm-mit/sciagentsdiscovery) - SciAgents 🌟610
  `stack:Python` `tag:application-demo` `time:unknown` `content:unknown`
- [thudm/webrl](https://github.com/thudm/webrl) - Building Open LLM Web Agents with Self-Evolving Online Curriculum RL 🌟524
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [facebookresearch/drzero](https://github.com/facebookresearch/drzero) - Dr. Zero Self-Evolving Search Agents without Training Data 🌟515
  `stack:Shell` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [feiliu36/llm4opt](https://github.com/feiliu36/llm4opt) - A Collection on Large Language Models for Optimization 🌟367
  `stack:Markdown` `tag:application-demo` `time:unknown` `content:unknown`
- [snowflake-labs/agent-world-model](https://github.com/snowflake-labs/agent-world-model) - Agent World Model: Infinity Synthetic Environments for Agentic Reinforcement Learning 🌟356
  `stack:Python` `tag:application-demo` `time:2026-05` `content:2026-05-01`
- [feiliu36/eoh](https://github.com/feiliu36/eoh) - Evolution of Heuristics 🌟319
  `stack:Markdown` `tag:application-demo` `time:unknown` `content:unknown`
- [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) - 🪞 Make your agents recursively self-improve 🌟194
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zaixizhang/stella](https://github.com/zaixizhang/stella) - STELLA: Self-Evolving LLM Agent for Biomedical Research 🌟141
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [fareedkhan-dev/autonomous-agentic-rag](https://github.com/fareedkhan-dev/autonomous-agentic-rag) - Self improving agentic rag pipeline 🌟139
  `stack:Unknown` `tag:tool-module` `time:unknown` `content:unknown`
- [adam-s/intercept](https://github.com/adam-s/intercept) - Turn any website into a typed JSON API using self improving agents 🌟127
  `stack:TypeScript/JavaScript` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [autohandai/code-cli](https://github.com/autohandai/code-cli) - Autohand Code CLI - Ultra fast self evolving coding agent that runs in your terminal 🌟110
  `stack:TypeScript` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [zou-group/sirius](https://github.com/zou-group/sirius) - SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning 🌟101
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [knowledgexlab/muse](https://github.com/knowledgexlab/muse) - Learning on the Job: An Experience-Driven, Self-Evolving Agent for Long-Horizon Tasks 🌟88
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [ecnu-icalk/ell-stulife](https://github.com/ecnu-icalk/ell-stulife) - Self-Evolving Agent via Experience-Driven Lifelong Learning 🌟74
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [yonkoo11/hermes-dojo](https://github.com/yonkoo11/hermes-dojo) - Self-improvement system for Hermes Agent. Monitors performance, finds weak skills, fixes them with self-evolution, reports results. 🌟72
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [keskival/recursive-self-improvement-suite](https://github.com/keskival/recursive-self-improvement-suite) - A suite of open-ended, non-imitative tasks involving generalizable skills for large language model chatbots and agents to enable bootstrapped recursive self-improvement and an unambiguous... 🌟46
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [xiaofangxd/llm/ea](https://github.com/xiaofangxd/llm/ea) - Evolutionary-Algorithm and Large-Language-Model 🌟23
  `stack:Markdown` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [naivoder/mctsr](https://github.com/naivoder/mctsr) - Monte Carlo Tree Search Self-Refine (MCTSr) 🌟22
  `stack:Python` `tag:tool-module` `time:unknown` `content:unknown`
- [immanuelxiv/ppo-self-play](https://github.com/immanuelxiv/ppo-self-play) - Reinforcement Learning | Multi-Agent RL | Self-Play | Proximal Policy Optimization Algorithm (PPO) agent | Unity Tennis environment 🌟20
  `stack:Python` `tag:application-demo` `time:unknown` `content:unknown`
- [galaxy-brain-ai/mcog-core](https://github.com/galaxy-brain-ai/mcog-core) - Metacognitive Core Ontology (MCog Core): A domain-agnostic, foundational ontology for representing metacognitive constructs. Designed for AI systems, cognitive architectures, and applicat... 🌟19
  `stack:Markdown` `tag:application-demo` `time:unknown` `content:unknown`
- [zesearch/self-improvement-llm](https://github.com/zesearch/self-improvement-llm) - A technical and progressive review of self-improvement of LLMs for the future. 🌟13
  `stack:Markdown` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [aiming-lab/atp](https://github.com/aiming-lab/atp) - Alignment Tipping Process: How Self-Evolution Pushes LLM Agents Off the Rails 🌟10
  `stack:Markdown` `tag:tool-module` `time:unknown` `content:unknown`
- [tianyi-stack/madevolve](https://github.com/tianyi-stack/madevolve) - MadEvolve 🌟9
  `stack:Python` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) - Open-source implementation of AlphaEvolve 🌟6
  `stack:Python` `tag:application-demo` `time:unknown` `content:unknown`
- [sakanaai/ai-scientist-v2](https://github.com/sakanaai/ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟6
  `stack:Python` `tag:application-demo` `time:2024-Q2` `content:2024-05-13`
- [nousresearch/hermes-agent-self-evolution](https://github.com/nousresearch/hermes-agent-self-evolution) - ⚒ Evolutionary self-improvement for Hermes Agent — optimize skills, prompts, and code using DSPy + GEPA 🌟3
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [pgg3/l-autoda](https://github.com/pgg3/l-autoda) - L-AutoDA 🌟3
  `stack:Python` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [facebookresearch/hyperagents](https://github.com/facebookresearch/hyperagents) - Self-referential self-improving agents that can optimize for any computable task 🌟2
  `stack:Python` `tag:research-artifact` `time:2026-05` `content:2026-05-21`
- [jennyzzt/dgm](https://github.com/jennyzzt/dgm) - Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents 🌟2
  `stack:Python` `tag:benchmark-eval` `time:2026-05` `content:2026-05-21`
- [amap-ml/skillclaw](https://github.com/amap-ml/skillclaw) - Let Skills Evolve Collectively with Agentic Evolver 🌟1
  `stack:Python` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [charlesq9/self-evolving-agents](https://github.com/charlesq9/self-evolving-agents) - [https://github.com/CharlesQ9/Self-Evolving-Agents/blob/main/figures/evolution.png](https://github.com/CharlesQ9/Self-Evolving-Agents/blob/main/figures/evolution.png) A Survey of Self-Evo... 🌟1
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) - ATLAS by General Intelligence Capital — Self-improving AI trading agents using Karpathy-style autoresearch 🌟1
  `stack:Markdown` `tag:framework-runtime` `time:2026-05` `content:2026-05-21`
- [lfleon9b/sakana-ai-scientist-v2](https://github.com/lfleon9b/sakana-ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟1
  `stack:Python` `tag:application-demo` `time:2024-Q2` `content:2024-05-13`
- [modelscope/agentevolver](https://github.com/modelscope/agentevolver) - AgentEvolver: Towards Efficient Self-Evolving Agent System 🌟1
  `stack:Python` `tag:application-demo` `time:2026-05` `content:2026-05-21`
- [yologdev/yoyo-evolve](https://github.com/yologdev/yoyo-evolve) - A Truman Show of a self-evolving AI coding agent. It writes its own code. Growing up in public. 🌟1
  `stack:Markdown` `tag:tool-module` `time:2026-05` `content:2026-05-21`
- [aaronowh/ai-scientist-v2](https://github.com/aaronowh/ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟0
  `stack:Python` `tag:application-demo` `time:2024-Q2` `content:2024-05-13`
- [abhisakh/ai-scientist-v2](https://github.com/abhisakh/ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟0
  `stack:Python` `tag:application-demo` `time:2024-Q2` `content:2024-05-13`
- [adiban17/ppo-ping-pong-agent-](https://github.com/adiban17/ppo-ping-pong-agent-) - 🏓 RL Pong Agent 🌟0
  `stack:Python` `tag:application-demo` `time:unknown` `content:unknown`
- [quantstellarlab/ai-scientist-v2](https://github.com/quantstellarlab/ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟0
  `stack:Python` `tag:application-demo` `time:2024-Q2` `content:2024-05-13`
- [sakutepov/ai-scientist-v2](https://github.com/sakutepov/ai-scientist-v2) - The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search 🌟0
  `stack:Python` `tag:application-demo` `time:2024-Q3` `content:2024-09-12`
- [tzussman/openevolve](https://github.com/tzussman/openevolve) - Open-source implementation of AlphaEvolve 🌟0
  `stack:Python` `tag:application-demo` `time:2026-05` `content:2026-05-21`

## Community & Learning / 社区与学习

Awesome lists, courses, tutorials, roadmaps, and learning resources. / Awesome列表、课程、教程、路线图与学习资源。

- [tsinghua-fib-lab/world-model](https://github.com/tsinghua-fib-lab/world-model) - [ACM CSUR 2025] Understanding World or Predicting Future? A Comprehensive Survey of World Models 🌟711
  `stack:Markdown` `tag:resource-index` `time:early` `content:2022-06-27`
- [opendilab/awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl) - A curated list of awesome exploration RL resources (continually updated) 🌟689
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [yingchengyang/reinforcement-learning-papers](https://github.com/yingchengyang/reinforcement-learning-papers) - Related papers for reinforcement learning, including classic papers and latest papers in top conferences 🌟569
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) - Recent research papers about Foundation Models for Combinatorial Optimization 🌟534
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [ilsilfverskiold/awesome-llm-resources-list](https://github.com/ilsilfverskiold/awesome-llm-resources-list) - A Curated Collection of resources for applied AI engineering (work in progress). 🌟523
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [tsinghuac3i/awesome-memory-for-agents](https://github.com/tsinghuac3i/awesome-memory-for-agents) - A Collection of Papers about Memory for Language Agents 🌟506
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [jennyzzt/awesome-open-ended](https://github.com/jennyzzt/awesome-open-ended) - Awesome Open-ended AI 🌟438
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [davidzwz/awesome-rag-reasoning](https://github.com/davidzwz/awesome-rag-reasoning) - [EMNLP 2025] Awesome RAG Reasoning Resources 🌟427
  `stack:Markdown` `tag:resource-index` `time:2025-07` `content:2025-07-17`
- [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) - Curated systems, benchmarks, and papers etc. on memory for LLMs/MLLMs --- long-term context, retrieval, and reasoning. 🌟421
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-20`
- [hkust-knowcomp/awesome-llm-scientific-discovery](https://github.com/hkust-knowcomp/awesome-llm-scientific-discovery) - [EMNLP2025] From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery 🌟344
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [qianlima-lab/awesome-lifelong-llm-agent](https://github.com/qianlima-lab/awesome-lifelong-llm-agent) - TPAMI 2026 | This repository collects awesome survey, resource, and paper for lifelong learning LLM agents 🌟300
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) - Guided Evolutionary Strategies 🌟273
  `stack:Jupyter Notebook` `tag:resource-index` `time:unknown` `content:unknown`
- [yxf203/awesome-efficient-agents](https://github.com/yxf203/awesome-efficient-agents) - Survey and paper list on efficiency-guided LLM agents (memory, tool learning, planning). 🌟250
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [openning07/awesome-curriculum-learning](https://github.com/openning07/awesome-curriculum-learning) - some bravo or inspiring research works on the topic of curriculum learning 🌟248
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [lingxi-agent/lingxi](https://github.com/lingxi-agent/lingxi) - Lingxi: Knowledge-Guided Multi-Agent Framework for Repository-Level Issue Resolution 🌟243
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [isenglab/awesomellm4apr](https://github.com/isenglab/awesomellm4apr) - [TOSEM 2026]A Systematic Literature Review on Large Language Models for Automated Program Repair 🌟240
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [researai/awesome-ai-scientist](https://github.com/researai/awesome-ai-scientist) - This is a survey of research on AI scientists, AI researchers, AI engineers, and a series of AI-driven research studies 🌟240
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [youngdubbydu/llm-agent-optimization](https://github.com/youngdubbydu/llm-agent-optimization) - This is the reading list for the survey "A Survey on the Optimization of LLM-based Agents ". We will keep adding papers and improving the list. Any suggestions and PRs are welcome! 🌟231
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [lightchen233/awesome-ai4research](https://github.com/lightchen233/awesome-ai4research) - awesome/list/tutorial/survey resource signal 🌟230
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [evalops/dspy-0to1-guide](https://github.com/evalops/dspy-0to1-guide) - A comprehensive 0-to-1 guide for building self-improving LLM applications with DSPy framework 🌟215
  `stack:Python` `tag:resource-index` `time:unknown` `content:unknown`
- [salvatorera/ml-news-of-the-week](https://github.com/salvatorera/ml-news-of-the-week) - A collection of the the best ML and AI news every week (research, news, resources) 🌟180
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [zzz47zzz/awesome-lifelong-learning-methods-for-llm](https://github.com/zzz47zzz/awesome-lifelong-learning-methods-for-llm) - [ACM Computing Surveys 2025] This repository collects awesome survey, resource, and paper for Lifelong Learning with Large Language Models. (Updated Regularly) 🌟162
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [ghy0501/awesome-continual-learning-in-generative-models](https://github.com/ghy0501/awesome-continual-learning-in-generative-models) - A Comprehensive Survey on Continual Learning in Generative Models. 🌟151
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [agentmemoryworld/awesome-agent-memory](https://github.com/agentmemoryworld/awesome-agent-memory) - [Up-To-Date] Awesome Agent Memory Paper Resource 🌟148
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [xuchen-li/llm-arxiv-daily](https://github.com/xuchen-li/llm-arxiv-daily) - Automatically update arXiv papers about LLM Reasoning, LLM Evaluation, LLM & MLLM and Video Understanding using Github Actions. 🌟144
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [wuxingyu-ai/llm4ec](https://github.com/wuxingyu-ai/llm4ec) - A list of awesome papers and resources of the intersection of Large Language Models and Evolutionary Computation. 🌟139
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [logikon-ai/awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) - Awesome deliberative prompting: How to ask LLMs to produce reliable reasoning and make reason-responsive decisions. 🌟126
  `stack:Markdown` `tag:resource-index` `time:early` `content:2021-03-24`
- [yennning/awesome-code-as-agent-harness-papers](https://github.com/yennning/awesome-code-as-agent-harness-papers) - awesome/list/tutorial/survey resource signal 🌟123
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [smiles724/awesome-llm-rlvr](https://github.com/smiles724/awesome-llm-rlvr) - Collection of latest papers and materials in the area of RLVR! 🌟107
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - A collection of MCP servers. 🌟87
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [zijian-ni/awesome-ai-agents-2026](https://github.com/zijian-ni/awesome-ai-agents-2026) - 🤖 A curated list of AI Agent frameworks, tools, platforms, and resources for 2026 — the year agents went mainstream 🌟81
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [bobxwu/learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers) - A comrephensive collection of learning from rewards in the post-training and test-time scaling of LLMs, with a focus on both reward models and learning strategies across training, inferen... 🌟71
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [arunagirinathan-k/awesome-ai-agents-2026](https://github.com/arunagirinathan-k/awesome-ai-agents-2026) - Awesome AI Agents for 2026 - 300+ AI Agents, Frameworks & Coding • Creative • Voice • Research • Enterprise. Comparison guides, benchmarks & deep dives 🌟69
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [scienceaix/agentskills](https://github.com/scienceaix/agentskills) - Awesome Agent Skills collection list, papers, tools, projects, and resources 🌟63
  `stack:Markdown` `tag:resource-index` `time:2025-11` `content:2025-11-25`
- [mb-mal/awesome-ai-agents-frameworks](https://github.com/mb-mal/awesome-ai-agents-frameworks) - awesome/list/tutorial/survey resource signal 🌟52
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [tsinghua-fib-lab/awesome-ai-scientists](https://github.com/tsinghua-fib-lab/awesome-ai-scientists) - A curated list of awesome resources on AI Scientists based on our survey "A Comprehensive Survey of AI Scientists". 🌟35
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [huggingface/agents-course](https://github.com/huggingface/agents-course) - This repository contains the Hugging Face Agents Course. 🌟28
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [shadowrootdev/awesome-agent-skills-mcp](https://github.com/shadowrootdev/awesome-agent-skills-mcp) - MCP server providing 100+ AI agent skills from Anthropic, Vercel, Trail of Bits, Hugging Face & more. Works with Claude, GitHub Copilot, and any MCP client. 🌟23
  `stack:TypeScript/JavaScript` `tag:resource-index` `time:2024-Q4` `content:2024-11-05`
- [bansky-cl/graphrag-arxiv-daily-paper](https://github.com/bansky-cl/graphrag-arxiv-daily-paper) - awesome/list/tutorial/survey resource signal 🌟22
  `stack:Markdown` `tag:resource-index` `time:2026-04` `content:2026-04-15`
- [voltagent/awesome-agent-skills](https://github.com/voltagent/awesome-agent-skills) - A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. 🌟22
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [clint-kristopher-morris/llm-guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution) - LLM Guided Evolution - The Automation of Models Advancing Models 🌟19
  `stack:Python` `tag:resource-index` `time:2024-Q3` `content:2024-07-08`
- [taishi-n324/awesome-rl-reasoning](https://github.com/taishi-n324/awesome-rl-reasoning) - Awesome-RL-Reasoning 🌟13
  `stack:Markdown` `tag:resource-index` `time:2025-09` `content:2025-09-22`
- [vivy-yi/awesome-agent-orchestration](https://github.com/vivy-yi/awesome-agent-orchestration) - ⭐ Curated list of AI Agent frameworks: AutoGen, CrewAI, MetaGPT, LangGraph, Swarms. Multi-Agent Systems, Swarm Intelligence, A2A Protocol, MCP Protocol. LLM Agents, Agentic AI, Agent Work... 🌟10
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [zhonghaojiang/awesome-issue-solving](https://github.com/zhonghaojiang/awesome-issue-solving) - Agentic Software Issue Resolution with Large Language Models: A Survey 🌟9
  `stack:Markdown` `tag:resource-index` `time:2026-01` `content:2026-01-06`
- [opendilab/awesome-rlhf](https://github.com/opendilab/awesome-rlhf) - A curated list of reinforcement learning with human feedback resources (continually updated) 🌟4
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [xialeiliu/awesome-incremental-learning](https://github.com/xialeiliu/awesome-incremental-learning) - Awesome Incremental Learning 🌟4
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [r4stin/kg-research-agent](https://github.com/r4stin/kg-research-agent) - Evidence-grounded, multi-agent research assistant that performs RAG over scientific papers, extracts structured claims, builds a Neo4j knowledge graph, and answers questions with verifiab... 🌟3
  `stack:Python` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [agi-edgerunners/llm-agents-papers](https://github.com/agi-edgerunners/llm-agents-papers) - A repo lists papers related to LLM based agent 🌟2
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [deep-polyu/awesome-graphrag](https://github.com/deep-polyu/awesome-graphrag) - Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation. 🌟2
  `stack:Markdown` `tag:resource-index` `time:2026-04` `content:2026-04-07`
- [knightnemo/awesome-world-models](https://github.com/knightnemo/awesome-world-models) - A Curated List of Awesome Works in World Modeling, Aiming to Serve as a One-stop Resource for Researchers, Practitioners, and Enthusiasts Interested in World Modeling. 🌟2
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [lmd0311/awesome-world-model](https://github.com/lmd0311/awesome-world-model) - Collect some World Models for Autonomous Driving (and Robotic, etc.) papers. 🌟2
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [luo-junyu/awesome-agent-papers](https://github.com/luo-junyu/awesome-agent-papers) - [Up-to-date] Large Language Model Agent: A Survey on Methodology, Applications and Challenges 🌟2
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [mbzuai-oryx/awesome-llm-post-training](https://github.com/mbzuai-oryx/awesome-llm-post-training) - Awesome Reasoning LLM Tutorial/Survey/Guide 🌟2
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [shichun-liu/agent-memory-paper-list](https://github.com/shichun-liu/agent-memory-paper-list) - The paper list of "Memory in the Age of AI Agents: A Survey" 🌟2
  `stack:Markdown` `tag:resource-index` `time:2025-12` `content:2025-12-16`
- [tsinghuac3i/awesome-rl-for-lrms](https://github.com/tsinghuac3i/awesome-rl-for-lrms) - A Survey of Reinforcement Learning for Large Reasoning Models 🌟2
  `stack:Markdown` `tag:resource-index` `time:2025-09` `content:2025-09-11`
- [ai-boost/awesome-ai-for-science](https://github.com/ai-boost/awesome-ai-for-science) - A curated list of awesome AI tools, libraries, papers, datasets, and frameworks that accelerate scientific discovery — from physics and chemistry to biology, materials, and beyond. 🌟1
  `stack:Markdown` `tag:resource-index` `time:unknown` `content:unknown`
- [kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai](https://github.com/kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai) - 🚀 **2026 Roadmap: Machine Learning, Artificial Intelligence, Generative AI & Agentic AI** 🌟1
  `stack:Markdown` `tag:resource-index` `time:2025-11` `content:2025-11-13`
- [leofan90/awesome-world-models](https://github.com/leofan90/awesome-world-models) - A comprehensive list of papers for the definition of World Models and using World Models for General Video Generation, Embodied AI, and Autonomous Driving, including papers, codes, and re... 🌟1
  `stack:Unknown` `tag:resource-index` `time:unknown` `content:unknown`
- [luh-ai-devnerds/llm-guided-curriculum-rl](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl) - LLM-Guided Curriculum Learning for Multi-Agent Reinforcement Learning 🌟1
  `stack:Python` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [opendilab/awesome-model-based-rl](https://github.com/opendilab/awesome-model-based-rl) - A curated list of awesome model based RL resources (continually updated) 🌟1
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`
- [tmgthb/autonomous-agents](https://github.com/tmgthb/autonomous-agents) - Autonomous Agents (LLMs) research papers. Updated Daily. 🌟1
  `stack:Markdown` `tag:resource-index` `time:2026-05` `content:2026-05-21`

## Papers / 论文

The list below deduplicates 184 raw paper records into canonical paper IDs for readability while preserving timestamps and review links. / 下表将184条原始论文记录按 arXiv/占位ID 去重展示，保留时间戳和 review 链接。

### 2026

- [On the Limits of Self-Improving in Large Language Models: The Singularity Is Not Near Without Symbolic Model Synthesis](https://arxiv.org/abs/2601.05280) [review](paper-reviews/review-2601.05280-on-the-limits-of-self-improving-in-large-language-models-the-singulari.md) - We formalise recursive self-training in Large Language Models (LLMs) and Generative AI as a discrete-time dynamical system. We prove that if the proportion of exogenous, externally grounded signal vanishes a...
  `content:2026-01-05` `collected:2026-05-22T01:00:00+08:00` `slice:2026-01`
- [Evolving from Tool User to Creator via Training-Free Experience Reuse in Multimodal Reasoning](https://arxiv.org/abs/2602.01983) [review](paper-reviews/review-2602.01983-uct-tool-user-to-creator.md) - Existing Tool-Integrated Reasoning (TIR) models have effectively extended the question-answering capabilities of LLMs by incorporating external tools. However, real-world scenarios present numerous open-ende...
  `content:2026-02-02` `collected:2026-05-21T00:00:00+08:00` `slice:2026-02`
- [MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents](https://arxiv.org/abs/2602.02474) [review](paper-reviews/review-2602.02474-memskill.md) - Most Large Language Model (LLM) agent memory systems rely on a small set of static, hand-designed operations for extracting memory. These fixed procedures hard-code human priors about what to store and how t...
  `content:2026-02-02` `collected:2026-05-21T00:00:00+08:00` `slice:2026-02`
- [AriadneMem: Threading the Maze of Lifelong Memory for LLM Agents](https://arxiv.org/abs/2603.03290) [review](paper-reviews/review-2603.03290-ariadnemem.md) - Structured memory system for LLM agents that addresses disconnected evidence and state updates via a decoupled two-phase pipeline. Uses entropy-aware gating to filter noise, conflict-aware coarsening to merg...
  `content:2026-02-05` `collected:2026-05-21T00:00:00+08:00` `slice:2026-02`
- [The Auton Agentic AI Framework](https://arxiv.org/abs/2602.23720) [review](paper-reviews/review-2602.23720-the-auton-agentic-ai-framework-authors-sheng-cao-zhao-chang-chang-li-h.md) - The field of Artificial Intelligence is undergoing a transition from Generative AI -- probabilistic generation of text and images -- to Agentic AI, in which autonomous systems execute actions within external...
  `content:2026-02-27` `collected:2026-05-22T01:00:00+08:00` `slice:2026-02`
- [Advancing Automated Algorithm Design via Evolutionary Stagewise Design with LLMs](https://arxiv.org/abs/2603.07970) [review](paper-reviews/review-2603.07970-evostage-evolutionary-stagewise-design.md) - With the rapid advancement of human science and technology, problems in industrial scenarios are becoming increasingly challenging, bringing significant challenges to traditional algorithm design. Automated...
  `content:2026-03-09` `collected:2026-05-21T00:00:00+08:00` `slice:2026-03`
- [SAGE: Multi-Agent Self-Evolution for LLM Reasoning](https://arxiv.org/abs/2603.15255) [review](paper-reviews/review-2603.15255-sage-multi-agent-self-evolution.md) - Reinforcement learning with verifiable rewards improves reasoning in large language models (LLMs), but many methods still rely on large human-labeled datasets. While self-play reduces this dependency, it oft...
  `content:2026-03-16` `collected:2026-05-21T00:00:00+08:00` `slice:2026-03`
- [Hyperagents](https://arxiv.org/abs/2603.19461) [review](paper-reviews/review-2603.19461-hyperagents.md) - Self-improving AI systems aim to reduce reliance on human engineering by learning to improve their own learning and problem-solving processes. Existing approaches to self-improvement rely on fixed, handcraft...
  `content:2026-03-19` `collected:2026-05-21T23:00:00+08:00` `slice:2026-03`
- [Self-Organizing Multi-Agent Systems for Continuous Software Development](https://arxiv.org/abs/2603.25928) [review](paper-reviews/review-2603.25928-self-organizing-mas-software-dev.md) - Large Language Model-based multi-agent systems have shown promise in automating software development tasks. However, most vibe code systems focus on completing small tasks and incremental code changes, leavi...
  `content:2026-03-26` `collected:2026-05-21T00:00:00+08:00` `slice:2026-03`
- [Drop the Hierarchy and Roles: How Self-Organizing LLM Agents Outperform Designed Structures](https://arxiv.org/abs/2603.28990) [review](paper-reviews/review-2603.28990-self-organizing-llm-agents.md) - How much autonomy can multi-agent LLM systems sustain -- and what enables it? We present a 25,000-task computational experiment spanning 8 models, 4--256 agents, and 8 coordination protocols ranging from ext...
  `content:2026-03-30` `collected:2026-05-21T00:00:00+08:00` `slice:2026-03`
- [CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery](https://arxiv.org/abs/2604.01658) [review](paper-reviews/review-2604.01658-coral-autonomous-multi-agent-evolution.md) - Large language model (LLM)-based evolution is a promising approach for open-ended discovery, where progress requires sustained search and knowledge accumulation. Existing methods still rely heavily on fixed...
  `content:2026-04-02` `collected:2026-05-21T00:00:00+08:00` `slice:2026-04`
- [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Verification](https://arxiv.org/abs/2604.01687) [review](paper-reviews/review-2604.01687-coevoskills-self-evolving-agent-skills-via-co-evolutionary-verificatio.md) - Anthropic proposes the concept of skills for LLM agents to tackle multi-step professional tasks that simple tool invocations cannot address. A tool is a single, self-contained function, whereas a skill is a...
  `content:2026-04-02` `collected:2026-05-22T01:00:00+08:00` `slice:2026-04`
- [Do Agent Societies Develop Intellectual Elites? The Hidden Power Laws of Collective Cognition in LLM Multi-Agent Systems](https://arxiv.org/abs/2604.02674) [review](paper-reviews/review-2604.02674-agent-societies-intellectual-elites.md) - Large Language Model (LLM) multi-agent systems are increasingly deployed as interacting agent societies, yet scaling these systems often yields diminishing or unstable returns, the causes of which remain poo...
  `content:2026-04-03` `collected:2026-05-21T00:00:00+08:00` `slice:2026-04`
- [Mem2Evolve: Towards Self-Evolving Agents via Co-Evolutionary Capability Expansion and Experience Distillation](https://arxiv.org/abs/2604.10923) [review](paper-reviews/review-2604.10923-mem2evolve-co-evolutionary.md) - While large language model-powered agents can self-evolve by accumulating experience or by dynamically creating new assets (i.e., tools or expert agents), existing frameworks typically treat these two evolut...
  `content:2026-04-13` `collected:2026-05-21T00:00:00+08:00` `slice:2026-04`
- [Autogenesis: A Self-Evolving Agent Protocol](https://arxiv.org/abs/2604.15034) [review](paper-reviews/review-2604.15034-autogenesis.md) - Recent advances in LLM based agent systems have shown promise in tackling complex, long horizon tasks. However, existing agent protocols (e.g., A2A and MCP) under specify cross entity lifecycle and context m...
  `content:2026-04-16` `collected:2026-05-21T22:30:00+08:00` `slice:2026-04`
- [GenericAgent: A Token-Efficient Self-Evolving LLM Agent via Contextual Information Density Maximization (V1.0)](https://arxiv.org/abs/2604.17091) [review](paper-reviews/review-2604.17091-genericagent.md) - Long-horizon large language model (LLM) agents are fundamentally limited by context. As interactions become longer, tool descriptions, retrieved memories, and raw environmental feedback accumulate and push o...
  `content:2026-04-18` `collected:2026-05-22T01:00:00+08:00` `slice:2026-04`
- [Training LLM Agents for Spontaneous, Reward-Free Self-Evolution via World Knowledge Exploration](https://arxiv.org/abs/2604.18131) [review](paper-reviews/review-2604.18131-native-agency-self-evolution.md) - Most agents today "self-evolve" by following rewards and rules defined by humans. However, this process remains fundamentally dependent on external supervision; without human guidance, the evolution stops. I...
  `content:2026-04-20` `collected:2026-05-21T00:00:00+08:00` `slice:2026-04`
- [CodeEvolve: LLM-Driven Evolutionary Optimization with Runtime-Enriched Target Selection for Multi-Language Code Enhancement](https://arxiv.org/abs/2605.04677) [review](paper-reviews/review-2605.04677-codeevolve.md) - We present CodeEvolve, an evolutionary framework for improving program performance and code quality with Large Language Models (LLMs). CodeEvolve extends OpenEvolve with runtime-guided target selection, Mont...
  `content:2026-05-06` `collected:2026-05-21T00:00:00+08:00` `slice:2026-05`
- [SkillOS: Learning Skill Curation for Self-Evolving Agents](https://arxiv.org/abs/2605.06614) [review](paper-reviews/review-2605.06614-skillos-learning-skill-curation-for-self-evolving-agents-authors-siru.md) - LLM-based agents are increasingly deployed to handle streaming tasks, yet they often remain one-off problem solvers that fail to learn from past interactions. Reusable skills distilled from experience provid...
  `content:2026-05-07` `collected:2026-05-22T01:00:00+08:00` `slice:2026-05`
- [Do Self-Evolving Agents Forget? Capability Degradation and Preservation in Lifelong LLM Agent Adaptation](https://arxiv.org/abs/2605.09315) [review](paper-reviews/review-2605.09315-self-evolving-agents-forget.md) - Recent advances in LLM agents enable systems that autonomously refine workflows, accumulate reusable skills, self-train their underlying models, and maintain persistent memory. However, we show that such sel...
  `content:2026-05-10` `collected:2026-05-21T23:10:00+08:00` `slice:2026-05`
- [OEP: Poisoning Self-Evolving LLM Agents via Locally Correct but Non-Transferable Experiences](https://arxiv.org/abs/2605.18930) [review](paper-reviews/review-2605.18930-oep-poisoning.md) - Memory-augmented large language model (LLM) agents use iterative reflection and self-evolution to solve complex tasks, but these mechanisms introduce security risks. Existing agentic memory attacks require p...
  `content:2026-05-18` `collected:2026-05-21T23:10:00+08:00` `slice:2026-05`
- [Prompt Optimization for LLM Code Generation via Reinforcement Learning](https://arxiv.org/abs/2605.19102) [review](paper-reviews/review-2605.19102-prompt-optimization-rl.md) - Large Language Models (LLMs) can generate code from natural language, but their performance is highly sensitive to prompt formulation. We propose a reinforcement-learning-based framework that models prompt r...
  `content:2026-05-18` `collected:2026-05-21T00:00:00+08:00` `slice:2026-05`

### 2025

- [ProgCo: Program Helps Self-Correction of Large Language Models](https://arxiv.org/abs/2501.01264) [review](paper-reviews/review-2501.01264-progco-program-helps-self-correction-of-large-language-models.md) - Self-Correction aims to enable large language models (LLMs) to self-verify and self-refine their initial responses without external feedback. However, LLMs often fail to effectively self-verify and generate...
  `content:2025-01-02` `collected:2026-05-21T00:00:00+08:00` `slice:2025-01`
- [Lifelong Learning of Large Language Model based Agents: A Roadmap](https://arxiv.org/abs/2501.07278) [review](paper-reviews/review-2501.07278-lifelong-learning-of-large-language-model-based-agents-a-roadmap.md) - Lifelong learning, also known as continual or incremental learning, is a crucial component for advancing Artificial General Intelligence (AGI) by enabling systems to continuously adapt in dynamic environment...
  `content:2025-01-13` `collected:2026-05-21T00:00:00+08:00` `slice:2025-01`
- [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://arxiv.org/abs/2501.11425) [review](paper-reviews/review-2501.11425-agent-r.md) - Large Language Models (LLMs) agents are increasingly pivotal for addressing complex tasks in interactive environments. Existing work mainly focuses on enhancing performance through behavior cloning from stro...
  `content:2025-01-20` `collected:2026-05-21T00:00:00+08:00` `slice:2025-01`
- [Revisit Self-Debugging with Self-Generated Tests for Code Generation](https://arxiv.org/abs/2501.12793) [review](paper-reviews/review-2501.12793-revisit-self-debugging-with-self-generated-tests-for-code-generation.md) - Large language models (LLMs) have shown significant advancements in code generation, but still face challenges on tasks beyond their basic capabilities. Recently, the notion of self-debugging has been propos...
  `content:2025-01-22` `collected:2026-05-21T00:00:00+08:00` `slice:2025-01`
- [MONA: Myopic Optimization with Non-myopic Approval Can Mitigate Multi-step Reward Hacking](https://arxiv.org/abs/2501.13011) [review](paper-reviews/review-2501.13011-mona-myopic-optimization-with-non-myopic-approval-can-mitigate-multi-s.md) - Future advanced AI systems may learn sophisticated strategies through reinforcement learning (RL) that humans cannot understand well enough to safely evaluate. We propose a training method which avoids agent...
  `content:2025-01-22` `collected:2026-05-21T00:00:00+08:00` `slice:2025-01`
- [Dominated Novelty Search: Rethinking Local Competition in Quality-Diversity](https://arxiv.org/abs/2502.00593) [review](paper-reviews/review-2502.00593-dominated-novelty-search-rethinking-local-competition-in-quality-diver.md) - Quality-Diversity is a family of evolutionary algorithms that generate diverse, high-performing solutions through local competition principles inspired by natural evolution. While research has focused on imp...
  `content:2025-02-01` `collected:2026-05-21T00:00:00+08:00` `slice:2025-02`
- [SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning](https://arxiv.org/abs/2502.04780) [review](paper-reviews/review-2502.04780-sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-a.md) - Multi-agent AI systems powered by large language models (LLMs) are increasingly applied to solve complex tasks. However, these systems often rely on fragile, manually designed prompts and heuristics, making...
  `content:2025-02-07` `collected:2026-05-22T01:00:00+08:00` `slice:2025-02`
- [Evolving LLMs' Self-Refinement Capability via Iterative Preference Optimization](https://arxiv.org/abs/2502.05605) [review](paper-reviews/review-2502.05605-evolving-llms-self-refinement-capability-via-synergistic-training-infe.md) - While large language models (LLMs) have demonstrated remarkable general performance, enabling smaller models to achieve capabilities comparable to their larger counterparts remains a critical challenge. For...
  `content:2025-02-08` `collected:2026-05-21T00:00:00+08:00` `slice:2025-02`
- [AutoAgent: A Fully-Automated and Zero-Code Framework for LLM Agents](https://arxiv.org/abs/2502.05957) [review](paper-reviews/review-2502.05957-autoagent-a-fully-automated-and-zero-code-framework-for-llm-agents.md) - Large Language Model (LLM) Agents have demonstrated remarkable capabilities in task automation and intelligent decision-making, driving the widespread adoption of agent development frameworks such as LangCha...
  `content:2025-02-09` `collected:2026-05-21T00:00:00+08:00` `slice:2025-02`
- [A-Mem: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) [review](paper-reviews/review-2502.12110-a-mem-agentic-memory-for-llm-agents-arxiv-id-2502-12110-url-https-arxi.md) - Novel agentic memory system for LLM agents that dynamically organizes memories following the Zettelkasten method. Creates interconnected knowledge networks through dynamic indexing and linking. When new memo...
  `content:2025-02-17` `collected:2026-05-21T00:00:00+08:00` `slice:2025-02`
- [STaR-SQL: Self-Taught Reasoner for Text-to-SQL](https://arxiv.org/abs/2502.13550) [review](paper-reviews/review-2502.13550-star-sql-self-taught-reasoner-for-text-to-sql.md) - Generating step-by-step "chain-of-thought" rationales has proven effective for improving the performance of large language models on complex reasoning tasks. However, applying such techniques to structured t...
  `content:2025-02-19` `collected:2026-05-21T00:00:00+08:00` `slice:2025-02`
- [Advances and Challenges in Foundation Agents: From Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems](https://arxiv.org/abs/2504.01990) [review](paper-reviews/review-2504.01990-advances-and-challenges-in-foundation-agents-from-brain-inspired-intel.md) - The advent of large language models (LLMs) has catalyzed a transformative shift in artificial intelligence, paving the way for advanced intelligent agents capable of sophisticated reasoning, robust perceptio...
  `content:2025-03-31` `collected:2026-05-21T00:00:00+08:00` `slice:2025-03`
- [A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) [review](paper-reviews/review-2504.15228-sica.md) - Recent advancements in Large Language Models (LLMs) have spurred interest in deploying LLM agents to undertake tasks in the world. LLMs are often deployed in agent systems: code that orchestrates LLM calls a...
  `content:2025-04-21` `collected:2026-05-21T00:00:00+08:00` `slice:2025-04`
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://arxiv.org/abs/2504.21024) [review](paper-reviews/review-2504.21024-webevolver.md) - Agent self-improvement, where the backbone Large Language Model (LLM) of the agent are trained on trajectories sampled autonomously based on their own policies, has emerged as a promising approach for enhanc...
  `content:2025-04-23` `collected:2026-05-21T00:00:00+08:00` `slice:2025-04`
- [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn Reinforcement Learning](https://arxiv.org/abs/2504.20073) [review](paper-reviews/review-2504.20073-ragen.md) - Training large language models (LLMs) as interactive agents presents unique challenges including long-horizon decision making and interacting with stochastic environment feedback. While reinforcement learnin...
  `content:2025-04-24` `collected:2026-05-21T00:00:00+08:00` `slice:2025-04`
- [Self-Generated In-Context Examples Improve LLM Agents for Sequential Decision-Making Tasks](https://arxiv.org/abs/2505.00234) [review](paper-reviews/review-2505.00234-self-generated-in-context-examples-improve-llm-agents-for-sequential-d.md) - Improving Large Language Model (LLM) agents for sequential decision-making tasks typically requires extensive task-specific knowledge engineering--custom prompts, curated examples, and specialized observatio...
  `content:2025-05-01` `collected:2026-05-22T01:00:00+08:00` `slice:2025-05`
- [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335) [review](paper-reviews/review-2505.03335-absolute-zero.md) - Reinforcement learning with verifiable rewards (RLVR) has shown promise in enhancing the reasoning capabilities of large language models by learning directly from outcome-based rewards. Recent RLVR works tha...
  `content:2025-05-06` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [RLSR: Reinforcement Learning from Self Reward](https://arxiv.org/abs/2505.08827) [review](paper-reviews/review-2505.08827-rlsr-reinforcement-learning-from-self-reward.md) - Large language models can generate solutions to complex problems, but training them with reinforcement learning typically requires verifiable rewards that are expensive to create and not possible for all dom...
  `content:2025-05-12` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [Self-Evolving Curriculum for LLM Reasoning](https://arxiv.org/abs/2505.14970) [review](paper-reviews/review-2505.14970-self-evolving-curriculum-for-llm-reasoning.md) - Reinforcement learning (RL) has proven effective for fine-tuning large language models (LLMs), significantly enhancing their reasoning abilities in domains such as mathematics and code generation. A crucial...
  `content:2025-05-20` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior](https://arxiv.org/abs/2505.16067) [review](paper-reviews/review-2505.16067-how-memory-management-impacts-llm-agents-an-empirical-study-of-experie.md) - Memory is a critical component in large language model (LLM)-based agents, enabling them to store and retrieve past executions to improve task performance over time. In this paper, we conduct an empirical st...
  `content:2025-05-21` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection](https://arxiv.org/abs/2505.16475) [review](paper-reviews/review-2505.16475-reflectevo-improving-meta-introspection-of-small-llms-by-learning-self.md) - We present a novel pipeline, ReflectEvo, to demonstrate that small language models (SLMs) can enhance meta introspection through reflection learning. This process iteratively generates self-reflection for se...
  `content:2025-05-22` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [SEW: Self-Evolving Agentic Workflows for Automated Code Generation](https://arxiv.org/abs/2505.18646) [review](paper-reviews/review-2505.18646-sew-self-evolving-agentic-workflows-for-automated-code-generation-arxi.md) - Novel self-evolving framework that automatically generates and optimises multi-agent workflows. SEW can automatically design agentic workflows and optimise them through self-evolution, bringing up to 33% imp...
  `content:2025-05-24` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954) [review](paper-reviews/review-2505.22954-darwin-godel-machine.md) - Today's AI systems have human-designed, fixed architectures and cannot autonomously and continuously improve themselves. The advance of AI could itself be automated. If done safely, that would accelerate AI...
  `content:2025-05-29` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [Self-Correcting Code Generation Using Small Language Models](https://arxiv.org/abs/2505.23060) [review](paper-reviews/review-2505.23060-self-correcting-code-generation-using-small-language-models.md) - Self-correction has demonstrated potential in code generation by allowing language models to revise and improve their outputs through successive refinement. Recent studies have explored prompting-based strat...
  `content:2025-05-29` `collected:2026-05-21T00:00:00+08:00` `slice:2025-05`
- [Self-Challenging Language Model Agents](https://arxiv.org/abs/2506.01716) [review](paper-reviews/review-2506.01716-self-challenging-language-model-agents.md) - Large language models are quickly becoming the foundation for intelligent agents that are capable of using tools. However, training such agents is challenging because it requires human creation and annotatio...
  `content:2025-06-02` `collected:2026-05-21T00:00:00+08:00` `slice:2025-06`
- [Agents of Change: Self-Evolving LLM Agents for Strategic Planning](https://arxiv.org/abs/2506.04651) [review](paper-reviews/review-2506.04651-agents-of-change-hexmachina.md) - We address the long-horizon gap in large language model (LLM) agents by enabling them to sustain coherent strategies in adversarial, stochastic environments. Settlers of Catan provides a challenging benchmar...
  `content:2025-06-05` `collected:2026-05-21T00:00:00+08:00` `slice:2025-06`
- [Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation](https://arxiv.org/abs/2506.09046) [review](paper-reviews/review-2506.09046-agentic-neural-networks-self-evolving-multi-agent-systems-via-textual.md) - Leveraging multiple Large Language Models(LLMs) has proven effective for addressing complex, high-dimensional tasks, but current approaches often rely on static, manually engineered multi-agent configuration...
  `content:2025-06-10` `collected:2026-05-21T00:00:00+08:00` `slice:2025-06`
- [Self-Adapting Language Models](https://arxiv.org/abs/2506.10943) [review](paper-reviews/review-2506.10943-self-adapting-language-models-authors-adam-zweiger-jyothish-pari-han-g.md) - Large language models (LLMs) are powerful but static; they lack mechanisms to adapt their weights in response to new tasks, knowledge, or examples. We introduce Self-Adapting LLMs (SEAL), a framework that en...
  `content:2025-06-12` `collected:2026-05-22T01:00:00+08:00` `slice:2025-06`
- [AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131) [review](paper-reviews/review-2506.13131-alphaevolve.md) - In this white paper, we present AlphaEvolve, an evolutionary coding agent that substantially enhances capabilities of state-of-the-art LLMs on highly challenging tasks such as tackling open scientific proble...
  `content:2025-06-16` `collected:2026-05-21T00:00:00+08:00` `slice:2025-06`
- [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning](https://arxiv.org/abs/2506.24119) [review](paper-reviews/review-2506.24119-spiral.md) - Self-play framework where models learn by playing multi-turn, zero-sum games against continuously improving versions of themselves, generating an automatic curriculum of stronger opponents, and eliminating t...
  `content:2025-06-30` `collected:2026-05-21T00:00:00+08:00` `slice:2025-06`
- [EvoAgentX: An Automated Framework for Evolving Agentic Workflows](https://arxiv.org/abs/2507.03616) [review](paper-reviews/review-2507.03616-evoagentx-an-automated-framework-for-evolving-agentic-workflows-author.md) - Multi-agent systems (MAS) have emerged as a powerful paradigm for orchestrating large language models (LLMs) and specialized tools to collaboratively address complex tasks. However, existing MAS frameworks o...
  `content:2025-07-04` `collected:2026-05-22T01:00:00+08:00` `slice:2025-07`
- [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) [review](paper-reviews/review-2507.19457-gepa-reflective-prompt-evolution-can-outperform-reinforcement-learning.md) - Large language models (LLMs) are increasingly adapted to downstream tasks via reinforcement learning (RL) methods like Group Relative Policy Optimization (GRPO), which often require thousands of rollouts to...
  `content:2025-07-25` `collected:2026-05-22T01:00:00+08:00` `slice:2025-07`
- [A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence](https://arxiv.org/abs/2507.21046) [review](paper-reviews/review-2507.21046-a-survey-of-self-evolving-agents-what-when-how-and-where-to-evolve-on.md) - Large Language Models (LLMs) have demonstrated remarkable capabilities across diverse tasks but remain fundamentally static, unable to adapt their internal parameters to novel tasks, evolving knowledge domai...
  `content:2025-07-28` `collected:2026-05-21T00:00:00+08:00` `slice:2025-07`
- [SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning with LLM-Based Agents](https://arxiv.org/abs/2508.02085) [review](paper-reviews/review-2508.02085-se-agent-trajectory-optimization.md) - Large Language Model (LLM)-based agents have recently shown impressive capabilities in complex reasoning and tool use via multi-step interactions with their environments. While these agents have the potentia...
  `content:2025-08-04` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://arxiv.org/abs/2508.04700) [review](paper-reviews/review-2508.04700-seagent.md) - Repurposing large vision-language models (LVLMs) as computer use agents (CUAs) has led to substantial breakthroughs, primarily driven by human-labeled data. However, these models often struggle with novel an...
  `content:2025-08-06` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems](https://arxiv.org/abs/2508.07407) [review](paper-reviews/review-2508.07407-self-evolving-agents-survey.md) - Recent advances in large language models have sparked growing interest in AI agents capable of solving complex, real-world tasks. However, most existing agent systems rely on manually crafted configurations...
  `content:2025-08-10` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [EvoCurr: Self-evolving Curriculum with Behavior Code Generation for Complex Decision-making](https://arxiv.org/abs/2508.09586) [review](paper-reviews/review-2508.09586-evocurr.md) - Large Language Models (LLMs) have demonstrated remarkable capabilities across diverse domains, including programming, planning, and decision-making. However, their performance often degrades when faced with...
  `content:2025-08-13` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [Building Self-Evolving Agents via Experience-Driven Lifelong Learning: A Framework and Benchmark](https://arxiv.org/abs/2508.19005) [review](paper-reviews/review-2508.19005-ell-framework.md) - As AI advances toward general intelligence, the focus is shifting from systems optimized for static tasks to creating open-ended agents that learn continuously. In this paper, we introduce Experience-driven...
  `content:2025-08-26` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [Memory-R1: Enhancing Large Language Model Agents to Manage and Utilize Memories via Reinforcement Learning](https://arxiv.org/abs/2508.19828) [review](paper-reviews/review-2508.19828-memory-r1.md) - Reinforcement learning framework that equips LLMs with the ability to actively manage and utilize external memory. Two-agent architecture: RL-trained Memory Manager (ADD/UPDATE/DELETE/NOOP) and Answer Agent...
  `content:2025-08-27` `collected:2026-05-21T00:00:00+08:00` `slice:2025-08`
- [Bootstrapping Task Spaces for Self-Improvement](https://arxiv.org/abs/2509.04575) [review](paper-reviews/review-2509.04575-bootstrapping-task-spaces-exit.md) - Progress in many task domains emerges from repeated revisions to previous solution attempts. Training agents that can reliably self-improve over such sequences at inference-time is a natural target for reinf...
  `content:2025-09-04` `collected:2026-05-21T00:00:00+08:00` `slice:2025-09`
- [SAMULE: Self-Learning Agents Enhanced by Multi-Level Reflection](https://arxiv.org/abs/2509.20562) [review](paper-reviews/review-2509.20562-samule.md) - Framework for self-learning agents powered by a retrospective language model trained based on Multi-Level Reflection Synthesis. Synthesizes high-quality reflections across three complementary levels: Single-...
  `content:2025-09-24` `collected:2026-05-21T00:00:00+08:00` `slice:2025-09`
- [InfiAgent: Self-Evolving Pyramid Agent Framework for Infinite Scenarios](https://arxiv.org/abs/2509.22502) [review](paper-reviews/review-2509.22502-infiagent.md) - Large Language Model (LLM) agents have demonstrated remarkable capabilities in organizing and executing complex tasks, and many such agents are now widely used in various application scenarios. However, deve...
  `content:2025-09-26` `collected:2026-05-21T00:00:00+08:00` `slice:2025-09`
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://arxiv.org/abs/2509.25140) [review](paper-reviews/review-2509.25140-reasoningbank.md) - With the growing adoption of large language model agents in persistent real-world roles, they naturally encounter continuous streams of tasks. A key limitation, however, is their failure to learn from the ac...
  `content:2025-09-29` `collected:2026-05-21T00:00:00+08:00` `slice:2025-09`
- [Vision-Zero: Scalable VLM Self-Evolution via Multi-Agent Self-Play](https://arxiv.org/abs/2509.25541) [review](paper-reviews/review-2509.25541-vision-zero-vlm-self-play.md) - Label-free, domain-agnostic multi-agent self-play framework for self-evolving VLMs through competitive visual games generated from arbitrary image inputs. Trains VLMs in "Who Is the Spy"-style games where mo...
  `content:2025-09-29` `collected:2026-05-21T00:00:00+08:00` `slice:2025-09`
- [Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents](https://arxiv.org/abs/2509.26354) [review](paper-reviews/review-2509.26354-misevolution.md) - Advances in Large Language Models (LLMs) have enabled a new class of self-evolving agents that autonomously improve through interaction with the environment, demonstrating strong capabilities. However, self-...
  `content:2025-09-30` `collected:2026-05-21T23:10:00+08:00` `slice:2025-09`
- [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618) [review](paper-reviews/review-2510.04618-ace.md) - Large language model (LLM) applications such as agents and domain-specific reasoning increasingly rely on context adaptation: modifying inputs with instructions, strategies, or evidence, rather than weight u...
  `content:2025-10-06` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [Scientific Algorithm Discovery by Augmenting AlphaEvolve with Deep Research](https://arxiv.org/abs/2510.06056) [review](paper-reviews/review-2510.06056-deepevolve.md) - Large language models hold promise as scientific assistants, yet existing agents either rely solely on algorithm evolution or on deep research in isolation, both of which face critical limitations. Pure algo...
  `content:2025-10-07` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [Self-Improving LLM Agents at Test-Time](https://arxiv.org/abs/2510.07841) [review](paper-reviews/review-2510.07841-test-time-self-improvement.md) - One paradigm of language model (LM) fine-tuning relies on creating large training datasets, under the assumption that high quantity and diversity will enable models to generalize to novel tasks after post-tr...
  `content:2025-10-09` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [Towards Agentic Self-Learning LLMs in Search Environment](https://arxiv.org/abs/2510.14253) [review](paper-reviews/review-2510.14253-agentic-self-learning.md) - We study whether self-learning can scale LLM-based agents without relying on human-curated datasets or predefined rule-based rewards. Through controlled experiments in a search-agent setting, we identify two...
  `content:2025-10-16` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle](https://arxiv.org/abs/2510.16079) [review](paper-reviews/review-2510.16079-evolver.md) - Current Large Language Model (LLM) agents show strong performance in tool use, but lack the crucial capability to systematically learn from their own experiences. While existing frameworks mainly focus on mi...
  `content:2025-10-17` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [Deep Self-Evolving Reasoning](https://arxiv.org/abs/2510.17498) [review](paper-reviews/review-2510.17498-deep-self-evolving-reasoning-dser.md) - Long-form chain-of-thought reasoning has become a cornerstone of advanced reasoning in large language models. While recent verification-refinement frameworks have enabled proprietary models to solve Olympiad...
  `content:2025-10-20` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [InspectCoder: Dynamic Analysis-Enabled Self Repair through interactive LLM-Debugger Collaboration](https://arxiv.org/abs/2510.18327) [review](paper-reviews/review-2510.18327-inspectcoder-debugger-repair.md) - Large Language Models (LLMs) frequently generate buggy code with complex logic errors that are challenging to diagnose. While existing LLM-based self-repair approaches conduct intensive static semantic analy...
  `content:2025-10-21` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [Multi-Agent Evolve: LLM Self-Improve through Co-evolution](https://arxiv.org/abs/2510.23595) [review](paper-reviews/review-2510.23595-multi-agent-evolve-mae.md) - Reinforcement Learning (RL) has demonstrated significant potential in enhancing the reasoning capabilities of large language models (LLMs). However, the success of RL for LLMs heavily relies on human-curated...
  `content:2025-10-27` `collected:2026-05-21T00:00:00+08:00` `slice:2025-10`
- [FLEX: Continuous Agent Evolution via Forward Learning from Experience](https://arxiv.org/abs/2511.06449) [review](paper-reviews/review-2511.06449-flex-forward-learning-from-experience.md) - Gradient-free learning paradigm enabling LLM agents to continuously evolve through accumulated experience. Constructs structured experience library through continual reflection on successes and failures. Del...
  `content:2025-11-09` `collected:2026-05-21T00:00:00+08:00` `slice:2025-11`
- [AgentEvolver: Towards Efficient Self-Evolving Agent System](https://arxiv.org/abs/2511.10395) [review](paper-reviews/review-2511.10395-agentevolver.md) - Autonomous agents powered by large language models (LLMs) have the potential to significantly enhance human productivity by reasoning, using tools, and executing complex tasks in diverse environments. Howeve...
  `content:2025-11-13` `collected:2026-05-21T00:00:00+08:00` `slice:2025-11`
- [Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning](https://arxiv.org/abs/2511.16043) [review](paper-reviews/review-2511.16043-agent0-zero-data-tool-integrated-reasoning.md) - Large Language Model (LLM) Agents, often trained with Reinforcement Learning (RL), are constrained by a dependency on human-curated data, limiting scalability and tethering AI to human knowledge. Existing se...
  `content:2025-11-20` `collected:2026-05-21T00:00:00+08:00` `slice:2025-11`
- [ThetaEvolve: Test-time Learning on Open Problems](https://arxiv.org/abs/2511.23473) [review](paper-reviews/review-2511.23473-thetaevolve-test-time-learning.md) - Recent advances in large language models (LLMs) have enabled breakthroughs in mathematical discovery, exemplified by AlphaEvolve, a closed-source system that evolves programs to improve bounds on open proble...
  `content:2025-11-28` `collected:2026-05-21T00:00:00+08:00` `slice:2025-11`
- [Evolving Excellence: Automated Optimization of LLM-based Agents](https://arxiv.org/abs/2512.09108) [review](paper-reviews/review-2512.09108-artemis-evolving-excellence.md) - Agentic AI systems built on large language models (LLMs) offer significant potential for automating complex workflows, from software development to customer support. However, LLM agents often underperform du...
  `content:2025-12-09` `collected:2026-05-21T00:00:00+08:00` `slice:2025-12`
- [Memento-II: Learning by Stateful Reflective Memory](https://arxiv.org/abs/2512.22716) [review](paper-reviews/review-2512.22716-memento-ii-stateful-reflective-memory.md) - Theoretical framework for continual and experiential learning in LLM agents integrating episodic memory with reinforcement learning. Introduces Stateful Reflective Decision Process (SRDP), a formal abstracti...
  `content:2025-12-27` `collected:2026-05-21T00:00:00+08:00` `slice:2025-12`

### 2024

- [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/abs/2401.01335) [review](paper-reviews/review-2401.01335-self-play-fine-tuning-converts-weak-language-models-to-strong-language.md) - Computer Science > Machine Learning arXiv:2401.01335 (cs) Submitted on 2 Jan 2024 (v1), last revised 14 Jun 2024 (this version, v3) # Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Mo...
  `content:2024-01-02` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020) [review](paper-reviews/review-2401.10020-self-rewarding.md) - Computer Science > Computation and Language arXiv:2401.10020 (cs) Submitted on 18 Jan 2024 (v1), last revised 28 Mar 2025 (this version, v3) # Self-Rewarding Language Models Authors: Weizhe Yuan, Richard Yua...
  `content:2024-01-18` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution](https://arxiv.org/abs/2401.13996) [review](paper-reviews/review-2401.13996-investigate-consolidate-exploit-a-general-strategy-for-inter-task-agen.md) - Computer Science > Computation and Language arXiv:2401.13996 (cs) Submitted on 25 Jan 2024 # Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution Authors: Cheng Qian, Shiha...
  `content:2024-01-25` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization](https://arxiv.org/abs/2402.17574) [review](paper-reviews/review-2402.17574-agent-pro-learning-to-evolve-via-policy-level-reflection-and-optimizat.md) - Computer Science > Artificial Intelligence arXiv:2402.17574 (cs) Submitted on 27 Feb 2024 (v1), last revised 6 Jun 2024 (this version, v3) # Agent-Pro: Learning to Evolve via Policy-Level Reflection and Opti...
  `content:2024-02-27` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [Large Language Models As Evolution Strategies](https://arxiv.org/abs/2402.18381) [review](paper-reviews/review-2402.18381-large-language-models-as-evolution-strategies-arxiv-id-2402-18381-url.md) - Investigates whether LLMs can implement evolutionary optimization algorithms. Introduces prompting strategy with least-to-most sorting of discretized population members and LLM-proposed improvements. Creates...
  `content:2024-02-28` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [IterAlign: Iterative Constitutional Alignment of Large Language Models](https://arxiv.org/abs/2403.18341) [review](paper-reviews/review-2403.18341-iteralign.md) - Computer Science > Computation and Language arXiv:2403.18341 (cs) Submitted on 27 Mar 2024 # IterAlign: Iterative Constitutional Alignment of Large Language Models Authors: Xiusi Chen, Hongzhi Wen, Sreyashi...
  `content:2024-03-27` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q1`
- [Self-Reflection in LLM Agents: Effects on Problem-Solving Performance](https://arxiv.org/abs/2405.06682) [review](paper-reviews/review-2405.06682-self-reflection-agents.md) - Computer Science > Computation and Language arXiv:2405.06682 (cs) Submitted on 5 May 2024 (v1), last revised 16 Oct 2024 (this version, v3) # Self-Reflection in LLM Agents: Effects on Problem-Solving Perform...
  `content:2024-05-05` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q2`
- [Symbolic Learning Enables Self-Evolving Agents](https://arxiv.org/abs/2406.18532) [review](paper-reviews/review-2406.18532-symbolic-learning-enables-self-evolving-agents-arxiv-id-2406-18532-url.md) - Computer Science > Computation and Language arXiv:2406.18532 (cs) Submitted on 26 Jun 2024 # Symbolic Learning Enables Self-Evolving Agents Authors: Wangchunshu Zhou, Yixin Ou, Shengwei Ding, Long Li, Jialon...
  `content:2024-06-26` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q2`
- [Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) [review](paper-reviews/review-2407.18219-rise.md) - Computer Science > Machine Learning arXiv:2407.18219 (cs) Submitted on 25 Jul 2024 (v1), last revised 26 Jul 2024 (this version, v2) # Recursive Introspection: Teaching Language Model Agents How to Self-Impr...
  `content:2024-07-25` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge](https://arxiv.org/abs/2407.19594) [review](paper-reviews/review-2407.19594-meta-rewarding.md) - Novel Meta-Rewarding step for self-improvement where the model judges its own judgements and uses that feedback to refine judgment skills. All three roles (actor, judge, meta-judge) performed by the same mod...
  `content:2024-07-28` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435) [review](paper-reviews/review-2408.08435-adas.md) - Computer Science > Artificial Intelligence arXiv:2408.08435 (cs) Submitted on 15 Aug 2024 (v1), last revised 2 Mar 2025 (this version, v2) # Automated Design of Agentic Systems Authors: Shengran Hu, Cong Lu,...
  `content:2024-08-15` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [MAgICoRe: Multi-Agent, Iterative, Coarse-to-Fine Refinement for Reasoning](https://arxiv.org/abs/2409.12147) [review](paper-reviews/review-2409.12147-magicore-multi-agent-iterative-coarse-to-fine-refinement-for-reasoning.md) - Multi-agent framework that categorizes problem difficulty, solving easy problems with coarse-grained aggregation and hard ones with fine-grained iterative multi-agent refinement. Three agents: Solver, Review...
  `content:2024-09-18` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [Training Language Models to Self-Correct via Reinforcement Learning](https://arxiv.org/abs/2409.12917) [review](paper-reviews/review-2409.12917-score.md) - Self-correction is a highly desirable capability of large language models (LLMs), yet it has consistently been found to be largely ineffective in modern LLMs. Current methods for training self-correction typ...
  `content:2024-09-19` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [GroupDebate: Enhancing the Efficiency of Multi-Agent Debate Using Group Discussion](https://arxiv.org/abs/2409.14051) [review](paper-reviews/review-2409.14051-groupdebate-enhancing-the-efficiency-of-multi-agent-debate-using-group.md) - Method to significantly reduce token cost in multi-agent debates by dividing agents into multiple debate groups, with agents debating within groups and sharing interim results between groups. Reduces total t...
  `content:2024-09-21` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models](https://arxiv.org/abs/2409.18382) [review](paper-reviews/review-2409.18382-curricullm-automatic-task-curricula-design-for-learning-complex-robot.md) - Curriculum learning is a training mechanism in reinforcement learning (RL) that facilitates the achievement of complex policies by progressively increasing the task difficulty during training. However, desig...
  `content:2024-09-27` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q3`
- [From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging](https://arxiv.org/abs/2410.01215) [review](paper-reviews/review-2410.01215-from-code-to-correctness-closing-the-last-mile-of-code-generation-with.md) - While large language models have made significant strides in code generation, the pass rate of the generated code is bottlenecked on subtle errors, often requiring human intervention to pass tests, especiall...
  `content:2024-10-02` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) [review](paper-reviews/review-2410.04444-godel-agent.md) - The rapid advancement of large language models (LLMs) has significantly enhanced the capabilities of AI-driven agents across various tasks. However, existing agentic systems, whether based on fixed pipeline...
  `content:2024-10-06` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [Diversity of Thought Elicits Stronger Reasoning Capabilities in Multi-Agent Debate Frameworks](https://arxiv.org/abs/2410.12853) [review](paper-reviews/review-2410.12853-diversity-of-thought-elicits-stronger-reasoning-capabilities-in-multi.md) - Large language models (LLMs) excel in natural language generation but often confidently produce incorrect responses, especially in tasks like mathematical reasoning. Chain-of-thought prompting, self-verifica...
  `content:2024-10-10` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [Can Large Language Models Invent Algorithms to Improve Themselves?: Algorithm Discovery for Recursive Self-Improvement through Reinforcement Learning](https://arxiv.org/abs/2410.15639) [review](paper-reviews/review-2410.15639-can-large-language-models-invent-algorithms-to-improve-themselves-algo.md) - Large Language Models (LLMs) have achieved remarkable capabilities, yet their improvement methods remain fundamentally constrained by human design. We present Self-Developing, a framework that enables LLMs t...
  `content:2024-10-21` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://arxiv.org/abs/2410.16946) [review](paper-reviews/review-2410.16946-evomac.md) - LLM-driven multi-agent collaboration (MAC) systems have demonstrated impressive capabilities in automatic software development at the function level. However, their heavy reliance on human design limits thei...
  `content:2024-10-22` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [RL-STaR: Theoretical Analysis of Reinforcement Learning Frameworks for Self-Taught Reasoner](https://arxiv.org/abs/2410.23912) [review](paper-reviews/review-2410.23912-rl-star-theoretical-analysis-of-reinforcement-learning-frameworks-for.md) - The reasoning abilities of large language models (LLMs) have improved with chain-of-thought (CoT) prompting, allowing models to solve complex tasks stepwise. However, training CoT capabilities requires detai...
  `content:2024-10-31` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://arxiv.org/abs/2411.02337) [review](paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md) - Self-evolving online curriculum RL framework for training high-performance web agents using open LLMs. Incorporates self-evolving curriculum generating new tasks from unsuccessful attempts, outcome-supervise...
  `content:2024-11-04` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`
- [Self-Improvement in Language Models: The Sharpening Mechanism](https://arxiv.org/abs/2412.01951) [review](paper-reviews/review-2412.01951-self-improvement-in-language-models-the-sharpening-mechanism.md) - Recent work in language modeling has raised the possibility of self-improvement, where a language models evaluates and refines its own generations to achieve higher performance without external feedback. It...
  `content:2024-12-02` `collected:2026-05-21T00:00:00+08:00` `slice:2024-Q4`

### 2023

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) [review](paper-reviews/review-2303.11366-reflexion.md) - Computer Science > Artificial Intelligence arXiv:2303.11366 (cs) Submitted on 20 Mar 2023 (v1), last revised 10 Oct 2023 (this version, v4) # Reflexion: Language Agents with Verbal Reinforcement Learning Aut...
  `content:2023-03-20` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q1`
- [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651) [review](paper-reviews/review-2303.17651-self-refine-iterative-refinement-with-self-feedback.md) - Computer Science > Computation and Language arXiv:2303.17651 (cs) Submitted on 30 Mar 2023 (v1), last revised 25 May 2023 (this version, v2) # Self-Refine: Iterative Refinement with Self-Feedback Authors: Am...
  `content:2023-03-30` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q1`
- [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) [review](paper-reviews/review-2304.03442-generative-agents-interactive-simulacra-of-human-behavior.md) - Computer Science > Human-Computer Interaction arXiv:2304.03442 (cs) Submitted on 7 Apr 2023 (v1), last revised 6 Aug 2023 (this version, v2) # Generative Agents: Interactive Simulacra of Human Behavior Autho...
  `content:2023-04-07` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q2`
- [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) [review](paper-reviews/review-2305.14325-multi-agent-debate.md) - Computer Science > Computation and Language arXiv:2305.14325 (cs) Submitted on 23 May 2023 # Improving Factuality and Reasoning in Language Models through Multiagent Debate Authors: Yilun Du, Shuang Li, Anto...
  `content:2023-05-23` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q2`
- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) [review](paper-reviews/review-2305.16291-voyager.md) - Computer Science > Artificial Intelligence arXiv:2305.16291 (cs) Submitted on 25 May 2023 (v1), last revised 19 Oct 2023 (this version, v2) # Voyager: An Open-Ended Embodied Agent with Large Language Models...
  `content:2023-05-25` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q2`
- [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) [review](paper-reviews/review-2308.10144-expel.md) - Computer Science > Machine Learning arXiv:2308.10144 (cs) Submitted on 20 Aug 2023 (v1), last revised 20 Dec 2024 (this version, v3) # ExpeL: LLM Agents Are Experiential Learners Authors: Andrew Zhao, Daniel...
  `content:2023-08-20` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q3`
- [LLMRefine: Pinpointing and Refining Large Language Models via Fine-Grained Actionable Feedback](https://arxiv.org/abs/2311.09336) [review](paper-reviews/review-2311.09336-llmrefine-pinpointing-and-refining-large-language-models-via-fine-grai.md) - Computer Science > Computation and Language arXiv:2311.09336 (cs) Submitted on 15 Nov 2023 (v1), last revised 25 Oct 2024 (this version, v5) # LLMRefine: Pinpointing and Refining Large Language Models via Fi...
  `content:2023-11-15` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q4`
- [Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision](https://arxiv.org/abs/2312.09390) [review](paper-reviews/review-2312.09390-weak-to-strong-generalization-eliciting-strong-capabilities-with-weak.md) - Computer Science > Computation and Language arXiv:2312.09390 (cs) Submitted on 14 Dec 2023 # Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision Authors: Collin Burns, Pavel Iz...
  `content:2023-12-14` `collected:2026-05-21T00:00:00+08:00` `slice:2023-Q4`

### 2022

- [STaR: Bootstrapping Reasoning With Reasoning](https://arxiv.org/abs/2203.14465) [review](paper-reviews/review-2203.14465-star.md) - Computer Science > Machine Learning arXiv:2203.14465 (cs) Submitted on 28 Mar 2022 (v1), last revised 20 May 2022 (this version, v2) # STaR: Bootstrapping Reasoning With Reasoning Authors: Eric Zelikman, Yuh...
  `content:2022-03-28` `collected:2026-05-21T00:00:00+08:00` `slice:early`

## 深度分析产出 / Deep Analysis Outputs

> 以下为本项目团队产出的深度分析内容，包含项目分析报告、论文精读笔记和跨领域研究。

### 项目分析报告 / Project Analysis Reports

> 10 个开源项目的深度分析报告，统一格式，涵盖技术栈、架构图、实现方法和横向对比。

| 项目 | Stars | 进化模式 | 报告 |
|------|------:|----------|------|
| OpenEvolve | 6,358 | 进化/搜索 → 评估器 | [projects/algorithmicsuperintelligence__openevolve.md](projects/algorithmicsuperintelligence__openevolve.md) |
| Agents (aiwaves) | 5,928 | 进化/搜索 → 智能体编排 | [projects/aiwaves_cn__agents.md](projects/aiwaves_cn__agents.md) |
| Reflexion | 3,158 | 反思记忆 → 反馈-精炼 | [projects/noahshinn__reflexion.md](projects/noahshinn__reflexion.md) |
| AgentEvolver | 1,441 | 评估器 → 训练循环 | [projects/modelscope__agentevolver.md](projects/modelscope__agentevolver.md) |
| Self-Refine | 805 | 反馈-精炼 | [projects/madaan__self_refine.md](projects/madaan__self_refine.md) |
| SE-Agent | 274 | 评估器 → 智能体编排 | [projects/jarvis_xs__se_agent.md](projects/jarvis_xs__se_agent.md) |
| Science-CodeEvolve | 97 | 进化/搜索 → 评估器 | [projects/inter_co__science_codeevolve.md](projects/inter_co__science_codeevolve.md) |
| SCOPE | 77 | 进化/搜索循环 | [projects/jarvispei__scope.md](projects/jarvispei__scope.md) |
| LLM-Self-Judge | 43 | 评估器 → 训练循环 | [projects/oppo_mente_lab__llm_self_judge.md](projects/oppo_mente_lab__llm_self_judge.md) |
| DARWIN | 41 | 反思记忆 | [projects/zju_llm_safety__darwin.md](projects/zju_llm_safety__darwin.md) |

索引：[projects/INDEX.md](projects/INDEX.md) | 清单：[projects/projects_manifest.json](projects/projects_manifest.json)

### 研究型项目分析 / Research Project Analyses

> 9 个关键项目的中文深度分析，涵盖核心模块、技术亮点和与 Self Evolve 的关联。

| # | 项目 | 关联度 | 报告 |
|---|------|--------|------|
| 01 | OPRO: LLM 作为优化器 | 很高 | [research/projects/01-opro-llm-as-optimizer.md](research/projects/01-opro-llm-as-optimizer.md) |
| 02 | OpenELM: 大模型进化 | 高 | [research/projects/02-openelm-evolution-large-models.md](research/projects/02-openelm-evolution-large-models.md) |
| 03 | ADAS: 自动化 Agent 设计 | 很高 | [research/projects/03-adas-automated-design-agentic-systems.md](research/projects/03-adas-automated-design-agentic-systems.md) |
| 04 | FunSearch: 数学发现 | 很高 | [research/projects/04-funsearch-mathematical-discoveries.md](research/projects/04-funsearch-mathematical-discoveries.md) |
| 05 | AutoML-Agent | 很高 | [research/projects/05-automl-agent-multi-agent.md](research/projects/05-automl-agent-multi-agent.md) |
| 06 | CoML: ML Copilot | 中高 | [research/projects/06-coml-mlcopilot.md](research/projects/06-coml-mlcopilot.md) |
| 07 | MetaGPT | 高 | [research/projects/07-metagpt-multi-agent-framework.md](research/projects/07-metagpt-multi-agent-framework.md) |
| 08 | AutoGPT | 中高 | [research/projects/08-autogpt-autonomous-agent.md](research/projects/08-autogpt-autonomous-agent.md) |
| 09 | CrewAI | 中高 | [research/projects/09-crewai-multi-agent-framework.md](research/projects/09-crewai-multi-agent-framework.md) |

### 论文精读笔记 / Paper Reading Notes

> 12 篇核心论文的精读笔记，覆盖 Agent 自进化全链路。

| # | 论文 | 核心贡献 | 笔记 |
|---|------|----------|------|
| 01 | Agent Symbolic Learning | 符号化 Agent 学习 | [research/papers/01-agent-symbolic-learning.md](research/papers/01-agent-symbolic-learning.md) |
| 02 | Darwin Gödel Machine | 达尔文式自改进 | [research/papers/02-darwin-godel-machine.md](research/papers/02-darwin-godel-machine.md) |
| 03 | Gödel Agent | 自引用 Agent 架构 | [research/papers/03-godel-agent.md](research/papers/03-godel-agent.md) |
| 04 | ADAS | 自动化架构搜索 | [research/papers/04-adas.md](research/papers/04-adas.md) |
| 05 | Reflexion | 语言反思强化学习 | [research/papers/05-reflexion.md](research/papers/05-reflexion.md) |
| 06 | Self-Refine | 迭代式自反馈精炼 | [research/papers/06-self-refine.md](research/papers/06-self-refine.md) |
| 07 | Absolute Zero | 零样本自进化 | [research/papers/07-absolute-zero.md](research/papers/07-absolute-zero.md) |
| 08 | AlphaEvolve | Gemini 驱动进化编码 | [research/papers/08-alphaevolve.md](research/papers/08-alphaevolve.md) |
| 09 | RISE | 递归式自改进 | [research/papers/09-rise.md](research/papers/09-rise.md) |
| 10 | RAGen | RAG 增强生成 | [research/papers/10-ragen.md](research/papers/10-ragen.md) |
| 11 | SelfEvolve | 自进化框架 | [research/papers/11-selfevolve.md](research/papers/11-selfevolve.md) |
| 12 | ReVeal | 验证引导进化学习 | [research/papers/12-reveal.md](research/papers/12-reveal.md) |

### 跨领域研究 / Cross-Domain Research

五类研究循环的交叉分析与关系图谱：[papers/cross-domain/README.md](papers/cross-domain/README.md)

LLM 自我改进作者关系网络：[papers/llm-self-improvement/06-author-network.md](papers/llm-self-improvement/06-author-network.md)

### SEO 博客与网站 / SEO Blog & Site

> 7 篇中文 SEO 博客 + 14 篇研究页面，围绕 Self Evolve 品牌。

| 类型 | 数量 | 目录 |
|------|------|------|
| 博客文章（MDX） | 7 | site/src/content/blog/ |
| 研究页面（MDX） | 14 | site/src/content/research/ |
| 数据层（TS） | 4 | site/src/data/ |

全产出索引：[CONTENT_INDEX.md](CONTENT_INDEX.md) | 交付摘要：[DELIVERY_SUMMARY.md](DELIVERY_SUMMARY.md)

---

## Cross-validation themes / 交叉验证主题

The current corpus repeatedly shows five mismatches that should guide future Evolver rankings and survey updates. / 当前语料反复出现五类错配，应成为后续榜单和综述更新的核心判断标准。

1. **Stars ≠ production readiness / Star数不等于生产可用** — popular repos still need observability, rollback, permissions, security, and cost controls.
2. **Benchmark gains ≠ real-world reliability / Benchmark提升不等于真实可靠** — Mom Test evidence flags Goodharting, cherry-picking, and weak external validators.
3. **Framework abundance ≠ integration simplicity / 框架多不等于集成简单** — abstraction opacity and deployment complexity remain major pain points.
4. **Memory/self-evolution claims ≠ durable learning / 记忆与自进化声明不等于长期学习** — drift, context bloat, stale traces, and versioning must be audited.
5. **Tutorial traffic ≠ reusable infrastructure / 教程流量不等于基础设施** — learning resources are SEO entry points, but Evolver must connect them to repo, paper, pain-point, and benchmark evidence.

## JSON-LD / SEO structured data

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Awesome Evolver — Agent Evolution Platform",
  "description": "Bilingual awesome-list and structured index for self-evolving agents, agent evolution frameworks, benchmarks, demos, and papers.",
  "dateModified": "2026-05-22",
  "inLanguage": [
    "en",
    "zh-CN"
  ],
  "about": [
    "Agent Evolution",
    "Self-evolving Agents",
    "AI Agent Frameworks",
    "Agent Benchmarks",
    "Evolver"
  ]
}
```

## Contributing / 贡献

Please submit new resources with: name, URL, category, stars or impact signal, content_timestamp, collected_at, time_slice, evidence source, and whether it is a framework, tool, research artifact, demo, paper, or community resource. / 新资源请提供：名称、URL、分类、star或影响力信号、content_timestamp、collected_at、time_slice、证据来源，以及它属于框架、工具、研究代码、Demo、论文还是社区资源。

## License / 许可

This index is generated from locally collected metadata. Each linked project or paper keeps its own license. / 本索引由本地采集元数据生成；各链接项目或论文遵循其自身许可。
