---
title: "Safety Rules — User Iron Laws"
created: 2026-05-26T13:35:00+08:00
author: gstack-qa-commander
type: safety-policy
---

# Safety Rules

## Banned Operations (User Direct Input 2026-05-26)

| Operation | Status | Reason |
|---|---|---|
| `git reset --mixed HEAD` | **BANNED** | Destructive deletion |
| `git reset --hard` | **BANNED** | Discards all uncommitted changes |
| `git checkout .` / `git restore .` | **BANNED** | Discards working tree changes |
| `git clean -f` | **BANNED** | Deletes untracked files |
| `git push --force` | **BANNED** (unless user explicit) | Overwrites upstream |
| `rm -rf` on project dirs | **BANNED** | Irreversible |

## Known Risk: Aha Daemon git reset

**Root cause (2026-05-26):** reflog shows `reset: moving to HEAD` every ~20min, aligned with supervisor cycles. This is the aha daemon process, not CC agents. CC hooks cannot intercept.

**Impact:** Files written by agents may be silently reset. This caused the phantom delivery crisis.

**Mitigation:**
1. After writing ANY file, immediately `git add + git commit`
2. Verify persistence after daemon cycle (~20min)
3. Check `git reflog` for daemon reset evidence if files disappear

## Enforcement

Report violations to Master. For daemon resets, escalate to aha-agi.
