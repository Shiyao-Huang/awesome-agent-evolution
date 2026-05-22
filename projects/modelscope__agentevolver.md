---
title: "AgentEvolver"
repo: "modelscope/AgentEvolver"
url: "https://github.com/modelscope/AgentEvolver"
stars: 1441
forks: 167
last_pushed: "2026-04-01T08:47:19Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/modelscope__agentevolver"
---

# AgentEvolver

## 项目概览
- **仓库**：[modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver)
- **Star / Fork**：1441 / 167
- **最近活跃**：2026-04-01T08:47:19Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：面向高效自进化智能体系统的研究实现，核心关注轨迹、经验和评估反馈驱动的 Agent 能力提升。

## 技术栈
Python, FastAPI

依赖与配置证据：
- `requirements.txt`
- `env_service/environments/bfcl/requirements.txt`
- `env_service/environments/appworld/requirements.txt`
- `env_service/environments/openworld/requirements.txt`
- `env_service/environments/bfcl/Dockerfile`
- `env_service/environments/appworld/Dockerfile`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
目录 .github
目录 .github/ISSUE_TEMPLATE
文件 .github/ISSUE_TEMPLATE/bug_report.md
文件 .github/ISSUE_TEMPLATE/custom.md
文件 .github/ISSUE_TEMPLATE/feature_request.md
文件 .github/PULL_REQUEST_TEMPLATE.md
文件 .gitignore
文件 .gitmodules
文件 .pre-commit-config.yaml
文件 LICENSE
文件 README.md
目录 agentevolver
文件 agentevolver/__init__.py
目录 agentevolver/client
文件 agentevolver/client/__init__.py
文件 agentevolver/client/em_client.py
文件 agentevolver/client/embedding_client.py
文件 agentevolver/client/env_client.py
文件 agentevolver/client/llm_client.py
目录 agentevolver/enumeration
文件 agentevolver/enumeration/__init__.py
文件 agentevolver/enumeration/http_enum.py
文件 agentevolver/enumeration/role.py
文件 agentevolver/main_ppo.py
目录 agentevolver/module
文件 agentevolver/module/__init__.py
目录 agentevolver/module/adv_processor
目录 agentevolver/module/agent_flow
目录 agentevolver/module/context_manager
目录 agentevolver/module/env_manager
目录 agentevolver/module/exp_manager
目录 agentevolver/module/task_manager
目录 agentevolver/module/trainer
目录 agentevolver/schema
文件 agentevolver/schema/__init__.py
文件 agentevolver/schema/task.py
文件 agentevolver/schema/trajectory.py
目录 agentevolver/utils
文件 agentevolver/utils/__init__.py
文件 agentevolver/utils/agentscope_utils.py
文件 agentevolver/utils/analysis_time_cost.py
文件 agentevolver/utils/async_http_client.py
文件 agentevolver/utils/compute_madness.py
文件 agentevolver/utils/daemon.py
文件 agentevolver/utils/http_client.py
文件 agentevolver/utils/metric_utils.py
文件 agentevolver/utils/n_gram.py
文件 agentevolver/utils/pty.py
文件 agentevolver/utils/step_parser.py
文件 agentevolver/utils/tracking.py
文件 agentevolver/utils/utils.py
文件 agentevolver/utils/vsdb.py
目录 config
文件 config/agentevolver.yaml
文件 config/runtime_env.yaml
```

## 关键代码片段分析
### `research/CuES/main.py`
- 代码信号：第 3 行：`AgentFlow Main Program`；第 17 行：`from src.core.pipeline import AgentFlowPipeline`；第 23 行：`def load_config(config_path: str) -> Dict[str, Any]:`；第 34 行：`def check_envservice_for_appworld(config):`；第 58 行：`def main():`。
### `research/CuES/src/prompts/judge_task_extract.py`
- 代码信号：第 6 行：`def _output_format_block(env_type: str) -> str:`；第 54 行：`def build_task_extraction_system_prompt(env_type: str) -> str:`；第 56 行：`You are a *Task Abstraction Expert*. Your specialty is to inspect an agent’s`。
### `agentevolver/module/task_manager/rewards/binary_judge_gt.py`
- 代码信号：第 5 行：`from agentevolver.client.env_client import EnvClient`；第 6 行：`from agentevolver.client.llm_client import DashScopeClient`；第 7 行：`from agentevolver.module.agent_flow.reward_calculator import GraderResult, RewardCalculator`；第 8 行：`from agentevolver.schema.task import Task`；第 9 行：`from agentevolver.schema.trajectory import Trajectory`。
### `agentevolver/module/task_manager/rewards/avg_judge.py`
- 代码信号：第 6 行：`from agentevolver.client.env_client import EnvClient`；第 7 行：`from agentevolver.client.llm_client import DashScopeClient`；第 8 行：`from agentevolver.module.agent_flow.reward_calculator import GraderResult, RewardCalculator`；第 9 行：`from agentevolver.module.task_manager.rewards.binary_judge_gt import LlmAsJudgeBinaryRewardCalculatorWithGT`；第 10 行：`from agentevolver.module.task_manager.rewards.reward import LlmAsJudgeRewardCalculator`。
### `agentevolver/module/task_manager/rewards/binary_judge.py`
- 代码信号：第 5 行：`from agentevolver.client.env_client import EnvClient`；第 6 行：`from agentevolver.client.llm_client import DashScopeClient`；第 7 行：`from agentevolver.module.agent_flow.reward_calculator import GraderResult, RewardCalculator`；第 8 行：`from agentevolver.schema.task import Task`；第 9 行：`from agentevolver.schema.trajectory import Trajectory`。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/modelscope__agentevolver --index-only --skip-git --name ae-modelscope__agentevolver`。
- **图谱规模**：7152 nodes / 12157 edges / 286 clusters / 249 flows。
- **查询语句**：`agent evolution trajectory feedback optimize evaluation`。
- **相关执行流程**：
  - Calculate_reward → Steps_to_msg
  - Calculate_reward → Steps_to_msg
  - Init_model → Get_sharding_strategy
  - Calculate_reward → Get_running_mean
- **关键符号/文件**：
  - `EvaluationPrompts`（`agentevolver/module/task_manager/filters/llm_filter.py`）
  - `evaluate_trajectory_success`（`agentevolver/module/task_manager/filters/llm_filter.py`）
  - `success_evaluation_prompt`（`agentevolver/module/task_manager/filters/llm_filter.py`）
  - `success_evaluation_prompt`（`research/CuES/src/prompts/trajectory_evaluation.py`）
  - `EvaluationPrompts`（`research/CuES/src/prompts/trajectory_evaluation.py`）
  - `trajectory_evaluation.py`（`research/CuES/src/prompts/trajectory_evaluation.py`）
- **符号上下文**：
  - 符号 `EvaluationPrompts` 位于 `agentevolver/module/task_manager/filters/llm_filter.py` 第 374–426 行
  - 入边/被依赖关系：imports: 1
  - 出边/调用或包含关系：has_method: 1
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“Prompt/Context 优化”层面的 Self Evolve，适合放在从提示工程到自进化上下文的谱系中。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`、`智能体编排`、`训练/数据循环`。
