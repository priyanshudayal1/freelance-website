"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DraftClose, DraftMenu } from "@/components/workshop/icons";

const links = [
  { href: "#philosophy", index: "01", label: "Philosophy" },
  { href: "#build", index: "02", label: "What we build" },
  { href: "#process", index: "03", label: "How we work" },
  { href: "#archive", index: "06", label: "Archive" },
  { href: "#careers", index: "07", label: "Careers" },
];

// Hidden margin notes — unlocked by clicking the logo seven times.
const hiddenNotes = [
  "#003 — the first draft of this site had a gradient. we don’t talk about it.",
  "#019 — the copper color took four meetings.",
  "#027 — you found this by clicking seven times. that’s exactly the curiosity we hire for.",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);

  const handleLogoClick = () => {
    const next = clicks + 1;
    if (next >= 7) {
      setNotesOpen(true);
      setClicks(0);
    } else {
      setClicks(next);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#main"
          onClick={handleLogoClick}
          className="flex items-baseline gap-3"
        >
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Clarix<span className="text-copper">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:block">
            A digital workshop
          </span>
        </a>

        {notesOpen && (
          <div
            role="dialog"
            aria-label="Hidden margin notes"
            className="absolute left-6 top-full z-50 mt-2 w-80 border border-line bg-paper p-5 shadow-[4px_5px_0_rgba(33,31,26,0.05)]"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper">
                Margin notes — unlocked
              </p>
              <button
                type="button"
                aria-label="Close margin notes"
                onClick={() => setNotesOpen(false)}
                className="text-fog transition-colors hover:text-ink"
              >
                <DraftClose />
              </button>
            </div>
            <ul className="mt-3 space-y-2.5">
              {hiddenNotes.map((note) => (
                <li
                  key={note}
                  className="font-hand text-lg leading-snug text-graphite"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group text-sm text-graphite transition-colors duration-200 hover:text-copper"
            >
              <span className="mr-1.5 font-mono text-[9px] text-fog transition-colors duration-200 group-hover:text-copper">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
          <Button href="#contact">Start a project</Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <DraftClose /> : <DraftMenu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-[10px] text-fog">
                    {link.index}
                  </span>
                  <span className="font-display text-2xl">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-6 w-full" size="lg">
            Start a project
          </Button>
        </nav>
      )}
    </header>
  );
}
