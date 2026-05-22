# Agent Zero: 动态自进化 Agent 框架

> GitHub: https://github.com/agent0ai/agent-zero
> Stars: 13,200+ | 语言: Python | License: 开源
> 网站: https://agent-zero.ai

---

## ⚠️ 重要区分

**Agent Zero ≠ Agent0**。两个完全不同的项目：
- **Agent0** (aiming-lab): 学术研究, UNC/Salesforce/Stanford, 零数据自博弈
- **Agent Zero** (agent0ai): 社区框架, 13.2K stars, 动态工具创建

## 核心定位

**非预编程的有机 Agent 框架**。Agent 获得完整 Linux 系统控制权，动态创建工具而非使用预定义工具。通过记忆和经验持续学习。

## 技术栈

- **运行环境**: Docker (Kali Linux)
- **语言**: Python
- **控制能力**: 终端、浏览器、文件系统、代码执行、桌面 GUI、LibreOffice
- **部署**: 一行命令启动 (`curl -fsSL https://bash.agent-zero.ai | bash`)

## 核心机制

### 动态工具创建

```
任务 → Agent 分析需求 → 自行创建/安装工具 → 使用工具解决问题
```

- 不预定义工具列表，Agent 根据任务需要自行构建
- 工具被保存到记忆中，下次可直接复用

### 系统级控制

- **Canvas**: 可视化工作面板，实时查看 Agent 操作
- **Desktop**: 嵌入式 Linux 桌面，支持 LibreOffice 协作
- **Browser**: 注入式浏览器控制
- **Memory**: 持久化记忆系统

### 自进化特性

1. **工具进化**: 自动创建并积累工具库
2. **记忆积累**: 任务经验存储为长期记忆
3. **有机增长**: 使用越多能力越强

## 性能指标

- **Stars**: 13,200+ — 社区热度最高
- **部署方式**: Docker 一键部署
- **上下文**: 完整 Linux 环境

## Self Evolve 关联

- **工具自创建**: 核心自进化能力——Agent 自己决定需要什么工具
- **社区标杆**: 最高 stars 的自进化 Agent 项目
- **有机增长理念**: 与 GenericAgent 的"不预载技能"理念一致
- **实际应用导向**: 面向真实任务，非学术 Benchmark

## 本地路径

`repos/agent0ai__agent_zero/`
