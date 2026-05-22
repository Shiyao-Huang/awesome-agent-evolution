# Agent 架构搜索 + 自进化方向：GitHub 项目索引

> 生成日期: 2026-05-22 | 覆盖: 25+ 项目 | 方向负责人: Researcher-1
> 搜索范围: ADAS, DGM, Gödel Agent, Agent 自进化框架, 架构搜索, 技能进化

---

## 方向概述

本方向聚焦于 **AI Agent 的自动化架构设计与自我进化能力**，涵盖三大核心主题：

1. **架构搜索** (Architecture Search): 自动发现最优 Agent 结构（ADAS, Meta Agent Search）
2. **自进化框架** (Self-Evolution Framework): Agent 通过经验持续改进自身能力
3. **零数据自博弈** (Zero-Data Self-Play): 完全不依赖外部数据的自主进化方法

---

## 项目分类索引

### 一、架构搜索与元优化 (Architecture Search)

| # | 项目 | Stars | 语言 | 会议/论文 | 核心机制 |
|---|------|-------|------|-----------|----------|
| 1 | [ADAS](./01-adas.md) | 1.2K+ | Python | ICLR 2025 (Outstanding Paper) | Meta Agent Search, Turing-complete 搜索空间 |
| 2 | [Gödel Agent](./02-godel-agent.md) | 300+ | Python | ACL 2025 | Monkey Patching 自引用, 递归自改进 |
| 3 | [EvoAgent](./03-evoagent.md) | 200+ | Python | arXiv 2024 | 进化算法自动生成多 Agent 系统 |
| 4 | [EvoAgentX](./04-evoagentx.md) | 2K+ | Python | arXiv 2025 | 自进化 Agent 生态, 工作流自动构建+优化 |
| 5 | [DGM](./05-dgm-note.md) | — | — | 2025 (未开源) | 开放式进化+自修改代码, SWE-bench 20%→50% |

### 二、自进化 Agent 框架 (Self-Evolving Agent Frameworks)

| # | 项目 | Stars | 语言 | 核心机制 |
|---|------|-------|------|----------|
| 6 | [GenericAgent](./06-genericagent.md) | 4.4K+ | Python | ~3K 行种子代码, 9 原子工具, 技能树自进化 |
| 7 | [Agent0](./07-agent0.md) | 500+ | Python | 零数据自博弈, 课程 Agent + 执行 Agent 共进化 |
| 8 | [Agent Zero](./08-agent-zero.md) | 13.2K+ | Python | 动态工具创建, Linux 系统控制, 有机增长 |
| 9 | [SE-Agent](./09-se-agent.md) | 200+ | Python | 轨迹级进化, 80% SWE-bench Verified (Top1 开源) |
| 10 | [AgentEvolver](./10-agentevolver.md) | 300+ | Python | 自提问/自导航/自归因, 阿里达摩院 |
| 11 | [STELLA](./11-stella.md) | 100+ | Python | 生物医学自进化, 动态模板库+工具库 |
| 12 | [ELL-StuLife](./12-ell-stulife.md) | 100+ | Python | 经验驱动终身学习, 虚拟校园 Benchmark |

### 三、Web/RL 自进化训练 (Web & RL Self-Evolution)

| # | 项目 | Stars | 语言 | 会议/论文 | 核心机制 |
|---|------|-------|------|-----------|----------|
| 13 | [WebRL](./13-webrl.md) | 500+ | Python | ICLR 2025 | 自进化在线课程 RL, WebArena |

### 四、进化提示/技能优化 (Evolutionary Prompt & Skill Optimization)

| # | 项目 | Stars | 语言 | 核心机制 |
|---|------|-------|------|----------|
| 14 | [Hermes Self-Evolution](./14-hermes-self-evolution.md) | 7.4K+ | Python | DSPy + GEPA, 进化式提示优化 |
| 15 | [EvoMap Evolver](./15-evomap-evolver.md) | 7.3K+ | Node.js | GEP 协议, 基因编码进化资产 |

### 五、自主科研 Agent (Autonomous Research Agents)

| # | 项目 | Stars | 语言 | 核心机制 |
|---|------|-------|------|----------|
| 16 | [AutoResearchClaw](./16-autoresearchclaw.md) | 2K+ | Python | 23 阶段自主科研管线, 想法→论文 |
| 17 | [CSE](./17-cse.md) | 100+ | Python | 科学代码进化 |

