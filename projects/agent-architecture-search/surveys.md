# Survey 列表与补充项目

---

## Survey 列表

### Awesome-Self-Evolving-Agents (EvoAgentX)

> GitHub: https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents
> Stars: 300+ | 本地: `repos/evoagentx__awesome_self_evolving/`

最全面的自进化 Agent 论文索引。包含分类：
- 单 Agent 优化
- 多 Agent 优化
- 测试时进化
- 自进化 Benchmark

### Self-Evolving-Agents (CharlesQ9)

> GitHub: https://github.com/CharlesQ9/Self-Evolving-Agents
> Stars: 200+ | 本地: `repos/charlesq9__self_evolving_agents/`

自进化 Agent 分类综述。包含：
- What to Evolve? (模型、上下文)
- When to Evolve? (测试时、训练时)
- How to Evolve? (方法分类)

### Awesome-Agent-Evolution (EvoMap)

> GitHub: https://github.com/EvoMap/awesome-agent-evolution
> Stars: 113 | 本地: `repos/evomap__awesome_agent_evolution/`

Agent 进化和自改进项目列表。EvoMap 组织维护。

---

## 补充项目

### CSE (Science CodeEvolve)

> GitHub: https://github.com/inter-co/science_codeevolve
> 本地: `repos/inter_co__science_codeevolve/`

科学代码进化框架。

### MetaGPT

> GitHub: https://github.com/FoundationAgents/MetaGPT
> Stars: 50,000+ | 本地: `repos/foundation_agents__metagpt/`

多 Agent 软件开发框架（ICLR 2024）。虽然是多 Agent 协作而非自进化，但其角色扮演和工作流设计对 Agent 架构搜索有参考价值。

### Agent Symbolic Learning

> GitHub: https://github.com/aiwaves-cn/agents
> Stars: 2,000+ | 本地: `repos/aiwaves_cn__agents/`
> 论文: NeurIPS 2024

文本反向传播 + 符号梯度优化。将 Agent 视为符号网络，用自然语言模拟神经网络的训练过程。详见 `research/papers/01-agent-symbolic-learning.md`。

### DARWIN

> GitHub: https://github.com/zju-lab-safety/DARWIN
> 本地: `repos/zju_llm_safety__darwin/`
> 会议: AAAI 2026

自进化越狱攻击框架。通过遗传算法+自反思+对抗共进化，维护动态策略池。在 Claude Sonnet 4.6 上达到 53% ASR。虽然是安全对抗方向，但其自进化策略池机制值得参考。

### SCOPE

> GitHub: https://github.com/JarvisPei/SCOPE
> 本地: `repos/jarvispei__scope/`

Agent 优化相关项目。

---

## DGM (Darwin Gödel Machine) — 未开源

> 论文: 2025 | 机构: Clune Lab (Wyoming)
> 状态: **代码未公开**

DGM 是 ADAS 的后续工作，结合开放式进化和自修改代码。SWE-bench 20%→50%, Polyglot 14.2%→30.7%。维持 Agent 归档，带多样性偏好的采样。详细论文分析见 `research/papers/02-darwin-godel-machine.md`。

---

## InfiAgent — 代码未公开

> 论文: arXiv:2509.22502 (2025) | 机构: Infix AI

金字塔 DAG 多 Agent 框架，面向无限场景。代码未公开，仅论文可参考。
