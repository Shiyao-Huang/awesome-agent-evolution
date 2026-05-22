---
title: "openevolve"
repo: "algorithmicsuperintelligence/openevolve"
url: "https://github.com/algorithmicsuperintelligence/openevolve"
stars: 6358
forks: 1018
last_pushed: "2026-03-18T12:25:39Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/algorithmicsuperintelligence__openevolve"
---

# openevolve

## 项目概览
- **仓库**：[algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve)
- **Star / Fork**：6358 / 1018
- **最近活跃**：2026-03-18T12:25:39Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：开源 AlphaEvolve 风格的进化式编码智能体，使用 LLM 生成程序变体、评估打分并选择高分候选持续迭代。

## 技术栈
Python, OpenAI 兼容 API, PyTorch, pytest

依赖与配置证据：
- `examples/lm_eval/requirements.txt`
- `examples/tsp_tour_minimization/requirements.txt`
- `examples/function_minimization/requirements.txt`
- `examples/circle_packing/requirements.txt`
- `examples/mlx_metal_kernel_opt/requirements.txt`
- `examples/r_robust_regression/requirements.txt`
- `examples/rust_adaptive_sort/requirements.txt`
- `examples/web_scraper_optillm/requirements.txt`
- `examples/online_judge_programming/requirements.txt`
- `examples/algotune/requirements.txt`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
目录 .github
目录 .github/instructions
文件 .github/instructions/sidebar-node-logic.instructions.md
目录 .github/workflows
文件 .github/workflows/claude.yml
文件 .github/workflows/python-test.yml
文件 .github/workflows/release.yml
文件 .gitignore
文件 .pre-commit-config.yaml
文件 CLAUDE.md
文件 CONTRIBUTING.md
文件 Dockerfile
文件 LICENSE
文件 MANIFEST.in
文件 Makefile
文件 README.md
目录 configs
文件 configs/README.md
文件 configs/default_config.yaml
文件 configs/early_stopping_example.yaml
文件 configs/island_config_example.yaml
文件 configs/island_examples.yaml
目录 examples
文件 examples/README.md
目录 examples/algotune
文件 examples/algotune/README.md
目录 examples/algotune/affine_transform_2d
目录 examples/algotune/convolve2d_full_fill
文件 examples/algotune/create_task.py
目录 examples/algotune/eigenvectors_complex
目录 examples/algotune/fft_cmplx_scipy_fftpack
目录 examples/algotune/fft_convolution
文件 examples/algotune/generate_all_tasks.py
目录 examples/algotune/lu_factorization
目录 examples/algotune/polynomial_real
目录 examples/algotune/psd_cone_projection
文件 examples/algotune/requirements.txt
文件 examples/algotune/run_benchmark.py
文件 examples/algotune/task_adapter.py
目录 examples/alphaevolve_math_problems
文件 examples/alphaevolve_math_problems/README.md
目录 examples/alphaevolve_math_problems/circle_packing_rect
目录 examples/alphaevolve_math_problems/erdos_min_overlap
目录 examples/alphaevolve_math_problems/first_autocorr_ineq
目录 examples/alphaevolve_math_problems/heilbronn_convex
目录 examples/alphaevolve_math_problems/heilbronn_triangle
目录 examples/alphaevolve_math_problems/hexagon_packing
目录 examples/alphaevolve_math_problems/kissing_number
目录 examples/alphaevolve_math_problems/matmul
目录 examples/alphaevolve_math_problems/minimizing_max_min_dist
目录 examples/alphaevolve_math_problems/second_autocorr_ineq
目录 examples/alphaevolve_math_problems/sums_diffs_finite_sets
目录 examples/alphaevolve_math_problems/third_autocorr_ineq
目录 examples/alphaevolve_math_problems/uncertainty_ineq
目录 examples/arc_benchmark
```

## 关键代码片段分析
### `openevolve-run.py`
- 代码信号：第 3 行：`Entry point script for OpenEvolve`；第 6 行：`from openevolve.cli import main`。
### `tests/test_evolution_trace.py`
- 代码信号：第 2 行：`Tests for evolution trace functionality`；第 12 行：`from openevolve.evolution_trace import (`；第 13 行：`EvolutionTrace,`；第 14 行：`EvolutionTracer,`；第 15 行：`extract_evolution_trace_from_checkpoint,`。
### `tests/integration/test_evolution_pipeline.py`
- 代码信号：第 2 行：`Integration tests for the full evolution pipeline with real LLM inference`；第 7 行：`from openevolve.controller import OpenEvolve`；第 10 行：`class TestEvolutionPipeline:`；第 11 行：`"""Test complete evolution with real LLM generation"""`；第 15 行：`async def test_full_evolution_loop(`。
### `examples/tsp_tour_minimization/start_evolution.py`
- 代码信号：第 12 行：`# openevolve & related imports`；第 13 行：`from openevolve import Config, OpenEvolve`；第 20 行：`def latest_checkpoint(dir_path: pathlib.Path) -> str | None:`；第 29 行：`match = re.fullmatch(r"checkpoint_(\d+)", path.name)`；第 40 行：`async def run_evolution(evolve: OpenEvolve, checkpoint_path: str | None) -> None:`。
### `examples/k_module_problem/run_openevolve_trials.py`
- 代码信号：第 2 行：`"""Run multiple trials of OpenEvolve to get statistics."""`；第 15 行：`def run_trial(trial_num: int, max_iterations: int = 100, seed: int = None):`；第 16 行：`"""Run a single OpenEvolve trial."""`；第 17 行：`output_dir = f"openevolve_output_trial_{trial_num}"`；第 40 行：`# Run OpenEvolve`。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/algorithmicsuperintelligence__openevolve --index-only --skip-git --name ae-algorithmicsuperintelligence__openevolve`。
- **图谱规模**：8733 nodes / 13519 edges / 249 clusters / 233 flows。
- **查询语句**：`evolution program evaluator prompt database iteration`。
- **相关执行流程**：
  - Main → Format_rich_feedback
  - Run_trials → Format_rich_feedback
  - Main → _error_result
  - Main → Validate_config
- **关键符号/文件**：
  - `_worker_init`（`openevolve/process_parallel.py`）
  - `test_checkpoint_resume_skips_initial_program`（`tests/test_checkpoint_resume.py`）
  - `test_non_empty_database_at_iteration_zero`（`tests/test_checkpoint_resume.py`）
  - `run_test`（`tests/test_checkpoint_resume.py`）
  - `TestIterationCounting`（`tests/test_iteration_counting.py`）
  - `test_controller_iteration_behavior`（`tests/test_iteration_counting.py`）
- **符号上下文**：
  - 符号 `_worker_init` 位于 `openevolve/process_parallel.py` 第 38–94 行
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“可执行代码/算法”层面的 Self Evolve，和 Self-Refine 的文本精炼不同，反馈来自真实评测器或 benchmark 分数。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`。
