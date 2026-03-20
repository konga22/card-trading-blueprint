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
    const suggestions = createHomepageSearchSuggestions("피카츄");

    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0].label).toContain("피카츄");
  });

  it("keeps the chip metadata compact", () => {
    expect(SEARCH_FILTER_CHIPS[0].tone).toBe("brand");
    expect(createSearchHint("")).toBe("카드명, 카드 번호, 세트명을 입력해 검색해 보세요.");
  });
});
