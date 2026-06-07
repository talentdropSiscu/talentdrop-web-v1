export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
        <div>
          <p className="text-xl font-black">TalentDrop</p>
          <p className="mt-2 text-sm text-slate-500">
            Sports Decision Infrastructure. El atleta es el origen.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 TalentDrop. Talent → Passport → Evidence → Readiness →
          Certificate → Decision.
        </p>
      </div>
    </footer>
  );
}