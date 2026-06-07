const flow = [
  ["01", "Talent", "El atleta. El origen."],
  ["02", "Passport", "Registro deportivo digital."],
  ["03", "Evidence", "Datos verificados."],
  ["04", "Readiness", "Estado y disponibilidad."],
  ["05", "Certificate", "Validación firmada."],
  ["06", "Decision", "Decisión trazable."],
];

export default function Architecture() {
  return (
    <section id="architecture" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-blue-300">
          Architecture of Decision
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          De talento a decisión, sobre una sola infraestructura.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {flow.map(([num, title, text]) => (
            <article
              key={num}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-black text-blue-300">{num}</p>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}