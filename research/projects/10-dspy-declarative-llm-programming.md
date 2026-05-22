# DSPy: 声明式 LLM 编程框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/stanfordnlp/dspy |
| Star | 25k+ |
| 技术栈 | Python 3.9+, Pydantic, LiteLLM, Optuna (可选) |
| 许可证 | MIT |
| 安装 | `pip install dspy` |
| 当前版本 | 3.2.1 |

## 项目简介

DSPy（Declarative Self-improving Python）是斯坦福 NLP 组开发的**声明式 LLM 编程框架**。核心理念：**将 Prompt 视为可优化的程序参数**，而非手工编写的字符串。

通过 Signature（签名）→ Module（模块）→ Optimizer（优化器）三层抽象，DSPy 实现了 LLM 应用的自动化 Prompt 优化，是 Prompt Engineering 向 **Prompt Programming** 范式转变的代表作。

## 目录结构

```
dspy/
├── dspy/
│   ├── __init__.py               # 主入口
│   ├── primitives/               # 基础原语
│   │   ├── module.py             # Module 基类（所有程序的核心）
│   │   ├── example.py            # Example 数据结构
│   │   ├── prediction.py         # Prediction 结果
│   │   └── python_interpreter.py # Python 代码解释器
│   ├── signatures/               # 签名系统
│   │   ├── signature.py          # Signature 元类 + make_signature
│   │   └── field.py              # InputField / OutputField
│   ├── predict/                  # 预测器
│   │   ├── predict.py            # Predict 基础预测
│   │   ├── chain_of_thought.py   # ChainOfThought
│   │   ├── react.py              # ReAct
│   │   ├── program_of_thought.py # ProgramOfThought
│   │   ├── refine.py             # Refine（自我改进）
│   │   ├── retry.py              # Retry（重试机制）
│   │   ├── best_of_n.py          # BestOfN（N选一）
│   │   ├── multi_chain_comparison.py
│   │   ├── parallel.py           # 并行执行
│   │   └── avatar/               # Avatar Agent
│   ├── teleprompt/               # ★ 优化器（Teleprompters）
│   │   ├── bootstrap.py          # BootstrapFewShot（少样本引导）
│   │   ├── mipro_optimizer_v2.py # MIPROv2（指令+少样本联合优化）
│   │   ├── simba.py              # SIMBA（随机小批量梯度上升）
│   │   ├── copro_optimizer.py    # COPRO（指令优化）
│   │   ├── signature_opt.py      # 签名优化
│   │   ├── grpo.py               # GRPO（强化学习优化）
│   │   ├── ensemble.py           # 集成优化
│   │   ├── bootstrap_finetune.py # 微调数据引导
│   │   └── gepa/                 # GEPA 优化器
│   ├── evaluate/                 # 评估框架
│   │   ├── evaluate.py           # Evaluate 类（批量评估）
│   │   ├── metrics.py            # 标准度量
│   │   └── auto_evaluation.py    # 自动评估
│   ├── propose/                  # 提案系统（用于 MIPROv2）
│   │   ├── grounded_proposer.py  # 基于证据的提案器
│   │   └── propose_base.py       # 提案基类
│   ├── clients/                  # LLM 客户端
│   │   ├── lm.py                 # LM 基类
│   │   ├── openai.py             # OpenAI
│   │   ├── _litellm.py           # LiteLLM 统一接口
│   │   ├── embedding.py          # 嵌入
│   │   └── cache.py              # 缓存
│   ├── retrievers/               # 检索器
│   ├── adapters/                 # 适配器（Prompt 格式化）
│   │   ├── chat_adapter.py       # Chat 格式
│   │   ├── json_adapter.py       # JSON 格式
│   │   └── xml_adapter.py        # XML 格式
│   ├── datasets/                 # 数据集
│   └── utils/                    # 工具
└── tests/
```

## 核心模块分析

### 1. Signature → Module → Optimizer 三层抽象

**Signature（签名）**：声明式定义输入/输出

```python
class MySignature(dspy.Signature):
    """给定问题，生成答案。"""
    question: str = InputField(desc="用户问题")
    reasoning: str = OutputField(desc="推理过程")
    answer: str = OutputField(desc="最终答案")

# 或使用简写语法
sig = dspy.Signature("question -> answer")
```

**Module（模块）**：可组合的程序单元（类似 PyTorch Module）

```python
class MyProgram(dspy.Module):
    def __init__(self):
        self.predictor = dspy.ChainOfThought("question -> answer")

    def forward(self, question):
        return self.predictor(question=question)
```

**Optimizer（优化器）**：自动搜索最优 Prompt

```python
from dspy.teleprompt import BootstrapFewShot

optimizer = BootstrapFewShot(metric=my_metric, max_bootstrapped_demos=4)
optimized_program = optimizer.compile(MyProgram(), trainset=train_data)
```

### 2. 优化器家族（Teleprompters）

DSPy 提供多种优化策略，从少样本到指令优化：

