# ADAS: Automated Design of Agentic Systems

> arXiv: 2408.08435 | ICLR 2025 | University of British Columbia + Vector Institute
> Authors: Shengran Hu, Cong Lu, Jeff Clune

---

## Summary

Defines the research area of Automated Design of Agentic Systems (ADAS). Presents Meta Agent Search — a meta agent that iteratively programs new agents in code. Since programming languages are Turing-complete, the search space encompasses all possible agentic system designs. Discovered agents outperform hand-designed SOTA.

---

## Core Method

### Meta Agent Search Algorithm

1. **Meta Agent**: An LLM that writes code defining new agent architectures
2. **Search Space**: All possible Python programs that implement an agent
3. **Iteration**: Each round, meta agent proposes a new agent design based on:
   - Previously successful designs
   - Their performance scores
   - Search history
4. **Evaluation**: Each proposed agent is executed on benchmark tasks
5. **Archive**: Successful designs stored for future reference

### Algorithm

```
Initialize: D = {} (discovered agents)
For iteration t = 1, 2, ..., T:
  1. Meta Agent reviews D + performance history
  2. Meta Agent writes code for new agent a_new
  3. Evaluate a_new on benchmark tasks
  4. Record (a_new.code, a_new.score) in D
  5. D grows → guides future search
Return best agent from D
```

### Turing-Complete Search Space

The critical insight: by searching in code space (Python), ADAS can discover:
- Novel prompting strategies
- New tool compositions
- Multi-step reasoning chains
- Recursive self-referential patterns
- Any computable agent architecture

---

## Key Formulas

| Component | Description |
|---|---|
| Search space | S = {all valid Python programs implementing agents} |
| Meta Agent | a_new = LLM(D, history, search_strategy) |
| Selection | D = D ∪ {(a_new, score(a_new))} |
| Output | a* = argmax_{a ∈ D} score(a) |

---

## Benchmarks & Results

### 主要评估基准

| 基准 | 类型 | 关键结果 |
|------|------|---------|
| ARC (Abstraction & Reasoning Corpus) | 抽象推理 | **超越手工设计 Agent** |
| GFootball (Google Research Football) | 多 Agent 游戏 | **超越手工设计 Agent** |
| 跨域迁移 | 通用性 | 任务 A 设计的 Agent 在任务 B 有效 |
| 跨模型迁移 | 鲁棒性 | GPT-3.5 设计的 Agent 在 GPT-4 有效 |

### 关键数字
- **Meta Agent Search** 自动发现的 Agent 全面超越 SOTA 手工设计 Agent
- **跨域迁移**：在 ARC 上发现的 Agent 设计可迁移到 GFootball
- **跨模型迁移**：用较弱 LLM 搜索到的 Agent 在较强 LLM 上同样有效
- **引用 414+**，ICLR 2025 接收 + NeurIPS 2024 Open-World Agent Workshop 杰出论文奖

### 资源
- 项目页: https://www.shengranhu.com/ADAS/
- GitHub: https://github.com/ShengranHu/ADAS
- TWIML AI Podcast 专访

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Shengran Hu** | UBC / Vector Institute | Primary author, also leads DGM |
| **Cong Lu** | UBC / Vector Institute | Evolutionary AI |
| **Jeff Clune** | UBC / Vector Institute | POET, Quality Diversity pioneer |

### Lab Context
- Same group that produced DGM
- **Jeff Clune's group**: Major force in open-ended AI evolution
- ADAS is a precursor to DGM (adds open-ended archive)

---

## Limitations

1. Search is computationally expensive (many agent evaluations)
2. Quality depends on meta agent LLM capability
3. No formal guarantees on optimality
4. Limited to agent architectures expressible in Python
5. Safety of generated agents not systematically addressed

---

## Citation Context

- Foundation for DGM (same authors, adds evolution)
- Related to NAS (Neural Architecture Search) but for agent systems
- Precedes work on code-level agent self-modification
- Inspired by AutoML/ZERO cost proxy concepts
