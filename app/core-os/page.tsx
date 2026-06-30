import { CTA, CoreOSPreview, FeatureList, LandingHero, PageShell, SplitSection } from "../_components/Site";

export default function CoreOS() {
  return (
    <PageShell>
      <LandingHero eyebrow="TalentDrop Core OS" title="Cinco capas. Una única infraestructura." text="La arquitectura que conecta identidad, evidencia, seguridad, contexto y gobernanza médico-deportiva para apoyar mejores decisiones." image="/img/home-hero.jpg" />
      <CoreOSPreview />
      <FeatureList items={[
        ["Talent Passport", "Identidad deportiva estructurada y portable."],
        ["Evidence Layer", "Cada dato conectado con su evidencia, origen y contexto."],
        ["Data Trust Layer", "Protección, trazabilidad, snapshots y gobierno del dato."],
        ["Decision Layer", "Contexto útil para preparar decisiones mejor documentadas."],
        ["Sports Medicine Governance", "Criterio médico-deportivo y de rendimiento bajo protocolos definidos."],
      ]} />
      <SplitSection eyebrow="Arquitectura" title="De información dispersa a decisiones con más confianza." text="TalentDrop Core OS no es un catálogo de módulos. Es la forma en que la plataforma convierte datos deportivos en evidencia verificable, contexto relevante y decisiones documentadas." image="/img/product-system.jpg" />
      <CTA />
    </PageShell>
  );
}
