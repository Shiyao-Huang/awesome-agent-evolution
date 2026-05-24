# ADAS: 自动化智能体系统设计

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ShengranHu/ADAS |
| 作者 | Shengran Hu, Cong Lu, Jeff Clune |
| 论文 | Automated Design of Agentic Systems (arXiv: 2408.08435) |
| 会议 | **ICLR 2025**, NeurIPS 2024 Open-World Agent Workshop **Outstanding Paper** |
| 技术栈 | Python 3.11, OpenAI API (gpt-4o + gpt-3.5-turbo), ThreadPoolExecutor |
| 许可证 | Apache 2.0 |

## 项目简介

ADAS (Automated Design of Agentic Systems) 提出了一个全新研究方向：**自动设计强大的智能体系统**。核心算法 **Meta Agent Search** 让一个"元 Agent"通过编程来自动发明新的 Agent 设计。

核心理念：**智能体架构本质上是控制流代码**。搜索空间是所有可由 `LLMAgentBase` 构建块组合的 Python 程序空间，比传统 Prompt 优化搜索空间大得多。

## 目录结构

```
ADAS/
├── _arc/                    # ARC 抽象推理挑战
│   ├── search.py            # ★ 搜索+评估主逻辑
│   ├── arc_prompt.py        # ★ Meta Agent Prompt + 初始种子架构
│   └── utils.py             # 评估工具函数
├── _drop/                   # DROP 阅读理解（同构）
├── _gpqa/                   # GPQA 研究生问答（同构）
├── _mgsm/                   # MGSM 多语言数学（同构）
├── _mmlu/                   # MMLU 知识问答（同构）
├── _transfer_math/          # 跨域迁移评估
├── dataset/                 # 各基准数据集
├── results/                 # 搜索结果 JSON
└── misc/                    # 算法图示
```

每个领域自包含：`search.py` + `{domain}_prompt.py` + `utils.py`，约 500 行核心代码。

## 核心模块分析

### 1. Meta Agent Search 算法（进化循环）

搜索主循环（`_arc/search.py` 第 237-330 行）：

```
初始化:
  archive = 初始种子架构 (CoT, Self-Refine, LLM Debate, CoT-SC, QD)
  对每个种子: fitness = evaluate(架构)

进化循环 (for n = 1 to N_generation):
  # 阶段 1: 生成新架构
  prompt = 构建 Prompt(整个 archive 历史)
  next_solution = LLM_生成(prompt)

  # 阶段 2: 两次 Reflexion 自我反思
  next_solution = LLM_反思(初始提议, 反思提示1)  # 评估有趣性+发现错误
  next_solution = LLM_反思(反思后提议, 反思提示2)  # 基于"错误实现示例"修正

  # 阶段 3: 评估 + 调试循环 (最多3次)
  for debug_attempt in range(debug_max):
    try:
      acc_list = evaluate(next_solution.code)
      break
    except:
      next_solution = LLM_调试(错误信息)

  # 阶段 4: 记录结果
  next_solution.fitness = bootstrap_ci(acc_list)
  archive.append(next_solution)
```

**三层生成-反思-调试机制**：
1. **初始提议**：基于历史 archive 提出新架构
2. **Reflexion 1**：评估"有趣性"(interestingness)、发现实现错误、提出改进
3. **Reflexion 2**：基于预定义的 10 种"错误实现模式"进一步修正
4. **评估调试**：最多 3 次错误反馈自动修复

### 2. Prompt 工程模式

**元智能体 Prompt 结构**（`arc_prompt.py` base 变量，第 198-618 行）：

1. **概述**：角色、目标、任务描述
2. **任务示例**：具体 ARC 任务的输入输出
3. **可用工具代码**：`LLMAgentBase`、`AgentArchitecture`、`Info` 等完整 API
4. **历史 Archive**：`[ARCHIVE]` 占位符替换为所有已发现的架构
5. **输出格式要求**：thought/name/code 三字段 JSON
6. **错误实现示例**：10 种常见错误模式及修正
7. **任务指令**："跳出框框思考"

**元智能体输出格式**：
```python
EXAMPLE = {
    "thought": "**Insights:**\n...\n**Overall Idea:**\n...",
    "name": "Name of your proposed agent",
    "code": """def forward(self, taskInfo):
    # 完整的 Python 函数
    return answer
"""
}
```

**基础构建块 `LLMAgentBase`**：
```python
class LLMAgentBase():
    def __init__(self, output_fields, agent_name, role, model, temperature):
        # output_fields 定义 LLM 需要返回的字段

    def __call__(self, input_infos: list[Info], instruction: str) -> list[Info]:
        # 输入: Info 列表 + 自然语言指令
        # 输出: Info 列表
```

**初始种子架构**（ARC 领域 5 个，MMLU 领域 7 个）：

