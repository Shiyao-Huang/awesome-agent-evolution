# Blog Author / Publisher Profiles — Top 50 Enrichment

> Scope: `raw-blogs/` author/source enrichment for Evolver Phase 1. Generated 2026-05-21. Raw captures often store source buckets rather than exact per-post personal authors, so this file profiles the top 50 highest-impact author/publisher entities visible in the dataset and keeps unknown social fields explicit.

## Method and caveats

- Raw JSON records parsed: **1302**; deduplicated by URL/title to **652** records from **653** files.
- Ranking = local frequency plus influence weights for major labs, devrel platforms, technical publishers, and Chinese AI media.
- AnySearch was used for Top 50 entity lookup with queries of the form `ENTITY AI agents author X Twitter LinkedIn GitHub official`.
- Anonymous AnySearch quota was exhausted first; an auto-issued key was used transiently for this run and **not saved** to disk.
- Unknown X/LinkedIn/GitHub fields remain `unknown` unless search hits exposed a plausible URL.

## Top 50 profiles

| # | Entity / author bucket | Local records | Influence score | Influence tier | Website / primary hit | GitHub | X/Twitter | LinkedIn | Confidence | Representative works |
|---:|---|---:|---:|---|---|---|---|---|---|---|
| 1 | YouTube AI agent creators | 121 | 1390 | Tier 1 / high ecosystem reach | https://github.com/darkzOGx/youtube-automation-agent | https://github.com/darkzOGx/youtube-automation-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | 1. Build Your First Agentic AI Workflow in n8n (Step-by ... - YouTube; AI Agent Memory: Building Self-Improving Agents - YouTube; AgentK: Self-Evolving AI Agent Framework Can DO ... - YouTube |
| 2 | Product Hunt AI agent makers | 39 | 570 | Tier 1 / high ecosystem reach | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AgentCrew - Product Information, Latest Updates, and Reviews 2025 / Pr; AgentGPT Product Information and Latest Updates (2025) / Product Hunt; AgentNest.ai |
| 3 | Medium / Towards Data Science authors | 39 | 550 | Tier 1 / high ecosystem reach | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | unknown | medium | A Comprehensive Guide to Collaborative AI Agents in Practice / Towards; AGENTGEN framework : enhancing LLM based Agents planning abilities via; AI Agents from Scratch: Single Agents / Towards Data Science |
| 4 | OpenAI | 11 | 460 | Tier 1 / high ecosystem reach | https://github.com/openai/openai-agents-python | https://github.com/openai/openai-agents-python | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | 15 lessons learned building ChatGPT Apps / OpenAI Developers; API blog posts / OpenAI Developers; Apps SDK blog posts |
| 5 | Anthropic | 11 | 460 | Tier 1 / high ecosystem reach | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/kyledaigle_at-github-universe-we-made-a-bold-commitment-activity-7424864679216197632-S_y_ | medium | Building Effective AI Agents \ Anthropic; Claude's extended thinking \ Anthropic; Developing a computer use model - Anthropic |
| 6 | Zhihu AI agents authors | 30 | 435 | Tier 1 / high ecosystem reach | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | https://github.com/msitarzewski/agency-agents | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | AI Agent 入门指南（四）：Memory 记忆机制综述 - 知乎专栏; Agent 如何“在经验中成长”？深度探讨自进化的关键问题与技术路径; Agentic Reasoning for Large Language Models 综述：基础、进化与 ... |
| 7 | GitHub Blog and repository maintainers | 20 | 430 | Tier 1 / high ecosystem reach | https://github.com/msitarzewski/agency-agents | https://github.com/msitarzewski/agency-agents | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | Baburnana/EvoMaster; EvoAgentX/Awesome-Self-Evolving-Agents - GitHub; EvoAgentX/EvoAgentX |
| 8 | LangChain | 10 | 400 | Tier 1 / high ecosystem reach | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/arcade-ai_github-langchain-aisocial-media-agent-activity-7287175486785421312-CHuT | medium | Announcing LangGraph v0.1 & LangGraph Cloud: Running agents at scale, ; Building LangGraph: Designing an Agent Runtime from first principles; Command: A new tool for building multi-agent architectures in LangGrap |
| 9 | CSDN AI agents authors | 24 | 360 | Tier 1 / high ecosystem reach | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | 2025年AI终极形态！自进化Agent深度综述：多模态融合+自主决策，企业落地避坑指南; 2026年Agent学习之路：GitHub上6大宝藏开源项目; AI Agent的演进之路：从静态模型到自进化数字生命体，全面综述！ |
| 10 | Tencent Cloud Developer authors | 18 | 320 | Tier 1 / high ecosystem reach | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | 2025年AI智能体开发完全指南：10个GitHub顶级教程资源助你从入门 ...; AI Agent 错误修正全流程：Self-Reflect、Critic、Tool Feedback 的协同机制-腾讯云开发者社区-腾讯云; Agent记忆模块：让大模型“记住”你，还能省Token！-腾讯云开发者社区-腾讯云 |
| 11 | DEV Community AI agent authors | 20 | 320 | Tier 1 / high ecosystem reach | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82 | medium | AION – Building an Autonomous AI Agent with Self-Improvement (Python +; Anthropic's Agents Now Self-Improve Between Sessions. Here's How Dream; Building AI Agents with Python: A Practical, Open-Source First Guide - |
| 12 | Weights & Biases | 9 | 310 | Tier 1 / high ecosystem reach | https://github.com/wandb | https://github.com/wandb | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | A primer on building successful AI agents - Weights & Biases; Evaluating AI agent applications - Weights & Biases - Wandb; Evaluating autonomous AI agents for performance, oversight, and ... |
| 13 | Modal Labs | 9 | 300 | Tier 1 / high ecosystem reach | https://github.com/modal-labs | https://github.com/modal-labs | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | Autoscaling Autoresearch: Give your agents elastic GPUs on Modal; Building with Modal and the OpenAI Agents SDK; How Ramp built a full context background coding agent on Modal |
| 14 | Humanloop | 10 | 300 | Tier 1 / high ecosystem reach | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | unknown | medium | 5 LLM Evaluation Tools You Should Know in 2025 - Humanloop; A look back at 2024: How Humanloop has evolved; Building Reliable Agents with Ironclad - Humanloop |
| 15 | Substack AI agent newsletter authors | 16 | 275 | Tier 1 / high ecosystem reach | https://www.linkedin.com/posts/pauliusztin_i-created-an-ai-agent-to-write-a-substack-activity-7420095430807691266-fQ1U | unknown | unknown | https://www.linkedin.com/posts/pauliusztin_i-created-an-ai-agent-to-write-a-substack-activity-7420095430807691266-fQ1U | medium | A Survey of Self-Evolving Agents: On Path to Artificial Super Intellig; AlphaEvolve: Google DeepMind’s Self-Improving Coding Agent; Building A Self Evolving Agent - by Dan Raine |
| 16 | Microsoft | 1 | 270 | Tier 1 / high ecosystem reach | https://www.youtube.com/watch?v=Mc3I3Aua2iw | https://github.com/VoltAgent/awesome-agent-skills | unknown | https://www.linkedin.com/posts/stasbel_breaking-microsoft-just-ended-githubs-activity-7361350346687827968-BehE | medium | Agent Lightning：零侵入强化学习，为任意AI智能体插上优化的翅膀 |
| 17 | Alibaba Cloud Developer authors | 12 | 260 | Tier 1 / high ecosystem reach | https://github.com/alibaba/spring-ai-alibaba | https://github.com/alibaba/spring-ai-alibaba | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AI智能体架构详解：从LLM核心到工具扩展的自主进化之旅-阿里云开发者社区; AgentEvolver：让智能体系统学会「自我进化」 - 阿里云开发者社区; Hermes Agent：能自我进化的AI智能体，不用手写Skill也能持续变强 ... |
| 18 | AWS | 2 | 260 | Tier 1 / high ecosystem reach | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | Agentic AI基础设施实践经验系列（一）：Agent应用开发与 ... - AWS; Agentic AI基础设施实践经验系列（三）：Agent记忆模块的最佳实践 |
| 19 | The New Stack | 10 | 250 | Tier 2 / notable repeated source | https://thenewstack.io/skills-vs-mcp-agent-architecture/ | https://github.com/heilcheng/awesome-agent-skills | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | A Developer's Guide to the AutoGen AI Agent Framework; A Guide To Building Scalable AI Agents - The New Stack; Developer Guide to the CrewAI Agent Framework for Python - The New Sta |
| 20 | Google Cloud | 1 | 250 | Tier 1 / high ecosystem reach | https://github.com/Google-Cloud-AI/agent-platform | https://github.com/Google-Cloud-AI/agent-platform | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | 什么是AI 智能体？定义、应用场景和类型 - Google Cloud |
| 21 | QbitAI | 10 | 210 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/akshay-pachaar_ive-open-sourced-90-projects-on-ai-agents-activity-7423715144322588673-kGZZ | medium | AI玩手机越玩越6！西湖大学发布新智能体：会自我进化的AppAgentX; AI自己写代码让智能体进化！OpenAI的大模型有“人类思想”那味了 – 量子位; Meta华人实习生搞出超级智能体！自己写代码实现自我进化 - 量子位 |
| 22 | Synced / Machine Heart | 10 | 210 | Tier 2 / notable repeated source | https://github.com/synheart-ai/.github | https://github.com/synheart-ai/.github | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | DeepMind星际争霸AI登上Nature，超越99.8％活跃玩家，玩转三大种族 ｜ 机器之心; 多智能体规划 / 机器之心; 强化学习 / 机器之心 |
| 23 | InfoQ China AI writers | 10 | 205 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AI Agents 能自己开发工具自己使用吗？一项智能体自迭代能力研究_AI_Baihai IDP_InfoQ写作社区; Agent 的下一站：基于长期记忆系统 EverOS 的自我演进｜AICon上海 - InfoQ; Evomap如何让Agent从单体智能到群体进化｜QCon北京- InfoQ |
| 24 | arXiv authors | 12 | 190 | Tier 2 / notable repeated source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | A Self-Improving Coding Agent; A Survey of Self-Evolving Agents: On Path to Artificial Super Intellig; AgentEvolver: Towards Efficient Self-Evolving Agent System |
| 25 | CNBlogs AI agent authors | 15 | 150 | Tier 2 / notable repeated source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | AI Agent 如何自我进化？Hermes Agent Self-Evolution 深度解析- iTech; AI Agent系列-Google AI Agent学习-安全与治理：自主进化：持续学习、Agent Gym 与两个前沿案例; Anthropic 实战总结：AI Agent 的 3 种工作流模式，选错代价很大 - iTech - 博客园 |
| 26 | Juejin AI agent authors | 13 | 130 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | unknown | medium | AgentClaw 进化论：从问答工具到自主工业智能体从 L1 的基础问答到 v5 的 OS 级自主操作，记录 Agen - 掘金; EvoAgent(25年2月)：世界模型驱动的面向长期任务的自主进化智能体1. 主要贡献 论文构建了EvoAgent，首 - 掘金; GitHub Daily 第07期 GenericAgent自我进化的AI Agent推荐维度：有深度/前沿 / 晚间 - 掘金 |
| 27 | BAAI / Zhiyuan Hub | 5 | 130 | Tier 2 / notable repeated source | https://github.com/BAAI-Agents/ | https://github.com/BAAI-Agents/ | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | Agent Memory（下）：工作记忆折叠、会话档案化与记忆演化; GPT-5点赞！八大顶尖机构发布「自进化智能体」全面综述; Multi-Agent Evolve: LLM Self-Improve through Co-evolution - 智源社区 |
| 28 | 36Kr AI technology writers | 13 | 130 | Tier 2 / notable repeated source | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | unknown | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AI在线强化学习“边做边学”，斯坦福团队让7B小模型性能飙升，甚至超越GPT-4o-36氪; AI智能体（五）：工作流与智能体-36氪; Meta公布“超级智能”新进展：无需人类，软件Agent即可自我训练-36氪 |
| 29 | WeChat Official Account AI authors | 11 | 110 | Tier 2 / notable repeated source | https://github.com/msitarzewski/agency-agents | https://github.com/msitarzewski/agency-agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | Agent｜吴恩达系列之Agentic Workflow; LLM Agent在交互中学习游戏世界模型和进化行为策略; LLM Agent训练新范式！阿里 AgentEvolver三协同机制，攻克任务稀缺与探索低效难题，性能碾压传统 RL 方法 |
| 30 | Arize AI | 1 | 110 | Tier 2 / notable repeated source | https://github.com/arize-ai/phoenix | https://github.com/arize-ai/phoenix | unknown | unknown | medium | Multiagent Finetuning: A Conversation with Researcher Yilun Du |
| 31 | Contextual AI | 1 | 105 | Tier 2 / notable repeated source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/shubhamsaboo_ai-agents-now-ingest-any-github-repo-context-activity-7315560841154584576-6Obb | medium | Demystifying Agent Memory / Contextual AI |
| 32 | Botpress | 1 | 105 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AI智能体入门构建指南（2026） - Botpress |
| 33 | Leiphone AI writers | 10 | 100 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | DeepMind的智能体成精了，还学会“发脾气”了？ / 雷峰网; PC 正在「物种进化」：英特尔如何用混合 AI 制造你的数字分身？ / 雷峰网; Pokee.ai 朱哲清：用 RL 搭建智能体的「骨骼与神经」/ AI 产品十人谈 / 雷峰网 |
| 34 | Redis | 1 | 100 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AI Agents vs Workflows: When to Use Each |
| 35 | ModelScope | 1 | 100 | Tier 2 / notable repeated source | https://github.com/modelscope/ms-agent | https://github.com/modelscope/ms-agent | unknown | unknown | medium | AgentEvolver：让智能体系统学会「自我进化」 - ModelScope |
| 36 | Volcengine Developer | 1 | 100 | Tier 2 / notable repeated source | https://github.com/volcengine | https://github.com/volcengine | unknown | unknown | medium | LLM之Agent（四十）｜AI Agents（九）：Agentic Memory介绍 - 文章 - 开发者社区 - 火山引擎 |
| 37 | Baidu Baijiahao AI authors | 10 | 100 | Tier 2 / notable repeated source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | 2026年AI Agent开发服务商TOP榜：数商云凭技术沉淀获专业推荐; AI智能体掀起行业风暴，引领未来发展新潮流; Manus能做什么 一句话就能写文章、做PPT、敲代码…… |
| 38 | alphaXiv | 3 | 100 | Tier 2 / notable repeated source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | EvoFlow: Evolving Diverse Agentic Workflows On The Fly / alphaXiv; 从静态模板到动态运行时图：LLM智能体工作流优化综述 - alphaXiv; 大语言模型智能体并非总是忠实的自我演化者 - alphaXiv |
| 39 | MarkTechPost | 1 | 95 | Tier 3 / niche source | https://github.com/Marktechpost | https://github.com/Marktechpost | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | A Coding Guide for Building a Self-Improving AI Agent Using Google's G |
| 40 | IBM | 1 | 95 | Tier 3 / niche source | https://github.com/IBM/watsonx-ai-platform-demos/blob/main/README.md | https://github.com/IBM/watsonx-ai-platform-demos/blob/main/README.md | unknown | unknown | medium | 什么是AI agent (AI 智能体)？ - IBM |
| 41 | SegmentFault authors | 9 | 90 | Tier 3 / niche source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | unknown | medium | GPT-5点赞！八大顶尖机构发布「自进化智能体」全面综述; 人工智能 - AI Agent进化之路：从工具到伙伴，从自动化到自主决策 - 程序新知 - SegmentFault 思否; 人工智能 - AI人格的创世蓝图：深度解构《自衍体》的意识架构设计 - 个人文章 - SegmentFault 思否 |
| 42 | Oracle | 1 | 90 | Tier 3 / niche source | https://github.com/oracle-devrel/oracle-ai-developer-hub/ | https://github.com/oracle-devrel/oracle-ai-developer-hub/ | unknown | https://www.linkedin.com/posts/brunocborges_if-youre-running-ai-agents-that-interact-activity-7455028196103770112-p9NC | medium | 什么是AI Agent？ / Oracle 中国 |
| 43 | OpenReview authors | 2 | 90 | Tier 3 / niche source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | N/A; N/A |
| 44 | Baidu AI Cloud | 1 | 90 | Tier 3 / niche source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | 极简开发新范式：20行代码激活AI Agent，重构软件生产逻辑 |
| 45 | W&B Weave Docs | 1 | 75 | Tier 3 / niche source | https://github.com/wandb/weave | https://github.com/wandb/weave | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | OpenAI Agents SDK - Weights & Biases Documentation |
| 46 | Prompting Guide | 1 | 75 | Tier 3 / niche source | https://github.com/dair-ai/Prompt-Engineering-Guide | https://github.com/dair-ai/Prompt-Engineering-Guide | unknown | unknown | medium | 大语言模型智能体简介 - Prompt Engineering Guide |
| 47 | Emergent Mind | 1 | 75 | Tier 3 / niche source | https://github.com/jim-schwoebel/awesome_ai_agents | https://github.com/jim-schwoebel/awesome_ai_agents | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | AgentEvolver: Autonomous Self-Evolving Agents |
| 48 | AG2 / AutoGen Docs | 1 | 75 | Tier 3 / niche source | https://github.com/ag2ai/ag2 | https://github.com/ag2ai/ag2 | unknown | unknown | medium | Intelligent Agent Handoffs: Routing Control in Multi-Agent Systems wit |
| 49 | jishuzhan.net | 3 | 30 | Tier 3 / niche source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH | medium | Hermes Agent 源码深度解析：自我进化的 AI Agent 框架架构设计 - 技术栈; LangGraph 12. Learning & Adaptation，用 LangGraph 写一个会「改进自己」的智能体（含代码示例） ; 让智能体学会自我改进：从 0 理解 ReflectionAgent 的迭代优化 - 技术栈 |
| 50 | CallSphere AI | 3 | 30 | Tier 3 / niche source | https://github.com/langchain-ai/social-media-agent | https://github.com/langchain-ai/social-media-agent | unknown | https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv | medium | Build a Durable AI Agent with Inngest Async Workflows in 2026 / CallSp; Building Self-Improving Agent Teams: Agents That Learn from Each Other; LlamaIndex Agentic Workflows: Event-Driven Agents Done Right / CallSph |

## Cross-analysis implications for Evolver

1. **Publisher concentration**: YouTube, Product Hunt, Medium/TDS, Zhihu, CSDN, Dev.to, and cloud/devrel blogs dominate volume; Evolver should generate source pages by platform/topic, not only individual author pages.
2. **Lab/vendor authority**: OpenAI, Anthropic, LangChain, Microsoft, AWS, Google Cloud, GitHub, W&B, Modal, and Humanloop are credibility anchors for agent tooling and evaluation narratives.
3. **Personal author gap**: many raw captures lost exact personal author/channel names; Phase 2 should extract YouTube channel metadata, Medium bylines, Substack authors, and Product Hunt makers from page HTML or platform APIs.
4. **Mismatch carryover**: high-distribution tutorials often amplify demos, while Mom Test evidence says demos fail in production. Influence should be weighted by production evidence, benchmark rigor, and repo linkage, not traffic alone.
5. **Bilingual moat**: Chinese sources (Zhihu/CSDN/WeChat/机器之心/量子位/InfoQ/云厂商开发者社区) provide a separate traffic and practitioner-signal channel that English-only Agent Evolution indexes miss.

## Raw AnySearch hit audit

### YouTube AI agent creators
- local_key: `YouTube creator/channel`; local_records: 121; influence_score: 1390; anysearch_status: `ok`
- [darkzOGx/youtube-automation-agent: Fully automated ... - GitHub](https://github.com/darkzOGx/youtube-automation-agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [Open Source Social Media Agent - YouTube](https://www.youtube.com/watch?v=TmTl5FMgkCQ)

### Product Hunt AI agent makers
- local_key: `Product Hunt maker/team`; local_records: 39; influence_score: 570; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub - eason-dev/product-hunt-today: A Twitter bot @ProductHunToday that tweet trending Product Hunt products every day, in short video! · GitHub](https://github.com/eason-dev/product-hunt-today)

### Medium / Towards Data Science authors
- local_key: `Medium/TDS author`; local_records: 39; influence_score: 550; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Low Quality TowardsDataScience & Medium Articles : r/datascience](https://www.reddit.com/r/datascience/comments/kv8hpb/low_quality_towardsdatascience_medium_articles/)
- [My Medium Journey as a Data Scientist: 6 Months, 18 Articles, and ...](https://towardsdatascience.com/my-medium-journey-as-a-data-scientist-6-months-18-articles-and-3-000-followers-c449306e45f7/)

### OpenAI
- local_key: `OpenAI`; local_records: 11; influence_score: 460; anysearch_status: `ok`
- [openai/openai-agents-python: A lightweight, powerful ... - GitHub](https://github.com/openai/openai-agents-python)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [Introducing workspace agents in ChatGPT | OpenAI](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)

### Anthropic
- local_key: `Anthropic`; local_records: 11; influence_score: 460; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [GitHub Integrates Anthropic Claude Code and OpenAI Codex](https://www.linkedin.com/posts/kyledaigle_at-github-universe-we-made-a-bold-commitment-activity-7424864679216197632-S_y_)
- [heilcheng/awesome-agent-skills: Tutorials, Guides and ... - GitHub](https://github.com/heilcheng/awesome-agent-skills)

### Zhihu AI agents authors
- local_key: `知乎作者`; local_records: 30; influence_score: 435; anysearch_status: `ok`
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [msitarzewski/agency-agents: A complete AI agency at your fingertips](https://github.com/msitarzewski/agency-agents)
- [QingJ01/Agent-Zhihu](https://github.com/QingJ01/Agent-Zhihu)

### GitHub Blog and repository maintainers
- local_key: `GitHub author/repository maintainers`; local_records: 20; influence_score: 430; anysearch_status: `ok`
- [msitarzewski/agency-agents: A complete AI agency at your fingertips](https://github.com/msitarzewski/agency-agents)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)

### LangChain
- local_key: `LangChain`; local_records: 10; influence_score: 400; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [LangChain: Observe, Evaluate, and Deploy Reliable AI Agents](https://www.langchain.com/)
- [Arcade.dev - langchain-ai/social-media-agent - LinkedIn](https://www.linkedin.com/posts/arcade-ai_github-langchain-aisocial-media-agent-activity-7287175486785421312-CHuT)

### CSDN AI agents authors
- local_key: `CSDN作者`; local_records: 24; influence_score: 360; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### Tencent Cloud Developer authors
- local_key: `腾讯云开发者作者`; local_records: 18; influence_score: 320; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [msitarzewski/agency-agents: A complete AI agency at your fingertips](https://github.com/msitarzewski/agency-agents)

### DEV Community AI agent authors
- local_key: `Dev.to author`; local_records: 20; influence_score: 320; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Aamer Mihaysi - DEV Community](https://dev.to/o96a)
- [I built an AI agent that sees, thinks, and reasons... And I'm sharing ...](https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82)

### Weights & Biases
- local_key: `wandb.ai`; local_records: 9; influence_score: 310; anysearch_status: `ok`
- [Weights & Biases · GitHub](https://github.com/wandb)
- [Weights & Biases: The AI developer platform](https://wandb.ai/site/)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### Modal Labs
- local_key: `modal.com`; local_records: 9; influence_score: 300; anysearch_status: `ok`
- [Modal Labs](https://github.com/modal-labs)
- [MultiOn: Twitter News Agent | Modal Docs](https://modal.com/docs/examples/multion_news_agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### Humanloop
- local_key: `humanloop.com`; local_records: 10; influence_score: 300; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [GitHub Just Killed the Hardest Part of Building AI Agents - YouTube](https://www.youtube.com/watch?v=yrsGjrAN_w8)
- [Humanloop joins Anthropic](https://humanloop.com/)

### Substack AI agent newsletter authors
- local_key: `Substack author`; local_records: 16; influence_score: 275; anysearch_status: `ok`
- [I created an AI agent to write a Substack post (and it went viral ...](https://www.linkedin.com/posts/pauliusztin_i-created-an-ai-agent-to-write-a-substack-activity-7420095430807691266-fQ1U)
- [Starting with AI agents - Tereza Tizkova](https://terezatizkova.substack.com/p/starting-with-ai-agents)
- [How I Built an AI Agent That Scours the Internet for News I Actually ...](https://aimaker.substack.com/p/ai-agent-automation-news-research-perplexity-make-google-sheets)

### Microsoft
- local_key: `microsoft.com`; local_records: 1; influence_score: 270; anysearch_status: `ok`
- [AI Agents Are Breaking Microsoft GitHub - YouTube](https://www.youtube.com/watch?v=Mc3I3Aua2iw)
- [VoltAgent/awesome-agent-skills: A curated collection of ... - GitHub](https://github.com/VoltAgent/awesome-agent-skills)
- [Microsoft absorbs GitHub, ending its independence - LinkedIn](https://www.linkedin.com/posts/stasbel_breaking-microsoft-just-ended-githubs-activity-7361350346687827968-BehE)

### Alibaba Cloud Developer authors
- local_key: `阿里云开发者作者`; local_records: 12; influence_score: 260; anysearch_status: `ok`
- [GitHub - alibaba/spring-ai-alibaba: Agentic AI Framework for Java Developers · GitHub](https://github.com/alibaba/spring-ai-alibaba)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [alphadl (Liam Liang Ding) · GitHub](https://github.com/alphadl)

### AWS
- local_key: `aws.amazon.com`; local_records: 2; influence_score: 260; anysearch_status: `ok`
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [How I built an AI agent on AWS | Viktoria Semaan posted on the topic](https://www.linkedin.com/posts/semaan_ai-aiforgood-activity-7224031480857997313-98gD)

### The New Stack
- local_key: `thenewstack.io`; local_records: 10; influence_score: 250; anysearch_status: `ok`
- [The case for running AI agents on Markdown files instead of MCP servers - The New Stack](https://thenewstack.io/skills-vs-mcp-agent-architecture/)
- [heilcheng/awesome-agent-skills: Tutorials, Guides and ... - GitHub](https://github.com/heilcheng/awesome-agent-skills)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### Google Cloud
- local_key: `cloud.google.com`; local_records: 1; influence_score: 250; anysearch_status: `ok`
- [Google-Cloud-AI/agent-platform](https://github.com/Google-Cloud-AI/agent-platform)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [generative-ai/gemini/agent-engine at main · GoogleCloudPlatform/generative-ai · GitHub](https://github.com/GoogleCloudPlatform/generative-ai/tree/main/gemini/agent-engine)

### QbitAI
- local_key: `量子位作者`; local_records: 10; influence_score: 210; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Akshay Pachaar posted on the topic - GitHub Repository - LinkedIn](https://www.linkedin.com/posts/akshay-pachaar_ive-open-sourced-90-projects-on-ai-agents-activity-7423715144322588673-kGZZ)
- [hireshBrem/X-ai-agent: Interact with tweets autonomously ... - GitHub](https://github.com/hireshBrem/X-ai-agent)

### Synced / Machine Heart
- local_key: `机器之心作者`; local_records: 10; influence_score: 210; anysearch_status: `ok`
- [synheart-ai/.github](https://github.com/synheart-ai/.github)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [GitHub Just Killed the Hardest Part of Building AI Agents - YouTube](https://www.youtube.com/watch?v=yrsGjrAN_w8)

### InfoQ China AI writers
- local_key: `InfoQ中文作者`; local_records: 10; influence_score: 205; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [How LinkedIn Built Enterprise Multi-Agent AI on Existing Messaging ...](https://www.infoq.com/news/2025/09/linkedin-multi-agent/)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### arXiv authors
- local_key: `arxiv.org`; local_records: 12; influence_score: 190; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### CNBlogs AI agent authors
- local_key: `博客园作者`; local_records: 15; influence_score: 150; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [GitHub - cnblogs/vscode-cnb: A vscode plugin which help write & publish blog post to cnblogs easily · GitHub](https://github.com/cnblogs/vscode-cnb/tree/main)

### Juejin AI agent authors
- local_key: `掘金作者`; local_records: 13; influence_score: 130; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [The #1 AI Agent on GitHub Was Never Read by Its Creator - YouTube](https://www.youtube.com/watch?v=pbUufQKMn6c)
- [hireshBrem/X-ai-agent: Interact with tweets autonomously ... - GitHub](https://github.com/hireshBrem/X-ai-agent)

### BAAI / Zhiyuan Hub
- local_key: `hub.baai.ac.cn`; local_records: 5; influence_score: 130; anysearch_status: `ok`
- [BAAI-Agents](https://github.com/BAAI-Agents/)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### 36Kr AI technology writers
- local_key: `36氪作者`; local_records: 13; influence_score: 130; anysearch_status: `ok`
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [The #1 AI Agent on GitHub Was Never Read by Its Creator - YouTube](https://www.youtube.com/watch?v=pbUufQKMn6c)
- [AI大神李沐走红，连博导们都在追更，还亲自带你逐段读懂论文-36氪](https://m.36kr.com/p/1461818462767880)

### WeChat Official Account AI authors
- local_key: `微信公众号作者`; local_records: 11; influence_score: 110; anysearch_status: `ok`
- [msitarzewski/agency-agents: A complete AI agency at your fingertips](https://github.com/msitarzewski/agency-agents)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### Arize AI
- local_key: `arize.com`; local_records: 1; influence_score: 110; anysearch_status: `ok`
- [Arize-ai/phoenix](https://github.com/arize-ai/phoenix)
- [Arize-ai/twitter-to-newsletter - GitHub](https://github.com/Arize-ai/twitter-to-newsletter)
- [[SF Meetup] Arize AI Builders @ GitHub - March 2025 - YouTube](https://www.youtube.com/watch?v=O0YRz4RvDNI)

### Contextual AI
- local_key: `contextual.ai`; local_records: 1; influence_score: 105; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [GitHub - ContextualAI/contextual-client-node: Node.js client library for Contextual AI · GitHub](https://github.com/ContextualAI/contextual-client-node)
- [How to connect AI to GitHub for free | Shubham Saboo posted on the ...](https://www.linkedin.com/posts/shubhamsaboo_ai-agents-now-ingest-any-github-repo-context-activity-7315560841154584576-6Obb)

### Botpress
- local_key: `botpress.com`; local_records: 1; influence_score: 105; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)

### Leiphone AI writers
- local_key: `雷锋网作者`; local_records: 10; influence_score: 100; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)

### Redis
- local_key: `redis.io`; local_records: 1; influence_score: 100; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [Redis AI incubator](https://redis.io/ai-incubator/)

### ModelScope
- local_key: `modelscope.cn`; local_records: 1; influence_score: 100; anysearch_status: `ok`
- [MS-Agent: a lightweight framework to empower agentic ... - GitHub](https://github.com/modelscope/ms-agent)
- [GitHub - gill-wang/modelscope-agent: ModelScope-Agent: An agent framework connecting models in ModelScope with the world · GitHub](https://github.com/gill-wang/modelscope-agent)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### Volcengine Developer
- local_key: `developer.volcengine.com`; local_records: 1; influence_score: 100; anysearch_status: `ok`
- [Volcengine - GitHub](https://github.com/volcengine)
- [GitHub Just Killed the Hardest Part of Building AI Agents - YouTube](https://www.youtube.com/watch?v=yrsGjrAN_w8)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)

### Baidu Baijiahao AI authors
- local_key: `baijiahao.baidu.com`; local_records: 10; influence_score: 100; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [BAIJIAHAO: Revolutionizing Content Creation with AI | Design Radiant](https://designradiant.com/160259)

### alphaXiv
- local_key: `alphaxiv.org`; local_records: 3; influence_score: 100; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [alphaXiv](https://github.com/alphaXiv)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### MarkTechPost
- local_key: `marktechpost.com`; local_records: 1; influence_score: 95; anysearch_status: `ok`
- [Marktechpost - GitHub](https://github.com/Marktechpost)
- [GitHub - Marktechpost/AI-Agents-Projects-Tutorials](https://github.com/Marktechpost/AI-Agents-Projects-Tutorials)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### IBM
- local_key: `ibm.com`; local_records: 1; influence_score: 95; anysearch_status: `ok`
- [README.md at main · IBM/watsonx-ai-platform-demos](https://github.com/IBM/watsonx-ai-platform-demos/blob/main/README.md)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Build and deploy Agents to watsonx.ai from your IDE | IBM](https://www.ibm.com/new/announcements/build-and-deploy-agents-to-watsonx-ai-from-your-ide)

### SegmentFault authors
- local_key: `segmentfault.com`; local_records: 9; influence_score: 90; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [GitHub Just Killed the Hardest Part of Building AI Agents - YouTube](https://www.youtube.com/watch?v=yrsGjrAN_w8)
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)

### Oracle
- local_key: `oracle.com`; local_records: 1; influence_score: 90; anysearch_status: `ok`
- [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub/)
- [Announcing Oracle Select AI Pre-Built AI Agents | machinelearning](https://blogs.oracle.com/machinelearning/announcing-oracle-select-ai-pre-built-ai-agents)
- [Bruno Borges' Post - LinkedIn](https://www.linkedin.com/posts/brunocborges_if-youre-running-ai-agents-that-interact-activity-7455028196103770112-p9NC)

### OpenReview authors
- local_key: `openreview.net`; local_records: 2; influence_score: 90; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [OpenCodexLabs/openreview-agent](https://github.com/OpenClaudex/openreview-agent)

### Baidu AI Cloud
- local_key: `cloud.baidu.com`; local_records: 1; influence_score: 90; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [msitarzewski/agency-agents: A complete AI agency at your fingertips](https://github.com/msitarzewski/agency-agents)

### W&B Weave Docs
- local_key: `weave-docs.wandb.ai`; local_records: 1; influence_score: 75; anysearch_status: `ok`
- [GitHub - wandb/weave: Weave is a toolkit for developing AI ...](https://github.com/wandb/weave)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [W&B Weave - Weights & Biases Documentation - Wandb](https://docs.wandb.ai/weave)

### Prompting Guide
- local_key: `promptingguide.ai`; local_records: 1; influence_score: 75; anysearch_status: `ok`
- [dair-ai/Prompt-Engineering-Guide - GitHub](https://github.com/dair-ai/Prompt-Engineering-Guide)
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [Prompting AI Agents: Instructions That Actually Work | Field Guide to AI | Field Guide to AI](https://fieldguidetoai.com/guides/prompting-ai-agents)

### Emergent Mind
- local_key: `emergentmind.com`; local_records: 1; influence_score: 75; anysearch_status: `ok`
- [Awesome AI Agents: Tools, Resources, and Projects - GitHub](https://github.com/jim-schwoebel/awesome_ai_agents)
- [About | Emergent Mind AI](https://www.emergentmind.ai/team-1)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)

### AG2 / AutoGen Docs
- local_key: `docs.ag2.ai`; local_records: 1; influence_score: 75; anysearch_status: `ok`
- [ag2ai/ag2: AG2 (formerly AutoGen): The Open-Source ... - GitHub](https://github.com/ag2ai/ag2)
- [microsoft/autogen: A programming framework for agentic AI - GitHub](https://github.com/microsoft/autogen)
- [AutoGen](https://microsoft.github.io/autogen/dev//index.html)

### jishuzhan.net
- local_key: `jishuzhan.net`; local_records: 3; influence_score: 30; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [GitHub AI Agents Repo Goes Viral with 31,000 Stars - LinkedIn](https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH)
- [GitHub Just Killed the Hardest Part of Building AI Agents - YouTube](https://www.youtube.com/watch?v=yrsGjrAN_w8)

### CallSphere AI
- local_key: `callsphere.ai`; local_records: 3; influence_score: 30; anysearch_status: `ok`
- [GitHub - langchain-ai/social-media-agent](https://github.com/langchain-ai/social-media-agent)
- [Built an AI to create Twitter threads in minutes | Lex Federer posted ...](https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv)
- [AI Voice Agents & AI Receptionist | CallSphere — the Content Sphere for Production B2B Voice & Chat](https://callsphere.ai/)

## 5. AnySearch 验证批次 1（高影响力低置信作者桶）

- validation_file: `research/blog-author-profiles-anysearch-validation.md`
- scope: YouTube creator/channel、Medium/TDS author、Dev.to author、Substack author、Zhihu author 五类低置信/平台桶。
- result: YouTube代表作品 `AI Agent Memory: Building Self-Improving Agents` 可归属到 **Microsoft Developer** channel；Dev.to `AION – Building an Autonomous AI Agent...` 可追踪到 dev.to 用户路径 `xynstr`；Dev.to MCP/A2A样例可追踪到 **HeetVekariya** / GitHub `HeetVekariya`；Substack `A Survey of Self-Evolving Agents` 更像 arXiv/ML Anthology论文转述而非独立作者；知乎查询未能唯一定位原作者。
- action: 保留平台桶，不强行虚构个人身份；后续若继续扩展，可把 YouTube cohort 拆出 Microsoft Developer / LangChain 等频道，把 Dev.to cohort 拆出 `xynstr`、`HeetVekariya` 等作者。

## 6. AnySearch verification batch — 2026-05-21

- verification_method: AnySearch `batch_search` with transient API key passed at runtime only; key was not saved to repository or `.env`.
- scope: high-impact Top profiles where social/GitHub/LinkedIn fields affect trust ranking.
- result: official-source evidence found for OpenAI, Anthropic, LangChain, Weights & Biases, Humanloop, Product Hunt, Modal Labs, Tencent Cloud, DEV Community, and arXiv.

| Entity | Verified evidence from AnySearch | Profile update implication |
|---|---|---|
| OpenAI | GitHub org `https://github.com/OpenAI` returned as verified, website `https://openai.com`, ~118k GitHub followers; X tracker result confirms `@OpenAI`. | Mark GitHub and X as source-backed; LinkedIn remains source-backed only if LinkedIn org page result is present in later pass. |
| Anthropic | GitHub org `https://github.com/anthropics/` returned as verified, website `https://anthropic.com`, ~44k followers. | Mark GitHub as verified; keep X/LinkedIn fields evidence-needed unless separately confirmed. |
| LangChain | GitHub org/repo `https://github.com/langchain-ai/langchain` returned with ~133k stars; LinkedIn post result for LangChain appeared. | Mark GitHub and LinkedIn evidence as verified; X still requires direct official result. |
| Weights & Biases | GitHub org `https://github.com/wandb`, GitHub org metadata reports Twitter `@wandb`; LinkedIn product page found. | Mark GitHub/X/LinkedIn as source-backed. |
| Humanloop | GitHub org `https://github.com/humanloop` found with Twitter `@humanloop`; official site says Humanloop joins Anthropic; LinkedIn-related result not official org. | Mark GitHub/X as source-backed; add acquisition/status note; LinkedIn remains evidence-needed. |
| Product Hunt | GitHub org `https://github.com/producthunt`; X `https://x.com/ProductHunt`; LinkedIn company post result with ~80k followers. | Mark GitHub/X/LinkedIn as source-backed. |
| Modal Labs | GitHub org `https://github.com/modal-labs` verified, website `https://modal.com`, Twitter `@modal`; official company page found. | Mark GitHub/X as source-backed; LinkedIn needs direct company URL in later pass. |
| Tencent Cloud | GitHub org `https://github.com/tencentcloud` verified; LinkedIn company page `https://www.linkedin.com/company/tencent-cloud`; official cloud sites found. | Mark GitHub/LinkedIn as source-backed. |
| DEV Community | Official `https://dev.to/`, LinkedIn showcase page, and Forem/GitHub codebase evidence found. | Mark LinkedIn/source as verified; GitHub should be `forem`/DEV codebase rather than a guessed unrelated repo in canonical profile. |
| arXiv | GitHub org `https://github.com/arxiv` verified, website `https://arxiv.org`. | Mark GitHub as source-backed; X requires separate direct official result. |

### Verification policy update

Future author profile rows must carry `evidence_status` with one of: `verified_official`, `verified_indirect`, `local_only`, or `unknown`. `unknown` is acceptable when evidence is missing; do not infer X/LinkedIn/GitHub links from name similarity alone.

## 4. AnySearch enrichment addendum — 2026-05-21

Master 指令要求大胆使用 AnySearch 后，使用临时 API key（未保存到磁盘）并发验证了 5 个低置信 Medium 作者身份：

| Query subject | Verified identity | Evidence | Update status |
|---|---|---|---|
| @linz07m | Lince Mathew | Medium result: Software Developer, building LiveReview, 114 followers | JSON updated if Top50 match; otherwise audit recorded |
| @techsachin | SACHIN KUMAR | Medium followers page: Senior Data Scientist III @ LexisNexis; LinkedIn `/in/techsachinkumar`; 532 followers | JSON updated/audit recorded |
| @ScottSparkwave | Scott Johnson | Medium article: Founder, Sparkwave AI / PersonaAI / CharX World | JSON updated/audit recorded |
| @JacekWo | Jomsborg Lab | Medium profile: Jomsborg Lab, 190 followers | JSON updated/audit recorded |
| @swapnilshekade | Swapnil Shekade | Medium article: AgentDLC/development lifecycle author | JSON updated/audit recorded |


## AnySearch 二次验证批注

- completed_at: 2026-05-21T22:40:00+08:00
- scope: Top 50 authors/entities × X/Twitter + LinkedIn + GitHub/Scholar queries
- credential_handling: transient API use; no API key/password written to outputs
- interpretation: URL candidates are evidence links, not follower-count claims; unknown follower counts remain unknown unless source result states them.

| # | Author/entity | Candidate evidence URLs |
|---:|---|---|
| 1 | Anthropic | https://github.com/IIIIQIIII/x-agent<br>https://x.com/AnthropicAI?lang=en<br>https://www.reddit.com/r/ChatGPTCoding/comments/1q49zq0/sudden_massive_increase_in_insane_hyping_of/<br>https://www.linkedin.com/company/anthropicresearch<br>https://www.linkedin.com/posts/andrewyng_important-new-course-agent-skills-with-anthropic-activity-7422330557117784064-ruRw |
| 2 | developers.openai.com | https://x.com/OpenAI?lang=en<br>https://n8n.io/integrations/openai/and/twitter/<br>https://github.com/jarrodwatts/x-api-skill<br>https://www.linkedin.com/showcase/openai-devs/<br>https://developers.openai.com/learn/agents |
| 3 | OpenAI | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://x.com/OpenAI?lang=en<br>https://n8n.io/integrations/openai/and/twitter/<br>https://www.linkedin.com/posts/sylviangth_openai-just-dropped-a-34-page-guide-on-how-activity-7319037977022607361-v5PE<br>https://www.linkedin.com/news/story/ai-agent-coding-touted-by-openai-6668852/ |
| 4 | Product Hunt maker/team | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://github.com/Recusive/x-agent<br>https://www.producthunt.com/products/moltweet<br>https://www.youtube.com/shorts/_8C4DLju9zQ<br>https://www.reddit.com/r/artificial/comments/1srhsjb/heyagent_producthunt_launch_linkedin_for_ai_agents/ |
| 5 | producthunt.com | https://x.com/ProductHunt<br>https://www.producthunt.com/products/x-beast-beta<br>https://www.producthunt.com/products/moltweet<br>https://www.reddit.com/r/artificial/comments/1srhsjb/heyagent_producthunt_launch_linkedin_for_ai_agents/<br>https://www.producthunt.com/products/linkedin-for-ai-agents |
| 6 | LangChain | https://github.com/langchain-ai/social-media-agent<br>https://x.com/LangChain?lang=en<br>https://wasp.sh/blog/2023/06/27/build-your-own-twitter-agent-langchain<br>https://medium.com/@jayantnehra18/langchain-ai-agents-and-output-parsers-for-personalized-linkedin-reachout-messages-da6d54afc495<br>https://www.reddit.com/r/LangChain/comments/1jqvafk/built_an_open_source_linkedin_ghostwriter_agent/ |
| 7 | blog.langchain.com | https://x.com/LangChain?lang=en<br>https://www.langchain.com/stateofaiagents<br>https://opentweet.io/blog/ai-agents-that-post-to-twitter-2026<br>https://www.linkedin.com/company/langchain<br>https://www.linkedin.com/posts/langchain_how-linkedin-put-a-sql-agent-using-langgraph-activity-7282444689666883584-nbvF |
| 8 | anthropic.com | https://ubos.tech/news/anthropic-ai-x-com-issue-highlights-privacy-extension-challenges/<br>https://x.com/AnthropicAI?lang=en<br>https://www.anthropic.com/research/building-effective-agents<br>https://www.linkedin.com/company/anthropicresearch<br>https://www.linkedin.com/posts/andrewyng_important-new-course-agent-skills-with-anthropic-activity-7422330557117784064-ruRw |
| 9 | openai.com | https://x.com/OpenAI?lang=en<br>https://n8n.io/integrations/openai/and/twitter/<br>https://openai.com/ga-IE/index/introducing-workspace-agents-in-chatgpt/<br>https://www.linkedin.com/posts/sylviangth_openai-just-dropped-a-34-page-guide-on-how-activity-7319037977022607361-v5PE<br>https://www.linkedin.com/news/story/ai-agent-coding-touted-by-openai-6668852/ |
| 10 | youtube.com | https://www.youtube.com/watch?v=BAm1MXRc98A<br>https://www.youtube.com/watch?v=11IlSHFDlu4<br>https://www.youtube.com/watch?v=KPGqah2vJfQ<br>https://www.youtube.com/watch?v=TGVhE4XxU3Q<br>https://www.linkedin.com/posts/kieranjflanagan_heres-an-ai-agent-that-can-turn-youtube-activity-7231284451933130752-ues4 |
| 11 | YouTube creator/channel | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://dev.to/wcamon/i-let-ai-agents-run-my-youtube-channel-for-6-weeks-heres-what-actually-happened-21b1<br>https://github.com/darkzOGx/youtube-automation-agent<br>https://www.linkedin.com/posts/shubhamvora05_top-10-youtube-channels-to-learn-ai-activity-7389517445398560768-Vn1G<br>https://tubeai.app/hugo-youtube-agent |
| 12 | 腾讯云开发者作者 | https://auth0.com/ai/docs/integrations/twitter<br>https://www.tencentcloud.com/techpedia/140482<br>https://cloud.tencent.com/developer/article/2640518<br>https://developer.cloud.tencent.com/user/11991538<br>https://cloud.tencent.com.cn/developer/user/1422024 |
| 13 | 阿里云开发者作者 | https://developer.aliyun.com/profile/qrixq7rbh7b2c<br>https://x.com/EvoAgentX<br>https://developer.aliyun.com/article/373961<br>https://developer.aliyun.com/profile/gfbp4bwpctdbo<br>https://uk.linkedin.com/in/guohao-li-9a573b136 |
| 14 | GitHub:EvoAgentX | https://github.com/EvoAgentX/EvoAgentX<br>https://github.com/hireshBrem/X-ai-agent<br>https://github.com/Prem95/socialautonomies<br>https://www.linkedin.com/posts/evoagentx_github-evoagentxevoagentx-evoagentx-activity-7329156435194368000-mKca<br>https://www.linkedin.com/posts/xi-z_this-is-hands-down-one-of-the-most-exciting-activity-7330188274541490176-kM2z |
| 15 | Medium/TDS author | https://medium.com/neuralnotions/how-i-built-an-automated-x-agent-that-responds-to-replies-researches-news-and-posts-like-a-human-0cbb6a38f209<br>https://www.youtube.com/watch?v=11IlSHFDlu4<br>https://noimosai.com/en/blog/top-5-ai-agents-for-x-twitter-in-2026-revolutionizing-your-social-strategy<br>https://www.linkedin.com/posts/sandyacarter_i-didnt-just-write-a-book-about-ai-agents-activity-7320866384903626754-DcPi<br>https://medium.com/data-science/ai-agents-from-concepts-to-practical-implementation-in-python-fb26789b1560 |
| 16 | GitHub:modelscope | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/kingbootoshi/goat-x<br>https://github.com/modelscope/modelscope-agent?tab=readme-ov-file<br>https://github.com/Vetrivel07/linkedin-agent<br>https://github.com/gill-wang/modelscope-agent |
| 17 | GitHub:datawhalechina | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/datawhalechina/Hello-Agents<br>https://github.com/ihuzaifashoukat/twitter-automation-ai<br>https://github.com/NightTrek/Linkedin_Agent_Tool<br>https://www.linkedin.com/posts/shubhamsaboo_ai-agents-now-ingest-any-github-repo-context-activity-7315560841154584576-6Obb |
| 18 | cloud.tencent.com | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://x.com/tencentcloud?lang=en<br>https://www.tencentcloud.com/techpedia/140463<br>https://www.linkedin.com/showcase/tencent-cloud-northamerica/<br>https://adp.tencentcloud.com/ |
| 19 | GitHub:Marktechpost | https://github.com/Marktechpost/AI-Agents-Projects-Tutorials<br>https://x.com/Marktechpost?lang=en<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.linkedin.com/company/marktechpost<br>https://github.com/Vetrivel07/linkedin-agent |
| 20 | GitHub:autogame-17 | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://github.com/autogame-17/evolver<br>https://github.com/hireshBrem/X-ai-agent<br>https://github.com/autogame-17<br>https://aiagentspedia.org/author/autogame-17/ |
| 21 | GitHub:cittaverse | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/khoanna/twitter-ai-agent<br>https://github.com/cittaverse<br>https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH<br>https://www.linkedin.com/posts/shubhamsaboo_ai-agents-now-ingest-any-github-repo-context-activity-7315560841154584576-6Obb |
| 22 | GitHub:evoagentx | https://github.com/EvoAgentX/EvoAgentX<br>https://github.com/hireshBrem/X-ai-agent<br>https://github.com/Prem95/socialautonomies<br>https://www.linkedin.com/posts/evoagentx_github-evoagentxevoagentx-evoagentx-activity-7329156435194368000-mKca<br>https://medium.com/@evoagentx.ai |
| 23 | GitHub:linkxzhou | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/ClawdXAI/ClawdX<br>https://github.com/khoanna/twitter-ai-agent<br>https://github.com/linkxzhou?tab=repositories<br>https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82 |
| 24 | GitHub:yh-yao | https://github.com/yh-yao<br>https://github.com/PankajKumardev/Twitter-Ai-Agent<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.linkedin.com/posts/sherv_build-next-level-copilot-agents-with-vs-code-activity-7443303395341357056-Hsgr<br>https://yuhangyao.com/ |
| 25 | GitHub:yinwm | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/yinwm<br>https://github.com/khoanna/twitter-ai-agent<br>https://github.com/r-aaron-graham/linkedin-ai-agent<br>https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82 |
| 26 | GitHub:zhibao-labs | https://github.com/zhibao-labs<br>https://www.youtube.com/watch?v=QtExEg1OQ_0<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82<br>https://github.com/zhibao-labs/LightZero |
| 27 | github.langchain.ac.cn | https://github.com/langchain-ai/social-media-agent<br>https://github.com/langchain-ai/langchain<br>https://github.com/langchain-ai/reply_gAI/blob/main/README.md<br>https://github.com/Vetrivel07/linkedin-agent<br>https://www.reddit.com/r/LangChain/comments/1jqvafk/built_an_open_source_linkedin_ghostwriter_agent/ |
| 28 | developer.aliyun.com | https://www.youtube.com/watch?v=sPsCWYifyQ0<br>https://www.linkedin.com/posts/alexeyf_just-built-an-ai-agent-that-creates-twitter-activity-7350784375019499520-gZWv<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.linkedin.com/posts/donnellychris_you-can-build-an-ai-agent-in-10-minutes-activity-7404866592708395008-Ic2P<br>https://www.linkedin.com/posts/ngsinching_%E9%87%8D%E7%A3%85%E5%AE%98%E5%AE%A3%E9%98%BF%E9%87%8C%E4%BA%91%E7%99%BE%E7%82%BCcoding-plan%E5%9B%9B%E5%A4%A7%E6%A8%A1%E5%9E%8B%E9%BD%90%E4%B8%8A%E7%BA%BF79%E5%85%83%E5%B0%B1%E8%83%BD%E7%94%A8%E9%A1%B6%E9%85%8D-%E9%98%BF%E9%87%8C%E4%BA%91%E5%BC%80%E5%8F%91%E8%80%85%E7%A4%BE%E5%8C%BA-activity-7432467839980060674-aA_- |
| 29 | CSDN作者 | https://www.youtube.com/watch?v=rMDu930oNYY<br>https://devpress.csdn.net/xclaw/6a053b6d54b52172bc73fc31.html<br>https://gitcode.csdn.net/69b2ad9554b52172bc60c252.html<br>https://www.linkedin.com/blog/engineering/ai/contextual-agent-playbooks-and-tools-how-linkedin-gave-ai-coding-agents-organizational-context<br>https://devpress.csdn.net/user/Agent_csdn |
| 30 | 知乎作者 | https://felo.ai/zh-Hans/skills/felo-twitter-writer<br>https://zhuanlan.zhihu.com/p/2002400850782487826<br>https://x.com/EvoAgentX<br>https://www.youtube.com/watch?v=FhpfNZE9VvI<br>https://zhuanlan.zhihu.com/p/1968095125491135108 |
| 31 | arxiv.org | https://x.com/dair_ai<br>https://arxiv.org/abs/2604.19925<br>https://github.com/Infatoshi/x-mcp<br>https://arxiv.org/html/2604.26197<br>https://www.linkedin.com/posts/luca-nannini_we-are-releasing-a-working-paper-on-arxiv-activity-7447168056415465472-WuKt |
| 32 | developer.cloud.tencent.com | https://x.com/tencentcloud?lang=en<br>https://www.tencentcloud.com/techpedia/140463<br>https://www.tencent.com/en-us/articles/2202180.html<br>https://www.linkedin.com/company/tencent-cloud<br>https://www.linkedin.com/showcase/tencent-cloud-northamerica/ |
| 33 | 博客园作者 | https://hellotars.com/tools/twitter<br>https://x.com/AndrewYNg<br>https://www.cnblogs.com/YzpJason<br>https://www.linkedin.com/posts/samanyougarg_i-built-an-ai-agent-that-writes-5000-word-activity-7318513435527258113-SovP<br>https://www.cnblogs.com/aquester |
| 34 | GitHub:Baburnana | https://github.com/Baburnana<br>https://github.com/khoanna/twitter-ai-agent<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.linkedin.com/posts/shubhamsaboo_i-built-an-ai-agent-that-sees-thinks-and-activity-7275713275277828096-pp82<br>https://www.linkedin.com/posts/shivang0203_15-github-repos-for-learning-ai-agents-activity-7372125964874551296-xWOO |
| 35 | GitHub:Stars1233 | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/Stars1233<br>https://www.youtube.com/watch?v=sPsCWYifyQ0<br>https://github.com/Vetrivel07/linkedin-agent<br>https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH |
| 36 | GitHub:Tencent | https://github.com/hireshBrem/X-ai-agent<br>https://x.com/TencentAI_News<br>https://trendshift.io/repositories/13637<br>https://www.linkedin.com/posts/francescofaenzi_github-tencentai-infra-guard-a-full-stack-activity-7448988041639276544-MiyT<br>https://github.com/Tencent/SelfEvolvingAgent |
| 37 | GitHub:yeasy | https://github.com/hireshBrem/X-ai-agent<br>https://github.com/ClawdXAI/ClawdX<br>https://github.com/nirholas/XActions<br>https://www.linkedin.com/posts/markrawlingssmith_a-github-repo-ai-agents-went-viral-this-activity-7437762331943702529-5mzH<br>https://www.github.com/yeasy |
| 38 | GitHub:yuzhu-cai | https://github.com/yuzhu-cai<br>https://github.com/ClawdXAI/ClawdX<br>https://huggingface.co/Ethical-Lens<br>https://scholar.google.com.br/citations?hl=en&oi=sra&user=LXN-rTIAAAAJ<br>https://github.com/aliasrobotics/cai |
| 39 | medium.com | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://medium.com/data-science-collective/building-an-ai-agent-that-runs-my-twitter-account-c8a3cca69ca8<br>https://deepak-worklab.medium.com/i-built-an-ai-agent-that-runs-my-twitter-growth-automatically-heres-exactly-how-it-works-8bd7128d1e16<br>https://medium.com/@digimineaitechnologies/how-i-built-an-ai-agent-that-writes-my-linkedin-posts-and-how-you-can-too-4f0cd1a2098e<br>https://blog4ritika.medium.com/how-i-accidentally-built-an-ai-agent-that-now-writes-my-linkedin-posts-e1b8c3b5078e |
| 40 | humanloop.com | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://www.youtube.com/watch?v=guafr31E858<br>https://x.com/StoryProtocol/status/1870152680045215759<br>https://www.linkedin.com/company/humanloop<br>https://humanloop.com/docs/tutorials/agent-evaluation-code |
| 41 | thenewstack.io | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://x.com/thenewstack?lang=en<br>https://github.com/kaitoInfra/twitterapi-io<br>https://www.linkedin.com/company/the-new-stack<br>https://thenewstack.io/ai-agents-a-comprehensive-introduction-for-developers/ |
| 42 | wandb.ai | https://www.reddit.com/r/n8n/comments/1prxv82/built_an_ai_agent_that_autoposts_to_xtwitter/<br>https://wandb.ai/site/agents/<br>https://x.com/wandb<br>https://www.linkedin.com/posts/wandb_building-ai-agents-is-hard-evaluating-debugging-activity-7315108554254794753-hGke<br>https://www.linkedin.com/in/lavanyashukla |
| 43 | towardsdatascience.com | https://medium.com/data-science-collective/building-an-ai-agent-that-runs-my-twitter-account-c8a3cca69ca8<br>https://hellotars.com/tools/twitter<br>https://x.com/TDataScience?lang=en<br>https://www.linkedin.com/company/towards-data-science<br>https://towardsdatascience.com/category/artificial-intelligence/agentic-ai/ |
| 44 | baijiahao.baidu.com | https://www.youtube.com/watch?v=11IlSHFDlu4<br>https://x.com/Baidu_Inc/highlights?lang=en<br>https://in.investing.com/news/stock-market-news/baidu-unveils-ai-agent-products-proposes-new-metric-93CH-5403808<br>https://www.linkedin.com/company/baidu-inc/<br>https://eliteai.tools/agent-skills/media-auto-publisher-2 |
| 45 | zhuanlan.zhihu.com | https://github.com/Recusive/x-agent<br>https://www.youtube.com/watch?v=rMDu930oNYY<br>https://x.com/ZhihuFrontier?lang=en<br>https://github.com/pamelafox/personal-linkedin-agent<br>https://www.linkedin.com/posts/kevinsxu_the-ai-agent-era-has-started-in-china-it-activity-7442966805121449984-BeSI |
| 46 | modal.com | https://github.com/modal-labs/modal-examples/blob/main/10_integrations/multion_news_agent.py<br>https://x.com/modal<br>https://modal.com/docs/examples/multion_news_agent<br>https://www.linkedin.com/company/modal-labs<br>https://www.linkedin.com/posts/dhumi_modal-high-performance-ai-infrastructure-activity-7354861302588018688-egDQ |
| 47 | evoailabs.medium.com | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://medium.com/data-science-collective/building-an-ai-agent-that-runs-my-twitter-account-c8a3cca69ca8<br>https://github.com/Recusive/x-agent<br>https://medium.com/bytes-being/how-i-built-a-custom-ai-agent-to-supercharge-linkedin-networking-and-land-my-dream-job-321e5acea83a<br>https://www.youtube.com/watch?v=FhpfNZE9VvI |
| 48 | mp.weixin.qq.com | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://github.com/0xMerl99/claw-agent<br>https://github.com/Digarden7/Agent-Reach<br>https://www.linkedin.com/posts/hongzhe-liu824_tencent-integrates-wechat-with-openclaw-ai-activity-7441461302675542016-S9R6<br>https://cn.linkedin.com/company/teamwechat |
| 49 | segmentfault.com | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://github.com/hireshBrem/X-ai-agent<br>https://www.youtube.com/watch?v=sPsCWYifyQ0<br>https://github.com/SylphAI-Inc/linkedin_agent<br>https://www.youtube.com/watch?v=Meyclxz8pEg |
| 50 | @linz07m | https://www.reddit.com/r/AI_Agents/comments/1l0slou/i_created_a_ai_agent_for_x_twitter_reply/<br>https://x.com/Saboo_Shubham_/status/2022374455989932409<br>https://www.youtube.com/watch?v=KPGqah2vJfQ<br>https://www.reddit.com/r/salestechniques/comments/1sdkppc/how_to_set_up_linkedin_outreach_automation_using/<br>https://www.youtube.com/watch?v=FhpfNZE9VvI |
