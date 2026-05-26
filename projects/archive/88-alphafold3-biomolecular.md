# AlphaFold 3 - 生物分子相互作用预测

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/alphafold3 |
| GitHub URL | https://github.com/google-deepmind/alphafold3 |
| Stars | 1.5k+ |
| 语言 | Python |
| 许可 | CC-BY-NC-SA 4.0 (代码) |
| 最近活跃 | 2025 年 |
| 模式 | 进化/搜索循环, 反馈-精炼 |

## 概述

AlphaFold 3 是 AlphaFold 系列的最新版本，发表于 Nature 2024。它将预测能力从单一蛋白质扩展到所有生命分子（蛋白质、DNA、RNA、配体等）的复合物结构和相互作用。AlphaFold 3 采用了全新的扩散模型架构，取代了 AlphaFold 2 的结构模块，在多个生物分子预测基准上取得了突破性进展。

## 核心特性

- **全生命分子覆盖**：预测蛋白质、DNA、RNA、离子、配体等任意组合的结构
- **扩散模型**：使用扩散模型替代 AlphaFold 2 的结构模块
- **Pairformer**：简化版的 Evoformer，减少计算开销
- **多链预测**：支持多条链的复合物预测
- **配体对接**：无需已知结合位点即可预测小分子配体的结合模式

## 技术栈

- Python, JAX
- 扩散模型架构
- 多模态输入处理
- GPU / TPU 加速

## 与 Self Evolve 的关联

AlphaFold 3 体现了进化/搜索循环和反馈-精炼模式：
- **进化/搜索循环**：扩散模型的去噪过程本质上是一个逐步搜索最优结构的过程
- **反馈-精炼**：多次精炼步骤不断改善结构预测质量

## 分类

AI4Science 方向中的生物分子结构预测，属于「AI 驱动的多分子相互作用建模」。
