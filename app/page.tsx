import Link from "next/link";
import styles from "./home.module.css";

const capabilities = [
  {
    number: "01",
    title: "Diagnostic Intelligence",
    text: "Entendemos cómo funciona la organización y dónde existen brechas que afectan a sus procesos y decisiones.",
  },
  {
    number: "02",
    title: "Data & Knowledge Infrastructure",
    text: "Convertimos información fragmentada en conocimiento organizado, confiable y trazable.",
  },
  {
    number: "03",
    title: "Decision Infrastructure",
    text: "Preparamos el contexto necesario para que cada decisión pueda tomarse con mayor coordinación y confianza.",
  },
];

const audiences = [
  {
    eyebrow: "Clubes",
    title: "Conectamos las áreas alrededor de los procesos y decisiones deportivas.",
    text: "Diagnostic Engine, Protocol Infrastructure, ClubOS y Decision Infrastructure sobre una capa común.",
    href: "/clubes",
    link: "Para clubes",
  },
  {
    eyebrow: "Federaciones",
    title: "Construimos infraestructura transversal para conocimiento deportivo.",
    text: "Una base compartida para ordenar, validar y conectar información entre programas, clubes, deportistas y estructuras técnicas.",
    href: "/federaciones",
    link: "Para federaciones",
  },
  {
    eyebrow: "Administraciones",
    title: "Damos continuidad y trazabilidad a programas deportivos.",
    text: "Objetivos, participantes, evidencias, indicadores, responsables y resultados conectados dentro de una misma infraestructura.",
    href: "#contacto",
    link: "Para administraciones",
  },
  {
    eyebrow: "Deportistas",
    title: "Construimos una identidad deportiva continua y verificable.",
    text: "Talent Passport conecta trayectoria, evidencias, contexto y evolución para que el conocimiento acompañe al deportista.",
    href: "/deportistas",
    link: "Para deportistas",
  },
];

const knowledge = [
  "Qué es una Sports Decision Infrastructure",
  "Por qué una decisión no empieza cuando hay que decidir",
  "Qué significa Data Trust en el deporte",
];

