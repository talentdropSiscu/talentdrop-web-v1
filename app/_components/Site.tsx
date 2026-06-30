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
      <Link href="/" className="brand brand-text" aria-label="TalentDrop Home">
        <span className="brand-mark">T</span>
        <span className="brand-name"><strong>Talent</strong>Drop</span>
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
          <div className="footer-brand brand-text">
            <span className="brand-mark">T</span>
            <span className="brand-name"><strong>Talent</strong>Drop</span>
          </div>
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

function FlowIcon({ type }: { type: string }) {
  if (type === "info") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (type === "evidence") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="5" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.7 10.7 15.3 6.3" />
        <path d="M8.7 13.3 15.3 17.7" />
      </svg>
    );
  }

  if (type === "context") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 16v-5" />
        <path d="M12 16V8" />
        <path d="M17 16v-8" />
        <path d="m8 8 3-3 3 3 4-4" />
        <path d="M18 4h-3" />
        <path d="M18 4v3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m16.5 7.5 3-3" />
      <path d="M19.5 4.5h-3" />
      <path d="M19.5 4.5v3" />
    </svg>
  );
}

export function Flow() {
  const items = [
    { num: "01", title: "Información", desc: "Ordenar lo que existe.", icon: "info" },
    { num: "02", title: "Evidencia", desc: "Conectar cada dato con su soporte.", icon: "evidence" },
    { num: "03", title: "Contexto", desc: "Entender el estado y la utilidad.", icon: "context" },
    { num: "04", title: "Decisión", desc: "Actuar con mayor confianza.", icon: "decision" },
  ];
  return (
    <div className="flow">
      {items.map((item) => (
        <div className="flow-item" key={item.title}>
          <div className="flow-card-inner">
            <span className="flow-number">{item.num}</span>
            <div className="flow-icon"><FlowIcon type={item.icon} /></div>
            <strong>{item.title}</strong>
            <p>{item.desc}</p>
          </div>
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
