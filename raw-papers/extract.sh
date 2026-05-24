#!/bin/bash
# Batch extract arXiv papers via anysearch
# Usage: bash extract.sh
ARXIV_IDS=(
  2505.22954 2410.04444 2504.20073 2408.08435 2406.18532
  2410.16946 2511.10395 2509.22502 2508.04700 2508.02085
  2508.19005 2511.16043 2407.18219 2501.11425 2504.15228
  2510.16079 2510.04618 2410.15639 2502.05605 2509.04575
  2506.01716 2510.07841 2504.21024 2506.09046 2506.04651
  2303.17651 2311.09336 2402.17574 2505.23060 2505.16475
  2510.17498 2512.09108 2502.05957 2505.03335 2510.23595
  2510.14253 2505.08827 2401.01335 2203.14465 2410.23912
  2502.13550 2506.13131 2511.23473 2409.12917 2405.06682
  2303.11366 2510.18327 2501.12793 2410.01215 2501.01264
  2505.14970 2508.09586 2409.18382 2308.10144 2401.13996
  2509.25140 2501.07278 2505.16067 2401.10020 2403.18341
  2305.14325 2410.12853 2510.06056 2305.16291 2304.03442
  2502.00593 2504.01990 2312.09390 2412.01951 2501.13011
  2507.21046 2508.07407
)

CLI="node /Users/copizzah/.claude/skills/anysearch/scripts/anysearch_cli.js"
OUTDIR="/Users/copizzah/Desktop/work/awesome-evolution/raw-papers"

COUNT=0
for ID in "${ARXIV_IDS[@]}"; do
  SAFE_ID=$(echo "$ID" | tr '.' '-')
  MD_FILE="${OUTDIR}/${SAFE_ID}.md"

  if [ -f "$MD_FILE" ] && [ $(wc -c < "$MD_FILE") -gt 1000 ]; then
    echo "SKIP $ID (already exists)"
    continue
  fi

  echo "EXTRACT $ID ..."
  # Extract from abs page (has metadata + abstract)
  $CLI extract "https://arxiv.org/abs/${ID}" > "$MD_FILE" 2>/dev/null

  if [ $? -eq 0 ] && [ -f "$MD_FILE" ] && [ $(wc -c < "$MD_FILE") -gt 500 ]; then
    COUNT=$((COUNT + 1))
    echo "OK $ID ($(wc -c < "$MD_FILE") bytes) [total: $COUNT]"
  else
    echo "FAIL $ID"
    rm -f "$MD_FILE"
  fi
done

echo "DONE: $COUNT papers extracted"
