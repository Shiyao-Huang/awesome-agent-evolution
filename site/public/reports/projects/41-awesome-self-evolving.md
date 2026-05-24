# Awesome-Self-Evolving-Agents: 自进化AI智能体全景资源

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents |
| Star | 500+ |
| 技术栈 | Markdown, 学术文献管理 |
| 许可证 | MIT |
| 开发者 | EvoAgentX团队 (格拉斯哥大学等) |

## 项目简介

Awesome-Self-Evolving-Agents是综述论文"A Comprehensive Survey of Self-Evolving AI Agents"的配套资源仓库,系统性收集了自进化AI Agent领域的最新研究。该项目提出了自进化Agent的概念框架,将相关工作分为三大方向:单Agent优化、多Agent优化和领域特定优化。仓库以进化树(Evolve Tree)的形式直观展示了AI Agent进化与优化技术的发展脉络,涵盖2023-2025年间的200+篇论文。

## 目录结构

```
evoagentx__awesome_self_evolving/
└── README.md                          ★ 核心论文索引与分类
    ├── Open-Source Framework
    │   ├── EvoAgentX (EMNLP'25 Demo)        ★ 自动化Agent工作流进化框架
    │   └── MASLab                            ★ 统一多Agent系统代码库
    ├── 1. Single-Agent Optimisation         ★ 单Agent优化
    │   ├── 1.1 LLM Behaviour Optimisation
    │   │   ├── 1.1.1 Training-Based          ★ 训练时优化
    │   │   │   ├── SFT Approaches            ★ 监督微调(STaR, ToRA等)
    │   │   │   └── RL Approaches             ★ 强化学习(Self-Rewarding, DPO等)
    │   │   └── 1.1.2 Test-Time Optimisation  ★ 测试时优化
    │   │       ├── Feedback-Based            ★ 反馈优化(CodeT, LEVER等)
    │   │       ├── Search-Based              ★ 搜索优化(ToT, GoT, BoT等)
    │   │       └── Reasoning-Based           ★ 推理优化(START, CoRT)
    │   ├── 1.2 Prompt Optimisation           ★ 提示词优化
    │   │   ├── Edit-Based                    ★ 编辑优化(GPS, GrIPS等)
    │   │   ├── Evolutionary                  ★ 进化优化(EvoPrompt, PromptBreeder)
    │   │   ├── Generative                    ★ 生成优化(APE, OPRO, DSPy)
    │   │   └── Text Gradient-Based           ★ 文本梯度(TextGrad, GPO等)
    │   ├── 1.3 Memory Optimization           ★ 记忆优化(A-MEM, Mem0等)
    │   ├── 1.4 Tool Optimization             ★ 工具优化
    │   │   ├── Training-Based                ★ 训练优化(ToolEVO, ToolRL等)
    │   │   ├── Inference-Time                ★ 推理优化(EASYTOOL, MCP-Zero等)
    │   │   └── Tool Functionality            ★ 工具功能优化(CREATOR, CLOVA)
    │   └── 1.5 Unified Optimization          ★ 统一优化(EvoAgent, ELL-StuLife)
    ├── 2. Multi-Agent Optimisation           ★ 多Agent优化
    │   ├── 2.1 Automatic MAS Construction    ★ 自动构建(MetaAgent)
    │   └── 2.2 MAS Optimisation              ★ 系统优化(ADAS, AFlow, GPTSwarm等)
    ├── 3. Domain-Specific Optimisation       ★ 领域优化
    │   ├── 3.1 Biomedicine                   ★ 生物医学
    │   ├── 3.2 Programming                   ★ 编程
    │   ├── 3.3 Scientific Research           ★ 科研
    │   ├── 3.4 Financial & Legal             ★ 金融与法律
    │   └── 3.5 Other Domains                 ★ 其他领域
    ├── 4. Evaluation                         ★ 评估
    │   ├── 4.1 Benchmark-Based               ★ 基准评估
    │   ├── 4.2 LLM-Based Evaluation          ★ LLM评估(LLM-as-Judge)
    │   └── 4.3 Safety & Robustness           ★ 安全与鲁棒性
    └── assets/                               ★ 进化树与框架图
```

## 核心模块分析

### 1. 单Agent优化

**LLM行为优化(训练时)**:
- SFT方法: ToRA(ICLR 2024,工具集成推理)、STaR(NeurIPS 2022,自举推理)
- RL方法: Self-Rewarding(ICML 2024,自奖励语言模型)、DPO轨迹推理、Absolute Zero(2025,零数据自博弈推理)、R-Zero(2025,零数据自进化推理LLM)

**LLM行为优化(测试时)**:
- 搜索方法: Tree of Thoughts(NeurIPS 2023)、Graph of Thoughts(AAAI 2024)、Buffer of Thoughts(NeurIPS 2024)
- 反馈方法: CodeT(ICLR 2023)、LEVER(ICML 2023)

**提示词优化**:
- 进化方法: EvoPrompt(ICLR 2024,LLM+进化算法)、PromptBreeder(ICML 2024,自引用自改进)
- 文本梯度: TextGrad(2024,文本反向传播)、GPO(AAAI 2025)

### 2. 多Agent优化

- **ADAS** (ICLR 2025): 自动化Agent系统设计
- **AFlow** (ICLR 2025): 自动化Agentic工作流生成
- **GPTSwarm** (ICML 2024): 语言Agent作为可优化图
- **MetaAgent** (ICML 2025): 基于有限状态机自动构建多Agent系统
- **CORAL** (2026): 开放式自主多Agent进化
- **MAS-ZERO** (2025): 零监督设计多Agent系统

### 3. 领域特定优化

- **生物医学**: STELLA(自进化LLM Agent)、MDTeamGPT(多学科团队医疗)
- **编程**: AlphaEvolve、Darwin Godel Machine、OpenEvolve、Live-SWE-agent
- **科学**: PiFlow(原理感知科学发现)
- **金融**: FinRobot、R&D-Agent-Quant
- **法律**: AgentCourt(可进化律师Agent)

## 技术亮点

1. **概念框架创新**: 提出自进化Agent的概念框架,将优化分为单Agent/多Agent/领域三个层次
2. **进化树可视化**: 以树状图直观展示AI Agent进化技术从2023到2025的发展脉络
3. **自进化聚焦**: 专门关注Agent自我进化能力,与Self-Evolve理念高度对齐
4. **开源工具集成**: 推荐EvoAgentX框架,提供自动化Agent工作流进化能力
5. **安全评估**: 包含Agent安全性、对齐和鲁棒性的评估维度

## 与 Self-Evolve 关联

| 维度 | Awesome-Self-Evolving 贡献 |
|------|--------------------------|
| 自我进化范式 | 整个仓库围绕Agent自进化展开,与Self-Evolve核心理念完全一致 |
| 进化提示优化 | EvoPrompt、PromptBreeder等展示了提示的进化优化方法 |
| 多Agent系统进化 | ADAS、AFlow等展示了多Agent系统的自动设计和进化 |
| 记忆优化 | A-MEM、Mem0等为Self-Evolve的长期记忆管理提供参考 |
| 工具进化 | ToolEVO等展示了工具的自我进化能力 |
| 安全保障 | AgentHarm、RedCode等为Self-Evolve的安全对齐提供评估基准 |

## 参考资料

- Fang et al., "A Comprehensive Survey of Self-Evolving AI Agents," arXiv:2508.07407, 2025
- EvoAgentX: https://github.com/EvoAgentX/EvoAgentX
- ADAS: Hu et al., ICLR 2025
- AlphaEvolve: Google DeepMind, 2025
