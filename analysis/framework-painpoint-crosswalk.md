# 框架→痛点交叉映射：repo星标/技术栈 vs Mom Test

- content_timestamp: 2026-05-21
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- scope: foundation-data cross-validation, not survey prose
- output: `analysis/framework-painpoint-crosswalk.md` + `analysis/framework-painpoint-crosswalk.csv`

## 0. 方法与证据边界

本报告响应 Master 的“基础数据优先、先交叉验证后写综述”要求，交叉读取：`analysis/repo-techstack-cross-analysis.csv`（348 个 raw-github repo）、`mom-test-findings-*-ZH.md`（97 个痛点）、`raw-social/` 与 `raw-blogs/` 的本地 Markdown/JSON 快照。仓库根目录未发现 `SYSTEM.md`/`AGENTS.md` 与 `wiki/log.md`，因此没有额外历史 lesson 需要引用。

证据等级分三类：**直接证据**来自 Mom Test 痛点原文；**结构证据**来自 repo 分类、README 文件结构、star/语言/时间切片字段；**关键词证据**来自 raw-social/raw-blogs 的本地文本命中。由于 repo star 字段在部分行缺失或被 scrape 截断，本文不把 star 当成唯一价值指标，只用于“注意力/采用信号”的弱代理。

## 1. Repo生态快照

- raw-github 记录数：348；star 总和（合并 techstack CSV 与 raw-github-index 的较高本地字段）：162569；stars>0 的记录：315；stars=0/缺失的记录：33。
- star 字段为本地采集快照，不代表实时 GitHub；当 `repo-techstack-cross-analysis.csv` 与 `raw-github-index.md` 不一致时，本报告采用两者较高值作为注意力代理，并把不一致列为后续数据清洗缺口。
- 类别Top：evaluation:81(23.3%)；evolution:58(16.7%)；memory:56(16.1%)；framework:38(10.9%)；education-list:35(10.1%)；research-agent:30(8.6%)；prompt-optimization:26(7.5%)；coding-agent:17(4.9%)；workflow-automation:6(1.7%)；safety:1(0.3%)
- 技术栈Top：Markdown:197(56.6%)；Python:123(35.3%)；Unknown:14(4.0%)；TypeScript/JavaScript:6(1.7%)；Shell:6(1.7%)；TypeScript:1(0.3%)；Jupyter Notebook:1(0.3%)
- 时间切片Top：2026-05:186；unknown:109；2026-04:8；2024-Q2:7；2026-03:6；2024-Q3:4；2025-11:4；2026-01:3；early:3；2025-05:3

| Star区间 | Repo数 | 解释 |
|---|---:|---|
| ≥10000 | 3 | 极高可见项目，最容易主导生态叙事 |
| 1000-9999 | 20 | 高可见项目，常被当作趋势代表 |
| 100-999 | 116 | 中等关注项目，常是论文代码/评测/细分框架 |
| 10-99 | 104 | 长尾实践与早期探索 |
| 1-9 | 72 | 低可见实验/教育项目 |
| 0或缺失 | 33 | 需要补全 star 或视为未知 |

## 2. Mom Test痛点主题分布

| Theme | Painpoints | Share | 代表痛点 |
|---|---:|---:|---|
| production_reliability | 29 | 29.9% | P001 智能体可靠性 — 智能体在生严环境中过于不可靠; P003 智能体漂移 — 所有智能体在没有持续监控的情况下都会随时间退化; P009 反思与自我批评增加了延迟却未能解决边界情况 |
| evaluation_benchmark | 14 | 14.4% | P008 基准测试只测编程 — 92% 的劳动领域被忽视; P021 自我改进在没有可靠验证器的情况下很快遇到瓶颈; P022 基准测试的古德哈特效应 — 优化测试框架不等于改进智能体 |
| framework_observability | 13 | 13.4% | P004 框架不透明 — 对实际发送的提示词毫无可见性; P005 框架臃肿与部署复杂性; P007 智能体评估体系失效 — 没有衡量智能体质量的好方法 |
| memory_knowledge | 13 | 13.4% | P023 智能体的记忆架构尚未定型 — 操作记忆与学习记忆的区分; P024 智能体进化的记忆需要关系而不仅仅是嵌入; P028 无漂移的持久记忆仍未解决 |
| self_evolution_governance | 11 | 11.3% | P002 自我改进在实践中是神话 — 反馈循环需要人工手动干预; P016 维护优化系统的成本超过了运行智能体的成本; P018 非结构化自我修改导致快速退化 |
| safety_security | 8 | 8.2% | P013 环境隔离与子智能体的静默失败; P025 安全与安保 — 智能体可能被入侵或失控; P033 自学习智能体的奖励函数容易被钻空子 |
| cost_scaling | 5 | 5.2% | P006 失控循环与成本飙升; P020 成本是自我改进系统的主导约束; P081 自主智能体的成本治理问题尚未解决 |
| multi_agent | 3 | 3.1% | P027 不可预测工作流中动态上下文选择缺乏标准; P093 缺乏统一架构 -- 碎片化、不兼容的方法; P096 搜索空间对单 Agent 探索而言过于庞大 |
| other | 1 | 1.0% | P055 提示优化搜索空间太大 |

