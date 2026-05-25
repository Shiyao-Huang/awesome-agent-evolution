# OpenRLHF - 开源 RLHF 训练框架
- **仓库**: OpenRLHF/OpenRLHF
- **GitHub**: https://github.com/OpenRLHF/OpenRLHF
- **Stars**: 4500
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-04
- **模式**: 训练/数据循环

## 概述
OpenRLHF 是高性能的 RLHF 训练框架，支持 SFT/DPO/PPO/REINFORCE/KTO 等多种对齐算法，基于 Ray + DeepSpeed + vLLM 实现高效分布式训练。

## 核心特性
- 统一框架支持 SFT/DPO/PPO/REINFORCE/KTO
- Ray + DeepSpeed + vLLM 高效推理
- 支持奖励模型和偏好数据训练
- Multi-turn 对话 RLHF 支持

## 技术栈
- Python, Ray, DeepSpeed, vLLM, PyTorch

## 与 Self Evolve 的关联
OpenRLHF 提供了完整的 RLHF 训练闭环工具链，是自我进化系统中"反馈→训练"循环的工程化实现。

## 分类
- **类别**: 开源 RLHF 框架
- **标签**: openrlhf, dpo, ppo, ray, distributed
