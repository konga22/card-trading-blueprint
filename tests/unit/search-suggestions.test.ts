import { describe, expect, it } from "vitest";
import {
  SEARCH_FILTER_CHIPS,
  SEARCH_SHORTCUTS,
  createHomepageSearchSuggestions,
  createSearchHint,
} from "../../src/features/search";

describe("search helpers", () => {
  it("returns the three homepage shortcuts", () => {
    expect(SEARCH_SHORTCUTS.map((shortcut) => shortcut.key)).toEqual(["popular", "recent", "photo"]);
  });

  it("creates card suggestions from the mock catalog", () => {
    const suggestions = createHomepageSearchSuggestions("pikachu");

    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0].label.toLowerCase()).toContain("pikachu");
  });

  it("keeps the chip metadata compact", () => {
    expect(SEARCH_FILTER_CHIPS[0].tone).toBe("brand");
    expect(createSearchHint("")).toBe("Search by card name, card number, or set name.");
  });
});
