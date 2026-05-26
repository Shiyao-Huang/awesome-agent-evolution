#!/usr/bin/env python3
"""Enforce gBrain raw-data temporal metadata on raw-* artifacts."""
from __future__ import annotations
import json, pathlib, re
from typing import Any
NOW = "2026-05-21T00:00:00+08:00"
RAW_DIRS = ["raw-blogs", "raw-github", "raw-papers", "raw-social"]
REQUIRED = ["content_timestamp", "collected_at", "time_slice"]
RAW_PAPERS_METADATA_FILES = {"index.md", "timestamp-audit.md"}
RAW_METADATA_FILES = {"index.md"}
MONTHS = {name: i for i, name in enumerate("January February March April May June July August September October November December".split(), 1)}
MONTHS.update({name[:3]: i for name, i in MONTHS.copy().items()})

def time_slice(ts: Any) -> str:
    if not ts or str(ts) == "unknown":
        return "unknown"
    m = re.match(r"(\d{4})(?:-(\d{1,2}))?", str(ts))
    if not m:
        return "unknown"
    year = int(m.group(1)); month = int(m.group(2) or 1)
    if year <= 2022:
        return "early"
    if year in (2023, 2024):
        return f"{year}-Q{((month - 1) // 3) + 1}"
    if year in (2025, 2026):
        return f"{year}-{month:02d}"
    return "future" if year > 2026 else "unknown"

def parse_date(text: str) -> str | None:
    if not text:
        return None
    m = re.search(r"\*\*Published\*\*:\s*(\d{4}-\d{2}-\d{2})", text, re.I)
    if m:
        return m.group(1)
    m = re.search(r"(?:Published|Updated|Created|Launch(?:ed)?|ranked #[^\n]* for)[:\s]*(?:for\s+)?([A-Z][a-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?,\s+(20\d{2})", text, re.I)
    if not m:
        m = re.search(r"\b([A-Z][a-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?,\s+(20\d{2})\b", text)
    if m:
        mon = MONTHS.get(m.group(1))
        if mon:
            return f"{m.group(3)}-{mon:02d}-{int(m.group(2)):02d}"
    m = re.search(r"\b(20\d{2})-(\d{1,2})-(\d{1,2})\b", text)
    if m:
        return f"{m.group(1)}-{int(m.group(2)):02d}-{int(m.group(3)):02d}"
    m = re.search(r"\b(20\d{2})-(\d{1,2})\b", text)
    if m:
        return f"{m.group(1)}-{int(m.group(2)):02d}"
    years = [int(y) for y in re.findall(r"\b(20\d{2})\b", text)]
    years = [y for y in years if 2000 <= y <= 2026]
    if years:
        return str(min(years))
    return None

def record_text(record: dict[str, Any]) -> str:
    parts = []
    for key in ["published_at", "updated_at", "created_at", "date", "name", "title", "url", "source_dataset", "content", "abstract", "raw_content", "readme", "description"]:
        value = record.get(key)
        if isinstance(value, (str, int, float)):
            parts.append(str(value))
    return "\n".join(parts)

def fill_record(record: dict[str, Any]) -> bool:
    changed = False
    if not record.get("content_timestamp"):
        ts = parse_date(record_text(record))
        record["content_timestamp"] = ts or "unknown"
        record.setdefault("timestamp_confidence", "derived" if ts else "unknown")
        record.setdefault("timestamp_source", "extracted from raw content/title/metadata" if ts else "no reliable publication/creation timestamp found in raw artifact")
        changed = True
    if not record.get("collected_at"):
        record["collected_at"] = NOW; changed = True
    elif re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(record["collected_at"])):
        record["collected_at"] = f"{record['collected_at']}T00:00:00+08:00"; changed = True
    if not record.get("time_slice"):
        record["time_slice"] = time_slice(record.get("content_timestamp")); changed = True
    return changed

