# AlphaFold2 - 蛋白质结构预测 (开源生态)

| 字段 | 信息 |
|------|------|
| 仓库 | google-deepmind/alphafold (主仓库) |
| GitHub URL | https://github.com/google-deepmind/alphafold |
| Stars | 14.6k+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2023 年 4 月 (v2.3.2) |
| 模式 | 进化/搜索循环, 评估器/打分器 |

## 概述

AlphaFold2 的开源实现引发了蛋白质结构预测领域的革命，催生了整个 AI 蛋白质科学生态。ColabFold、OpenFold、AlphaFold-Multimer 等衍生项目极大扩展了 AlphaFold2 的应用范围和可访问性。这一生态系统代表了 AI4Science 领域最具影响力的开源运动。

## 核心特性

- **ColabFold**：将 AlphaFold2 带到浏览器端，极大降低使用门槛
- **OpenFold**：PyTorch 原生的 AlphaFold2 重新实现，训练速度更快
- **AlphaFold-Multimer**：扩展至蛋白质-蛋白质复合物预测
- **ESMFold**：Meta 的单序列蛋白质结构预测，无需 MSA 搜索
- **AFDB**：AlphaFold 数据库包含 2 亿+ 蛋白质结构预测

## 技术栈

- Python, JAX, PyTorch
- AlphaFold2 架构
- MMseqs2 (快速序列搜索)
- Deepspeed (分布式训练)

## 与 Self Evolve 的关联

AlphaFold 生态是进化/搜索循环的群体级体现：
- **进化/搜索循环**：从单个突破到整个生态的自我增强式进化
- **评估器/打分器**：pLDDT 和 PAE 等置信度指标充当评估器，对预测质量进行打分

## 分类

AI4Science 方向中的蛋白质结构预测生态，属于「开源科学生态与社区驱动进化」。