const processAreas = [
  "Dirección Deportiva",
  "Scouting",
  "Cantera",
  "Performance",
  "Área Médica",
  "Secretaría Técnica",
  "Finanzas",
  "Dirección General",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="TalentDrop">
            <span className={styles.brandMark}>T</span>
            <span>TalentDrop</span>
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            <a href="#infraestructura">Infraestructura</a>
            <a href="#diagnostico">Diagnostic Engine</a>
            <a href="#passport">Talent Passport</a>
            <a href="#ecosistema">Ecosistema</a>
            <a href="#knowledge">Knowledge</a>
            <a href="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva." target="_blank" rel="noopener noreferrer">Contacto</a>
          </nav>

          <a href="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva." target="_blank" rel="noopener noreferrer" className={styles.headerCta}>
            Solicitar diagnóstico
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Sports Decision Infrastructure</p>
              <h1>
                La infraestructura sobre la que se preparan las decisiones del
                deporte.
              </h1>
              <p className={styles.heroLead}>
                Clubes, federaciones y organizaciones deportivas ya tienen
                datos, herramientas y profesionales. TalentDrop conecta
                <strong> información, evidencias, protocolos, responsabilidades y conocimiento</strong>{" "}
                para que puedan trabajar y decidir sobre una realidad común.
              </p>
              <div className={styles.heroActions}>
                <a href="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva." target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                  Solicitar diagnóstico
                  <span aria-hidden="true">↘</span>
                </a>
                <a href="#como-funciona" className={styles.secondaryButton}>
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <img src="/img/decision-room.jpg" alt="Equipo deportivo preparando una decisión con información y evidencias" />
              <div className={styles.heroVisualShade} />
              <div className={styles.heroVisualBadge}><span>Decision environment</span><strong>Información · protocolos · personas · evidencia</strong></div>
            </div>
          </div>

          <div className={styles.heroSystem} aria-label="Recorrido de TalentDrop">
              <div className={styles.systemHeader}>
                <span>Preparación de una decisión</span>
                <span className={styles.liveDot}>Infraestructura activa</span>
              </div>
              <div className={styles.systemFlow}>
                {[
                  ["01", "Información", "Existe en sistemas, documentos y personas"],
                  ["02", "Protocolos", "Definen qué debe existir y quién interviene"],
                  ["03", "Data Trust", "Valida origen, contexto, permisos y trazabilidad"],
                  ["04", "Coordinación", "Activa responsables, evidencias y validaciones"],
                  ["05", "Decisión", "Llega cuando la infraestructura está preparada"],
                ].map(([n, title, text]) => (
                  <div className={styles.systemStep} key={n}>
                    <span className={styles.stepNumber}>{n}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                    <span className={styles.stepSignal} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className={styles.systemFooter}>
                TalentDrop no decide por la organización. Hace que esté preparada para decidir.
              </div>
            </div>
        </div>
      </section>

      <section className={styles.thesis} id="infraestructura">
        <div className={styles.container}>
          <div className={styles.challengeGrid}>
            <div className={styles.challengePhoto} aria-label="Trabajo real en un entorno deportivo">
              <img src="/img/director-athlete-session.jpg" alt="Deportistas y staff trabajando en un entorno deportivo real" />
              <div className={styles.photoCaption}>
                <span>Infraestructura antes que decisión</span>
                <strong>La información debe estar disponible antes de que alguien tenga que pedirla.</strong>
              </div>
            </div>

            <div className={styles.challengeContent}>
              <p className={styles.eyebrow}>El reto</p>
              <h2>Una decisión no empieza cuando hay que decidir.</h2>
              <p className={styles.challengeLead}>
                Empieza mucho antes: cuando la información está disponible, los protocolos son claros
                y cada área sabe qué debe aportar.
              </p>

              <div className={styles.challengeList}>
                <div><span>01</span><div><strong>Información distribuida</strong><p>Sistemas, documentos, WhatsApp, vídeo y conocimiento humano contienen partes distintas de la realidad.</p></div></div>
                <div><span>02</span><div><strong>Protocolos e información desconectados</strong><p>El club puede saber cómo quiere trabajar y, aun así, no tener la evidencia preparada cuando el proceso la necesita.</p></div></div>
                <div><span>03</span><div><strong>Coordinación manual</strong><p>Cuando falta algo, una persona termina persiguiendo información, validaciones y responsables.</p></div></div>
              </div>

              <p className={styles.emphasis}>
                TalentDrop convierte esa fragmentación en una infraestructura operativa viva.
              </p>
            </div>
          </div>

          <div className={styles.decisionFlowLight}>
            {[
              ["Descubre", "Cómo funciona realmente la organización"],
              ["Organiza", "Sistemas, documentos y conocimiento humano"],
              ["Contrasta", "Realidad frente a protocolos y criterios"],
              ["Coordina", "Pendientes, responsables y evidencias"],
              ["Prepara", "El contexto necesario para decidir"],
            ].map(([title, text], index) => (
              <div className={styles.decisionItemLight} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.capabilities} id="infraestructura-core">
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.eyebrow}>Core OS</p>
              <h2>La infraestructura que conecta conocimiento y decisiones.</h2>
            </div>
            <p>
              No sustituimos el software de la organización. Lo conectamos
              alrededor de sus procesos y decisiones.
            </p>
          </div>

          <div className={styles.capabilityList}>
            {capabilities.map((item) => (
              <article className={styles.capability} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.coreOsNote}>
            La tecnología, metodología y arquitectura que conectan estas capacidades forman parte del Core OS de TalentDrop.
          </p>
          <div className={styles.infrastructureSignal} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className={styles.journey} id="diagnostico">
        <div className={styles.container}>
          <div className={styles.journeyCard}>
            <p className={styles.eyebrow}>Diagnostic Engine</p>
            <h2>Antes de avanzar, entendemos cómo está preparada realmente la organización.</h2>
            <div className={styles.journeyTrack}>
              {[
                "Comprender",
                "Observar",
                "Contrastar",
                "Priorizar",
                "Preparar",
                "Evolucionar",
              ].map((item, index) => (
                <div className={styles.journeyStep} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className={styles.diagnosticSignal} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.library}>
        <div className={styles.container}>
          <div className={styles.libraryGrid}>
            <div>
              <p className={styles.eyebrow}>Del diagnóstico a la infraestructura</p>
              <h2>El resultado no es un score. Es saber qué ordenar primero.</h2>
              <p className={styles.libraryLead}>
                TalentDrop convierte las respuestas en hallazgos explicables,
                prioridades, responsables y acciones. Después utiliza ese mismo
                diagnóstico para construir la Control Room y preparar casos de
                decisión.
              </p>
              <div className={styles.areaCloud}>
                {processAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>

            <div className={styles.libraryPanel}>
              <span className={styles.panelLabel}>Ejemplo · prioridad detectada</span>
              <h3>Área Médica · disponibilidad de evidencia</h3>
              <dl>
                <div>
                  <dt>Hallazgo</dt>
                  <dd>
                    Determinada información depende todavía de una solicitud
                    manual para estar disponible.
                  </dd>
                </div>
                <div>
                  <dt>Protocolo</dt>
                  <dd>
                    Define qué evidencia debe existir antes de que el proceso
                    pueda avanzar.
                  </dd>
                </div>
                <div>
                  <dt>Responsable</dt>
                  <dd>
                    El sistema identifica quién debe aportar o validar la
                    información.
                  </dd>
                </div>
                <div>
                  <dt>Acción</dt>
                  <dd>
                    Formalizar disponibilidad, actualización y trazabilidad
                    dentro de la infraestructura.
                  </dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>
                    La siguiente decisión no empieza persiguiendo información
                    desde cero.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.passport} id="passport">
        <div className={styles.container}>
          <div className={styles.passportGrid}>
            <div className={styles.passportCopy}>
              <p className={styles.eyebrow}>TalentDrop Player Passport</p>
              <h2>El club pasa a construir infraestructura alrededor de cada jugador.</h2>
              <p className={styles.passportLead}>
                El Talent Passport no es una ficha. Es el punto donde convergen
                información, protocolos, evidencias, responsabilidades e historial
                para acompañar la evolución del jugador y preparar mejores decisiones.
              </p>

              <div className={styles.passportPoints}>
                <div><span>01</span><div><strong>Protocolos aplicables</strong><p>Qué debe existir según la etapa, proceso o decisión.</p></div></div>
                <div><span>02</span><div><strong>Información conectada</strong><p>Rendimiento, salud, formación, scouting, documentación y contexto.</p></div></div>
                <div><span>03</span><div><strong>Evidencias y trazabilidad</strong><p>Qué se utilizó, cuándo se actualizó y quién lo validó.</p></div></div>
                <div><span>04</span><div><strong>Continuidad</strong><p>El conocimiento acompaña al jugador dentro de la infraestructura del club.</p></div></div>
              </div>
            </div>

            <div className={styles.passportMockup} aria-label="Ejemplo visual de Talent Passport">
              <div className={styles.passportHeader}>
                <div className={styles.passportAvatar}>AM</div>
                <div>
                  <span className={styles.passportLabel}>Talent Passport</span>
                  <h3>Álvaro Martínez López</h3>
                  <p>Delantero · Juvenil A</p>
                </div>
                <span className={styles.passportStatus}>ACTIVO</span>
              </div>

              <div className={styles.passportTabs}>
                <span className={styles.activeTab}>Resumen</span>
                <span>Rendimiento</span>
                <span>Salud</span>
                <span>Evidencias</span>
                <span>Historial</span>
              </div>

              <div className={styles.passportMetrics}>
                <div className={styles.passportMetric}>
                  <span>Índice de desarrollo</span>
                  <strong>78</strong>
                  <small>/100</small>
                  <div className={styles.passportBar}><i style={{ width: "78%" }} /></div>
                </div>
                <div className={styles.passportMetric}>
                  <span>Disponibilidad</span>
                  <strong className={styles.available}>Disponible</strong>
                  <small>Sin limitaciones registradas</small>
                </div>
                <div className={styles.passportMetric}>
                  <span>Protocolos activos</span>
                  <strong>4</strong>
                  <small>Desarrollo · Salud · Promoción · Seguimiento</small>
                </div>
                <div className={styles.passportMetric}>
                  <span>Última actualización</span>
                  <strong>Hoy</strong>
                  <small>Información sincronizada</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.passportClosing}>
            <span>Un activo para el club.</span>
            <strong>Un activo para el futuro de cada jugador.</strong>
          </div>
        </div>
      </section>

      <section className={styles.audiences} id="ecosistema">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Para quién construimos</p>
            <h2>Una infraestructura. Distintos contextos deportivos.</h2>
          </div>

          <div className={styles.ecosystemVisual}>
            <img src="/img/athlete-journey.jpg" alt="Entorno deportivo donde personas y organizaciones comparten contexto" />
            <div><span>Una infraestructura compartida</span><strong>El contexto cambia. La necesidad de información confiable, trazable y preparada permanece.</strong></div>
          </div>

          <div className={styles.audienceGrid}>
            {audiences.map((item) => (
              <article className={styles.audienceCard} key={item.eyebrow}>
                <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.href}>{item.link} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.knowledge} id="knowledge">
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.eyebrow}>Knowledge</p>
              <h2>Ideas para comprender la nueva infraestructura del deporte.</h2>
            </div>
            <p>
              Una biblioteca para explicar cómo se prepara una decisión, cómo
              funcionan los protocolos y por qué el conocimiento debe tratarse
              como un activo organizativo.
            </p>
          </div>

          <div className={styles.knowledgeGrid}>
            {knowledge.map((item, index) => (
              <article className={styles.knowledgeCard} key={item}>
                <span>Idea {String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <a href="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva." target="_blank" rel="noopener noreferrer">Explorar ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.category}>
        <div className={styles.container}>
          <div className={styles.categoryCard}>
            <p className={styles.eyebrowLight}>Una nueva categoría</p>
            <h2>Sports Decision Infrastructure</h2>
            <p>
              No es un ERP. No es un BI. No es otro software vertical para
              cada área. Es la infraestructura que conecta información,
              evidencias, protocolos, responsabilidades y conocimiento
              alrededor de los procesos y decisiones deportivas.
            </p>
            <a href="https://wa.me/34690210722?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20mejor%20TalentDrop%20y%20solicitar%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20de%20infraestructura%20deportiva." target="_blank" rel="noopener noreferrer">Conocer la categoría →</a>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="contacto">
        <div className={styles.container}>
          <div className={styles.finalGrid}>
            <p className={styles.eyebrow}>Siguiente paso</p>
            <div>
              <h2>Descubramos cómo está preparada hoy vuestra infraestructura deportiva.</h2>
              <p>
                Empezamos con un diagnóstico breve para entender cómo circula hoy la información, qué protocolos existen y qué debe ordenarse primero.
              </p>
              <a
                className={styles.primaryButton}
                href="mailto:contacto@talentdrop.es"
              >
                Solicitar diagnóstico
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>T</span>
              <span>TalentDrop</span>
            </Link>
            <p>Sports Decision Infrastructure</p>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 TalentDrop</span>
            <div>
              <a href="#infraestructura-core">Core OS</a>
              <Link href="/deportistas">Deportistas</Link>
              <Link href="/clubes">Clubes</Link>
              <Link href="/federaciones">Federaciones</Link>
              <a href="mailto:contacto@talentdrop.es">contacto@talentdrop.es</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
