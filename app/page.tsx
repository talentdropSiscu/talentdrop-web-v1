import { AudienceTiles, CoreOSPreview, FlowStrip, HomeHero, PageShell, ProductSection, VisionSection } from "./_components/Site";

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <FlowStrip />
      <ProductSection />
      <AudienceTiles />
      <VisionSection />
      <CoreOSPreview />
    </PageShell>
  );
}
