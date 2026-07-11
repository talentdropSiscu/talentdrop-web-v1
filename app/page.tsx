import Link from "next/link";
import styles from "./home.module.css";

const audiences = [
  {
    tag: "B2B",
    title: "Clubes",
    text: "Organizamos información, evidencias y responsabilidades alrededor de las decisiones deportivas.",
    items: ["Sistema de decisión", "Coordinación entre áreas", "ClubOS"],
    href: "/clubes",
  },
  {
    tag: "B2G",
    title: "Federaciones",
    text: "Conectamos clubes, deportistas y programas sobre una infraestructura federativa común.",
    items: ["Expediente Digital", "Convocatorias", "Tecnificación"],
    href: "/federaciones",
  },
  {
    tag: "B2G",
    title: "Administraciones",
    text: "Digitalizamos programas deportivos para mejorar seguimiento, trazabilidad e impacto.",
    items: ["Programas deportivos", "Indicadores", "Evidencias"],
    href: "/administraciones",
  },
  {
    tag: "B2C",
    title: "Deportistas",
    text: "Construimos una identidad deportiva digital verificable que evoluciona con cada trayectoria.",
    items: ["Talent Passport", "Historial", "Oportunidades"],
    href: "/deportistas",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Organizar",
    text: "Estructuramos la información que hoy vive repartida entre personas, documentos y sistemas.",
  },
  {
    number: "02",
    title: "Validar",
    text: "Aplicamos Data Trust para conocer el origen, la calidad y el nivel de confianza de cada evidencia.",
  },
  {
    number: "03",
    title: "Conectar",
    text: "Coordinamos personas, áreas y organizaciones sin obligarlas a sustituir sus herramientas actuales.",
  },
  {
    number: "04",
    title: "Decidir",
    text: "Preparamos cada decisión con la información, las evidencias y las personas adecuadas.",
  },
  {
    number: "05",
    title: "Aprender",
    text: "Convertimos cada decisión en conocimiento reutilizable para la organización y el ecosistema.",
  },
];

