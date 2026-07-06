"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Easter egg for engineers: the Konami code toggles debug mode —
 * the invisible construction grid becomes visible and every section
 * shows its outline. The site is drawn on graph paper; now you can see it.
 */
const SEQUENCE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

export function DebugMode() {
  const [on, setOn] = useState(false);
  const progress = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      progress.current = key === SEQUENCE[progress.current] ? progress.current + 1 : key === SEQUENCE[0] ? 1 : 0;
      if (progress.current === SEQUENCE.length) {
        progress.current = 0;
        setOn((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("debug", on);
    return () => document.documentElement.classList.remove("debug");
  }, [on]);

  if (!on) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none fixed inset-0 z-[85]"
      />
      <p className="fixed bottom-4 right-4 z-[90] border border-copper/40 bg-paper px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-copper">
        Debug mode — grid 32px · same code to exit
      </p>
    </>
  );
}
