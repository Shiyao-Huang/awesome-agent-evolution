# rStar - 自我推理对齐

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | ZheningXie/rstar |
| GitHub URL | https://github.com/ZheningXie/rstar |
| Stars | ~300 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 反馈-精炼 |

## 概述
rStar (Reasoning with Self-Verification and Tree Search) 是一种通过自我推理和验证来提升大语言模型推理能力的方法。它将推理过程分解为两个阶段：首先由 target LLM 生成多样化的推理路径 (通过 MCTS 搜索)，然后由另一个 LLM (或自身) 对每条推理路径进行验证和评分。rStar 通过这种自我博弈 (self-play) 机制，无需外部标注数据即可显著提升模型在数学推理等任务上的表现。

## 核心特性
- **MCTS 推理搜索**: 使用蒙特卡洛树搜索生成多样化推理路径
- **自我验证**: 模型自身验证推理步骤的正确性
- **多维度评分**: 从逻辑性、完整性、正确性等维度评估推理质量
- **无标注训练**: 不需要人类标注，完全通过自我博弈生成训练信号
- **推理蒸馏**: 将搜索得到的优质推理路径蒸馏回模型
- **跨模型验证**: 支持使用不同模型进行交叉验证

## 技术栈
- Python, PyTorch, Hugging Face Transformers
- vLLM (推理), MCTS 实现

## 与 Self Evolve 的关联
rStar 体现了 Self Evolve 系统中"反馈-精炼"模式的推理增强范式。其核心思路——生成多样化候选 -> 自我验证评分 -> 选择最优路径 -> 蒸馏学习——正是自我进化循环在推理领域的具体实现。MCTS 搜索空间的设计为进化系统提供了丰富的变异策略参考，自我验证机制则是构建无人类反馈进化系统的关键。

## 分类
- **类别**: 自我推理对齐
- **标签**: reasoning, self-verification, mcts, math, self-play, tree-search
