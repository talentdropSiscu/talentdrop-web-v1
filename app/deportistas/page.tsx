import { CTA, FeatureList, LandingHero, PageShell, SplitSection } from "../_components/Site";

export default function Deportistas() {
  return (
    <PageShell>
      <LandingHero eyebrow="B2C · Deportistas" title="Tu trayectoria deportiva, mejor organizada." text="TalentDrop ayuda al deportista a ordenar información, conservar evidencias y preparar decisiones con mayor confianza." image="/img/athletes-hero.jpg" />
      <FeatureList items={[
        ["Organiza tu información.", "Datos deportivos, historial, evidencias, documentos y contexto en un mismo espacio."],
        ["Conserva evidencias.", "Cada dato relevante puede quedar acompañado de su soporte y origen."],
        ["Comparte con control.", "Prepara tu información para clubes, academias o especialistas cuando sea necesario."],
      ]} />
      <SplitSection eyebrow="Talent Passport" title="Una base de evidencia para tu carrera." text="No se trata de prometer oportunidades. Se trata de llegar mejor preparado, con información ordenada, verificable y fácil de entender." image="/img/athlete-passport-device.jpg" />
      <CTA />
    </PageShell>
  );
}
