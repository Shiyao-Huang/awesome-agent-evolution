# Raw Data Timestamp + Time Slice Standard

Date: 2026-05-21  
Scope: all files under `raw-github/`, `raw-papers/`, `raw-social/`, `raw-blogs/` and all future raw data collection.

## Required fields

Every raw data record must include these fields:

| Field | Required | Meaning | Example |
|---|---|---|---|
| `content_timestamp` | yes | Original content publish/create/update date. Use the most specific reliable date available. | `2025-04-17`, `2024-Q2`, `unknown` |
| `collected_at` | yes | Collection timestamp in ISO 8601. | `2026-05-21T00:00:00+08:00` |
| `time_slice` | yes | Derived time bucket for longitudinal analysis. | `2025-04`, `2024-Q2`, `early` |
| `timestamp_confidence` | recommended | `explicit`, `derived`, or `unknown`. | `derived` |
| `timestamp_source` | recommended | Where the timestamp came from. | `Published line`, `GitHub updated date`, `no reliable timestamp found` |

## Time-slice rules

- 2022 and earlier → `early`
- 2023 → quarterly: `2023-Q1` through `2023-Q4`
- 2024 → quarterly: `2024-Q1` through `2024-Q4`
- 2025 → monthly: `2025-01` through `2025-12`
- 2026 → monthly: `2026-01` through `2026-05`
- No reliable date → `unknown`

## JSON template

```json
{
  "id": "source-stable-id",
  "url": "https://example.com/item",
  "source_type": "github|paper|social|blog|product_discovery|video",
  "content_timestamp": "2025-04-17",
  "collected_at": "2026-05-21T00:00:00+08:00",
  "time_slice": "2025-04",
  "timestamp_confidence": "explicit",
  "timestamp_source": "published_at metadata from source page",
  "content": "raw extracted content"
}
```

## Markdown template

```markdown
# Title

- URL: https://example.com/item
- content_timestamp: 2025-04-17
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-04
- timestamp_confidence: explicit
- timestamp_source: published_at metadata from source page

## Raw Content

...
```

## Enforcement note

If a source has no reliable original publication/create/update timestamp, do **not** invent one. Set `content_timestamp: unknown`, `time_slice: unknown`, `timestamp_confidence: unknown`, and explain the gap in `timestamp_source`.
