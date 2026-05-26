# veRL - 字节跳动 RLHF 框架
- **仓库**: volcengine/verl
- **GitHub**: https://github.com/volcengine/verl
- **Stars**: 5000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
字节跳动开源的 RLHF 训练框架，支持 GRPO、PPO、DPO、REINFORCE 等多种算法，采用 Ray 分布式架构实现大规模 RLHF 训练，2026年持续活跃更新。

## 核心特性
- 支持 GRPO/PPO/DPO/REINFORCE++ 多算法
- Ray 分布式 actor-rollout 分离架构
- FSDP/DeepSpeed/Megatron 多后端支持
- 高效的 GPU 资源利用和序列并行
- 与 HuggingFace 模型无缝集成

## 技术栈
- Python, Ray, PyTorch, FSDP, DeepSpeed, vLLM

## 与 Self Evolve 的关联
veRL 的大规模 RLHF 训练能力为自我进化系统提供了工业级的"训练/数据循环"基础设施，支持持续迭代优化。

## 分类
- **类别**: 分布式 RLHF 框架
- **标签**: rlhf, grpo, distributed-training, bytedance, ray
