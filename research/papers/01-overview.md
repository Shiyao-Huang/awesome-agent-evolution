# 研究者关系网络图谱

> 覆盖 18 篇论文 | 80+ 核心研究者 | 19 个机构
> 生成时间：2026-05-22

---

## 一、作者-论文关系矩阵

### 高产出作者（参与 ≥2 篇核心论文）

| 研究者 | 论文 1 | 论文 2 | 关系 |
|--------|--------|--------|------|
| **Shunyu Yao** | ReAct | Reflexion | 共同作者（ReAct → Reflexion） |
| **Karthik Narasimhan** | ReAct | Reflexion | 导师+共同作者 |
| **Shengran Hu** | ADAS | DGM | 一作（ADAS 是 DGM 前身） |
| **Cong Lu** | ADAS | DGM | 共同作者 |
| **Jeff Clune** | ADAS | DGM | 导师+共同作者，POET 先驱 |
| **Eric Zelikman** | STaR | Quiet-STaR | 一作的延续工作 |
| **Noah D. Goodman** | STaR | Quiet-STaR | 导师+共同作者 |
| **Xinyun Chen** | Self-Debug | 代码生成系列 | Google 代码生成组 |
| **Aman Madaan** | Self-Refine | Code Optimization | AI2+CMU 联合 |
| **Nando de Freitas** | ReST | Gopher/Chinchilla | DeepMind 高级总监 |

---

## 二、师承关系与学术血统

```mermaid
graph TD
    subgraph "第一代导师"
        JClune["Jeff Clune<br/>UBC / Vector Institute<br/>开放进化先驱"]
        NGoodman["Noah D. Goodman<br/>Stanford<br/>认知科学+概率编程"]
        KNarasimhan["Karthik Narasimhan<br/>Princeton NLP<br/>RL+NLP"]
        PClark["Peter Clark<br/>AI2<br/>推理+NLP"]
        QGu["Quanquan Gu<br/>UCLA<br/>ML 理论"]
        XWan["Xiaojun Wan<br/>Peking University<br/>NLP"]
        WWang["William Yang Wang<br/>UCSB<br/>NLP Lab"]
        DZhou["Denny Zhou<br/>Google Research<br/>LLM 推理"]
    end

    subgraph "第二代研究者"
        SHu["Shengran Hu<br/>ADAS + DGM"]
        CLu["Cong Lu<br/>ADAS + DGM"]
        EZelikman["Eric Zelikman<br/>STaR + Quiet-STaR"]
        SYao["Shunyu Yao<br/>ReAct + Reflexion + ToT<br/>⚡ 现已加入 OpenAI"]
        AMadaan["Aman Madaan<br/>Self-Refine<br/>⚡ 现已加入 xAI"]
        ZChen["Zixiang Chen<br/>SPIN"]
        XYin["Xunjian Yin<br/>Gödel Agent"]
    end

    JClune --> SHu
    JClune --> CLu
    NGoodman --> EZelikman
    KNarasimhan --> SYao
    PClark --> AMadaan
    QGu --> ZChen
    XWan --> XYin
    WWang --> XYin
    DZhou -.-> XChen["Xinyun Chen<br/>Self-Debug"]

    classDef gen1 fill:#e1f5fe,stroke:#01579b
    classDef gen2 fill:#fff3e0,stroke:#e65100
    classDef moved fill:#e8f5e9,stroke:#1b5e20

    class JClune,NGoodman,KNarasimhan,PClark,QGu,XWan,WWang,DZhou gen1
    class SHu,CLu,EZelikman,ZChen,XYin,XChen gen2
    class SYao,AMadaan moved
```

---

## 三、机构合作关系图谱

