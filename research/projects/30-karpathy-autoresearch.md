# AutoResearch：自主 AI 研究框架

> **2025-2026 新项目** | 2026 年 3 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/karpathy/autoresearch |
| Stars | 82,695 |
| 主要语言 | Python |
| 许可证 | MIT |
| 创建时间 | 2026-03-06 |

## 项目简介

AutoResearch 是由 Andrej Karpathy 创建的自主 AI 研究框架，核心理念是让 AI Agent 拥有一个小型但真实的 LLM 训练环境，并在夜间自主进行实验。Agent 会修改训练代码、运行 5 分钟训练、检查结果是否改善、保留或丢弃更改，然后不断重复。用户第二天早上醒来即可获得实验日志和（期望中的）更优模型。

该项目基于单 GPU 的简化版 nanochat 训练实现，将研究过程从"人类手动修改 Python 文件"转变为"编程 Markdown 指令文件来设置自主研究组织"。Karpathy 将其描述为未来全自主 AI 研究的起点——当研究完全由运行在计算集群上的 AI Agent 群体接管时，这个故事的开端。

## 目录结构

```
autoresearch/
├── prepare.py        # 固定常量、数据准备、运行时工具（不修改）
├── train.py          # 模型、优化器、训练循环（Agent 修改此文件）
├── program.md        # Agent 指令文件（人类编辑此文件）
├── analysis.ipynb    # 分析实验结果
├── pyproject.toml    # 依赖管理
└── uv.lock           # 锁定文件
```

## 核心模块分析

### 1. 训练循环模块（train.py）
包含完整的 GPT 模型定义、Muon + AdamW 优化器以及训练循环。这是 Agent 唯一被允许修改的文件，涵盖架构、超参数、优化器、批次大小等所有可调要素。设计上强制固定 5 分钟训练时间预算，使得不同实验之间可以直接比较。

### 2. Agent 指令系统（program.md）
本质上是一个超轻量级的"技能"文件，为 AI Agent 提供基线指令。用户通过迭代改进这个文件来构建自己的"自主研究组织"——可以添加更多 Agent、调整实验策略等。这是人类控制研究方向的唯一入口。

### 3. 数据准备与评估（prepare.py）
一次性数据下载、BPE 分词器训练，以及评估工具函数。评估指标使用 val_bpb（验证集 bits per byte），该指标与词表大小无关，确保架构变更间的公平比较。

## 技术亮点

1. **极简三文件架构**：整个研究框架仅有三个核心文件，将"Agent 可修改的代码"与"固定基础设施"严格分离，保持实验范围可控且 diff 可审查。

2. **固定时间预算设计**：训练始终在精确的 5 分钟内运行（不论平台），每小时约 12 次实验、睡眠期间约 100 次实验。这保证了实验的可比性，且自动为用户的硬件找到最优模型。

3. **零外部复杂依赖**：除 PyTorch 和少量小包外无外部依赖，无需分布式训练或复杂配置，单 GPU 单文件即可运行。

4. **人类-Agent 协作分工**：人类编辑 program.md 定义研究方向，Agent 自主执行实验循环，形成高效的人机协作研究范式。

## 与 Self-Evolve 关联

AutoResearch 是 AI 自主研究自进化的**里程碑级项目**。它展示了 Self-Evolve 的核心理念：让 AI 系统自主设计实验、执行迭代、评估结果并持续改进。与传统的 AutoML 不同，AutoResearch 不是在搜索超参数，而是在让 Agent 自主修改整个训练代码——模型架构、优化器、数据策略均可被改写。它代表了从"工具辅助研究"到"Agent 自主研究"的关键跃迁。program.md 的概念尤其值得注意——将"研究组织的代码"本身视为可迭代优化的对象，这暗示了元层面的自进化：不仅优化实验，还优化研究策略本身。

## 参考资料

- [GitHub 仓库](https://github.com/karpathy/autoresearch)
- [Karpathy 推文介绍](https://x.com/karpathy/status/2029701092347630069)
- [nanochat 基础仓库](https://github.com/karpathy/nanochat)
- [Dummy's Guide 解读](https://x.com/hooeem/status/2030720614752039185)
