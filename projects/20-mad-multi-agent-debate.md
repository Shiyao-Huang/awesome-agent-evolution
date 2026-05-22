# MAD - 多Agent辩论框架
- **仓库**: Skytliang/Multi-Agent-Debate
- **GitHub**: https://github.com/Skytliang/Multi-Agent-Debate
- **Stars**: ~1,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2024-08
- **模式**: 反馈-精炼

## 概述
MAD（Multi-Agent Debate）框架通过让多个大语言模型Agent进行结构化的多轮辩论来提升推理质量。辩论机制迫使Agent从不同角度审视问题，通过观点碰撞和相互质疑来发现单一Agent容易忽略的盲点，从而显著提升复杂推理任务的准确率。

## 核心特性
- 结构化辩论流程：定义明确的辩论轮次、发言顺序和回应规则
- 多角色对抗：不同Agent可以持有不同立场，通过对抗性辩论深入分析问题
- 裁判机制：引入裁判Agent对辩论过程进行评判，综合各方观点形成最终结论
- 推理增强：通过辩论中暴露的逻辑漏洞和知识盲点，提升最终输出的推理质量
- 可配置的辩论策略：支持不同的辩论拓扑结构（一对一、多对多、循环等）

## 技术栈
- Python 3.8+
- OpenAI API
- LangChain（可选）

## 与 Self Evolve 的关联
MAD 的辩论机制为自我进化系统提供了一种质量保证手段——通过多个Agent的对抗性审查，可以更有效地发现输出中的缺陷和不足，这种机制可应用于代码审查、方案评估等自我改进环节，实现更高标准的自我精炼。

## 分类
- **类别**: 多Agent辩论框架
- **标签**: debate, reasoning, multi-agent, adversarial, quality-enhancement, llm-debate
