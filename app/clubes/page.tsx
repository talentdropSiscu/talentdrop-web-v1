import { CONTACT_EMAIL, PageShell, Hero } from "../_components/Site";

const decisions = [
  ["Incorporar", "¿Tenemos suficiente evidencia para incorporar a este jugador?"],
  ["Promocionar", "¿Está preparado este jugador de cantera para dar el salto al primer equipo?"],
  ["Renovar", "¿Qué contexto deportivo necesitamos antes de decidir una renovación?"],
  ["Retorno", "¿Está disponible la evidencia necesaria para valorar su vuelta a competición?"],
  ["Planificar", "¿Qué información necesitamos para preparar una decisión de plantilla?"],
];

const journey = ["Diagnóstico", "Diseño", "Implantación", "Activación", "Entrega & Evolución"];
const sources = ["Scouting", "Performance", "Área Médica", "Cantera", "Vídeo", "ERP", "Documentos"];

export default function Clubes() {
  const subject = "TalentDrop%20%7C%20Clubes";
  return (
    <PageShell>
      <Hero
        eyebrow="Clubes · Sports Decision Infrastructure"
        title="La infraestructura para preparar mejores decisiones deportivas."
        text="TalentDrop ayuda a los clubes a organizar y conectar la información, la evidencia, los protocolos y las personas que intervienen en sus decisiones deportivas. Sin sustituir las herramientas que ya utilizan. Sin sustituir el criterio de sus profesionales."
        image="/img/product-system.jpg"
      >
        <div className="button-row">
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a>
          <a className="btn secondary" href="#como-trabajamos">Cómo trabajamos</a>
        </div>
      </Hero>

      <section className="section club-problem">
        <div className="section-inner">
          <p className="eyebrow">El reto</p>
          <div className="club-problem-grid">
            <h2>Tener la información no significa tener la decisión preparada.</h2>
            <div className="club-problem-points">
              <div><span>01</span><strong>La información existe</strong><p>Scouting, rendimiento, área médica, cantera, vídeo, documentación y dirección deportiva generan información continuamente.</p></div>
              <div><span>02</span><strong>La decisión cruza áreas</strong><p>Una decisión puede necesitar conocimiento procedente de varias áreas y profesionales.</p></div>
              <div><span>03</span><strong>El reto es prepararla</strong><p>La información relevante debe llegar con contexto, evidencia, responsables y pendientes visibles.</p></div>
            </div>
          </div>
          <div className="roles-grid">{sources.map((source) => <div key={source}>{source}</div>)}</div>
          <p className="club-problem-line">La información existe. El reto es organizarla alrededor de la decisión.</p>
        </div>
      </section>

      <section className="section club-method-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Qué hace TalentDrop</p>
            <h2>La decisión como punto de encuentro.</h2>
            <p>Antes de una decisión importante, TalentDrop ayuda al club a responder qué información necesita, qué evidencia existe, qué protocolo aplica, quién debe participar, qué sigue pendiente y si la decisión está preparada.</p>
          </div>
          <div className="method-flow">
            {["Información", "Evidencia", "Protocolos", "Personas", "Decisión preparada"].map((item, index) => (
              <div className="method-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section deliverables-section">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Casos de decisión</p>
            <h2>Diferentes decisiones. La misma necesidad de preparación.</h2>
          </div>
          <div className="deliverables-list">
            {decisions.map(([title, text], index) => (
              <div className="deliverable-row" key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="section club-deployment">
        <div className="section-inner">
          <div className="method-head">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Diseñada alrededor de la realidad del club.</h2>
            <p>Partimos de cómo trabaja actualmente el club. Identificamos dónde se encuentra la información, cómo participa cada área y qué necesita cada decisión. A partir de esa realidad diseñamos e implantamos una solución adaptada a la organización.</p>
          </div>
          <div className="method-flow">
            {journey.map((item, index) => <div className="method-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>)}
          </div>
          <p className="club-problem-line"><strong>TalentDrop aporta la infraestructura. El modelo de decisión sigue siendo del club.</strong></p>
        </div>
      </section>

      <section className="section club-belief">
        <div className="section-inner club-belief-inner">
          <div><p className="eyebrow">Conocimiento</p><h2>Cada decisión debería hacer al club un poco más inteligente.</h2></div>
          <div>
            <p>La información utilizada, la evidencia disponible, las personas que participaron y el motivo de la decisión pueden permanecer como parte del conocimiento de la organización.</p>
            <p><strong>Decisión → Trazabilidad → Conocimiento → Siguiente decisión</strong></p>
            <p><strong>La infraestructura permanece. El conocimiento crece. Las decisiones mejoran.</strong></p>
          </div>
        </div>
      </section>

      <section className="club-final-cta">
        <div className="club-final-bg" style={{ backgroundImage: "url('/img/youth-training-14-15.jpg')" }} />
        <div className="club-final-copy">
          <p className="eyebrow">Siguiente paso</p>
          <h2>Empecemos por una decisión real de tu club.</h2>
          <p>No necesitas cambiar tus sistemas para empezar. Podemos analizar una decisión concreta y valorar qué información, evidencia, protocolos y personas necesita para estar mejor preparada.</p>
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a>
        </div>
      </section>
    </PageShell>
  );
}
