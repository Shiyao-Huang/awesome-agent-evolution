# Anthropic HH-RLHF - 人类反馈偏好数据集
- **仓库**: Anthropic/hh-rlhf
- **GitHub**: https://github.com/Anthropic/hh-rlhf
- **Stars**: 1200
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-01
- **模式**: 训练/数据循环

## 概述
Anthropic 发布的经典人类反馈偏好数据集，包含 helpfulness 和 harmlessness 两个维度的人类偏好标注，是 RLHF 研究的基准数据集。

## 核心特性
- Helpful 和 Harmless 双维度偏好对
- 约 170K 训练样本
- 对话式偏好标注格式
- Constitutional AI 研究基础数据

## 技术栈
- Python, JSONL 数据格式

## 与 Self Evolve 的关联
偏好数据是自我进化系统中"评估器/打分器"训练的基础，HH-RLHF 为自对齐研究提供了标准化的偏好信号来源。

## 分类
- **类别**: RLHF 偏好数据集
- **标签**: rlhf, dataset, preference, anthropic, alignment
