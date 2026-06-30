import Link from "next/link";

export const CONTACT_EMAIL = "contacto@talentdrop.es";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="TalentDrop">
      <span className="brand-mark">TD</span>
      <span className="brand-word"><strong>TALENT</strong>DROP</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="nav" aria-label="Navegación principal">
        <Link href="/core-os">Core OS</Link>
        <Link href="/deportistas">Deportistas</Link>
        <Link href="/clubes">Clubes</Link>
        <Link href="/federaciones">Federaciones</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>Contacto</a>
      </nav>
      <a className="nav-action" href={`mailto:${CONTACT_EMAIL}`}>Solicitar demo <span>→</span></a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">Infraestructura deportiva para tomar decisiones con más evidencia.</p>
        </div>
        <div className="footer-links">
          <Link href="/core-os">Core OS</Link>
          <Link href="/deportistas">Deportistas</Link>
          <Link href="/clubes">Clubes</Link>
          <Link href="/federaciones">Federaciones</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
      <p className="legal">© 2026 TalentDrop. TalentDrop no garantiza fichajes, oportunidades deportivas, rendimiento futuro ni diagnóstico médico. Su finalidad es estructurar información, documentar evidencia y reducir incertidumbre en procesos de decisión deportiva.</p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function ButtonRow({ secondaryHref = "/core-os", secondary = "Ver Core OS", primary = "Solicitar demo" }: { secondaryHref?: string; secondary?: string; primary?: string }) {
  return (
    <div className="button-row">
      <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>{primary}</a>
      <Link className="btn btn-secondary" href={secondaryHref}>{secondary}</Link>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/img/home-hero.jpg')" }} />
      <div className="hero-gradient" />
      <div className="hero-inner">
        <p className="eyebrow">Data · Evidence · Decisions</p>
        <h1>Mejores decisiones.<br />Mayor impacto.</h1>
        <p className="hero-lead">Infraestructura deportiva para deportistas, clubes y federaciones que transforma información dispersa en evidencia verificable, contexto relevante y decisiones con mayor confianza.</p>
        <ButtonRow />
      </div>
    </section>
  );
}

export function FlowStrip() {
  const items = [
    ["01", "Información", "Ordenar lo que existe."],
    ["02", "Evidencia", "Conectar cada dato con su soporte."],
    ["03", "Contexto", "Entender el estado y la utilidad."],
    ["04", "Decisión", "Actuar con mayor confianza."],
  ];
  return (
    <section className="flow-strip" aria-label="Información, evidencia, contexto y decisión">
      {items.map(([n, title, desc]) => (
        <div className="flow-item" key={title}>
          <span>{n}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </section>
  );
}

export function ProductSection() {
  return (
    <section className="product-section" id="passport">
      <div className="product-copy">
        <p className="eyebrow">Producto</p>
        <h2>El Passport no es un perfil. Es una base de evidencia.</h2>
        <p>El deportista puede ordenar su trayectoria, guardar evidencias relevantes y preparar información útil para clubes, academias, especialistas o programas deportivos.</p>
        <Link className="text-link" href="/deportistas">Saber más sobre el Passport <span>→</span></Link>
      </div>
      <div className="product-visual">
        <img src="/img/athlete-passport-device.jpg" alt="TalentDrop Athlete Passport" />
      </div>
    </section>
  );
}

export function AudienceTiles() {
  const tiles = [
    {
      kicker: "Deportistas",
      title: "Tu trayectoria. En orden.",
      text: "Centraliza información, conserva evidencias y comparte lo necesario cuando llegue una oportunidad.",
      href: "/deportistas",
      cta: "Solicitar información",
      image: "/img/athlete-passport.jpg",
    },
    {
      kicker: "Clubes",
      title: "Menos dispersión. Más continuidad.",
      text: "Una forma más clara de ordenar información deportiva, documentar decisiones y reducir incertidumbre operativa.",
      href: "/clubes",
      cta: "Solicitar demo",
      image: "/img/product-system.jpg",
    },
    {
      kicker: "Federaciones",
      title: "Digitalizar talento con gobernanza.",
      text: "Infraestructura para ayudar a clubes y territorios a trabajar con mayor trazabilidad, homogeneidad y continuidad.",
      href: "/federaciones",
      cta: "Solicitar información",
      image: "/img/institutions-program.jpg",
    },
  ];
  return (
    <section className="audience-tiles">
      {tiles.map((tile) => (
        <Link href={tile.href} className="audience-tile" key={tile.title}>
          <img src={tile.image} alt="" />
          <div className="tile-overlay" />
          <div className="tile-content">
            <p className="eyebrow">{tile.kicker}</p>
            <h2>{tile.title}</h2>
            <p>{tile.text}</p>
            <span>{tile.cta}</span>
          </div>
        </Link>
      ))}
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="vision" id="quienes-somos">
      <div>
        <p className="eyebrow">Visión</p>
        <h2>El deporte necesita ir más allá de los datos.</h2>
      </div>
      <div>
        <p>TalentDrop nace con una idea sencilla: las decisiones deportivas no deberían depender únicamente de más datos, sino de una mejor comprensión de la información disponible.</p>
        <p>Por eso ayudamos a transformar información dispersa en evidencia verificable, contexto relevante y decisiones con mayor confianza.</p>
      </div>
    </section>
  );
}

export function CoreOSPreview() {
  const layers = [
    ["Talent Passport", "Identidad deportiva estructurada y portable."],
    ["Evidence Layer", "Cada dato conectado con su origen."],
    ["Data Trust Layer", "Protección, trazabilidad y gobierno del dato."],
    ["Decision Layer", "Contexto e inteligencia para apoyar decisiones."],
    ["Sports Medicine Governance", "Criterio médico y de rendimiento bajo protocolo."],
  ];
  return (
    <section className="core-preview" id="core-os">
      <div className="core-copy">
        <p className="eyebrow">Core OS</p>
        <h2>Nuestra infraestructura para mejores decisiones.</h2>
        <p>Un sistema modular e integrado que convierte información dispersa en decisiones deportivas con más evidencia.</p>
        <Link className="text-link" href="/core-os">Descubrir Core OS <span>→</span></Link>
      </div>
      <div className="layers-line">
        {layers.map(([title, desc], i) => (
          <div className="layer-node" key={title}>
            <div className="layer-icon">{String(i + 1).padStart(2, "0")}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <h2>Hablemos.</h2>
      <p>Cuéntanos tu proyecto y vemos cómo TalentDrop puede ayudarte a ordenar información, evidencia y decisiones.</p>
      <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>contacto@talentdrop.es</a>
    </section>
  );
}

export function LandingHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="sub-hero">
      <div className="sub-hero-image"><img src={image} alt="" /></div>
      <div className="sub-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <ButtonRow secondaryHref="/core-os" secondary="Ver Core OS" />
      </div>
    </section>
  );
}

export function SplitSection({ eyebrow, title, text, image, reverse=false }: { eyebrow: string; title: string; text: string; image: string; reverse?: boolean }) {
  return (
    <section className={`split ${reverse ? "reverse" : ""}`}>
      <div className="split-img"><img src={image} alt="" /></div>
      <div className="split-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: [string, string][] }) {
  return (
    <section className="features-clean">
      {items.map(([title, text]) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}
