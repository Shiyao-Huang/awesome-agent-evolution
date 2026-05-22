# LLaMEA: 大语言模型驱动的进化算法自动发现框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/XAI-liacs/LLaMEA |
| Star | 1.2k+ |
| 技术栈 | Python 3.11+, OpenAI/Gemini/Ollama API, IOHexperimenter, SMAC (可选), NumPy |
| 许可证 | MIT |
| 安装 | `pip install llamea` |

## 项目简介

LLaMEA (Large Language Model Evolutionary Algorithm) 是一个利用大语言模型自动生成和优化元启发式算法的框架，发表于 IEEE Transactions on Evolutionary Computation (TEVC 2025)。该项目自称为 Google DeepMind AlphaEvolve 的**完全开源后继者**，获得了 GECCO 2025 银质 Humies 奖。

LLaMEA 的核心思想是将 LLM 的代码生成能力与进化循环相结合：LLM 负责生成和变异算法代码，评估函数提供性能反馈，整个过程形成"生成-评估-反馈-变异"的闭环。该框架无需用户具备深厚的算法设计知识，即可自动发现针对特定问题的高效优化算法。

框架的扩展性极强，支持多种高级特性：通过 SMAC 进行环内超参数优化 (LLaMEA-HPO) 以将数值调优从 LLM 卸载；通过小生境策略 (fitness sharing/clearing) 维护种群多样性；通过统一 diff 模式实现高效的代码编辑；以及多目标优化和种群评估模式。应用场景涵盖黑盒优化、贝叶斯优化算法发现、机器学习管道自动生成等。

## 目录结构

```
llamea/
├── llamea/                     # 核心库
│   ├── llamea.py               # 主类，进化循环
│   ├── llm.py                  # LLM 封装 (OpenAI, Gemini, Ollama, Dummy)
│   ├── solution.py             # Solution 数据类
│   ├── diffmodemanager.py      # SEARCH/REPLACE diff 模式管理
│   ├── feature_guidance.py     # 基于复杂度的变异引导
│   ├── ast_features.py         # AST 特征提取
│   ├── multi_objective_fitness.py  # 多目标适应度
│   ├── pareto_archive.py       # Pareto 前沿存档
│   ├── treeshap.py             # TreeSHAP 解释性分析
│   ├── loggers.py              # 实验日志
│   └── utils.py                # 工具函数
├── examples/                   # 示例脚本
│   ├── black-box-optimization.py       # BBOB 优化示例
│   ├── black-box-opt-with-HPO.py       # 带 HPO 的优化示例
│   └── automl_example.py               # AutoML 管道示例
├── benchmarks/                 # 基准测试
├── logreader/                  # 对话日志阅读器 (Flask 应用)
└── docs/notebooks/             # Colab 教程
```

## 核心模块分析

### 1. LLaMEA 主类 (llamea.py)

LLaMEA 类实现了完整的进化循环，支持丰富的配置参数：

```python
from llamea import LLaMEA

def your_evaluation_function(solution):
    # 评估函数：返回反馈文本、质量分数、错误信息
    return "feedback for LLM", 0.1, ""

optimizer = LLaMEA(
    f=your_evaluation_function,
    api_key="your_api_key",
    n_parents=5,          # 父代数量
    n_offspring=5,        # 子代数量
    budget=100,           # 进化代数
    niching="clearing",   # 多样性策略
    diff_mode=True,       # diff 编辑模式
    HPO=True,             # 环内超参优化
)

best_solution, best_fitness = optimizer.run()
```

### 2. LLM 接口层 (llm.py)

支持多种 LLM 后端的统一接口：

- `OpenAI_LLM`：GPT-4、GPT-3.5 等
- `Gemini_LLM`：Google Gemini 系列
- `Ollama_LLM`：本地部署模型
- `Dummy_LLM`：测试用

### 3. Diff 模式管理 (diffmodemanager.py)

LLaMEA 支持 SEARCH/REPLACE 风格的代码编辑模式，LLM 返回 diff 补丁而非完整代码，大幅减少 token 消耗：

```python
# LLM 返回类似以下格式的 diff：
# <<SEARCH>>
# def evaluate(self, x):
#     return -x**2
# <<REPLACE>>
# def evaluate(self, x):
#     return -x**2 + 0.1 * np.sin(x)
```

### 4. 进化提示架构

LLaMEA 的提示系统包含四个可配置的提示模板：

| 参数 | 用途 |
|------|------|
| `role_prompt` | LLM 系统角色设定 (默认: "You are a highly skilled computer scientist") |
| `task_prompt` | 问题描述，指导 LLM 生成何种算法 |
| `example_prompt` | 示例代码 |
| `output_format_prompt` | 输出格式要求 |

### 5. LLaMEA-HPO 扩展

通过集成 SMAC 进行环内超参数优化，将数值参数调优从 LLM 的职责中分离：

```python
# LLaMEA-HPO 流程：
# 1. LLM 生成算法代码 + ConfigSpace 超参数定义
# 2. SMAC 搜索最优超参数组合
# 3. 评估最优配置的性能
# 4. 将结果反馈给 LLM 进行结构性改进
```

### 6. 代码进化图 (Code Evolution Graphs)

LLaMEA 引入了代码进化图的概念，将算法进化过程中的代码变更可视化为有向图，每条边代表一次变异操作，每个节点代表一个完整的算法版本，便于分析进化过程中的结构性变化。

## 技术亮点

1. **全自动算法发现**：从任务描述到高性能算法的端到端自动化，无需任何算法设计先验知识即可生成问题特定的优化算法。
2. **环内超参数优化 (LLaMEA-HPO)**：将超参数调优卸载给 SMAC，使 LLM 专注于结构性的算法创新，显著减少 LLM 查询开销并提高搜索效率。
3. **多维度多样性维护**：支持 fitness sharing、clearing 等小生境策略，以及 MAP-Elites 风格的行为描述符，确保种群在搜索空间中的广泛覆盖。
4. **统一 Diff 编辑模式**：通过 SEARCH/REPLACE 补丁实现高效的代码变异，将 token 使用量降至完整代码重写的 10-20%。
5. **多目标与 Pareto 优化**：内置 Pareto 存档和非支配排序，支持同时优化多个冲突目标。
6. **全流程可复现**：每篇论文配有 Zenodo 数据集，包含所有生成的算法和 IOH 日志数据。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| LLM 驱动的代码进化范式 | LLaMEA 确立了"LLM 生成代码 -> 评估 -> 反馈 -> LLM 变异代码"的基础进化范式，是 Self-Evolve 系统代码自动改进的核心技术栈 |
| 自适应变异与引导 | 通过 AST 特征提取和复杂度引导的变异策略，为 Self-Evolve 系统中的智能代码修改提供了技术参考 |
| 分层优化架构 | LLaMEA-HPO 将结构搜索与参数优化分离的架构，启发了 Self-Evolve 系统中 workflow 结构优化与 prompt 调优的分层设计 |

## 参考资料

- [LLaMEA: A Large Language Model Evolutionary Algorithm (IEEE TEVC 2025)](https://ieeexplore.ieee.org/abstract/document/10752628/)
- [LLaMEA-HPO: In-the-loop Hyper-Parameter Optimization (ACM TELO 2025)](https://dl.acm.org/doi/abs/10.1145/3731567)
- [Code Evolution Graphs (GECCO 2025)](https://arxiv.org/abs/2503.16668)
- [Colab Demo](https://colab.research.google.com/github/XAI-liacs/LLaMEA/blob/main/docs/notebooks/simple_example.ipynb)
