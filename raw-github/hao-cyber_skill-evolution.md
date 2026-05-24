---
repo: hao-cyber/skill-evolution
url: https://github.com/hao-cyber/skill-evolution
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - hao-cyber/skill-evolution: Self-evolving AI skill framework — skills that learn from execution, reflect on failures, and autonomously improve themselves · GitHub

**Source**: https://github.com/hao-cyber/skill-evolution

---

[Skip to content](https://github.com/hao-cyber/skill-evolution#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[hao-cyber](https://github.com/hao-cyber)

/
**[skill-evolution](https://github.com/hao-cyber/skill-evolution)**

Public

- [Notifications](https://github.com/login?return_to=%2Fhao-cyber%2Fskill-evolution)You must be signed in to change notification settings
- [Fork
    19](https://github.com/login?return_to=%2Fhao-cyber%2Fskill-evolution)
- 
[Star
          145](https://github.com/login?return_to=%2Fhao-cyber%2Fskill-evolution)

[https://github.com/hao-cyber/skill-evolution](https://github.com/hao-cyber/skill-evolution)

[Branches](https://github.com/hao-cyber/skill-evolution/branches)[Tags](https://github.com/hao-cyber/skill-evolution/tags)

[https://github.com/hao-cyber/skill-evolution/branches](https://github.com/hao-cyber/skill-evolution/branches)[https://github.com/hao-cyber/skill-evolution/tags](https://github.com/hao-cyber/skill-evolution/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| references | references |  |  |
| scripts | scripts |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| ROADMAP.md | ROADMAP.md |  |  |
| SKILL.md | SKILL.md |  |  |
| setup.sql | setup.sql |  |  |
| View all files |  |  |  |

## Repository files navigation

# Skill Evolution

[https://github.com/hao-cyber/skill-evolution#skill-evolution](https://github.com/hao-cyber/skill-evolution#skill-evolution)

A meta-skill that makes AI agent skills evolve — create, reflect, evaluate, publish, search, install, fork, merge, review, and uninstall skills autonomously.

Not another skill marketplace. This is the engine that makes skills on *any* marketplace learn and improve.

让 AI 技能自己会长的系统——创建、反思、评测、发布、搜索、安装、Fork、合并、评审、卸载，全自动。

不是又一个技能市场，而是让任何市场上的技能都能学习和进化的引擎。

> **⚠️ This is NOT a human-facing app. There's no UI, no sign-up, no login.**
> 
> 
> 
> This is a skill for [Claude Code](https://claude.ai/code) (an AI coding agent). You give it a GitHub link, the AI clones it, and it works. The "user" is the AI, not you.
> 
> 
> 
> **⚠️ 这不是给人操作的应用。没有界面、没有注册、没有登录。**
> 
> 
> 
> 这是给 [Claude Code](https://claude.ai/code)（AI 编程 agent）用的技能。你把这个 GitHub 链接丢给 Claude Code，AI 自己会 clone 安装。使用者是 AI，不是你。
> 
> 
> 
> **How to use | 怎么用：** Open Claude Code → paste the GitHub URL of this repo → AI handles the rest.
> 
> 
> 
> **怎么用：** 打开 Claude Code → 把这个仓库的 GitHub 链接丢给它 → AI 自己搞定。

## Prerequisites | 前置条件

[https://github.com/hao-cyber/skill-evolution#prerequisites--%E5%89%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6](https://github.com/hao-cyber/skill-evolution#prerequisites--%E5%89%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6)

- [Claude Code](https://claude.ai/code) (or any AI coding agent that supports `.claude/skills/`)
- Python 3.9+

No pip packages required. All scripts use Python standard library only.

无需 pip install 任何依赖。所有脚本仅使用 Python 标准库。

## Quick Start | 快速开始

[https://github.com/hao-cyber/skill-evolution#quick-start--%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B](https://github.com/hao-cyber/skill-evolution#quick-start--%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

### 1. Install | 安装

[https://github.com/hao-cyber/skill-evolution#1-install--%E5%AE%89%E8%A3%85](https://github.com/hao-cyber/skill-evolution#1-install--%E5%AE%89%E8%A3%85)

```
cd your-project
mkdir -p .claude/skills
git clone https://github.com/hao-cyber/skill-evolution.git .claude/skills/skill-dev
```

Your project should now look like | 项目结构：

```
your-project/
├── .claude/
│   └── skills/
│       └── skill-dev/
│           ├── SKILL.md
│           ├── scripts/
│           └── references/
└── ...
```

**Done.** Claude Code will automatically pick up skill-dev.

**搞定。** Claude Code 会自动发现 skill-dev，立即可用。

### 2. Use the registry (zero config) | 使用市场（零配置）

[https://github.com/hao-cyber/skill-evolution#2-use-the-registry-zero-config--%E4%BD%BF%E7%94%A8%E5%B8%82%E5%9C%BA%E9%9B%B6%E9%85%8D%E7%BD%AE](https://github.com/hao-cyber/skill-evolution#2-use-the-registry-zero-config--%E4%BD%BF%E7%94%A8%E5%B8%82%E5%9C%BA%E9%9B%B6%E9%85%8D%E7%BD%AE)

No `.env`, no accounts, no setup. The public registry is built in.

不需要 `.env`，不需要注册账号，不需要配置服务器。公共市场已内置。

```
# Search | 搜索
python3 .claude/skills/skill-dev/scripts/search.py --query "web scraper"

# Install (dependencies auto-installed) | 安装（自动安装依赖）
python3 .claude/skills/skill-dev/scripts/install.py --name web-read

# Publish (preview first, then --yes to confirm) | 发布（先预览，再确认）
# Publisher identity is auto-generated on first publish.
# 发布者身份在首次发布时自动生成。
python3 .claude/skills/skill-dev/scripts/publish.py --skill-name my-skill
python3 .claude/skills/skill-dev/scripts/publish.py --skill-name my-skill --yes
```

### (Advanced) Private registry | 私有市场

[https://github.com/hao-cyber/skill-evolution#advanced-private-registry--%E7%A7%81%E6%9C%89%E5%B8%82%E5%9C%BA](https://github.com/hao-cyber/skill-evolution#advanced-private-registry--%E7%A7%81%E6%9C%89%E5%B8%82%E5%9C%BA)

To run a separate registry for your team | 为团队搭建私有市场：

**a.** Create a free [Supabase](https://supabase.com) project | 创建免费 Supabase 项目

**b.** Run `setup.sql` in the Supabase SQL Editor | 在 SQL 编辑器中运行 `setup.sql`

**c.** Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` env vars | 设置环境变量覆盖默认值

## What Works Offline | 离线能力

[https://github.com/hao-cyber/skill-evolution#what-works-offline--%E7%A6%BB%E7%BA%BF%E8%83%BD%E5%8A%9B](https://github.com/hao-cyber/skill-evolution#what-works-offline--%E7%A6%BB%E7%BA%BF%E8%83%BD%E5%8A%9B)

Even without any network, skill-dev gives your agent:

即使没有网络，skill-dev 也能让你的 AI：

- **Skill creation** — agent discovers a capability gap and builds a new skill | **创建技能** — AI 发现能力缺口，自动构建新技能
- **Skill reflection** — after failure, agent analyzes root cause and fixes the skill | **反思修复** — 执行失败后，AI 分析根因并自动修复
- **Maturity assessment** — after reflection cycles stabilize, agent proactively suggests publishing | **成熟度判断** — 反思周期稳定后，AI 主动建议发布
- **Skill structure** — enforces standard format (YAML frontmatter, progressive loading) | **结构规范** — 强制标准格式（YAML frontmatter、渐进式加载）

The public registry adds publish/search/install on top. The core value works 100% offline.

公共市场在此之上提供发布/搜索/安装。核心价值 100% 离线可用。

## How a Skill Looks | 技能结构

[https://github.com/hao-cyber/skill-evolution#how-a-skill-looks--%E6%8A%80%E8%83%BD%E7%BB%93%E6%9E%84](https://github.com/hao-cyber/skill-evolution#how-a-skill-looks--%E6%8A%80%E8%83%BD%E7%BB%93%E6%9E%84)

```
web-scraper/
├── SKILL.md          # When to use, how to do it right | 何时触发、怎么做对
├── scripts/          # Deterministic code (optional) | 确定性代码（可选）
├── references/       # Deep docs, loaded on demand (optional) | 深度文档，按需加载
└── assets/           # Templates, materials (optional) | 模板、素材
```

**Progressive loading** keeps context costs flat | **渐进式加载**让上下文开销趋近于零：

1. Metadata (name + description) — always in context (~100 words) | 元数据 — 始终在上下文
2. SKILL.md body — loaded when skill triggers | SKILL.md 正文 — 触发时加载
3. references/ — loaded only for specific scenarios | 参考文档 — 仅特定场景加载

Installing 50 skills costs the same context as installing 1 — until one is actually needed.

装 50 个技能和装 1 个，上下文开销一样——直到某个技能真正被触发。

## Variant System | 变体系统

[https://github.com/hao-cyber/skill-evolution#variant-system--%E5%8F%98%E4%BD%93%E7%B3%BB%E7%BB%9F](https://github.com/hao-cyber/skill-evolution#variant-system--%E5%8F%98%E4%BD%93%E7%B3%BB%E7%BB%9F)

No semver. Skills fork into named variants | 不用版本号，技能 Fork 为命名变体：

```
web-scraper (base)           <- Original | 原版
├── web-scraper@alice        <- Added proxy rotation | 加了代理轮换
├── web-scraper@bob          <- Parallel execution | 加了并发执行
└── web-scraper@merged       <- Agent-merged best of both | AI 合并最优版
```

When you publish a skill that already exists under a different author, it automatically forks as a new variant. Agents choose the best variant based on task context (audited > description match > installs > review score).

发布已存在的同名技能时，自动 Fork 为新变体。AI 根据任务上下文自动选最优版本（审计通过 > 描述匹配 > 安装量 > 评分）。

## Scripts Reference | 脚本参考

[https://github.com/hao-cyber/skill-evolution#scripts-reference--%E8%84%9A%E6%9C%AC%E5%8F%82%E8%80%83](https://github.com/hao-cyber/skill-evolution#scripts-reference--%E8%84%9A%E6%9C%AC%E5%8F%82%E8%80%83)

### publish.py

[https://github.com/hao-cyber/skill-evolution#publishpy](https://github.com/hao-cyber/skill-evolution#publishpy)

Publishes a local skill to the registry. **Defaults to preview mode** — requires `--yes` to upload.

发布本地技能到市场。**默认预览模式** — 需要 `--yes` 才会真正上传。

```
--skill-name NAME    Skill directory name under .claude/skills/
--variant VARIANT    Variant name (default: base)
--author AUTHOR      Author identifier (default: git config user.name)
--yes                Actually publish (without this, only preview is shown)
```

### search.py

[https://github.com/hao-cyber/skill-evolution#searchpy](https://github.com/hao-cyber/skill-evolution#searchpy)

Searches the registry | 搜索市场。

```
--query KEYWORDS     Full-text search | 全文搜索
--tag TAG            Filter by tag | 按标签过滤
--sort ORDER         Sort by: installs (default), updated, name
--limit N            Max results (default: 10)
--offset N           Skip first N results for pagination
--detail NAME        Show all variants for a specific skill | 查看某技能所有变体
--list-all           List everything | 列出全部
--include-unaudited  Include skills that haven't passed security audit | 包含未审计技能
```

### install.py

[https://github.com/hao-cyber/skill-evolution#installpy](https://github.com/hao-cyber/skill-evolution#installpy)

Downloads and installs a skill from the registry | 从市场安装技能。

```
--name NAME          Skill to install
--variant VARIANT    Variant to install (default: base)
--force              Overwrite existing skill directory | 覆盖已安装的同名技能
--no-deps            Skip automatic dependency installation | 跳过自动依赖安装
```

### uninstall.py

[https://github.com/hao-cyber/skill-evolution#uninstallpy](https://github.com/hao-cyber/skill-evolution#uninstallpy)

Removes a locally installed skill | 卸载本地技能。

```
--name NAME          Skill to uninstall
--yes                Skip confirmation | 跳过确认直接删除
```

### merge.py

[https://github.com/hao-cyber/skill-evolution#mergepy](https://github.com/hao-cyber/skill-evolution#mergepy)

Scaffold for merging two skill variants. Agent handles the semantic merge; script handles the plumbing.

变体合并脚手架。AI 负责语义合并，脚本负责管道工作。

```
merge.py prepare --name NAME --variants a,b [--workspace DIR]
merge.py diff --dir-a PATH --dir-b PATH
merge.py publish --workspace DIR --name NAME [--variant merged] [--yes]
```

### review.py
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

