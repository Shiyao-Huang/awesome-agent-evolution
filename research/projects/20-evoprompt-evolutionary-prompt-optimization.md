# EvoPrompt: 连接大语言模型与进化算法的离散提示优化框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/beeevita/EvoPrompt |
| Star | 0.3k+ |
| 技术栈 | Python, OpenAI API, Alpaca/LLaMA |
| 许可证 | MIT |
| 安装 | `pip install -r requirements.txt` |

## 项目简介

EvoPrompt 是 ICLR 2024 接收的研究工作，提出了将进化算法 (Evolutionary Algorithms, EAs) 与大语言模型相结合进行离散提示优化的框架。其核心思想是利用 LLM 强大的语言处理能力来实现在离散文本空间中的进化操作，同时利用 EA 高效的优化性能来搜索最优提示，二者形成互补协同。

EvoPrompt 完全不依赖梯度或参数，从一组初始提示种群出发，通过 LLM 执行进化算子（交叉和变异）迭代生成新提示，并根据在验证集上的表现更新种群。该框架实例化了两种经典进化算法：遗传算法 (GA) 和差分进化 (DE)，在 31 个涵盖语言理解、文本生成和 BIG-Bench Hard (BBH) 任务的数据集上进行了验证。

实验表明，EvoPrompt 显著优于人工设计的提示和现有自动提示生成方法，在 BBH 任务上提升最高达 25%。更重要的是，EvoPrompt 展示了 LLM 与传统算法结合的巨大潜力，为后续的 LLM+EC 研究奠定了方法论基础。

## 目录结构

```
evoprompt/
├── run.py                  # 进化主入口
├── infer.py                # 推理评估入口
├── evolution.py            # 进化算法调度 (GA, DE, APE)
├── evoluter.py             # 进化器实现 (GAEvoluter, DEEvoluter, ParaEvoluter)
├── evaluator.py            # 多任务评估器
├── metrics.py              # 评估指标计算
├── dataset.py              # 数据集加载
├── args.py                 # 命令行参数
├── llm_client.py           # LLM 查询客户端
├── utils.py                # 辅助函数
├── data/                   # 数据与模板
│   ├── cls/                # 分类任务数据
│   ├── sim/                # 简化任务数据
│   ├── sum/                # 摘要任务数据
│   ├── template_ga.py      # GA 进化模板
│   ├── template_de.py      # DE 进化模板
│   └── templates.py        # 模板包装器
├── scripts/                # 运行脚本
│   ├── cls/                # 分类任务脚本
│   ├── sim/                # 简化任务脚本
│   └── sum/                # 摘要任务脚本
├── BBH/                    # BIG-Bench Hard 任务代码
└── auth.yaml               # API 密钥配置
```

## 核心模块分析

### 1. 进化框架架构

EvoPrompt 的进化管道包含三个核心步骤：

- **初始化**：从人工编写或 GPT 生成的提示构建初始种群
- **进化操作**：通过 LLM 执行交叉和变异，生成新提示
- **评估与更新**：在验证集上评估，根据性能更新种群

```python
# evolution.py - 进化调度
def ga_evo(args, evaluator):
    evoluter = GAEvoluter(args, evaluator)
    evoluter.evolute()

def de_evo(args, evaluator):
    evoluter = DEEvoluter(args, evaluator)
    evoluter.evolute()
```

### 2. 遗传算法实现 (GAEvoluter)

GA 模式的进化流程：

- **选择策略**：支持轮盘赌 (wheel)、随机 (random)、锦标赛 (tour) 三种选择方式
- **交叉与变异**：通过 LLM 模板引导的交叉和变异操作生成子代提示
- **更新策略**：每代生成 N 个子代后，选择性能最优的 N 个作为新种群

```bash
# GA 模式运行示例
bash scripts/cls/run_ga_alpaca.sh
bash scripts/sim/run_ga_alpaca.sh
bash scripts/sum/run_ga_alpaca.sh
```

### 3. 差分进化实现 (DEEvoluter)

DE 模式的进化流程：

- **供体设计**：提供多种 DE 模板变体（v1/v2/v3），适配不同的搜索策略
- **更新策略**：对每个提示 p，生成候选 p'，仅当 p' 优于 p 时替换

```bash
# DE 模式运行示例
bash scripts/cls/run_de_alpaca.sh
bash scripts/sum/run_de_alpaca.sh

# BBH 任务
cd BBH
bash scripts/run_de_cot.sh
bash scripts/run_ga_cot.sh
```

### 4. 进化模板设计

EvoPrompt 的关键设计是通过模板将 EA 算子映射为 LLM 提示：

```python
# data/template_ga.py - GA 模板示例
# 交叉模板：给定两个父代提示，让 LLM 生成融合两者优点的新提示
# 变异模板：给定一个父代提示，让 LLM 生成改进版本
```

### 5. 双模型架构

EvoPrompt 明确区分两个语言模型的角色：

- **进化模型** (`--llm_type`)：执行进化操作（交叉/变异），推荐 GPT-4 级别模型
- **任务模型** (`--language_model`)：使用提示执行目标任务，可以是任意 LLM

## 技术亮点

1. **无梯度离散优化**：完全避免梯度计算，在自然语言提示的离散空间中通过 EA 实现高效搜索，生成人类可读且连贯的优化提示。
2. **LLM 作为进化算子**：创新性地将 LLM 作为交叉和变异算子的执行者，使传统 EA 能够在文本空间中有效操作，解决了离散空间进化操作的设计难题。
3. **GA 与 DE 双实例化**：提供了遗传算法和差分进化两种进化策略的完整实现，并通过消融实验验证了不同策略的适用场景。
4. **广泛任务覆盖**：在 31 个数据集上进行了系统验证，涵盖分类、摘要、简化、BBH 推理等多类任务，证明了方法的通用性。
5. **LLM+EC 协同范式**：展示了 LLM 的语言理解能力与 EA 的全局搜索能力的互补协同，为后续 LLM 与传统算法结合的研究提供了方法论模板。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 提示自动优化 | EvoPrompt 是最早系统性地利用进化算法自动优化 LLM 提示的工作之一，其"进化搜索最优提示"的理念直接被 EvoAgentX 等后续 Self-Evolve 框架继承 |
| LLM+EC 协同范式 | 确立了 LLM 执行进化算子、EA 提供搜索框架的协同范式，为 Self-Evolve 系统中的"LLM 驱动的结构/代码进化"提供了直接方法论参考 |
| 离散空间优化 | 在 Agent 系统中，prompt 和 workflow 结构都是离散对象，EvoPrompt 的无梯度离散优化方法是 Self-Evolve 系统优化 Agent 行为的关键技术 |

## 参考资料

- [Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers (ICLR 2024)](https://openreview.net/forum?id=ZG3RaNIsO8)
- [CoT-hub](https://github.com/FranxYao/chain-of-thought-hub)
- [APE: Automatic Prompt Engineer](https://github.com/keirp/automatic_prompt_engineer)
- [LM-BFF](https://github.com/princeton-nlp/LM-BFF)
