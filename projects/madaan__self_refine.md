---
title: "self-refine"
repo: "madaan/self-refine"
url: "https://github.com/madaan/self-refine"
stars: 805
forks: 70
last_pushed: "2024-10-04T21:06:28Z"
license: "Apache-2.0"
language: "Python"
local_path: "repos/madaan__self_refine"
---

# self-refine

## 项目概览
- **仓库**：[madaan/self-refine](https://github.com/madaan/self-refine)
- **Star / Fork**：805 / 70
- **最近活跃**：2024-10-04T21:06:28Z
- **主要语言**：Python
- **许可证**：Apache-2.0
- **中文摘要**：Self-Refine 经典实现，用同一个 LLM 生成初稿、生成反馈、再根据反馈迭代精炼，无需训练或强化学习。

## 技术栈
Python

依赖与配置证据：

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `反馈-精炼` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text

```

## 关键代码片段分析
- 轻量扫描未发现明显入口文件；可能是研究代码、脚本集合或文档驱动仓库。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/madaan__self_refine --index-only --skip-git --name ae-madaan__self_refine`。
- **图谱规模**：1197 nodes / 1802 edges / 67 clusters / 32 flows。
- **查询语句**：`feedback refine iterate prompt self refine task`。
- **相关执行流程**：
  - Test → Iterative_gsm
  - Test → Show_example
  - Generate_initial_children → Parse_scores
  - Mcts_iteration → Weighted_sum
- **关键符号/文件**：
  - `run.py`（`src/commongen/run.py`）
  - `autofb_commongen`（`src/commongen/run.py`）
  - `run_multi_sample`（`src/commongen/run.py`）
  - `run_mcts.py`（`src/acronym/run_mcts.py`）
  - `run.py`（`src/gsm/run.py`）
  - `run.py`（`src/pie/run.py`）
- **符号上下文**：
  - 符号 `run.py` 位于 `src/commongen/run.py` 第 ?–? 行
  - 出边/调用或包含关系：imports: 4，calls: 3
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：反馈-精炼。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“输出级反馈-精炼”范式，是许多后续 Agent 反思和代码演化框架的基础模式。
- 在 Landing Page 中建议标签：`反馈-精炼`。
