# NAS-Bench - NAS 基准数据集
- **仓库**: google-research/nasbench
- **GitHub**: https://github.com/google-research/nasbench
- **Stars**: 717
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2023-06
- **模式**: 评估器/打分器

## 概述
Google Research 的 NAS-Bench 基准数据集，预计算了整个搜索空间中所有候选架构的性能，使 NAS 算法无需训练即可评估，大幅加速 NAS 研究。

## 核心特性
- 预计算全搜索空间性能
- NAS-Bench-101/201 数据集
- 标准化 NAS 评估
- 无需 GPU 即可搜索

## 技术栈
- Python, TensorFlow, NumPy

## 与 Self Evolve 的关联
NAS-Bench 为自我进化中的架构搜索提供了"预计算评估器"，消除了搜索过程中的训练开销。

## 分类
- **类别**: NAS 基准数据集
- **标签**: nasbench, benchmark, nas, google
