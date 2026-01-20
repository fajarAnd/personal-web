# Claude Code Project Standards

> **Purpose**: Development standards and workflow guidelines for AI agents working on this project.

## Table of Contents

- [Project Structure](#project-structure)
- [Code Standards](#code-standards)
- [Task Management with Beads](#task-management-with-beads)
- [Planning & Development Workflow](#planning--development-workflow)
- [Session Management](#session-management)

---

## Project Structure

### Directory Organization
- **Components**: React components in `src/components/`
- **Pages**: Next.js pages in `src/app/`
- **Styles**: Global styles and Tailwind config
- **Public**: Static assets in `public/`
- **Docs**: Documentation in `docs/`

### Key Files
- `CLAUDE.md`: This file - project standards for AI agents
- `package.json`: Dependencies and scripts
- `tailwind.config.ts`: Tailwind configuration
- `.beads/`: Issue tracker (git-tracked, managed via `bd` commands)

---

## Code Standards

### General Principles
- **Clean code first**: Readable, maintainable code over clever solutions
- **Minimal comments**: Code should be self-documenting unless complex logic requires explanation
- **Component-driven**: Break UI into reusable components
- **Type safety**: Use TypeScript properly with proper types

### React/Next.js Best Practices
- **Server Components by default**: Use 'use client' only when needed
- **File naming**: `PascalCase.tsx` for components, `kebab-case.ts` for utilities
- **Component structure**: Props interface → Component definition → Export
- **Styling**: Tailwind utility classes, avoid inline styles

### TypeScript Standards
- Define proper interfaces/types for props and data structures
- Avoid `any` type unless absolutely necessary
- Use type inference where possible

---

## Task Management with Beads

### Why Beads?
This project uses **Beads** for issue tracking because:
- Git-integrated issue tracking (no external tools needed)
- Persistent across sessions (survives conversation compaction)
- Dependency management for complex work
- Multi-session work coordination

### What to Track in Beads
- **Features**: Multi-session work requiring planning
- **Bugs**: Issues that need investigation or cross-session work
- **Epics**: Large features spanning multiple tasks
- **Complex tasks**: Work with dependencies or blockers

### Issue Content Standards

#### Epic Format
```
Title: [Verb] [Major Feature Area]
Example: "Implement blog system with markdown support"

Description:
- Overview: What this epic achieves
- Goals: 3-5 key outcomes
- Scope: What's included/excluded
- Success criteria: How we know it's done

Labels: epic, [feature-area]
Priority: 0-2 (Critical to Medium)
```

#### Task/Feature Format
```
Title: [Verb] [Specific Component/Functionality]
Example: "Create animated profile photo component"

Description:
- Purpose: Why this task exists
- Requirements: What needs to be built
- Acceptance criteria: Specific checklist
- Technical notes: Key implementation details (if any)

Labels: feature|task, [tech-stack], [component-area]
Priority: 1-3 (High to Low)
```

#### Bug Format
```
Title: Fix [Component/Area] [Brief Issue Description]
Example: "Fix profile animation flickering on mobile"

Description:
- Problem: What's broken
- Expected behavior: What should happen
- Steps to reproduce: How to trigger the bug
- Root cause: If known
- Proposed fix: Solution approach

Labels: bug, [severity], [component-area]
Priority: 0-2 (Critical to Medium)
```

### Label Standards

**Type Labels** (required):
- `epic` - Multi-task initiatives
- `feature` - New functionality
- `task` - Implementation work
- `bug` - Bug fixes
- `chore` - Maintenance work

**Technology Labels**:
- `react` - React-specific work
- `nextjs` - Next.js features
- `typescript` - Type system work
- `tailwind` - Styling work
- `animation` - Animation features

**Component Labels**:
- `ui` - UI components
- `layout` - Layout/structure
- `content` - Content/copy
- `docs` - Documentation

**Status Labels**:
- `blocked` - Waiting on something
- `needs-review` - Ready for review
- `help-wanted` - Needs input

### Priority Guidelines

| Priority | Level | When to Use | Example |
|----------|-------|-------------|---------|
| `0` or `P0` | Critical | Production broken, security issue | "Fix broken build" |
| `1` or `P1` | High | Core features, user-facing improvements | "Add dark mode" |
| `2` or `P2` | Medium | Standard features and enhancements | "Improve animation timing" |
| `3` or `P3` | Low | Nice-to-haves, polish | "Add micro-interactions" |
| `4` or `P4` | Backlog | Future considerations | "Explore 3D effects" |

### Beads Workflow

**Starting work:**
```bash
bd ready                                    # Find available work
bd update personal-web-123 --status=in_progress
```

**Completing work:**
```bash
bd close personal-web-123 personal-web-124  # Close multiple at once
bd sync                                      # Sync with git
```

---

## Planning & Development Workflow

### Spec-Then-Code (STC) Methodology

**What**: Formal specification before implementation for complex features

**Why**: Prevents over-engineering simple tasks while ensuring rigor for complex ones

**How**: Use "stc" prefix in prompts to trigger specification-first development

### When to Use STC

**Use STC for:**
- Complex features with multiple components
- Features affecting core user experience
- Work requiring architectural decisions
- Multi-component integrations
- Performance-critical features

**Skip STC for:**
- Simple component updates
- Bug fixes with clear solutions
- Configuration changes
- Minor UI tweaks

### STC Workflow

1. **Specification Phase**:
   - Create spec document in `docs/specs/YYYYMMDDHHMM-feature-name.md`
   - Include: problem statement, requirements, technical design
   - Present to user for review and discussion
   - **NEVER implement before spec approval**

2. **Task Breakdown**:
   - Create epic in Beads for the feature
   - Break down into tasks based on approved spec
   - Add dependencies between tasks
   - Set appropriate priorities

3. **Implementation**:
   - Work through tasks using `bd ready`
   - Use TodoWrite for tracking within single task
   - Close tasks as completed
   - Update epic status

### Specification Template

```markdown
# [Feature Name] - Technical Specification

**Date**: YYYY-MM-DD
**Status**: Planning | Approved | In Progress

## Problem Statement
What needs to be solved and why.

## Requirements
- REQ-001: [Essential functionality]
- REQ-002: [User-facing requirement]
- REQ-003: [Technical constraint]

## Technical Design
Component architecture, data flow, key decisions.

## Implementation Plan
High-level phases and approach.

## Success Criteria
How we verify it works correctly.
```

---

## Session Management

### Session Start
```bash
git pull           # Get latest changes
bd ready           # Check for available work
```

### During Session
- Use `TodoWrite` for tracking multi-step tasks within current session
- Update Beads issues when starting/completing them
- Commit code changes incrementally

### Session End (CRITICAL)

**Why**: Ensure all work is saved and synced before session ends

**Checklist:**
```bash
git status              # Verify changes
git add <files>         # Stage code changes
bd sync                 # Sync Beads changes
git commit -m "..."     # Commit code
bd sync                 # Final Beads sync
git push                # Push everything
```

**Never say "done" until this checklist is complete.**

---

## Quick Reference

### Common Beads Commands
```bash
bd ready                  # Show ready tasks
bd create --title="..." --type=task --priority=2
bd update <id> --status=in_progress
bd close <id1> <id2>      # Close multiple
bd sync                   # Sync with git
```

### Development Commands
```bash
npm run dev               # Start dev server
npm run build             # Production build
npm run lint              # Lint code
```

---

**Last Updated**: 2026-01-20

