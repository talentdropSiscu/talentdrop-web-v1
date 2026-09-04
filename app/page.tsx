import Link from "next/link";
import styles from "./home.module.css";

const sources=["SCOUTING","PERFORMANCE","ÁREA MÉDICA","CANTERA","VÍDEO","ERP","DOCUMENTOS"];
const decisionQuestions=["¿Qué información necesitamos?","¿Qué evidencia tenemos?","¿Qué protocolo aplica?","¿Quién debe participar?","¿Qué sigue pendiente?"];
const moments=[["Incorporar","¿Tenemos suficiente evidencia para incorporar a este jugador?"],["Promocionar","¿Está preparado para dar el salto al primer equipo?"],["Renovar","¿Qué contexto necesitamos antes de decidir una renovación?"],["Retorno","¿Está disponible la evidencia necesaria para valorar su vuelta?"],["Planificar","¿Qué información necesitamos para preparar la plantilla?"]];

export default function Home(){
 const whatsapp="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop.";
 return <main className={styles.page}>
  <header className={styles.header}><div className={styles.headerInner}>
   <Link href="/" className={`${styles.brand} ${styles.brandV22}`} aria-label="TalentDrop"><img src="/brand/talentdrop-logo-dark.svg" alt="TalentDrop"/></Link>
   <nav className={styles.nav} aria-label="Navegación principal"><a href="#decision">Qué hacemos</a><Link href="/clubes">Clubes</Link><Link href="/federaciones">Federaciones</Link><Link href="/deportistas">Deportistas</Link><a href="#contacto">Contacto</a></nav>
   <a href="#contacto" className={styles.headerCta}>Hablemos</a>
  </div></header>

  <section className={`${styles.hero} ${styles.heroV22}`}>
   <div className={styles.heroGlow}/><div className={styles.container}><div className={styles.heroGrid}>
    <div className={styles.heroCopy}><p className={styles.kicker}>SPORTS DECISION INFRASTRUCTURE</p><h1>Los clubes no necesitan más información.<br/><span>Necesitan estar preparados para utilizarla.</span></h1><p className={styles.heroLead}>TalentDrop organiza información, evidencia, protocolos y personas alrededor de las decisiones deportivas. <strong>Sin sustituir las herramientas del club. Sin sustituir el criterio de sus profesionales.</strong></p><div className={styles.heroActions}><a href="#contacto" className={styles.primaryButton}>Solicitar diagnóstico <span>→</span></a><a href="#film" className={styles.secondaryButton}>Ver TalentDrop en 60 segundos ▶</a></div></div>
    <div className={styles.heroVisual}><img src="/img/decision-room.jpg" alt="Profesionales de un club preparando una decisión deportiva"/><div className={styles.heroVisualShade}/><div className={styles.heroVisualBadge}><span>DATA · EVIDENCE · DECISIONS</span><strong>La decisión deportiva como unidad de trabajo.</strong></div></div>
   </div></div>
  </section>

  <section className={styles.thesis} id="decision"><div className={styles.container}>
   <div className={styles.splitHeading}><div><p className={styles.eyebrow}>UNA NUEVA CAPA PARA EL DEPORTE</p><h2>Tener la información conectada no significa necesariamente tener una decisión preparada.</h2></div><p>Los sistemas generan y conectan información. TalentDrop trabaja sobre la fragmentación que permanece alrededor de una decisión.</p></div>
   <div className={styles.areaCloud}>{sources.map(x=><span key={x}>{x}</span>)}</div>
   <div className={styles.decisionClosing}><span>Información distribuida</span><i>→</i><strong>DECISIÓN DEPORTIVA</strong></div>
  </div></section>

  <section className={styles.capabilities}><div className={styles.container}>
   <p className={styles.eyebrow}>LA DECISIÓN COMO PUNTO DE ENCUENTRO</p><div className={styles.sectionIntro}><h2>¿Está preparada esta decisión?</h2></div>
   <div className={styles.capabilityList}>{decisionQuestions.map((q,i)=><article className={styles.capability} key={q}><span>{String(i+1).padStart(2,"0")}</span><h3>{q}</h3></article>)}</div>
   <div className={styles.decisionClosing}><span>Información</span><i>→</i><span>Evidencia</span><i>→</i><span>Contexto</span><i>→</i><span>Readiness</span><i>→</i><strong>Decisión</strong><i>→</i><span>Trazabilidad</span></div>
  </div></section>

  <section id="film" aria-labelledby="brand-film-title" style={{padding:"128px 0",background:"#07111f",color:"#fff"}}><div className={styles.container}>
   <div style={{maxWidth:760,marginBottom:46}}><p style={{margin:"0 0 18px",color:"#8eb5ff",fontSize:11,fontWeight:800,letterSpacing:".15em"}}>TALENTDROP · SPORTS DECISION INFRASTRUCTURE</p><h2 id="brand-film-title" style={{margin:0,fontFamily:"var(--td-display)",fontSize:"clamp(42px,5vw,68px)",lineHeight:.98,letterSpacing:"-.055em",fontWeight:650}}>Así funciona una Sports Decision Infrastructure.</h2><p style={{margin:"24px 0 0",color:"#b8c8d8",fontSize:17,lineHeight:1.7}}>Información, evidencia, protocolos y personas conectados alrededor de una decisión deportiva.</p></div>
   <div style={{overflow:"hidden",borderRadius:12,border:"1px solid rgba(255,255,255,.12)",background:"#0b0f17",boxShadow:"0 36px 90px rgba(0,0,0,.34)"}}><video controls playsInline preload="metadata" aria-label="TalentDrop — Sports Decision Infrastructure" style={{width:"100%",height:"auto",display:"block",aspectRatio:"16 / 9",objectFit:"cover"}}><source src="/video/talentdrop-decision-infrastructure-web%20(1).mp4" type="video/mp4"/></video></div>
   <p style={{margin:"28px 0 0",color:"#d7e1ec",fontSize:16}}><strong style={{color:"#fff"}}>TalentDrop no sustituye las herramientas del club.</strong> Las conecta alrededor de las decisiones deportivas.</p>
  </div></section>

  <section className={styles.audiences}><div className={styles.container}><div className={styles.sectionIntro}><p className={styles.eyebrow}>DECISIONES REALES</p><h2>Diferentes decisiones. La misma necesidad de preparación.</h2></div><div className={styles.decisionFlow}>{moments.map(([title,text],i)=><article className={styles.decisionMoment} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className={styles.journey} id="diagnostico"><div className={styles.container}><div className={styles.journeyCard}><p className={styles.eyebrow}>PROYECTO LLAVE EN MANO</p><h2>Diseñada alrededor de la realidad del club.</h2><p className={styles.libraryLead}>Partimos de cómo trabaja actualmente la organización. A partir de esa realidad diseñamos e implantamos una solución adaptada a sus decisiones deportivas.</p><div className={styles.journeyTrack}>{["Diagnóstico","Diseño","Implantación","Activación","Entrega & Evolución"].map((x,i)=><div className={styles.journeyStep} key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div><p className={styles.emphasis}>TalentDrop aporta la infraestructura. El modelo de decisión sigue siendo del club.</p></div></div></section>

  <section className={styles.passport}><div className={styles.container}><div className={styles.passportGrid}><div className={styles.passportCopy}><p className={styles.eyebrow}>CONOCIMIENTO INSTITUCIONAL</p><h2>Cada decisión debería hacer al club un poco más inteligente.</h2><p className={styles.passportLead}>La información utilizada, la evidencia disponible, las personas que participaron y el motivo de la decisión pueden permanecer como parte del conocimiento de la organización.</p></div><div className={styles.passportMockup}><div className={styles.passportHeader}><div className={styles.passportAvatar}>01</div><div><span className={styles.passportLabel}>DECISIÓN</span><h3>Conocimiento que permanece</h3><p>La siguiente decisión no empieza desde cero.</p></div></div><div className={styles.passportMetrics}>{["Rationale","Evidencia","Participantes","Trazabilidad"].map(x=><div className={styles.passportMetric} key={x}><span>{x}</span><strong>Contexto</strong><small>Parte de la memoria de la organización</small></div>)}</div></div></div><div className={styles.passportClosing}><span>La infraestructura permanece.</span><span>El conocimiento crece.</span><strong>Las decisiones mejoran.</strong></div></div></section>

  <section className={styles.finalCta} id="contacto"><div className={styles.container}><div className={styles.finalGrid}><p className={styles.eyebrow}>SIGUIENTE PASO</p><div><h2>Empecemos por una decisión real de tu organización.</h2><p>No necesitas cambiar tus sistemas para empezar. Analizamos cómo se prepara hoy la decisión y qué infraestructura necesita alrededor.</p><a className={styles.primaryButton} href="mailto:clubs@talentdrop.es?subject=TalentDrop%20%7C%20Primera%20conversaci%C3%B3n">Hablemos <span>→</span></a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton} style={{marginLeft:12}}>WhatsApp</a></div></div></div></section>

  <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><Link href="/" className={`${styles.brand} ${styles.brandV22}`}><img src="/brand/talentdrop-logo-light.svg" alt="TalentDrop"/></Link><p>DATA · EVIDENCE · DECISIONS</p></div><div className={styles.footerBottom}><span>© 2026 TalentDrop · Sports Decision Infrastructure</span><div><Link href="/clubes">Clubes</Link><Link href="/federaciones">Federaciones</Link><Link href="/deportistas">Deportistas</Link><a href="mailto:clubs@talentdrop.es">clubs@talentdrop.es</a></div></div></div></footer>
 </main>;
}