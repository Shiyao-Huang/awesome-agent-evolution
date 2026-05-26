---
title: "Survey 深挖实验复盘：什么有效、什么失败、未来方向"
created: 2026-05-26T21:20:00+08:00
author: gstack-qa-commander
type: retrospective
scope: full-session
---

# Survey 深挖实验复盘

## 实验概述

2026-05-26，一个 20+ agent 的多智能体团队被部署执行"Survey 深挖"任务——对 AI Self-Evolution 领域进行全链路深度研究，从 raw 素材到论文到网站。

**规模**：58 commits，22 done tasks，6 todo，8 层任务架构（L1-L6 + 用户任务 + genome evolution）。

---

## 什么有效

### 1. LLM Wiki Pattern 是知识交付的正确架构

**证据**：49 wiki 页面，737 keywords 索引，5 个 concepts + 7 个 entities + 24 个 sources + 2 个 synthesis 页面全部可查、可交叉引用。

**为什么有效**：
- 解决了"每次从 raw 重搜"的 RAG 痛点——知识编译一次，持续更新
- 交叉引用已建立，矛盾已标记，不需要每次重建
- 单个 raw 源触发 10-15 个 wiki 页面更新，实现了知识整合而非简单索引
- Agent 启动检查（index.md → log.md → search-index）确保不重复分析

**教训**：Wiki Pattern 应该在项目启动时就建立，而不是在 session 中途引入。中途切换导致早期研究产物散落在 `work/research/` 而不是 wiki 中。

### 2. 多 Agent 并行研究在素材收集层高度有效

**证据**：
- L3 Researcher 对 4 类 raw 源（GitHub/论文/社交/博客）的机制深挖产出 26KB+ 分析
- 人才流动分析并行产出 4 份报告（Anthropic 变动、AI 人才流、中国团队、资本结构）
- 18 份 `work/research/` 文件全部有证据链标注

**为什么有效**：
- 不同 raw 源需要不同的分析视角（代码分析 vs 论文精读 vs 社交舆情 vs 博客趋势）
- 并行处理 4 类素材比串行快 4 倍
- 每个 Agent 可以在自己擅长的领域深入

### 3. 自动索引生成器 + 人工索引维护配合有效

**证据**：`generate_project_indexes.mjs` 每次运行覆盖手动添加的条目，但 `work/research/INDEX.md` 和 wiki `index.md` 在生成器范围外持续维护。

**教训**：生成器负责机械索引（projects/、raw-/、site/），人工负责知识索引（work/research/、work/wiki/）。两者不冲突。

### 4. QA 铁律写入 AGENTS.md/CLAUDE.md 是正确的持久化方式

**证据**：Iron Rules 在 commit 47eb58c 和 6626550 中落地，后续所有 Agent 都遵循了"禁止 git reset"规则。

---

## 什么失败了

### 1. Aha Daemon git reset 摧毁了大部分未提交工作（P0 级失败）

**事实**：每 ~20 分钟一次的 `git reset --mixed HEAD` 清除了所有未提交的 agent 工作两次（09:47, 10:53）。

**影响**：
- 44/47 声称的交付物需要通过 stash 恢复
- 3 个文件彻底丢失（无法从 stash 或 commit 恢复）
- Reviewer 最初判定"agent 未写入文件"（幻影交付），后来修正为"文件被 reset 销毁"
- QA 基线报告 v1 和 QA-FRAMEWORK.md 丢失，需要重建

**根因**：aha-agi daemon 在 supervisor PDCA 周期中执行 `git reset` 作为工作区清理。代码经过混淆处理（hex-encoded strings），无法本地修补。

**缓解措施**（已部署）：
- `scripts/auto-commit-shield.sh` 每 5 分钟自动提交未提交的更改
- CC CronCreate 持久定时任务（job 67a92e03）
- 铁律写入 AGENTS.md/CLAUDE.md/SAFETY-RULES.md

**未解决**：需要上游修复 aha-agi daemon 行为。

**教训**：在多 Agent 写入环境中，"写后立即提交"必须是强制流程，不能依赖"稍后一起提交"。自动防护机制是基础设施需求，不是可选项。

### 2. EN→CN 映射完全偏离了 Iron Rule（P0 级失败）

**事实**：8 章中 7 章违反"EN = Single Source of Truth, CN = Strict Mapping"规则。

| 严重程度 | 章节 | 问题 |
|---|---|---|
| 最严重 | ch3 (210%) | 完全不同的分类体系（机制类型 vs 推理/训练时） |
| 最严重 | ch4 (175%) | 不同的范围界定（演化系统 vs 进化式代码） |
| 最严重 | ch5 (132%) | 完全不同的组织结构 |
| 最严重 | ch7 (173%) | 25+ CN subsection vs 9 EN subsection |
| 最严重 | ch8 (184%) | 不同主题 + CN 独有 TikZ 图 |
| 中等 | ch2 (85%) | 额外 CN 独有内容 |
| 中等 | ch6 (103%) | 不同主题焦点 |

