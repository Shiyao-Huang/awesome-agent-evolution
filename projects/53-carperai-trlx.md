# CarperAI trlx - RLHF训练库
- **仓库**: CarperAI/trlx
- **GitHub**: https://github.com/CarperAI/trlx
- **Stars**: ~4.5K
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-08
- **模式**: 训练/数据循环

## 概述
trlx是CarperAI开发的RLHF训练库，提供从零开始的强化学习人类反馈训练能力。该库支持多种RL算法包括PPO、ILQL等，并集成了DeepSpeed和Accelerate进行分布式训练，是早期RLHF研究的重要工具之一。

## 核心特性
- 支持PPO、ILQL等多种RLHF训练算法
- 集成DeepSpeed和Accelerate的分布式训练支持
- 提供从奖励模型训练到策略优化的完整流水线

## 技术栈
- Python, PyTorch, DeepSpeed, Hugging Face Transformers, Accelerate

## 与 Self Evolve 的关联
trlx为RLHF训练提供了早期的完整工具链，其设计理念影响了后续多个RLHF框架的开发，为基于人类反馈的模型自我进化训练奠定了实践基础。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: rlhf, ppo, ilql, training, reinforcement-learning, alignment
