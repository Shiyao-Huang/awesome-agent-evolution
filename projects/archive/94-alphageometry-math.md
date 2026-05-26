# AlphaGeometry - 奥数几何自动求解

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/alphageometry |
| GitHub URL | https://github.com/google-deepmind/alphageometry |
| Stars | 3.5k+ |
| 语言 | Python |
| 许可 | Apache-2.0 (代码) / CC-BY 4.0 (其他) |
| 最近活跃 | 2026 年 1 月 |
| 模式 | 进化/搜索循环, 反馈-精炼 |

## 概述

AlphaGeometry 是 Google DeepMind 开发的几何定理自动证明系统，发表于 Nature 2024。它结合了符号推理引擎（DDAR）和神经语言模型，在 IMO-AG-30 基准上解决了 30 道题目中的 25 道，接近 IMO 金牌获得者的水平。AlphaGeometry2 于 2026 年发布，性能进一步提升。

## 核心特性

- **DDAR 推理引擎**：结合演绎推导 (DD) 和算术推理 (AR) 的符号证明系统
- **LM 辅助构造**：语言模型提议辅助构造点/线/圆，扩展证明搜索空间
- **束搜索**：使用束搜索在构造空间中高效搜索有效证明
- **合成训练数据**：通过随机生成几何构型并追溯其性质来生成海量训练数据
- **IMO 级性能**：在 IMO-AG-30 上达到 25/30 的成绩

## 技术栈

- Python
- JAX (语言模型推理)
- Melliad (Transformer 实现)
- 动态几何引擎 (自定义)

## 与 Self Evolve 的关联

AlphaGeometry 体现了进化/搜索循环和反馈-精炼模式：
- **进化/搜索循环**：束搜索在证明空间中搜索，LM 提议扩展搜索方向
- **反馈-精炼**：DDAR 推理的失败反馈驱动 LM 提出新的辅助构造

## 分类

AI4Science 方向中的数学推理与定理证明，属于「神经-符号混合的自动推理系统」。
