# rStar - 自我推理与蒙特卡洛树搜索
- **仓库**: ZhiningLiu-nlp/rStar
- **GitHub**: https://github.com/ZhiningLiu-nlp/rStar
- **Stars**: ~700
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-01
- **模式**: 搜索循环

## 概述
rStar是一个通过蒙特卡洛树搜索(MCTS)实现LLM自我推理的框架。该方法将推理分解为自我生成和自我判别两个阶段，利用MCTS探索多条推理路径并由判别模型选择最优解，显著提升了小模型的数学推理能力。

## 核心特性
- 基于MCTS的多路径推理搜索与自我判别机制
- 支持多个小模型协同验证推理结果
- 无需蒸馏即可显著提升模型的数学和逻辑推理能力

## 技术栈
- Python, PyTorch, Hugging Face Transformers, vLLM

## 与 Self Evolve 的关联
rStar展示了模型通过自我推理搜索实现能力进化的路径，MCTS搜索与自我判别的结合提供了一种不依赖外部反馈的自我改进模式，是AI自我进化在推理能力方面的重要实践。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: self-reasoning, mcts, inference-time, reasoning, math
