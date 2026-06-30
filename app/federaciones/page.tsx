import { CTA, FeatureList, LandingHero, PageShell, SplitSection } from "../_components/Site";

export default function Federaciones() {
  return (
    <PageShell>
      <LandingHero eyebrow="B2G · Federaciones e instituciones" title="Digitalizar talento con gobernanza." text="Infraestructura para programas deportivos, clubes, territorios y procesos de seguimiento basados en evidencia." image="/img/institutions-program.jpg" />
      <FeatureList items={[
        ["Base común.", "Unificar criterios, estructuras de información y evidencias entre clubes y programas."],
        ["Continuidad.", "Seguir procesos deportivos sin depender de hojas de cálculo, mensajes o documentos aislados."],
        ["Gobernanza.", "Mejor control documental, trazabilidad y reporting para programas deportivos."],
      ]} />
      <SplitSection eyebrow="Infraestructura institucional" title="Una capa para escalar programas deportivos." text="TalentDrop puede actuar como infraestructura de apoyo para federaciones, instituciones y proyectos territoriales que necesitan ordenar información deportiva a escala." image="/img/labs-medical.jpg" />
      <CTA />
    </PageShell>
  );
}
