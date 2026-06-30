import { CTA, PageShell, Hero, SplitSection } from "../_components/Site";

export default function Deportistas() {
  return (
    <PageShell>
      <Hero eyebrow="B2C · Deportistas" title="Tu trayectoria deportiva, mejor organizada." text="TalentDrop ayuda al deportista a ordenar información, conservar evidencias y preparar decisiones con mayor confianza." image="/img/athletes-hero.jpg" />
      <section className="section"><div className="feature-grid">
        <div className="feature"><h3>Organiza tu información.</h3><p>Datos deportivos, historial, evidencias, documentos y contexto en un mismo espacio.</p></div>
        <div className="feature"><h3>Conserva evidencias.</h3><p>Cada dato relevante puede quedar acompañado de su soporte y origen.</p></div>
        <div className="feature"><h3>Comparte con control.</h3><p>Prepara tu información para clubes, academias o especialistas cuando sea necesario.</p></div>
      </div></section>
      <SplitSection eyebrow="Talent Passport" title="Una base de evidencia para tu carrera." text="No se trata de prometer oportunidades. Se trata de llegar mejor preparado, con información ordenada, verificable y fácil de entender." image="/img/athlete-passport.jpg" />
      <CTA />
    </PageShell>
  );
}
