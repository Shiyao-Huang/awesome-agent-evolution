# Agent 自进化机制全景图（Mermaid DAG）

- generated_at: 2026-05-26
- source: 综合 `evolution-state-machine.md` + `method-taxonomy-mermaid.md` + `cross-source-validation-map.md` + `propagation-self-evolution-core.md`
- purpose: 展示Agent自进化的完整机制闭环——观察→评估→决策→变异→验证→归档，以及6类可变异对象的进化路径

## 核心洞察

全景图揭示三个层次：
1. **控制流层**（横向）：OBSERVE → EVALUATE → DECIDE → MUTATE → VERIFY → ARCHIVE → 循环
2. **对象层**（纵向）：Prompt / Memory / Skill / Code / Architecture / Policy 六类可变异对象
3. **选择压力层**（底部）：Benchmark / Human / LLM-Judge / Self-Critique / Cost / Safety

```mermaid
flowchart TD
    subgraph CONTROL_FLOW["🔄 自进化控制流"]
        direction LR
        OBS["👁 OBSERVE<br/>收集轨迹数据<br/>trajectory · feedback · cost"]
        EVAL["📊 EVALUATE<br/>多维评估<br/>benchmark · human · LLM-judge"]
        DECIDE["⚖ DECIDE<br/>进化决策<br/>threshold · diversity · budget"]
        MUTATE["🧬 MUTATE<br/>变异/改进<br/>6类可变异对象"]
        VERIFY["✅ VERIFY<br/>回归验证<br/>test suite · safety · cost"]
        ARCH["📦 ARCHIVE<br/>归档/溯源<br/>lineage · rollback · evidence"]
    end

    OBS --> EVAL --> DECIDE
    DECIDE -->|"score < threshold"| MUTATE
    DECIDE -->|"score ≥ threshold"| ARCH
    MUTATE --> VERIFY
    VERIFY -->|"pass"| ARCH
    VERIFY -->|"fail → rollback"| OBS
    ARCH --> OBS

    subgraph MUTABLE_OBJECTS["🧬 可变异对象（What Evolves）"]
        direction TB
        P["📝 Prompt/Context<br/>34.7% 论文 (68/196)<br/>prompt/search optimization"]
        M["🧠 Memory/Knowledge<br/>8.2% 论文 (16/196)<br/>memory/knowledge evolution"]
        S["⚡ Skill<br/>生态层：140K+★ skills<br/>SkillClaw/EvoAgentX"]
        C["💻 Code<br/>14.3% 论文 (28/196)<br/>code/self-modification"]
        A["🏗 Architecture<br/>ADAS·DGM·GenericAgent<br/>architecture search"]
        RL["🎯 Policy/RL<br/>26.0% 论文 (51/196)<br/>reward/RL/self-play"]
    end

    MUTATE -.->|"修改"| P
    MUTATE -.->|"更新"| M
    MUTATE -.->|"添加/精炼"| S
    MUTATE -.->|"重写"| C
    MUTATE -.->|"重构"| A
    MUTATE -.->|"调整"| RL

    subgraph SELECTION_PRESSURE["⬇ 选择压力（Selection Pressure）"]
        direction LR
        BM["🎯 Benchmark<br/>SWE-bench · ARC-Bench<br/>HumanEval · MLE-bench"]
        HR["👤 Human Review<br/>代码审查 · A/B测试<br/>偏好反馈"]
        LJ["🤖 LLM-as-Judge<br/>self-critique · debate<br/>reward model"]
        SC["🔍 Self-Critique<br/>Reflexion · self-refine<br/>反思记忆"]
        CS["💰 Cost/Safety<br/>token预算 · 延迟<br/>安全扫描 · 合规"]
    end

    BM --> EVAL
    HR --> EVAL
    LJ --> EVAL
    SC --> EVAL
    CS --> VERIFY

    subgraph MULTI_AGENT["👥 多智能体协作进化"]
        direction TB
        GEN2["Generator<br/>生成候选方案"]
        VER2["Verifier<br/>测试验证"]
        RED2["Red Team<br/>对抗挑战"]
        AUD2["Auditor<br/>安全审计"]
    end

    GEN2 -->|"candidate"| VER2
    GEN2 -->|"proposal"| RED2
    RED2 -->|"critique"| GEN2
    VER2 -->|"score"| AUD2
    RED2 -->|"vulnerability"| AUD2
    AUD2 -->|"approve/reject"| GEN2

    OBS -.->|"feeds"| GEN2
    VER2 -.->|"feeds"| EVAL
    AUD2 -.->|"feeds"| CS

    style OBS fill:#3498db,color:#fff
    style EVAL fill:#e67e22,color:#fff
    style DECIDE fill:#9b59b6,color:#fff
    style MUTATE fill:#e74c3c,color:#fff
    style VERIFY fill:#27ae60,color:#fff
    style ARCH fill:#1abc9c,color:#fff
    style P fill:#f39c12,color:#fff
    style M fill:#f39c12,color:#fff
    style S fill:#f39c12,color:#fff
    style C fill:#f39c12,color:#fff
    style A fill:#f39c12,color:#fff
    style RL fill:#f39c12,color:#fff
```

## 数据支撑

| 机制维度 | 论文数量 | 占比 | 代表性项目/方法 |
|---------|-------:|-----:|-------------|
| Prompt/Search Optimization | 68 | 34.7% | EvoPrompt, GEPA |
| Reward/RL/Self-play | 51 | 26.0% | Absolute Zero, RAGEN |
| Code/Self-modification | 28 | 14.3% | DGM, AlphaEvolve |
| Multi-agent Reflection/Debate | 16 | 8.2% | Reflexion, CORAL |
| Memory/Knowledge Evolution | 16 | 8.2% | Mem0, lifelong learning |
| Web/Tool/Environment | 13 | 6.6% | Voyager, Agent-R |
| Evaluation/Safety/Governance | 4 | 2.0% | Misevolution study |

数据来源：`paper-method-classification-snapshot.csv` (196 papers classified)

## 关键发现

1. **Prompt优化是最大方法族**（34.7%），但对应Repo中memory类最多（60个），说明论文与实践存在研究-应用gap
2. **选择压力多样化**：从单一benchmark到多维度评估（benchmark + human + LLM-judge + cost + safety）
3. **多智能体协作是进化加速器**：Generator-Verifier-RedTeam-Auditor 四角色互补降低共同盲点风险
4. **验证环节是瓶颈**：交叉验证显示"demo成功 ≠ production成功"（Reliability gap: 2 papers vs 132 repos vs 19 painpoints）
