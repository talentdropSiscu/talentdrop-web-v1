import Link from "next/link";

export const CONTACT_EMAIL = "contacto@talentdrop.es";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="TalentDrop Home">
        <img src="/img/talentdrop-logo.png" alt="TalentDrop" />
      </Link>
      <nav className="nav">
        <Link href="/core-os">Core OS</Link>
        <Link href="/deportistas">Deportistas</Link>
        <Link href="/clubes">Clubes</Link>
        <Link href="/federaciones">Federaciones</Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="nav-cta">Contacto</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="/img/talentdrop-logo.png" alt="TalentDrop" className="footer-logo" />
          <p>Infraestructura deportiva para tomar decisiones con más evidencia.</p>
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

export function Hero({ eyebrow, title, text, image, children }: { eyebrow: string; title: string; text: string; image: string; children?: React.ReactNode }) {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url('${image}')` }} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function ButtonRow({ primary = "Solicitar demo", secondary = "Ver Core OS" }: { primary?: string; secondary?: string }) {
  return (
    <div className="button-row">
      <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>{primary}</a>
      <Link className="btn secondary" href="/core-os">{secondary}</Link>
    </div>
  );
}

export function Flow() {
  const items = ["Información", "Evidencia", "Contexto", "Decisión"];
  return (
    <div className="flow">
      {items.map((item, i) => (
        <div className="flow-item" key={item}>
          <span>0{i + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

export function SplitSection({ eyebrow, title, text, image, reverse = false, children }: { eyebrow: string; title: string; text: string; image: string; reverse?: boolean; children?: React.ReactNode }) {
  return (
    <section className={`split ${reverse ? "reverse" : ""}`}>
      <div className="split-image" style={{ backgroundImage: `url('${image}')` }} />
      <div className="split-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

export function CoreLayers() {
  const layers = [
    ["01", "Talent Passport", "Identidad deportiva estructurada y portable."],
    ["02", "Evidence Layer", "Cada dato conectado con su origen y soporte."],
    ["03", "Data Trust Layer", "Protección, trazabilidad y gobierno del dato."],
    ["04", "Decision Intelligence", "Contexto útil para apoyar decisiones."],
    ["05", "Sports Medicine Governance", "Criterio médico-deportivo bajo protocolo."],
  ];
  return (
    <div className="layers">
      {layers.map(([num, title, text]) => (
        <div className="layer-card" key={title}>
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export function CTA() {
  return (
    <section className="cta">
      <p className="eyebrow">TalentDrop</p>
      <h2>Hablemos de decisiones deportivas con más evidencia.</h2>
      <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </section>
  );
}
