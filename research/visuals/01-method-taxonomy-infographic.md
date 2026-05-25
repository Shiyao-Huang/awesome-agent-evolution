# Survey 方法图谱信息图（增强版）

- generated_at: 2026-05-25
- source: survey/figures/method-taxonomy-mermaid.md + research/formal-framework-agent-evolution.md
- papers: 196 classified
- purpose: 综合方法分类 + 状态空间映射 + 代表论文

```mermaid
flowchart TD
    subgraph TITLE[" "]
        direction LR
        T["Agent Self-Evolution<br/>方法图谱 — 196 Papers / 6 Method Families"]
    end

    subgraph F1["🔵 Prompt/Search Optimization — 68 papers (34.7%)"]
        direction LR
        P1["Self-Refine<br/>迭代自修正"]
        P2["Reflexion<br/>跨episode反思"]
        P3["OPRO<br/>LLM-as-optimizer"]
        P4["ACE/EvolveR<br/>上下文工程"]
    end

    subgraph F2["🟢 Reward/RL/Self-Play — 51 papers (26.0%)"]
        direction LR
        R1["RAGEN<br/>轨迹级RL"]
        R2["Absolute Zero<br/>零数据自博弈"]
        R3["Self-Rewarding LM<br/>自评+DPO"]
        R4["STaR/RISE<br/>推理链bootstrapping"]
    end

    subgraph F3["🔴 Code/Self-Modification — 28 papers (14.3%)"]
        direction LR
        C1["DGM<br/>代码自修改+archive"]
        C2["Gödel Agent<br/>runtime monkey patch"]
        C3["ADAS<br/>架构搜索"]
        C4["AlphaEvolve<br/>MAP-Elites算法发现"]
    end

    subgraph F4["🟡 Multi-Agent Reflection — 16 papers (8.2%)"]
        direction LR
        M1["ExPeL<br/>经验蒸馏"]
        M2["Agent Symbolic Learning<br/>文本反向传播"]
        M3["EvoMAC<br/>多agent协作进化"]
    end

    subgraph F5["🟣 Memory/Knowledge Evolution — 16 papers (8.2%)"]
        direction LR
        K1["Voyager<br/>技能库+自动课程"]
        K2["Memory-R1<br/>学习记忆操作"]
        K3["ReasoningBank<br/>推理经验库"]
    end

    subgraph F6["🟠 Environment Adaptation — 13 papers (6.6%)"]
        direction LR
        E1["WebEvolver<br/>web自进化"]
        E2["AHE<br/>harness自进化"]
        E3["Voyager<br/>Minecraft技能"]
    end

    subgraph STATE["状态空间映射 S = (θ, c, g, m, A)"]
        direction LR
        THETA["θ 模型参数<br/>RAGEN·AbsZero"]
        CTX["c 上下文/提示词<br/>Reflexion·ACE"]
        GRAPH["g 工具/代码/架构<br/>DGM·ADAS·AlphaEvolve"]
        MEM["m 记忆/技能<br/>Voyager·Memory-R1"]
        ARCH["A Archive/候选集<br/>DGM·AlphaEvolve"]
    end

    %% 变异目标映射
    F1 -->|"变 c, m"| CTX
    F2 -->|"变 θ"| THETA
    F3 -->|"变 g, A"| GRAPH
    F4 -->|"变 c, m"| CTX
    F5 -->|"变 m"| MEM
    F6 -->|"变 g, m"| GRAPH

    THETA --> CORE["核心循环<br/>E(执行)→M(变异)→V(验证)"]
    CTX --> CORE
    GRAPH --> CORE
    MEM --> CORE
    ARCH --> CORE

    CORE --> CONV["收敛层次<br/>L1局部→L2稳健→L3迁移→L4开放式→L5安全"]

    style TITLE fill:#1a1a2e,color:#fff,stroke:none
    style F1 fill:#e3f2fd,stroke:#1565c0
    style F2 fill:#e8f5e9,stroke:#2e7d32
    style F3 fill:#fce4ec,stroke:#c62828
    style F4 fill:#fffde7,stroke:#f9a825
    style F5 fill:#f3e5f5,stroke:#7b1fa2
    style F6 fill:#fff3e0,stroke:#e65100
    style STATE fill:#f5f5f5,stroke:#333
    style CORE fill:#e0f7fa,stroke:#00838f
    style CONV fill:#efebe9,stroke:#5d4037
```

## 信息图说明

| 方法族 | 论文数 | 占比 | 变异对象 | 代表论文 | 收敛证据层级 |
|---|---:|---:|---|---|---|
| Prompt/Search Optimization | 68 | 34.7% | c, m | Self-Refine, Reflexion, OPRO | L1-L2 |
| Reward/RL/Self-Play | 51 | 26.0% | θ | RAGEN, Absolute Zero, STaR | L1-L2 |
| Code/Self-Modification | 28 | 14.3% | g, A | DGM, ADAS, AlphaEvolve | L2-L4 |
| Multi-Agent Reflection | 16 | 8.2% | c, m | ExPeL, Agent Symbolic Learning | L1-L2 |
| Memory/Knowledge Evolution | 16 | 8.2% | m | Voyager, Memory-R1 | L1-L2 |
| Environment Adaptation | 13 | 6.6% | g, m | WebEvolver, AHE | L2-L3 |

**关键洞察**：代码自修改类虽然论文数最少之一（14.3%），但收敛证据层级最高（L2-L4），是最有深度但准入门槛最高的方向。