## 3. 框架/技术栈 → 痛点 crosswalk

| ID | 轴线 | Repo覆盖 | 代表repo（本地stars） | 映射痛点数 | 核心矛盾 |
|---|---|---:|---|---:|---|
| CW-01 | 通用编排/Agent框架 | 43 | lsdefine/genericagent(11837); evoagentx/evoagentx(3023); evoagentx/awesome-self-evolving-agents(2162); os-copilot/os-copilot(1772); langchain-ai/langsmith-sdk(894); wzdnzd/harvester(546); dsifry/metaswarm(272); lingxi-agent/lingxi(243); onevcat/argue(238); spiral-rl/spiral(190) | 47 | 框架/编排 repo 是开源生态的中心之一，但 Mom Test 对应痛点集中在 prompt 不透明、依赖膨胀、部署困难、长链路失败和成本失控；star/教程热度不能直接转化为生产可信度。 |
| CW-02 | 记忆/状态/持续学习 | 57 | volcengine/openviking(24247); letta-ai/letta(22833); memtensor/memos(9211); noahshinn/reflexion(3155); facebookresearch/hyperagents(2503); greyhaven-ai/autocontext(1012); openmemind/memind(787); graph-rag/graphrag(574); tsinghuac3i/awesome-memory-for-agents(506); viktoraxelsen/memskill(482) | 53 | repo 生态高度押注 memory/RAG/stateful agent，但社区痛点指向记忆污染、检索噪声、上下文膨胀、灾难性遗忘和长期漂移；“有记忆”不等于“可治理地学习”。 |
| CW-03 | 评测/Benchmark/自动验证 | 89 | evermind-ai/everos(5128); sentrux/sentrux(2357); jennyzzt/dgm(2054); os-copilot/os-copilot(1772); aimagelab/mammoth(812); polarseeker/openseeker(711); rlhflow/online-rlhf(545); neosigmaai/auto-harness(508); lyl1015/jarvisevo(401); openautocoder/live-swe-agent(392) | 54 | 评测 repo 数量多，说明社区知道验证重要；但痛点显示公开 benchmark 污染、刷榜、Goodhart 与 production 指标缺口仍未解决。 |
| CW-04 | 自进化/递归改进/代码自修改 | 65 | lsdefine/genericagent(11837); evomap/evolver(7507); hkuds/openspace(6277); aiwaves-cn/agents(5927); nousresearch/hermes-agent-self-evolution(3401); noahshinn/reflexion(3155); evoagentx/evoagentx(3023); evoagentx/awesome-self-evolving-agents(2162); jennyzzt/dgm(2054); yologdev/yoyo-evolve(1764) | 38 | 自进化 repo 和论文代码快速增加，但用户反馈把“自我改进”描述为人工日志审查、prompt重写和回滚；开放式探索必须先有验证器、预算门控和 lineage 审计。 |
| CW-05 | 代码智能体/SWE自动化 | 27 | vision-intelligence-and-robots-group/best-incremental-learning(607); openautocoder/live-swe-agent(392); codexstar69/bug-hunter(380); deepelementlab/clawcode(199); machuangtao/llm-kg4qa(157); chuacheowhuan/gym-continuousdoubleauction(153); claire-labo/evotune(137); hwfengcs/dm-code-agent(135); yennning/awesome-code-as-agent-harness-papers(123); autohandai/code-cli(110) | 56 | 代码智能体最容易用测试驱动闭环，但 HN 痛点显示 API 幻觉、小众/分布外代码失败和补全边界无效代码；SWE-Bench 分数不能覆盖真实仓库维护。 |
| CW-06 | 工具/MCP/安全边界 | 11 | punkpeye/awesome-mcp-servers(87); agenttoolkit/altk-evolve(85); pgg3/evotoolkit(68); developzir/gepa-mcp(48); skills-mcp/skills-mcp(24); shadowrootdev/awesome-agent-skills-mcp(23); privkeyio/evolve-mcp(11); aiming-lab/atp(10); lastmile-ai/mcp-agent(8); rinadelph/agent-mcp(1) | 26 | 工具连接和MCP扩大Agent能力，也扩大 prompt injection、权限越界、成本攻击与外部工具返回污染；安全 repo 目前数量明显少于框架/评测/记忆簇。 |
| CW-07 | 工作流/浏览器/生产自动化 | 8 | volcengine/openviking(24247); n8n-io/n8n(189); browser-use/browser-use(94); mdalamin5/end-to-end-agentic-ai-automation-lab(72); ibm/awesome-agentic-workflow-optimization(51); browser-use/web-ui(16); vercel/workflow(2); ashish-kamboj/agentic-ai-workflows(0) | 50 | 浏览器/流程自动化最接近真实业务，但也最容易遇到动态页面、权限、登录状态、异常恢复和人工接管；demo 成功与生产稳定之间差距最大。 |

