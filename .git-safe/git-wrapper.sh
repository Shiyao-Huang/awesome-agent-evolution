#!/bin/bash
# Git wrapper that blocks destructive reset operations
# Installed by QA Commander per user directive 2026-05-26
REAL_GIT="/usr/bin/git"

# Check if this is a destructive reset
if [[ "$1" == "reset" ]]; then
    shift
    # Check for --mixed HEAD, --hard, or bare reset to HEAD
    for arg in "$@"; do
        if [[ "$arg" == "--mixed" || "$arg" == "--hard" || "$arg" == "HEAD" ]]; then
            echo "🚫 BLOCKED: git reset with destructive flag is banned (user directive 2026-05-26)" >&2
            echo "   Use: git stash, git commit, or git revert instead" >&2
            exit 1
        fi
    done
    # Allow reset to specific commits (intentional rollback)
    echo "⚠️  git reset allowed to specific target: $*" >&2
fi

# Also block git checkout . and git restore . and git clean -f
if [[ "$1" == "checkout" && " $* " == *" . "* ]]; then
    echo "🚫 BLOCKED: git checkout . is banned (user directive 2026-05-26)" >&2
    exit 1
fi
if [[ "$1" == "restore" && " $* " == *" . "* ]]; then
    echo "🚫 BLOCKED: git restore . is banned (user directive 2026-05-26)" >&2
    exit 1
fi
if [[ "$1" == "clean" && " $* " == *" -f"* ]]; then
    echo "🚫 BLOCKED: git clean -f is banned (user directive 2026-05-26)" >&2
    exit 1
fi

# Pass through to real git
exec "$REAL_GIT" "$@"
