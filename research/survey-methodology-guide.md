# 高质量科研Survey方法论指南

> 适用场景：AI Agent Self-Evolution领域综述，但方法论通用
> 编写时间：2026-05-22
> 编写者：Researcher (基于PRISMA 2020 + 计算机科学综述最佳实践)

---

## 1. Survey类型定位

### 1.1 三种Survey类型

| 类型 | 特征 | 典型周期 | 我们的定位 |
|------|------|----------|-----------|
| **Systematic Literature Review (SLR)** | 严格PRISMA流程，预注册协议，可复现 | 6-12个月 | ✅ 目标标准 |
| **Systematic Mapping Study** | 宽泛覆盖，分类统计，不深度分析 | 3-6个月 | 部分适用（Repo/博客分类） |
| **Narrative/Traditional Survey** | 专家视角，选择性引用，叙述性 | 2-4个月 | ❌ 不够严谨 |

**我们的Survey**是混合型：论文部分采用SLR标准，GitHub/博客/社区数据采用Mapping Study标准。

### 1.2 质量标准对照

| 维度 | PRISMA 2020要求 | 我们现状 | Gap |
|------|----------------|----------|-----|
| 协议预注册 | PROSPERO注册 | ❌ 未注册 | 可补注册OSF |
| 检索策略文档化 | 完整search string | ✅ 部分有（anysearch记录） | 需整理 |
| 多数据库检索 | ≥3个数据库 | ✅ arXiv+GitHub+Blog+Social | 已达标 |
| 独立双审 | ≥2名审稿人 | ❌ 单人审 | 需补充 |
| PRISMA Flow Diagram | 必须 | ❌ 缺失 | **需创建** |
| 偏倚评估 | ROBIS/RoB2 | ❌ 缺失 | 需补充 |
| 数据提取表 | 预设计表单 | ✅ raw-papers格式 | 已有 |

---

## 2. 文献检索策略

### 2.1 关键词设计（三层漏斗）

**第一层：核心学术关键词（精确检索）**
```
("self-evolving agent" OR "self-improving agent" OR "self-modifying agent"
OR "recursive self-improvement" OR "agent evolution"
OR "open-ended evolution" AND "agent")
```

**第二层：方法关键词（补充检索）**
```
("reinforcement learning" AND "agent self-play")
OR ("prompt evolution" AND "LLM agent")
OR ("architecture search" AND "agent")
OR ("memory system" AND "self-improvement")
```

**第三层：热门/实战关键词（防止遗漏）** ← **我们之前的盲区**
```
"AI agent" AND ("self-evolve" OR "auto-evolve" OR "autonomous improvement")
"coding agent" AND "self-improving"
"agent framework" AND ("evolution" OR "self-modify")
```

**中文关键词（独立检索）**
```
"智能体进化" OR "智能体自改进" OR "Agent自进化" OR "AI进化"
"自修改Agent" OR "递归自我改进" OR "开放式进化"
```

### 2.2 数据源覆盖矩阵

| 数据源 | 覆盖范围 | 我们的覆盖 | 优先级 |
|--------|----------|-----------|--------|
| arXiv | cs.AI, cs.CL, cs.LG, cs.MA | ✅ 107篇 | P0 |
| Semantic Scholar | 全学科，引用图 | ⚠️ 间接 | P1 |
| Google Scholar | 最全，含灰文献 | ⚠️ 偶尔用 | P1 |
| DBLP | CS会议/期刊 | ❌ 未用 | P2 |
| GitHub | 代码+README+Star | ✅ 348 repos | P0 |
| X/Twitter | 实时热点 | ⚠️ 偶尔搜 | P1 |
| 微信公众号 | 中文社区 | ❌ 未覆盖 | **P0需补** |
| 知乎 | 中文技术讨论 | ⚠️ 间接 | P1 |
| HackerNews | 英文技术社区 | ⚠️ 间接 | P1 |
| Reddit | 英文讨论 | ⚠️ 间接 | P1 |
| Product Hunt | 新产品 | ⚠️ 间接 | P2 |

### 2.3 雪球采样（Snowballing）

```
Forward Snowballing（向前追踪）：
  从核心论文（如DGM, ADAS）的引用列表找到后续工作

Backward Snowballing（向后追踪）：
  从最新论文（2026）的参考文献找到早期基础工作

Implementation Snowballing（实现追踪）：
  从论文→GitHub repo→README中的关联项目→新repo→新论文
```

**实际应用**：
- Hyperagents (2603.19461) → 引用DGM → 我们扩展了DGM系列
- Misevolution (2509.26354) → Forward引用找到OEP + Capability Erosion
- EvoAgentX → Awesome-Self-Evolving-Agents list → 找到CharlesQ9/Self-Evolving-Agents

