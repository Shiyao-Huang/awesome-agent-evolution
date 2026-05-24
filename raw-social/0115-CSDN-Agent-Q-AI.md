# Agent Q：自主 AI 智体的高级推理和学习

- URL: https://blog.csdn.net/yorkhunter/article/details/141309699
- Platform: CSDN
- Extraction status: ok
- content_timestamp: 2026-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05

## Raw Content

## Agent Q：自主 AI 智体的高级推理和学习_agent q: advanced reasoning and learning for auton-CSDN博客

**Source**: https://blog.csdn.net/yorkhunter/article/details/141309699

---

# Agent Q：自主 AI 智体的高级推理和学习

最新推荐文章于 2026-05-20 23:07:53 发布

原创

最新推荐文章于 2026-05-20 23:07:53 发布

·

1.9k 阅读

·
![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png)
                       42                   

·
20
·

CC 4.0 BY-SA版权

                                   版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。                       

文章标签：

[#人工智能](https://so.csdn.net/so/search/s.do?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#语言模型](https://so.csdn.net/so/search/s.do?q=%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#深度学习](https://so.csdn.net/so/search/s.do?q=%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)

[大模型
                                    同时被 2 个专栏收录](https://blog.csdn.net/yorkhunter/category_12670466.html)

1228 篇文章

订阅专栏

[智能体](https://blog.csdn.net/yorkhunter/category_12675024.html)

1024 篇文章

订阅专栏

24年8月来自MultiOn AGI公司和斯坦福大学的论文“”Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents“。

大语言模型 (LLM) 在需要复杂推理的自然语言任务中表现出了卓越的能力，但它们在交互式环境中的智体、多步推理中的应用仍然是一项艰巨的挑战。传统的静态数据集监督预训练，无法实现在网络导航等动态设置中执行复杂决策所需的自主智体能力。之前对专家演示监督微调弥补这一差距的尝试，经常受到复合错误和有限探索数据的影响，导致策略结果不理想。为了克服这些挑战，提出了一个框架Agent Q，引导式蒙特卡洛树搜索 (MCTS) 搜索与自我批评机制和直接偏好优化 (DPO) 算法的去策略（off-policy）变体，对智体交互进行迭代微调相结合。

该方法允许 LLM 智体从成功和不成功的轨迹中有效地学习，从而提高它们在复杂、多步推理任务中的泛化能力。在 WebShop 环境（一个模拟电子商务平台）中验证了该方法，在该环境中，它始终优于行为克隆和强化学习的微调基线，并且在具备在线搜索能力时超越了人类的平均表现。在现实世界的预订场景中，该方法在一天的数据收集后将 Llama-3 70B 模型的零样本性能从 18.6% 提高到 81.7%（相对增长了 340%），并通过在线搜索进一步提高到 95.4%。

大语言模型 (LLM) 的最新进展代表了人工智能的重大飞跃。ChatGPT（Schulman，2022）、Gemini（Anil，2023）、Opus（Anthropic，2024）和 LLaMA-3（Touvron，2023）等前沿模型展示了有希望的推理能力，在许多领域接近人类的平均表现。这些突破将 LLM 的实用性从传统的聊天和基于文本的应用程序扩展到更动态、智体化的角色，在这些角色中，它们不仅可以生成文本，还可以在包括代码和软件工程（Holt，2024；Jimenez，2024；Yang，2024；Zhang，2024d）、设备控制（Chen and Li，2024；Wang，2024a；Zhang，2023）和 Web 应用程序（Deng，2023；Gur，2024；Hong，2023；Lai，2024a；Zhou，2024b）等多种环境中自主采取行动。然而，尽管取得了这些进步，但仍然存在重大挑战：LLM 仍然难以在交互式多步骤环境中有效推广，因为它们并非针对此类应用进行过原生训练。即使对于当前这一代最强大的一些模型，例如 GPT-4（Achiam，2023 年），情况也是如此。

越来越多的智体试图解决这些问题；然而，这些工作主要集中在围绕现有模型基于提示学习或静态数据集的有限微调构建框架，因此受到基础模型的推理和决策能力的限制。推理和规划确实已被强调为当前 LLM 的核心挑战。自从关于思维链推理的开创性研究（Wei，2022）以来，人们已经做出了巨大努力，通过基于提示的策略来提高这些能力（Kojima，2022；Qiao，2023；Wang，2023；Yao，2023a）。虽然这些方法很成功，但它们仍然受到基础模型性能的限制。另一个研究方向探索了微调方法（Pang，2024；Zelikman，2022），最近又将它们与推理-时间的搜索提示（Yao，2023a）相结合，产生细粒度的反馈。并行的工作（Hwang，2024；Tian，2024；Xie，2024；Zhang，2024e）利用搜索算法产生的痕迹，并将其与优化方法（Rafailov，2023；Zelikman，2022）相结合，显著提升能力，特别是在数学问题解决和代码生成方面。
 本文提出的方法，如图所示：用蒙特卡洛树搜索 (MCTS) 来指导轨迹收集，并使用直接偏好优化 (DPO) 迭代改进模型性能。从左侧开始，从数据集中的任务列表中抽取用户查询。用 置信度上限（UCB1）作为启发式方法迭代扩展搜索树，平衡不同操作的探索和利用。存储树中每个节点获得的累积奖励，图中深绿色表示奖励较高，深红色表示奖励较低。为了构建偏好数据集，计算 MCTS 平均 Q 值和反馈语言模型生成分数的加权分数，构建 DPO 的对比对。该策略已优化，可以迭代改进。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/3d36cf5bbadb403cad05c4a4b2fb63cb.png)

一个智体的观察 o𝑡 是用户和 Web 浏览器给出的命令/信息。第一个观察 o1 是用户文本指令。后续观察包括来自浏览器的网页，以 HTML DOM 格式表示。有时，对于某些任务，智体可能会要求用户确认/反馈，这也成为观察的一部分。

而智体的动作 a𝑡 是复合的，基于智体的历史 h𝑡。基本方法是带有初步规划步骤 PlanReAct (Liu et al. 2023)的ReAct 智体 （Yao et al. 2023b)，并带有一些附加组件。

将步骤动作 a𝑡 表示为一个多元组，包括第一步的规划、思维、环境和解释动作，以及后续步骤的思维、环境和解释动作。

如图所示：为 Agent 提供以下输入格式，包括系统提示、执行历史、当前观察（以 DOM 表示）以及包含目标的用户查询。将 Agent 的输出格式分为总体分步规划、思维、命令和状态代码。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/23efe84434bb4ec2b3a6ad26f4143fc8.png)

