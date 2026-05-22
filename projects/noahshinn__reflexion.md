---
title: "reflexion"
repo: "noahshinn/reflexion"
url: "https://github.com/noahshinn/reflexion"
stars: 3158
forks: 306
last_pushed: "2025-01-14T07:54:02Z"
license: "MIT"
language: "Python"
local_path: "repos/noahshinn__reflexion"
---

# reflexion

## 项目概览
- **仓库**：[noahshinn/reflexion](https://github.com/noahshinn/reflexion)
- **Star / Fork**：3158 / 306
- **最近活跃**：2025-01-14T07:54:02Z
- **主要语言**：Python
- **许可证**：MIT
- **中文摘要**：Reflexion 经典实现，使用语言反思作为“ verbal reinforcement ”，把失败经验写入记忆以改进后续行为。

## 技术栈
Python, OpenAI 兼容 API, PyTorch, Transformers, LangChain

依赖与配置证据：
- `hotpotqa_runs/requirements.txt`
- `alfworld_runs/requirements.txt`
- `programming_runs/requirements.txt`
- `programming_runs/human-eval/requirements.txt`
- `programming_runs/human-eval/setup.py`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 反思记忆 → 反馈-精炼 → 评估器/打分器 → 训练/数据循环` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .gitignore
文件 .gitmodules
文件 LICENSE
文件 README.md
目录 alfworld_runs
文件 alfworld_runs/alfworld_trial.py
文件 alfworld_runs/base_config.yaml
文件 alfworld_runs/env_history.py
文件 alfworld_runs/generate_reflections.py
文件 alfworld_runs/main.py
目录 alfworld_runs/prompts
文件 alfworld_runs/prompts/alfworld.json
文件 alfworld_runs/prompts/alfworld_3prompts.json
文件 alfworld_runs/prompts/fever.json
文件 alfworld_runs/prompts/prompts_naive.json
文件 alfworld_runs/reflexion_few_shot_examples.txt
文件 alfworld_runs/requirements.txt
目录 alfworld_runs/root
目录 alfworld_runs/root/base_run_logs
目录 alfworld_runs/root/reflexion_run_logs
文件 alfworld_runs/run_reflexion.sh
文件 alfworld_runs/run_simple.sh
文件 alfworld_runs/utils.py
目录 figures
文件 figures/reflexion_rl.pdf
文件 figures/reflexion_rl.png
文件 figures/reflexion_tasks.pdf
文件 figures/reflexion_tasks.png
文件 figures/self_correction.png
文件 figures/self_reflection.png
文件 figures/test_generation.png
目录 hotpotqa_runs
文件 hotpotqa_runs/agents.py
文件 hotpotqa_runs/environment.py
文件 hotpotqa_runs/fewshots.py
文件 hotpotqa_runs/llm.py
文件 hotpotqa_runs/mocks.py
目录 hotpotqa_runs/notebooks
文件 hotpotqa_runs/notebooks/CotQA_context.ipynb
文件 hotpotqa_runs/notebooks/CotQA_no_context.ipynb
文件 hotpotqa_runs/notebooks/ReactQA.ipynb
文件 hotpotqa_runs/prompts.py
文件 hotpotqa_runs/react.py
文件 hotpotqa_runs/requirements.txt
目录 hotpotqa_runs/root
目录 hotpotqa_runs/root/CoT
目录 hotpotqa_runs/root/ReAct
文件 hotpotqa_runs/root/appendix.txt
文件 hotpotqa_runs/tests.py
文件 hotpotqa_runs/util.py
目录 programming_runs
目录 programming_runs/benchmarks
文件 programming_runs/benchmarks/.DS_Store
文件 programming_runs/benchmarks/humaneval-py.jsonl
文件 programming_runs/benchmarks/humaneval-py_hardest50.jsonl
```

## 关键代码片段分析
### `alfworld_runs/main.py`
- 代码信号：第 6 行：`from generate_reflections import update_memory`；第 10 行：`def get_args():`；第 15 行：`parser.add_argument("--use_memory", action='store_true', help="Allow the Agent to use memory")`；第 28 行：`def main(args) -> None:`。
### `programming_runs/main.py`
- 代码信号：第 3 行：`from immediate_refinement import run_immediate_refinement`；第 13 行：`def get_args():`；第 24 行：`"--model", type=str, help="OpenAI models only for now. For best results, use GPT-4")`；第 44 行：`def strategy_factory(strategy: str):`；第 45 行：`def kwargs_wrapper_gen(func, delete_keys=[]):`。
### `webshop_runs/main.py`
- 代码信号：第 6 行：`from generate_reflections import update_memory`；第 11 行：`def get_args():`；第 16 行：`parser.add_argument("--use_memory", action='store_true', help="Allow the Agent to use memory")`；第 28 行：`def main(args) -> None:`。
### `programming_runs/immediate_refinement.py`
- 代码信号：第 8 行：`def run_immediate_refinement(`；第 29 行：`reflections = []`；第 32 行：`tests_i = gen.internal_tests(item["prompt"], model, 1)`；第 35 行：`cur_func_impl = gen.func_impl(item["prompt"], model, "simple")`；第 37 行：`is_passing, feedback, _ = exe.execute(cur_func_impl, tests_i)`。
### `alfworld_runs/generate_reflections.py`
- 代码信号：第 8 行：`def _get_scenario(s: str) -> str:`；第 12 行：`def _generate_reflection_query(log_str: str, memory: List[str]) -> str:`；第 13 行：`"""Allows the Agent to reflect upon a past experience."""`；第 29 行：`def update_memory(trial_log_path: str, env_configs: List[Dict[str, Any]]) -> List[Dict[str, Any]]:`；第 30 行：`"""Updates the given env_config with the appropriate reflections."""`。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/noahshinn__reflexion --index-only --skip-git --name ae-noahshinn__reflexion`。
- **图谱规模**：1403 nodes / 2293 edges / 54 clusters / 79 flows。
- **查询语句**：`reflection memory feedback evaluator trial agent`。
- **相关执行流程**：
  - Main → _get_scenario
  - Main → _get_scenario
  - Main → Get_completion
  - Evaluate → Join
- **关键符号/文件**：
  - `reflexion_ucs.py`（`programming_runs/reflexion_ucs.py`）
  - `run_reflexion_ucs`（`programming_runs/reflexion_ucs.py`）
  - `expand`（`programming_runs/reflexion_ucs.py`）
  - `generate_reflections.py`（`webshop_runs/generate_reflections.py`）
  - `generate_reflections.py`（`alfworld_runs/generate_reflections.py`）
  - `log_trial`（`hotpotqa_runs/util.py`）
- **符号上下文**：
  - 符号 `reflexion_ucs.py` 位于 `programming_runs/reflexion_ucs.py` 第 ?–? 行
  - 入边/被依赖关系：imports: 1
  - 出边/调用或包含关系：imports: 3
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 反思记忆 → 反馈-精炼 → 评估器/打分器 → 训练/数据循环。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“输出级反馈-精炼”范式，是许多后续 Agent 反思和代码演化框架的基础模式。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`反思记忆`、`反馈-精炼`、`评估器/打分器`、`训练/数据循环`。
