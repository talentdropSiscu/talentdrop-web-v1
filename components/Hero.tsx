const flow = [
  ["01", "Talent", "El atleta. El origen."],
  ["02", "Passport", "Registro deportivo digital."],
  ["03", "Evidence", "Datos verificados."],
  ["04", "Readiness", "Estado y disponibilidad."],
  ["05", "Certificate", "Validación firmada."],
  ["06", "Decision", "Decisión trazable."],
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
      <div>
        <p className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          Sports Decision Infrastructure
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 md:text-7xl">
          Tu carrera deportiva genera información. Tu{" "}
          <span className="text-blue-700">Talent Passport</span> la convierte
          en evidencia, readiness y decisiones.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
          TalentDrop ayuda a deportistas a construir, proteger y activar su
          carrera deportiva mediante un Talent Passport verificable. Clubes,
          instituciones y partners consumen esa misma infraestructura para
          tomar decisiones más trazables.
        </p>

        <p className="mt-5 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-base font-semibold text-slate-700">
          TalentDrop es una Sports Decision Infrastructure construida sobre
          un Talent Passport propiedad del deportista.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white"
            href="#passport"
          >
            Activar Talent Passport
          </a>

          <a
            className="rounded-full border border-slate-300 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-slate-900"
            href="#clubs"
          >
            Solicitar Club Operational Deployment
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="mb-6 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
          Cómo fluye la información
        </p>

        <div className="space-y-3">
          {flow.map(([num, title, text]) => (
            <div
              key={num}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
                {num}
              </div>

              <div>
                <p className="font-black text-slate-950">{title}</p>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}