# AutoResearchClaw: 自主科研管线

> GitHub: https://github.com/aiming-lab/AutoResearchClaw
> Stars: 2,000+ | 语言: Python | License: MIT
> 论文: arXiv:2605.20025
> 机构: UNC-Chapel Hill (AIMING Lab)
> 数据集: ARC-Bench (HuggingFace)

---

## 核心定位

**23 阶段自主科研管线**：一个想法 → 一篇论文。支持完全自主或 Human-in-the-Loop 协作模式。

## 核心机制

### 23 阶段管线

```
想法 → 文献调研 → 假设 → 实验设计 → 代码执行 → 结果分析 → 论文撰写 → 同行评审
```

### 领域专家 Agent

- **高能物理**: ColliderAgent (Lagrangian → FeynRules → MadGraph5)
- **生物学**: COBRApy 基因组规模代谢建模
- **统计学**: 仿真研究 Agent
- **通用**: Docker 执行器（化学/材料）

### HITL 协作模式

6 种干预模式：`full-auto` / `gate-only` / `checkpoint` / `step-by-step` / `co-pilot` / `custom`

### MetaClaw 跨次学习

- 管线失败 → 结构化教训 → 可复用技能
- 注入所有 23 个阶段 → **+18.3%** 鲁棒性提升

## 技术栈

- **语言**: Python 3.11+
- **后端**: Claude Code / Codex CLI / Copilot CLI / Gemini CLI
- **消息**: Discord / Telegram / Lark / WeChat (OpenClaw 桥接)
- **测试**: 2,699 个测试通过
- **技能**: 20 预装技能 + 社区贡献技能

## 性能

- **8 个领域 8 篇论文**: 数学、统计、生物、计算、NLP、RL、视觉、鲁棒性
- **ARC-Bench**: 55 主题开放式自主科研 Benchmark
- **v0.5.0**: 多领域实验 Agent + Benchmark

## Self Evolve 关联

- **科研自动化的最高水平**: 从想法到论文的全链路自动化
- **MetaClaw 自进化**: 管线本身也在进化（从失败中学习）
- **技能加载**: 支持外部技能安装，类似 GenericAgent 的技能树
- **与 AI Scientist 互补**: AI Scientist 是 Sakana AI，AutoResearchClaw 是 UNC

## 本地路径

`repos/aiming_lab__autoresearchclaw/`
