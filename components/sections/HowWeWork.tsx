"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MethodSketch } from "@/components/workshop/MethodSketch";
import { StickyNote } from "@/components/workshop/StickyNote";

const steps = [
  {
    title: "Discover",
    body: "We listen first. What you need, what you already have, what’s actually broken.",
    phase: "listen before building.",
  },
  {
    title: "Understand",
    body: "We map the problem until we can explain it back to you in plain language.",
    phase: "map it till it’s obvious.",
  },
  {
    title: "Design",
    body: "Wireframes, architecture, and plans you can read without a glossary.",
    phase: "draw it before we build it.",
  },
  {
    title: "Build",
    body: "Short cycles. Working software early. No six-month silences.",
    phase: "small cycles, working software.",
  },
  {
    title: "Refine",
    body: "We test, measure, and polish until it feels right — not just “done”.",
    annotation: "our favorite step",
    phase: "nothing ships untested.",
  },
  {
    title: "Deliver",
    body: "Deployment, documentation, and a proper handover. Nothing held hostage.",
    phase: "hand it over clean.",
  },
  {
    title: "Continuously improve",
    body: "We stay. Software that is looked after simply lasts longer.",
    accent: true,
    phase: "never really done.",
  },
];

export function HowWeWork() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  // Track which step sits in the middle band of the viewport, so the
  // planning sheet on the left can report the current phase.
  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-step")));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  const current = steps[active];

  return (
    <section id="process" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="03" label="Method" note="The workshop journey" sheet="03/08" />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
                A workshop journey, not a sales pipeline.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-graphite">
                Every build follows the same discipline. You’ll always know
                where your project is, what we’re doing, and why.
              </p>
            </Reveal>

            {/* The planning sheet: faint blueprint behind, the one sticky
                note in front, reporting the phase you’re reading. */}
            <div className="relative mt-12 hidden min-h-[340px] lg:block">
              <MethodSketch className="absolute inset-0 opacity-[0.13]" />

              <Reveal delay={0.3} className="relative">
                <StickyNote>
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                    Now — 0{active + 1} · {current.title}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={active}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="block"
                    >
                      {current.phase}
                    </motion.span>
                  </AnimatePresence>
                </StickyNote>
              </Reveal>

              <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                Phase 0{active + 1} / 07
              </p>
            </div>
          </div>

          <ol ref={listRef} className="lg:col-span-6 lg:col-start-7">
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              const isActive = i === active;
              return (
                <li
                  key={step.title}
                  data-step={i}
                  className="relative grid grid-cols-[36px_1fr] gap-x-5 pb-10 last:pb-0 sm:gap-x-7"
                >
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-4.25 top-10 border-l border-dashed border-line"
                    />
                  )}
                  <Reveal delay={i * 0.05}>
                    <span
                      className={`flex h-9 w-9 items-center justify-center border bg-paper font-mono text-[11px] transition-colors duration-300 ${
                        isActive || step.accent
                          ? "border-copper text-copper"
                          : "border-line text-graphite"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </Reveal>
                  <Reveal delay={i * 0.05 + 0.05}>
                    <div className="pt-1.5">
                      <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-medium tracking-tight">
                        {step.title}
                        {step.annotation && (
                          <span className="-rotate-1 font-hand text-xl font-normal text-copper">
                            ← {step.annotation}
                          </span>
                        )}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-graphite">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
