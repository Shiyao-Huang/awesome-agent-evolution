# Self-Evolve LLM - LLM 自我进化视角

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | zezhishao/self-evolve-llm (参考) |
| GitHub URL | https://github.com/zezhishao/self-evolve-llm |
| Stars | ~50 |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2024 |
| 模式 | 训练/数据循环 |

## 概述
Self-Evolve LLM 是从系统化视角研究 LLM 自我进化的项目。它整合了代码生成、自我调试和知识蒸馏等技术，构建了一个完整的 LLM 自我进化框架。项目的核心贡献在于将分散的自我进化技术 (Self-Refine, Self-Debug, Self-Reward 等) 统一到一个系统框架中，分析不同自我进化策略的适用场景和组合效果。项目还提供了自我进化效果的量化评估方法和基准。

## 核心特性
- **统一框架**: 整合自我精炼、自我调试、自我评估等多种自我进化技术
- **代码生成进化**: 专注于代码生成任务的自我进化
- **自我调试集成**: 将执行反馈驱动的自我调试纳入进化循环
- **知识蒸馏**: 从强模型的进化经验中蒸馏知识
- **效果量化**: 提供系统化的自我进化效果评估方法
- **技术组合**: 研究不同自我进化技术的最优组合策略

## 技术栈
- Python, LLM API (GPT-4 / 开源模型)
- 代码执行环境
- 评估基准 (HumanEval, MBPP)

## 与 Self Evolve 的关联
Self-Evolve LLM 项目与本项目直接相关，它从实践角度验证了 LLM 自我进化的可行性。其统一框架的设计思路为本项目的分类体系 (进化/搜索循环、反馈-精炼、评估器/打分器等模式) 提供了实践支撑。不同自我进化技术的组合研究也为构建复合型自我进化系统提供了策略参考。

## 分类
- **类别**: LLM 自我进化框架
- **标签**: self-evolve, llm, self-refine, self-debug, knowledge-distillation, code-generation
