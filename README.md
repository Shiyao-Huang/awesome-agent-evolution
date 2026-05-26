# Awesome Self-Evolving AI Agents / AI Agent 自进化索引与综述

**Author / 归属:** aha team

[中文主入口](README.md) | [English](README-EN.md) | [中文兼容镜像](README-ZH.md)

![Self Evolve 公开研究管线](site/public/visuals/self-evolve-readme-banner.png)

## 一句话

这个仓库是 AI Agent 自进化 / 自改进方向的中文优先 Awesome 索引、综述入口、项目 model-card 库、论文工程和 SEO 网站素材库。

## 三句话

1. README 是第一入口：最有价值的分类、方法、benchmark、项目、论文、社区信号和链接必须直接放在这里，读者不用先翻目录。
2. `survey/` 与 `paper-drafts/` 保存审稿级展开版；README 直接放主内容、分类、方法、benchmark、项目和证据链接。
3. 全仓库按 `raw -> processed -> work -> results` 管线治理：raw 是证据，加工是解释，work 是论文/网站/脚本，results 是可发布输出。

## 五句话

1. 这个领域的核心问题不是“有没有 agent”，而是“agent 到底改进了什么、凭什么证明更强、能不能复用到真实任务”。
2. 当前证据层包括 530 个 GitHub raw captures、530 个已分类仓库、119 个站点项目、82 个严格 self-evolution 仓库、186 个广义 evolution-related 仓库。
3. 方法主线可压缩为六类：reward/RL/self-play、prompt/search、memory、architecture/code self-modification、multi-agent reflection/debate、evaluation/safety/governance。
4. Benchmark 是本项目的主矛盾之一：SWE-Bench、HumanEval、OSWorld、BrowserGym、AgentBench、LongMemEval、STATE-Bench 等必须被放在同一张比较表里，而不是散在项目页里。
5. 这个 README 的目标是让读者直接获得认知结构；链接只作为证据来源和展开材料，不作为理解前提。

## 核心历史、未来与趋势追踪

一句话：AI Agent 自进化的历史，是从 prompt/reflection 的轻量自我修正，走向 memory/skill/harness 的工程化积累，再走向 code、architecture、evaluator 和 organization 的可审计共同进化。

三句话：早期重点是让 LLM 在反馈中重试、反思、改 prompt 或选择更好候选；中期重点变成 agent runtime、multi-agent workflow、benchmark harness 和可执行代码/算法搜索；现在最核心的未来问题，是把改进变成可验证、可回滚、可迁移、可治理的基础设施。读这个领域不要只看“自进化”名字，而要沿着时间问：系统把什么变成可变对象，选择压力从哪里来，改进证据是否独立。README 后续每次更新都要同步追踪 trend，不只追加链接，还要判断哪个方向正在上升、哪个方向只是短期热度。

### 历史主线

