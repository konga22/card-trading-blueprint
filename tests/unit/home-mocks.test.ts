import { describe, expect, it } from 'vitest';
import { DISCOVERY_SECTIONS, HOME_CARD_FIXTURES, MARKET_SNAPSHOT_ITEMS } from '../../src/lib/mocks/home';

describe('home mock data', () => {
  it('provides enough fixtures for discovery sections', () => {
    expect(HOME_CARD_FIXTURES.length).toBeGreaterThanOrEqual(6);
    expect(DISCOVERY_SECTIONS.map((section) => section.key)).toEqual([
      'popular',
      'beginner',
      'inspection',
    ]);
  });

  it('keeps the market snapshot compact', () => {
    expect(MARKET_SNAPSHOT_ITEMS).toHaveLength(3);
    expect(MARKET_SNAPSHOT_ITEMS[0].transactionCount).toBeGreaterThan(0);
  });
});

