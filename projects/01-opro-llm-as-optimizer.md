# OPRO: 大语言模型作为优化器

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/google-deepmind/opro |
| 作者 | Chengrun Yang*, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, Xinyun Chen* (Google DeepMind) |
| 论文 | Large Language Models as Optimizers (arXiv: 2309.03409) |
| 技术栈 | Python 3.10.13, OpenAI API (0.27.2), Google PaLM API (0.1.0), absl-py, numpy, pandas |
| 许可证 | Apache 2.0 (非官方 Google 产品) |

## 项目简介

OPRO (Optimization by PROmpting) 提出了一种全新的优化范式：**用大语言模型作为优化器**。传统优化依赖梯度或启发式算法，OPRO 则将优化问题转化为自然语言 prompt，让 LLM 在每轮迭代中基于历史解和得分生成更优的解（即新的 prompt）。

核心思想：**优化 prompt 本身也是优化问题**。LLM 通过阅读"之前哪些 prompt 效果好、哪些不好"来学习生成更好的 prompt。

## 目录结构

```
opro/
├── opro/
│   ├── optimization/
│   │   ├── optimize_instructions.py   # ★ 主入口: Prompt 优化
│   │   ├── opt_utils.py              # ★ 核心进化循环 + Meta-Prompt 生成
│   │   ├── optimize_linear_regression.py  # 线性回归优化
│   │   └── optimize_tsp.py            # 旅行商问题优化
│   ├── evaluation/
│   │   ├── evaluate_instructions.py   # ★ Prompt 评估入口
│   │   ├── eval_utils.py             # 评估工具函数
│   │   ├── metrics.py                # 指标计算（答案归一化、准确率）
│   │   └── eval_utils_test.py        # 单元测试
│   └── prompt_utils.py               # LLM API 封装（OpenAI + PaLM）
├── data/                              # 基准数据集
│   ├── gsm_data/                     # GSM8K（小学数学推理）
│   ├── MMLU-data/                    # MMLU（多任务语言理解）
│   ├── BIG-Bench-Hard-data/          # BBH（27个子任务）
│   ├── AQuA-data/                    # AQuA（代数问答）
│   └── MultiArith-data/              # MultiArith（多步算术）
├── results/                           # 实验结果
├── img/                               # 论文图片
└── misc/prompt_history/               # 历史优化轨迹（BBH 各任务）
```

## 核心模块分析

### 1. 进化/优化循环实现

OPRO 的核心循环实现在 `opt_utils.py` 的 `run_evolution()` 函数（第338-1035行）：

```
┌─────────────────────────────────────────────────────┐
│                   OPRO 优化循环                       │
│                                                     │
│  ┌──────────────┐    Meta-Prompt    ┌────────────┐  │
│  │ 指令-分数     │ ───────────────> │ 优化器 LLM  │  │
│  │ 历史记录      │                  │ (GPT/PaLM)  │  │
│  │ + Few-shot   │ <─────────────── │ temperature=1│  │
│  │ 示例         │   新生成的指令     └────────────┘  │
│  └──────┬───────┘                                    │
│         │ 提取/去重/过滤                              │
│         v                                            │
│  ┌──────────────┐                                   │
│  │ 评分器 LLM    │  在训练集上评估                     │
│  │ (GPT/PaLM)   │  每个指令跑全部训练样本               │
│  │ temperature=0│                                   │
│  └──────┬───────┘                                   │
│         │ 计算平均准确率                               │
│         v                                            │
│  ┌──────────────┐                                   │
│  │ 更新历史记录   │ ──> 下一步迭代                      │
│  │ (排序+截断    │     (最多200步)                     │
│  │  保留top-20)  │                                   │
│  └──────────────┘                                   │
└─────────────────────────────────────────────────────┘
```

**算法步骤详解**：

1. **初始化**：人工指定初始指令（如 `"Let's solve the problem."`）
2. **评估初始指令**：在训练集上用 scorer LLM 评估每条初始指令的准确率
3. **进化主循环**（默认200步）：
   - **构造 Meta-Prompt**（`gen_meta_prompt`）：组装历史指令-分数对 + few-shot 示例
   - **调用优化器 LLM**（temperature=1.0）：生成新候选指令
   - **提取指令**：GPT 用 `<INS>...</INS>` 标签，PaLM 用 `[...]` 方括号
   - **去重过滤**：MD5 哈希去重、长度>500 跳过、包含数字/INS 关键字跳过
   - **评估**：在训练集上用 scorer LLM（temperature=0.0）评估
   - **定期验证**：每 `eval_interval` 步在验证集上评估

**关键超参数**：

| 参数 | 默认值 | 含义 |
|------|--------|------|
| `num_search_steps` | 200 | 进化步数 |
| `num_generated_instructions_in_each_step` | 8 | 每步生成指令数 |
| `optimizer_llm_temperature` | 1.0 | 优化器温度（高温度增加多样性）|
| `scorer_llm_temperature` | 0.0 | 评分器温度（零温度确保确定性）|
| `max_num_instructions` | 20 | Meta-Prompt 中保留的最大指令数 |
| `num_score_buckets` | 100 | 分数离散化桶数 |

### 2. Prompt 工程模式

OPRO 使用**两层 Prompt 架构**：

**外层 Meta-Prompt（给优化器 LLM）**：

```
Your task is to generate the instruction <INS>. Below are some previous
instructions with their scores. The score ranges from 0 to 100.

text:
Let's solve the problem.
score:
6

text:
Take a deep breath and work on this problem step-by-step.
score:
80

Below are some problems.

input:
Q: <INS>
Janet's ducks lay 16 eggs per day...
A:
Ground truth answer:
48

Generate an instruction that is different from all the instructions <INS> above,
and has a higher score. The instruction should begin with <INS> and end with </INS>.
```

