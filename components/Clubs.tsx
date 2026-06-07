const steps = [
  "Roster",
  "Evidence",
  "Readiness",
  "Decision Log",
  "Dashboard",
  "Club Decision Report",
];

export default function Clubs() {
  return (
    <section id="clubs" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            TalentDrop for Clubs
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Club Operational Deployment.
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Los clubes despliegan TalentDrop sobre su operación. La misma
            infraestructura que nace en el atleta se convierte en un flujo
            operativo que termina en una decisión documentada.
          </p>

          <a
            className="mt-9 inline-flex rounded-full bg-blue-700 px-7 py-4 text-sm font-black uppercase tracking-wide text-white"
            href="mailto:contacto@talentdrop.es"
          >
            Solicitar diagnóstico operativo
          </a>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="mb-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 last:mb-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                {index + 1}
              </div>
              <p className="font-black">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}