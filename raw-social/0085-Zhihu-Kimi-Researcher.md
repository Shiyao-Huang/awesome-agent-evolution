# Kimi-Researcher：端到端强化学习驱动自主智能体的多轮搜索与推理突破

- URL: https://www.zhihu.com/tardis/zm/art/1920613869799314188
- Platform: Zhihu
- Extraction status: ok
- content_timestamp: 2025-06
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-06

## Raw Content

## Kimi-Researcher：端到端强化学习驱动自主智能体的多轮搜索与推理突破

**Source**: https://www.zhihu.com/tardis/zm/art/1920613869799314188

---

[https://www.zhihu.com](https://www.zhihu.com)

![BrandImg](https://pica.zhimg.com/v2-d20e0614b7dde9a544e0993703aa57ed_r.jpg?source=172ae18b&consumer=ZHI_MENG)
Kimi-Researcher：端到端强化学习驱动自主智能体的多轮搜索与推理突破

![AI极客熊](https://pic1.zhimg.com/v2-f0a710ddb24288b1f5e30a8c60a9097d_l.jpg?source=57bf9c9b&consumer=ZHI_MENG)

AI极客熊

读万卷书，行万里路，结交天下友

## Kimi-Researcher：端到端强化学习驱动自主智能体的多轮搜索与推理突破

本文聚焦Kimi-Researcher，这一通过端到端强化学习（RL）训练的自主智能体，在多轮搜索推理中展现卓越能力。它在复杂基准测试中表现亮眼，为智能体发展提供新思路，一起来探索其技术奥秘与成果。

论文标题：Kimi-Researcher: End-to-End RL Training for Emerging Agentic Capabilities
  来源：[End-to-End RL Training for Emerging Agentic Capabilities](https://link.zhihu.com/?target=https%3A//moonshotai.github.io/Kimi-Researcher/)

PS: 整理了LLM、量化投资、机器学习方向的学习资料，关注同名公众号 「 亚里随笔」 即刻免费解锁

### 研究背景与目标

- 智能体发展瓶颈：传统基于工作流的系统依赖特定LLM版本，需频繁手动更新，灵活性与可扩展性受限；模仿学习（SFT）受数据标注难题制约，尤其在动态环境下长周期任务中表现不佳。
- 研究目标：通过端到端强化学习训练单一模型，实现智能体自主解决复杂问题，提升其在多步规划、推理及工具使用方面的能力。

### Kimi-Researcher核心能力与性能表现

- 多轮搜索推理能力：平均每任务执行23步推理，探索超200个URL，在Humanity's Last Exam（HLE）测试中，Pass@1分数达26.9%，Pass@4准确率为40.17%，从初始8.6%大幅提升，验证端到端RL对智能体智能提升的显著作用。
- 复杂基准测试表现：在xbench-DeepSearch中Pass@1达69%（4次运行平均），超越带搜索工具的o3模型；在多轮搜索推理基准（FRAMES、Seal-0）和事实信息基准（SimpleQA）中均有出色表现。

### 技术框架与方法

工具整合

利用并行实时内部搜索工具、交互式网页任务文本浏览器工具及自动化代码执行编码工具。

端到端RL训练：

- 训练数据：针对高质量数据集稀缺问题，构建工具为中心的挑战性任务与推理密集型任务，通过全自动流水线大规模生成并验证问答对，引入可靠GT提取方法与严格过滤机制。
- RL算法：主要采用REINFORCE算法，强调在线训练，通过策略丢弃部分负样本控制负样本影响，使用包含格式奖励和正确性奖励的结果奖励，应用伽马衰减因子提升训练效率。
- 上下文管理：设计上下文管理机制，使模型保留重要信息、丢弃不必要文档，将单次rollout轨迹延长至50轮以上，实验显示带此机制训练的模型多使用30%轮次，助力获取更多信息提升性能。

大规模智能体RL基础设施：

- 全异步rollout：实现带可扩展类Gym接口的全异步rollout系统，服务器架构并行高效协调执行体rollout、环境交互与奖励计算，大幅优于同步系统。
- 轮次级部分rollout：针对长尾问题设计该机制，将超时间预算任务保存至重放缓冲区，后续用更新模型权重执行剩余轮次，结合适配算法实现至少1.5倍rollout加速。
- 鲁棒沙盒环境：统一沙盒架构消除容器间开销并保持隔离，基于Kubernetes的混合云架构实现零停机调度与动态资源分配，通过模型上下文协议（MCP）实现智能体与工具通信，支持多副本部署保障生产环境容错与高可用。

### 涌现的智能体能力

- 冲突信息处理：面对多源冲突信息，通过迭代假设细化与自我修正解决不一致。如在“《Green-Clothed Girl》中学者Yu Jing与她对话句子数量”问题中，交叉引用不同版本原文与译文，纠正误将叙述句作对话句的情况，最终基于权威原文确定答案。
- 严谨推理习惯：即便看似简单问题，也会额外搜索与交叉验证信息后再作答，展现谨慎严谨特质。

### 结论与展望

Kimi-Researcher通过端到端RL训练，在多轮搜索推理等方面取得先进结果，证明该方法对提升智能体智能的有效性。同时，动态环境适应、长周期任务处理等仍为挑战，未来可在数据生成、算法优化及基础设施完善等方面进一步探索，推动智能体技术发展。

编辑于 2025-06-23 · 著作权归作者所有
