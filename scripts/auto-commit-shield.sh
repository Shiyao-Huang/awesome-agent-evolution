#!/usr/bin/env bash
# auto-commit-shield.sh — Defensive auto-commit to protect uncommitted work from aha daemon git reset
# @sm:node auto-commit-shield
# WHY: aha-agi daemon executes `git reset --mixed HEAD` every ~20min during supervisor PDCA cycles,
#      silently destroying all uncommitted agent work. Until upstream fix, this script auto-commits
#      any pending changes before the next daemon cycle can destroy them.
# USAGE: Run via cron every 5 minutes, or manually before risky operations.
# CRON:  */5 * * * * /Users/copizzah/Desktop/work/awesome-evolution/scripts/auto-commit-shield.sh >> /tmp/auto-commit-shield.log 2>&1

set -euo pipefail

REPO_DIR="/Users/copizzah/Desktop/work/awesome-evolution"
LOG_TAG="[shield]"

cd "$REPO_DIR"

# Check if we're in a git repo
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
    echo "$(date -Iseconds) $LOG_TAG Not a git repo, exiting"
    exit 0
fi

# Check for changes (staged, unstaged, or untracked)
CHANGES=$(git status --porcelain 2>/dev/null)

if [ -z "$CHANGES" ]; then
    echo "$(date -Iseconds) $LOG_TAG Working tree clean, no action needed"
    exit 0
fi

# Count changes
STAGED=$(echo "$CHANGES" | grep -c '^[MADRC]' || true)
UNSTAGED=$(echo "$CHANGES" | grep -c '^.[MD]' || true)
UNTRACKED=$(echo "$CHANGES" | grep -c '^\?\?' || true)
TOTAL=$(echo "$CHANGES" | wc -l | tr -d ' ')

echo "$(date -Iseconds) $LOG_TAG Found $TOTAL changes ($STAGED staged, $UNSTAGED modified, $UNTRACKED untracked)"

# Check if a recent auto-commit shield exists within last 3 minutes
LAST_SHIELD=$(git log --oneline --since="3 minutes ago" --grep="auto-commit-shield" 2>/dev/null | head -1 || true)
if [ -n "$LAST_SHIELD" ]; then
    echo "$(date -Iseconds) $LOG_TAG Recent shield commit exists ($LAST_SHIELD), amending"
    git add -A
    git commit --amend --no-edit --allow-empty 2>/dev/null || true
    echo "$(date -Iseconds) $LOG_TAG Shield commit amended"
    exit 0
fi

# Stage all changes
git add -A

# Create protective commit
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
COMMIT_MSG="shield: auto-commit $TOTAL pending changes ($TIMESTAMP)

Auto-committed by auto-commit-shield to protect work from daemon git reset.
This commit preserves agent work that would otherwise be destroyed by
aha-agi supervisor PDCA cycle reset.

Generated with Claude Code (https://claude.ai/code)
via Aha (https://aha.engineering)

Co-Authored-By: Claude <noreply@anthropic.com>
Co-Authored-By: Aha <yesreply@aha.engineering>"

git commit -m "$COMMIT_MSG" --allow-empty 2>/dev/null || true

echo "$(date -Iseconds) $LOG_TAG Shield commit created with $TOTAL files protected"
