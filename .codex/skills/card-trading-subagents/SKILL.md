---
name: card-trading-subagents
description: Install and use a curated set of Codex subagents for the card-trading-blueprint repository. Use when Codex should pick or install project-scoped subagents for Next.js App Router work, landing-page UI, shared component changes, search and filter flows, browser bug reproduction, docs-backed verification, reviews, or test automation in this repo.
---

# Card Trading Subagents

Use this skill to keep subagent usage focused on the needs of this repository instead of installing a huge generic set.

## Install or update the curated agents

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .codex/skills/card-trading-subagents/scripts/install_curated_subagents.ps1 -Force
```

That script installs a small project-fit subset from `VoltAgent/awesome-codex-subagents` into `.codex/agents/`.

## Read the repo context before delegating

Read these first:

- `AGENT.md`
- `package.json`
- the relevant files under `src/app/(marketing)/`
- the relevant files under `src/components/home/`
- the relevant files under `src/components/shared/`
- the relevant files under `src/features/`
- `tests/` when the task touches behavior or regressions

If the task is primarily about product direction or page hierarchy, also read the relevant files under `docs/`.

## Choose the right subagent

Use the mapping in `references/project-map.md`.

Default choices:

- `nextjs-developer` for App Router pages, layouts, route wiring, and navigation flows
- `ui-designer` for visual hierarchy, section composition, CTA placement, responsive polish, and landing-page refinements
- `code-mapper` for tracing ownership across `src/app`, `src/components`, `src/features`, and `src/lib`
- `browser-debugger` for reproduced browser issues and interaction regressions
- `test-automator` for Vitest and Playwright coverage
- `reviewer` for correctness, regressions, and missing-test review before closing work
- `docs-researcher` when unstable framework or library behavior must be verified against documentation

## Use delegation patterns that fit this repo

For a new page or larger UI change:

1. Use `code-mapper` to find the owning files and boundaries.
2. Use `ui-designer` to refine hierarchy and component shape.
3. Use `nextjs-developer` to implement the change.
4. Use `test-automator` if new behavior needs coverage.
5. Use `reviewer` before considering the task done.

For a bug:

1. Use `browser-debugger` if the bug is visible in the browser.
2. Use `code-mapper` if ownership is unclear.
3. Use `nextjs-developer` for the smallest safe fix.
4. Use `reviewer` to check for regressions.

For API or framework uncertainty:

1. Use `docs-researcher` first.
2. Then hand implementation to `nextjs-developer` or keep it local if the patch is tiny.

## Keep the skill narrow

- Prefer the curated local agents in `.codex/agents/` over dumping the whole upstream catalog into this repo.
- Prefer project-scoped agents here instead of global install when the prompts should stay tuned to this codebase.
- Do not treat these subagents as auto-triggered. Delegate explicitly and state the expected output shape.
- If a task is trivial, do it directly instead of spawning an agent just because one exists.