### 3.1 直接结论

1. **Star/教程热度与生产信任不是同一指标。** 通用编排框架和多Agent框架在 raw-social/raw-blogs 中曝光高，但 Mom Test 的框架类痛点集中在可观测性、隐藏 prompt、依赖膨胀、部署困难和长链路失败。
2. **评测项目多，production evaluator 少。** `evaluation` 是 repo 生态最大簇之一，但社区仍抱怨 benchmark 污染、刷榜、真实任务缺口和 Goodhart；这说明“有评测仓库”不等于“有可信生产评估”。
3. **记忆/持续学习是实践热点，也是风险热点。** memory/RAG/stateful agent repo 数量大，正对应社区对长期轨迹学习、知识持久化的需求；但灾难性遗忘、记忆污染、检索噪声和漂移仍未被框架层系统解决。
4. **自进化 repo 与论文热点必须绑定审计机制。** DGM/AgentEvolver/Godel/recursive-improve 等项目证明方向活跃，但用户痛点强调反馈循环仍依赖人工，开放式搜索带来成本、错误演化与安全边界问题。
5. **安全/MCP/权限是供给不足的基础设施。** 本地 repo 中 safety 相关项目占比很低，而 raw-social 中 prompt injection、MCP、cost、production 等词高频；供需错配明显。

## 4. 框架级矛盾点清单

| 矛盾类型 | 数据侧信号 | 痛点侧信号 | 需要验证的问题 |
|---|---|---|---|
| 高star/高曝光 vs 弃用或回退 | LangChain/CrewAI/LangGraph/AutoGen 在 raw-social/raw-blogs 命中高；框架类repo可见度高 | P004/P005/P050/P051 等指向隐藏prompt、部署臃肿、调试困难 | 框架是否提供完整prompt/tool trace、状态回放、mock工具、灰度与回滚？ |
| 评测繁荣 vs 真实价值缺口 | evaluation repo 数量最多；SWE-Bench/benchmark 命中高 | P014/P015/P029/P083/P093 指向benchmark污染和刷榜 | 评测是否隔离训练/验证/测试，是否报告线上失败率/人工接管率/成本？ |
| 记忆系统热 vs 长期退化 | memory repo 数量高，Letta/Mem* 等高可见 | P003/P006/P085 指向漂移、轨迹学习缺失、灾难性遗忘 | 记忆是否有版本化、去重、过期、回滚和检索质量评估？ |
| 自修改能力 vs 治理缺失 | evolution repo 多，DGM/Godel/recursive-improve 被反复讨论 | P002/P086/P091/P095/P096 指向人工反馈、错误演化、搜索空间和工具质量控制 | 自修改是否只能在沙箱产生候选，是否有 lineage 和独立 gate evaluator？ |
| 工具连接/MCP扩张 vs 安全/成本 | MCP/tool/cost/prompt injection 关键词高频 | P021/P045/P086/P095 关联权限、攻击面和成本循环 | 工具调用是否最小权限、预算门控、敏感数据隔离和注入测试？ |

