# Repo 自动分类与技术栈分析（raw-github 348）

- content_timestamp: 2026-05-21
- regenerated_at: 2026-05-22T03:11:27+08:00
- raw_repo_files / classified_rows: 348
- prior_unclassified_or_dash_from_analysis_repo_cross_analysis: 241
- missing_category_after_this_pass: 0
- companion_csv: `research/repo-classification.csv`
- companion_json: `research/repo-classification.json`

## 1. 分类口径

本轮针对旧 `analysis/repo-cross-analysis.csv` 中 `-` / `Unclassified` 的仓库做自动归类，并用 `raw-github/*.md` README描述、文件结构、`analysis/repo-techstack-cross-analysis.csv` 的技术栈/主题信号交叉验证。目标六类为：`框架/framework`、`工具/tool`、`论文代码/paper-code`、`评测/evaluation`、`应用/application`、`教程/tutorial`。

- `框架/framework`: SDK、runtime、platform、orchestration、workflow、AgentOS、可复用开发框架。
- `工具/tool`: MCP、CLI、plugin、skill、memory/RAG、prompt/coding utility 等可嵌入模块。
- `论文代码/paper-code`: arXiv/论文artifact/实验复现/研究代码。
- `评测/evaluation`: benchmark、eval、harness、gym、leaderboard、judge、testbed。
- `应用/application`: 具体 self-evolving / research / coding / domain agent demo 或产品化系统。
- `教程/tutorial`: awesome list、course、roadmap、tutorial、paper/resource list、学习资料。

## 2. 全量分类分布

| Category | Count | Share |
|---|---:|---:|
| 框架/framework | 101 | 29.0% |
| 评测/evaluation | 81 | 23.3% |
| 教程/tutorial | 61 | 17.5% |
| 应用/application | 42 | 12.1% |
| 工具/tool | 40 | 11.5% |
| 论文代码/paper-code | 23 | 6.6% |

## 3. 旧未分类仓库的新归属

注：Master消息称“241未分类”；当前本地旧CSV精确计数为 `-` 241 个 + `Unclassified` 2 个，共 241 个需要补分类，本轮全部归类。

| New category | Count | Share |
|---|---:|---:|
| 评测/evaluation | 64 | 26.6% |
| 教程/tutorial | 61 | 25.3% |
| 框架/framework | 55 | 22.8% |
| 工具/tool | 32 | 13.3% |
| 应用/application | 19 | 7.9% |
| 论文代码/paper-code | 10 | 4.1% |

## 4. README级原始技术主题分布

| Base theme | Count | Share |
|---|---:|---:|
| evaluation | 81 | 23.3% |
| evolution | 58 | 16.7% |
| memory | 56 | 16.1% |
| framework | 38 | 10.9% |
| education-list | 35 | 10.1% |
| research-agent | 30 | 8.6% |
| prompt-optimization | 26 | 7.5% |
| coding-agent | 17 | 4.9% |
| workflow-automation | 6 | 1.7% |
| safety | 1 | 0.3% |

## 5. 技术栈分布

| Stack | Count | Share |
|---|---:|---:|
| Markdown | 197 | 56.6% |
| Python | 123 | 35.3% |
| Unknown | 14 | 4.0% |
| TypeScript/JavaScript | 6 | 1.7% |
| Shell | 6 | 1.7% |
| TypeScript | 1 | 0.3% |
| Jupyter Notebook | 1 | 0.3% |

## 6. 技术趋势与5大Mismatch贯穿点

- **Mismatch 1: star ≠ production readiness.** 高star项目集中在通用框架、教程与研究artifact；README证据显示很多项目仍缺生产可观测、权限、安全、rollback与长期维护证据。
- **Mismatch 2: academic benchmark ≠ community pain.** `评测/evaluation` 与 `论文代码/paper-code` 证明学术/benchmark生态活跃，但Mom Test痛点更集中在部署可靠性、成本、状态管理、调试与端到端session评价。
- **Mismatch 3: framework abundance ≠ integration simplicity.** `框架/framework` + `工具/tool` 规模大，说明真实挑战不是“没有框架”，而是碎片化组件组合、黑盒抽象、prompt/tool可观测和企业集成。
- **Mismatch 4: self-evolution claim ≠ closed-loop evidence.** `应用/application` 和部分 `论文代码/paper-code` 常宣称 evolve/self-improve，但闭环评估、失败回滚、安全边界、长期记忆质量仍需交叉验证。
- **Mismatch 5: tutorial流量 ≠ reusable infrastructure.** `教程/tutorial` 是Evolver SEO入口，但必须和repo、论文、痛点、榜单/评测结构化连接，才能形成平台护城河。

## 7. 各类代表仓库（按star/可见影响排序）


