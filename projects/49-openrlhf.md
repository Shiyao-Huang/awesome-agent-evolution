# OpenRLHF - 开源RLHF训练框架
- **仓库**: OpenRLHF/OpenRLHF
- **GitHub**: https://github.com/OpenRLHF/OpenRLHF
- **Stars**: ~5K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
OpenRLHF是一个高性能的开源RLHF训练框架，支持PPO、DPO、KTO、SimPO、ORPO等多种对齐算法。该框架基于Ray和DeepSpeed构建，提供从SFT到RLHF的完整训练流水线，支持70B+规模模型的高效训练。

## 核心特性
- 支持PPO、DPO、KTO、SimPO、ORPO、GRPO等多种对齐算法
- 基于Ray和DeepSpeed的高性能分布式训练
- 支持奖励模型训练、拒绝采样微调和迭代式DPO

## 技术栈
- Python, PyTorch, Ray, DeepSpeed, vLLM, Hugging Face Transformers

## 与 Self Evolve 的关联
OpenRLHF提供了完整的模型对齐训练工具链，其迭代式DPO和多算法支持使得模型能够在自我进化过程中持续利用反馈信号进行优化，是构建自我进化对齐系统的实用框架。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: rlhf, ppo, dpo, kto, alignment, distributed-training, open-source