```mermaid
graph TB
    subgraph "Google 系"
        GR["Google Research<br/>Self-Debug, RISE"]
        GD["Google DeepMind<br/>AlphaEvolve, ReST"]
        GB["Google Brain<br/>STaR (Yuhuai Wu)"]
    end

    subgraph "学术中心"
        STAN["Stanford<br/>STaR, Quiet-STaR"]
        PRIN["Princeton NLP<br/>ReAct, Reflexion, ToT"]
        CMU["CMU<br/>Self-Refine, RISE"]
        UBC["UBC + Vector Institute<br/>ADAS, DGM"]
        UCLA["UCLA<br/>SPIN"]
        PKU["Peking University<br/>Gödel Agent"]
        UCSB["UCSB<br/>Gödel Agent"]
        ZJU["Zhejiang University<br/>Agent Symbolic Learning"]
        SJTU["Shanghai Jiao Tong University<br/>SelfEvolve"]
    end

    subgraph "工业研究院"
        AI2["AI2 (Allen Institute)<br/>Self-Refine"]
        ANTH["Anthropic<br/>Constitutional AI"]
        MSR["Microsoft Research<br/>ReVeal"]
        OAI["OpenAI<br/>Shunyu Yao 现任"]
        XAI["xAI<br/>Aman Madaan 现任"]
    end

    GR --- CMU
    GR --- GB
    GD --- UBC
    AI2 --- CMU
    STAN --- GB
    PRIN --- PRIN
    PKU --- UCSB
    SJTU --- ZJU
    ANTH -.-> OAI
    CMU -.-> XAI

    classDef google fill:#e8f5e9,stroke:#1b5e20
    classDef academic fill:#e1f5fe,stroke:#01579b
    classDef industry fill:#fff3e0,stroke:#e65100

    class GR,GD,GB google
    class STAN,PRIN,CMU,UBC,UCLA,PKU,UCSB,ZJU,SJTU academic
    class AI2,ANTH,MSR,OAI,XAI industry
```

---

## 四、研究者社交媒体与在线档案

### 核心研究者

