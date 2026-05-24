# FunSearch: 通过程序搜索实现数学发现

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/google-deepmind/funsearch |
| 作者 | Romera-Paredes, Barekatain, Novikov, Balog, Kumar, Dupont, Ruiz, Ellenberg, Wang, Fawzi, Kohli, Fawzi |
| 论文 | Mathematical discoveries from program search with large language models (Nature, 2023) |
| 技术栈 | Python, numpy, scipy, absl-py, Python ast/tokenize |
| 许可证 | Apache 2.0 (代码), CC-BY 4.0 (其他) |

## 项目简介

FunSearch 是 Google DeepMind 发表在 **Nature** 上的突破性工作，首次证明 LLM 可以为数学领域做出**新发现**。它将进化搜索与 LLM 结合，不直接搜索解空间，而是搜索**生成解的函数（程序）空间**。LLM 充当"智能变异器"——读取已有程序变体，生成改进版的新程序。

核心成就：
- 发现了比人类已知更好的**帽子集（cap set）**构造方法
- 发现了更好的**装箱问题（bin packing）**启发式算法
- 发现了新的**循环图独立集**构造

## 目录结构

```
FunSearch/
├── implementation/                    # 核心：进化算法实现
│   ├── funsearch.py                   # ★ 主入口，管线编排
│   ├── sampler.py                     # ★ LLM 采样器
│   ├── evaluator.py                   # ★ 程序评估器（三重过滤）
│   ├── programs_database.py           # ★ 进化种群数据库（岛屿模型核心）
│   ├── code_manipulation.py           # Python 代码解析/操作（AST+tokenize）
│   ├── config.py                      # 配置数据类
│   └── *_test.py                      # 单元测试
├── cap_set/                           # 帽子集问题
├── admissible_set/                    # 容许集问题
├── bin_packing/                       # 装箱问题
├── cyclic_graphs/                     # 循环图问题
└── corner_free_set/                   # 无角集问题
```

## 核心模块分析

### 1. 进化循环实现

FunSearch 的进化管线由三组并行组件驱动：

```
┌──────────────────────────────────────────────────────────┐
│                    FunSearch 管线                          │
│                                                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│  │ ProgramsDB │───>│ Sampler  │───>│   LLM    │            │
│  │ (种群数据库)│<──│ (采样器)  │<──│(代码生成) │            │
│  └─────┬────┘    └──────────┘    └──────────┘            │
│        │               │                                  │
│        │        ┌──────┴──────┐                          │
│        │        │  Evaluator  │                          │
│        │        │  (评估器)    │                          │
│        │        └─────────────┘                          │
│        │               │                                  │
│        └───────────────┘                                  │
│         (注册得分高的程序)                                   │
└──────────────────────────────────────────────────────────┘
```

**Sampler.sample() 无限循环**（`sampler.py`）：
```python
def sample(self):
    while True:
        prompt = self._database.get_prompt()         # 1. 从数据库获取 prompt
        samples = self._llm.draw_samples(prompt.code) # 2. LLM 生成多个候选
        for sample in samples:
            chosen_evaluator = np.random.choice(self._evaluators)
            chosen_evaluator.analyse(                 # 3. 评估每个候选
                sample, prompt.island_id, prompt.version_generated)
```

**用户通过装饰器标记函数**：
- `@funsearch.run`：评估入口（返回分数）
- `@funsearch.evolve`：LLM 要进化的目标函数

### 2. 种群数据库与岛屿模型

`programs_database.py` 实现了**三层种群结构**：

```
ProgramsDatabase
  └── Island[0..N]       (岛屿 = 独立子种群)
       └── Cluster        (簇 = 相同 Signature 的程序集合)
            └── Program   (具体程序变体)
```

**岛屿模型**（10个独立岛屿）：
- 每个岛屿独立进化
- 定期淘汰后 50% 岛屿，用最强岛屿的最佳程序作为创始者重新初始化
- 类似遗传算法中的"迁移"操作，防止早熟收敛

**簇级聚类**：
- 按 Signature（各测试用例得分元组）聚合程序
- 簇内偏好**更短的程序**（奥卡姆剃刀原则）
- 带温度衰减的 softmax 采样：初始温度 0.1，高度偏向高分簇

**岛屿重置机制**：
```python
def reset_islands(self):
    # 按得分排序岛屿
    indices_sorted_by_score = np.argsort(self._best_score_per_island)
    # 重置后50%的岛屿
    for island_id in reset_islands_ids:
        founder = self._best_program_per_island[np.random.choice(keep_islands_ids)]
        self._register_program_in_island(founder, island_id, ...)
```

### 3. Prompt 工程模式

FunSearch 的 prompt 设计极为精妙（`Island._generate_prompt()`）：

**实际 Prompt 示例**（Cap Set 问题）：
```python
"""Finds large cap sets."""
import numpy as np
import utils_capset

def priority_v0(element, n):
  """Returns the priority with which we want to add `element`."""
  priority = element
  return ...

def priority_v1(element, n):
  """Improved version of `priority_v0`."""
  priority = element ** 2
  return ...

def priority_v2(element, n):
  """Improved version of `priority_v1`."""

```

