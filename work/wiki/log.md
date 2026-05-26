# work/wiki/log.md — Timeline Record

> Format: `## [日期] 操作 | 标题`

## [2026-05-26] 初始化 | Wiki 结构创建

**操作:** Scribe (L6) 创建 wiki 基础结构
**详情:**
- 创建 `work/wiki/index.md` 内容目录
- 创建 `work/wiki/log.md` 本时间线文件
- 创建4个子目录: concepts/, entities/, sources/, synthesis/
- 从 `work/research/` 跟踪到9个瞬态文件（创建后被移除）

**规则变更:** 用户引入 LLM Wiki 模式（三层架构: Raw→Wiki→Schema）
**影响:** 所有研究产出应写入 `work/wiki/` 而非散落文件

## [2026-05-26] 审计 | L6 Phase 1 基线审计完成

**操作:** Scribe 完成10个索引文件基线审计
**详情:**
- 修复3个索引gap (work/research/, paper-drafts/zh/, CURRENT_GOAL.md)
- 证据链QA: 3 STRONG, 2 MODERATE, 0 [UNVERIFIED]
- 发现: 索引生成器 (`generate_project_indexes.mjs`) 覆盖手动添加
- 审计报告写入 `work/research/l6-index-audit-2026-05-26.md` (后消失)

## [2026-05-26] 规则 | 英文论文唯一真实源

**操作:** 用户指令更新
**详情:** 英文 `paper-drafts/` 为唯一真实源，中文 `survey/` 严格从英文单向映射
**影响:** L2 中英同步改为英文→中文单向映射

## [2026-05-26] 规则 | LLM Wiki 模式引入

**操作:** 用户引入 LLM Wiki 模式
**详情:**
- 三层架构: Raw(不可变) → Wiki(LLM维护) → Schema(规则)
- 知识编译一次，持续更新
- 每个新源 → 摘要+更新实体/概念页+更新index+追加log
- 所有素材必须有原始link和rank/value区分
**影响:** 全workspace运作规则变更，所有agent产出重构为wiki格式

## [2026-05-26 12:00] ingest | Talent/Landscape Research → Wiki Entity Pages

**操作:** Researcher (交叉分析深挖) 将已完成的人才/景观研究从 work/research/ 整合进 wiki
**详情:**
- 创建 8 个实体页: anthropic, google-deepmind, openai, meta-fair, sakana-ai, jeff-clune, shengran-hu, noah-shinn
- 创建 1 个综合页: synthesis/talent-landscape (9 labs, 10 papers, supply-demand matrix)
- 所有页面包含 YAML frontmatter (rank, tags, sources, updated)
- 所有事实声明包含信任链链接
- 交叉引用使用 [[wiki-link]] 格式
**产出:** work/wiki/entities/*.md, work/wiki/synthesis/talent-landscape.md
**数据来源:** 6轮 web搜索 + raw-papers/ 交叉验证 + 3份已有研究报告