const pillars = [
  {
    title: "Sports Decision Infrastructure",
    text: "La capa operativa que organiza cómo fluye la información antes, durante y después de una decisión.",
  },
  {
    title: "Data Trust",
    text: "La capa de confianza que permite saber qué información está validada, cuál necesita revisión y cómo puede utilizarse.",
  },
  {
    title: "Digital Athlete Identity",
    text: "Una identidad deportiva digital verificable que conecta trayectoria, evidencias y oportunidades del deportista.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="TalentDrop, inicio">
          <span className={styles.brandMark} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>TalentDrop</span>
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#infraestructura">Infraestructura</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#ecosistema">Ecosistema</a>
          <a href="#metodologia">Metodología</a>
          <Link href="/contacto" className={styles.navCta}>Contacto</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.eyebrow}>
          SPORTS DECISION INFRASTRUCTURE · DATA TRUST
        </div>
        <h1>
          La infraestructura del dato para
          <span> mejores decisiones en el deporte.</span>
        </h1>
        <p className={styles.heroCopy}>
          TalentDrop organiza, valida y conecta información, evidencias y
          personas para ayudar a clubes, federaciones, administraciones y
          deportistas a decidir con mayor confianza.
        </p>
        <div className={styles.heroActions}>
          <Link href="/contacto" className={styles.primaryButton}>
            Solicitar una reunión
          </Link>
          <a href="#infraestructura" className={styles.secondaryButton}>
            Descubrir cómo funciona
          </a>
        </div>

        <div className={styles.flow} aria-label="Flujo de valor de TalentDrop">
          <div>
            <small>01</small>
            <strong>Información</strong>
            <span>Datos dispersos</span>
          </div>
          <b>→</b>
          <div>
            <small>02</small>
            <strong>Evidencias</strong>
            <span>Contexto verificable</span>
          </div>
          <b>→</b>
          <div className={styles.flowFocus}>
            <small>03</small>
            <strong>Data Trust</strong>
            <span>Confianza y trazabilidad</span>
          </div>
          <b>→</b>
          <div>
            <small>04</small>
            <strong>Decisiones</strong>
            <span>Mejor preparadas</span>
          </div>
        </div>
      </section>

      <section className={styles.problem}>
        <div className={styles.sectionIntro}>
          <span>EL RETO</span>
          <h2>Más datos no significan mejores decisiones.</h2>
        </div>
        <div className={styles.problemGrid}>
          <article>
            <span>01</span>
            <h3>Información fragmentada</h3>
            <p>
              Informes, vídeos, métricas, documentos y observaciones viven en
              lugares distintos y con niveles de confianza diferentes.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Criterios desconectados</h3>
            <p>
              Las áreas participan en decisiones comunes, pero no siempre
              comparten el mismo contexto, lenguaje o momento de trabajo.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Decisiones difíciles de reconstruir</h3>
            <p>
              Con frecuencia se conoce el resultado, pero no queda claro qué
              información se utilizó, qué faltaba y por qué se decidió.
            </p>
          </article>
        </div>
        <p className={styles.thesis}>
          El dato ya no es la ventaja competitiva. La ventaja está en cómo se
          gobierna, se conecta y se convierte en decisiones confiables.
        </p>
      </section>

      <section id="infraestructura" className={styles.infrastructure}>
        <div className={styles.sectionIntroLight}>
          <span>QUÉ CONSTRUIMOS</span>
          <h2>Una infraestructura común para todo el ecosistema deportivo.</h2>
          <p>
            TalentDrop no sustituye el software existente. Lo conecta
            alrededor de las decisiones que realmente importan.
          </p>
        </div>
        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <article key={pillar.title}>
              <span>0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capacidades" className={styles.capabilities}>
        <div className={styles.sectionIntro}>
          <span>CAPACIDADES</span>
          <h2>Del dato a la decisión. De la decisión al aprendizaje.</h2>
        </div>
        <div className={styles.capabilityList}>
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ecosistema" className={styles.audiences}>
        <div className={styles.sectionIntro}>
          <span>PARA QUIÉN</span>
          <h2>Una infraestructura. Cuatro recorridos.</h2>
          <p>
            Cada actor mantiene su misión, sus permisos y su contexto. La
            información se conecta únicamente cuando aporta valor a una
            decisión.
          </p>
        </div>
        <div className={styles.audienceGrid}>
          {audiences.map((audience) => (
            <Link href={audience.href} className={styles.audienceCard} key={audience.title}>
              <div>
                <small>{audience.tag}</small>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
              <ul>
                {audience.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section id="metodologia" className={styles.method}>
        <div className={styles.methodCopy}>
          <span>NUESTRA METODOLOGÍA</span>
          <h2>La tecnología se activa cuando la decisión está comprendida.</h2>
          <p>
            Empezamos analizando cómo decide realmente la organización. A
            partir de ahí diseñamos una infraestructura adaptada a su realidad,
            prioridades y capacidad de adopción.
          </p>
          <Link href="/contacto" className={styles.textLink}>
            Hablar sobre un diagnóstico <span>→</span>
          </Link>
        </div>
        <ol className={styles.methodSteps}>
          <li><span>01</span><div><strong>Comprender</strong><p>Decisiones, personas y contexto.</p></div></li>
          <li><span>02</span><div><strong>Diagnosticar</strong><p>Silos, bloqueos, evidencias y riesgos.</p></div></li>
          <li><span>03</span><div><strong>Diseñar</strong><p>Modelo operativo y arquitectura del dato.</p></div></li>
          <li><span>04</span><div><strong>Activar</strong><p>Procesos, permisos e infraestructura.</p></div></li>
          <li><span>05</span><div><strong>Evolucionar</strong><p>Aprendizaje, trazabilidad y mejora continua.</p></div></li>
        </ol>
      </section>

      <section className={styles.difference}>
        <div className={styles.sectionIntro}>
          <span>LO QUE NOS HACE DIFERENTES</span>
          <h2>No trabajamos para acumular más información.</h2>
          <p>Trabajamos para que la organización pueda confiar en ella y utilizarla mejor.</p>
        </div>
        <div className={styles.comparison}>
          <div className={styles.comparisonHead}>
            <span>OTRAS SOLUCIONES</span>
            <strong>TALENTDROP</strong>
          </div>
          <div><span>Almacenan datos</span><strong>Organiza confianza sobre el dato</strong></div>
          <div><span>Muestran indicadores</span><strong>Prepara decisiones</strong></div>
          <div><span>Digitalizan tareas</span><strong>Coordina personas, evidencias y procesos</strong></div>
          <div><span>Sustituyen herramientas</span><strong>Conecta el ecosistema existente</strong></div>
          <div><span>Registran resultados</span><strong>Construye trazabilidad y aprendizaje</strong></div>
        </div>
      </section>

      <section className={styles.knowledge}>
        <div>
          <span>KNOWLEDGE LIBRARY</span>
          <h2>El conocimiento operativo también forma parte de la infraestructura.</h2>
        </div>
        <p>
          TalentDrop estructura procesos, decisiones, evidencias, roles y
          criterios deportivos para convertir experiencia dispersa en una base
          de conocimiento viva, reutilizable y adaptable.
        </p>
        <div className={styles.knowledgeDomains}>
          <span>Dirección deportiva</span>
          <span>Scouting</span>
          <span>Cantera</span>
          <span>Performance</span>
          <span>Área médica</span>
          <span>Federaciones</span>
        </div>
      </section>

      <section className={styles.finalCta}>
        <span>SIGUIENTE PASO</span>
        <h2>Construyamos una forma más confiable de decidir en el deporte.</h2>
        <p>
          Empezamos comprendiendo cómo funciona hoy tu organización y qué
          decisiones necesitan una mejor infraestructura.
        </p>
        <Link href="/contacto" className={styles.primaryButton}>
          Solicitar una reunión
        </Link>
      </section>

      <footer className={styles.footer}>
        <div>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
            <span>TalentDrop</span>
          </Link>
          <p>La infraestructura del dato para mejores decisiones en el deporte.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/clubes">Clubes</Link>
          <Link href="/federaciones">Federaciones</Link>
          <Link href="/administraciones">Administraciones</Link>
          <Link href="/deportistas">Deportistas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div className={styles.footerMeta}>
          <a href="mailto:contacto@talentdrop.es">contacto@talentdrop.es</a>
          <span>© 2026 TalentDrop SportsTech</span>
        </div>
      </footer>
    </main>
  );
}
