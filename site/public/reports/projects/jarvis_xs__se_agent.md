---
title: "SE-Agent"
repo: "JARVIS-Xs/SE-Agent"
url: "https://github.com/JARVIS-Xs/SE-Agent"
stars: 274
forks: 29
last_pushed: "2025-09-23T01:32:14Z"
license: "MIT"
language: "Python"
local_path: "repos/jarvis_xs__se_agent"
---

# SE-Agent

## 项目概览
- **仓库**：[JARVIS-Xs/SE-Agent](https://github.com/JARVIS-Xs/SE-Agent)
- **Star / Fork**：274 / 29
- **最近活跃**：2025-09-23T01:32:14Z
- **主要语言**：Python
- **许可证**：MIT
- **中文摘要**：面向代码智能体的自进化框架，通过 Revision、Recombination、Refinement 在多条推理轨迹间交换信息，扩大搜索空间。

## 技术栈
Python

依赖与配置证据：
- `pyproject.toml`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器 → 智能体编排` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .env.example
目录 .github
目录 .github/workflows
文件 .github/workflows/run-tests.yml
文件 .gitignore
文件 LICENSE
文件 README.md
目录 SE
文件 SE/README.md
文件 SE/basic_run.py
文件 SE/basic_run.py.backup
目录 SE/configs
目录 SE/configs/base_configs
目录 SE/configs/se_configs
目录 SE/configs/test_config
目录 SE/core
文件 SE/core/__init__.py
文件 SE/core/swe_iterator.py
目录 SE/core/utils
文件 SE/evaluation_function.py
目录 SE/instances
文件 SE/instances/1.json
文件 SE/instances/12.json
文件 SE/instances/90.json
文件 SE/instances/example.json
目录 SE/operators
文件 SE/operators/README.md
文件 SE/operators/__init__.py
文件 SE/operators/alternative_strategy.py
文件 SE/operators/base.py
文件 SE/operators/crossover.py
文件 SE/operators/registry.py
文件 SE/operators/traj_pool_summary.py
文件 SE/operators/trajectory_analyzer.py
文件 SE/operators.md
文件 SE/se_run.py
目录 SE/test
文件 SE/test/DEVELOPMENT_GUIDE.md
文件 SE/test/README.md
文件 SE/test/alternative_strategy.py
文件 SE/test/api_test.py
文件 SE/test/api_test_litellm.py
文件 SE/test/comprehensive_analysis_old.py
文件 SE/test/converter_old.py
目录 SE/test/counter_generation
文件 SE/test/fix_existing_traj_pool.py
目录 SE/test/llm_integration
文件 SE/test/run_operator_tests.py
文件 SE/test/swe_iterator_backup.py
文件 SE/test/test_README.md
文件 SE/test/test_alternative_strategy.py
文件 SE/test/test_instance_data_system.py
文件 SE/test/test_litellm_simple.py
文件 SE/test/test_operator_data_access.py
文件 SE/test/test_operators.py
```

## 关键代码片段分析
### `sweagent/run/run.py`
- 代码信号：第 1 行：`"""[cyan][bold]Main command line interface for SWE-agent.[/bold][/cyan]`；第 5 行：`[green]sweagent <command> [options][/green]`；第 9 行：`[green]sweagent <command> [bold]--help[/bold][/green]`；第 11 行：`[cyan][bold]=== SUBCOMMANDS TO RUN SWE-AGENT ===[/bold][/cyan]`；第 13 行：`[bold][green]run[/green][/bold] or [bold][green]r[/green][/bold]: Run swe-agent on a single problem statement, for exa`。
### `sweagent/agent/agents.py`
- 代码信号：第 20 行：`from sweagent import __version__, get_agent_commit_hash, get_rex_commit_hash, get_rex_version`；第 21 行：`from sweagent.agent.action_sampler import AbstractActionSampler, ActionSamplerConfig`；第 22 行：`from sweagent.agent.history_processors import DefaultHistoryProcessor, HistoryProcessor`；第 23 行：`from sweagent.agent.hooks.abstract import AbstractAgentHook, CombinedAgentHook`；第 24 行：`from sweagent.agent.models import (`。
### `sweagent/agent/extra/shell_agent.py`
- 代码信号：第 4 行：`from sweagent.agent.agents import DefaultAgent, ShellAgentConfig`；第 5 行：`from sweagent.agent.models import HumanModel, HumanModelConfig, get_model`；第 6 行：`from sweagent.agent.problem_statement import ProblemStatement, ProblemStatementConfig`；第 7 行：`from sweagent.environment.swe_env import SWEEnv`；第 8 行：`from sweagent.tools.parsing import ActionOnlyParser`。
### `SE/evaluation_function.py`
- 代码信号：第 13 行：`def step_count_filter(traj: Dict, min_steps: int = 3, max_steps: int = 30) -> bool:`；第 18 行：`def has_long_repetition(traj: Dict, max_repeat: int = 3) -> bool:`；第 34 行：`def code_edit_ratio(traj: Dict, min_ratio: float = 0.2) -> bool:`；第 46 行：`def filter_non_empty(trajectories: List[Dict]) -> List[Dict]:`；第 50 行：`def filter_unique(trajectories: List[Dict]) -> List[Dict]:`。
### `sweagent/run/hooks/swe_bench_evaluate.py`
- 代码信号：第 1 行：`"""SweBench evaluation hook.`；第 3 行：`Will be automatically added to `run_batch` if `SWEBenchInstances.evaluate` is set to true`；第 13 行：`from sweagent.run.hooks.abstract import RunHook`；第 14 行：`from sweagent.run.merge_predictions import merge_predictions`；第 15 行：`from sweagent.types import AgentRunResult`。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器 → 智能体编排。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“可执行代码/算法”层面的 Self Evolve，和 Self-Refine 的文本精炼不同，反馈来自真实评测器或 benchmark 分数。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`、`智能体编排`。