### 2.4 检索频次与更新策略

| 频次 | 动作 | 工具 |
|------|------|------|
| 每日 | arXiv新论文扫描 | arXiv API / Semantic Scholar Alerts |
| 每周 | GitHub Trending检查 | OSSInsight API / 手动 |
| 每周 | X/Twitter热点扫描 | 搜索API / 手动 |
| 每月 | 全量关键词重新检索 | anysearch / WebSearch |
| 每季度 | 引用图更新 | Semantic Scholar API |

---

## 3. 交叉验证方法论

### 3.1 三角验证框架

```
                论文声称
               /        \
              /          \
    社区体验 -------- 框架实践
```

**验证维度**：

| 维度 | 数据源 | 验证方法 | 偏倚风险 |
|------|--------|----------|---------|
| 效果声称 | 论文eval | 与独立benchmark对比 | 作者cherry-pick |
| 生产可用性 | GitHub Issues | 分析issue/bug报告 | 幸存者偏差 |
| 用户体验 | Reddit/HN/知乎 | 主题分析痛点帖 | 极端意见偏差 |
| 技术趋势 | Star曲线 | 时间序列分析 | hype偏差 |
| 成本效益 | 博客/教程 | 实际部署案例 | 利益相关偏差 |

### 3.2 偏倚识别与缓解

| 偏倚类型 | 表现 | 缓解策略 |
|----------|------|----------|
| **发表偏倚** | 只引用正面结果 | 主动搜索失败案例、限制讨论 |
| **语言偏倚** | 只搜英文 | 补充中文关键词检索 |
| **时间偏倚** | 过度关注最新 | 确保2022-2026全时间覆盖 |
| **平台偏倚** | 只搜学术平台 | 补GitHub/X/中文平台 |
| **权威偏倚** | 只引用大组论文 | 搜索独立研究者、新团队 |
| **确认偏倚** | 选择性引用支持证据 | 预定义分析框架，记录排除理由 |
| **流行度偏倚** | Star数=质量 | Star与实际可用性交叉验证（已证明负相关） |

### 3.3 证据等级

对每条关键结论标注证据等级：

| 等级 | 定义 | 示例 |
|------|------|------|
| **A - 强证据** | ≥3个独立来源一致验证 | "Star数与生产可用性负相关"（论文+社区+框架分析一致） |
| **B - 中等证据** | 2个来源验证或1个高质量来源 | "记忆系统是关键痛点"（Mom Test+论文eval） |
| **C - 弱证据** | 单一来源或推理 | "Rust是未来趋势"（仅5个repo，推理性结论） |
| **D - 专家意见** | 无系统数据支撑 | "安全治理是未来方向"（社区讨论多但论文少） |
| **E - 推测** | 基于趋势外推 | "2027年将出现生产级自进化Agent" |

---

## 4. 数据质量管理

### 4.1 论文质量评估清单

每篇论文review应包含：

- [ ] **研究问题是否明确？** (清晰 vs 模糊)
- [ ] **实验设计是否合理？** (有控制组 vs 无基线)
- [ ] **评估是否充分？** (多benchmark vs 单任务)
- [ ] **结果是否可复现？** (有代码+数据 vs 黑箱)
- [ ] **局限性是否坦诚？** (明确说明 vs 隐藏缺陷)
- [ ] **与现有工作对比是否公平？** (相同设置 vs 选择性对比)
- [ ] **统计显著性？** (多次运行+标准差 vs 单次运行)

### 4.2 Repo质量评估维度

| 维度 | 指标 | 权重 |
|------|------|------|
| 活跃度 | 最近commit时间、issue响应速度 | 20% |
| 社区 | Star/Fork/Contributor数 | 20% |
| 文档 | README完整度、API文档 | 20% |
| 代码质量 | 测试覆盖、CI/CD、lint | 15% |
| 可复现性 | 安装说明、示例、数据集 | 15% |
| 创新性 | 技术新颖度、问题定义 | 10% |

### 4.3 数据缺口识别与处理

**当前已知缺口**（基于cross-analysis.md）：

| 缺口 | 影响 | 处理方式 |
|------|------|----------|
| 241 repo未分类 | 分类统计偏差 | 自动+人工分类 |
| 63篇论文缺深度review | 分析深度不足 | 优先review高引/高相关论文 |
| 90%博客缺作者画像 | 影响力分析不可靠 | 标记为"unknown"，不强行推断 |
| 中文平台覆盖不足 | 语言偏倚 | 补充微信/知乎检索 |

---

## 5. Survey写作规范

### 5.1 论文组织结构（参考我们现有的8章结构）

