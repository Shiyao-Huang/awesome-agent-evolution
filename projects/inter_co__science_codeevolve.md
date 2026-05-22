---
title: "science-codeevolve"
repo: "inter-co/science-codeevolve"
url: "https://github.com/inter-co/science-codeevolve"
stars: 97
forks: 14
last_pushed: "2026-04-08T14:38:23Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/inter_co__science_codeevolve"
---

# science-codeevolve

## 项目概览
- **仓库**：[inter-co/science-codeevolve](https://github.com/inter-co/science-codeevolve)
- **Star / Fork**：97 / 14
- **最近活跃**：2026-04-08T14:38:23Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：面向科学与算法发现的 CodeEvolve 实现，将 LLM 与遗传算法、岛屿模型、交叉/变异等机制结合。

## 技术栈
Python, OpenAI 兼容 API, PyTorch, pytest

依赖与配置证据：
- `pyproject.toml`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
目录 .github
目录 .github/workflows
文件 .github/workflows/ci.yml
文件 .gitignore
文件 AGENTS.md
文件 CONTRIBUTING.md
文件 LICENSE
文件 README.md
文件 TODO.md
目录 assets
文件 assets/codeevolve_diagram.png
文件 assets/codeevolve_logo.png
目录 configs
文件 configs/README.md
目录 configs/templates
文件 configs/templates/config_gemini.yaml
文件 configs/templates/config_mock.yaml
文件 configs/templates/config_qwen.yaml
文件 environment.yml
目录 problems
目录 problems/alphaevolve_math_problems
目录 problems/alphaevolve_math_problems/autocorrelation_problems
目录 problems/alphaevolve_math_problems/heilbronn_problems
目录 problems/alphaevolve_math_problems/kissing_number
目录 problems/alphaevolve_math_problems/minimizing_max_min_dist
目录 problems/alphaevolve_math_problems/packing_problems
目录 problems/eoh-problems
目录 problems/eoh-problems/bp_online
目录 problems/eoh-problems/fssp_gls
目录 problems/eoh-problems/tsp_gls
目录 problems/templates
目录 problems/templates/python
文件 pyproject.toml
目录 scripts
文件 scripts/run.sh
文件 scripts/run_mock.sh
目录 src
目录 src/codeevolve
文件 src/codeevolve/__init__.py
文件 src/codeevolve/cli.py
文件 src/codeevolve/database.py
文件 src/codeevolve/evaluator.py
文件 src/codeevolve/evolution.py
目录 src/codeevolve/islands
目录 src/codeevolve/lm
目录 src/codeevolve/prompt
文件 src/codeevolve/runner.py
文件 src/codeevolve/scheduler.py
目录 src/codeevolve/utils
目录 tests
文件 tests/__init__.py
文件 tests/test_apply_diff.py
文件 tests/test_ckpt.py
文件 tests/test_cli_setup.py
文件 tests/test_database.py
```

## 关键代码片段分析
### `tests/test_evolution.py`
- 代码信号：第 3 行：`# Part of the CodeEvolve Project, under the Apache License v2.0.`；第 4 行：`# See https://github.com/inter-co/science-codeevolve/blob/main/LICENSE for license information.`；第 9 行：`# This file implements unit tests for the evolution module helper functions.`；第 16 行：`from codeevolve.database import Program, ProgramDatabase`；第 17 行：`from codeevolve.evolution import _get_markers, select_parents`。
### `problems/eoh-problems/tsp_gls/input/gls/gls_evol.py`
- 代码信号：第 3 行：`# Part of the CodeEvolve Project, under the Apache License v2.0.`；第 4 行：`# See https://github.com/inter-co/science-codeevolve/blob/main/LICENSE for license information.`；第 24 行：`def nearest_neighbor(dis_matrix, depot):`；第 39 行：`def nearest_neighbor_2End(dis_matrix, depot):`；第 60 行：`def local_search(init_tour, init_cost, D, N, first_improvement=False):`。
### `src/codeevolve/evolution.py`
- 代码信号：第 3 行：`# Part of the CodeEvolve Project, under the Apache License v2.0.`；第 4 行：`# See https://github.com/inter-co/science-codeevolve/blob/main/LICENSE for license information.`；第 9 行：`# This file implements the main evolutionary loop of CodeEvolve.`；第 23 行：`from codeevolve.database import EliteFeature, Program, ProgramDatabase`；第 24 行：`from codeevolve.evaluator import Evaluator`。
### `tests/test_prompt.py`
- 代码信号：第 3 行：`# Part of the CodeEvolve Project, under the Apache License v2.0.`；第 4 行：`# See https://github.com/inter-co/science-codeevolve/blob/main/LICENSE for license information.`；第 9 行：`# This file implements unit tests for the prompt sampler and templates.`；第 17 行：`from codeevolve.database import Program, ProgramDatabase`；第 18 行：`from codeevolve.prompt.sampler import PromptSampler, format_prog_msg`。
### `tests/test_evaluator.py`
- 代码信号：第 3 行：`# Part of the CodeEvolve Project, under the Apache License v2.0.`；第 4 行：`# See https://github.com/inter-co/science-codeevolve/blob/main/LICENSE for license information.`；第 9 行：`# This file implements unit tests for the Evaluator class.`；第 21 行：`from codeevolve.database import Program`；第 22 行：`from codeevolve.evaluator import Evaluator`。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/inter_co__science_codeevolve --index-only --skip-git --name ae-inter_co__science_codeevolve`。
- **图谱规模**：2887 nodes / 4511 edges / 60 clusters / 49 flows。
- **查询语句**：`genetic algorithm island crossover mutation evaluator code evolve`。
- **相关执行流程**：
  - Codeevolve → Get_evolve_prompt_task_template
  - Codeevolve_loop → Find_evolve_block_spans
  - Codeevolve_loop → Assign_diffs_to_blocks
  - Codeevolve_loop → _sanitize_block_content
- **关键符号/文件**：
  - `CodeEvolveComponents`（`src/codeevolve/evolution.py`）
  - `template.py`（`src/codeevolve/prompt/template.py`）
  - `save_ckpt`（`src/codeevolve/utils/ckpt.py`）
  - `load_ckpt`（`src/codeevolve/utils/ckpt.py`）
  - `ckpt.py`（`src/codeevolve/utils/ckpt.py`）
  - `Program`（`src/codeevolve/database.py`）
- **符号上下文**：
  - 符号 `CodeEvolveComponents` 位于 `src/codeevolve/evolution.py` 第 938–979 行
  - 入边/被依赖关系：imports: 1
  - 出边/调用或包含关系：has_property: 16
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“可执行代码/算法”层面的 Self Evolve，和 Self-Refine 的文本精炼不同，反馈来自真实评测器或 benchmark 分数。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`。
