# LLM-EA-Survey: 大语言模型与进化算法交叉研究论文合集

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/xiaofangxd/llm_ea |
| Star | 300+ |
| 技术栈 | Markdown, BibTeX, 学术文献管理 |
| 许可证 | 未明确 |
| 开发者 | xiaofangxd (王超等) |

## 项目简介

本项目是综述论文"When Large Language Models Meet Evolutionary Algorithms"(arXiv:2401.10510)的配套论文列表仓库,系统性收集了LLM与进化算法(EA)交叉领域的核心研究论文。仓库将论文分为两大方向:"LLM用于进化算法"和"进化算法用于LLM",涵盖2022年至2024年间100余篇重要文献,是理解该交叉领域发展脉络的宝贵资源。

## 目录结构

```
xiaofangxd__llm_ea/
└── README.md                ★ 核心论文索引(两大方向分类)
    ├── Large language models for evolutionary algorithms  ★ LLM赋能EA
    └── Evolutionary algorithms For large language models  ★ EA赋能LLM
```

## 核心模块分析

### 1. LLM辅助进化算法 (LLM for EA)

该方向收集了约60篇论文,涵盖以下子领域:

- **LLM作为搜索算子**: Language Model Crossover(2023)通过few-shot prompting实现语义级交叉操作,突破了传统GP语法树操作的局限
- **LLM作为优化器**: OPRO(Yang et al., ICLR 2024)将LLM直接用作优化器;LMEA(Liu et al., CEC 2024)将LLM作为进化优化器求解TSP
- **LLM驱动算法进化**: FunSearch(Romera-Paredes et al., Nature 2023)通过程序搜索实现数学发现;EoH(Liu et al., ICML 2024)利用LLM自动设计启发式算法
- **超启发式搜索**: ReEvo(Ye et al., NeurIPS 2024)将LLM作为具有反思能力的超启发式搜索工具;LLaMEA(van Stein & Back, 2024)利用LLM自动生成元启发式算法
- **神经架构搜索**: LLMatic、GPT-4 for NAS等将LLM应用于自动化架构设计
- **质量多样性优化**: QD through AI Feedback、LLM as In-context AI Generators for QD

### 2. 进化算法优化LLM (EA for LLM)

该方向收集了约40篇论文:

- **提示词进化优化**: PromptBreeder(自引用自改进)、GPS(Genetic Prompt Search)、GrIPS(编辑式指令搜索)等
- **黑盒提示词调优**: BBT/BBTv2无需梯度的prompt优化方法
- **模型合并进化**: Evolutionary Optimization of Model Merging Recipes(Akiba et al., 2024)
- **知识融合**: Knowledge Fusion by Evolving Weights of Language Models
- **越狱攻击**: 利用GA生成对抗性提示(Open Sesame, Semantic Mirror Jailbreak)
- **AutoML优化**: AutoML-GPT、LLM用于超参数优化等自动化机器学习方法

### 3. 代表性工作时间线

该领域呈现出清晰的发展脉络:2022年早期探索(BBT黑盒调优),2023年快速增长(FunSearch在Nature发表),2024年全面爆发(EoH/ReEvo/LLaMEA等大量LLM+EA融合工作)。特别是在算法自动设计方向,LLM从辅助工具逐渐进化为主要驱动力,展示了从人工设计算法到LLM自动发现算法的范式转变。

## 技术亮点

1. **双向交叉视角**: 系统性从"LLM赋能EA"和"EA赋能LLM"两个方向组织,提供全景式研究图谱
2. **覆盖面广泛**: 收录Nature、NeurIPS、ICLR、ICML等顶级出版物100余篇论文
3. **前沿追踪**: 包含Evolution Transformer、LLaMEA、ReEvo等2024年最新前沿工作
4. **分类清晰**: 按应用场景和技术路径细致分类,便于快速定位
5. **持续更新**: 反映LLM+EA交叉领域的快速发展态势

## 与 Self-Evolve 关联

| 维度 | LLM-EA-Survey 贡献 |
|------|-------------------|
| 进化循环 | 提供EoH、ReEvo、LLaMEA等代表性LLM驱动进化循环的文献索引 |
| 提示工程 | 收录PromptBreeder、EvoPrompt等提示词进化优化的核心方法论文 |
| 评估框架 | 涵盖TSP、BPP、NAS等多领域优化基准和评估方法 |
| 自我改进机制 | PromptBreeder的自引用提示进化与Self-Evolve的自我改进理念高度一致 |
| 算法设计自动化 | FunSearch、EoH等LLM自动设计算法工作,与Self-Evolve自动优化目标相通 |
| 跨领域应用 | 覆盖数学发现、游戏设计、化学探索、软件工程等多应用领域 |
| 进化算子设计 | Language Model Crossover等语义级遗传算子为Self-Evolve的变异/交叉提供创新思路 |

## 参考资料

- Chao, Wang, et al. "When large language models meet evolutionary algorithms." arXiv:2401.10510 (2024)
- Romera-Paredes, B., et al. "Mathematical discoveries from program search with large language models." Nature (2023)
- Fernando, C., et al. "PromptBreeder: Self-referential self-improvement via prompt evolution." arXiv:2309.16797 (2023)
- Liu, Fei, et al. "Evolution of Heuristics." ICML 2024
- Ye, Haoran, et al. "ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution." NeurIPS 2024
