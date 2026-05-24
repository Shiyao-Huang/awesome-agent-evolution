---
repo: yang1999code/controllable-agent
url: https://github.com/yang1999code/controllable-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Yang1999code/controllable-agent: 20-interface AI agent framework with 3-layer architecture, multi-agent delegation, and self-evolution. · GitHub

**Source**: https://github.com/yang1999code/controllable-agent

---

[Skip to content](https://github.com/yang1999code/controllable-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Yang1999code](https://github.com/Yang1999code)

/
**[controllable-agent](https://github.com/Yang1999code/controllable-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FYang1999code%2Fcontrollable-agent)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2FYang1999code%2Fcontrollable-agent)
- 
[Star
          105](https://github.com/login?return_to=%2FYang1999code%2Fcontrollable-agent)

[https://github.com/Yang1999code/controllable-agent](https://github.com/Yang1999code/controllable-agent)

[Branches](https://github.com/Yang1999code/controllable-agent/branches)[Tags](https://github.com/Yang1999code/controllable-agent/tags)

[https://github.com/Yang1999code/controllable-agent/branches](https://github.com/Yang1999code/controllable-agent/branches)[https://github.com/Yang1999code/controllable-agent/tags](https://github.com/Yang1999code/controllable-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History31 Commits31 Commits |  |  |  |
| .agent-base/agents | .agent-base/agents |  |  |
| agent | agent |  |  |
| ai | ai |  |  |
| app | app |  |  |
| docs | docs |  |  |
| frontend | frontend |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| launch.py | launch.py |  |  |
| my_agent.py | my_agent.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| start.bat | start.bat |  |  |
| web_server.py | web_server.py |  |  |
| 上下文优化方案.md | 上下文优化方案.md |  |  |
| 修改记录.md | 修改记录.md |  |  |
| 可视化.md | 可视化.md |  |  |
| 多智能体设计.md | 多智能体设计.md |  |  |
| 多智能实现记录.md | 多智能实现记录.md |  |  |
| 我的记忆改进.md | 我的记忆改进.md |  |  |
| 更新总结.md | 更新总结.md |  |  |
| 架构总结.md | 架构总结.md |  |  |
| 记忆系统更新记录.md | 记忆系统更新记录.md |  |  |
| 记忆系统设计实现.md | 记忆系统设计实现.md |  |  |
| 问题记录.md | 问题记录.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Controllable Agent

[https://github.com/yang1999code/controllable-agent#controllable-agent](https://github.com/yang1999code/controllable-agent#controllable-agent)

> 一个能自己组织团队、自己记忆、自己进化的 AI Agent 框架。 5 个 Agent 角色分工协作 + Wiki 式记忆系统 + 实时终端可视化。

---

## 它能做什么？

[https://github.com/yang1999code/controllable-agent#%E5%AE%83%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88](https://github.com/yang1999code/controllable-agent#%E5%AE%83%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88)

想象你给 AI 一个复杂任务，比如"帮我从零搭建一个认证系统"。

普通 Agent 会怎么做？一个模型从头干到尾，边写边忘，写到后面忘了前面。

**Controllable Agent 会这么做**：

```
你："帮我实现用户认证模块"

1. Planner 先分析需求，拆成 3 个子任务，写好计划
2. 3 组 Coder + Reviewer 配对并行开工
   - Coder 写 JWT → Reviewer 验证 → 通过
   - Coder 写路由 → Reviewer 验证 → 有 bug → 修复 → 再验 → 通过
   - Coder 写中间件 → Reviewer 验证 → 通过
3. Coordinator 全程监控，谁卡了就拉一把
4. 总体集成测试 → 通过
5. Memorizer 提炼经验，下次更快

全程你可以随时插话，Coordinator 会接住你的补充信息。
```

**不需要你指挥，5 个 Agent 自己协商、并行、互相审查。**

---

## 两大创新

[https://github.com/yang1999code/controllable-agent#%E4%B8%A4%E5%A4%A7%E5%88%9B%E6%96%B0](https://github.com/yang1999code/controllable-agent#%E4%B8%A4%E5%A4%A7%E5%88%9B%E6%96%B0)

### 创新 1：5 角色分工的多 Agent 协作

[https://github.com/yang1999code/controllable-agent#%E5%88%9B%E6%96%B0-15-%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5%E7%9A%84%E5%A4%9A-agent-%E5%8D%8F%E4%BD%9C](https://github.com/yang1999code/controllable-agent#%E5%88%9B%E6%96%B0-15-%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5%E7%9A%84%E5%A4%9A-agent-%E5%8D%8F%E4%BD%9C)

不是把任务丢给一个 Agent，而是像软件团队一样分工：

| 角色 | 干什么 | 一句话 |
|---|---|---|
| Coordinator | 管理者 | 不干活，专门管人。谁能创建、谁越权了、谁卡住了 |
| Planner | 设计师 | 写计划但不走人，全程动态调整，永远记住用户原话 |
| Coder | 开发 | 写代码、跑测试，按计划执行 |
| Reviewer | 审查 | 和 Coder 配对，写完一个模块立马验，边写边审 |
| Memorizer | 记录员 | 记事 + 从经验中提炼可复用技能 |

关键设计：

- **Coder + Reviewer 配对**：不是写完再审查，而是写一个小模块就验一个，快速迭代。多组配对可以并行跑。
- **两层打回**：模块级打回不限次数（配对内自己解决），总体集成测试最多 3 轮。超了就升级给你处理。
- **用户随时插话**：你中途补充的信息由 Coordinator 接收，按紧急度分级处理，不中断主流程。
- **嵌套深度控制**：最多 2 层（主 Agent → Coordinator → 工作 Agent），防止套娃。
- **无硬编码上限**：任务拆得越细，配对越多，并行度越高。用 Semaphore 控制并发。

详见 [多智能体设计.md](https://github.com/Yang1999code/controllable-agent/blob/master/%E5%A4%9A%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%BE%E8%AE%A1.md)。

### 创新 2：记忆提取 + 技能结晶

[https://github.com/yang1999code/controllable-agent#%E5%88%9B%E6%96%B0-2%E8%AE%B0%E5%BF%86%E6%8F%90%E5%8F%96--%E6%8A%80%E8%83%BD%E7%BB%93%E6%99%B6](https://github.com/yang1999code/controllable-agent#%E5%88%9B%E6%96%B0-2%E8%AE%B0%E5%BF%86%E6%8F%90%E5%8F%96--%E6%8A%80%E8%83%BD%E7%BB%93%E6%99%B6)

Agent 不会"聊完就忘"，也不会每次都从零开始——它像写维基百科一样自动整理记忆，像师傅教徒弟一样把成功经验固化成可复用技能。

---

#### 记忆提取：Agent 怎么记住东西

[https://github.com/yang1999code/controllable-agent#%E8%AE%B0%E5%BF%86%E6%8F%90%E5%8F%96agent-%E6%80%8E%E4%B9%88%E8%AE%B0%E4%BD%8F%E4%B8%9C%E8%A5%BF](https://github.com/yang1999code/controllable-agent#%E8%AE%B0%E5%BF%86%E6%8F%90%E5%8F%96agent-%E6%80%8E%E4%B9%88%E8%AE%B0%E4%BD%8F%E4%B8%9C%E8%A5%BF)

**普通聊天记录的毛病**：是流水账——"用户说了A，AI回了B，用户又问C..."。没法按关键词搜，更没法提炼成知识。聊 10 轮后第 11 轮已经忘了第 1 轮。

**你的 Agent 怎么做**：每次任务完成后，后台自动跑一次记忆提取。

```
你在 Web 问："帮我写个回文判断函数"
    ↓
模型输出代码（流式打字机效果）
    ↓
输出结束 → Memorizer 启动（右侧粉色头像亮起）
    ↓
1. 打包对话（你说了啥 + Agent 回了啥）
2. 调一次 LLM（轻量调用，~200 token）
3. LLM 提取��结构化摘要 → 写入 digest 文件
4. 更新关键词倒排索引（下次搜"回文"能找到）
5. 同一主题攒够 5 条 → 自动合并成 wiki 知识页
```

生成的文件 `d_006.md` 长这样：

```
---
confidence: 0.9
domains:
- conversation
facts:
- 用户要求编写判断回文字符串的Python函数
- 助手已接受任务并准备提供代码
id: d_006
level: digest
tags: [Python, 回文字符串, 函数]
task_summary: 用户请求编写判断回文字符串的Python函数
---

## 任务摘要
用户请求编写回文判断函数，助手提供了实现。
```

**digest → wiki 两层合并**：

```
d_001.md ─┐
d_003.md ─┤  同主题攒够 5 条
d_007.md ─┼──────────────────→ wiki/python_stack.md（完整知识页）
d_011.md ─┤
d_015.md ─┘
```

合并时自动去重、按时间线组织、冲突信息以最新为准。

**四域分类**：Agent 的记忆按用途分四个文件夹——

- `conversation`：对话内容（"上次聊过 Python"）
- `profile`：用户档案（"这个用户偏好中文回答"）
- `agent_view`：Agent 自身视角（"我上次用 grep 搜代码比较快"）
- `task`：任务记录（"完成了回文函数的开发"）

**中文分词检索**：用 jieba 分词（"回文判断函数"拆成"回文"/"判断"/"函数"三个词建索引），没装 jieba 自动降级为每两个字一组。

**存储位置**（人可直接打开看）：

```
~/.agent-memory/
├── digest/           # 每次任务的摘要
│   ├── d_001.md
│   └── ...
├── wiki/             # 合并后的知识页
├── index.md          # 倒排索引（关键词 → 文件路径）
└── domain/           # 四域分类
```

---

#### 技能结晶：Agent 怎么"学会"怎么做

[https://github.com/yang1999code/controllable-agent#%E6%8A%80%E8%83%BD%E7%BB%93%E6%99%B6agent-%E6%80%8E%E4%B9%88%E5%AD%A6%E4%BC%9A%E6%80%8E%E4%B9%88%E5%81%9A](https://github.com/yang1999code/controllable-agent#%E6%8A%80%E8%83%BD%E7%BB%93%E6%99%B6agent-%E6%80%8E%E4%B9%88%E5%AD%A6%E4%BC%9A%E6%80%8E%E4%B9%88%E5%81%9A)

**记忆和技能的区别**：

- 记忆记的是**"发生过什么"** → "上次写了个回文函数，用了双指针法"
- 技能记的是**"该怎么做"** → "写回文函数的步骤：1) 读需求 2) 写函数 3) 写测试 4) 跑测试"

**工作流程**：

```
Agent 回复完你（比如写完一段代码）
    ↓
SkillCrystallizer 扫描回复文本
    ↓
找到 ```skill 代码块？
    ↓ 有
验证三步：
  → 必要字段检查：name（技能名）/ trigger_condition（触发条件）/ steps（步骤）
  → 步骤可执行性：每一步都要指定 tool（用什么工具）
  → 三维质量评分：

    清晰度 (100分)  +  完整性 (100分)  +  可操作性 (100分)
    描述够不够清楚      步骤数够不够         每步有没有指定工具

    总分 ≥ 60 → ✅ 持久化 YAML
    总分 < 60 → ❌ 丢弃
    ↓
写入 .agent-base/skills/回文函数.yaml
    ↓
下次你问类似问题 → 自动匹配 → 直接复用这个技能
```

**动态淘汰机制**：技能不是存了就永远在——

```
用成功了 → +10 分
用失败了 → -20 分
用了很多次 → 分数波动越来越小（越用越稳定）
质量 < 30 且用过 ≥3 次 → 自动删除
```

这保证了**只有真正好用的技能才会长期保留**。

**Web 端实时可见**：你在右侧 Memorizer 卡片能看到每一阶段：

| 阶段 | 显示 |
|---|---|
| 正在提取记忆 | 🩷 正在提取记忆... |
| 记忆存储完成 | ✅ 提取记忆 #d_006 |
| 正在提取技能 | 🩷 正在提取技能... |
| 结晶完成 | ✅ 结晶 2 个技能: 回文函数, 字符串测试 |

---

详见 [我的记忆改进.md](https://github.com/Yang1999code/controllable-agent/blob/master/%E6%88%91%E7%9A%84%E8%AE%B0%E5%BF%86%E6%94%B9%E8%BF%9B.md)。

---

## 技术架构

[https://github.com/yang1999code/controllable-agent#%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84](https://github.com/yang1999code/controllable-agent#%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84)

三层单向依赖，绝不反向：

```
ai/          ← 核心类型（Message, Tool, Context），零依赖
agent/       ← 20 个接口实现（循环, 工具, 记忆, Hook, 运行时...）
app/         ← CLI + 15 内置工具 + 模型适配器 + 配置 + TUI
```

**核心信条**：

- **分层单向依赖** -- `ai/` 零依赖 -> `agent/` 核心逻辑 -> `app/` 具体实现，绝不反向
- **接口先于实现** -- 每个模块先定义 ABC/Protocol，再写具体类
- **安全网内建而非外挂** -- 工具预算、API 重试、Hook 隔离、token 预算从第一行代码就在
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

