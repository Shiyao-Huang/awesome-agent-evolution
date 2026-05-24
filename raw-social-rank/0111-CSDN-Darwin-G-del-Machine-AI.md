# 达尔文 - 哥德尔机（Darwin-Gödel Machine）：首个自我改进的 AI 系统诞生

- URL: https://blog.csdn.net/turingbooks/article/details/148986921
- Platform: CSDN
- Extraction status: ok
- content_timestamp: 2025-06
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-06
- Query: site:blog.csdn.net AI Agent 自我改进

## Raw Content

## 达尔文 - 哥德尔机（Darwin-Gödel Machine）：首个自我改进的 AI 系统诞生-CSDN博客

**Source**: https://blog.csdn.net/turingbooks/article/details/148986921

---

# 达尔文 - 哥德尔机（Darwin-Gödel Machine）：首个自我改进的 AI 系统诞生

转载

于 2025-06-28 10:02:37 发布

·

624 阅读

·
![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png)
                       0                   

·
0
·

CC 4.0 BY-SA版权

                             原文链接：[https://mp.weixin.qq.com/s?__biz=MjM5Njc0MjIwMA==&mid=2649836362&idx=2&sn=ce2d37d4c893aee80eb33bbe15532c86&chksm=bf629eb99f2b31253adca5d0843dbea147e67cf7587fe64bced40d3a1b99177d4deff3242f82&scene=126&sessionid=0](https://mp.weixin.qq.com/s?__biz=MjM5Njc0MjIwMA==&mid=2649836362&idx=2&sn=ce2d37d4c893aee80eb33bbe15532c86&chksm=bf629eb99f2b31253adca5d0843dbea147e67cf7587fe64bced40d3a1b99177d4deff3242f82&scene=126&sessionid=0)

文章标签：

[#人工智能](https://so.csdn.net/so/search/s.do?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)

一个能从失败中学习并自我改进的 AI 系统，或许能引领我们走向通用人工智能（AGI）。

然而，目前的 AI 系统距离这一目标还相当遥远。

虽然它们可以一步步思考、具备一定推理能力，但它们的架构和参数都是固定的，无法持续、自主地进行自我改进。

**但如果我告诉你，我们正逐渐接近一个这一切都能实现的未来呢？**

总部位于东京的 AI 研究机构 Sakana AI（曾发布过“自动化 AI 科学家”项目）最近带来了这一突破。

他们提出了一种名为 Darwin-Gödel Machine（Darwin-Gödel Machine，简称 DGM）的架构，这一系统可以迭代性地修改自己的代码库，持续优化自身性能，同时实时在多个编程基准测试中评估改进效果。

这种架构的灵感来源于达尔文的进化生物学理论：从一个共同的起点衍生出多个变体，最终表现最优者“存活”下来，持续进化。

![](https://i-blog.csdnimg.cn/img_convert/4139f26019d8ac845f73a9d625cc4224.png)Darwin-Gödel Machine 通过开放式探索不断构建一个由 Agent 组成的“档案库”，其中的每个 Agent 都能通过自我修改和下游任务评估不断迭代优化自身能力。

在 SWE-bench（一个基于 GitHub 的真实软件工程问题评测基准）上进行测试时，DGM 展现出强大的代码能力，其性能从 20.0% 自动提升至 50.0%，实现了显著的能力增长。

![图片](https://i-blog.csdnimg.cn/img_convert/fc1a25d2d4eed6072735a7364e1856fa.png)

Darwin-Gödel Machine 能够重写自身代码，以提升其在 SWE-bench 上的软件工程任务表现（来源：Sakana AI 博客）。

在另一个软件工程评测基准 Polyglot 上也取得了类似成果，DGM 可自主将性能从 14.2% 提升至 30.7%。

这是一段关于深入探索 Darwin-Gödel Machine 的故事，我们将揭示它背后的工作原理，以及它是如何实现如此惊人的进步，从而将前沿 AI 技术再次推向一个全新高度。

我们开始吧！

#### 什么是 Darwin-Gödel Machine？

Gödel Machine（哥德尔机） 是一种理论系统，具备自我搜索、自我改进的能力。

它之所以一直停留在理论阶段，是因为 Gödel Machine 的定义要求它“能被形式证明为改进了自身”。

简单说：它必须用 ** 形式化证明（formal proof）** 来说明某个修改将提升自身能力，一旦找到这样的证明，就能执行这一修改。

但这个要求在现实世界中极为苛刻。尤其对于 AI 模型而言，很难准确地用数学证明来解释“为什么”它在某个任务上表现更好。

而 Darwin-Gödel Machine（DGM） 的关键突破在于，它不再依赖形式化证明，而是通过实验中的经验性证据（empirical evidence）来判断改进是否有效。

那么，Darwin-Gödel Machine 中的 “Darwin” 又是什么意思？

Darwin（达尔文）指的是一种进化策略。

与其先证明某个修改有效、再去实施它，不如让模型主动去探索所有可能的架构变化，生成一批“新模型”。这个过程类似生物体中的“变异（mutation）”。

在这些新模型中，只保留那些能成功编译、且具备进一步自我修改能力的模型，其他则被淘汰。这就像达尔文提出的“适者生存”法则，只有“能活下来并持续进化的个体”才会留下。

保留下来的模型会被组成一个“种群（population）”，参与后续的进化与试验。这些模型将在多个编程基准任务中进行评估。

而在每一次迭代中，DGM 并不会仅以“当前表现最好的模型”为基础进行下一轮优化，而是会利用整个“模型种群”进行组合与演化。

这种设计思路旨在实现开放式进化探索（open-ended exploration）。因为许多表现平平的模型，可能在未来某一阶段突破瓶颈，获得意想不到的提升——这正是类比生物进化中“看似不起眼却后来成为主流”的那类物种。

![](https://i-blog.csdnimg.cn/img_convert/f6ccc403d3136b433b46b51b03927c40.png)“Darwin-Gödel Machine” 术语解释（图源：Sakana AI 博客）

现在我们已经了解了 “Darwin-Gödel Machine” 这一名称背后的含义，接下来我们将深入看看这种架构究竟是如何运作的。

#### 深入解析 Darwin-Gödel Machine 的架构

Darwin-Gödel Machine 的实现形式是一种具备自我改进能力的编码 Agent，它由一个 LLM 驱动，该模型的参数本身不可修改，但它具备访问自身代码库的权限，并配备了两种关键工具：

**1. Bash 工具**：用于执行 Bash 命令

![DGM 使用的 Bash工具](https://i-blog.csdnimg.cn/img_convert/6257078e3354f00cd2a28c140b6be358.png)DGM 使用的 Bash 工具

**2. 编辑工具**：用于查看和编辑文件与目录

![DGM 使用的编辑工具](https://i-blog.csdnimg.cn/img_convert/e84a67132590bb0fd0bbd9ae56841089.png)
DGM 使用的编辑工具

在每一次迭代中，系统会从现有 Agent 中选出一个“父代理”（parent agent），并在此基础上生成一个新的编码 Agent。 选择父代理的过程需要在“探索”与“利用”之间进行权衡，即既要尝试新的可能性，又要利用已有的优秀成果。

以下是相关机制的详细介绍：

假设在第`t`轮迭代中，Agent 的归档集合如下所示：

![图片](https://i-blog.csdnimg.cn/img_convert/571332bf89a8ee9e691b719f1cec58b7.png)

可作为父代候选的 Agent 集合`E(t)`，由性能尚未达到完美分数（即`α(i) < 1`）的 Agent 组成：

![图片](https://i-blog.csdnimg.cn/img_convert/0bbbff23734a9ba2b1955f5b87d4218e.png)

对于集合中的每个 Agent `a(i)(t)`，其性能分数记为`α(i)`：

![图片](https://i-blog.csdnimg.cn/img_convert/51ee0fff572f2e52ccb4ad1f6ab5cf1a.png)

每个 Agent 已经产生的、仍能继续修改代码库的有效子代数量记为`n(i)`：

![图片](https://i-blog.csdnimg.cn/img_convert/336aceaba0f02645c40109e6b04a8fec.png)

接下来，使用 Sigmoid 函数对每个 Agent 的性能分数进行归一化处理：

![图片](https://i-blog.csdnimg.cn/img_convert/d259889bd8f00e346971959ea208ee70.png)

其中，参数`λ`控制曲线的陡峭程度，`α(0)` 为曲线的中点。

然后，根据 Agent 已有的有效子代数量 `n(i)`，计算一个新颖性奖励 `h(i)`，子代数量越少，奖励越低：

![图片](https://i-blog.csdnimg.cn/img_convert/811f3f24d0150342112ed2b9bddb1a95.png)

接着，将新颖性奖励 `h(i)` 与经过 Sigmoid 归一化的性能分数 `s(i)` 结合，得到权重 `w(i)`：

![图片](https://i-blog.csdnimg.cn/img_convert/04263b64290b6359a38c37c643dc7e90.png)

最后，通过对所有候选 Agent 的权重 `w(i)` 进行归一化，计算每个 Agent 被选为父代的概率：

![图片](https://i-blog.csdnimg.cn/img_convert/dad26efe6fa5b1c1f32c172b5821975f.png)

然后，根据这些概率，从候选集合中抽取 `k` 个父代 Agent ：

![图片](https://i-blog.csdnimg.cn/img_convert/729d0e498228df875934be672f514302.png)

如果上述公式让你感到困惑，那么简单来说，这种父代选择机制的核心思想是：一方面倾向于选择性能表现较好的 Agent （“利用”），另一方面也给予那些子代较少、尚未充分探索的 Agent 一定的机会（“探索”），通过新颖性奖励来鼓励多样化。

这种机制确保了档案库中的每个 Agent 都有非零的概率被选为父代，从而保持了模型进化过程的多样性与开放性。

换句话说，这种方法允许探索所有可能的改进路径，而不仅仅局限于每次迭代中表现最好的那条路径。

一旦选定父代 Agent ，它会分析自身在基准测试中的评估日志，并提出一个能够提升自身表现的新特性。

随后，这个新特性会被实现到 Agent 自身的代码库中，从而产生一个新的子代 Agent 。

每个子代 Agent 都会在代码基准测试（如 SWE-bench 或 Polyglot）上进行评估。

任何能够成功编译并保持代码编辑能力的子代 Agent 都会被保留在一个存档（archive）中，其余则被丢弃。

通过不断重复“选择父代—自我修改—评估子代”这一循环，存档中的 Agent 数量逐渐增加，为后续改进提供更多基础。

![图片](https://i-blog.csdnimg.cn/img_convert/a1f2ed3bbf31f6092fbeabbc00aa2d0f.gif)

DGM 算法的可视化示意图（来源：DGM 的 GitHub 仓库）

完整算法的伪代码如下所示：

![DGM 算法的伪代码](https://i-blog.csdnimg.cn/img_convert/e0221c3ace66b384270f07e432f64439.png)DGM 算法的伪代码

#### 但 DGM 真的能实现自我改进吗？

在实验中，研究人员将一个基于 LLM 的代码 Agent 作为初始 DGM，并给出如下单一输入提示：

![提供给 DGM 的任务提示](https://i-blog.csdnimg.cn/img_convert/c0440752bc36a5c5478a25e0cafd8458.png)提供给 DGM 的任务提示

随后，该算法运行 80 次迭代，每次迭代生成一个新的 Agent 。

在评估阶段，DGM 使用 Claude 3.5 Sonnet（针对 SWE-bench）或 OpenAI 的 o3-mini（针对 Polyglot）进行基准测试。

在分析基准测试日志并提出自我改进建议时，使用的是 OpenAI 的 o1，而实现这些自我修改时再次使用 Claude 3.5 Sonnet。

对不熟悉这些基准测试的读者而言，SWE-bench 是一个基于 GitHub 上流行开源 Python 项目中软件缺陷的基准测试。

上述实验使用的是 OpenAI 发布的 SWE-bench Verified 子集，该子集过滤掉了原始 SWE-bench 中无法解决的问题。

而 Polyglot 基准测试则包含多种编程语言的任务，包括 C++、Rust、Python 等。

与 SWE-bench 相比，这个基准测试更为小众，且更不可能出现在大多数 LLM 的预训练数据集中。

为了验证 DGM 算法中各个组成部分的重要性，研究人员创建了两个简化版本，并与完整的 DGM 模型进行对比：

- 

**去掉自我改进的 DGM**（所有后续步骤都使用初始 Agent 生成子代）

- 

**去掉开放式探索的 DGM**（只保留并基于最新有效 Agent ，丢弃过去所有 Agent 的存档）

实验结果表明：

经过 80 次迭代后，代码 Agent 在 SWE-bench 上的表现从 20% 提升到 50%，在 Polyglot 上的表现则从 14.2% 提升到 30.7%。

这说明 DGM 能够自动创造出更好的自身版本，逐步学会更有效地使用工具、优化提示策略，以及更好地整合不同的 LLM 到自身工作流程中。

这些改进效果非常显著，以至于 DGM 发现的最佳 Agent 在 SWE-bench 上的表现已经可以媲美最优秀的人类开发的开源 Agent 。

而在 Polyglot 基准测试中，其表现甚至超过了由创建该基准测试的团队所开发的 Agent Aider。

![](https://i-blog.csdnimg.cn/img_convert/e47455cb9e84c87860ecfc178ff0598f.png)自我改进（self-improvement）和开放式探索（open-ended exploration）这两种机制都显著提升了 DGM 的表现，使其超越了缺乏这两种机制的 DGM 基准模型，以及当前开源的最先进 Agent。这一点在两个基准测试上的表现尤为明显。下图展示了基准评测的 pass@1 准确率（纵轴）。

得益于开放式探索，许多在评测中表现并不理想的 Agent ，最终却能开辟出一条路径，衍生出后来超越所有其他 Agent 的后代。

这一现象可以从 DGM 的存档树（archive tree）中清晰地看到：在第 4 次迭代时性能有所下降（颜色越深表示 SWE-bench 得分越低），但随后逐渐提升，到第 56 次迭代时达到最佳状态，产生了最终表现最好的 Agent 。

![](https://i-blog.csdnimg.cn/img_convert/c4684ca4b8494e5900ba57933c66dff8.png)上图为 DGM 存档树示意图，每个节点代表一个 Agent ，从初始 Agent （编号 0）开始。节点颜色表示该 Agent 在 SWE-bench 上的表现，边框颜色则表示该 Agent 接受测试的任务数量。

下一张图展示了 Agent 在自我改进过程中发现的不同方法。

如深色线条所示，即使 Agent 的表现经历了两次明显的下滑，开放式探索（而非仅仅固守当前最佳 Agent ）最终仍能帮助其找到性能最优的 Agent 。

![](https://i-blog.csdnimg.cn/img_convert/99481643499bfdd4bed0d03989423746.png)上图展示了 DGM Agent 的进步过程，其中浅蓝色线表示所有仍能编辑代码的 Agent 的平均表现，蓝色线表示每次迭代中表现最好的 Agent ，而深色线则标出了最终最佳 Agent 的进化路径。

可以看到，缺乏自我改进机制的 DGM 在初期表现有所提升，但随后便陷入停滞。

类似的性能下降也出现在缺乏开放式探索机制的 DGM 中。这种方法随着时间推移难以持续改进，因为它会丢弃旧的 Agent ，一旦出现一次糟糕的更新，就可能阻碍所有后续进步。

值得庆幸的是，这些性能提升并非依赖于特定模型的技巧。

即使将运行或评估 Agent 所用的基础 LLM 替换为其他模型，DGM 发现的最佳 Agent 仍然比初始 Agent 表现更好。

![](https://i-blog.csdnimg.cn/img_convert/bc3b26b01fac0179255f5acd3c19fa6f.png)上图显示，即使使用不同的基础模型（FM）或 LLM 运行，DGM 发现的最佳 Agent 仍然表现优于初始 Agent 。这表明 DGM 的改进并不局限于特定的 LLM。注意，DGM 最初在 SWE-bench 上使用的是 Claude 3.5 Sonnet，在 Polyglot 上使用的是 o3-mini，但在上述评测中已替换为图中所示的 LLM。

此外，DGM 发现的 Agent 性能也能迁移到其他编程语言中。

即使仅在 Python 任务上训练， Agent 在其他编程语言上的表现也几乎与在所有语言任务上训练的 Agent 一样出色，并且明显优于初始 Agent 和 Aider。

![](https://i-blog.csdnimg.cn/img_convert/cb28dda496bae9ffdb28f319ac1d0a89.png)上图表明，DGM 产生的 Agent 在不同编程语言（如 Rust、C++、Go 等）的任务上具有良好的泛化能力，即使仅在 Python 任务上训练，也能胜过 Aider 和初始 Agent 等强大的基准模型。

#### DGM 是否足以实现通用人工智能（AGI）？

目前的 DGM 尚未具备重写或重新训练其背后的 LLM 模型的能力，也无法处理编程以外的任务，因此距离实现真正的通用人工智能（AGI）仍有一定距离。

运行一次 DGM 的成本非常高昂且耗时，以在 SWE-bench 基准测试上完成单次运行为例，估计成本约为 22,000 美元，耗时约两周。

![](https://i-blog.csdnimg.cn/img_convert/c783344b5334e95ce415f9bc0c3cf825.png)图：使用不同 LLM 在两个基准测试上运行 DGM 的成本明细

此外，尽管通过 DGM 发现的最佳 Agent 在代码基准测试中超越了开源的最先进 Agent ，但在与闭源基准的对比中却未能取得同样的优势。

这可能是因为闭源基准使用了专门的技术（例如推理机制），也可能是研究人员在训练 DGM 时所能使用的计算资源有限。

尽管存在这些局限性，DGM 仍然是首个以开放式方式探索“自我改进”搜索空间的自我提升系统，并在真实任务上显著提高了自身性能。

然而，我们距离真正接近通用人工智能（AGI）的系统还有很长的路要走。

#### 延伸阅读

- 

“Darwin-Gödel Machine：自我改进 Agent 的开放式进化” https://arxiv.org/abs/2505.22954

- 

Darwin-Gödel Machine 原始研究论文相关的开源代码：https://github.com/jennyzzt/dgm

- 

“一种自我改进的编程 Agent”：https://arxiv.org/abs/2504.15228

- 

Darwin-Gödel Machine：通过重写自身代码实现自我改进的 AI：https://sakana.ai/dgm/

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-newWhite.png)
         确定要放弃本次机会？       

福利倒计时

*:*

*:*

![](https://csdnimg.cn/release/blogv2/dist/pc/img/vip-limited-close-roup.png)
立减 ¥

普通VIP年卡可用

[立即使用](https://mall.csdn.net/vip)

[turingbooks](https://blog.csdn.net/turingbooks)

[关注](javascript:;)关注

- 0

点赞

- 

踩

- [0](javascript:;)

                     收藏                   

                   觉得还不错?                   
                     一键收藏                   
![](https://csdnimg.cn/release/blogv2/dist/pc/img/collectionCloseWhite.png)

- 
![](https://csdnimg.cn/release/blogv2/dist/pc/img/guideRedReward01.png)
[0](https://blog.csdn.net/turingbooks/article/details/148986921#commentBox)

评论

- [分享](javascript:;)

复制链接

分享到 QQ

分享到新浪微博

![](https://csdnimg.cn/release/blogv2/dist/pc/img/share/icon-wechat.png)扫一扫                     

- 

举报

举报

参与评论

您还未登录，请先

登录

后发表或查看评论

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[AI大神Karpathy的学习心法，普通人也能直接抄作业](https://blog.csdn.net/turingbooks/article/details/161266074)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 38 

[跟着它，在普通的笔记本电脑上，你就能手搓出一个专属的微型大模型！这本书完美契合了 Karpathy “拒绝死记硬背、追求直觉理解”的教育理念，用海量极其直观的图解，硬生生把大模型的黑盒给剥开了。在 AI 如此强大的今天，遇到难题直接写一段自然语言指令丢给大模型，让它瞬间吐出几百行代码或一套解决方案，这确实极大地解放了我们的脑力，也是不可逆的趋势。如果你认同 Karpathy 的理念，想要真正掌握 AI 时代的铁饭碗，我们为你精选了当前最受读者欢迎，最具极客式学习气质的三本图书—— “AI 三剑客”。](https://blog.csdn.net/turingbooks/article/details/161266074)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[AI 圈彻底沸腾！Andrej Karpathy 宣布入职 Anthropic](https://blog.csdn.net/turingbooks/article/details/161266085)

05-20

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 3 

[书中提供了完整的 AI 工程框架，涵盖模型选择与评估、提示工程、RAG 与智能体、微调策略、数据集工程、推理优化及 AI 工程架构等关键环节，帮助开发者在复杂的 AI 生态中做出科学的技术决策。备受关注的大模型“袋鼠书”，全书通过 300 幅全彩插图，以极致视觉化的方式呈现大模型的核心原理与工程实现，覆盖从底层机制、应用开发到性能优化的完整链条。这里给大家推荐几本优质书籍，不管你是 AI 小白、行业从业者，还是单纯想了解大模型的普通人，都能找到适合自己的，帮你快速吃透大模型核心，读懂 AI 圈的底层逻辑。](https://blog.csdn.net/turingbooks/article/details/161266085)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[这是一本我读过N遍的顶级好书，推荐所有人都来读!](https://blog.csdn.net/turingbooks/article/details/161235894)

05-19

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 19 

[此外，如果各个行业都用一个套路分析，那么分析有时候会变成蜻蜓点水，看似什么都覆盖到了，却不得要领、抓不住重点。比如，如果分析煤炭行业和新能源汽车赛道都套用一个模板，恐怕很难得出有用的结论——近年来，煤炭行业发展的核心逻辑是供给收缩，而新能源汽车行业发展的关键是产销持续超预期。比如，白色家电行业就显然已经迈入成熟期，在行业巨头的笼罩之下，虽不能说是寸草不生，但最多也就剩下仨瓜俩枣了。或者说，我们无法确定，增速的变动是由于一时的供需错配而出现的波动，还是表明行业已进入产业生命周期的新阶段。](https://blog.csdn.net/turingbooks/article/details/161235894)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[新书上架 | 一文看懂黄仁勋与英伟达的崛起之路！](https://blog.csdn.net/turingbooks/article/details/161205102)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 19 

[无需懂半导体专业知识，也不用懂金融投资门道，只用最直白的语言，讲透英伟达的逆袭发家史、牢牢掌控全球算力的底层逻辑、AI时代的财富密码，以及普通人能感知、能抓住的时代机会。——砍掉所有非核心项目，收缩团队规模，把仅剩的资金和人力，全部押注在“图形显卡”这一条赛道上，绝不与英特尔、微软正面竞争，只做电脑的“视觉处理器”。没有豪华的办公场地，没有充足的资金，没有强大的后盾，甚至连一台像样的研发设备都没有，三人白天研发，晚上挤在车库里休息，吃着廉价的快餐，日复一日地打磨产品。到几千元的中端显卡，适配主流游戏玩家；](https://blog.csdn.net/turingbooks/article/details/161205102)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[豆瓣8.7！一本不得不读的效率神书！值得反复读10遍！](https://blog.csdn.net/turingbooks/article/details/161204584)

05-18

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 16 

[下班回到家，要做饭，要做家务，要看孩子的作业，有老人的还得照顾老人，也常常搞得自己焦头烂额，恨不能多长几双手同时做好件事儿。所以如果了解了前额皮质的特点，就该知道，面对一堆工作、一堆家务，即使再多长十双手也没法能帮你解决好所有的事情，因为我们只有一个任性的“指挥官”，这种情况下，它会罢工。精选14个高频工作场景，运用四幕剧故事形式介绍脑科学知识，以大脑喜欢的方式，告诉你如何用脑科学提升工作效率，帮你科学利用时间，合理分配脑力，轻松高效工作。了解它的优点和缺点，和它做朋友，会让我们的工作学习都事半功倍。](https://blog.csdn.net/turingbooks/article/details/161204584)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[概率论别再死记硬背了，聪明人都在用这套方法提分](https://blog.csdn.net/turingbooks/article/details/161124601)

05-15

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 33 

[很多人概率论失分，不是难题不会，而是条件概率老写错、分布函数不会转、正态分布公式记混、做题步骤不规范。不仅可以刷到热门考试题型，还可以沉浸式体验考场，自习室里做一套，真实感受考试做题环境，训练自己的做题思维以及对考试时间的把控。④ 不想再到处找资料的人，大学数学最耗时间的，其实不是学习本身，而是找一堆资料，但还是无法坚持学下去。② 临近期末开始慌的人，不知道重点在哪、不会安排复习节奏的人，很适合用这种同步卷快速进入状态。B 卷更像真正考试会出现的东西，很多人到了后期提不上分，其实是因为只会单知识点做题。](https://blog.csdn.net/turingbooks/article/details/161124601)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[如何基于 OpenClaw 打造自己的 Agent 团队](https://blog.csdn.net/turingbooks/article/details/161093022)

05-14

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 557 

[有管数千人的老板，有一个人扛一整条业务线的创业者，有大厂里每天做报表、跟进度的执行层，也有靠 Notion 和 Zapier 把自己武装到牙齿的效率极客。我不想写一本转瞬即逝的“技术指南”或“提示词合集”，我想写的是一份 7×24 数字产线的建造图纸：从第一个 Agent 上岗，到整条产线跑通，中间会踩什么坑、需要建立什么规则。这不是“要不要拥抱技术”的选修课，而是 “你不动，别人动了，你的位置就是别人的” 的生存命题。这种变化是指数级的，先跑起来的产线会像复利一样持续优化，时间越长，差距越大。](https://blog.csdn.net/turingbooks/article/details/161093022)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[新书上架 | 一本不得不读的神书！值得反复读10遍！](https://blog.csdn.net/turingbooks/article/details/161061771)

05-13

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 37 

[而不是带着指责的审视。你观察到「我又拖延了」，接下来不是骂自己「真没用」，而是问自己「我为什么会拖？但如果问题的根源不在于「你不够努力」，而在于「你从来没搞懂自己大脑是怎么工作的」呢？所谓觉醒，从来不是一次顿悟，而是一次又一次微小的「看见」——看见自己的大脑、看见自己的情绪、看见自己正在如何生活。换句话说，多巴胺不是一个开关，而是两套平行系统：一套负责「记住该怎么做」，另一套负责「让你想去做」。这种渐进替换，多巴胺系统完全不会反抗，因为你从来没让它「失去奖励」，你只是在悄悄升级奖励的质量。](https://blog.csdn.net/turingbooks/article/details/161061771)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[新书上市 | 没有公式，没有术语！16个故事讲透数学的逻辑思维！](https://blog.csdn.net/turingbooks/article/details/161061398)

05-13

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 47 

[在另一个论证中，芝诺指出，这种运动是不可能的，因为一个物体要移动任何距离，都必须先移动这段距离的一半，然后再移动剩余距离的一半，以此类推，永远都必须移动某段剩余距离的一半，因此，永远都不可能移动完剩余的全部距离。在三十年的数学教学生涯中，我收集了许多超凡卓越的学生和数学同人从最陡峭的坡面征服数学高峰的故事：关于他们的攀登，关于他们在山峰上（即便是再低矮的山峰上）看到的风景，关于他们有了新发现的激动时刻，关于他们对未知智慧之美的探索，关于他们对数学证明确定无疑的自信。奇怪的是，他的论证却得出了正确的结果。](https://blog.csdn.net/turingbooks/article/details/161061398)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[新书上架 | 普通人如何运用第一性原理？](https://blog.csdn.net/turingbooks/article/details/161028646)

05-12

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 47 

[其实，第一性原理从来不是高深莫测的理论，而是一种“回归本质、从头推导”的思维方式——它能帮你避开跟风模仿的陷阱，摆脱经验主义的束缚，在信息爆炸、竞争激烈的时代，快速抓住问题核心，做出更明智的决策、实现更高效的成长。“大佬专属”，普通人也能掌握运用，它无需高深知识和强大资源，掌握“三步走”核心方法，就能用于日常工作生活，解决问题、提升自己。这部分聚焦“普通人的实战场景”，用。对于我们普通人来说，不需要用第一性原理造火箭、做芯片，只需要用它解决日常的工作、学习和生活问题，摆脱无效努力，实现自我成长，就足够了。](https://blog.csdn.net/turingbooks/article/details/161028646)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[惊天反转！“AI 教父”亲手判神经网络死刑，50 多年后它却统治了 AI](https://blog.csdn.net/turingbooks/article/details/161027874)

05-12

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 29 

[但读完《人工智能简史（第3版）》你就会明白：所谓的人工智能革命，从不是偶然的横空出世，而是一群顶级聪明人，在 70 年的时间里，不断争论、不断误判、始终坚持、反复翻盘，一步步摸索、试错，才终于将机器智能的梦想，照进了现实。畅销 10 万册，人工智能专家尼克经典之作，全景式解读人工智能，作者以人工智能 70 年的发展为线索，串联起 15 个核心主题与 200 多位重要学者的思���，将人工智能从技术问题延展为一场关于认知与文明的讨论。同时，基于大量文献与访谈构建的史料体系，使整本书具备难得的厚重感与可靠性。](https://blog.csdn.net/turingbooks/article/details/161027874)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[性价比封神，DeepSeek V4 最强使用攻略！](https://blog.csdn.net/turingbooks/article/details/160995374)

05-11

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 47 

[市面上最注重实战的 DeepSeek 教程，围绕 DeepSeek 技术体系展开，系统解析 DeepSeek 架构设计、DeepSeek-V3 模型的 MoE 架构与多 token 预测、DeepSeek-R1 模型的思维链与知识蒸馏等核心机制，夯实读者的理论基础。超牛的 DeepSeek 应用书，作者是 AI 大佬花生，全书涉及 13 大场景，90 个实用案例，7 大技巧，4 大王炸组合，内容涵盖高效办公、副业变现、数据分析、企业级 DeepSeek 使用方案等等。它极大地拔高了廉价模型的上限。](https://blog.csdn.net/turingbooks/article/details/160995374)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[260年前，双目失明的欧拉口述了一本“数学圣经”，专治代数看不懂](https://blog.csdn.net/turingbooks/article/details/160962455)

05-10

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 55 

[欧拉的著作数量高达866 部，甚至在他去世后的 50 年，他发表的文章都占据了圣彼得堡科学院出版物的半壁江山。欧拉善于将复杂的问题分解为基本要素，阅读本书，你将会学到顶尖数学家是如何思考问题、理解问题的，跟随他一步步地推导，一切都变得顺理成章。你会发现，正负数、分数、对数，在欧拉的笔下不是抽象的符号，而是很具体的生活中的概念。他被迫用最通俗、最直观、最符合人类直觉的方式，把毕生对代数的理解，一点点讲述给他的助手。从这本书中，读者可以跟随欧拉的耐心教导，从算术到代数，完成一次真正的思维跃迁。](https://blog.csdn.net/turingbooks/article/details/160962455)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[黄仁勋一直说的“Token经济学”，到底是什么意思？](https://blog.csdn.net/turingbooks/article/details/160904567)

05-08

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 66 

[它的底层架构演进直接重塑了全球算力的定价权；时代后，算力的交付形态发生了根本性转变，用户不再关心底层显卡每秒能做多少次矩阵乘法，他们需要的是直接的智力产出：一段代码、一篇报告或一个商业洞察。进行二次开发的初创公司，还是将大模型能力嵌入内部办公系统的跨国企业，所有的预算审批、成本核算与调用限额，全部以。）在这里探讨的，是一个由真实电力驱动、由硅基芯片运算、最终产出具有实际商业用途的智力产品的实体经济循环。一种全新的资源想要演化出成熟的商业模式、产业链和国际贸易体系，第一步是找到那个可以被精准计价的锚点。](https://blog.csdn.net/turingbooks/article/details/160904567)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[这本两大菲尔茨奖得主都拜服的科普书讲透了数学学习的第一性原理！](https://blog.csdn.net/turingbooks/article/details/160904149)

05-08

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 43 

[如果没有数字，没有圆形和正方形，没有三维空间的概念，没有点和轨迹的概念，没有笛卡儿坐标系，没有距离、速度和加速度的概念，没有直线可以无限延伸的想法，没有概率的概念，没有加法和乘法，没有计算的概念，没有真理和逻辑推理的概念，那么，你周围的世界会突然变得模糊而不稳定，仿佛自己被切除了脑叶。格罗滕迪克认为自己工作的独特之处在于他打破了一个禁忌：“在所有自然科学中，似乎唯有在数学领域，我的所谓‘梦’，或‘清醒的梦’，被施加了一个已存在两千多年的绝对禁令。而我们的世界和生活的数字化，更是将数学的作用无限放大。](https://blog.csdn.net/turingbooks/article/details/160904149)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[一万字讲透金字塔原理：这套思考工具，专治嘴笨和脑子乱](https://blog.csdn.net/turingbooks/article/details/160869970)

05-07

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 47 

[我们这个月的获客成本变高了，抖音那边的广告系统更新了算法，然后小红书的达人也涨价了，而且春节假期流量还没完全恢复，再加上我们自己的素材也好久没更新了，所以。这就是金字塔的基本样子。相反，如果你一上来就说结论，万一结果不好，你紧跟着一句「这里有三个原因导致，其中两个可以改、一个是外部的」，反而显得你。如果你读完之后，在一次开会、一次微信、一次和家人的谈话里，感觉到「对方比以前更听得懂我了」——那就是这本书最好的归宿。当你把结论放在最后，听众一边听你讲，一边要记住你前面说的所有铺垫，还要自己去猜结论是什么。](https://blog.csdn.net/turingbooks/article/details/160869970)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[看完这本数学书后，彻底整明白了神经网络！！！](https://blog.csdn.net/turingbooks/article/details/160870134)

05-07

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 44 

[例如，一些实验表明，对于你认识的每一位著名演员，你的大脑中都有一个特定的神经元，对他/她在屏幕中的出现做出特定反应（见书后的注释部分）。然而，这种方法也有局限性：尽管脑成像技术的空间、时间分辨率大幅提高，但仍不足以同时追踪、识别所有神经元的活动（比如人脑中用于识别大象的神经元），更不用说在一生的学习过程中追踪这些神经元的活动了。第二层神经元的树突与第一层的神经元相连。但集体来看，大量神经元的组合却能“涌现”出令人难以置信的复杂行为，这些行为不能归因于一个特定的神经元——这些大规模的行为就是我们所说的智能。](https://blog.csdn.net/turingbooks/article/details/160870134)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[Agent 开发陷入瓶颈后，我终于读懂了这本大模型神书](https://blog.csdn.net/turingbooks/article/details/160836529)

05-06

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 342 

[这次读下来，觉得提示词不只是要把话说严谨，从工程角度看，更像是建立一套规范，定义输入、边界约束，尤其是结构化输出和校验，输出能遵循特定格式，程序才能更好的处理，对 Agent 来说，后续的链、工具调用等，都依赖稳定的输出。书中介绍的  ReAct 思考框架，是一种“思考、行动、观察”的循环，每一步先思考再执行，根据结果调整下一步操作，这种循环机制把前面的能力都串联起来，让系统完成动态决策和工具调用，从而具备  Agent 的核心能力。当任务需要拆分成多步骤，并且前后结果需要稳定衔接时，就需要用到链了。](https://blog.csdn.net/turingbooks/article/details/160836529)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[都monorepo了，还有必要搞微服务吗？](https://blog.csdn.net/turingbooks/article/details/160695498)

05-01

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 35 

[一个"用户下单"的spec，涉及用户服务、订单服务、库存服务、支付服务，Agent得知道这些服务之间的接口契约、数据模型、调用关系，才能把spec拆分到正确的服务里。前面提到的Uber就是最好的反例——从polyrepo迁移到monorepo之后，2200个微服务一个没少，但跨服务重构、依赖管理、共享库升级这些在polyrepo时代让人头疼的问题，都大幅缓解了。每个服务小到几乎没有独立存在的意义，但每个服务都带来了完整的运维开销——独立的部署流水线、独立的监控、独立的日志、独立的网络通信。](https://blog.csdn.net/turingbooks/article/details/160695498)

![](https://csdnimg.cn/release/blogv2/dist/components/img/blogType.png)
博客

[把人类提前带入基因组时代的“坏小子”去世了](https://blog.csdn.net/turingbooks/article/details/160695830)

05-01

![](https://csdnimg.cn/release/blogv2/dist/pc/img/readCountWhite.png) 46 

[也让“我是谁”、“我可能面临什么风险”、“我能否提前改变未来”这些问题，第一次与一份个人基因组真正联系在一起。它可以提示风险，提供线索，帮助我们更早理解疾病与健康，却无法穷尽一个人的性格、选择、经历与人生。如果你也知道了自己的基因信息，你会更理解过去的自己吗？今天，我们把这篇迟到的公众号首发，献给这位复杂、狂放、极具争议，也无法绕开的基因组时代人物。今天重读这个故事，我们更能感受到Craig Venter留给基因组时代的复杂遗产。遗传学不仅属于实验室，更关乎每个人、每个家庭对生命的理解。](https://blog.csdn.net/turingbooks/article/details/160695830)

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
