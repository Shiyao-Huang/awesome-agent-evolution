# LLM4Opt: 大语言模型驱动的算法设计研究合集

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/FeiLiu36/LLM4Opt |
| Star | 约 400+ |
| 技术栈 | Markdown, 论文索引, 文献综述 |
| 许可证 | 未明确标注 |
| 开发者 | Fei Liu 等 (香港城市大学) |

## 项目简介

LLM4Opt (LLM4AlgorithmDesign) 是一个专注于利用大语言模型进行算法设计的研究论文合集。该项目配套的综述论文发表于 ACM Computing Surveys (2025)，提出了 LLM 在算法设计中的四范式分类：LLM 作为优化器 (LLMaO)、预测器 (LLMaP)、提取器 (LLMaE) 和设计器 (LLMaD)。项目收录了 2022-2025 年间 300+ 篇相关论文，是 LLM 驱动优化与算法设计领域最全面的文献索引之一。

## 目录结构

```
feiliu36__llm4opt/
├── README.md          ★ 核心综述内容，包含完整论文分类列表
└── figures/           ★ 范式图示
    ├── overview.png   ★ 月度发表数量趋势图
    ├── LLMaO.png      ★ LLM 作为优化器范式图
    ├── LLMaP.png      ★ LLM 作为预测器范式图
    ├── LLMaE.png      ★ LLM 作为提取器范式图
    └── LLMaD.png      ★ LLM 作为设计器范式图
```

## 核心模块分析

### 1. 四范式分类体系

项目最核心的贡献是提出了 LLM 在算法设计中的四种角色定位：

- **LLM 作为优化器 (LLMaO)**：LLM 直接在搜索空间中生成和改进候选解。代表性工作包括 OPRO (ICLR 2024)、LLM4MOEA、EvoLLM 等。OPRO 开创性地将 LLM 作为黑箱优化器，通过自然语言描述优化历史来指导搜索。
- **LLM 作为预测器 (LLMaP)**：LLM 用于预测算法性能、评估解的质量或估算目标函数值。例如 CodonBERT 用于 mRNA 设计优化、LLM 用于供应链优化中的预测。
- **LLM 作为提取器 (LLMaE)**：LLM 从文本、代码或数据中提取与优化问题相关的特征和知识。如 AS-LLM (IJCAI 2024) 用于算法表示和选择、BoChemian 用于化学反应的贝叶斯优化。
- **LLM 作为设计器 (LLMaD)**：LLM 自动设计新的优化算法或启发式规则。这是最活跃的方向，包括 EoH (ICML 2024)、ReEvo (NeurIPS 2024)、AlphaEvolve、LLaMEA (TEVC 2024) 等。

### 2. 研究平台与基准

项目整理了 LLM4AD 算法设计相关的平台和基准：
- **LLM4AD 平台**：开源 Python 平台，提供 100+ 任务和 10+ 方法
- **BLADE**：LLM 驱动的迭代优化启发式设计基准
- **EASE 框架**：利用 LLM 生成算法解决方案的通用框架

### 3. 跨领域应用

项目覆盖了多个应用领域的研究：
- **科学发现**：LLM-SR (科学方程发现)、蛋白质设计、分子优化
- **工业应用**：供应链优化、基站选址、EDA (电子设计自动化)
- **代码生成**：L2MAC、Eureka (强化学习奖励设计)
- **数学推理**：FunSearch (Nature 2023)、AIMO 奖

## 技术亮点

1. **四范式分类法**：LLMaO/LLMaP/LLMaE/LLMaD 四种范式的提出为理解 LLM 在优化中的角色提供了清晰的结构化视角，每种范式都有明确的输入输出定义和适用场景。
2. **论文-代码-竞赛联动**：项目不仅列出论文，还关联了代码仓库、竞赛信息 (如 GECCO 2025/2026 LLM-designed EA 竞赛) 和教程资源。
3. **月度发表趋势可视化**：通过 overview.png 展示了该领域的爆发式增长，从 2023 年开始论文数量急剧上升。
4. **活跃的社区建设**：包含课程资源、教程 (GECCO、NeurIPS、ICML 等多个顶级会议的 tutorial)、特刊信息等。

## 与 Self-Evolve 关联

| 维度 | LLM4Opt 贡献 |
|------|------------|
| 进化循环设计 | EoH 的进化启发式搜索循环 (LLM 生成 -> 评估 -> 反馈 -> 变异) 可直接映射到 Self-Evolve 的代码进化循环 |
| 提示工程模式 | LLMaD 范式下的算法设计提示模式 (如 EoH 的交叉/变异提示、ReEvo 的反思提示) 为 Self-Evolve 提示模板设计提供参考 |
| 评估框架 | BLADE 基准提供了 LLM 生成算法的标准化评估方法，可直接应用于 Self-Evolve 的代码评估 |
| 自进化启发 | AlphaEvolve 和 EoH 展示了 LLM 如何通过进化搜索自动发现新算法，与 Self-Evolve 的核心目标高度一致 |
| 四范式映射 | LLMaO 范式中的 OPRO 框架 (将优化历史作为上下文) 可用于 Self-Evolve 的迭代优化策略 |

## 参考资料

- 综述论文: [A Systematic Survey on Large Language Models for Algorithm Design](https://arxiv.org/abs/2410.14716) (ACM Computing Surveys, 2025)
- 关联平台: [LLM4AD](https://github.com/Optima-CityU/LLM4AD)
- 关联工作: [EoH - Evolution of Heuristics](https://github.com/FeiLiu36/EoH)
- 关联工作: [LLM4MOEA](https://github.com/FeiLiu36/LLM4MOEA)
- 关联工作: [BLADE 基准](https://github.com/XAI-liacs/BLADE)
- 关联工作: [EASE 框架](https://github.com/TBU-AILab/EASE)
- 视频介绍: [IEEE CIS Webinar](https://cis.taskforce.ieee.org/esco/webinar-series/esco-webinar-26/)
- 中文介绍: [Bilibili 视频](https://www.bilibili.com/video/BV1XTJVz9Ew1)
