import { CTA, FeatureList, LandingHero, PageShell, SplitSection } from "../_components/Site";

export default function Clubes() {
  return (
    <PageShell>
      <LandingHero eyebrow="B2B · Clubes" title="Menos dispersión. Más confianza operativa." text="TalentDrop ayuda a clubes a ordenar evidencia, reducir ruido operativo y documentar decisiones deportivas con mayor continuidad." image="/img/product-system.jpg" />
      <FeatureList items={[
        ["Roster y evidencia.", "Una forma más clara de estructurar jugadores, documentos, observaciones y contexto."],
        ["Decision Log.", "Registrar decisiones, motivos, evidencias asociadas y continuidad operativa."],
        ["Operational Deployment.", "Una primera fase práctica para ordenar el dato deportivo y preparar reporting."],
      ]} />
      <SplitSection eyebrow="Club OS" title="El club no trabaja para el software. El software trabaja para el club." text="TalentDrop no sustituye al criterio deportivo. Lo ayuda a trabajar sobre una base más organizada, trazable y compartida." image="/img/youth-training-14-15.jpg" reverse />
      <CTA />
    </PageShell>
  );
}
