const passportCards = [
  ["Historial Deportivo", "Tu trayectoria documentada."],
  ["Vídeos y Evidencias", "Partidos, acciones, informes y pruebas."],
  ["Readiness", "Información suficiente para decidir."],
  ["Certificados", "Validaciones verificables."],
  ["Oportunidades", "Preparación para próximos pasos."],
  ["Control", "Tu información. Tu permiso. Tu carrera."],
];

export default function TalentPassport() {
  return (
    <section id="passport" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
          Talent Passport
        </p>

        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
          Tu carrera deportiva, organizada en un único lugar.
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Talent Passport te permite construir, proteger y activar tu información deportiva.
          Vídeos, informes, evaluaciones, certificados, historial deportivo y evidencias
          quedan organizados en una infraestructura preparada para clubes, instituciones y partners.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {passportCards.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}