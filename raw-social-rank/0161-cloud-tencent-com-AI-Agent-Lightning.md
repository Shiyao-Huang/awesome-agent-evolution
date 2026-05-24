# 让 AI 智能体学会自我进化：Agent Lightning 实战入门-腾讯云开发者社区-腾讯云

- URL: https://cloud.tencent.com/developer/article/2631843
- Platform: cloud.tencent.com
- Extraction status: ok
- content_timestamp: 2026-02
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- Query: site:cloud.tencent.com AI Agent 自优化

## Raw Content

## 让 AI 智能体学会自我进化：Agent Lightning 实战入门-腾讯云开发者社区-腾讯云

**Source**: https://cloud.tencent.com/developer/article/2631843

---

[https://cloud.tencent.com/developer/user/7220647](https://cloud.tencent.com/developer/user/7220647)

[deephub](https://cloud.tencent.com/developer/user/7220647)

## 让 AI 智能体学会自我进化：Agent Lightning 实战入门

[腾讯云](https://cloud.tencent.com/?from=20060&from_column=20060)

[开发者社区](https://cloud.tencent.com/developer)

[文档](https://cloud.tencent.com/document/product?from=20702&from_column=20702)[建议反馈](https://cloud.tencent.com/voc/?from=20703&from_column=20703)[控制台](https://console.cloud.tencent.com/?from=20063&from_column=20063)

[首页](https://cloud.tencent.com/developer)

学习

活动

专区

圈层

工具

[MCP广场](https://cloud.tencent.com/developer/mcp)

文章/答案/技术大牛

发布

deephub

**

**

**

**

**

[社区首页](https://cloud.tencent.com/developer)
 >
[专栏](https://cloud.tencent.com/developer/column)
 >

让 AI 智能体学会自我进化：Agent Lightning 实战入门

# 让 AI 智能体学会自我进化：Agent Lightning 实战入门

![作者头像](https://ask.qcloudimg.com/http-save/yehe-7220647/81c5154365040aaa9485cbb02ccf9263.png)

deephub

发布于 2026-02-27 11:35:41

发布于 2026-02-27 11:35:41

424

0

举报

**文章被收录于专栏：

[DeepHub IMBA](https://cloud.tencent.com/developer/column/86944)
DeepHub IMBA

**点击上方“Deephub Imba”,关注公众号,好文章不错过 !**

当前主流 AI 智能体框架有一个共同的局限：智能体只能按预设逻辑执行任务，无法从运行时反馈中持续学习。模型权重是静态的，提示词需要人工迭代，整个系统缺乏自我优化的闭环。

![](https://developer.qcloudimg.com/http-save/yehe-7220647/29854138dd267e11591854e0da6f1c47.jpg)

Agent Lightning 针对这一问题提出了解决方案。它是一个框架无关的强化学习包装层，可以套在任意现有智能体外部，让智能体具备在线学习能力。无论底层用的是 LangChain、AutoGen、CrewAI 还是原生 Python 实现，都能以最小改动接入训练流程。

本文将介绍 Agent Lightning 的核心架构和使用方法，并通过一个开源的"自修复 SQL 智能体"项目演示完整的训练流程。

![](https://developer.qcloudimg.com/http-save/yehe-7220647/a9a0661eed4674a8e6a1d52e2142cc58.jpg)

### Agent Lightning 的核心特性

Agent Lightning 具备两个关键的设计优势：框架无关性和执行训练解耦。

框架无关性意味着它不绑定特定的智能体实现。无论底层是 LangChain、AutoGen、CrewAI 还是原生 Python 代码，都可以通过统一的接口接入训练流程，无需重构现有逻辑。

执行与训练解耦则是指智能体的推理执行和强化学习训练在架构上分离。智能体正常处理业务请求，训练模块在后台异步收集反馈、更新策略。这种设计保证了生产环境的稳定性，同时支持持续优化。

### Agent Lightning 的工作原理

Agent Lightning 由四个核心组件构成：

Runner 负责智能体的沙箱执行。它为智能体提供隔离的运行环境，执行任务并记录完整的行为轨迹，包括输入、输出、中间状态和最终结果。Trainer 负责策略优化。它根据 Runner 收集的轨迹数据计算奖励信号，通过强化学习算法更新智能体的行为策略。LightningStore 是持久化存储层，保存所有历史轨迹、奖励记录和模型检查点，支持离线分析和增量训练。

VERL（Volcano Engine Reinforcement Learning）专门处理多步骤任务中的信用分配问题。在长序列决策中，最终奖励需要回溯分配到各个中间步骤。VERL 通过时序差分等方法，将整体奖励拆解到具体动作，解决稀疏奖励场景下的训练难题。

![](https://developer.qcloudimg.com/http-save/yehe-7220647/7e6edb07ea0644d4eed0973fe5f75a30.jpg)

### 构建一个自纠正智能体

理论讲完了。下面看怎么落地。目标是构建一个学会简洁回答的智能体。

先装库，它会包在现有 LLM 调用外面。

代码语言：
javascript

复制

```
pip install agentlightning
```

普通智能体就是发提示、拿回复。用 Agent Lightning 的话，要在函数外面加一个 `@agl.rollout` 装饰器。意思是告诉系统：盯着这个函数，给它打分，帮我改进它。

下面这个例子是一个回答首都城市的简单智能体。目标是让它输出精确答案（比如直接回"Paris"）而不是废话连篇（"The capital is Paris"）。

代码语言：
javascript

复制

```
import agentlightning as agl  
from openai import OpenAI  

# 1. Define the Reward (The Coach's Whistle)  
def exact_match_reward(prediction, target):  
    # Reward is 1.0 if correct and concise, 0.0 otherwise  
    return 1.0 if prediction.strip().lower() == target.strip().lower() else 0.0  

# 2. Define the Agent  
@agl.rollout  
def capital_city_agent(task, prompt_template):  
    # Use the dynamic prompt template provided by the Trainer  
    system_prompt = prompt_template.format(**task)  
      
    response = client.chat.completions.create(  
        model="gpt-4o",  
        messages=[  
            {"role": "system", "content": system_prompt},  
            {"role": "user", "content": f"Capital of {task['input']}?"}  
        ]  
    )  
      
    prediction = response.choices[0].message.content  
     return exact_match_reward(prediction, task['target'])
```

这样就不用手动改提示词了，交给 Trainer。

代码语言：
javascript

复制

```
# Initialize the optimizer (Automatic Prompt Optimization)  
optimizer = agl.APO(inference_client=client)  

# Define a starting "bad" prompt  
initial_prompt = agl.PromptTemplate("You are a geography helper.")  

# Start the gym session  
trainer = agl.Trainer(  
    algorithm=optimizer,  
    initial_resources={"prompt_template": initial_prompt}  
)  

trainer.fit(  
    agent=capital_city_agent,  
    train_dataset=[{"input": "France", "target": "Paris"}, ...],  
 )
```

![](https://developer.qcloudimg.com/http-save/yehe-7220647/b058c8227892b933c7910835e147282a.jpg)

跑完之后，Agent Lightning 会自动把提示词改写成类似这样："You are a precise geography assistant. Output ONLY the city name with no punctuation."

![](https://developer.qcloudimg.com/http-save/yehe-7220647/f52e6e07b1874375e8289f5fd10db3f6.jpg)

### 总结

Agent Lightning 为现有智能体提供了一套轻量级的在线学习方案，通过框架无关的设计和执行训练解耦架构，降低了强化学习在智能体开发中的接入门槛。

落地过程中需要注意几个问题：奖励函数设计直接影响优化方向，指标定义不当会导致智能体学到错误行为；训练过程消耗计算资源，多智能体场景需要做好监控；持续学习带来的模型漂移也需要治理机制保障，防止智能体偏离预期的安全边界。

从更大的视角看，Agent Lightning 代表了智能体开发从静态部署向动态进化的转变。随着这类工具的成熟，智能体将逐步具备自适应能力，成为真正意义上的学习型系统。

作者：Aarav Sharma

---

喜欢就关注一下吧：

点个 **在看** 你最好看！ 

本文参与 [腾讯云自媒体同���曝光计划](https://cloud.tencent.com/developer/support-plan)，分享自微信公众号。

原始发表：2026-02-01，如有侵权请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除

[框架](https://cloud.tencent.com/developer/tag/17353)

[入门](https://cloud.tencent.com/developer/tag/17416)

[优化](https://cloud.tencent.com/developer/tag/17554)

[强化学习](https://cloud.tencent.com/developer/tag/10692)

[agent](https://cloud.tencent.com/developer/tag/11736)

本文分享自 
DeepHub IMBA
 微信公众号，
前往查看

如有侵权，请联系 [cloudcommunity@tencent.com](mailto:cloudcommunity@tencent.com) 删除。

本文参与 [腾讯云自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)  ，欢迎热爱写作的你一起参与！

[框架](https://cloud.tencent.com/developer/tag/17353)

[入门](https://cloud.tencent.com/developer/tag/17416)

[优化](https://cloud.tencent.com/developer/tag/17554)

[强化学习](https://cloud.tencent.com/developer/tag/10692)

[agent](https://cloud.tencent.com/developer/tag/11736)

评论

登录
后参与评论

0 条评论

热度

最新

登录 
后参与评论

推荐阅读

目录

- 
Agent Lightning 的核心特性

- 
Agent Lightning 的工作原理

- 
构建一个自纠正智能体

- 
总结

领券

- 

### 社区

  - [技术文章](https://cloud.tencent.com/developer/column)
  - [技术问答](https://cloud.tencent.com/developer/ask)
  - [技术沙龙](https://cloud.tencent.com/developer/salon)
  - [技术视频](https://cloud.tencent.com/developer/video)
  - [学习中心](https://cloud.tencent.com/developer/learning)
  - [技术百科](https://cloud.tencent.com/developer/techpedia)
  - [技术专区](https://cloud.tencent.com/developer/zone/list)

- 

### 活动

  - [自媒体同步曝光计划](https://cloud.tencent.com/developer/support-plan)
  - [邀请作者入驻](https://cloud.tencent.com/developer/support-plan-invitation)
  - [自荐上首页](https://cloud.tencent.com/developer/article/1535830)
  - [技术竞赛](https://cloud.tencent.com/developer/competition)

- 

### 圈层

  - [腾讯云最具价值专家](https://cloud.tencent.com/tvp)
  - [腾讯云架构师技术同盟](https://cloud.tencent.com/developer/program/tm)
  - [腾讯云创作之星](https://cloud.tencent.com/developer/program/tci)
  - [腾讯云TDP](https://cloud.tencent.com/developer/program/tdp)

- 

### 关于

  - [社区规范](https://cloud.tencent.com/developer/article/1006434)
  - [免责声明](https://cloud.tencent.com/developer/article/1006435)
  - [联系我们](mailto:cloudcommunity@tencent.com)
  - [友情链接](https://cloud.tencent.com/developer/friendlink)
  - [MCP广场开源版权声明](https://cloud.tencent.com/developer/article/2537547)

### 腾讯云开发者

![扫码关注腾讯云开发者](https://qcloudimg.tencent-cloud.cn/raw/a8907230cd5be483497c7e90b061b861.png?imageView2/2/w/200)

扫码关注腾讯云开发者

领取腾讯云代金券

### 热门产品

- [域名注册](https://cloud.tencent.com/product/domain?from=20064&from_column=20064)
- [云服务器](https://cloud.tencent.com/product/cvm?from=20064&from_column=20064)
- [区块链服务](https://cloud.tencent.com/product/tbaas?from=20064&from_column=20064)
- [消息队列](https://cloud.tencent.com/product/message-queue-catalog?from=20064&from_column=20064)
- [网络加速](https://cloud.tencent.com/product/ecdn?from=20064&from_column=20064)
- [云数据库](https://cloud.tencent.com/product/tencentdb-catalog?from=20064&from_column=20064)
- [域名解析](https://cloud.tencent.com/product/dns?from=20064&from_column=20064)
- [云存储](https://cloud.tencent.com/product/cos?from=20064&from_column=20064)
- [视频直播](https://cloud.tencent.com/product/css?from=20064&from_column=20064)

### 热门推荐

- [人脸识别](https://cloud.tencent.com/product/facerecognition?from=20064&from_column=20064)
- [腾讯会议](https://cloud.tencent.com/product/tm?from=20064&from_column=20064)
- [企业云](https://cloud.tencent.com/act/pro/enterprise2022?from=20064&from_column=20064)
- [CDN加速](https://cloud.tencent.com/product/cdn?from=20064&from_column=20064)
- [视频通话](https://cloud.tencent.com/product/trtc?from=20064&from_column=20064)
- [图像分析](https://cloud.tencent.com/product/imagerecognition?from=20064&from_column=20064)
- [MySQL 数据库](https://cloud.tencent.com/product/cdb?from=20064&from_column=20064)
- [SSL 证书](https://cloud.tencent.com/product/ssl?from=20064&from_column=20064)
- [语音识别](https://cloud.tencent.com/product/asr?from=20064&from_column=20064)

### 更多推荐

- [数据安全](https://cloud.tencent.com/solution/data_protection?from=20064&from_column=20064)
- [负载均衡](https://cloud.tencent.com/product/clb?from=20064&from_column=20064)
- [短信](https://cloud.tencent.com/product/sms?from=20064&from_column=20064)
- [文字识别](https://cloud.tencent.com/product/ocr?from=20064&from_column=20064)
- [云点播](https://cloud.tencent.com/product/vod?from=20064&from_column=20064)
- [大数据](https://cloud.tencent.com/product/bigdata-class?from=20064&from_column=20064)
- [小程序开发](https://cloud.tencent.com/solution/la?from=20064&from_column=20064)
- [网站监控](https://cloud.tencent.com/product/tcop?from=20064&from_column=20064)
- [数据迁移](https://cloud.tencent.com/product/cdm?from=20064&from_column=20064)

Copyright © 2013 - 2026 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有 

[深圳市腾讯计算机系统有限公司](https://qcloudimg.tencent-cloud.cn/raw/986376a919726e0c35e96b311f54184d.jpg)
 ICP备案/许可证号：
[粤B2-20090059](https://beian.miit.gov.cn/#/Integrated/index)![](https://qcloudimg.tencent-cloud.cn/raw/eed02831a0e201b8d794c8282c40cf2e.png)[粤公网安备44030502008569号](https://beian.mps.gov.cn/#/query/webSearch?code=44030502008569)

[腾讯云计算（北京）有限责任公司](https://qcloudimg.tencent-cloud.cn/raw/a2390663ee4a95ceeead8fdc34d4b207.jpg) 京ICP证150476号 |  [京ICP备11018762号](https://beian.miit.gov.cn/#/Integrated/index)

[问题归档](https://cloud.tencent.com/developer/ask/archives.html)[专栏文章](https://cloud.tencent.com/developer/column/archives.html)[快讯文章归档](https://cloud.tencent.com/developer/news/archives.html)[关键词归档](https://cloud.tencent.com/developer/information/all.html)[开发者手册归档](https://cloud.tencent.com/developer/devdocs/archives.html)[开发者手册 Section 归档](https://cloud.tencent.com/developer/devdocs/sections_p1.html)

Copyright © 2013 - 2026 Tencent Cloud.

All Rights Reserved. 腾讯云 版权所有

登录 
后参与评论

**

**

**

**
