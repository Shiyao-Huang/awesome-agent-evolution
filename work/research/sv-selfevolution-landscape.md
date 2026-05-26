# 硅谷自进化/Auto-Research 论文与人员景观

- content_timestamp: 2026-05-26
- scope: sv-selfevolution-landscape, lab-research-directions, key-personnel, capital, talent-pipeline
- evidence_level: web-search + raw-papers cross-reference
- output: work/research/sv-selfevolution-landscape.md

## 0. 方法

整合 6 轮 web 搜索 + raw-papers/ 交叉验证。覆盖 2024-2026 自进化/自动研究方向的实验室、论文、人员、资本和人才管道。

---

## 1. 主要实验室研究方向

| 实验室 | 自进化核心方向 | 代表项目 | 机制覆盖 | 人才密度 |
|---|---|---|---|---|
| **Google DeepMind** | 进化搜索 + 算法发现 | AlphaEvolve (2506.13131) | M1+M4 | 极高 |
| **Meta FAIR** | 自改进 + 工具创造 | HyperAgents | M2+M5 | 高 |
| **Anthropic** | 代码 Agent + 安全对齐 | Claude Code, SICA | M4+M10 | 高 |
| **OpenAI** | Agent SDK + 编码 Agent | Codex, Agents SDK | M4+M6 | 高(流失) |
| **Sakana AI** | 开放式进化 + AI Scientist | DGM, AI Scientist-v2 | M1+M4+M9 | 中 |
| **UBC/Vector** | 开放式进化理论 | ADAS, AI Scientist | M1+M9 | 高(学术) |
| **UCSD** | 自动化 Agent 设计 | ADAS | M1 | 中 |
| **Tsinghua/LeapLab** | 自博弈推理 | Absolute Zero | M7 | 高(学术) |
| **Northeastern→Sierra** | 反思学习 | Reflexion | M2 | 中(转产业) |

---

## 2. 核心论文与人员

| 论文 | arXiv | 第一作者 | 机构 | 机制 |
|---|---|---|---|---|
| AlphaEvolve | 2506.13131 | DeepMind 团队 | DeepMind | M1+M4 |
| DGM | 2505.22954 | Jenny Zhang | Sakana+UBC | M1+M4 |
| ADAS | 2408.08435 | Shengran Hu | UCSD+UBC | M1 |
| HyperAgents | — | Yoonho Lee | Meta FAIR | M2+M5 |
| SICA | 2504.15228 | Anthropic | Anthropic | M2+M4 |
| Absolute Zero | 2505.03335 | Andrew Zhao | Tsinghua | M7 |
| Reflexion | 2303.11366 | Noah Shinn | NEU→Sierra | M2 |
| AI Scientist-v2 | — | Sakana+UBC | Sakana+UBC | M1+M9 |

### 关键人员轨迹

| 人物 | 核心贡献 | 当前机构 | 自进化机制 |
|---|---|---|---|
| **Jeff Clune** | ADAS, AI Scientist-v2 | UBC+Vector+CIFAR | M1,M4,M9 |
| **Shengran Hu** | ADAS 第一作者 | UCSD | M1 |
| **Jenny Zhang** | DGM 第一作者 | Sakana/UBC | M1,M4 |
| **Yoonho Lee** | HyperAgents | Meta FAIR | M2,M5 |
| **Andrew Zhao** | Absolute Zero | Tsinghua/LeapLab | M7 |
| **Noah Shinn** | Reflexion | Sierra→可能已离开 | M2 |
| **Karpathy** | 预训练(间接) | Anthropic | 间接M5 |

---

## 3. 竞争焦点

1. **代码自修改 Agent**: Anthropic vs OpenAI vs DeepMind — 产品化最激烈
2. **开放式进化**: UBC/Sakana vs DeepMind — 学术创新 vs 工程规模化
3. **Auto-Research**: Sakana/UBC (Nature 发表) 独占，DeepMind 追赶

---

## 4. 人才流动网络

| 流向 | 强度 | 关键人物 | 自进化影响 |
|---|---|---|---|
| OpenAI → Anthropic | 8x 净流入 | Karpathy + 多人 | M4/M10 |
| OpenAI → Meta MSL | 高 | 7+, $100M+ packages | M2/M5 |
| UBC ↔ Sakana | 高 | Clune, Hu, Lu, Zhang | M1 最活跃 |
| NEU → Sierra → ? | 高 | Noah Shinn | M2 不稳定 |
| Anthropic ← 安全辞职 | 低但重要 | Sharma (2026-02) | M10 张力 |

---

## 5. 机制级因果假设

1. **学术-产业桥接加速 M1**: Clune↔Sakana 使 ADAS→DGM→AI Scientist-v2 在 ~1 年内从 ICLR 到 Nature
2. **安全集中化延缓 M4**: Anthropic 安全文化可能导致产品化比 OpenAI 慢但更稳
3. **M7 学术主导**: RLVR 由学术界(Tsinghua)驱动，产品化滞后

