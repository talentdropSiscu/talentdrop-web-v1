import { CTA, PageShell, Hero, SplitSection } from "../_components/Site";

export default function Clubes() {
  return (
    <PageShell>
      <Hero eyebrow="B2B · Clubes" title="El software trabaja para el club." text="TalentDrop ayuda a clubes a reducir dispersión, ordenar evidencia y documentar decisiones deportivas con mayor continuidad." image="/img/product-system.jpg" />
      <section className="section"><div className="feature-grid">
        <div className="feature"><h3>Roster y evidencia.</h3><p>Una forma más clara de estructurar jugadores, documentos, observaciones y contexto.</p></div>
        <div className="feature"><h3>Decision Log.</h3><p>Registrar decisiones, motivos, evidencias asociadas y continuidad operativa.</p></div>
        <div className="feature"><h3>Operational Deployment.</h3><p>Una primera fase práctica para ordenar el dato deportivo y preparar reporting.</p></div>
      </div></section>
      <SplitSection eyebrow="Club OS" title="Menos información dispersa. Más confianza operativa." text="TalentDrop no sustituye al criterio deportivo. Lo ayuda a trabajar sobre una base más organizada, trazable y compartida." image="/img/youth-training-14-15.jpg" reverse />
      <CTA />
    </PageShell>
  );
}
