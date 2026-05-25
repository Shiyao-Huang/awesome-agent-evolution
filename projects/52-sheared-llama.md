# Sheared LLaMA - 数据剪枝与对齐
- **仓库**: facebookresearch/sheared-llama
- **GitHub**: https://github.com/facebookresearch/sheared-llama
- **Stars**: 600
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-06
- **模式**: 训练/数据循环

## 概述
Meta Research 发布的数据高效对齐方法，通过定向数据剪枝从大型模型中高效提取小型高性能模型，在保持性能的同时大幅降低训练成本。

## 核心特性
- 定向数据剪枝（Targeted Pruning）
- 从 LLaMA-2 70B 高效剪枝至 2.7B/1.3B
- 剪枝后继续预训练恢复性能
- 对齐后性能接近原始大模型

## 技术栈
- Python, PyTorch, FairScale

## 与 Self Evolve 的关联
Sheared LLaMA 展示了数据驱动的自我优化路径：通过智能选择训练数据实现模型进化，是自我进化系统中"数据循环"的重要实践。

## 分类
- **类别**: 模型压缩与对齐
- **标签**: sheared-llama, pruning, alignment, meta
