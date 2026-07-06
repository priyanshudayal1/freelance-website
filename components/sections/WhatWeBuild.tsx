import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoverUnderline } from "@/components/workshop/HoverUnderline";
import { MarginNote } from "@/components/workshop/MarginNote";

// Grouped by the problem in front of you — not by the tech we like.
const groups = [
  {
    index: "A",
    title: "We build.",
    desc: "New things, made properly.",
    items: [
      "Products & platforms",
      "Web & mobile apps",
      "Internal tools & dashboards",
      "Intelligent systems — where they truly help",
      "Architecture & honest consulting",
    ],
  },
  {
    index: "B",
    title: "We improve.",
    desc: "Software you already have, made better.",
    items: [
      "Existing apps & websites",
      "Performance & accessibility",
      "Modernization & refactoring",
      "Continuous care & upkeep",
    ],
    hand: "our favorite part",
  },
  {
    index: "C",
    title: "We protect.",
    desc: "Quiet reliability, by design.",
    items: [
      "Security reviews & audits",
      "Cloud & infrastructure",
      "Monitoring & backups",
      "Hardening & recovery plans",
    ],
  },
];

export function WhatWeBuild() {
  return (
    <section id="build" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="02" label="Capabilities" note="No packages, no tiers" sheet="02/08" />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
              What we <HoverUnderline>build</HoverUnderline>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-graphite">
              Grouped by the problem in front of you — not by the technology
              we happen to like.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="hidden lg:col-span-3 lg:col-start-10 lg:flex lg:items-end lg:justify-end">
            <MarginNote rotate={1}>
              Rev 12 — regrouped by problem, not by tech. seven cards felt
              like a brochure.
            </MarginNote>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {groups.map((group, i) => (
            <Reveal
              key={group.index}
              delay={i * 0.1}
              // The middle column sits lower on purpose.
              className={i === 1 ? "md:mt-12" : undefined}
            >
              <div className="border-t border-ink/30 pt-6">
                <p className="font-mono text-[11px] tracking-[0.15em] text-copper">
                  {group.index}.
                </p>
                <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  {group.desc}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-graphite">
                      <span aria-hidden="true" className="text-fog">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {group.hand && (
                  <p className="mt-7 -rotate-2 font-hand text-2xl text-copper">
                    ({group.hand})
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
