# Anthropic HH-RLHF - 人类偏好对齐数据集
- **仓库**: Anthropic/hh-rlhf
- **GitHub**: https://github.com/Anthropic/hh-rlhf
- **Stars**: ~1.5K
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2023-06
- **模式**: 训练/数据循环

## 概述
Anthropic发布的HH-RLHF数据集是RLHF领域的经典偏好数据集，包含人类对模型输出的有用性和无害性偏好标注。该数据集为早期RLHF研究提供了关键数据基础，是Claude等对话模型对齐训练的重要数据来源。

## 核心特性
- 包含Helpful和Harmless两大类偏好数据
- 提供对话格式的chosen/rejected对比样本
- 适用于训练奖励模型和进行DPO等偏好优化

## 技术栈
- Python, JSON数据格式, Hugging Face Datasets

## 与 Self Evolve 的关联
偏好数据是模型自我对齐进化的重要信号来源，该数据集为基于人类反馈的自我改进循环提供了标准化的训练数据，奠定了AI安全自我进化的数据基础。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: rlhf, preference-dataset, alignment, safety, human-feedback
