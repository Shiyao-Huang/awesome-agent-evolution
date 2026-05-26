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
