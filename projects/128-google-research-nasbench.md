# NAS-Bench - 神经架构搜索基准
- **仓库**: google-research/nasbench
- **GitHub**: https://github.com/google-research/nasbench
- **Stars**: 717
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2023-05
- **模式**: 评估器/打分器

## 概述
NAS-Bench 是 Google Research 发布的神经架构搜索标准化基准数据集。它预先评估了一个固定搜索空间中所有可能的网络架构，提供了架构到性能的精确映射，使得 NAS 算法的比较无需实际训练即可完成，极大地推动了 NAS 研究的公平性和可复现性。

## 核心特性
- 预计算的性能数据库：包含数十万种架构的完整训练结果
- NAS-Bench-101：首个 NAS 基准，固定搜索空间
- NAS-Bench-201：扩展搜索空间，支持 CIFAR-10/100、ImageNet
- NAS-Bench-NLP：自然语言处理领域的 NAS 基准
- 统一评估标准：消除 NAS 研究中的实验差异

## 技术栈
- Python, TensorFlow
- NumPy
- 数据集文件 (预计算结果)

## 与 Self Evolve 的关联
NAS-Bench 通过提供标准化的架构性能评估基准，使得架构搜索算法的改进可以被公平衡量。这种标准化评估机制是 AI 自我进化系统中 "评估器" 组件的重要参考，确保进化方向的正确性。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: NAS-benchmark, neural-architecture-search, evaluation, Google, reproducibility
