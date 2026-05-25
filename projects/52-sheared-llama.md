# Sheared LLaMA - 数据剪枝与对齐
- **仓库**: facebookresearch/sheared-llama
- **GitHub**: https://github.com/facebookresearch/sheared-llama
- **Stars**: ~600
- **语言**: Python
- **许可**: BSD-3-Clause
- **最近活跃**: 2024-03
- **模式**: 训练/数据循环

## 概述
Meta提出的Sheared LLaMA项目通过数据剪枝和模型剪枝技术，从大型LLaMA模型中高效提取高性能的小型模型。该方法结合了动态数据加载和结构化模型剪枝，在大幅减少计算成本的同时保持了对齐质量。

## 核心特性
- 结构化模型剪枝：从大模型中提取高效小模型
- 动态数据加载策略：根据模型训练需求智能调整数据分布
- 在1.3B和2.7B参数规模上达到同级别最优性能

## 技术栈
- Python, PyTorch, Hugging Face Transformers, Fairseq

## 与 Self Evolve 的关联
数据剪枝和模型剪枝是自我进化中资源优化的重要方向，Sheared LLaMA展示了如何通过智能数据选择和模型压缩实现高效的模型进化，为自我进化系统的资源管理提供了参考方案。

## 分类
- **类别**: RLHF/对齐/安全
- **标签**: data-pruning, model-pruning, alignment, efficient-training, llama