### 六、Agent 符号学习与多 Agent (Symbolic Learning & Multi-Agent)

| # | 项目 | Stars | 语言 | 会议/论文 | 核心机制 |
|---|------|-------|------|-----------|----------|
| 18 | [Agent Symbolic Learning](./18-agent-symbolic-learning.md) | 2K+ | Python | NeurIPS 2024 | 文本反向传播, 符号梯度优化 |
| 19 | [MetaGPT](./19-metagpt.md) | 50K+ | Python | ICLR 2024 | 多 Agent 软件开发, 角色扮演 |

### 七、安全对抗进化 (Security & Adversarial Evolution)

| # | 项目 | Stars | 语言 | 核心机制 |
|---|------|-------|------|----------|
| 20 | [DARWIN](./20-darwin.md) | 100+ | Python | 自进化越狱攻击池, 遗传算法+自反思 |

### 八、Survey 列表 (Curated Lists)

| # | 项目 | Stars | 覆盖范围 |
|---|------|-------|----------|
| 21 | [Awesome-Self-Evolving-Agents](./surveys.md) | 300+ | 最全的自进化 Agent 论文索引 |
| 22 | [Self-Evolving-Agents](./surveys.md) | 200+ | 自进化 Agent 分类综述 |
| 23 | [Awesome-Agent-Evolution](./surveys.md) | 113 | Agent 进化资源列表 |

---

## 技术栈分布

| 语言 | 项目数 | 代表项目 |
|------|--------|----------|
| **Python** | 20 | ADAS, GenericAgent, Agent0, SE-Agent, EvoAgentX |
| **Node.js** | 1 | EvoMap Evolver |
| **混合** | 2 | Agent Zero (Python+Docker), Hermes (Python+DSPy) |

## 进化机制分类

| 机制 | 项目 | 特点 |
|------|------|------|
| **元搜索** | ADAS, EvoAgentX | LLM 作为元编程器搜索最优架构 |
| **自引用修改** | Gödel Agent, DGM | Agent 修改自身运行时代码 |
| **技能结晶** | GenericAgent, ELL | 经验抽象为可复用技能 |
| **零数据自博弈** | Agent0, Absolute Zero | 无外部数据, 自生成课程 |
| **轨迹进化** | SE-Agent, AgentEvolver | 多轨迹间信息交换 |
| **进化提示优化** | Hermes, EvoMap | DSPy/GEPA 优化提示和技能 |
| **在线课程 RL** | WebRL | 失败任务生成新训练数据 |

## 自进化成熟度评估

```
Level 5 (自主进化):  DGM, Gödel Agent — 修改自身架构和代码
Level 4 (技能进化):  GenericAgent, ELL, STELLA — 自动积累可复用技能
Level 3 (轨迹优化):  SE-Agent, AgentEvolver, WebRL — 经验驱动的策略优化
Level 2 (工作流进化): EvoAgentX, EvoAgent — 自动优化多 Agent 工作流
Level 1 (提示优化):  Hermes, EvoMap — 进化式提示/工具描述优化
```

---

## 关键发现

1. **ADAS 是架构搜索的奠基工作** — ICLR 2025 Outstanding Paper, 证明 LLM 可以发明新的 Agent 设计
2. **SE-Agent 创下 SWE-bench 开源记录** — 80% Verified, 轨迹级进化机制
3. **GenericAgent 极简哲学** — 3K 行代码实现完整自进化, GitHub Trending 第一
4. **Agent0 vs Agent Zero 是两个不同项目** — Agent0 是学术研究（UNC/Salesforce/Stanford）, Agent Zero 是社区框架（13.2K stars）
5. **EvoMap 的 GEP 协议值得关注** — 将 Agent 经验编码为"基因", 7.3K stars 说明社区接受度高
6. **Hermes 用 DSPy+GEPA 做进化提示优化** — ICLR 2026 Oral, 无需 GPU 训练
7. **DGM 暂未开源** — 论文引用最高的自进化架构方法, 缺乏代码复现

---

*完整项目分析文件位于本目录下, 文件名格式: `{序号}-{项目名}.md`*
