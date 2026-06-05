# EvoPrompt: 连接大语言模型与进化算法的提示词优化框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/beeevita/EvoPrompt |
| Star | 300+ |
| 技术栈 | Python, OpenAI API, Alpaca (LLaMA), NumPy |
| 许可证 | MIT |
| 开发者 | Qingyan Guo 等（微软） |
| 论文 | Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers (ICLR 2024) |

## 项目简介

EvoPrompt 是 ICLR 2024 接收的研究工作，提出了一种将**进化算法（EA）与大语言模型（LLM）相结合**的离散提示词优化框架。核心思想是：利用 LLM 强大的语言处理能力来操作离散提示词（保持可读性与连贯性），同时利用 EA 高效的优化性能来迭代改进提示词质量。EvoPrompt 不依赖任何梯度或参数，从一组初始提示词出发，通过 LLM 执行进化算子（变异、交叉），根据开发集性能迭代改进种群。

该框架在 31 个数据集上覆盖了语言理解、文本生成和 BIG-Bench Hard (BBH) 任务，对 GPT-3.5 和 Alpaca 等模型均显著超越人工设计的提示词和现有自动提示词生成方法。

## 目录结构

```
evoprompt/
├── run.py                   # ★ 进化主入口
├── evolution.py             # ★ 进化策略分发（GA/DE/APE）
├── evoluter.py              # ★ 核心进化器实现
│   ├── Evoluter             # 基类
│   ├── GAEvoluter           # 遗传算法进化器
│   ├── DEEvoluter           # 差分进化进化器
│   └── ParaEvoluter         # APE 并行进化器
├── evaluator.py             # 评估器（不同任务的评估逻辑）
├── infer.py                 # 推理模块
├── llm_client.py            # ★ LLM 调用封装
├── metrics.py               # 指标计算
├── dataset.py               # 数据集加载
├── args.py                  # 命令行参数
├── utils.py                 # 辅助函数
├── data/                    # ★ 数据与模板
│   ├── cls/                 # 分类任务数据
│   ├── sim/                 # 简化任务数据
│   ├── sum/                 # 摘要任务数据
│   ├── template_ga.py       # GA 进化模板
│   ├── template_de.py       # DE 进化模板
│   └── templates.py         # 模板包装器
├── BBH/                     # BIG-Bench Hard 任务
│   ├── run_bbh.py           # BBH 入口
│   ├── evoluter.py          # BBH 专用进化器
│   └── scripts/             # 运行脚本
└── scripts/                 # 运行脚本（GA/DE）
```

## 核心模块分析

### 1. 进化器（evoluter.py）

EvoPrompt 实现了两种经典进化算法的 LLM 适配版本：

**遗传算法进化器（GAEvoluter）**：
- **选择策略**：支持轮盘赌（wheel）、随机（random）、锦标赛（tour）三种选择模式
- **交叉操作**：通过 LLM 将两个父代提示词组合生成子代，使用特定模板指导 LLM 执行交叉
- **变异操作**：通过 LLM 对单个提示词进行修改，生成新的变体
- **更新策略**：每轮迭代后保留 top-N 提示词作为新种群

**差分进化进化器（DEEvoluter）**：
- **设计变体**：支持 v1（Prompt 3 使用最优个体）、v2（消除 Prompt 3）、v3（差异部分）三种模板
- **更新策略**：对每个提示词 p，生成候选 p'，若 p' 优于 p 则替换
- **捐赠者选择**：支持最优个体（best）和随机（random）两种捐赠者策略

```python
# 进化器初始化流程
class Evoluter:
    def __init__(self, args, evaluator):
        self.population = []       # 当前提示词种群
        self.scores = []           # 对应得分
        self.marks = []            # 来源标记
```

### 2. 进化提示模板（template_ga.py / template_de.py）

EvoPrompt 的关键创新在于将进化算子转化为 LLM 可执行的提示模板：

- **GA 交叉模板**：输入两个父代提示词，要求 LLM 生成结合两者优点的新提示词
- **GA 变异模板**：输入一个提示词，要求 LLM 在保持语义的基础上进行小幅修改
- **DE 模板**：输入目标提示词、基提示词和差分提示词，要求 LLM 按差分逻辑生成新提示词

每个模板都包含一个演示示例（demonstration），确保 LLM 精确遵循进化步骤，且演示任务的领域与实际任务不同以避免 LLM 直接复制。

### 3. LLM 客户端（llm_client.py）

封装了与 LLM 的交互逻辑，支持两个关键功能：
- **llm_query**：执行进化操作（交叉/变异），需要精确的提示词格式控制
- **paraphrase**：释义功能，用于生成初始种群的变体

框架中涉及**两个独立 LLM**：一个用于进化操作（`--llm_type`），另一个用于任务执行（`--language_model`）。

### 4. 评估与选择

评估流程根据任务类型区分：
- **分类任务**：使用准确率或 F1 分数在开发集上评估
- **生成任务**（简化/摘要）：使用 ROUGE 等指标评估
- **BBH 任务**：使用思维链（CoT）提示进行少样本评估

## 技术亮点

1. **无梯度离散优化**：完全不依赖梯度或参数更新，利用 LLM 的语言理解能力在离散提示词空间中搜索，保持提示词的可读性和人类可理解性
2. **GA 与 DE 双算法实例化**：首次将遗传算法和差分进化两种经典 EA 方法统一适配到 LLM 驱动的提示词优化中
3. **LLM 作为进化算子**：将 LLM 作为交叉和变异算子的执行器，利用其语言生成能力在离散空间中搜索候选 prompt
4. **任务无关框架设计**：通过任务类型参数（cls/sim/sum）和可配置的评估指标，框架可扩展至任意 NLP 任务的提示词优化
5. **跨模型有效性**：在 GPT-3.5 和 Alpaca（开源 LLaMA）上均展现出一致的改进效果，证明方法的通用性

## 与 Self-Evolve 关联

| 维度 | EvoPrompt 贡献 |
|------|---------------|
| 进化式 Prompt 优化 | EvoPrompt 提供了将 EA 与 LLM 结合进行 prompt 自动优化的完整范式，是 Self-Evolve 中"提示词自我进化"的核心技术基础 |
| 离散空间搜索 | 无梯度的离散提示词搜索方法为 Self-Evolve 系统在非可微空间（如自然语言指令、代码结构）中的进化提供了可行路径 |
| 种群式多样性维护 | 通过维护多候选提示词种群而非单一最优解，为 Self-Evolve 系统的多样性保持策略提供了参考 |
| LLM-EA 协同范式 | "LLM 执行算子 + EA 控制搜索"的分工模式，启发了后续工作中 LLM 负责生成/修改、搜索算法负责全局控制的架构设计 |
| 评估驱动进化 | 基于开发集性能的迭代评估-选择机制，为 Self-Evolve 系统的质量评估闭环提供了直接借鉴 |

## 参考资料

- [EvoPrompt 论文 (ICLR 2024)](https://openreview.net/forum?id=ZG3RaNIsO8)
- [CoT-hub](https://github.com/FranxYao/chain-of-thought-hub)
- [APE: Automatic Prompt Engineer](https://github.com/keirp/automatic_prompt_engineer)
- [LM-BFF](https://github.com/princeton-nlp/LM-BFF)
