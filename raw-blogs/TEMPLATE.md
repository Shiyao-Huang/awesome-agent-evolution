# {name}

- URL: {url}
- Platform: {platform}
- Source type: {source_type}
- Category: {category}
- Source dataset: {source_dataset}
- Extraction status: {extraction_status}
- Collected at: {collected_at}
- Published at: {published_at}
- Time slice: {time_slice}

## Author Influence Profile

- Name/ID: {author_profile.name_or_id}
- Title / Role / Company: {author_profile.title_role_company}
- X/Twitter followers: {author_profile.social_media_followers.x_twitter}
- LinkedIn followers: {author_profile.social_media_followers.linkedin}
- YouTube followers: {author_profile.social_media_followers.youtube}
- Blog / Personal site: {author_profile.blog_or_personal_site}
- Primary domains: {author_profile.primary_domains as comma-separated text}
- Notable works / high-impact articles: {author_profile.notable_works_or_high_impact_articles as bullet list}
- H-index / academic impact: {author_profile.academic_impact.h_index}; {author_profile.academic_impact.citation_note}
- GitHub impact: {author_profile.developer_impact.github_profile_url}; total stars {author_profile.developer_impact.github_total_stars}
- Industry influence rating: {author_profile.industry_influence_rating}
- Evidence URLs: {author_profile.evidence_urls as bullet list}
- Notes: {author_profile.notes}

## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

## Raw Content

{content}

## Serialization Rule

When rendering nested fields such as `author_profile.social_media_followers`, `notable_works_or_high_impact_articles`, `academic_impact`, or `developer_impact`, do not concatenate JavaScript objects directly into strings. Extract scalar fields first, join arrays explicitly, or use `JSON.stringify(value, null, 2)` inside fenced JSON blocks to avoid `[object Object]` output.

## Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Author Influence Profile

- name_or_id: unknown
- title_position_company: unknown
- social_followers: X/Twitter=unknown; LinkedIn=unknown
- blog_or_website: https://example.com/article
- domains_expertise: agent_evolution_category
- representative_works: []
- h_index_academic_impact: unknown
- github_stars_developer_impact: unknown
- industry_influence_rating: KOL|expert|practitioner|organization|unknown
- profile_confidence: low
- needs_enrichment: True