智体的状态是网络的当前状态，可能无法观察到。在 POMDP 中，还需要构建一个智体记忆组件 h𝑡。先前的工作使用了观察和操作的整个轨迹，但是 HTML DOM 可能长达数十万个tokens。此外，现实的网络任务可能需要比大多数先前工作使用的静态基准，例如 WebShop （Yao 2022) 和 WebArena （Zhou 2024b)）更多的交互。由于上下文窗口有限、潜在的分布不均问题以及实际的推理速度和成本，这使得使用完整的网络轨迹变得不切实际。相反，将智体的历史表示构建为 h𝑡 = (a1, . . . , a𝑡−1, o𝑡)。也就是说，智体历史由迄今为止生成的动作和当前浏览器状态组成。也将其称为智体状态。尽管只有环境动作用于与浏览器交互，还是构建智体思维和解释动作，以充当内心独白的一种形式 （Huang 2022b)，并充分表示其状态和意图。这用明显更紧凑的历史表示。虽然只有环境动作会影响浏览器状态，但规划、推理和解释组件会由于条件而影响后续决策。由于这个原因，当优化智体时，会计算复合动作的可能性。

经典的 RLHF 使用了策略梯度类的算法，例如 PPO（Schulman 2017)，但是，它们很复杂并且需要在线数据，在智体设置中自主收集这些数据可能成本高昂/危险。虽然 PPO 在之前的 Web 智体应用中取得了一些成功 （Nakano 2021)。上述问题在很大程度上使得该方法不适用于信息检索以外的一般 Web 任务。

