# arXiv 论文章节大纲：AI Self-Evolution

> 论文类型：综述论文（Survey）
> 目标期刊/平台：arXiv 预印本
> 语言：英文（arXiv）/ 中文博客版后续
> 最后更新：2026-05-22 | Scribe 整理

---

## 论文标题候选

1. **"Self-Evolving AI: A Unified Framework for Generation, Evaluation, Memory, and Improvement"**
2. **"From Self-Refine to Self-Evolve: A Taxonomy and Roadmap for Autonomous AI Improvement"**
3. **"The Five Loops of Self-Evolution: How AI Systems Learn to Improve Themselves"**

---

## 摘要（Abstract）

关键词：Self-Evolution / LLM Self-Improvement / Evolutionary Computation / Agent Evolution / AutoML

核心论点：AI 自我进化不是单一技术，而是五类循环的统一——规格到执行、搜索、评估器、反思、种群。本综述系统梳理 19+ 开源项目和 17+ 核心论文，提出统一分类框架和未来方向。

---

## 章节大纲

### 1. 引言（Introduction）

**素材来源**：跨领域综述 `papers/cross-domain/README.md`

- 1.1 背景：从静态 AI 到自进化 AI
- 1.2 核心问题定义：什么是 AI Self-Evolution？
- 1.3 与相关概念的区别： continual learning / online learning / self-supervised learning
- 1.4 本文贡献
  - 统一五类循环分类框架
  - 19+ 开源项目的系统分析
  - 跨领域（AutoML/NAS/LLM/进化计算/Agent）统一视角
  - 研究者网络图谱
- 1.5 论文结构

### 2. 分类框架：五类进化循环（Taxonomy: Five Evolution Loops）

**素材来源**：`papers/cross-domain/README.md` 五大领域交叉分析

- 2.1 规格到执行循环（Specification-to-Execution Loop）
  - 自然语言目标 → 可运行 ML/Agent 流水线
  - 代表：AutoML-GPT, AutoML-Agent
- 2.2 搜索循环（Search Loop）
  - 探索架构、提示词、代码、Agent、超参数
  - 代表：OPRO, EvoPrompting, ADAS, OpenEvolve
- 2.3 评估器循环（Evaluator Loop）
  - 测试、基准、验证器、部署指标打分
  - 代表：FunSearch, Self-Debug, CodeEvolve
- 2.4 反思循环（Reflection Loop）
  - 失败转化为记忆、反馈、修订候选
  - 代表：Reflexion, Self-Refine, STaR
- 2.5 种群循环（Population Loop）
  - 多候选维护、选择、变异、重组、特化
  - 代表：AlphaEvolve (MAP-Elites), LLaMEA, AgentEvolver

**图表**：
- 五类循环关系图（Mermaid → TikZ）
- 每类循环的输入/输出/状态转换表

### 3. 自我改进方法（Self-Improvement Methods）

**素材来源**：
- `research/papers/` 12 篇精读笔记
- `papers/llm-self-improvement/` 5 篇论文精读（Self-Debug/SPIN/Constitutional AI/STaR/ReST）

- 3.1 推理时自我改进（Inference-Time Self-Improvement）
  - Self-Refine：同一 LLM 生成→批评→迭代改写
  - Reflexion：语言反思记忆替代参数更新
  - Self-Debug：执行反馈作为自修复信号
- 3.2 训练时自我改进（Training-Time Self-Improvement）
  - SPIN：自博弈微调（弱→强）
  - STaR：自学推理者（推理引导推理）
  - ReST-EM：增强自我训练
  - Constitutional AI：AI 反馈自我对齐
- 3.3 对比分析表
  - 方法 × 循环类型 × 是否需要训练 × 反馈来源 × 适用任务

**公式**：每篇论文的关键公式从 `research/papers/` 提取

**Benchmark 数据**：
- HumanEval: Reflexion 91% pass@1 vs GPT-4 80%
- GSM8K / BBH / MMLU 数据从各笔记收集
- AlphaEvolve 数学发现数据

### 4. 进化式代码与算法发现（Evolutionary Code & Algorithm Discovery）

