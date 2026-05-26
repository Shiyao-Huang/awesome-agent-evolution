# Anthropic 任职变动与人才流动分析

- content_timestamp: 2026-05-26
- scope: talent-movement, self-evolution-researchers
- evidence_level: web-search + public reporting
- output: work/research/anthropic-talent-movement.md

## 0. 方法边界

本报告基于 2026-05-26 的三轮 web 搜索结果。证据等级：直接证据（公开新闻、个人声明、行业报告）、推断、未验证。

## 1. Anthropic 研究团队格局

### 1.1 核心定位
Anthropic 定位为安全导向的 AI 实验室，2024-2026 年从基础模型研究向 Agent 系统扩展：
- **Claude Code** (CLI 编程 Agent) 和 **Agent Teams** (多 Agent 协作) 成为核心产品方向
- **SICA 论文** (Self-Improving Code Agents, arXiv 2504.15228) 表明自进化代码 Agent 研究路线
- **Harvard Business School** 将 Anthropic 从 LLM 提供商向 Agent 平台的转型作为商学院案例

### 1.2 自进化关联方向

| 方向 | 产品/论文信号 | 自进化机制关联 |
|---|---|---|
| Claude Code | CLI Agent，代码生成+编辑+测试闭环 | M4 (Code Self-Modification) |
| Agent Teams | 多 Agent 协作框架 | M6 (Multi-Agent Co-Evolution) |
| SICA 论文 | Self-Improving Code Agents | M2 (Feedback-Refine) + M4 |
| Constitutional AI | 安全对齐框架 | M10 (Safety/Governance) |
| RLHF/RLAIF | 偏好学习 | M7 (Reward/RL Self-Play) |

## 2. 关键人才变动

### 2.1 重要加入
| 人物 | 背景 | 加入时间 | 角色 |
|---|---|---|---|
| **Andrej Karpathy** | OpenAI 联合创始人 → Tesla AI → Eureka Labs | 2025 | Claude 预训练研究 |

### 2.2 重要离开
| 人物 | 时间 | 声明/去向 | 证据 |
|---|---|---|---|
| **Mrinank Sharma** | 2026-02 | "world in peril" 公开声明 | BBC, 个人社交媒体 |

### 2.3 行业级格局 (SignalFire 2025)

| 流向 | 信号 |
|---|---|
| OpenAI → Anthropic | **8x 净流入** (OpenAI 员工离开去 Anthropic 是反向的 8 倍) |
| DeepMind → Anthropic | 中等流入 |
| 行业整体 | AI 研究者辞职趋势，多引用安全关切 |

## 3. 自进化影响

1. **M10 人才集中**：Anthropic 可能拥有最强的安全对齐团队
2. **M4 产品化领先**：Claude Code 是最接近生产级代码自修改 Agent 的产品
3. **安全辞职潮验证 P025/P033 痛点**：Sharma 离开反映 M10 维度内部张力

## 4. 已知 vs 推断 vs 未验证

**已知**: Karpathy 加入领导预训练; Sharma 2026-02 离开; 8x 净流入 (SignalFire)
**推断**: Karpathy 可能间接影响 Agent 方向; 安全人才集中化
**未验证**: 内部自进化研究团队规模; Karpathy 是否参与 Agent 项目

## 引用来源
- SignalFire 2025 AI Talent Report
- BBC (Mrinank Sharma)
- Anthropic 公开产品发布
- SICA (arXiv 2504.15228)
- raw-social/mom-test (P025, P033)
