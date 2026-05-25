# veRL - 字节跳动大模型强化学习框架
- **仓库**: volcengine/verl
- **GitHub**: https://github.com/volcengine/verl
- **Stars**: ~21.5K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
veRL是字节跳动Seed团队发起的大语言模型强化学习训练库，即HybridFlow论文的开源版本。该框架提供灵活高效的RLHF训练流程，支持GRPO、PPO、DAPO等多种RL算法，并可扩展至671B参数模型的训练。

## 核心特性
- 混合控制器编程模型，支持灵活构建GRPO、PPO等RL数据流
- 无缝集成FSDP/Megatron-LM训练后端和vLLM/SGLang推理引擎
- 3D-HybridEngine实现训练与生成阶段的高效模型重分片

## 技术栈
- Python, PyTorch, FSDP2, Megatron-LM, vLLM, SGLang, Ray

## 与 Self Evolve 的关联
veRL为大规模模型的自我进化提供了工业级RL训练基础设施，支持DAPO等SOTA算法，使模型能够通过强化学习实现持续自我改进，是构建自我进化AI系统的核心训练平台。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: rlhf, ppo, grpo, dapo, distributed-training, llm, reinforcement-learning
