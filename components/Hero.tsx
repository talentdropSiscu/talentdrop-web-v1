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
          TalentDrop es una Sports Decision Infrastructure construida sobre un
          Talent Passport propiedad del deportista.
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

      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
              Digital Talent Passport
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-950">
              Athlete Profile
            </h3>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
            ACTIVE
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Talent Passport</p>
            <p className="mt-1 font-black text-slate-950">Complete</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Evidence Layer</p>
            <p className="mt-1 font-black text-slate-950">
              24 verified evidences
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Readiness</p>
            <p className="mt-1 font-black text-blue-700">82 / 100</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Certificate</p>
            <p className="mt-1 font-black text-slate-950">Available</p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-sm text-slate-400">Decision Status</p>
            <p className="mt-1 text-xl font-black">Ready for Decision</p>
          </div>
        </div>
      </div>
    </section>
  );
}
