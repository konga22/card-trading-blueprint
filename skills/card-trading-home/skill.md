# Build the Card Trading Home Page

## Purpose

Use this skill when the task is to implement, refactor, or stabilize the public home and related discovery routes for this repository.

## Read Before Editing

- `AGENT.md`
- `docs/repo-structure.md`
- `docs/catalog-taxonomy.md`
- `docs/home-wireframe.md`

If the task includes visual changes, read the dedicated design documents instead of inventing a new direction inside this skill.

## Expected Deliverables

- A working home composition for the marketing route
- Shared primitives only where reuse is justified
- Typed mock data wired from `src/lib/mocks/`
- Correct links to discover, market, search, beginner, and sell flows
- Supporting empty, loading, or fallback states when needed

## Working Flow

1. Confirm what the route is responsible for.
2. Break the page into section-level components.
3. Reuse `src/components/shared/` for common UI.
4. Keep presentational components free of business logic when possible.
5. Keep search and taxonomy rules in `src/features/`.
6. Verify with the narrowest useful command before claiming completion.

## Guardrails

- Do not leave unused prototype pages exported from barrels.
- Do not duplicate full-page compositions for the same route.
- Do not push advanced filters onto the home page.
- Do not hide trust information behind a separate route if the card list needs it.
- Do not store shareable search state only in local component state.

## Verification

- Behavior change: `npm test`
- Rendering or route composition change: `npm run build`
- Broad static hygiene: `npm run lint`
- Critical user flow: `npm run test:e2e`
