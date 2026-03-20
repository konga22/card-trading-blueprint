import styles from "./home.module.css";

import { BeginnerJourney } from "./BeginnerJourney";
import { DeepSearchPreview } from "./DeepSearchPreview";
import { DiscoverySection } from "./DiscoverySection";
import { discoverySections } from "./home-data";
import { HeroSection } from "./HeroSection";
import { HomeSearchBar } from "./HomeSearchBar";
import { MarketSnapshot } from "./MarketSnapshot";
import { QuickActionsGrid } from "./QuickActionsGrid";
import { TrustStrip } from "./TrustStrip";

export function MarketplaceLandingPage() {
  return (
    <main className={styles.main}>
      <HomeSearchBar />
      <HeroSection />
      <MarketSnapshot />
      {discoverySections.map((section) => (
        <DiscoverySection key={section.key} section={section} />
      ))}
      <TrustStrip />
      <QuickActionsGrid />
      <BeginnerJourney />
      <DeepSearchPreview />
    </main>
  );
}
