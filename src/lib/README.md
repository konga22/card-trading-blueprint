# Lib

`src/lib/` stores framework-agnostic project utilities and shared data definitions.

## Typical contents

- `types.ts` for cross-feature types
- `constants/` for stable keys and labels
- `mocks/` for seed data used before backend integration
- `utils/` for pure helper functions

When a value is reused across features, prefer placing it here instead of duplicating it in components.
