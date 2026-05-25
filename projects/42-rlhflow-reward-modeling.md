# RLHFlow Reward Modeling - 奖励模型训练方案集
- **仓库**: RLHFlow/RLHF-Reward-Modeling
- **GitHub**: https://github.com/RLHFlow/RLHF-Reward-Modeling
- **Stars**: ~2.5K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-01
- **模式**: 评估器/打分器

## 概述
RLHFlow Reward Modeling提供了完整的奖励模型训练方案，涵盖Bradley-Terry RM、Pairwise Preference Model和ArmoRM等多种方法。其ArmoRM在RewardBench排行榜上取得开源8B模型第一名，决策树奖励模型更是达到95.4%的SOTA成绩。

## 核心特性
- 支持Bradley-Terry奖励模型、Pairwise偏好模型、ArmoRM多目标奖励模型
- 提供Semi-Supervised Reward Modeling自训练迭代方案
- 包含过程监督奖励(PRM)和结果监督奖励(ORM)的训练代码

## 技术栈
- Python, PyTorch, DeepSpeed, Hugging Face Transformers

## 与 Self Evolve 的关联
高质量的奖励模型是AI自我进化中"评估-改进"循环的关键组件，该项目提供的SOTA奖励模型方案为自我进化系统提供了可靠的反馈信号来源。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: reward-model, rlhf, preference-learning, armo-rm, evaluation