**内层 Task Prompt（给评分器 LLM）**：
```
Q: {优化后的 instruction}
{question}
A:
```

**指令位置模式**（4种）：

| 位置 | 格式 |
|------|------|
| `before_Q` | instruction \n Q: question \n A: |
| `Q_begin` | Q: instruction \n question \n A: |
| `Q_end` | Q: question \n instruction \n A: |
| `A_begin` | Q: question \n A: instruction |

**Few-shot 示例选择策略**：
- `accumulative_most_frequent`：累计错题最多的样本（推荐）
- `current_most_frequent`：当前 meta-prompt 中错题最多的样本
- `random`：随机选择（默认）
- 使用 `wrong_questions_from_start_counter` 追踪高频错题，引导优化器聚焦薄弱点

### 3. 评估框架

**评估流程**（`eval_utils.py` `evaluate_single_instruction()`）：
1. 根据指令位置构造 prompt
2. 调用 scorer LLM 获取回答
3. 答案解析与归一化（`metrics.py`）
4. 与真实答案比较计算准确率

**答案归一化**支持三种类型：
- **数值型**：移除单位符号($, %)，英文数字转换（eight → 8）
- **布尔型**：处理 yes/no, true/false, 0/1 等价关系
- **文本型**：精确匹配 + 标点移除后匹配

**支持数据集**：

| 数据集 | 类型 | 答案格式 |
|--------|------|----------|
| GSM8K | 小学数学推理 | 数值 |
| BBH | Big-Bench Hard (27子任务) | 多选/布尔/数值 |
| MMLU | 多任务理解 (57子任务) | 多选 (A/B/C/D) |
| AQuA | 代数问答 | 多选 (A-E) |
| MultiArith | 多步算术 | 数值 |

### 4. 跨任务优化

**线性回归优化**（`optimize_linear_regression.py`）：
- 优化目标：`f(w, b) = ||y - (X*w + b)||²`
- Meta-Prompt 格式：`input: w=15, b=14\nvalue: 50.0` → 生成新的 `(w, b)` 对
- 每步生成 8 个候选，最多 500 步

**旅行商问题优化**（`optimize_tsp.py`）：
- 优化目标：找最短路径
- Meta-Prompt 格式：`<trace> 0,1,2,3,... </trace>\nlength: 1234` → 生成新路径
- 支持 DP、nearest_neighbor、farthest_insertion 初始化

### 5. GitNexus 知识图谱

- **节点**：697 个符号节点
- **边**：826 条依赖/调用关系
- **社区**：9 个模块社区
- **核心进程**：
  - `Run_evolution → _bucketize_float`（进化主循环）
  - `Evaluate_single_instruction`（评估单条指令）
  - `gen_meta_prompt`（元提示生成）

## 技术亮点

1. **LLM-as-Optimizer 范式**：开创性地将 LLM 作为通用优化器，不依赖任务特定设计
2. **Prompt 自我改进闭环**：LLM 优化 prompt → 更好的 prompt 指导任务执行 → 更高的分数 → 反馈给 LLM 生成更好 prompt
3. **跨任务泛化**：同一框架覆盖数学推理、线性回归、组合优化（TSP）
4. **分数离散化**（`_bucketize_float`）：将连续准确率映射到有限桶（100个），避免优化器对微小差异过度敏感
5. **错题驱动**：`wrong_questions_from_start_counter` 追踪高频错题，动态选择 few-shot 示例

## 与 Self-Evolve 关联

| 维度 | OPRO 贡献 |
|------|-----------|
| 进化循环 | LLM 驱动的迭代优化范式：历史反馈 → 生成候选 → 评估 → 更新 |
| Prompt 工程 | Meta-prompt 模式：用 LLM 优化 LLM 的 prompt，双层架构 |
| 评估 | 基于任务的自动评分闭环，分数离散化 + 错题追踪 |
| 跨任务 | 框架可从 prompt 优化扩展到数学优化，证明泛化能力 |
| 启示 | "LLM 作为优化器" 可扩展到 Agent 系统的自我进化（优化 Agent 的行为指令） |

## 参考资料

- 论文：[Large Language Models as Optimizers](https://arxiv.org/abs/2309.03409)
- Google DeepMind 官方实现

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/google_deepmind__opro`（指向 `repos/google_deepmind__opro` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/google_deepmind__opro --index-only --skip-git --name opro`。
- **知识图谱规模**：697 symbols / 826 edges / 9 clusters / 12 flows。
- **查询语句**：`prompt optimization optimizer evaluate instruction meta prompt loop`。
- **核心执行流程候选**：
  - Run_evolution → _bucketize_float
  - Evaluate_single_instruction → _format_mmlu_example
  - Evaluate_single_instruction → _format_aqua_example
  - Main → Evaluate_distance
- **关键符号/文件**：
  - `opt_utils.py`（`opro/optimization/opt_utils.py`）
  - `optimize_linear_regression.py`（`opro/optimization/optimize_linear_regression.py`）
  - `main`（`opro/optimization/optimize_linear_regression.py`）
  - `gen_meta_prompt`（`opro/optimization/optimize_linear_regression.py`）
  - `optimize_tsp.py`（`opro/optimization/optimize_tsp.py`）
  - `gen_meta_prompt`（`opro/optimization/optimize_tsp.py`）
- **调用关系上下文**：
  - 符号 `opt_utils.py` 位于 `opro/optimization/opt_utils.py` 第 ?–? 行
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