强化微调 (RFT) 算法（Gulcehre 2023)（Singh 2024)（Yuan 2023)（Zelikman 2022) 因其简单性和可扩展性而越来越受欢迎。这些方法会根据某些奖励模型或验证器聚合数据并过滤掉次优样本，以构建不断增长的高质量轨迹数据集 𝒟。

直接偏好优化 (DPO) （Rafailov2023) 是传统 RLHF 优化流程的离线 RL （Levine 2020) 替代方案。它是一种适合智体微调的算法，因为它可以使用完全离线的数据并且不需要在线部署。

算法实际部署的一个瓶颈是优化过程中需要参考模型 𝜋ref，这需要更多的计算资源。相反，在设置中，用一个去-策略（off-policy）重放缓冲区稍微修改一下算法，该缓冲区聚合了轨迹数据以及生成动作的可能性。在优化步骤中，在数据生成（参考）密度下对轨迹元组和相应的可能性进行采样，无需一个单独的参考模型。
 蒙特卡洛树搜索 (MCTS) 算法 （Kocsis & Szepesvári 2006) 与 （Hao 2023) 的算法非常相似，包含四个阶段：选择、扩展、模拟和反向传播。每个阶段在平衡探索和利用的同时迭代改进策略方面都发挥着关键作用。

将 Web 智体执行表述为对​​网页的树搜索。状态表示包括智体历史摘要和当前网页的 文本目标模型（DOM）树。与棋盘游戏如 Chess 或 Go （Silver 2017b)）不同，使用的复杂 Web 智体动作空间是开放格式和可变的。相反，本文用基本模型作为动作提议分布，并在每个节点（网页）上抽样固定数量的可能动作。一旦在浏览器中选择并执行一个动作，就会遍历下一个网页，该网页与更新的历史记录一起成为新节点。

选择阶段使用 MCTS 的置信上边界 (UCB1) 公式（Hao2023) 来选择节点，旨在平衡探索和开发。基于 Web 的环境不提供中间奖励来指导搜索，因此结合基于 AI 的批评，单步级提供过程监督，指导探索过程。用基础模型为每个动作生成反馈分数，其方法，即根据帮助智体完成用户任务的感知效用，对生成的动作进行排名。

对反馈模型进行多次迭代查询，每次从列表中删除上一次迭代中选择的最佳操作，直到对所有操作进行完整排名。完整的 AI 反馈流程如图所示：该策略在推理时间搜索期间的每一步都会提出 K 个动作。批评者也初始化为策略使用的相同基础 LLM 模型，对策略提出的动作进行排名。此排名用于指导扩展后的节点选择，并用于在策略训练期间构建偏好对。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/560d7d5542194362b46f43ef3197cfcb.png)

使用离线 （Snell 2022) 或去-策略 （Chebotar 2023) 强化学习大规模训练大型基础模型，仍然具有挑战性。同时，在线（带-策略）强化学习 （Ouyang 2022); （Stiennon 2022) 不能扩展到真实的交互环境。相反，遵循最近的一系列研究，将 DPO 算法 （Rafailov 2023, 2024) 应用于数学领域多步推理问题的分步级（Chen 2024); （Hwang 2024); （Lai 2024b); （Lu 2024); （Setlur 2024b); （Xie 2024); （Zhang 2024f)。该方法与 （Chen 2024) 的方法最为相似； （Xie 2024)；（Zhang 2024f) 也利用树搜索的分支特性来生成分步级偏好对。

如图所示是所示不同方法在 WebShop（Yao 2022) 任务上的成功率。所有模型均基于 xLAM-v0.1-r （Zhang (2024c)。在 xLAM-v0.1-r 上，强化微调（RFT） 和 DPO 分别将性能提高了 28.6% 至 31.3% 和 37.5%。然而，这些方法仍然落后于 50.0% 的人类平均表现。该方法 Agent Q + MCTS 比基础模型实现显著的提升（相对提升 76.57%），在 WebShop 上的表现优于人类平均表现，成功率为 50.5%。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/0fed51261107485d8e66269f4c3237e6.png)

