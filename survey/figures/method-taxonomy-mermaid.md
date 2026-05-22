# 方法分类 Mermaid 图（论文全量快照）

- generated_at: 2026-05-21T22:21:49+08:00
- paper_source: `output/raw-papers-timestamp-index.json` + `raw-papers/*.md`
- current_papers_classified: 87
- note: 这是自动关键词初分类，后续需由论文review #26-#88 的深度结论校正。

```mermaid
flowchart TD
    Root["Self-Evolving / Agent Evolution Methods"] --> Methods["方法族（自动初分类）"]
    Methods --> rewardRLselfplay
    Methods --> codeselfmodification
    Methods --> multiagentreflectiondeba
    Methods --> memoryknowledgeevolution
    Methods --> webtoolenvironmentadapta
    Methods --> promptsearchoptimization
    Methods --> evaluationsafetygovernan
        rewardRLselfplay["reward/RL/self-play<br/>36 papers"]
        codeselfmodification["code/self-modification<br/>16 papers"]
        multiagentreflectiondeba["multi-agent reflection/debate<br/>10 papers"]
        memoryknowledgeevolution["memory/knowledge evolution<br/>9 papers"]
        webtoolenvironmentadapta["web/tool/environment adaptation<br/>7 papers"]
        promptsearchoptimization["prompt/search optimization<br/>7 papers"]
        evaluationsafetygovernan["evaluation/safety/governance<br/>2 papers"]
```

| Method family | Papers | Share |
|---|---:|---:|
| reward/RL/self-play | 36 | 41.4% |
| code/self-modification | 16 | 18.4% |
| multi-agent reflection/debate | 10 | 11.5% |
| memory/knowledge evolution | 9 | 10.3% |
| web/tool/environment adaptation | 7 | 8.0% |
| prompt/search optimization | 7 | 8.0% |
| evaluation/safety/governance | 2 | 2.3% |

详表：`paper-method-classification-snapshot.csv`。
