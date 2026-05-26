# 中国自进化 Agent 研究团队与趋势

生成时间：2026-05-26
方法：Web 搜索 + raw-papers/ 交叉验证 + 知乎/官网数据
价值等级：⬤⬤⬤⬤ (high — 中国生态独特信号)

---

## 1. Executive Summary

中国自进化 Agent 研究呈现 **学术界驱动 + 产业界跟进** 的模式，与硅谷 **产业界驱动 + 学术界合作** 模式形成对比。关键特征：

1. **4 大高校集群**：SJTU（安全领先）、清华（应用驱动）、浙大（策略优化）、北大（框架创新）
2. **2 大产业力量**：阿里 AgentEvolver（开源框架）、上海AI实验室 Intern·Agent（科学发现）
3. **政府协调**：CAICT 2025年3月联合20+企业发布 Agent 标准术语框架
4. **独特方向**：自进化安全（SJTU）、Agent 医院（清华AIR）、小模型自进化（阿里 7B/14B）

---

## 2. 产业界

### Rank 1: 阿里巴巴 / 通义实验室 — AgentEvolver

**价值**: ⬤⬤⬤⬤⬤ — 中国首个开源自进化 Agent 训练框架
**来源**: [arXiv:2511.10395](https://arxiv.org/html/2511.10395v1), [GitHub](https://github.com/modelscope/AgentEvolver), [VentureBeat](https://venturebeat.com/ai/alibabas-agentevolver-lifts-model-performance-in-tool-use-by-30-using)

| 维度 | 详情 |
|------|------|
| 论文 | AgentEvolver: Towards Efficient Self-Evolving Agent System (Nov 2025) |
| 机构 | Alibaba Group / Tongyi Lab |
| 核心机制 | 自质疑(self-questioning) + 自导航(self-navigating) + 自归因(self-attributing) |
| 关键结果 | 工具使用性能 +30%；7B/14B 小模型可匹敌大模型 |
| 开源 | ModelScope 平台，GitHub 可用 |
| 进化等级 | L3 (闭环自动进化，PPO 训练) |

**洞察**: 阿里的路径是 "小模型自进化"——不依赖 GPT-4 级别大模型，而是让 7B/14B 参数模型通过自生成数据自我改进。这与硅谷偏好大模型进化的路径不同。

### Rank 2: 上海AI实验室 — Intern·Agent

**价值**: ⬤⬤⬤⬤ — 科学发现领域的自进化多 Agent 系统
**来源**: [上海AI实验室](https://www.shlab.org.cn/news/5444184), [arXiv:2505.16938](https://arxiv.org/html/2505.16938v3), [新华网](http://www.news.cn/liangzi/20250730/c7780b4bb3024101a838120fe944d636/c.html)

| 维度 | 详情 |
|------|------|
| 框架 | Intern·Agent（WAIC 2025 发布） |
| 机构 | 上海人工智能实验室 |
| 定位 | 全流程闭环自主科学研究（ASR）多智能体框架 |
| 三大能力 | 生成想法 → 设计方案 → 实验验证 |
| 合作 | 清华AIR 学术报告交流 |
| 进化等级 | L2 (多Agent协作，半自动科研闭环) |

**洞察**: Intern·Agent 将自进化 agent 应用于科学发现领域，类似 AutoResearchClaw 但由中国实验室主导。WAIC 2025 发布，政策支持力度大。

### Rank 3: 字节跳动 Seed

**价值**: ⬤⬤⬤ — 通用智能探索
**来源**: [ByteDance Seed](https://seed.bytedance.com/en/), [RecodeChinaAI](https://recodechinaai.substack.com/p/chinas-three-kingdoms-in-ai-bytedance)

- ByteDance Seed 团队 2023 年成立，聚焦通用智能
- 2026年2月与阿里、DeepSeek 同步发布新模型
- 目前无公开的自进化 agent 专项研究，但资源投入巨大

### Rank 4: 腾讯 / 百度 / 华为

**价值**: ⬤⬤⬤ — 产业参与信号
**来源**: [Stanford DigiChina](https://digichina.stanford.edu/work/lexicon-how-china-talks-about-agentic-ai/), [Financial Content](https://markets.financialcontent.com/wral/article/tokenring-2025-11-25-chinas-tech-titans-unleash-ai-agents-the-next-frontier-in-the-global-innovation-battle)

- CAICT 2025年3月联合腾讯、阿里、华为等 20+ 企业发布 Agent 术语框架
- 腾讯、百度、华为均布局 Agent 平台，但自进化方向尚无公开突破
- 华为在汽车智能驾驶 agent 方向有投入

---

## 3. 学术界

### 高校研究全景

```mermaid
graph TD
    subgraph "上海"
        SJTU["上海交大 SJTU<br/>⬤⬤⬤⬤⬤<br/>自进化安全全球领先"]
        SHLab["上海AI实验室<br/>⬤⬤⬤⬤<br/>Intern·Agent"]
    end

    subgraph "北京"
        THU["清华大学 Tsinghua<br/>⬤⬤⬤⬤<br/>WebRL + Agent Hospital"]
        PKU["北京大学 PKU<br/>⬤⬤⬤<br/>Goedel Agent"]
    end

    subgraph "杭州"
        ZJU["浙江大学 ZJU<br/>⬤⬤⬤<br/>Agent-Pro 策略优化"]
    end

    subgraph "广州/其他"
        SYSU["中山大学 SYSU<br/>⬤⬤⬤<br/>Comprehensive Survey"]
        SDU["山东大学 SDU<br/>⬤⬤<br/>Survey co-author"]
        Sheffield["谢菲尔德大学<br/>⬤⬤<br/>(中英合作)"]
    end

    SJTU -->|"安全研究<br/>Misevolve"| THU
    THU -->|"WebRL/Agent Hospital<br/>应用场景"| SJTU
    SHLab -->|"WAIC 2025<br/>政策支持"| THU
    SYSU -->|"Survey<br/>综述"| Sheffield
    PKU -->|"Goedel Agent<br/>自指框架"| SJTU

    classDef top fill:#22c55e,color:#000
    classDef high fill:#3b82f6,color:#fff
    classDef mid fill:#f59e0b,color:#000

    class SJTU top
    class THU,SHLab,PKU,ZJU high
    class SYSU,SDU,Sheffield mid
```

### 详细高校信息

#### 上海交通大学 SJTU — 自进化安全研究全球领先

| 研究者 | 论文 | 方向 | 会议 |
|--------|------|------|------|
| Chen Qian / Weinan Zhang | Your Agent May Misevolve | 自进化涌现风险 | ICLR 2026 |
| Siheng Chen / Yue Hu | EvoMAC | 自进化多Agent软件协作 | 2024 |
| Shuai Shao | Misevolve risks | 自进化安全分析 | ICLR 2026 |

**政府资助**: 上海市"通用人工智能大模型"专项——面向复杂长程任务的智能体调度规划强化学习

#### 清华大学 Tsinghua — 应用驱动的自进化

| 研究者 | 论文 | 方向 | 备注 |
|--------|------|------|------|
| Xiao Liu / Zehan Qi | WebRL (ICLR 2025) | 自进化Web Agent课程RL | THUDM 组 |
| Jing Shao | Misevolve (co-author) | 自进化安全 | 清华参与 |
| AIR | Agent Hospital | AI医生自进化 | WEF 2024 报道 |

**独特优势**: 清华AIR（智能产业研究院）将自进化应用于医疗、生物医药，聂再清教授的 BioMedGPT/ChatDD 项目

#### 浙江大学 ZJU — Agent 策略优化

| 研究者 | 论文 | 方向 | 会议 |
|--------|------|------|------|
| Wenqi Zhang | Agent-Pro | 策略级反思与优化 | ACL 2024 |
| Weiming Lu | 多Agent协作 | Agent 框架 | — |

**独特优势**: Wenqi Zhang 是 ZJU100 青年教授，聚焦 agent 策略级进化

#### 北京大学 PKU — 自指框架

| 研究者 | 论文 | 方向 | 会议 |
|--------|------|------|------|
| Xunjian Yin / Xiaojun Wan | Goedel Agent | 自指递归自改进 | ACL 2025 |
| William Wang (UCSB) | co-author | 跨校合作 | — |

#### 中山大学 SYSU — 综述引领

| 研究者 | 论文 | 方向 |
|--------|------|------|
| Jinyuan Fang | Comprehensive Survey of Self-Evolving AI Agents | 领域标准综述 |

---

## 4. 中国 vs 硅谷：自进化研究差异

| 维度 | 中国 | 硅谷 |
|------|------|------|
| **驱动模式** | 学术界驱动→产业界跟进 | 产业界驱动→学术界合作 |
| **核心方向** | 自进化安全(SJTU)、小模型进化(阿里)、应用场景(清华AIR) | 架构搜索(ADAS)、代码进化(FunSearch)、市场规模 |
| **模型规模** | 7B-14B 小模型自进化(阿里 AgentEvolver) | 大模型(GPT-4o, Gemini)驱动进化 |
| **政策支持** | CAICT标准框架 + 上海市专项基金 + WAIC展示 | 市场驱动，政府间接支持(NSF等) |
| **安全关注** | 高（SJTU Misevolve 全球首个系统性研究自进化风险） | 中（多在安全对齐层面，非自进化特化） |
| **开源程度** | 高（ModelScope/AgentEvolver 开源） | 高（OpenEvolve/DSPy/EvoAgentX 开源） |
| **资本密度** | 中（阿里/字节/腾讯/百度竞争） | 极高（$100M-$200M 级人才争夺） |

---

## 5. 关键趋势

### 5.1 小模型自进化（中国独特路径）

阿里 AgentEvolver 证明 7B/14B 模型通过自生成数据训练可匹敌大模型。这对中国具有战略意义——因为大模型 API 受限（OpenAI/Anthropic 不可用），小模型自进化提供了可行的替代路径。

### 5.2 自进化安全（中国领先）

SJTU 的 "Your Agent May Misevolve" (ICLR 2026) 是全球首个系统性研究自进化 agent 涌现风险的工作。在硅谷大量投入进化能力建设时，中国研究者在风险预防方向建立了先发优势。

### 5.3 应用场景驱动

- 清华 AIR：Agent Hospital（医疗）
- 上海AI实验室：Intern·Agent（科学发现）
- 阿里：工具使用（电商平台 agent）

与硅谷的 "通用能力提升" 路径不同，中国更倾向于从具体应用场景出发构建自进化能力。

### 5.4 政府协调

CAICT 2025年3月联合 20+ 企业发布 Agent 术语框架，显示中国政府正在通过标准化引导产业方向。这与硅谷的自由竞争模式形成对比。

---

## 6. 数据局限

| 维度 | 可靠性 | 说明 |
|------|--------|------|
| 阿里 AgentEvolver | ⬤⬤⬤⬤⬤ | arXiv论文 + GitHub + VentureBeat 报道 |
| 上海AI实验室 Intern·Agent | ⬤⬤⬤⬤ | 官网 + arXiv + 新华网 |
| 高校研究者归属 | ⬤⬤⬤⬤ | raw-papers/ 交叉验证 + 个人主页 |
| 腾讯/百度/华为 | ⬤⬤⬤ | 间接来源，无公开自进化专项研究 |
| 政府政策 | ⬤⬤⬤⬤ | CAICT 公开文件 + 上海市科委公示 |

---

## 7. 建议

1. **追踪 SJTU 安全研究**：自进化安全是中国差异化优势，应纳入论文 paper-drafts/
2. **关注阿里 AgentEvolver 进化**：小模型自进化路径可能更适合中国场景
3. **对标清华 AIR 应用场景**：Agent Hospital 展示了自进化的医疗应用价值
4. **raw-papers/ 补充归属**：建议为所有中文论文补充机构信息

---

*Sources:*
- [arXiv: AgentEvolver (2511.10395)](https://arxiv.org/html/2511.10395v1)
- [GitHub: modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver)
- [VentureBeat: Alibaba AgentEvolver](https://venturebeat.com/ai/alibabas-agentevolver-lifts-model-performance-in-tool-use-by-30-using)
- [上海AI实验室: Intern·Agent](https://www.shlab.org.cn/news/5444184)
- [arXiv: InternAgent (2505.16938)](https://arxiv.org/html/2505.16938v3)
- [Stanford DigiChina: China Agentic AI Lexicon](https://digichina.stanford.edu/work/lexicon-how-china-talks-about-agentic-ai/)
- [WEF: China AI-Powered Industry Transformation](https://reports.weforum.org/docs/WEF_Blueprint_to_Action_Chinas_Path_to_AI-Powered_Industry_Transformation_2025.pdf)
- [知乎: 自进化智能体综述](https://zhuanlan.zhihu.com/p/1937626679519450682)
- raw-papers/ 交叉验证

---

## 8. 🆕 v2 更新：新发现（2026-05-26 第二轮搜索）

### 8.1 清华 AIR + 阿里云：国内首个可进化智能体产学研专项

**价值**: ⬤⬤⬤⬤⬤ — 政策级信号
**来源**: [清华大学官网](https://www.tsinghua.edu.cn/info/1182/108491.htm)

2023 年 12 月，阿里云与清华 AIR 联合启动"基于大模型的可进化智能体"研究：
- **方向**：大模型智能体共性基础技术、面向智能体的学习机制、单智能体基础素质提升
- **张亚勤评价**："Agent的发展有助于通过Exploration的方式提升模型能力，长远来看可以把不一样的智能体组织起来，解决复杂问题"
- **阿里云基础**：ModelScope-Agent 开源框架 + Qwen 系列模型
- **意义**：这是国内首个系统化产学研融合的可进化智能体专项

### 8.2 清华 AIR + 字节跳动 Seed：CUDA Agent

**价值**: ⬤⬤⬤⬤ — 代码自优化 Agent 的中国实践
**来源**: [清华AIR](https://air.tsinghua.edu.cn/info/1007/2523.htm)

| 维度 | 数据 |
|------|------|
| 名称 | CUDA Agent |
| 合作方 | 清华 AIR (周浩) + 字节跳动 Seed + SIA-Lab |
| 方法 | 大规模智能体强化学习 (Agentic RL) |
| 性能 | Level-3 任务加速比 92%，超越 Claude Opus 4.6 和 Gemini 3 Pro |
| 自进化特征 | 标准化技能流 SKILL.md + 多阶段预热策略 + 防作弊机制 |
| 路径 | LLM 从"被动代码生成器"→"主动系统优化器" |

**自进化机制评级**：L2→L3 — 有反馈循环和策略优化，但在 CUDA 专用领域，非通用自进化。

### 8.3 DeepSeek V4：自进化记忆 + 多 Agent 协作

**价值**: ⬤⬤⬤⬤ — 中国最强开源模型的自进化能力声明
**来源**: [deepseek.com](https://deepseek.com/), 多个媒体报道

| 维度 | 数据 |
|------|------|
| 模型 | DeepSeek V4 (2026-04-24) |
| 参数 | 1.6T total / 49B active |
| 上下文 | 1M+ native |
| 自进化特征 | **Self-Evolving Memory**, Multi-Agent Swarm, Real-Time Learning |
| 开源状态 | 开放权重 + API |
| 适配 | Claude Code, OpenClaw, OpenCode, CodeBuddy |

**自进化机制评级**：L2 (Memory Evolution) — 持久记忆 + 实时适应，但无权重更新或代码自修改。

### 8.4 EvoAgentX：全球首个自进化 Agent 开源框架

**价值**: ⬤⬤⬤⬤ — 开源生态基础设施
**来源**: [GitHub](https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents), [HuggingFace](https://huggingface.co/spaces/X-iZhang/Awesome-Self-Evolving-Agents)

- 维护机构：格拉斯哥大学 + 剑桥 + 谢菲尔德 + NUS + UCL + **中国研究者参与**
- 提出 MOP→MOA→MAO→MASE 进化路线图
- 同时维护 [XMUDeepLIT/Awesome-Self-Evolving-Agents](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents)
- 格拉斯哥综述 vs 普林斯顿综述的竞争格局：格拉斯哥偏落地（操作指南），普林斯顿偏宏观（路线图）

### 8.5 Lemon AI (宜创科技)：自进化消费级 Agent

**价值**: ⬤⬤⬤ — 中国首个消费级自进化 Agent 产品
**来源**: [36kr](https://36kr.com/p/3467644996048264)

（详见 capital-talent-supply-2026.md 第 4.1-4.2 节）

### 8.6 Manus AI：中国通用自主 Agent

**价值**: ⬤⬤⬤ — 信号级事件
**来源**: Bloomberg, Euronews, 多个报道

- "China's next DeepSeek" — 完全自主 AI Agent
- 能力：自主执行任务、在线研究、多模态理解
- 与 OpenAI 竞争定位
- **自进化关联**：间接 — Manus 的自主任务执行能力是自进化的前置条件

### 8.7 智源大会 2026："当AI学会自我超越"

**价值**: ⬤⬤⬤⬤ — 中国 AI 社区对自进化的关注信号
**来源**: [CSDN](https://blog.csdn.net/BAAIBeijing/article/details/161326298)

2026 年 6 月 12-13 日，第 8 届智源大会主题为"当AI学会自我超越"，表明自进化已成为中国 AI 学术界的核心议题。

---

## 9. 🆕 v2 更新：修订后的中国自进化生态图

```mermaid
graph TD
    subgraph "高校研究"
        THU2["清华 AIR<br/>张亚勤/刘洋/周浩<br/>WebRL + CUDA Agent + 可进化智能体专项"]
        SJTU2["上海交大<br/>Qian/Chen/Zhang<br/>自进化安全 Misevolve"]
        ZJU2["浙大<br/>Wenqi Zhang<br/>Agent-Pro"]
        PKU2["北大<br/>Wan/Yin<br/>Goedel Agent"]
        SYSU2["中山大学<br/>Fang<br/>Comprehensive Survey"]
        XMU2["厦门大学 XMUDeepLIT<br/>Awesome List 维护"]
    end

    subgraph "产业"
        ALI2["阿里云 + 通义<br/>AgentEvolver<br/>ModelScope-Agent<br/>Qwen 系列"]
        DS2["DeepSeek<br/>V4 Self-Evolving Memory<br/>1.6T 开源"]
        BD2["字节跳动 Seed<br/>CUDA Agent 合作<br/>Agentic RL"]
        LEMON2["Lemon AI<br/>Evolving Agent L3<br/>千万天使轮"]
        MANUS2["Manus AI<br/>通用自主 Agent<br/>'China next DeepSeek'"]
    end

    subgraph "产学研合作"
        THU_ALI["清华AIR + 阿里云<br/>可进化智能体专项<br/>国内首个"]
        THU_BD["清华AIR + 字节跳动<br/>CUDA Agent<br/>Agentic RL"]
    end

    subgraph "开源生态"
        EVOX["EvoAgentX<br/>自进化框架<br/>全球首个"]
        XMU_GH["XMUDeepLIT<br/>Awesome List<br/>资源整合"]
    end

    THU2 --- THU_ALI --- ALI2
    THU2 --- THU_BD --- BD2
    DS2 -.->|开源基础设施| LEMON2
    XMU2 --- XMU_GH --- EVOX
    SJTU2 -.->|安全标准| ALI2

    style THU_ALI fill:#a855f7,color:#fff
    style THU_BD fill:#a855f7,color:#fff
    style DS2 fill:#22c55e,color:#000
```

---

## 10. 🆕 v2 更新：中国 vs 硅谷对比

| 维度 | 中国 | 硅谷 |
|------|------|------|
| **驱动模式** | 学术驱动 + 产业跟进 | 产业驱动 + 学术合作 |
| **核心优势** | 安全研究 (SJTU)、应用场景、开源适配 | 基础架构 (DGM/ADAS)、资本规模 |
| **资本规模** | 千万~数亿 RMB | $100M-$650M USD |
| **开源生态** | DeepSeek/Qwen 开源 + EvoAgentX | GitHub 为主，EvoAgentX 全球协作 |
| **政策支持** | 政府协调标准、产学研专项 | 市场驱动，较少政府干预 |
| **人才管道** | 高校博士输出强，但留美回国少 | 国际人才流入 (但 89% 下降) |
| **独特方向** | 小模型自进化 (7B/14B)、CUDA Agent、安全 | 开放式进化 (DGM)、代码自修改 (Claude Code) |
| **最大差距** | 缺少 L4 级系统 (无 ADAS/DGM 等价物) | 人才留存成本高 ($100M+) |

---

## 11. 🆕 v2 更新：新 Sources

*Sources (v2 additions):*
- [清华官网: 阿里云+清华AIR可进化智能体](https://www.tsinghua.edu.cn/info/1182/108491.htm)
- [清华AIR: CUDA Agent](https://air.tsinghua.edu.cn/info/1007/2523.htm)
- [DeepSeek V4](https://deepseek.com/)
- [EvoAgentX GitHub](https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents)
- [XMUDeepLIT GitHub](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents)
- [36kr: Lemon AI](https://36kr.com/p/3467644996048264)
- [Bloomberg: DeepSeek AI Agent](https://www.bloomberg.com/news/articles/2025-09-04/deepseek-targets-ai-agent-release-by-end-of-year-to-rival-openai)
- [智源大会 2026](https://blog.csdn.net/BAAIBeijing/article/details/161326298)
- [知乎: 自进化智能体综述](https://zhuanlan.zhihu.com/p/1934180050728645023)
- [新智元: 八大机构自进化综述](https://hub.baai.ac.cn/view/48339)

*Generated by Researcher Agent | Task: lDg1WF05bVKM | 2026-05-26 v2*
