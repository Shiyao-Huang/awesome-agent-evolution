# OpenRLHF - 开源 RLHF 训练框架

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | OpenRLHF/OpenRLHF |
| GitHub URL | https://github.com/OpenRLHF/OpenRLHF |
| Stars | ~4,500 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026-05 |
| 模式 | 训练/数据循环 |

## 概述
OpenRLHF 是一个高性能的开源 RLHF 训练框架，由 OpenRLHF 团队维护。它专注于大规模 RLHF 训练的工程优化，提供了 PPO、DPO、GRPO、SimPO、KTO 等多种对齐算法的高效实现。OpenRLHF 采用 Ray + vLLM 的分布式架构，实现了训练和推理的完全分离和并行化。其设计目标是让 RLHF 训练像 SFT 一样简单，同时保持高性能和高灵活性。

## 核心特性
- **Ray + vLLM 架构**: 基于 Ray 进行资源调度，vLLM 进行高效推理
- **多算法覆盖**: PPO, DPO, GRPO, SimPO, KTO, ORPO, RLOO 等
- **Megatron-LM 支持**: 支持 Megatron-LM 张量并行，适合超大模型训练
- **Ring Attention**: 支持环形注意力机制，扩展序列长度
- **打包训练**: 支持 sample packing，提高 GPU 利用率
- **3D 并行**: 数据并行 + 张量并行 + 流水线并行
- **多模态 RLHF**: 支持视觉语言模型的对齐训练
- **模型合并**: 支持 DPO 在线模型合并等高级技术

## 技术栈
- Python, PyTorch, Ray, vLLM
- Megatron-LM, DeepSpeed
- FlashAttention, Ring Attention
- Hugging Face Transformers

## 与 Self Evolve 的关联
OpenRLHF 为 Self Evolve 系统提供了"训练/数据循环"模式的工业级训练基础设施。其 Ray + vLLM 架构使得自我进化系统可以高效地进行大规模 rollout 生成和策略更新。多种对齐算法的支持使得自我进化系统可以根据不同进化阶段选择最合适的训练策略。3D 并行能力使得超大规模模型的自我进化训练成为可能。

## 分类
- **类别**: RLHF 训练框架
- **标签**: rlhf, ppo, dpo, grpo, distributed-training, vllm, ray, alignment
