---
name: card-trading-superpowers
description: Apply obra/superpowers-style workflow inside the card-trading-blueprint repository. Use when working on this project and you need a disciplined path for design, implementation, debugging, code review, or pre-ship verification, with repo-specific docs, file entrypoints, and verification commands.
---

# Card Trading Superpowers

Apply a lightweight version of `obra/superpowers` to this repository. Route the request first, then read only the relevant project docs, edit the smallest useful surface, and verify with fresh commands before claiming success.

## Workflow Router

Classify the request before taking action.

- Idea, UX change, new screen, IA change, or unclear requirements:
  - Read `AGENT.md`.
  - Read only the relevant design docs from `docs/`.
  - Clarify the target behavior and outline the approach before implementation.
- Approved multi-step feature:
  - Break the work into explicit file-level tasks before touching code.
  - Prefer small components and testable steps.
- Bug, failed test, or unexpected behavior:
  - Reproduce first.
  - Read the error output carefully.
  - Identify the root cause before proposing a fix.
- Review feedback:
  - Verify each suggestion against the current codebase.
  - Implement only technically sound changes.
- "Done", "fixed", or "ready":
  - Run fresh verification commands before claiming success.

## Project Entry Points

Read only what the task needs.

- `AGENT.md` for product goals, interaction principles, and constraints.
- `docs/design-reference.md` for the Toss-inspired direction and what not to copy literally.
- `docs/design-tokens.md` for colors, typography, spacing, and radii.
- `docs/home-wireframe.md` for homepage section order and intent.
- `docs/repo-structure.md` for file placement.
- `skills/card-trading-home/skill.md` for the detailed home-page build rules.
- `references/project-map.md` in this skill for fast file-to-task mapping.
- `references/task-recipes.md` in this skill for reusable prompt patterns.

## Working Rules

- Default to test-first changes for behavior updates, search flows, filtering, and bug fixes.
- Keep reusable UI in `src/components/shared/` and page-specific UI in `src/components/home/` unless the task clearly belongs elsewhere.
- Keep mock data in `src/lib/mocks/` until a real backend or API contract is part of the task.
- Prefer focused edits over large cross-cutting rewrites.
- Preserve the current visual language: mobile-first, dense but readable, transaction-oriented, and not chart-heavy.
- Avoid claiming a fix, completion, or pass state without fresh command output.

## Verification

Choose the narrowest useful command first, then widen as needed.

- Unit or behavior checks: `npm test`
- Linting: `npm run lint`
- Production validation: `npm run build`
- End-to-end flows: `npm run test:e2e`

When the task changes rendering, routing, or composition, run `npm run build` before finalizing.
When the task changes behavior, run `npm test` before finalizing.
When the task changes user flows, run `npm run test:e2e` if coverage exists or the flow is critical.

## Upstream Superpowers Mapping

This skill adapts these `obra/superpowers` ideas for this repo:

- `brainstorming`: use for unclear or design-heavy work before code.
- `writing-plans`: use for multi-step approved features before implementation.
- `test-driven-development`: use for behavior changes and bug fixes.
- `systematic-debugging`: use for failures and unexpected behavior.
- `receiving-code-review`: use when addressing review comments.
- `verification-before-completion`: use before any completion claim.

If the full upstream pack is installed in Codex, you can invoke those skills directly after using this router.
