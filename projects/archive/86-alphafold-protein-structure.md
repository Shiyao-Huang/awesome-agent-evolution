# AlphaFold - 蛋白质结构预测

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/alphafold |
| GitHub URL | https://github.com/google-deepmind/alphafold |
| Stars | 14.6k+ |
| 语言 | Python (97.5%) |
| 许可 | Apache-2.0 (代码) / CC-BY 4.0 (参数) |
| 最近活跃 | 2023 年 4 月 (v2.3.2) |
| 模式 | 进化/搜索循环 |

## 概述

AlphaFold 是 Google DeepMind 开发的蛋白质三维结构预测系统，解决了生物学领域 50 年来的重大挑战。它利用多序列比对（MSA）和 Evoformer 架构，从氨基酸序列预测蛋白质的原子级精度三维结构，在 CASP14 竞赛中达到了实验级别的预测精度。

## 核心特性

- **Evoformer 架构**：通过注意力机制在序列和配对表示之间迭代交换信息
- **结构模块**：端到端预测 3D 原子坐标，包含刚性身体变换
- **回收机制**：多次迭代精炼预测结构
- **MSA 和模板利用**：利用进化信息和已知结构模板增强预测
- **高精度预测**：在 CASP14 中 GDT 分数达到 92.4

## 技术栈

- Python, JAX
- Haiku (神经网络库)
- CUDA / TPU 加速
- HHblits (多序列比对)
- OpenMM (结构松弛)

## 与 Self Evolve 的关联

AlphaFold 体现了进化/搜索循环模式：
- **进化/搜索循环**：通过 MSA 利用进化信息，结合迭代回收机制逐步精炼结构预测
- **反馈-精炼**：回收模块将结构预测结果反馈给输入端，实现多轮精炼

## 分类

AI4Science 方向中的蛋白质结构预测，属于「AI 驱动的生物分子结构建模」。
