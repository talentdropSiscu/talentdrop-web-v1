const impactCards = [
  ["Organización", "Toda tu información deportiva en un único lugar."],
  ["Continuidad", "Tu historial no desaparece cuando cambias de equipo, categoría o etapa deportiva."],
  ["Confianza", "Evidencia verificable preparada para clubes, instituciones y partners."],
  ["Preparación", "Tu perfil siempre listo para la siguiente oportunidad deportiva."],
];

export default function PassportImpact() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-5xl">
          ¿Qué cambia cuando activas Talent Passport?
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Talent Passport no es solo un lugar donde guardar información deportiva.
          Es una infraestructura diseñada para ayudarte a construir, proteger y activar
          tu carrera deportiva a lo largo del tiempo.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {impactCards.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-3xl font-black tracking-[-0.04em] text-blue-700">
          Tu información. Tu evolución. Tu carrera.
        </p>
      </div>
    </section>
  );
}