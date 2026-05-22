# EvoAgent: 进化算法自动生成多 Agent

> GitHub: https://github.com/siyuyuan/EvoAgent
> Stars: 200+ | 语言: Python
> 论文: arXiv:2406.14228
> 网站: https://evo-agent.github.io/

---

## 核心定位

通用方法，通过**进化算法**自动将专家 Agent 扩展为多 Agent 系统。模拟人类社会中的个体繁殖行为，自动生成多样化 Agent 种群。

## 核心机制

### 进化式多 Agent 生成

```
单个专家 Agent → 视为"个体" → 进化繁殖 → 多 Agent 种群
```

- 每个 Agent 类比为可繁殖的个体
- 通过进化操作（变异、交叉）生成新 Agent
- 跨代累积改进

### 评估任务

- **NLP**: Logic Grid Puzzle, Trivia Creative Writing, Codenames
- **多模态**: MMMU

## Self Evolve 关联

- **群体进化**: 从个体 Agent 到群体的自动化扩展
- **与 EvoAgentX 同源**: 同一研究组的不同项目
- **进化算法应用**: 将经典进化计算应用到 Agent 设计

## 本地路径

`repos/siyuyuan__evoagent/`