**素材来源**：
- `research/projects/01-opro-llm-as-optimizer.md` (OPRO)
- `research/projects/04-funsearch-mathematical-discoveries.md` (FunSearch)
- `projects/algorithmicsuperintelligence__openevolve.md` (OpenEvolve)
- `research/papers/08-alphaevolve.md` (AlphaEvolve)

- 4.1 LLM 作为优化器
  - OPRO：自然语言 prompt 作为优化器接口
  - 历史解 + 分数 → 新候选
- 4.2 LLM 作为进化算子
  - 变异 / 重组 / 选择
  - AlphaEvolve: Gemini Flash + Pro 双模型
  - MAP-Elites 质量-多样性搜索
- 4.3 程序进化与数学发现
  - FunSearch：LLM + 评估器进化数学程序
  - 超越 Strassen 算法的首个改进
- 4.4 开源实现对比
  - OpenEvolve vs FunSearch vs CodeEvolve vs SE-Agent

**Benchmark**：各项目的具体评测数据

### 5. Agent 自进化系统（Self-Evolving Agent Systems）

**素材来源**：
- `research/projects/03-adas-automated-design-agentic-systems.md` (ADAS)
- `research/projects/05-automl-agent-multi-agent.md` (AutoML-Agent)
- `research/papers/01-agent-symbolic-learning.md` (Agent Symbolic Learning)
- `research/papers/02-darwin-godel-machine.md` (DGM)
- `research/papers/03-godel-agent.md` (Gödel Agent)
- `projects/modelscope__agentevolver.md` (AgentEvolver)
- `research/papers/07-absolute-zero.md` (Absolute Zero)
- `research/papers/11-selfevolve.md` (SelfEvolve)

- 5.1 Agent 架构自进化
  - ADAS：自动化 Agent 设计空间搜索
  - Gödel Agent：自引用架构改进
  - Darwin Gödel Machine：达尔文式自改进
- 5.2 Agent 工作流自进化
  - AgentEvolver：进化式 Agent 工具使用优化
  - SE-Agent：多轨迹 Revision/Recombination/Refinement
- 5.3 Agent 记忆与学习
  - Agent Symbolic Learning：符号化经验积累
  - Absolute Zero：零外部数据自训练
- 5.4 多 Agent 协作进化
  - AutoML-Agent：多 Agent 分工协作
  - SelfEvolve：完整自进化流水线

### 6. Agent 框架与基础设施（Agent Frameworks & Infrastructure）

**素材来源**：
- `research/projects/07-metagpt-multi-agent-framework.md`
- `research/projects/08-autogpt-autonomous-agent.md`
- `research/projects/09-crewai-multi-agent-framework.md`
- `research/projects/10-dspy-declarative-llm-programming.md`
- `research/projects/11-autogen-multi-agent-conversation.md`
- `research/projects/12-camel-ai-communicative-agents.md`
- `research/projects/13-langgraph-agent-workflows.md`

- 6.1 框架概览与对比表
  - AutoGPT / MetaGPT / AutoGen / CrewAI / DSPy / CAMEL / LangGraph
  - 维度：编排模式 / 记忆 / 工具使用 / 评估 / 可扩展性
- 6.2 当前框架的进化能力缺口
  - 缺乏持久评估层
  - 缺乏谱系与回归防护
  - 缺乏跨运行记忆
- 6.3 Self-Evolve 定位：框架之上的进化层

### 7. AutoML + LLM / NAS + LLM（AutoML & NAS Meets LLM）

**素材来源**：
- `papers/cross-domain/README.md` 第 1-2 节
- `research/projects/05-automl-agent-multi-agent.md`
- `research/projects/06-coml-mlcopilot.md`

- 7.1 AutoML + LLM
  - AutoML-GPT / AutoML-Agent / Text-to-ML
  - 从固定工具箱到提示词驱动规划
- 7.2 NAS + LLM
  - EvoPrompting / LLMatic / NADER
  - 架构即可进化基因组
- 7.3 与 Self-Evolution 的统一视角

### 8. 研究者生态与影响（Research Landscape & Community）