| 优化器 | 策略 | 特点 |
|--------|------|------|
| `BootstrapFewShot` | 自动搜索少样本示例 | 通过 Teacher 模型引导，收集成功的推理轨迹 |
| `MIPROv2` | 联合优化指令+少样本 | 使用 Optuna 贝叶斯搜索，轻/中/重三档 |
| `SIMBA` | 随机小批量梯度上升 | LLM 自我反思生成改进规则 |
| `COPRO` | 指令优化 | 生成候选指令，评估选择最优 |
| `BootstrapFinetune` | 引导微调数据 | 收集轨迹用于模型微调 |
| `GRPO` | 强化学习优化 | 策略梯度方法 |

**SIMBA 优化流程**（自我改进核心）：
```
1. 采样小批量数据
2. 识别高方差（困难）样本
3. 两种改进策略：
   a. 自我反思 → 生成改进规则（Rule）
   b. 添加成功示例 → 作为演示（Demo）
4. 评估改进后的程序
5. 保留最优候选
```

**BootstrapFewShot 核心循环**（`teleprompt/bootstrap.py`）：
```python
class BootstrapFewShot(Teleprompter):
    def compile(self, program, teacher, trainset):
        # 对每个训练样本：
        # 1. Teacher 执行程序，收集轨迹
        # 2. 用 metric 检查是否成功
        # 3. 成功的轨迹作为少样本示例
        # 4. 支持多轮（max_rounds），每轮 temperature=1.0
```

### 3. Prompt 工程模式

DSPy 将 Prompt 工程转化为**程序优化**：

- **签名（Signature）**：结构化的输入/输出声明，取代手写 Prompt
- **适配器（Adapter）**：Chat / JSON / XML / BAML 格式，自动格式化
- **优化（Optimize）**：通过 Teleprompter 自动搜索最优指令和示例组合

**GroundedProposer**（`propose/grounded_proposer.py`）：
- 分析程序执行轨迹
- 基于成功/失败案例生成改进提案
- 用于 MIPROv2 的指令搜索

### 4. 评估框架

```python
from dspy.evaluate import Evaluate

evaluator = Evaluate(devset=test_data, metric=my_metric, num_threads=4)
score = evaluator(program)
# 返回 EvaluationResult(score=85.3, results=[...])
```

- 支持 `metric_threshold` 过滤低质量示例
- 并行评估（`ParallelExecutor`）
- 自动追踪 LM 调用历史和 Token 用量

## 技术亮点

1. **声明式编程**：Signature 声明 → Module 组合 → Optimizer 自动优化
2. **Prompt 即参数**：将 Prompt 视为可优化的程序参数，而非手写字符串
3. **丰富优化器**：从 BootstrapFewShot 到 SIMBA，覆盖少样本/指令/联合优化
4. **模块化设计**：类似 PyTorch 的 Module 前向传播 + 反向优化范式
5. **多适配器**：Chat/JSON/XML/BAML 格式自由切换
6. **SIMBA 自我改进**：LLM 分析自身执行结果，生成改进规则

## 与 Self-Evolve 关联

| 维度 | DSPy 贡献 |
|------|-----------|
| Prompt 优化 | **最成熟的自动 Prompt 优化框架**，将 Prompt 视为可优化参数 |
| 自我改进 | SIMBA 的自我反思 + 规则生成机制是 Agent 自我进化的参考 |
| 模块化 | Module/Signature/Predict 三层抽象可借鉴于 Agent 架构设计 |
| 评估 | Evaluate 框架 + metric 驱动的优化循环 |
| 启示 | "Prompt Programming" 范式：从手工调 Prompt 到自动化程序优化 |

## 参考资料

- [DSPy GitHub](https://github.com/stanfordnlp/dspy)
- [DSPy 文档](https://dspy.ai)
- [DSPy 论文](https://arxiv.org/abs/2310.03714)
- [SIMBA 优化器](https://dspy.ai/api/optimizers/SIMBA/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/stanfordnlp__dspy`（指向 `repos/stanfordnlp__dspy` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/stanfordnlp__dspy --index-only --skip-git --name DSPy`。
- **知识图谱规模**：9494 symbols / 16378 edges / 474 clusters / 300 flows。
- **查询语句**：`optimize compile bootstrap teleprompt fewshot instruction`。
- **核心执行流程候选**：
  - Compile → _get_signature
  - Compile → Context
  - Compile → Thread_safe_evaluator
  - Compile → _set_num_trials_from_num_candidates
  - Compile → Create_minibatch
- **关键符号/文件**：
  - `BootstrapFewShot`（`dspy/teleprompt/bootstrap.py`）
  - `MIPROv2`（`dspy/teleprompt/mipro_optimizer_v2.py`）
  - `SIMBA`（`dspy/teleprompt/simba.py`）
  - `Module`（`dspy/primitives/module.py`）
  - `Signature`（`dspy/signatures/signature.py`）
  - `Evaluate`（`dspy/evaluate/evaluate.py`）
- **调用关系上下文**：
  - 符号 `BootstrapFewShot` 继承自 `Teleprompter`，通过 `compile()` 方法执行优化循环。
  - 符号 `SIMBA` 使用小批量采样 + 自我反思规则生成策略。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
