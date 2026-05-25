# 七维评估雷达图 — 方法族对比

- generated_at: 2026-05-25
- source: research/formal-framework-agent-evolution.md §4.3
- purpose: 六大方法族在七个维度上的可视化对比

```mermaid
flowchart TD
    subgraph RADAR["七维评估雷达 — 方法族对比"]
        direction LR
        D1["Expressiveness<br/>表达能力<br/>能表达多大的变化空间"]
        D2["Verification<br/>验证可靠性<br/>改进证据有多可靠"]
        D3["Transferability<br/>迁移性<br/>改进能否跨域迁移"]
        D4["Safety<br/>安全性<br/>自修改的风险可控性"]
        D5["Cost Efficiency<br/>成本效率<br/>每单位提升的成本"]
        D6["Deployment Ready<br/>部署就绪<br/>生产可用程度"]
        D7["Theory<br/>理论保证<br/>收敛/边界证明"]
    end

    subgraph SCORES["评分量表 (1-5)"]
        direction TB
        S1["提示词进化<br/>Expr:2 Verif:2 Trans:3 Safety:4 Cost:4 Deploy:4 Theory:1<br/>综合: 20 — 最安全起步"]
        S2["奖励/RL训练<br/>Expr:3 Verif:3 Trans:2 Safety:2 Cost:2 Deploy:2 Theory:3<br/>综合: 17"]
        S3["架构搜索<br/>Expr:5 Verif:3 Trans:3 Safety:1 Cost:1 Deploy:1 Theory:1<br/>综合: 15 — 最强表达力"]
        S4["记忆进化<br/>Expr:2 Verif:2 Trans:3 Safety:3 Cost:4 Deploy:3 Theory:1<br/>综合: 18"]
        S5["自博弈<br/>Expr:3 Verif:3 Trans:3 Safety:2 Cost:1 Deploy:1 Theory:2<br/>综合: 15"]
        S6["混合方法<br/>Expr:4 Verif:4 Trans:4 Safety:2 Cost:2 Deploy:2 Theory:2<br/>综合: 20 — 最平衡选择"]
    end

    D1 --> SCORES
    D2 --> SCORES
    D3 --> SCORES
    D4 --> SCORES
    D5 --> SCORES
    D6 --> SCORES
    D7 --> SCORES

    SCORES --> RECOMMEND["场景推荐"]
    RECOMMEND --> R1["代码修复 → 提示词进化起步 → 混合方法进阶"]
    RECOMMEND --> R2["算法发现 → 架构搜索 (必须有程序化evaluator)"]
    RECOMMEND --> R3["企业部署 → 提示词进化 + 记忆 (安全+可审计)"]
    RECOMMEND --> R4["科研前沿 → 混合方法 (表达力+验证+迁移)"]

    style RADAR fill:#e0f7fa,stroke:#00838f
    style SCORES fill:#f5f5f5,stroke:#333
    style RECOMMEND fill:#e8f5e9,stroke:#2e7d32
```

## 评分详细表

| 方法族 | Expr. | Verif. | Trans. | Safety | Cost | Deploy | Theory | **综合** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 提示词进化 | 2 | 2 | 3 | 4 | 4 | 4 | 1 | **20** |
| 奖励/RL训练 | 3 | 3 | 2 | 2 | 2 | 2 | 3 | **17** |
| 架构搜索 | 5 | 3 | 3 | 1 | 1 | 1 | 1 | **15** |
| 记忆进化 | 2 | 2 | 3 | 3 | 4 | 3 | 1 | **18** |
| 自博弈 | 3 | 3 | 3 | 2 | 1 | 1 | 2 | **15** |
| **混合方法** | **4** | **4** | **4** | **2** | **2** | **2** | **2** | **20** |

## 维度定义

| 维度 | 1分 (最弱) | 3分 (中等) | 5分 (最强) |
|---|---|---|---|
| Expressiveness | 仅改输出文本 | 改 prompt+记忆 | 能改代码/架构/权重 |
| Verification | 纯自评 | LLM-as-judge | 独立程序化验证 |
| Transferability | 单 benchmark | 同域跨任务 | 跨模型/跨域/跨环境 |
| Safety | 任意自修改 | 人工审批门控 | 分级自治+不可篡改评估 |
| Cost Efficiency | 需大规模基础设施 | 中等资源 | 单 API 调用即可 |
| Deployment Ready | 研究 demo | 有基本监控 | SLO/监控/回滚/审计 |
| Theory | 无保证 | 经验性规律 | 有收敛/边界证明 |