```
Ch1 引言 — 问题定义、贡献列表、论文结构
Ch2 理论基础 — 数学形式化、统一框架
Ch3 方法分类 — Taxonomy + 每类详述
Ch4 核心系统 — 代表性系统深度分析
Ch5 评估体系 — Benchmark + 评估方法论
Ch6 工业实践 — 框架对比、部署案例
Ch7 用户痛点 — Mom Test + 社区验证
Ch8 未来方向 — 开放问题 + 研究路线图
```

### 5.2 图表规范

| 图表类型 | 数量要求 | 我们已有 | 标准 |
|----------|----------|----------|------|
| Taxonomy树 | ≥1 | ✅ 1个六分类树 | 清晰层次+颜色编码 |
| 时间线 | ≥1 | ✅ 1个2022-2026 | 按方法类别着色 |
| 架构图 | ≥2 | ✅ 通用闭环+参考架构 | TikZ绘制 |
| 对比表 | ≥3 | ✅ 多个longtable | 统一列格式 |
| 趋势图 | ≥2 | ✅ Star分布+趋势pgfplots | 含数据标注 |
| PRISMA Flow | 1 | ❌ **缺失** | **必须补** |
| 雷达图 | 1 | ⚠️ TikZ语法错误 | 需修复 |

### 5.3 引用规范

- **BibTeX格式**：使用 `references.bib`，每篇论文一个条目
- **引用标注**：`\cite{AuthorYear}` 格式
- **自引控制**：不超过总引用的5%
- **灰文献标注**：GitHub repo、博客、社交帖文明确标注来源类型
- **时效性标注**：arXiv论文标注提交日期，非正式发表

---

## 6. PRISMA Flow Diagram（必须补充）

### 6.1 我们的PRISMA Flow

```
论文检索流程（需绘制为TikZ图）：

arXiv检索 (关键词匹配) ──→ 初始结果: ~450条
Semantic Scholar补充 ─────→ 补充: ~120条
GitHub/引用追踪 ──────────→ 补充: ~80条
                                    ↓
                            去重后: ~350条
                                    ↓
                        标题/摘要筛选（排除不相关）
                                    ↓
                            符合条件: ~180条
                                    ↓
                        全文评估（排除质量不足）
                                    ↓
                           最终纳入: 107条
                                    ↓
                    ┌───────────────┼───────────────┐
                    ↓               ↓               ↓
              深度Review: 25    摘要Review: 82   仅索引: 0
```

### 6.2 数据源PRISMA Flow

```
GitHub检索 ─────→ 初始: ~500条
博客检索 ────────→ 初始: ~800条
社交帖文 ────────→ 初始: ~400条
                        ↓
                    去重后: ~1306条
                        ↓
                    质量筛选:
                    - 博客全文ok: 495
                    - snippet-only: 153 (降权)
                    - 社交全文: 131
                    - Repo有完整数据: 107/348
```

---

## 7. 持续更新机制（Living Survey）

### 7.1 版本控制

- **Major version (v1, v2...)**: 新增方法类别或重大框架调整
- **Minor version (v1.1, v1.2...)**: 新增论文/repo/数据
- **Patch**: 错误修正、数据更新

### 7.2 更新触发条件

| 触发条件 | 动作 | 责任人 |
|----------|------|--------|
| 新增≥10篇相关论文 | 更新方法分类+评估 | Researcher |
| GitHub Trending出现新agent框架 | 补充到Repo分析 | Researcher |
| 顶级会议(ICLR/NeurIPS/ICML)录用相关论文 | 深度review | Researcher |
| 社区重大讨论(HN/Reddit高赞帖) | 痛点更新 | Researcher |
| 用户反馈数据错误 | 验证+修正 | 全队 |

---

## 8. 检查清单（Survey发布前）

- [ ] 所有论文有完整元数据（arXiv ID, 作者, 年份, 方法类别）
- [ ] 所有repo有分类（语言, Stars, 类别）
- [ ] PRISMA Flow Diagram已绘制
- [ ] 偏倚评估已完成
- [ ] 证据等级已标注（A-E）
- [ ] 所有图表引用数据来源
- [ ] BibTeX条目完整（107篇）
- [ ] 交叉验证发现已记录（5个Mismatch）
- [ ] 局限性章节已撰写
- [ ] 至少1名独立审稿人审核

---

## 参考资料

- PRISMA 2020 Statement: https://prisma-statement.org
- PRISMA Flow Generator: https://prisma.shinyapps.io/flowdiagram/
- EQUATOR Network: https://www.equator-network.org/
- Kitchenham et al. "Guidelines for performing systematic literature reviews in SE" (2007)
- Wohlin et al. "On the reliability of mapping studies in software engineering" (2013)
- Zhang et al. "AI tools for systematic literature reviews" (ScienceDirect, 2025)
