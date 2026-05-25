# Archai - 神经架构搜索系统
- **仓库**: microsoft/archai
- **GitHub**: https://github.com/microsoft/archai
- **Stars**: 486
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-11
- **模式**: 搜索循环

## 概述
Archai 是微软研究院开发的神经架构搜索系统，专注于为实际应用场景（如 NLP、计算机视觉）自动发现高效的神经网络架构。它结合了基于预测器的搜索、进化算法和强化学习等多种搜索策略，同时考虑模型的准确率、延迟和资源消耗。

## 核心特性
- 多搜索策略：预测器引导搜索、进化搜索、RL 搜索
- 多目标优化：同时优化精度、延迟、模型大小
- 领域专用搜索：支持 NLP（Transformer）和 CV 的架构搜索
- 硬件感知：考虑目标硬件的推理延迟
- 完整的 NAS pipeline：从搜索空间定义到模型导出

## 技术栈
- Python, PyTorch
- ONNX (模型导出)
- Azure ML (分布式训练)

## 与 Self Evolve 的关联
Archai 的多目标硬件感知架构搜索展示了 AI 系统如何在多重约束下自动设计最优结构，这种综合考虑性能、资源和部署条件的自动化设计是 AI 自我进化在工程实践中的重要体现。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: NAS, neural-architecture-search, hardware-aware, multi-objective, Microsoft