**素材来源**：
- `papers/llm-self-improvement/06-author-network.md`
- `research/author-network.md`
- `research/blog-author-profiles*.md`

- 8.1 核心研究组与机构
  - Google Research / DeepMind
  - Stanford (Noah Goodman → Eric Zelikman)
  - Princeton NLP (Karthik Narasimhan → Shunyu Yao)
  - AI2 + CMU (Peter Clark → Aman Madaan)
  - UCLA (Quanquan Gu → Zixiang Chen)
  - Anthropic (Yuntao Bai, Dario Amodei)
- 8.2 学术血统与师承关系图
- 8.3 论文引用网络与影响力
- 8.4 开源生态：19+ 项目 Stars/活跃度/许可证分析

**图表**：研究者关系网络（从 Mermaid 转为 TikZ）

### 9. 开放问题与未来方向（Open Problems & Future Directions）

**素材来源**：各论文笔记的 Limitations 章节 + `analysis/framework-painpoint-crosswalk.md`

- 9.1 评估瓶颈：Benchmark 提升不等于真实可靠
- 9.2 记忆与漂移：长期学习的稳定性问题
- 9.3 安全与对齐：自进化系统的可控性
- 9.4 可组合性：五类循环的模块化组合
- 9.5 产品化挑战：从研究到生产系统
- 9.6 Self-Evolve 路线图

### 10. 结论（Conclusion）

- 统一框架总结
- 五类循环的交叉点即 Self-Evolve
- 从研究到产品的桥接

---

## 附录

### A. 项目对比表

19+ 开源项目的完整对比表（Stars / 进化模式 / 技术栈 / 许可证 / 活跃度）

**来源**：`projects/INDEX.md` + `projects/projects_manifest.json` + `research/projects/*.md`

### B. 论文引用列表

17+ 核心论文的完整引用信息

**来源**：`papers/cross-domain/sources.md` + `research/papers/*.md` + `papers/llm-self-improvement/*.md`

### C. Benchmark 数据汇总

**来源**：各论文笔记的 Benchmarks & Results 章节

### D. Mermaid 关系图

**来源**：`papers/cross-domain/relationship-map.mmd` + `papers/llm-self-improvement/06-author-network.md`

---

## 素材到章节映射

| 章节 | 主要素材来源 |
|------|------------|
| 1 引言 | `papers/cross-domain/README.md` |
| 2 分类框架 | `papers/cross-domain/README.md` 五大领域 |
| 3 自我改进 | `research/papers/` 12 篇 + `papers/llm-self-improvement/` 5 篇 |
| 4 进化式代码 | `research/projects/01,04` + `projects/openevolve` + `research/papers/08` |
| 5 Agent 自进化 | `research/papers/01,02,03,07,11` + `projects/agentevolver,se-agent` |
| 6 Agent 框架 | `research/projects/07-13` |
| 7 AutoML/NAS | `papers/cross-domain/` + `research/projects/05,06` |
| 8 研究者生态 | `papers/llm-self-improvement/06` + `research/author-network.md` |
| 9 开放问题 | 各论文 Limitations + `analysis/framework-painpoint-crosswalk.md` |
| 附录 A | `projects/INDEX.md` + `research/projects/*.md` |
| 附录 B | `papers/cross-domain/sources.md` + 所有论文笔记 |
| 附录 C | 各论文 Benchmarks 章节 |
| 附录 D | Mermaid 关系图源文件 |

---

## 写作分工建议

| 角色 | 章节 |
|------|------|
| Researcher-1 | 3.1 推理时自我改进 + 4 进化式代码 |
| Researcher-2 | 3.2 训练时自我改进 + 8 研究者生态 |
| Scribe | 文献整理、附录、格式统一、引用管理 |
| Builder | LaTeX 模板搭建、TikZ 图表、DeepSeek 环境配置 |
| Master | 整体架构、1 引言、9 开放问题、10 结论 |

---

## 技术需求

- [ ] LaTeX 模板（arXiv 标准）
- [ ] TikZ 图表（五类循环图、研究者网络图）
- [ ] DeepSeek 本地模型环境
- [ ] BibTeX 引用数据库
- [ ] 对比表格 LaTeX 排版
