# raw-papers Timestamp Audit

- audit_generated_at: 2026-05-22T03:11:06+08:00
- scope: `raw-papers/*.md` excluding `index.md` and this audit file
- paper_files_checked: 184
- arxiv_id_occurrences: 183
- unique_arxiv_ids: 113
- timestamp_field_coverage: 184/184 files have `content_timestamp`, `collected_at`, and `time_slice`
- full_date_coverage: 184/184 files have `content_timestamp` in `YYYY-MM-DD` format
- validation_status: PASS — no missing, `unknown`, or partial `YYYY`/`YYYY-MM` content timestamps remain

## Source Strategy
- Existing local paper metadata was used first, especially arXiv `Published`, `Submitted`, YAML/front-matter, and previously normalized gBrain fields.
- New files since the previous index are included in this audit and timestamp index.
- New files since previous index: 2502.04780.md, 2505.00234.md, 2506.10943.md, 2507.03616.md, 2507.19457.md, 2601.05280.md, 2602.23720.md, 2604.01687.md, 2605.06614.md.

## Coverage Summary

| Metric | Count |
|---|---:|
| Files checked | 184 |
| Missing required timestamp fields | 0 |
| Unknown timestamp fields | 0 |
| Partial content timestamps | 0 |

## Confidence Counts

| Confidence | Count |
|---|---:|
| derived | 169 |
| verified | 15 |

## Timestamp Source Counts

| Source | Count |
|---|---:|
| published_field | 84 |
| matched_duplicate_arxiv_metadata | 70 |
| arxiv submission date | 15 |
| arxiv_abs_page_submitted_on_verified | 14 |
| Nature/DeepMind FunSearch online publication date (web verified) | 1 |

## Year Distribution

| Year | Files |
|---|---:|
| 2022 | 2 |
| 2023 | 17 |
| 2024 | 40 |
| 2025 | 103 |
| 2026 | 22 |

## Per-file Timestamp Inventory

