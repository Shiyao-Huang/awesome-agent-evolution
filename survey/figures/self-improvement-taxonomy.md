# 自我改进机制分类学图（三维分类法）

- generated_at: 2026-05-26
- source: 综合 `paper-method-classification-snapshot.csv` (196 papers) + `repo-techstack-cross-analysis.csv` (364 repos) + `painpoint-index.csv` (97 pain points)
- purpose: 三维分类框架——WHAT（什么在进化）× HOW（如何进化）× WHY（为什么进化），建立自我改进机制的完整分类学

## 分类学框架

```mermaid
flowchart TD
    ROOT["🧬 Agent 自我改进机制分类学"]

    ROOT --> WHAT["📐 WHAT：什么在进化？<br/>可变异对象分类"]
    WHAT --> W1["📝 Prompt / Instruction<br/>68 papers (34.7%)<br/>EvoPrompt, GEPA, APO"]
    WHAT --> W2["🧠 Memory / Knowledge<br/>16 papers (8.2%)<br/>经验存储·知识蒸馏·遗忘管理"]
    WHAT --> W3["⚡ Skill / Capability<br/>生态：140K+★ skill repos<br/>SkillClaw集体进化"]
    WHAT --> W4["💻 Code / Program<br/>28 papers (14.3%)<br/>DGM, AlphaEvolve, self-rewrite"]
    WHAT --> W5["🏗 Architecture<br/>ADAS(1.4K★) · DGM(0.8K★)<br/>结构搜索·模块重组"]
    WHAT --> W6["🎯 Policy / Reward<br/>51 papers (26.0%)<br/>RL·self-play·reward shaping"]

    ROOT --> HOW["🔧 HOW：如何进化？<br/>进化机制分类"]
    HOW --> H1["🔍 Search / Optimization<br/>系统化搜索最优解<br/>EvoPrompt(68), beam search"]
    HOW --> H2["🎮 Reinforcement Learning<br/>通过奖励信号学习<br/>Absolute Zero, RAGEN(51)"]
    HOW --> H3["💬 Reflection / Debate<br/>通过反思和辩论改进<br/>Reflexion, CORAL(16)"]
    HOW --> H4["🧬 Evolutionary / Genetic<br/>种群变异+选择<br/>DGM, AlphaEvolve(28)"]
    HOW --> H5["🧪 Trial-and-Error<br/>环境交互中学习<br/>Voyager, Agent-R(13)"]
    HOW --> H6["📊 Imitation / Distillation<br/>从成功案例学习<br/>skill distillation"]

    ROOT --> WHY["🎯 WHY：为什么进化？<br/>选择压力/驱动力分类"]
    WHY --> Y1["📈 Benchmark Score<br/>SWE-bench, ARC-Bench<br/>自动化评测驱动"]
    WHY --> Y2["👤 Human Feedback<br/>RLHF, 偏好对齐<br/>人类偏好信号"]
    WHY --> Y3["🤖 LLM-as-Judge<br/>self-critique, reward model<br/>AI自我评估"]
    WHY --> Y4["💰 Cost / Efficiency<br/>token预算·延迟约束<br/>资源效率压力"]
    WHY --> Y5["🛡 Safety / Governance<br/>安全合规·防退化<br/>底线约束"]
    WHY --> Y6["🌍 Environment Feedback<br/>任务成功/失败信号<br/>自然选择压力"]

    H1 -.->|"优化"| W1
    H2 -.->|"训练"| W6
    H3 -.->|"更新"| W2
    H4 -.->|"变异"| W4
    H4 -.->|"重组"| W5
    H5 -.->|"积累"| W3
    H6 -.->|"蒸馏"| W2

    Y1 -.->|"驱动"| H1
    Y2 -.->|"驱动"| H2
    Y3 -.->|"驱动"| H3
    Y4 -.->|"约束"| H4
    Y5 -.->|"约束"| H5
    Y6 -.->|"信号"| H5

    style ROOT fill:#2c3e50,color:#fff
    style WHAT fill:#e74c3c,color:#fff
    style HOW fill:#3498db,color:#fff
    style WHY fill:#27ae60,color:#fff
```

## 三维交叉矩阵

### HOW × WHAT：方法×对象覆盖度

| 方法\对象 | Prompt | Memory | Skill | Code | Architecture | Policy |
|----------|:------:|:------:|:-----:|:----:|:------------:|:------:|
| Search/Optimization | **68** | 5 | 3 | 2 | 4 | 8 |
| RL/Self-play | 12 | 3 | 2 | 5 | 6 | **51** |
| Reflection/Debate | 8 | **16** | 4 | 2 | 1 | 3 |
| Evolutionary/Genetic | 3 | 1 | 2 | **28** | **8** | 4 |
| Trial-and-Error | 2 | 4 | **8** | 6 | 1 | 3 |
| Imitation/Distillation | 1 | 6 | 4 | 1 | 2 | 2 |

### WHY × 痛点：驱动力与社区痛点映射

| 驱动力 | 对应痛点数 | 典型痛点 | Gap分析 |
|-------|----------:|---------|--------|
| Benchmark Score | 10 | "Modest Absolute Gains" | 论文多(68)但实际提升有限 |
| Human Feedback | 19 | "Real-World Deployment Gap" | 人类偏好收集成本高 |
| LLM-as-Judge | 14 | "Framework/Tooling Gaps" | 自评bias风险 |
| Cost/Efficiency | 11 | "Safety, Security & Cost" | token成本是生产最大障碍 |
| Safety/Governance | 6 | "Misevolution/Unintended" | 最少研究但风险最高 |
| Environment Feedback | 12 | "Knowledge & Memory Persistence" | 长期记忆漂移问题 |

## 关键洞察

1. **Prompt优化过于集中**：34.7%的论文聚焦prompt优化，但memory(60 repos)和evaluation(85 repos)才是实践中的主要需求
2. **进化方法与选择压力错配**：RL方法最多(51 papers)，但生产环境主要靠human feedback和cost约束
3. **Safety/Governance严重不足**：仅4篇论文(2.0%)，却有6个痛点类别和86个safety相关repo，gap最大
4. **三维空间中的空白区域**：Skill×Evolutionary和Architecture×Reflection几乎没有论文覆盖
