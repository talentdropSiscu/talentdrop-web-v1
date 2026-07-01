import { CTA, CoreLayers, PageShell, Hero, SplitSection } from "../_components/Site";

export default function CoreOS() {
  return (
    <PageShell>
      <Hero eyebrow="TalentDrop Core OS" title="Cinco capas. Una única infraestructura." text="La arquitectura que conecta identidad, evidencia, seguridad, contexto y gobernanza médico-deportiva para apoyar mejores decisiones." image="/img/product-system.jpg" />
      <section className="section"><div className="section-inner"><CoreLayers /></div></section>
      <SplitSection eyebrow="Arquitectura" title="De información dispersa a decisiones con más confianza." text="TalentDrop Core OS no es un catálogo de módulos. Es la forma en que la plataforma convierte datos deportivos en evidencia verificable, contexto relevante y decisiones documentadas." image="/img/decision-room.jpg" />
      <section className="section"><div className="quote"><h2>TalentDrop no añade más datos al deporte. Convierte los datos existentes en decisiones con mayor confianza.</h2><p>Ese es el papel del Core OS: reducir incertidumbre, aumentar trazabilidad y ayudar a que cada actor trabaje sobre una base común.</p></div></section>
      <CTA />
    </PageShell>
  );
}
