# ELL-StuLife: 经验驱动终身学习

> GitHub: https://github.com/ECNU-ICALK/ELL-StuLife
> Stars: 100+ | 语言: Python
> 论文: arXiv:2508.19005
> 机构: 华东师范大学 (ECNU-ICALK)
> 数据集: HuggingFace

---

## 核心定位

**Experience-driven Lifelong Learning (ELL)** 框架 + **StuLife** Benchmark。定义了自进化 Agent 的四大核心原则，并构建了虚拟大学校园环境来评估终身学习能力。

## 四大核心原则

### 1. Experience Exploration (经验探索)

- Agent 能分解和执行**持续数分钟到数小时**的复杂任务
- **自驱动**参与，产生丰富经验数据
- 模仿现实世界的试错学习过程

### 2. Long-term Memory (长期记忆)

- 原始观察、关键事件、学习事实、时间上下文、自我反思
- 记忆不是被动存储，而是**主动资源**
- 支持长时间跨度检索和上下文感知推理

### 3. Skill Learning (技能学习)

- 从经验中抽象**可复用技能**
- 决策规则、功能模块、问题解决启发式
- 动态管理技能库：添加、改进、组合、淘汰

### 4. Knowledge Internalization (知识内化)

- 显性知识 → 隐性直觉
- 频繁使用的规则被**内化为自动执行**
- 类比人类从新手到专家的认知转变

## StuLife Benchmark

### 虚拟校园环境

- **持久世界**: `CampusEnvironment` 单例 Python 对象
- **状态演变**: GPA、课程、导师关系等状态持续变化
- **时间驱动**: Agent 自主查看日历决定下一步

### 子系统

| 系统 | 测试能力 |
|------|----------|
| 世界时间 + 日历 | 时间管理和规划 |
| 地图 + 地理 | 空间推理和导航 |
| 课程选择 | 资源分配和优先级 |
| 社交网络 | 人际关系管理 |

## Self Evolve 关联

- **理论框架**: 为自进化 Agent 提供了清晰的原则定义
- **评估基准**: StuLife 是评估终身学习能力的标准化工具
- **知识内化**: 独特的"从显性到隐性"转化机制
- **Context Engineering**: 论文强调上下文工程对 AGI 的重要性

## 本地路径

`repos/ecnu_icalk__ell_stulife/`
