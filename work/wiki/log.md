# Wiki Log

> Append-only chronological record. Format: `## [date] operation | title`

## [2026-05-26] init | Wiki structure created
- Created directory structure: entities/, concepts/, sources/, synthesis/
- Created index.md and log.md
- Wiki pattern adopted as workspace rule per user directive

## [2026-05-26] ingest | LLM Wiki pattern documentation
- Source: user direct input (task h88e4825i)
- Key insight: three-layer architecture (raw → wiki → schema)
- Operations: ingest, query, lint
- Special files: index.md (content catalog), log.md (chronological record)

## [2026-05-26 12:05] 根因 | git reset 导致文件消失（非agent问题）

**操作:** Master 验证 reflog 确认根因
**详情:**
- 两次 `git reset --hard HEAD` 确认: 09:47 + 10:53 (agent工作期间!)
- 所有 09:47-10:53 间写入的未提交文件被清除
- Scribe L6 跟踪的9个"消失"文件实际被reset销毁
- 38个stash可能包含crashed supervisor的auto-stash恢复数据
- **审计修正:** 文件消失原因从"并发agent操作"更正为"git reset"

**新铁律 (立即生效):**
1. 禁止任何agent执行 `git reset` (任何形式)
2. 禁止 `git checkout .` 或 `git restore .`
3. 禁止 `git clean -f`
4. 文件写入后应 `git add + git commit` 保护

## [2026-05-26 12:15] ingest | Employee Social Intelligence Mining

**操作:** Researcher (社交情报挖掘) 写入 work/wiki/sources/employee-social-intelligence.md
**详情:**
- X/Twitter: Jeff Clune DGM (@jeffclune), Abigail See AlphaEvolve (@abigail_e_see), Karpathy Anthropic move (@karpathy)
- LinkedIn: Meta MSL 44-person team (leaked by @deedydas), Recursive startup founding team, Anthropic net inflow
- GitHub: EvoAgentX framework, Awesome-Self-Evolving-Agents, CORAL, AgentEvolver
- Blogs: Sakana DGM, DeepMind AlphaEvolve (2 posts), Vector Institute Clune profile
- Sentiment: DGM extremely positive (#1 discussed May 2025), Meta MSL mixed, AlphaEvolve very positive
**信任链:** 所有条目附带原始link
**Rank:** ⬤⬤⬤⬤
**局限:** 未覆盖中国平台（WeChat/知乎/B站）; 多次遇到429 rate limit

## [2026-05-26 ~13:00] ingest | Mechanism Framework Wiki Population

**操作:** Architect (wiki schema设计) 写入 5 concept pages + 1 synthesis page
**详情:**
- M1 [自我观察](concepts/self-observation.md): 轨迹/反思/诊断/元认知 4子机制, Reflexion+ACE 案例
- M2 [自我评估](concepts/self-evaluation.md): 自评/环境反馈/程序化验证/元评估/人类审查 5子机制, 可靠性谱系
- M3 [自我改进](concepts/self-improvement.md): 提示词→记忆→权重→代码 4层深度谱系, 统一形式化, DGM+Voyager 案例
- M4 [多智能体协作进化](concepts/multi-agent-coevolution.md): 3种拓扑形态, 5子机制, DGM Archive+EvoMAC 案例
- M5 [涌现行为分析](concepts/emergent-behavior.md): 正向/负向涌现案例, AlphaEvolve 56年突破 vs Echo Trap
- [机制框架](synthesis/mechanism-framework.md): 全景DAG + 8系统×5机制覆盖矩阵 + 97痛点映射
**Sources:** survey/ch1-ch8, paper-reviews (6 reviews), work/research/mechanism-analysis-framework.md (L1产出)
**信任链:** 每条声明标注 Source: survey/chX 或 paper-reviews/review-XXX
**Rank:** ⬤⬤⬤⬤⬤