def md_block(meta: dict[str, str]) -> str:
    return "\n## gBrain Temporal Metadata\n\n" + "".join(f"- {k}: {v}\n" for k, v in meta.items()) + "\n"

def fill_markdown(path: pathlib.Path) -> bool:
    text = path.read_text(encoding="utf-8", errors="replace")
    if all(f"{key}:" in text for key in REQUIRED):
        return False
    ts = parse_date(text)
    meta = {
        "content_timestamp": ts or "unknown",
        "collected_at": NOW,
        "time_slice": time_slice(ts),
        "timestamp_confidence": "derived" if ts else "unknown",
        "timestamp_source": "extracted from markdown content/metadata" if ts else "no reliable publication/creation timestamp found in raw artifact",
    }
    block = md_block(meta)
    marker = "\n## Raw Content\n"
    if marker in text:
        text = text.replace(marker, block + marker, 1)
    else:
        text = text.rstrip() + block
    path.write_text(text, encoding="utf-8")
    return True

def enforce_once() -> int:
    updated = 0
    for dirname in RAW_DIRS:
        root = pathlib.Path(dirname)
        if not root.exists():
            continue
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if path.name.lower() in RAW_METADATA_FILES:
                continue
            if dirname == "raw-papers" and path.name in RAW_PAPERS_METADATA_FILES:
                continue
            if path.suffix == ".json":
                try:
                    data = json.loads(path.read_text(encoding="utf-8"))
                except Exception:
                    continue
                changed = False
                if isinstance(data, dict):
                    changed = fill_record(data)
                elif isinstance(data, list):
                    for item in data:
                        if isinstance(item, dict):
                            changed = fill_record(item) or changed
                if changed:
                    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                    updated += 1
            elif path.suffix in (".md", ".markdown"):
                try:
                    if fill_markdown(path):
                        updated += 1
                except Exception:
                    continue
    return updated

def validate() -> dict[str, Any]:
    summary: dict[str, Any] = {}; missing = []
    for dirname in RAW_DIRS:
        root = pathlib.Path(dirname)
        stats = {"json": 0, "json_ok": 0, "md": 0, "md_ok": 0, "unknown_records": 0}
        if root.exists():
            for path in root.rglob("*"):
                if not path.is_file():
                    continue
                if path.name.lower() in RAW_METADATA_FILES:
                    continue
                if dirname == "raw-papers" and path.name in RAW_PAPERS_METADATA_FILES:
                    continue
                if path.suffix == ".json":
                    stats["json"] += 1
                    try:
                        data = json.loads(path.read_text(encoding="utf-8"))
                        records = data if isinstance(data, list) else [data]
                        ok = all(isinstance(item, dict) and all(key in item for key in REQUIRED) for item in records)
                        if ok:
                            stats["json_ok"] += 1
                        else:
                            missing.append(str(path))
                        stats["unknown_records"] += sum(1 for item in records if isinstance(item, dict) and item.get("content_timestamp") == "unknown")
                    except Exception:
                        missing.append(str(path))
                elif path.suffix in (".md", ".markdown"):
                    stats["md"] += 1
                    text = path.read_text(encoding="utf-8", errors="replace")
                    if all(f"{key}:" in text for key in REQUIRED):
                        stats["md_ok"] += 1
                    else:
                        missing.append(str(path))
                    if "content_timestamp: unknown" in text:
                        stats["unknown_records"] += 1
        summary[dirname] = stats
    return {"generated_at": NOW, "summary": summary, "missing_count": len(missing), "missing_sample": missing[:100]}

def main() -> None:
    total_updated = 0
    for _ in range(5):
        updated = enforce_once()
        total_updated += updated
        report = validate()
        if report["missing_count"] == 0 or updated == 0:
            break
    report = validate()
    report["updated_in_this_run"] = total_updated
    output_dir = pathlib.Path("output")
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "raw-data-timestamp-validation-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
