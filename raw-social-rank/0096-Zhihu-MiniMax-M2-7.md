# 全行业都在忙着“吃虾”，MiniMax M2.7已经让虾自己拿起筷子了 - 知乎

- URL: https://zhuanlan.zhihu.com/p/2017708069283460954
- Platform: Zhihu
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- Query: site:zhuanlan.zhihu.com 智能体 自我改进

## Raw Content

## 全行业都在忙着“吃虾”，MiniMax M2.7已经让虾自己拿起筷子了 - 知乎

**Source**: https://zhuanlan.zhihu.com/p/2017708069283460954

---

有问题，就会有答案。知乎，可信赖的问答社区，以让每个人高效获得可信赖的解答为使命。知乎凭借认真、专业和友善的社区氛围，结构化、易获得的优质内容，基于问答的内容生产方式和独特的社区机制，吸引、聚集了各行各业中大量的亲历者、内行人、领域专家、领域爱好者，将高质量的内容透过人的节点来成规模地生产和分享。用户通过问答等交流方式建立信任和连接，打造和提升个人影响力，并发现、获得新机会。

![全行业都在忙着“吃虾”，MiniMax M2.7已经让虾自己拿起筷子了](data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>)

> 克雷西 发自 凹非寺
> 量子位 | 公众号 QbitAI

MiniMax发布M2.5仅过去一个月，再次重磅更新。

今天他们正式官宣了全新的M2.7模型，这次它干复杂任务和**Agent团队协作**的本事更强了。

它的推理和工程能力也有了质的飞跃，像生产线上那种让人头疼的故障排查，它自己就能搞定。

以前的模型最多也就是给你打打下手写几行代码，现在的M2.7已经是个成熟的
SRE
（网站可靠性工程）老手了——

自动关联监控、精准揪出Bug甚至直接写脚本把漏洞修好，它都能一条龙包揽。

最狠的是它现在能自己搭建Agent Harness，把思考和干活彻底揉在了一起，直接**开启了自我进化之路**。

深度适配了OpenClaw长期记忆框架之后，无论是带入真实感情陪你沉浸式玩角色扮演，还是应付那种极其复杂的Office自动化办公需求，对它来说全都不在话下。

现在，M2.7已经在MiniMax Agent和开放平台全量上线了，大家随时可以去体验一把。

## **最佳Cowork Agent模型**

咱们先来盘一下，M2.7都有哪些硬核的亮点。

最基础的是**指令遵循和多智能体协作**的跃升，面对海量Skills的复杂环境，M2.7调用得极其稳健。

官方测试中，在包含40个复杂技能的场景下，它仍然可以保持97%的遵循率，并且在MM-Claw“龙虾测试”里正确率达62.7%，直逼
Claude Sonnet 4.6
。

另外它还原生自带多智能体协作，不用外部框架也能组建Agent Teams。模型能稳定锚定身份并自主决策，智能体之间互相配合就能把长流程任务拆解执行完。