## 5. 关键词证据：框架与风险在社区材料中的曝光

| Term | 本地命中数 | 示例文件 | 解读 |
|---|---:|---|---|
| LangChain | 1207 | mom-test-findings-reddit-ZH.md; mom-test-findings-hn-ZH.md; raw-social/0046-langchain-ai-github-io-Agent-Server-Docs-by-LangChain.md | 框架/系统关注度 |
| CrewAI | 1574 | mom-test-findings-reddit-ZH.md; raw-social/0072-agentic-ai-AutoGen-vs-CrewAI-Multi-Agent-Orchestration-Comparison-Agentic-ai.md; raw-social/0554-github-com-BUG-output-pydantic-response-model-leaks-into-agent-tool-calling-loop-causing-tools-to-be.md | 框架/系统关注度 |
| AutoGen | 884 | raw-social/0072-agentic-ai-AutoGen-vs-CrewAI-Multi-Agent-Orchestration-Comparison-Agentic-ai.md; raw-social/0070-arsum-com-AutoGen-vs-CrewAI-Production-Comparison-and-ROI-Fit-AI-Automation-Blog-Arsum.md; raw-social/0071-agentscookbook-com-CrewAI-vs-AutoGen-Which-Multi-Agent-Framework-Should-You-Use-Agents-Coo.md | 框架/系统关注度 |
| LangGraph | 1384 | mom-test-findings-reddit-ZH.md; mom-test-findings-hn-ZH.md; raw-social/0046-langchain-ai-github-io-Agent-Server-Docs-by-LangChain.md | 框架/系统关注度 |
| Letta | 2 | raw-social/boost_batch_01.md; raw-social/0349-Hacker-News-Claude-Code-2-0-Hacker-News.md | 框架/系统关注度 |
| DGM | 593 | mom-test-findings-hn-ZH.md; mom-test-findings-x-ZH.md; raw-social/0070-arsum-com-AutoGen-vs-CrewAI-Production-Comparison-and-ROI-Fit-AI-Automation-Blog-Arsum.md | 框架/系统关注度 |
| Darwin Godel | 45 | mom-test-findings-hn-ZH.md; mom-test-findings-x-ZH.md; raw-social/0139-cnblogs-com-AI-HyperAgents.md | 框架/系统关注度 |
| AgentEvolver | 275 | mom-test-findings-x-ZH.md; raw-social/0150-developer-aliyun-com-AI.md; raw-social/x-twitter-posts.md | 框架/系统关注度 |
| Reflexion | 267 | raw-social/0108-Juejin-AI-Agent-agent-evolution-AI-Agent.md; raw-social/0051-arxiv-org-A-Self-Improving-Coding-Agent.md; raw-social/0032-export-arxiv-org-2303-11366v1-Reflexion-an-autonomous-agent-with-dynamic-memory-and-self-r.md | 框架/系统关注度 |
| SWE-Bench | 221 | mom-test-findings-hn-ZH.md; mom-test-findings-x-ZH.md; raw-social/0175-36kr-com-Meta-Agent-36.md | 风险/验证/生产痛点关注度 |
| browser-use | 5 | raw-social/x_more_3.md; raw-social/0479-X-Twitter-Browser-Use-An-open-source-tool-that-lets-AI-agents-control-web.md; raw-social/raw-social-index.md | 框架/系统关注度 |
| MCP | 5233 | mom-test-findings-reddit-ZH.md; raw-social/0510-arxiv-org-2512-02731-Self-Improving-AI-Agents-through-Self-Play-arXiv.md; raw-social/0528-marktechpost-com-Meet-A-Evolve-The-PyTorch-Moment-For-Agentic-AI-Systems-Replacing-Manual-Tuning-Wit.md | 框架/系统关注度 |
| memory | 1772 | mom-test-findings-x-ZH.md; raw-social/0072-agentic-ai-AutoGen-vs-CrewAI-Multi-Agent-Orchestration-Comparison-Agentic-ai.md; raw-social/0043-langchain-com-LangGraph-Agent-Orchestration-Framework-for-Reliable-AI-Agents.md | 风险/验证/生产痛点关注度 |
| benchmark | 606 | mom-test-findings-reddit-ZH.md; mom-test-findings-hn-ZH.md; raw-social/0139-cnblogs-com-AI-HyperAgents.md | 风险/验证/生产痛点关注度 |
| production | 687 | mom-test-findings-reddit-ZH.md; raw-social/0072-agentic-ai-AutoGen-vs-CrewAI-Multi-Agent-Orchestration-Comparison-Agentic-ai.md; raw-social/0043-langchain-com-LangGraph-Agent-Orchestration-Framework-for-Reliable-AI-Agents.md | 风险/验证/生产痛点关注度 |
| observability | 197 | raw-social/0209-Hacker-News-Ask-HN-How-to-Learn-to-Build-Agentic-AI-Systems-Like-Claude-Code-Hacker-News.md; raw-social/0070-arsum-com-AutoGen-vs-CrewAI-Production-Comparison-and-ROI-Fit-AI-Automation-Blog-Arsum.md; raw-social/more_batch_14.md | 风险/验证/生产痛点关注度 |
| prompt injection | 78 | raw-social/hn-posts.md; raw-social/reddit_hn_batch_03.md; raw-social/0080-makerpulse-ai-MCP-Under-the-Hood-How-the-Model-Context-Protocol-Actually-Wires-Agents-to-E.md | 风险/验证/生产痛点关注度 |
| cost | 563 | raw-social/0070-arsum-com-AutoGen-vs-CrewAI-Production-Comparison-and-ROI-Fit-AI-Automation-Blog-Arsum.md; raw-social/0071-agentscookbook-com-CrewAI-vs-AutoGen-Which-Multi-Agent-Framework-Should-You-Use-Agents-Coo.md; raw-social/0226-Hacker-News-Ask-HN-How-are-you-scaling-AI-agents-reliably-in-production-Hacker-News.md | 风险/验证/生产痛点关注度 |
| self-improv | 1287 | mom-test-findings-reddit-ZH.md; mom-test-findings-hn-ZH.md; mom-test-findings-x-ZH.md | 风险/验证/生产痛点关注度 |