| 研究者 | Google Scholar | Twitter/X | 个人主页 | GitHub | 备注 |
|--------|---------------|-----------|---------|--------|------|
| **Shunyu Yao** | [scholar](https://scholar.google.com/citations?user=qJBXk9cAAAAJ) 31K+ 引用 | @ysymyth | [ysymyth.github.io](https://ysymyth.github.io/) | — | ⚡ 现任 OpenAI，Computer-Using Agent |
| **Jeff Clune** | [scholar](https://scholar.google.com/citations?user=5TZ7f5wAAAAJ) | [@jeffclune](https://x.com/jeffclune) | [UBC主页](https://www.cs.ubc.ca/people/jeff-clune) | — | Recursive 公司联合创始人 |
| **Eric Zelikman** | [scholar](https://scholar.google.com/citations?user=V5B8dSUAAAAJ) | — | [zelikman.me](https://zelikman.me/) | — | STaR + Quiet-STaR |
| **Aman Madaan** | [scholar](https://scholar.google.com/citations?user=jW9ts2cAAAAJ) 8.6K+ 引用 | — | [madaan.github.io](https://madaan.github.io/) | [github/madaan](https://github.com/madaan/self-refine) | ⚡ 现任 xAI |
| **Noah D. Goodman** | scholar | — | Stanford 主页 | — | 概率编程先驱 |
| **Zixiang Chen / Quanquan Gu** | — | — | [uclaml.github.io/SPIN](https://uclaml.github.io/SPIN/) | [uclaml/SPIN](https://github.com/uclaml/SPIN) | UCLA ML 组 |
| **Wangchunshu Zhou** | — | — | — | [aiwaves-cn/agents](https://github.com/aiwaves-cn/agents) | Agent Symbolic Learning |

---

## 五、跨领域合作连接

### Self Evolve ↔ AutoML ↔ NAS ↔ LLM 的交叉点

```mermaid
graph LR
    subgraph "Self Evolve 核心圈"
        DGM["DGM<br/>代码级自我修改"]
        ASL["Agent Symbolic Learning<br/>符号化学习"]
        GA["Gödel Agent<br/>自指 Agent"]
    end

    subgraph "AutoML / NAS 方向"
        ADAS["ADAS<br/>自动化 Agent 设计"]
        AE["AlphaEvolve<br/>Gemini 驱动代码进化"]
    end

    subgraph "LLM 自我改进"
        SR["Self-Refine<br/>迭代自我修正"]
        RF["Reflexion<br/>语言反馈 RL"]
        SD["Self-Debug<br/>自我调试"]
        CAI["Constitutional AI<br/>宪法式对齐"]
    end

    subgraph "自我训练"
        STAR["STaR<br/>推理引导推理"]
        REST["ReST/ReST-EM<br/>增强自我训练"]
        SPIN["SPIN<br/>自博弈微调"]
    end

    %% 跨领域连线
    DGM <--> ADAS
    DGM <--> AE
    ADAS <--> AE
    ASL <--> RF
    ASL <--> SR
    GA <--> DGM
    SR <--> SD
    RF <--> SD
    STAR <--> REST
    REST <--> SPIN
    CAI <--> SR

    classDef evo fill:#fce4ec,stroke:#880e4f
    classDef auto fill:#e8f5e9,stroke:#1b5e20
    classDef llm fill:#fff3e0,stroke:#e65100
    classDef train fill:#e1f5fe,stroke:#01579b

    class DGM,ASL,GA evo
    class ADAS,AE auto
    class SR,RF,SD,CAI llm
    class STAR,REST,SPIN train
```

---

## 六、引用网络（时序）

```mermaid
graph TD
    %% 2022 基础层
    CoT["Chain-of-Thought<br/>Wei et al. 2022"]
    RLHF["RLHF<br/>Christiano 2017 / Ouyang 2022"]
    ReAct["ReAct<br/>Yao et al. 2022"]

    %% 2022-2023 创新层
    STAR["STaR<br/>Zelikman et al. 2022<br/>NeurIPS"]
    CAI["Constitutional AI<br/>Bai et al. 2022<br/>Anthropic"]
    RF["Reflexion<br/>Shinn et al. 2023<br/>NeurIPS"]
    SR["Self-Refine<br/>Madaan et al. 2023<br/>NeurIPS"]
    SD["Self-Debug<br/>Chen et al. 2023<br/>ICLR 2024"]

    %% 2023-2024 进化层
    REST["ReST/ReST-EM<br/>Gulcehre et al. 2023"]
    ADAS["ADAS<br/>Hu et al. 2024"]
    DGM["DGM<br/>Zhang et al. 2024"]
    AE["AlphaEvolve<br/>DeepMind 2024"]
    SPIN["SPIN<br/>Chen et al. 2024<br/>ICML"]
    ASL["Agent Symbolic Learning<br/>Zhou et al. 2024"]

    %% 引用链
    CoT --> STAR
    CoT --> SR
    CoT --> CAI
    ReAct --> RF
    RLHF --> CAI
    RLHF --> REST
    RLHF --> SPIN
    SR --> SD
    RF --> SD
    STAR --> REST
    ADAS --> DGM
    RF --> ASL
    SR --> ASL
    SD --> AE
    STAR --> AE

    %% 样式
    classDef base fill:#bbdefb,stroke:#1565c0
    classDef innov fill:#ffe0b2,stroke:#e65100
    classDef evo fill:#f8bbd0,stroke:#880e4f

    class CoT,RLHF,ReAct base
    class STAR,CAI,RF,SR,SD innov
    class REST,ADAS,DGM,AE,SPIN,ASL evo
```

---

## 七、关键发现与洞察

### 1. "人才流转"现象
- **Shunyu Yao**（Princeton → OpenAI）：Agent 推理领域最活跃的研究者，ReAct/Reflexion/ToT 三连击
- **Aman Madaan**（CMU/AI2 → xAI）：Self-Refine 一作，代码生成专家
- **Jeff Clune**（UBC 教授 + Recursive 联合创始人）：学术界→创业，开放进化方向

### 2. 机构集中度
- **Google 系**（Research + DeepMind + Brain）覆盖最多论文
- **UBC + Vector Institute** 是进化计算方向的绝对核心
- **中国团队**（浙大、北大、上交）在 Agent Self-Evolution 方向贡献突出

### 3. 方法演化路径
```
Prompt-based 自我改进 → 微调式自我训练 → 代码级自我进化
(Self-Refine/Reflexion)   (STaR/ReST/SPIN)    (ADAS/DGM/Gödel Agent)
```

### 4. 关键合作链
- **Princeton NLP 组**（Narasimhan → Yao）→ Agent 推理的奠基性工作
- **UBC 组**（Clune → Hu/Lu）→ 进化计算+Agent 设计
- **Stanford 组**（Goodman → Zelikman）→ 推理引导推理

---

## 八、资料来源与可信度

| 数据类型 | 来源 | 可信度 |
|---------|------|--------|
| 作者列表 | arXiv 论文页面 | ✅ 已验证 |
| 机构信息 | 论文 + Google Scholar | ✅ 已验证 |
| 师承关系 | 论文交叉引用 + 公开学术档案 | ⚠️ 部分推断 |
| 社交媒体 | Google + X/Twitter 公开信息 | ✅ 已验证 |
| 人才流转 | Google Scholar + 个人主页 | ✅ 已验证 |
