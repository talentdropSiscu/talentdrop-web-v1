import Link from "next/link";
import styles from "./home.module.css";

const clubNeeds = [
  {
    number: "01",
    title: "Convertir información en conocimiento útil",
    text: "El club genera cada vez más datos, informes, vídeo y observaciones. El reto es que ese conocimiento esté disponible cuando realmente se necesita.",
  },
  {
    number: "02",
    title: "Conectar áreas que participan en una misma decisión",
    text: "Dirección Deportiva, Scouting, Performance, Área Médica, Cantera, Secretaría Técnica y Finanzas necesitan trabajar con contexto compartido.",
  },
  {
    number: "03",
    title: "Dar continuidad al conocimiento del jugador",
    text: "Cada evaluación, evidencia y decisión debería enriquecer una historia común, no quedar aislada en una herramienta, documento o conversación.",
  },
  {
    number: "04",
    title: "Saber qué falta antes de decidir",
    text: "Preparar una decisión exige conocer qué información está disponible, qué debe validarse y qué dependencias siguen abiertas.",
  },
];

const roles = [
  ["Football Intelligence", "Conectar información, contexto y criterio para apoyar decisiones deportivas."],
  ["Recruitment & Scouting", "Ordenar seguimiento, evaluaciones y evidencias para comparar mejor."],
  ["Performance & Medical", "Hacer disponible el contexto autorizado cuando un proceso lo necesita."],
  ["Football Operations", "Coordinar responsables, procesos, documentación y seguimiento."],
];

const moments = [
  ["Incorporar", "Reunir el contexto necesario antes de incorporar un jugador."],
  ["Promocionar", "Conectar evolución, evidencias y criterio antes de un cambio de etapa."],
  ["Renovar", "Preparar una visión compartida antes de comprometer una decisión."],
  ["Planificar", "Relacionar necesidades deportivas, contexto de plantilla y prioridades."],
  ["Dar continuidad", "Evitar que cada nueva decisión vuelva a empezar desde cero."],
];

const processAreas = [
  "Dirección Deportiva", "Scouting", "Cantera", "Performance", "Área Médica",
  "Secretaría Técnica", "Finanzas", "Dirección General",
];

