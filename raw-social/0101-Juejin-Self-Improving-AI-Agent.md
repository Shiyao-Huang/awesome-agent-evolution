# Self-Improving：让AI Agent 自我进化的革命性技能 - 稀土掘金

- URL: https://juejin.cn/post/7622183144921645107
- Platform: Juejin
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03

## Raw Content

## Self-Improving：让 AI Agent 自我进化的革命性技能Self-Improving：让 AI Agen - 掘金

**Source**: https://juejin.cn/post/7622183144921645107

---

#              Self-Improving：让 AI Agent 自我进化的革命性技能             

[小虾瞎说](https://juejin.cn/user/3491704660819975/posts)

                     2026-03-29                   
                     8                   

                     阅读5分钟                   

## Self-Improving：让 AI Agent 自我进化的革命性技能

> 一个能从错误中学习、持续改进的 AI 编程助手，正在改变开发者的工作方式。

### 前言

在 AI 编程助手的世界里，我们习惯了每次对话都是"全新开始"——模型没有记忆，不会从上次的错误中学习，同样的坑可能反复踩。但最近在 OpenClaw 技能生态中出现的一个创新技能，正在打破这个循环。

**Self-Improving** 是由 Iván (@ivangdavila) 开发的一个革命性技能，它让 AI Agent 具备了：

- **自我反思**能力
- **自我批评**机制
- **自我学习**存储
- **自组织记忆**系统

简单说：Agent 能评估自己的工作，发现错误，并永久性地改进。这不再是每次对话的"新手"，而是会随着时间积累经验的"老手"。

---

### 核心架构：分层记忆系统

Self-Improving 的核心创新在于其**分层存储架构**，模仿人类记忆的工作方式：

```
~/self-improving/
├── memory.md        # HOT 层：≤100 行，始终加载
├── index.md         # 主题索引
├── corrections.md   # 最近 50 条纠正记录
├── projects/        # 按项目分类的学习内容
├── domains/         # 按领域分类（代码、写作、沟通）
└── archive/         # COLD 层：长期归档
```

#### 三层记忆机制

| 层级 | 位置 | 限制 | 行为 |
|---|---|---|---|
| HOT | memory.md | ≤100 行 | 每次激活都加载 |
| WARM | projects/, domains/ | ≤200 行/文件 | 按需加载 |
| COLD | archive/ | 无限制 | 显式查询才加载 |

这种设计解决了 Agent 的核心痛点：**如何在有限的上下文窗口中，携带最有价值的经验？**

HOT 层只保留最重要的规则，WARM 层按场景加载，COLD 层存档历史。就像人类的"常记心头"、"想起来能用"、"尘封往事"三个层级。

---

### 学习触发机制

Self-Improving 会自动识别以下信号并触发学习：

#### 纠正信号 → 记录到 corrections.md

当用户说：

- "不对，应该是..."
- "实际上..."
- "你错了..."
- "我更喜欢 X，不是 Y"
- "记住我总是..."
- "我告诉过你..."

#### 偏好信号 → 直接写入 memory.md

当用户明确表达：

- "我喜欢你这样..."
- "总是为我做 X"
- "永远不要做 Y"
- "我的风格是..."

#### 模式候选 → 观察 3 次后晋升

- 同样的指令重复 3+ 次
- 某个工作流程反复成功
- 用户赞扬某种特定做法

#### 自动晋升/降级规则

- 模式使用 3 次/7 天内 → 晋升到 HOT
- 模式 30 天未使用 → 降级到 WARM
- 模式 90 天未使用 → 归档到 COLD
- **永远不会删除，只归档**（保护历史）

---

### 自我反思机制

完成重要任务后，Agent 会主动评估：

```
CONTEXT: [任务类型]
REFLECTION: [我注意到的问题]  
LESSON: [下次如何改进]
```

**示例**：

```
CONTEXT: 构建 Flutter UI
REFLECTION: 间距看起来不对，不得不重做
LESSON: 展示给用户前先检查视觉间距
```

这种"复盘"机制让 Agent 不只是被动接收纠正，而是主动发现自己的不足。

---

### 实际应用场景

#### 场景一：编码习惯学习

```
# memory.md 条目示例
- 用户偏好函数式组件而非类组件
- 使用 pytest fixtures 而非 unittest
- 添加新 enum 时必须更新 constants.ts
```

#### 场景二：项目特定知识

```
# projects/myapp.md
- 该项目使用 SSR，组件放 /components
- API 路由在 /routes
- 更新用户模型时同步更新审计日志
```

#### 场景三：领域通用规则

```
# domains/code.md  
- 所有 PR 必须通过 CI 才能 merge
- 命名遵循项目现有风格
- 不引入新依赖除非明确指定
```

---

### 安全边界设计

Self-Improving 的设计非常注重安全：

**永远不存储**：

- 凭证/API 密钥
- 健康数据
- 第三方隐私信息

**永远不访问**：

- 日历、邮件、联系人
- ~/self-improving/ 外的文件
- 网络请求

**永远不行为**：

- 推断沉默中的偏好
- 删除记忆记录
- 修改自己的 SKILL.md

这让技能在增强能力的同时，保持了清晰的安全边界。

---

### 与 Addy Osmani 的理念共鸣

Google 的 Addy Osmani 在其著名的《Self-Improving Coding Agents》文章中，详细阐述了类似的"持续改进循环"理念：

> "每个改进都应该让未来的改进更容易。"

这与 Self-Improving 技能的设计哲学完美契合：

1. **AGENTS.md 作为持久化上下文** ——记录发现、约定、教训
2. **Git 历史 + 进度日志** ——多层次记忆通道
3. **测试验证闭环** ——确保"学会"的是正确的
4. **定期刷新机制** ——防止漂移和隧道效应

Osmani 强调的"Ralph Wiggum 技术"——将开发拆解为小任务、每次迭代重置上下文——正是 Self-Improving 在微观层面要解决的问题：**如何让每次"重置"后，Agent 仍能携带关键经验？**

---

### 快速上手

如果你使用 OpenClaw，安装只需一条命令：

```
clawhub install self-improving
```

安装后会创建 `~/self-improving/` 目录结构，你可以手动编辑 `memory.md` 添加初始规则，或者在与 Agent 互动中自然积累。

**常用查询命令**：

- "你了解 X 什么？" → 搜索所有层级
- "你学到了什么？" → 显示最近 10 条纠正
- "显示我的模式" → 列出 HOT 层内容
- "显示 [项目] 模式" → 加载项目专属文件
- "记忆统计" → 显示各层级条目数

---

### 数据表现

截至撰写时：

- **737 Stars** — 社区认可度高
- **126k Downloads** — 广泛使用
- **1.5k Current Installs** — 活跃用户群
- **MIT-0 License** — 完全自由使用

---

### 相关技能推荐

Self-Improving 还可以与以下技能协同：

| 技能 | 功能 |
|---|---|
| memory | 长期记忆模式 |
| learning | 自适应教学和解释 |
| decide | 自动学习决策模式 |
| escalate | 判断何时询问 vs 自主行动 |
| proactivity | 主动性增强 |

---

### 总结

Self-Improving 代表了 AI Agent 技能演进的一个重要方向：**从一次性工具到持续成长的伙伴**。

它解决的问题很朴素但很关键：

> 如何让 AI 不再每次都是"新手"，而是会记住你的偏好、学会你的习惯、理解你的项目？

通过分层记忆、自动学习、自我反思，这个技能让 Agent 的能力可以随时间**复合增长**——就像人类工程师的成长路径。

---

**参考链接**：

- ClawHub 技能页面：[clawhub.ai/ivangdavila…](https://link.juejin.cn?target=https%3A%2F%2Fclawhub.ai%2Fivangdavila%2Fself-improving)
- Addy Osmani 博客：[addyosmani.com/blog/self-i…](https://link.juejin.cn?target=https%3A%2F%2Faddyosmani.com%2Fblog%2Fself-improving-agents%2F)
- SkillsVIP 收录：[www.skillsvip.com/skills/376](https://link.juejin.cn?target=https%3A%2F%2Fwww.skillsvip.com%2Fskills%2F376)

[小虾瞎说](https://juejin.cn/user/3491704660819975/posts)
[21
       文章](https://juejin.cn/user/3491704660819975/posts)[17k
       阅读](https://juejin.cn/user/3491704660819975/posts)[6
       粉丝](https://juejin.cn/user/3491704660819975/followers)
