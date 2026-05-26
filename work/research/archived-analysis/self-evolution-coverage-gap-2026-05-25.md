# Self-Evolution Coverage Gap Audit - 2026-05-25

## One Sentence

The current corpus covers the core self-evolution paper line better than the fast-moving engineering ecosystem: from the 92 user-supplied names, 21 have deep project/report coverage, 26 are only indexed or raw, and 45 are still missing or under-detected.

## Three Sentences

The strongest coverage is around OpenEvolve, EvoAgentX, A-Evolve, SEAgent, Reflexion, OPRO, AlphaEvolve, Mem0, MemSkill, OSWorld, AgentBench, and the existing 2507/2508 self-evolving-agent surveys. The weakest coverage is high-star product/runtime projects, new memory products, MCP/A2A protocol infrastructure, safety/red-team papers, robotics/embodied evolution, and several older method papers that appear in surveys but are not yet first-class project/model-card entries. The next pass should treat survey-mentioned systems as a recall source, not as truth: add raw evidence first, then classify, then promote only high-value items into deep project cards, paper reviews, README, website, and paper tables.

## Five-Sentence Compression

1. User request mapped to direct input: "论文覆盖不够主流", "raw 归 raw / 加工归 processed / work 归 work / results 归 results", and "项目要有深度分析/model-card".
2. Existing data is large but uneven: GitHub and paper counts are high, yet many recently popular engineering projects are not in the processed/deep layer.
3. The user-supplied list is not one category; it mixes self-evolving systems, memory substrates, protocols, platforms, benchmarks, safety papers, robotics papers, and prompt/memory/tool-learning papers.
4. arXiv search confirmed four additional survey or adjacent-survey sources that should be raw evidence: 2404.14387, 2503.12434, 2505.15741, and 2401.10510; 2507.21046 and 2508.07407 were already present and reviewed.
5. Survey-derived additions should become a downstream analysis queue: AgentCoder, SEW, EvoFlow, AFlow, ScoreFlow, mcp-scan, LLM2LLM, WizardLM, and Self-Instruct need explicit coverage decisions.

## Scope And Method

- Input set: the names in the user message on 2026-05-25, normalized into 92 project, paper, benchmark, protocol, safety, robotics, and platform items.
- Repository scan: `README.md`, `research/repo-classification.*`, `projects/`, `site/public/reports/projects/`, `raw-papers/`, `paper-reviews/`, `research/agent-self-evolution-papers-detailed*.md`, and selected `analysis/` files.
- External source pass: AnySearch plus official arXiv pages for survey discovery.
- Caveat: this is string-match coverage, so it is a triage signal. A "missing" item may still appear under an alias, and an "indexed/raw" item may not yet have enough model-card quality.

## arXiv Survey Sources Found

| Priority | arXiv | Title | Status in repo | Why it matters |
|---:|---|---|---|---|
| 1 | 2507.21046 | A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence | Already raw + review | Direct self-evolving-agent survey; strong source for what/when/how taxonomy and survey-derived project recall. |
| 2 | 2508.07407 | A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems | Already raw + review | Direct self-evolving-agent survey; useful four-component framework: System Inputs, Agent System, Environment, Optimisers. |
| 3 | 2404.14387 | A Survey on Self-Evolution of Large Language Models | Added raw this pass | Earlier self-evolution survey with LLM and LLM-agent objectives; useful for older method recall. |
| 4 | 2503.12434 | A Survey on the Optimization of Large Language Model-based Agents | Added raw this pass | Adjacent but important: agent optimization, trajectory data, RL, prompt/RAG, and evaluation. |
| 5 | 2505.15741 | Evolutionary Computation and Large Language Models: A Survey of Methods, Synergies, and Applications | Added raw this pass | Connects EC and LLMs to AlphaEvolve/OpenEvolve, prompt evolution, architecture search, and metaheuristic design. |
| 6 | 2401.10510 | When Large Language Models Meet Evolutionary Algorithms: Potential Enhancements and Challenges | Added raw this pass | Older LLM + EA survey; important baseline for prompt/program/evolutionary algorithm categories. |

## User-Supplied Coverage Snapshot

| Layer | Count | Meaning |
|---|---:|---|
| Deep project/report coverage | 21 | Has a project card or public report path and can already support model-card style reading. |
| Indexed or raw only | 26 | Appears in README, repo classification, raw papers, paper reviews, or analysis, but should not be treated as fully analyzed. |
| Missing or under-detected | 45 | Needs raw acquisition and alias verification before classification. |
| Total checked | 92 | Excludes the 9 extra survey-derived recall items listed below. |

## Strongly Covered Or Usable Now

| Cluster | Items |
|---|---|
| Core self-evolution/code evolution | OpenEvolve, EvoAgentX, Agent0, A-Evolve, SEAgent, Reflexion, EvoPrompt, OPRO |
| Memory/model-card layer | Mem0, memU, honcho, ReMe, mcp-memory-service, MemSkill |
| Benchmark/evaluation | AgentBench, OSWorld; SWE-bench, WebArena, GAIA, LoCoMo are indexed or raw |
| Production/framework layer | OpenHands, LangGraph, Haystack, dify |
| Paper/method layer | AlphaEvolve, ARTEMIS, TextGrad, Agentic Memory, A-MEM, MemoryBank |

