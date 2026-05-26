# 多智能体协作进化模式图

- generated_at: 2026-05-26
- source: 综合 `multi-agent-collaboration.md` + `propagation-self-evolution-core.md` + 16 multi-agent papers + `cross-source-validation-matrix.csv`
- purpose: 展示6种协作进化模式，每种模式的通信拓扑、进化机制、适用场景和失败模式

## 核心洞察

多智能体协作进化不仅是"分工"，而是通过**独立错误分布**实现进化加速。当Agent间的blind spots独立时，协作才能产生真正的改进信号。

```mermaid
flowchart TD
    subgraph PATTERNS["六种协作进化模式"]

        subgraph P1["模式1：Generate-Verify 循环"]
            direction TB
            G1["Generator<br/>生成候选方案"] -->|"candidate"| V1["Verifier<br/>测试验证"]
            V1 -->|"pass → accept"| G1
            V1 -->|"fail → regenerate"| G1
        end

        subgraph P2["模式2：Adversarial Debate"]
            direction TB
            G2a["Proposer"] -->|"claim"| G2b["Opponent"]
            G2b -->|"counter-claim"| G2a
            G2a -->|"refined claim"| J2["Judge<br/>LLM-as-Judge"]
            G2b -->|"evidence"| J2
        end

        subgraph P3["模式3：Evolutionary Tournament"]
            direction TB
            POP["Population<br/>N个Agent变体"] -->|"compete"| ARENA["Arena<br/>任务评测"]
            ARENA -->|"rank"| SEL["Selection<br/>top-k保留"]
            SEL -->|"mutate/crossover"| POP
        end

        subgraph P4["模式4：Hierarchical Governance"]
            direction TB
            W4["Workers<br/>执行具体任务"] -->|"output"| M4["Manager<br/>分配+审核"]
            M4 -->|"approve/reject"| W4
            M4 -->|"escalate"| A4["Auditor<br/>安全+合规"]
            A4 -->|"override"| M4
        end

        subgraph P5["模式5：Emergent Specialization"]
            direction TB
            H5["Homogeneous<br/>初始同构种群"] -->|"task feedback"| SP5["Specialized<br/>角色分化"]
            SP5 -->|"complementary expertise"| CO5["Cooperative<br/>互补协作"]
            CO5 -->|"shared memory"| H5
        end

        subgraph P6["模式6：Skill Market"]
            direction TB
            CR6["Skill Creators<br/>开发新技能"] -->|"publish"| MK6["Skill Marketplace<br/>140K+★ registry"]
            MK6 -->|"discover"| US6["Skill Users<br/>安装+应用"]
            US6 -->|"feedback rating"| MK6
            MK6 -->|"adoption data"| CR6
        end
    end

    P1 -->|"增加对手"| P2
    P1 -->|"扩展为种群"| P3
    P2 -->|"增加层级"| P4
    P3 -->|"长期运行"| P5
    P5 -->|"技能沉淀"| P6

    subgraph EVIDENCE["📊 数据支撑"]
        E1["模式1: 51 RL papers"]
        E2["模式2: 16 debate papers"]
        E3["模式3: 28 code papers"]
        E4["模式4: 4 governance papers"]
        E5["模式5: hive 10.4K★"]
        E6["模式6: skills 140K+★"]
    end

    P1 -.-> E1
    P2 -.-> E2
    P3 -.-> E3
    P4 -.-> E4
    P5 -.-> E5
    P6 -.-> E6

    style P1 fill:#3498db,color:#fff
    style P2 fill:#e74c3c,color:#fff
    style P3 fill:#e67e22,color:#fff
    style P4 fill:#9b59b6,color:#fff
    style P5 fill:#27ae60,color:#fff
    style P6 fill:#1abc9c,color:#fff
```

## 六种模式对比

| 模式 | 通信拓扑 | 进化对象 | 论文支撑 | 代表项目 | 失败模式 |
|------|---------|---------|---------|---------|---------|
| 1. Generate-Verify | 双向循环 | Prompt/Code | 51 papers | SWE-bench agents | Goodhart's law: 验证器被game |
| 2. Adversarial Debate | 三方对抗 | Argument quality | 16 papers | Reflexion, CORAL | 共同盲点→共识幻觉 |
| 3. Evolutionary Tournament | 种群竞争 | Architecture/Code | 28 papers | DGM, AlphaEvolve | 多样性丢失→早熟收敛 |
| 4. Hierarchical Governance | 分层控制 | Safety/Policy | 4 papers | hive (10.4K★) | 官僚化→过度阻塞 |
| 5. Emergent Specialization | 网状自组织 | Role/Capability | 跨领域 | AutoResearchClaw (12.6K★) | 角色坍缩→单一Agent |
| 6. Skill Market | 发布-订阅 | Skill | 生态数据 | SkillClaw, awesome-claude-skills | 技能碎片化→兼容性差 |

## 进化路径分析

```mermaid
flowchart LR
    subgraph Maturity["协作进化成熟度"]
        L1["Level 1<br/>单Agent自改进<br/>Prompt/RL优化<br/>196 papers覆盖"]
        L2["Level 2<br/>双Agent对抗<br/>Generate-Verify/Debate<br/>67 papers覆盖"]
        L3["Level 3<br/>种群级进化<br/>Tournament/Specialization<br/>44 papers覆盖"]
        L4["Level 4<br/>生态级协同<br/>Skill Market/Governance<br/>生态数据支撑"]
    end

    L1 -->|"增加第二视角"| L2
    L2 -->|"扩展为种群"| L3
    L3 -->|"沉淀为生态"| L4

    style L1 fill:#27ae60,color:#fff
    style L2 fill:#f39c12,color:#fff
    style L3 fill:#e67e22,color:#fff
    style L4 fill:#e74c3c,color:#fff
```

## 关键发现

1. **模式1-3有论文支撑但缺乏生产验证**：Generate-Verify/Debate/Tournament在论文中分别有51/16/28篇，但痛点显示"demo成功≠production成功"
2. **模式4-6缺乏研究但生态数据丰富**：Governance和Skill Market论文极少(4篇)，但实际生态(140K+★ skills)证明需求强烈
3. **多样性是关键前提**：所有6种模式都要求参与者有独立错误分布，否则协作退化为echo chamber
4. **hive的failure-driven进化是模式5的独特实例**：失败捕获→图结构变异→状态持久化→崩溃恢复
