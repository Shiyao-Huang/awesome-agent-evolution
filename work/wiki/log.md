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

## [2026-05-26 12:15] build | Survey LaTeX 编译修复 + Wiki概念填充

**操作:** Implementer (XeLaTeX编译+图表) 完成survey编译修复和wiki扩展
**详情:**
- survey/latex/main.tex: `\bibliography{references}` → `\bibliography{references,references-aliases}`
- 创建 references-aliases.bib: 50+ 别名条目解决跨章节引用键不一致
- 修复 selfrewarding2024 author字段: `Meta, and others` → `{Meta} and others`
- 修复 ch5-supplement.tex 3个重复label: 加 `-supplement` 后缀
- 最终编译: 177页 PDF, 1.2MB, 0 BibTeX warnings, 0 multiply-defined labels
- Wiki新增3个概念页: reward-based-evolution, self-play-evolution, architecture-search
**产出:**
- `survey/latex/main.pdf` (177 pages)
- `survey/latex/references-aliases.bib`
- `work/wiki/concepts/reward-based-evolution.md`
- `work/wiki/concepts/self-play-evolution.md`
- `work/wiki/concepts/architecture-search.md`

## [2026-05-26 ~14:00] ingest | Raw-Papers Mechanism Deep-Dive (128论文)

**操作:** Researcher (L3论文机制) 写入 wiki source page + work/research 完整分析
**详情:**
- [Raw-Papers Mechanism Analysis](sources/raw-papers-mechanism-analysis.md): 7机制族(F1-F7), Top-10论文, 5引用谱系(Mermaid DAG), T1-T4证据分级, 效果/实现分类, 研究缺口
- [papers-mechanism-analysis.md](../research/papers-mechanism-analysis.md): 700行完整分析(含Appendix A: 50+论文映射表)
- 深读30+核心论文评审，6并行agent读取剩余论文
- 交叉引用: paper-drafts/ch2-ch4, essential-classification.md
**Sources:** raw-papers/(128), paper-reviews/(137), paper-drafts/(8 chapters)
**信任链:** 所有声明标注[KNOWN]/[INFERRED]/[UNVERIFIED]，arXiv ID可追溯
**Rank:** ⬤⬤⬤⬤
**矛盾/更新:** 无矛盾。F1-F7与Architect的M1-M5互补（论文视角 vs 框架视角）
