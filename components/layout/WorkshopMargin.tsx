"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Crosshair } from "@/components/workshop/Crosshair";

/**
 * The workshop margin: a thin rail on the left of the page, like the
 * ruled margin of an engineer's notebook. It tracks where you are in
 * the document and carries the one living element — the workshop is
 * never closed, only between revisions.
 */
const SECTIONS = [
  { id: "hero", index: "00", label: "Cover" },
  { id: "philosophy", index: "01", label: "Foundations" },
  { id: "build", index: "02", label: "Capabilities" },
  { id: "process", index: "03", label: "Method" },
  { id: "principles", index: "04", label: "Beliefs" },
  { id: "evidence", index: "05", label: "Verified" },
  { id: "archive", index: "06", label: "Records" },
  { id: "careers", index: "07", label: "People" },
  { id: "contact", index: "08", label: "Invitation" },
];

export function WorkshopMargin() {
  const [active, setActive] = useState(SECTIONS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = SECTIONS.find((s) => s.id === entry.target.id);
            if (match) setActive(match);
          }
        }
      },
      // A band around the middle of the viewport decides the section.
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="fixed inset-y-0 left-0 z-30 hidden w-12 flex-col items-center justify-between border-r border-line/70 bg-paper/80 py-6 xl:flex"
    >
      <Crosshair className="shrink-0" />

      <AnimatePresence mode="wait">
        <motion.span
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-fog [writing-mode:vertical-rl]"
        >
          {active.index} · {active.label}
        </motion.span>
      </AnimatePresence>

      {/* The living element. */}
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span className="rotate-180 font-mono text-[9px] uppercase tracking-[0.25em] text-fog/80 [writing-mode:vertical-rl]">
          Refining · Rev 28
        </span>
        <span className="h-1.5 w-1.5 animate-pulse bg-copper" />
      </div>
    </aside>
  );
}
