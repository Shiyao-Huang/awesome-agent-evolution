# LLM4EC: LLM 与进化计算交叉研究的系统综述资源库

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/wuxingyu-ai/LLM4EC |
| Star | 约 200+ |
| 技术栈 | Markdown, 论文索引, 文献综述 |
| 许可证 | 未明确标注 |
| 开发者 | Wu Xingyu 等 (香港理工大学) |

## 项目简介

LLM4EC 是一篇被 IEEE Transactions on Evolutionary Computation (TEVC) 接受的综合综述论文的配套资源库。该项目系统性地整理了大语言模型 (LLM) 与进化计算 (EC) 交叉领域的研究论文、代码链接和资源。项目将研究方向划分为三大类：LLM 增强进化算法、EA 增强大语言模型、以及 LLM 与 EA 协同驱动的应用，涵盖了从黑箱优化到神经架构搜索等多个子领域。

## 目录结构

```
wuxingyu_ai__llm4ec/
├── README.md          ★ 核心综述内容，包含完整论文列表与分类
├── Framework.png      ★ 研究框架图 (LLM-EC 交叉领域总览)
└── (无源代码，纯文献索引项目)
```

> 注：本项目为纯论文索引仓库，不包含可执行源代码。其核心价值在于对 LLM-EC 交叉领域研究工作的系统化分类整理。

## 核心模块分析

### 1. LLM 增强 EA (LLM-enhanced EA)

该模块将 LLM 在进化计算中的应用归纳为三个子方向：

- **LLM 辅助黑箱优化**：涵盖单目标优化 (如 OPRO、LMEA、EvoLLM) 和多目标优化 (如 LLM4MOEA、QDAIF)。LLM 可作为进化算法的变异算子、选择算子或替代模型。
- **LLM 辅助优化算法生成**：利用 LLM 自动生成新的启发式算法或元启发式算法，代表性工作包括 EoH (Evolution of Heuristics, ICML 2024)、ReEvo、FunSearch (Nature 2023) 和 AlphaEvolve。
- **LLM 赋能 EA 其他能力**：包括算法选择 (AS-LLM)、超参数调优、结果解释和可视化分析等。

### 2. EA 增强 LLM (EA-enhanced LLM)

该模块聚焦于利用进化计算技术改进大语言模型：

- **基于 EA 的提示工程**：涵盖离散提示优化 (EvoPrompt, ICLR 2024; PromptBreeder) 和无梯度软提示优化 (BBT, ICML 2022)。
- **EA 驱动的 LLM 架构搜索**：如 AutoBERT-Zero、LiteTransformerSearch 等，利用进化方法搜索最优 LLM 架构。
- **EA 驱动的 LLM 合并与剪枝**：包括 SakanaAI 的进化模型合并、DarwinLM 结构化剪枝等。

### 3. 协同应用 (Integrated Synergy)

该模块涵盖 LLM 与 EA 协同驱动的应用场景：

- **代码生成**：ELM、OpenELM、WizardCoder、Eureka 等
- **软件工程**：遗传改进 (Genetic Improvement)、模糊测试 (Fuzzing) 等
- **神经架构搜索**：EvoPrompting、GPT-NAS、LLMatic 等

## 技术亮点

1. **三维分类框架**：首次系统地将 LLM-EC 交叉研究按"LLM 增强 EA"、"EA 增强 LLM"和"协同应用"三个维度进行分类，形成了清晰的知识图谱。
2. **覆盖面广泛**：收集了 200+ 篇相关论文，涵盖 2022-2025 年间的主要研究成果，持续更新。
3. **代码与论文关联**：每篇论文均标注了代码仓库链接 (如有)、发表会议和年份，便于研究者快速定位可复现的工作。
4. **四范式模型 (来自关联 LLM4Opt)**：LLM 作为优化器 (LLMaO)、预测器 (LLMaP)、提取器 (LLMaE) 和设计器 (LLMaD) 的分类方法为理解 LLM 在优化中的角色提供了结构化视角。
5. **进化算法生成**：项目中记录的 LLM 辅助优化算法生成方向是最具创新性的研究领域之一，包括 EoH (利用 LLM 进行交叉和变异操作来进化启发式算法)、ReEvo (引入反思机制的进化超启发式) 和 FunSearch (在 Nature 上发表的利用 LLM 进行数学发现的工作)。
6. **安全与对抗方向**：特别关注了 EA 在 LLM 安全领域的应用，如 AutoDAN (利用进化算法生成越狱提示) 和 LLM-Virus (进化式对抗攻击) 等。

## 与 Self-Evolve 关联

| 维度 | LLM4EC 贡献 |
|------|------------|
| 进化循环设计 | 提供了 LLM 驱动进化搜索的完整方法论图谱，包括 EoH、ReEvo 等可直接借鉴的进化循环框架 |
| 提示工程模式 | 系统整理了 EvoPrompt、PromptBreeder 等基于进化的提示优化方法，为 Self-Evolve 的提示设计提供参考 |
| 评估框架 | 涵盖多种 LLM-EC 评估基准和指标体系，包括 LLM 作为优化器的性能评估方法 |
| 自进化启发 | PromptBreeder 的自参照改进、EvoPrompt 的进化提示搜索等直接启发了 Self-Evolve 的迭代优化思路 |
| 算法设计 | EoH 和 FunSearch 展示了 LLM 如何自动设计新算法，与 Self-Evolve 的代码自改进目标一致 |

## 参考资料

- 论文: [Evolutionary Computation in the Era of Large Language Model: Survey and Roadmap](https://ieeexplore.ieee.org/document/10767756) (IEEE TEVC, 2024)
- 关联项目: [LLM4AD 平台](https://github.com/Optima-CityU/LLM4AD)
- 关联项目: [EoH - Evolution of Heuristics](https://github.com/FeiLiu36/EoH)
- 关联项目: [LLM4MOEA](https://github.com/FeiLiu36/LLM4MOEA)
- 关联项目: [ReEvo](https://github.com/ai4co/LLM-as-HH)
- 关联工作: [FunSearch](https://github.com/google-deepmind/funsearch)
- 关联综述: [LLM4Opt](https://github.com/FeiLiu36/LLM4Opt)
