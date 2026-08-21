import Link from "next/link";
import styles from "./home.module.css";

const capabilities = [
  {
    number: "01",
    title: "Diagnostic Engine",
    text: "Entiende cómo funciona realmente la organización, contrasta su situación con protocolos operativos y convierte el diagnóstico en prioridades accionables.",
  },
  {
    number: "02",
    title: "System Capture + Voice to Record",
    text: "Conecta información procedente de sistemas y documentos, y transforma conocimiento humano en registros estructurados, contextualizados y trazables.",
  },
  {
    number: "03",
    title: "Data & Knowledge Infrastructure",
    text: "Relaciona información, evidencias, personas y contexto para que cada área pueda trabajar sobre una realidad común.",
  },
  {
    number: "04",
    title: "Protocol Library + Data Trust",
    text: "Define qué información necesita cada proceso, quién debe aportarla y con qué origen, permisos, actualización y trazabilidad.",
  },
  {
    number: "05",
    title: "Decision Infrastructure",
    text: "Hace visible qué está disponible, qué falta y quién debe actuar antes de que una decisión deportiva llegue a la mesa.",
  },
];

const audiences = [
  {
    eyebrow: "Clubes",
    title: "Conectamos las áreas alrededor de los procesos y decisiones deportivas.",
    text: "Diagnóstico, protocolos, continuidad de información, Control Room y Decision Infrastructure sobre una capa común.",
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
  "Cómo funcionan los protocolos deportivos",
  "Del conocimiento individual al conocimiento organizativo",
  "Cómo preparar una decisión sin sustituir el criterio profesional",
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
            <a href="#core-os">Core OS</a>
            <Link href="/deportistas">Deportistas</Link>
            <Link href="/clubes">Clubes</Link>
            <Link href="/federaciones">Federaciones</Link>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#contacto" className={styles.headerCta}>
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
                <a href="#diagnostico" className={styles.primaryButton}>
                  Solicitar diagnóstico
                  <span aria-hidden="true">↘</span>
                </a>
                <a href="#como-funciona" className={styles.secondaryButton}>
                  Ver cómo funciona
                </a>
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
                  ["03", "Brechas", "El sistema identifica qué falta"],
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
                TalentDrop no decide por la organización. Hace que esté
                preparada para decidir.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.thesis} id="tesis">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>La tesis de TalentDrop</p>
            <h2>El problema no es la falta de datos.</h2>
          </div>

          <div className={styles.thesisGrid}>
            <div className={styles.thesisStatement}>
              <p>
                El reto es convertir información distribuida en capacidad
                permanente para operar y decidir.
              </p>
            </div>
            <div className={styles.thesisBody}>
              <p>
                Una organización deportiva genera continuamente informes,
                vídeos, datos, documentos, observaciones y conversaciones.
                Cada herramienta puede cumplir correctamente su función y, aun
                así, la información seguir desconectada del proceso que la
                necesita.
              </p>
              <p>
                Cuando una decisión requiere a Dirección Deportiva, Scouting,
                Performance, Área Médica, Secretaría Técnica o Finanzas, alguien
                termina reconstruyendo manualmente el contexto.
              </p>
              <p className={styles.emphasis}>
                TalentDrop construye la infraestructura que conecta ese
                conocimiento con los protocolos, responsabilidades y evidencias
                necesarias para actuar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection} id="como-funciona">
        <div className={styles.container}>
          <div className={styles.darkIntro}>
            <p className={styles.eyebrowLight}>Cómo trabaja TalentDrop</p>
            <h2>Una decisión no empieza cuando hay que decidir.</h2>
            <p>
              Empieza mucho antes: cuando la información está disponible, los
              protocolos son claros y cada área sabe qué debe aportar.
            </p>
          </div>

          <div className={styles.decisionFlow}>
            {[
              ["Descubre", "Cómo funciona realmente la organización"],
              ["Organiza", "Sistemas, documentos y conocimiento humano"],
              ["Contrasta", "Realidad frente a protocolos y criterios"],
              ["Coordina", "Pendientes, responsables y evidencias"],
              ["Prepara", "El contexto necesario para decidir"],
            ].map(([title, text], index) => (
              <div className={styles.decisionItem} key={title}>
                <span className={styles.decisionIndex}>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <p className={styles.darkClosing}>
            La IA puede ayudar a organizar, relacionar y detectar. El criterio
            deportivo sigue perteneciendo a las personas.
          </p>
        </div>
      </section>

      <section className={styles.capabilities} id="core-os">
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.eyebrow}>Core OS</p>
              <h2>La capa que conecta fuentes, personas, protocolos y decisiones.</h2>
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
        </div>
      </section>

      <section className={styles.journey} id="diagnostico">
        <div className={styles.container}>
          <div className={styles.journeyCard}>
            <p className={styles.eyebrow}>Diagnostic Engine</p>
            <h2>Antes de implantar, entendemos cómo funciona realmente la organización.</h2>
            <div className={styles.journeyTrack}>
              {[
                "20 preguntas",
                "8 áreas",
                "14 protocolos",
                "70 criterios",
                "Prioridades accionables",
                "Infraestructura propuesta",
              ].map((item, index) => (
                <div className={styles.journeyStep} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
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

      <section className={styles.audiences} id="para-quien">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Para quién construimos</p>
            <h2>Una infraestructura. Distintos contextos deportivos.</h2>
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
                <a href="#contacto">Próximamente ↗</a>
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
            <a href="#contacto">Conocer la categoría →</a>
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
                El primer paso no es implantar software. Es entender cómo
                circula la información, qué exigen los protocolos y dónde
                existen brechas, dependencias o fricciones.
              </p>
              <a
                className={styles.primaryButton}
                href="mailto:contacto@talentdrop.es?subject=Solicitar%20diagn%C3%B3stico%20TalentDrop"
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
              <a href="#core-os">Core OS</a>
              <Link href="/deportistas">Deportistas</Link>
              <Link href="/clubes">Clubes</Link>
              <Link href="/federaciones">Federaciones</Link>
              <a href="mailto:contacto@talentdrop.es">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
