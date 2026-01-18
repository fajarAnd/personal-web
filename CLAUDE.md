# Claude AI Workflow Standards

> **Purpose**: Standards dan best practices untuk AI agents (Claude) yang bekerja pada project ini.

## Table of Contents

- [Beads Issue Tracker Standards](#beads-issue-tracker-standards)
- [Issue Creation Guidelines](#issue-creation-guidelines)
- [Priority System](#priority-system)
- [Status Management](#status-management)
- [Git Hooks & Sync Protocol](#git-hooks--sync-protocol)
- [Session Start/End Checklist](#session-startend-checklist)
- [Common Pitfalls](#common-pitfalls)
- [Troubleshooting](#troubleshooting)

---

## Beads Issue Tracker Standards

### Overview

Project ini menggunakan **Beads** sebagai issue tracker yang terintegrasi dengan git. Beads menggunakan 2-tier storage architecture:

```
┌─────────────────────────────────────────┐
│  .beads/issues.jsonl                    │  ← Source of truth (git-tracked)
│  - Authoritative issue database         │
│  - One JSON line per entity             │
│  - Merge-friendly format                │
│  - Committed to git                     │
└─────────────────────────────────────────┘
              ↕ (auto sync with 5s debounce)
┌─────────────────────────────────────────┐
│  .beads/beads.db (SQLite)               │  ← Local cache (gitignored)
│  - Fast queries with indexes            │
│  - Auto-generated from JSONL            │
│  - Never committed to git               │
└─────────────────────────────────────────┘
```

**Sync Mechanism:**
- **Write:** CLI command → SQLite → mark dirty → FlushManager → JSONL export → git commit
- **Read:** git pull → auto-import detection → SQLite merge → CLI query

### ⚠️ CRITICAL RULES

#### ✅ DO:
1. **ALWAYS** use `bd create` untuk membuat issue baru
2. **ALWAYS** use `bd update` untuk mengubah status/priority
3. **ALWAYS** use `bd close` untuk menutup issue
4. **ALWAYS** run `bd sync` setelah perubahan significant
5. **ALWAYS** verify dengan `bd ready` atau `bd list`

#### ❌ DON'T:
1. **NEVER** edit `.beads/issues.jsonl` secara manual
2. **NEVER** edit `.beads/beads.db` secara manual
3. **NEVER** commit code tanpa sync beads changes
4. **NEVER** skip git hooks installation
5. **NEVER** force push without coordinating with team

---

## Issue Creation Guidelines

### Creating New Issues

```bash
# Basic task creation
bd create --title="Task description" --type=task --priority=2

# With parent (child issue)
bd create --title="Subtask" --type=task --priority=1 --parent=personal-web-4

# Epic creation
bd create --title="Major feature" --type=epic --priority=1

# Bug report
bd create --title="Fix bug in component X" --type=bug --priority=0
```

### Issue Types

| Type | Usage | Example |
|------|-------|---------|
| `epic` | Large feature spanning multiple tasks | "Build authentication system" |
| `feature` | New functionality | "Add dark mode toggle" |
| `task` | Implementation work | "Create Header component" |
| `bug` | Bug fix | "Fix navigation menu overflow" |
| `chore` | Maintenance work | "Update dependencies" |

### Title Guidelines

**✅ Good titles:**
- "Implement user authentication with JWT"
- "Fix responsive layout on mobile devices"
- "Add pagination to blog list"

**❌ Bad titles:**
- "Fix bug" (too vague)
- "Update" (no context)
- "TODO" (not descriptive)

---

## Priority System

Beads uses integer priority (0-4), where **0 is highest**:

| Priority | Level | When to Use | Example |
|----------|-------|-------------|---------|
| `0` or `P0` | **Critical** | Production broken, security issue | "Fix SQL injection vulnerability" |
| `1` or `P1` | **High** | Core features, blocking other work | "Build authentication system" |
| `2` or `P2` | **Medium** | Important but not urgent | "Add email notifications" |
| `3` or `P3` | **Low** | Nice to have | "Improve button animations" |
| `4` or `P4` | **Backlog** | Future consideration | "Add theme customization" |

### Priority Selection Guide

```bash
# Critical - drop everything
bd create --title="Fix production crash" --type=bug --priority=0

# High - core functionality
bd create --title="Implement checkout flow" --type=feature --priority=1

# Medium - standard task (default)
bd create --title="Add loading spinner" --type=task --priority=2

# Low - enhancement
bd create --title="Polish UI animations" --type=task --priority=3

# Backlog - future work
bd create --title="Add GraphQL support" --type=feature --priority=4
```

---

## Status Management

### Issue Lifecycle

```
open → in_progress → closed
  ↓         ↓
blocked   blocked
```

### Status Transitions

```bash
# Start working on an issue
bd update issue-123 --status=in_progress

# Mark as blocked (with reason)
bd update issue-123 --status=blocked
# Add comment explaining blocker

# Close completed issue
bd close issue-123

# Reopen if needed
bd reopen issue-123
```

### Multi-Issue Operations

```bash
# Close multiple issues at once (more efficient)
bd close issue-1 issue-2 issue-3

# Update multiple with same status
for id in issue-4 issue-5 issue-6; do
  bd update $id --status=in_progress
done
```

---

## Git Hooks & Sync Protocol

### Git Hooks Installation

Git hooks ensure automatic sync between database and JSONL:

```bash
# Install all recommended hooks
bd hooks install

# Verify installation
bd hooks list
```

**Hooks installed:**
- `pre-commit`: Flush changes to JSONL before commit
- `post-merge`: Import JSONL after pull/merge
- `pre-push`: Prevent pushing stale data
- `post-checkout`: Import JSONL after branch switch
- `prepare-commit-msg`: Add agent identity

### Sync Protocol

**When to run `bd sync`:**
- After creating multiple issues
- After closing issues
- Before ending work session
- After major status updates

```bash
# Manual sync
bd sync

# Check sync status (without syncing)
bd sync --status
```

### Understanding bd sync

`bd sync` performs a 3-way merge:

1. Export local database → JSONL
2. Pull remote JSONL from git
3. Merge: local + remote + base
4. Import merged JSONL → database
5. Commit & push to remote

---

## Session Start/End Checklist

### 🚀 Session Start

```bash
# 1. Pull latest changes
git pull

# 2. Check beads status
bd sync --status

# 3. Find ready work
bd ready

# 4. Check for any issues
bd doctor
```

### 🏁 Session End (CRITICAL)

**⚠️ NEVER skip this checklist before saying "done"!**

```bash
# 1. Check what changed
git status

# 2. Stage code changes
git add <files>

# 3. Sync beads
bd sync

# 4. Commit code changes
git commit -m "Your commit message"

# 5. Final beads sync (if any updates during commit)
bd sync

# 6. Push everything
git push
```

**Visual reminder:**
```
[ ] git status
[ ] git add <files>
[ ] bd sync
[ ] git commit
[ ] bd sync (again)
[ ] git push
```

---

## Common Pitfalls

### ❌ Pitfall #1: Manual JSONL Editing

**Problem:**
```bash
# WRONG! ❌
vim .beads/issues.jsonl
git add .beads/issues.jsonl
git commit -m "Update issue"
```

**Solution:**
```bash
# CORRECT! ✅
bd update personal-web-4 --status=in_progress
bd sync
```

---

### ❌ Pitfall #2: Skipping bd sync

**Problem:**
```bash
bd create --title="New task" --type=task
git commit -m "Add code"
git push
# ❌ Beads changes not synced!
```

**Solution:**
```bash
bd create --title="New task" --type=task
# Work on code...
git add src/
bd sync  # ✅ Sync beads first!
git commit -m "Add code"
git push
```

---

### ❌ Pitfall #3: Importing External Issues Incorrectly

**Problem:**
```bash
# WRONG! ❌
# Manually copying or editing JSONL without using bd commands
vim .beads/issues.jsonl  # Direct edit
# ❌ Database out of sync, no validation
```

**Solution:**
```bash
# CORRECT! ✅
# 1. Convert external data to JSONL format
python convert_to_jsonl.py > external.jsonl

# 2. Import via bd command
bd import -i external.jsonl

# 3. Sync to git
bd sync
```

---

### ❌ Pitfall #4: Not Installing Git Hooks

**Problem:**
```bash
# Without hooks, manual sync is error-prone
bd create --title="Task"
git commit -m "Code"  # ❌ Forgot to sync!
```

**Solution:**
```bash
# CORRECT! ✅ Install hooks once
bd hooks install

# Now hooks auto-sync:
# - pre-commit: auto-flush to JSONL
# - post-merge: auto-import from JSONL
```

---

### ❌ Pitfall #5: Database Out of Sync

**Problem:**
```bash
bd list --status=open
# Shows 0 issues
# But .beads/issues.jsonl has 10 lines!
```

**Solution:**
```bash
# 1. Check what's wrong
bd doctor

# 2. Re-import from JSONL to rebuild database
bd import -i .beads/issues.jsonl

# 3. Verify fix
bd list --status=all
bd stats
```

---

## Troubleshooting

### Issue: `bd ready` shows no issues

**Diagnosis:**
```bash
# Check database
sqlite3 .beads/beads.db "SELECT COUNT(*) FROM issues;"
# Returns 0

# Check JSONL
wc -l .beads/issues.jsonl
# Returns 10 (has data!)
```

**Solution:**
```bash
# Database out of sync with JSONL
# Re-import from JSONL
bd import -i .beads/issues.jsonl

# Verify
bd list --status=all
bd stats
```

---

### Issue: Stack overflow error

**Error:**
```
runtime: goroutine stack exceeds 1000000000-byte limit
fatal error: stack overflow
```

**Solution:**
```bash
# This is usually caused by wrong metadata.json
cat .beads/metadata.json
# Fix database path (should be filename, not path)
echo '{"database": "beads.db"}' > .beads/metadata.json

# Reinitialize
bd init --force
```

---

### Issue: Merge conflicts in JSONL

**Solution:**
```bash
# Let beads handle it
bd sync
# Beads will perform 3-way merge automatically

# If conflicts persist
bd doctor --fix
```

---

### Issue: Missing git hooks

**Solution:**
```bash
# Reinstall hooks
bd hooks install

# Verify
bd hooks list
# Should show all hooks as installed
```

---

## Quick Reference Commands

```bash
# Discovery
bd ready              # Show issues ready to work (no blockers)
bd list --status=open # List all open issues
bd stats              # Project statistics

# CRUD Operations
bd create --title="..." --type=task --priority=2
bd update issue-123 --status=in_progress
bd close issue-123

# Dependencies
bd dep add issue-child issue-parent  # child depends on parent

# Sync & Maintenance
bd sync               # Sync with git
bd doctor             # Check for issues
bd hooks install      # Install git hooks

# Verification
bd stats              # High-level project stats
bd list --status=all  # List all issues
sqlite3 .beads/beads.db "SELECT COUNT(*) FROM issues;"  # DB count
wc -l .beads/issues.jsonl  # JSONL count (should match DB)
```

---

## Architecture Diagram

```
Developer/AI Agent
       ↓
   bd create
   bd update
   bd close
       ↓
┌──────────────────┐
│  SQLite Database │ ← Local cache (gitignored)
│   (beads.db)     │   Fast queries with indexes
└──────────────────┘
       ↓ (auto-flush via hooks, 5s debounce)
┌──────────────────┐
│  issues.jsonl    │ ← Source of truth (git-tracked)
│                  │   One JSON line per entity
└──────────────────┘
       ↓ (git commit/push)
┌──────────────────┐
│  Git Repository  │ ← Remote collaboration
└──────────────────┘
       ↓ (git pull, auto-import)
┌──────────────────┐
│  Other Clones    │ ← Distributed teams
└──────────────────┘
```

---

## Summary: Golden Rules

1. 🎯 **Use bd commands**: Never edit JSONL or database manually
2. 🔄 **Sync regularly**: `bd sync` after significant changes
3. 🪝 **Install hooks**: `bd hooks install` (one-time setup)
4. ✅ **Verify always**: `bd ready`, `bd list`, `bd stats`
5. 📋 **Follow checklist**: Session end checklist is MANDATORY
6. 🚨 **Never skip**: `bd sync` before `git push`

---

**Last Updated**: 2026-01-18
**Maintained By**: Claude AI + Team