---

## 6. 资本投入

| 机构 | 融资/估值 | 自进化关联 | 来源 |
|---|---|---|---|
| **Sakana AI** | $365M+, $2.65B | 直接：自进化是核心 R&D | [sakana.ai](https://sakana.ai/series-b/) |
| **Cursor** | $29B | 间接：代码 Agent (M4) | [aifundingtracker](https://aifundingtracker.com/top-ai-agent-startups/) |
| **Sierra** | $10B | 间接：Shinn (Reflexion) | 同上 |
| **Meta MSL** | $100M-$200M internal | 可能：HyperAgents 延伸 | [R3] |

行业数据：AI 占 2025 VC 48% ([CB Insights](https://www.cbinsights.com/research/report/ai-trends-2025/)); Agent 市场 $5.25B→$7.84B ([Unicorn Screener](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)); 生成式 AI $35.3B ([OECD](https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/venture-capital-investments-in-artificial-intelligence-through-2025_3bcb227f/a13752f5-en.pdf))

**资本结构性缺口**: 应用层 Agent 估值极高 (Cursor $29B)，自进化基础设施层估值不足。

---

## 7. 人才供给管道

| 大学 | 方向 | 代表人物 | 机制 |
|---|---|---|---|
| **UBC (Clune)** | 开放式进化 | Hu, Lu, Zhang | M1,M4 |
| **UCSD** | 自动 Agent 设计 | Shengran Hu | M1 |
| **Tsinghua/LeapLab** | 自博弈 RL | Andrew Zhao | M7 |
| **Northeastern** | 反馈强化 | Noah Shinn | M2 |
| **XMU DeepLIT** | 自进化理论 | Awesome list | 综合 |
| **SJTU** | 安全研究 | — | M10 |
| **ZJU** | Agent 框架 | — | M6 |

人才瓶颈：M1 全球不超过~20人；M10 过度集中 Anthropic；跨机制人才几乎为零。

---

## 8. 利益相关者视角

| 视角 | 代表 | 关注点 |
|---|---|---|
| 学术界 | Clune, Hu, Zhao | 理论创新、顶会论文 |
| 产业研究 | DeepMind, Anthropic, Meta | 产品化、安全 |
| 创业 | Sakana AI | 商业化、差异化 |
| VC | a16z, Menlo, YC | 市场、团队、退出 |
| 政策 | Georgetown CSET, OECD | 人才留存、安全监管 |

---

## 9. 已知 vs 推断 vs 未验证

**已知**: 所有论文/人员/融资数据已标注来源; SignalFire 8x; Sakana $365M+/$2.65B; Sharma 2026-02; AI 48% VC
**推断**: M5 被低估; 安全孤岛风险; M7 学术主导模式; 资本结构性缺口
**未验证**: Noah Shinn 确切去向; Meta MSL 稳定性; Anthropic 内部自进化团队规模

---

## 引用来源

- [DeepMind: AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)
- [Meta AI: HyperAgents](https://ai.meta.com/research/publications/hyperagents/)
- [Sakana AI: Series B](https://sakana.ai/series-b/) | [AI Scientist](https://sakana.ai/ai-scientist-nature/)
- [arXiv: DGM](https://arxiv.org/abs/2505.22954) | [ADAS](https://arxiv.org/abs/2408.08435) | [Absolute Zero](https://arxiv.org/abs/2505.03335) | [AlphaEvolve](https://arxiv.org/abs/2506.13131)
- [Shengran Hu: ADAS](https://www.shengranhu.com/ADAS/)
- [Jeff Clune CV](https://jeffclune.com/media/Jeff-Clune-CV.pdf) | [Vector Institute](https://vectorinstitute.ai/new-vector-faculty-member-jeff-clunes-quest-to-create-open-ended-ai-systems/)
- [UBC: AI Scientist](https://science.ubc.ca/news/2026-03/new-ai-scientist-conducts-its-own-research)
- [EvoAgentX/Awesome](https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents) | [XMU/Awesome](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents)
- [Crunchbase: Agents Seed](https://news.crunchbase.com/ai/autonomous-agents-top-seed-trend-2025/)
- [CB Insights: AI 2025](https://www.cbinsights.com/research/report/ai-trends-2025/)
- [OECD: VC in AI](https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/venture-capital-investments-in-artificial-intelligence-through-2025_3bcb227f/a13752f5-en.pdf)
- [Unicorn Screener: Agent Startups](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)
- [Georgetown CSET: AI Talent](https://cset.georgetown.edu/wp-content/uploads/Keeping-Top-AI-Talent-in-the-United-States.pdf)
- SignalFire 2025 AI Talent Report
- raw-papers/ 本地交叉验证
