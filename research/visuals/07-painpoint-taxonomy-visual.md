# 痛点分类学可视化

- generated_at: 2026-05-25
- source: research/formal-framework-agent-evolution.md §3 + mom-test-findings-ZH.md
- purpose: 97 个痛点在 7 大族中的分布 + 方法缓解映射

```mermaid
flowchart TD
    subgraph PAIN["痛点层 — 7 大族 · 97 个痛点"]
        direction TB
        P1["🔴 E1: 生产可靠性<br/>5 子类 · 15 痛点<br/>80%魔咒 · 幻觉不可自纠 · 长链陷阱"]
        P2["🟠 E2: 自进化可行性<br/>5 子类 · 18 痛点<br/>循环漂移 · plateau · 归因困难"]
        P3["🟡 E3: 框架工具链<br/>4 子类 · 14 痛点<br/>抽象掩盖调试 · 生态锁定"]
        P4["🟢 E4: 评估基准<br/>4 子类 · 16 痛点<br/>污染/饱和 · Goodhart · 报告缺失"]
        P5["🔵 E5: 记忆知识<br/>4 子类 · 14 痛点<br/>架构未定型 · 过期/漂移/污染"]
        P6["🟣 E6: 安全错误演化<br/>3 子类 · 7 痛点<br/>注入/攻击面 · 错误演化方向"]
        P7["⚫ E7: 成本规模<br/>3 子类 · 13 痛点<br/>循环失控 · 多步放大"]
    end

    subgraph RELIEF["缓解方法映射"]
        direction TB
        M1["分层验证栈<br/>→ E1, E4"]
        M2["不可篡改评估器<br/>→ E2, E4"]
        M3["记忆生命周期管理<br/>→ E5"]
        M4["分级自治<br/>→ E6"]
        M5["预算门控<br/>→ E7"]
        M6["最小足够抽象<br/>→ E3"]
    end

    P1 -->|"需要"| M1
    P2 -->|"需要"| M2
    P3 -->|"需要"| M6
    P4 -->|"需要"| M1
    P4 -->|"需要"| M2
    P5 -->|"需要"| M3
    P6 -->|"需要"| M4
    P7 -->|"需要"| M5

    M1 --> SUPPORT["支撑层"]
    M2 --> SUPPORT
    M3 --> SUPPORT
    M4 --> SUPPORT
    M5 --> SUPPORT
    M6 --> SUPPORT

    SUPPORT --> RESULT["目标：可运营的自进化闭环<br/>可靠 · 可评估 · 可控 · 可审计"]

    style PAIN fill:#fff3e0,stroke:#e65100
    style RELIEF fill:#e8f5e9,stroke:#2e7d32
    style SUPPORT fill:#e3f2fd,stroke:#1565c0
    style RESULT fill:#e0f7fa,stroke:#00838f
```

## 痛点频率 Top 10

| 痛点 ID | 描述 | 受影响方法族 | 严重度 |
|---|---|---|---|
| P022 | Leaderboard 过拟合 | 所有 | 高 |
| P062 | 基准污染 | 所有 | 高 |
| P067 | Goodhart 效应 | 奖励类、自奖励类 | 高 |
| P009 | 幻觉不可自纠 | 所有 | 高 |
| P015 | 循环漂移 | 反思类、进化类 | 高 |
| P070 | 计算成本不可控 | 所有 | 高 |
| P040 | 失败归因困难 | 混合方法 | 中 |
| P054 | 自评循环失真 | 自奖励类 | 中 |
| P004 | 框架抽象掩盖调试 | 框架类 | 中 |
| P031 | 人工依赖 | 所有 | 中 |

## 核心洞察

**97 个痛点的前五大类全部指向同一个核心矛盾：可运营闭环缺失。**

自进化系统需要同时满足：可靠（E1）、可评估（E4）、可控（E2/E6）、可审计（E3）、可承受（E7）。当前没有任何方法族能同时满足所有五项。
