---
title: "LLM-Self-Judge"
repo: "OPPO-Mente-Lab/LLM-Self-Judge"
url: "https://github.com/OPPO-Mente-Lab/LLM-Self-Judge"
stars: 43
forks: 1
last_pushed: "2026-03-24T03:51:30Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/oppo_mente_lab__llm_self_judge"
---

# LLM-Self-Judge

## 项目概览
- **仓库**：[OPPO-Mente-Lab/LLM-Self-Judge](https://github.com/OPPO-Mente-Lab/LLM-Self-Judge)
- **Star / Fork**：43 / 1
- **最近活跃**：2026-03-24T03:51:30Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：围绕多模态推理中模型自评判和无监督自进化的官方实现，关注 judge 信号如何驱动模型/数据改进。

## 技术栈
Python, PyTorch, Transformers, vLLM, FastAPI, pytest

依赖与配置证据：
- `requirements.txt`
- `pyproject.toml`
- `setup.py`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .gitignore
文件 LICENSE
文件 Readme.md
目录 examples
文件 examples/run_qwen2_5_vl-evovlm.sh
目录 fig
文件 fig/teaser.png
文件 pyproject.toml
文件 requirements.txt
文件 setup.py
目录 verl
文件 verl/__init__.py
文件 verl/base_config.py
目录 verl/experimental
文件 verl/experimental/__init__.py
目录 verl/experimental/agent_loop
目录 verl/experimental/dataset
目录 verl/experimental/dynamic_dataset
目录 verl/experimental/reward
目录 verl/interactions
文件 verl/interactions/__init__.py
文件 verl/interactions/base.py
文件 verl/interactions/gsm8k_interaction.py
目录 verl/interactions/utils
文件 verl/interactions/weather_interaction.py
目录 verl/model_merger
文件 verl/model_merger/__init__.py
文件 verl/model_merger/__main__.py
文件 verl/model_merger/base_model_merger.py
文件 verl/model_merger/fsdp_model_merger.py
文件 verl/model_merger/megatron_model_merger.py
目录 verl/models
文件 verl/models/README.md
文件 verl/models/__init__.py
目录 verl/models/llama
目录 verl/models/mcore
目录 verl/models/qwen2
文件 verl/models/registry.py
目录 verl/models/transformers
文件 verl/models/weight_loader_registry.py
文件 verl/protocol.py
文件 verl/py.typed
目录 verl/single_controller
文件 verl/single_controller/__init__.py
目录 verl/single_controller/base
目录 verl/single_controller/ray
目录 verl/third_party
文件 verl/third_party/__init__.py
目录 verl/third_party/sglang
目录 verl/third_party/torch
目录 verl/third_party/vllm
目录 verl/tools
文件 verl/tools/__init__.py
文件 verl/tools/base_tool.py
文件 verl/tools/geo3k_tool.py
```

## 关键代码片段分析
### `verl/workers/reward_model/verifier/prompts.py`
- 代码信号：第 1 行：`QWEN_2_5_JUDGE_PROMPT = """You are an expert evaluator for multimodal mathematical reasoning.`；第 8 行：`Your task is to read the question, inspect the image, and rigorously evaluate the candidate solution.`；第 14 行：`- Judge whether each reasoning step is logical, consistent, and grounded in the image.`；第 18 行：`(1) A natural-language analysis ("Thought") describing your evaluation process.`；第 19 行：`(2) A JSON object providing numerical scores.`。
### `verl/experimental/agent_loop/agent_loop.py`
- 代码信号：第 50 行：`class AsyncLLMServerManager:`；第 52 行：`A class to manage multiple OpenAI compatible LLM servers. This class provides`；第 57 行：`def __init__(self, config: DictConfig, server_handles: list[ray.actor.ActorHandle], max_cache_size: int = 10000):`；第 58 行：`"""Initialize the AsyncLLMServerManager.`；第 62 行：`server_handles (List[ray.actor.ActorHandle]): OpenAI compatible LLM server actor handles.`。
### `verl/experimental/agent_loop/tool_agent_loop.py`
- 代码信号：第 23 行：`from verl.experimental.agent_loop.agent_loop import AgentLoopBase, AgentLoopOutput, register`；第 24 行：`from verl.experimental.agent_loop.tool_parser import FunctionCall, ToolParser`；第 25 行：`from verl.experimental.agent_loop.utils import add_generation_prompt_for_gpt_oss, format_gpt_oss_tool_response_manuall`；第 37 行：`class AgentState(Enum):`；第 45 行：`class AgentData:`。
### `verl/experimental/agent_loop/single_turn_agent_loop.py`
- 代码信号：第 20 行：`from verl.experimental.agent_loop.agent_loop import AgentLoopBase, AgentLoopOutput, register`；第 27 行：`@register("single_turn_agent")`；第 28 行：`class SingleTurnAgentLoop(AgentLoopBase):`；第 29 行：`"""Naive agent loop that only do single turn chat completion."""`；第 31 行：`def __init__(self, *args, **kwargs):`。
### `verl/trainer/main_eval.py`
- 代码信号：第 15 行：`Offline evaluate the performance of a generated file using reward model and ground truth verifier.`；第 34 行：`def process_item(config, data_source, response_lst, reward_data):`；第 37 行：`score_lst = [reward_fn(data_source, r, ground_truth) for r in response_lst]`；第 38 行：`return data_source, np.mean(score_lst)`；第 41 行：`@hydra.main(config_path="config", config_name="evaluation", version_base=None)`。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 评估器/打分器 → 智能体编排 → 训练/数据循环。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“自评判/自监督信号”层面的 Self Evolve，强调模型自身产生反馈信号再用于改进。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`评估器/打分器`、`智能体编排`、`训练/数据循环`。
