const consumers = [
  [
    "B2C · Deportistas",
    "Origen",
    "Construyen, protegen y controlan su Talent Passport.",
  ],
  [
    "B2B · Clubes",
    "Decisión operativa",
    "Consumen evidencia, readiness y certificados para decidir mejor.",
  ],
  [
    "B2G · Instituciones",
    "Validación y reporting",
    "Acceden a información validada para programas deportivos y acreditación.",
  ],
  [
    "Partners",
    "Servicios especializados",
    "Aportan medicina, formación, tecnología y conocimiento al ecosistema.",
  ],
];

export default function Consumers() {
  return (
    <section id="consumers" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
          One Passport. Multiple Consumers.
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Un único Talent Passport. Múltiples formas de consumir la misma
          infraestructura.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {consumers.map(([title, role, text]) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <p className="text-sm font-black uppercase tracking-[0.14em] text-blue-700">
                {role}
              </p>

              <h3 className="mt-4 text-xl font-black">{title}</h3>

              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}