**根因**：CN Builder 将 survey 视为独立的中文综述项目，而非 EN 论文的忠实映射。L2 任务描述"中英同步"被解读为"内容覆盖同步"而非"结构忠实映射"。

**教训**：
- "同步"这个表述太模糊。应该明确为"逐节翻译 + 结构一一对应"
- 需要中间 QA 检查点——不能等 8 章全写完才审计
- EN→CN 映射应该有自动化验证（section 标题匹配、行数比例阈值）

### 3. Agent 标记 done 但文件未实际持久化（P1 级问题）

**事实**：Reviewer 审计发现初始交付物完整率仅 25%（2/8）。

**根因链**：
1. Agent 确实写入了文件（stash 和 reflog 证据支持）
2. 但写入后未 commit
3. Daemon git reset 销毁了未提交工作
4. Agent 在 Kanban 中标记 done 并写了详细的完成描述
5. 文件实际已不存在

**教训**：
- `completion = file on disk and committed`（铁律 6）是正确的标准
- "聊天描述、任务评论、口头承诺不算完成"必须在每个 Agent 的行为配置中强制执行
- Reviewer 的审计方法（检查文件是否存在）是正确的，但对原因的判断（agent 未写入）最初是错误的

### 4. PAPER_OUTLINE.md 与实际论文结构不同步（P2 级问题）

**事实**：PAPER_OUTLINE.md 描述 10 章结构，实际 paper-drafts/ 有 8 章 + appendix。章节标题和范围也有差异。

**影响**：新 Agent 参考 PAPER_OUTLINE.md 时会产生错误的工作计划。

**教训**：大纲文件是"活文档"，每次论文结构变更后必须同步更新。

---

## 关键数据

| 指标 | 数值 |
|---|---|
| 今日 commits | 58 |
| Kanban done | 22 |
| Kanban todo | 6 |
| work/research/ 文件 | 22 (2.2MB) |
| work/wiki/ 页面 | 49 (496KB) |
| projects/ model cards | 447 (3.3MB) |
| paper-drafts/ | 8 chapters (2.4MB) |
| survey/latex/ | 17 .tex files (3.6MB) |
| Site pages | 212 |
| 文件恢复率 | 94% (44/47) |
| EN→CN 合规率 | 12.5% (1/8) |

---

## 未来方向

### 方向 1：修复 EN→CN 映射（最高优先级）

**应该怎么做**：
1. 选择修复路径：建议方案 B（结构对齐），将 CN 章节标题和顺序匹配 EN，CN 独有内容移入附录
2. 建立自动化验证：写一个脚本比较 EN/CN 的 section 标题列表，标记不匹配项
3. 每个 chapter 修复后立即 commit + QA 验证，不要等全部完成

**预期时间**：每章 ~1-2 小时结构对齐，8 章 ~8-16 小时。

### 方向 2：强化 Wiki 作为知识中枢

**应该怎么做**：
1. 将 `work/research/` 的 22 个文件迁移到 wiki 结构（concepts/entities/sources/synthesis）
2. 每次研究任务产出 wiki 页面而非散落文件
3. Wiki lint 应该是定期自动任务，不是手动触发
4. `search-index.json` 应该在每次 commit 前自动重新生成

### 方向 3：多 Agent 协作流程改进

**应该怎么做**：
1. **中间 QA 检查点**：每 2-3 个任务完成后触发 QA 检查，不是等全部完成
2. **写后立即 commit**：这是铁律，不是建议。auto-commit-shield 是防护网，Agent 本身应该在 write 后立即 commit
3. **任务描述精确化**：避免"同步"这类模糊表述，改为"逐节翻译，section 标题一一对应，行数偏差不超过 20%"
4. **Review 不只看文件存在性**：还应检查文件大小（>1KB）、内容相关性（与任务描述匹配度）、证据链标注

### 方向 4：Daemon git reset 上游修复

**应该怎么做**：
1. 向 aha-agi 团队报告 bug：supervisor PDCA 周期不应执行 `git reset --mixed HEAD`
2. 请求配置选项：允许项目禁用 daemon 工作区清理
3. 临时方案：保持 auto-commit-shield 运行（需要活跃 CC session）

### 方向 5：自动化质量门禁

**应该怎么做**：
1. EN→CN section matching 脚本（比较 \section/\subsection 列表）
2. Evidence chain 检查器（扫描 [UNVERIFIED] 标记数量）
3. 行数比例异常检测（CN/EN 比例超出 80%-120% 范围时告警）
4. Wiki orphan 检测（没有任何入链的页面）
5. 这些检查应该在 `pre-commit` hook 或 CI 中运行

---

## 核心教训（一句话版）

> 多 Agent 研究团队的产出质量取决于三个基础设施：持久化保障（不丢工作）、映射纪律（忠于源）和中间验证（不等全做完才检查）。任何一个缺失都会导致大量返工。
