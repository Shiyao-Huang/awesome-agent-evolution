# Awesome-FM4CO: 基础模型驱动的组合优化前沿研究

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ai4co/awesome_fm4co |
| Star | 500+ |
| 技术栈 | Markdown, 表格索引 |
| 许可证 | MIT |
| 开发者 | AI4CO团队 |

## 项目简介

Awesome-FM4CO是由AI4CO团队维护的论文索引仓库,系统性收录了利用基础模型解决组合优化问题的前沿研究。从两个维度组织文献:(1)利用现有LLM解决CO问题;(2)构建面向CO的领域基础模型。收录2022-2026年5月200+篇论文,每篇标注问题类型(TSP/VRP/MILP/SAT等)、发表场所和贡献类型(算法/求解/建模/基准/可解释性)。

## 目录结构

```
ai4co__awesome_fm4co/
├── README.md              ★ 核心论文索引表格(两大方向)
└── LICENSE                ★ MIT许可证
    ├── LLMs for Combinatorial Optimization
    │   ├── Algorithm (算法设计)       ★ 最主要类别,100+篇
    │   ├── Solution (求解)            ★ LLM直接生成解
    │   ├── Formulation (建模)         ★ 自动问题建模
    │   ├── Benchmark (基准)           ★ 评测基准
    │   └── Interpretability (可解释性) ★ 求解过程可解释
    └── Domain FMs for Combinatorial Optimization
        └── 跨问题通用模型 (TSP, VRP, SAT, KP, ...)
```

## 核心模块分析

### 1. LLM用于算法自动设计 (Algorithm类)

这是当前最活跃的研究方向:

**开创期(2023)**: FunSearch(Nature 2023)通过程序搜索与LLM实现数学发现;LMEA(CEC 2024)将LLM作为进化优化器求解TSP。

**爆发期(2024)**: ReEvo(NeurIPS 2024)将LLM作为反思型超启发式搜索工具;EoH(ICML 2024)利用LLM高效自动设计算法;LLaMEA(2024)自动生成元启发式;HSEvo(AAAI 2025)多样性驱动的和谐搜索。

**成熟期(2025-2026)**: AlphaEvolve(2025)Google的进化编码Agent;CALM(ICLR 2026)算法与语言模型协同进化;PathWise(2026)通过世界模型实现自进化LLM启发式设计;Hercules(KDD 2025)高效启发式生成。还包括MCTS-AHD(ICML 2025)、HeurAgenix(Microsoft)、VRPAgent等大量最新工作。

### 2. LLM直接求解 (Solution类)

将LLM直接作为组合优化问题的求解器:NLGraph(NeurIPS 2023)自然语言图问题求解;Self-Guiding Exploration(NeurIPS 2024)自引导探索;LLMCoSolver(NeurIPS 2025)端到端组合优化求解器;多模态LLM求解TSP。

### 3. 自动问题建模 (Formulation类)

利用LLM将自然语言描述的优化问题自动转化为数学规划模型:Chain-of-Experts(ICLR 2024);OptiMUS(ICML 2024);ORLM(Operations Research);LLMOPT(ICLR 2025);DRoC(ICLR 2025)分解检索约束处理48种VRP。

### 4. 领域基础模型

| 模型 | 覆盖问题 | 会议 |
|------|----------|------|
| RouteFinder | 48种VRP | TMLR |
| GOAL | TSP,VRP,OP,JSSP,KP等 | ICLR 2025 |
| ANYCSP | CSP | IJCAI 2023 |
| MVMoE | 16种VRP | ICML 2024 |
| SHIELD | 16种VRP | ICML 2025 |
| OPTFM | 通用COP | NeurIPS 2025 |

## 技术亮点

1. **最全面的FM4CO文献索引**: 200+篇论文,结构化标注问题类型和贡献类型
2. **实时跟踪前沿**: 更新至2026年5月,涵盖ICLR 2026、NeurIPS 2025最新工作
3. **LLM+EA融合聚焦**: 重点追踪LLM驱动的自动启发式设计方向
4. **领域基础模型专题**: 系统梳理构建CO领域基础模型的探索路线
5. **多维度分类**: Algorithm/Solution/Formulation/Benchmark/Interpretability五维分类
6. **代码链接丰富**: 大部分论文附带GitHub代码链接,便于复现

## 与 Self-Evolve 关联

| 维度 | Awesome-FM4CO 贡献 |
|------|-------------------|
| LLM驱动算法进化 | FunSearch、EoH、ReEvo展示了LLM+进化搜索自动发现算法的范式 |
| 自进化Agent设计 | AlphaEvolve、PathWise等探索Agent自我进化可能性,与Self-Evolve直接对齐 |
| 算法-模型协同进化 | CALM等提出的算法与LM协同进化思想,为Self-Evolve自我改进提供新思路 |
| 评估基准 | NPHardEval、CO-Bench、ALE-Bench等为优化算法提供标准化评估框架 |
| 代码级进化搜索 | 多篇工作展示了LLM在代码空间中的进化搜索,可直接迁移到Self-Evolve |
| 多策略进化 | MCTS、GA、和谐搜索等多种进化策略与LLM的结合方案 |

## 参考资料

- FunSearch: Romera-Paredes et al., Nature, 2023
- ReEvo: Ye et al., NeurIPS 2024
- Evolution of Heuristics: Liu et al., ICML 2024
- AlphaEvolve: Google DeepMind, 2025
- RouteFinder: Berto et al., TMLR
- CALM: ICLR 2026