### 框架/framework

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [langchain-ai/langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk) | 894 | Markdown | framework | - | framework/runtime/orchestration signal |
| [aimagelab/mammoth](https://github.com/aimagelab/mammoth) | 812 | Python | evaluation | - | framework/runtime/orchestration signal |
| [openmemind/memind](https://github.com/openmemind/memind) | 787 | Markdown | memory | 框架 | kept prior human/analysis category + README verified |
| [wzdnzd/harvester](https://github.com/wzdnzd/harvester) | 546 | Python | framework | - | framework/runtime/orchestration signal |
| [neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness) | 507 | Python | evaluation | 框架 | kept prior human/analysis category + README verified |
| [viktoraxelsen/memskill](https://github.com/viktoraxelsen/memskill) | 482 | Python | memory | 框架 | kept prior human/analysis category + README verified |
| [openautocoder/live-swe-agent](https://github.com/openautocoder/live-swe-agent) | 392 | Markdown | coding-agent | 框架 | kept prior human/analysis category + README verified |
| [noahshinn/reflexion-draft](https://github.com/noahshinn/reflexion-draft) | 388 | Markdown | memory | 框架 | kept prior human/analysis category + README verified |
| [codexstar69/bug-hunter](https://github.com/codexstar69/bug-hunter) | 380 | Markdown | evaluation | - | framework/runtime/orchestration signal |
| [bingreeky/memgen](https://github.com/bingreeky/memgen) | 378 | Python | memory | 框架 | kept prior human/analysis category + README verified |
| [agentic-in/elephant-agent](https://github.com/agentic-in/elephant-agent) | 361 | Markdown | memory | 框架 | kept prior human/analysis category + README verified |
| [channinglua/prax-agent](https://github.com/channinglua/prax-agent) | 294 | Markdown | evaluation | 框架 | kept prior human/analysis category + README verified |
| [dsifry/metaswarm](https://github.com/dsifry/metaswarm) | 272 | Markdown | framework | 框架 | kept prior human/analysis category + README verified |
| [onevcat/argue](https://github.com/onevcat/argue) | 238 | Markdown | framework | - | framework/runtime/orchestration signal |
| [reflexioai/reflexio](https://github.com/reflexioai/reflexio) | 220 | Markdown | evaluation | 框架 | kept prior human/analysis category + README verified |
| [deepelementlab/clawcode](https://github.com/deepelementlab/clawcode) | 199 | Python | coding-agent | 框架 | kept prior human/analysis category + README verified |
| [memovai/memov](https://github.com/memovai/memov) | 190 | Shell | memory | 框架 | kept prior human/analysis category + README verified |
| [spiral-rl/spiral](https://github.com/spiral-rl/spiral) | 190 | Python | framework | - | framework/runtime/orchestration signal |

### 工具/tool

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [madaan/self-refine](https://github.com/madaan/self-refine) | 805 | Markdown | prompt-optimization | 工具 | kept prior human/analysis category + README verified |
| [vision-intelligence-and-robots-group/best-incremental-learning](https://github.com/vision-intelligence-and-robots-group/best-incremental-learning) | 607 | Unknown | coding-agent | - | tool/module/memory/prompt/coding signal |
| [graph-rag/graphrag](https://github.com/graph-rag/graphrag) | 574 | Markdown | memory | - | tool/module/memory/prompt/coding signal |
| [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) | 424 | Markdown | evolution | - | tool/module/memory/prompt/coding signal |
| [sibyl-research-team/sibyl-research-system](https://github.com/sibyl-research-team/sibyl-research-system) | 245 | Python | research-agent | - | tool/module/memory/prompt/coding signal |
| [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 181 | Markdown | evolution | 工具 | kept prior human/analysis category + README verified |
| [claire-labo/evotune](https://github.com/claire-labo/evotune) | 137 | Python | coding-agent | - | tool/module/memory/prompt/coding signal |
| [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) | 123 | Markdown | evolution | 工具 | kept prior human/analysis category + README verified |
| [fusionbrainlab/gigaevo-core](https://github.com/fusionbrainlab/gigaevo-core) | 116 | Markdown | evolution | - | tool/module/memory/prompt/coding signal |
| [dongxiangjue/awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement) | 106 | Markdown | evolution | 工具 | kept prior human/analysis category + README verified |
| [inclusionai/agenticlearning](https://github.com/inclusionai/agenticlearning) | 106 | Markdown | memory | - | tool/module/memory/prompt/coding signal |
| [mycelium-io/mycelium](https://github.com/mycelium-io/mycelium) | 95 | Markdown | memory | - | tool/module/memory/prompt/coding signal |
| [sola-st/repairagent](https://github.com/sola-st/repairagent) | 95 | Markdown | memory | - | tool/module/memory/prompt/coding signal |
| [egmaminta/gepa-lite](https://github.com/egmaminta/gepa-lite) | 55 | Python | prompt-optimization | - | tool/module/memory/prompt/coding signal |
| [ibm/awesome-agentic-workflow-optimization](https://github.com/ibm/awesome-agentic-workflow-optimization) | 51 | Markdown | evolution | 工具 | kept prior human/analysis category + README verified |
| [shiqichen17/spa](https://github.com/shiqichen17/spa) | 35 | Shell | memory | - | tool/module/memory/prompt/coding signal |
| [colab2/midca](https://github.com/colab2/midca) | 27 | Markdown | coding-agent | - | tool/module/memory/prompt/coding signal |
| [skills-mcp/skills-mcp](https://github.com/skills-mcp/skills-mcp) | 24 | TypeScript/JavaScript | prompt-optimization | - | tool/module/memory/prompt/coding signal |

### 论文代码/paper-code

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 549 | Markdown | evolution | 论文代码 | kept prior human/analysis category + README verified |
| [vsonicv/es-fine-tuning-paper](https://github.com/vsonicv/es-fine-tuning-paper) | 356 | Python | research-agent | - | paper/artifact/research-code signal |
| [maitrix-org/promptagent](https://github.com/maitrix-org/promptagent) | 353 | Python | prompt-optimization | 论文代码 | kept prior human/analysis category + README verified |
| [sunzey/seagent](https://github.com/sunzey/seagent) | 246 | Shell | evaluation | 论文代码 | kept prior human/analysis category + README verified |
| [krzysztofdudek/researcherskill](https://github.com/krzysztofdudek/researcherskill) | 223 | Markdown | research-agent | - | paper/artifact/research-code signal |
| [raghavc/llm-rlhf-tuning-with-ppo-and-dpo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo) | 190 | Python | memory | - | paper/artifact/research-code signal |
| [machuangtao/llm-kg4qa](https://github.com/machuangtao/llm-kg4qa) | 157 | Markdown | coding-agent | - | paper/artifact/research-code signal |
| [memtensor/memrl](https://github.com/memtensor/memrl) | 118 | Python | memory | 论文代码 | kept prior human/analysis category + README verified |
| [tencent/selfevolvingagent](https://github.com/tencent/selfevolvingagent) | 100 | Markdown | evolution | 论文代码 | kept prior human/analysis category + README verified |
| [gensi-thuair/flex](https://github.com/gensi-thuair/flex) | 78 | Python | evaluation | 论文代码 | kept prior human/analysis category + README verified |
| [mbchang/meta-prompt](https://github.com/mbchang/meta-prompt) | 65 | Markdown | prompt-optimization | 论文代码 | kept prior human/analysis category + README verified |
| [euphoria16/ui-genie](https://github.com/euphoria16/ui-genie) | 57 | Markdown | evolution | 论文代码 | kept prior human/analysis category + README verified |
| [zhang677/accelopt](https://github.com/zhang677/accelopt) | 43 | Python | evaluation | 论文代码 | kept prior human/analysis category + README verified |
| [swe-agent/swe-agent](https://github.com/swe-agent/swe-agent) | 19 | Markdown | coding-agent | - | paper/artifact/research-code signal |
| [ventr1c/memma](https://github.com/ventr1c/memma) | 17 | Python | memory | 论文代码 | kept prior human/analysis category + README verified |
| [ltzheng/curriculummarl](https://github.com/ltzheng/curriculummarl) | 13 | Python | research-agent | - | paper/artifact/research-code signal |
| [octobrist/cope](https://github.com/octobrist/cope) | 11 | Python | evolution | 论文代码 | kept prior human/analysis category + README verified |
| [nickatomlin/lm-selfplay](https://github.com/nickatomlin/lm-selfplay) | 9 | Python | prompt-optimization | - | paper/artifact/research-code signal |

### 评测/evaluation

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [tiger-ai-lab/openresearcher](https://github.com/tiger-ai-lab/openresearcher) | 756 | Python | research-agent | - | benchmark/evaluation/harness signal |
| [polarseeker/openseeker](https://github.com/polarseeker/openseeker) | 711 | Python | evaluation | - | benchmark/evaluation/harness signal |
| [human-agent-society/coral](https://github.com/human-agent-society/coral) | 669 | Markdown | evolution | 评测 | kept prior human/analysis category + README verified |
| [rlhflow/online-rlhf](https://github.com/rlhflow/online-rlhf) | 545 | Shell | evaluation | - | benchmark/evaluation/harness signal |
| [lyl1015/jarvisevo](https://github.com/lyl1015/jarvisevo) | 401 | Python | evaluation | 评测 | kept prior human/analysis category + README verified |
| [xizaoqu/worldmem](https://github.com/xizaoqu/worldmem) | 359 | Python | memory | - | benchmark/evaluation/harness signal |
| [jarvis-xs/se-agent](https://github.com/jarvis-xs/se-agent) | 274 | Markdown | evaluation | 评测 | kept prior human/analysis category + README verified |
| [rmanluo/gfm-rag](https://github.com/rmanluo/gfm-rag) | 259 | Python | memory | - | benchmark/evaluation/harness signal |
| [thuml/rlvr-world](https://github.com/thuml/rlvr-world) | 251 | Markdown | evaluation | - | benchmark/evaluation/harness signal |
| [beeevita/evoprompt](https://github.com/beeevita/evoprompt) | 238 | Python | prompt-optimization | - | benchmark/evaluation/harness signal |
| [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) | 232 | Markdown | evaluation | - | benchmark/evaluation/harness signal |
| [modelscope/agentjet](https://github.com/modelscope/agentjet) | 208 | Python | evaluation | 评测 | kept prior human/analysis category + README verified |
| [internlm/polar](https://github.com/internlm/polar) | 163 | Markdown | evaluation | - | benchmark/evaluation/harness signal |
| [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 163 | Python | evolution | 评测 | kept prior human/analysis category + README verified |
| [chuacheowhuan/gym-continuousdoubleauction](https://github.com/chuacheowhuan/gym-continuousdoubleauction) | 153 | Python | coding-agent | - | benchmark/evaluation/harness signal |
| [archishmansengupta/autovoiceevals](https://github.com/archishmansengupta/autovoiceevals) | 149 | Python | evaluation | 评测 | kept prior human/analysis category + README verified |
| [linear95/spag](https://github.com/linear95/spag) | 144 | Python | evaluation | - | benchmark/evaluation/harness signal |
| [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) | 135 | Markdown | evaluation | 评测 | kept prior human/analysis category + README verified |

### 应用/application

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) | 998 | Python | evolution | 应用 | kept prior human/analysis category + README verified |
| [lamm-mit/sciagentsdiscovery](https://github.com/lamm-mit/sciagentsdiscovery) | 610 | Python | research-agent | - | application/self-evolving-agent signal |
| [thudm/webrl](https://github.com/thudm/webrl) | 524 | Python | evolution | 应用 | kept prior human/analysis category + README verified |
| [facebookresearch/drzero](https://github.com/facebookresearch/drzero) | 515 | Shell | research-agent | 应用 | kept prior human/analysis category + README verified |
| [feiliu36/llm4opt](https://github.com/feiliu36/llm4opt) | 367 | Markdown | research-agent | - | application/self-evolving-agent signal |
| [snowflake-labs/agent-world-model](https://github.com/snowflake-labs/agent-world-model) | 356 | Python | education-list | - | application/self-evolving-agent signal |
| [feiliu36/eoh](https://github.com/feiliu36/eoh) | 319 | Markdown | evolution | - | application/self-evolving-agent signal |
| [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | Python | evolution | 应用 | kept prior human/analysis category + README verified |
| [zaixizhang/stella](https://github.com/zaixizhang/stella) | 141 | Python | evaluation | 应用 | kept prior human/analysis category + README verified |
| [fareedkhan-dev/autonomous-agentic-rag](https://github.com/fareedkhan-dev/autonomous-agentic-rag) | 139 | Unknown | memory | 应用 | kept prior human/analysis category + README verified |
| [adam-s/intercept](https://github.com/adam-s/intercept) | 127 | TypeScript/JavaScript | evaluation | 应用 | kept prior human/analysis category + README verified |
| [autohandai/code-cli](https://github.com/autohandai/code-cli) | 110 | TypeScript | evaluation | 应用 | kept prior human/analysis category + README verified |
| [zou-group/sirius](https://github.com/zou-group/sirius) | 101 | Markdown | framework | 应用 | kept prior human/analysis category + README verified |
| [knowledgexlab/muse](https://github.com/knowledgexlab/muse) | 88 | Python | evaluation | 应用 | kept prior human/analysis category + README verified |
| [ecnu-icalk/ell-stulife](https://github.com/ecnu-icalk/ell-stulife) | 74 | Markdown | memory | 应用 | kept prior human/analysis category + README verified |
| [yonkoo11/hermes-dojo](https://github.com/yonkoo11/hermes-dojo) | 72 | Markdown | evolution | 应用 | kept prior human/analysis category + README verified |
| [keskival/recursive-self-improvement-suite](https://github.com/keskival/recursive-self-improvement-suite) | 46 | Markdown | evolution | 应用 | kept prior human/analysis category + README verified |
| [xiaofangxd/llm/ea](https://github.com/xiaofangxd/llm/ea) | 23 | Markdown | evolution | Unclassified | application/self-evolving-agent signal |

### 教程/tutorial

| Repo | Stars | Stack | Base theme | Prior | Evidence |
|---|---:|---|---|---|---|
| [tsinghua-fib-lab/world-model](https://github.com/tsinghua-fib-lab/world-model) | 711 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [opendilab/awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl) | 689 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [yingchengyang/reinforcement-learning-papers](https://github.com/yingchengyang/reinforcement-learning-papers) | 569 | Unknown | research-agent | - | awesome/list/tutorial/survey resource signal |
| [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 534 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [ilsilfverskiold/awesome-llm-resources-list](https://github.com/ilsilfverskiold/awesome-llm-resources-list) | 523 | Unknown | education-list | - | awesome/list/tutorial/survey resource signal |
| [tsinghuac3i/awesome-memory-for-agents](https://github.com/tsinghuac3i/awesome-memory-for-agents) | 506 | Markdown | memory | - | awesome/list/tutorial/survey resource signal |
| [jennyzzt/awesome-open-ended](https://github.com/jennyzzt/awesome-open-ended) | 438 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [davidzwz/awesome-rag-reasoning](https://github.com/davidzwz/awesome-rag-reasoning) | 427 | Markdown | memory | - | awesome/list/tutorial/survey resource signal |
| [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) | 421 | Markdown | memory | - | awesome/list/tutorial/survey resource signal |
| [hkust-knowcomp/awesome-llm-scientific-discovery](https://github.com/hkust-knowcomp/awesome-llm-scientific-discovery) | 344 | Markdown | research-agent | - | awesome/list/tutorial/survey resource signal |
| [qianlima-lab/awesome-lifelong-llm-agent](https://github.com/qianlima-lab/awesome-lifelong-llm-agent) | 300 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 273 | Jupyter Notebook | evolution | - | awesome/list/tutorial/survey resource signal |
| [yxf203/awesome-efficient-agents](https://github.com/yxf203/awesome-efficient-agents) | 250 | Markdown | memory | - | awesome/list/tutorial/survey resource signal |
| [openning07/awesome-curriculum-learning](https://github.com/openning07/awesome-curriculum-learning) | 248 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [lingxi-agent/lingxi](https://github.com/lingxi-agent/lingxi) | 243 | Markdown | framework | - | awesome/list/tutorial/survey resource signal |
| [isenglab/awesomellm4apr](https://github.com/isenglab/awesomellm4apr) | 240 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |
| [researai/awesome-ai-scientist](https://github.com/researai/awesome-ai-scientist) | 240 | Markdown | research-agent | - | awesome/list/tutorial/survey resource signal |
| [youngdubbydu/llm-agent-optimization](https://github.com/youngdubbydu/llm-agent-optimization) | 231 | Markdown | education-list | - | awesome/list/tutorial/survey resource signal |

## 8. 全量分类表

| # | Repo | Stars | Prior | Final category | Stack | Base theme | Evidence |
|---:|---|---:|---|---|---|---|---|
| 1 | [madaan/self-refine](https://github.com/madaan/self-refine) | 805 | 工具 | 工具/tool | Markdown | prompt-optimization | kept prior human/analysis category + README verified |
| 2 | [vision-intelligence-and-robots-group/best-incremental-learning](https://github.com/vision-intelligence-and-robots-group/best-incremental-learning) | 607 | - | 工具/tool | Unknown | coding-agent | tool/module/memory/prompt/coding signal |
| 3 | [graph-rag/graphrag](https://github.com/graph-rag/graphrag) | 574 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 4 | [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) | 424 | - | 工具/tool | Markdown | evolution | tool/module/memory/prompt/coding signal |
| 5 | [sibyl-research-team/sibyl-research-system](https://github.com/sibyl-research-team/sibyl-research-system) | 245 | - | 工具/tool | Python | research-agent | tool/module/memory/prompt/coding signal |
| 6 | [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 181 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 7 | [claire-labo/evotune](https://github.com/claire-labo/evotune) | 137 | - | 工具/tool | Python | coding-agent | tool/module/memory/prompt/coding signal |
| 8 | [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) | 123 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 9 | [fusionbrainlab/gigaevo-core](https://github.com/fusionbrainlab/gigaevo-core) | 116 | - | 工具/tool | Markdown | evolution | tool/module/memory/prompt/coding signal |
| 10 | [dongxiangjue/awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement) | 106 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 11 | [inclusionai/agenticlearning](https://github.com/inclusionai/agenticlearning) | 106 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 12 | [mycelium-io/mycelium](https://github.com/mycelium-io/mycelium) | 95 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 13 | [sola-st/repairagent](https://github.com/sola-st/repairagent) | 95 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 14 | [egmaminta/gepa-lite](https://github.com/egmaminta/gepa-lite) | 55 | - | 工具/tool | Python | prompt-optimization | tool/module/memory/prompt/coding signal |
| 15 | [ibm/awesome-agentic-workflow-optimization](https://github.com/ibm/awesome-agentic-workflow-optimization) | 51 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 16 | [shiqichen17/spa](https://github.com/shiqichen17/spa) | 35 | - | 工具/tool | Shell | memory | tool/module/memory/prompt/coding signal |
| 17 | [colab2/midca](https://github.com/colab2/midca) | 27 | - | 工具/tool | Markdown | coding-agent | tool/module/memory/prompt/coding signal |
| 18 | [skills-mcp/skills-mcp](https://github.com/skills-mcp/skills-mcp) | 24 | - | 工具/tool | TypeScript/JavaScript | prompt-optimization | tool/module/memory/prompt/coding signal |
| 19 | [volcengine/openviking](https://github.com/volcengine/openviking) | 24 | 工具 | 工具/tool | Markdown | memory | kept prior human/analysis category + README verified |
| 20 | [agentskills/agentskills](https://github.com/agentskills/agentskills) | 19 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 21 | [haotang1995/worldcoder](https://github.com/haotang1995/worldcoder) | 11 | - | 工具/tool | Python | coding-agent | tool/module/memory/prompt/coding signal |
| 22 | [zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare](https://github.com/zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare) | 11 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 23 | [kargarisaac/reflexion](https://github.com/kargarisaac/reflexion) | 7 | - | 工具/tool | Python | prompt-optimization | tool/module/memory/prompt/coding signal |
| 24 | [budecosystem/claudeevolve](https://github.com/budecosystem/claudeevolve) | 4 | - | 工具/tool | Markdown | evolution | tool/module/memory/prompt/coding signal |
| 25 | [gepa-ai/gepa](https://github.com/gepa-ai/gepa) | 4 | - | 工具/tool | Markdown | prompt-optimization | tool/module/memory/prompt/coding signal |
| 26 | [khykd/reflector](https://github.com/khykd/reflector) | 4 | - | 工具/tool | Markdown | prompt-optimization | tool/module/memory/prompt/coding signal |
| 27 | [memodb-io/acontext](https://github.com/memodb-io/acontext) | 3 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 28 | [agent-on-the-fly/memento](https://github.com/agent-on-the-fly/memento) | 2 | - | 工具/tool | Python | memory | tool/module/memory/prompt/coding signal |
| 29 | [caution724/github-explorer-skill](https://github.com/caution724/github-explorer-skill) | 2 | - | 工具/tool | Markdown | coding-agent | tool/module/memory/prompt/coding signal |
| 30 | [evoagentx/awesome-self-evolving-agents](https://github.com/evoagentx/awesome-self-evolving-agents) | 2 | 工具 | 工具/tool | Markdown | evolution | kept prior human/analysis category + README verified |
| 31 | [mwasifanwar/meta-cognitive-learning-system](https://github.com/mwasifanwar/meta-cognitive-learning-system) | 2 | - | 工具/tool | Python | prompt-optimization | tool/module/memory/prompt/coding signal |
| 32 | [pingcap/ossinsight](https://github.com/pingcap/ossinsight) | 2 | - | 工具/tool | Markdown | research-agent | tool/module/memory/prompt/coding signal |
| 33 | [stonks-git/intuitive-ai](https://github.com/stonks-git/intuitive-ai) | 2 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 34 | [alberto-codes/gepa-adk](https://github.com/alberto-codes/gepa-adk) | 1 | - | 工具/tool | Markdown | prompt-optimization | tool/module/memory/prompt/coding signal |
| 35 | [incidentfox/self-learning-ai-agent](https://github.com/incidentfox/self-learning-ai-agent) | 1 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 36 | [rishab-agrawal/humanoid-curriculum-rl](https://github.com/rishab-agrawal/humanoid-curriculum-rl) | 1 | - | 工具/tool | Python | coding-agent | tool/module/memory/prompt/coding signal |
| 37 | [sakanaai/shinkaevolve](https://github.com/sakanaai/shinkaevolve) | 1 | - | 工具/tool | Markdown | evolution | tool/module/memory/prompt/coding signal |
| 38 | [george-salafatinos/tictactoe-self-play](https://github.com/george-salafatinos/tictactoe-self-play) | 0 | - | 工具/tool | Python | coding-agent | tool/module/memory/prompt/coding signal |
| 39 | [legionio/lex-metacognition](https://github.com/legionio/lex-metacognition) | 0 | - | 工具/tool | Markdown | memory | tool/module/memory/prompt/coding signal |
| 40 | [longman-max/selfthinker](https://github.com/longman-max/selfthinker) | 0 | - | 工具/tool | Python | coding-agent | tool/module/memory/prompt/coding signal |
| 41 | [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) | 998 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 42 | [lamm-mit/sciagentsdiscovery](https://github.com/lamm-mit/sciagentsdiscovery) | 610 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 43 | [thudm/webrl](https://github.com/thudm/webrl) | 524 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 44 | [facebookresearch/drzero](https://github.com/facebookresearch/drzero) | 515 | 应用 | 应用/application | Shell | research-agent | kept prior human/analysis category + README verified |
| 45 | [feiliu36/llm4opt](https://github.com/feiliu36/llm4opt) | 367 | - | 应用/application | Markdown | research-agent | application/self-evolving-agent signal |
| 46 | [snowflake-labs/agent-world-model](https://github.com/snowflake-labs/agent-world-model) | 356 | - | 应用/application | Python | education-list | application/self-evolving-agent signal |
| 47 | [feiliu36/eoh](https://github.com/feiliu36/eoh) | 319 | - | 应用/application | Markdown | evolution | application/self-evolving-agent signal |
| 48 | [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 194 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 49 | [zaixizhang/stella](https://github.com/zaixizhang/stella) | 141 | 应用 | 应用/application | Python | evaluation | kept prior human/analysis category + README verified |
| 50 | [fareedkhan-dev/autonomous-agentic-rag](https://github.com/fareedkhan-dev/autonomous-agentic-rag) | 139 | 应用 | 应用/application | Unknown | memory | kept prior human/analysis category + README verified |
| 51 | [adam-s/intercept](https://github.com/adam-s/intercept) | 127 | 应用 | 应用/application | TypeScript/JavaScript | evaluation | kept prior human/analysis category + README verified |
| 52 | [autohandai/code-cli](https://github.com/autohandai/code-cli) | 110 | 应用 | 应用/application | TypeScript | evaluation | kept prior human/analysis category + README verified |
| 53 | [zou-group/sirius](https://github.com/zou-group/sirius) | 101 | 应用 | 应用/application | Markdown | framework | kept prior human/analysis category + README verified |
| 54 | [knowledgexlab/muse](https://github.com/knowledgexlab/muse) | 88 | 应用 | 应用/application | Python | evaluation | kept prior human/analysis category + README verified |
| 55 | [ecnu-icalk/ell-stulife](https://github.com/ecnu-icalk/ell-stulife) | 74 | 应用 | 应用/application | Markdown | memory | kept prior human/analysis category + README verified |
| 56 | [yonkoo11/hermes-dojo](https://github.com/yonkoo11/hermes-dojo) | 72 | 应用 | 应用/application | Markdown | evolution | kept prior human/analysis category + README verified |
| 57 | [keskival/recursive-self-improvement-suite](https://github.com/keskival/recursive-self-improvement-suite) | 46 | 应用 | 应用/application | Markdown | evolution | kept prior human/analysis category + README verified |
| 58 | [xiaofangxd/llm/ea](https://github.com/xiaofangxd/llm/ea) | 23 | Unclassified | 应用/application | Markdown | evolution | application/self-evolving-agent signal |
| 59 | [naivoder/mctsr](https://github.com/naivoder/mctsr) | 22 | 应用 | 应用/application | Python | prompt-optimization | kept prior human/analysis category + README verified |
| 60 | [immanuelxiv/ppo-self-play](https://github.com/immanuelxiv/ppo-self-play) | 20 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 61 | [galaxy-brain-ai/mcog-core](https://github.com/galaxy-brain-ai/mcog-core) | 19 | - | 应用/application | Markdown | research-agent | application/self-evolving-agent signal |
| 62 | [zesearch/self-improvement-llm](https://github.com/zesearch/self-improvement-llm) | 13 | - | 应用/application | Markdown | evolution | application/self-evolving-agent signal |
| 63 | [aiming-lab/atp](https://github.com/aiming-lab/atp) | 10 | 应用 | 应用/application | Markdown | safety | kept prior human/analysis category + README verified |
| 64 | [tianyi-stack/madevolve](https://github.com/tianyi-stack/madevolve) | 9 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 65 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 6 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 66 | [sakanaai/ai-scientist-v2](https://github.com/sakanaai/ai-scientist-v2) | 6 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 67 | [nousresearch/hermes-agent-self-evolution](https://github.com/nousresearch/hermes-agent-self-evolution) | 3 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 68 | [pgg3/l-autoda](https://github.com/pgg3/l-autoda) | 3 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 69 | [facebookresearch/hyperagents](https://github.com/facebookresearch/hyperagents) | 2 | 应用 | 应用/application | Python | memory | kept prior human/analysis category + README verified |
| 70 | [jennyzzt/dgm](https://github.com/jennyzzt/dgm) | 2 | 应用 | 应用/application | Python | evaluation | kept prior human/analysis category + README verified |
| 71 | [amap-ml/skillclaw](https://github.com/amap-ml/skillclaw) | 1 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 72 | [charlesq9/self-evolving-agents](https://github.com/charlesq9/self-evolving-agents) | 1 | 应用 | 应用/application | Markdown | evolution | kept prior human/analysis category + README verified |
| 73 | [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) | 1 | 应用 | 应用/application | Markdown | prompt-optimization | kept prior human/analysis category + README verified |
| 74 | [lfleon9b/sakana-ai-scientist-v2](https://github.com/lfleon9b/sakana-ai-scientist-v2) | 1 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 75 | [modelscope/agentevolver](https://github.com/modelscope/agentevolver) | 1 | 应用 | 应用/application | Python | evolution | kept prior human/analysis category + README verified |
| 76 | [yologdev/yoyo-evolve](https://github.com/yologdev/yoyo-evolve) | 1 | 应用 | 应用/application | Markdown | evolution | kept prior human/analysis category + README verified |
| 77 | [aaronowh/ai-scientist-v2](https://github.com/aaronowh/ai-scientist-v2) | 0 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 78 | [abhisakh/ai-scientist-v2](https://github.com/abhisakh/ai-scientist-v2) | 0 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 79 | [adiban17/ppo-ping-pong-agent-](https://github.com/adiban17/ppo-ping-pong-agent-) | 0 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 80 | [quantstellarlab/ai-scientist-v2](https://github.com/quantstellarlab/ai-scientist-v2) | 0 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 81 | [sakutepov/ai-scientist-v2](https://github.com/sakutepov/ai-scientist-v2) | 0 | - | 应用/application | Python | research-agent | application/self-evolving-agent signal |
| 82 | [tzussman/openevolve](https://github.com/tzussman/openevolve) | 0 | - | 应用/application | Python | evolution | application/self-evolving-agent signal |
| 83 | [tsinghua-fib-lab/world-model](https://github.com/tsinghua-fib-lab/world-model) | 711 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 84 | [opendilab/awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl) | 689 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 85 | [yingchengyang/reinforcement-learning-papers](https://github.com/yingchengyang/reinforcement-learning-papers) | 569 | - | 教程/tutorial | Unknown | research-agent | awesome/list/tutorial/survey resource signal |
| 86 | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 534 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 87 | [ilsilfverskiold/awesome-llm-resources-list](https://github.com/ilsilfverskiold/awesome-llm-resources-list) | 523 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 88 | [tsinghuac3i/awesome-memory-for-agents](https://github.com/tsinghuac3i/awesome-memory-for-agents) | 506 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 89 | [jennyzzt/awesome-open-ended](https://github.com/jennyzzt/awesome-open-ended) | 438 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 90 | [davidzwz/awesome-rag-reasoning](https://github.com/davidzwz/awesome-rag-reasoning) | 427 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 91 | [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) | 421 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 92 | [hkust-knowcomp/awesome-llm-scientific-discovery](https://github.com/hkust-knowcomp/awesome-llm-scientific-discovery) | 344 | - | 教程/tutorial | Markdown | research-agent | awesome/list/tutorial/survey resource signal |
| 93 | [qianlima-lab/awesome-lifelong-llm-agent](https://github.com/qianlima-lab/awesome-lifelong-llm-agent) | 300 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 94 | [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 273 | - | 教程/tutorial | Jupyter Notebook | evolution | awesome/list/tutorial/survey resource signal |
| 95 | [yxf203/awesome-efficient-agents](https://github.com/yxf203/awesome-efficient-agents) | 250 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 96 | [openning07/awesome-curriculum-learning](https://github.com/openning07/awesome-curriculum-learning) | 248 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 97 | [lingxi-agent/lingxi](https://github.com/lingxi-agent/lingxi) | 243 | - | 教程/tutorial | Markdown | framework | awesome/list/tutorial/survey resource signal |
| 98 | [isenglab/awesomellm4apr](https://github.com/isenglab/awesomellm4apr) | 240 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 99 | [researai/awesome-ai-scientist](https://github.com/researai/awesome-ai-scientist) | 240 | - | 教程/tutorial | Markdown | research-agent | awesome/list/tutorial/survey resource signal |
| 100 | [youngdubbydu/llm-agent-optimization](https://github.com/youngdubbydu/llm-agent-optimization) | 231 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 101 | [lightchen233/awesome-ai4research](https://github.com/lightchen233/awesome-ai4research) | 230 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 102 | [evalops/dspy-0to1-guide](https://github.com/evalops/dspy-0to1-guide) | 215 | - | 教程/tutorial | Python | prompt-optimization | awesome/list/tutorial/survey resource signal |
| 103 | [salvatorera/ml-news-of-the-week](https://github.com/salvatorera/ml-news-of-the-week) | 180 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 104 | [zzz47zzz/awesome-lifelong-learning-methods-for-llm](https://github.com/zzz47zzz/awesome-lifelong-learning-methods-for-llm) | 162 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 105 | [ghy0501/awesome-continual-learning-in-generative-models](https://github.com/ghy0501/awesome-continual-learning-in-generative-models) | 151 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 106 | [agentmemoryworld/awesome-agent-memory](https://github.com/agentmemoryworld/awesome-agent-memory) | 148 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 107 | [xuchen-li/llm-arxiv-daily](https://github.com/xuchen-li/llm-arxiv-daily) | 144 | - | 教程/tutorial | Markdown | evaluation | awesome/list/tutorial/survey resource signal |
| 108 | [wuxingyu-ai/llm4ec](https://github.com/wuxingyu-ai/llm4ec) | 139 | - | 教程/tutorial | Markdown | evolution | awesome/list/tutorial/survey resource signal |
| 109 | [logikon-ai/awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) | 126 | - | 教程/tutorial | Markdown | prompt-optimization | awesome/list/tutorial/survey resource signal |
| 110 | [yennning/awesome-code-as-agent-harness-papers](https://github.com/yennning/awesome-code-as-agent-harness-papers) | 123 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 111 | [smiles724/awesome-llm-rlvr](https://github.com/smiles724/awesome-llm-rlvr) | 107 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 112 | [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 87 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 113 | [zijian-ni/awesome-ai-agents-2026](https://github.com/zijian-ni/awesome-ai-agents-2026) | 81 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 114 | [bobxwu/learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers) | 71 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 115 | [arunagirinathan-k/awesome-ai-agents-2026](https://github.com/arunagirinathan-k/awesome-ai-agents-2026) | 69 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 116 | [scienceaix/agentskills](https://github.com/scienceaix/agentskills) | 63 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 117 | [mb-mal/awesome-ai-agents-frameworks](https://github.com/mb-mal/awesome-ai-agents-frameworks) | 52 | - | 教程/tutorial | Unknown | framework | awesome/list/tutorial/survey resource signal |
| 118 | [tsinghua-fib-lab/awesome-ai-scientists](https://github.com/tsinghua-fib-lab/awesome-ai-scientists) | 35 | - | 教程/tutorial | Markdown | research-agent | awesome/list/tutorial/survey resource signal |
| 119 | [huggingface/agents-course](https://github.com/huggingface/agents-course) | 28 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 120 | [shadowrootdev/awesome-agent-skills-mcp](https://github.com/shadowrootdev/awesome-agent-skills-mcp) | 23 | - | 教程/tutorial | TypeScript/JavaScript | education-list | awesome/list/tutorial/survey resource signal |
| 121 | [bansky-cl/graphrag-arxiv-daily-paper](https://github.com/bansky-cl/graphrag-arxiv-daily-paper) | 22 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 122 | [voltagent/awesome-agent-skills](https://github.com/voltagent/awesome-agent-skills) | 22 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 123 | [clint-kristopher-morris/llm-guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution) | 19 | - | 教程/tutorial | Python | evolution | awesome/list/tutorial/survey resource signal |
| 124 | [taishi-n324/awesome-rl-reasoning](https://github.com/taishi-n324/awesome-rl-reasoning) | 13 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 125 | [vivy-yi/awesome-agent-orchestration](https://github.com/vivy-yi/awesome-agent-orchestration) | 10 | - | 教程/tutorial | Markdown | framework | awesome/list/tutorial/survey resource signal |
| 126 | [zhonghaojiang/awesome-issue-solving](https://github.com/zhonghaojiang/awesome-issue-solving) | 9 | - | 教程/tutorial | Markdown | evaluation | awesome/list/tutorial/survey resource signal |
| 127 | [opendilab/awesome-rlhf](https://github.com/opendilab/awesome-rlhf) | 4 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 128 | [xialeiliu/awesome-incremental-learning](https://github.com/xialeiliu/awesome-incremental-learning) | 4 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 129 | [r4stin/kg-research-agent](https://github.com/r4stin/kg-research-agent) | 3 | - | 教程/tutorial | Python | research-agent | awesome/list/tutorial/survey resource signal |
| 130 | [agi-edgerunners/llm-agents-papers](https://github.com/agi-edgerunners/llm-agents-papers) | 2 | - | 教程/tutorial | Unknown | research-agent | awesome/list/tutorial/survey resource signal |
| 131 | [deep-polyu/awesome-graphrag](https://github.com/deep-polyu/awesome-graphrag) | 2 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 132 | [knightnemo/awesome-world-models](https://github.com/knightnemo/awesome-world-models) | 2 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 133 | [lmd0311/awesome-world-model](https://github.com/lmd0311/awesome-world-model) | 2 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 134 | [luo-junyu/awesome-agent-papers](https://github.com/luo-junyu/awesome-agent-papers) | 2 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 135 | [mbzuai-oryx/awesome-llm-post-training](https://github.com/mbzuai-oryx/awesome-llm-post-training) | 2 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 136 | [shichun-liu/agent-memory-paper-list](https://github.com/shichun-liu/agent-memory-paper-list) | 2 | - | 教程/tutorial | Markdown | memory | awesome/list/tutorial/survey resource signal |
| 137 | [tsinghuac3i/awesome-rl-for-lrms](https://github.com/tsinghuac3i/awesome-rl-for-lrms) | 2 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 138 | [ai-boost/awesome-ai-for-science](https://github.com/ai-boost/awesome-ai-for-science) | 1 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 139 | [kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai](https://github.com/kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai) | 1 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 140 | [leofan90/awesome-world-models](https://github.com/leofan90/awesome-world-models) | 1 | - | 教程/tutorial | Unknown | education-list | awesome/list/tutorial/survey resource signal |
| 141 | [luh-ai-devnerds/llm-guided-curriculum-rl](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl) | 1 | - | 教程/tutorial | Python | research-agent | awesome/list/tutorial/survey resource signal |
| 142 | [opendilab/awesome-model-based-rl](https://github.com/opendilab/awesome-model-based-rl) | 1 | - | 教程/tutorial | Markdown | education-list | awesome/list/tutorial/survey resource signal |
| 143 | [tmgthb/autonomous-agents](https://github.com/tmgthb/autonomous-agents) | 1 | - | 教程/tutorial | Markdown | research-agent | awesome/list/tutorial/survey resource signal |
| 144 | [langchain-ai/langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk) | 894 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 145 | [aimagelab/mammoth](https://github.com/aimagelab/mammoth) | 812 | - | 框架/framework | Python | evaluation | framework/runtime/orchestration signal |
| 146 | [openmemind/memind](https://github.com/openmemind/memind) | 787 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 147 | [wzdnzd/harvester](https://github.com/wzdnzd/harvester) | 546 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 148 | [neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness) | 507 | 框架 | 框架/framework | Python | evaluation | kept prior human/analysis category + README verified |
| 149 | [viktoraxelsen/memskill](https://github.com/viktoraxelsen/memskill) | 482 | 框架 | 框架/framework | Python | memory | kept prior human/analysis category + README verified |
| 150 | [openautocoder/live-swe-agent](https://github.com/openautocoder/live-swe-agent) | 392 | 框架 | 框架/framework | Markdown | coding-agent | kept prior human/analysis category + README verified |
| 151 | [noahshinn/reflexion-draft](https://github.com/noahshinn/reflexion-draft) | 388 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 152 | [codexstar69/bug-hunter](https://github.com/codexstar69/bug-hunter) | 380 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 153 | [bingreeky/memgen](https://github.com/bingreeky/memgen) | 378 | 框架 | 框架/framework | Python | memory | kept prior human/analysis category + README verified |
| 154 | [agentic-in/elephant-agent](https://github.com/agentic-in/elephant-agent) | 361 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 155 | [channinglua/prax-agent](https://github.com/channinglua/prax-agent) | 294 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 156 | [dsifry/metaswarm](https://github.com/dsifry/metaswarm) | 272 | 框架 | 框架/framework | Markdown | framework | kept prior human/analysis category + README verified |
| 157 | [onevcat/argue](https://github.com/onevcat/argue) | 238 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 158 | [reflexioai/reflexio](https://github.com/reflexioai/reflexio) | 220 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 159 | [deepelementlab/clawcode](https://github.com/deepelementlab/clawcode) | 199 | 框架 | 框架/framework | Python | coding-agent | kept prior human/analysis category + README verified |
| 160 | [memovai/memov](https://github.com/memovai/memov) | 190 | 框架 | 框架/framework | Shell | memory | kept prior human/analysis category + README verified |
| 161 | [spiral-rl/spiral](https://github.com/spiral-rl/spiral) | 190 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 162 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | 189 | - | 框架/framework | Markdown | workflow-automation | framework/runtime/orchestration signal |
| 163 | [significant-gravitas/autogpt](https://github.com/significant-gravitas/autogpt) | 184 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 164 | [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) | 182 | Unclassified | 框架/framework | Python | evolution | framework/runtime/orchestration signal |
| 165 | [hao-cyber/skill-evolution](https://github.com/hao-cyber/skill-evolution) | 145 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 166 | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | 144 | 框架 | 框架/framework | TypeScript/JavaScript | evaluation | kept prior human/analysis category + README verified |
| 167 | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 168 | [osu-nlp-group/skillweaver](https://github.com/osu-nlp-group/skillweaver) | 123 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 169 | [shintaro-sprech/agent-orchestrator-template](https://github.com/shintaro-sprech/agent-orchestrator-template) | 120 | 框架 | 框架/framework | Markdown | framework | kept prior human/analysis category + README verified |
| 170 | [01-ai/langcrew](https://github.com/01-ai/langcrew) | 114 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 171 | [longyunfeigu/learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent) | 113 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 172 | [yang1999code/controllable-agent](https://github.com/yang1999code/controllable-agent) | 105 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 173 | [0xsanei/darwinia](https://github.com/0xsanei/darwinia) | 102 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 174 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 94 | - | 框架/framework | Markdown | workflow-automation | framework/runtime/orchestration signal |
| 175 | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 86 | - | 框架/framework | Markdown | memory | framework/runtime/orchestration signal |
| 176 | [agenttoolkit/altk-evolve](https://github.com/agenttoolkit/altk-evolve) | 85 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 177 | [richchen-maker/openclaw-multi-agent-team](https://github.com/richchen-maker/openclaw-multi-agent-team) | 80 | 框架 | 框架/framework | Markdown | framework | kept prior human/analysis category + README verified |
| 178 | [flowersteam/teachmyagent](https://github.com/flowersteam/teachmyagent) | 77 | - | 框架/framework | Python | evaluation | framework/runtime/orchestration signal |
| 179 | [mdalamin5/end-to-end-agentic-ai-automation-lab](https://github.com/mdalamin5/end-to-end-agentic-ai-automation-lab) | 72 | - | 框架/framework | Python | workflow-automation | framework/runtime/orchestration signal |
| 180 | [lean-dojo/leanagent](https://github.com/lean-dojo/leanagent) | 68 | - | 框架/framework | Python | evaluation | framework/runtime/orchestration signal |
| 181 | [omdivyatej/self-learning-agents](https://github.com/omdivyatej/self-learning-agents) | 63 | 框架 | 框架/framework | Python | framework | kept prior human/analysis category + README verified |
| 182 | [eliasecchig/gemini-cli-git](https://github.com/eliasecchig/gemini-cli-git) | 56 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 183 | [evotai/evot](https://github.com/evotai/evot) | 54 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 184 | [emson/elfmem](https://github.com/emson/elfmem) | 53 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 185 | [ilearn-lab/evoharness](https://github.com/ilearn-lab/evoharness) | 52 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 186 | [crewaiinc/crewai](https://github.com/crewaiinc/crewai) | 51 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 187 | [developzir/gepa-mcp](https://github.com/developzir/gepa-mcp) | 48 | - | 框架/framework | Python | prompt-optimization | framework/runtime/orchestration signal |
| 188 | [pingcy/ace-langgraph](https://github.com/pingcy/ace-langgraph) | 46 | 框架 | 框架/framework | Python | framework | kept prior human/analysis category + README verified |
| 189 | [zoe-yyx/agentnet](https://github.com/zoe-yyx/agentnet) | 46 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 190 | [letta-ai/agentic-learning-sdk](https://github.com/letta-ai/agentic-learning-sdk) | 45 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 191 | [28naem-del/mnemosyne](https://github.com/28naem-del/mnemosyne) | 41 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 192 | [cellium-project/cellium-agent](https://github.com/cellium-project/cellium-agent) | 41 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 193 | [hankbesser/recursive-agents](https://github.com/hankbesser/recursive-agents) | 39 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 194 | [zhangyiqun018/agent-for-debate](https://github.com/zhangyiqun018/agent-for-debate) | 38 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 195 | [clawland-ai/geneclaw](https://github.com/clawland-ai/geneclaw) | 36 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 196 | [stanfordnlp/dsp](https://github.com/stanfordnlp/dsp) | 34 | - | 框架/framework | Markdown | prompt-optimization | framework/runtime/orchestration signal |
| 197 | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 34 | - | 框架/framework | Markdown | prompt-optimization | framework/runtime/orchestration signal |
| 198 | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 32 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 199 | [vercel-labs/ai](https://github.com/vercel-labs/ai) | 24 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 200 | [vercel/ai](https://github.com/vercel/ai) | 24 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 201 | [letta-ai/letta](https://github.com/letta-ai/letta) | 22 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 202 | [siddharth-1001/agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness) | 20 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 203 | [camel-ai/owl](https://github.com/camel-ai/owl) | 19 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 204 | [exoskeletonzj/mars](https://github.com/exoskeletonzj/mars) | 18 | 框架 | 框架/framework | Python | prompt-optimization | kept prior human/analysis category + README verified |
| 205 | [tsukushiai/self-organized-agent](https://github.com/tsukushiai/self-organized-agent) | 18 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 206 | [browser-use/web-ui](https://github.com/browser-use/web-ui) | 16 | - | 框架/framework | Python | workflow-automation | framework/runtime/orchestration signal |
| 207 | [tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver) | 14 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 208 | [gumbel-ai/agent-debate](https://github.com/gumbel-ai/agent-debate) | 12 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 209 | [lsdefine/genericagent](https://github.com/lsdefine/genericagent) | 11 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 210 | [privkeyio/evolve-mcp](https://github.com/privkeyio/evolve-mcp) | 11 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 211 | [mettamazza/ernosagent](https://github.com/mettamazza/ernosagent) | 10 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 212 | [senweaver/senagentos](https://github.com/senweaver/senagentos) | 10 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 213 | [n4m3z/forge-council](https://github.com/n4m3z/forge-council) | 9 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 214 | [lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent) | 8 | - | 框架/framework | Markdown | memory | framework/runtime/orchestration signal |
| 215 | [autodrive-ecosystem/mrdt-marl](https://github.com/autodrive-ecosystem/mrdt-marl) | 7 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 216 | [evomap/evolver](https://github.com/evomap/evolver) | 7 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 217 | [hkuds/openspace](https://github.com/hkuds/openspace) | 6 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 218 | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 5 | 框架 | 框架/framework | Python | evolution | kept prior human/analysis category + README verified |
| 219 | [argus-framework/argus-ai-debate](https://github.com/argus-framework/argus-ai-debate) | 5 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 220 | [bazilicum/graphltm](https://github.com/bazilicum/graphltm) | 4 | - | 框架/framework | Markdown | memory | framework/runtime/orchestration signal |
| 221 | [xinhuagu/aceclaw](https://github.com/xinhuagu/aceclaw) | 4 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 222 | [zazencodes/zazencodes-season-3](https://github.com/zazencodes/zazencodes-season-3) | 4 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 223 | [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) | 3 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 224 | [emartin59/text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver) | 3 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 225 | [evoagentx/evoagentx](https://github.com/evoagentx/evoagentx) | 3 | 框架 | 框架/framework | Markdown | evolution | kept prior human/analysis category + README verified |
| 226 | [ronit26mehta/argus-ai-debate](https://github.com/ronit26mehta/argus-ai-debate) | 3 | - | 框架/framework | Unknown | framework | framework/runtime/orchestration signal |
| 227 | [sentrux/sentrux](https://github.com/sentrux/sentrux) | 2 | 框架 | 框架/framework | Markdown | evaluation | kept prior human/analysis category + README verified |
| 228 | [vercel/workflow](https://github.com/vercel/workflow) | 2 | - | 框架/framework | Markdown | workflow-automation | framework/runtime/orchestration signal |
| 229 | [arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind) | 1 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 230 | [asirwad/dspy-prompt-auto-optimizer](https://github.com/asirwad/dspy-prompt-auto-optimizer) | 1 | - | 框架/framework | Python | prompt-optimization | framework/runtime/orchestration signal |
| 231 | [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) | 1 | 框架 | 框架/framework | Markdown | memory | kept prior human/analysis category + README verified |
| 232 | [internscience/internagent](https://github.com/internscience/internagent) | 1 | - | 框架/framework | Python | research-agent | framework/runtime/orchestration signal |
| 233 | [os-copilot/os-copilot](https://github.com/os-copilot/os-copilot) | 1 | 框架 | 框架/framework | Python | evaluation | kept prior human/analysis category + README verified |
| 234 | [rinadelph/agent-mcp](https://github.com/rinadelph/agent-mcp) | 1 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 235 | [sunitj/colloquip](https://github.com/sunitj/colloquip) | 1 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 236 | [ashish-kamboj/agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows) | 0 | - | 框架/framework | Markdown | workflow-automation | framework/runtime/orchestration signal |
| 237 | [centaurioun/crewai](https://github.com/centaurioun/crewai) | 0 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 238 | [haoxufd/openrlhf](https://github.com/haoxufd/openrlhf) | 0 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 239 | [large-model-rl-lib/openrlhf](https://github.com/large-model-rl-lib/openrlhf) | 0 | - | 框架/framework | Python | framework | framework/runtime/orchestration signal |
| 240 | [mitchellgordon95/dspy](https://github.com/mitchellgordon95/dspy) | 0 | - | 框架/framework | Python | prompt-optimization | framework/runtime/orchestration signal |
| 241 | [sasleee/tencentdb-agent-memory](https://github.com/sasleee/tencentdb-agent-memory) | 0 | - | 框架/framework | Markdown | memory | framework/runtime/orchestration signal |
| 242 | [shingo257/gitnexus](https://github.com/shingo257/gitnexus) | 0 | - | 框架/framework | Markdown | evaluation | framework/runtime/orchestration signal |
| 243 | [square-mind/squaremind](https://github.com/square-mind/squaremind) | 0 | - | 框架/framework | Markdown | framework | framework/runtime/orchestration signal |
| 244 | [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) | 0 | - | 框架/framework | TypeScript/JavaScript | framework | framework/runtime/orchestration signal |
| 245 | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 549 | 论文代码 | 论文代码/paper-code | Markdown | evolution | kept prior human/analysis category + README verified |
| 246 | [vsonicv/es-fine-tuning-paper](https://github.com/vsonicv/es-fine-tuning-paper) | 356 | - | 论文代码/paper-code | Python | research-agent | paper/artifact/research-code signal |
| 247 | [maitrix-org/promptagent](https://github.com/maitrix-org/promptagent) | 353 | 论文代码 | 论文代码/paper-code | Python | prompt-optimization | kept prior human/analysis category + README verified |
| 248 | [sunzey/seagent](https://github.com/sunzey/seagent) | 246 | 论文代码 | 论文代码/paper-code | Shell | evaluation | kept prior human/analysis category + README verified |
| 249 | [krzysztofdudek/researcherskill](https://github.com/krzysztofdudek/researcherskill) | 223 | - | 论文代码/paper-code | Markdown | research-agent | paper/artifact/research-code signal |
| 250 | [raghavc/llm-rlhf-tuning-with-ppo-and-dpo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo) | 190 | - | 论文代码/paper-code | Python | memory | paper/artifact/research-code signal |
| 251 | [machuangtao/llm-kg4qa](https://github.com/machuangtao/llm-kg4qa) | 157 | - | 论文代码/paper-code | Markdown | coding-agent | paper/artifact/research-code signal |
| 252 | [memtensor/memrl](https://github.com/memtensor/memrl) | 118 | 论文代码 | 论文代码/paper-code | Python | memory | kept prior human/analysis category + README verified |
| 253 | [tencent/selfevolvingagent](https://github.com/tencent/selfevolvingagent) | 100 | 论文代码 | 论文代码/paper-code | Markdown | evolution | kept prior human/analysis category + README verified |
| 254 | [gensi-thuair/flex](https://github.com/gensi-thuair/flex) | 78 | 论文代码 | 论文代码/paper-code | Python | evaluation | kept prior human/analysis category + README verified |
| 255 | [mbchang/meta-prompt](https://github.com/mbchang/meta-prompt) | 65 | 论文代码 | 论文代码/paper-code | Markdown | prompt-optimization | kept prior human/analysis category + README verified |
| 256 | [euphoria16/ui-genie](https://github.com/euphoria16/ui-genie) | 57 | 论文代码 | 论文代码/paper-code | Markdown | evolution | kept prior human/analysis category + README verified |
| 257 | [zhang677/accelopt](https://github.com/zhang677/accelopt) | 43 | 论文代码 | 论文代码/paper-code | Python | evaluation | kept prior human/analysis category + README verified |
| 258 | [swe-agent/swe-agent](https://github.com/swe-agent/swe-agent) | 19 | - | 论文代码/paper-code | Markdown | coding-agent | paper/artifact/research-code signal |
| 259 | [ventr1c/memma](https://github.com/ventr1c/memma) | 17 | 论文代码 | 论文代码/paper-code | Python | memory | kept prior human/analysis category + README verified |
| 260 | [ltzheng/curriculummarl](https://github.com/ltzheng/curriculummarl) | 13 | - | 论文代码/paper-code | Python | research-agent | paper/artifact/research-code signal |
| 261 | [octobrist/cope](https://github.com/octobrist/cope) | 11 | 论文代码 | 论文代码/paper-code | Python | evolution | kept prior human/analysis category + README verified |
| 262 | [nickatomlin/lm-selfplay](https://github.com/nickatomlin/lm-selfplay) | 9 | - | 论文代码/paper-code | Python | prompt-optimization | paper/artifact/research-code signal |
| 263 | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 3 | 论文代码 | 论文代码/paper-code | Markdown | memory | kept prior human/analysis category + README verified |
| 264 | [aiming-lab/agent0](https://github.com/aiming-lab/agent0) | 1 | 论文代码 | 论文代码/paper-code | Markdown | evolution | kept prior human/analysis category + README verified |
| 265 | [allenai/swe-agent](https://github.com/allenai/swe-agent) | 0 | - | 论文代码/paper-code | Markdown | coding-agent | paper/artifact/research-code signal |
| 266 | [paperwave/genenv](https://github.com/paperwave/genenv) | 0 | - | 论文代码/paper-code | Python | research-agent | paper/artifact/research-code signal |
| 267 | [star-bob/swe-agent](https://github.com/star-bob/swe-agent) | 0 | - | 论文代码/paper-code | Markdown | coding-agent | paper/artifact/research-code signal |
| 268 | [tiger-ai-lab/openresearcher](https://github.com/tiger-ai-lab/openresearcher) | 756 | - | 评测/evaluation | Python | research-agent | benchmark/evaluation/harness signal |
| 269 | [polarseeker/openseeker](https://github.com/polarseeker/openseeker) | 711 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 270 | [human-agent-society/coral](https://github.com/human-agent-society/coral) | 669 | 评测 | 评测/evaluation | Markdown | evolution | kept prior human/analysis category + README verified |
| 271 | [rlhflow/online-rlhf](https://github.com/rlhflow/online-rlhf) | 545 | - | 评测/evaluation | Shell | evaluation | benchmark/evaluation/harness signal |
| 272 | [lyl1015/jarvisevo](https://github.com/lyl1015/jarvisevo) | 401 | 评测 | 评测/evaluation | Python | evaluation | kept prior human/analysis category + README verified |
| 273 | [xizaoqu/worldmem](https://github.com/xizaoqu/worldmem) | 359 | - | 评测/evaluation | Python | memory | benchmark/evaluation/harness signal |
| 274 | [jarvis-xs/se-agent](https://github.com/jarvis-xs/se-agent) | 274 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 275 | [rmanluo/gfm-rag](https://github.com/rmanluo/gfm-rag) | 259 | - | 评测/evaluation | Python | memory | benchmark/evaluation/harness signal |
| 276 | [thuml/rlvr-world](https://github.com/thuml/rlvr-world) | 251 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 277 | [beeevita/evoprompt](https://github.com/beeevita/evoprompt) | 238 | - | 评测/evaluation | Python | prompt-optimization | benchmark/evaluation/harness signal |
| 278 | [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) | 232 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 279 | [modelscope/agentjet](https://github.com/modelscope/agentjet) | 208 | 评测 | 评测/evaluation | Python | evaluation | kept prior human/analysis category + README verified |
| 280 | [internlm/polar](https://github.com/internlm/polar) | 163 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 281 | [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 163 | 评测 | 评测/evaluation | Python | evolution | kept prior human/analysis category + README verified |
| 282 | [chuacheowhuan/gym-continuousdoubleauction](https://github.com/chuacheowhuan/gym-continuousdoubleauction) | 153 | - | 评测/evaluation | Python | coding-agent | benchmark/evaluation/harness signal |
| 283 | [archishmansengupta/autovoiceevals](https://github.com/archishmansengupta/autovoiceevals) | 149 | 评测 | 评测/evaluation | Python | evaluation | kept prior human/analysis category + README verified |
| 284 | [linear95/spag](https://github.com/linear95/spag) | 144 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 285 | [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) | 135 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 286 | [oxen-ai/self-rewarding-language-models](https://github.com/oxen-ai/self-rewarding-language-models) | 134 | - | 评测/evaluation | Markdown | prompt-optimization | benchmark/evaluation/harness signal |
| 287 | [sethkarten/continual-harness](https://github.com/sethkarten/continual-harness) | 106 | 评测 | 评测/evaluation | Python | evaluation | kept prior human/analysis category + README verified |
| 288 | [nikivanstein/llamea](https://github.com/nikivanstein/llamea) | 105 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 289 | [xai-liacs/llamea](https://github.com/xai-liacs/llamea) | 105 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 290 | [opentracy/opentracy](https://github.com/opentracy/opentracy) | 101 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 291 | [spillwavesolutions/agent-brain](https://github.com/spillwavesolutions/agent-brain) | 101 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 292 | [bennettschwartz/membrane](https://github.com/bennettschwartz/membrane) | 93 | - | 评测/evaluation | Markdown | memory | benchmark/evaluation/harness signal |
| 293 | [zjunlp/knowself](https://github.com/zjunlp/knowself) | 93 | - | 评测/evaluation | Shell | evaluation | benchmark/evaluation/harness signal |
| 294 | [ngoodman/metaprompt](https://github.com/ngoodman/metaprompt) | 88 | 评测 | 评测/evaluation | Python | prompt-optimization | kept prior human/analysis category + README verified |
| 295 | [zed-industries/zed](https://github.com/zed-industries/zed) | 83 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 296 | [shaoshuai0605/misevolution](https://github.com/shaoshuai0605/misevolution) | 76 | 评测 | 评测/evaluation | Markdown | evolution | kept prior human/analysis category + README verified |
| 297 | [imgeorgiev/pwm](https://github.com/imgeorgiev/pwm) | 68 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 298 | [pgg3/evotoolkit](https://github.com/pgg3/evotoolkit) | 68 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 299 | [x1aox1a/word2world](https://github.com/x1aox1a/word2world) | 62 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 300 | [bruno686/visplay](https://github.com/bruno686/visplay) | 57 | - | 评测/evaluation | Python | evolution | benchmark/evaluation/harness signal |
| 301 | [thu-nics/mars](https://github.com/thu-nics/mars) | 48 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 302 | [rucbm/laser](https://github.com/rucbm/laser) | 36 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 303 | [zjunlp/worldmind](https://github.com/zjunlp/worldmind) | 35 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 304 | [zhentingwang/dump](https://github.com/zhentingwang/dump) | 33 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 305 | [huggingface/smolagents](https://github.com/huggingface/smolagents) | 27 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 306 | [labicon/curricullm](https://github.com/labicon/curricullm) | 27 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 307 | [feesuu/cluerag](https://github.com/feesuu/cluerag) | 26 | - | 评测/evaluation | Python | memory | benchmark/evaluation/harness signal |
| 308 | [garrus800-stack/genesis-agent](https://github.com/garrus800-stack/genesis-agent) | 24 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 309 | [matebenyovszky/healing-agent](https://github.com/matebenyovszky/healing-agent) | 23 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 310 | [ce0alex/skill-hunter](https://github.com/ce0alex/skill-hunter) | 22 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 311 | [faveos8758/reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts) | 20 | 评测 | 评测/evaluation | TypeScript/JavaScript | evaluation | kept prior human/analysis category + README verified |
| 312 | [sebastianbrzustowicz/robot-sumo-rl](https://github.com/sebastianbrzustowicz/robot-sumo-rl) | 18 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 313 | [yinbo0927/fate](https://github.com/yinbo0927/fate) | 16 | 评测 | 评测/evaluation | Python | evolution | kept prior human/analysis category + README verified |
| 314 | [opendatabox/workspace-bench](https://github.com/opendatabox/workspace-bench) | 14 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 315 | [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) | 13 | - | 评测/evaluation | Python | research-agent | benchmark/evaluation/harness signal |
| 316 | [pathway/alphaxos](https://github.com/pathway/alphaxos) | 12 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 317 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | 9 | - | 评测/evaluation | Markdown | coding-agent | benchmark/evaluation/harness signal |
| 318 | [memtensor/memos](https://github.com/memtensor/memos) | 9 | 评测 | 评测/evaluation | Markdown | memory | kept prior human/analysis category + README verified |
| 319 | [enajx/es](https://github.com/enajx/es) | 7 | - | 评测/evaluation | Python | evolution | benchmark/evaluation/harness signal |
| 320 | [synaptent/aragora](https://github.com/synaptent/aragora) | 7 | - | 评测/evaluation | Markdown | memory | benchmark/evaluation/harness signal |
| 321 | [angrysky56/reflective-agent-architecture](https://github.com/angrysky56/reflective-agent-architecture) | 5 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 322 | [evermind-ai/everos](https://github.com/evermind-ai/everos) | 5 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 323 | [evermind-ai/everos?tab=readme-ov-file](https://github.com/evermind-ai/everos?tab=readme-ov-file) | 5 | 评测 | 评测/evaluation | Markdown | evaluation | kept prior human/analysis category + README verified |
| 324 | [hkuds/ai-researcher](https://github.com/hkuds/ai-researcher) | 5 | - | 评测/evaluation | Python | research-agent | benchmark/evaluation/harness signal |
| 325 | [rllm-org/rllm](https://github.com/rllm-org/rllm) | 5 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 326 | [swe-bench/swe-bench](https://github.com/swe-bench/swe-bench) | 5 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 327 | [seetrex-ai/laimark](https://github.com/seetrex-ai/laimark) | 4 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 328 | [self-play-language-models/spin-peft](https://github.com/self-play-language-models/spin-peft) | 4 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 329 | [shehrum/grf-self-play](https://github.com/shehrum/grf-self-play) | 4 | - | 评测/evaluation | Python | research-agent | benchmark/evaluation/harness signal |
| 330 | [circlemind-ai/fast-graphrag](https://github.com/circlemind-ai/fast-graphrag) | 3 | - | 评测/evaluation | Markdown | memory | benchmark/evaluation/harness signal |
| 331 | [noahshinn024/reflexion-human-eval](https://github.com/noahshinn024/reflexion-human-eval) | 3 | - | 评测/evaluation | Markdown | memory | benchmark/evaluation/harness signal |
| 332 | [studio-intrinsic/turbo-gepa](https://github.com/studio-intrinsic/turbo-gepa) | 3 | - | 评测/evaluation | Markdown | prompt-optimization | benchmark/evaluation/harness signal |
| 333 | [zou-group/textgrad](https://github.com/zou-group/textgrad) | 3 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 334 | [vicsanity623/pyob](https://github.com/vicsanity623/pyob) | 2 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 335 | [werner-duvaud/muzero-general](https://github.com/werner-duvaud/muzero-general) | 2 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 336 | [inclusionai/aworld](https://github.com/inclusionai/aworld) | 1 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 337 | [gepa-ai/optimize-anything-artifact](https://github.com/gepa-ai/optimize-anything-artifact) | 0 | - | 评测/evaluation | Markdown | prompt-optimization | benchmark/evaluation/harness signal |
| 338 | [gustolychees/contribai](https://github.com/gustolychees/contribai) | 0 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 339 | [kadubon/audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist) | 0 | - | 评测/evaluation | Python | research-agent | benchmark/evaluation/harness signal |
| 340 | [llmprogram/textgrad](https://github.com/llmprogram/textgrad) | 0 | - | 评测/evaluation | Python | coding-agent | benchmark/evaluation/harness signal |
| 341 | [mfolsom/rlvr-world](https://github.com/mfolsom/rlvr-world) | 0 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 342 | [polya20/textgrad](https://github.com/polya20/textgrad) | 0 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 343 | [thesdes/textgrad](https://github.com/thesdes/textgrad) | 0 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 344 | [workofart/selfplay-tictactoe](https://github.com/workofart/selfplay-tictactoe) | 0 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 345 | [xanther-ai/xce-benchmarks](https://github.com/xanther-ai/xce-benchmarks) | 0 | - | 评测/evaluation | Markdown | evaluation | benchmark/evaluation/harness signal |
| 346 | [zanwenfu/auto-code-rover](https://github.com/zanwenfu/auto-code-rover) | 0 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
| 347 | [zbinxp/deer-flow](https://github.com/zbinxp/deer-flow) | 0 | - | 评测/evaluation | Markdown | memory | benchmark/evaluation/harness signal |
| 348 | [zixuanfeng-nyu/textgrad](https://github.com/zixuanfeng-nyu/textgrad) | 0 | - | 评测/evaluation | Python | evaluation | benchmark/evaluation/harness signal |
