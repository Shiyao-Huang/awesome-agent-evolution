# 自进化循环形式化框架图

- generated_at: 2026-05-25
- source: research/formal-framework-agent-evolution.md
- purpose: 展示 S=(θ,c,g,m,A) 状态空间下的自进化闭环

```mermaid
flowchart LR
    subgraph STATE["当前状态 S_t = (θ, c, g, m, A)"]
        direction TB
        THETA["θ 模型参数<br/><i>冻结/LoRA/全量</i>"]
        CTX["c 上下文·提示词<br/><i>系统提示·工具说明·few-shot</i>"]
        GRAPH["g 工具·代码·架构<br/><i>工具集·workflow·拓扑</i>"]
        MEM["m 记忆·技能·经验<br/><i>情景·语义·程序性</i>"]
        ARCH["A Archive·候选集<br/><i>历史·谱系·评估</i>"]
    end

    STATE -->|"执行任务 x"| EXECUTE["E: 执行<br/>τ = Agent(S_t, x, Env)"]
    EXECUTE -->|"轨迹 + 结果"| EVAL["V: 验证<br/>v = V(x, τ, S, Env)"]

    subgraph EVAL_TYPES["验证器类型"]
        direction TB
        V_PROG["程序化测试<br/>可靠性: ⭐⭐⭐⭐⭐"]
        V_ENV["环境 reward<br/>可靠性: ⭐⭐⭐"]
        V_LLM["LLM-as-judge<br/>可靠性: ⭐⭐"]
        V_SELF["自我评分<br/>可靠性: ⭐"]
        V_HUMAN["人类评估<br/>可靠性: ⭐⭐⭐⭐⭐"]
    end

    EVAL -->|"v < threshold"| MUTATE["U: 变异<br/>S' = U(S, τ, v, Env)"]

    subgraph MUTATORS["变异算子"]
        direction TB
        U_TEXT["文本修正<br/>Self-Refine"]
        U_REFLECT["反思写入<br/>Reflexion"]
        U_DISTILL["经验蒸馏<br/>ExPeL·ACE"]
        U_DPO["偏好更新<br/>Self-Rewarding LM"]
        U_RL["策略更新<br/>RAGEN·AbsZero"]
        U_CODE["代码变异<br/>DGM·Gödel Agent"]
        U_ARCH["架构搜索<br/>ADAS"]
        U_SKILL["技能写入<br/>Voyager"]
    end

    MUTATE -->|"候选集"| SELECT["Sel: 选择<br/>保留/回滚/归档"]
    SELECT -->|"S_{t+1}"| STATE2["S_{t+1} = (θ', c', g', m', A')"]

    subgraph SELECTION["选择策略"]
        direction TB
        SEL_GREEDY["贪心保留最优<br/>STaR·Self-Refine"]
        SEL_DIV["多样性保留<br/>AlphaEvolve MAP-Elites"]
        SEL_THRESH["阈值门控<br/>ADAS"]
        SEL_LINEAGE["谱系保留<br/>DGM open-ended"]
    end

    STATE2 -->|"继续循环"| STATE

    ARCH -->|"证伪/回滚"| SELECT

    style STATE fill:#e8eaf6,stroke:#283593
    style EXECUTE fill:#e8f5e9,stroke:#2e7d32
    style EVAL fill:#fff3e0,stroke:#e65100
    style MUTATE fill:#fce4ec,stroke:#c62828
    style SELECT fill:#f3e5f5,stroke:#7b1fa2
    style STATE2 fill:#e0f2f1,stroke:#00695c
```

## 形式化要素对照

| 形式化要素 | 符号 | 在图中的位置 | 关键方法 |
|---|---|---|---|
| 状态空间 | S=(θ,c,g,m,A) | STATE 节点组 | 全部方法 |
| 执行 | τ = Agent(S,x,Env) | EXECUTE | 全部方法 |
| 验证 | v = V(x,τ,S,Env) | EVAL + EVAL_TYPES | 取决于领域 |
| 变异 | S' = U(S,τ,v,Env) | MUTATE + MUTATORS | 10种算子 |
| 选择 | Sel(A∪candidates) | SELECT + SELECTION | 5种策略 |
| 收敛 | L1→L5 | 循环终止条件 | 5层定义 |

## 验证器可靠性 = 系统能力天花板

```
可靠性:  ⭐⭐⭐⭐⭐ 程序化测试 / 人类评估
         ⭐⭐⭐   环境 reward
         ⭐⭐    LLM-as-judge
         ⭐      自我评分

系统能力上限取决于验证器可靠性。
没有可靠验证器，进化退化为随机游走。
```
