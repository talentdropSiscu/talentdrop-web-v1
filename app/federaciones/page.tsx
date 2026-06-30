import { CTA, PageShell, Hero, SplitSection } from "../_components/Site";

export default function Federaciones() {
  return (
    <PageShell>
      <Hero eyebrow="B2G · Federaciones e instituciones" title="Digitalizar talento con gobernanza." text="Infraestructura para programas deportivos, clubes, territorios y procesos de seguimiento basados en evidencia." image="/img/institutions-program.jpg" />
      <section className="section"><div className="feature-grid">
        <div className="feature"><h3>Base común.</h3><p>Unificar criterios, estructuras de información y evidencias entre clubes y programas.</p></div>
        <div className="feature"><h3>Continuidad.</h3><p>Seguir procesos deportivos sin depender de hojas de cálculo, mensajes o documentos aislados.</p></div>
        <div className="feature"><h3>Gobernanza.</h3><p>Mejor control documental, trazabilidad y reporting para programas deportivos.</p></div>
      </div></section>
      <SplitSection eyebrow="Infraestructura institucional" title="Una capa para escalar programas deportivos." text="TalentDrop puede actuar como infraestructura de apoyo para federaciones, instituciones y proyectos territoriales que necesitan ordenar información deportiva a escala." image="/img/athlete-passport-device.jpg" />
      <CTA />
    </PageShell>
  );
}
