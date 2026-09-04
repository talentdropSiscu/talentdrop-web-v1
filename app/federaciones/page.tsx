import { CONTACT_EMAIL, PageShell, Hero } from "../_components/Site";

const areas = ["Selecciones", "Categorías inferiores", "Scouting", "Metodología", "Performance", "Área Médica"];
const journey = ["Diagnóstico", "Diseño", "Implantación", "Activación", "Entrega & Evolución"];

export default function Federaciones() {
  const subject = "TalentDrop%20%7C%20Federaciones";
  return (
    <PageShell>
      <Hero
        eyebrow="Federaciones · Sports Decision Infrastructure"
        title="El conocimiento deportivo de una federación debería crecer con cada generación."
        text="Selecciones, categorías inferiores, cuerpos técnicos, scouting, rendimiento, área médica y metodología generan conocimiento durante años. TalentDrop ayuda a organizarlo alrededor de las decisiones deportivas y mantener su continuidad en el tiempo."
        image="/img/institutions-program.jpg"
      >
        <div className="button-row">
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a>
          <a className="btn secondary" href="#decision-federativa">Ver un caso de decisión</a>
        </div>
      </Hero>

      <section className="section club-problem">
        <div className="section-inner">
          <p className="eyebrow">Complejidad federativa</p>
          <div className="club-problem-grid">
            <h2>Muchas estructuras. Una memoria deportiva común.</h2>
            <div className="club-problem-points">
              <div><span>01</span><strong>Los jugadores evolucionan</strong><p>Un deportista puede recorrer diferentes categorías y selecciones durante años.</p></div>
              <div><span>02</span><strong>Los profesionales cambian</strong><p>Cuerpos técnicos, seleccionadores y responsables pueden cambiar entre ciclos deportivos.</p></div>
              <div><span>03</span><strong>El conocimiento debe permanecer</strong><p>La historia relevante no debería reconstruirse desde cero cada vez que cambia una etapa o un profesional.</p></div>
            </div>
          </div>
          <div className="roles-grid">{areas.map((area) => <div key={area}>{area}</div>)}</div>
          <p className="club-problem-line">Los jugadores evolucionan. Los profesionales cambian. El conocimiento de la federación no debería empezar de cero con cada ciclo.</p>
        </div>
      </section>

      <section id="decision-federativa" className="section club-method-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Decisión federativa</p>
            <h2>¿Está preparado este jugador para avanzar al siguiente nivel?</h2>
            <p>TalentDrop permite organizar el contexto longitudinal necesario para preparar la decisión sin sustituir el criterio del seleccionador ni de los responsables deportivos.</p>
          </div>
          <div className="method-flow">
            {["Histórico", "Evolución", "Rendimiento", "Disponibilidad", "Criterio técnico", "Evidencia pendiente", "Decisión"].map((item, index) => (
              <div className="method-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section deliverables-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Infraestructura</p>
            <h2>La decisión como punto de encuentro.</h2>
            <p>La información puede vivir en sistemas, documentos y áreas distintas. TalentDrop ayuda a organizar lo necesario alrededor de la decisión que la federación debe preparar.</p>
          </div>
          <div className="method-flow">
            {["Información", "Evidencia", "Protocolos", "Personas", "Decisión", "Trazabilidad"].map((item, index) => (
              <div className="method-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section club-belief">
        <div className="section-inner club-belief-inner">
          <div><p className="eyebrow">Continuidad</p><h2>Las personas cambian. El conocimiento debería permanecer.</h2></div>
          <div>
            <p>La decisión, su rationale, la evidencia utilizada, los participantes y el resultado pueden permanecer como parte del conocimiento institucional de la federación.</p>
            <p><strong>Decisión → Evidencia → Participantes → Resultado → Conocimiento institucional</strong></p>
          </div>
        </div>
      </section>

      <section className="section club-deployment">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Empezamos por una decisión real de la federación.</h2>
          </div>
          <div className="method-flow">
            {journey.map((item, index) => <div className="method-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>)}
          </div>
          <p className="club-problem-line"><strong>TalentDrop aporta la infraestructura. El modelo de decisión sigue siendo de la federación.</strong></p>
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">TalentDrop</p>
        <h2>Hablemos sobre una decisión real.</h2>
        <p>Podemos empezar por una decisión concreta y valorar qué información, evidencia, protocolos y personas necesita para estar mejor preparada.</p>
        <a className="btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a>
      </section>
    </PageShell>
  );
}