## 6. 可视化字段建议

后续 Survey 数据可视化可以直接读取 `analysis/framework-painpoint-crosswalk.csv`，建议图表字段如下：

| 图表 | X | Y/Color | 用途 |
|---|---|---|---|
| repo类别 vs pain theme 热力图 | repo axis/category | painpoint_count / theme | 展示供给侧技术栈与需求侧痛点是否错配 |
| star band vs contradiction type | star_band | contradiction_type | 展示高可见项目不等于低痛点 |
| framework mention vs painpoint mention | term_count | painpoint_count | 展示社区讨论热度与抱怨密度 |
| time_slice trend | time_slice | repo_count/category | 展示2026年前后哪些方向突然增多 |
| evidence level Sankey | repo_axis | pain_theme | evidence_level | 区分直接证据、结构证据和推断映射 |

## 7. 后续基础数据缺口

- raw-github 的 star/lang/cat 字段仍需统一补全；现有 `repo-techstack-cross-analysis.csv` 比原始 index 更完整，但 star 仍可能被 scrape 截断或为0。
- 需要把 raw-social/raw-blogs 的作者画像补齐后，再评估“框架争议由谁提出、是否为高影响力实践者”。
- 需要把论文review补齐到88篇后，增加“论文声称能力 → repo实现 → 社区痛点”的三方矩阵。
- 当前 crosswalk 把相关性分为直接/结构/关键词证据，不能直接推断因果；需要后续人工复核每个高风险框架的具体issue、release和生产案例。

## Appendix A. Crosswalk详细表

### CW-01 通用编排/Agent框架

