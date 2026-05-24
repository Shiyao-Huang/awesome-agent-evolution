# raw-blogs format

Each raw blog/Product Hunt/YouTube/newsletter record must have both `.json` and `.md` forms. The canonical JSON schema is `raw-blogs/TEMPLATE.json`; the Markdown rendering template is `raw-blogs/TEMPLATE.md`.

Required top-level fields:

- `id`
- `name`
- `url`
- `platform`
- `source_type`
- `category`
- `source_dataset`
- `extraction_status`
- `error`
- `collected_at`
- `published_at`
- `time_slice`
- `author_profile`
- `content`

`author_profile` is required for every new or updated raw-blog record and must include:

- `name_or_id`
- `title_role_company`
- `social_media_followers.x_twitter`
- `social_media_followers.linkedin`
- `blog_or_personal_site`
- `primary_domains`
- `notable_works_or_high_impact_articles`
- `academic_impact.h_index`
- `developer_impact.github_total_stars`
- `industry_influence_rating` (`KOL`, `expert`, `practitioner`, `organization`, or `unknown`)
- `evidence_urls`
- `notes`

If a value cannot be verified, use `null`, `unknown`, or an empty list plus an evidence note; do not invent metrics.

## Rendering guard

Nested JSON objects must not be appended directly to strings. Use scalar extraction, explicit joins, or `JSON.stringify(obj, null, 2)` for nested blocks to prevent `[object Object]` in generated Markdown.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

