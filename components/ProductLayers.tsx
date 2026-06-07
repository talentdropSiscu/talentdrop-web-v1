const layers = [
  ["L1", "Talent Passport", "El registro deportivo digital del atleta."],
  ["L2", "Evidence Layer", "Convierte información dispersa en evidencia verificable."],
  ["L3", "Data Trust Layer", "Aporta trazabilidad, permisos, origen e integridad."],
  ["L4", "Readiness Layer", "Evalúa si existe información suficiente para decidir."],
  ["L5", "Certificate Layer", "Genera snapshots verificables del expediente."],
  ["L6", "Medical Desk", "Orientación médico-deportiva conectada al readiness."],
  ["L7", "Talent Radar", "Visibilidad estructurada cuando el perfil está preparado."],
];

export default function ProductLayers() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
          Product Layers
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Capas de producto sobre el Talent Passport.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(([level, title, text]) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-black text-blue-700">{level}</p>
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}