- repo_count: 43
- top_repos: lsdefine/genericagent(11837); evoagentx/evoagentx(3023); evoagentx/awesome-self-evolving-agents(2162); os-copilot/os-copilot(1772); langchain-ai/langsmith-sdk(894); wzdnzd/harvester(546); dsifry/metaswarm(272); lingxi-agent/lingxi(243); onevcat/argue(238); spiral-rl/spiral(190)
- mapped_painpoints: P004 P005 P007 P012 P029 P034 P038 P039 P050 P060 P065 P073 P078 P001 P003 P009 P010 P011 P014 P015 P017 P026 P030 P037 P043 P046 P047 P048 P049 P051 P052 P056 P058 P059 P063 P069 P076 P077 P079 P083 P087 P091 P006 P020 P081 P084 P089
- contradiction: 框架/编排 repo 是开源生态的中心之一，但 Mom Test 对应痛点集中在 prompt 不透明、依赖膨胀、部署困难、长链路失败和成本失控；star/教程热度不能直接转化为生产可信度。
- evidence: Mom Test 明确出现 CrewAI 1GB venv、LangChain 抽象掩盖调试、团队回退到显式 API/控制循环等反馈。raw-social/raw-blogs 中 LangChain/CrewAI/LangGraph/AutoGen 提及量高，说明争议与采用并存。

### CW-02 记忆/状态/持续学习

- repo_count: 57
- top_repos: volcengine/openviking(24247); letta-ai/letta(22833); memtensor/memos(9211); noahshinn/reflexion(3155); facebookresearch/hyperagents(2503); greyhaven-ai/autocontext(1012); openmemind/memind(787); graph-rag/graphrag(574); tsinghuac3i/awesome-memory-for-agents(506); viktoraxelsen/memskill(482)
- mapped_painpoints: P023 P024 P028 P036 P044 P053 P057 P061 P064 P066 P068 P074 P080 P002 P016 P018 P019 P041 P071 P082 P085 P094 P095 P097 P001 P003 P009 P010 P011 P014 P015 P017 P026 P030 P037 P043 P046 P047 P048 P049 P051 P052 P056 P058 P059 P063 P069 P076 P077 P079 P083 P087 P091
- contradiction: repo 生态高度押注 memory/RAG/stateful agent，但社区痛点指向记忆污染、检索噪声、上下文膨胀、灾难性遗忘和长期漂移；“有记忆”不等于“可治理地学习”。
- evidence: raw-github inferred category 中 memory 为重要簇；X/Twitter 痛点包含持续学习灾难性遗忘；Reddit/HN 痛点强调轨迹学习和长期规划仍需人工介入。

### CW-03 评测/Benchmark/自动验证

- repo_count: 89
- top_repos: evermind-ai/everos(5128); sentrux/sentrux(2357); jennyzzt/dgm(2054); os-copilot/os-copilot(1772); aimagelab/mammoth(812); polarseeker/openseeker(711); rlhflow/online-rlhf(545); neosigmaai/auto-harness(508); lyl1015/jarvisevo(401); openautocoder/live-swe-agent(392)
- mapped_painpoints: P008 P021 P022 P031 P032 P035 P040 P054 P062 P067 P070 P075 P088 P092 P001 P003 P009 P010 P011 P014 P015 P017 P026 P030 P037 P043 P046 P047 P048 P049 P051 P052 P056 P058 P059 P063 P069 P076 P077 P079 P083 P087 P091 P002 P016 P018 P019 P041 P071 P082 P085 P094 P095 P097
- contradiction: 评测 repo 数量多，说明社区知道验证重要；但痛点显示公开 benchmark 污染、刷榜、Goodhart 与 production 指标缺口仍未解决。
- evidence: Mom Test 有 SWE-Bench/benchmark 污染与刷榜痛点；raw-social 中 benchmark/SWE-Bench 高频；repo 表中 evaluation 是最大类别之一。

### CW-04 自进化/递归改进/代码自修改

- repo_count: 65
- top_repos: lsdefine/genericagent(11837); evomap/evolver(7507); hkuds/openspace(6277); aiwaves-cn/agents(5927); nousresearch/hermes-agent-self-evolution(3401); noahshinn/reflexion(3155); evoagentx/evoagentx(3023); evoagentx/awesome-self-evolving-agents(2162); jennyzzt/dgm(2054); yologdev/yoyo-evolve(1764)
- mapped_painpoints: P002 P016 P018 P019 P041 P071 P082 P085 P094 P095 P097 P008 P021 P022 P031 P032 P035 P040 P054 P062 P067 P070 P075 P088 P092 P013 P025 P033 P042 P045 P072 P086 P090 P006 P020 P081 P084 P089
- contradiction: 自进化 repo 和论文代码快速增加，但用户反馈把“自我改进”描述为人工日志审查、prompt重写和回滚；开放式探索必须先有验证器、预算门控和 lineage 审计。
- evidence: DGM/AgentEvolver/Reflexion/Godel 等在 raw-github 中可见；Mom Test 对应反馈包括反馈循环手动、漂移、错误演化、搜索空间过大、工具质量控制。

