# 方法分类 Mermaid 图（论文全量快照）

- generated_at: 2026-05-26T09:34:56+08:00
- paper_source: `output/raw-papers-timestamp-index.json` + `raw-papers/*.md`
- current_papers_classified: 196
- note: 这是自动关键词初分类，后续需由论文review #26-#88 的深度结论校正。

```mermaid
flowchart TD
    Root["Self-Evolving / Agent Evolution Methods"] --> Methods["方法族（自动初分类）"]
    Methods --> promptsearchoptimization
    Methods --> rewardRLselfplay
    Methods --> codeselfmodification
    Methods --> multiagentreflectiondeba
    Methods --> memoryknowledgeevolution
    Methods --> webtoolenvironmentadapta
    Methods --> evaluationsafetygovernan
        promptsearchoptimization["prompt/search optimization<br/>68 papers"]
        rewardRLselfplay["reward/RL/self-play<br/>51 papers"]
        codeselfmodification["code/self-modification<br/>28 papers"]
        multiagentreflectiondeba["multi-agent reflection/debate<br/>16 papers"]
        memoryknowledgeevolution["memory/knowledge evolution<br/>16 papers"]
        webtoolenvironmentadapta["web/tool/environment adaptation<br/>13 papers"]
        evaluationsafetygovernan["evaluation/safety/governance<br/>4 papers"]
```

| Method family | Papers | Share |
|---|---:|---:|
| prompt/search optimization | 68 | 34.7% |
| reward/RL/self-play | 51 | 26.0% |
| code/self-modification | 28 | 14.3% |
| multi-agent reflection/debate | 16 | 8.2% |
| memory/knowledge evolution | 16 | 8.2% |
| web/tool/environment adaptation | 13 | 6.6% |
| evaluation/safety/governance | 4 | 2.0% |

详表：`paper-method-classification-snapshot.csv`。
