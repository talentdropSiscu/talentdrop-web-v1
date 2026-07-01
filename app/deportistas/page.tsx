import { CTA, PageShell, Hero, SplitSection } from "../_components/Site";

const useCases = [
  {
    title: "Base / formación",
    items: ["Seguimiento académico", "Evaluaciones e informes", "Control de asistencia", "Eventos y convocatorias"],
  },
  {
    title: "Amateur / semipro",
    items: ["Planificación de entrenamientos", "Análisis de partidos", "Control de cargas", "Comunicación con el club"],
  },
  {
    title: "Profesional",
    items: ["Gestión de rendimiento", "Informes para cuerpo técnico", "Salud y prevención", "Viajes y concentraciones"],
  },
  {
    title: "Élite / selecciones",
    items: ["Seguimiento internacional", "Certificados y documentación", "Convocatorias oficiales", "Gestión con federaciones"],
  },
  {
    title: "Transición / post-carrera",
    items: ["Formación y networking", "Preparación a nuevos retos", "Visibilidad y oportunidades", "Desarrollo personal"],
  },
];

export default function Deportistas() {
  return (
    <PageShell>
      <Hero
        eyebrow="B2C · Deportistas"
        title="Tu trayectoria deportiva, mejor organizada."
        text="TalentDrop ayuda al deportista a ordenar información, conservar evidencias y preparar decisiones con mayor confianza."
        image="/img/athletes-hero.jpg"
      >
        <div className="athlete-ecosystem">
          <h2>Con tu TalentPassport activo, te posicionas en el ecosistema que tú eliges.</h2>
          <div className="ecosystem-tags" aria-label="Casos de uso TalentPassport">
            <span>Formación</span>
            <span>Competición</span>
            <span>Salud y rendimiento</span>
            <span>Proyección</span>
            <span>Oportunidades</span>
            <span>Marca personal</span>
          </div>
          <p className="ecosystem-note">Tus casos de uso cambian según tu categoría, momento deportivo y objetivos.</p>
          <div className="use-case-grid">
            {useCases.map((group) => (
              <div className="use-case-column" key={group.title}>
                <strong>{group.title}</strong>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Hero>

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