## Indexed But Not Yet Deep Enough

| Cluster | Items |
|---|---|
| Self-evolution infra | EvoMap evolver, AIWaves Agents, HyperAgents, Google A2A, GEP MCP Server |
| Memory infra | Letta/MemGPT, Cognee, EverMemOS, Acontext, TeleMem, Awesome-Agent-Memory |
| Agent platforms | LangChain, agno, PydanticAI, openagent |
| Benchmark/method papers | SWE-bench, WebArena, GAIA, LoCoMo, AlphaEvolve, ARTEMIS, TextGrad, Agentic Memory, A-MEM, MemoryBank |

## Missing Or Needs Alias Verification

| Cluster | Missing names from user list |
|---|---|
| High-star agent/runtime projects | Eliza, SuperAGI, CowAgent, AgenticSeek, mastra, Coze Studio, Google ADK, Parlant, OpenFang, CoPaw, TEN framework, LiveKit agents, Agent-Squad, PySpur, MS-Agent |
| Memory products and resources | Memvid, ChatLab, holaOS, memgraph, MemMachine, datachain, nocturne_memory, Mem9, Awesome-AI-Memory |
| Protocol/MCP infrastructure | mcp-use, ViteMCP |
| Safety/red-team papers | AgenticRed, Agent vs. Agent, OpenGuardrails |
| Robotics/embodied papers | RACAS, RoboClaw, MEM embodied memory |
| Method papers | ReflAct, Learning Evolving Tools, CREATOR, ToolRL, E-SPL, Promptbreeder, MEMORA, Mem0 paper, TeleMem paper, Agent Workflow Memory, Compress to Impress |
| Other | Ouroboros, EvoClaw |

## Survey-Derived Additions For Follow-Up Analysis

| Source | Candidate | Current status | Why add to follow-up |
|---|---|---|---|
| 2507.21046 | AgentCoder | Missing | Appears in self-evolving-agent survey context as a code-agent evolution reference. |
| 2507.21046 | SEW | Indexed/raw | Already appears as self-evolving agentic workflows, but needs stronger project/paper linkage. |
| 2507.21046 | EvoFlow | Missing | Agent workflow/architecture evolution node for survey recall. |
| 2507.21046 | AFlow | Indexed/raw | Needs explicit relationship to ADAS/ScoreFlow/EvoFlow. |
| 2507.21046 | ScoreFlow | Missing | Workflow scoring/evolution line; candidate for benchmark/control-plane analysis. |
| 2507.21046 | mcp-scan | Missing | Safety tool linked from survey source; relevant to self-evolving agents with MCP/tool attack surfaces. |
| 2404.14387 | LLM2LLM | Missing | Older self-evolution method from LLM self-evolution recall. |
| 2404.14387 | WizardLM | Missing | Instruction evolution/data evolution baseline. |
| 2404.14387 | Self-Instruct | Indexed/raw | Should be treated as an earlier self-generated instruction data baseline, not a modern agent runtime. |

## Rank For Next Analysis

| Rank | Next action | Items |
|---:|---|---|
| 1 | Add raw GitHub/project evidence for missing high-star, user-visible frameworks | Eliza, SuperAGI, Google ADK, mastra, Coze Studio, AgenticSeek, Parlant |
| 2 | Add raw and project cards for missing memory substrates | Memvid, MemMachine, datachain, nocturne_memory, Mem9, Awesome-AI-Memory, ChatLab |
| 3 | Add protocol layer coverage | mcp-use, ViteMCP, GEP MCP Server, Google A2A deepening |
| 4 | Add safety/robotics paper raw and reviews | AgenticRed, Agent vs. Agent, OpenGuardrails, RACAS, RoboClaw, MEM embodied memory |
| 5 | Backfill survey-method classics | Promptbreeder, CREATOR, ToolRL, E-SPL, Learning Evolving Tools, Compress to Impress |
| 6 | Promote survey-derived systems into explicit decision rows | AgentCoder, EvoFlow, AFlow, ScoreFlow, mcp-scan, LLM2LLM, WizardLM, Self-Instruct |

## Interpretation

The current corpus is not "small"; it is uneven. The core academic self-evolution spine is relatively strong because DGM, ADAS, AlphaEvolve, Reflexion, Self-Refine, RAGEN, Agent0, SEAgent, OpenEvolve, EvoAgentX, A-Evolve, memory benchmarks, and 2025/2026 survey papers are already visible. The weak side is ecosystem recall: the user list brings in high-star frameworks, memory systems, MCP/protocol tooling, safety, robotics, and product platforms that do not always use "evolution" in their names but may still matter for autonomous learning and improvement.

Therefore the next pipeline should not simply append everything to README. It should run this order: raw capture, alias verification, category assignment, model-card/deep review for high-value items, then README/site/paper promotion. The main question for each candidate is: does it merely host agents, or does it add an evolvable state, feedback loop, optimizer, memory/skill substrate, evaluator, or safety control surface?
