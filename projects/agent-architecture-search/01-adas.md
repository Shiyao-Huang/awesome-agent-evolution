# ADAS: Automated Design of Agentic Systems

> GitHub: https://github.com/ShengranHu/ADAS
> Stars: 1,200+ | 语言: Python | License: Apache 2.0
> 论文: arXiv:2408.08435 | 会议: **ICLR 2025 (Outstanding Paper)**

---

## 核心定位

ADAS 定义了一个全新研究领域——**自动化 Agent 系统设计**，并提出了 **Meta Agent Search** 算法：让 LLM 充当"元 Agent"，在代码空间中迭代编程新 Agent 设计。

## 技术栈

- **语言**: Python 3.11+
- **依赖**: OpenAI API (GPT-4o)
- **框架**: 纯 Python，无重依赖

## 核心机制

### Meta Agent Search 算法

1. **搜索空间**: Turing-complete 代码空间 — Agent 被表示为 Python 函数
2. **元 Agent**: LLM 编程新 Agent，基于先前发现
3. **评估**: 每个 Agent 设计在目标任务上评估性能
4. **迭代**: 保留最佳设计，累积发现

```
Meta Agent → 编程 Agent_i → 在任务上评估 → 保留/淘汰 → 下一轮
```

### 关键创新

- Agent 设计空间是**代码级**的（不是 prompt 级）
- 发现的 Agent 设计可以**跨域迁移**
- 支持发明全新的 Agent 构建块

## 性能

- **ARC**: 超越手工设计的 Agent
- **DROP**: 领先基线方法
- **MGSM**: 跨语言数学推理
- **MMLU**: 通用知识理解
- **NeurIPS 2024 Open-World Agent Workshop Outstanding Paper**

## 项目结构

```
adas/
├── _arc/          # ARC 基准实验
├── _drop/         # DROP 基准实验
├── _mgsm/         # MGSM 基准实验
├── _mmlu/         # MMLU 基准实验
├── baseline/      # 基线方法
└── misc/          # 算法示意图
```

## Self Evolve 关联

- **直接先驱**: ADAS 是 DGM (Darwin Gödel Machine) 的基础工作
- **架构搜索范式**: 定义了 "元 Agent 编程 Agent" 的通用模式
- **代码级进化**: 将 Agent 进化从 prompt 空间提升到代码空间
- **作者**: Shengran Hu, Cong Lu, Jeff Clune (Clune Lab)

## 本地路径

`repos/shengranhu__adas/`
