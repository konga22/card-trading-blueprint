# Unit Tests

`tests/unit/` stores fast checks for pure logic and lightweight UI behavior.

Good candidates:
- taxonomy helpers
- search normalization and suggestions
- mock data assumptions
- small rendering rules that do not need a browser flow

Prefer deterministic tests over snapshot-heavy coverage.
