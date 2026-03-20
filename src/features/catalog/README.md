# Catalog Feature

`src/features/catalog/` owns the card taxonomy and catalog-facing rules.

## Responsibilities

- user-visible game, purpose, and format filters
- detail-filter definitions
- sort options
- helper functions that expose consistent labels

Rendering belongs in components. Static keys and labels should stay centralized here or in `src/lib/constants/`.