**六大 Prompt 设计模式**：

1. **版本化命名**：`priority_v0`, `priority_v1`, `priority_v2`——LLM 看到进化链
2. **渐进式 Docstring**：`"Improved version of priority_v1"`——明确改进任务
3. **按分数排序**：低分在前、高分在后，LLM 最后读到最好的实现
4. **空函数体**：`priority_v2` 只有签名，LLM 补全函数体
5. **递归支持**：`rename_function_calls()` 使用 tokenizer 级别重命名
6. **上下文保持**：保留完整 imports 和辅助函数

### 4. 评估框架

**评估器架构**（`evaluator.py`）：

**三重安全过滤**：
1. **执行成功性**（`runs_ok`）：沙箱无错运行 + 超时保护（30秒）
2. **无祖先调用**（`_calls_ancestor`）：防止直接调用前代高分实现"作弊"
3. **返回值类型**（`int/float`）：确保返回数值型分数

**得分聚合**：
- **Signature**：每个测试用例的独立得分，用于簇分类
- **Reduced Score**：取最后一个测试用例得分排序

**代码后处理**（`_trim_function_body()`）：
- 使用 Python AST 反复裁剪直到语法正确
- 处理 LLM 输出的不完整代码

### 5. 默认配置

| 参数 | 默认值 | 含义 |
|------|--------|------|
| `num_islands` | 10 | 岛屿数量 |
| `functions_per_prompt` | 2 | 每个 prompt 的历史程序数 |
| `num_samplers` | 15 | 采样器数量 |
| `num_evaluators` | 140 | 评估器数量（1:9 比例说明评估是瓶颈）|
| `samples_per_prompt` | 4 | 每次 prompt 的采样数 |
| `reset_period` | 14400 (4小时) | 岛屿重置周期 |
| `cluster_sampling_temperature_init` | 0.1 | 初始采样温度（低温=偏向高分）|

**注意**：LLM 接口和沙箱执行是用户需要实现的组件（`NotImplementedError`），DeepMind 开源的是算法框架而非完整基础设施。

### 6. 代码操作工具

`code_manipulation.py` 提供的核心功能：
- `text_to_program()` / `text_to_function()`：Python AST 代码解析
- `rename_function_calls()`：tokenizer 级函数调用重命名
- `get_functions_called()`：提取所有被调用的函数名
- `yield_decorated()`：查找带特定装饰器的函数

## 技术亮点

1. **Nature 论文**：LLM + 进化计算在顶级科学期刊上的标志性成果
2. **函数空间搜索**：不搜索解，而是搜索生成解的函数——更结构化，LLM 可利用代码语义
3. **岛屿模型**：10 个独立种群 + 定期淘汰迁移，防止早熟收敛
4. **Signature 级聚类**：相同得分模式的程序聚合，避免种群被等价变体淹没
5. **奥卡姆剃刀**：簇内偏好更短程序，引导产出简洁方案
6. **鲁棒代码处理**：AST 解析 + tokenize 重命名 + 语法容错裁剪

## 与 Self-Evolve 关联

| 维度 | FunSearch 贡献 |
|------|---------------|
| 进化循环 | **LLM + 进化算法** 的经典范式：Sampler→LLM→Evaluator→Database 闭环 |
| 程序进化 | 函数空间搜索（非解空间），是代码自我改进的先驱工作 |
| 多样性 | 岛屿模型 + Signature 聚类 + 温度调度，保证进化不陷入局部最优 |
| Prompt | 版本化命名 + 渐进式 Docstring 的精妙 prompt 设计 |
| 评估 | 三重安全过滤 + 沙箱执行 + AST 代码后处理 |
| 启示 | FunSearch 范式可直接扩展到 Agent 系统的自我进化：进化生成 Agent 行为的函数 |

## 参考资料

- 论文：[Mathematical discoveries from program search with large language models](https://www.nature.com/articles/s41586-023-06924-6) (Nature, 2023)
- Google DeepMind 官方实现

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/google_deepmind__funsearch`（指向 `repos/google_deepmind__funsearch` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/google_deepmind__funsearch --index-only --skip-git --name funsearch`。
- **知识图谱规模**：310 symbols / 441 edges / 10 clusters / 7 flows。
- **查询语句**：`program database evaluator sampler evolve score island`。
- **核心执行流程候选**：
  - Text_to_function → Return_program
  - Analyse → _trim_function_body
  - Register_program → _reduce_score
  - Reset_islands → Register_program
- **关键符号/文件**：
  - `funsearch.py`（`implementation/funsearch.py`）
  - `_extract_function_names`（`implementation/funsearch.py`）
  - `main`（`implementation/funsearch.py`）
  - `test_destroy_islands`（`implementation/programs_database_test.py`）
  - `programs_database_test.py`（`implementation/programs_database_test.py`）
  - `ProgramsDatabaseTest`（`implementation/programs_database_test.py`）
- **调用关系上下文**：
  - 符号 `funsearch.py` 位于 `implementation/funsearch.py` 第 ?–? 行
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