### CW-05 代码智能体/SWE自动化

- repo_count: 27
- top_repos: vision-intelligence-and-robots-group/best-incremental-learning(607); openautocoder/live-swe-agent(392); codexstar69/bug-hunter(380); deepelementlab/clawcode(199); machuangtao/llm-kg4qa(157); chuacheowhuan/gym-continuousdoubleauction(153); claire-labo/evotune(137); hwfengcs/dm-code-agent(135); yennning/awesome-code-as-agent-harness-papers(123); autohandai/code-cli(110)
- mapped_painpoints: P001 P003 P009 P010 P011 P014 P015 P017 P026 P030 P037 P043 P046 P047 P048 P049 P051 P052 P056 P058 P059 P063 P069 P076 P077 P079 P083 P087 P091 P008 P021 P022 P031 P032 P035 P040 P054 P062 P067 P070 P075 P088 P092 P004 P005 P007 P012 P029 P034 P038 P039 P050 P060 P065 P073 P078
- contradiction: 代码智能体最容易用测试驱动闭环，但 HN 痛点显示 API 幻觉、小众/分布外代码失败和补全边界无效代码；SWE-Bench 分数不能覆盖真实仓库维护。
- evidence: HN 痛点 P048/P049/P083/P097 等集中在代码可靠性；raw-github 有 swe-agent/open-swe/clawcode/auto-harness 等代码评测与修复工具。

### CW-06 工具/MCP/安全边界

- repo_count: 11
- top_repos: punkpeye/awesome-mcp-servers(87); agenttoolkit/altk-evolve(85); pgg3/evotoolkit(68); developzir/gepa-mcp(48); skills-mcp/skills-mcp(24); shadowrootdev/awesome-agent-skills-mcp(23); privkeyio/evolve-mcp(11); aiming-lab/atp(10); lastmile-ai/mcp-agent(8); rinadelph/agent-mcp(1)
- mapped_painpoints: P013 P025 P033 P042 P045 P072 P086 P090 P006 P020 P081 P084 P089 P004 P005 P007 P012 P029 P034 P038 P039 P050 P060 P065 P073 P078
- contradiction: 工具连接和MCP扩大Agent能力，也扩大 prompt injection、权限越界、成本攻击与外部工具返回污染；安全 repo 目前数量明显少于框架/评测/记忆簇。
- evidence: raw-social 中 prompt injection/MCP/cost 相关材料高频；Mom Test 有开放平台安全漏洞、错误演化和循环烧钱痛点。

### CW-07 工作流/浏览器/生产自动化

- repo_count: 8
- top_repos: volcengine/openviking(24247); n8n-io/n8n(189); browser-use/browser-use(94); mdalamin5/end-to-end-agentic-ai-automation-lab(72); ibm/awesome-agentic-workflow-optimization(51); browser-use/web-ui(16); vercel/workflow(2); ashish-kamboj/agentic-ai-workflows(0)
- mapped_painpoints: P001 P003 P009 P010 P011 P014 P015 P017 P026 P030 P037 P043 P046 P047 P048 P049 P051 P052 P056 P058 P059 P063 P069 P076 P077 P079 P083 P087 P091 P004 P005 P007 P012 P029 P034 P038 P039 P050 P060 P065 P073 P078 P013 P025 P033 P042 P045 P072 P086 P090
- contradiction: 浏览器/流程自动化最接近真实业务，但也最容易遇到动态页面、权限、登录状态、异常恢复和人工接管；demo 成功与生产稳定之间差距最大。
- evidence: Mom Test 生产可靠性是最大类之一；raw-social 生产/可靠性/observability 词频高；repo 生态中 workflow-automation 数量少，说明实践需求大但成熟项目少。