在 OpenTable 中，智体负责为用户预订餐厅。智体必须在 OpenTable 网站上找到餐厅页面，查找特定日期和时间的预订，选择符合用户偏好的座位选项，并提交用户联系信息，才能成功完成任务。由于 OpenTable 是一个实时环境，很难通过编程来衡量指标，因此用语言模型 GPT-4-V 来收集每条轨迹的奖励，这些奖励基于以下指标：(1) 正确设置日期和时间，(2) 正确设置聚会人数，(3) 正确输入用户信息，(4) 点击完成预订。如果满足上述每个约束条件，则将任务标为已完成。结果监督设置如图所示：在轨迹结束时，将调用 GPT-4-V 评估器根据最终观察和行动历史对智体的表现提供反馈，以确定成功分数。该模型会提示轨迹的简明执行历史和最终状态的屏幕截图。成功指标是二进制 0/1 值。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/8afbe2ff36ad47fca0d99878a35a5590.png)

如图所示是 OpenTable 上不同方法的成功率。除非另有说明，所有模型均基于 LLaMA-3-70B-Instruct （Touvron 2023)。使用 DPO 和 强化微调 （RFT） 与 MCTS 进一步将性能分别从 18.6% 提高到 71.8% 和 84.3%。 Agent Q 本身可达到 81.7%，而 Agent Q + MCTS 明显优于所有其他技术，在 OpenTable 上的性能为 95.4%。

![请添加图片描述](https://i-blog.csdnimg.cn/direct/3e0c97a1b8cb48f29d38fb66c5ae76c5.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-newWhite.png)
         确定要放弃本次机会？       

福利倒计时

*:*

*:*

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-roup.png)
立减 ¥

普通VIP年卡可用

