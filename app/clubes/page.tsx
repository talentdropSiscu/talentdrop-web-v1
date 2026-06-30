import { CONTACT_EMAIL, PageShell, Hero } from "../_components/Site";

const method = [
  ["01", "Entendemos la prioridad del club", "Temporada, estructura deportiva, categoría, recursos y decisiones críticas."],
  ["02", "Ordenamos la información existente", "Roster, informes, observaciones, evidencias, procesos y responsables."],
  ["03", "Club Operational Blueprint", "Dibujamos cómo debería circular la información para decidir mejor."],
  ["04", "Operational Assessment", "Evaluamos nivel de orden, trazabilidad, continuidad y riesgo operativo."],
  ["05", "Deployment Plan", "Definimos una hoja de ruta práctica, asumible y adaptada al club."],
  ["06", "Activación ClubOS", "La tecnología se activa cuando el modelo operativo ya está claro."],
];

const deliverables = [
  ["Club Operational Blueprint", "Mapa operativo de cómo el club organiza información, áreas, procesos y decisiones."],
  ["Club Operational Assessment", "Diagnóstico ejecutivo sobre dispersión, trazabilidad, continuidad y madurez operativa."],
  ["Deployment Plan", "Plan de trabajo para implantar una forma común de operar antes de escalar tecnología."],
  ["Operational Benchmark", "Comparación con buenas prácticas y criterios de profesionalización deportiva."],
  ["Club Operating Manual", "Manual operativo para alinear roles, responsabilidades y flujo de información."],
  ["Executive Decision Book", "Registro ejecutivo para documentar decisiones, motivos y evidencias asociadas."],
  ["Activación de ClubOS", "Puesta en marcha de la infraestructura tecnológica sobre una base ya ordenada."],
];

const roles = [
  "Dirección General",
  "Dirección Deportiva",
  "Secretaría Técnica",
  "Área Médica",
  "Performance",
  "Scouting",
];

export default function Clubes() {
  return (
    <PageShell>
      <Hero
        eyebrow="B2B · Clubes"
        title="El software trabaja para el club."
        text="TalentDrop ayuda a transformar información dispersa en decisiones deportivas más estructuradas, trazables y compartidas."
        image="/img/product-system.jpg"
      >
        <div className="button-row">
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>Solicitar una reunión</a>
          <a className="btn secondary" href="#metodologia">Ver metodología</a>
        </div>
      </Hero>

      <section className="section club-problem">
        <div className="section-inner">
          <p className="eyebrow">El problema</p>
          <div className="club-problem-grid">
            <h2>Muchos clubes tienen información. Pocos tienen una forma común de decidir.</h2>
            <div className="club-problem-points">
              <div><span>01</span><strong>Información repartida</strong><p>Informes, vídeos, observaciones y datos viven en lugares distintos.</p></div>
              <div><span>02</span><strong>Áreas desconectadas</strong><p>Dirección deportiva, scouting, performance y área médica trabajan con lógicas diferentes.</p></div>
              <div><span>03</span><strong>Decisiones difíciles de compartir</strong><p>El criterio existe, pero muchas veces no queda documentado ni trazado.</p></div>
            </div>
          </div>
          <p className="club-problem-line">El problema no es la falta de datos. Es la falta de una estructura común para utilizarlos.</p>
        </div>
      </section>

      <section id="metodologia" className="section club-method-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Una metodología para profesionalizar la toma de decisiones deportivas.</h2>
          </div>
          <div className="method-flow">
            {method.map(([num, title, text]) => (
              <div className="method-step" key={title}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section club-deployment">
        <div className="section-inner club-deployment-inner">
          <div className="club-deployment-copy">
            <p className="eyebrow">Operational Deployment</p>
            <h2>Antes de implantar tecnología, estructuramos la forma de trabajar.</h2>
            <p>
              Antes de activar ClubOS, TalentDrop ayuda al club a comprender cómo se toman actualmente
              las decisiones, ordenar la información disponible y construir un modelo operativo adaptado
              a su realidad.
            </p>
          </div>
          <div className="club-deployment-image" style={{ backgroundImage: "url('/img/product-system.jpg')" }} />
        </div>
      </section>

      <section className="section deliverables-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Qué obtiene el club</p>
            <h2>Entregables claros antes de escalar tecnología.</h2>
          </div>
          <div className="deliverables-list">
            {deliverables.map(([title, text], index) => (
              <div className="deliverable-row" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section roles-section">
        <div className="section-inner">
          <p className="eyebrow">Pensado para</p>
          <h2>TalentDrop conecta a todas las áreas que participan en una decisión deportiva.</h2>
          <div className="roles-grid">
            {roles.map((role) => <div key={role}>{role}</div>)}
          </div>
        </div>
      </section>

      <section className="section club-belief">
        <div className="section-inner club-belief-inner">
          <div>
            <p className="eyebrow">Diferenciación</p>
            <h2>No sustituimos el criterio deportivo. Lo reforzamos.</h2>
          </div>
          <p>
            TalentDrop no decide por el club. Proporciona una estructura común para que las decisiones
            se apoyen en información organizada, evidencia documentada y procesos compartidos.
          </p>
        </div>
      </section>

      <section className="club-final-cta">
        <div className="club-final-bg" style={{ backgroundImage: "url('/img/youth-training-14-15.jpg')" }} />
        <div className="club-final-copy">
          <p className="eyebrow">Siguiente paso</p>
          <h2>Construyamos una forma más clara de tomar decisiones deportivas.</h2>
          <p>
            Si estás iniciando una nueva temporada, incorporando un Director Deportivo o revisando la
            forma en la que trabaja el club, podemos ayudarte a estructurar ese proceso antes de implantar tecnología.
          </p>
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>Solicitar una reunión</a>
        </div>
      </section>
    </PageShell>
  );
}