| File | arXiv ID | content_timestamp | time_slice | confidence | source |
|---|---|---:|---|---|---|
| 2203-14465.md | 2203.14465 | 2022-03-28 | early | derived | matched_duplicate_arxiv_metadata |
| 2203.14465.md | 2203.14465 | 2022-03-28 | early | derived | published_field |
| 2303-11366.md | 2303.11366 | 2023-03-20 | 2023-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2303-17651.md | 2303.17651 | 2023-03-30 | 2023-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2303.11366.md | 2303.11366 | 2023-03-20 | 2023-Q1 | derived | published_field |
| 2303.17651.md | 2303.17651 | 2023-03-30 | 2023-Q1 | derived | published_field |
| 2304-03442.md | 2304.03442 | 2023-04-07 | 2023-Q2 | derived | matched_duplicate_arxiv_metadata |
| 2304.03442.md | 2304.03442 | 2023-04-07 | 2023-Q2 | derived | published_field |
| 2305-14325.md | 2305.14325 | 2023-05-23 | 2023-Q2 | derived | matched_duplicate_arxiv_metadata |
| 2305-16291.md | 2305.16291 | 2023-05-25 | 2023-Q2 | derived | matched_duplicate_arxiv_metadata |
| 2305.14325.md | 2305.14325 | 2023-05-23 | 2023-Q2 | derived | published_field |
| 2305.16291.md | 2305.16291 | 2023-05-25 | 2023-Q2 | derived | published_field |
| 2308-10144.md | 2308.10144 | 2023-08-20 | 2023-Q3 | derived | matched_duplicate_arxiv_metadata |
| 2308.10144.md | 2308.10144 | 2023-08-20 | 2023-Q3 | derived | published_field |
| 2311-09336.md | 2311.09336 | 2023-11-15 | 2023-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2311.09336.md | 2311.09336 | 2023-11-15 | 2023-Q4 | derived | published_field |
| 2312-09390.md | 2312.09390 | 2023-12-14 | 2023-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2312.09390.md | 2312.09390 | 2023-12-14 | 2023-Q4 | derived | published_field |
| 2401-01335.md | 2401.01335 | 2024-01-02 | 2024-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2401-10020.md | 2401.10020 | 2024-01-18 | 2024-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2401-13996.md | 2401.13996 | 2024-01-25 | 2024-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2401.01335.md | 2401.01335 | 2024-01-02 | 2024-Q1 | derived | published_field |
| 2401.10020.md | 2401.10020 | 2024-01-18 | 2024-Q1 | derived | published_field |
| 2401.13996.md | 2401.13996 | 2024-01-25 | 2024-Q1 | derived | published_field |
| 2402-17574.md | 2402.17574 | 2024-02-27 | 2024-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2402.17574.md | 2402.17574 | 2024-02-27 | 2024-Q1 | derived | published_field |
| 2402.18381.md | 2402.18381 | 2024-02-28 | 2024-Q1 | verified | arxiv_abs_page_submitted_on_verified |
| 2403-18341.md | 2403.18341 | 2024-03-27 | 2024-Q1 | derived | matched_duplicate_arxiv_metadata |
| 2403.18341.md | 2403.18341 | 2024-03-27 | 2024-Q1 | derived | published_field |
| 2405-06682.md | 2405.06682 | 2024-05-05 | 2024-Q2 | derived | matched_duplicate_arxiv_metadata |
| 2405.06682.md | 2405.06682 | 2024-05-05 | 2024-Q2 | derived | published_field |
| 2406.18532.md | 2406.18532 | 2024-06-26 | 2024-Q2 | derived | published_field |
| 2407-18219.md | 2407.18219 | 2024-07-25 | 2024-Q3 | derived | matched_duplicate_arxiv_metadata |
| 2407.18219.md | 2407.18219 | 2024-07-25 | 2024-Q3 | derived | published_field |
| 2407.19594.md | 2407.19594 | 2024-07-28 | 2024-Q3 | verified | arxiv_abs_page_submitted_on_verified |
| 2408-08435.md | 2408.08435 | 2024-08-15 | 2024-Q3 | derived | matched_duplicate_arxiv_metadata |
| 2408.08435.md | 2408.08435 | 2024-08-15 | 2024-Q3 | derived | published_field |
| 2409-12917.md | 2409.12917 | 2024-09-19 | 2024-Q3 | derived | matched_duplicate_arxiv_metadata |
| 2409-18382.md | 2409.18382 | 2024-09-27 | 2024-Q3 | derived | matched_duplicate_arxiv_metadata |
| 2409.12147.md | 2409.12147 | 2024-09-18 | 2024-Q3 | verified | arxiv_abs_page_submitted_on_verified |
| 2409.12917.md | 2409.12917 | 2024-09-19 | 2024-Q3 | derived | published_field |
| 2409.14051.md | 2409.14051 | 2024-09-21 | 2024-Q3 | verified | arxiv_abs_page_submitted_on_verified |
| 2409.18382.md | 2409.18382 | 2024-09-27 | 2024-Q3 | derived | published_field |
| 2410-01215.md | 2410.01215 | 2024-10-02 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410-04444.md | 2410.04444 | 2024-10-06 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410-12853.md | 2410.12853 | 2024-10-10 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410-15639.md | 2410.15639 | 2024-10-21 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410-16946.md | 2410.16946 | 2024-10-22 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410-23912.md | 2410.23912 | 2024-10-31 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2410.01215.md | 2410.01215 | 2024-10-02 | 2024-Q4 | derived | published_field |
| 2410.04444.md | 2410.04444 | 2024-10-06 | 2024-Q4 | derived | published_field |
| 2410.12853.md | 2410.12853 | 2024-10-10 | 2024-Q4 | derived | published_field |
| 2410.15639.md | 2410.15639 | 2024-10-21 | 2024-Q4 | derived | published_field |
| 2410.16946.md | 2410.16946 | 2024-10-22 | 2024-Q4 | derived | published_field |
| 2410.23912.md | 2410.23912 | 2024-10-31 | 2024-Q4 | derived | published_field |
| 2411.02337.md | 2411.02337 | 2024-11-04 | 2024-Q4 | verified | arxiv_abs_page_submitted_on_verified |
| 2412-01951.md | 2412.01951 | 2024-12-02 | 2024-Q4 | derived | matched_duplicate_arxiv_metadata |
| 2412.01951.md | 2412.01951 | 2024-12-02 | 2024-Q4 | derived | published_field |
| 2501-01264.md | 2501.01264 | 2025-01-02 | 2025-01 | derived | matched_duplicate_arxiv_metadata |
| 2501-07278.md | 2501.07278 | 2025-01-13 | 2025-01 | derived | matched_duplicate_arxiv_metadata |
| 2501-11425.md | 2501.11425 | 2025-01-20 | 2025-01 | derived | matched_duplicate_arxiv_metadata |
| 2501-12793.md | 2501.12793 | 2025-01-22 | 2025-01 | derived | matched_duplicate_arxiv_metadata |
| 2501-13011.md | 2501.13011 | 2025-01-22 | 2025-01 | derived | matched_duplicate_arxiv_metadata |
| 2501.01264.md | 2501.01264 | 2025-01-02 | 2025-01 | derived | published_field |
| 2501.07278.md | 2501.07278 | 2025-01-13 | 2025-01 | derived | published_field |
| 2501.11425.md | 2501.11425 | 2025-01-20 | 2025-01 | derived | published_field |
| 2501.12793.md | 2501.12793 | 2025-01-22 | 2025-01 | derived | published_field |
| 2501.13011.md | 2501.13011 | 2025-01-22 | 2025-01 | derived | published_field |
| 2502-00593.md | 2502.00593 | 2025-02-01 | 2025-02 | derived | matched_duplicate_arxiv_metadata |
| 2502-05605.md | 2502.05605 | 2025-02-08 | 2025-02 | derived | matched_duplicate_arxiv_metadata |
| 2502-05957.md | 2502.05957 | 2025-02-09 | 2025-02 | derived | matched_duplicate_arxiv_metadata |
| 2502-13550.md | 2502.13550 | 2025-02-19 | 2025-02 | derived | matched_duplicate_arxiv_metadata |
| 2502.00593.md | 2502.00593 | 2025-02-01 | 2025-02 | derived | published_field |
| 2502.04780.md | 2502.04780 | 2025-02-07 | 2025-02 | derived | arxiv submission date |
| 2502.05605.md | 2502.05605 | 2025-02-08 | 2025-02 | derived | published_field |
| 2502.05957.md | 2502.05957 | 2025-02-09 | 2025-02 | derived | published_field |
| 2502.12110.md | 2502.12110 | 2025-02-17 | 2025-02 | verified | arxiv_abs_page_submitted_on_verified |
| 2502.13550.md | 2502.13550 | 2025-02-19 | 2025-02 | derived | published_field |
| 2504-01990.md | 2504.01990 | 2025-03-31 | 2025-03 | derived | matched_duplicate_arxiv_metadata |
| 2504-15228.md | 2504.15228 | 2025-04-21 | 2025-04 | derived | matched_duplicate_arxiv_metadata |
| 2504-20073.md | 2504.20073 | 2025-04-24 | 2025-04 | derived | matched_duplicate_arxiv_metadata |
| 2504-21024.md | 2504.21024 | 2025-04-23 | 2025-04 | derived | matched_duplicate_arxiv_metadata |
| 2504.01990.md | 2504.01990 | 2025-03-31 | 2025-03 | derived | published_field |
| 2504.15228.md | 2504.15228 | 2025-04-21 | 2025-04 | derived | published_field |
| 2504.20073.md | 2504.20073 | 2025-04-24 | 2025-04 | derived | published_field |
| 2504.21024.md | 2504.21024 | 2025-04-23 | 2025-04 | derived | published_field |
| 2505-03335.md | 2505.03335 | 2025-05-06 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505-08827.md | 2505.08827 | 2025-05-12 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505-14970.md | 2505.14970 | 2025-05-20 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505-16067.md | 2505.16067 | 2025-05-21 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505-16475.md | 2505.16475 | 2025-05-22 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505-23060.md | 2505.23060 | 2025-05-29 | 2025-05 | derived | matched_duplicate_arxiv_metadata |
| 2505.00234.md | 2505.00234 | 2025-05-01 | 2025-05 | derived | arxiv submission date |
| 2505.03335.md | 2505.03335 | 2025-05-06 | 2025-05 | derived | published_field |
| 2505.08827.md | 2505.08827 | 2025-05-12 | 2025-05 | derived | published_field |
| 2505.14970.md | 2505.14970 | 2025-05-20 | 2025-05 | derived | published_field |
| 2505.16067.md | 2505.16067 | 2025-05-21 | 2025-05 | derived | published_field |
| 2505.16475.md | 2505.16475 | 2025-05-22 | 2025-05 | derived | published_field |
| 2505.18646.md | 2505.18646 | 2025-05-24 | 2025-05 | verified | arxiv_abs_page_submitted_on_verified |
| 2505.22954.md | 2505.22954 | 2025-05-29 | 2025-05 | derived | published_field |
| 2505.23060.md | 2505.23060 | 2025-05-29 | 2025-05 | derived | published_field |
| 2506-01716.md | 2506.01716 | 2025-06-02 | 2025-06 | derived | matched_duplicate_arxiv_metadata |
| 2506-04651.md | 2506.04651 | 2025-06-05 | 2025-06 | derived | matched_duplicate_arxiv_metadata |
| 2506-09046.md | 2506.09046 | 2025-06-10 | 2025-06 | derived | matched_duplicate_arxiv_metadata |
| 2506-13131.md | 2506.13131 | 2025-06-16 | 2025-06 | derived | matched_duplicate_arxiv_metadata |
| 2506.01716.md | 2506.01716 | 2025-06-02 | 2025-06 | derived | published_field |
| 2506.04651.md | 2506.04651 | 2025-06-05 | 2025-06 | derived | published_field |
| 2506.09046.md | 2506.09046 | 2025-06-10 | 2025-06 | derived | published_field |
| 2506.10943.md | 2506.10943 | 2025-06-12 | 2025-06 | derived | arxiv submission date |
| 2506.13131.md | 2506.13131 | 2025-06-16 | 2025-06 | derived | published_field |
| 2506.24119.md | 2506.24119 | 2025-06-30 | 2025-06 | verified | arxiv_abs_page_submitted_on_verified |
| 2507-21046.md | 2507.21046 | 2025-07-28 | 2025-07 | derived | matched_duplicate_arxiv_metadata |
| 2507.03616.md | 2507.03616 | 2025-07-04 | 2025-07 | derived | arxiv submission date |
| 2507.19457.md | 2507.19457 | 2025-07-25 | 2025-07 | derived | arxiv submission date |
| 2507.21046.md | 2507.21046 | 2025-07-28 | 2025-07 | derived | published_field |
| 2508-02085.md | 2508.02085 | 2025-08-04 | 2025-08 | derived | matched_duplicate_arxiv_metadata |
| 2508-04700.md | 2508.04700 | 2025-08-06 | 2025-08 | derived | matched_duplicate_arxiv_metadata |
| 2508-07407.md | 2508.07407 | 2025-08-10 | 2025-08 | derived | matched_duplicate_arxiv_metadata |
| 2508-09586.md | 2508.09586 | 2025-08-13 | 2025-08 | derived | matched_duplicate_arxiv_metadata |
| 2508-19005.md | 2508.19005 | 2025-08-26 | 2025-08 | derived | matched_duplicate_arxiv_metadata |
| 2508.02085.md | 2508.02085 | 2025-08-04 | 2025-08 | derived | published_field |
| 2508.04700.md | 2508.04700 | 2025-08-06 | 2025-08 | derived | published_field |
| 2508.07407.md | 2508.07407 | 2025-08-10 | 2025-08 | derived | published_field |
| 2508.09586.md | 2508.09586 | 2025-08-13 | 2025-08 | derived | published_field |
| 2508.19005.md | 2508.19005 | 2025-08-26 | 2025-08 | derived | published_field |
| 2508.19828.md | 2508.19828 | 2025-08-27 | 2025-08 | verified | arxiv_abs_page_submitted_on_verified |
| 2509-04575.md | 2509.04575 | 2025-09-04 | 2025-09 | derived | matched_duplicate_arxiv_metadata |
| 2509-22502.md | 2509.22502 | 2025-09-26 | 2025-09 | derived | matched_duplicate_arxiv_metadata |
| 2509-25140.md | 2509.25140 | 2025-09-29 | 2025-09 | derived | matched_duplicate_arxiv_metadata |
| 2509.04575.md | 2509.04575 | 2025-09-04 | 2025-09 | derived | published_field |
| 2509.20562.md | 2509.20562 | 2025-09-24 | 2025-09 | verified | arxiv_abs_page_submitted_on_verified |
| 2509.22502.md | 2509.22502 | 2025-09-26 | 2025-09 | derived | published_field |
| 2509.25140.md | 2509.25140 | 2025-09-29 | 2025-09 | derived | published_field |
| 2509.25541.md | 2509.25541 | 2025-09-29 | 2025-09 | verified | arxiv_abs_page_submitted_on_verified |
| 2509.26354.md | 2509.26354 | 2025-09-30 | 2025-09 | derived | arxiv submission date |
| 2510-04618.md | 2510.04618 | 2025-10-06 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-06056.md | 2510.06056 | 2025-10-07 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-07841.md | 2510.07841 | 2025-10-09 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-14253.md | 2510.14253 | 2025-10-16 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-16079.md | 2510.16079 | 2025-10-17 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-17498.md | 2510.17498 | 2025-10-20 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-18327.md | 2510.18327 | 2025-10-21 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510-23595.md | 2510.23595 | 2025-10-27 | 2025-10 | derived | matched_duplicate_arxiv_metadata |
| 2510.04618.md | 2510.04618 | 2025-10-06 | 2025-10 | derived | published_field |
| 2510.06056.md | 2510.06056 | 2025-10-07 | 2025-10 | derived | published_field |
| 2510.07841.md | 2510.07841 | 2025-10-09 | 2025-10 | derived | published_field |
| 2510.14253.md | 2510.14253 | 2025-10-16 | 2025-10 | derived | published_field |
| 2510.16079.md | 2510.16079 | 2025-10-17 | 2025-10 | derived | published_field |
| 2510.17498.md | 2510.17498 | 2025-10-20 | 2025-10 | derived | published_field |
| 2510.18327.md | 2510.18327 | 2025-10-21 | 2025-10 | derived | published_field |
| 2510.23595.md | 2510.23595 | 2025-10-27 | 2025-10 | derived | published_field |
| 2511-10395.md | 2511.10395 | 2025-11-13 | 2025-11 | derived | matched_duplicate_arxiv_metadata |
| 2511-16043.md | 2511.16043 | 2025-11-20 | 2025-11 | derived | matched_duplicate_arxiv_metadata |
| 2511-23473.md | 2511.23473 | 2025-11-28 | 2025-11 | derived | matched_duplicate_arxiv_metadata |
| 2511.06449.md | 2511.06449 | 2025-11-09 | 2025-11 | verified | arxiv_abs_page_submitted_on_verified |
| 2511.10395.md | 2511.10395 | 2025-11-13 | 2025-11 | derived | published_field |
| 2511.16043.md | 2511.16043 | 2025-11-20 | 2025-11 | derived | published_field |
| 2511.23473.md | 2511.23473 | 2025-11-28 | 2025-11 | derived | published_field |
| 2512-09108.md | 2512.09108 | 2025-12-09 | 2025-12 | derived | matched_duplicate_arxiv_metadata |
| 2512.09108.md | 2512.09108 | 2025-12-09 | 2025-12 | derived | published_field |
| 2512.22716.md | 2512.22716 | 2025-12-27 | 2025-12 | verified | arxiv_abs_page_submitted_on_verified |
| 2601.05280.md | 2601.05280 | 2026-01-05 | 2026-01 | derived | arxiv submission date |
| 2602.01983.md | 2602.01983 | 2026-02-02 | 2026-02 | derived | published_field |
| 2602.02474.md | 2602.02474 | 2026-02-02 | 2026-02 | derived | published_field |
| 2602.23720.md | 2602.23720 | 2026-02-27 | 2026-02 | derived | arxiv submission date |
| 2603.03290.md | 2603.03290 | 2026-02-05 | 2026-02 | verified | arxiv_abs_page_submitted_on_verified |
| 2603.07970.md | 2603.07970 | 2026-03-09 | 2026-03 | derived | published_field |
| 2603.15255.md | 2603.15255 | 2026-03-16 | 2026-03 | derived | published_field |
| 2603.19461.md | 2603.19461 | 2026-03-19 | 2026-03 | derived | arxiv submission date |
| 2603.25928.md | 2603.25928 | 2026-03-26 | 2026-03 | derived | published_field |
| 2603.28990.md | 2603.28990 | 2026-03-30 | 2026-03 | derived | published_field |
| 2604.01658.md | 2604.01658 | 2026-04-02 | 2026-04 | derived | published_field |
| 2604.01687.md | 2604.01687 | 2026-04-02 | 2026-04 | derived | arxiv submission date |
| 2604.02674.md | 2604.02674 | 2026-04-03 | 2026-04 | derived | published_field |
| 2604.10923.md | 2604.10923 | 2026-04-13 | 2026-04 | derived | published_field |
| 2604.15034.md | 2604.15034 | 2026-04-16 | 2026-04 | derived | arxiv submission date |
| 2604.17091.md | 2604.17091 | 2026-04-18 | 2026-04 | derived | arxiv submission date |
| 2604.18131.md | 2604.18131 | 2026-04-20 | 2026-04 | derived | published_field |
| 2605.04677.md | 2605.04677 | 2026-05-06 | 2026-05 | derived | published_field |
| 2605.06614.md | 2605.06614 | 2026-05-07 | 2026-05 | derived | arxiv submission date |
| 2605.09315.md | 2605.09315 | 2026-05-10 | 2026-05 | derived | arxiv submission date |
| 2605.18930.md | 2605.18930 | 2026-05-18 | 2026-05 | derived | arxiv submission date |
| 2605.19102.md | 2605.19102 | 2026-05-18 | 2026-05 | derived | published_field |
| placeholder-no-arxiv.md |  | 2023-12-14 | 2023-Q4 | verified | Nature/DeepMind FunSearch online publication date (web verified) |

## Verification Command

```bash
python3 scripts/enforce_raw_timestamps.py
python3 - <<'PY'
import json; r=json.load(open('raw-papers-timestamp-validation-report.json')); assert r['missing_count']==0 and r['unknown_content_timestamp_count']==0 and r['malformed_content_timestamp_count']==0; print(r['file_count'], 'files checked; PASS')
PY
```