| 名称 | 策略 |
|------|------|
| Chain-of-Thought | 单步思考+代码生成 |
| Self-Refine (Reflexion) | 迭代自我修正 |
| LLM Debate | 多角色辩论（谜题设计师 vs 逻辑专家）|
| CoT-SC (Self-Consistency) | N=5 并行 CoT + 最终决策 |
| Quality-Diversity | 生成多样化解 + Top-K 排序 |
| Step-back Abstraction (MMLU) | 先抽象再推理 |
| Dynamic Role Assignment (MMLU) | 动态角色分配 |

### 3. 评估框架

**动态代码执行**（`evaluate_forward_fn()`）：
```python
namespace = {}
exec(forward_str, globals(), namespace)          # 动态执行 LLM 生成的代码
func = namespace[names[0]]
setattr(AgentSystem, "forward", func)             # 注入为方法

# 多线程并行评估
with ThreadPoolExecutor(max_workers=32-48) as executor:
    acc_list = list(executor.map(call_forward, task_queue))
```

**适应度度量**：Bootstrap 95% 置信区间（100,000 次重采样）

**各领域基准**：

| 领域 | 数据集 | 评估指标 | 验证集大小 |
|------|--------|---------|-----------|
| ARC | ARC 抽象推理 | 精确匹配 (grid) | 采样 val |
| DROP | DROP v0 dev | F1 | 128 |
| GPQA | GPQA Diamond | 精确匹配 (A/B/C/D) | 32 |
| MGSM | MGSM 多语言 | 数值精确匹配 | 128 |
| MMLU | MMLU CSV | 精确匹配 (A/B/C/D) | 128 |

**迁移评估**：ARC 上搜索到的最优架构直接在 GSM8K/SVAMP/ASDiv/DROP/MMLU/GPQA 上测试。

**双层 LLM 架构**：
- **Meta Agent**：gpt-4o-2024, temperature=0.8（创造性高）
- **Inner Agent**：gpt-3.5-turbo-0125, 温度由发现的架构自行设定

### 4. 实际进化轨迹

从 `results/arc_gpt3.5_results.json` 可见：

| 代数 | 架构名称 | 适应度(中位数) |
|------|---------|--------------|
| 初始 | Chain-of-Thought | 3.0% |
| 初始 | Self-Refine | 8.0% |
| 初始 | Quality-Diversity | 6.0% |
| 4 | **Memory-Augmented Agent** | **11.0%** |
| 5 | Domain-Specific Reasoning | 8.0% |

Memory-Augmented Agent（第 4 代）引入记忆缓冲区，表现最佳。

## 技术亮点

1. **代码即智能体**：搜索空间是完整 Python 程序，包含控制流、多 Agent 协作、反馈机制
2. **开放式搜索**：无预定义搜索空间边界，可发明全新设计模式
3. **三层反思**：初始提议 + 2 次 Reflexion + 评估调试循环
4. **累积式 Archive**：所有历史发现可见（不做淘汰）
5. **跨域迁移**：发现的架构在未见过的任务上仍然有效
6. **极简实现**：约 500 行核心代码，仅依赖 OpenAI API

## 与 Self-Evolve 关联

| 维度 | ADAS 贡献 |
|------|-----------|
| 进化循环 | **直接相关**：代码级 Agent 设计进化，Self-Evolve 核心范式 |
| 自我改进 | Agent 设计 Agent → 递归自我改进雏形 |
| Prompt | 完整的元智能体 Prompt 模板 + 种子架构 + 错误模式库 |
| 评估 | 动态 exec() + Bootstrap CI + 多线程并行评估 |
| 迁移 | 跨域迁移验证，证明进化发现的架构具有通用性 |
| 启示 | "让 Agent 自动设计更好的 Agent" 是 Self-Evolve 的终极目标 |

## 参考资料

- 论文：[Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435)
- [项目网站](https://www.shengranhu.com/ADAS/)
- ICLR 2025, NeurIPS 2024 Outstanding Paper

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/shengranhu__adas`（指向 `repos/shengranhu__adas` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/shengranhu__adas --index-only --skip-git --name ADAS`。
- **知识图谱规模**：2107 symbols / 2795 edges / 49 clusters / 78 flows。
- **查询语句**：`automated design agentic systems archive meta agent evaluate architecture`。
- **核心执行流程候选**：
  - Search → List_to_string
  - Search → Bootstrap_confidence_interval
  - Search → Shuffle_choices_and_create_example
  - Search → Bootstrap_confidence_interval
- **关键符号/文件**：
  - `search.py`（`_gpqa/search.py`）
  - `search.py`（`_drop/search.py`）
  - `search.py`（`_mgsm/search.py`）
  - `search.py`（`_mmlu/search.py`）
  - `search.py`（`_arc/search.py`）
  - `README.md`（`README.md`）
- **调用关系上下文**：
  - 符号 `search.py` 位于 `_gpqa/search.py` 第 ?–? 行
  - 出边/调用或包含关系：imports: 2，calls: 2
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