| 阶段 | 时间信号 | 核心变化 | 代表证据 | 对读者的指导 |
|---|---|---|---|---|
| 轻量自改进 | 2022-2023 | 从一次性回答变成 feedback/reflection/prompt search 循环。 | OpenELM、DSPy、Reflexion、Self-Refine、OPRO、FunSearch | 先学“改什么、怎么评估、如何保留经验”，不要被 agent 外壳分散注意力。 |
| Agent runtime 与多 Agent | 2023-2024 | AutoGPT、CAMEL、MetaGPT、AutoGen、LangGraph 把工具、角色、workflow、状态机变成工程底座。 | [release timeline](analysis/github-project-data-analysis.md#analyzed-project-release-timeline), [项目分类总表](#项目分类总表) | 框架本身不等于自进化；只有接入 evaluator、memory 和更新机制才进入核心。 |
| 架构/代码/算法自修改 | 2024-2025 | ADAS、DGM、AlphaEvolve、OpenEvolve、SE-Agent 把 architecture、code、program 和算法候选放进搜索空间。 | [ADAS](research/papers/04-adas.md), [DGM](research/papers/02-darwin-godel-machine.md), [AlphaEvolve](research/papers/08-alphaevolve.md) | 代码和算法是最容易先落地的自进化场景，因为测试、sandbox、回归和 archive 可以提供强证据。 |
| Memory / skill / harness 基础设施化 | 2025-2026 | memory、skill、evaluation、harness 同时变热；当前 raw 分类里 memory 105、evaluation 96、evolution 82、skill 70。 | [GitHub analysis](analysis/github-project-data-analysis.md), [method taxonomy](survey/figures/method-taxonomy-mermaid.md) | 下一波价值在可安装 skill、可审计 memory、可信 harness 和报告规范，而不是更多 demo。 |

### 未来路线图

| 优先级 | 未来方向 | 成熟标志 | 当前证据 |
|---:|---|---|---|
| 1 | 标准化验证器库 | 代码、网页、业务流程、记忆、安全、成本都有可复跑 evaluator。 | [survey ch8](survey/ch8-future-cn.md#86-研究与实践路线图), [Benchmark 判断准则](#benchmark-判断准则) |
| 2 | 自进化报告规范 | 每次改进报告时间切片、验证/测试隔离、失败候选、成本、回滚、安全事件。 | [GitHub 证据层](#git--github-证据层), [必要验证](#必要验证) |
| 3 | 可审计记忆与 skill 资产 | 经验不只是自由文本，而是可版本化、可遗忘、可迁移、可安全扫描的资产。 | [Memory / lifelong learning](#方法分类总表), [Skills / reusable know-how](#项目分类总表) |
| 4 | Archive / lineage 基础设施 | 每个 prompt、skill、workflow、code diff 都有来源、评估、继承关系和回滚点。 | [DGM](research/papers/02-darwin-godel-machine.md), [OpenEvolve](projects/algorithmicsuperintelligence__openevolve.md) |
| 5 | 异质多 Agent 协同 | 生成者、验证者、红队、成本控制、审计者有独立工具和独立错误分布。 | [Multi-agent reflection / debate](#方法分类总表), [survey ch8](survey/ch8-future-cn.md#82-多-agent-协同进化从角色扮演到生态搜索) |
| 6 | 跨域迁移 benchmark | 改进不能只在一个 leaderboard 上成立，必须迁移到新任务、时间切片、环境和模型。 | [survey ch8](survey/ch8-future-cn.md#84-跨域迁移能力从-benchmark-specific-进化到通用适应) |

### 趋势追踪看板

| 追踪项 | 当前基线 | 更新方式 | 趋势怎么解读 |
|---|---:|---|---|
| GitHub 语料漏斗 | 530 raw captures / 530 classified / 119 model-card projects / 82 strict / 186 | `node scripts/analyze_github_project_data.mjs` | strict 与 broad 同涨说明核心和基础设施都在扩张；只涨 broad 可能是概念外延变松。 |
| 主题热度 | memory 105, evaluation 96, evolution 82, skill 70 | `research/repo-classification.json` + GitHub analysis | evaluation、memory、skill 同时上升，说明领域从“会不会进化”转向“怎么证明、怎么积累、怎么复用”。 |
| 时间切片 | 2026-05 raw classified repos 369，unknown 107 | `output/raw-github-timestamp-index.md` + classification time slice | 时间切片是采集/活动信号，不等于全部项目创建时间；unknown 要持续补时间戳。 |
| Benchmark 覆盖 | 125 benchmark-eval function-tagged repos | README benchmark 表 + `analysis/github-project-data-analysis.md` | benchmark 增加要看是否有隐藏测试、失败轨迹、成本和跨域迁移，不能只数 leaderboard。 |
| 论文前沿 | 108 detailed paper references，含 2026 补充前沿 | `research/agent-self-evolution-papers-detailed-ZH.md` | 新论文进入 README 前要抽取改进对象、feedback、update、benchmark、限制。 |
| 产品可用性 | 119 site-data projects / 271 public project reports | `projects/INDEX.md` + `site/public/reports/projects/INDEX.md` | 趋势判断要同时看能否运行、文档、真实 workflow、维护活跃度和用户价值，不只看 star。 |

每次追踪这个板块时，先新增 raw 证据，再更新 processed 分类和 README 判断，最后同步 `docs/indexes/` 与网站构建；如果 trend 判断改变，要写明证据变化，而不是只改结论。

## 先看：加工后的完整分类总览

这一段放在最前面，只放加工后的信息：分类、判断、价值排序、可复用结论。raw 链接和完整展开列表在后面作为证据与索取区。

### 0. 阅读优先级

| 优先级 | 先看什么 | 为什么有价值 |
|---:|---|---|
| 1 | 核心历史、未来与趋势追踪 | 先知道这条技术线从哪里来、下一步往哪里去、每次更新要盯哪些趋势。 |
| 2 | 自进化定义、方法族、benchmark 判断准则 | 再判断“什么算自进化、怎么证明、怎么防指标投机”。 |
| 3 | GitHub 语料漏斗、分类轴、严格/广义 evolution 子集 | 先看加工后的结构，不从 530 个 raw capture 里盲找。 |
| 4 | Public model-card 项目分组 | 119 个 site 项目和 271 个 public report 项目已经按角色、机制、证据和报告入口加工，可直接比较。 |
| 5 | 论文方法图谱 | 108 篇论文按 framework/method/RL/reflection/memory/alignment/benchmark/safety 等类别归纳，不是平铺引用。 |
| 6 | 完整列表索取区 | 需要复制、筛选、二次处理时再取完整项目、repo、paper、benchmark 列表。 |

### 1. 语料漏斗

| 层级 | 当前规模 | 加工后的意义 |
|---|---:|---|
| Raw GitHub captures | 530 | 原始发现层，只保留证据、时间戳和来源，不直接当结论。 |
| Classified repositories | 530 | 每个仓库已归入 category、theme、function tag、time slice。 |
| Public model-card projects | 119 | 进入项目页/报告体系，适合教学、对比和发布。 |
| Public project report files | 271 | 网站可发布结果层，包含历史/兼容报告与站点公开材料。 |
| Strict self-evolution repos | 82 | 核心子集：直接含自改进、进化、搜索、reflection、mutation 或 feedback loop。 |
| Broad evolution-related repos | 186 | 外围支撑层：memory、skill、evaluation、harness、coding-agent、prompt optimization。 |
| Detailed paper references | 108 | 论文方法证据层，按 14 个研究类别和 2026 补充前沿整理。 |
| Benchmark/evaluation related repos | 180 | 评估相关仓库集合，专门用于比较测什么、怎么测、是否可信。 |

### 2. GitHub 完整分类轴

| 分类轴 | 完整分布 | 怎么读 |
|---|---|---|
| Collection category | 框架/framework 149、评测/evaluation 106、教程/tutorial 98、工具/tool 96、应用/application 49、论文代码/paper-code 31、评测/benchmark 1 | 这是“仓库形态”：框架最多，但 skill/tool 增长已经是重要基础设施信号。 |
| Base theme | memory 105、evaluation 96、evolution 82、skill 70、framework 58、education-list 35、research-agent 32、prompt-optimization 26、coding-agent 17、workflow-automation 8、safety 1 | 这是“主题重心”：memory、evaluation、evolution、skill 是最密集的四个支点。 |
| Function tag | benchmark-eval 125、framework-runtime 124、resource-index 107、tool-module 95、application-demo 29、research-artifact 20、agent-evolution-infra 12、memory-substrate 11、skill-orchestration 4、research-agent-pipeline 2、memory-runtime 1 | 这是“功能角色”：benchmark/eval、runtime、resource index 和 tool module 构成主要公开证据面。 |
| Time slice | 2026-05 369、unknown 107、2024-Q2 7、2026-03 7、2026-04 7、2025-11 5、2024-Q3 4、2026-02 4、2025-05 3、early 3、其他 14 | 这是“时间信号”：近期新增集中在 skills、memory、harness、evaluation 和 self-modifying code。 |

### 3. Public model-card 项目分组

| 分组 | 项目数 | 代表仓库 | 加工判断 |
|---|---:|---|---|
| 进化式代码 / AlphaEvolve 类 | 3 | openevolve、science-codeevolve、SE-Agent | 最接近可执行 self-improvement：代码变体、评估器、选择、迭代。 |
| LLM 作为优化器 | 3 | OPRO、OpenELM、FunSearch | 把 LLM 当 search/optimization operator，适合 prompt、program、算法发现。 |
| Agent 架构自动搜索 | 1 | ADAS | 把 agent architecture 本身当搜索空间，是自进化系统设计的核心论文线。 |
| Agent 自进化系统 | 4 | AgentEvolver、AIWaves agents、SCOPE、agentos | 关注经验、上下文、评估和 agent 工作区如何持续更新。 |
| 反思 / 精炼经典范式 | 2 | Reflexion、Self-Refine | 最常被复用的轻量自改进模式，但容易过拟合当前反馈。 |
| 安全、评判与数据/模型自进化 | 2 | DARWIN、LLM-Self-Judge | 评判器、数据和安全策略也会演化，必须防 reward hacking。 |
| 声明式 Prompt 优化 | 1 | DSPy | 把 prompt/program 编译成可优化对象，工程价值高。 |
| 多 Agent 协作框架 | 5 | MetaGPT、CrewAI、AutoGen、CAMEL、AgentVerse | 不是天然自进化；只有加入评价、记忆和改进闭环才进入核心。 |
| 图式 Agent 编排 | 1 | LangGraph | 适合作为可审计 workflow graph 和状态机底座。 |
| AI 软件工程 | 5 | AutoGPT、SWE-Agent、OpenHands、Devika、OpenDevin | 最容易接入真实仓库、测试和回归验证。 |
| AutoML / ML 知识驱动 | 2 | automl-agent、CoML | 与经典自动化搜索/AutoML 有强连接。 |
| 反射式进化搜索 | 2 | ReEvo、LLaMEA | 把 reflection 和 evolutionary search 结合，适合算法/优化任务。 |
| 进化式 Prompt/上下文优化 | 1 | EvoPrompt | 成本低、可回滚，但最容易 benchmark-specific。 |
| 进化式多 Agent 系统 | 4 | EvoAgent、EvoAgentX、EverOS、A-Evolve | 多 agent、memory、workspace 和 benchmark 的交叉区。 |
| LLM 驱动进化计算 | 5 | OpenTreeSearch、LLM4EC、LLM4Opt、LLM_EA、tutorial_gp_llm | 连接 LLM agent 与进化计算、组合优化、遗传编程。 |
| 质量多样性优化 | 1 | pyribs | 提供 archive/diversity 思路，可避免只爬单一分数坡。 |
| 经典进化算法框架 | 3 | DEAP、pycma、Nevergrad | 作为非 LLM 进化/搜索基线，不该被新 agent 术语遮蔽。 |
| AutoML 框架 | 1 | auto-sklearn | 传统自动改进系统的参考系。 |
| 自进化 Agent 综述 | 2 | Self-Evolving-Agents、self-improvement-llm | 用来对照分类是否遗漏研究支线。 |
| LLM Agent 优化 | 1 | LLM-Agent-Optimization | 资源索引型材料，适合补充术语和链接。 |
| 代码模型与评测 | 4 | Awesome-Code-LLM、AgentBench、RL4CO、Awesome-FM4CO | 把代码、agent、组合优化 benchmark 放入同一证据层。 |
| 遗传编程 | 1 | pureples | 提供 GP + LLM 的老方法/新模型交叉样本。 |
| Harness / 技能 / 记忆进化 | 98 | OpenClaw/Hermes/Mem0/LangMem/Graphiti/Skills 系列 | 当前最大工程簇：长期价值在可安装技能、可审计记忆、可运行 harness。 |
| 个人 Agent 产品与真实评测 | 33 | OpenClaw、PinchBench、Claw-Eval、OSWorld、BrowserGym、STATE-Bench | 最能检验“用户愿不愿意用”和“benchmark 是否贴近真实任务”。 |
| Harness 进化与方法索引 | 12 | harness-evolver、OpenHarness、AutoResearchClaw、SkillRL、OpenSpace | 把工具权限、执行环境、评估器和技能学习联成系统工程。 |

### 4. 高价值方向排序

| Rank | 方向 | 为什么排在前面 | 主要风险 |
|---:|---|---|---|
| 1 | Evaluation / benchmark / harness control | 自进化必须有选择压力；没有可信 evaluator，就没有可信改进。 | Goodhart、隐藏测试泄漏、LLM judge 偏差。 |
| 2 | Code/self-modifying agents | 代码有测试、回归和 sandbox，最容易形成闭环证据。 | 候选代码副作用、评估器被改、只修 benchmark。 |
| 3 | Memory / state substrate | 长期 agent 的真正可变对象往往是记忆、经验和用户/项目状态。 | 记忆污染、过期信息、隐私和错误经验继承。 |
| 4 | Skills / reusable know-how | Skills 把经验变成可安装、可测试、可迁移资产。 | 只是 prompt 文件堆叠、缺少验证、安全注入。 |
| 5 | Prompt / program optimization | 黑盒模型下最快落地，成本低、可回滚。 | context rot、prompt overfit、反思错误累积。 |
| 6 | Multi-agent reflection / debate | 能制造异质假设和 review gate，适合研究/软件交付。 | 多 agent 共识幻觉、通信成本、责任不清。 |
| 7 | Open-ended evolution / architecture search | 长期上限高，可能发现非人工设计结构。 | 搜索空间大、评估昂贵、复现难。 |

## 最高价值内容

| 你要解决的问题 | README 直接给出的答案 | 证据来源 |
|---|---|---|
| 完整综述讲了什么 | 自进化 Agent 不是一次性问答能力，而是一个由模型、工具、记忆、环境、评估器和代码组成的系统，能在反馈中改变 prompt、memory、skill、workflow、agent code 或 model policy，并用独立评估证明变化有效。 | [survey/latex/main.pdf](survey/latex/main.pdf), [survey/latex/main.tex](survey/latex/main.tex) |
| 方法到底有哪些 | 六条主线：reward/RL/self-play 提供选择压力；prompt/search 改上下文和候选程序；memory 保留长期经验；architecture/code self-modification 改 agent 结构；multi-agent reflection/debate 用异质角色互相纠错；evaluation/safety/governance 把变化关进可验证边界。 | [survey/ch3-methods-cn.md](survey/ch3-methods-cn.md), [method taxonomy](survey/figures/method-taxonomy-mermaid.md) |
| Benchmark 怎么看 | 不能只看最终分数，要看验证器是否独立、任务是否隔离、是否有隐藏测试、是否跨域迁移、是否报告成本/失败率/回滚率，以及是否防 Goodhart。 | [survey/ch5-evaluation-cn.md](survey/ch5-evaluation-cn.md), [code benchmark note](projects/code-generation-evolution/05-benchmarks.md) |
| GitHub 语料是什么 | 当前是 530 个 raw GitHub captures、530 个分类仓库、119 个站点项目、82 个严格 self-evolution 仓库、186 个广义相关仓库；它们按 category、theme、function、time slice 进入统一语料。 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md), [repo classification](research/repo-classification.md) |
| 项目如何比较 | 每个项目按“它是什么、改进对象是什么、反馈是什么、能不能运行、有没有 benchmark、是否产品可用、限制是什么”来读，而不是只看 stars。 | [projects/INDEX.md](projects/INDEX.md), [public project reports](site/public/reports/projects/INDEX.md) |
| 论文如何使用 | 论文不是单独列表，而是方法证据：每篇要抽取改进对象、反馈信号、更新机制、benchmark、claim、限制和可复现性。 | [中文论文索引](research/agent-self-evolution-papers-detailed-ZH.md), [英文论文索引](research/agent-self-evolution-papers-detailed.md) |
| 社区/X/博客信号有什么用 | 社区信号用来发现真实痛点、工程争议、热度错觉和 adoption 迹象；它不能替代论文或代码，但能指出哪些 benchmark 与业务价值脱节。 | [中文社交索引](output/social-media-curated-ZH.md), [英文社交索引](output/social-media-curated.md) |
| 作者/来源网络怎么看 | 作者、实验室、博客和榜单来源用于判断传播路径、可信度、重复信号和社区影响，不直接等同技术成熟度。 | [author network](research/author-network.md), [blog/source profiles](research/blog-author-profiles-all.md) |
| 公开网站承担什么 | 网站服务 SEO、博客、项目页和图谱展示；README 承担完整认知入口，网站承担浏览和发布体验。 | [GitHub Pages](https://shiyao-huang.github.io/awesome-agent-evolution/) |
| 仓库怎么维护 | 新增内容先判断 raw/processed/work/results/ops 层级；长期产物必须进入索引；会影响论文或网站的改动要跑对应验证。 | [master index](docs/indexes/master-index.md), [project structure](docs/project-management/project-structure.md) |

## Survey 综述主内容

| 章节 | README 内嵌结论 | 证据文档 |
|---|---|---|
| 第1章 引言 | Agent Evolution 的定义是：系统有可变状态或结构，有反馈信号，有选择/更新机制，并且改进可审计。只做 ReAct、planner-executor 或手工 workflow 不算自演化；只有系统能在反馈中改变自己的 prompt、memory、tool policy、代码、评估器或协作结构，才进入本综述范围。 | [ch1](survey/ch1-intro-cn.md) |
| 第2章 理论基础 | 理论底座有四条线：进化计算提供生成-变异-选择-保留；Godel machine 提供自我指涉和自修改问题意识；元学习/自训练提供从历史任务学习如何学习；RL/在线学习/程序合成提供目标、策略、环境和更新算子的形式化。 | [ch2](survey/ch2-theory-cn.md) |
| 第3章 方法分类 | 方法按“主要选择压力”和“主要可变对象”分层：reward、self-play、prompt、architecture/code、memory、mixed loop。关键不是术语，而是问：改什么、反馈来自哪里、如何保留、如何证明有效。 | [ch3](survey/ch3-methods-cn.md) |
| 第4章 系统分析 | 代表系统可以按产品 runtime、研究原型、benchmark harness、memory substrate、skill system、agent architecture search 和 self-modifying coding agent 来读。真正有价值的系统会留下可复用资产，而不只是一次 demo。 | [ch4](survey/ch4-systems-cn.md) |
| 第5章 评估体系 | 评估既是论文证据，也是进化循环里的选择压力。SWE-Bench、HumanEval、OSWorld、BrowserGym、LongMemEval 等只覆盖不同切面；成熟评估必须同时看迭代增益、迁移、多样性、安全、成本和资产积累。 | [ch5](survey/ch5-evaluation-cn.md) |
| 第6章 工业实践 | 工业落地的关键不是“让 agent 自己乱改”，而是把变化限制在低风险层：prompt、playbook、memory、skill、test harness、tool config；所有候选变化先过 sandbox、CI、审计和回滚。 | [ch6](survey/ch6-industry-cn.md) |
| 第7章 用户痛点 | 社区痛点集中在可靠性、成本、可观测性、benchmark 与真实业务脱节、长期记忆污染、工具权限和治理。Mom Test 信号提醒：高分 benchmark 和高 star 不等于用户愿意采用。 | [ch7](survey/ch7-painpoints-cn.md) |
| 第8章 未来方向 | 未来优先级是验证器库、报告规范、可审计记忆、archive/lineage、异质多 agent 协同、跨域迁移 benchmark。成熟标志不是宣称“自主改进”，而是能回答为什么改、证据是什么、如何回滚、是否迁移。 | [ch8](survey/ch8-future-cn.md) |
| 图表/数据 | 当前图表显示：方法族里 reward/RL/self-play 占比高；跨源验证里 production gap、evaluation gap、memory drift、governance/cost 都是高风险错配；框架雷达只是导航，不是性能排名。 | [figures](survey/figures/README.md), [coverage](survey/figures/data-coverage-dashboard.md), [validation](survey/figures/cross-source-validation-map.md) |

## 读法总原则

| 问题 | 判断标准 |
|---|---|
| 它是不是自进化 | 必须有可变化对象、反馈信号、更新/选择机制、可审计结果；否则只是普通 agent engineering。 |
| 它是不是有用 | 看是否能运行、是否有真实任务、是否有文档、是否能复现、是否解决用户痛点，而不是只看 stars 或论文标题。 |
| 它是不是可信 | 看 validation/test 是否隔离、是否跨任务迁移、是否报告失败候选、是否有成本、是否防 evaluator 被篡改。 |
| 它是不是可发布 | raw、processed、work、results 分层清楚；README 能读懂；项目页能教学；论文/网站能构建。 |

## 方法分类总表

| 方法族 | 进化对象 | 选择压力 / 反馈 | 代表论文或系统 | 证据来源 |
|---|---|---|---|---|
| Reward / RL / self-play | 策略、推理轨迹、偏好、训练数据 | reward、胜负、正确性、judge、执行器 | STaR、Self-Rewarding LM、Meta-Rewarding、RISE、RAGEN、Absolute Zero、SPIRAL | [方法章 3.1-3.2](survey/ch3-methods-cn.md), [RAGEN](research/papers/10-ragen.md), [Absolute Zero](research/papers/07-absolute-zero.md) |
| Prompt / search optimization | prompt、上下文、原则、playbook、候选程序 | 自反馈、文本梯度、LLM 作为优化器、程序化 evaluator | Self-Refine、Reflexion、DSPy、OPRO、EvoPrompt、SCOPE、ACE | [Self-Refine](research/papers/06-self-refine.md), [Reflexion](research/papers/05-reflexion.md), [DSPy](site/public/reports/projects/10-dspy-declarative-llm-programming.md), [SCOPE](projects/jarvispei__scope.md) |
| Memory / lifelong learning | 情景记忆、语义记忆、技能库、用户/项目状态 | 检索成功率、长期任务表现、冲突处理、经验复用 | Voyager、ExpeL、ReasoningBank、Memory-R1、AriadneMem、Mem0、LangMem、Graphiti | [方法章 3.5](survey/ch3-methods-cn.md), [Mem0](projects/58-mem0-agent-memory.md), [LangMem](projects/70-langmem-agent-memory.md), [Graphiti](projects/71-graphiti-temporal-context-graphs.md) |
| Architecture / code self-modification | agent 架构、工具流、代码库、多 agent 拓扑 | benchmark、单测、隐藏测试、archive selection | ADAS、DGM、Godel Agent、SICA、AlphaEvolve、OpenEvolve、A-Evolve | [ADAS](research/papers/04-adas.md), [DGM](research/papers/02-darwin-godel-machine.md), [OpenEvolve](projects/algorithmicsuperintelligence__openevolve.md), [A-Evolve](projects/115-a-evolve-universal-agent-evolution.md) |
| Multi-agent reflection / debate | 角色、通信边、critic、审查流程、协作协议 | debate score、互评、任务成功、review gate | EvoMAC、Agent Symbolic Learning、MetaGPT、AutoGen、CORAL、MOLT | [Agent Symbolic Learning](research/papers/01-agent-symbolic-learning.md), [MetaGPT](projects/07-metagpt-multi-agent-framework.md), [AutoGen](site/public/reports/projects/11-autogen-multi-agent-conversation.md), [CORAL](projects/89-coral-multi-agent-evolution.md) |
| Evaluation / safety / governance | evaluator、权限、回滚、审计、红线、成本模型 | 回归测试、安全规则、人工审核、跨域迁移 | REVEAL、RAGEN、Claw-Eval、AgentBench、SKILL-INJECT、HaluMem | [评估章](survey/ch5-evaluation-cn.md), [REVEAL](research/papers/12-reveal.md), [Claw-Eval](projects/55-claw-eval-agent-evaluation.md), [HaluMem](projects/177-halumem-agent-memory-hallucination-benchmark.md) |

## 方法族展开

| 方法族 | 它怎么工作 | 什么时候优先用 | 主要失败模式 |
|---|---|---|---|
| Reward / RL / self-play | 把答案、轨迹、行为或偏好映射成 reward，再用 RL、DPO、筛选微调、archive selection 或 self-play 让高 reward 行为继承。STaR 用生成 rationale 和正确性筛选形成早期自举；RAGEN/RISE 把多轮思考和行动变成可训练轨迹；Absolute Zero/SPIRAL 把任务生成也放进系统内部。 | 数学、代码、逻辑、游戏、可程序化环境，尤其是有明确 correctness 或 reward 的任务。 | Reward hacking、judge 偏差放大、任务分布塌缩、只学会迎合 evaluator。必须用隐藏测试、跨域迁移和外部摩擦校准。 |
| Prompt / search optimization | 不改模型权重，改系统提示、few-shot、上下文 playbook、反思文本、候选程序或工具使用规则。Self-Refine 是单样本反馈修订；Reflexion 把失败反思写入 episodic memory；DSPy/OPRO/EvoPrompt/SCOPE 把 prompt/program 当搜索对象。 | API 黑盒模型、低风险快速迭代、需要人工可读和可回滚的场景。 | Context rot、错误反思被长期继承、prompt 过拟合当前 benchmark、上下文越来越长但不更有效。 |
| Memory / lifelong learning | 把轨迹、失败、用户偏好、项目约束、技能代码和世界状态压缩成可检索长期状态。核心不是“存更多”，而是写入前判断可靠性，检索时按任务/时间/置信度过滤，使用后记录是否真的帮助成功。 | 个人助理、企业流程、长期 coding agent、科研 agent、跨 session 项目维护。 | Memory poisoning、过期信息、隐私泄漏、检索相似但功能错误、错误经验被持续强化。 |
| Architecture / code self-modification | 把 agent 控制流、工具调用、planner/critic、代码库、workflow graph 或多 agent 拓扑当作可变对象。ADAS 让 meta agent 写新 agent；DGM/SICA 让 coding agent 改自身代码；AlphaEvolve/FunSearch 用程序化 evaluator 选择算法候选。 | 代码、算法发现、工具流程、可沙箱执行且可测试的系统。 | 搜索空间巨大、评估成本高、benchmark-specific hack、候选代码副作用、评估器被篡改。必须有 sandbox、lineage、回滚和不可修改 gate。 |
| Multi-agent reflection / debate | 通过异质角色制造多个假设、互相审查、互相挑战，或让生成者和验证者共进化。价值不在“角色名字多”，而在不同模型、不同工具、不同检索源和不同评价标准能带来独立错误分布。 | 复杂研究、软件交付、开放式规划、需要 critic/reviewer/red-team 的工作流。 | 共识幻觉、多个 agent 互相肯定错误、通信成本爆炸、责任边界不清。 |
| Evaluation / safety / governance | 把 evaluator、权限、审计、成本、回滚和安全规则当成自进化系统的一等组件。它不直接让 agent 更聪明，但决定什么变化可以继承，什么变化必须丢弃。 | 任何可能长期运行、改 memory、改 prompt、改工具、改代码或接触用户数据的系统。 | 只优化单一分数、忽略成本和安全、没有失败样本、没有人类治理阈值，最终把“自进化”变成指标投机。 |

## Benchmark / 评测对照

| Benchmark 类别 | 代表基准 / 项目 | 测什么 | 自进化里最该问的问题 | 证据来源 |
|---|---|---|---|---|
| 函数级代码 | HumanEval、MBPP、LeetcodeHardGym | 函数正确性、代码生成、自修正 | 分数提升是否来自真实策略，还是 prompt/retry 调参 | [Reflexion](projects/noahshinn__reflexion.md), [survey ch5](survey/ch5-evaluation-cn.md) |
| 仓库级软件工程 | SWE-Bench、SWE-Bench Verified、Polyglot、LiveCodeBench | 真实 issue、补丁、测试、跨语言 | agent 是否能改真实仓库，是否有隐藏测试和回归 | [DGM](research/papers/02-darwin-godel-machine.md), [A-Evolve](projects/115-a-evolve-universal-agent-evolution.md), [OpenHands Benchmarks](projects/114-openhands-benchmarks.md) |
| Agent 通用评测 | AgentBench、GAIA、AppWorld、ALFWorld、WebShop | 多步任务、工具调用、交互环境 | 是否测到了 agentic behavior，而不只是一次回答 | [AgentBench](site/public/reports/projects/38-agentbench.md), [survey ch5](survey/ch5-evaluation-cn.md) |
| Computer-use / Web | OSWorld、WindowsAgentArena、BrowserGym、WebArena、WebVoyager、Mind2Web-Live | GUI、浏览器、OS、网页任务 | agent 是否能跨网站/系统迁移，失败轨迹是否可复现 | [OSWorld](projects/73-osworld-computer-agent-benchmark.md), [WindowsAgentArena](projects/74-windows-agent-arena.md), [BrowserGym](projects/75-browsergym-web-agent-benchmark.md) |
| Memory / long-horizon | LongMemEval、LoCoMo、MSC、STATE-Bench、MemoryAgentBench、AMA-Bench | 长期记忆、状态更新、冲突与遗忘 | 记忆是否真帮助任务，还是污染上下文 | [STATE-Bench](projects/120-state-bench-agent-memory-evaluation.md), [MemoryAgentBench](projects/111-memoryagentbench-incremental-memory-eval.md), [AMA-Bench](projects/60-ama-bench-memory-evaluation.md) |
| Skill / capability reuse | SWE-Skills-Bench、SkillLearnBench、agent-skills-eval、SKILL-INJECT | skill 学习、skill 安全、skill 对性能的帮助 | skill 是可复用能力，还是只是 prompt 文件堆叠 | [SWE-Skills-Bench](projects/69-swe-skills-bench.md), [SkillLearnBench](projects/118-skilllearnbench-agent-skill-generation.md), [agent-skills-eval](projects/154-agent-skills-eval-benchmark.md), [SKILL-INJECT](projects/84-skill-inject-agent-skill-security.md) |
| Harness / evaluation trust | Claw Bench、OpenClaw ClawBench、Claw-Eval、HAL Harness | 真实任务、评测噪声、轨迹审计、Pass^k | evaluator 是否可信、不可篡改、可审计 | [Claw Bench](projects/53-claw-bench-agent-benchmark.md), [OpenClaw ClawBench](projects/54-openclaw-clawbench.md), [Claw-Eval](projects/55-claw-eval-agent-evaluation.md), [HAL Harness](projects/109-hal-harness-agent-leaderboard.md) |
| 算法/科学发现 | AlphaEvolve、FunSearch、CodeContests、EvoCodeBench | 程序搜索、算法发现、可执行 fitness | evaluator 是否完整表达目标，是否有 Goodhart 风险 | [AlphaEvolve](research/papers/08-alphaevolve.md), [FunSearch](projects/04-funsearch-mathematical-discoveries.md), [Code benchmark note](projects/code-generation-evolution/05-benchmarks.md) |

## Benchmark 判断准则

| 判断项 | README 直接结论 |
|---|---|
| 只报最终分数够不够 | 不够。自进化必须报告多轮曲线、失败候选比例、回滚、方差、成本和是否跨 seed 稳定。 |
| 单一 benchmark 提升可信吗 | 弱可信。可信提升要能跨任务、跨时间切片、跨环境或跨模型迁移；否则可能只是适配 benchmark workflow。 |
| LLM-as-a-judge 能不能做 evaluator | 能做搜索阶段 proxy，但不能单独做最终证据；要有校准集、多 judge、一致性检测、人类抽检或程序化验证。 |
| 代码 benchmark 为什么重要 | 单测、静态分析、sandbox 和回归测试给了强反馈，因此代码自进化最容易先落地；但测试覆盖不等于设计质量、安全和可维护性。 |
| Memory benchmark 该怎么读 | 不只看 QA 分数，要看写入、更新、删除、冲突处理、时间过期、隐私和长期任务中是否真减少失败。 |
| Skill benchmark 该怎么读 | 要做 skill/no-skill 对照、held-out 任务、token/cost 对比和安全注入测试；否则 skill 只是包装好的 prompt。 |
| Harness benchmark 该怎么读 | 重点是轨迹可审计、噪声可分解、Pass^k/多次运行稳定、评估器不可被 agent 修改。 |
| 业务价值怎么判断 | Benchmark gain 不等于用户价值；要看真实 workflow 节省时间、降低失败率、减少人工接管，并且成本可接受。 |

## 项目分类总表

| 分类 | 当前信号 | 代表证据 | README 直接比较法 |
|---|---:|---|---|
| Self-evolution loops | 82 strict / 186 broad repos | [OpenEvolve](projects/algorithmicsuperintelligence__openevolve.md), [AgentEvolver](projects/modelscope__agentevolver.md), [EvoAgentX](site/public/reports/projects/22-evoagentx-agent-evolution-framework.md), [A-Evolve](projects/115-a-evolve-universal-agent-evolution.md), [OpenSpace](projects/162-openspace-self-evolving-skills.md) | 看进化对象、evaluator、archive、回滚、成本、是否跨任务迁移 |
| Harness engineering | 143 framework repos | [Agentic Harness Engineering](site/public/reports/projects/43-agentic-harness-engineering.md), [OpenClaw](site/public/reports/projects/48-openclaw.md), [Aden Hive](projects/68-aden-hive.md), [OpenHarness](projects/146-openharness-agent-harness-ohmo.md), [CORAL](projects/89-coral-multi-agent-evolution.md) | 看工具、权限、状态、子 agent、评估器、审计链 |
| Memory substrate | 103 memory-theme repos | [Mem0](projects/58-mem0-agent-memory.md), [LangMem](projects/70-langmem-agent-memory.md), [Graphiti](projects/71-graphiti-temporal-context-graphs.md), [Memoria](projects/110-memoria-git-for-agent-memory.md), [Hindsight](projects/174-hindsight-agent-memory-that-learns.md) | 看写入/检索/合并/删除/冲突/版本化，而不是只看向量库 |
| Skills / reusable know-how | 63 skill-theme repos | [Anthropic Skills](projects/64-anthropic-skills.md), [OpenAI Skills](projects/121-openai-skills-codex-catalog.md), [AgentSkills](projects/157-agentskills-open-standard.md), [SkillRL](projects/148-skillrl-recursive-skill-rl.md), [Superpowers](site/public/reports/projects/49-superpowers.md) | 看格式、安装面、验证、安全、迁移和跨 agent 兼容 |
| Evaluation / benchmarks | 93 evaluation-theme repos | [AgentBench](site/public/reports/projects/38-agentbench.md), [OSWorld](projects/73-osworld-computer-agent-benchmark.md), [BrowserGym](projects/75-browsergym-web-agent-benchmark.md), [Claw-Eval](projects/55-claw-eval-agent-evaluation.md), [HaluMem](projects/177-halumem-agent-memory-hallucination-benchmark.md) | 看是否测真实任务、是否防 Goodhart、是否有隐藏测试和轨迹 |
| Agent frameworks | 143 framework repos | [AutoGPT](projects/08-autogpt-autonomous-agent.md), [MetaGPT](projects/07-metagpt-multi-agent-framework.md), [AutoGen](site/public/reports/projects/11-autogen-multi-agent-conversation.md), [LangGraph](projects/16-langgraph-agent-workflow.md), [OpenHands](projects/19-openhands-dev-agent.md) | 看是否只是 runtime，还是能形成评估驱动的改进闭环 |
| Prompt / program optimization | 26 prompt-optimization repos | [DSPy](site/public/reports/projects/10-dspy-declarative-llm-programming.md), [OPRO](projects/01-opro-llm-as-optimizer.md), [EvoPrompt](site/public/reports/projects/20-evoprompt-prompt-optimization.md), [SCOPE](projects/jarvispei__scope.md), [GEPA-related](research/repo-classification.md) | 看搜索空间、反馈源、可解释更新和过拟合控制 |
| Research agents | 31 research-agent repos | [AutoResearchClaw](projects/116-autoresearchclaw-self-evolving-research-agent.md), [ScienceClaw](projects/90-scienceclaw-research-agent.md), [AI Scientist note](research/papers/13-ai-scientist.md), [Thesis Skills](projects/184-thesis-skills-paper-workflow-skills.md) | 看是否产出可验证实验、引用、代码、负结果和复现材料 |
| Survey / resource indexes | 35 education-list repos | [Self-Evolving-Agents](site/public/reports/projects/32-self-evolving-agents.md), [LLM4EC](site/public/reports/projects/26-llm4ec-llm-evolutionary-computation.md), [LLM4Opt](site/public/reports/projects/27-llm4opt-llm-optimization.md), [Awesome-FM4CO](site/public/reports/projects/40-awesome-fm4co.md), [Awesome Harness Engineering](projects/57-awesome-harness-engineering.md) | 看分类是否帮助认知，还是只是链接列表 |

## 项目判断准则

| 项目形态 | README 内判断 | 典型证据 |
|---|---|---|
| 可用产品 / runtime | 有安装路径、文档、示例、真实用户工作流、持续维护、权限/成本/观测能力。 | OpenHands、OpenClaw、Aden Hive、OpenHarness、LangGraph、AutoGen |
| 研究原型 / paper-code | 重点是方法 claim、实验设置、benchmark 和可复现性；不要求产品完成度，但必须能说明改进机制。 | ADAS、DGM、RAGEN、SICA、AlphaEvolve、EvoAgentX |
| Benchmark / eval harness | 价值在任务质量、评分可靠性、隐藏测试、轨迹审计、噪声控制和与真实需求的相关性。 | AgentBench、OSWorld、BrowserGym、Claw-Eval、STATE-Bench、HaluMem |
| Memory substrate | 价值在长期状态的写入、检索、冲突、版本、隐私和过期机制，而不是“接了向量数据库”。 | Mem0、LangMem、Graphiti、Memoria、Hindsight、MemoryAgentBench |
| Skill system | 价值在可安装、可验证、可复用、可迁移、可审计、安全边界清楚。 | Anthropic Skills、OpenAI Skills、AgentSkills、SkillRL、Superpowers |
| Survey / resource index | 价值在分类、证据、比较和教学；如果只是链接堆叠，对本项目价值较低。 | Self-Evolving-Agents、LLM4EC、LLM4Opt、Awesome-FM4CO |

## 论文方法图谱

| Paper category | Count | 代表思想 | 证据来源 |
|---|---:|---|---|
| Frameworks | 12 | Darwin Godel Machine、Godel Agent、RAGEN、ADAS、AgentEvolver、symbolic agent learning | [paper list ZH](research/agent-self-evolution-papers-detailed-ZH.md), [deep notes](research/papers/) |
| Methods | 22 | RISE、Agent-R、SICA、EvolveR、ACE、self-developing agents、test-time self-improvement | [survey ch3](survey/ch3-methods-cn.md) |
| Self-play and RL | 10 | Self-play environments、RL-based self-improvement、agent training loops | [survey ch3](survey/ch3-methods-cn.md) |
| STaR and reasoning self-improvement | 6 | Self-generated rationales、reasoning bootstrapping、weak supervision loops | [paper list ZH](research/agent-self-evolution-papers-detailed-ZH.md) |
| Self-reflection and Reflexion | 6 | Verbal reinforcement、reflection memory、feedback-driven retry loops | [Reflexion note](research/papers/05-reflexion.md) |
| Code self-correction | 5 | Code repair、bug fixing、SWE-style evaluation and improvement | [survey ch5](survey/ch5-evaluation-cn.md) |
| Self-evolving curriculum | 5 | Automatic task generation、curriculum search、challenge generation | [paper review coverage](analysis/paper-review-coverage.md) |
| Experience learning | 4 | Trajectory、lesson、execution trace 的保存与复用 | [survey ch3](survey/ch3-methods-cn.md) |
| Memory and lifelong learning | 6 | Long-term state、consolidation、retrieval、adaptive behavior | [memory projects](#项目分类总表) |
| Self-rewarding and alignment | 5 | Model-as-judge、reward modeling、constitutional/process feedback | [survey ch3](survey/ch3-methods-cn.md) |
| Multi-agent debate and collaboration | 5 | Debate、coarse-to-fine refinement、collaborative reasoning | [Agent Symbolic Learning](research/papers/01-agent-symbolic-learning.md) |
| Evolutionary strategies | 4 | LLM as evolution strategy、program/prompt/policy search | [AlphaEvolve](research/papers/08-alphaevolve.md) |
| Open-ended evolution and classics | 5 | Voyager、generative agents、novelty search、foundation agents | [survey ch2](survey/ch2-theory-cn.md) |
| Weak-to-strong and theory | 5 | Sharpening、weak-to-strong generalization、approval and safety theory | [survey ch2](survey/ch2-theory-cn.md) |

## Git / GitHub 证据层

| 层级 | Count | 定义 | 证据来源 |
|---|---:|---|---|
| Raw GitHub captures | 530 | `raw-github/*.md` 原始抓取和 timestamp index | [raw timestamp index](output/raw-github-timestamp-index.md), [raw-github/](raw-github/) |
| Classified repositories | 530 | 带 category、theme、function、time slice 的分类行 | [repo classification](research/repo-classification.md), [classification JSON](research/repo-classification.json) |
| Site/paper model-card projects | 119 | 进入站点数据和项目报告的重点项目 | [site/src/data/projects.ts](site/src/data/projects.ts), [projects/INDEX.md](projects/INDEX.md) |
| Public project report files | 271 | 网站 public reports 层的项目报告文件 | [site/public/reports/projects/INDEX.md](site/public/reports/projects/INDEX.md) |
| Strict evolution-theme repos | 82 | `base_theme = evolution` 的严格主题仓库 | [GitHub analysis](analysis/github-project-data-analysis.md) |
| Broad evolution-related repos | 186 | 命中 evolution/self-improvement/reflection/search/improvement-loop 的广义集合 | [GitHub analysis](analysis/github-project-data-analysis.md) |

### Git category / theme 快照

| 维度 | 分类 |
|---|---|
| Raw collection categories | 框架/framework 149、评测/evaluation 106、教程/tutorial 98、工具/tool 96、应用/application 49、论文代码/paper-code 31、评测/benchmark 1 |
| Raw collection themes | memory 105、evaluation 96、evolution 82、skill 70、framework 58、education-list 35、research-agent 32、prompt-optimization 26、coding-agent 17、workflow-automation 8、safety 1 |
| Timeline 证据 | [Analyzed Project Release Timeline](analysis/github-project-data-analysis.md#analyzed-project-release-timeline) |

## 社区 / X / 博客信号

| 来源 | Count / signal | 主要用途 | 证据来源 |
|---|---:|---|---|
| X/Twitter | 13 curated signals | 论文发布、热度、风险批评、实验室信号 | [social index ZH](output/social-media-curated-ZH.md) |
| Reddit | 45 entries | 公众疑问、真实痛点、benchmark 怀疑 | [social index](output/social-media-curated.md), [Mom Test findings](raw-social/mom-test/mom-test-findings-reddit.md) |
| Hacker News | 31 entries | 工程社区对 DGM/Godel/agent framework 的反应 | [social index](output/social-media-curated.md) |
| Blog/tutorial | 71 entries | 实践路线、架构解释、工程经验 | [blog/source profiles](research/blog-author-profiles-all.md) |
| Ranking/evaluation platforms | 10 entries | 可见度、leaderboard、产品发现 | [rank platform research](wiki/research/rank-platforms-product-discovery-2026-05-20.md) |

## 跨源综合

| 主题 | Git evidence | Paper evidence | Community evidence | 读法 |
|---|---|---|---|---|
| Self-modifying coding agents | OpenEvolve、DGM repos、SICA-like coding agents | DGM、Godel Agent、AlphaEvolve、SICA | HN 对 recursive self-improvement / self-modifying tools 的讨论 | 看 archive、mutation、benchmark gate、rollback 和沙箱 |
| Agent architecture search | ADAS、AgentEvolver、EvoAgentX、A-Evolve | ADAS、Agent Symbolic Learning、RAGEN、SelfEvolve | X survey threads、AgentEvolver 讨论 | 问清楚进化对象是 prompt、tool graph、policy、workflow、role 还是 architecture |
| Memory as evolvable state | Mem0、LangMem、Graphiti、MemoryAgentBench | Experience learning、Memory-R1、AriadneMem、Voyager | 长期记忆博客、工程教程 | 查检索、合并、冲突、隐私、时间失效和 long-horizon eval |
| Skills as portable capabilities | Anthropic Skills、OpenAI Skills、AgentSkills、SkillRL | Voyager、skill learning、curriculum | skill folder / skill registry 社区教程 | 查 package format、validation、security、install target 和 reuse semantics |
| Evaluation and harness control | AgentBench、OSWorld、BrowserGym、Claw-Eval、OpenClaw | Reflexion、Self-Refine、RAGEN、REVEAL | benchmark hype / Goodhart 争议 | 把 evaluation 当成 self-evolution 的核心控制面 |
| Research automation | AutoResearchClaw、ScienceClaw、AI Scientist-style projects | AI Scientist、AlphaEvolve、scientific discovery | Karpathy autoresearch signal、research-agent blog | 查是否有可验证 artifact、citation、experiment 和 reproducible code |
| Safety and misevolution | SKILL-INJECT、HaluMem、safety-tagged harness reports | Weak-to-strong、reward hacking、self-rewarding | risk posts、public critique | 看 reward hacking、regression、tool misuse、memory poisoning 和无根据自信 |

## 用户核心问题直接答案

| 用户问题 | README 直接答案 | 证据链接 |
|---|---|---|
| 原始收集的 GitHub 项目有哪些 | 当前 raw 层是 530 个 `raw-github/*.md` capture，保留原始来源、时间戳和未加工文本；它回答“我们到底收集过什么”。 | [raw timestamp index](output/raw-github-timestamp-index.md), [GitHub analysis](analysis/github-project-data-analysis.md) |
| 进行分析的项目有哪些 | 530 个仓库已经进入分类分析；其中 119 个进入站点项目数据，271 个 public project report 文件承担可发布 model-card/项目页材料。 | [projects/INDEX.md](projects/INDEX.md), [public reports](site/public/reports/projects/INDEX.md), [site/src/data/projects.ts](site/src/data/projects.ts) |
| 进化相关的有哪些 | 严格 self-evolution 主题是 82 个，广义 evolution-related 是 186 个；严格集看是否有自改进闭环，广义集覆盖 memory、skill、reflection、search、harness、evaluation 等支撑层。 | [corpus funnel](analysis/github-project-data-analysis.md#corpus-funnel), [repo classification](research/repo-classification.md) |
| 按时间顺序发布的有哪些 | timeline 用 created/pushed/release 信号观察方向迁移：早期偏框架和工具，中期 benchmark/memory/harness 增多，近期 skill、self-modifying code、research agent 和 evaluation governance 更密集。 | [release timeline](analysis/github-project-data-analysis.md#analyzed-project-release-timeline) |
| 方法路线有哪些 | 六类主方法已经在 README 展开：reward/RL/self-play、prompt/search optimization、memory/lifelong learning、architecture/code self-modification、multi-agent reflection/debate、evaluation/safety/governance。 | [方法分类总表](#方法分类总表), [survey ch3](survey/ch3-methods-cn.md) |
| benchmark 在哪里 | README 已把函数级代码、仓库级软件工程、agent 通用、computer-use/web、memory、skill、harness、算法/科学发现放进同一张评测对照表，并给出判断准则。 | [Benchmark / 评测对照](#benchmark--评测对照), [survey ch5](survey/ch5-evaluation-cn.md) |
| 哪些内容可发布给读者 | 可发布层包括 GitHub Pages、项目页、research 页、graph 页、paper PDF、survey PDF、public reports 和站点静态构建；README 是认知入口，网站是发布入口。 | [public site](https://shiyao-huang.github.io/awesome-agent-evolution/), [paper PDF](paper-drafts/main.pdf), [survey PDF](survey/latex/main.pdf), [site reports](site/public/reports/) |

## 完整列表索取区

这些列表直接放在 README 里，目的是让读者不用跳转也能复制、搜索、对比。折叠只是为了可读性；内容本身就在本文件中。

<details>
<summary>完整 public model-card 项目列表（119）</summary>

| # | 项目 | 仓库 | 分类/角色 | Stars | 报告 |
|---:|---|---|---|---:|---|
| 1 | openevolve | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 进化式代码优化 | 6358 | [报告](site/public/reports/projects/algorithmicsuperintelligence__openevolve.md) |
| 2 | agents | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 数据驱动 Agent 进化 | 5928 | [报告](site/public/reports/projects/aiwaves_cn__agents.md) |
| 3 | reflexion | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 反思记忆 | 3158 | [报告](site/public/reports/projects/noahshinn__reflexion.md) |
| 4 | AgentEvolver | [modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver) | Agent 进化框架 | 1441 | [报告](site/public/reports/projects/modelscope__agentevolver.md) |
| 5 | self-refine | [madaan/self-refine](https://github.com/madaan/self-refine) | 反馈精炼 | 805 | [报告](site/public/reports/projects/madaan__self_refine.md) |
| 6 | SE-Agent | [JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent) | 代码智能体自进化 | 274 | [报告](site/public/reports/projects/jarvis_xs__se_agent.md) |
| 7 | science-codeevolve | [inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve) | 科学代码进化 | 97 | [报告](site/public/reports/projects/inter_co__science_codeevolve.md) |
| 8 | SCOPE | [JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE) | 上下文/Prompt 进化 | 77 | [报告](site/public/reports/projects/jarvispei__scope.md) |
| 9 | LLM-Self-Judge | [OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge) | 自评判训练 | 43 | [报告](site/public/reports/projects/oppo_mente_lab__llm_self_judge.md) |
| 10 | DARWIN | [ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN) | 安全策略进化 | 41 | [报告](site/public/reports/projects/zju_llm_safety__darwin.md) |
| 11 | OPRO | [google-deepmind/opro](https://github.com/google-deepmind/opro) | LLM 作为优化器 | 2500 | [报告](site/public/reports/projects/01-opro-llm-as-optimizer.md) |
| 12 | OpenELM | [carperai/openelm](https://github.com/carperai/openelm) | 进化式 Prompt 优化 | 1800 | [报告](site/public/reports/projects/02-openelm-evolution-large-models.md) |
| 13 | ADAS | [shengranhu/adas](https://github.com/ShengranHu/ADAS) | Agent 架构自动搜索 | 1200 | [报告](site/public/reports/projects/03-adas-automated-design-agentic-systems.md) |
| 14 | FunSearch | [google-deepmind/funsearch](https://github.com/google-deepmind/funsearch) | 进化式数学发现 | 1500 | [报告](site/public/reports/projects/04-funsearch-mathematical-discoveries.md) |
| 15 | AutoML-Agent | [DeepAuto-AI/automl-agent](https://github.com/DeepAuto-AI/automl-agent) | 多 Agent AutoML | 500 | [报告](site/public/reports/projects/05-automl-agent-multi-agent.md) |
| 16 | CoML | [microsoft/CoML](https://github.com/microsoft/CoML) | ML 知识库驱动 | 300 | [报告](site/public/reports/projects/06-coml-mlcopilot.md) |
| 17 | MetaGPT | [FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT) | 多 Agent 协作框架 | 50000 | [报告](site/public/reports/projects/07-metagpt-multi-agent-framework.md) |
| 18 | AutoGPT | [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 自主 Agent 平台 | 175000 | [报告](site/public/reports/projects/08-autogpt-autonomous-agent.md) |
| 19 | CrewAI | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 多 Agent 协作框架 | 30000 | [报告](site/public/reports/projects/09-crewai-multi-agent-framework.md) |
| 20 | DSPy | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 声明式 Prompt 优化 | 25000 | [报告](site/public/reports/projects/10-dspy-declarative-llm-programming.md) |
| 21 | AutoGen | [microsoft/autogen](https://github.com/microsoft/autogen) | 多 Agent 对话框架 | 50000 | [报告](site/public/reports/projects/11-autogen-multi-agent-conversation.md) |
| 22 | CAMEL-AI | [camel-ai/camel](https://github.com/camel-ai/camel) | 角色扮演 Agent 框架 | 12000 | [报告](site/public/reports/projects/12-camel-ai-communicative-agents.md) |
| 23 | LangGraph | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 图式 Agent 编排 | 20000 | [报告](site/public/reports/projects/13-langgraph-agent-workflows.md) |
| 24 | SWE-Agent | [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | 软件工程 Agent | 15000 | [报告](site/public/reports/projects/14-swe-agent-software-engineering.md) |
| 25 | OpenHands | [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) | AI 软件开发平台 | 55000 | [报告](site/public/reports/projects/15-openhands-ai-software-dev.md) |
| 26 | Devika | [stitionai/devika](https://github.com/stitionai/devika) | AI 软件工程师 | 22000 | [报告](site/public/reports/projects/16-devika-ai-software-engineer.md) |
| 27 | AgentVerse | [OpenBMB/AgentVerse](https://github.com/OpenBMB/AgentVerse) | 多 Agent 仿真平台 | 5000 | [报告](site/public/reports/projects/17-agentverse-multi-agent-platform.md) |
| 28 | ReEvo | [ai4co/reevo](https://github.com/ai4co/reevo) | 反射式进化搜索 | 500 | [报告](site/public/reports/projects/18-reevo-reflective-evolution.md) |
| 29 | LLaMEA | [xai-liacs/LLaMEA](https://github.com/XAI-liacs/LLaMEA) | LLM 驱动算法自动发现 | 1200 | [报告](site/public/reports/projects/19-llamea-llm-evolutionary-algorithm.md) |
| 30 | EvoPrompt | [beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt) | 进化式 Prompt 优化 | 300 | [报告](site/public/reports/projects/20-evoprompt-prompt-optimization.md) |
| 31 | EvoAgent | [siyuyuan/evoagent](https://github.com/siyuyuan/evoagent) | 进化式多 Agent 系统 | 200 | [报告](site/public/reports/projects/21-evoagent-evolutionary-multi-agent.md) |
| 32 | EvoAgentX | [EvoAgentX/EvoAgentX](https://github.com/EvoAgentX/EvoAgentX) | 自进化 Agent 生态系统 | 1000 | [报告](site/public/reports/projects/22-evoagentx-agent-evolution-framework.md) |
| 33 | EverOS | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 自进化 Agent 记忆系统 | 1000 | [报告](site/public/reports/projects/23-everos-self-evolving-agents.md) |
| 34 | OpenTreeSearch | [Genentech/OpenTreeSearch](https://github.com/Genentech/opentreesearch) | LLM 引导代码进化 | 200 | [报告](site/public/reports/projects/24-opentreesearch-llm-code-evolution.md) |
| 35 | pyribs | [icaros-usc/pyribs](https://github.com/icaros-usc/pyribs) | 质量多样性优化 | 800 | [报告](site/public/reports/projects/25-pyribs-quality-diversity.md) |
| 36 | LLM4EC | [wuxingyu-ai/LLM4EC](https://github.com/wuxingyu-ai/LLM4EC) | LLM+EC 交叉综述 | 200 | [报告](site/public/reports/projects/26-llm4ec-llm-evolutionary-computation.md) |
| 37 | LLM4Opt | [FeiLiu36/LLM4Opt](https://github.com/FeiLiu36/LLM4Opt) | LLM 驱动算法设计综述 | 400 | [报告](site/public/reports/projects/27-llm4opt-llm-optimization.md) |
| 38 | Nevergrad | [facebookresearch/nevergrad](https://github.com/facebookresearch/nevergrad) | 无梯度优化框架 | 4000 | [报告](site/public/reports/projects/28-nevergrad-derivative-free.md) |
| 39 | DEAP | [DEAP/deap](https://github.com/DEAP/deap) | 经典进化算法框架 | 6000 | [报告](site/public/reports/projects/29-deap-evolutionary-framework.md) |
| 40 | pycma | [CMA-ES/pycma](https://github.com/CMA-ES/pycma) | 经典进化策略 | 1000 | [报告](site/public/reports/projects/30-pycma-cma-es.md) |
| 41 | auto-sklearn | [automl/auto-sklearn](https://github.com/automl/auto-sklearn) | AutoML 框架 | 7500 | [报告](site/public/reports/projects/31-autosklearn-automl.md) |
| 42 | Self-Evolving-Agents | [CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents) | 自进化 Agent 综述 | 300 | [报告](site/public/reports/projects/32-self-evolving-agents-survey.md) |
| 43 | self-improvement-llm | [Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm) | LLM 自改进综述 | 200 | [报告](site/public/reports/projects/33-self-improvement-llm.md) |
| 44 | LLM-EA-Survey | [xiaofangxd/LLM_EA](https://github.com/xiaofangxd/LLM_EA) | LLM+EA 交叉综述 | 300 | [报告](site/public/reports/projects/34-llm-ea-survey.md) |
| 45 | Tutorial-GP-LLM | [alfa-group/tutorial_gp_llm](https://github.com/alfa-group/tutorial_gp_llm) | GP+LLM 教学 | 50 | [报告](site/public/reports/projects/35-tutorial-gp-llm.md) |
| 46 | LLM-Agent-Optimization | [YoungDubbyDu/LLM-Agent-Optimization](https://github.com/YoungDubbyDu/LLM-Agent-Optimization) | LLM Agent 优化综述 | 500 | [报告](site/public/reports/projects/36-llm-agent-optimization.md) |
| 47 | Awesome-Code-LLM | [CodeFuse-ML/awesome-code-llm](https://github.com/CodeFuse-ML/awesome-code-llm) | 代码 LLM 综述 | 2000 | [报告](site/public/reports/projects/37-awesome-code-llm.md) |
| 48 | AgentBench | [THUDM/AgentBench](https://github.com/THUDM/AgentBench) | Agent 评测基准 | 3000 | [报告](site/public/reports/projects/38-agentbench.md) |
| 49 | RL4CO | [ai4co/rl4co](https://github.com/ai4co/rl4co) | RL 组合优化基准 | 1200 | [报告](site/public/reports/projects/39-rl4co-reinforcement-learning.md) |
| 50 | Awesome-FM4CO | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 基础模型+组合优化综述 | 500 | [报告](site/public/reports/projects/40-awesome-fm4co.md) |
| 51 | OpenDevin | [OpenDevin/OpenDevin](https://github.com/OpenDevin/OpenDevin) | AI 软件开发平台 | 50000 | [报告](site/public/reports/projects/41-opendevin-ai-software.md) |
| 52 | GP-LLM-Code-Evolution | [pureples/pureples](https://github.com/pureples/pureples) | GP+LLM 代码进化 | 100 | [报告](site/public/reports/projects/42-gp-llm-code-evolution.md) |
| 53 | future-agi | [future-agi/future-agi](https://github.com/future-agi/future-agi) | 自改进 Agent | 5200 | [报告](site/public/reports/research/projects/43-future-agi-self-improving.md) |
| 54 | awesome-self-evolving-agents | [XMUDeepLIT/Awesome-Self-Evolving-Agents](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents) | 自进化 Agent 综述 | 3800 | [报告](site/public/reports/research/projects/44-xmu-self-evolving-agents.md) |
| 55 | ag2 | [ag2ai/ag2](https://github.com/ag2ai/ag2) | 多 Agent 协作框架 | 5200 | [报告](site/public/reports/research/projects/45-ag2-multi-agent.md) |
| 56 | chatdev | [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | 多 Agent 协作框架 | 26000 | [报告](site/public/reports/research/projects/46-chatdev-multi-agent-platform.md) |
| 57 | openagents | [xlang-ai/OpenAgents](https://github.com/xlang-ai/OpenAgents) | Agent 工具使用 | 4200 | [报告](site/public/reports/research/projects/47-openagents-platform.md) |
| 58 | superagi | [TransformerOptimus/SuperAGI](https://github.com/TransformerOptimus/SuperAGI) | 自主 Agent 框架 | 16000 | [报告](site/public/reports/research/projects/48-superagi-platform.md) |
| 59 | phidata | [phidatahq/phidata](https://github.com/phidatahq/phidata) | Agent 框架 | 18000 | [报告](site/public/reports/research/projects/49-phidata-framework.md) |
| 60 | smol-developer | [smol-ai/developer](https://github.com/smol-ai/developer) | AI 开发助手 | 14000 | [报告](site/public/reports/research/projects/50-smol-developer.md) |
| 61 | dify | [langgenius/dify](https://github.com/langgenius/dify) | LLM 应用平台 | 95000 | [报告](site/public/reports/research/projects/51-dify-ai-platform.md) |
| 62 | agentgpt | [reworkd/AgentGPT](https://github.com/reworkd/AgentGPT) | 自主 Agent 平台 | 33000 | [报告](site/public/reports/research/projects/52-agentgpt-autonomous.md) |
| 63 | agenta | [Agenta-AI/agenta](https://github.com/Agenta-AI/agenta) | LLM 评测平台 | 8000 | [报告](site/public/reports/research/projects/53-agenta-evaluation.md) |
| 64 | e2b | [e2b-dev/e2b](https://github.com/e2b-dev/e2b) | 代码执行沙箱 | 7000 | [报告](site/public/reports/research/projects/54-e2b-sandbox.md) |
| 65 | open-webui | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 自托管 AI 平台 | 124000 | [报告](site/public/reports/research/projects/55-open-webui.md) |
| 66 | Gemini CLI Auto Memory | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Agent CLI Auto-Memory and Skills | 105000 | [报告](site/public/reports/projects/214-gemini-cli-auto-memory-skills.md) |
| 67 | n8n | [n8n-io/n8n](https://github.com/n8n-io/n8n) | 工作流自动化 | 75000 | [报告](site/public/reports/research/projects/57-n8n-workflow-automation.md) |
| 68 | langflow | [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 可视化 Agent 平台 | 58000 | [报告](site/public/reports/research/projects/58-langflow-visual-agent.md) |
| 69 | awesome-agent-papers | [luo-junyu/Awesome-Agent-Papers](https://github.com/luo-junyu/Awesome-Agent-Papers) | Agent 研究综述 | 1200 | [报告](site/public/reports/research/projects/59-awesome-agent-papers.md) |
| 70 | swe-bench | [SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench) | Agent 评测基准 | 2800 | [报告](site/public/reports/research/projects/60-swe-bench-evaluation.md) |
| 71 | osworld | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | Agent 评测基准 | 2200 | [报告](site/public/reports/research/projects/61-osworld-agent-evaluation.md) |
| 72 | webarena | [web-arena-x/webarena](https://github.com/web-arena-x/webarena) | Agent 评测基准 | 2800 | [报告](site/public/reports/research/projects/62-webarena-web-evaluation.md) |
| 73 | litellm | [BerriAI/litellm](https://github.com/BerriAI/litellm) | LLM 基础设施 | 22000 | [报告](site/public/reports/research/projects/63-litellm-gateway.md) |
| 74 | ollama | [ollama/ollama](https://github.com/ollama/ollama) | LLM 基础设施 | 140000 | [报告](site/public/reports/research/projects/64-ollama-llm-runtime.md) |
| 75 | flowise | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 可视化 LLM 平台 | 36000 | [报告](site/public/reports/research/projects/65-flowise-visual-llm.md) |
| 76 | babyagi | [yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi) | 自主 Agent 框架 | 21000 | [报告](site/public/reports/research/projects/66-babyagi-task-agent.md) |
| 77 | cheshire-cat | [cheshire-cat-ai/core](https://github.com/cheshire-cat-ai/core) | AI 聊天框架 | 3200 | [报告](site/public/reports/research/projects/67-cheshire-cat-ai-framework.md) |
| 78 | smolagents | [huggingface/smolagents](https://github.com/huggingface/smolagents) | Agent 框架 | 15000 | [报告](site/public/reports/research/projects/68-smolagents-huggingface.md) |
| 79 | bisheng | [dataelement/bisheng](https://github.com/dataelement/bisheng) | LLM 应用平台 | 8000 | [报告](site/public/reports/research/projects/69-bisheng-llm-platform.md) |
| 80 | chainlit | [Chainlit/chainlit](https://github.com/Chainlit/chainlit) | LLM 聊天框架 | 10000 | [报告](site/public/reports/research/projects/70-chainlit-llm-chat.md) |
| 81 | wildclawbench | [InternLM/WildClawBench](https://github.com/InternLM/WildClawBench) | Agent 评测基准 | 500 | [报告](site/public/reports/projects/71-wildclawbench-agent-benchmark.md) |
| 82 | awesome-ai-agents-2026 | [Zijian-Ni/awesome-ai-agents-2026](https://github.com/Zijian-Ni/awesome-ai-agents-2026) | Agent 研究综述 | 800 | [报告](site/public/reports/research/projects/72-awesome-ai-agents-2026.md) |
| 83 | Awesome Agent Memory by cxxz | [cxxz/awesome-agent-memory](https://github.com/cxxz/awesome-agent-memory) | Agent Memory Resource Index | 10 | [报告](site/public/reports/projects/209-cxxz-awesome-agent-memory.md) |
| 84 | Memoir | [zhangfengcdt/memoir](https://github.com/zhangfengcdt/memoir) | Git-like Agent Auto-Memory | 549 | [报告](site/public/reports/projects/210-memoir-agent-auto-memory.md) |
| 85 | Awesome GraphMemory | [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | Graph-Based Agent Memory Index | 273 | [报告](site/public/reports/projects/211-awesome-graphmemory.md) |
| 86 | ATANT | [Kenotic-Labs/ATANT](https://github.com/Kenotic-Labs/ATANT) | Agent Continuity Evaluation | 3 | [报告](site/public/reports/projects/212-atant-agent-continuity-eval.md) |
| 87 | Gitagent | [open-gitagent/gitagent](https://github.com/open-gitagent/gitagent) | Git-Native Agent Framework | 404 | [报告](site/public/reports/projects/213-gitagent-git-native-agent-framework.md) |
| 88 | Skillgrade Agent Skill Evaluation | [mgechev/skillgrade](https://github.com/mgechev/skillgrade) | Agent Skill Evaluation Harness | 490 | [报告](site/public/reports/projects/215-skillgrade-agent-skill-evaluation.md) |
| 89 | Webmaxru Agent Skills | [webmaxru/Agent-Skills](https://github.com/webmaxru/Agent-Skills) | Reviewed Web API Agent Skills | 29 | [报告](site/public/reports/projects/216-webmaxru-agent-skills.md) |
| 90 | Waza | [microsoft/waza](https://github.com/microsoft/waza) | Waza Agent Skill Evaluation CLI | 904 | [报告](site/public/reports/projects/217-waza-agent-skill-evaluation-cli.md) |
| 91 | NEXO Brain | [wazionapps/nexo](https://github.com/wazionapps/nexo) | NEXO Agent Memory Runtime | 22 | [报告](site/public/reports/projects/218-nexo-agent-memory-runtime.md) |
| 92 | state-trace | [razroo/state-trace](https://github.com/razroo/state-trace) | state-trace Agent Memory Engine | 1 | [报告](site/public/reports/projects/219-state-trace-agent-memory-engine.md) |
| 93 | Agent Memory Techniques | [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | Agent Memory Technique Cookbook | 412 | [报告](site/public/reports/projects/220-agent-memory-techniques.md) |
| 94 | kbench | [shareAI-lab/kbench](https://github.com/shareAI-lab/kbench) | Agent Harness Benchmark CLI | 10 | [报告](site/public/reports/projects/221-kbench-agent-harness-benchmark-cli.md) |
| 95 | evmbench | [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) | Smart Contract Agent Benchmark Harness | 421 | [报告](site/public/reports/projects/222-evmbench-smart-contract-agent-harness.md) |
| 96 | Skills Best Practices | [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) | Agent Skill Authoring Methodology | 1900 | [报告](site/public/reports/projects/223-skills-best-practices-agent-skill-authoring.md) |
| 97 | SICA Self-Improving Coding Agent | [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) | Self-Improving Coding Agent | 324 | [报告](site/public/reports/projects/224-sica-self-improving-coding-agent.md) |
| 98 | Agent Zero | [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) | Autonomous Agent Runtime | 17600 | [报告](site/public/reports/projects/225-agent-zero-runtime.md) |
| 99 | elizaOS | [elizaOS/eliza](https://github.com/elizaOS/eliza) | Autonomous Agent Framework | 17300 | [报告](site/public/reports/projects/226-elizaos-autonomous-agent-framework.md) |
| 100 | Centaur | [paradigmxyz/centaur](https://github.com/paradigmxyz/centaur) | Secure Team Agent Runtime | 469 | [报告](site/public/reports/projects/227-centaur-secure-team-agent-runtime.md) |
| 101 | Yunjue Agent | [YunjueTech/Yunjue-Agent](https://github.com/YunjueTech/Yunjue-Agent) | In-Situ Self-Evolving Agent System | 426 | [报告](site/public/reports/projects/228-yunjue-agent-in-situ-self-evolving-agent.md) |
| 102 | self-evolving-agent | [RangeKing/self-evolving-agent](https://github.com/RangeKing/self-evolving-agent) | OpenClaw Self-Evolving Skill | 9 | [报告](site/public/reports/projects/229-rangeking-self-evolving-agent-skill.md) |
| 103 | NexAgent | [gofenix/nex-agent](https://github.com/gofenix/nex-agent) | Elixir/OTP Self-Evolving Agent Runtime | 64 | [报告](site/public/reports/projects/230-nex-agent-elixir-otp-self-evolving-agent.md) |
| 104 | hermes2anti | [swapedoc/hermes2anti](https://github.com/swapedoc/hermes2anti) | Memory and Skill Self-Improvement Toolkit | 4 | [报告](site/public/reports/projects/231-hermes2anti-self-improve-agent-memory-skills.md) |
| 105 | ADHDev | [vilmire/adhdev](https://github.com/vilmire/adhdev) | Coding-Agent Control Plane | 33 | [报告](site/public/reports/projects/232-adhdev-agent-dashboard-control-plane.md) |
| 106 | AI Research SKILLs | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | Agent Research Skill Library | 8900 | [报告](site/public/reports/projects/233-ai-research-skills-agent-research-workflow.md) |
| 107 | ai-skills | [iliaal/ai-skills](https://github.com/iliaal/ai-skills) | Agent Process Skill Library | 13 | [报告](site/public/reports/projects/234-ai-skills-agent-process-discipline.md) |
| 108 | Claude Trading Skills | [agiprolabs/claude-trading-skills](https://github.com/agiprolabs/claude-trading-skills) | Domain Agent Skill Workflow Pack | 31 | [报告](site/public/reports/projects/235-claude-trading-skills-domain-agent-workflows.md) |
| 109 | Spec Kit Agent Skills | [dceoy/speckit-agent-skills](https://github.com/dceoy/speckit-agent-skills) | Spec-Driven Agent Workflow Skills | 88 | [报告](site/public/reports/projects/236-speckit-agent-skills-spec-driven-workflow.md) |
| 110 | CUGA Agent | [cuga-project/cuga-agent](https://github.com/cuga-project/cuga-agent) | Enterprise Generalist Agent Harness | 742 | [报告](site/public/reports/projects/237-cuga-agent-enterprise-agent-harness.md) |
| 111 | AutoR | [AutoX-AI-Labs/AutoR](https://github.com/AutoX-AI-Labs/AutoR) | Human-Centered Research Harness | 897 | [报告](site/public/reports/projects/238-autor-human-centered-research-harness.md) |
| 112 | Chorus | [Chorus-AIDLC/Chorus](https://github.com/Chorus-AIDLC/Chorus) | AI-Human Collaboration Harness | 909 | [报告](site/public/reports/projects/239-chorus-ai-human-collaboration-harness.md) |
| 113 | KWeaver Core | [kweaver-ai/kweaver-core](https://github.com/kweaver-ai/kweaver-core) | Enterprise Decision Agent Harness | 803 | [报告](site/public/reports/projects/240-kweaver-core-enterprise-decision-agent-harness.md) |
| 114 | ClawProBench | [suyoumo/ClawProBench](https://github.com/suyoumo/ClawProBench) | Live OpenClaw Benchmark Harness | 690 | [报告](site/public/reports/projects/241-clawprobench-live-openclaw-benchmark.md) |
| 115 | sd0x-dev-flow | [sd0xdev/sd0x-dev-flow](https://github.com/sd0xdev/sd0x-dev-flow) | Claude Code Harness Safety Runtime | 157 | [报告](site/public/reports/projects/242-sd0x-dev-flow-claude-code-harness-safety-gates.md) |
| 116 | Utah | [inngest/utah](https://github.com/inngest/utah) | Event-Driven Agent Harness Runtime | 116 | [报告](site/public/reports/projects/243-utah-event-driven-agent-harness.md) |
| 117 | Meta Harness | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | Benchmark-Driven Harness Evolution Toolkit | 102 | [报告](site/public/reports/projects/244-metaharness-benchmark-driven-harness-evolution.md) |

</details>

<details>
<summary>完整 raw/classified GitHub 仓库列表（527）</summary>

| # | 仓库 | 分类 | 主题 | 功能标签 | Stars | 时间片 |
|---:|---|---|---|---|---:|---|
| 1 | [01-ai/langcrew](https://github.com/01-ai/langcrew) | 框架/framework | framework | framework-runtime | 114 | unknown |
| 2 | [0xsanei/darwinia](https://github.com/0xsanei/darwinia) | 框架/framework | evolution | benchmark-eval | 102 | 2026-05 |
| 3 | [28naem-del/mnemosyne](https://github.com/28naem-del/mnemosyne) | 框架/framework | memory | tool-module | 41 | unknown |
| 4 | [803/skills-supply](https://github.com/803/skills-supply) | 工具/tool | skill | tool-module | 32 | 2026-05 |
| 5 | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 论文代码/paper-code | evolution | agent-evolution-infra | 552 | 2026-05 |
| 6 | [aaronowh/ai-scientist-v2](https://github.com/aaronowh/ai-scientist-v2) | 应用/application | research-agent | application-demo | 0 | 2024-Q2 |
| 7 | [abhisakh/ai-scientist-v2](https://github.com/abhisakh/ai-scientist-v2) | 应用/application | research-agent | application-demo | 0 | 2024-Q2 |
| 8 | [adam-s/intercept](https://github.com/adam-s/intercept) | 应用/application | evaluation | framework-runtime | 127 | 2026-05 |
| 9 | [aden-hive/hive](https://github.com/aden-hive/hive) | 框架/framework | evolution | framework-runtime | 10400 | 2026-05 |
| 10 | [adiban17/ppo-ping-pong-agent-](https://github.com/adiban17/ppo-ping-pong-agent-) | 应用/application | evolution | application-demo | 0 | unknown |
| 11 | [adolfousier/opencrabs](https://github.com/adolfousier/opencrabs) | 应用/application | evolution | application-demo | 755 | 2026-05 |
| 12 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | 框架/framework | skill | framework-runtime | 191000 | 2026-05 |
| 13 | [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) | 工具/tool | skill | benchmark-eval | 47 | 2026-05 |
| 14 | [agent-on-the-fly/memento](https://github.com/agent-on-the-fly/memento) | 工具/tool | memory | tool-module | 2 | unknown |
| 15 | [agent-sh/agentsys](https://github.com/agent-sh/agentsys) | 框架/framework | framework | framework-runtime | 818 | 2026-05 |
| 16 | [agent-skills-hub/agent-skills-hub](https://github.com/agent-skills-hub/agent-skills-hub) | 教程/tutorial | skill | resource-index | 40 | 2026-05 |
| 17 | [agent0ai/agent-zero](https://github.com/agent0ai/agent-zero) | 框架/framework | framework | framework-runtime | 17600 | 2026-05 |
| 18 | [agentic-in/elephant-agent](https://github.com/agentic-in/elephant-agent) | 框架/framework | memory | tool-module | 361 | 2026-05 |
| 19 | [agentmemoryworld/awesome-agent-memory](https://github.com/agentmemoryworld/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 148 | unknown |
| 20 | [agentreplay/agentreplay](https://github.com/agentreplay/agentreplay) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-05 |
| 21 | [agentskills/agentskills](https://github.com/agentskills/agentskills) | 教程/tutorial | skill | resource-index | 19300 | 2026-05 |
| 22 | [agenttoolkit/altk-evolve](https://github.com/agenttoolkit/altk-evolve) | 框架/framework | evolution | tool-module | 85 | 2026-05 |
| 23 | [agi-edgerunners/llm-agents-papers](https://github.com/agi-edgerunners/llm-agents-papers) | 教程/tutorial | research-agent | resource-index | 2 | unknown |
| 24 | [agiprolabs/claude-trading-skills](https://github.com/agiprolabs/claude-trading-skills) | 工具/tool | skill | tool-module | 31 | 2026-05 |
| 25 | [ai-boost/awesome-ai-for-science](https://github.com/ai-boost/awesome-ai-for-science) | 教程/tutorial | education-list | resource-index | 1 | unknown |
| 26 | [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | 教程/tutorial | education-list | resource-index | 1100 | 2026-05 |
| 27 | [ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co) | 教程/tutorial | education-list | resource-index | 534 | unknown |
| 28 | [aimagelab/mammoth](https://github.com/aimagelab/mammoth) | 框架/framework | evaluation | framework-runtime | 812 | unknown |
| 29 | [aiming-lab/agent0](https://github.com/aiming-lab/agent0) | 论文代码/paper-code | evolution | application-demo | 1 | 2026-05 |
| 30 | [aiming-lab/atp](https://github.com/aiming-lab/atp) | 应用/application | safety | tool-module | 10 | unknown |
| 31 | [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 应用/application | evolution | research-agent-pipeline | 12600 | 2026-05 |
| 32 | [aiming-lab/SimpleMem](https://github.com/aiming-lab/SimpleMem) | 框架/framework | memory | framework-runtime | 3400 | 2026-05 |
| 33 | [aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL) | 论文代码/paper-code | evolution | agent-evolution-infra | 765 | 2026-05 |
| 34 | [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) | 评测/evaluation | skill | benchmark-eval | 73 | 2026-05 |
| 35 | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | 框架/framework | evolution | framework-runtime | 5 | 2024-Q2 |
| 36 | [akillness/oh-my-skills](https://github.com/akillness/oh-my-skills) | 教程/tutorial | skill | resource-index | 16 | 2026-05 |
| 37 | [alberto-codes/gepa-adk](https://github.com/alberto-codes/gepa-adk) | 工具/tool | prompt-optimization | tool-module | 1 | 2026-03 |
| 38 | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | 应用/application | evolution | application-demo | 6 | unknown |
| 39 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 教程/tutorial | skill | resource-index | 214 | 2026-05 |
| 40 | [allenai/swe-agent](https://github.com/allenai/swe-agent) | 论文代码/paper-code | coding-agent | research-artifact | 0 | unknown |
| 41 | [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) | 评测/evaluation | memory | benchmark-eval | 40 | 2026-05 |
| 42 | [AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) | 论文代码/paper-code | evolution | agent-evolution-infra | 1500 | 2026-05 |
| 43 | [angrysky56/reflective-agent-architecture](https://github.com/angrysky56/reflective-agent-architecture) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2025-12 |
| 44 | [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) | 框架/framework | framework | framework-runtime | 3 | 2026-05 |
| 45 | [anthropics/skills](https://github.com/anthropics/skills) | 教程/tutorial | skill | resource-index | 140000 | 2026-05 |
| 46 | [archishmansengupta/autovoiceevals](https://github.com/archishmansengupta/autovoiceevals) | 评测/evaluation | evaluation | benchmark-eval | 149 | 2026-05 |
| 47 | [argus-framework/argus-ai-debate](https://github.com/argus-framework/argus-ai-debate) | 框架/framework | framework | framework-runtime | 5 | unknown |
| 48 | [arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind) | 框架/framework | evaluation | framework-runtime | 1 | unknown |
| 49 | [arunagirinathan-k/awesome-ai-agents-2026](https://github.com/arunagirinathan-k/awesome-ai-agents-2026) | 教程/tutorial | education-list | resource-index | 69 | unknown |
| 50 | [arvid-pku/godel/agent](https://github.com/arvid-pku/godel/agent) | 框架/framework | evolution | framework-runtime | 182 | 2026-05 |
| 51 | [ashish-kamboj/agentic-ai-workflows](https://github.com/ashish-kamboj/agentic-ai-workflows) | 框架/framework | workflow-automation | framework-runtime | 0 | unknown |
| 52 | [asirwad/dspy-prompt-auto-optimizer](https://github.com/asirwad/dspy-prompt-auto-optimizer) | 框架/framework | prompt-optimization | framework-runtime | 1 | unknown |
| 53 | [autodrive-ecosystem/mrdt-marl](https://github.com/autodrive-ecosystem/mrdt-marl) | 框架/framework | framework | framework-runtime | 7 | unknown |
| 54 | [autohandai/code-cli](https://github.com/autohandai/code-cli) | 应用/application | evaluation | benchmark-eval | 110 | 2026-05 |
| 55 | [AutoX-AI-Labs/AutoR](https://github.com/AutoX-AI-Labs/AutoR) | 应用/application | research-agent | research-agent-pipeline | 897 | 2026-05 |
| 56 | [bansky-cl/graphrag-arxiv-daily-paper](https://github.com/bansky-cl/graphrag-arxiv-daily-paper) | 教程/tutorial | memory | resource-index | 22 | 2026-04 |
| 57 | [bazilicum/graphltm](https://github.com/bazilicum/graphltm) | 框架/framework | memory | framework-runtime | 4 | unknown |
| 58 | [beeevita/evoprompt](https://github.com/beeevita/evoprompt) | 评测/evaluation | prompt-optimization | benchmark-eval | 238 | unknown |
| 59 | [beita6969/scienceclaw](https://github.com/beita6969/ScienceClaw) | 应用/application | research-agent | application-demo | 816 | 2026-05 |
| 60 | [bennettschwartz/membrane](https://github.com/bennettschwartz/membrane) | 评测/evaluation | memory | benchmark-eval | 93 | unknown |
| 61 | [bingreeky/memgen](https://github.com/bingreeky/memgen) | 框架/framework | memory | tool-module | 378 | 2026-05 |
| 62 | [bobxwu/learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers) | 教程/tutorial | education-list | resource-index | 71 | unknown |
| 63 | [brain-research/guided-evolutionary-strategies](https://github.com/brain-research/guided-evolutionary-strategies) | 教程/tutorial | evolution | resource-index | 273 | unknown |
| 64 | [browser-use/browser-use](https://github.com/browser-use/browser-use) | 框架/framework | workflow-automation | framework-runtime | 94 | 2026-05 |
| 65 | [browser-use/web-ui](https://github.com/browser-use/web-ui) | 框架/framework | workflow-automation | framework-runtime | 16 | unknown |
| 66 | [bruno686/visplay](https://github.com/bruno686/visplay) | 评测/evaluation | evolution | benchmark-eval | 57 | unknown |
| 67 | [budecosystem/claudeevolve](https://github.com/budecosystem/claudeevolve) | 工具/tool | evolution | tool-module | 4 | unknown |
| 68 | [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) | 教程/tutorial | skill | resource-index | 1400 | 2026-05 |
| 69 | [camel-ai/owl](https://github.com/camel-ai/owl) | 框架/framework | framework | framework-runtime | 19 | unknown |
| 70 | [caution724/github-explorer-skill](https://github.com/caution724/github-explorer-skill) | 工具/tool | coding-agent | tool-module | 2 | unknown |
| 71 | [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) | 评测/evaluation | skill | benchmark-eval | 22 | 2026-05 |
| 72 | [cellium-project/cellium-agent](https://github.com/cellium-project/cellium-agent) | 框架/framework | memory | framework-runtime | 41 | unknown |
| 73 | [centaurioun/crewai](https://github.com/centaurioun/crewai) | 框架/framework | framework | framework-runtime | 0 | unknown |
| 74 | [channinglua/prax-agent](https://github.com/channinglua/prax-agent) | 框架/framework | evaluation | framework-runtime | 294 | 2026-05 |
| 75 | [charlesq9/self-evolving-agents](https://github.com/charlesq9/self-evolving-agents) | 应用/application | evolution | resource-index | 1 | 2026-05 |
| 76 | [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 框架/framework | evolution | framework-runtime | 391 | 2026-05 |
| 77 | [Chorus-AIDLC/Chorus](https://github.com/Chorus-AIDLC/Chorus) | 框架/framework | workflow-automation | framework-runtime | 909 | 2026-05 |
| 78 | [chriscox/agent-skills](https://github.com/chriscox/agent-skills) | 教程/tutorial | skill | resource-index | 10 | 2026-05 |
| 79 | [chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic) | 应用/application | prompt-optimization | framework-runtime | 1 | 2026-05 |
| 80 | [chuacheowhuan/gym-continuousdoubleauction](https://github.com/chuacheowhuan/gym-continuousdoubleauction) | 评测/evaluation | coding-agent | benchmark-eval | 153 | unknown |
| 81 | [circlemind-ai/fast-graphrag](https://github.com/circlemind-ai/fast-graphrag) | 评测/evaluation | memory | benchmark-eval | 3 | unknown |
| 82 | [claire-labo/evotune](https://github.com/claire-labo/evotune) | 工具/tool | coding-agent | tool-module | 137 | unknown |
| 83 | [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) | 评测/evaluation | evaluation | benchmark-eval | 171 | 2026-05 |
| 84 | [claw-eval/claw-eval](https://github.com/claw-eval/claw-eval) | 评测/evaluation | evaluation | benchmark-eval | 606 | 2026-03 |
| 85 | [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) | 工具/tool | skill | tool-module | 867 | 2026-05 |
| 86 | [clawdotnet/openclaw.net](https://github.com/clawdotnet/openclaw.net) | 框架/framework | framework | framework-runtime | 345 | 2026-05 |
| 87 | [clawland-ai/geneclaw](https://github.com/clawland-ai/geneclaw) | 框架/framework | evolution | framework-runtime | 36 | unknown |
| 88 | [clint-kristopher-morris/llm-guided-evolution](https://github.com/clint-kristopher-morris/llm-guided-evolution) | 教程/tutorial | evolution | resource-index | 19 | 2024-Q3 |
| 89 | [CodeAlive-AI/ai-driven-development](https://github.com/CodeAlive-AI/ai-driven-development) | 教程/tutorial | skill | resource-index | 74 | 2026-05 |
| 90 | [codejunkie99/agentic-stack](https://github.com/codejunkie99/agentic-stack) | 工具/tool | memory | tool-module | 2000 | 2026-05 |
| 91 | [codexstar69/bug-hunter](https://github.com/codexstar69/bug-hunter) | 框架/framework | evaluation | framework-runtime | 380 | 2026-03 |
| 92 | [colab2/midca](https://github.com/colab2/midca) | 工具/tool | coding-agent | tool-module | 27 | unknown |
| 93 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 教程/tutorial | skill | resource-index | 61500 | 2026-05 |
| 94 | [ComposioHQ/awesome-codex-skills](https://github.com/ComposioHQ/awesome-codex-skills) | 教程/tutorial | skill | resource-index | 11500 | 2026-05 |
| 95 | [crewaiinc/crewai](https://github.com/crewaiinc/crewai) | 框架/framework | framework | framework-runtime | 51 | unknown |
| 96 | [cuga-project/cuga-agent](https://github.com/cuga-project/cuga-agent) | 框架/framework | framework | framework-runtime | 742 | 2026-05 |
| 97 | [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) | 评测/evaluation | skill | benchmark-eval | 21 | 2026-05 |
| 98 | [cxxz/awesome-agent-memory](https://github.com/cxxz/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 10 | 2026-05 |
| 99 | [cyijun/agent-smith](https://github.com/cyijun/agent-smith) | 框架/framework | framework | framework-runtime | 18 | 2026-05 |
| 100 | [darkrishabh/agent-skills-eval](https://github.com/darkrishabh/agent-skills-eval) | 评测/benchmark | evaluation | benchmark-eval | 34 | 2026-05 |
| 101 | [davidzwz/awesome-rag-reasoning](https://github.com/davidzwz/awesome-rag-reasoning) | 教程/tutorial | memory | resource-index | 427 | 2025-07 |
| 102 | [dceoy/speckit-agent-skills](https://github.com/dceoy/speckit-agent-skills) | 工具/tool | skill | skill-orchestration | 88 | 2026-05 |
| 103 | [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | 教程/tutorial | memory | resource-index | 273 | 2026-05 |
| 104 | [deep-polyu/awesome-graphrag](https://github.com/deep-polyu/awesome-graphrag) | 教程/tutorial | memory | resource-index | 2 | 2026-04 |
| 105 | [deepelementlab/clawcode](https://github.com/deepelementlab/clawcode) | 框架/framework | coding-agent | framework-runtime | 199 | 2026-05 |
| 106 | [developzir/gepa-mcp](https://github.com/developzir/gepa-mcp) | 框架/framework | prompt-optimization | framework-runtime | 48 | unknown |
| 107 | [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | 工具/tool | skill | tool-module | 42 | 2026-05 |
| 108 | [dmgrok/agent_skills_directory](https://github.com/dmgrok/agent_skills_directory) | 教程/tutorial | skill | resource-index | 16 | 2026-05 |
| 109 | [dongxiangjue/awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement) | 工具/tool | evolution | resource-index | 106 | 2026-05 |
| 110 | [doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service) | 工具/tool | memory | tool-module | 1900 | 2026-05 |
| 111 | [DSAIL-Memory/EvoMemBench](https://github.com/DSAIL-Memory/EvoMemBench) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-05 |
| 112 | [dsifry/metaswarm](https://github.com/dsifry/metaswarm) | 框架/framework | framework | framework-runtime | 272 | 2026-05 |
| 113 | [ecnu-icalk/autoskill](https://github.com/ecnu-icalk/autoskill) | 工具/tool | evolution | tool-module | 424 | 2026-05 |
| 114 | [ecnu-icalk/ell-stulife](https://github.com/ecnu-icalk/ell-stulife) | 应用/application | memory | tool-module | 74 | 2026-05 |
| 115 | [egmaminta/gepa-lite](https://github.com/egmaminta/gepa-lite) | 工具/tool | prompt-optimization | tool-module | 55 | unknown |
| 116 | [eigent-ai/agent-skills](https://github.com/eigent-ai/agent-skills) | 工具/tool | skill | tool-module | 10 | 2026-05 |
| 117 | [elastic/agent-skills](https://github.com/elastic/agent-skills) | 工具/tool | skill | tool-module | 485 | 2026-05 |
| 118 | [eliasecchig/gemini-cli-git](https://github.com/eliasecchig/gemini-cli-git) | 框架/framework | memory | tool-module | 56 | 2026-05 |
| 119 | [elizaOS/eliza](https://github.com/elizaOS/eliza) | 框架/framework | framework | framework-runtime | 17300 | 2026-05 |
| 120 | [emartin59/text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver) | 框架/framework | framework | framework-runtime | 3 | unknown |
| 121 | [emson/elfmem](https://github.com/emson/elfmem) | 框架/framework | memory | benchmark-eval | 53 | 2026-05 |
| 122 | [enajx/es](https://github.com/enajx/es) | 评测/evaluation | evolution | benchmark-eval | 7 | unknown |
| 123 | [euphoria16/ui-genie](https://github.com/euphoria16/ui-genie) | 论文代码/paper-code | evolution | research-artifact | 57 | 2026-05 |
| 124 | [evalops/dspy-0to1-guide](https://github.com/evalops/dspy-0to1-guide) | 教程/tutorial | prompt-optimization | resource-index | 215 | unknown |
| 125 | [evalstate/fast-agent](https://github.com/evalstate/fast-agent) | 框架/framework | framework | framework-runtime | 3800 | 2026-05 |
| 126 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 框架/framework | memory | framework-runtime | 5600 | 2026-05 |
| 127 | [evermind-ai/everos?tab=readme-ov-file](https://github.com/evermind-ai/everos?tab=readme-ov-file) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2025-02 |
| 128 | [evoagentx/awesome-self-evolving-agents](https://github.com/evoagentx/awesome-self-evolving-agents) | 工具/tool | evolution | resource-index | 2 | 2026-05 |
| 129 | [evoagentx/evoagentx](https://github.com/evoagentx/evoagentx) | 框架/framework | evolution | application-demo | 3 | 2026-05 |
| 130 | [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) | 工具/tool | evolution | resource-index | 123 | 2026-05 |
| 131 | [evomap/evolver](https://github.com/evomap/evolver) | 框架/framework | evolution | tool-module | 7 | 2026-02 |
| 132 | [evotai/evot](https://github.com/evotai/evot) | 框架/framework | evolution | tool-module | 54 | 2026-05 |
| 133 | [exoskeletonzj/mars](https://github.com/exoskeletonzj/mars) | 框架/framework | prompt-optimization | tool-module | 18 | unknown |
| 134 | [facebookresearch/drzero](https://github.com/facebookresearch/drzero) | 应用/application | research-agent | research-artifact | 515 | 2026-05 |
| 135 | [facebookresearch/hyperagents](https://github.com/facebookresearch/hyperagents) | 应用/application | memory | research-artifact | 2 | 2026-05 |
| 136 | [fareedkhan-dev/autonomous-agentic-rag](https://github.com/fareedkhan-dev/autonomous-agentic-rag) | 应用/application | memory | tool-module | 139 | unknown |
| 137 | [farmage/opencode-skills](https://github.com/farmage/opencode-skills) | 工具/tool | skill | tool-module | 28 | 2026-05 |
| 138 | [faveos8758/reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts) | 评测/evaluation | evaluation | framework-runtime | 20 | unknown |
| 139 | [feesuu/cluerag](https://github.com/feesuu/cluerag) | 评测/evaluation | memory | benchmark-eval | 26 | unknown |
| 140 | [feiliu36/eoh](https://github.com/feiliu36/eoh) | 应用/application | evolution | application-demo | 319 | unknown |
| 141 | [feiliu36/llm4opt](https://github.com/feiliu36/llm4opt) | 应用/application | research-agent | application-demo | 367 | unknown |
| 142 | [flowersteam/teachmyagent](https://github.com/flowersteam/teachmyagent) | 框架/framework | evaluation | framework-runtime | 77 | unknown |
| 143 | [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 教程/tutorial | skill | resource-index | 2500 | 2026-05 |
| 144 | [fusionbrainlab/gigaevo-core](https://github.com/fusionbrainlab/gigaevo-core) | 工具/tool | evolution | tool-module | 116 | unknown |
| 145 | [galaxy-brain-ai/mcog-core](https://github.com/galaxy-brain-ai/mcog-core) | 应用/application | research-agent | application-demo | 19 | unknown |
| 146 | [galyarderlabs/galyarder-framework](https://github.com/galyarderlabs/galyarder-framework) | 框架/framework | skill | framework-runtime | 11 | 2026-05 |
| 147 | [garrus800-stack/genesis-agent](https://github.com/garrus800-stack/genesis-agent) | 评测/evaluation | evaluation | benchmark-eval | 24 | unknown |
| 148 | [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) | 评测/evaluation | evaluation | benchmark-eval | 42 | 2026-05 |
| 149 | [gensi-thuair/flex](https://github.com/gensi-thuair/flex) | 论文代码/paper-code | evaluation | benchmark-eval | 78 | 2026-05 |
| 150 | [Gentleman-Programming/Gentleman-Skills](https://github.com/Gentleman-Programming/Gentleman-Skills) | 教程/tutorial | skill | resource-index | 522 | 2026-05 |
| 151 | [george-salafatinos/tictactoe-self-play](https://github.com/george-salafatinos/tictactoe-self-play) | 工具/tool | coding-agent | tool-module | 0 | unknown |
| 152 | [gepa-ai/gepa](https://github.com/gepa-ai/gepa) | 工具/tool | prompt-optimization | tool-module | 4 | unknown |
| 153 | [gepa-ai/optimize-anything-artifact](https://github.com/gepa-ai/optimize-anything-artifact) | 评测/evaluation | prompt-optimization | benchmark-eval | 0 | unknown |
| 154 | [getzep/graphiti](https://github.com/getzep/graphiti) | 框架/framework | memory | memory-substrate | 26500 | 2026-05 |
| 155 | [ghy0501/awesome-continual-learning-in-generative-models](https://github.com/ghy0501/awesome-continual-learning-in-generative-models) | 教程/tutorial | education-list | resource-index | 151 | unknown |
| 156 | [Gitmaxd/deepagents-cli-codex-skill](https://github.com/Gitmaxd/deepagents-cli-codex-skill) | 教程/tutorial | skill | resource-index | 1 | 2026-05 |
| 157 | [gofenix/nex-agent](https://github.com/gofenix/nex-agent) | 应用/application | evolution | application-demo | 64 | 2026-05 |
| 158 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 工具/tool | memory | agent-evolution-infra | 105000 | 2026-05 |
| 159 | [graph-rag/graphrag](https://github.com/graph-rag/graphrag) | 工具/tool | memory | tool-module | 574 | unknown |
| 160 | [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) | 框架/framework | memory | benchmark-eval | 1 | 2026-04 |
| 161 | [guixiang123124/openclaw-harness](https://github.com/guixiang123124/openclaw-harness) | 框架/framework | skill | framework-runtime | 3 | 2026-05 |
| 162 | [gumbel-ai/agent-debate](https://github.com/gumbel-ai/agent-debate) | 框架/framework | framework | framework-runtime | 12 | 2026-03 |
| 163 | [gustolychees/contribai](https://github.com/gustolychees/contribai) | 评测/evaluation | evaluation | benchmark-eval | 0 | unknown |
| 164 | [hankbesser/recursive-agents](https://github.com/hankbesser/recursive-agents) | 框架/framework | evolution | framework-runtime | 39 | unknown |
| 165 | [hao-cyber/skill-evolution](https://github.com/hao-cyber/skill-evolution) | 框架/framework | evolution | framework-runtime | 145 | 2026-05 |
| 166 | [haotang1995/worldcoder](https://github.com/haotang1995/worldcoder) | 工具/tool | coding-agent | tool-module | 11 | unknown |
| 167 | [haoxufd/openrlhf](https://github.com/haoxufd/openrlhf) | 框架/framework | framework | framework-runtime | 0 | unknown |
| 168 | [harness/harness-skills](https://github.com/harness/harness-skills) | 教程/tutorial | skill | tool-module | 20 | 2026-05 |
| 169 | [hashgraph-online/registry-broker-skills](https://github.com/hashgraph-online/registry-broker-skills) | 工具/tool | skill | tool-module | 345 | 2026-05 |
| 170 | [hebbs-ai/hebbs-memory-engine](https://github.com/hebbs-ai/hebbs-memory-engine) | 框架/framework | memory | memory-substrate | 28 | 2026-05 |
| 171 | [hkuds/ai-researcher](https://github.com/hkuds/ai-researcher) | 评测/evaluation | research-agent | benchmark-eval | 5 | unknown |
| 172 | [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 框架/framework | framework | framework-runtime | 13000 | 2026-05 |
| 173 | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 框架/framework | evolution | framework-runtime | 6300 | 2026-05 |
| 174 | [hkust-knowcomp/awesome-llm-scientific-discovery](https://github.com/hkust-knowcomp/awesome-llm-scientific-discovery) | 教程/tutorial | research-agent | resource-index | 344 | unknown |
| 175 | [howells/arc](https://github.com/howells/arc) | 框架/framework | framework | framework-runtime | 22 | 2026-05 |
| 176 | [huggingface/agents-course](https://github.com/huggingface/agents-course) | 教程/tutorial | education-list | resource-index | 28 | unknown |
| 177 | [huggingface/skills](https://github.com/huggingface/skills) | 教程/tutorial | skill | resource-index | 10600 | 2026-05 |
| 178 | [huggingface/smolagents](https://github.com/huggingface/smolagents) | 评测/evaluation | evaluation | benchmark-eval | 27 | unknown |
| 179 | [human-agent-society/coral](https://github.com/Human-Agent-Society/CORAL) | 框架/framework | evolution | framework-runtime | 667 | 2026-05 |
| 180 | [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | 评测/evaluation | memory | benchmark-eval | 341 | 2026-05 |
| 181 | [huytieu/COG-second-brain](https://github.com/huytieu/COG-second-brain) | 应用/application | memory | application-demo | 486 | 2026-05 |
| 182 | [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) | 评测/evaluation | evaluation | benchmark-eval | 135 | 2026-05 |
| 183 | [ibm/awesome-agentic-workflow-optimization](https://github.com/ibm/awesome-agentic-workflow-optimization) | 工具/tool | evolution | resource-index | 51 | unknown |
| 184 | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | 框架/framework | evolution | framework-runtime | 145 | 2026-05 |
| 185 | [ilearn-lab/evoharness](https://github.com/ilearn-lab/evoharness) | 框架/framework | evaluation | benchmark-eval | 52 | 2026-05 |
| 186 | [iliaal/ai-skills](https://github.com/iliaal/ai-skills) | 工具/tool | skill | resource-index | 13 | 2026-05 |
| 187 | [ilsilfverskiold/awesome-llm-resources-list](https://github.com/ilsilfverskiold/awesome-llm-resources-list) | 教程/tutorial | education-list | resource-index | 523 | unknown |
| 188 | [imgeorgiev/pwm](https://github.com/imgeorgiev/pwm) | 评测/evaluation | evaluation | benchmark-eval | 68 | unknown |
| 189 | [immanuelxiv/ppo-self-play](https://github.com/immanuelxiv/ppo-self-play) | 应用/application | evolution | application-demo | 20 | unknown |
| 190 | [incidentfox/self-learning-ai-agent](https://github.com/incidentfox/self-learning-ai-agent) | 工具/tool | memory | tool-module | 1 | unknown |
| 191 | [inclusionai/agenticlearning](https://github.com/inclusionai/agenticlearning) | 工具/tool | memory | tool-module | 106 | 2024-Q4 |
| 192 | [inclusionai/aworld](https://github.com/inclusionai/aworld) | 评测/evaluation | evaluation | benchmark-eval | 1 | unknown |
| 193 | [inngest/utah](https://github.com/inngest/utah) | 框架/framework | workflow-automation | framework-runtime | 116 | 2026-05 |
| 194 | [internlm/polar](https://github.com/internlm/polar) | 评测/evaluation | evaluation | benchmark-eval | 163 | unknown |
| 195 | [internscience/internagent](https://github.com/internscience/internagent) | 框架/framework | research-agent | framework-runtime | 1 | unknown |
| 196 | [isenglab/awesomellm4apr](https://github.com/isenglab/awesomellm4apr) | 教程/tutorial | education-list | resource-index | 240 | unknown |
| 197 | [jakenuts/agent-skills](https://github.com/jakenuts/agent-skills) | 工具/tool | skill | tool-module | 0 | 2026-05 |
| 198 | [jarvis-xs/se-agent](https://github.com/jarvis-xs/se-agent) | 评测/evaluation | evaluation | framework-runtime | 274 | 2026-05 |
| 199 | [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) | 工具/tool | memory | tool-module | 5 | 2026-05 |
| 200 | [jbrahy/meta-agent-teams](https://github.com/jbrahy/meta-agent-teams) | 框架/framework | evolution | framework-runtime | 2 | 2026-05 |
| 201 | [jcartu/rasputin-memory](https://github.com/jcartu/rasputin-memory) | 工具/tool | memory | memory-substrate | 33 | 2026-05 |
| 202 | [jdrhyne/agent-skills](https://github.com/jdrhyne/agent-skills) | 教程/tutorial | skill | resource-index | 230 | 2026-05 |
| 203 | [jennyzzt/awesome-open-ended](https://github.com/jennyzzt/awesome-open-ended) | 教程/tutorial | education-list | resource-index | 438 | unknown |
| 204 | [jennyzzt/dgm](https://github.com/jennyzzt/dgm) | 应用/application | evaluation | benchmark-eval | 2 | 2026-05 |
| 205 | [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | 教程/tutorial | skill | resource-index | 339 | 2026-05 |
| 206 | [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) | 评测/evaluation | memory | benchmark-eval | 23 | 2026-05 |
| 207 | [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) | 工具/tool | skill | tool-module | 4 | 2026-05 |
| 208 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 教程/tutorial | skill | resource-index | 25500 | 2026-05 |
| 209 | [kadubon/audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist) | 评测/evaluation | research-agent | benchmark-eval | 0 | 2026-03 |
| 210 | [kargarisaac/reflexion](https://github.com/kargarisaac/reflexion) | 工具/tool | prompt-optimization | tool-module | 7 | unknown |
| 211 | [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) | 框架/framework | evolution | agent-evolution-infra | 2200 | 2026-05 |
| 212 | [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 应用/application | evolution | benchmark-eval | 194 | 2026-05 |
| 213 | [Kenotic-Labs/ATANT](https://github.com/Kenotic-Labs/ATANT) | 评测/evaluation | evaluation | benchmark-eval | 3 | 2026-05 |
| 214 | [keskival/recursive-self-improvement-suite](https://github.com/keskival/recursive-self-improvement-suite) | 应用/application | evolution | tool-module | 46 | unknown |
| 215 | [khykd/reflector](https://github.com/khykd/reflector) | 工具/tool | prompt-optimization | tool-module | 4 | unknown |
| 216 | [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 工具/tool | memory | benchmark-eval | 675 | 2026-05 |
| 217 | [kks0488/vibe-codex](https://github.com/kks0488/vibe-codex) | 工具/tool | skill | tool-module | 10 | 2026-05 |
| 218 | [knightnemo/awesome-world-models](https://github.com/knightnemo/awesome-world-models) | 教程/tutorial | education-list | resource-index | 2 | unknown |
| 219 | [knowledgexlab/muse](https://github.com/knowledgexlab/muse) | 应用/application | evaluation | benchmark-eval | 88 | 2026-05 |
| 220 | [kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai](https://github.com/kodigitaccount/2026-roadmap-for-advance-ml-ai-generative-ai-agentic-ai) | 教程/tutorial | education-list | resource-index | 1 | 2025-11 |
| 221 | [krzysztofdudek/researcherskill](https://github.com/krzysztofdudek/researcherskill) | 论文代码/paper-code | research-agent | research-artifact | 223 | 2026-05 |
| 222 | [kweaver-ai/kweaver-core](https://github.com/kweaver-ai/kweaver-core) | 框架/framework | framework | framework-runtime | 803 | 2026-05 |
| 223 | [labicon/curricullm](https://github.com/labicon/curricullm) | 评测/evaluation | evaluation | benchmark-eval | 27 | unknown |
| 224 | [lamm-mit/sciagentsdiscovery](https://github.com/lamm-mit/sciagentsdiscovery) | 应用/application | research-agent | application-demo | 610 | unknown |
| 225 | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 框架/framework | framework | framework-runtime | 137 | 2026-05 |
| 226 | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 框架/framework | framework | framework-runtime | 32 | 2026-05 |
| 227 | [langchain-ai/langmem](https://github.com/langchain-ai/langmem) | 框架/framework | memory | memory-substrate | 1500 | 2026-05 |
| 228 | [langchain-ai/langsmith-sdk](https://github.com/langchain-ai/langsmith-sdk) | 框架/framework | framework | framework-runtime | 894 | 2026-05 |
| 229 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | 评测/evaluation | coding-agent | benchmark-eval | 9 | unknown |
| 230 | [large-model-rl-lib/openrlhf](https://github.com/large-model-rl-lib/openrlhf) | 框架/framework | framework | framework-runtime | 0 | unknown |
| 231 | [lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent) | 框架/framework | memory | framework-runtime | 8 | unknown |
| 232 | [lean-dojo/leanagent](https://github.com/lean-dojo/leanagent) | 框架/framework | evaluation | framework-runtime | 68 | unknown |
| 233 | [legionio/lex-metacognition](https://github.com/legionio/lex-metacognition) | 工具/tool | memory | tool-module | 0 | unknown |
| 234 | [leofan90/awesome-world-models](https://github.com/leofan90/awesome-world-models) | 教程/tutorial | education-list | resource-index | 1 | unknown |
| 235 | [letta-ai/agentic-learning-sdk](https://github.com/letta-ai/agentic-learning-sdk) | 框架/framework | framework | framework-runtime | 45 | unknown |
| 236 | [letta-ai/letta](https://github.com/letta-ai/letta) | 框架/framework | memory | framework-runtime | 22 | 2026-05 |
| 237 | [lfleon9b/sakana-ai-scientist-v2](https://github.com/lfleon9b/sakana-ai-scientist-v2) | 应用/application | research-agent | application-demo | 1 | 2024-Q2 |
| 238 | [lightchen233/awesome-ai4research](https://github.com/lightchen233/awesome-ai4research) | 教程/tutorial | education-list | resource-index | 230 | 2026-05 |
| 239 | [linear95/spag](https://github.com/linear95/spag) | 评测/evaluation | evaluation | benchmark-eval | 144 | 2026-05 |
| 240 | [lingxi-agent/lingxi](https://github.com/lingxi-agent/lingxi) | 教程/tutorial | framework | resource-index | 243 | 2026-05 |
| 241 | [llmprogram/textgrad](https://github.com/llmprogram/textgrad) | 评测/evaluation | coding-agent | benchmark-eval | 0 | 2026-05 |
| 242 | [lmd0311/awesome-world-model](https://github.com/lmd0311/awesome-world-model) | 教程/tutorial | education-list | resource-index | 2 | 2026-05 |
| 243 | [logikon-ai/awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) | 教程/tutorial | prompt-optimization | resource-index | 126 | early |
| 244 | [longman-max/selfthinker](https://github.com/longman-max/selfthinker) | 工具/tool | coding-agent | tool-module | 0 | 2026-05 |
| 245 | [longyunfeigu/learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent) | 框架/framework | memory | resource-index | 113 | 2026-05 |
| 246 | [lsdefine/genericagent](https://github.com/lsdefine/genericagent) | 框架/framework | evolution | tool-module | 11 | 2026-05 |
| 247 | [ltzheng/curriculummarl](https://github.com/ltzheng/curriculummarl) | 论文代码/paper-code | research-agent | research-artifact | 13 | 2026-05 |
| 248 | [luh-ai-devnerds/llm-guided-curriculum-rl](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl) | 教程/tutorial | research-agent | resource-index | 1 | 2026-05 |
| 249 | [luo-junyu/awesome-agent-papers](https://github.com/luo-junyu/awesome-agent-papers) | 教程/tutorial | education-list | resource-index | 2 | 2026-05 |
| 250 | [lyl1015/jarvisevo](https://github.com/lyl1015/jarvisevo) | 评测/evaluation | evaluation | benchmark-eval | 401 | 2026-05 |
| 251 | [machuangtao/llm-kg4qa](https://github.com/machuangtao/llm-kg4qa) | 论文代码/paper-code | coding-agent | research-artifact | 157 | 2026-05 |
| 252 | [madaan/self-refine](https://github.com/madaan/self-refine) | 工具/tool | prompt-optimization | tool-module | 805 | 2026-05 |
| 253 | [maitrix-org/promptagent](https://github.com/maitrix-org/promptagent) | 论文代码/paper-code | prompt-optimization | research-artifact | 353 | 2024-Q2 |
| 254 | [managedcode/dotnet-skills](https://github.com/managedcode/dotnet-skills) | 工具/tool | skill | tool-module | 403 | 2026-05 |
| 255 | [matebenyovszky/healing-agent](https://github.com/matebenyovszky/healing-agent) | 评测/evaluation | evaluation | benchmark-eval | 23 | 2024-Q1 |
| 256 | [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | 工具/tool | memory | tool-module | 271 | 2026-05 |
| 257 | [MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent) | 论文代码/paper-code | evolution | research-artifact | 324 | 2026-05 |
| 258 | [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 评测/evaluation | evolution | research-artifact | 163 | 2026-05 |
| 259 | [mb-mal/awesome-ai-agents-frameworks](https://github.com/mb-mal/awesome-ai-agents-frameworks) | 教程/tutorial | framework | resource-index | 52 | unknown |
| 260 | [mbchang/meta-prompt](https://github.com/mbchang/meta-prompt) | 论文代码/paper-code | prompt-optimization | tool-module | 65 | 2026-05 |
| 261 | [mbzuai-oryx/awesome-llm-post-training](https://github.com/mbzuai-oryx/awesome-llm-post-training) | 教程/tutorial | education-list | resource-index | 2 | 2026-05 |
| 262 | [mdalamin5/end-to-end-agentic-ai-automation-lab](https://github.com/mdalamin5/end-to-end-agentic-ai-automation-lab) | 框架/framework | workflow-automation | framework-runtime | 72 | 2026-05 |
| 263 | [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | 论文代码/paper-code | evolution | research-artifact | 317 | 2026-05 |
| 264 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 工具/tool | memory | tool-module | 56500 | 2026-05 |
| 265 | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | 评测/evaluation | memory | benchmark-eval | 33 | 2026-05 |
| 266 | [Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills) | 框架/framework | evolution | agent-evolution-infra | 1400 | 2026-05 |
| 267 | [memodb-io/acontext](https://github.com/memodb-io/acontext) | 工具/tool | memory | tool-module | 3 | 2026-05 |
| 268 | [memodb-io/memobase](https://github.com/memodb-io/memobase) | 框架/framework | memory | memory-substrate | 2700 | 2026-05 |
| 269 | [MemoriLabs/Memori](https://github.com/memorilabs/memori) | 工具/tool | memory | tool-module | 14900 | 2026-05 |
| 270 | [memovai/memov](https://github.com/memovai/memov) | 框架/framework | memory | tool-module | 190 | 2026-05 |
| 271 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 工具/tool | memory | memory-substrate | 52800 | 2026-05 |
| 272 | [MemTensor/HaluMem](https://github.com/MemTensor/HaluMem) | 评测/evaluation | memory | benchmark-eval | 138 | 2025-11 |
| 273 | [memtensor/memos](https://github.com/memtensor/memos) | 工具/tool | memory | memory-runtime | 9400 | 2026-05 |
| 274 | [memtensor/memrl](https://github.com/memtensor/memrl) | 论文代码/paper-code | evolution | research-artifact | 117 | 2026-05 |
| 275 | [memvid/memvid](https://github.com/memvid/memvid) | 工具/tool | memory | memory-substrate | 12400 | 2026-05 |
| 276 | [metauto-ai/gptswarm](https://github.com/metauto-ai/gptswarm) | 应用/application | evolution | research-artifact | 998 | 2026-05 |
| 277 | [mettamazza/ernosagent](https://github.com/mettamazza/ernosagent) | 框架/framework | memory | tool-module | 10 | unknown |
| 278 | [mfolsom/rlvr-world](https://github.com/mfolsom/rlvr-world) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 279 | [mgechev/skillgrade](https://github.com/mgechev/skillgrade) | 评测/evaluation | evaluation | benchmark-eval | 490 | 2026-05 |
| 280 | [mgechev/skills-best-practices](https://github.com/mgechev/skills-best-practices) | 教程/tutorial | skill | resource-index | 1900 | 2026-05 |
| 281 | [microsoft/skills](https://github.com/microsoft/skills) | 教程/tutorial | skill | resource-index | 2400 | 2026-05 |
| 282 | [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) | 评测/evaluation | memory | benchmark-eval | 25 | 2026-05 |
| 283 | [microsoft/waza](https://github.com/microsoft/waza) | 评测/evaluation | skill | benchmark-eval | 904 | 2026-05 |
| 284 | [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) | 评测/evaluation | evaluation | benchmark-eval | 861 | 2026-05 |
| 285 | [MicrosoftDocs/Agent-Skills](https://github.com/MicrosoftDocs/Agent-Skills) | 教程/tutorial | skill | resource-index | 557 | 2026-05 |
| 286 | [mitchellgordon95/dspy](https://github.com/mitchellgordon95/dspy) | 框架/framework | prompt-optimization | framework-runtime | 0 | 2026-05 |
| 287 | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 框架/framework | memory | framework-runtime | 86 | 2026-05 |
| 288 | [modelscope/agentevolver](https://github.com/modelscope/agentevolver) | 应用/application | evolution | application-demo | 1 | 2026-05 |
| 289 | [modelscope/agentjet](https://github.com/modelscope/agentjet) | 评测/evaluation | evaluation | framework-runtime | 208 | 2026-05 |
| 290 | [MoizIbnYousaf/Ai-Agent-Skills](https://github.com/MoizIbnYousaf/Ai-Agent-Skills) | 工具/tool | skill | tool-module | 1100 | 2026-05 |
| 291 | [mwasifanwar/meta-cognitive-learning-system](https://github.com/mwasifanwar/meta-cognitive-learning-system) | 工具/tool | prompt-optimization | tool-module | 2 | 2026-05 |
| 292 | [mycelium-io/mycelium](https://github.com/mycelium-io/mycelium) | 工具/tool | memory | tool-module | 95 | 2026-05 |
| 293 | [n4m3z/forge-council](https://github.com/n4m3z/forge-council) | 框架/framework | evaluation | framework-runtime | 9 | 2026-05 |
| 294 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | 框架/framework | workflow-automation | framework-runtime | 189 | 2026-05 |
| 295 | [naivoder/mctsr](https://github.com/naivoder/mctsr) | 应用/application | prompt-optimization | tool-module | 22 | unknown |
| 296 | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | 框架/framework | memory | framework-runtime | 262 | 2026-05 |
| 297 | [neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness) | 框架/framework | evaluation | benchmark-eval | 507 | 2026-05 |
| 298 | [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) | 工具/tool | memory | tool-module | 13700 | 2026-05 |
| 299 | [ngoodman/metaprompt](https://github.com/ngoodman/metaprompt) | 评测/evaluation | prompt-optimization | benchmark-eval | 88 | 2026-05 |
| 300 | [nickatomlin/lm-selfplay](https://github.com/nickatomlin/lm-selfplay) | 论文代码/paper-code | prompt-optimization | research-artifact | 9 | 2026-05 |
| 301 | [nikivanstein/llamea](https://github.com/nikivanstein/llamea) | 评测/evaluation | evaluation | benchmark-eval | 105 | 2026-05 |
| 302 | [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | 教程/tutorial | memory | resource-index | 412 | 2026-05 |
| 303 | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 论文代码/paper-code | memory | benchmark-eval | 3 | 2026-05 |
| 304 | [noahshinn/reflexion-draft](https://github.com/noahshinn/reflexion-draft) | 框架/framework | memory | benchmark-eval | 388 | 2026-05 |
| 305 | [noahshinn024/reflexion-human-eval](https://github.com/noahshinn024/reflexion-human-eval) | 评测/evaluation | memory | benchmark-eval | 3 | 2026-05 |
| 306 | [nousresearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 框架/framework | framework | framework-runtime | 0 | 2026-05 |
| 307 | [nousresearch/hermes-agent-self-evolution](https://github.com/nousresearch/hermes-agent-self-evolution) | 应用/application | evolution | research-artifact | 3 | 2026-05 |
| 308 | [obra/superpowers](https://github.com/obra/superpowers) | 工具/tool | memory | tool-module | 202000 | 2026-05 |
| 309 | [octobrist/cope](https://github.com/octobrist/cope) | 论文代码/paper-code | evolution | framework-runtime | 11 | unknown |
| 310 | [oiioai/molt](https://github.com/OiiOAI/MOLT) | 框架/framework | evolution | framework-runtime | 0 | 2026-05 |
| 311 | [omdivyatej/self-learning-agents](https://github.com/omdivyatej/self-learning-agents) | 框架/framework | framework | framework-runtime | 63 | 2025-05 |
| 312 | [onevcat/argue](https://github.com/onevcat/argue) | 框架/framework | framework | framework-runtime | 238 | 2026-05 |
| 313 | [OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills) | 教程/tutorial | skill | resource-index | 154 | 2026-05 |
| 314 | [open-gitagent/gitagent](https://github.com/open-gitagent/gitagent) | 框架/framework | framework | framework-runtime | 404 | 2026-05 |
| 315 | [openai/skills](https://github.com/openai/skills) | 教程/tutorial | skill | resource-index | 20100 | 2026-05 |
| 316 | [openautocoder/live-swe-agent](https://github.com/openautocoder/live-swe-agent) | 框架/framework | coding-agent | framework-runtime | 392 | 2025-11 |
| 317 | [OpenBMB/EdgeClaw](https://github.com/OpenBMB/EdgeClaw) | 框架/framework | framework | framework-runtime | 1200 | 2026-05 |
| 318 | [openclaw/clawbench](https://github.com/openclaw/clawbench) | 评测/evaluation | evaluation | benchmark-eval | 97 | 2026-04 |
| 319 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 框架/framework | framework | framework-runtime | 374000 | 2026-05 |
| 320 | [opendatabox/workspace-bench](https://github.com/opendatabox/workspace-bench) | 评测/evaluation | evaluation | benchmark-eval | 14 | 2025-05 |
| 321 | [opendilab/awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl) | 教程/tutorial | education-list | resource-index | 689 | 2026-05 |
| 322 | [opendilab/awesome-model-based-rl](https://github.com/opendilab/awesome-model-based-rl) | 教程/tutorial | education-list | resource-index | 1 | 2026-05 |
| 323 | [opendilab/awesome-rlhf](https://github.com/opendilab/awesome-rlhf) | 教程/tutorial | education-list | resource-index | 4 | 2026-05 |
| 324 | [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | 评测/evaluation | evaluation | benchmark-eval | 85 | 2026-05 |
| 325 | [openmemind/memind](https://github.com/openmemind/memind) | 框架/framework | memory | benchmark-eval | 787 | 2026-05 |
| 326 | [openning07/awesome-curriculum-learning](https://github.com/openning07/awesome-curriculum-learning) | 教程/tutorial | education-list | resource-index | 248 | 2026-05 |
| 327 | [opensite-ai/opensite-skills](https://github.com/opensite-ai/opensite-skills) | 工具/tool | memory | tool-module | 7 | 2026-05 |
| 328 | [opentracy/opentracy](https://github.com/opentracy/opentracy) | 评测/evaluation | evaluation | benchmark-eval | 101 | 2026-05 |
| 329 | [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 教程/tutorial | skill | resource-index | 8900 | 2026-05 |
| 330 | [os-copilot/os-copilot](https://github.com/os-copilot/os-copilot) | 框架/framework | evaluation | benchmark-eval | 1 | 2024-Q1 |
| 331 | [osu-nlp-group/skillweaver](https://github.com/osu-nlp-group/skillweaver) | 框架/framework | evolution | framework-runtime | 123 | 2024-Q3 |
| 332 | [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 工具/tool | skill | tool-module | 22000 | 2026-05 |
| 333 | [oxen-ai/self-rewarding-language-models](https://github.com/oxen-ai/self-rewarding-language-models) | 评测/evaluation | prompt-optimization | benchmark-eval | 134 | 2026-05 |
| 334 | [paperwave/genenv](https://github.com/paperwave/genenv) | 论文代码/paper-code | research-agent | research-artifact | 0 | 2026-05 |
| 335 | [paradigmxyz/centaur](https://github.com/paradigmxyz/centaur) | 框架/framework | framework | framework-runtime | 469 | 2026-05 |
| 336 | [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) | 评测/evaluation | evaluation | benchmark-eval | 421 | 2026-05 |
| 337 | [pathway/alphaxos](https://github.com/pathway/alphaxos) | 评测/evaluation | evaluation | benchmark-eval | 12 | 2026-05 |
| 338 | [PaulRBerg/agent-skills](https://github.com/PaulRBerg/agent-skills) | 工具/tool | skill | tool-module | 59 | 2026-05 |
| 339 | [pgg3/evotoolkit](https://github.com/pgg3/evotoolkit) | 评测/evaluation | evaluation | benchmark-eval | 68 | 2026-03 |
| 340 | [pgg3/l-autoda](https://github.com/pgg3/l-autoda) | 应用/application | evolution | application-demo | 3 | 2026-05 |
| 341 | [pinchbench/skill](https://github.com/pinchbench/skill) | 评测/evaluation | evaluation | benchmark-eval | 1200 | 2026-05 |
| 342 | [pingcap/ossinsight](https://github.com/pingcap/ossinsight) | 工具/tool | research-agent | tool-module | 2 | 2026-05 |
| 343 | [pingcy/ace-langgraph](https://github.com/pingcy/ace-langgraph) | 框架/framework | framework | framework-runtime | 46 | unknown |
| 344 | [pjt222/agent-almanac](https://github.com/pjt222/agent-almanac) | 教程/tutorial | skill | resource-index | 17 | 2026-05 |
| 345 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | 框架/framework | memory | framework-runtime | 4200 | 2026-05 |
| 346 | [polarseeker/openseeker](https://github.com/polarseeker/openseeker) | 评测/evaluation | evaluation | benchmark-eval | 711 | 2026-05 |
| 347 | [polya20/textgrad](https://github.com/polya20/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 348 | [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | 评测/evaluation | evaluation | benchmark-eval | 289 | 2026-05 |
| 349 | [privkeyio/evolve-mcp](https://github.com/privkeyio/evolve-mcp) | 框架/framework | evolution | framework-runtime | 11 | unknown |
| 350 | [psenger/ai-agent-skills](https://github.com/psenger/ai-agent-skills) | 教程/tutorial | skill | resource-index | 3 | 2026-05 |
| 351 | [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 教程/tutorial | education-list | resource-index | 87 | 2026-05 |
| 352 | [qianlima-lab/awesome-lifelong-llm-agent](https://github.com/qianlima-lab/awesome-lifelong-llm-agent) | 教程/tutorial | education-list | resource-index | 300 | 2026-05 |
| 353 | [QuantaAlpha/QuantaAlpha](https://github.com/QuantaAlpha/QuantaAlpha) | 论文代码/paper-code | evolution | agent-evolution-infra | 702 | 2026-05 |
| 354 | [quantstellarlab/ai-scientist-v2](https://github.com/quantstellarlab/ai-scientist-v2) | 应用/application | research-agent | application-demo | 0 | 2024-Q2 |
| 355 | [quzhiii/thesis-skills](https://github.com/quzhiii/thesis-skills) | 工具/tool | skill | tool-module | 71 | 2026-05 |
| 356 | [r4stin/kg-research-agent](https://github.com/r4stin/kg-research-agent) | 教程/tutorial | research-agent | resource-index | 3 | 2026-05 |
| 357 | [raghavc/llm-rlhf-tuning-with-ppo-and-dpo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo) | 论文代码/paper-code | memory | research-artifact | 190 | 2026-05 |
| 358 | [Randroids-Dojo/skills](https://github.com/Randroids-Dojo/skills) | 教程/tutorial | skill | resource-index | 33 | 2026-05 |
| 359 | [RangeKing/self-evolving-agent](https://github.com/RangeKing/self-evolving-agent) | 工具/tool | skill | tool-module | 9 | 2026-05 |
| 360 | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) | 工具/tool | evolution | tool-module | 21 | 2026-05 |
| 361 | [razroo/state-trace](https://github.com/razroo/state-trace) | 工具/tool | memory | tool-module | 1 | 2026-05 |
| 362 | [reflexioai/reflexio](https://github.com/reflexioai/reflexio) | 框架/framework | evaluation | benchmark-eval | 220 | 2026-05 |
| 363 | [regenrek/codex-1up](https://github.com/regenrek/codex-1up) | 工具/tool | skill | tool-module | 430 | 2026-05 |
| 364 | [rendro/sediment](https://github.com/rendro/sediment) | 工具/tool | memory | tool-module | 32 | 2026-05 |
| 365 | [researai/awesome-ai-scientist](https://github.com/researai/awesome-ai-scientist) | 教程/tutorial | research-agent | resource-index | 240 | 2026-05 |
| 366 | [revfactory/harness](https://github.com/revfactory/harness) | 框架/framework | skill | framework-runtime | 3500 | 2026-05 |
| 367 | [richchen-maker/openclaw-multi-agent-team](https://github.com/richchen-maker/openclaw-multi-agent-team) | 框架/framework | framework | framework-runtime | 80 | 2026-05 |
| 368 | [rinadelph/agent-mcp](https://github.com/rinadelph/agent-mcp) | 框架/framework | framework | framework-runtime | 1 | 2026-05 |
| 369 | [rishab-agrawal/humanoid-curriculum-rl](https://github.com/rishab-agrawal/humanoid-curriculum-rl) | 工具/tool | coding-agent | tool-module | 1 | 2026-05 |
| 370 | [rlhflow/online-rlhf](https://github.com/rlhflow/online-rlhf) | 评测/evaluation | evaluation | benchmark-eval | 545 | 2026-05 |
| 371 | [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) | 评测/evaluation | evaluation | benchmark-eval | 232 | 2026-05 |
| 372 | [rllm-org/rllm](https://github.com/rllm-org/rllm) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2026-05 |
| 373 | [rmanluo/gfm-rag](https://github.com/rmanluo/gfm-rag) | 评测/evaluation | memory | benchmark-eval | 259 | 2026-04 |
| 374 | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 工具/tool | memory | tool-module | 16000 | 2026-05 |
| 375 | [ronit26mehta/argus-ai-debate](https://github.com/ronit26mehta/argus-ai-debate) | 框架/framework | framework | framework-runtime | 3 | unknown |
| 376 | [rtk-ai/icm](https://github.com/rtk-ai/icm) | 工具/tool | memory | tool-module | 371 | 2026-05 |
| 377 | [rucbm/laser](https://github.com/rucbm/laser) | 评测/evaluation | evaluation | benchmark-eval | 36 | 2026-05 |
| 378 | [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) | 评测/evaluation | research-agent | benchmark-eval | 13 | 2026-05 |
| 379 | [sakanaai/ai-scientist-v2](https://github.com/sakanaai/ai-scientist-v2) | 应用/application | research-agent | application-demo | 6 | 2024-Q2 |
| 380 | [sakanaai/shinkaevolve](https://github.com/sakanaai/shinkaevolve) | 工具/tool | evolution | tool-module | 1 | 2026-05 |
| 381 | [sakutepov/ai-scientist-v2](https://github.com/sakutepov/ai-scientist-v2) | 应用/application | research-agent | application-demo | 0 | 2024-Q3 |
| 382 | [salvatorera/ml-news-of-the-week](https://github.com/salvatorera/ml-news-of-the-week) | 教程/tutorial | memory | resource-index | 180 | 2026-05 |
| 383 | [sasleee/tencentdb-agent-memory](https://github.com/sasleee/tencentdb-agent-memory) | 框架/framework | memory | framework-runtime | 0 | 2026-05 |
| 384 | [scienceaix/agentskills](https://github.com/scienceaix/agentskills) | 教程/tutorial | education-list | resource-index | 63 | 2025-11 |
| 385 | [sd0xdev/sd0x-dev-flow](https://github.com/sd0xdev/sd0x-dev-flow) | 框架/framework | skill | skill-orchestration | 157 | 2026-05 |
| 386 | [sebastianbrzustowicz/robot-sumo-rl](https://github.com/sebastianbrzustowicz/robot-sumo-rl) | 评测/evaluation | evaluation | benchmark-eval | 18 | 2026-05 |
| 387 | [seetrex-ai/laimark](https://github.com/seetrex-ai/laimark) | 评测/evaluation | evaluation | benchmark-eval | 4 | 2026-04 |
| 388 | [sehoon787/my-codex](https://github.com/sehoon787/my-codex) | 框架/framework | skill | framework-runtime | 16 | 2026-05 |
| 389 | [self-play-language-models/spin-peft](https://github.com/self-play-language-models/spin-peft) | 评测/evaluation | evaluation | benchmark-eval | 4 | 2026-05 |
| 390 | [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | 框架/framework | evolution | agent-evolution-infra | 798 | 2026-05 |
| 391 | [sentrux/sentrux](https://github.com/sentrux/sentrux) | 框架/framework | evaluation | benchmark-eval | 2 | 2026-05 |
| 392 | [senweaver/senagentos](https://github.com/senweaver/senagentos) | 框架/framework | memory | framework-runtime | 10 | unknown |
| 393 | [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | 评测/evaluation | evaluation | benchmark-eval | 1200 | 2026-05 |
| 394 | [sethkarten/continual-harness](https://github.com/sethkarten/continual-harness) | 评测/evaluation | evaluation | benchmark-eval | 106 | 2026-05 |
| 395 | [shadowrootdev/awesome-agent-skills-mcp](https://github.com/shadowrootdev/awesome-agent-skills-mcp) | 教程/tutorial | education-list | resource-index | 23 | 2024-Q4 |
| 396 | [shaoshuai0605/misevolution](https://github.com/shaoshuai0605/misevolution) | 评测/evaluation | evolution | tool-module | 76 | 2026-05 |
| 397 | [shareAI-lab/kbench](https://github.com/shareAI-lab/kbench) | 评测/evaluation | evaluation | benchmark-eval | 10 | 2026-05 |
| 398 | [shehrum/grf-self-play](https://github.com/shehrum/grf-self-play) | 评测/evaluation | research-agent | benchmark-eval | 4 | 2026-05 |
| 399 | [shichun-liu/agent-memory-paper-list](https://github.com/shichun-liu/agent-memory-paper-list) | 教程/tutorial | memory | resource-index | 2 | 2025-12 |
| 400 | [shingo257/gitnexus](https://github.com/shingo257/gitnexus) | 框架/framework | evaluation | framework-runtime | 0 | 2026-05 |
| 401 | [shinpr/mcp-local-rag](https://github.com/shinpr/mcp-local-rag) | 工具/tool | memory | tool-module | 275 | 2026-05 |
| 402 | [shintaro-sprech/agent-orchestrator-template](https://github.com/shintaro-sprech/agent-orchestrator-template) | 框架/framework | framework | framework-runtime | 120 | 2026-05 |
| 403 | [shiqichen17/spa](https://github.com/shiqichen17/spa) | 工具/tool | memory | tool-module | 35 | 2026-05 |
| 404 | [sibyl-research-team/sibyl-research-system](https://github.com/sibyl-research-team/sibyl-research-system) | 工具/tool | research-agent | tool-module | 245 | 2026-05 |
| 405 | [siddharth-1001/agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness) | 框架/framework | evaluation | framework-runtime | 20 | 2026-05 |
| 406 | [Signet-AI/signetai](https://github.com/Signet-AI/signetai) | 工具/tool | memory | memory-substrate | 167 | 2026-05 |
| 407 | [significant-gravitas/autogpt](https://github.com/significant-gravitas/autogpt) | 框架/framework | framework | framework-runtime | 184 | 2026-05 |
| 408 | [simota/agent-skills](https://github.com/simota/agent-skills) | 教程/tutorial | skill | resource-index | 39 | 2026-05 |
| 409 | [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) | 框架/framework | skill | framework-runtime | 480 | 2026-05 |
| 410 | [skills-mcp/skills-mcp](https://github.com/skills-mcp/skills-mcp) | 工具/tool | prompt-optimization | tool-module | 24 | 2026-05 |
| 411 | [smiles724/awesome-llm-rlvr](https://github.com/smiles724/awesome-llm-rlvr) | 教程/tutorial | education-list | resource-index | 107 | unknown |
| 412 | [snowflake-labs/agent-world-model](https://github.com/snowflake-labs/agent-world-model) | 应用/application | education-list | application-demo | 356 | 2026-05 |
| 413 | [sola-st/repairagent](https://github.com/sola-st/repairagent) | 工具/tool | memory | tool-module | 95 | 2026-05 |
| 414 | [spillwavesolutions/agent-brain](https://github.com/spillwavesolutions/agent-brain) | 评测/evaluation | evaluation | benchmark-eval | 101 | 2026-03 |
| 415 | [spiral-rl/spiral](https://github.com/spiral-rl/spiral) | 框架/framework | framework | framework-runtime | 190 | 2026-05 |
| 416 | [square-mind/squaremind](https://github.com/square-mind/squaremind) | 框架/framework | framework | framework-runtime | 0 | 2026-05 |
| 417 | [stanfordnlp/dsp](https://github.com/stanfordnlp/dsp) | 框架/framework | prompt-optimization | framework-runtime | 34 | 2026-05 |
| 418 | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 框架/framework | prompt-optimization | framework-runtime | 34 | 2026-05 |
| 419 | [star-bob/swe-agent](https://github.com/star-bob/swe-agent) | 论文代码/paper-code | coding-agent | research-artifact | 0 | 2026-05 |
| 420 | [stonks-git/intuitive-ai](https://github.com/stonks-git/intuitive-ai) | 工具/tool | memory | tool-module | 2 | 2026-05 |
| 421 | [studio-intrinsic/turbo-gepa](https://github.com/studio-intrinsic/turbo-gepa) | 评测/evaluation | prompt-optimization | benchmark-eval | 3 | 2026-05 |
| 422 | [sudokrang/aceforge](https://github.com/sudokrang/aceforge) | 工具/tool | evolution | tool-module | 1 | 2026-05 |
| 423 | [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | 教程/tutorial | skill | resource-index | 602 | 2026-05 |
| 424 | [sunitj/colloquip](https://github.com/sunitj/colloquip) | 框架/framework | framework | framework-runtime | 1 | 2026-05 |
| 425 | [sunzey/seagent](https://github.com/sunzey/seagent) | 论文代码/paper-code | evaluation | benchmark-eval | 246 | 2026-05 |
| 426 | [SuperagenticAI/metaharness](https://github.com/SuperagenticAI/metaharness) | 工具/tool | evaluation | agent-evolution-infra | 102 | 2026-05 |
| 427 | [suyoumo/ClawProBench](https://github.com/suyoumo/ClawProBench) | 评测/evaluation | evaluation | benchmark-eval | 690 | 2026-05 |
| 428 | [swapedoc/hermes2anti](https://github.com/swapedoc/hermes2anti) | 工具/tool | memory | tool-module | 4 | 2026-05 |
| 429 | [swarmclawai/swarmclaw](https://github.com/swarmclawai/swarmclaw) | 框架/framework | framework | framework-runtime | 518 | 2026-05 |
| 430 | [swe-agent/swe-agent](https://github.com/swe-agent/swe-agent) | 论文代码/paper-code | coding-agent | research-artifact | 19 | 2025-05 |
| 431 | [swe-bench/swe-bench](https://github.com/swe-bench/swe-bench) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2026-05 |
| 432 | [synaptent/aragora](https://github.com/synaptent/aragora) | 评测/evaluation | memory | benchmark-eval | 7 | 2026-05 |
| 433 | [taishi-n324/awesome-rl-reasoning](https://github.com/taishi-n324/awesome-rl-reasoning) | 教程/tutorial | education-list | resource-index | 13 | 2025-09 |
| 434 | [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | 工具/tool | skill | tool-module | 4400 | 2026-05 |
| 435 | [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 421 | 2026-05 |
| 436 | [tencent/selfevolvingagent](https://github.com/tencent/selfevolvingagent) | 论文代码/paper-code | evolution | application-demo | 100 | 2026-05 |
| 437 | [terryfyl/openclaw-evolution-framework](https://github.com/TerryFYL/openclaw-evolution-framework) | 框架/framework | evolution | framework-runtime | 4 | 2026-02 |
| 438 | [tfatykhov/awesome-agent-memory](https://github.com/tfatykhov/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 0 | 2026-05 |
| 439 | [thClaws/thClaws](https://github.com/thClaws/thClaws) | 框架/framework | framework | framework-runtime | 1000 | 2026-05 |
| 440 | [TheQtCompanyRnD/agent-skills](https://github.com/TheQtCompanyRnD/agent-skills) | 教程/tutorial | skill | resource-index | 171 | 2026-05 |
| 441 | [thesdes/textgrad](https://github.com/thesdes/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 442 | [thu-nics/mars](https://github.com/thu-nics/mars) | 评测/evaluation | evaluation | benchmark-eval | 48 | 2026-05 |
| 443 | [thudm/webrl](https://github.com/thudm/webrl) | 应用/application | evolution | benchmark-eval | 524 | 2026-05 |
| 444 | [thuml/rlvr-world](https://github.com/thuml/rlvr-world) | 评测/evaluation | evaluation | benchmark-eval | 251 | 2026-05 |
| 445 | [tianyi-stack/madevolve](https://github.com/tianyi-stack/madevolve) | 应用/application | evolution | application-demo | 9 | 2026-05 |
| 446 | [tiger-ai-lab/openresearcher](https://github.com/tiger-ai-lab/openresearcher) | 评测/evaluation | research-agent | benchmark-eval | 756 | 2026-05 |
| 447 | [TiMEM-AI/timem](https://github.com/TiMEM-AI/timem) | 工具/tool | memory | tool-module | 134 | 2026-05 |
| 448 | [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 应用/application | memory | application-demo | 25100 | 2026-05 |
| 449 | [tmgthb/autonomous-agents](https://github.com/tmgthb/autonomous-agents) | 教程/tutorial | research-agent | resource-index | 1 | 2026-05 |
| 450 | [togethercomputer/skills](https://github.com/togethercomputer/skills) | 工具/tool | skill | tool-module | 28 | 2026-05 |
| 451 | [TransformerOptimus/SuperAGI](https://github.com/TransformerOptimus/SuperAGI) | 框架/framework | framework | framework-runtime | 17500 | 2026-05 |
| 452 | [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) | 应用/application | evolution | application-demo | 2 | 2026-05 |
| 453 | [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | 框架/framework | memory | framework-runtime | 2100 | 2026-05 |
| 454 | [tsinghua-fib-lab/awesome-ai-scientists](https://github.com/tsinghua-fib-lab/awesome-ai-scientists) | 教程/tutorial | research-agent | resource-index | 35 | 2026-05 |
| 455 | [tsinghua-fib-lab/world-model](https://github.com/tsinghua-fib-lab/world-model) | 教程/tutorial | education-list | resource-index | 711 | early |
| 456 | [tsinghuac3i/awesome-memory-for-agents](https://github.com/tsinghuac3i/awesome-memory-for-agents) | 教程/tutorial | memory | resource-index | 506 | 2026-05 |
| 457 | [tsinghuac3i/awesome-rl-for-lrms](https://github.com/tsinghuac3i/awesome-rl-for-lrms) | 教程/tutorial | education-list | resource-index | 2 | 2025-09 |
| 458 | [tsukushiai/self-organized-agent](https://github.com/tsukushiai/self-organized-agent) | 框架/framework | framework | framework-runtime | 18 | 2026-05 |
| 459 | [tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver) | 框架/framework | evaluation | benchmark-eval | 14 | unknown |
| 460 | [tzussman/openevolve](https://github.com/tzussman/openevolve) | 应用/application | evolution | application-demo | 0 | 2026-05 |
| 461 | [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) | 框架/framework | framework | framework-runtime | 0 | 2026-05 |
| 462 | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | 评测/evaluation | memory | benchmark-eval | 43 | 2026-05 |
| 463 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 框架/framework | memory | framework-runtime | 14400 | 2026-05 |
| 464 | [ventr1c/memma](https://github.com/ventr1c/memma) | 论文代码/paper-code | memory | tool-module | 17 | unknown |
| 465 | [vercel-labs/ai](https://github.com/vercel-labs/ai) | 框架/framework | framework | framework-runtime | 24 | 2026-05 |
| 466 | [vercel-labs/skills](https://github.com/vercel-labs/skills) | 工具/tool | skill | tool-module | 19900 | 2026-05 |
| 467 | [vercel/ai](https://github.com/vercel/ai) | 框架/framework | framework | framework-runtime | 24 | 2026-05 |
| 468 | [vercel/workflow](https://github.com/vercel/workflow) | 框架/framework | workflow-automation | framework-runtime | 2 | 2026-04 |
| 469 | [vicsanity623/pyob](https://github.com/vicsanity623/pyob) | 评测/evaluation | evaluation | benchmark-eval | 2 | 2026-05 |
| 470 | [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | 论文代码/paper-code | evolution | agent-evolution-infra | 484 | 2026-05 |
| 471 | [vilmire/adhdev](https://github.com/vilmire/adhdev) | 框架/framework | framework | framework-runtime | 33 | 2026-05 |
| 472 | [vision-intelligence-and-robots-group/best-incremental-learning](https://github.com/vision-intelligence-and-robots-group/best-incremental-learning) | 工具/tool | coding-agent | tool-module | 607 | unknown |
| 473 | [vivy-yi/awesome-agent-orchestration](https://github.com/vivy-yi/awesome-agent-orchestration) | 教程/tutorial | framework | resource-index | 10 | 2026-05 |
| 474 | [volcengine/openviking](https://github.com/volcengine/openviking) | 工具/tool | memory | resource-index | 24 | 2026-05 |
| 475 | [voltagent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 教程/tutorial | skill | resource-index | 22900 | 2026-05 |
| 476 | [vsonicv/es-fine-tuning-paper](https://github.com/vsonicv/es-fine-tuning-paper) | 论文代码/paper-code | research-agent | research-artifact | 356 | 2025-10 |
| 477 | [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | 框架/framework | framework | framework-runtime | 987 | 2026-05 |
| 478 | [wazionapps/nexo](https://github.com/wazionapps/nexo) | 工具/tool | memory | memory-substrate | 22 | 2026-05 |
| 479 | [webmaxru/Agent-Skills](https://github.com/webmaxru/Agent-Skills) | 工具/tool | skill | tool-module | 29 | 2026-05 |
| 480 | [werner-duvaud/muzero-general](https://github.com/werner-duvaud/muzero-general) | 评测/evaluation | evaluation | benchmark-eval | 2 | 2026-05 |
| 481 | [workofart/selfplay-tictactoe](https://github.com/workofart/selfplay-tictactoe) | 评测/evaluation | evaluation | benchmark-eval | 0 | early |
| 482 | [wuxingyu-ai/llm4ec](https://github.com/wuxingyu-ai/llm4ec) | 教程/tutorial | evolution | resource-index | 139 | 2026-05 |
| 483 | [wzdnzd/harvester](https://github.com/wzdnzd/harvester) | 框架/framework | framework | framework-runtime | 546 | 2026-05 |
| 484 | [x1aox1a/word2world](https://github.com/x1aox1a/word2world) | 评测/evaluation | evaluation | benchmark-eval | 62 | 2026-05 |
| 485 | [xai-liacs/llamea](https://github.com/xai-liacs/llamea) | 评测/evaluation | evaluation | benchmark-eval | 105 | 2026-05 |
| 486 | [xanther-ai/xce-benchmarks](https://github.com/xanther-ai/xce-benchmarks) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 487 | [xialeiliu/awesome-incremental-learning](https://github.com/xialeiliu/awesome-incremental-learning) | 教程/tutorial | education-list | resource-index | 4 | unknown |
| 488 | [xiaofangxd/llm/ea](https://github.com/xiaofangxd/llm/ea) | 应用/application | evolution | application-demo | 23 | 2026-05 |
| 489 | [xinhuagu/aceclaw](https://github.com/xinhuagu/aceclaw) | 框架/framework | evaluation | framework-runtime | 4 | 2026-05 |
| 490 | [xizaoqu/worldmem](https://github.com/xizaoqu/worldmem) | 评测/evaluation | memory | benchmark-eval | 359 | 2025-11 |
| 491 | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | 评测/evaluation | evaluation | benchmark-eval | 2900 | 2026-05 |
| 492 | [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 工具/tool | evolution | resource-index | 181 | 2026-05 |
| 493 | [xuchen-li/llm-arxiv-daily](https://github.com/xuchen-li/llm-arxiv-daily) | 教程/tutorial | evaluation | resource-index | 144 | 2026-05 |
| 494 | [yang1999code/controllable-agent](https://github.com/yang1999code/controllable-agent) | 框架/framework | evaluation | framework-runtime | 105 | 2026-05 |
| 495 | [yennning/awesome-code-as-agent-harness-papers](https://github.com/yennning/awesome-code-as-agent-harness-papers) | 教程/tutorial | education-list | resource-index | 123 | unknown |
| 496 | [yf-he/EvoTest](https://github.com/yf-he/EvoTest) | 论文代码/paper-code | evolution | agent-evolution-infra | 19 | 2026-05 |
| 497 | [yinbo0927/fate](https://github.com/yinbo0927/fate) | 评测/evaluation | evolution | benchmark-eval | 16 | unknown |
| 498 | [yingchengyang/reinforcement-learning-papers](https://github.com/yingchengyang/reinforcement-learning-papers) | 教程/tutorial | research-agent | resource-index | 569 | unknown |
| 499 | [ynulihao/AgentSkillOS](https://github.com/ynulihao/AgentSkillOS) | 工具/tool | skill | skill-orchestration | 415 | 2026-05 |
| 500 | [yologdev/yoyo-evolve](https://github.com/yologdev/yoyo-evolve) | 应用/application | evolution | tool-module | 1 | 2026-05 |
| 501 | [yonkoo11/hermes-dojo](https://github.com/yonkoo11/hermes-dojo) | 应用/application | evolution | tool-module | 72 | 2026-05 |
| 502 | [youngdubbydu/llm-agent-optimization](https://github.com/youngdubbydu/llm-agent-optimization) | 教程/tutorial | education-list | resource-index | 231 | 2026-05 |
| 503 | [YunjueTech/Yunjue-Agent](https://github.com/YunjueTech/Yunjue-Agent) | 论文代码/paper-code | evolution | agent-evolution-infra | 426 | 2026-02 |
| 504 | [yxf203/awesome-efficient-agents](https://github.com/yxf203/awesome-efficient-agents) | 教程/tutorial | memory | resource-index | 250 | 2026-05 |
| 505 | [yyyujintang/Awesome-Agent-Memory-Papers](https://github.com/yyyujintang/Awesome-Agent-Memory-Papers) | 教程/tutorial | memory | resource-index | 0 | 2026-05 |
| 506 | [zaixizhang/stella](https://github.com/zaixizhang/stella) | 应用/application | evaluation | benchmark-eval | 141 | 2026-05 |
| 507 | [zanwenfu/auto-code-rover](https://github.com/zanwenfu/auto-code-rover) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 508 | [zazencodes/zazencodes-season-3](https://github.com/zazencodes/zazencodes-season-3) | 框架/framework | framework | framework-runtime | 4 | 2026-05 |
| 509 | [zbinxp/deer-flow](https://github.com/zbinxp/deer-flow) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-02 |
| 510 | [zed-industries/zed](https://github.com/zed-industries/zed) | 评测/evaluation | evaluation | benchmark-eval | 83 | 2026-05 |
| 511 | [zesearch/self-improvement-llm](https://github.com/zesearch/self-improvement-llm) | 应用/application | evolution | application-demo | 13 | 2026-05 |
| 512 | [zhang677/accelopt](https://github.com/zhang677/accelopt) | 论文代码/paper-code | evaluation | benchmark-eval | 43 | unknown |
| 513 | [zhangfengcdt/memoir](https://github.com/zhangfengcdt/memoir) | 工具/tool | memory | memory-substrate | 549 | 2026-05 |
| 514 | [zhangyiqun018/agent-for-debate](https://github.com/zhangyiqun018/agent-for-debate) | 框架/framework | framework | framework-runtime | 38 | 2026-01 |
| 515 | [zhentingwang/dump](https://github.com/zhentingwang/dump) | 评测/evaluation | evaluation | benchmark-eval | 33 | 2026-05 |
| 516 | [zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare](https://github.com/zhihaopeng-cityu/awesome-self-evolving-ai-for-agentic-healthcare) | 工具/tool | evolution | resource-index | 11 | unknown |
| 517 | [zhonghaojiang/awesome-issue-solving](https://github.com/zhonghaojiang/awesome-issue-solving) | 教程/tutorial | evaluation | resource-index | 9 | 2026-01 |
| 518 | [zijian-ni/awesome-ai-agents-2026](https://github.com/zijian-ni/awesome-ai-agents-2026) | 教程/tutorial | education-list | resource-index | 81 | unknown |
| 519 | [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | 工具/tool | memory | tool-module | 1800 | 2026-05 |
| 520 | [zixuanfeng-nyu/textgrad](https://github.com/zixuanfeng-nyu/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 521 | [zjunlp/knowself](https://github.com/zjunlp/knowself) | 评测/evaluation | evaluation | benchmark-eval | 93 | 2024-Q3 |
| 522 | [zjunlp/worldmind](https://github.com/zjunlp/worldmind) | 评测/evaluation | evaluation | benchmark-eval | 35 | 2026-05 |
| 523 | [zoe-yyx/agentnet](https://github.com/zoe-yyx/agentnet) | 框架/framework | evolution | framework-runtime | 46 | 2025-04 |
| 524 | [zou-group/sirius](https://github.com/zou-group/sirius) | 应用/application | framework | framework-runtime | 101 | 2026-05 |
| 525 | [zou-group/textgrad](https://github.com/zou-group/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 3 | 2026-05 |
| 526 | [zylos-ai/zylos-core](https://github.com/zylos-ai/zylos-core) | 框架/framework | evolution | framework-runtime | 1400 | 2026-05 |
| 527 | [zzz47zzz/awesome-lifelong-learning-methods-for-llm](https://github.com/zzz47zzz/awesome-lifelong-learning-methods-for-llm) | 教程/tutorial | education-list | resource-index | 162 | unknown |

</details>

<details>
<summary>完整论文列表（108）</summary>

| # | 类别 | 论文 | 年份 | Venue |
|---:|---|---|---|---|
| 1 | A. 框架 | [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954) | 2025 | arXiv |
| 2 | A. 框架 | [Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement](https://arxiv.org/abs/2410.04444) | 2024 (ICLR 2025) | ICLR 2025 |
| 3 | A. 框架 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | 2025 | arXiv |
| 4 | A. 框架 | [ADAS: Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435) | 2024 (ICLR 2025) | ICLR 2025 |
| 5 | A. 框架 | [Symbolic Learning Enables Self-Evolving Agents](https://arxiv.org/abs/2406.18532) | 2024 (NeurIPS 2024) | NeurIPS 2024 |
| 6 | A. 框架 | [EvoMAC: Self-Evolving Multi-Agent Collaboration Networks for Software Development](https://arxiv.org/abs/2410.16946) | 2024 | arXiv |
| 7 | A. 框架 | [AgentEvolver: Towards Efficient Self-Evolving Agent System](https://arxiv.org/abs/2511.10395) | 2025 | arXiv |
| 8 | A. 框架 | [InfiAgent: Self-Evolving Pyramid Agent Framework for Infinite Scenarios](https://arxiv.org/abs/2509.22502) | 2025 | arXiv |
| 9 | A. 框架 | [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://arxiv.org/abs/2508.04700) | 2025 | arXiv |
| 10 | A. 框架 | [SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning](https://arxiv.org/abs/2508.02085) | 2025 | arXiv |
| 11 | A. 框架 | [ELL Framework: Building Self-Evolving Agents via Experience-Driven Lifelong Learning](https://arxiv.org/abs/2508.19005) | 2025 | arXiv |
| 12 | A. 框架 | [Agent0: Unleashing Self-Evolving Agents from Zero Data](https://arxiv.org/abs/2511.16043) | 2025 | arXiv |
| 13 | B. 方法 | [RISE: Recursive Introspection: Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | 2024 | arXiv |
| 14 | B. 方法 | [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://arxiv.org/abs/2501.11425) | 2025 | arXiv |
| 15 | B. 方法 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | 2025 | arXiv |
| 16 | B. 方法 | [EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle](https://arxiv.org/abs/2510.16079) | 2025 | arXiv |
| 17 | B. 方法 | [ACE: Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618) | 2025 | arXiv |
| 18 | B. 方法 | [Self-Developing: Can LLMs Invent Algorithms to Improve Themselves?](https://arxiv.org/abs/2410.15639) | 2024 | arXiv |
| 19 | B. 方法 | [EVOLVE: Evolving LLMs' Self-Refinement Capability via Synergistic Training-Inference Optimization](https://arxiv.org/abs/2502.05605) | 2025 | arXiv |
| 20 | B. 方法 | [ExIt: Exploratory Iteration - Bootstrapping Task Spaces for Self-Improvement](https://arxiv.org/abs/2509.04575) | 2025 | arXiv |
| 21 | B. 方法 | [Self-Challenging Language Model Agents](https://arxiv.org/abs/2506.01716) | 2025 | arXiv |
| 22 | B. 方法 | [TT-SI: Self-Improving LLM Agents at Test-Time](https://arxiv.org/abs/2510.07841) | 2025 | arXiv |
| 23 | B. 方法 | [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://arxiv.org/abs/2504.21024) | 2025 | arXiv |
| 24 | B. 方法 | [Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation](https://arxiv.org/abs/2506.09046) | 2025 | arXiv |
| 25 | B. 方法 | [Agents of Change: Self-Evolving LLM Agents for Strategic Planning](https://arxiv.org/abs/2506.04651) | 2025 | arXiv |
| 26 | B. 方法 | [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651) | 2023 (NeurIPS 2023) | NeurIPS 2023 |
| 27 | B. 方法 | [LLMRefine: Pinpointing and Refining Large Language Models via Fine-Grained Actionable Feedback](https://arxiv.org/abs/2311.09336) | 2024 | arXiv |
| 28 | B. 方法 | [Agent-Pro: Learning to Evolve via Policy-Level Reflection and Optimization](https://arxiv.org/abs/2402.17574) | 2024 (ACL 2024) | ACL 2024 |
| 29 | B. 方法 | [Self-Correcting Code Small LM (2025)](https://arxiv.org/abs/2505.23060) | 2025 | arXiv |
| 30 | B. 方法 | [ReflectEvo: Small Model Self-Reflection Evolution (2025)](https://arxiv.org/abs/2505.16475) | 2025 | arXiv |
| 31 | B. 方法 | [Deep Self-Evolving Reasoning (2025)](https://arxiv.org/abs/2510.17498) | 2025 | arXiv |
| 32 | B. 方法 | [Evolving Excellence: Automatic Agent Optimization (2025)](https://arxiv.org/abs/2512.09108) | 2025 | arXiv |
| 33 | B. 方法 | [AutoAgent: Fully Automated Zero-Code Agent (2025)](https://arxiv.org/abs/2502.05957) | 2025 | arXiv |
| 34 | B. 方法 | SEW: Self-Evolving Workflow for Code Generation (2025) | 2025 | arXiv |
| 35 | C. 自博弈与强化学习 | [Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335) | 2025 (NeurIPS 2025) | NeurIPS 2025 |
| 36 | C. 自博弈与强化学习 | SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning (2025) | 2025 | arXiv |
| 37 | C. 自博弈与强化学习 | [Multi-Agent Evolve (MAE): LLM Self-Improve through Co-evolution](https://arxiv.org/abs/2510.23595) | 2025 | arXiv |
| 38 | C. 自博弈与强化学习 | [Agentic Self-Learning (ASL): Towards Agentic Self-Learning LLMs](https://arxiv.org/abs/2510.14253) | 2025 | arXiv |
| 39 | C. 自博弈与强化学习 | Vision-Zero: VLM Multi-Agent Self-Play Self-Evolution (2025) | 2025 | arXiv |
| 40 | C. 自博弈与强化学习 | [RLSR: Self-Rewarding Reinforcement Learning (2025)](https://arxiv.org/abs/2505.08827) | 2025 | arXiv |
| 41 | C. 自博弈与强化学习 | Language Self-Play: Training Without Data (2025) | 2025 | arXiv |
| 42 | C. 自博弈与强化学习 | [Self-Play Fine-Tuning: Converting Weak Models to Strong Models](https://arxiv.org/abs/2401.01335) | 2024 | arXiv |
| 43 | C. 自博弈与强化学习 | Nature-Inspired Population-Based Evolution of LLMs (2025) | 2025 | arXiv |
| 44 | C. 自博弈与强化学习 | ES vs GRPO in LLM Post-Training (2025) | 2025 | arXiv |
| 45 | D. STaR与推理自我改进 | [STaR: Self-Taught Reasoner - Bootstrapping Reasoning With Reasoning](https://arxiv.org/abs/2203.14465) | 2022 (NeurIPS) | NeurIPS |
| 46 | D. STaR与推理自我改进 | [RL-STaR: RL Framework for Self-Taught Reasoning (2024)](https://arxiv.org/abs/2410.23912) | 2024 | arXiv |
| 47 | D. STaR与推理自我改进 | [STaR-SQL: Self-Taught Reasoning for Text-to-SQL (2025)](https://arxiv.org/abs/2502.13550) | 2025 | arXiv |
| 48 | D. STaR与推理自我改进 | [AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery](https://arxiv.org/abs/2506.13131) | 2025 | arXiv (Google DeepMind) |
| 49 | D. STaR与推理自我改进 | [ThetaEvolve: Open Problems and Test-Time Learning (2025)](https://arxiv.org/abs/2511.23473) | 2025 | arXiv |
| 50 | D. STaR与推理自我改进 | [FunSearch: Mathematical Discovery via LLM Evolution (2023)](https://www.nature.com/articles/s41586-023-06924-6) | 2023 | Nature |
| 51 | E. 自我反思与Reflexion | [Self-Correct via RL: Training Language Models to Self-Correct via Reinforcement Learning](https://arxiv.org/abs/2409.12917) | 2024 | arXiv |
| 52 | E. 自我反思与Reflexion | [Self-Reflection in LLM Agents (2024)](https://arxiv.org/abs/2405.06682) | 2024 | arXiv |
| 53 | E. 自我反思与Reflexion | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | 2023 (NeurIPS) | NeurIPS |
| 54 | E. 自我反思与Reflexion | SaMuLe: Multi-Level Reflection Self-Learning Agent (2024) | 2024 | arXiv |
| 55 | E. 自我反思与Reflexion | MAR: Multi-Agent Reflection for Improved Reasoning (2024) | 2024 | arXiv |
| 56 | E. 自我反思与Reflexion | MetaReflection: Learning Instructions from Past Reflections (2024) | 2024 | arXiv |
| 57 | F. 代码自我纠错 | [InspectCoder: Dynamic Analysis Self-Repair (2025)](https://arxiv.org/abs/2510.18327) | 2025 | arXiv |
| 58 | F. 代码自我纠错 | [Revisit Self-Debugging: Self-Generated Tests for Self-Debugging (2025)](https://arxiv.org/abs/2501.12793) | 2025 | arXiv |
| 59 | F. 代码自我纠错 | [Hierarchical Debugging: Code to Correctness (2024)](https://arxiv.org/abs/2410.01215) | 2024 | arXiv |
| 60 | F. 代码自我纠错 | LeDex: Self-Debugging + Code Explanation (2024) | 2024 | arXiv |
| 61 | F. 代码自我纠错 | [ProgCo: Program-Assisted Self-Correction (2025)](https://arxiv.org/abs/2501.01264) | 2025 | arXiv |
| 62 | G. 自演化课程学习 | [Self-Evolving Curriculum for LLM Reasoning (2025)](https://arxiv.org/abs/2505.14970) | 2025 | arXiv |
| 63 | G. 自演化课程学习 | [EvoCurr: Behavioral Code Generation Self-Evolving Curriculum (2025)](https://arxiv.org/abs/2508.09586) | 2025 | arXiv |
| 64 | G. 自演化课程学习 | TTCS: Test-Time Curriculum Synthesis (2025) | 2025 | arXiv |
| 65 | G. 自演化课程学习 | WebRL: Online Curriculum RL Training for Web Agents (2024) | 2024 | arXiv |
| 66 | G. 自演化课程学习 | [CurricuLLM: LLM Designs Robot Skill Curriculum (2024)](https://arxiv.org/abs/2409.18382) | 2024 | arXiv |
| 67 | H. 经验学习 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | 2024 (AAAI 2024) | AAAI 2024 |
| 68 | H. 经验学习 | [ICE: Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution](https://arxiv.org/abs/2401.13996) | 2024 (AAAI 2024) | AAAI 2024 |
| 69 | H. 经验学习 | FLEX: Forward Experience Learning for Continual Evolution (2025) | 2025 | arXiv |
| 70 | H. 经验学习 | [ReasoningBank: Scaling Reasoning Memory for Self-Evolution (2025)](https://arxiv.org/abs/2509.25140) | 2025 | arXiv |
| 71 | I. 记忆与终身学习 | AriadneMem: LLM Agent Lifelong Memory (2025) | 2025 | arXiv |
| 72 | I. 记忆与终身学习 | Memory-R1: RL for Managing and Utilizing Memory (2025) | 2025 | arXiv |
| 73 | I. 记忆与终身学习 | [Lifelong Learning of LLM Agents: A Roadmap (2025)](https://arxiv.org/abs/2501.07278) | 2025 | arXiv |
| 74 | I. 记忆与终身学习 | Memento 2: State Reflection Memory Learning (2025) | 2025 | arXiv |
| 75 | I. 记忆与终身学习 | A-Mem: Agent Memory for LLM Agents (2025) | 2025 | arXiv |
| 76 | I. 记忆与终身学习 | [How Memory Management Impacts LLM Agents (2025)](https://arxiv.org/abs/2505.16067) | 2025 | arXiv |
| 77 | J. 自奖励与对齐 | [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020) | 2024 | arXiv (Meta / NYU) |
| 78 | J. 自奖励与对齐 | Self-Rewarding PPO (2024) | 2024 | arXiv |
| 79 | J. 自奖励与对齐 | Process-based Self-Rewarding (2024) | 2024 | arXiv |
| 80 | J. 自奖励与对齐 | Meta-Rewarding LM: LLM as Meta-Judge for Self-Improvement (2024) | 2024 | arXiv |
| 81 | J. 自奖励与对齐 | [IterAlign: Iterative Constitutional Alignment (2024)](https://arxiv.org/abs/2403.18341) | 2024 | arXiv |
| 82 | K. 多智能体辩论与协作 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | 2023 | arXiv |
| 83 | K. 多智能体辩论与协作 | [Diversity of Thought: Stronger Reasoning through Thinking Diversity (2024)](https://arxiv.org/abs/2410.12853) | 2024 | arXiv |
| 84 | K. 多智能体辩论与协作 | MAgICoRe: Multi-Agent Iterative Coarse-to-Fine Refinement (2024) | 2024 | arXiv |
| 85 | K. 多智能体辩论与协作 | GroupDebate: Efficient Multi-Agent Debate (2024) | 2024 | arXiv |
| 86 | K. 多智能体辩论与协作 | MARS: Multi-Agent Collaboration for Reasoning (2024) | 2024 | arXiv |
| 87 | L. 进化策略与发现 | LLMs As Evolution Strategies (2024) | 2024 | arXiv |
| 88 | L. 进化策略与发现 | Survey: LLMs for Evolutionary Computation (2024) | 2024 | arXiv |
| 89 | L. 进化策略与发现 | Matching Accuracy: ES vs GRPO (2025) | 2025 | arXiv |
| 90 | L. 进化策略与发现 | [Scientific Algorithm Discovery via AlphaEvolve (2025)](https://arxiv.org/abs/2510.06056) | 2025 | arXiv |
| 91 | M. 开放式进化与经典 | [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) | 2023 (NeurIPS) | NeurIPS |
| 92 | M. 开放式进化与经典 | [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | 2023 (UIST) | UIST 2023 |
| 93 | M. 开放式进化与经典 | Safety for Open-Ended Systems (2025) | 2025 | arXiv |
| 94 | M. 开放式进化与经典 | [Dominated Novelty Search (2025)](https://arxiv.org/abs/2502.00593) | 2025 | arXiv |
| 95 | M. 开放式进化与经典 | [Foundation Agents: Brain-Inspired Intelligence to Evolutionary, Collaborative, and Safe Systems (2025)](https://arxiv.org/abs/2504.01990) | 2025 | arXiv |
| 96 | N. 弱到强与理论 | [Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision](https://arxiv.org/abs/2312.09390) | 2024 | arXiv (OpenAI) |
| 97 | N. 弱到强与理论 | Debate Helps Weak-to-Strong (2024) | 2024 | arXiv |
| 98 | N. 弱到强与理论 | [Self-Improvement in Language Models: The Sharpening Mechanism](https://arxiv.org/abs/2412.01951) | 2024 | arXiv |
| 99 | N. 弱到强与理论 | Reward Hacking: Mechanisms & Misalignment (2025) | 2025 | arXiv |
| 100 | N. 弱到强与理论 | [MONA: Myopic Optimization Non-myopic Approval (2025)](https://arxiv.org/abs/2508.07407) | 2025 | arXiv |
| 101 | 2026 补充前沿 | [Self-Evolving Software Agents](https://arxiv.org/abs/2604.27264) | 2026 | arXiv |
| 102 | 2026 补充前沿 | [EvoMemBench: Benchmarking Agent Memory from a Self-Evolving Perspective](https://arxiv.org/abs/2605.18421) | 2026 | arXiv |
| 103 | 2026 补充前沿 | [SEA-Eval: A Benchmark for Evaluating Self-Evolving Agents Beyond Episodic Assessment](https://arxiv.org/abs/2604.08988) | 2026 | arXiv |
| 104 | 2026 补充前沿 | [Group-Evolving Agents: Open-Ended Self-Improvement via Experience Sharing](https://arxiv.org/abs/2602.04837) | 2026 | arXiv |
| 105 | 2026 补充前沿 | [EvoSkill: Automated Skill Discovery for Multi-Agent Systems](https://arxiv.org/abs/2603.02766) | 2026 | arXiv |
| 106 | 2026 补充前沿 | [The Devil Behind Moltbook: Anthropic Safety is Always Vanishing in Self-Evolving AI Societies](https://arxiv.org/abs/2602.09877) | 2026 | arXiv |
| 107 | 2026 补充前沿 | [SAGER: Self-Evolving User Policy Skills for Recommendation Agent](https://arxiv.org/abs/2604.14972) | 2026 | arXiv |
| 108 | 2026 补充前沿 | [Bifrost: Steering Strategic Trajectories to Bridge Contextual Gaps for Self-Improving Agents](https://arxiv.org/abs/2602.05810) | 2026 | arXiv |

</details>

<details>
<summary>完整 Benchmark / Evaluation 相关仓库列表（173）</summary>

| # | 仓库 | 分类 | 主题 | 功能标签 | Stars | 时间片 |
|---:|---|---|---|---|---:|---|
| 1 | [0xsanei/darwinia](https://github.com/0xsanei/darwinia) | 框架/framework | evolution | benchmark-eval | 102 | 2026-05 |
| 2 | [a-evo-lab/a-evolve](https://github.com/a-evo-lab/a-evolve) | 论文代码/paper-code | evolution | agent-evolution-infra | 552 | 2026-05 |
| 3 | [agent-ecosystem/skill-validator](https://github.com/agent-ecosystem/skill-validator) | 工具/tool | skill | benchmark-eval | 47 | 2026-05 |
| 4 | [agentreplay/agentreplay](https://github.com/agentreplay/agentreplay) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-05 |
| 5 | [aisa-group/skill-inject](https://github.com/aisa-group/skill-inject) | 评测/evaluation | skill | benchmark-eval | 73 | 2026-05 |
| 6 | [AMA-Bench/AMA-Bench](https://github.com/AMA-Bench/AMA-Bench) | 评测/evaluation | memory | benchmark-eval | 40 | 2026-05 |
| 7 | [angrysky56/reflective-agent-architecture](https://github.com/angrysky56/reflective-agent-architecture) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2025-12 |
| 8 | [archishmansengupta/autovoiceevals](https://github.com/archishmansengupta/autovoiceevals) | 评测/evaluation | evaluation | benchmark-eval | 149 | 2026-05 |
| 9 | [arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind) | 框架/framework | evaluation | framework-runtime | 1 | unknown |
| 10 | [arunagirinathan-k/awesome-ai-agents-2026](https://github.com/arunagirinathan-k/awesome-ai-agents-2026) | 教程/tutorial | education-list | resource-index | 69 | unknown |
| 11 | [autohandai/code-cli](https://github.com/autohandai/code-cli) | 应用/application | evaluation | benchmark-eval | 110 | 2026-05 |
| 12 | [beeevita/evoprompt](https://github.com/beeevita/evoprompt) | 评测/evaluation | prompt-optimization | benchmark-eval | 238 | unknown |
| 13 | [bennettschwartz/membrane](https://github.com/bennettschwartz/membrane) | 评测/evaluation | memory | benchmark-eval | 93 | unknown |
| 14 | [bruno686/visplay](https://github.com/bruno686/visplay) | 评测/evaluation | evolution | benchmark-eval | 57 | unknown |
| 15 | [CE0Alex/skill-hunter](https://github.com/CE0Alex/skill-hunter) | 评测/evaluation | skill | benchmark-eval | 22 | 2026-05 |
| 16 | [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 框架/framework | evolution | framework-runtime | 391 | 2026-05 |
| 17 | [chuacheowhuan/gym-continuousdoubleauction](https://github.com/chuacheowhuan/gym-continuousdoubleauction) | 评测/evaluation | coding-agent | benchmark-eval | 153 | unknown |
| 18 | [circlemind-ai/fast-graphrag](https://github.com/circlemind-ai/fast-graphrag) | 评测/evaluation | memory | benchmark-eval | 3 | unknown |
| 19 | [claw-bench/claw-bench](https://github.com/claw-bench/claw-bench) | 评测/evaluation | evaluation | benchmark-eval | 171 | 2026-05 |
| 20 | [claw-eval/claw-eval](https://github.com/claw-eval/claw-eval) | 评测/evaluation | evaluation | benchmark-eval | 606 | 2026-03 |
| 21 | [ClawBio/ClawBio](https://github.com/ClawBio/ClawBio) | 工具/tool | skill | tool-module | 867 | 2026-05 |
| 22 | [cxcscmu/SkillLearnBench](https://github.com/cxcscmu/SkillLearnBench) | 评测/evaluation | skill | benchmark-eval | 21 | 2026-05 |
| 23 | [darkrishabh/agent-skills-eval](https://github.com/darkrishabh/agent-skills-eval) | 评测/benchmark | evaluation | benchmark-eval | 34 | 2026-05 |
| 24 | [DEEP-PolyU/Awesome-GraphMemory](https://github.com/DEEP-PolyU/Awesome-GraphMemory) | 教程/tutorial | memory | resource-index | 273 | 2026-05 |
| 25 | [deep-polyu/awesome-graphrag](https://github.com/deep-polyu/awesome-graphrag) | 教程/tutorial | memory | resource-index | 2 | 2026-04 |
| 26 | [DSAIL-Memory/EvoMemBench](https://github.com/DSAIL-Memory/EvoMemBench) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-05 |
| 27 | [emson/elfmem](https://github.com/emson/elfmem) | 框架/framework | memory | benchmark-eval | 53 | 2026-05 |
| 28 | [enajx/es](https://github.com/enajx/es) | 评测/evaluation | evolution | benchmark-eval | 7 | unknown |
| 29 | [evalstate/fast-agent](https://github.com/evalstate/fast-agent) | 框架/framework | framework | framework-runtime | 3800 | 2026-05 |
| 30 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 框架/framework | memory | framework-runtime | 5600 | 2026-05 |
| 31 | [evermind-ai/everos?tab=readme-ov-file](https://github.com/evermind-ai/everos?tab=readme-ov-file) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2025-02 |
| 32 | [faveos8758/reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts) | 评测/evaluation | evaluation | framework-runtime | 20 | unknown |
| 33 | [feesuu/cluerag](https://github.com/feesuu/cluerag) | 评测/evaluation | memory | benchmark-eval | 26 | unknown |
| 34 | [garrus800-stack/genesis-agent](https://github.com/garrus800-stack/genesis-agent) | 评测/evaluation | evaluation | benchmark-eval | 24 | unknown |
| 35 | [GeniusHTX/SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench) | 评测/evaluation | evaluation | benchmark-eval | 42 | 2026-05 |
| 36 | [gensi-thuair/flex](https://github.com/gensi-thuair/flex) | 论文代码/paper-code | evaluation | benchmark-eval | 78 | 2026-05 |
| 37 | [gepa-ai/optimize-anything-artifact](https://github.com/gepa-ai/optimize-anything-artifact) | 评测/evaluation | prompt-optimization | benchmark-eval | 0 | unknown |
| 38 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 工具/tool | memory | agent-evolution-infra | 105000 | 2026-05 |
| 39 | [greyhaven-ai/autocontext](https://github.com/greyhaven-ai/autocontext) | 框架/framework | memory | benchmark-eval | 1 | 2026-04 |
| 40 | [gustolychees/contribai](https://github.com/gustolychees/contribai) | 评测/evaluation | evaluation | benchmark-eval | 0 | unknown |
| 41 | [hkuds/ai-researcher](https://github.com/hkuds/ai-researcher) | 评测/evaluation | research-agent | benchmark-eval | 5 | unknown |
| 42 | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 框架/framework | evolution | framework-runtime | 6300 | 2026-05 |
| 43 | [huggingface/skills](https://github.com/huggingface/skills) | 教程/tutorial | skill | resource-index | 10600 | 2026-05 |
| 44 | [huggingface/smolagents](https://github.com/huggingface/smolagents) | 评测/evaluation | evaluation | benchmark-eval | 27 | unknown |
| 45 | [HUST-AI-HYZ/MemoryAgentBench](https://github.com/HUST-AI-HYZ/MemoryAgentBench) | 评测/evaluation | memory | benchmark-eval | 341 | 2026-05 |
| 46 | [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) | 评测/evaluation | evaluation | benchmark-eval | 135 | 2026-05 |
| 47 | [iii-experimental/agentos](https://github.com/iii-experimental/agentos) | 框架/framework | evolution | framework-runtime | 145 | 2026-05 |
| 48 | [ilearn-lab/evoharness](https://github.com/ilearn-lab/evoharness) | 框架/framework | evaluation | benchmark-eval | 52 | 2026-05 |
| 49 | [imgeorgiev/pwm](https://github.com/imgeorgiev/pwm) | 评测/evaluation | evaluation | benchmark-eval | 68 | unknown |
| 50 | [inclusionai/aworld](https://github.com/inclusionai/aworld) | 评测/evaluation | evaluation | benchmark-eval | 1 | unknown |
| 51 | [internlm/polar](https://github.com/internlm/polar) | 评测/evaluation | evaluation | benchmark-eval | 163 | unknown |
| 52 | [jarvis-xs/se-agent](https://github.com/jarvis-xs/se-agent) | 评测/evaluation | evaluation | framework-runtime | 274 | 2026-05 |
| 53 | [jcartu/rasputin-memory](https://github.com/jcartu/rasputin-memory) | 工具/tool | memory | memory-substrate | 33 | 2026-05 |
| 54 | [jennyzzt/dgm](https://github.com/jennyzzt/dgm) | 应用/application | evaluation | benchmark-eval | 2 | 2026-05 |
| 55 | [JordanMcCann/agentmemory](https://github.com/JordanMcCann/agentmemory) | 评测/evaluation | memory | benchmark-eval | 23 | 2026-05 |
| 56 | [jscraik/Agent-Skills](https://github.com/jscraik/Agent-Skills) | 工具/tool | skill | tool-module | 4 | 2026-05 |
| 57 | [kadubon/audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist) | 评测/evaluation | research-agent | benchmark-eval | 0 | 2026-03 |
| 58 | [kayba-ai/agentic-context-engine](https://github.com/kayba-ai/agentic-context-engine) | 框架/framework | evolution | agent-evolution-infra | 2200 | 2026-05 |
| 59 | [kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve) | 应用/application | evolution | benchmark-eval | 194 | 2026-05 |
| 60 | [Kenotic-Labs/ATANT](https://github.com/Kenotic-Labs/ATANT) | 评测/evaluation | evaluation | benchmark-eval | 3 | 2026-05 |
| 61 | [kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory) | 工具/tool | memory | benchmark-eval | 675 | 2026-05 |
| 62 | [knowledgexlab/muse](https://github.com/knowledgexlab/muse) | 应用/application | evaluation | benchmark-eval | 88 | 2026-05 |
| 63 | [labicon/curricullm](https://github.com/labicon/curricullm) | 评测/evaluation | evaluation | benchmark-eval | 27 | unknown |
| 64 | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | 评测/evaluation | coding-agent | benchmark-eval | 9 | unknown |
| 65 | [linear95/spag](https://github.com/linear95/spag) | 评测/evaluation | evaluation | benchmark-eval | 144 | 2026-05 |
| 66 | [llmprogram/textgrad](https://github.com/llmprogram/textgrad) | 评测/evaluation | coding-agent | benchmark-eval | 0 | 2026-05 |
| 67 | [lyl1015/jarvisevo](https://github.com/lyl1015/jarvisevo) | 评测/evaluation | evaluation | benchmark-eval | 401 | 2026-05 |
| 68 | [matebenyovszky/healing-agent](https://github.com/matebenyovszky/healing-agent) | 评测/evaluation | evaluation | benchmark-eval | 23 | 2024-Q1 |
| 69 | [matrixorigin/Memoria](https://github.com/matrixorigin/Memoria) | 工具/tool | memory | tool-module | 271 | 2026-05 |
| 70 | [maxnorm8650/medagentsim](https://github.com/maxnorm8650/medagentsim) | 评测/evaluation | evolution | research-artifact | 163 | 2026-05 |
| 71 | [meituan/EvoCUA](https://github.com/meituan/EvoCUA) | 论文代码/paper-code | evolution | research-artifact | 317 | 2026-05 |
| 72 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 工具/tool | memory | tool-module | 56500 | 2026-05 |
| 73 | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | 评测/evaluation | memory | benchmark-eval | 33 | 2026-05 |
| 74 | [MemoriLabs/Memori](https://github.com/memorilabs/memori) | 工具/tool | memory | tool-module | 14900 | 2026-05 |
| 75 | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | 工具/tool | memory | memory-substrate | 52800 | 2026-05 |
| 76 | [MemTensor/HaluMem](https://github.com/MemTensor/HaluMem) | 评测/evaluation | memory | benchmark-eval | 138 | 2025-11 |
| 77 | [memtensor/memos](https://github.com/memtensor/memos) | 工具/tool | memory | memory-runtime | 9400 | 2026-05 |
| 78 | [memtensor/memrl](https://github.com/memtensor/memrl) | 论文代码/paper-code | evolution | research-artifact | 117 | 2026-05 |
| 79 | [memvid/memvid](https://github.com/memvid/memvid) | 工具/tool | memory | memory-substrate | 12400 | 2026-05 |
| 80 | [mfolsom/rlvr-world](https://github.com/mfolsom/rlvr-world) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 81 | [mgechev/skillgrade](https://github.com/mgechev/skillgrade) | 评测/evaluation | evaluation | benchmark-eval | 490 | 2026-05 |
| 82 | [microsoft/STATE-Bench](https://github.com/microsoft/STATE-Bench) | 评测/evaluation | memory | benchmark-eval | 25 | 2026-05 |
| 83 | [microsoft/waza](https://github.com/microsoft/waza) | 评测/evaluation | skill | benchmark-eval | 904 | 2026-05 |
| 84 | [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) | 评测/evaluation | evaluation | benchmark-eval | 861 | 2026-05 |
| 85 | [modelscope/agentjet](https://github.com/modelscope/agentjet) | 评测/evaluation | evaluation | framework-runtime | 208 | 2026-05 |
| 86 | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | 框架/framework | memory | framework-runtime | 262 | 2026-05 |
| 87 | [neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness) | 框架/framework | evaluation | benchmark-eval | 507 | 2026-05 |
| 88 | [ngoodman/metaprompt](https://github.com/ngoodman/metaprompt) | 评测/evaluation | prompt-optimization | benchmark-eval | 88 | 2026-05 |
| 89 | [nikivanstein/llamea](https://github.com/nikivanstein/llamea) | 评测/evaluation | evaluation | benchmark-eval | 105 | 2026-05 |
| 90 | [NirDiamant/Agent_Memory_Techniques](https://github.com/NirDiamant/Agent_Memory_Techniques) | 教程/tutorial | memory | resource-index | 412 | 2026-05 |
| 91 | [noahshinn/reflexion](https://github.com/noahshinn/reflexion) | 论文代码/paper-code | memory | benchmark-eval | 3 | 2026-05 |
| 92 | [noahshinn/reflexion-draft](https://github.com/noahshinn/reflexion-draft) | 框架/framework | memory | benchmark-eval | 388 | 2026-05 |
| 93 | [noahshinn024/reflexion-human-eval](https://github.com/noahshinn024/reflexion-human-eval) | 评测/evaluation | memory | benchmark-eval | 3 | 2026-05 |
| 94 | [openclaw/clawbench](https://github.com/openclaw/clawbench) | 评测/evaluation | evaluation | benchmark-eval | 97 | 2026-04 |
| 95 | [opendatabox/workspace-bench](https://github.com/opendatabox/workspace-bench) | 评测/evaluation | evaluation | benchmark-eval | 14 | 2025-05 |
| 96 | [OpenHands/benchmarks](https://github.com/OpenHands/benchmarks) | 评测/evaluation | evaluation | benchmark-eval | 85 | 2026-05 |
| 97 | [openmemind/memind](https://github.com/openmemind/memind) | 框架/framework | memory | benchmark-eval | 787 | 2026-05 |
| 98 | [opentracy/opentracy](https://github.com/opentracy/opentracy) | 评测/evaluation | evaluation | benchmark-eval | 101 | 2026-05 |
| 99 | [os-copilot/os-copilot](https://github.com/os-copilot/os-copilot) | 框架/framework | evaluation | benchmark-eval | 1 | 2024-Q1 |
| 100 | [oxen-ai/self-rewarding-language-models](https://github.com/oxen-ai/self-rewarding-language-models) | 评测/evaluation | prompt-optimization | benchmark-eval | 134 | 2026-05 |
| 101 | [paradigmxyz/evmbench](https://github.com/paradigmxyz/evmbench) | 评测/evaluation | evaluation | benchmark-eval | 421 | 2026-05 |
| 102 | [pathway/alphaxos](https://github.com/pathway/alphaxos) | 评测/evaluation | evaluation | benchmark-eval | 12 | 2026-05 |
| 103 | [pgg3/evotoolkit](https://github.com/pgg3/evotoolkit) | 评测/evaluation | evaluation | benchmark-eval | 68 | 2026-03 |
| 104 | [pinchbench/skill](https://github.com/pinchbench/skill) | 评测/evaluation | evaluation | benchmark-eval | 1200 | 2026-05 |
| 105 | [polarseeker/openseeker](https://github.com/polarseeker/openseeker) | 评测/evaluation | evaluation | benchmark-eval | 711 | 2026-05 |
| 106 | [polya20/textgrad](https://github.com/polya20/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 107 | [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness) | 评测/evaluation | evaluation | benchmark-eval | 289 | 2026-05 |
| 108 | [raphaelchristi/harness-evolver](https://github.com/raphaelchristi/harness-evolver) | 工具/tool | evolution | tool-module | 21 | 2026-05 |
| 109 | [reflexioai/reflexio](https://github.com/reflexioai/reflexio) | 框架/framework | evaluation | benchmark-eval | 220 | 2026-05 |
| 110 | [rendro/sediment](https://github.com/rendro/sediment) | 工具/tool | memory | tool-module | 32 | 2026-05 |
| 111 | [rlhflow/online-rlhf](https://github.com/rlhflow/online-rlhf) | 评测/evaluation | evaluation | benchmark-eval | 545 | 2026-05 |
| 112 | [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) | 评测/evaluation | evaluation | benchmark-eval | 232 | 2026-05 |
| 113 | [rllm-org/rllm](https://github.com/rllm-org/rllm) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2026-05 |
| 114 | [rmanluo/gfm-rag](https://github.com/rmanluo/gfm-rag) | 评测/evaluation | memory | benchmark-eval | 259 | 2026-04 |
| 115 | [ronit26mehta/argus-ai-debate](https://github.com/ronit26mehta/argus-ai-debate) | 框架/framework | framework | framework-runtime | 3 | unknown |
| 116 | [rucbm/laser](https://github.com/rucbm/laser) | 评测/evaluation | evaluation | benchmark-eval | 36 | 2026-05 |
| 117 | [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) | 评测/evaluation | research-agent | benchmark-eval | 13 | 2026-05 |
| 118 | [sebastianbrzustowicz/robot-sumo-rl](https://github.com/sebastianbrzustowicz/robot-sumo-rl) | 评测/evaluation | evaluation | benchmark-eval | 18 | 2026-05 |
| 119 | [seetrex-ai/laimark](https://github.com/seetrex-ai/laimark) | 评测/evaluation | evaluation | benchmark-eval | 4 | 2026-04 |
| 120 | [self-play-language-models/spin-peft](https://github.com/self-play-language-models/spin-peft) | 评测/evaluation | evaluation | benchmark-eval | 4 | 2026-05 |
| 121 | [sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill) | 框架/framework | evolution | agent-evolution-infra | 798 | 2026-05 |
| 122 | [sentrux/sentrux](https://github.com/sentrux/sentrux) | 框架/framework | evaluation | benchmark-eval | 2 | 2026-05 |
| 123 | [ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym) | 评测/evaluation | evaluation | benchmark-eval | 1200 | 2026-05 |
| 124 | [sethkarten/continual-harness](https://github.com/sethkarten/continual-harness) | 评测/evaluation | evaluation | benchmark-eval | 106 | 2026-05 |
| 125 | [shaoshuai0605/misevolution](https://github.com/shaoshuai0605/misevolution) | 评测/evaluation | evolution | tool-module | 76 | 2026-05 |
| 126 | [shareAI-lab/kbench](https://github.com/shareAI-lab/kbench) | 评测/evaluation | evaluation | benchmark-eval | 10 | 2026-05 |
| 127 | [shehrum/grf-self-play](https://github.com/shehrum/grf-self-play) | 评测/evaluation | research-agent | benchmark-eval | 4 | 2026-05 |
| 128 | [siddharth-1001/agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness) | 框架/framework | evaluation | framework-runtime | 20 | 2026-05 |
| 129 | [Signet-AI/signetai](https://github.com/Signet-AI/signetai) | 工具/tool | memory | memory-substrate | 167 | 2026-05 |
| 130 | [SJTU-IPADS/SkVM](https://github.com/SJTU-IPADS/SkVM) | 框架/framework | skill | framework-runtime | 480 | 2026-05 |
| 131 | [spillwavesolutions/agent-brain](https://github.com/spillwavesolutions/agent-brain) | 评测/evaluation | evaluation | benchmark-eval | 101 | 2026-03 |
| 132 | [studio-intrinsic/turbo-gepa](https://github.com/studio-intrinsic/turbo-gepa) | 评测/evaluation | prompt-optimization | benchmark-eval | 3 | 2026-05 |
| 133 | [sunzey/seagent](https://github.com/sunzey/seagent) | 论文代码/paper-code | evaluation | benchmark-eval | 246 | 2026-05 |
| 134 | [swe-bench/swe-bench](https://github.com/swe-bench/swe-bench) | 评测/evaluation | evaluation | benchmark-eval | 5 | 2026-05 |
| 135 | [synaptent/aragora](https://github.com/synaptent/aragora) | 评测/evaluation | memory | benchmark-eval | 7 | 2026-05 |
| 136 | [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 421 | 2026-05 |
| 137 | [tfatykhov/awesome-agent-memory](https://github.com/tfatykhov/awesome-agent-memory) | 教程/tutorial | memory | resource-index | 0 | 2026-05 |
| 138 | [thesdes/textgrad](https://github.com/thesdes/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 139 | [thu-nics/mars](https://github.com/thu-nics/mars) | 评测/evaluation | evaluation | benchmark-eval | 48 | 2026-05 |
| 140 | [thudm/webrl](https://github.com/thudm/webrl) | 应用/application | evolution | benchmark-eval | 524 | 2026-05 |
| 141 | [thuml/rlvr-world](https://github.com/thuml/rlvr-world) | 评测/evaluation | evaluation | benchmark-eval | 251 | 2026-05 |
| 142 | [tiger-ai-lab/openresearcher](https://github.com/tiger-ai-lab/openresearcher) | 评测/evaluation | research-agent | benchmark-eval | 756 | 2026-05 |
| 143 | [trillskillz/clawdmarket](https://github.com/trillskillz/clawdmarket) | 应用/application | evolution | application-demo | 2 | 2026-05 |
| 144 | [trustgraph-ai/trustgraph](https://github.com/trustgraph-ai/trustgraph) | 框架/framework | memory | framework-runtime | 2100 | 2026-05 |
| 145 | [tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver) | 框架/framework | evaluation | benchmark-eval | 14 | unknown |
| 146 | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | 评测/evaluation | memory | benchmark-eval | 43 | 2026-05 |
| 147 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 框架/framework | memory | framework-runtime | 14400 | 2026-05 |
| 148 | [vicsanity623/pyob](https://github.com/vicsanity623/pyob) | 评测/evaluation | evaluation | benchmark-eval | 2 | 2026-05 |
| 149 | [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill) | 论文代码/paper-code | evolution | agent-evolution-infra | 484 | 2026-05 |
| 150 | [wazionapps/nexo](https://github.com/wazionapps/nexo) | 工具/tool | memory | memory-substrate | 22 | 2026-05 |
| 151 | [werner-duvaud/muzero-general](https://github.com/werner-duvaud/muzero-general) | 评测/evaluation | evaluation | benchmark-eval | 2 | 2026-05 |
| 152 | [workofart/selfplay-tictactoe](https://github.com/workofart/selfplay-tictactoe) | 评测/evaluation | evaluation | benchmark-eval | 0 | early |
| 153 | [x1aox1a/word2world](https://github.com/x1aox1a/word2world) | 评测/evaluation | evaluation | benchmark-eval | 62 | 2026-05 |
| 154 | [xai-liacs/llamea](https://github.com/xai-liacs/llamea) | 评测/evaluation | evaluation | benchmark-eval | 105 | 2026-05 |
| 155 | [xanther-ai/xce-benchmarks](https://github.com/xanther-ai/xce-benchmarks) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 156 | [xizaoqu/worldmem](https://github.com/xizaoqu/worldmem) | 评测/evaluation | memory | benchmark-eval | 359 | 2025-11 |
| 157 | [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) | 评测/evaluation | evaluation | benchmark-eval | 2900 | 2026-05 |
| 158 | [xmudeeplit/awesome-self-evolving-agents](https://github.com/xmudeeplit/awesome-self-evolving-agents) | 工具/tool | evolution | resource-index | 181 | 2026-05 |
| 159 | [xuchen-li/llm-arxiv-daily](https://github.com/xuchen-li/llm-arxiv-daily) | 教程/tutorial | evaluation | resource-index | 144 | 2026-05 |
| 160 | [yinbo0927/fate](https://github.com/yinbo0927/fate) | 评测/evaluation | evolution | benchmark-eval | 16 | unknown |
| 161 | [ynulihao/AgentSkillOS](https://github.com/ynulihao/AgentSkillOS) | 工具/tool | skill | skill-orchestration | 415 | 2026-05 |
| 162 | [yyyujintang/Awesome-Agent-Memory-Papers](https://github.com/yyyujintang/Awesome-Agent-Memory-Papers) | 教程/tutorial | memory | resource-index | 0 | 2026-05 |
| 163 | [zaixizhang/stella](https://github.com/zaixizhang/stella) | 应用/application | evaluation | benchmark-eval | 141 | 2026-05 |
| 164 | [zanwenfu/auto-code-rover](https://github.com/zanwenfu/auto-code-rover) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 165 | [zbinxp/deer-flow](https://github.com/zbinxp/deer-flow) | 评测/evaluation | memory | benchmark-eval | 0 | 2026-02 |
| 166 | [zed-industries/zed](https://github.com/zed-industries/zed) | 评测/evaluation | evaluation | benchmark-eval | 83 | 2026-05 |
| 167 | [zhang677/accelopt](https://github.com/zhang677/accelopt) | 论文代码/paper-code | evaluation | benchmark-eval | 43 | unknown |
| 168 | [zhangfengcdt/memoir](https://github.com/zhangfengcdt/memoir) | 工具/tool | memory | memory-substrate | 549 | 2026-05 |
| 169 | [zhentingwang/dump](https://github.com/zhentingwang/dump) | 评测/evaluation | evaluation | benchmark-eval | 33 | 2026-05 |
| 170 | [zixuanfeng-nyu/textgrad](https://github.com/zixuanfeng-nyu/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 0 | 2026-05 |
| 171 | [zjunlp/knowself](https://github.com/zjunlp/knowself) | 评测/evaluation | evaluation | benchmark-eval | 93 | 2024-Q3 |
| 172 | [zjunlp/worldmind](https://github.com/zjunlp/worldmind) | 评测/evaluation | evaluation | benchmark-eval | 35 | 2026-05 |
| 173 | [zou-group/textgrad](https://github.com/zou-group/textgrad) | 评测/evaluation | evaluation | benchmark-eval | 3 | 2026-05 |

</details>

## 数据管线与仓库维护

```mermaid
flowchart LR
  RAW["raw-* 原始素材"] --> PROCESSED["analysis / research / projects / paper-reviews 加工分析"]
  PROCESSED --> WORK["survey / paper-drafts / site / scripts 工作产物"]
  WORK --> RESULTS["reports / output / site/public / PDFs 结果输出"]
  OPS["README / AGENTS / docs/indexes 管理规则"] -. governs .-> RAW
  OPS -. governs .-> PROCESSED
  OPS -. governs .-> WORK
  OPS -. governs .-> RESULTS
```

| Layer | Canonical paths | 用途 |
|---|---|---|
| Raw evidence | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` | 来源 capture、时间戳、原始公开证据 |
| Processed analysis | `analysis/`, `research/`, `projects/`, `paper-reviews/`, `papers/`, `cc-materials/` | 分类、交叉分析、项目 model card、论文 review |
| Work artifacts | `survey/`, `paper-drafts/`, `site/`, `scripts/`, `data-engine/` | 综述、论文草稿、站点源码、生成器、图表、中间工作 |
| Results | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf`, `survey/latex/main.pdf`, `site/dist/` | 可发布报告、PDF、静态站点输出、下载资源 |
| Ops | `docs/`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md`, `CONTENT_INDEX.md` | 规则、索引、发布检查、协作手册 |

## 迭代闭环

每次人工迭代或定时任务结束前，都要把本轮有价值变化落到读者入口和发布面：更新相关 `README.md` / `README-ZH.md` / `README-EN.md`、`CONTENT_INDEX.md`、`docs/indexes/`、`site/src/`、`site/public/reports/`、SEO/站点公开入口和必要图表数据。

提交前先检查 `git status`，只提交本轮相关改动，保护无关用户改动。没有变化可提交时，也要明确说明 clean state；有变化则跑对应验证并主动提交。

## 必要验证

根据改动范围选择命令。README / index 变化至少刷新索引并验证站点构建。

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd survey/latex && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

## 公开入口

- GitHub repository: <https://github.com/Shiyao-Huang/awesome-agent-evolution>
- GitHub Pages: <https://shiyao-huang.github.io/awesome-agent-evolution/>
- Project pages: <https://shiyao-huang.github.io/awesome-agent-evolution/projects/>
- Research page: <https://shiyao-huang.github.io/awesome-agent-evolution/research/>
- Graph page: <https://shiyao-huang.github.io/awesome-agent-evolution/graph/>

## 引用与协议

引用、转载、改编或在论文/网站/项目中使用本仓库的原创分析、分类、索引和图表时，请注明当前 repo：

Self Evolve / Awesome Self-Evolving AI Agents, aha team, <https://github.com/Shiyao-Huang/awesome-agent-evolution>

推荐 BibTeX：

```bibtex
@misc{aha_team_awesome_agent_evolution_2026,
  title        = {Awesome Self-Evolving AI Agents: AI Agent Self-Evolution Index and Survey},
  author       = {{aha team}},
  year         = {2026},
  howpublished = {\url{https://github.com/Shiyao-Huang/awesome-agent-evolution}},
  note         = {Self Evolve research pipeline by aha team}
}
```