[立即使用](https://mall.csdn.net/vip)

[三谷秋水](https://blog.csdn.net/yorkhunter)

[关注](javascript:;)关注

- 42

点赞

- 

踩

- [20](javascript:;)

                     收藏                   

                   觉得还不错?                   
                     一键收藏                   
![](https://csdnimg.cn/release/blogv2/dist/pc/img/collectionCloseWhite.png)

- 
![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward01.png)
[0](https://blog.csdn.net/yorkhunter/article/details/141309699#commentBox)

评论

- [分享](javascript:;)

复制链接

分享到 QQ

分享到新浪微博

![](https://csdnimg.cn/release/blogv2/dist/pc/img/share/icon-wechat.png)扫一扫                     

- 

举报

举报

专栏目录

[AI Agent 的进化之路：从自主学习迈向全感知决策](https://hai-tang-ai.blog.csdn.net/article/details/145883557)

[高校图书馆高级系统架构师/研究馆员，推动高校AI从概念演示到可评审、可交付、可运维：路线图与立项评审、PoC交付、评测回归与上线运维（Baseline/Eval/Ops）。](https://blog.csdn.net/liu1983robin)

03-05

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1373 

[但 AI Agent 究竟是如何工作的？在这篇文章中，我将以一个人工智能老兵的视角，深入剖析 AI Agent 的核心技术，并展望其令人兴奋的未来发展趋势，带你了解这场正在发生的 AI Agent 革命。从智能家居助手到自动驾驶汽车，从个性化推荐系统到复杂的金融交易模型，AI Agent 正悄然重塑着人机交互的方式，并预示着一个更加智能、高效的世界的到来。这需要 Agent 具备更强的感知能力 (例如，触觉、力觉)、运动控制能力 (例如，机器人操作)、以及在复杂物理环境中进行学习和决策的能力。](https://hai-tang-ai.blog.csdn.net/article/details/145883557)

[Agent Q介绍：具有规划和自愈能力的下一代人工智能代理的研究突破](https://blog.csdn.net/weixin_41446370/article/details/141675548)

[weixin_41446370的博客](https://blog.csdn.net/weixin_41446370)

08-29

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1517 

[近年来，大型语言模型（LLM）的功能已经改变了自然语言处理和理解，取得了令人瞩目的里程碑式成就。尽管取得了这些进步，大型语言模型在交互环境中仍面临巨大挑战，尤其是在需要多步骤推理的任务中，如网络导航。当前的训练方法依赖于静态语言数据集，不足以让这些模型适应真实世界的动态交互。Agent Q的出现是Agent的一个重要里程碑，它将搜索、自我批评和强化学习结合在一起，创造出能够规划和自我修复的最先进的自主网络代理。](https://blog.csdn.net/weixin_41446370/article/details/141675548)

参与评论

您还未登录，请先

登录

后发表或查看评论

[论文速读《Multi-Agent Embodied AI: Advances And Future Directions：多智体具身技术进展与未来发展方向》](https://devpress.csdn.net/v1/article/detail/147889856)

[lovely_yoshino的博客](https://blog.csdn.net/lovely_yoshino)

05-12

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 8506 

[《Multi-Agent Embodied AI: Advances And Future Directions》是一篇由北理工、南大、西安交大、浙大和同济大学联合发表的综述论文，系统回顾了多智体具身AI领域的最新进展。具身AI强调人工智能系统与物理实体的融合，使其能够通过传感器感知环境、通过执行器与环境交互，并根据现实世界的反馈进行学习和调整。论文首先介绍了具身AI的基础概念，包括多智体系统、强化学习等技术，并讨论了单智体情境中的具身AI。随后，论文将讨论扩展到多智体具身AI领域，重点介绍了相关技术和近期](https://devpress.csdn.net/v1/article/detail/147889856)

[Agent Q：AI 智能体新突破，赋予其高级推理和学习能力](https://devpress.csdn.net/v1/article/detail/141269176)

[xx_nm98的博客](https://blog.csdn.net/xx_nm98)

08-17

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1613 

[导读：大型语言模型（LLM）在需要复杂推理的自然语言任务中表现出色，但将其应用于需要多步骤推理的交互式环境（如网页导航）仍然是一个难题。MultiOn 公司引入了 Agent Q，这是一个结合了引导式蒙特卡洛树搜索（MCTS）、自我批评机制和直接偏好优化（DPO）算法的框架，赋予 AI 智能体在动态环境中进行复杂决策和自我修复的能力。](https://devpress.csdn.net/v1/article/detail/141269176)

[麻省理工MIT硬核神课《如何用AI做任何事》：多模态大模型底层逻辑与商业前沿全解析](https://devpress.csdn.net/v1/article/detail/161200904)

[https://blog.csdn.net/xianggll](https://blog.csdn.net/xianggll)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 487 

[麻省理工学院Paul Liang教授的《如何用AI做任何事》彻底重构了人工智能的认知底座。本文为您进行深度拆解，从多模态数据图谱、图网络架构，一路进阶至流匹配生成引擎与交互式智能体。带您穿透技术迷雾，抢占下一代人机协同的科研高地与商业爆发点。](https://devpress.csdn.net/v1/article/detail/161200904)

[2026 AI x Web3 School共学营笔记-Day3
					最新发布](https://blog.csdn.net/wwh1st/article/details/161265421)

[kennyharris](https://blog.csdn.net/wwh1st)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 194 

[接收方RPC节点的接收流程：收到原始交易信息的消息  还有 声称的发送地址 ，还有携带的签名。计算出的地址和发送方地址完全匹配，通过了密码学的校验。区块链发送方流程：首先自己要先创建钱包，有了钱包就有了私钥，也有钱包地址。交易和查询都会产生Gas Fee.只不过查询的Gas Fee太少，RPC节点直接把查询这部分的Gas Fee给我们免掉了。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。这个网站提供了 一个很形象的上车排队的 可视化形容区块链网络运行流程的图片。](https://blog.csdn.net/wwh1st/article/details/161265421)

[网安进入“AI自动攻击时代”，如何用AI守住AI？](https://blog.csdn.net/bjzlxc/article/details/161261064)

[bjzlxc的博客](https://blog.csdn.net/bjzlxc)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 118 

[我们必须把AI植入到防御的最前线，让它去处理那些海量的、瞬息万变的威胁数据，把我们这些人类安全专家，从繁琐的日志分析中解放出来，去处理那些更具战略性、更需要人类智慧的决策。真正的“守住AI”，是让人类站在AI的肩膀上，用更广阔的视野去审视风险，用更深邃的智慧去制定规则，让技术回归到保护文明、守护信任的初衷上来。不过千万别忘了，AI本身也是有漏洞的，攻击者可能会通过“数据投毒”来误导你的防御模型，这种“套娃式”的攻防博弈，才是未来网安最残酷也最精彩的地方，想想都让人有点兴奋又有点头疼。](https://blog.csdn.net/bjzlxc/article/details/161261064)

[AI动态简报之商业洞察篇](https://devpress.csdn.net/v1/article/detail/161185664)

[英辰朗迪aibridge的官方博客](https://blog.csdn.net/aibridge)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 328 

[AI商业化赛道迎来关键突破：深演智能冲刺"港股决策AI第一股"，其"卖结果"模式凸显垂直场景决策智能的商业价值；月之暗面完成136亿元D轮融资，创中国大模型单笔融资纪录，显示资本向头部企业集中。政策推动下，AI智能体在19个场景加速落地，企业级市场达数百亿规模。同时，AI搜索重构商业获客路径，68%消费者依赖AI推荐决策，GEO（生成式引擎优化）市场规模预计2030年突破6000亿，成为企业营销新战场。这些动态共同揭示：AI价值正从技术层面向实际商业成效快速迁移，垂直](https://devpress.csdn.net/v1/article/detail/161185664)

[AI 导出鸭内容格式转换新手实战指南](https://devpress.csdn.net/v1/article/detail/161137100)

[aidssxz的博客](https://blog.csdn.net/aidssxz)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 527 

[AI格式转换工具解决内容导出痛点 摘要：针对AI生成内容导出时格式混乱的问题，"AI导出鸭"等专业工具提供了高效解决方案。这类工具支持无损转换和多格式兼容，能够完美保留代码高亮、表格结构等复杂格式。用户可通过在线平台快速访问，支持剪贴板导入、文件上传等多种方式，并可自定义输出格式参数。工具提供实时预览、批量处理和API自动化等功能，显著提升从对话到正式文档的转换效率，适用于技术文档、会议纪要等多种场景，解决了AI内容应用的"最后一公里"问题。](https://devpress.csdn.net/v1/article/detail/161137100)

[新书速览|信息与通信工程综合实验:自动目标识别专题](https://blog.csdn.net/quanzhankaifaqua/article/details/161193290)

[quanzhankaifaqua的博客](https://blog.csdn.net/quanzhankaifaqua)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1733 

[凭借丰富的教学经验与竞赛评审阅历，编者精准把握学习者痛点与行业需求，将“软硬结合、贴近实战、赛教融合、点面兼顾”四大特色贯穿全书，尤其在赛教融合方面，专门选编两篇中国研究生电子设计竞赛优秀获奖作品，严格遵循竞赛技术论文要求，详细拆解作品的系统结构、难点创新与场景应用，为参赛学生提供最具参考价值的实战范本，助力其快速掌握竞赛核心要求与创作技巧。《信息与通信工程综合实验:自动目标识别专题》内容丰富、实用，叙述简洁、清晰，工程性强，适合作为高等学校电子信息类、自动化类及计算机类专业研究生的。](https://blog.csdn.net/quanzhankaifaqua/article/details/161193290)

[【人工智能与机器人研究】基于改进YOLOv11的野外中草药目标检测](https://devpress.csdn.net/v1/article/detail/161184339)

[汉斯出版社旗下编辑，定期更新计算机前沿论文](https://blog.csdn.net/2501_92218442)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 415 

[本文针对野外中草药检测中的小目标漏检、背景干扰等问题，提出基于YOLOv11的改进模型。通过将SPPF替换为AIFI模块降低计算复杂度，采用Dysample增强细节恢复能力，新增小目标检测层并嵌入CBAM注意力机制。实验表明，改进模型mAP@0.5达81.2%，较基线提升2.9%，推理速度266FPS，参数量仅2.80M，有效提升了复杂场景下的检测精度与效率。该研究为野外中草药智能识别提供了可靠技术方案。](https://devpress.csdn.net/v1/article/detail/161184339)

[实战指南：Python全栈项目——基于机器学习的推荐引擎设计](https://blog.csdn.net/exlink2012/article/details/161227145)

[exlink2012的专栏](https://blog.csdn.net/exlink2012)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1645 

[本文介绍了基于Python构建全栈推荐系统的技术方案。系统采用前后端分离架构，前端使用Vue/React展示推荐结果并收集用户行为数据，后端通过FastAPI提供高并发API服务，算法层使用Scikit-learn/Surprise实现协同过滤和矩阵分解等推荐模型。文章重点阐述了数据准备、混合推荐策略（召回+排序）、模型部署和实时反馈机制等关键环节，并针对冷启动和实时性等痛点提出了解决方案。该方案从简单协同过滤起步，逐步优化召回和排序精度，适合推荐系统初学者实践。](https://blog.csdn.net/exlink2012/article/details/161227145)

[AI药物研发：贝叶斯优化颠覆传统实验！逆向AI实验设计智能体加速CMC工艺与配方设计优化](https://blog.csdn.net/Lab_AI/article/details/161199836)

[Lab_AI的博客](https://blog.csdn.net/Lab_AI)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1416 

[摘要：MaXFlow平台通过贝叶斯优化算法颠覆传统实验设计，有效解决创新药CMC阶段"设计空间大"与"实验资源少"的矛盾。在小分子合成中，仅用15次实验即找到98.49%产率的最优条件；在大分子制剂开发中，仅33次实验完成多目标优化，效率超传统DOE一倍。该技术突破性地实现了全局最优搜索、多目标平衡和复杂约束处理，显著提升研发效率并降低成本。](https://blog.csdn.net/Lab_AI/article/details/161199836)

[MMAUD：面向现代微型无人机威胁的全面多模态反无人机数据集](https://wanghao.blog.csdn.net/article/details/161232501)

[AI浩](https://blog.csdn.net/hhhhhhhhhhwwwwwwwwww)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 868 

[针对小型无人机（UAV）不断演变的挑战（其具备运输有害载荷或独立造成破坏的潜力），我们推出了 MMAUD：一个全面的多模态反无人机数据集。MMAUD 通过专注于无人机检测、无人机类型分类和轨迹估计，填补了当代威胁检测方法中的关键空白。MMAUD 的突出之处在于融合了多种传感输入，包括立体视觉、各类激光雷达（Lidar）、雷达（Radar）和音频阵列。它提供了一种独特的俯视空中检测视角，对于解决现实场景具有比使用热成像和 RGB 相机在特定视点捕获的数据集更高的保真度。](https://wanghao.blog.csdn.net/article/details/161232501)

[从鸿蒙 AI 聊天 Demo 学习 ArkUI V2：第一天上手记录](https://devpress.csdn.net/v1/article/detail/161229320)

[A6516565189的博客](https://blog.csdn.net/A6516565189)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 475 

[本文记录了作者第一天学习HarmonyOS NEXT和ArkUI V2的实践过程。通过拆解AI聊天业务，作者理解了核心数据流和状态驱动UI的原理，重点掌握了ViewModel作为统一状态中心的作用。文章详细介绍了ArkUI V2的关键特性如@BuilderParam插槽机制、响应式状态管理(@Local/@Param)和布局组件(Column/Row/Stack)，并通过商品管理Demo实践了列表渲染、手势交互等核心功能。作者强调业务驱动学习的重要性，建议通过实际项目结合文档和Demo验证来快速掌握新技术。](https://devpress.csdn.net/v1/article/detail/161229320)

[基于 SARIMA-GARCH-TCN-Attention-XGBoost 的混合时间序列预测模型研究](https://devpress.csdn.net/v1/article/detail/161092116)

[2501_92464201的博客](https://blog.csdn.net/2501_92464201)

05-15

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 594 

[设时间序列观测值为ytt1Tyt​t1T​，其中ttt为时间索引。ytftεtyt​ftεt​其中，ftf(t)ft表示趋势、季节项、外生变量和可解释特征共同形成的确定性或弱随机结构，εtεt​表示模型未能解释的随机扰动。对于金融类序列，εtεt​常具有尖峰厚尾、波动聚集和条件异方差等特征，因此仅采用均值方程建模往往不足。在深度学习和机器学习建模中，不同变量量纲差异可能影响参数优化。xt′xt−μσx��](https://devpress.csdn.net/v1/article/detail/161092116)

[AI提示词极限赛：突破边界的艺术](https://blog.csdn.net/liudanzhengxi/article/details/161130956)

[liudanzhengxi的博客](https://blog.csdn.net/liudanzhengxi)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 1436 

[摘要： AI提示词极限赛通过竞赛形式探索提示词工程的技术边界，旨在激发大语言模型的最大潜能。文章从赛制设计、评价体系切入，解析高阶策略如分步思考链、动态调整和对抗性测试，并探讨如何突破模型保守性、处理幻觉问题。通过创意生成、精确约束等实战案例，展示提示词设计在复杂任务中的优化方法，强调自动化评价与人工评估的结合。未来，赛事将推动提示词标准化、多模态框架及伦理研究，成为AI能力挖掘的重要试验场。](https://blog.csdn.net/liudanzhengxi/article/details/161130956)

[ubuntu26.04音频转srt字幕](https://blog.csdn.net/weixin_43465752/article/details/161251250)

[weixin_43465752的博客](https://blog.csdn.net/weixin_43465752)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 211 

[ubuntu26.04音频转srt字幕](https://blog.csdn.net/weixin_43465752/article/details/161251250)

[【论文阅读】RoboAgent: 通过语义增强和动作分块实现机器人操作的泛化与效率](https://blog.csdn.net/qq_43854103/article/details/161233837)

[qq_43854103的博客](https://blog.csdn.net/qq_43854103)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 771 

[只用了很少的真机训练数据（7.5k条），通过“P图”扩充数据和“预测动作片段”而非单步动作，训练出了一个能听懂人话、在没见过的厨房场景里也能完成多种复杂任务的通用机器人。](https://blog.csdn.net/qq_43854103/article/details/161233837)

[Spring AI RAG - 09 AI 绘图 ImageModel 集成](https://devpress.csdn.net/v1/article/detail/161137581)

[小工匠](https://blog.csdn.net/yangshangwei)

05-16

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 199 

[本文介绍了基于Spring AI的AI绘图功能实现方案。通过ImageModel抽象层统一接入不同厂商的图像生成API，后端采用代理下载模式将临时URL转换为图片字节流返回。文章详细解析了从Prompt到图片的端到端流程，包括Spring AI的Image抽象设计、DashScope图像模型自动装配、DrawImageController实现代码，以及前端集成方式。该方案具有接口统一、隐藏实现细节、便于扩展优化等特点，支持同步和异步两种调用方式，生成一张1024×1024图片耗时约5-15秒。未来可进一步优](https://devpress.csdn.net/v1/article/detail/161137581)

评论
![](https://csdnimg.cn/release/blogv2/dist/pc/img/closeBt.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/commentArrowLeftWhite.png)
被折叠的 

 条评论  [为什么被折叠?](https://blogdev.blog.csdn.net/article/details/122245662)[到【灌水乐园】发言](https://bbs.csdn.net/forums/FreeZone)

查看更多评论

       添加红包       

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward02.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward03.png)

实付
元

[使用余额支付](javascript:;)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/pay-time-out.png)
点击重新获取

![](https://csdnimg.cn/release/blogv2/dist/pc/img/weixin.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/zhifubao.png)

![](https://csdnimg.cn/release/blogv2/dist/pc/img/jingdong.png)

扫码支付

钱包余额

0

![](https://csdnimg.cn/release/blogv2/dist/pc/img/pay-help.png)

抵扣说明：

 1.余额是钱包充值的虚拟货币，按照1:1的比例进行支付金额的抵扣。
 2.余额无法直接购买下载，可以购买VIP、付费专栏及课程。

[余额充值](https://i.csdn.net/#/wallet/balance/recharge)
