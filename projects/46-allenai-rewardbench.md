# RewardBench - 奖励模型评测基准
- **仓库**: AllenAI/reward-bench
- **GitHub**: https://github.com/AllenAI/reward-bench
- **Stars**: ~800
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-03
- **模式**: 评估器/打分器

## 概述
RewardBench是Allen AI推出的奖励模型评测基准，系统评估奖励模型在对话、困难对话、安全性和推理等维度的能力。该基准已成为奖励模型评估的社区标准，为RLHF研究提供了统一的评估框架。

## 核心特性
- 覆盖Chat、Chat Hard、Safety、Reasoning四大评测维度
- 提供偏好集(Prior Sets)用于评估泛化能力
- 支持多种奖励模型架构和评分方法的比较

## 技术栈
- Python, Hugging Face Transformers, PyTorch

## 与 Self Evolve 的关联
可靠的评估基准是自我进化系统的核心组件，RewardBench为模型自我评估和奖励信号质量检验提供了标准化工具，确保自我进化过程中的反馈信号可信赖。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: reward-model, benchmark, evaluation, rlhf, alignment
