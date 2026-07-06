const nav = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#build", label: "What we build" },
  { href: "#process", label: "How we work" },
  { href: "#principles", label: "Principles" },
  { href: "#archive", label: "Archive" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      {/* One coffee ring. Somebody worked late. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="pointer-events-none absolute right-10 top-10 h-24 w-24 text-ink opacity-[0.05]"
      >
        <circle
          cx="60"
          cy="60"
          r="44"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeDasharray="180 40"
          strokeLinecap="round"
          transform="rotate(40 60 60)"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="240 60"
          transform="rotate(-60 60 60)"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-tight">
              Clarix<span className="text-copper">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-graphite">
              A digital workshop. Software designed, built, secured, and
              continuously improved.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-graphite transition-colors duration-200 hover:text-copper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
              Write to us
            </p>
            <a
              href="mailto:hello@clarixit.in"
              className="mt-2 inline-block text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-copper"
            >
              hello@clarixit.in
            </a>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
              Workshop status
            </p>
            <p className="mt-2 font-display text-lg leading-snug tracking-tight">
              Building. Refining. Learning
              <span className="text-copper">.</span>
            </p>
          </div>
        </div>

        {/* The bench light goes off, the work continues tomorrow. */}
        <p className="mt-16 -rotate-1 font-hand text-2xl text-graphite/80">
          workshop closed for today — we’ll keep building tomorrow.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clarix · clarixit.in · v1.0.7</p>
          <p className="hidden lg:block">Set in Instrument Serif & Geist</p>
          <p>
            Built carefully. Refined continuously
            <span className="text-copper">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
