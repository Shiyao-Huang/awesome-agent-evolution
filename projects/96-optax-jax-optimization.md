# Optax - JAX 梯度处理与优化库

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/optax |
| GitHub URL | https://github.com/google-deepmind/optax |
| Stars | 1.5k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 训练/数据循环 |

## 概述

Optax 是 Google DeepMind 开发的 JAX 梯度处理和优化库。它提供了一系列可组合的梯度变换构建块，使得研究者可以轻松构建自定义优化器。Optax 是 DeepMind JAX 生态系统的核心组件之一，被广泛用于从基础研究到大规模科学计算的各类 JAX 项目中。

## 核心特性

- **可组合构建块**：通过组合低级梯度变换构建自定义优化器
- **丰富的优化器**：Adam、Adafactor、LAMB、Lion、SGD 等主流优化器实现
- **梯度变换管线**：支持梯度裁剪、权重衰减、学习率调度等链式变换
- **损失函数库**：内置 L1/L2、交叉熵、Huber 等常用损失函数
- **高可测试性**：所有组件都有完善的单元测试

## 技术栈

- Python, JAX
- Chex (类型检查)
- Tree-math (树结构数学运算)

## 与 Self Evolve 的关联

Optax 是训练/数据循环的基础工具层：
- **训练/数据循环**：优化器是训练循环的核心组件，通过梯度变换实现参数的持续更新和精炼
- 为各种 AI4Science 模型的自我进化训练提供了基础优化基础设施

## 分类

AI4Science 方向中的基础设施，属于「科学计算与机器学习的优化基础设施」。
