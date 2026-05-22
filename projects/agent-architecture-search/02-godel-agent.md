# Gödel Agent: 自引用 Agent 框架

> GitHub: https://github.com/Arvid-pku/Godel_Agent
> Stars: 300+ | 语言: Python | License: 学术
> 论文: arXiv:2410.04444 | 会议: **ACL 2025**

---

## 核心定位

首个**完全自引用** Agent 框架。Agent 通过 monkey patching 在运行时读写自身内存和代码，实现递归自改进——不依赖预定义架构，完全自主修改自己的算法。

## 技术栈

- **语言**: Python
- **依赖**: OpenAI API
- **核心机制**: Monkey Patching（运行时代码注入）

## 核心机制

### Monkey Patching 自引用

```python
# Agent 通过 monkey patching 修改自身：
# 1. 读取运行时内存 → 自我感知
# 2. 修改运行时代码 → 自我修改
# 3. 错误追踪反馈 → 自我纠错
```

### 三种 Agent 范式对比

| 范式 | 手工设计 | ADAS | Gödel Agent |
|------|----------|------|-------------|
| 设计者 | 人类 | 元 Agent | Agent 自身 |
| 搜索空间 | 固定 | 代码空间 | 运行时代码 |
| 自主性 | 低 | 中 | **最高** |

### 关键特性

- **自感知**: Agent 读取自己的代码和状态
- **自修改**: Agent 重写自己的决策逻辑
- **回滚安全**: 修改失败可回退
- **递归改进**: 改进过程本身可以被改进

## 性能

- 在多个任务上**超越手工设计 Agent**
- 跨域泛化：不同任务自适应不同策略
- 代码级自修改，非 prompt 级

## 项目结构

```
Godel_Agent/
├── src/
│   ├── main.py            # 入口
│   ├── agent_module.py    # 核心实现（自感知+自修改+执行）
│   ├── task_*.py          # 各任务评估脚本（基于 ADAS）
│   ├── logic.py           # 存储生成的 Agent 代码
│   └── goal_prompt.md     # 目标提示
├── datasets/              # 实验数据集
└── results/               # 自优化代码输出
```

## Self Evolve 关联

- **最高自主性**: 在 ADAS 基础上进一步让 Agent 自己修改自己
- **受 Gödel Machine 启发**: Schmidhuber 2003 年的理论 → 实际实现
- **作者**: Xunjian Yin (PKU), William Yang Wang (UCSB)
- **任务评估脚本**: 直接复用 ADAS 代码

## 本地路径

`repos/arvid_pku__godel_agent/`
