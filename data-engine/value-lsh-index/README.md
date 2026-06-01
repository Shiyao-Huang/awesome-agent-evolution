# Value LSH Index Dataset

> Work-layer dataset for the value-facet classification system.

## One Sentence

This directory stores the discrete value matrix, LSH signatures, clusters, 3D projection, and incremental manifest for comparing GitHub projects, papers, social/X captures, and blogs.

## Files

| File | Role |
|---|---|
| `value-tags.json` | Current facet definitions and tag version. |
| `value-matrix.jsonl` | One row per material with `-1/0/+1` facet values, score, class, and evidence refs. |
| `value-matrix.csv` | Spreadsheet-friendly copy of the matrix. |
| `signatures.jsonl` | Ternary signatures and local hash bands. |
| `buckets.json` | LSH buckets for fast near-neighbor recall. |
| `clusters.json` | LSH-derived value neighborhoods. |
| `projection-3d.json` | 3D graph coordinates from value/hash/OpenAI embeddings and PCA/TSNE. |
| `embeddings-*.jsonl` | Optional embedding caches. Do not commit private text or secrets. |
| `manifest.json` | Incremental fingerprints: added, changed, unchanged, removed rows. |

## Deduplication

`raw-social-rank` is a ranked seed subset of `raw-social`, not an independent material corpus. The generator folds matching ranked files into the canonical `raw-social` row with `evidence_refs.rank_seed = true` and `alternate_source_paths`, while support files such as `README.md`, `raw-social-rank-index.md`, and `batch_*.md` are excluded from material counts.

## Commands

```bash
node scripts/build_value_lsh_index.mjs --source all
node scripts/build_value_embedding_projection.mjs --provider value --projection pca --k 24
node scripts/build_value_evidence_repair_queue.mjs
node scripts/build_value_embedding_projection.mjs --provider hash --projection tsne --limit 700
node scripts/build_value_embedding_projection.mjs --provider gbrain --projection tsne --limit 700
node scripts/build_value_embedding_projection.mjs --provider openai --projection tsne --limit 700
```

For `gbrain` and `openai`, provide credentials through environment variables such as `OPENAI_API_KEY`. The script reads the gbrain embedding base URL from `~/.gbrain/config.json` (`provider_base_urls["openai:embedding"]`) and never writes keys to this dataset.

## Boundary

Raw files stay immutable. This dataset is a work artifact: it can be regenerated, compared, and published into processed analysis, but it is not the source of truth by itself.
