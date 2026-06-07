export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-700" />
          <span className="text-xl font-black tracking-tight">
            TalentDrop
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#passport">Talent Passport</a>
          <a href="#architecture">Architecture</a>
          <a href="#consumers">Quién</a>
          <a href="#clubs">Clubs</a>
          <a href="#investors">Investors</a>
        </nav>

        <a
          href="#passport"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
        >
          Activar Talent Passport
        </a>
      </div>
    </header>
  );
}