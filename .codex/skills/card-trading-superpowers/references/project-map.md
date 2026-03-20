# Project Map

Use this file to jump to the right part of the repository without rereading every doc.

## Product And Design Intent

- `AGENT.md`: overall product goal, UX posture, and implementation constraints
- `docs/design-reference.md`: Toss-inspired direction and translation rules
- `docs/design-tokens.md`: colors, typography, spacing, radii, and motion cues
- `docs/home-wireframe.md`: home-page section order and messaging intent
- `docs/repo-structure.md`: recommended file layout and ownership

## App Shell And Entry Pages

- `src/app/(marketing)/layout.tsx`: marketing shell and shared layout logic
- `src/app/(marketing)/page.tsx`: home-page composition
- `src/app/globals.css`: global CSS entrypoint
- `src/styles/tokens.css`: project tokens and shared CSS variables

## Reusable UI

- `src/components/shared/`: buttons, chips, badges, cards, sections, shell pieces
- `src/components/home/`: home-only sections such as hero, quick actions, trust, discovery, market, beginner, and deep-search

## Feature Logic

- `src/features/search/`: search state, query params, filter interactions, recent searches
- `src/features/catalog/`: card taxonomy, catalog data shaping, browsing logic
- `src/features/auth/`: login and account-related UI state
- `src/lib/constants/`: stable app constants
- `src/lib/mocks/`: seed data for cards, sections, and early-state flows
- `src/lib/utils/`: shared helpers

## Tests

- `tests/unit/`: component and logic tests
- `tests/e2e/`: end-to-end flows
- `package.json`: canonical command list for lint, unit tests, build, and Playwright

## Fast Routing Hints

- New visual section on the home page:
  - Start with `docs/home-wireframe.md`, then `src/components/home/`, then `src/app/(marketing)/page.tsx`.
- Global visual polish or token work:
  - Start with `docs/design-tokens.md`, then `src/styles/tokens.css`, then `src/app/globals.css`.
- Search or filter behavior:
  - Start with `src/features/search/`, then the consuming home component, then tests.
- Card listing or discovery logic:
  - Start with `src/features/catalog/` and `src/lib/mocks/`.
