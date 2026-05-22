# Agent0: 零数据自进化 Agent

> GitHub: https://github.com/aiming-lab/Agent0
> Stars: 500+ | 语言: Python | License: Apache 2.0
> 论文: arXiv:2511.16043 (Agent0) + arXiv:2511.19900 (Agent0-VL)
> 机构: UNC-Chapel Hill / Salesforce Research / Stanford University

---

## 核心定位

**零外部数据**自进化框架。两个 Agent 共生竞争——课程 Agent 提出越来越难的任务，执行 Agent 学会使用外部工具解决它们。完全消除对人工标注数据的依赖。

## 双架构

### Agent0 (语言推理)

- **Curriculum Agent**: 提出前沿任务
- **Executor Agent**: 使用工具解决任务
- **共进化循环**: 两个 Agent 互相促进提升

### Agent0-VL (视觉语言)

- **Solver**: 多轮工具集成推理
- **Verifier**: 生成结构化反馈和细粒度自奖励
- **自评估+自修复**: 无需外部奖励

## 性能

### 数学推理 (Qwen3-8B-Base)

| 方法 | 平均 | AMC | MATH | GSM8K | AIME25 |
|------|------|-----|------|-------|--------|
| Base Model | 49.2 | 52.0 | 78.0 | 89.1 | 16.7 |
| Base + Tool | 53.2 | 60.3 | 79.2 | 90.7 | 18.7 |
| + Absolute Zero | 52.6 | 62.5 | 76.6 | 92.0 | 18.2 |
| **+ Agent0** | **更高** | — | — | — | — |

- 数学推理 **+18%**
- 通用推理 **+24%**
- 视觉推理 **+12.5%**

## Self Evolve 关联

- **零数据范式的代表**: 与 Absolute Zero 同类但方法论不同
- **共进化 vs 自博弈**: Agent0 是课程 Agent + 执行 Agent 共进化
- **工具集成推理**: 强调外部工具在自进化中的核心作用
- **学术顶级**: UNC + Salesforce + Stanford 三校合作

## 本地路径

`repos/aiming_lab__agent0/`
