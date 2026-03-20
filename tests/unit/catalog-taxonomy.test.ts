import { describe, expect, it } from "vitest";
import {
  CATALOG_GAME_FILTERS,
  CATALOG_HOMEPAGE_PRIMARY_FILTERS,
  CATALOG_SORT_OPTIONS,
  getCatalogGameLabel,
} from "../../src/features/catalog";

describe("catalog taxonomy", () => {
  it("keeps the homepage game filters aligned with the wireframe", () => {
    expect(CATALOG_GAME_FILTERS.map((filter) => filter.key)).toEqual([
      "all",
      "pokemon",
      "yugioh",
      "onepiece",
      "other",
    ]);
  });

  it("exposes a compact primary filter set for the home screen", () => {
    expect(CATALOG_HOMEPAGE_PRIMARY_FILTERS).toHaveLength(4);
    expect(CATALOG_HOMEPAGE_PRIMARY_FILTERS[0].label).toBe("All games");
  });

  it("includes search-friendly sort labels", () => {
    expect(CATALOG_SORT_OPTIONS.map((option) => option.key)).toContain("recent_trade");
    expect(getCatalogGameLabel("pokemon")).toBe("Pokemon");
  });
});
