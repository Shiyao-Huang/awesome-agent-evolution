# GenericAgent: 极简自进化 Agent

> GitHub: https://github.com/lsdefine/GenericAgent
> Stars: 4,400+ | 语言: Python | License: 开源
> 技术报告: arXiv:2604.17091

---

## 核心定位

**极简哲学**: 仅 ~3K 行核心代码，9 个原子工具 + ~100 行 Agent Loop。不预载技能，通过使用自动"结晶"出技能树。GitHub Trending 冠军项目。

## 核心数据

| 指标 | 值 |
|------|-----|
| 核心代码 | ~3,000 行 |
| Agent Loop | ~100 行 |
| 原子工具 | 9 个 |
| 上下文窗口 | <30K tokens |
| 技能生长 | 从 3.3K 行种子自动生长 |

## 技术栈

- **语言**: Python
- **兼容 LLM**: Claude, Gemini, Kimi, MiniMax 等
- **平台**: 跨平台（含移动端 ADB 支持）
- **控制范围**: 浏览器、终端、文件系统、键盘鼠标、屏幕视觉、移动设备

## 自进化机制

### 技能结晶 (Skill Crystallization)

```
任务输入 → Agent 执行 → 成功路径 → 自动抽象为可复用 Skill
                                ↓
                         加入个人技能树
```

- 每次解决新任务，自动将执行路径**结晶为可复用技能**
- 使用越久，技能越多 → 形成从 3K 行种子代码长出的个人技能树
- **Self-Bootstrap 证明**: 整个项目从 git init 到每个 commit 都由 GenericAgent 自主完成

### 核心特性

| 特性 | 描述 |
|------|------|
| 自进化 | 自动将每个任务结晶为 Skill |
| 极简架构 | ~3K 行核心代码，无复杂依赖 |
| 强执行 | 注入真实浏览器（保留登录状态） |
| Token 高效 | <30K 上下文 vs 其他 Agent 的 200K-1M |
| 动态工具 | 9 原子工具覆盖系统级控制 |

## 与 Self Evolve 的关联

- **极简自进化的标杆**: 证明自进化不需要复杂框架
- **技能树生长模式**: 类似 ELL 的技能学习，但更轻量
- **社区影响力**: 4.4K stars, Datawhale 教程, GitHub Trending 第一
- **Sophub 技能共享**: 外部技能共享平台

## 本地路径

`repos/lsdefine__genericagent/`
