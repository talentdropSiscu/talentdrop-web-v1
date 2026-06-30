import Link from "next/link";
import { CTA, CoreLayers, Flow, PageShell, SplitSection } from "./_components/Site";

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/img/home-hero.jpg')" }} />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Data · Evidence · Decisions</p>
          <h1>Más evidencia. Mejores decisiones.</h1>
          <p className="hero-text">
            Infraestructura deportiva para deportistas, clubes y federaciones que transforma información dispersa en evidencia verificable, contexto relevante y decisiones con mayor confianza.
          </p>
        </div>
        <Flow />
      </section>

      <section className="section">
        <div className="intro">
          <div>
            <p className="eyebrow">El problema</p>
            <h2>Demasiada información. Poca claridad.</h2>
          </div>
          <div>
            <p>
              En el deporte hay más datos, vídeos, informes y observaciones que nunca. El reto ya no es tener más información. El reto es entender qué significa, qué evidencia la sostiene y cómo ayuda a decidir.
            </p>
            <div className="chips">
              {['Informes técnicos','Vídeos','Observaciones','Hojas de cálculo','Datos físicos','Historial deportivo'].map((item) => <span className="chip" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="De información a decisión">
        <div className="big-words">
          {[
            ['01','Información.','Ordenar lo que existe.'],
            ['02','Evidencia.','Conectar cada dato con su soporte.'],
            ['03','Contexto.','Entender el estado y la utilidad.'],
            ['04','Decisión.','Actuar con mayor confianza.'],
          ].map(([n,t,d]) => <div className="big-word" key={t}><small>{n}</small><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section">
        <div className="cards3">
          <Link href="/deportistas" className="audience-card" style={{ ['--bg-img' as string]: "url('/img/athletes-hero.jpg')" }}>
            <div className="audience-copy"><p className="eyebrow">Deportistas</p><h3>Tu trayectoria. En orden.</h3><p>Centraliza información, conserva evidencias y comparte tu perfil cuando llegue una oportunidad.</p><span className="text-link">Ver deportistas →</span></div>
          </Link>
          <Link href="/clubes" className="audience-card" style={{ ['--bg-img' as string]: "url('/img/product-system.jpg')" }}>
            <div className="audience-copy"><p className="eyebrow">Clubes</p><h3>Menos dispersión. Más continuidad.</h3><p>Ordena roster, evidencia, contexto y decisiones dentro de una misma infraestructura operativa.</p><span className="text-link">Ver clubes →</span></div>
          </Link>
          <Link href="/federaciones" className="audience-card" style={{ ['--bg-img' as string]: "url('/img/institutions-program.jpg')" }}>
            <div className="audience-copy"><p className="eyebrow">Federaciones</p><h3>Digitalizar talento con gobernanza.</h3><p>Una base común para clubes, programas, territorios y seguimiento deportivo institucional.</p><span className="text-link">Ver federaciones →</span></div>
          </Link>
        </div>
      </section>

      <section className="section" id="core-os">
        <div className="intro">
          <div>
            <p className="eyebrow">TalentDrop Core OS</p>
            <h2>Cinco capas. Una única infraestructura.</h2>
          </div>
          <div>
            <p>
              TalentDrop no añade más ruido. Ordena la información deportiva, conecta evidencias, protege el dato, aporta contexto y permite documentar decisiones con mayor confianza.
            </p>
            <div className="button-row"><Link className="btn secondary" href="/core-os">Descubrir Core OS</Link></div>
          </div>
        </div>
        <div className="section-inner"><CoreLayers /></div>
      </section>

      <SplitSection
        eyebrow="Producto"
        title="El Passport no es un perfil. Es una base de evidencia."
        text="El deportista puede ordenar su trayectoria, guardar evidencias relevantes y preparar información útil para clubes, academias, especialistas o programas deportivos."
        image="/img/product-system.jpg"
      />

      <section className="section">
        <div className="quote">
          <h2>El deporte necesita ir más allá de los datos.</h2>
          <p>
            Más información no garantiza mejores decisiones. TalentDrop ayuda a transformar información dispersa en evidencia verificable, contexto relevante y decisiones con mayor confianza.
          </p>
        </div>
      </section>

      <SplitSection
        eyebrow="Gobernanza"
        title="Cuando el contexto médico-deportivo también importa."
        text="La capa Sports Medicine Governance permite incorporar criterio médico y de rendimiento bajo protocolos, sin convertir TalentDrop en un servicio de diagnóstico médico."
        image="/img/labs-medical.jpg"
        reverse
      />

      <CTA />
    </PageShell>
  );
}
