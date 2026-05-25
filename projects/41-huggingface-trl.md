# Hugging Face TRL - Transformer 强化学习训练库
- **仓库**: huggingface/trl
- **GitHub**: https://github.com/huggingface/trl
- **Stars**: 11000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
Hugging Face 官方的 Transformer Reinforcement Learning 库，提供 SFT、DPO、PPO、RLHF 等大语言模型对齐训练的完整工具链，是开源 RLHF 生态的事实标准。

## 核心特性
- 支持 SFT/DPO/PPO/RLHF 多种对齐范式
- 与 Hugging Face Transformers/PEFT 深度集成
- 提供 RewardTrainer、DPOTrainer、PPOTrainer 等开箱即用训练器
- 支持 LoRA/QLoRA 高效微调
- 内置多 GPU 分布式训练支持

## 技术栈
- Python, PyTorch, Transformers, PEFT, Accelerate

## 与 Self Evolve 的关联
TRL 的 RLHF 训练闭环（生成→评分→优化）是自我进化系统中"评估器/打分器→训练/数据循环"模式的核心基础设施。

## 分类
- **类别**: RLHF 对齐训练
- **标签**: rlhf, dpo, ppo, alignment, training, huggingface