export default function Home() {
  const whatsapp = "https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva.";

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="TalentDrop">
            <span className={styles.brandMark}>T</span><span>TalentDrop</span>
          </Link>
          <nav className={styles.nav} aria-label="Navegación principal">
            <a href="#nueva-era">Nueva era del dato</a>
            <a href="#necesidades">Necesidades</a>
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#jugador">Jugador</a>
            <Link href="/clubes">Clubes</Link>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.headerCta}>Solicitar diagnóstico</a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>La nueva era del dato en el deporte</p>
              <h1>Los clubes no necesitan más información. Necesitan estar preparados para utilizarla.</h1>
              <p className={styles.heroLead}>
                El fútbol está incorporando nuevos perfiles para <strong>ordenar información, conectar áreas y preparar mejor las decisiones</strong>. TalentDrop ayuda a convertir esa necesidad en una capacidad permanente del club.
              </p>
              <div className={styles.heroActions}>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Solicitar diagnóstico <span aria-hidden="true">↘</span></a>
                <a href="#nueva-era" className={styles.secondaryButton}>Entender el reto</a>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <img src="/img/decision-room.jpg" alt="Profesionales de un club trabajando juntos en una decisión deportiva" />
              <div className={styles.heroVisualShade} />
              <div className={styles.heroVisualBadge}><span>El nuevo reto del club</span><strong>Información · personas · contexto · decisión</strong></div>
            </div>
          </div>

          <div className={styles.heroSystem} aria-label="De la información a la decisión">
            <div className={styles.systemHeader}><span>Una realidad cada vez más compleja</span><span className={styles.liveDot}>El dato ya está en el club</span></div>
            <div className={styles.systemFlow}>
              {[
                ["01","Más fuentes","Datos, vídeo, informes, documentos y conversaciones"],
                ["02","Más especialistas","Cada área aporta una parte distinta del contexto"],
                ["03","Más coordinación","Una misma decisión necesita distintas miradas"],
                ["04","Más exigencia","La información debe llegar completa y a tiempo"],
                ["05","Mejor decisión","Las personas deciden con una realidad compartida"],
              ].map(([n,title,text]) => <div className={styles.systemStep} key={n}><span className={styles.stepNumber}>{n}</span><div><strong>{title}</strong><p>{text}</p></div><span className={styles.stepSignal} aria-hidden="true" /></div>)}
            </div>
            <div className={styles.systemFooter}>El desafío ya no es generar más datos. Es convertirlos en capacidad para operar y decidir.</div>
          </div>
        </div>
      </section>

      <section className={styles.thesis} id="nueva-era">
        <div className={styles.container}>
          <div className={styles.challengeGrid}>
            <div className={styles.challengePhoto}>
              <img src="/img/director-athlete-session.jpg" alt="Staff deportivo trabajando con un deportista en un entorno real" />
              <div className={styles.photoCaption}><span>Una nueva función dentro del club</span><strong>Conectar lo que saben las personas con lo que necesita la organización.</strong></div>
            </div>
            <div className={styles.challengeContent}>
              <p className={styles.eyebrow}>Lo que está cambiando</p>
              <h2>Los clubes están creando nuevos perfiles para gestionar la complejidad del dato.</h2>
              <p className={styles.challengeLead}>Football Intelligence, Recruitment Analysis, Data & Insights, Performance Intelligence, Football Operations. Los nombres cambian. La necesidad de fondo es la misma.</p>
              <div className={styles.challengeList}>
                <div><span>01</span><div><strong>Encontrar y estructurar</strong><p>Transformar información dispersa en conocimiento que pueda utilizarse.</p></div></div>
                <div><span>02</span><div><strong>Conectar y contextualizar</strong><p>Relacionar lo que aporta cada área alrededor de un jugador, proceso o decisión.</p></div></div>
                <div><span>03</span><div><strong>Preparar y comunicar</strong><p>Hacer visible lo relevante, lo pendiente y el contexto antes de actuar.</p></div></div>
              </div>
              <p className={styles.emphasis}>Los clubes más avanzados están construyendo esta capacidad con especialistas, procesos y tecnología propia. TalentDrop permite desplegarla de forma proporcional a cada club.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.capabilities} id="necesidades">
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div><p className={styles.eyebrow}>Las necesidades del club</p><h2>La tecnología cambia. Las preguntas importantes siguen siendo humanas.</h2></div>
            <p>¿Dónde está la información? ¿Quién la conoce? ¿Está actualizada? ¿Qué falta? ¿Qué necesitamos antes de decidir?</p>
          </div>
          <div className={styles.capabilityList}>
            {clubNeeds.map(item => <article className={styles.capability} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <p className={styles.coreOsNote}>TalentDrop ayuda al club a construir esa capacidad sin obligarle a sustituir las herramientas ni el criterio de sus profesionales.</p>
          <div className={styles.infrastructureSignal} aria-hidden="true"><span/><span/><span/></div>
        </div>
      </section>

      <section className={styles.library}>
        <div className={styles.container}>
          <div className={styles.libraryGrid}>
            <div>
              <p className={styles.eyebrow}>Lo que hoy busca el fútbol</p>
              <h2>Personas capaces de convertir información en contexto para el club.</h2>
              <p className={styles.libraryLead}>Las nuevas posiciones que aparecen alrededor del dato deportivo no sustituyen al director deportivo, al scout, al médico o al analista. Les ayudan a trabajar sobre una base mejor organizada.</p>
              <div className={styles.areaCloud}>{processAreas.map(area => <span key={area}>{area}</span>)}</div>
            </div>
            <div className={styles.libraryPanel}>
              <span className={styles.panelLabel}>Una necesidad común, distintos roles</span>
              <h3>El club necesita conectar conocimiento especializado.</h3>
              <dl>{roles.map(([title,text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.journey} id="diagnostico">
        <div className={styles.container}>
          <div className={styles.journeyCard}>
            <p className={styles.eyebrow}>El primer paso</p>
            <h2>Antes de añadir tecnología, entendemos cómo trabaja realmente el club.</h2>
            <p className={styles.libraryLead}>El diagnóstico permite obtener una fotografía de cómo circula hoy la información, dónde existen dependencias o fricciones y qué convendría ordenar primero.</p>
            <div className={styles.journeyTrack}>
              {["Escuchar","Comprender","Contrastar","Detectar","Priorizar","Proponer"].map((item,index) => <div className={styles.journeyStep} key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
            </div>
            <div className={styles.diagnosticSignal} aria-hidden="true"><span/><span/><span/><span/><span/></div>
          </div>
        </div>
      </section>

      <section className={styles.passport} id="jugador">
        <div className={styles.container}>
          <div className={styles.passportGrid}>
            <div className={styles.passportCopy}>
              <p className={styles.eyebrow}>El jugador como hilo conductor</p>
              <h2>El conocimiento sobre un jugador debería crecer con cada interacción del club.</h2>
              <p className={styles.passportLead}>Scouting, rendimiento, salud, cantera, documentación y decisiones generan conocimiento en momentos distintos. El reto es mantener continuidad y contexto sin volver a reconstruir la historia cada vez.</p>
              <div className={styles.passportPoints}>
                <div><span>01</span><div><strong>Antes</strong><p>Información repartida entre áreas, herramientas, documentos y personas.</p></div></div>
                <div><span>02</span><div><strong>Durante</strong><p>Cada proceso añade nuevas observaciones, evidencias y contexto.</p></div></div>
                <div><span>03</span><div><strong>Después</strong><p>El conocimiento relevante continúa disponible para la siguiente etapa.</p></div></div>
                <div><span>04</span><div><strong>Resultado</strong><p>Una visión más continua del jugador para quienes tienen que trabajar con ella.</p></div></div>
              </div>
            </div>
            <div className={styles.passportMockup} aria-label="Continuidad del conocimiento alrededor del jugador">
              <div className={styles.passportHeader}>
                <div className={styles.passportAvatar}>01</div>
                <div>
                  <span className={styles.passportLabel}>Jugador</span>
                  <h3>Conocimiento continuo</h3>
                  <p>La información crece con cada interacción del club</p>
                </div>
              </div>
              <div className={styles.passportMetrics}>
                <div className={styles.passportMetric}><span>Evaluaciones</span><strong>Contexto</strong><small>Lo que observa y registra el club</small></div>
                <div className={styles.passportMetric}><span>Evidencias</span><strong className={styles.available}>Continuidad</strong><small>Información relevante disponible cuando se necesita</small></div>
                <div className={styles.passportMetric}><span>Evolución</span><strong>Historia</strong><small>El conocimiento se acumula entre etapas</small></div>
                <div className={styles.passportMetric}><span>Decisiones</span><strong>Preparación</strong><small>El contexto no empieza de cero</small></div>
              </div>
            </div>
          </div>
          <div className={styles.passportClosing}><span>Menos reconstrucción manual.</span><strong>Más continuidad del conocimiento.</strong></div>
        </div>
      </section>

      <section className={styles.audiences}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Cuando llega el momento de decidir</p><h2>El club debería llegar con el contexto preparado.</h2></div>
          <div className={styles.ecosystemVisual}><img src="/img/athlete-journey.jpg" alt="Profesionales y deportistas compartiendo contexto en un entorno deportivo"/><div><span>El valor aparece en el momento de actuar</span><strong>No se trata de decidir por el club. Se trata de que el club no tenga que empezar buscando información.</strong></div></div>
          <div className={styles.audienceGrid}>
            {moments.map(([title,text]) => <article className={styles.audienceCard} key={title}><p className={styles.cardEyebrow}>Momento de decisión</p><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.category}>
        <div className={styles.container}>
          <div className={styles.categoryCard}>
            <p className={styles.eyebrowLight}>TalentDrop</p>
            <h2>Infraestructura para las decisiones deportivas.</h2>
            <p>Los profesionales siguen aportando criterio, experiencia y responsabilidad. TalentDrop ayuda a que la información y el conocimiento necesarios estén mejor organizados, conectados y disponibles cuando el club los necesita.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">Conocer TalentDrop →</a>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="contacto">
        <div className={styles.container}>
          <div className={styles.finalGrid}>
            <p className={styles.eyebrow}>Siguiente paso</p>
            <div><h2>El primer paso es entender dónde está hoy el club.</h2><p>En un diagnóstico breve identificamos cómo circula la información, dónde aparecen dependencias o fricciones y qué convendría ordenar primero. <strong>Sin cambiar las herramientas del club. Sin empezar por una implantación tecnológica.</strong></p><a className={styles.primaryButton} href="mailto:contacto@talentdrop.es?subject=Solicitar%20diagn%C3%B3stico%20TalentDrop">Solicitar diagnóstico <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}><Link href="/" className={styles.brand}><span className={styles.brandMark}>T</span><span>TalentDrop</span></Link><p>Infraestructura para las decisiones deportivas</p></div>
          <div className={styles.footerBottom}><span>© 2026 TalentDrop</span><div><Link href="/deportistas">Deportistas</Link><Link href="/clubes">Clubes</Link><Link href="/federaciones">Federaciones</Link><a href="mailto:contacto@talentdrop.es">contacto@talentdrop.es</a></div></div>
        </div>
      </footer>
    </main>
  );
}
