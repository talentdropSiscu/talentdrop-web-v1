import { CONTACT_EMAIL, PageShell, Hero } from "../_components/Site";

const journey=["Diagnóstico","Diseño","Implantación","Activación","Entrega","Evolución"];

export default function Federaciones(){
 const subject="TalentDrop%20%7C%20Federaciones";
 return <PageShell>
  <Hero eyebrow="Federaciones · Sports Decision Infrastructure" title="El conocimiento deportivo de una federación debería crecer con cada generación." text="Selecciones, categorías inferiores, cuerpos técnicos, scouting, rendimiento, área médica y metodología generan conocimiento durante años. TalentDrop ayuda a organizarlo alrededor de las decisiones deportivas y mantener su continuidad en el tiempo." image="/img/institutions-program.jpg"><div className="button-row"><a className="btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a><a className="btn secondary" href="#decision-federativa">Ver un caso de decisión</a></div></Hero>

  <section className="v22-section light"><div className="v22-wrap"><div className="v22-statement"><div><p className="v22-kicker">COMPLEJIDAD FEDERATIVA</p><h2 className="v22-title">Muchas estructuras. Una memoria deportiva común.</h2></div><p className="v22-lead">Los jugadores evolucionan entre categorías. Los profesionales y cuerpos técnicos pueden cambiar. El conocimiento de la federación no debería empezar de cero con cada ciclo.</p></div><div className="v22-generation"><span>U15</span><i>→</i><span>U17</span><i>→</i><span>U19</span><i>→</i><span>U21</span><i>→</i><span>ABSOLUTA</span></div></div></section>

  <section className="v22-editorial"><div className="v22-photo" style={{backgroundImage:"url('/img/academy-16-17.jpg')"}}/><div className="v22-editorial-copy"><p className="v22-kicker">CONTINUIDAD</p><h2 className="v22-title">El jugador avanza. El conocimiento debería avanzar con él.</h2><p>La historia relevante puede acompañar al deportista entre categorías y ciclos, manteniendo contexto para los profesionales que deben preparar la siguiente decisión.</p></div></section>

  <section id="decision-federativa" className="v22-section white"><div className="v22-wrap"><p className="v22-kicker">DECISIÓN FEDERATIVA</p><h2 className="v22-title">¿Está preparado este jugador para avanzar al siguiente nivel?</h2><p className="v22-lead">TalentDrop organiza el contexto longitudinal necesario sin sustituir el criterio del seleccionador ni de los responsables deportivos.</p><div className="v22-stage-line"><span>Histórico</span><span>→</span><span>Evolución</span><span>→</span><span>Rendimiento</span><span>→</span><span>Disponibilidad</span><span>→</span><span>Criterio técnico</span><span>→</span><strong>Decisión</strong></div></div></section>

  <section className="v22-editorial reverse"><div className="v22-photo" style={{backgroundImage:"url('/img/institutional-partner.jpg')"}}/><div className="v22-editorial-copy"><p className="v22-kicker">MEMORIA INSTITUCIONAL</p><h2 className="v22-title">Las personas cambian. El conocimiento debería permanecer.</h2><p>La decisión, su rationale, la evidencia utilizada, los participantes y el resultado pueden permanecer como parte del conocimiento institucional de la federación.</p></div></section>

  <section className="v22-section ink"><div className="v22-wrap"><p className="v22-kicker">CÓMO TRABAJAMOS</p><h2 className="v22-title">Empezamos por una decisión real de la federación.</h2><div className="v22-flow">{journey.map((x,i)=><div className="v22-flow-step" key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div><p className="v22-lead"><strong style={{color:"#fff"}}>TalentDrop aporta la infraestructura.</strong> El modelo de decisión sigue siendo de la federación.</p></div></section>

  <section className="v22-cta"><div className="v22-cta-copy"><p className="v22-kicker">SIGUIENTE PASO</p><h2 className="v22-title">Hablemos sobre una decisión real.</h2><p>Podemos empezar por una decisión concreta y valorar qué información, evidencia, protocolos y personas necesita para estar mejor preparada.</p><div className="v22-actions"><a className="v22-btn primary" href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}>Hablemos →</a></div></div><div className="v22-cta-photo" style={{backgroundImage:"url('/img/academy-training.jpg')"}}/></section>
 </PageShell>;
}