![](https://pica.zhimg.com/v2-768842325d990f0ed1d1b84a048693b2_1440w.gif)

顺着底层执行力往下，是**代码能力**的直观爆发。它从单纯的代码生成，拓展到了代码重构、防漏洞及复杂排障等高阶领域。

在SWE-Pro测试中，它以56.22%的正确率追平GPT-5.3-Codex，端到端项目交付的VIBE-Pro基准同样拿下高分。

拿SRE线上排障来说，一告警它就会关联监控推导原因，对调用链分析并连数据库验证，查出漏掉的索引文件后，甚至懂得先用非阻塞方式建索引止血再提代码合并。

[https://www.zhihu.com/video/2017712465958445921](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2017712465958445921)

切换到**办公场景**，M2.7处理复杂Office文档同样干脆，支持Excel表格、Word文档和PPT的复杂多轮修改。

在
GDPval-AA
评测中，它的ELO评分位列开源第一，并超越GPT-5.3。

以真实的某公司案例为例，丢给它年报和沟通会资料，它能自主比对研报并构建营收预测模型。

分析完数据后，它能直接生成Excel透视表，顺手写出Word版调研报告，并基于模板排版出能直接拿来汇报的PPT，这已经具备了一个初级分析师的水准。

[https://www.zhihu.com/video/2017712427144332647](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2017712427144332647)

最后在偏C端互动的**角色扮演场景**中，M2.7还大幅强化了人设的稳定性与对话情商。

它原生支持十种语言，跨语言交流时人格统一。深度适配长期记忆框架后，在赛博养崽等场景中展现出持久的身份认同。

基于这个特点，MiniMax官方设计并开源了一个
OpenRoom交互系统
，把AI了塞进万物皆可互动的Web GUI空间。

在这间赛博朋克风的“龙虾小屋”里，对话可以实时产生视觉反馈与场景交互，角色主动与环境互动，沉浸感一整个拉满。

[https://www.zhihu.com/video/2017712395439600311](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2017712395439600311)

说了这么多，账面实力究竟有没有水分，接下来直接进入真刀真枪的实测环节。

## **一个模型，带动整个“AI团队”**

第一个登场的是多Agent原生协作测试，但这次我们不搞什么“一人公司”，而是让一群Agent模型模拟人类玩游戏，于是直接扔给了M2.7一个“谁是卧底”的建房需求。

指令要求它不仅需要统筹1个主持人Agent和5个玩家Agent，还得给每个角色专门撰写带有独立人设的SOUL.md文件，

最后还得手搓一个后台程序和前端网页，来调度并直观呈现它们之间的游戏过程。

这个测试的刁钻之处在于，它同时深度考验了模型的指令遵循能力、统筹规划能力、多角色扮演稳定性以及全栈代码执行力。

![](https://pic1.zhimg.com/v2-6f1d0ad3337c2a4a3613f93e58b890a6_1440w.jpg)

结果，M2.7很快就把整套方案安排得明明白白，并且整理成了一目了然的格式。

![](https://pica.zhimg.com/v2-7ac3a5371455f25ef35e3e38073cd5b2_1440w.jpg)

当然，这个页面布局有些把“玩家”的卡片放得过大了，所以我们给了些调整要求，接下来M2.7就正式开始工作了。

一开始设计的游戏界面比较简单，但功能也是完整的，不过我们把它调整成了Minecraft风格，最后是长这个样子：

![](https://pic2.zhimg.com/v2-60d4611478d1f6721b5a0500a99ba151_1440w.jpg)

另一边，主持人和5个选手的“人设”，也都配置好了。

![](https://pic4.zhimg.com/v2-57c95327832497d53a08283f06fd6251_1440w.jpg)

点击开始按钮后，六个原生Agent便开始基于既定规则，在这个游戏房间里进行顺畅交流。

最终，这些选手也在主持人的带领下，完全自主地跑通了整个游戏流程，并决出胜负。

[https://www.zhihu.com/video/2017712261045699396](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2017712261045699396)

第二个测试，则是模拟真实生产环境，检验M2.7在强工程场景下的SRE级故障排查与综合推理能力。

这个任务也是放在龙虾里运行的，我们把一份“案发现场记录”直接丢在了桌面的文件夹，其中包括四份复杂生产系统文件材料。

任务要求极为苛刻，它需要像资深后端架构师那样，找出故障的直接触发事件，以及数据库CPU飙升的根本原因，并当场写出排查命令与安全的止血代码。

![](https://pic3.zhimg.com/v2-d73950bcece7da6ef4f0a9bdca9046e2_1440w.jpg)

面对庞杂的系统材料，M2.7展现出极度敏锐的诊断直觉，迅速从乱麻般的日志中，精准锁定拖垮数据库性能的真凶，给出的EXPLAIN命令完全切中要害。

![](https://pic4.zhimg.com/v2-3414d3be4873f0cd9b43bea0416bc727_1440w.jpg)

最令人放心的是，它在提供紧急恢复脚本时，极其专业地使用了
PostgreSQL
的CONCURRENTLY语法来执行非阻塞建库索引。

这直接证明它真真切切懂得了生产环境下“严禁锁表”的安全红线。

![](https://pic3.zhimg.com/v2-daf07f625fdf260548f04e328d399d22_1440w.jpg)

另外，M2.7还极为规矩地附上了完整的数据库迁移文件代码，其规范程度完全可以直接拿去提交合并请求。

```
CREATE INDEX CONCURRENTLY IF NOT EXISTS
  idx_products_category_created_at
ON public.products (category, created_at DESC);
-- Verify the index was built successfully andis valid
-- (CONCURRENTLY-built indexes may show indisvalid=false until background build completes)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_indexes
    WHERE indexname = 'idx_products_category_created_at'
      AND tablename = 'products'
  ) THEN
    RAISE NOTICE 'Index idx_products_category_created_at created successfully on products table.';
  ELSE
    RAISE EXCEPTION 'Index creation failed or did not complete. Check pg_stat_progress_create_index.';
  END IF;
END $$;
```

整个排障流程一气呵成，彻底展现了M2.7解决复杂系统灾难的硬核实力。

## **大模型开始自我进化了**

在M2.7这些让人眼前一亮的能力背后，还有一套技术逻辑的根本性进化。

首先一点是，M2.7已经具备了**自我构建复杂Agent Harness**的能力。

所谓Agent Harness，其实就是模型和现实电脑环境打交道的工具箱和操作台，OpenClaw就可以被理解为是Harness的一种。

再直白点说，以前的模型通常是人给什么工具就用什么，但现在M2.7已经能自己造工具了。

拿强化学习实验来说，研究员只要给个初始想法，M2.7就会自己把实验跑起来。

它会时刻盯着状态，自动看日志、排查故障、改代码，连提交合并请求和冒烟测试都顺手干了。

![](https://pic2.zhimg.com/v2-9fb75efa70954bc64e3acf72fefa3bf1_1440w.jpg)

而且M2.7不仅会造工具，**还能主动迭代Harness本身**，给整个工具箱来一波升级。

在优化内部Agent Harness代码的测试中，M2.7全程自主把控，通过反复试错，成功摸索出了优化路径，让模型在内部评测集上的效果直接拔高了30%。

再进一步，就是模型**自己去训练和升级机器学习模型**，这也是它能持续提升算法性能的关键。

M2.7靠短时记忆、自反馈和自优化这三招，每次跑完一轮都会生成md文件记住教训并给下一轮指路。

把它扔进MLE Lite这种极高难度的22道竞赛题里，给足24小时让它去自主优化ML模型，最终它拿下了9金5银1铜的成绩。

眼下整个行业都在紧盯硅谷风向，跟着一起疯狂吃虾，忙着适配OpenClaw来追赶热度。

跟进开源脚手架确实能快速补齐体验，但这依然停留在教模型怎么用人类工具的层面。

但就在此时，MiniMax已经切入了下一个更重要的论题，也就是让模型自己造工具搞研发，甚至**成为自身研发链条的一环**。

这种主动进化的能力，正是决定下一代大模型核心竞争力的分水岭。

具备了这般能力的
MiniMax M2.7
，已经抢先开启了模型自我迭代的新纪元。

—完—

@量子位 · 追踪AI技术和产品新动态

深有感触的朋友，欢迎赞同、关注、分享三连վ'ᴗ' ի ❤

编辑于 2026-03-18 21:23・北京

关于作者

[.css-1o44jgu{dynamic-range-limit:standard;border-radius:4px;}.css-1qhd7fe{box-sizing:border-box;margin:0;min-width:0;max-width:100%;height:auto;background-color:#ffffff;width:60px;height:60px;dynamic-range-limit:standard;border-radius:4px;}](https://www.zhihu.com/org/liang-zi-wei-48)

[量子位](https://www.zhihu.com/org/liang-zi-wei-48)

[.css-1ldqog6{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}​](https://zhuanlan.zhihu.com/p/96956163)
已认证机构号

[回答](https://www.zhihu.com/org/liang-zi-wei-48/answers)[文章](https://www.zhihu.com/org/liang-zi-wei-48/posts)[关注者](https://www.zhihu.com/org/liang-zi-wei-48/followers)
