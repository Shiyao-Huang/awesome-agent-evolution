# Self-Rewarding LM - 自我奖励语言模型
- **仓库**: lucidrains/self-rewarding-lm-pytorch
- **GitHub**: https://github.com/lucidrains/self-rewarding-lm-pytorch
- **Stars**: ~700
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-03
- **模式**: 反馈-精炼

## 概述
lucidrains实现的自我奖励语言模型PyTorch版本，基于Meta的自我奖励语言模型论文。该框架让模型同时充当生成器和评估器，通过自我生成的偏好数据进行迭代训练，实现了无需外部奖励模型的自我改进循环。

## 核心特性
- 模型同时承担生成和评估双重角色
- 自我生成偏好数据并进行迭代训练
- 简洁的PyTorch实现，易于理解和扩展

## 技术栈
- Python, PyTorch

## 与 Self Evolve 的关联
自我奖励机制是AI自我进化的核心范式之一，该实现展示了模型如何在没有外部反馈的情况下通过自我评估实现持续改进，是纯内生自我进化循环的代表性工作。

## 分类
- **类别**: 自我对齐/自我奖励
- **标签**: self-rewarding, self-play, preference-learning, alignment, pytorch
