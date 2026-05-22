---
title: "agents"
repo: "aiwaves-cn/agents"
url: "https://github.com/aiwaves-cn/agents"
stars: 5928
forks: 482
last_pushed: "2024-09-26T03:12:53Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/aiwaves_cn__agents"
---

# agents

## 项目概览
- **仓库**：[aiwaves-cn/agents](https://github.com/aiwaves-cn/agents)
- **Star / Fork**：5928 / 482
- **最近活跃**：2024-09-26T03:12:53Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：数据中心化的自进化语言智能体框架，强调用数据、环境反馈和智能体编排让 Agent 在任务中持续改进。

## 技术栈
Python, OpenAI 兼容 API, PyTorch, Transformers, LangChain

依赖与配置证据：
- `requirements.txt`
- `setup.py`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器 → 智能体编排` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .env.example
文件 .gitignore
文件 LICENSE
文件 README.md
目录 assets
文件 assets/agents-logo.png
文件 assets/algorithm.png
文件 assets/case.png
文件 assets/logo.png
文件 assets/main_results.png
文件 assets/other_results.png
文件 assets/overview.png
文件 assets/workflow.gif
文件 assets/workflow.png
目录 examples
目录 examples/chatbot
文件 examples/chatbot/config.json
文件 examples/chatbot/run.py
目录 examples/creative_writing
目录 examples/creative_writing/configs
文件 examples/creative_writing/run_eval.py
文件 examples/creative_writing/run_train.py
目录 examples/debate
文件 examples/debate/config.json
文件 examples/debate/generated_config.json
文件 examples/debate/run.py
目录 examples/hotpotqa
目录 examples/hotpotqa/configs
目录 examples/hotpotqa/eval
文件 examples/hotpotqa/run_eval.py
文件 examples/hotpotqa/run_train.py
目录 examples/humaneval
目录 examples/humaneval/configs
文件 examples/humaneval/run.py
文件 examples/humaneval/run_train.py
目录 examples/math_dataset
目录 examples/math_dataset/configs
文件 examples/math_dataset/get_score.py
文件 examples/math_dataset/run_eval.py
文件 examples/math_dataset/run_train.py
目录 examples/math_dataset/solution_config
目录 examples/software_dev
目录 examples/software_dev/configs
文件 examples/software_dev/run_train.py
文件 requirements.txt
文件 setup.py
目录 src
目录 src/agents
文件 src/agents/__init__.py
目录 src/agents/agents
目录 src/agents/datasets
目录 src/agents/evaluation
目录 src/agents/knowledge_bases
目录 src/agents/optimization
目录 src/agents/playground
```

## 关键代码片段分析
### `examples/humaneval/run.py`
- 代码信号：第 2 行：`from agents import SolutionConfig, Solution`；第 3 行：`import litellm`；第 5 行：`litellm.set_verbose = True`；第 6 行：`os.environ["OPENAI_API_KEY"] = ""`；第 7 行：`os.environ["OPENAI_BASE_URL"] = ""`。
### `examples/chatbot/run.py`
- 代码信号：第 3 行：`import litellm`；第 4 行：`from agents import Solution, SolutionConfig`；第 7 行：`litellm.set_verbose = True`；第 12 行：`if os.environ.get("OPENAI_API_KEY") is None:`；第 13 行：`os.environ["OPENAI_API_KEY"] = ""`。
### `examples/debate/run.py`
- 代码信号：第 2 行：`from agents import SolutionConfig, Solution`；第 3 行：`import litellm`；第 5 行：`litellm.set_verbose = True`；第 6 行：`os.environ["OPENAI_API_KEY"] = ""`；第 7 行：`os.environ["OPENAI_BASE_URL"] = ""`。
### `src/agents/optimization/prompt_optimizer.py`
- 代码信号：第 8 行：`from agents.optimization.optimizer import Optimizer`；第 9 行：`from agents.utils.prompts import DEFAULT_NODE_PROMPT_TEMPLATES`；第 10 行：`from agents.evaluation import Case`；第 11 行：`from agents.agents.llm import LLMConfig, OpenAILLM`；第 12 行：`from agents.task.solution import SolutionConfig, Solution`。
### `src/agents/optimization/prompt_formatter.py`
- 代码信号：第 3 行：`from agents import SOP, DEFAULT_NODE_PROMPT_TEMPLATES`；第 4 行：`from agents.evaluation.state import State`；第 5 行：`from agents.evaluation.case import Case`；第 6 行：`from agents.task.node import Node`；第 9 行：`def check_variables(s):`。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器 → 智能体编排。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“Agent 系统/轨迹”层面的 Self Evolve，核心不是单次输出变好，而是经验、轨迹或组件在循环中被复用。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`、`智能体编排`。
