# Project Map

Use this reference when choosing which curated subagent to delegate to.

## Repository areas

| Area | Primary paths | Best first agent |
| --- | --- | --- |
| App Router routes and page wiring | `src/app/(marketing)/`, `src/app/layout.tsx` | `nextjs-developer` |
| Home and landing composition | `src/components/home/` | `ui-designer`, then `nextjs-developer` |
| Shared UI primitives | `src/components/shared/` | `ui-designer` |
| Search and catalog behavior | `src/features/search/`, `src/features/catalog/`, `src/lib/utils/search.ts` | `code-mapper`, then `nextjs-developer` |
| Mock data and constants | `src/lib/mocks/`, `src/lib/constants/`, `src/lib/types.ts` | `code-mapper` |
| Tests and regressions | `tests/`, `vitest.config.ts`, `playwright.config.ts` | `test-automator` |
| Framework or library verification | `package.json`, relevant code path | `docs-researcher` |
| Final correctness pass | changed files | `reviewer` |

## Good task splits

### Landing-page expansion

- `code-mapper`: find existing sections, data sources, and shared primitives
- `ui-designer`: tighten hierarchy, spacing, CTA order, and mobile rhythm
- `nextjs-developer`: implement the approved structure
- `reviewer`: check regressions and missing tests

### Search/filter work

- `code-mapper`: trace current filters, suggestions, and route ownership
- `nextjs-developer`: implement behavior changes
- `test-automator`: add Vitest or Playwright coverage for the changed flow

### Browser bug fix

- `browser-debugger`: reproduce and capture the failing interaction
- `nextjs-developer`: patch the smallest safe area
- `reviewer`: verify no nearby regressions

## Prompt patterns

Use short, explicit delegation prompts.

```text
Use code-mapper to trace which files own the search landing flow in this repo. Return the exact files, data sources, and the safest edit point.
```

```text
Use ui-designer to improve the hierarchy of src/components/home/HomePage.tsx for mobile-first card trading discovery. Keep the existing visual language and return a concrete change list.
```

```text
Use nextjs-developer to implement the approved search CTA update in src/app/(marketing)/page.tsx and the relevant components. Keep the patch small and list the files changed.
```

```text
Use reviewer to review this patch for correctness, regressions, accessibility risks, and missing tests. Return findings first with file references.
```
