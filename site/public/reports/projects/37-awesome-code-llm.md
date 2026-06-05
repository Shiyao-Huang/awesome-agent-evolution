# Awesome-Code-LLM: 代码大语言模型全景资源列表

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/codefuse-ai/awesome_code_llm |
| Star | 2k+ |
| 技术栈 | Markdown, 学术文献索引 |
| 许可证 | 未明确 |
| 开发者 | CodeFuse AI (蚂蚁集团) |

## 项目简介

Awesome-Code-LLM是TMLR论文"Unifying the Perspectives of NLP and Software Engineering: A Survey on Language Models for Code"的配套资源仓库。该仓库系统性地收集了代码大语言模型(Code LLM)领域的研究论文,涵盖模型架构、预训练策略、下游任务、代码推理、评估基准等多类内容,可作为代码LLM领域资源列表入口之一。仓库持续更新至2026年5月,收录了数百篇论文条目。

## 目录结构

```
codefuse_ai__awesome_code_llm/
└── README.md                    ★ 核心论文索引(8大类别)
    ├── 1. Surveys                        ★ 综述论文
    ├── 2. Models                         ★ 模型架构
    │   ├── 2.1 Base LLMs and Pretraining     ★ 基础模型与预训练
    │   ├── 2.2 Existing LLM Adapted to Code  ★ 通用LLM适配代码
    │   ├── 2.3 General Pretraining on Code   ★ 代码预训练(Encoder/Decoder/UniLM)
    │   ├── 2.4 Instruction Fine-Tuning       ★ 指令微调
    │   └── 2.5 Reinforcement Learning        ★ 强化学习
    ├── 3. When Coding Meets Reasoning     ★ 代码与推理
    │   ├── 3.1 Coding for Reasoning          ★ 编码促进推理
    │   ├── 3.2 Code Simulation               ★ 代码模拟
    │   ├── 3.3 Code Agents                   ★ 代码智能体
    │   ├── 3.4 Interactive Coding            ★ 交互式编程
    │   └── 3.5 Frontend Navigation           ★ 前端导航
    ├── 4. Low-Resource & Domain Languages ★ 低资源与领域语言
    ├── 5. Downstream Tasks                ★ 下游任务(20+子类)
    ├── 6. Analysis of AI-Generated Code   ★ AI生成代码分析
    ├── 7. Human-LLM Interaction           ★ 人机交互
    └── 8. Datasets                        ★ 数据集与基准
```

## 核心模块分析

### 1. 代码智能体 (Code Agents)

该类别与Self-Evolve最为相关,收录了将LLM作为代码生成与执行智能体的研究:
- **SWE-agent** (NeurIPS 2024): 自动化软件工程Agent,通过Agent-Computer接口实现GitHub Issue自动解决
- **AgentCoder**: 多Agent迭代测试与优化的代码生成框架
- **OpenHands** (ICLR 2025): 通用AI软件开发Agent平台
- **AgileCoder**: 基于敏捷方法论的动态协作Agent
- **CodeAgent**: 工具集成Agent系统,用于真实代码仓库级编程挑战

### 2. 代码强化学习 (RL on Code)

收集了通过RL提升代码生成质量的方法:
- 结合执行反馈的代码优化策略(RLEF)
- RLHF在代码领域的应用
- 代码推理的强化学习方法

### 3. 代码与推理交叉 (Coding Meets Reasoning)

- **编码促进推理**: 利用代码执行能力增强LLM的逻辑推理
- **代码模拟**: 通过代码模拟物理/数学过程
- **交互式编程**: 人机协作的增量代码开发

### 4. 下游任务覆盖

涵盖20+代码相关任务:代码生成、代码RAG、代码排名、代码翻译、程序修复、代码搜索与嵌入、测试生成、漏洞检测、二进制分析、代码审查、需求工程等。

## 技术亮点

1. **最全面的Code LLM资源**: 覆盖从预训练到部署的全生命周期,8大类20+子类
2. **顶级会议全覆盖**: 收录NeurIPS、ICLR、ICML、ACL、EMNLP等所有顶级会议论文
3. **工业界驱动**: 由蚂蚁集团CodeFuse团队维护,兼具学术和工程视角
4. **持续活跃更新**: 2026年5月仍在更新,追踪EMNLP 2025等最新工作
5. **配套产品发布**: 结合CoREB(代码搜索基准)、ML-Embed(ICML 2026)等实际产品
6. **评估维度丰富**: 包含安全性、正确性、幻觉、效率、鲁棒性等AI生成代码的多维分析

## 与 Self-Evolve 关联

| 维度 | Awesome-Code-LLM 贡献 |
|------|----------------------|
| 代码智能体 | SWE-agent、OpenHands等展示了LLM作为自主代码Agent的能力 |
| 强化学习优化 | 代码RL方法为Self-Evolve的策略优化提供技术路径参考 |
| 评估基准 | HumanEval、SWE-bench、LiveCodeBench等为Self-Evolve的代码质量评估提供标准 |
| 程序修复 | 代码修复与调试方法可启发Self-Evolve的自我纠错机制 |
| 自我改进 | 代码推理(coding for reasoning)通过代码执行验证推理,增强反馈循环 |
| 多Agent协作 | AgentCoder等多Agent框架为Self-Evolve的多组件协作提供参考 |

## 参考资料

- Zhang et al., "Unifying the Perspectives of NLP and Software Engineering: A Survey on Language Models for Code," TMLR 2024
- SWE-agent: Princeton NLP, NeurIPS 2024
- OpenHands: All-Hands-AI, ICLR 2025
- CoREB: https://arxiv.org/abs/2605.04615
