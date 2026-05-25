# Hugging Face TRL - Transformer强化学习训练库
- **仓库**: huggingface/trl
- **GitHub**: https://github.com/huggingface/trl
- **Stars**: ~17K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
TRL是Hugging Face推出的全面后训练基础模型库，支持SFT、GRPO、DPO、PPO等多种微调方法。该库构建在Transformers生态系统之上，提供从单GPU到多节点集群的扩展能力，是RLHF训练的事实标准工具。

## 核心特性
- 提供SFTTrainer、GRPOTrainer、DPOTrainer、RewardTrainer等多种训练器
- 集成DeepSpeed、PEFT(LoRA/QLoRA)和Unsloth，支持高效分布式训练
- 命令行界面(CLI)支持无需编写代码即可进行微调

## 技术栈
- Python, PyTorch, Hugging Face Transformers, DeepSpeed, PEFT

## 与 Self Evolve 的关联
TRL提供了模型自我改进的核心训练基础设施，通过DPO/GRPO等算法实现基于反馈的迭代优化循环，是AI自我进化系统的关键训练引擎。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: rlhf, dpo, ppo, grpo, sft, reward-model, alignment, training
